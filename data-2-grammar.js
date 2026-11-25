// Hoofdstuk 2: grammatica die in een havo 5-essay vaak verplicht is, steeds gericht op gebruik in het essay.
(() => {
  // Alle schrijfwijzen van een getypt antwoord: met en zonder eindpunt, met ' en ’.
  const A = (...xs) => {
    const uit = new Set();
    xs.forEach((x) => {
      const basis = /\.$/.test(x) ? [x, x.slice(0, -1)] : [x, x + "."];
      basis.forEach((b) => { uit.add(b); uit.add(b.replace(/'/g, "’")); uit.add(b.replace(/’/g, "'")); });
    });
    return [...uit];
  };
  // Getypte vraag die steeds een andere zin kiest. Elk item: [zin, antwoord(en), uitleg].
  const G = (inleiding, hint, lijst) => ({
    gen: (R) => {
      const [zin, antw, uitleg] = R.kies(lijst);
      const goed = Array.isArray(antw) ? antw : [antw];
      return { q: `${inleiding} '${zin}'`, antwoord: goed, hint, stappen: [uitleg, `Antwoord: ${goed[0]}`] };
    }
  });

  TW.hoofdstuk({
    id: "grammar", nr: "2", titel: "Grammar", icoon: "🔧",
    intro: "De grammatica die in een essay vaak verplicht is: tijden, passive, conditionals, relative clauses, modals, gerund of infinitive, vergelijken, woordvolgorde, lidwoorden en congruentie. Steeds met de fout die Nederlanders maken en hoe je het in je essay gebruikt.",
    onderdelen: [
      // gr-1 Tenses
      {
        id: "gr-1", nr: "2.1", titel: "Tenses",
        kern: [
          "In een essay schrijf je vooral in de [[present simple]]: je bespreekt feiten en meningen die nu gelden. Andere tijden gebruik je voor een ontwikkeling tot nu ([[present perfect]]), een voorbeeld uit het verleden ([[past simple]]) en een verwachting (**will**).",
          { tabel: { kop: ["tijd", "vorm", "in een essay voor", "voorbeeld"], rijen: [
            ["present simple", "work / works", "feiten, gewoontes, meningen", "Many teenagers spend hours online every day."],
            ["present continuous", "am/is/are + -ing", "iets wat nu bezig is, een trend", "More and more schools are introducing phone bans."],
            ["past simple", "worked / went", "afgesloten moment in het verleden", "In 2023, our school banned phones."],
            ["present perfect", "have/has + voltooid deelwoord", "verleden met gevolg nu, ontwikkeling tot nu", "Social media has changed the way we communicate."],
            ["will", "will + hele werkwoord", "voorspelling, verwachting", "AI will probably replace some jobs."]
          ] } },
          { kop: "Past simple of present perfect" },
          { fig: "tijdlijn", bij: "Past simple: afgesloten in het verleden. Present perfect: van het verleden tot nu. Will: de toekomst." },
          "**Past simple** bij een afgesloten tijdstip: yesterday, last year, in 2020, two years ago, when I was young. **Present perfect** als het tijdstip niet genoemd wordt of de periode nog doorloopt: since, for, already, yet, ever, never, recently, so far, over the past ten years.",
          { let: "Nederlands: 'Ik heb die film gisteren gezien.' NIET: I have seen that film yesterday. Wel: **I saw that film yesterday.** Een afgesloten tijdstip (yesterday, last week, in 2019, ago) gaat niet samen met de present perfect." },
          { let: "Nederlands: 'Ik woon hier al vijf jaar.' NIET: I live here for five years. Wel: **I have lived here for five years** (of: I have been living here for five years). Iets wat nog duurt met for of since: present perfect." },
          "**Present simple of continuous?** Present simple voor wat altijd of regelmatig zo is, present continuous voor wat nu of in deze periode bezig is. Werkwoorden als **know, believe, agree, want, need, mean** staan meestal niet in de continuous: I believe (niet: I am believing) that homework is useful.",
          { kop: "Toekomst: will, going to, present continuous" },
          { tabel: { kop: ["vorm", "wanneer", "voorbeeld"], rijen: [
            ["will", "voorspelling, verwachting, besluit op het moment zelf", "Robots will probably do many boring jobs."],
            ["going to", "plan, of voorspelling op basis van wat je nu ziet", "The government is going to raise the tax on sugar."],
            ["present continuous", "vaste afspraak (met tijd of plaats)", "We are meeting the head teacher on Friday."]
          ] } },
          { tip: "Voorzichtig voorspellen in een essay: **will probably**, **is likely to**, **may well**. Let op de plaats: 'AI will probably change education' maar 'AI probably won't replace teachers'." },
          { voorbeeld: { titel: "drie tijden in één essayalinea", stappen: [
            "Social media **has changed** the way young people communicate. (ontwikkeling tot nu: present perfect)",
            "Ten years ago, most teenagers **sent** text messages; nowadays they **use** apps such as WhatsApp. (verleden tegenover nu)",
            "Experts expect that this trend **will continue**. (verwachting: will)"
          ] } }
        ],
        begrippen: [
          ["present simple", "Tijd voor feiten, gewoontes en meningen: she works, they believe. Bij he/she/it een -s."],
          ["present continuous", "am/is/are + -ing: iets wat nu of in deze periode bezig is. More people are working from home."],
          ["past simple", "Verleden tijd voor iets wat afgesloten is, vaak met een tijdstip: last year, in 2020, ago."],
          ["present perfect", "have/has + voltooid deelwoord: verleden met gevolg nu of een periode tot nu. Prices have risen since 2020."],
          ["present perfect continuous", "have/has been + -ing: iets wat tot nu toe doorloopt. I have been studying for two hours."],
          ["signal words", "Woorden die de tijd verraden: ago, yesterday, last (past simple); since, for, yet, already, so far (present perfect)."],
          ["past participle", "Voltooid deelwoord: worked, gone, written. Nodig voor de present perfect en de passive."],
          ["stative verbs", "Werkwoorden van toestand (know, believe, want, need) die meestal niet in de -ing-vorm staan."],
          ["will", "Toekomst voor voorspellingen en verwachtingen: AI will change many jobs."],
          ["going to", "Toekomst voor plannen en voor voorspellingen met bewijs nu: It is going to rain."],
          ["present continuous for arrangements", "Present continuous voor een vaste afspraak in de toekomst: I am seeing the dentist tomorrow."]
        ],
        vragen: [
          { q: "Social media ___ the way we communicate over the past twenty years.", a: ["has changed", "changed", "is changing", "had changed"], u: "'Over the past twenty years' is een periode tot nu: present perfect." },
          { q: "Which sentence is correct?", a: ["I saw a documentary about plastic last week.", "I have seen a documentary about plastic last week.", "I have saw a documentary about plastic last week.", "I am seeing a documentary about plastic last week."], u: "'Last week' is een afgesloten tijdstip: past simple. De present perfect kan niet met last week." },
          { q: "Our school ___ a phone ban since 2022.", a: ["has had", "has", "had", "is having"], u: "Met since en een situatie die nog doorloopt gebruik je de present perfect. 'Has since 2022' is een typische Dunglish-fout." },
          { q: "At the moment, the government ___ a new law on AI.", a: ["is discussing", "discusses", "is discuss", "discussing"], u: "'At the moment': iets wat nu bezig is, dus present continuous (is + -ing)." },
          { q: "Which sentence is correct?", a: ["I believe that homework is useful.", "I am believing that homework is useful.", "I have believe that homework is useful.", "I do believing that homework is useful."], u: "Believe is een stative verb: meestal geen -ing-vorm." },
          { q: "Many experts think that AI ___ many jobs in the future.", a: ["will change", "changes", "has changed", "is change"], u: "Een voorspelling over de toekomst: will + hele werkwoord." },
          { q: "You have an appointment with your mentor tomorrow at three. What do you say?", a: ["I'm meeting my mentor tomorrow at three.", "I will to meet my mentor tomorrow at three.", "I am meet my mentor tomorrow at three.", "I have met my mentor tomorrow at three."], u: "Een vaste afspraak in de toekomst: present continuous (am meeting)." },
          { q: "Hoe lang leer je al Engels? How long ___ English?", a: ["have you studied", "do you study", "are you study", "did you studied"], u: "'Hoe lang leer je al Engels?' gaat over een periode tot nu: present perfect. 'How long do you study' is Dunglish." },
          { q: "Which signal word goes with the past simple?", a: ["ago", "since", "yet", "so far"], u: "Ago noemt een afgesloten moment (two years ago). Since, yet en so far horen bij de present perfect." },
          { q: "On average, teenagers ___ more than four hours a day online.", a: ["spend", "are spend", "spends", "have spend"], u: "Een algemeen feit: present simple. Teenagers is meervoud, dus geen -s." }
        ],
        oefen: [
          { type: "sorteer", q: "Hoort het signaalwoord bij de past simple of bij de present perfect?", groepen: ["past simple", "present perfect"], items: [
            ["two years ago", 0], ["last summer", 0], ["in 2015", 0], ["when I was ten", 0],
            ["since 2020", 1], ["so far", 1], ["over the past decade", 1], ["not yet", 1]
          ], u: "Afgesloten tijdstip: past simple. Periode tot nu of geen tijdstip: present perfect." },
          { type: "invul", q: "Vul de goede vorm in.", tekst: "Ten years ago, few pupils {had} a smartphone. Since then, the situation {has} changed completely. Nowadays, almost every pupil {owns} one, and many schools {are} introducing strict rules. Experts believe that this trend {will} continue.", extra: ["have", "own", "was"], u: "Ago: past simple (had). Since then: present perfect (has changed). Nowadays: present simple (owns). Trend nu: present continuous (are introducing). Verwachting: will." }
        ],
        open: [
          { q: "Schrijf drie zinnen over AI in het onderwijs: één in de present perfect, één in de past simple en één met will.", a: "AI has changed the way many pupils do their homework. When ChatGPT appeared in 2022, many teachers were worried. In the future, AI will probably help teachers to give feedback faster.", punten: ["present perfect zonder afgesloten tijdstip (has changed)", "past simple met een tijdstip (in 2022)", "will + hele werkwoord voor de toekomst", "werkwoordsvormen correct gespeld"] }
        ],
        reken: [
          { q: "Vul de goede vorm in: 'Online shopping ___ (grow) enormously since 2010.'", antwoord: A("has grown", "'s grown", "has been growing", "'s been growing"), hint: "Since 2010 tot nu: present perfect. Grow is onregelmatig.", stappen: ["Since + een moment in het verleden, en het geldt nog steeds: present perfect.", "has + voltooid deelwoord van grow: grown.", "Online shopping has grown enormously since 2010."] },
          G("Past simple of present perfect? Vul de vorm in:", "Zoek het signaalwoord: afgesloten tijdstip (ago, last, in 2015) of periode tot nu (since, for, so far, over the past ...)?", [
            ["Last year, our school ___ (start) a recycling project.", "started", "Last year is afgesloten: past simple."],
            ["Scientists ___ (warn) us about climate change for decades.", A("have warned", "'ve warned", "have been warning", "'ve been warning"), "For decades, tot nu toe: present perfect."],
            ["The first iPhone ___ (come) out in 2007.", "came", "In 2007 is afgesloten: past simple. Come is onregelmatig: came."],
            ["Many people ___ (lose) their jobs since the factory closed.", A("have lost", "'ve lost"), "Since: present perfect. Lose, lost, lost."],
            ["Two years ago, the government ___ (introduce) a sugar tax.", "introduced", "Ago: past simple."],
            ["So far, the new rules ___ (not / work) well.", A("have not worked", "haven't worked"), "So far: present perfect, ontkennend: have not worked."],
            ["When I was young, I ___ (spend) hours playing outside.", "spent", "When I was young is afgesloten: past simple. Spend, spent, spent."],
            ["The number of electric cars ___ (rise) sharply over the past five years.", A("has risen", "'s risen", "has been rising", "'s been rising"), "Over the past five years: present perfect. Rise, rose, risen. The number is enkelvoud: has."],
            ["In 2015, almost 200 countries ___ (agree) to limit global warming.", "agreed", "In 2015 is afgesloten: past simple."]
          ]),
          { q: "Gebruik going to: 'Next year I ___ (study) law in Leiden.'", antwoord: A("am going to study", "'m going to study"), hint: "Een plan voor de toekomst: am/is/are going to + hele werkwoord.", stappen: ["Het is een besluit dat al vaststaat: going to.", "Bij I hoort am.", "Next year I am going to study law in Leiden."] },
          { q: "Vul één woord in: 'How long have you ___ (know) your best friend?'", antwoord: "known", hint: "Have + voltooid deelwoord. Know is onregelmatig.", stappen: ["How long + periode tot nu: present perfect.", "Know, knew, known.", "How long have you known your best friend?"] }
        ]
      },

      // gr-2 Passive
      {
        id: "gr-2", nr: "2.2", titel: "Passive",
        kern: [
          "In de [[passive]] staat niet centraal wie iets doet, maar wat er gebeurt. Essays gebruiken het vaak: het klinkt zakelijk en objectief.",
          "Vorm: **be** in de juiste tijd + [[past participle]] (voltooid deelwoord). Wie het doet (de [[agent]]) noem je alleen als dat nodig is, met **by**.",
          { fig: "passief", bij: "Het lijdend voorwerp van de actieve zin wordt het onderwerp van de passieve zin." },
          { tabel: { kop: ["tijd", "actief", "passief"], rijen: [
            ["present simple", "Many schools use AI.", "AI is used by many schools."],
            ["present continuous", "They are building a new school.", "A new school is being built."],
            ["past simple", "The government banned plastic bags.", "Plastic bags were banned."],
            ["present perfect", "Scientists have published a report.", "A report has been published."],
            ["will", "The school will introduce a ban.", "A ban will be introduced."],
            ["modal", "We must reduce emissions.", "Emissions must be reduced."]
          ] } },
          { let: "Nederlands 'worden' is in de passive niet 'become'. NIET: The law became changed. Wel: **The law was changed.** En 'er wordt gezegd dat' is niet 'there is said' maar **it is said that** of **people say that**." },
          { let: "Vergeet het voltooid deelwoord niet en kies de juiste vorm van onregelmatige werkwoorden: is used (niet: is use), was written (niet: was wrote), has been chosen." },
          "Laat **by + dader** weg als die onbekend, onbelangrijk of vanzelfsprekend is: My bike was stolen (by someone) is overbodig. Noem de dader wel als die er juist toe doet: The report was written by a team of scientists.",
          { voorbeeld: { titel: "van actief naar passief in drie stappen", stappen: [
            "Actief: The government should ban single-use plastic.",
            "1. Het lijdend voorwerp (single-use plastic) wordt het onderwerp.",
            "2. Neem de tijd of het modal over en zet be erachter: should be.",
            "3. Voeg het voltooid deelwoord toe: **Single-use plastic should be banned.**"
          ] } },
          { tip: "Handige passieve zinnen voor een essay: **It is often argued that ...**, **It is widely believed that ...**, **It is expected that ...**, **Measures should be taken to ...** Zo noem je een argument zonder steeds 'I think'." },
          { tip: "Gebruik de passive met mate: twee of drie keer in een essay laat zien dat je het kunt. Een hele alinea in de passive leest stijf." },
          { widget: "transformer" }
        ],
        begrippen: [
          ["passive", "Lijdende vorm: be + voltooid deelwoord. The rule was introduced in 2020."],
          ["active", "Bedrijvende vorm: het onderwerp doet iets. The school introduced the rule in 2020."],
          ["past participle", "Voltooid deelwoord: used, banned, written, chosen. Altijd nodig in de passive."],
          ["agent", "Wie de handeling uitvoert. In de passive eventueel met by: by the government."],
          ["by-phrase", "Het deel met by dat de dader noemt. Weglaten als die onbekend of onbelangrijk is."],
          ["object", "Lijdend voorwerp van de actieve zin. Wordt in de passive het onderwerp."],
          ["impersonal passive", "It is said / believed / expected that ...: afstandelijke formule voor een essay."],
          ["being + past participle", "Passive van de present continuous: A new school is being built."],
          ["modal passive", "Modal + be + voltooid deelwoord: Emissions must be reduced. Phones should be banned."]
        ],
        vragen: [
          { q: "Make it passive: 'People produce a lot of plastic waste.'", a: ["A lot of plastic waste is produced.", "A lot of plastic waste is producing.", "A lot of plastic waste becomes produced.", "A lot of plastic waste has produce."], u: "Present simple passive: is + voltooid deelwoord (produced). 'Becomes' is een vertaling van 'wordt' en klopt niet." },
          { q: "The new law ___ last year.", a: ["was introduced", "is introduced", "has been introduced", "was introduce"], u: "Last year: past simple, dus was + voltooid deelwoord. De present perfect kan niet met last year." },
          { q: "Hoe vertaal je 'Er wordt vaak gezegd dat ...'?", a: ["It is often said that ...", "There is often said that ...", "It becomes often said that ...", "It is often saying that ..."], u: "De vaste formule is it is said that. 'There is said' en 'becomes said' zijn letterlijk vertaald." },
          { q: "Which sentence is passive?", a: ["Many jobs will be done by robots.", "Robots will do many jobs soon.", "Robots are doing many jobs.", "Many robots have done jobs."], u: "Will be done: be + voltooid deelwoord. De andere zinnen zijn actief." },
          { q: "Emissions ___ if we want to stop climate change.", a: ["must be reduced", "must reduced", "must to be reduced", "must been reduced"], u: "Modal passive: modal + be + voltooid deelwoord. Nooit 'must to'." },
          { q: "A new sports hall ___ at our school at the moment.", a: ["is being built", "is built", "is building", "has being built"], u: "At the moment: present continuous passive, is being + voltooid deelwoord." },
          { q: "Waarom gebruik je de passive in een essay?", a: ["Het klinkt objectief: de handeling staat centraal", "Het is verplicht in elke zin van een essay", "Het maakt elke zin korter en dus duidelijker", "Het mag alleen in de inleiding van een essay"], u: "De passive legt de nadruk op wat er gebeurt, niet op wie het doet. Dat klinkt zakelijk." },
          { q: "Which sentence is correct?", a: ["The report was written by a team of scientists.", "The report was wrote by a team of scientists.", "The report is written from a team of scientists.", "The report became written by a team of scientists."], u: "Was + voltooid deelwoord (written, niet wrote), en de dader met by." },
          { q: "Millions of trees ___ every year.", a: ["are cut down", "are cutting down", "is cut down", "cut down"], u: "Bomen doen het niet zelf: passive. Trees is meervoud: are cut down." },
          { q: "Since 2020, many lessons ___ online.", a: ["have been given", "have given", "has been given", "were giving"], u: "Since: present perfect. Passive: have been + voltooid deelwoord. Lessons is meervoud: have." }
        ],
        oefen: [
          { type: "koppel", q: "Koppel de actieve zin aan de passieve zin.", paren: [
            ["They recycle paper.", "Paper is recycled."],
            ["They recycled paper.", "Paper was recycled."],
            ["They have recycled paper.", "Paper has been recycled."],
            ["They will recycle paper.", "Paper will be recycled."],
            ["They should recycle paper.", "Paper should be recycled."]
          ], u: "De tijd zit in be (is, was, has been, will be, should be); het voltooid deelwoord blijft recycled." },
          { type: "volgorde", q: "Zet de woorden in de goede volgorde.", items: ["In many countries,", "single-use plastic", "has", "already", "been", "banned."], u: "Onderwerp, dan has + already + been + voltooid deelwoord. Already staat na het eerste hulpwerkwoord." }
        ],
        open: [
          { q: "Zet deze drie zinnen in de passive en laat de dader weg waar die niet nodig is: (1) People throw away too much food. (2) The school will introduce a new timetable. (3) Somebody has hacked the school website.", a: "(1) Too much food is thrown away. (2) A new timetable will be introduced. (3) The school website has been hacked.", punten: ["juiste vorm van be in dezelfde tijd (is, will be, has been)", "juist voltooid deelwoord (thrown, introduced, hacked)", "dader weggelaten omdat die onbelangrijk of onbekend is"] }
        ],
        reken: [
          { q: "Zet in de passive, alleen de werkwoordsvorm: 'They will build a new hospital.' → A new hospital ___.", antwoord: "will be built", hint: "Will blijft staan, dan be, dan het voltooid deelwoord van build.", stappen: ["Tijd: will (toekomst).", "Passive: will + be + voltooid deelwoord.", "Build, built, built: A new hospital will be built."] },
          G("Vul het voltooid deelwoord in:", "Passive: be + voltooid deelwoord. Het zijn onregelmatige werkwoorden: denk aan het rijtje (write, wrote, written).", [
            ["This essay was ___ (write) in forty minutes.", "written", "Write, wrote, written."],
            ["Many photos are ___ (take) with smartphones every day.", "taken", "Take, took, taken."],
            ["The decision has been ___ (make) by the school board.", "made", "Make, made, made."],
            ["Pupils are ___ (give) too much homework.", "given", "Give, gave, given."],
            ["Thousands of bikes are ___ (steal) in Amsterdam every year.", "stolen", "Steal, stole, stolen."],
            ["English is ___ (speak) all over the world.", "spoken", "Speak, spoke, spoken."],
            ["The new stadium was ___ (build) in only two years.", "built", "Build, built, built."],
            ["Programming is ___ (teach) at many primary schools.", "taught", "Teach, taught, taught."],
            ["A solution has finally been ___ (find).", "found", "Find, found, found."],
            ["Too much food is ___ (throw) away.", "thrown", "Throw, threw, thrown."],
            ["The new head teacher was ___ (choose) by a committee.", "chosen", "Choose, chose, chosen."],
            ["Several windows were ___ (break) during the storm.", "broken", "Break, broke, broken."]
          ]),
          { q: "Zet in de passive, alleen de werkwoordsvorm: 'Somebody is watching us.' → We ___.", antwoord: "are being watched", hint: "Present continuous passive: am/is/are + being + voltooid deelwoord.", stappen: ["Is watching is present continuous.", "Passive daarvan: are being + watched (we is meervoud).", "We are being watched."] },
          { q: "Vul de passive in (present simple): 'It ___ (believe) that AI will create new jobs.'", antwoord: "is believed", hint: "It + is + voltooid deelwoord: de vaste formule voor 'men denkt dat'.", stappen: ["It is ... that: impersonal passive.", "Present simple: is + believed.", "It is believed that AI will create new jobs."] }
        ],
        widgets: ["transformer"]
      },

      // gr-3 Conditionals
      {
        id: "gr-3", nr: "2.3", titel: "Conditionals",
        kern: [
          "Een [[conditional]] is een als-dan-zin: een [[if-clause]] (de voorwaarde) en een [[main clause]] (het gevolg). In een essay laat je er gevolgen mee zien: If schools banned phones, pupils would concentrate better.",
          { fig: "ladder", bij: "Van zero naar third: hoe hoger op de ladder, hoe minder werkelijk de situatie." },
          { tabel: { kop: ["type", "if-zin", "hoofdzin", "gebruik", "voorbeeld"], rijen: [
            ["zero", "present simple", "present simple", "altijd waar, feit", "If you heat ice, it melts."],
            ["first", "present simple", "will + hele ww", "reële kans in de toekomst", "If we do nothing, the climate will get worse."],
            ["second", "past simple", "would + hele ww", "onwaarschijnlijk of denkbeeldig", "If I were the head teacher, I would ban phones."],
            ["third", "past perfect", "would have + volt. deelwoord", "denkbeeldig verleden", "If the government had acted earlier, the damage would have been smaller."]
          ] } },
          { let: "**Geen will of would in de if-zin.** NIET: If I would have more time, I would read more. Wel: **If I had more time, I would read more.** NIET: If it will rain, ... Wel: **If it rains, ...**" },
          { let: "Third conditional: NIET If I would have known, ... Wel: **If I had known, I would have helped.** Would have hoort in de hoofdzin, had + voltooid deelwoord in de if-zin." },
          { kop: "De komma-regel" },
          "Staat de if-zin **voorop**, dan zet je een **komma** na de if-zin: If prices rise, people buy less. Staat de if-zin **achteraan**, dan meestal **geen komma**: People buy less if prices rise.",
          { tip: "In de second conditional is **If I were** de nette vorm, ook bij I, he, she en it: If I were you, If it were possible. 'If I was' hoor je in spreektaal, maar in een essay schrijf je were." },
          "**Unless** betekent if ... not: Unless we act now, it will be too late. In de hoofdzin kan ook een ander modal staan: If we recycle more, we can reduce waste. If I had more money, I could travel more.",
          { voorbeeld: { titel: "één situatie, drie conditionals", stappen: [
            "First (reëel): If the school **bans** phones, pupils **will talk** more during breaks.",
            "Second (denkbeeldig): If the school **banned** phones, pupils **would talk** more during breaks.",
            "Third (verleden): If the school **had banned** phones last year, pupils **would have talked** more."
          ] } },
          { tip: "Zet in je pros- of cons-alinea minstens één second conditional om een gevolg te tonen: 'If social media were banned for under-16s, many teenagers would feel left out.' Precies het soort zin dat een docent zoekt als conditionals verplicht zijn." },
          { widget: "conditional" }
        ],
        begrippen: [
          ["conditional", "Als-dan-zin met een if-clause en een main clause."],
          ["if-clause", "Het deel met if: de voorwaarde. Nooit will of would erin."],
          ["main clause", "Hoofdzin: het gevolg. Hier staan will, would of would have."],
          ["zero conditional", "If + present simple, present simple: wat altijd waar is. If you heat ice, it melts."],
          ["first conditional", "If + present simple, will + ww: een reële kans. If it rains, we will stay inside."],
          ["second conditional", "If + past simple, would + ww: denkbeeldig of onwaarschijnlijk. If I won the lottery, I would travel."],
          ["third conditional", "If + past perfect, would have + voltooid deelwoord: denkbeeldig verleden. If I had studied, I would have passed."],
          ["unless", "Betekent if ... not. Unless we act now = If we do not act now."],
          ["past perfect", "had + voltooid deelwoord: had known, had acted. Nodig in de if-zin van de third conditional."],
          ["If I were", "Nette vorm in de second conditional voor alle personen: If I were you, I would ..."]
        ],
        vragen: [
          { q: "If the government ___ taxes on meat, people would eat less of it.", a: ["raised", "would raise", "raises", "will raise"], u: "Hoofdzin met would: second conditional, dus past simple in de if-zin." },
          { q: "Which sentence is correct?", a: ["If I had more time, I would do more sport.", "If I would have more time, I would do more sport.", "If I will have more time, I would do more sport.", "If I have more time, I would do more sport."], u: "Second conditional: if + past simple, would + ww. Nooit would in de if-zin." },
          { q: "Unless we ___ now, it will be too late.", a: ["act", "will act", "would act", "don't act"], u: "Unless = if not, dus geen extra not. In het unless-deel de present simple, geen will." },
          { q: "If I ___ harder, I would have passed the test.", a: ["had studied", "would have studied", "studied", "have studied"], u: "Third conditional: had + voltooid deelwoord in de if-zin." },
          { q: "Welke zin volgt de komma-regel?", a: ["If people recycle more, there is less waste.", "If people recycle more there is, less waste.", "If, people recycle more there is less waste.", "If people, recycle more, there is less waste."], u: "If-zin voorop: komma direct na de if-zin, dus vóór de hoofdzin." },
          { q: "If you ___ water to 100 degrees, it boils.", a: ["heat", "will heat", "heated", "would heat"], u: "Een natuurwet, altijd waar: zero conditional, present simple in beide delen." },
          { q: "Which type is this? 'If I were the prime minister, I would make public transport free.'", a: ["second conditional", "first conditional", "third conditional", "zero conditional"], u: "If + past simple (were), would + ww: second conditional, een denkbeeldige situatie." },
          { q: "If AI ___ all our homework, we will not learn anything.", a: ["does", "will do", "would do", "did"], u: "Hoofdzin met will: first conditional, dus present simple in de if-zin (does)." },
          { q: "If the factory had closed earlier, the river ___ less polluted.", a: ["would have been", "would be been", "had been", "will have been"], u: "Third conditional: would have + voltooid deelwoord in de hoofdzin." },
          { q: "Which sentence uses 'unless' correctly?", a: ["Unless we cut emissions, the climate will keep warming.", "Unless we don't cut emissions, the climate will keep warming.", "Unless we will cut emissions, the climate keeps warming.", "Unless we would cut emissions, the climate will warm."], u: "Unless bevat al 'niet', dus geen don't erbij. En geen will of would in het unless-deel." }
        ],
        oefen: [
          { type: "sorteer", q: "Welk type conditional is het?", groepen: ["zero", "first", "second", "third"], items: [
            ["If you mix red and blue, you get purple.", 0], ["If people don't sleep, they get tired.", 0],
            ["If it rains tomorrow, the match will be cancelled.", 1], ["If we recycle more, we will need fewer landfills.", 1],
            ["If I had a car, I would drive to school.", 2], ["If schools started later, pupils would sleep more.", 2],
            ["If I had known, I would have helped.", 3], ["If they had listened, they would have understood.", 3]
          ], u: "Kijk naar de werkwoorden: present + present (zero), present + will (first), past + would (second), had + would have (third)." },
          { type: "koppel", q: "Koppel het begin aan het juiste einde.", paren: [
            ["If you heat ice,", "it melts."],
            ["If we do nothing about plastic,", "the oceans will fill up with waste."],
            ["If I were the head teacher,", "I would ban phones."],
            ["If she had left earlier,", "she would have caught the train."],
            ["Unless pupils sleep enough,", "they will struggle to concentrate."]
          ], u: "De vorm in de if-zin bepaalt de vorm in de hoofdzin." },
          { type: "invul", q: "Vul de juiste vorm in.", tekst: "If schools {banned} phones, pupils {would} talk more during breaks. However, if parents {need} to reach their children, they will not be able to. If the school {had} asked pupils for their opinion, the plan would {have} been more popular.", extra: ["has", "bans", "needs"], u: "Second: banned + would. First: need + will. Third: had asked + would have been." }
        ],
        open: [
          { q: "Schrijf bij het onderwerp 'a four-day school week' een first, een second en een third conditional. Let op de komma's.", a: "If our school introduces a four-day week, pupils will have more time for sport and part-time jobs. If every school had a four-day week, many parents would need extra childcare. If the government had asked teachers first, the plan would have been more realistic.", punten: ["first: if + present simple, will + ww", "second: if + past simple, would + ww", "third: if + had + voltooid deelwoord, would have + voltooid deelwoord", "komma na de if-zin als die voorop staat", "geen will of would in de if-zin"] }
        ],
        reken: [
          { q: "Vul in (second conditional, nette essayvorm): 'If I ___ (be) you, I would talk to the teacher.'", antwoord: "were", hint: "In de second conditional gebruik je in een essay bij alle personen dezelfde vorm van be.", stappen: ["Hoofdzin met would: second conditional, dus past simple in de if-zin.", "Van be is de nette vorm hier were, ook bij I.", "If I were you, I would talk to the teacher."] },
          G("Vul de juiste vorm in:", "Kijk eerst naar het andere deel van de zin: will (first), would (second), would have (third) of present simple (zero)?", [
            ["If we ___ (not / reduce) plastic use, the oceans will fill up with waste.", A("do not reduce", "don't reduce"), "Hoofdzin met will: first conditional, dus present simple in de if-zin."],
            ["If people ___ (eat) less meat, there would be fewer greenhouse gases.", "ate", "Hoofdzin met would: second conditional, dus past simple (ate)."],
            ["If the school ___ (offer) more sport, pupils would be healthier.", "offered", "Would in de hoofdzin: past simple in de if-zin."],
            ["If I had known about the test, I ___ (study) harder.", A("would have studied", "'d have studied", "would've studied"), "If + had known: third conditional, dus would have + voltooid deelwoord."],
            ["If you ___ (mix) red and blue, you get purple.", "mix", "Altijd waar: zero conditional, present simple."],
            ["If the bus is late again, I ___ (miss) my first lesson.", A("will miss", "'ll miss"), "If + present simple: first conditional, dus will + ww."],
            ["If she ___ (leave) earlier, she would have caught the train.", A("had left", "'d left"), "Would have in de hoofdzin: third conditional, dus had + voltooid deelwoord."],
            ["If robots did all the work, people ___ (have) more free time.", A("would have", "'d have"), "If + past simple: second conditional, dus would + ww."],
            ["If it ___ (rain) tomorrow, the climate march will be cancelled.", "rains", "Will in de hoofdzin: present simple in de if-zin. It: -s."]
          ]),
          { q: "Vul alleen het werkwoord in: 'If I had a car, I ___ (not / cycle) to school.'", antwoord: A("would not cycle", "wouldn't cycle"), hint: "If + past simple: second conditional. Ontkennend: would not + ww.", stappen: ["Had in de if-zin: second conditional.", "Hoofdzin: would + hele werkwoord, ontkennend would not.", "If I had a car, I would not cycle to school."] },
          { q: "Vul één woord in: 'If we don't act now, it will be too late.' → '___ we act now, it will be too late.'", antwoord: "unless", hint: "Eén woord dat 'if ... not' betekent.", stappen: ["If ... not kun je vervangen door unless.", "Het 'not' verdwijnt dan: Unless we act now, ...", "Unless we act now, it will be too late."] }
        ],
        widgets: ["conditional"]
      },

      // gr-4 Relative clauses
      {
        id: "gr-4", nr: "2.4", titel: "Relative clauses",
        kern: [
          "Een [[relative clause]] geeft extra informatie over een zelfstandig naamwoord. Zo maak je van twee korte zinnen één langere, en dat maakt je essay vloeiender.",
          { tabel: { kop: ["woord", "voor", "voorbeeld"], rijen: [
            ["who", "mensen", "Pupils who sleep enough perform better."],
            ["which", "dingen, dieren", "Apps which collect data can be dangerous."],
            ["that", "mensen en dingen, alleen zonder komma's", "The law that was introduced last year works well."],
            ["whose", "van wie, waarvan (bezit)", "Pupils whose parents read a lot often read more themselves."],
            ["where", "plaats", "Schools where phones are banned report fewer problems."]
          ] } },
          { kop: "Defining of non-defining" },
          "[[defining relative clause]]: de bijzin is nodig om te weten wie of wat je bedoelt. **Geen komma's.** Teenagers who use social media a lot often sleep badly. (alleen die tieners, niet alle tieners)",
          "[[non-defining relative clause]]: extra informatie over iets wat al duidelijk is. **Komma's eromheen** (of een komma en de punt aan het eind). My sister, who is fifteen, uses TikTok every day.",
          { let: "**Na een komma nooit that.** NIET: Amsterdam, that is the capital, is very busy. Wel: **Amsterdam, which is the capital, is very busy.**" },
          { let: "Nederlanders zeggen 'die' voor mensen en dingen. In het Engels: **who voor mensen, which voor dingen.** NIET: the phone who I bought, the people which live here. En **what** is geen betrekkelijk voornaamwoord: NIET the book what I read, wel **the book that I read**." },
          "In een defining clause mag je who, which of that **weglaten** als het het lijdend voorwerp is: The app (that) I use most is Instagram. Is het het onderwerp, dan moet het blijven: The app that changed everything ...",
          { tip: "Which na een komma kan ook terugslaan op de **hele zin** ervoor: Many pupils use AI for their homework, which worries teachers. Handig in een essay om in één zin een gevolg te noemen." },
          { voorbeeld: { titel: "twee zinnen samenvoegen", stappen: [
            "Zin 1: Greta Thunberg started the school strikes. Zin 2: She is from Sweden.",
            "She = Greta Thunberg, een persoon: who.",
            "Het is extra informatie (iedereen weet wie Greta is), dus komma's.",
            "**Greta Thunberg, who is from Sweden, started the school strikes.**"
          ] } },
          { widget: "transformer" }
        ],
        begrippen: [
          ["relative clause", "Bijzin die iets vertelt over een zelfstandig naamwoord, ingeleid door who, which, that, whose of where."],
          ["relative pronoun", "Betrekkelijk voornaamwoord: who, which, that, whose."],
          ["who", "Voor mensen: the pupils who ..."],
          ["which", "Voor dingen en dieren, en na een komma voor een hele zin: ..., which worries teachers."],
          ["that", "Voor mensen en dingen in een defining clause. Nooit na een komma."],
          ["whose", "Bezit, 'van wie' of 'waarvan': a pupil whose phone was stolen."],
          ["where", "Voor een plaats: the town where I grew up."],
          ["defining relative clause", "Noodzakelijke bijzin die zegt wie of wat je bedoelt. Geen komma's."],
          ["non-defining relative clause", "Bijzin met extra informatie, tussen komma's. Nooit met that."],
          ["contact clause", "Defining clause zonder who/which/that. Kan als het voornaamwoord lijdend voorwerp is: the book I read."]
        ],
        vragen: [
          { q: "Teachers ___ explain things clearly are popular.", a: ["who", "which", "whose", "what"], u: "Teachers zijn mensen: who (that kan hier ook, maar staat er niet bij)." },
          { q: "Which sentence is correct?", a: ["My phone, which I bought last year, is already slow.", "My phone, that I bought last year, is already slow.", "My phone who I bought last year, is already slow.", "My phone, what I bought last year, is already slow."], u: "Na een komma: which, nooit that. Who is voor mensen, what is geen betrekkelijk voornaamwoord." },
          { q: "Pupils ___ parents help them with homework often get better grades.", a: ["whose", "who", "who's", "which"], u: "Ouders van die leerlingen: bezit, dus whose. Who's betekent who is." },
          { q: "Schools ___ phones are banned report fewer problems.", a: ["where", "which", "who", "what"], u: "Een plaats waar iets gebeurt: where." },
          { q: "Welke zin heeft de juiste komma's?", a: ["The Netherlands, which is a small country, has many bikes.", "The Netherlands which is a small country, has many bikes.", "The Netherlands, which is a small country has many bikes.", "The Netherlands which, is a small country, has many bikes."], u: "Een non-defining clause staat helemaal tussen komma's: één ervoor en één erna." },
          { q: "In welke zin kun je het betrekkelijk voornaamwoord weglaten?", a: ["The book that I read for English was great.", "The man who lives next door is a teacher.", "The app which changed my life is free.", "My mother, who is a nurse, works nights."], u: "Alleen als het lijdend voorwerp is (I read the book) en de bijzin defining is." },
          { q: "Which is a defining relative clause?", a: ["People who smoke risk their health.", "My uncle, who smokes, is often ill.", "Paris, which I visited, is lovely.", "Our teacher, who is new, is kind."], u: "Who smoke zegt welke mensen je bedoelt: defining, zonder komma's." },
          { q: "Many pupils use AI to write essays, ___ worries teachers.", a: ["which", "that", "what", "who"], u: "Na een komma, terugslaand op de hele zin: which." },
          { q: "Which sentence is correct?", a: ["The people who live here are friendly.", "The people which live here are friendly.", "The people whose live here are friendly.", "The people what live here are friendly."], u: "People zijn mensen: who. Which is voor dingen." },
          { q: "The company ___ I work for is growing fast.", a: ["that", "who", "whose", "where"], u: "Een bedrijf is een ding: that of which. Where kan niet met for erachter." }
        ],
        oefen: [
          { type: "invul", q: "Vul het juiste betrekkelijk voornaamwoord in.", tekst: "Greta Thunberg, {who} started the school strikes, is from Sweden. The strikes, {which} began in 2018, spread all over the world. Pupils {whose} schools allowed it could join without problems. Cities {where} large marches took place were often in the news.", extra: ["that", "what"], u: "Persoon tussen komma's: who. Ding tussen komma's: which (niet that). Bezit: whose. Plaats: where." },
          { type: "sorteer", q: "Defining (geen komma's) of non-defining (komma's)?", groepen: ["defining", "non-defining"], items: [
            ["Pupils who skip breakfast concentrate less.", 0], ["The app that I use most is free.", 0], ["Cars which run on petrol pollute the air.", 0],
            ["London, which is the capital, is expensive.", 1], ["My best friend, who lives in Utrecht, is vegan.", 1], ["Many pupils cheat, which is a problem.", 1]
          ], u: "Defining: zonder de bijzin weet je niet wie of wat. Non-defining: extra informatie over iets wat al duidelijk is." }
        ],
        open: [
          { q: "Voeg samen met een relative clause. (a) Some teenagers play games all night. They often feel tired at school. (b) TikTok is popular with young people. It was launched in 2016.", a: "(a) Teenagers who play games all night often feel tired at school. (b) TikTok, which was launched in 2016, is popular with young people.", punten: ["(a) defining met who (of that), zonder komma's", "(b) non-defining met which, met komma's", "geen that na een komma", "dubbel onderwerp (they, it) weggelaten"] }
        ],
        reken: [
          G("Vul het juiste betrekkelijk voornaamwoord in:", "Mens of ding? Bezit (whose) of plaats (where)? Na een komma nooit that.", [
            ["Elon Musk, ___ owns Tesla, is often in the news.", "who", "Persoon, tussen komma's: who."],
            ["Plastic, ___ takes hundreds of years to break down, is a big problem.", "which", "Ding, tussen komma's: which (niet that)."],
            ["A refugee is a person ___ home is no longer safe.", "whose", "Het huis van die persoon: bezit, dus whose."],
            ["This is the café ___ we always study after school.", "where", "Een plaats waar iets gebeurt: where."],
            ["Pupils ___ phones are switched off concentrate better.", "whose", "De telefoons van die leerlingen: whose."],
            ["Rotterdam, ___ has the largest port in Europe, is a busy city.", "which", "Een stad, tussen komma's: which."],
            ["My grandmother, ___ is 85, uses WhatsApp every day.", "who", "Persoon, tussen komma's: who."],
            ["Pupils ___ sleep at least eight hours perform better.", ["who", "that"], "Mensen, defining clause zonder komma's: who of that."],
            ["The town ___ I grew up has no cinema.", "where", "Plaats: where."],
            ["Many people buy fast fashion, ___ is bad for the environment.", "which", "Na een komma, terugslaand op de hele zin: which."]
          ]),
          { q: "Voeg samen tot één zin met een non-defining relative clause (met komma's): 'Social media apps are free. They collect a lot of data.'", antwoord: A("Social media apps, which are free, collect a lot of data.", "Social media apps, which collect a lot of data, are free."), hint: "Begin met 'Social media apps,' en gebruik which tussen twee komma's.", stappen: ["They = social media apps: dingen, dus which.", "Extra informatie: komma's ervoor en erna.", "Social media apps, which are free, collect a lot of data."] },
          { q: "Verbeter de fout: 'Our school, that opened in 1960, is going to be rebuilt.' Welk woord moet in plaats van 'that'?", antwoord: "which", hint: "Na een komma mag that niet. Het gaat om een ding.", stappen: ["De bijzin staat tussen komma's: non-defining.", "In een non-defining clause nooit that.", "Our school, which opened in 1960, is going to be rebuilt."] }
        ],
        widgets: ["transformer"]
      },

      // gr-5 Modal verbs
      {
        id: "gr-5", nr: "2.5", titel: "Modal verbs",
        kern: [
          "Een [[modal verb]] (can, may, must, should) zegt hoe zeker, nodig of toegestaan iets is. In een essay zijn ze onmisbaar: je doet een voorstel (should), je zwakt een bewering af (may, might, could) of je zegt dat iets noodzakelijk is (must, have to).",
          { tabel: { kop: ["betekenis", "modal", "voorbeeld"], rijen: [
            ["kunnen, vermogen", "can, could", "AI can write a text in seconds."],
            ["mogelijk, niet zeker", "may, might, could", "Social media may cause sleeping problems."],
            ["advies, voorstel", "should, ought to", "Schools should teach pupils about AI."],
            ["noodzaak", "must, have to", "We must reduce our emissions."],
            ["niet nodig", "don't have to, needn't", "You don't have to agree with me."],
            ["verbod", "mustn't, can't", "You mustn't use your phone during the test."]
          ] } },
          "Na een modal komt het **hele werkwoord zonder to** (bare infinitive): can swim, should go, must stop. Een modal krijgt **geen -s**: she can (niet: she cans). Vragen en ontkenningen maak je zonder do: Should we ...? You should not ...",
          { let: "NIET: We must to act now. NIET: You should to read more. Wel: **We must act now. You should read more.** Alleen **ought to** en **have to** hebben wel to: We ought to act. We have to act." },
          { let: "**Mustn't** is niet 'hoeft niet'. You mustn't smoke here = het mag niet. You **don't have to** come = het hoeft niet. 'Je hoeft niet' wordt vaak verkeerd vertaald met you mustn't." },
          "**Must** en **have to** lijken op elkaar. Must is meestal de mening van de schrijver, have to vaak een regel van buitenaf. Voor de verleden tijd gebruik je **had to**: Last year we had to wear a uniform.",
          "Verleden: **could** (kon), **had to** (moest) en **should have** + voltooid deelwoord (had moeten): The government should have acted sooner.",
          { kop: "Hedging: voorzichtig formuleren" },
          { tip: "Schrijf niet 'Social media makes teenagers depressed.' maar **'Social media may contribute to depression among teenagers.'** Met may, might, could en can laat je zien dat je genuanceerd denkt. Dat heet [[hedging]]." },
          { tip: "Voor je voorstellen en je slot: **should** en **ought to**. 'The government should invest more in public transport.' 'In my opinion, schools ought to limit homework.'" },
          { voorbeeld: { titel: "een stellige zin genuanceerd maken", stappen: [
            "Te stellig: AI destroys jobs.",
            "Met hedging: AI **could** replace some jobs.",
            "Met een voorstel erbij: Therefore, schools **should** prepare pupils for a changing job market."
          ] } }
        ],
        begrippen: [
          ["modal verb", "Hulpwerkwoord als can, may, must, should. Daarna het hele werkwoord zonder to, en geen -s."],
          ["bare infinitive", "Hele werkwoord zonder to: go, act, reduce. Volgt na een modal."],
          ["can / could", "Kunnen. Could is ook 'kon' en een voorzichtige mogelijkheid: AI could replace some jobs."],
          ["may / might", "Mogelijkheid, niet zeker: This may cause problems."],
          ["must", "Moeten, vaak de mening van de schrijver: We must act now."],
          ["have to", "Moeten, vaak door een regel. Verleden tijd: had to."],
          ["should / ought to", "Advies of voorstel: Schools should limit screen time. Ought heeft to erbij."],
          ["don't have to / needn't", "Hoeven niet: You don't have to come. You needn't worry."],
          ["mustn't", "Mag niet, verbod: You mustn't cheat."],
          ["should have + past participle", "Had moeten: The school should have warned us."],
          ["hedging", "Voorzichtig formuleren met may, might, could, can, tend to, it seems."]
        ],
        vragen: [
          { q: "Which sentence is correct?", a: ["We must act now to save the planet.", "We must to act now to save the planet.", "We must acting now to save the planet.", "We musts act now to save the planet."], u: "Modal + hele werkwoord zonder to, zonder -s." },
          { q: "Hoe vertaal je: 'Je hoeft geen uniform te dragen.'?", a: ["You don't have to wear a uniform.", "You mustn't wear a uniform.", "You haven't to wear a uniform.", "You must not to wear a uniform."], u: "Hoeven niet = don't have to. Mustn't betekent dat het verboden is." },
          { q: "Which sentence is hedged best for an essay?", a: ["Social media may harm teenagers' self-esteem.", "Social media always destroys teenagers' self-esteem.", "Social media must to harm teenagers' self-esteem.", "Social media harm always teenagers' self-esteem."], u: "May maakt de bewering voorzichtig. Always is te stellig, must to is fout." },
          { q: "The government ___ invest more in renewable energy.", a: ["should", "should to", "ought", "musts"], u: "Should + hele werkwoord. Ought kan alleen met to (ought to invest)." },
          { q: "Last year, all pupils ___ wear a uniform.", a: ["had to", "must", "musted", "have to"], u: "Must heeft geen verleden tijd. Moest = had to." },
          { q: "Which sentence is correct?", a: ["She can speak three languages.", "She cans speak three languages.", "She can speaks three languages.", "She can to speak three languages."], u: "Geen -s bij een modal of bij het werkwoord erna, en geen to." },
          { q: "Phones ___ be used during the exam. It is forbidden.", a: ["mustn't", "don't have to", "needn't", "haven't to"], u: "Verboden: mustn't. Don't have to en needn't betekenen 'hoeft niet'." },
          { q: "Wat betekent 'might' in: 'AI might create new jobs.'?", a: ["Het is mogelijk, maar niet zeker", "Het gebeurt zeker en snel", "Het is verplicht dat het gebeurt", "Het is verboden dat het gebeurt"], u: "Might drukt een onzekere mogelijkheid uit: hedging." },
          { q: "We ___ to protect nature for future generations.", a: ["ought", "should", "must", "can"], u: "Alleen ought heeft to erachter. Should, must en can niet." },
          { q: "The government ___ acted sooner; now the problem is much bigger.", a: ["should have", "should", "must", "should had"], u: "Had moeten: should have + voltooid deelwoord (acted)." }
        ],
        oefen: [
          { type: "koppel", q: "Koppel het modal aan de betekenis.", paren: [
            ["must", "het is noodzakelijk"],
            ["mustn't", "het mag niet"],
            ["don't have to", "het hoeft niet"],
            ["should", "het is een goed idee"],
            ["might", "het is misschien zo"],
            ["can", "het is mogelijk of je bent ertoe in staat"]
          ], u: "Vooral mustn't (verbod) en don't have to (niet nodig) worden vaak verward." },
          { type: "sorteer", q: "Stellig of voorzichtig (hedged)?", groepen: ["stellig", "voorzichtig"], items: [
            ["Video games make children violent.", 0], ["Homework is useless.", 0], ["AI will replace all teachers.", 0],
            ["Video games may make some children aggressive.", 1], ["Homework might not help younger pupils.", 1], ["AI could change the role of teachers.", 1]
          ], u: "In een essay is voorzichtig vaak sterker: je claimt niet meer dan je kunt onderbouwen." },
          { type: "invul", q: "Vul het juiste woord in.", tekst: "Climate change is a serious problem, so governments {have} to take action now. Individuals {can} help too, for example by cycling. However, people {don't} have to give up everything they enjoy. In my opinion, every city {ought} to make public transport cheaper.", extra: ["mustn't", "needn't"], u: "Noodzaak: have to. Mogelijkheid: can. Niet nodig: don't have to. Voorstel: ought to. Ought en have zijn de enige die hier to erachter krijgen." }
        ],
        open: [
          { q: "Maak deze stellige zinnen voorzichtiger met een modal en voeg één voorstel met should toe: (1) Social media causes depression. (2) Electric cars solve the climate problem.", a: "(1) Social media may contribute to depression among some teenagers. (2) Electric cars could help to reduce emissions, but they will not solve the climate problem on their own. Therefore, the government should also invest in public transport.", punten: ["hedging met may, might, could of can", "hele werkwoord na het modal, zonder to", "beweringen genuanceerd (some, help to)", "een voorstel met should + hele werkwoord"] }
        ],
        reken: [
          G("Vul het juiste modal in:", "Let op de betekenis tussen haakjes. Na het modal komt het hele werkwoord zonder to.", [
            ["(verboden) You ___ cheat during a test.", A("mustn't", "must not", "can't", "cannot"), "Verbod: mustn't (must not). Can't kan ook."],
            ["(hoeft niet) You ___ buy the book; it is online.", A("don't have to", "do not have to", "don't need to", "do not need to", "needn't", "need not"), "Niet nodig: don't have to of needn't."],
            ["(advies) You ___ drink more water.", ["should", "ought to"], "Advies: should of ought to."],
            ["(verleden, moesten) During the lockdown, we ___ study at home.", "had to", "Must heeft geen verleden tijd: had to."],
            ["(misschien) Robots ___ take over some jobs.", ["may", "might", "could"], "Onzekere mogelijkheid: may, might of could."],
            ["(verleden, kon) When I was five, I ___ already read.", "could", "Verleden tijd van can: could."],
            ["(had moeten) We ___ started earlier.", A("should have", "should've", "ought to have"), "Had moeten: should have + voltooid deelwoord."]
          ]),
          { q: "Verbeter de zin: 'Pupils must to switch off their phones.'", antwoord: A("Pupils must switch off their phones.", "Pupils must switch their phones off."), hint: "Na must komt het hele werkwoord zonder to.", stappen: ["Must is een modal.", "Na een modal geen to.", "Pupils must switch off their phones."] },
          { q: "Vul in met ought (twee woorden): 'Teenagers ___ spend less time online.'", antwoord: "ought to", hint: "Ought is het enige modal dat to nodig heeft.", stappen: ["Ought + to + hele werkwoord.", "Teenagers ought to spend less time online."] }
        ]
      },

      // gr-6 Gerund or infinitive
      {
        id: "gr-6", nr: "2.6", titel: "Gerund or infinitive",
        kern: [
          "Na sommige werkwoorden volgt een [[gerund]] (de -ing-vorm), na andere een [[to-infinitive]]. Dat leer je per werkwoord; er is geen regel die altijd werkt.",
          { tabel: { kop: ["+ -ing", "+ to"], rijen: [
            ["enjoy: Pupils enjoy working together.", "want: Many pupils want to work together."],
            ["avoid: We should avoid using plastic.", "decide: The school decided to ban phones."],
            ["consider: Some pupils consider studying abroad.", "hope: I hope to find a job soon."],
            ["suggest: I suggest banning junk food.", "refuse: Some people refuse to change."],
            ["ook: finish, keep, mind, admit, deny", "ook: plan, promise, agree, afford, manage"]
          ] } },
          { let: "**Suggest** neemt geen to. NIET: I suggest to ban phones. Wel: **I suggest banning phones** of **I suggest that schools (should) ban phones.**" },
          { kop: "Na een voorzetsel: altijd -ing" },
          "Na een voorzetsel (in, of, about, by, without, before, after, instead of, good at, interested in) komt de -ing-vorm: by recycling, without thinking, instead of driving, interested in learning.",
          { let: "**Look forward to + -ing**: to is hier een voorzetsel. NIET: I look forward to hear from you. Wel: **I look forward to hearing from you.** Net zo: **be used to + -ing** (gewend zijn aan): I am used to getting up early." },
          { kop: "Gerund als onderwerp" },
          "Begint je zin met een activiteit als onderwerp, gebruik dan meestal de -ing-vorm: **Recycling** is important. **Using** social media can be addictive. 'To recycle is important' is niet fout, maar klinkt stijf. Na **it is + bijvoeglijk naamwoord** gebruik je wel to: It is important to recycle.",
          "Een paar werkwoorden kunnen allebei, maar met een andere betekenis: **stop smoking** (ophouden met roken) tegenover **stop to smoke** (stoppen om te roken); **remember to lock** (eraan denken) tegenover **remember locking** (je herinneren dat je het deed). Bij like, love, hate en start is het verschil klein.",
          { tip: "Sterke essay-combinaties: **Instead of banning phones, schools could ...** / **By cycling to school, pupils stay fit.** / **It is important to ...** / **Eating less meat is one of the easiest ways to ...**" },
          { voorbeeld: { titel: "gerund en infinitive in een pros-alinea", stappen: [
            "**Working** from home has clear advantages. (gerund als onderwerp)",
            "Employees avoid **wasting** time in traffic jams. (avoid + -ing)",
            "Many of them also manage **to concentrate** better. (manage + to)",
            "Instead of **commuting**, they can spend more time with their families. (voorzetsel + -ing)"
          ] } }
        ],
        begrippen: [
          ["gerund", "De -ing-vorm als zelfstandig naamwoord: Swimming is healthy. I enjoy swimming."],
          ["to-infinitive", "to + hele werkwoord: I want to swim."],
          ["verb + -ing", "Werkwoorden als enjoy, avoid, consider, suggest, finish, keep, mind, admit, deny."],
          ["verb + to", "Werkwoorden als want, decide, hope, refuse, plan, promise, agree, afford, manage."],
          ["preposition", "Voorzetsel (in, of, about, by, without, instead of). Daarna komt altijd de -ing-vorm: by reading, without asking."],
          ["preposition + -ing", "Na een voorzetsel altijd -ing: by reading, without asking, instead of driving."],
          ["look forward to", "Uitkijken naar, met -ing: I look forward to hearing from you."],
          ["be used to", "Gewend zijn aan, met -ing: She is used to working late."],
          ["gerund as subject", "Een -ing-vorm als onderwerp vooraan de zin: Recycling saves energy."],
          ["it is + adjective + to", "It is important to sleep well. Hier wel to."],
          ["stop + -ing / stop + to", "Stop smoking = ophouden met roken. Stop to smoke = stoppen om te roken."]
        ],
        vragen: [
          { q: "Many teenagers enjoy ___ videos online.", a: ["watching", "to watch", "watch", "to watching"], u: "Enjoy + -ing." },
          { q: "The school has decided ___ phones from next year.", a: ["to ban", "banning", "ban", "to banning"], u: "Decide + to." },
          { q: "I look forward to ___ from you.", a: ["hearing", "hear", "heard", "be hearing"], u: "To is hier een voorzetsel, dus -ing: looking forward to hearing." },
          { q: "Which sentence is correct?", a: ["I suggest introducing a sugar tax.", "I suggest to introduce a sugar tax.", "I suggest introduce a sugar tax.", "I suggest to introducing a sugar tax."], u: "Suggest + -ing (of suggest that ...), nooit suggest to." },
          { q: "___ too much time online can be bad for your health.", a: ["Spending", "Spend", "Spent", "To spending"], u: "Een activiteit als onderwerp vooraan de zin: gerund." },
          { q: "You can save energy by ___ off the lights.", a: ["switching", "switch", "to switch", "switched"], u: "Na het voorzetsel by: -ing." },
          { q: "Many people refuse ___ their habits.", a: ["to change", "changing", "change", "to changing"], u: "Refuse + to." },
          { q: "We should avoid ___ single-use plastic.", a: ["using", "to use", "use", "to using"], u: "Avoid + -ing." },
          { q: "Instead of ___ by car, more people should cycle.", a: ["going", "go", "to go", "gone"], u: "Instead of is een voorzetsel: -ing." },
          { q: "Hoe vertaal je: 'Hij is gestopt met roken.'?", a: ["He has stopped smoking.", "He has stopped to smoke.", "He has stopped with smoking.", "He has stopped from smoking."], u: "Stop + -ing = ophouden met. Stop to smoke betekent stoppen om te roken. 'With' is Dunglish." }
        ],
        oefen: [
          { type: "sorteer", q: "Volgt er een -ing-vorm of to + werkwoord?", groepen: ["+ -ing", "+ to"], items: [
            ["enjoy", 0], ["avoid", 0], ["consider", 0], ["suggest", 0], ["look forward to", 0],
            ["want", 1], ["decide", 1], ["hope", 1], ["refuse", 1], ["afford", 1]
          ], u: "Leer ze als rijtje. Look forward to krijgt -ing omdat to hier een voorzetsel is." },
          { type: "invul", q: "Vul de goede vorm in.", tekst: "{Eating} healthily is not always easy. Many teenagers want {to} eat better, but they cannot afford to buy organic food. Instead of {buying} crisps, they could choose fruit. I suggest {teaching} pupils how to cook at school.", extra: ["Eat", "buy", "teach"], u: "Gerund als onderwerp (Eating), want + to, instead of + -ing, suggest + -ing." }
        ],
        open: [
          { q: "Schrijf vier zinnen over gezond leven waarin je gebruikt: avoid, decide, instead of en look forward to.", a: "Doctors advise people to avoid eating too much sugar. Last year, I decided to cycle to school every day. Instead of taking the bus, I now get exercise twice a day. I look forward to seeing the results of my new habits.", punten: ["avoid + -ing", "decide + to", "instead of + -ing", "look forward to + -ing", "verder grammaticaal correct"] }
        ],
        reken: [
          G("Vul de goede vorm in (-ing of to + werkwoord):", "Hoort het werkwoord bij het -ing-rijtje (enjoy, avoid, consider, suggest) of bij het to-rijtje (want, decide, hope, refuse, afford, manage)? Na een voorzetsel altijd -ing.", [
            ["Many pupils consider ___ (study) abroad.", "studying", "Consider + -ing."],
            ["I hope ___ (find) a part-time job this summer.", "to find", "Hope + to."],
            ["We should avoid ___ (eat) processed food.", "eating", "Avoid + -ing."],
            ["More and more young people want ___ (become) influencers.", "to become", "Want + to."],
            ["Pupils who are interested in ___ (learn) languages often travel more.", "learning", "Na het voorzetsel in: -ing."],
            ["Some pupils refuse ___ (wear) a school uniform.", "to wear", "Refuse + to."],
            ["Not everyone can afford ___ (buy) organic food.", "to buy", "Afford + to."],
            ["After ___ (leave) school, many young people take a gap year.", "leaving", "Na het voorzetsel after: -ing."],
            ["The report suggests ___ (reduce) screen time before bed.", "reducing", "Suggest + -ing."],
            ["It is important ___ (sleep) eight hours a night.", "to sleep", "It is + bijvoeglijk naamwoord + to."],
            ["I am used to ___ (get) up early.", "getting", "Be used to (gewend zijn aan) + -ing."],
            ["We look forward to ___ (see) the results.", "seeing", "Look forward to + -ing."],
            ["Few pupils manage ___ (finish) the test in time.", "to finish", "Manage + to."]
          ]),
          { q: "Verbeter de zin met een -ing-vorm: 'I suggest to ban fast food at school.'", antwoord: A("I suggest banning fast food at school."), hint: "Suggest neemt geen to maar een -ing-vorm.", stappen: ["Suggest + -ing.", "To ban wordt banning.", "I suggest banning fast food at school."] },
          { q: "Vul één woord in: 'I am looking forward to ___ (meet) you.'", antwoord: "meeting", hint: "To is hier een voorzetsel.", stappen: ["Look forward to: to is een voorzetsel.", "Na een voorzetsel: -ing.", "I am looking forward to meeting you."] }
        ]
      },

      // gr-7 Comparatives and superlatives
      {
        id: "gr-7", nr: "2.7", titel: "Comparatives and superlatives",
        kern: [
          "Met een [[comparative]] vergelijk je twee dingen (cheaper, more expensive). Met een [[superlative]] zeg je dat iets het meest is van een groep (the cheapest, the most expensive).",
          { tabel: { kop: ["soort", "basis", "comparative", "superlative"], rijen: [
            ["kort (1 lettergreep)", "cheap", "cheaper", "the cheapest"],
            ["eindigt op -e", "safe", "safer", "the safest"],
            ["medeklinker-klinker-medeklinker", "big", "bigger", "the biggest"],
            ["2 lettergrepen op -y", "easy", "easier", "the easiest"],
            ["lang (meestal 2+ lettergrepen)", "expensive", "more expensive", "the most expensive"],
            ["onregelmatig", "good", "better", "the best"],
            ["onregelmatig", "bad", "worse", "the worst"],
            ["onregelmatig", "far", "further / farther", "the furthest / farthest"],
            ["onregelmatig", "much, many / little", "more / less", "the most / the least"]
          ] } },
          { let: "**Nooit dubbel.** NIET: more better, more easier, most biggest. Wel: **better, easier, the biggest.**" },
          { let: "**Than** (dan, bij vergelijken) is niet **then** (toen, daarna). NIET: Trains are cleaner then cars. Wel: **Trains are cleaner than cars.**" },
          { let: "Versterken doe je met **much, far** of **a lot**: much better, far more expensive. NIET: very better, very more expensive." },
          "**As ... as** betekent even ... als: In the city, cycling is as fast as driving. **Not as ... as** betekent minder ... dan: Online lessons are not as effective as normal lessons.",
          "**The ... the ...** betekent hoe ... hoe: The more time pupils spend online, the less they sleep. The sooner we act, the better.",
          "**Further** gebruik je ook figuurlijk voor 'extra, verder': further research, further information. Vandaar het linking word **furthermore**.",
          { tip: "Vergelijkingen zijn ideaal voor je afweging in het slot: 'In my opinion, the advantages are **more important than** the disadvantages.' / '**The biggest** problem is ...' / 'Cycling is **far healthier than** driving.'" },
          { voorbeeld: { titel: "vergelijken in een afweging", stappen: [
            "Electric cars are **cleaner than** petrol cars.",
            "However, they are still **not as cheap as** petrol cars.",
            "**The biggest** advantage is that they do not produce exhaust fumes.",
            "**The more** people drive electric cars, **the cleaner** the air will be."
          ] } }
        ],
        begrippen: [
          ["comparative", "Vergrotende trap: cheaper, more expensive, better. Met than erachter."],
          ["superlative", "Overtreffende trap: the cheapest, the most expensive, the best."],
          ["than", "Dan, bij een vergelijking: bigger than. Niet verwarren met then (toen, daarna)."],
          ["then", "Toen, daarna. Geen vergelijkingswoord."],
          ["as ... as", "Even ... als: as important as."],
          ["not as ... as", "Minder ... dan: not as expensive as."],
          ["the more ... the more", "Hoe meer ... hoe meer: The more you read, the more you learn."],
          ["irregular adjectives", "good, better, best; bad, worse, worst; far, further, furthest."],
          ["much / far + comparative", "Versterking: much better, far more useful. Niet very better."],
          ["further", "Verder (afstand) en extra (figuurlijk): further information, further research."]
        ],
        vragen: [
          { q: "Cycling is ___ than driving.", a: ["healthier", "more healthier", "healthyer", "more health"], u: "Healthy (2 lettergrepen op -y): healthier. Nooit more + -er." },
          { q: "In my opinion, this is ___ solution of all.", a: ["the best", "the most good", "the better", "the bestest"], u: "Good is onregelmatig: good, better, the best." },
          { q: "Trains are cleaner ___ planes.", a: ["than", "then", "as", "that"], u: "Bij een vergelijking: than. Then betekent toen of daarna." },
          { q: "Online lessons are not ___ effective ___ normal lessons.", a: ["as ... as", "so ... than", "more ... as", "as ... than"], u: "Not as ... as = minder ... dan. As en than combineer je niet." },
          { q: "The ___ you practise, the better you get.", a: ["more", "most", "much", "many"], u: "Hoe meer ... hoe beter: the more ..., the better." },
          { q: "Air pollution in big cities is getting ___.", a: ["worse", "badder", "more bad", "worst"], u: "Bad is onregelmatig: bad, worse, worst. Hier vergelijk je met vroeger: worse." },
          { q: "This is the ___ difficult essay I have ever written.", a: ["most", "more", "much", "very"], u: "Lang bijvoeglijk naamwoord, overtreffende trap: the most difficult." },
          { q: "Which sentence is correct?", a: ["Electric cars are far more expensive than bikes.", "Electric cars are very more expensive than bikes.", "Electric cars are far expensiver than bikes.", "Electric cars are far more expensive then bikes."], u: "Versterken met far, lang woord met more, en than (niet then)." },
          { q: "For ___ information, see the school website.", a: ["further", "farer", "more far", "furthest"], u: "Further in de betekenis 'extra': further information." },
          { q: "Which sentence is correct?", a: ["Social media is the biggest distraction for pupils.", "Social media is the most big distraction for pupils.", "Social media is the bigest distraction for pupils.", "Social media is the more big distraction for pupils."], u: "Big: medeklinker verdubbelt, the biggest." }
        ],
        oefen: [
          { type: "sorteer", q: "Maak je de comparative met -er of met more?", groepen: ["-er", "more"], items: [
            ["cheap", 0], ["easy", 0], ["big", 0], ["safe", 0], ["busy", 0],
            ["expensive", 1], ["important", 1], ["useful", 1], ["dangerous", 1], ["effective", 1]
          ], u: "Kort of twee lettergrepen op -y: -er. Langere woorden: more." },
          { type: "koppel", q: "Koppel de basisvorm aan de goede rij.", paren: [
            ["good", "better, the best"],
            ["bad", "worse, the worst"],
            ["far", "further, the furthest"],
            ["big", "bigger, the biggest"],
            ["happy", "happier, the happiest"],
            ["modern", "more modern, the most modern"]
          ], u: "Good, bad en far zijn onregelmatig; big verdubbelt de g; happy wordt -ier." },
          { type: "invul", q: "Vul het goede woord in.", tekst: "Public transport is much {cheaper} than a car, and it is {better} for the environment. Trains are not as fast {as} planes for long distances, but they are {more} comfortable. In my opinion, the train is the {best} choice for a holiday in Europe.", extra: ["then", "than", "good"], u: "Cheap, cheaper; good, better, best; not as ... as; more comfortable." }
        ],
        open: [
          { q: "Vergelijk in vier zinnen de trein en het vliegtuig voor een vakantie. Gebruik een comparative, een superlative, (not) as ... as en the more ... the ...", a: "The train is more comfortable than the plane because you have more space. However, flying is the fastest way to travel long distances. For short trips, the plane is not as practical as the train, because airports are often far from the city centre. The more people take the train, the lower emissions will be.", punten: ["comparative met than (niet then)", "superlative met the", "(not) as ... as correct", "the more ..., the ... correct", "geen dubbele vormen (more better)"] }
        ],
        reken: [
          G("Vul de juiste vorm in:", "Kort woord: -er/-est. Lang woord: more/most. Onregelmatig: good, better, best; bad, worse, worst; far, further, furthest.", [
            ["Trains are ___ (fast) than buses.", "faster", "Kort woord: fast, faster."],
            ["Organic food is ___ (expensive) than normal food.", "more expensive", "Lang woord: more expensive."],
            ["Online quizzes are ___ (easy) than written tests.", "easier", "Easy op -y: easier."],
            ["The situation is ___ (bad) than it was ten years ago.", "worse", "Bad is onregelmatig: worse."],
            ["For me, cycling is ___ (good) way to stay fit.", "the best", "Superlative van good: the best."],
            ["China is one of ___ (big) producers of solar panels.", "the biggest", "Big: g verdubbelt, the biggest."],
            ["Sleep is ___ (important) factor for good grades.", "the most important", "Lang woord, superlative: the most important."],
            ["Summers are getting ___ (hot) every year.", "hotter", "Hot: t verdubbelt, hotter."],
            ["Some pupils travel ___ (far) to school than others.", ["further", "farther"], "Far: further of farther."],
            ["A laptop is ___ (useful) than a tablet for writing essays.", "more useful", "Useful: more useful."],
            ["Finland is often called ___ (happy) country in the world.", "the happiest", "Happy: the happiest."],
            ["Plastic soup is one of ___ (bad) problems in our oceans.", "the worst", "Superlative van bad: the worst."]
          ]),
          { q: "Vul één woord in: 'Electric cars are cleaner ___ petrol cars.'", antwoord: "than", hint: "Het vergelijkingswoord, niet het woord voor 'toen'.", stappen: ["Bij een vergelijking hoort than.", "Then betekent toen of daarna.", "Electric cars are cleaner than petrol cars."] },
          { q: "Vul twee woorden in: 'The more you read, ___ (good) your English gets.'", antwoord: "the better", hint: "Hoe meer ..., hoe beter: in beide delen the + comparative.", stappen: ["The ..., the ...: beide delen beginnen met the.", "Comparative van good: better.", "The more you read, the better your English gets."] }
        ]
      },

      // gr-8 Word order
      {
        id: "gr-8", nr: "2.8", titel: "Word order",
        kern: [
          "De Engelse zin heeft een vaste volgorde: **S V O P T**: [[subject]], [[verb]], [[object]], place (plaats), time (tijd). Het werkwoord staat direct na het onderwerp en die twee blijven bij elkaar.",
          { fig: "volgorde", bij: "Subject, verb, object, place, time: de vaste volgorde van een Engelse zin." },
          { voorbeeld: { titel: "SVOPT", stappen: [
            "S: Many pupils · V: use · O: their phones · P: at school · T: every day.",
            "**Many pupils use their phones at school every day.**",
            "De tijd mag ook vooraan, met een komma: **Every day, many pupils use their phones at school.**"
          ] } },
          { let: "**Geen inversie zoals in het Nederlands.** 'Morgen ga ik naar de klimaatmars.' NIET: Tomorrow go I to the climate march. Wel: **Tomorrow I am going to the climate march.** Ook na een linking word: NIET Therefore are many people worried. Wel: **Therefore, many people are worried.**" },
          { let: "Het werkwoord gaat in een bijzin niet naar het eind. NIET: I think that pupils too much homework get. Wel: **I think that pupils get too much homework.**" },
          { kop: "Adverbs of frequency" },
          "[[adverbs of frequency]] (always, usually, often, sometimes, rarely, never) staan **vóór het hoofdwerkwoord**, maar **na be** en na het eerste hulpwerkwoord: Teenagers often check their phones. Teenagers are often tired. They have never used AI. You should always check your sources.",
          { let: "NIET: I go often to the gym. Pupils check always their phones. Wel: **I often go to the gym. Pupils always check their phones.** Tussen werkwoord en lijdend voorwerp staat in het Engels meestal niets." },
          { kop: "Vragen en indirecte vragen" },
          "Een vraag maak je met een hulpwerkwoord vóór het onderwerp: **Do** teenagers sleep enough? **Should** schools ban phones? Een vraag als hook in je inleiding mag.",
          "In een [[indirect question]] (I wonder ..., It is unclear ..., Many people ask ...) staat de gewone volgorde, zonder do en zonder vraagteken: Many people wonder **whether AI will replace** teachers. It is unclear **how much the plan costs** (niet: how much does the plan cost).",
          { tip: "Begin je een zin met een tijdsbepaling of een linking word? Zet er een komma achter en laat dan gewoon onderwerp + werkwoord volgen: 'In recent years, the number of cyclists has grown.' 'However, this solution is expensive.'" }
        ],
        begrippen: [
          ["word order", "Vaste zinsvolgorde in het Engels: onderwerp, werkwoord, lijdend voorwerp, plaats, tijd."],
          ["SVOPT", "Subject, verb, object, place, time: She studies English at school every day."],
          ["subject", "Onderwerp: wie of wat iets doet. Staat vóór het werkwoord."],
          ["verb", "Werkwoord. Staat direct na het onderwerp, ook als de zin met iets anders begint."],
          ["object", "Lijdend voorwerp. Staat direct na het werkwoord."],
          ["inversion", "Werkwoord vóór het onderwerp. In het Engels vooral in vragen, niet na Tomorrow of Therefore."],
          ["adverbs of frequency", "Always, usually, often, sometimes, rarely, never. Vóór het hoofdwerkwoord, na be."],
          ["auxiliary verb", "Hulpwerkwoord: do, be, have, can, will. Nodig om vragen en ontkenningen te maken."],
          ["indirect question", "Vraag in een zin: I wonder whether it works. Gewone volgorde, geen do, geen vraagteken."],
          ["whether", "Of (bij een indirecte ja/nee-vraag): I wonder whether this rule will work."]
        ],
        vragen: [
          { q: "Which sentence is correct?", a: ["Tomorrow I will discuss the results.", "Tomorrow will I discuss the results.", "Tomorrow discuss I the results.", "Tomorrow I the results will discuss."], u: "Na Tomorrow gewoon onderwerp + werkwoord: geen inversie zoals in het Nederlands." },
          { q: "Which sentence is correct?", a: ["Teenagers often spend hours on their phones.", "Teenagers spend often hours on their phones.", "Often spend teenagers hours on their phones.", "Teenagers spend on their phones often hours."], u: "Often staat vóór het hoofdwerkwoord, niet tussen werkwoord en lijdend voorwerp." },
          { q: "Pupils ___ tired on Monday mornings.", a: ["are often", "often is", "is often", "oftens are"], u: "Na be komt het adverb of frequency. Pupils is meervoud: are." },
          { q: "Kies het goede vervolg: 'Therefore, ...'", a: ["many schools have banned phones.", "have many schools banned phones.", "many schools phones have banned.", "banned many schools phones."], u: "Na Therefore en een komma: onderwerp, werkwoord, lijdend voorwerp." },
          { q: "Which sentence is correct?", a: ["I wonder whether this rule will work.", "I wonder will this rule work?", "I wonder does this rule work.", "I wonder if will this rule work."], u: "Indirecte vraag: whether of if + gewone volgorde, geen vraagteken." },
          { q: "Welke zin volgt SVOPT?", a: ["She studies English at school every day.", "She studies every day English at school.", "She studies at school English every day.", "Every day studies she English at school."], u: "Onderwerp, werkwoord, lijdend voorwerp, plaats, tijd." },
          { q: "Make a question of: 'Teenagers sleep enough.'", a: ["Do teenagers sleep enough?", "Sleep teenagers enough?", "Teenagers do sleep enough?", "Does teenagers sleep enough?"], u: "Vraag met do vóór het onderwerp. Teenagers is meervoud: do, niet does." },
          { q: "It is not clear ___.", a: ["how much the plan will cost", "how much will the plan cost", "how much does the plan cost", "how much costs the plan"], u: "Indirecte vraag: gewone volgorde (the plan will cost), zonder does." },
          { q: "Which sentence is correct?", a: ["Many people have never used ChatGPT.", "Many people have used never ChatGPT.", "Many people have used ChatGPT never.", "Never many people have used ChatGPT."], u: "Never staat na het eerste hulpwerkwoord (have) en vóór het voltooid deelwoord." },
          { q: "Hoe vertaal je: 'Daarom denk ik dat scholen telefoons moeten verbieden.'?", a: ["Therefore, I think that schools should ban phones.", "Therefore think I that schools phones should ban.", "Therefore I think that schools phones should ban.", "Therefore think I that schools should ban phones."], u: "Geen inversie na Therefore en in de bijzin geen werkwoord aan het eind." }
        ],
        oefen: [
          { type: "volgorde", q: "Zet de zinsdelen in de goede volgorde.", items: ["In recent years,", "many young people", "have started", "using e-bikes", "in the city."], u: "Tijd vooraan met een komma, dan onderwerp, werkwoord, lijdend voorwerp, plaats." },
          { type: "volgorde", q: "Zet de zinsdelen in de goede volgorde.", items: ["Most pupils", "usually", "do", "their homework", "at home", "in the evening."], u: "S, adverb of frequency vóór het hoofdwerkwoord, V, O, P, T." },
          { type: "sorteer", q: "Is de woordvolgorde goed of fout?", groepen: ["goed", "fout"], items: [
            ["However, this plan is too expensive.", 0], ["I wonder what the teacher thinks.", 0], ["Pupils rarely read books for fun.", 0], ["Every year, more people buy electric cars.", 0],
            ["However, is this plan too expensive.", 1], ["I wonder what does the teacher think.", 1], ["Pupils read rarely books for fun.", 1], ["Every year buy more people electric cars.", 1]
          ], u: "Onderwerp en werkwoord blijven bij elkaar, ook na een linking word of tijdsbepaling. Indirecte vraag zonder do." }
        ],
        open: [
          { q: "Verbeter de woordvolgorde: (1) Nowadays have most teenagers a smartphone. (2) They use often their phone in class. (3) Many parents ask how can they limit screen time. (4) I think that schools stricter rules should make.", a: "(1) Nowadays, most teenagers have a smartphone. (2) They often use their phone in class. (3) Many parents ask how they can limit screen time. (4) I think that schools should make stricter rules.", punten: ["geen inversie na Nowadays", "often vóór het hoofdwerkwoord", "indirecte vraag met gewone volgorde (how they can)", "in de bijzin het werkwoord direct na het onderwerp"] }
        ],
        reken: [
          G("Zet het woord tussen haakjes op de goede plek en schrijf de hele zin:", "Adverbs of frequency: vóór het hoofdwerkwoord, maar na be en na het eerste hulpwerkwoord.", [
            ["(often) Pupils feel stressed before exams.", A("Pupils often feel stressed before exams."), "Vóór het hoofdwerkwoord feel."],
            ["(never) Teenagers are bored.", A("Teenagers are never bored."), "Na be (are)."],
            ["(always) You should check your facts.", A("You should always check your facts."), "Na het hulpwerkwoord should, vóór check."],
            ["(rarely) My parents use TikTok.", A("My parents rarely use TikTok."), "Vóór het hoofdwerkwoord use."],
            ["(usually) The bus is late.", A("The bus is usually late.", "Usually, the bus is late.", "Usually the bus is late."), "Na be (is). Usually mag ook vooraan."],
            ["(never) I have cheated on a test.", A("I have never cheated on a test."), "Na het hulpwerkwoord have."],
            ["(always) She does her homework on time.", A("She always does her homework on time."), "Vóór het hoofdwerkwoord does (hier geen hulpwerkwoord)."]
          ]),
          { q: "Maak er een indirecte vraag van: 'Does AI help pupils?' → 'Researchers want to know ...' (schrijf alleen het deel na 'know')", antwoord: A("whether AI helps pupils.", "if AI helps pupils."), hint: "Ja/nee-vraag: whether of if, daarna de gewone volgorde zonder does. Let op de -s.", stappen: ["Een ja/nee-vraag wordt indirect met whether of if.", "Does verdwijnt; het werkwoord krijgt weer zijn -s: AI helps.", "Researchers want to know whether AI helps pupils."] },
          { q: "Verbeter de woordvolgorde en gebruik de present continuous: 'Tomorrow go we to the climate march.'", antwoord: A("Tomorrow we are going to the climate march.", "Tomorrow, we are going to the climate march.", "Tomorrow we're going to the climate march.", "Tomorrow, we're going to the climate march.", "We are going to the climate march tomorrow.", "We're going to the climate march tomorrow."), hint: "Na Tomorrow eerst het onderwerp, dan het werkwoord. Een afspraak: are + -ing.", stappen: ["Geen inversie: Tomorrow + we + werkwoord.", "Vaste afspraak: present continuous, are going.", "Tomorrow we are going to the climate march."] }
        ]
      },

      // gr-9 Articles and subject-verb agreement
      {
        id: "gr-9", nr: "2.9", titel: "Articles and subject-verb agreement",
        kern: [
          "**A** of **an** kies je op **klank**, niet op de letter: **an** voor een klinkerklank (an essay, an hour, an honest answer, an MP), **a** voor een medeklinkerklank (a university, a European country, a useful tool, a one-way street).",
          "Bij **algemene uitspraken** gebruik je meestal **geen the**: Society is changing. Most people own a phone. Technology makes life easier. Young people spend a lot of time online.",
          { let: "NIET: The society has changed. The most people think ... The nature is beautiful. Wel: **Society has changed. Most people think ... Nature is beautiful.** The alleen als je iets specifieks bedoelt: the society of the 1950s, the people in my class." },
          { tabel: { kop: ["lidwoord", "wanneer", "voorbeeld"], rijen: [
            ["geen", "algemeen, meervoud of ontelbaar", "Children need sleep. Pollution is a big problem."],
            ["the", "specifiek, al genoemd, of er is er maar één", "the children in my class, the environment, the internet, the government"],
            ["a / an", "één, niet specifiek; ook bij beroepen", "She wants to be a doctor. (niet: to be doctor)"]
          ] } },
          { kop: "Subject-verb agreement" },
          "In de present simple krijgt het werkwoord een **-s** bij he, she, it en bij één ding of persoon: The government spends ..., AI helps ..., My brother works ...",
          { let: "**Everyone, everybody, nobody, each, every** + enkelvoud: Everyone **has** a phone. Each pupil **gets** a laptop. Every country **needs** clean energy." },
          { tabel: { kop: ["meervoud", "enkelvoud / ontelbaar"], rijen: [
            ["people: People are worried.", "news: The news is shocking."],
            ["police: The police are investigating.", "information: This information is useful. (niet: informations)"],
            ["children: Children learn fast.", "advice: Her advice was helpful. (wel: a piece of advice)"],
            ["", "ook ontelbaar: homework, research, knowledge, equipment (geen -s)"]
          ] } },
          "**The number of** ... is (het aantal: één getal): The number of cyclists **is** growing. **A number of** ... are (een aantal: meerdere): A number of pupils **are** against the plan.",
          { let: "Bij een lang onderwerp past het werkwoord bij het **hoofdwoord**, niet bij het woord ervoor. The use of smartphones **is** (niet: are) increasing. One of the biggest problems **is** pollution." },
          { tip: "Controleer na het schrijven elk werkwoord in de present simple: wat is het onderwerp, en is dat enkelvoud? Een vergeten -s is een van de fouten die een docent het vaakst aanstreept." }
        ],
        begrippen: [
          ["article", "Lidwoord: a, an, the."],
          ["a / an", "Onbepaald lidwoord. Keuze op klank: an hour, a university."],
          ["the", "Bepaald lidwoord: voor iets specifieks of unieks. Niet bij algemene uitspraken."],
          ["zero article", "Geen lidwoord bij algemene uitspraken: Society, Nature, Most people, Children."],
          ["subject-verb agreement", "Het werkwoord past bij het onderwerp: enkelvoud met -s, meervoud zonder."],
          ["third person -s", "-s bij he, she, it en één ding in de present simple: AI helps, she works."],
          ["uncountable noun", "Ontelbaar: news, information, advice, homework, research. Geen a/an, geen -s, werkwoord enkelvoud."],
          ["everyone / each / nobody", "Altijd met een werkwoord in het enkelvoud: Everyone has, Nobody knows."],
          ["the number of / a number of", "The number of ... is (één aantal). A number of ... are (meerdere)."],
          ["people / police", "Altijd meervoud: People are, The police are."]
        ],
        vragen: [
          { q: "Which sentence is correct?", a: ["Society is becoming more digital.", "The society is becoming more digital.", "A society are becoming more digital.", "The society are becoming more digital."], u: "Algemene uitspraak over de maatschappij: geen the." },
          { q: "This is ___ honest answer.", a: ["an", "a", "a an", "some"], u: "Honest begint met een klinkerklank (de h is stom): an." },
          { q: "She wants to study at ___ university in England.", a: ["a", "an", "the an", "one an"], u: "University begint met de klank 'joe': medeklinkerklank, dus a." },
          { q: "Everyone ___ an opinion about social media.", a: ["has", "have", "are having", "haves"], u: "Everyone + enkelvoud: has." },
          { q: "The number of electric cars ___ growing fast.", a: ["is", "are", "have", "were"], u: "The number (het aantal) is enkelvoud: is." },
          { q: "A number of pupils ___ against the new rule.", a: ["are", "is", "has", "was"], u: "A number of (een aantal, meerdere) + meervoud: are." },
          { q: "Which sentence is correct?", a: ["The news is not always reliable.", "The news are not always reliable.", "The newses are not always reliable.", "A news is not always reliable."], u: "News is ontelbaar en enkelvoud, ook al eindigt het op -s." },
          { q: "Which sentence is correct?", a: ["The police are investigating the case.", "The police is investigating the case.", "The polices are investigating the case.", "A police are investigating the case."], u: "Police is altijd meervoud: the police are." },
          { q: "Can you give me some ___?", a: ["advice", "advices", "an advice", "adviced"], u: "Advice is ontelbaar: geen -s en geen an. Wel: a piece of advice." },
          { q: "The use of smartphones in class ___ a lot of distraction.", a: ["causes", "cause", "are causing", "have caused"], u: "Het hoofdwoord is use (enkelvoud), niet smartphones: causes." },
          { q: "Which sentence is correct?", a: ["Most people agree that climate change is a problem.", "The most people agree that climate change is a problem.", "Most of people agree that climate change is a problem.", "Most people agrees that climate change is a problem."], u: "Most people zonder the en zonder of; people is meervoud: agree." }
        ],
        oefen: [
          { type: "sorteer", q: "A of an?", groepen: ["a", "an"], items: [
            ["university", 0], ["European", 0], ["useful idea", 0], ["one-way street", 0],
            ["hour", 1], ["honest opinion", 1], ["MP", 1], ["essay", 1]
          ], u: "Het gaat om de klank: university en European beginnen met 'joe', one met 'w'; hour en honest hebben een stomme h; MP klinkt als 'em-pie'." },
          { type: "sorteer", q: "Werkwoord in het enkelvoud (is) of meervoud (are)?", groepen: ["is", "are"], items: [
            ["The news", 0], ["Everyone", 0], ["The number of tourists", 0], ["Homework", 0], ["The information", 0],
            ["People", 1], ["The police", 1], ["A number of pupils", 1], ["Children", 1], ["Most people", 1]
          ], u: "News, information en homework zijn ontelbaar; everyone en the number of zijn enkelvoud. People, police en children zijn meervoud." },
          { type: "invul", q: "Vul a, an of the in.", tekst: "Almost everyone owns {a} smartphone. Many people check {the} internet for more than {an} hour a day, and {a} university study shows that this affects their sleep.", extra: ["an", "the"], u: "A smartphone (medeklinker). The internet (er is er maar één). An hour (stomme h). A university (klank 'joe')." }
        ],
        open: [
          { q: "Verbeter de fouten: 'The society is changing fast. Everybody have a smartphone and the most people uses it every day. The number of hours online are growing, and a information about the risks are hard to find.'", a: "Society is changing fast. Everybody has a smartphone and most people use it every day. The number of hours online is growing, and information about the risks is hard to find.", punten: ["Society zonder the", "Everybody has (enkelvoud)", "most people zonder the, people use (meervoud)", "The number of ... is", "information zonder a, met is"] }
        ],
        reken: [
          G("A of an? Typ het lidwoord:", "Luister naar de eerste klank, niet naar de eerste letter.", [
            ["___ hour", "an", "De h is stom: klinkerklank."],
            ["___ university", "a", "Klinkt als 'joe': medeklinkerklank."],
            ["___ European country", "a", "Klinkt als 'joe': medeklinkerklank."],
            ["___ honest answer", "an", "De h is stom: klinkerklank."],
            ["___ MP", "an", "Klinkt als 'em-pie': klinkerklank."],
            ["___ one-way ticket", "a", "One klinkt als 'wun': medeklinkerklank."],
            ["___ useful tool", "a", "Klinkt als 'joe': medeklinkerklank."],
            ["___ unusual idea", "an", "Un- klinkt als een klinker: an."],
            ["___ uniform", "a", "Klinkt als 'joe': medeklinkerklank."],
            ["___ essay", "an", "Klinkerklank."],
            ["___ eight-hour day", "an", "Eight begint met een klinkerklank."]
          ]),
          G("Vul de goede vorm in (present simple):", "Wat is het hoofdwoord van het onderwerp? Enkelvoud of ontelbaar: -s of is. Meervoud: geen -s of are.", [
            ["Everybody ___ (want) to be happy.", "wants", "Everybody is enkelvoud: wants."],
            ["The police ___ (be) on the scene.", "are", "Police is meervoud: are."],
            ["The news ___ (be) shocking.", "is", "News is ontelbaar, enkelvoud: is."],
            ["Each pupil ___ (get) a laptop.", "gets", "Each + enkelvoud: gets."],
            ["People ___ (need) clean air.", "need", "People is meervoud: geen -s."],
            ["The number of tourists ___ (be) increasing.", "is", "The number is enkelvoud: is."],
            ["One of my friends ___ (live) in London.", "lives", "Het hoofdwoord is one: lives."],
            ["Nobody ___ (know) the answer.", "knows", "Nobody + enkelvoud: knows."],
            ["Homework ___ (take) up a lot of my time.", "takes", "Homework is ontelbaar, enkelvoud: takes."],
            ["Information about climate change ___ (be) easy to find.", "is", "Information is ontelbaar: is."]
          ]),
          { q: "Verbeter de zin (algemene uitspraak): 'The nature is under threat.'", antwoord: A("Nature is under threat."), hint: "Bij een algemene uitspraak over de natuur gebruik je geen lidwoord.", stappen: ["Nature in het algemeen: geen the.", "Nature is under threat."] }
        ]
      }
    ]
  });
})();
