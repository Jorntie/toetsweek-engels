// Interactieve onderdelen. TW.widget(naam, { titel, icoon, uitleg, maak(el, api) {} });
// Gedeelde hulpmiddelen staan in TW.eng; de widgets zelf staan in widgets-*.js.
(function () {
  "use strict";
  const E = (TW.eng = TW.eng || {});

  // Eigen opslag per widget: localStorage onder tw:engels:<naam>.
  E.laad = (naam, std) => { try { const r = JSON.parse(localStorage.getItem("tw:engels:" + naam)); return r == null ? std : r; } catch (e) { return std; } };
  E.bewaar = (naam, w) => { try { localStorage.setItem("tw:engels:" + naam, JSON.stringify(w)); } catch (e) { /* geen opslag: werkt door */ } };
  E.kopieer = (tekst, knop) => {
    const klaar = (ok) => { if (!knop) return; const oud = knop.textContent; knop.textContent = ok ? "Gekopieerd ✓" : "Kopiëren lukt niet"; setTimeout(() => { knop.textContent = oud; }, 1600); };
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) { navigator.clipboard.writeText(tekst).then(() => klaar(true), () => klaar(false)); return; }
      const ta = document.createElement("textarea"); ta.value = tekst; document.body.appendChild(ta); ta.select(); const ok = document.execCommand("copy"); ta.remove(); klaar(ok);
    } catch (e) { klaar(false); }
  };
  E.woorden = (t) => (String(t).match(/[A-Za-z0-9'’\-]+/g) || []);

  // Linking words per functie (gedeeld door de arena, de X-ray en de bouwer).
  E.FUNCTIES = [
    ["seq", "Opsommen", ["firstly", "first of all", "first,", "to begin with", "secondly", "second,", "thirdly", "finally", "lastly"]],
    ["add", "Toevoegen", ["furthermore", "moreover", "in addition", "additionally", "what is more", "besides", "also", "not only"]],
    ["con", "Tegenstelling", ["however", "on the one hand", "on the other hand", "although", "even though", "whereas", "while", "nevertheless", "nonetheless", "despite", "in spite of", "in contrast", "but", "yet"]],
    ["cau", "Oorzaak", ["because of", "because", "since", "due to", "owing to", "thanks to"]],
    ["res", "Gevolg", ["therefore", "as a result", "consequently", "thus", "for this reason", "this means that", "so"]],
    ["ex", "Voorbeeld", ["for example", "for instance", "such as", "a good example"]],
    ["op", "Mening", ["in my opinion", "in my view", "i believe", "i think", "personally", "from my point of view", "it seems to me"]],
    ["end", "Afsluiten", ["in conclusion", "to conclude", "to sum up", "all in all", "all things considered", "in short", "overall", "on balance"]]
  ];
  E.FNAAM = Object.fromEntries(E.FUNCTIES.map((f) => [f[0], f[1]]));

  // Onregelmatige werkwoorden: [hele werkwoord, past simple, past participle, Nederlands].
  E.VERBS = [
    ["be", "was/were", "been", "zijn"], ["become", "became", "become", "worden"], ["begin", "began", "begun", "beginnen"], ["break", "broke", "broken", "breken"],
    ["bring", "brought", "brought", "brengen"], ["build", "built", "built", "bouwen"], ["buy", "bought", "bought", "kopen"], ["catch", "caught", "caught", "vangen"],
    ["choose", "chose", "chosen", "kiezen"], ["come", "came", "come", "komen"], ["cost", "cost", "cost", "kosten"], ["cut", "cut", "cut", "snijden"],
    ["do", "did", "done", "doen"], ["draw", "drew", "drawn", "tekenen"], ["drink", "drank", "drunk", "drinken"], ["drive", "drove", "driven", "rijden"],
    ["eat", "ate", "eaten", "eten"], ["fall", "fell", "fallen", "vallen"], ["feel", "felt", "felt", "voelen"], ["fight", "fought", "fought", "vechten"],
    ["find", "found", "found", "vinden"], ["fly", "flew", "flown", "vliegen"], ["forget", "forgot", "forgotten", "vergeten"], ["get", "got", "got", "krijgen"],
    ["give", "gave", "given", "geven"], ["go", "went", "gone", "gaan"], ["grow", "grew", "grown", "groeien"], ["have", "had", "had", "hebben"],
    ["hear", "heard", "heard", "horen"], ["hide", "hid", "hidden", "verstoppen"], ["hold", "held", "held", "vasthouden"], ["keep", "kept", "kept", "houden"],
    ["know", "knew", "known", "weten"], ["lead", "led", "led", "leiden"], ["leave", "left", "left", "vertrekken"], ["lose", "lost", "lost", "verliezen"],
    ["make", "made", "made", "maken"], ["mean", "meant", "meant", "betekenen"], ["meet", "met", "met", "ontmoeten"], ["pay", "paid", "paid", "betalen"],
    ["put", "put", "put", "zetten"], ["read", "read", "read", "lezen"], ["rise", "rose", "risen", "stijgen"], ["run", "ran", "run", "rennen"],
    ["say", "said", "said", "zeggen"], ["see", "saw", "seen", "zien"], ["sell", "sold", "sold", "verkopen"], ["send", "sent", "sent", "sturen"],
    ["set", "set", "set", "instellen"], ["show", "showed", "shown", "laten zien"], ["shut", "shut", "shut", "sluiten"], ["sing", "sang", "sung", "zingen"],
    ["sit", "sat", "sat", "zitten"], ["sleep", "slept", "slept", "slapen"], ["speak", "spoke", "spoken", "spreken"], ["spend", "spent", "spent", "uitgeven"],
    ["stand", "stood", "stood", "staan"], ["steal", "stole", "stolen", "stelen"], ["swim", "swam", "swum", "zwemmen"], ["take", "took", "taken", "nemen"],
    ["teach", "taught", "taught", "lesgeven"], ["tell", "told", "told", "vertellen"], ["think", "thought", "thought", "denken"], ["throw", "threw", "thrown", "gooien"],
    ["understand", "understood", "understood", "begrijpen"], ["wear", "wore", "worn", "dragen"], ["win", "won", "won", "winnen"], ["write", "wrote", "written", "schrijven"]
  ];
  // Goede antwoorden bij een vorm (be: was of were; get: got of gotten; show: shown of showed).
  E.vormen = (v, i) => {
    if (v[0] === "be" && i === 1) return ["was", "were", "was/were", "was, were", "was were", "was or were", "was of were"];
    if (v[0] === "get" && i === 2) return ["got", "gotten"];
    if (v[0] === "show" && i === 2) return ["shown", "showed"];
    return [v[i]];
  };

  // De kern noemt getypte antwoorden "Rekenen"; voor Engels heet dat "Typen". Alleen tekst op het scherm, geen gedrag.
  if (typeof MutationObserver !== "undefined" && typeof document !== "undefined" && document.body) {
    const fix = () => {
      const app = document.getElementById("app"); if (!app) return;
      app.querySelectorAll('a.tegel[href$="/r"]').forEach((t) => { const i = t.querySelector("i"), b = t.querySelector("b"); if (b && b.textContent === "Rekenen") { b.textContent = "Typen"; if (i) i.textContent = "⌨️"; } });
      app.querySelectorAll(".soort").forEach((s) => { if (s.textContent === "rekenen") s.textContent = "typen"; });
      const fb = document.getElementById("fb"); if (fb && fb.textContent.indexOf("Reken het na") >= 0) fb.innerHTML = fb.innerHTML.replace("Reken het na", "Kijk nog eens goed");
    };
    const app = document.getElementById("app");
    if (app) new MutationObserver(fix).observe(app, { childList: true, subtree: true });
  }
})();
