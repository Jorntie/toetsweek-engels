// Woorden tellen en de grammatica-herkenning loslaten op de model-essays.
const TW = require("./laad")(); const E = TW.eng;
for (const es of E.ESSAYS) {
  const t = E.essayTekst(es);
  console.log("\n== " + es.titel + " · " + E.woorden(t).length + " woorden");
  console.log(t);
  for (const g of E.GRAM) { const m = E.zoekGram(g, t); console.log((m ? "✓ " : "✗ ") + g.naam + (m ? "  [" + m.stuk + "]" : "")); }
  const a = E.analyse(t); console.log("alinea's", a.alineas, "contr", a.contr, "kleinI", a.kleinI, "dung", a.dung.map(d => d[0]), "herhaal", a.herhaal, "link", a.link.map(l => l.id + ":" + l.n).join(" "));
}
for (const g of E.GRAM) { const m = E.zoekGram(g, g.vb); if (!m) console.log("VOORBEELD NIET HERKEND: " + g.id); }
