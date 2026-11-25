// Oefen-widgets: sentence transformer, conditional machine, irregular verbs trainer, spot the mistake en formaliteitsmeter.
(function () {
  "use strict";
  const E = (TW.eng = TW.eng || {});
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  // Vergelijken: hoofdletters, dubbele spaties en een punt of uitroepteken aan het eind tellen niet; komma's wel.
  E.norm = (t) => String(t).toLowerCase().replace(/[’‘]/g, "'").replace(/\s+([,.!?;:])/g, "$1").replace(/\s+/g, " ").trim().replace(/[.!]+$/, "").trim();
  const meng = (a) => { const b = a.slice(); for (let i = b.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [b[i], b[j]] = [b[j], b[i]]; } return b; };

  // ---------- sentence transformer ----------
  const TRANS = {
    passief: { naam: "Actief → passief", uitleg: "Maak de zin passief. Het lijdend voorwerp wordt het onderwerp; to be in dezelfde tijd + voltooid deelwoord. 'By ...' mag weg als het niet belangrijk is.", items: [
      { q: "The school banned phones last year.", a: ["Phones were banned by the school last year.", "Phones were banned last year by the school.", "Phones were banned last year.", "Last year, phones were banned by the school.", "Last year phones were banned by the school.", "Last year, phones were banned.", "Last year phones were banned."], h: "Past simple: were + voltooid deelwoord." },
      { q: "Millions of people use social media every day.", a: ["Social media are used by millions of people every day.", "Social media is used by millions of people every day.", "Every day, social media are used by millions of people.", "Every day, social media is used by millions of people.", "Social media are used every day by millions of people.", "Social media is used every day by millions of people."], h: "Present simple: is/are + used. Hier is 'by millions of people' wel belangrijke informatie." },
      { q: "The government will introduce new rules.", a: ["New rules will be introduced by the government.", "New rules will be introduced."], h: "Future: will be + voltooid deelwoord." },
      { q: "Scientists have developed a new app.", a: ["A new app has been developed by scientists.", "A new app has been developed."], h: "Present perfect: has been + voltooid deelwoord (a new app is enkelvoud)." },
      { q: "Teachers are checking the essays.", a: ["The essays are being checked by teachers.", "The essays are being checked by the teachers.", "The essays are being checked."], h: "Present continuous: are being + voltooid deelwoord." },
      { q: "Factories produce a lot of plastic.", a: ["A lot of plastic is produced by factories.", "A lot of plastic is produced."], h: "Plastic is ontelbaar, dus is produced." },
      { q: "Someone stole my bike yesterday.", a: ["My bike was stolen yesterday.", "Yesterday, my bike was stolen.", "Yesterday my bike was stolen.", "My bike was stolen by someone yesterday.", "My bike was stolen yesterday by someone."], h: "Steal, stole, stolen. 'By someone' zegt niets, dus laat je het meestal weg." },
      { q: "Schools should teach financial skills.", a: ["Financial skills should be taught by schools.", "Financial skills should be taught.", "Financial skills should be taught at school.", "Financial skills should be taught at schools.", "Financial skills should be taught in schools."], h: "Modal + be + voltooid deelwoord: should be taught." }
    ] },
    samen: { naam: "Zinnen samenvoegen", uitleg: "Maak er één zin van met who, which, that, whose of where. Let op de komma's: extra informatie over iets dat al duidelijk is, staat tussen komma's (en dan nooit 'that').", items: [
      { q: "Pupils use their phones in class. They often miss important information.", a: ["Pupils who use their phones in class often miss important information.", "Pupils that use their phones in class often miss important information."], h: "Welke pupils? Die hun telefoon gebruiken: who, zonder komma's." },
      { q: "AI is a technology. It is changing education.", a: ["AI is a technology which is changing education.", "AI is a technology that is changing education."], h: "Een ding: which of that." },
      { q: "My aunt works in a hospital. She is a nurse.", a: ["My aunt, who is a nurse, works in a hospital.", "My aunt, who works in a hospital, is a nurse."], h: "Je hebt maar één tante bedoeld: extra informatie tussen komma's met who." },
      { q: "This is the school. I studied there.", a: ["This is the school where I studied.", "This is the school that I studied at.", "This is the school which I studied at.", "This is the school I studied at.", "This is the school at which I studied."], h: "Een plaats: where." },
      { q: "The girl won the prize. Her essay was the best.", a: ["The girl whose essay was the best won the prize."], h: "Bezit (haar essay): whose." },
      { q: "Amsterdam has many cyclists. It is the capital of the Netherlands.", a: ["Amsterdam, which is the capital of the Netherlands, has many cyclists."], h: "Er is maar één Amsterdam: extra informatie tussen komma's met which (geen that)." },
      { q: "Many people work from home. They save a lot of travel time.", a: ["Many people who work from home save a lot of travel time.", "Many people that work from home save a lot of travel time."], h: "Welke mensen? Die thuiswerken: who, zonder komma's." },
      { q: "The app was a success. A pupil from Utrecht designed it.", a: ["The app which a pupil from Utrecht designed was a success.", "The app that a pupil from Utrecht designed was a success.", "The app a pupil from Utrecht designed was a success.", "The app, which a pupil from Utrecht designed, was a success.", "The app which was designed by a pupil from Utrecht was a success.", "The app that was designed by a pupil from Utrecht was a success.", "The app designed by a pupil from Utrecht was a success."], h: "Het ding (the app) is het lijdend voorwerp van de bijzin: which/that, of laat het weg." }
    ] },
    formeel: { naam: "Informeel → formeel", uitleg: "Herschrijf de zin in essaytaal: geen contractions, geen spreektaal, niet 'you'. De app controleert of de informele woorden weg zijn en of je een formeel alternatief gebruikt.", items: [
      { q: "Kids don't get enough sleep.", m: "Children do not get enough sleep.", wel: [[/\b(children|teenagers|young people|pupils|adolescents)\b/i, "Gebruik een formeel woord voor kids: children, teenagers, young people."], [/\b(do|does) not\b/i, "Schrijf do not voluit."]], niet: [[/\bkids?\b/i, "kids is spreektaal"]] },
      { q: "Loads of people think it's a really bad idea.", m: "Many people believe that it is a bad idea.", wel: [[/\b(many|a large number of|a great number of|numerous|most)\b/i, "Gebruik many of a large number of in plaats van loads of."], [/\bit is\b/i, "Schrijf it is voluit."]], niet: [[/\b(loads|lots|tons) of\b/i, "loads of / lots of is spreektaal"], [/\breally\b/i, "really is een zwak, informeel woord"]] },
      { q: "You can't just ban stuff like that.", m: "Such things cannot simply be banned.", wel: [[/\b(cannot|can not|should not|must not)\b/i, "Schrijf cannot voluit (één woord)."]], niet: [[/\byou\b/i, "spreek de lezer niet aan met you"], [/\bstuff\b/i, "stuff is spreektaal: things, such measures"], [/\bjust\b/i, "just is spreektaal: simply"]] },
      { q: "I think phones are a big problem in class.", m: "Phones can be a serious problem in class.", wel: [[/\b(serious|major|considerable|significant|real)\b/i, "Gebruik een sterker woord dan big: serious, major, significant."]], niet: [[/\bbig\b/i, "big is vaag en informeel"]] },
      { q: "Anyway, there's tons of info online.", m: "Furthermore, a great deal of information is available online.", wel: [[/\binformation\b/i, "Info is spreektaal: information."]], niet: [[/\banyway\b/i, "anyway is spreektaal: furthermore, moreover"], [/\btons\b/i, "tons of is spreektaal"], [/\binfo\b/i, "info is een afkorting"]] },
      { q: "Tech companies are gonna make loads of money.", m: "Technology companies are going to make a great deal of money.", wel: [[/\b(going to|will)\b/i, "Gonna is spreektaal: going to of will."]], niet: [[/\bgonna\b/i, "gonna is spreektaal"], [/\b(loads|lots|tons) of\b/i, "loads of is spreektaal: a great deal of, a lot of"], [/\btech\b/i, "tech is een afkorting: technology"]] },
      { q: "Okay, so homework isn't always useful.", m: "Admittedly, homework is not always useful.", wel: [[/\bis not\b/i, "Schrijf is not voluit."]], niet: [[/\bok(ay)?\b/i, "okay is spreektaal"], [/^\s*so\b|,\s*so\b/i, "so aan het begin is spreektaal"]] },
      { q: "Social media is super addictive and that's bad.", m: "Social media can be highly addictive, which is harmful.", wel: [[/\b(harmful|damaging|dangerous|negative|a problem|worrying|concerning|unhealthy)\b/i, "Gebruik een preciezer woord dan bad: harmful, damaging, worrying."]], niet: [[/\bsuper\b/i, "super is spreektaal: highly, extremely"], [/\bbad\b/i, "bad is vaag"]] }
    ] }
  };
  TW.widget("transformer", {
    titel: "Sentence transformer", icoon: "🔁",
    uitleg: "Zet zinnen om: actief naar passief, twee zinnen samenvoegen met een relative pronoun, of informeel naar formeel. Typ je zin en controleer.",
    maak(el, api) {
      const st = Object.assign({ m: "passief", goed: {} }, E.laad("transformer", {}));
      let i = 0, pog = 0;
      el.innerHTML = `<div class="keuze" id="tM"></div><div id="tB"></div>`;
      const $ = (id) => el.querySelector("#" + id);
      function modi() {
        $("tM").innerHTML = Object.entries(TRANS).map(([k, v]) => { const n = v.items.filter((x, j) => st.goed[k + j]).length; return `<button class="btn ${st.m === k ? "aan" : ""}" data-m="${k}">${esc(v.naam)} <small>${n}/${v.items.length}</small></button>`; }).join("");
        $("tM").querySelectorAll("button").forEach((b) => { b.onclick = () => { st.m = b.dataset.m; i = 0; pog = 0; E.bewaar("transformer", st); teken(); }; });
      }
      function teken() {
        modi();
        const M = TRANS[st.m], it = M.items[i];
        $("tB").innerHTML = `<p class="meta">${esc(M.uitleg)}</p><div class="tr-q"><span class="meta">${i + 1} van ${M.items.length}${st.goed[st.m + i] ? " · al goed ✓" : ""}</span><p class="vraag">${esc(it.q)}</p></div>
          <textarea id="tIn" rows="2" spellcheck="false" autocapitalize="sentences" placeholder="Jouw zin"></textarea>
          <div class="row"><button class="btn primary" id="tC">Controleer</button>${it.h ? `<button class="btn klein" id="tH">💡 Hint</button>` : ""}<button class="btn klein" id="tA">Toon antwoord</button><button class="btn klein" id="tN">Volgende →</button></div>
          <div id="tF" class="fb"></div>`;
        const inp = $("tIn");
        $("tC").onclick = () => controleer(inp.value);
        inp.addEventListener("keydown", (e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); controleer(inp.value); } });
        if (it.h) $("tH").onclick = () => { $("tF").innerHTML = `<div class="uitleg">💡 ${esc(it.h)}</div>`; };
        $("tA").onclick = () => { $("tF").innerHTML = `<div class="uitleg"><b>Goed is bijvoorbeeld:</b> ${esc(it.a ? it.a[0] : it.m)}${it.a && it.a.length > 1 ? `<br><span class="meta">Ook goed: ${it.a.slice(1, 4).map(esc).join(" · ")}</span>` : ""}</div>`; };
        $("tN").onclick = () => { i = (i + 1) % M.items.length; pog = 0; teken(); };
      }
      function controleer(v) {
        const M = TRANS[st.m], it = M.items[i];
        if (!v.trim()) return;
        pog++;
        let ok, fb;
        if (it.a) {
          ok = it.a.some((a) => E.norm(a) === E.norm(v));
          if (ok) fb = `<div class="uitleg ok"><b>✓ Goed!</b>${it.a.length > 1 ? `<span class="meta">Ook goed: ${it.a.filter((a) => E.norm(a) !== E.norm(v)).slice(0, 3).map(esc).join(" · ")}</span>` : ""}</div>`;
          else {
            const tip = [];
            if (st.m === "passief" && !/\b(is|are|was|were|be|been|being)\b/i.test(v)) tip.push("Een passive heeft altijd een vorm van to be.");
            if (st.m === "samen" && !/\b(who|which|that|whose|where)\b/i.test(v) && !/\bat\b/i.test(v)) tip.push("Gebruik who, which, that, whose of where.");
            if (st.m === "samen" && /,\s*that\b/i.test(v)) tip.push("Na een komma nooit that: gebruik who of which.");
            if (E.CONTR && v.match(E.CONTR)) tip.push("Schrijf contractions voluit.");
            if (!/[.!?]$/.test(v.trim())) tip.push("Vergeet de punt niet (telt hier niet mee, in je essay wel).");
            fb = `<div class="uitleg nok"><b>Nog niet.</b> ${tip.map(esc).join(" ")} ${pog >= 2 ? `<br>Bijvoorbeeld: <i>${esc(it.a[0])}</i>` : "Probeer het nog eens of vraag een hint."}</div>`;
          }
        } else {
          const fout = [];
          (v.match(E.CONTR) || []).forEach((c) => fout.push(`contraction <code>${esc(c)}</code>: schrijf voluit`));
          it.niet.forEach(([re, m]) => { if (re.test(v)) fout.push(esc(m)); });
          it.wel.forEach(([re, m]) => { if (!re.test(v)) fout.push(esc(m)); });
          if (E.woorden(v).length < 4) fout.push("schrijf een hele zin");
          ok = !fout.length;
          fb = ok ? `<div class="uitleg ok"><b>✓ Formeel genoeg!</b> Een mogelijk modelantwoord: <i>${esc(it.m)}</i></div>` : `<div class="uitleg nok"><b>Nog niet formeel:</b><ul>${fout.map((f) => `<li>${f}</li>`).join("")}</ul>${pog >= 2 ? `Bijvoorbeeld: <i>${esc(it.m)}</i>` : ""}</div>`;
        }
        $("tF").innerHTML = fb;
        if (ok) { st.goed[st.m + i] = 1; E.bewaar("transformer", st); modi(); const tot = Object.values(TRANS).reduce((s, m) => s + m.items.length, 0); if (Object.keys(st.goed).length >= Math.min(12, tot)) api.klaar(); }
      }
      teken();
    }
  });

  // ---------- conditional machine ----------
  const TYPES = [
    { n: "Zero", wanneer: "iets wat altijd waar is (feiten, gewoontes)", if: "present simple", hoofd: "present simple", vb: "If you heat ice, it melts." },
    { n: "First", wanneer: "iets wat echt kan gebeuren (nu of later)", if: "present simple", hoofd: "will + hele werkwoord", vb: "If the school bans phones, pupils will talk more." },
    { n: "Second", wanneer: "denkbeeldig of onwaarschijnlijk, nu of in de toekomst", if: "past simple (were bij be)", hoofd: "would + hele werkwoord", vb: "If I were the head teacher, I would allow phones." },
    { n: "Third", wanneer: "denkbeeldig in het verleden: het is niet gebeurd", if: "past perfect (had + voltooid deelwoord)", hoofd: "would have + voltooid deelwoord", vb: "If I had studied harder, I would have passed." }
  ];
  // Eerste keuze in elk vak is goed; de app husselt de knoppen.
  const COND = [
    [0, "If you {heat|heated|will heat|had heated} ice, it {melts|melted|would melt|will have melted}."],
    [0, "If people {do not sleep|did not sleep|will not sleep|had not slept} enough, they {feel|felt|would feel|would have felt} tired."],
    [1, "If the school {bans|banned|will ban|had banned} phones, pupils {will talk|would talk|talked|would have talked} more during breaks."],
    [1, "If we {do not reduce|did not reduce|will not reduce|had not reduced} emissions, the climate {will get|would get|got|would have got} warmer."],
    [1, "Unless pupils {start|started|will start|had started} earlier, they {will not finish|would not finish|did not finish|would not have finished} their essays."],
    [2, "If I {were|am|would be|had been} the head teacher, I {would allow|will allow|allow|would have allowed} phones during breaks."],
    [2, "If teenagers {had|have|would have|had had} more free time, they {would sleep|will sleep|sleep|had slept} more."],
    [2, "If AI {did|does|would do|had done} all our homework, we {would learn|will learn|learn|learnt} nothing."],
    [3, "If the government {had invested|invested|would invest|has invested} in trains, fewer people {would have travelled|travelled|will travel|had travelled} by car."],
    [3, "If I {had studied|studied|would study|have studied} harder, I {would have passed|passed|will pass|had passed} the test."],
    [3, "If she {had left|left|would leave|has left} earlier, she {would not have missed|did not miss|will not miss|had not missed} the bus."]
  ].map(([t, s]) => { const delen = s.split(/\{([^}]+)\}/); return { t, delen, vakken: delen.filter((x, i) => i % 2).map((x) => x.split("|")) }; });
  const goedeZin = (c) => c.delen.map((x, i) => (i % 2 ? x.split("|")[0] : x)).join("");
  TW.widget("conditional", {
    titel: "Conditional machine", icoon: "⚙️",
    uitleg: "Kies een type en bouw de zin: tik in elk vak de goede werkwoordsvorm. Of herken het type van een zin.",
    maak(el, api) {
      const st = Object.assign({ goed: 0 }, E.laad("conditional", {}));
      let modus = "bouw", typ = 1, nr = 0, keuze = [], klaar = false, herk = null, reeks = 0;
      el.innerHTML = `<div class="keuze" id="cM"></div><div id="cT"></div><div id="cB"></div>`;
      const $ = (id) => el.querySelector("#" + id);
      function modi() {
        $("cM").innerHTML = `<button class="btn ${modus === "bouw" ? "aan" : ""}" data-m="bouw">⚙️ Bouw de zin</button><button class="btn ${modus === "herken" ? "aan" : ""}" data-m="herken">🔎 Welk type?</button>`;
        $("cM").querySelectorAll("button").forEach((b) => { b.onclick = () => { modus = b.dataset.m; herk = null; teken(); }; });
      }
      function typeKaart() {
        const T = TYPES[typ];
        $("cT").innerHTML = `<div class="keuze">${TYPES.map((x, i) => `<button class="btn ${i === typ ? "aan" : ""}" data-t="${i}">${x.n}</button>`).join("")}</div>
          <div class="cm-kaart"><b>${T.n} conditional</b>: ${esc(T.wanneer)}<div class="cm-form"><span class="cm-if">if + ${esc(T.if)}</span><span class="cm-pijl">→</span><span class="cm-hoofd">${esc(T.hoofd)}</span></div><span class="meta">${esc(T.vb)}</span></div>`;
        $("cT").querySelectorAll("button").forEach((b) => { b.onclick = () => { typ = +b.dataset.t; nr = 0; nieuw(); teken(); }; });
      }
      const lijst = () => COND.filter((c) => c.t === typ);
      function nieuw() { const c = lijst()[nr % lijst().length]; keuze = c.vakken.map(() => null); klaar = false; c.opties = c.vakken.map((v) => meng(v)); }
      function teken() {
        modi();
        if (modus === "bouw") {
          typeKaart();
          const c = lijst()[nr % lijst().length]; if (!c.opties) nieuw();
          let v = 0;
          const zin = c.delen.map((x, i) => { if (!(i % 2)) return esc(x); const k = v++; const g = keuze[k]; const cls = klaar ? (g === c.vakken[k][0] ? "goed" : "fout") : g ? "sel" : ""; return `<span class="cm-vak ${cls}">${g ? esc(g) : "_____"}</span>`; }).join("");
          $("cB").innerHTML = `<div class="card"><p class="meta">Maak een <b>${TYPES[typ].n.toLowerCase()} conditional</b> (${nr % lijst().length + 1} van ${lijst().length}).</p><p class="cm-zin">${zin}</p>
            ${c.opties.map((op, k) => `<div class="cm-rij"><span class="meta">${k === 0 ? "if-deel" : "hoofdzin"}</span><div class="keuze">${op.map((o) => `<button class="chip ${keuze[k] === o ? "sel" : ""}" data-k="${k}" data-o="${esc(o)}" ${klaar ? "disabled" : ""}>${esc(o)}</button>`).join("")}</div></div>`).join("")}
            <div class="row"><button class="btn primary" id="cC" ${keuze.includes(null) || klaar ? "disabled" : ""}>Controleer</button><button class="btn" id="cN">Volgende →</button></div><div id="cF"></div></div>`;
          $("cB").querySelectorAll(".chip[data-k]").forEach((b) => { b.onclick = () => { keuze[+b.dataset.k] = b.dataset.o; teken(); }; });
          $("cN").onclick = () => { nr++; nieuw(); teken(); };
          $("cC").onclick = () => {
            klaar = true; const ok = keuze.every((g, k) => g === c.vakken[k][0]);
            if (ok) { st.goed++; reeks++; E.bewaar("conditional", st); if (st.goed >= 8) api.klaar(); }
            teken();
            const T = TYPES[typ];
            $("cF").innerHTML = ok ? `<div class="uitleg ok"><b>✓ Goed!</b> ${esc(T.n)}: if + ${esc(T.if)}, ${esc(T.hoofd)}.</div>` : `<div class="uitleg nok"><b>Nog niet.</b> Goed is: <i>${esc(goedeZin(c))}</i><br>${esc(T.n)}: if + ${esc(T.if)}, ${esc(T.hoofd)}.</div>`;
          };
        } else {
          $("cT").innerHTML = `<div class="cm-kaart meta">Zero: present + present · First: present + will · Second: past + would · Third: had + voltooid deelwoord, would have + voltooid deelwoord</div>`;
          if (!herk) herk = COND[Math.floor(Math.random() * COND.length)];
          $("cB").innerHTML = `<div class="card"><p class="meta">Welk type conditional is dit? <span class="okt">${reeks ? reeks + " op rij goed" : ""}</span></p><p class="cm-zin">${esc(goedeZin(herk))}</p>
            <div class="two">${TYPES.map((x, i) => `<button class="btn" data-h="${i}">${x.n}</button>`).join("")}</div><div id="cF"></div></div>`;
          $("cB").querySelectorAll("button[data-h]").forEach((b) => { b.onclick = () => {
            const ok = +b.dataset.h === herk.t; const T = TYPES[herk.t];
            $("cB").querySelectorAll("button[data-h]").forEach((x) => { x.disabled = true; if (+x.dataset.h === herk.t) x.classList.add("good"); else if (x === b) x.classList.add("bad"); });
            if (ok) { reeks++; st.goed++; E.bewaar("conditional", st); if (st.goed >= 8) api.klaar(); } else reeks = 0;
            $("cF").innerHTML = `<div class="uitleg ${ok ? "ok" : "nok"}"><b>${ok ? "✓ Goed!" : "Nee, het is " + T.n + "."}</b> If-deel: ${esc(T.if)}; hoofdzin: ${esc(T.hoofd)}. Gebruik: ${esc(T.wanneer)}.</div><button class="btn primary" id="cV">Volgende →</button>`;
            $("cV").onclick = () => { herk = null; teken(); };
          }; });
        }
      }
      nieuw(); teken();
    }
  });

  // ---------- irregular verbs trainer ----------
  TW.widget("werkwoorden", {
    titel: "Irregular verbs trainer", icoon: "🏋️",
    uitleg: "Typ de past simple en het past participle. Wat je goed hebt, komt minder vaak terug; wat je fout hebt, vaker. Je voortgang blijft bewaard.",
    maak(el, api) {
      const V = E.VERBS;
      const st = Object.assign({ bak: {} }, E.laad("werkwoorden", {}));
      let nu = null, sessie = 0, vorige = -1, lijst = false;
      el.innerHTML = `<div id="vS"></div><div id="vB"></div><div class="row"><button class="btn klein" id="vL">📋 Toon de lijst</button><button class="btn klein" id="vR">Voortgang wissen</button></div><div id="vT"></div>`;
      const $ = (id) => el.querySelector("#" + id);
      const bak = (i) => st.bak[V[i][0]] || 0;
      function kies() {
        const w = V.map((v, i) => (i === vorige ? 0 : [8, 4, 2, 1, 0.4][Math.min(4, bak(i))]));
        let r = Math.random() * w.reduce((a, b) => a + b, 0);
        for (let i = 0; i < w.length; i++) { r -= w[i]; if (r <= 0) return i; }
        return 0;
      }
      function stand() {
        const vast = V.filter((v, i) => bak(i) >= 3).length;
        $("vS").innerHTML = `<div class="uit"><b>${vast} van ${V.length}</b> werkwoorden zitten erin (3× op rij goed) · deze sessie ${sessie} goed<div class="bar"><i style="width:${(vast / V.length) * 100}%"></i></div></div>`;
      }
      function vraag() {
        nu = kies(); vorige = nu; const v = V[nu];
        $("vB").innerHTML = `<div class="card vw"><p class="vw-inf"><b>to ${esc(v[0])}</b> <span class="meta">(${esc(v[3])})</span></p>
          <label>Past simple <input type="text" id="v1" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="bijv. went"></label>
          <label>Past participle <input type="text" id="v2" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="bijv. gone"></label>
          <div class="row"><button class="btn primary" id="vC">Controleer</button><button class="btn klein" id="vW">Weet ik niet</button></div><div id="vF"></div></div>`;
        const i1 = $("v1"), i2 = $("v2");
        i1.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); i2.focus(); } });
        i2.addEventListener("keydown", (e) => { if (e.key === "Enter") { e.preventDefault(); check(); } });
        $("vC").onclick = check; $("vW").onclick = () => uitslag(false, false, true);
        stand();
      }
      const n = (t) => t.toLowerCase().replace(/[’]/g, "'").trim().replace(/\s+/g, " ");
      function check() { const v = V[nu]; const a = E.vormen(v, 1).map(n).includes(n($("v1").value)) || (v[0] === "learn" && ["learnt", "learned"].includes(n($("v1").value))); const b = E.vormen(v, 2).map(n).includes(n($("v2").value)); uitslag(a, b, false); }
      function uitslag(a, b, weetNiet) {
        const v = V[nu], ok = a && b;
        st.bak[v[0]] = ok ? Math.min(5, bak(nu) + 1) : 0; E.bewaar("werkwoorden", st);
        if (ok) { sessie++; if (sessie >= 15) api.klaar(); }
        ["v1", "v2"].forEach((id, k) => { const x = $(id); x.disabled = true; if (!weetNiet) x.classList.add([a, b][k] ? "goed" : "fout"); });
        $("vC").disabled = true; $("vW").disabled = true;
        $("vF").innerHTML = `<div class="uitleg ${ok ? "ok" : "nok"}"><b>${ok ? "✓ Goed!" : weetNiet ? "Leer deze:" : a || b ? "Bijna." : "Nog niet."}</b> <span>${esc(v[0])} · <b>${esc(v[1])}</b> · <b>${esc(v[2])}</b></span>${v[0] === "get" ? "<br><span class='meta'>Brits: got; Amerikaans: gotten.</span>" : ""}</div><button class="btn primary" id="vN">Volgende →</button>`;
        $("vN").onclick = vraag; $("vN").focus();
        stand();
      }
      $("vL").onclick = () => { lijst = !lijst; $("vL").textContent = lijst ? "Verberg de lijst" : "📋 Toon de lijst"; $("vT").innerHTML = lijst ? `<input type="text" class="zoek" id="vZ" placeholder="Zoek een werkwoord"><div class="vw-lijst" id="vLi"></div>` : ""; if (lijst) { const r = () => { const z = n($("vZ").value); $("vLi").innerHTML = `<table><tr><th>infinitive</th><th>past simple</th><th>participle</th></tr>${V.filter((v) => !z || v.some((x) => x.includes(z))).map((v, i) => `<tr class="${bak(V.indexOf(v)) >= 3 ? "vast" : ""}"><td>${esc(v[0])} <small>${esc(v[3])}</small></td><td>${esc(v[1])}</td><td>${esc(v[2])}</td></tr>`).join("")}</table>`; }; $("vZ").oninput = r; r(); } };
      let wis = 0;
      $("vR").onclick = (e) => { const b = e.currentTarget; if (!wis) { wis = 1; b.textContent = "Zeker? Tik nog eens"; setTimeout(() => { wis = 0; b.textContent = "Voortgang wissen"; }, 3000); return; } st.bak = {}; E.bewaar("werkwoorden", st); wis = 0; b.textContent = "Voortgang wissen"; stand(); };
      vraag();
    }
  });

  // ---------- spot the mistake ----------
  // [zin met de fout tussen [ ], verbetering, uitleg]
  const SPOT = [
    ["I [am agree] with the writer of this article.", "agree", "'I am agree' is Dunglish. Agree is een werkwoord: I agree."],
    ["Homework is [more better] than no homework at all.", "better", "Better is al de vergrotende trap. More erbij is dubbel."],
    ["Many pupils [make] their homework on the bus.", "do", "Huiswerk doe je: do your homework."],
    ["Technology has changed [the society] completely.", "society", "Society in het algemeen krijgt geen the."],
    ["[Much] people use their phones before they go to sleep.", "Many", "People is telbaar meervoud: many people."],
    ["Online lessons are cheaper [then] lessons at school.", "than", "Na een vergelijking: than. Then betekent dan/daarna."],
    ["The app has changed [it's] design.", "its", "Bezittelijk 'zijn' is its. It's = it is."],
    ["Teenagers often forget [there] homework.", "their", "Hun = their. There = daar."],
    ["My parents [learned] me how to cook.", "taught", "Iemand iets leren = teach, taught, taught."],
    ["We [discussed about] the problem in class.", "discussed", "Discuss heeft geen about nodig."],
    ["I have lived in this town [since] five years.", "for", "Een periode: for five years. Since gebruik je bij een beginpunt (since 2020)."],
    ["Teachers give pupils a lot of useful [advices].", "advice", "Advice is ontelbaar: geen -s."],
    ["Everybody [have] a phone nowadays.", "has", "Everybody is enkelvoud: everybody has."],
    ["[i] believe that schools should start later.", "I", "I is altijd een hoofdletter."],
    ["He is very interested [for] politics.", "in", "Geïnteresseerd in = interested in."],
    ["The result depends [of] the weather.", "on", "Afhangen van = depend on."],
    ["Pupils should [control] their answers before they hand in the test.", "check", "Controleren = check. Control betekent beheersen of besturen."],
    ["Last year I [have visited] London with my class.", "visited", "Afgelopen tijdstip (last year): past simple."],
    ["If I [would have] more time, I would read more books.", "had", "Second conditional: in het if-deel past simple, geen would."],
    ["People [is] worried about climate change.", "are", "People is meervoud: people are."],
    ["Pupils [who's] parents work late often eat alone.", "whose", "Bezit: whose. Who's = who is."],
    ["The news [are] not very good today.", "is", "News is ontelbaar en enkelvoud: the news is."],
    ["I am looking forward to [meet] you.", "meeting", "Look forward to + -ing: to is hier een voorzetsel."],
    ["We [must to] reduce our carbon emissions.", "must", "Na een modal verb komt het hele werkwoord zonder to."],
    ["Pupils learn a lot of social skills [on] school.", "at", "Op school = at school."],
    ["Social media [have became] part of our lives.", "have become", "Become, became, become: na have het voltooid deelwoord."],
    ["Smartphones are [more cheap] than they used to be.", "cheaper", "Kort bijvoeglijk naamwoord: cheap, cheaper, cheapest."],
    ["[Eventually] you can send me an email if you have questions.", "If necessary,", "Eventually = uiteindelijk. Eventueel = if necessary / possibly."]
  ].map(([z, g, u]) => { const m = z.match(/^(.*)\[(.+?)\](.*)$/); return { voor: m[1], fout: m[2], na: m[3], goed: g, u }; });
  TW.widget("speurder", {
    titel: "Spot the mistake", icoon: "🕵️",
    uitleg: "In elke zin staat precies één fout die Nederlanders vaak maken. Tik het foute woord aan.",
    maak(el, api) {
      const st = Object.assign({ goed: {} }, E.laad("speurder", {}));
      let volg = meng(SPOT.map((x, i) => i)), p = 0, score = 0, gedaan = 0;
      el.innerHTML = `<p class="uit" id="sS"></p><div id="sB"></div>`;
      const $ = (id) => el.querySelector("#" + id);
      function stand() { $("sS").innerHTML = `Deze ronde: <b>${score} van ${gedaan}</b> goed · totaal ${Object.keys(st.goed).length} van ${SPOT.length} zinnen ooit goed`; }
      function toon() {
        const it = SPOT[volg[p]];
        const tok = []; it.voor.split(/\s+/).filter(Boolean).forEach((w) => tok.push([w, false]));
        tok.push([it.fout, true]);
        // leestekens direct na de fout horen bij het volgende stuk
        it.na.split(/\s+/).filter(Boolean).forEach((w, k) => { if (k === 0 && !/^\s/.test(it.na) && /^[.,!?]/.test(w)) tok.push([w, false, true]); else tok.push([w, false]); });
        $("sB").innerHTML = `<div class="card"><p class="meta">Zin ${p + 1} van ${volg.length}</p><div class="sp-zin">${tok.map(([w, f, lt], k) => lt ? `<span class="sp-lt">${esc(w)}</span>` : `<button class="chip sp" data-k="${k}">${esc(w)}</button>`).join(" ")}</div><div id="sF"></div></div>`;
        $("sB").querySelectorAll(".sp").forEach((b) => { b.onclick = () => {
          const k = +b.dataset.k, ok = tok[k][1];
          $("sB").querySelectorAll(".sp").forEach((x) => { x.disabled = true; if (tok[+x.dataset.k][1]) x.classList.add("goed"); });
          if (!ok) b.classList.add("fout");
          gedaan++; if (ok) { score++; st.goed[volg[p]] = 1; E.bewaar("speurder", st); }
          if (score >= 10) api.klaar();
          $("sF").innerHTML = `<div class="uitleg ${ok ? "ok" : "nok"}"><b>${ok ? "✓ Gevonden!" : "Dat woord klopt wel."}</b> <span>Fout: <s>${esc(it.fout)}</s> → <b>${esc(it.goed)}</b></span><br>${esc(it.u)}</div><button class="btn primary" id="sN">Volgende →</button>`;
          $("sN").onclick = () => { p++; if (p >= volg.length) { volg = meng(volg); p = 0; } toon(); };
          stand();
        }; });
        stand();
      }
      toon();
    }
  });

  // ---------- formaliteitsmeter ----------
  // Elk {..|..} stuk gaat van informeel (eerst) naar formeel (laatst). Tikken wisselt; de meter toont hoe formeel de zin is.
  const FORM = [
    ["{Kids|Children} {don't|do not} get enough exercise nowadays.", "kids is spreektaal; don't is een contraction"],
    ["{Loads of|A lot of|Many} people {think|believe} that social media {is really bad|can be harmful}.", "loads of is spreektaal, a lot of is neutraal; believe is sterker dan think; really bad is vaag"],
    ["{Anyway|Furthermore}, {there's|there is} {tons of|a lot of|a great deal of} information online.", "anyway en tons of zijn spreektaal"],
    ["{You|People} {can't|cannot} {just|simply} ban {stuff like that|such things}.", "you spreekt de lezer aan; stuff is spreektaal"],
    ["{So|Therefore}, schools {gotta|have to|should} {sort out|deal with|address} this issue.", "gotta en sort out zijn spreektaal"],
    ["{I think that|I believe that|In my view,} homework is {a waste of time|not very useful|of limited value}.", "a waste of time is wat spreektalig"],
    ["{Tech|Technology} companies earn {a ton of|a lot of|a considerable amount of} money from {our stuff|our data|personal data}.", "tech is een afkorting; a ton of en stuff zijn spreektaal"],
    ["{Okay|Admittedly}, AI {isn't|is not} always reliable.", "okay is spreektaal; isn't is een contraction"]
  ].map(([s, u]) => { const d = s.split(/\{([^}]+)\}/); return { d, opt: d.filter((x, i) => i % 2).map((x) => x.split("|")), u }; });
  TW.widget("formeel", {
    titel: "Formaliteitsmeter", icoon: "🎚️",
    uitleg: "Tik op de gekleurde woorden om ze te vervangen. Maak elke zin zo formeel dat de meter helemaal in het groen staat.",
    maak(el, api) {
      const st = Object.assign({ af: {} }, E.laad("formeel", {}));
      let nr = 0, pos = [];
      el.innerHTML = `<div id="fM"></div><div id="fB"></div>`;
      const $ = (id) => el.querySelector("#" + id);
      function start() { pos = FORM[nr].opt.map(() => 0); teken(); }
      function waarde() { const f = FORM[nr]; return f.opt.reduce((s, o, k) => s + pos[k] / (o.length - 1), 0) / f.opt.length; }
      function meter(v) {
        const a = Math.PI * (1 - v), x = 100 + 72 * Math.cos(a), y = 92 - 72 * Math.sin(a);
        return `<svg class="fig fm-meter" viewBox="0 0 200 110" role="img" aria-label="Formaliteit ${Math.round(v * 100)} procent">
          <path d="M20 92 A80 80 0 0 1 73 17" class="fm-r"/><path d="M73 17 A80 80 0 0 1 127 17" class="fm-o"/><path d="M127 17 A80 80 0 0 1 180 92" class="fm-g"/>
          <line x1="100" y1="92" x2="${x.toFixed(1)}" y2="${y.toFixed(1)}" class="fm-naald"/><circle cx="100" cy="92" r="6" class="fm-as"/>
          <text x="22" y="107" class="k">informeel</text><text x="178" y="107" text-anchor="end" class="k">formeel</text></svg>`;
      }
      function teken() {
        const f = FORM[nr], v = waarde(); let k = 0;
        $("fM").innerHTML = `<div class="keuze">${FORM.map((x, i) => `<button class="btn klein ${i === nr ? "aan" : ""}" data-n="${i}" aria-label="Zin ${i + 1}">${st.af[i] ? "✓" : i + 1}</button>`).join("")}</div>`;
        $("fM").querySelectorAll("button").forEach((b) => { b.onclick = () => { nr = +b.dataset.n; start(); }; });
        const zin = f.d.map((x, i) => { if (!(i % 2)) return esc(x); const j = k++; const o = f.opt[j], lvl = pos[j] / (o.length - 1); return `<button class="fm-w ${lvl === 1 ? "f3" : lvl > 0 ? "f2" : "f1"}" data-j="${j}">${esc(o[pos[j]])}</button>`; }).join("");
        $("fB").innerHTML = `${meter(v)}<p class="fm-zin">${zin}</p><p class="fb">${v === 1 ? `<span class="okt">✓ Helemaal formeel.</span> <span class="meta">${esc(f.u)}.</span>` : `<span class="meta">${Math.round(v * 100)}% formeel. Tik de rode en oranje woorden aan.</span>`}</p>
          ${v === 1 ? `<button class="btn primary" id="fN">${nr < FORM.length - 1 ? "Volgende zin →" : "Opnieuw vanaf zin 1"}</button>` : ""}`;
        $("fB").querySelectorAll(".fm-w").forEach((b) => { b.onclick = () => { const j = +b.dataset.j; pos[j] = (pos[j] + 1) % f.opt[j].length; teken(); }; });
        if (v === 1) {
          if (!st.af[nr]) { st.af[nr] = 1; E.bewaar("formeel", st); if (Object.keys(st.af).length >= FORM.length) api.klaar(); }
          $("fN").onclick = () => { nr = (nr + 1) % FORM.length; start(); };
        }
      }
      start();
    }
  });
})();
