// Hoofdstuk 5: checklist, model-essays, een zwak essay verbeteren en zelf schrijven.
// De model-essays staan in TW.eng.ESSAYS (widgets-schrijf.js), zodat de X-ray en deze stof dezelfde tekst gebruiken.
(function () {
  "use strict";
  const E = TW.eng;
  const alineas = (es) => es.alineas.map((a) => a.map((z) => E.plat(E.parse(z[1]))).join(" "));
  const kopjes = ["**Introduction:** ", "**Body 1 (pros):** ", "**Body 2 (cons):** ", "**Conclusion:** "];
  const essayBlok = (es, nr) => ({ voorbeeld: { titel: `model-essay ${nr}: ${es.titel} (${E.woorden(E.essayTekst(es)).length} woorden)`, stappen: alineas(es).map((t, i) => kopjes[i] + t) } });

  const ZWAK = [
    "Nowadays a lot of teenagers have a part time job. In my opinion it's a very good thing and in this essay i will explain why.",
    "First, you earn money. You can buy things you want and you don't have to ask your parents. Also you learn to work together with other people, for example colleagues and customers. A job is more better for you then sitting at home and gaming the whole day.",
    "But there are also cons. Some kids work to much and then they have no time to make there homework. They are tired in the lesson and there marks go down. Also much people think that teenagers are used by the bosses because they get less money.",
    "In conclusion, I am agree that a job is good. It learns you a lot about the society. But you must not work more then ten hours a week."
  ];
  const BETER = [
    "Many teenagers spend their Saturdays stacking shelves in a supermarket or delivering newspapers. Some people believe that a part-time job is valuable for young people, whereas others are worried that it harms their schoolwork. This essay discusses the advantages and disadvantages of having a job while still at school.",
    "On the one hand, a part-time job has clear benefits. Firstly, teenagers earn their own money, which teaches them how to manage a budget. Furthermore, they learn to work with colleagues and customers. For example, a cashier has to stay polite, even when a customer is rude. These skills will be useful in their future careers.",
    "On the other hand, there are also serious drawbacks. To begin with, some teenagers work too many hours and do not have enough time to do their homework. As a result, they are tired during lessons and their marks may go down. In addition, many people feel that young workers are treated unfairly, because they are often paid less than adults for the same work.",
    "In conclusion, a part-time job can teach teenagers a great deal, but it can also put their education at risk. In my opinion, a job is a good idea, as long as pupils do not work more than about ten hours a week. If they kept to this limit, they would enjoy the benefits without falling behind at school."
  ];
  E.ZWAK = ZWAK; E.BETER = BETER;

  TW.hoofdstuk({
    id: "schrijven", nr: "5", titel: "Schrijven en nakijken", icoon: "✍️",
    intro: "Alles samen: de checklist, twee model-essays om te ontleden, een zwak essay om te verbeteren en de schrijfarena waarin je zelf een essay schrijft.",
    onderdelen: [
      {
        id: "sc-1", nr: "5.1", titel: "Checklist en model-essays",
        kern: [
          "Een goed essay herken je aan vier dingen: een duidelijke **opbouw**, **samenhang** door linking words, **formele stijl** en **correcte, gevarieerde grammatica**. De [[checklist]] hieronder loopt ze langs.",
          { tabel: { kop: ["Waar", "Check"], rijen: [
            ["Opbouw", "4 alinea's met witregels · hook, onderwerp en thesis · topic sentence per body-alinea · mening pas in het slot"],
            ["Inhoud", "2 of 3 argumenten per kant · elk argument met uitleg of voorbeeld (PEEL) · geen nieuw argument in het slot"],
            ["Samenhang", "linking words uit minstens 5 functies · On the one hand / On the other hand · komma na Firstly, However, ..."],
            ["Stijl", "geen contractions · geen spreektaal (kids, stuff, gonna) · liever many dan a lot of · niet 'you' · geen uitroeptekens"],
            ["Grammatica", "de verplichte constructies zitten erin · tijden kloppen · he/she/it + s · than/then, its/it's, their/there"],
            ["Lengte", "binnen de woordgrenzen · pros en cons ongeveer even lang"]
          ] } },
          { kop: "Twee model-essays" },
          "Hieronder staan twee model-essays (elk een [[model essay]]) van ongeveer 230 tot 250 woorden. Ze zijn haalbaar op havo 5-niveau: geen moeilijke woorden, wel een strakke opbouw en de grammatica die vaak verplicht is.",
          { widget: "xray" },
          essayBlok(E.ESSAYS[0], 1),
          essayBlok(E.ESSAYS[1], 2),
          { tip: "Kijk in de X-ray met de laag Grammatica: elk essay bevat een passive, een if-zin, een relative clause, een present perfect, modal verbs en een vergelijking. Zo zie je dat verplichte grammatica er natuurlijk in past." },
          { let: "Leer een model-essay niet uit je hoofd om het op de toets na te schrijven. Leer de bouwstenen: de zinsopeners, de volgorde en waar je welke constructie kwijt kunt." },
          { ezel: "Tel na het schrijven: 4 alinea's, 5 functies van linking words, 0 contractions, alle verplichte grammatica. 4-5-0-alles." }
        ],
        begrippen: [
          ["checklist", "Lijst met punten waarop je je eigen essay nakijkt voordat je het inlevert."],
          ["model essay", "Voorbeeldessay dat laat zien hoe het moet: opbouw, linking words, stijl en grammatica."],
          ["coherence", "Samenhang: de zinnen en alinea's sluiten logisch op elkaar aan, vooral door linking words."],
          ["register", "Het taalniveau. Een essay is formeel: geen spreektaal en geen contractions."],
          ["accuracy", "Correctheid: geen fouten in grammatica, spelling en woordkeus."],
          ["range", "Variatie: verschillende woorden, zinsopeners en grammaticale constructies."],
          ["word count", "Het aantal woorden van je tekst. Blijf binnen de grenzen van de opdracht."],
          ["draft", "Kladversie: je eerste versie, die je daarna verbetert."],
          ["proofreading", "Nalezen op fouten: grammatica, spelling, leestekens."],
          ["self-assessment", "Je eigen werk beoordelen met een checklist."]
        ],
        vragen: [
          { q: "Model-essay 1 begint met 'Imagine a classroom where nobody is secretly checking a phone under the desk.' Wat is de functie van die zin?", a: ["Een hook die de lezer meteen een beeld geeft", "De thesis statement van het essay", "Het eerste argument voor een verbod", "De eigen mening van de schrijver"], u: "De eerste zin trekt de aandacht met een voorstelbare situatie: een hook. De thesis statement komt aan het eind van de inleiding." },
          { q: "Welke zin uit model-essay 1 is een topic sentence?", a: ["On the other hand, a complete ban also has serious drawbacks.", "For example, a pupil who receives dozens of messages a day finds it hard to follow a lesson.", "This essay discusses the advantages and disadvantages of such a ban.", "In my opinion, a ban during lessons is more sensible than a ban during the whole school day."], u: "Een topic sentence opent een body-alinea en noemt het thema ervan: hier de nadelen." },
          { q: "In welke zin uit model-essay 2 staat een passive?", a: ["Tools that can write a whole text in seconds have changed the way homework is done.", "Moreover, AI tools give instant feedback on spelling and grammar.", "Firstly, some pupils let a chatbot do all the work instead of thinking for themselves.", "To sum up, AI can support learning, but it can also replace it."], u: "'Is done' is to be + voltooid deelwoord: passive. De andere zinnen zijn actief." },
          { q: "Wat voor conditional is 'If pupils were allowed to use their phones during breaks, they would still feel connected'?", a: ["Second conditional", "First conditional", "Third conditional", "Zero conditional"], u: "If + past simple (were allowed), hoofdzin met would: een second conditional voor een denkbeeldige situatie." },
          { q: "Waarom staat 'In my view, ...' pas in de laatste alinea van model-essay 2?", a: ["Omdat je eerst beide kanten bespreekt en pas dan kiest", "Omdat een mening altijd de laatste zin moet zijn", "Omdat 'In my view' alleen na 'To sum up' mag", "Omdat in de body geen zinnen met 'I' mogen staan"], u: "In een for-and-against essay blijf je in de body neutraal. Je afweging en mening horen in het slot." },
          { q: "Welke linking word uit de model-essays drukt een gevolg uit?", a: ["As a result", "Furthermore", "For instance", "On the other hand"], u: "As a result en therefore geven een gevolg. Furthermore voegt toe, for instance geeft een voorbeeld, on the other hand zet tegenover." },
          { q: "Welk punt van de checklist gaat over register?", a: ["Geen contractions en geen spreektaal", "Pros en cons ongeveer even lang", "Een topic sentence per body-alinea", "Binnen de woordgrenzen blijven"], u: "Register is het taalniveau. Formeel schrijven betekent: voluit en zonder spreektaal." },
          { q: "Wat is een goede volgorde om je essay na te kijken?", a: ["Eerst opbouw, dan grammatica, dan spelling en leestekens", "Eerst spelling, dan pas de opbouw als er tijd over is", "Alleen spelling, want de opbouw heb je al gepland", "Alles tegelijk, één keer snel van boven naar beneden"], u: "Kijk in rondes: grote dingen eerst (alinea's, argumenten), dan zinnen, dan details. Eén ronde voor alles mist veel." },
          { q: "Model-essay 2 eindigt met 'After all, a tool is only as good as the person who uses it.' Wat doet die zin?", a: ["Hij sluit af met een gedachte die de mening ondersteunt", "Hij voegt een nieuw argument tegen AI toe", "Hij herhaalt de hook van de inleiding letterlijk", "Hij kondigt aan wat het essay gaat bespreken"], u: "Een sterke slotzin rondt af en ondersteunt de mening, zonder nieuw argument dat nog uitgewerkt moet worden." },
          { q: "Hoeveel functies van linking words wil je minstens in een essay laten zien?", a: ["Vijf, bijvoorbeeld opsommen, toevoegen, tegenstelling, voorbeeld en afsluiten", "Twee: één voor de pros en één voor de cons", "Eén, maar die gebruik je dan in elke zin", "Acht, anders telt het essay niet mee"], u: "Variatie laat samenhang zien. Vijf functies is een haalbaar doel; de model-essays hebben er zeven." }
        ],
        reken: [
          { q: "Hoeveel alinea's heeft een for-and-against essay volgens de checklist?", antwoord: 4, hint: "Inleiding, twee body-alinea's, slot.", stappen: ["Introduction + Body 1 (pros) + Body 2 (cons) + Conclusion.", "Dat zijn 4 alinea's."] },
          { q: "Welk linking word opent de cons-alinea van model-essay 1? Typ de vier woorden.", antwoord: ["on the other hand", "on the other hand,"], hint: "Het tegenovergestelde van On the one hand.", stappen: ["De pros-alinea begint met On the one hand.", "De cons-alinea met On the other hand."] },
          { q: "Typ het betrekkelijk voornaamwoord uit: 'a pupil ___ receives dozens of messages a day'.", antwoord: ["who", "that"], hint: "Het gaat over een persoon.", stappen: ["Een persoon in een relative clause: who (of that).", "In het model-essay staat who."] }
        ],
        oefen: [
          { type: "koppel", q: "Koppel de zin uit model-essay 1 aan zijn functie.", paren: [
            ["This essay discusses the advantages and disadvantages of such a ban.", "thesis statement"],
            ["On the one hand, a ban has several clear benefits.", "topic sentence"],
            ["For example, a pupil who receives dozens of messages a day finds it hard to follow a lesson.", "voorbeeld"],
            ["All things considered, a phone ban has both benefits and drawbacks.", "samenvatting"],
            ["In my opinion, a ban during lessons is more sensible than a ban during the whole school day.", "eigen mening"]
          ], u: "Elke zin heeft een vaste plek en taak in het essay." },
          { type: "volgorde", q: "Zet de zinnen van de cons-alinea van model-essay 2 in de goede volgorde.", items: [
            "However, there are also serious risks.",
            "Firstly, some pupils let a chatbot do all the work instead of thinking for themselves.",
            "If they keep doing this, they will never develop the skills they need for their exams.",
            "In addition, AI is not always reliable, as it sometimes gives answers that sound convincing but are simply wrong.",
            "As a result, many teachers have become more careful when they mark homework."
          ], u: "Topic sentence, eerste argument met gevolg (if-zin), tweede argument (In addition), gevolg (As a result)." },
          { type: "invul", q: "Vul de linking words in zoals in model-essay 2.", tekst: "{On the one hand}, AI offers clear benefits for learners. {First of all}, a chatbot explains difficult topics patiently. {Moreover}, AI tools give instant feedback. {Therefore}, pupils might learn more quickly than before.", extra: ["However", "In conclusion"], u: "Tegenstelling om de kant aan te kondigen, opsommen, toevoegen en een gevolg." }
        ],
        open: [
          { q: "Kies een zin uit model-essay 1 en leg uit welke twee verplichte grammaticale constructies erin staan.", a: "'In addition, smartphones can be used as dictionaries, calculators or cameras during lessons.' Hierin staat een modal verb (can) en een passive (be used: to be + voltooid deelwoord). Samen vormen ze can be used.", punten: ["een letterlijke zin uit het essay", "twee constructies juist benoemd", "uitleg hoe je ze herkent (vorm)"] }
        ],
        widgets: ["xray"]
      },
      {
        id: "sc-2", nr: "5.2", titel: "Verbeter een zwak essay",
        kern: [
          "Het essay hieronder gaat over de vraag **'Is it a good idea for teenagers to have a part-time job?'**. De inhoud is niet slecht, maar het staat vol fouten die een docent zwaar aanrekent: opbouw, stijl, Dunglish en spelling.",
          { voorbeeld: { titel: "het zwakke essay (zoek de fouten)", stappen: ZWAK } },
          { let: "De vier grootste problemen: de **mening staat al in de inleiding**, er is **geen thesis statement** die beide kanten aankondigt, de stijl is **informeel** (you, kids, don't, it's) en er staan **typische Dunglish-fouten** in." },
          { tabel: { kop: ["Fout", "Verbetering", "Waarom"], rijen: [
            ["a lot of / kids", "many / teenagers", "kids is spreektaal; many is formeler dan a lot of"],
            ["part time job", "part-time job", "samengesteld bijvoeglijk naamwoord met koppelteken"],
            ["it's, don't", "it is, do not", "geen contractions"],
            ["i will explain", "I will explain", "I altijd met hoofdletter"],
            ["more better ... then", "better ... than", "dubbele vergrotende trap; than na vergelijking"],
            ["work to much", "work too much", "te veel = too much"],
            ["make there homework", "do their homework", "huiswerk doe je; hun = their"],
            ["much people", "many people", "people is telbaar"],
            ["I am agree", "I agree", "agree is een werkwoord, geen bijvoeglijk naamwoord"],
            ["It learns you", "It teaches you", "iemand iets leren = teach"],
            ["the society", "society", "algemeen bedoeld: geen the"],
            ["Also / But aan het begin", "Furthermore / However", "formele linking words met komma"]
          ] } },
          { kop: "De verbeterde versie" },
          { voorbeeld: { titel: "verbeterd essay (" + E.woorden(BETER.join(" ")).length + " woorden)", stappen: BETER.map((t, i) => kopjes[i] + t) } },
          { tip: "Kijk wat er naast de foutjes is veranderd: een hook met een concreet beeld, een thesis statement zonder mening, topic sentences met On the one hand / On the other hand, uitwerking met For example, en een if-zin in het slot." },
          { widget: "speurder" },
          { ezel: "Nakijken in drie rondes: **S**tructuur, **S**tijl, **S**pelling. Eerst de grote dingen, dan de kleine." }
        ],
        begrippen: [
          ["error", "Fout. Bij nakijken zoek je eerst naar fouten die vaak terugkomen."],
          ["Dunglish", "Engels met Nederlandse fouten erin, zoals 'I am agree' of 'make homework'."],
          ["contraction", "Samentrekking zoals don't of it's. In een essay schrijf je voluit: do not, it is."],
          ["informal", "Spreektalig: kids, stuff, gonna. Past niet in een essay. A lot of is minder formeel dan many."],
          ["hyphen", "Koppelteken: a part-time job, a well-known problem."],
          ["uncountable noun", "Ontelbaar zelfstandig naamwoord: homework, advice, information. Geen -s, wel much."],
          ["countable noun", "Telbaar zelfstandig naamwoord: people, problems, jobs. Many, few, a number of."],
          ["to teach", "Iemand iets leren (lesgeven): teach, taught, taught. It teaches you a lot."],
          ["to learn", "Zelf iets leren: learn, learnt/learned. Pupils learn a lot from a job."],
          ["rewrite", "Herschrijven: een zin of alinea opnieuw en beter opschrijven."]
        ],
        vragen: [
          { q: "Wat is het grootste opbouwprobleem van de inleiding van het zwakke essay?", a: ["De mening staat er al in, en er is geen thesis die beide kanten noemt", "De inleiding is te lang en bevat drie voorbeelden", "De inleiding begint met een vraag in plaats van een feit", "Er staat geen linking word van gevolg in de inleiding"], u: "'In my opinion it's a very good thing' is een mening in de inleiding. Een for-and-against essay kondigt eerst beide kanten aan." },
          { q: "Wat is de juiste verbetering van 'A job is more better for you then sitting at home'?", a: ["A job is better for teenagers than sitting at home.", "A job is more better for teenagers than sitting at home.", "A job is better for you then sitting at home.", "A job is more good for teenagers then sitting at home."], u: "Better is al vergrotend, na een vergelijking komt than, en 'you' vervang je door een algemene groep." },
          { q: "Hoe verbeter je 'they have no time to make there homework'?", a: ["they have no time to do their homework", "they have no time to make their homework", "they have no time to do there homework", "they have no time to make they're homework"], u: "Huiswerk doe je (do your homework) en hun = their." },
          { q: "Welke verbetering van 'It learns you a lot about the society' is goed?", a: ["It teaches you a great deal about society.", "It learns you a great deal about society.", "It teaches you a great deal about the society.", "It is learning you a lot about the society."], u: "Iemand iets leren = teach. Society in het algemeen zonder the. A great deal is formeler dan a lot." },
          { q: "Waarom is 'Also much people think ...' fout?", a: ["People is telbaar, dus many, en 'Also' vooraan is informeel", "Think moet thinks zijn, omdat people enkelvoud is", "Much is goed, maar er moet 'the' voor people", "Also mag nooit in een Engelse zin voorkomen"], u: "Much hoort bij ontelbaar (much time), many bij telbaar (many people). Furthermore of In addition is formeler dan Also aan het begin." },
          { q: "Welk woord uit het zwakke essay is spreektaal?", a: ["kids", "colleagues", "customers", "conclusion"], u: "Kids is informeel. In een essay schrijf je children, teenagers of young people." },
          { q: "'I am agree that a job is good.' Wat is de goede vorm?", a: ["I agree that a job is good.", "I am agreeing that a job is good.", "I am agreed that a job is good.", "I do agreeing that a job is good."], u: "Agree is een werkwoord: I agree. 'I am agree' komt van het Nederlandse 'ik ben het eens'." },
          { q: "Welke zin is het beste begin van de cons-alinea?", a: ["On the other hand, there are also serious drawbacks.", "But there are also cons.", "But on the other hand there are cons to.", "Also there are some bad things about it."], u: "Een formeel linking word met komma en een duidelijk thema (drawbacks). But en Also aan het begin zijn informeel." },
          { q: "Wat is er mis met 'part time job'?", a: ["Er hoort een koppelteken: part-time job", "Het moet 'part times job' zijn", "Het moet 'a job of part time' zijn", "Er hoort een hoofdletter: Part Time Job"], u: "Twee woorden die samen één bijvoeglijk naamwoord vormen, krijgen een koppelteken: a part-time job." }
        ],
        reken: [
          { q: "Verbeter met één woord: 'Some kids work ___ much.' (te)", antwoord: ["too"], hint: "Te veel = ... much.", stappen: ["To = naar/om te.", "Too = te of ook: too much."] },
          { q: "Verbeter met één woord: 'You must not work more ___ ten hours a week.'", antwoord: ["than"], hint: "Na more komt een woord voor 'dan' in een vergelijking.", stappen: ["Then = daarna.", "Than = dan in een vergelijking: more than ten hours."] },
          { q: "Typ het formele woord voor 'kids' dat in de verbeterde versie staat (begint met t).", antwoord: ["teenagers", "teenager"], hint: "Jongeren van 13 tot 19.", stappen: ["Kids is spreektaal.", "In de verbeterde versie: teenagers."] },
          { q: "Welk werkwoord hoort in 'It ___ you a lot' (iemand iets leren)? Typ de vorm met -es.", antwoord: ["teaches"], hint: "Teach, taught, taught.", stappen: ["Learn = zelf leren; teach = iemand iets leren.", "It + s: It teaches you a lot."] }
        ],
        oefen: [
          { type: "sorteer", q: "Fout of goed?", groepen: ["Fout", "Goed"], items: [
            ["I am agree with this.", 0], ["Much people work at weekends.", 0], ["It learns you a lot.", 0], ["They make their homework.", 0],
            ["I agree with this.", 1], ["Many people work at weekends.", 1], ["It teaches you a lot.", 1], ["They do their homework.", 1]
          ], u: "Agree is een werkwoord; people is telbaar; iemand iets leren = teach; huiswerk doe je." },
          { type: "koppel", q: "Koppel de fout aan de verbetering.", paren: [
            ["more better", "better"], ["then (na een vergelijking)", "than"], ["there homework", "their homework"], ["the society", "society"], ["to much", "too much"], ["kids", "children"]
          ], u: "Allemaal fouten uit het zwakke essay." }
        ],
        open: [
          { q: "Herschrijf de tweede alinea van het zwakke essay ('First, you earn money. ...') tot een goede pros-alinea van ongeveer 60 tot 80 woorden.", a: BETER[1], punten: ["topic sentence met On the one hand", "geen 'you' en geen contractions", "argumenten met uitleg of voorbeeld", "formele linking words (Firstly, Furthermore, For example)", "geen Dunglish (more better, then)"] }
        ],
        widgets: ["speurder"]
      },
      {
        id: "sc-3", nr: "5.3", titel: "Zelf schrijven: plannen, schrijven, nakijken",
        kern: [
          "Op de toets heb je weinig tijd. Werk daarom met een vast stappenplan, zodat je niet halverwege merkt dat je de verplichte grammatica of het slot vergeten bent.",
          { voorbeeld: { titel: "stappenplan voor 50 minuten", stappen: [
            "**5 min · lezen:** lees de opdracht twee keer. Onderstreep het onderwerp, het aantal woorden en de verplichte grammatica.",
            "**10 min · plannen:** maak een outline: hook, thesis, 2 pros, 2 cons, mening. Zet bij elk deel welke verplichte constructie je daar gebruikt.",
            "**25 min · schrijven:** schrijf alinea voor alinea, met een witregel ertussen. Tel na elke alinea globaal je woorden.",
            "**10 min · nakijken:** drie rondes: structuur, stijl, spelling. Vink de verplichte grammatica af."
          ] } },
          { widget: "eisen" },
          { kop: "Waar past welke constructie?" },
          { tabel: { kop: ["Constructie", "Handige plek", "Voorbeeld"], rijen: [
            ["present perfect", "inleiding", "In recent years, many schools have introduced ..."],
            ["passive", "body", "Phones can be used as dictionaries."],
            ["relative clause", "body (voorbeeld)", "A pupil who ... finds it hard to ..."],
            ["first conditional", "body (gevolg)", "If schools ban phones, pupils will ..."],
            ["comparative", "slot (afweging)", "The advantages are more important than ..."],
            ["second conditional", "slotzin", "If I were the head teacher, I would ..."],
            ["modal verbs", "overal (hedging)", "This may lead to ... · Schools should ..."]
          ] } },
          { tip: "Plan je verplichte grammatica al in je outline. Schrijf bijvoorbeeld 'if-zin' naast je slotzin. Dan hoef je achteraf niets in te passen." },
          { widget: "bouwer" },
          { widget: "arena" },
          { let: "Schrijf niet veel meer dan het maximum. Een te lang essay laat zien dat je niet kunt kiezen, en je hebt minder tijd om na te kijken." }
        ],
        begrippen: [
          ["outline", "Schrijfplan in steekwoorden: hook, thesis, argumenten per kant, mening."],
          ["brainstorm", "Snel ideeën verzamelen voordat je kiest welke argumenten je gebruikt."],
          ["time management", "Je tijd verdelen over lezen, plannen, schrijven en nakijken."],
          ["requirement", "Eis uit de opdracht, bijvoorbeeld 200-250 woorden of een verplichte passive."],
          ["word limit", "De grens voor het aantal woorden."],
          ["hedging", "Voorzichtig formuleren met may, might, can, tend to: This may lead to ..."],
          ["final check", "Laatste controle met de checklist voordat je inlevert."],
          ["paragraph break", "Witregel tussen twee alinea's."]
        ],
        vragen: [
          { q: "Wat doe je als eerste als je de schrijfopdracht krijgt?", a: ["De opdracht twee keer lezen en de eisen onderstrepen", "Meteen beginnen met de inleiding, dan heb je meer tijd", "Eerst de conclusion schrijven, die is het belangrijkst", "Alle linking words die je kent bovenaan opschrijven"], u: "Wie de eisen mist (aantal woorden, verplichte grammatica), verliest punten die makkelijk te halen waren." },
          { q: "Hoeveel tijd van de 50 minuten reserveer je ongeveer voor nakijken?", a: ["Ongeveer 10 minuten", "Ongeveer 1 minuut", "Ongeveer 25 minuten", "Geen, nakijken kost alleen tijd"], u: "Tien minuten is genoeg voor drie rondes: structuur, stijl en spelling." },
          { q: "Waar past een second conditional het best in een for-and-against essay?", a: ["In het slot, bij je eigen afweging", "In de hook, als eerste zin", "In de thesis statement", "Nergens, want het is te informeel"], u: "If I were ..., I would ... is ideaal om je mening of een oplossing te geven in het slot." },
          { q: "Waarom zet je de verplichte grammatica al in je outline?", a: ["Zodat je hem niet vergeet en hij natuurlijk in de tekst past", "Zodat de docent ziet dat je een outline hebt gemaakt", "Omdat een outline anders niet meetelt voor het cijfer", "Omdat je anders geen linking words mag gebruiken"], u: "Achteraf een passive in een af essay proppen levert vaak rare zinnen op. Plan het vooraf." },
          { q: "De opdracht vraagt 200 tot 250 woorden. Je hebt er 320. Wat doe je?", a: ["Inkorten: schrappen wat herhaalt of niets toevoegt", "Zo laten, meer woorden geeft altijd meer punten", "De conclusion weghalen, dan zit je er onder", "De inleiding weghalen, die is niet zo belangrijk"], u: "Blijf binnen de grenzen. Schrap herhaling, nooit een heel onderdeel van de opbouw." },
          { q: "Welke zin is hedging?", a: ["This may lead to sleeping problems.", "This leads to sleeping problems.", "This always leads to sleeping problems.", "This will certainly lead to sleeping problems."], u: "May maakt de bewering voorzichtiger. Dat is verstandig als je het niet voor iedereen zeker weet." },
          { q: "Welke plek is het handigst voor een present perfect?", a: ["In de inleiding: In recent years, many schools have introduced ...", "In de slotzin: If I were the head teacher, ...", "Na 'Last year': Last year schools have introduced ...", "In de hook: Imagine a classroom where ..."], u: "Met 'In recent years' of 'so far' gebruik je de present perfect. Na 'last year' hoort past simple." },
          { q: "Wat controleer je in de ronde 'stijl'?", a: ["Contractions, spreektaal en of je 'you' gebruikt", "Of je vier alinea's hebt met witregels", "Of their/there en than/then goed gespeld zijn", "Of het aantal woorden binnen de grenzen valt"], u: "Stijl gaat over het register: formeel of informeel. Spelling en opbouw hebben hun eigen ronde." }
        ],
        oefen: [
          { type: "volgorde", q: "Zet de stappen voor de schrijftoets in de goede volgorde.", items: ["Opdracht twee keer lezen", "Eisen onderstrepen", "Outline maken", "Verplichte grammatica in de outline zetten", "Alinea voor alinea schrijven", "Woorden tellen", "Nakijken: structuur, stijl, spelling"], u: "Lezen, plannen, schrijven, nakijken." },
          { type: "sorteer", q: "In welke nakijkronde hoort dit?", groepen: ["Structuur", "Stijl", "Spelling"], items: [
            ["Staan er witregels tussen de alinea's?", 0], ["Staat mijn mening pas in het slot?", 0],
            ["Heb ik contractions gebruikt?", 1], ["Staat er spreektaal zoals kids of stuff?", 1],
            ["Heb ik than en then goed gebruikt?", 2], ["Is I overal een hoofdletter?", 2]
          ], u: "Structuur = opbouw, stijl = register, spelling = losse woorden en hoofdletters." }
        ],
        open: [
          { q: "Schrijf een for-and-against essay van 200 tot 250 woorden: 'Should mobile phones be banned in secondary schools?' Verwerk een passive, een if-zin, een relative clause en een present perfect. Gebruik de writing arena om te controleren.", a: E.essayTekst(E.ESSAYS[0]), punten: ["vier alinea's met hook, thesis, pros, cons en slot met mening", "elk argument uitgewerkt met uitleg of voorbeeld", "linking words uit minstens vijf functies", "geen contractions en geen spreektaal", "passive, if-zin, relative clause en present perfect correct gebruikt", "200 tot 250 woorden"] }
        ],
        widgets: ["eisen", "bouwer", "arena"]
      }
    ]
  });

  // Getypte tekstantwoorden: een punt aan het eind mag altijd (de kern telt leestekens mee). Geldt voor alle hoofdstukken.
  const metPunt = (a) => { const l = [].concat(a); return l.concat(l.filter((x) => !/[.!?]$/.test(x) && !l.includes(x + ".")).map((x) => x + ".")); };
  (TW._S.hfst || []).forEach((h) => (h.onderdelen || []).forEach((o) => (o.reken || []).forEach((r) => {
    if (typeof r.gen === "function") { const g = r.gen; r.gen = (R) => { const d = g(R); if (typeof d.antwoord !== "number") d.antwoord = metPunt(d.antwoord); return d; }; }
    else if (typeof r.antwoord !== "number") r.antwoord = metPunt(r.antwoord);
  })));
})();
