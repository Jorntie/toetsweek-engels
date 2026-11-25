#!/usr/bin/env node
// Toont alle reken-items van hoofdstuk 3 en 4 (vaste items en 40 keer de gen-uitvoer), om antwoorden naast de vraag na te lezen.
// Gebruik (vanuit toetsweek-engels): node tools/toon-reken-34.js [aantal]
const fs = require("fs"), path = require("path"), vm = require("vm");
const dir = path.join(__dirname, "..");
const N = Number(process.argv[2]) || 40;
const ctx = { console, Math, Date, JSON, Number, String, Array, Object, isFinite, isNaN, parseFloat, parseInt, setTimeout, clearTimeout, setInterval, clearInterval,
  document: { getElementById: () => null, documentElement: { style: { setProperty() {} } }, addEventListener() {}, querySelector: () => null, querySelectorAll: () => [] },
  localStorage: { getItem: () => null, setItem() {} }, location: { hash: "" }, addEventListener() {}, requestAnimationFrame() {} };
ctx.window = ctx; vm.createContext(ctx);
for (const s of ["core.js", "data-3-fouten.js", "data-4-vocab.js"]) vm.runInContext(fs.readFileSync(path.join(dir, s), "utf8"), ctx, { filename: s });
const S = ctx.TW._S;
const toon = (d) => `  V: ${d.q}\n  A: ${[].concat(d.antwoord).join("  |  ")}\n  S: ${(d.stappen || []).join(" / ")}${d.hint ? "\n  H: " + d.hint : ""}`;
S.hfst.filter((h) => ["fouten", "vocab"].includes(h.id)).forEach((h) => h.onderdelen.forEach((o) => {
  console.log(`\n===== ${o.id} ${o.titel} =====`);
  o.reken.forEach((r, i) => {
    if (typeof r.gen === "function") {
      console.log(`\n--- reken[${i}] gen (${N}x, unieke vragen) ---`);
      const gezien = new Set();
      for (let n = 0; n < N; n++) { const d = r.gen(ctx.TW.R); if (gezien.has(d.q)) continue; gezien.add(d.q); console.log(toon(d)); }
    } else { console.log(`\n--- reken[${i}] ---`); console.log(toon(r)); }
  });
}));
