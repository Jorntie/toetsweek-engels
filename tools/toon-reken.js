#!/usr/bin/env node
// Toont alle getypte antwoorden (reken) van een data-bestand, met gen 40 keer uitgevoerd (unieke vragen).
// Gebruik: node tools/toon-reken.js data-2-grammar.js
const fs = require("fs"), path = require("path"), vm = require("vm");
const bestand = path.resolve(process.argv[2] || "data-2-grammar.js");
const hfst = [];
const R = { int: (a, b) => a + Math.floor(Math.random() * (b - a + 1)), kies: (l) => l[Math.floor(Math.random() * l.length)], rond: (x, d = 0) => +x.toFixed(d), nl: (x) => String(x) };
const ctx = { TW: { hoofdstuk: (h) => hfst.push(h) }, console, Math };
vm.createContext(ctx); vm.runInContext(fs.readFileSync(bestand, "utf8"), ctx);
const toon = (d) => {
  const a = Array.isArray(d.antwoord) ? d.antwoord : [d.antwoord];
  const kort = [...new Set(a.map((x) => String(x).replace(/’/g, "'").replace(/\.$/, "")))];
  console.log(`  Q: ${d.q}\n  A: ${kort.join("  |  ")}   (${a.length} varianten)`);
};
hfst.forEach((h) => h.onderdelen.forEach((o) => {
  console.log(`\n=== ${o.id} ${o.titel}`);
  (o.reken || []).forEach((r, i) => {
    console.log(`-- reken[${i}]${r.gen ? " (gen)" : ""}`);
    if (!r.gen) return toon(r);
    const gezien = new Set();
    for (let n = 0; n < 40; n++) { const d = r.gen(R); if (!gezien.has(d.q)) { gezien.add(d.q); toon(d); } }
  });
}));
