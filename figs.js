// Figuren (inline SVG). TW.fig(naam, (quiz) => svg); bij quiz = true weglaten wat het antwoord verklapt.
(function () {
  "use strict";
  const svg = (h, label, body) => `<svg class="fig" viewBox="0 0 340 ${h}" role="img" aria-label="${label}">${body}</svg>`;
  const blok = (x, y, w, h, cls, r) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r || 10}" class="${cls}"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r || 10}" class="s"/>`;

  // Opbouw van het essay: vier blokken, hoogte = aandeel in het aantal woorden.
  TW.fig("opbouw", () => svg(250, "Opbouw van een for-and-against essay in vier alinea's",
    blok(20, 10, 300, 40, "vlak") + `<text x="34" y="27" class="b">Introduction</text><text x="34" y="42" class="k">hook · onderwerp · thesis statement</text><text x="306" y="35" text-anchor="end" class="b pa">15%</text>` +
    blok(20, 58, 300, 66, "vlak3") + `<text x="34" y="78" class="b">Body 1: pros</text><text x="34" y="94" class="k">topic sentence · 2 of 3 argumenten</text><text x="34" y="109" class="k">elk met voorbeeld en uitleg</text><text x="306" y="96" text-anchor="end" class="b pg">30-35%</text>` +
    blok(20, 132, 300, 66, "vlak2") + `<text x="34" y="152" class="b">Body 2: cons</text><text x="34" y="168" class="k">topic sentence · 2 of 3 argumenten</text><text x="34" y="183" class="k">elk met voorbeeld en uitleg</text><text x="306" y="170" text-anchor="end" class="b pr">30-35%</text>` +
    blok(20, 206, 300, 40, "vlak") + `<text x="34" y="223" class="b">Conclusion</text><text x="34" y="238" class="k">samenvatting · afweging · eigen mening</text><text x="306" y="231" text-anchor="end" class="b pa">20%</text>`));

  // PEEL als vier stappen.
  TW.fig("peel", () => {
    const st = [["P", "Point", "het argument", "vlak"], ["E", "Evidence", "voorbeeld of feit", "vlak3"], ["E", "Explain", "waarom telt dit?", "vlak3"], ["L", "Link", "terug naar stelling", "vlak"]];
    return svg(150, "PEEL: Point, Evidence, Explain, Link",
      st.map((s, i) => { const x = 8 + i * 83; return blok(x, 30, 75, 90, s[3]) + `<text x="${x + 37.5}" y="62" text-anchor="middle" class="g pa" style="font-size:24px">${s[0]}</text><text x="${x + 37.5}" y="84" text-anchor="middle" class="b">${s[1]}</text><text x="${x + 37.5}" y="102" text-anchor="middle" class="k" style="font-size:8.5px">${s[2]}</text>` + (i < 3 ? `<path d="M${x + 76} 75 l6 0 m-4 -4 l4 4 l-4 4" class="s"/>` : ""); }).join("") +
      `<text x="170" y="18" text-anchor="middle" class="k">topic sentence bovenaan, daarna per argument:</text><text x="170" y="140" text-anchor="middle" class="k">Firstly, ... · For example, ... · This means that ... · Therefore, ...</text>`);
  });

  // Tijdlijn: past simple tegenover present perfect.
  TW.fig("tijdlijn", (quiz) => svg(170, "Tijdlijn met past simple, present perfect en will",
    `<path d="M20 90 H320 m-7 -5 l7 5 l-7 5" class="s"/><path d="M230 70 V110" class="s"/><text x="230" y="126" text-anchor="middle" class="b">nu</text>
     <circle cx="70" cy="90" r="6" class="dot"/><text x="70" y="72" text-anchor="middle" class="b pb">${quiz ? "?" : "past simple"}</text><text x="70" y="112" text-anchor="middle" class="k">in 2020 · last year</text><text x="70" y="126" text-anchor="middle" class="k">afgelopen moment</text>
     <rect x="130" y="82" width="100" height="16" rx="8" class="vlak"/><path d="M130 90 H228" class="curve"/><text x="180" y="72" text-anchor="middle" class="b pa">${quiz ? "?" : "present perfect"}</text><text x="180" y="42" text-anchor="middle" class="k">since 2021 · for years · so far</text><text x="180" y="56" text-anchor="middle" class="k">toen begonnen, nu nog van belang</text>
     <path d="M240 90 H300" class="curve5" stroke-dasharray="5 4"/><text x="278" y="72" text-anchor="middle" class="b pg">${quiz ? "?" : "will"}</text><text x="278" y="112" text-anchor="middle" class="k">voorspelling</text>
     <text x="170" y="158" text-anchor="middle" class="k" style="font-size:9.5px">Schools closed in 2020. · Phones have changed our lives. · Prices will rise.</text>`));

  // Actief naar passief: het lijdend voorwerp wordt onderwerp.
  TW.fig("passief", () => svg(170, "Van actief naar passief: het lijdend voorwerp wordt het onderwerp",
    `<text x="10" y="22" class="k">actief</text>` + blok(10, 30, 96, 34, "vlak") + blok(122, 30, 80, 34, "cel") + blok(218, 30, 112, 34, "vlak3") +
    `<text x="58" y="52" text-anchor="middle" class="b">The school</text><text x="162" y="52" text-anchor="middle" class="b">banned</text><text x="274" y="52" text-anchor="middle" class="b">phones.</text>
     <path d="M274 66 C274 96 70 80 62 108 m-5 -8 l5 9 l8 -6" class="curve5"/><path d="M58 66 C58 90 280 86 284 108 m-8 -6 l8 7 l5 -9" class="curve" stroke-dasharray="5 4"/>
     <text x="10" y="106" class="k">passief</text>` + blok(10, 114, 96, 34, "vlak3") + blok(122, 114, 112, 34, "cel") + blok(250, 114, 80, 34, "vlak") +
    `<text x="58" y="136" text-anchor="middle" class="b">Phones</text><text x="178" y="136" text-anchor="middle" class="b">were banned</text><text x="290" y="136" text-anchor="middle" class="k" style="font-size:9.5px">(by the school).</text>
     <text x="178" y="164" text-anchor="middle" class="k pa">to be in dezelfde tijd + voltooid deelwoord</text>`));

  // Woordvolgorde: vaste vakken.
  TW.fig("volgorde", () => {
    const v = [["Wie?", "Many pupils", "vlak"], ["Doet", "do", "cel"], ["Wat?", "their homework", "vlak3"], ["Waar?", "at home", "vlak2"], ["Wanneer?", "every evening.", "vlak"]];
    const w = [70, 34, 92, 54, 74]; let x = 4;
    return svg(120, "Woordvolgorde: onderwerp, werkwoord, lijdend voorwerp, plaats, tijd",
      v.map((s, i) => { const h = blok(x, 40, w[i], 40, s[2], 8) + `<text x="${x + w[i] / 2}" y="30" text-anchor="middle" class="k b">${s[0]}</text><text x="${x + w[i] / 2}" y="64" text-anchor="middle" class="k">${s[1]}</text>`; x += w[i] + 3; return h; }).join("") +
      `<text x="170" y="14" text-anchor="middle" class="b pa">Subject · Verb · Object · Place · Time</text><text x="170" y="104" text-anchor="middle" class="k">Onderwerp en werkwoord naast elkaar, tijd achteraan.</text>`);
  });

  // Ladder van de conditionals: hoe verder van de werkelijkheid, hoe verder terug in de tijd.
  TW.fig("ladder", (quiz) => {
    const r = [["Zero", "altijd waar", "present, present", "vlak3"], ["First", "kan echt gebeuren", "present, will", "vlak"], ["Second", "denkbeeldig, nu", "past, would", "vlak2"], ["Third", "denkbeeldig, toen", "past perfect, would have", "vlak2"]];
    return svg(178, "De vier conditionals van echt naar denkbeeldig",
      r.map((s, i) => { const y = 8 + i * 42, x = 6 + i * 8; return blok(x, y, 334 - x, 36, s[3], 8) + `<text x="${x + 8}" y="${y + 22}" class="b">${s[0]}</text><text x="${x + 58}" y="${y + 22}" class="k">${s[1]}</text><text x="332" y="${y + 22}" text-anchor="end" class="k b pa">${quiz ? "?" : s[2]}</text>`; }).join(""));
  });
})();
