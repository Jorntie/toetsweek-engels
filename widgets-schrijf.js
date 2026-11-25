// Schrijf-widgets: writing arena, mijn toetseisen, essay builder en essay X-ray.
// Gedeelde gegevens (model-essays, grammaticapatronen, Dunglish-lijst) staan in TW.eng, zodat de data-bestanden ze ook kunnen gebruiken.
(function () {
  "use strict";
  const E = (TW.eng = TW.eng || {});
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const telW = (t) => E.woorden(t).length;
  const zinnen = (t) => String(t).replace(/\s+/g, " ").split(/(?<=[.!?])\s+(?=[A-Za-z"'‘“(])/).map((z) => z.trim()).filter((z) => E.woorden(z).length);
  E.zinnen = zinnen;

  // ---------- model-essays met opmaak voor de X-ray ----------
  // {l:fn|...} = linking word met functie; {p|...} passive, {pp|...} present perfect, {c|...} conditional, {r|...} relative clause,
  // {m|...} modal verb, {cmp|...} comparative/superlative, {g|...} gerund, {f|...} future. Meerdere soorten: {m,p|...}. Nesten mag.
  E.ESSAYS = [
    {
      id: "phones", titel: "Should mobile phones be banned in secondary schools?",
      alineas: [
        [["hook", "Imagine a classroom {r|where nobody is secretly checking a phone under the desk}."],
          ["onderwerp", "In recent years, many secondary schools {pp|have introduced} strict rules on mobile phones, and some {pp|have banned} them completely."],
          ["thesis", "This essay discusses the advantages and disadvantages of such a ban."]],
        [["topic", "{l:con|On the one hand}, a ban has several clear benefits."],
          ["argument", "{l:seq|Firstly}, pupils {m|can concentrate} {cmp|better} when they {p|are not distracted} by notifications."],
          ["voorbeeld", "{l:ex|For example}, a pupil {r|who receives dozens of messages a day} finds it hard to follow a lesson."],
          ["argument", "{l:add|Furthermore}, a phone-free break encourages pupils to talk to each other {g|instead of staring} at a screen."],
          ["gevolg", "{l:res|As a result}, there {m|may be} {cmp|less} cyberbullying during school hours."]],
        [["topic", "{l:con|On the other hand}, a complete ban also has serious drawbacks."],
          ["argument", "{l:seq|To begin with}, many parents want to be able to contact their children, especially in an emergency."],
          ["argument", "{l:add|In addition}, smartphones {m,p|can be used} as dictionaries, calculators or cameras during lessons."],
          ["uitleg", "{c|If schools ban them completely, pupils {f|will lose} these useful opportunities}."],
          ["argument", "{l:add|What is more}, a total ban does not teach young people how to use their phones responsibly."]],
        [["samenvatting", "{l:end|All things considered}, a phone ban has both benefits and drawbacks."],
          ["mening", "{l:op|In my opinion}, a ban during lessons is {cmp|more sensible than} a ban during the whole school day."],
          ["slotzin", "{c|If pupils {p|were allowed} to use their phones during breaks, they {m|would} still feel connected}, while lessons {m|would} stay calm and focused."]]
      ]
    },
    {
      id: "ai", titel: "Should pupils be allowed to use artificial intelligence for their homework?",
      alineas: [
        [["hook", "Only a few years ago, hardly anyone had heard of chatbots, but today many pupils use them almost every day."],
          ["onderwerp", "Tools {r|that can write a whole text in seconds} {pp|have changed} the way homework {p|is done}."],
          ["thesis", "This essay {f|will examine} the arguments for and against {g|using} AI for homework."]],
        [["topic", "{l:con|On the one hand}, AI offers clear benefits for learners."],
          ["argument", "{l:seq|First of all}, a chatbot explains difficult topics patiently and is available at any time of day."],
          ["voorbeeld", "{l:ex|For instance}, a pupil {r|who does not understand a maths problem late at night} {m|can ask} for a step-by-step explanation."],
          ["argument", "{l:add|Moreover}, AI tools give instant feedback on spelling and grammar, {r|which helps pupils to improve their writing}."],
          ["gevolg", "{l:res|Therefore}, pupils {m|might learn} {cmp|more quickly than} before."]],
        [["topic", "{l:con|However}, there are also serious risks."],
          ["argument", "{l:seq|Firstly}, some pupils let a chatbot do all the work {g|instead of thinking} for themselves."],
          ["uitleg", "{c|If they {g|keep doing} this, they {f|will never develop} the skills {r|they need for their exams}}."],
          ["argument", "{l:add|In addition}, AI is not always reliable, as it sometimes gives answers {r|that sound convincing but are simply wrong}."],
          ["gevolg", "{l:res|As a result}, many teachers {pp|have become} {cmp|more careful} when they mark homework."]],
        [["samenvatting", "{l:end|To sum up}, AI {m|can support} learning, but it {m|can} also replace it."],
          ["mening", "{l:op|In my view}, pupils {m,p|should be allowed} to use AI, as long as they use it for feedback and explanations rather than to write their homework for them."],
          ["slotzin", "After all, a tool is only {cmp|as good as} the person {r|who uses it}."]]
      ]
    }
  ];
  E.ROL = { hook: "hook", onderwerp: "onderwerp", thesis: "thesis statement", topic: "topic sentence", argument: "argument", voorbeeld: "voorbeeld", uitleg: "uitleg", gevolg: "gevolg", samenvatting: "samenvatting", mening: "eigen mening", slotzin: "slotzin" };
  E.GSOORT = { p: "passive", pp: "present perfect", c: "conditional", r: "relative clause", m: "modal verb", cmp: "comparative", g: "gerund (-ing)", f: "future" };
  E.GUITLEG = {
    p: "Passive: vorm van to be + voltooid deelwoord. De handeling staat centraal, niet wie het doet.",
    pp: "Present perfect: have/has + voltooid deelwoord. Begonnen in het verleden, nu nog van belang; geen vast tijdstip erbij.",
    c: "Conditional: een if-zin met een gevolg. Kijk welke tijden er staan om het type te herkennen.",
    r: "Relative clause: bijzin met who, which, that, whose of where die iets zegt over het woord ervoor. Soms is het betrekkelijk voornaamwoord weggelaten: the skills (that) they need.",
    m: "Modal verb: can, could, may, might, must, should, would. Erna komt het hele werkwoord zonder to.",
    cmp: "Vergelijking: -er/more ... than, as ... as, of de overtreffende trap (the most, the best).",
    g: "Gerund: werkwoord + -ing als zelfstandig naamwoord, bijvoorbeeld na een voorzetsel (instead of thinking) of na keep/enjoy/avoid.",
    f: "Future: will + hele werkwoord voor een voorspelling of gevolg."
  };

  // Eenvoudige parser voor de opmaak hierboven.
  E.parse = function (s) {
    let i = 0;
    function seq(binnen) {
      const out = []; let buf = "";
      while (i < s.length) {
        const c = s[i];
        if (c === "{") { if (buf) { out.push(buf); buf = ""; } const bar = s.indexOf("|", i); const tag = s.slice(i + 1, bar); i = bar + 1; out.push({ tag, kids: seq(true) }); }
        else if (c === "}" && binnen) { i++; if (buf) out.push(buf); return out; }
        else { buf += c; i++; }
      }
      if (buf) out.push(buf);
      return out;
    }
    return seq(false);
  };
  E.plat = (nodes) => nodes.map((n) => (typeof n === "string" ? n : E.plat(n.kids))).join("");
  E.soorten = function (nodes, acc) { acc = acc || []; nodes.forEach((n) => { if (typeof n !== "string") { if (n.tag.startsWith("l:")) acc.push(n.tag); else n.tag.split(",").forEach((t) => acc.push(t)); E.soorten(n.kids, acc); } }); return acc; };
  E.essayTekst = (es) => es.alineas.map((a) => a.map((z) => E.plat(E.parse(z[1]))).join(" ")).join("\n\n");

  // ---------- grammatica herkennen (hulpmiddel, geen garantie) ----------
  const PP = new Set(); (E.VERBS || []).forEach((v) => v[2].split("/").forEach((x) => PP.add(x))); ["shown", "showed", "gotten", "learnt", "learned", "dreamt", "burnt", "spelt", "spoilt", "born", "torn", "sworn", "hurt", "let", "lit", "bent", "lent", "dealt", "fed", "fled", "bound", "struck", "hung", "forbidden", "forgiven", "ridden", "risen", "shaken", "woken", "beaten", "bitten", "frozen", "proven", "sought"].forEach((x) => PP.add(x));
  const ppAlt = "(?:\\w{2,}ed|" + [...PP].join("|") + ")";
  const bijw = "(?:(?:not|also|often|still|now|usually|always|never|already|just|recently|ever|widely|easily|completely|largely|being|really|even|probably|certainly)\\s+){0,2}";
  E.GRAM = [
    { id: "passive", naam: "Passive", uitleg: "to be (in de goede tijd) + voltooid deelwoord", vb: "Phones are banned in many schools.", re: [new RegExp("\\b(?:am|is|are|was|were|be|been|being|isn['’]t|aren['’]t|wasn['’]t|weren['’]t)\\s+" + bijw + ppAlt + "\\b", "i")] },
    { id: "if", naam: "If-zin (conditional)", uitleg: "If + voorwaarde, gevolg (zero, first, second of third)", vb: "If schools ban phones, pupils will concentrate better.", re: [/\b(?:if|unless)\b/i] },
    { id: "second", naam: "Second conditional", uitleg: "If + past simple, would + hele werkwoord", vb: "If I were the head teacher, I would allow phones during breaks.", re: [/\bif\b[^.!?]*\bwould\b(?!\s+have)|\bwould\b(?!\s+have)[^.!?]*\bif\b/i] },
    { id: "third", naam: "Third conditional", uitleg: "If + had + voltooid deelwoord, would have + voltooid deelwoord", vb: "If the school had asked the pupils, the rule would have been fairer.", re: [/\bif\b[^.!?]*\bhad\b[^.!?]*\b(?:would|could|might)\s+(?:not\s+)?have\b|\b(?:would|could|might)\s+(?:not\s+)?have\b[^.!?]*\bif\b[^.!?]*\bhad\b/i] },
    { id: "relative", naam: "Relative clause", uitleg: "who, which, that, whose of where na een zelfstandig naamwoord", vb: "Pupils who use their phones in class miss important information.", re: [/\b\w+,?\s+(?:who|whom|whose|which)\b/i, /\b(?:people|pupils|students|teenagers|children|someone|anyone|everyone|parents|teachers|things?|tools?|apps?|jobs?|reasons?|problems?|rules?|ways?|skills?|the only|the first)\s+that\b/i, /\b(?:country|countries|place|places|school|schools|city|world|situation|area|town)\s+where\b/i] },
    { id: "perfect", naam: "Present perfect", uitleg: "have/has + voltooid deelwoord", vb: "Social media has changed the way we communicate.", re: [new RegExp("\\b(?:have|has|['’]ve|haven['’]t|hasn['’]t)\\s+" + bijw + ppAlt + "\\b", "i")] },
    { id: "modal", naam: "Modal verb", uitleg: "can, could, may, might, must, should + hele werkwoord", vb: "Schools should teach pupils how to use AI responsibly.", re: [/\b(?:can|could|may|might|must|should|ought to|cannot|needn['’]t)\b/i] },
    { id: "comparative", naam: "Comparative", uitleg: "-er/more ... than, less ... than, as ... as", vb: "Online lessons are more flexible than lessons at school.", re: [/\b(?:\w+er|more\s+\w+|less\s+\w+|fewer\s+\w+)\s+than\b/i, /\bas\s+\w+\s+as\b/i, /\b(?:better|worse)\b/i] },
    { id: "superlative", naam: "Superlative", uitleg: "the -est, the most ..., the best/worst", vb: "The biggest advantage is that pupils save time.", re: [/\bthe\s+(?:most|least|best|worst)\b/i, /\bthe\s+\w+est\b/i] },
    { id: "gerund", naam: "Gerund (-ing)", uitleg: "-ing na een voorzetsel of na enjoy/avoid/keep/suggest", vb: "Instead of banning phones, schools could set clear rules.", re: [/\b(?:of|for|about|without|by|before|after|in|on|at)\s+\w{2,}ing\b/i, /\b(?:enjoy|enjoys|avoid|avoids|keep|keeps|suggest|suggests|consider|considers|mind|stop|stops|spend|spends)\s+\w{2,}ing\b/i, /(?:^|[.!?]\s+)[A-Z]\w{2,}ing\s+\w+\s+(?:is|are|can|has|makes|helps)\b/] },
    { id: "future", naam: "Future (will / going to)", uitleg: "will + hele werkwoord of be going to", vb: "Robots will replace many jobs in the future.", re: [/\b(?:will|won['’]t|['’]ll)\s+\w+/i, /\bgoing to\s+\w+/i] }
  ];
  E.GRAMID = Object.fromEntries(E.GRAM.map((g) => [g.id, g]));
  // Bijvoeglijke naamwoorden op -ed die geen passive zijn (She is tired, They are interested).
  const ADJ = new Set("tired interested worried bored excited scared married concerned pleased surprised satisfied frightened embarrassed annoyed amazed disappointed relaxed stressed convinced supposed prepared confused shocked exhausted ashamed qualified skilled talented advanced crowded detailed limited balanced old-fashioned".split(" "));
  const nietPassief = (stuk) => ADJ.has(stuk.toLowerCase().split(/\s+/).pop());
  E.zoekGram = function (g, tekst) {
    for (const z of zinnen(tekst)) for (const re of g.re) {
      if (g.id === "relative" && /^\s*(?:which|who|whose)\b[^.]*\?$/i.test(z)) continue;
      const alle = z.match(new RegExp(re.source, re.flags.includes("g") ? re.flags : re.flags + "g")) || [];
      const m = alle.find((x) => g.id !== "passive" || !nietPassief(x));
      if (m) return { zin: z, stuk: m };
    }
    return null;
  };

  // ---------- Dunglish en stijl ----------
  E.DUNGLISH = [
    [/\bI\s+am\s+(?:not\s+)?agree\b/i, "'I am agree' bestaat niet. Schrijf: I agree / I do not agree."],
    [/\bmore\s+(?:better|worse|bigger|easier|harder|cheaper|faster|smaller|healthier)\b/i, "Dubbele vergrotende trap: niet 'more better' maar better."],
    [/\bmake\s+(?:my\s+|their\s+|your\s+|his\s+|her\s+|our\s+|there\s+)?homework\b/i, "Huiswerk 'doe' je: do your homework."],
    [/\bthe\s+society\b/i, "Algemeen bedoeld zonder the: society."],
    [/\bmuch\s+(?:people|pupils|students|children|teenagers|things|problems|jobs)\b/i, "Telbaar meervoud: many people, many problems."],
    [/\blearns?\s+(?:me|you|us|them|him|her|pupils|children)\b/i, "Iemand iets leren = teach: It teaches you ..."],
    [/\baccording\s+to\s+me\b/i, "'According to me' is Dunglish. Schrijf: in my opinion / in my view."],
    [/\bin\s+my\s+opinion,?\s+I\s+think\b/i, "Dubbelop: kies in my opinion óf I think."],
    [/\bdiscuss(?:es|ed)?\s+about\b/i, "Discuss zonder about: discuss the problem."],
    [/\b(?:more|less)\s+(?:\w+\s+)?then\b|\b\w+er\s+then\b/i, "Na een vergelijking: than, niet then."],
    [/\bsince\s+\d+\s+(?:years|months|weeks|days)\b/i, "Een periode gaat met for: for two years (since + beginpunt: since 2020)."],
    [/\b(?:informations|advices|homeworks|knowledges|equipments|researches)\b/i, "Ontelbaar: information, advice, homework, knowledge, equipment, research zonder -s."],
    [/\bpersons\b/i, "Meervoud van person is meestal people."],
    [/\bon\s+school\b/i, "Op school = at school."],
    [/\bwith\s+other\s+words\b/i, "Met andere woorden = in other words."],
    [/\bpeople\s+(?:is|was|has)\b/i, "People is meervoud: people are / were / have."],
    [/\b(?:everybody|everyone|nobody|somebody)\s+(?:have|are|were|do)\b/i, "Everybody/everyone/nobody krijgt een enkelvoudig werkwoord: everyone has, nobody is."],
    [/\bdepends?\s+of\b/i, "Afhangen van = depend on."],
    [/\binterested\s+(?:for|about)\b/i, "Geïnteresseerd in = interested in."],
    [/\bmake\s+(?:a\s+)?(?:photo|picture)s?\b/i, "Een foto maken = take a photo."],
    [/\bcontrol(?:s|led)?\s+(?:my|your|their|the)\s+(?:homework|answers|work|text|essay)\b/i, "Controleren = check: check your answers."],
    [/\bactual(?:ly)?\b/i, "Let op: actual(ly) betekent eigenlijk/werkelijk, niet actueel. Actueel = current, topical."],
    [/\beventual(?:ly)?\b/i, "Let op: eventually = uiteindelijk, niet eventueel. Eventueel = possibly."],
    [/\b(?:to\s+much|to\s+many)\b/i, "Te veel = too much / too many (met dubbele o)."],
    [/\b(?:there|they['’]re)\s+(?:homework|marks|parents|phones|friends|teachers|own|lives|time|money|future)\b/i, "Bezittelijk 'hun' = their: their homework, their marks."],
    [/\b(?:gonna|wanna|gotta|kinda|cuz|cos)\b/i, "Spreektaal: schrijf going to, want to, because."],
    [/\b(?:kids|stuff|guys|okay|ok)\b/i, "Informeel woord: children, things, people, fine."],
    [/\ba\s+lot\s+of\b|\blots\s+of\b/i, "A lot of is wat informeel. In een essay: many, much, a great deal of, a large number of."],
    [/\bit['’]s\s+(?:own|colour|size|users|goal|purpose)\b/i, "Bezittelijk: its (zonder apostrof). It's = it is."]
  ];
  E.CONTR = /\b\w+(?:n['’]t|['’]re|['’]ve|['’]ll|['’]m|['’]d)\b|\b(?:it|that|there|here|what|who|he|she|let|where)['’]s\b/gi;
  const STOP = new Set("the and that this with have from they their there them then than will would could should about which what when where your into more also been were very some such many much most because these those other being does just only over even make made like well both each between while after before through during".split(" "));
  E.SYN = { important: "essential, crucial, significant", good: "beneficial, positive, valuable", bad: "harmful, negative, damaging", think: "believe, feel, argue", problem: "issue, drawback, challenge", problems: "issues, drawbacks, challenges", things: "aspects, factors, matters", thing: "aspect, factor", big: "large, considerable, major", really: "extremely, highly (of weglaten)", very: "extremely, highly (of weglaten)", people: "individuals, citizens, young people", help: "support, assist, enable", helps: "supports, enables", lot: "many, a great deal, a large number", nice: "pleasant, enjoyable, useful", easy: "simple, straightforward", show: "demonstrate, reveal, prove" };

  E.analyse = function (tekst) {
    const t = String(tekst || "");
    const w = E.woorden(t);
    const blokken = t.split(/\n\s*\n/).map((x) => x.trim()).filter(Boolean);
    const regels = t.split(/\n/).map((x) => x.trim()).filter(Boolean);
    const zz = zinnen(t);
    const lens = zz.map((z) => E.woorden(z).length);
    const low = t.toLowerCase();
    const link = E.FUNCTIES.map(([id, naam, lijst]) => {
      const gev = [];
      lijst.forEach((p) => { const re = new RegExp("(^|[^a-z])" + p.replace(/ /g, "\\s+") + "(?![a-z])", "g"); const n = (low.match(re) || []).length; if (n) gev.push([p, n]); });
      return { id, naam, gev, n: gev.reduce((s, x) => s + x[1], 0) };
    });
    const tel = {}; w.forEach((x) => { const k = x.toLowerCase().replace(/['’].*$/, ""); if (k.length >= 4 && !STOP.has(k)) tel[k] = (tel[k] || 0) + 1; });
    const grens = w.length < 150 ? 3 : 4;
    const herhaal = Object.entries(tel).filter((e) => e[1] >= grens).sort((a, b) => b[1] - a[1]).slice(0, 6);
    return {
      woorden: w.length, alineas: blokken.length, regels: regels.length, zinnen: zz.length,
      gem: lens.length ? lens.reduce((a, b) => a + b, 0) / lens.length : 0,
      lang: zz.filter((z, i) => lens[i] > 30), kort: zz.filter((z, i) => lens[i] < 5),
      contr: [...new Set((t.match(E.CONTR) || []).map((x) => x.toLowerCase()))],
      kleinI: (t.match(/(^|[^A-Za-z'’])i(?=[^A-Za-z'’]|$)/g) || []).length + (t.match(/(^|[^A-Za-z])i['’]m\b/g) || []).length,
      link, herhaal,
      dung: E.DUNGLISH.map(([re, m]) => { const x = t.match(re); return x ? [x[0], m] : null; }).filter(Boolean),
      jij: (t.match(/\byou\b/gi) || []).length,
      uitroep: (t.match(/!/g) || []).length
    };
  };

  // ---------- gedeelde instellingen: de toetseisen ----------
  const EIS0 = { gram: ["passive", "if", "relative", "perfect", "modal", "comparative"], min: 200, max: 250, minuten: 50, onderwerp: "", zinnen: {} };
  E.eisen = () => Object.assign({}, EIS0, E.laad("eisen", {}));
  E.zetEisen = (e) => E.bewaar("eisen", e);

  E.CHECK = [
    "Vier alinea's met een witregel ertussen",
    "De inleiding heeft een hook, het onderwerp en een thesis statement",
    "In de inleiding staat nog geen mening",
    "Elke body-alinea begint met een topic sentence",
    "Elk argument heeft een uitleg of voorbeeld",
    "Pros en cons zijn ongeveer even lang",
    "Linking words uit minstens vijf functies",
    "Geen contractions, geen spreektaal, I met hoofdletter",
    "Mijn mening staat in het slot, zonder nieuw argument",
    "Alle verplichte grammatica zit erin",
    "Het aantal woorden valt binnen de grenzen",
    "Nagekeken op their/there, than/then, its/it's en much/many"
  ];
  const CHECK = E.CHECK;

  // ---------- writing arena ----------
  TW.widget("arena", {
    titel: "Writing arena", icoon: "✍️",
    uitleg: "Schrijf je essay op tijd en met een woorddoel. Je krijgt live terugkoppeling en ziet of je verplichte grammatica er waarschijnlijk in zit. Je tekst blijft bewaard op dit apparaat.",
    maak(el, api) {
      const st = Object.assign({ tekst: "", score: {} }, E.laad("arena", {}));
      const eis = E.eisen();
      let rest = eis.minuten * 60, loopt = false, tik = null, klaarGemeld = false;
      el.innerHTML = `
        <div class="ar-top">
          <div class="ar-tel"><b class="groot" id="arW">0</b> <span class="meta">woorden · doel <span id="arDoel"></span></span><div class="bar ar-bar"><i id="arBar"></i></div></div>
          <div class="ar-klok"><b class="groot" id="arT">--:--</b><div class="row" style="margin-top:4px"><button class="btn klein" id="arStart">▶ Start</button><button class="btn klein" id="arReset" aria-label="Timer opnieuw">↺</button></div></div>
        </div>
        <details class="ar-inst"><summary>Instellingen: woorden, tijd en onderwerp</summary>
          <div class="ar-grid">
            <label>Minimaal <input type="number" id="arMin" min="50" max="1000" step="10" inputmode="numeric"></label>
            <label>Maximaal <input type="number" id="arMax" min="50" max="1000" step="10" inputmode="numeric"></label>
            <label>Minuten <input type="number" id="arMinuten" min="5" max="180" step="5" inputmode="numeric"></label>
          </div>
          <label class="ar-ond">Onderwerp of stelling <input type="text" id="arOnd" placeholder="bijv. Should homework be abolished?"></label>
        </details>
        <p class="ar-onderwerp" id="arOndTxt"></p>
        <textarea id="arTxt" rows="14" spellcheck="false" autocapitalize="sentences" placeholder="Begin hier met je essay. Zet een witregel tussen je alinea's."></textarea>
        <div class="row"><button class="btn klein" id="arKop">📋 Kopieer tekst</button><button class="btn klein" id="arWis">Wis tekst</button></div>
        <div id="arFb"></div>
        <div class="card ar-gram"><h3>Welke grammatica moet erin?</h3><p class="meta">Tik aan wat de opdracht eist. De app zoekt met eenvoudige patronen of de constructie <b>waarschijnlijk</b> in je tekst staat. Dit is een hulpmiddel, geen garantie: lees zelf na of de zin echt klopt.</p><div class="keuze" id="arGk"></div><div id="arGs"></div></div>
        <div class="card"><h3>Scoor jezelf</h3><p class="meta">Lees je essay na en vink eerlijk af.</p><div id="arCk"></div><p class="uit" id="arScore"></p></div>`;
      const $ = (id) => el.querySelector("#" + id);
      const ta = $("arTxt"); ta.value = st.tekst;
      $("arMin").value = eis.min; $("arMax").value = eis.max; $("arMinuten").value = eis.minuten; $("arOnd").value = eis.onderwerp;
      const fmtT = (s) => (s < 0 ? "-" : "") + String(Math.floor(Math.abs(s) / 60)).padStart(2, "0") + ":" + String(Math.abs(s) % 60).padStart(2, "0");
      function klok() { $("arT").textContent = fmtT(rest); $("arT").classList.toggle("op", rest <= 0); $("arT").classList.toggle("bijna", rest > 0 && rest <= 300); $("arStart").textContent = loopt ? "⏸ Pauze" : "▶ Start"; }
      $("arStart").onclick = () => {
        loopt = !loopt;
        if (loopt) tik = setInterval(() => { rest--; klok(); }, 1000); else clearInterval(tik);
        klok();
      };
      $("arReset").onclick = () => { loopt = false; clearInterval(tik); rest = eis.minuten * 60; klok(); };
      api.opruimen(() => clearInterval(tik));
      function bewaarEis() {
        Object.assign(eis, E.eisen());
        eis.min = Math.max(10, parseInt($("arMin").value, 10) || 200); eis.max = Math.max(eis.min, parseInt($("arMax").value, 10) || eis.min);
        const m = Math.max(1, parseInt($("arMinuten").value, 10) || 50); if (m !== eis.minuten && !loopt) rest = m * 60; eis.minuten = m;
        eis.onderwerp = $("arOnd").value.trim(); E.zetEisen(eis); klok(); update();
      }
      ["arMin", "arMax", "arMinuten", "arOnd"].forEach((id) => { $(id).onchange = bewaarEis; });
      let wisKlik = 0;
      $("arKop").onclick = (e) => E.kopieer((eis.onderwerp ? eis.onderwerp + "\n\n" : "") + ta.value, e.currentTarget);
      $("arWis").onclick = (e) => {
        const b = e.currentTarget; if (!ta.value) return;
        if (!wisKlik) { wisKlik = 1; b.textContent = "Zeker weten? Tik nog eens"; setTimeout(() => { wisKlik = 0; b.textContent = "Wis tekst"; }, 3000); return; }
        ta.value = ""; wisKlik = 0; b.textContent = "Wis tekst"; opslaan(); update();
      };
      let tijd = null;
      function opslaan() { st.tekst = ta.value; E.bewaar("arena", st); }
      ta.addEventListener("input", () => { clearTimeout(tijd); tijd = setTimeout(() => { opslaan(); update(); }, 350); });
      api.opruimen(() => { clearTimeout(tijd); opslaan(); });

      function update() {
        const a = E.analyse(ta.value);
        $("arW").textContent = a.woorden;
        $("arDoel").textContent = `${eis.min}-${eis.max}`;
        $("arOndTxt").textContent = eis.onderwerp ? "Onderwerp: " + eis.onderwerp : "";
        const bar = $("arBar"); bar.style.width = Math.min(100, (a.woorden / eis.max) * 100) + "%";
        bar.className = a.woorden > eis.max ? "te" : a.woorden >= eis.min ? "ok" : "";
        const pt = (ok, html) => `<li class="${ok === true ? "ok" : ok === false ? "nok" : "info"}">${html}</li>`;
        const al = a.alineas;
        const L = [];
        L.push(pt(al === 4 ? true : a.woorden < 40 ? null : false, `<b>Alinea's:</b> ${al}${al === 4 ? " ✓" : al < 4 ? " (doel: 4, met een witregel ertussen)" : " (meer dan 4 mag, als pros en cons maar duidelijk gescheiden zijn)"}${al === 1 && a.regels > 1 ? ". Je gebruikt enters zonder witregel: zet een lege regel tussen je alinea's." : ""}`));
        L.push(pt(a.contr.length ? false : a.woorden ? true : null, `<b>Contractions:</b> ${a.contr.length ? a.contr.map((c) => `<code>${esc(c)}</code>`).join(" ") + " → schrijf voluit (do not, it is)" : "geen ✓"}`));
        L.push(pt(a.kleinI ? false : a.woorden ? true : null, `<b>Kleine letter i:</b> ${a.kleinI ? a.kleinI + "× gevonden. I is altijd een hoofdletter." : "niet gevonden ✓"}`));
        if (a.zinnen) L.push(pt(a.lang.length ? false : a.gem < 8 && a.zinnen > 3 ? null : true, `<b>Zinslengte:</b> gemiddeld ${a.gem.toFixed(1).replace(".", ",")} woorden per zin.${a.gem < 10 && a.zinnen > 3 ? " Vrij korte zinnen: verbind er een paar met because, which of although." : ""}${a.lang.length ? ` ${a.lang.length} zin(nen) van meer dan 30 woorden: splits ze. Begint met: <i>${esc(a.lang[0].split(" ").slice(0, 6).join(" "))} ...</i>` : ""}`));
        if (a.herhaal.length) L.push(pt(false, `<b>Herhaalde woorden:</b> ${a.herhaal.map(([w, n]) => `${esc(w)} (${n}×)${E.SYN[w] ? ` <span class="meta">probeer: ${esc(E.SYN[w])}</span>` : ""}`).join("; ")}`));
        if (a.jij > 1) L.push(pt(false, `<b>You:</b> ${a.jij}× gebruikt. Spreek de lezer in een essay liever niet aan: people, pupils, one.`));
        if (a.uitroep) L.push(pt(false, `<b>Uitroeptekens:</b> ${a.uitroep}×. Formeel schrijf je zonder uitroeptekens.`));
        a.dung.forEach(([w, m]) => L.push(pt(false, `<b>Let op</b> <code>${esc(w)}</code>: ${esc(m)}`)));
        const fn = a.link.filter((x) => x.n).length;
        $("arFb").innerHTML = a.woorden ? `<div class="card"><h3>Terugkoppeling</h3><ul class="ar-fb">${L.join("")}</ul>
          <h4>Linking words per functie <span class="meta">(${fn} van 8)</span></h4><div class="ar-link">${a.link.map((x) => `<span class="lchip f-${x.id} ${x.n ? "aan" : ""}"><b>${esc(x.naam)}</b> ${x.n ? x.n + "× <small>" + esc(x.gev.map((g) => g[0]).join(", ")) + "</small>" : "<small>nog niet</small>"}</span>`).join("")}</div>
          ${fn < 5 ? `<p class="meta">Gebruik linking words uit minstens vijf functies. Ontbreekt nog: ${a.link.filter((x) => !x.n).map((x) => x.naam.toLowerCase()).join(", ")}.</p>` : ""}</div>` : `<p class="meta">Begin met typen: de terugkoppeling verschijnt hier.</p>`;
        gram();
        if (!klaarGemeld && a.woorden >= eis.min) { klaarGemeld = true; api.klaar(); }
      }
      function gram() {
        $("arGk").innerHTML = E.GRAM.map((g) => `<button class="btn ${eis.gram.includes(g.id) ? "aan" : ""}" data-g="${g.id}">${eis.gram.includes(g.id) ? "✓ " : ""}${esc(g.naam)}</button>`).join("");
        $("arGk").querySelectorAll("button").forEach((b) => { b.onclick = () => { const id = b.dataset.g; Object.assign(eis, E.eisen(), { gram: eis.gram.includes(id) ? eis.gram.filter((x) => x !== id) : eis.gram.concat(id) }); E.zetEisen(eis); gram(); }; });
        const t = ta.value;
        $("arGs").innerHTML = eis.gram.length ? `<ul class="ar-fb">${eis.gram.map((id) => { const g = E.GRAMID[id]; if (!g) return ""; const m = t.trim() ? E.zoekGram(g, t) : null; return `<li class="${m ? "ok" : "nok"}"><b>${esc(g.naam)}:</b> ${m ? `waarschijnlijk gevonden in <i>${esc(m.zin.length > 90 ? m.zin.slice(0, 87) + "..." : m.zin)}</i>` : `niet gevonden. <span class="meta">${esc(g.uitleg)}, bijv. ${esc(g.vb)}</span>`}</li>`; }).join("")}</ul>` : `<p class="meta">Nog niets gekozen.</p>`;
      }
      function check() {
        $("arCk").innerHTML = CHECK.map((c, i) => `<label class="vink"><input type="checkbox" data-i="${i}" ${st.score[i] ? "checked" : ""}><span>${esc(c)}</span></label>`).join("");
        $("arCk").querySelectorAll("input").forEach((x) => { x.onchange = () => { st.score[x.dataset.i] = x.checked ? 1 : 0; E.bewaar("arena", st); score(); }; });
        score();
      }
      function score() { const n = CHECK.filter((c, i) => st.score[i]).length; $("arScore").innerHTML = `<b>${n} van ${CHECK.length}</b> ${n === CHECK.length ? "Klaar om in te leveren." : n >= 9 ? "Bijna: kijk nog naar wat open staat." : "Werk de open punten af."}`; }
      klok(); update(); check();
    }
  });

  // ---------- mijn toetseisen ----------
  TW.widget("eisen", {
    titel: "Mijn toetseisen", icoon: "📌",
    uitleg: "Stel in wat er in de opdracht staat: aantal woorden, tijd en de verplichte grammatica. Schrijf daarna per constructie één eigen zin. De writing arena gebruikt dezelfde instellingen.",
    maak(el, api) {
      const eis = E.eisen();
      el.innerHTML = `<div class="ar-grid">
          <label>Minimaal <input type="number" id="eMin" min="50" max="1000" step="10" inputmode="numeric"></label>
          <label>Maximaal <input type="number" id="eMax" min="50" max="1000" step="10" inputmode="numeric"></label>
          <label>Minuten <input type="number" id="eMinuten" min="5" max="180" step="5" inputmode="numeric"></label></div>
        <label class="ar-ond">Onderwerp of stelling <input type="text" id="eOnd" placeholder="Nog niet bekend? Laat leeg."></label>
        <h4>Verplichte grammatica</h4><div class="keuze" id="eK"></div>
        <div id="eL"></div><p class="uit" id="eS"></p>
        <p class="meta">De controle zoekt met eenvoudige patronen. Een vinkje betekent: waarschijnlijk goed. Lees zelf na of je zin klopt.</p>`;
      const $ = (id) => el.querySelector("#" + id);
      $("eMin").value = eis.min; $("eMax").value = eis.max; $("eMinuten").value = eis.minuten; $("eOnd").value = eis.onderwerp;
      ["eMin", "eMax", "eMinuten", "eOnd"].forEach((id) => { $(id).onchange = () => {
        eis.min = Math.max(10, parseInt($("eMin").value, 10) || 200); eis.max = Math.max(eis.min, parseInt($("eMax").value, 10) || eis.min);
        eis.minuten = Math.max(1, parseInt($("eMinuten").value, 10) || 50); eis.onderwerp = $("eOnd").value.trim(); E.zetEisen(eis);
      }; });
      function teken() {
        $("eK").innerHTML = E.GRAM.map((g) => `<button class="btn ${eis.gram.includes(g.id) ? "aan" : ""}" data-g="${g.id}">${eis.gram.includes(g.id) ? "✓ " : ""}${esc(g.naam)}</button>`).join("");
        $("eK").querySelectorAll("button").forEach((b) => { b.onclick = () => { const id = b.dataset.g; eis.gram = eis.gram.includes(id) ? eis.gram.filter((x) => x !== id) : eis.gram.concat(id); E.zetEisen(eis); teken(); }; });
        $("eL").innerHTML = eis.gram.map((id) => { const g = E.GRAMID[id]; return g ? `<div class="card ei"><b>${esc(g.naam)}</b> <span class="meta">${esc(g.uitleg)}</span><p class="ei-vb">${esc(g.vb)}</p>
          <input type="text" data-z="${id}" placeholder="Schrijf zelf een zin met ${esc(g.naam.toLowerCase())}" autocapitalize="sentences" spellcheck="false"><p class="fb" data-f="${id}"></p></div>` : ""; }).join("");
        $("eL").querySelectorAll("input[data-z]").forEach((inp) => { inp.value = (eis.zinnen || {})[inp.dataset.z] || ""; inp.oninput = () => { eis.zinnen = eis.zinnen || {}; eis.zinnen[inp.dataset.z] = inp.value; E.zetEisen(eis); fb(inp.dataset.z); }; fb(inp.dataset.z); });
        status();
      }
      function fb(id) {
        const t = ((eis.zinnen || {})[id] || "").trim(), f = el.querySelector(`[data-f="${id}"]`); if (!f) return;
        if (!t) { f.innerHTML = ""; status(); return; }
        const m = E.zoekGram(E.GRAMID[id], t);
        const extra = E.analyse(t);
        f.innerHTML = m ? `<span class="okt">✓ Waarschijnlijk goed</span> <span class="meta">(gevonden: <i>${esc(m.stuk)}</i>)</span>${extra.contr.length ? ' <span class="nok">Maar: schrijf contractions voluit.</span>' : ""}` : `<span class="nok">Nog niet herkend.</span> <span class="meta">Kijk naar het voorbeeld: ${esc(E.GRAMID[id].uitleg)}.</span>`;
        status();
      }
      function status() {
        const ok = eis.gram.filter((id) => { const t = ((eis.zinnen || {})[id] || "").trim(); return t && E.zoekGram(E.GRAMID[id], t); }).length;
        $("eS").innerHTML = eis.gram.length ? `<b>${ok} van ${eis.gram.length}</b> constructies geoefend.${ok === eis.gram.length ? " Mooi: zet deze zinnen in je essay." : ""}` : "Kies hierboven welke grammatica verplicht is.";
        if (eis.gram.length && ok === eis.gram.length) api.klaar();
      }
      teken();
    }
  });

  // ---------- essay builder ----------
  const BOUW = [
    ["Introduction", [
      ["hook", "Hook", ["Imagine ...", "Have you ever wondered ...?", "Nowadays, ...", "Almost everyone ...", "In recent years, ..."]],
      ["ond", "Onderwerp", ["More and more people ...", "Recently, there has been a debate about ...", "Many people believe that ..., while others ..."]],
      ["thesis", "Thesis statement", ["This essay discusses the advantages and disadvantages of ...", "This essay will examine the arguments for and against ..."]]]],
    ["Body 1: pros", [
      ["t1", "Topic sentence", ["On the one hand, ... has several advantages.", "There are a number of benefits to ...", "Supporters of ... put forward several arguments."]],
      ["p1", "Argument 1 + uitleg", ["Firstly, ...", "The main advantage is that ...", "For example, ...", "This means that ..."]],
      ["p2", "Argument 2 + uitleg", ["Secondly, ...", "Furthermore, ...", "In addition, ...", "As a result, ..."]]]],
    ["Body 2: cons", [
      ["t2", "Topic sentence", ["On the other hand, there are also some drawbacks.", "However, ... also has disadvantages.", "Critics, however, claim that ..."]],
      ["c1", "Argument 1 + uitleg", ["To begin with, ...", "A serious disadvantage is that ...", "For instance, ...", "Consequently, ..."]],
      ["c2", "Argument 2 + uitleg", ["Moreover, ...", "What is more, ...", "Another problem is that ...", "Therefore, ..."]]]],
    ["Conclusion", [
      ["sam", "Samenvatting", ["To sum up, ...", "All things considered, ...", "In conclusion, ... has both benefits and drawbacks."]],
      ["men", "Afweging en mening", ["In my opinion, ...", "On balance, I believe that ...", "Although ..., I feel that the advantages outweigh the disadvantages."]],
      ["slot", "Slotzin", ["Perhaps the best solution would be to ...", "In the end, ...", "If ..., ... would ..."]]]]
  ];
  E.ONDERWERPEN = ["Should mobile phones be banned in secondary schools?", "Should pupils be allowed to use AI for their homework?", "Should social media be forbidden for children under sixteen?", "Should homework be abolished?", "Is it a good idea for teenagers to have a part-time job?", "Should meat be taxed to protect the climate?", "Should school start later in the morning?", "Are online lessons better than lessons at school?"];
  const ONDERWERPEN = E.ONDERWERPEN;
  TW.widget("bouwer", {
    titel: "Essay builder", icoon: "🧱",
    uitleg: "Kies een onderwerp en bouw per alinea je essay op. Tik een zinsopener aan om hem in te voegen en vul de ___ in. Je outline blijft bewaard en kun je kopiëren of naar de writing arena sturen.",
    maak(el, api) {
      const st = Object.assign({ ond: "", v: {} }, E.laad("bouwer", {}));
      el.innerHTML = `<label class="ar-ond">Onderwerp <select id="bSel"><option value="">Kies een onderwerp ...</option>${ONDERWERPEN.map((o) => `<option>${esc(o)}</option>`).join("")}<option value="*">Zelf typen ...</option></select></label>
        <input type="text" id="bOnd" class="b-eigen" placeholder="Typ je eigen onderwerp" hidden>
        <div id="bAl"></div><p class="uit" id="bSt"></p>
        <div class="row"><button class="btn klein" id="bKop">📋 Kopieer outline</button><button class="btn klein primary" id="bAr">✍️ Naar de writing arena</button><button class="btn klein" id="bWis">Begin opnieuw</button></div>`;
      const $ = (id) => el.querySelector("#" + id);
      const sel = $("bSel"), ond = $("bOnd");
      if (st.ond && ONDERWERPEN.includes(st.ond)) sel.value = st.ond; else if (st.ond) { sel.value = "*"; ond.hidden = false; ond.value = st.ond; }
      sel.onchange = () => { if (sel.value === "*") { ond.hidden = false; ond.focus(); st.ond = ond.value; } else { ond.hidden = true; st.ond = sel.value; } E.bewaar("bouwer", st); status(); };
      ond.oninput = () => { st.ond = ond.value; E.bewaar("bouwer", st); status(); };
      $("bAl").innerHTML = BOUW.map(([kop, slots], ai) => `<div class="card bw"><h3>${ai + 1}. ${esc(kop)}</h3>${slots.map(([id, naam, op]) => `
        <div class="bw-slot"><b>${esc(naam)}</b><div class="bw-op">${op.map((o) => `<button class="chip" data-s="${id}">${esc(o)}</button>`).join("")}</div>
        <textarea rows="2" data-t="${id}" spellcheck="false" autocapitalize="sentences" placeholder="${esc(naam)} ..."></textarea></div>`).join("")}</div>`).join("");
      el.querySelectorAll("textarea[data-t]").forEach((t) => { t.value = st.v[t.dataset.t] || ""; t.oninput = () => { st.v[t.dataset.t] = t.value; E.bewaar("bouwer", st); status(); }; });
      el.querySelectorAll(".bw-op .chip").forEach((c) => { c.onclick = () => {
        const t = el.querySelector(`textarea[data-t="${c.dataset.s}"]`);
        const nu = t.value.trim(); t.value = (nu ? nu + " " : "") + c.textContent.replace(/\.\.\./g, "___"); st.v[c.dataset.s] = t.value; E.bewaar("bouwer", st); status();
        const p = t.value.indexOf("___"); t.focus(); if (p >= 0) t.setSelectionRange(p, p + 3);
      }; });
      const tekst = () => BOUW.map(([, slots]) => slots.map(([id]) => (st.v[id] || "").trim()).filter(Boolean).join(" ")).filter(Boolean).join("\n\n");
      function status() {
        const alle = BOUW.flatMap((b) => b[1]); const af = ([id]) => (st.v[id] || "").trim().length > 12 && !/___/.test(st.v[id]);
        const gevuld = alle.filter(af).length;
        const a = E.analyse(tekst()); const fn = a.link.filter((x) => x.n).length;
        $("bSt").innerHTML = `<b>${gevuld} van ${alle.length}</b> bouwstenen af · ${a.woorden} woorden · linking words uit ${fn} functies${alle.some(([id]) => /___/.test(st.v[id] || "")) ? "<br><span class='meta'>Vul de ___ nog in.</span>" : ""}${!st.ond ? "<br><span class='meta'>Kies eerst een onderwerp.</span>" : ""}${a.contr.length ? "<br><span class='meta'>Schrijf contractions voluit: " + esc(a.contr.join(", ")) + "</span>" : ""}`;
        el.querySelectorAll("textarea[data-t]").forEach((t) => t.classList.toggle("af", af([t.dataset.t])));
        if (gevuld === alle.length) api.klaar();
      }
      $("bKop").onclick = (e) => E.kopieer((st.ond ? st.ond + "\n\n" : "") + tekst(), e.currentTarget);
      let arKlik = 0;
      $("bAr").onclick = (e) => {
        const b = e.currentTarget;
        const ar = Object.assign({ tekst: "", score: {} }, E.laad("arena", {}));
        if (ar.tekst.trim() && !arKlik) { arKlik = 1; b.textContent = "Arena heeft al tekst: tik nog eens om te vervangen"; setTimeout(() => { arKlik = 0; b.textContent = "✍️ Naar de writing arena"; }, 3500); return; }
        ar.tekst = tekst(); E.bewaar("arena", ar); const eis = E.eisen(); if (st.ond) { eis.onderwerp = st.ond; E.zetEisen(eis); }
        location.hash = "#/doe/sc-3/arena";
      };
      let wis = 0;
      $("bWis").onclick = (e) => { const b = e.currentTarget; if (!wis) { wis = 1; b.textContent = "Zeker? Tik nog eens"; setTimeout(() => { wis = 0; b.textContent = "Begin opnieuw"; }, 3000); return; } st.v = {}; E.bewaar("bouwer", st); el.querySelectorAll("textarea[data-t]").forEach((t) => { t.value = ""; }); wis = 0; b.textContent = "Begin opnieuw"; status(); };
      status();
    }
  });

  // ---------- essay X-ray ----------
  const DOELEN = [
    ["topic", "Tik de topic sentences aan", (z) => z.rol === "topic"],
    ["thesis", "Tik de thesis statement aan", (z) => z.rol === "thesis"],
    ["mening", "Tik de zin met de eigen mening aan", (z) => z.rol === "mening"],
    ["l:con", "Tik de zinnen aan met een linking word van tegenstelling", (z) => z.s.includes("l:con")],
    ["l:add", "Tik de zinnen aan met een linking word van toevoeging", (z) => z.s.includes("l:add")],
    ["p", "Tik de zinnen aan met een passive", (z) => z.s.includes("p")],
    ["pp", "Tik de zinnen aan met een present perfect", (z) => z.s.includes("pp")],
    ["r", "Tik de zinnen aan met een relative clause", (z) => z.s.includes("r")],
    ["c", "Tik de zinnen aan met een conditional (if-zin)", (z) => z.s.includes("c")],
    ["m", "Tik de zinnen aan met een modal verb", (z) => z.s.includes("m")],
    ["cmp", "Tik de zinnen aan met een vergelijking", (z) => z.s.includes("cmp")]
  ];
  TW.widget("xray", {
    titel: "Essay X-ray", icoon: "🩻",
    uitleg: "Bekijk twee model-essays laag voor laag: structuur, linking words en grammatica. Tik een gekleurd stuk aan voor uitleg. In de modus Zoek zelf wijs je het zelf aan.",
    maak(el, api) {
      const st = Object.assign({ e: 0, lagen: { s: true, l: false, g: false }, goed: {} }, E.laad("xray", {}));
      let modus = "kijk", doel = 0, gecheckt = false; const gekozen = new Set();
      el.innerHTML = `<div class="keuze" id="xE"></div><div class="keuze" id="xM"></div><div id="xL"></div><div id="xB"></div><p class="uit" id="xI">Tik een gekleurd stuk aan voor uitleg.</p>`;
      const $ = (id) => el.querySelector("#" + id);
      const zinData = (es) => es.alineas.map((a) => a.map(([rol, t]) => { const n = E.parse(t); return { rol, n, s: E.soorten(n), plat: E.plat(n) }; }));
      function knoppen() {
        $("xE").innerHTML = E.ESSAYS.map((es, i) => `<button class="btn ${st.e === i ? "aan" : ""}" data-e="${i}">Essay ${i + 1}</button>`).join("");
        $("xE").querySelectorAll("button").forEach((b) => { b.onclick = () => { st.e = +b.dataset.e; gekozen.clear(); gecheckt = false; E.bewaar("xray", st); teken(); }; });
        $("xM").innerHTML = `<button class="btn ${modus === "kijk" ? "aan" : ""}" data-m="kijk">🔍 Bekijk lagen</button><button class="btn ${modus === "zoek" ? "aan" : ""}" data-m="zoek">👆 Zoek zelf</button>`;
        $("xM").querySelectorAll("button").forEach((b) => { b.onclick = () => { modus = b.dataset.m; gekozen.clear(); gecheckt = false; teken(); }; });
      }
      function rnd(nodes) {
        return nodes.map((n) => {
          if (typeof n === "string") return esc(n);
          if (n.tag.startsWith("l:")) { const f = n.tag.slice(2); return st.lagen.l ? `<span class="xr-l f-${f}" data-i="l:${f}" role="button" tabindex="0">${rnd(n.kids)}</span>` : rnd(n.kids); }
          const c = n.tag.split(","); return st.lagen.g ? `<span class="xr-g ${c.map((x) => "g-" + x).join(" ")}" data-i="${n.tag}" role="button" tabindex="0">${rnd(n.kids)}</span>` : rnd(n.kids);
        }).join("");
      }
      function teken() {
        knoppen();
        const es = E.ESSAYS[st.e], zd = zinData(es);
        if (modus === "kijk") {
          $("xL").innerHTML = `<div class="keuze">${[["s", "🧱 Structuur"], ["l", "🔗 Linking words"], ["g", "🔧 Grammatica"]].map(([k, n]) => `<button class="btn ${st.lagen[k] ? "aan" : ""}" data-l="${k}">${n}</button>`).join("")}</div>${legenda(zd)}`;
          $("xL").querySelectorAll("button[data-l]").forEach((b) => { b.onclick = () => { st.lagen[b.dataset.l] = !st.lagen[b.dataset.l]; E.bewaar("xray", st); teken(); }; });
          $("xB").innerHTML = `<div class="card xr"><h3>${esc(es.titel)}</h3>${zd.map((a, ai) => `<div class="xr-al">${st.lagen.s ? `<span class="xr-akop">${["Introduction", "Body 1: pros", "Body 2: cons", "Conclusion"][ai]}</span>` : ""}<p>${a.map((z) => `${st.lagen.s ? `<span class="xr-rol r-${z.rol}">${E.ROL[z.rol]}</span>` : ""}${rnd(z.n)} `).join("")}</p></div>`).join("")}
            <p class="meta">${telW(E.essayTekst(es))} woorden</p></div>`;
          $("xI").hidden = false;
          $("xB").querySelectorAll("[data-i]").forEach((s) => { s.onclick = (ev) => { ev.stopPropagation(); info(s.dataset.i, s.textContent); }; });
          if (st.lagen.l || st.lagen.g) api.klaar();
        } else {
          const vraag = DOELEN[doel][1], test = DOELEN[doel][2];
          $("xL").innerHTML = `<label class="ar-ond">Opdracht <select id="xD">${DOELEN.map((d, i) => `<option value="${i}" ${i === doel ? "selected" : ""}>${esc(d[1])}${st.goed[st.e + ":" + d[0]] ? " ✓" : ""}</option>`).join("")}</select></label>`;
          $("xD").onchange = () => { doel = +$("xD").value; gekozen.clear(); gecheckt = false; teken(); };
          let i = 0;
          $("xB").innerHTML = `<div class="card xr"><h3>${esc(es.titel)}</h3><p class="vraag">${esc(vraag)}</p>${zd.map((a) => `<div class="xr-zoek">${a.map((z) => { const k = i++; const juist = test(z); let cls = gekozen.has(k) ? "sel" : ""; if (gecheckt) cls = gekozen.has(k) ? (juist ? "goed" : "fout") : juist ? "mis" : ""; return `<button class="chip breed xz ${cls}" data-k="${k}">${esc(z.plat)}</button>`; }).join("")}</div>`).join("")}
            <div class="row"><button class="btn primary" id="xC">Controleer</button><button class="btn" id="xR">Opnieuw</button></div><p class="fb" id="xF"></p></div>`;
          $("xI").hidden = true;
          const vlak = zd.flat();
          $("xB").querySelectorAll(".xz").forEach((b) => { b.onclick = () => { if (gecheckt) return; const k = +b.dataset.k; if (gekozen.has(k)) gekozen.delete(k); else gekozen.add(k); b.classList.toggle("sel"); }; });
          $("xR").onclick = () => { gekozen.clear(); gecheckt = false; teken(); };
          $("xC").onclick = () => {
            gecheckt = true; const juist = vlak.map((z, k) => (test(z) ? k : -1)).filter((k) => k >= 0);
            const goed = juist.filter((k) => gekozen.has(k)).length, fout = [...gekozen].filter((k) => !juist.includes(k)).length;
            const perfect = goed === juist.length && !fout; if (perfect) { st.goed[st.e + ":" + DOELEN[doel][0]] = 1; E.bewaar("xray", st); api.klaar(); }
            teken();
            $("xF").innerHTML = perfect ? `<span class="okt">✓ Alles goed (${goed} van ${juist.length}).</span>` : `<span class="nok">${goed} van ${juist.length} gevonden${fout ? `, ${fout} te veel aangetikt` : ""}.</span> <span class="meta">Groen = goed, rood = onterecht, gestippeld = gemist. Zet de laag Grammatica of Linking words aan om te zien waarom.</span>`;
          };
        }
      }
      function legenda(zd) {
        if (!st.lagen.l && !st.lagen.g) return "";
        const tel = {}; zd.flat().flatMap((z) => z.s).forEach((x) => { tel[x] = (tel[x] || 0) + 1; });
        const l = st.lagen.l ? E.FUNCTIES.filter((f) => tel["l:" + f[0]]).map((f) => `<span class="lchip f-${f[0]} aan"><b>${esc(f[1])}</b> ${tel["l:" + f[0]]}×</span>`).join("") : "";
        const g = st.lagen.g ? Object.keys(E.GSOORT).filter((k) => tel[k]).map((k) => `<span class="gchip g-${k}">${esc(E.GSOORT[k])} ${tel[k]}×</span>`).join("") : "";
        return `<div class="ar-link">${l}${g}</div>`;
      }
      function info(tag, tekst) {
        let h;
        if (tag.startsWith("l:")) { const f = tag.slice(2); h = `<b>${esc(tekst)}</b>: linking word, functie <b>${esc((E.FNAAM[f] || f).toLowerCase())}</b>.`; }
        else h = tag.split(",").map((c) => `<b>${esc(E.GSOORT[c] || c)}</b>: ${esc(E.GUITLEG[c] || "")}`).join("<br>") + `<br><span class="meta">Gemarkeerd: ${esc(tekst)}</span>`;
        $("xI").innerHTML = h;
      }
      teken();
    }
  });
})();
