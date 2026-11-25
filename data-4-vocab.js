// Hoofdstuk 4: woordenschat voor het essay (zinsopeners per fase en woorden per thema).
TW.hoofdstuk({
  id: "vocab", nr: "4", titel: "Vocabulary for essays", icoon: "📚",
  intro: "Vaste zinsopeners voor elke fase van het essay en de woorden die je nodig hebt bij vier veelgevraagde onderwerpen: social media, AI, het klimaat en school en werk.",
  onderdelen: [
    {
      id: "vo-1", nr: "4.1", titel: "Zinsopeners per essayfase",
      kern: [
        "Met een paar vaste [[sentence openers]] per fase klinkt je essay meteen goed en hoef je tijdens de toets niet na te denken over hoe je een zin begint. Leer per fase twee of drie openers uit je hoofd en varieer ermee.",
        { kop: "Introduction: hook en thesis" },
        { tabel: { kop: ["functie", "opener", "voorbeeld"], rijen: [
          ["hook", "Imagine ...", "Imagine a school day without a single phone in sight."],
          ["hook", "Have you ever ...?", "Have you ever spent a whole weekend offline?"],
          ["hook", "Nowadays, ...", "Nowadays, almost every teenager owns a smartphone."],
          ["onderwerp", "In recent years, ...", "In recent years, more and more schools have banned phones."],
          ["thesis", "This essay will discuss / examine ...", "This essay will examine the advantages and disadvantages of such a ban."]
        ] } },
        { kop: "Body: pros en cons" },
        { tabel: { kop: ["pros (voordelen)", "cons (nadelen)"], rijen: [
          ["One major advantage of ... is that ...", "A serious drawback of ... is that ..."],
          ["Supporters argue that ...", "Critics claim that ..."],
          ["Another benefit is that ...", "Another disadvantage is that ..."],
          ["It is often argued that ...", "Opponents point out that ..."],
          ["... can lead to ...", "On the other hand, ..."]
        ] } },
        { let: "Na **one of the** komt een meervoud, maar het werkwoord is enkelvoud: One of the biggest advantages **is** that ... Niet: 'One of the advantages are'." },
        { kop: "Afweging en conclusion" },
        { tabel: { kop: ["functie", "opener", "voorbeeld"], rijen: [
          ["afweging", "Having considered both sides, ...", "Having considered both sides, I believe that a ban goes too far."],
          ["afweging", "While it is true that ..., ...", "While it is true that phones distract pupils, they can also be useful in lessons."],
          ["mening", "All things considered, I believe ...", "All things considered, I believe that schools should limit phone use."],
          ["mening", "On balance, ...", "On balance, the disadvantages seem more serious."],
          ["mening", "In my view, the advantages outweigh the disadvantages.", "In my view, the benefits of homework outweigh the drawbacks."]
        ] } },
        { let: "Bij **While it is true that ..., ...** volgt na de komma direct de hoofdzin, zonder but. Fout: 'While it is true that AI is useful, but it has risks.' Goed: While it is true that AI is useful, it also has risks." },
        { kop: "Sterke woorden" },
        { tabel: { kop: ["woord", "betekenis", "zo gebruik je het"], rijen: [
          ["to argue", "betogen, stellen", "Supporters argue that ..."],
          ["to claim", "beweren", "Critics claim that ..."],
          ["to point out", "erop wijzen", "Opponents point out that ..."],
          ["to outweigh", "zwaarder wegen dan", "The benefits outweigh the drawbacks."],
          ["a benefit", "een voordeel", "a major benefit; to benefit from something"],
          ["a drawback", "een nadeel", "a serious drawback"],
          ["to lead to / to result in", "leiden tot", "Stress can lead to health problems."],
          ["to contribute to", "bijdragen aan", "Cars contribute to air pollution."]
        ] } },
        { tip: "Varieer: schrijf niet drie keer advantage. Wissel af met benefit, positive aspect en strong point, en bij nadelen met drawback, disadvantage en downside." },
        { ezel: "**Out**weigh: de ene kant weegt er**uit**, boven de andere uit. The advantages outweigh the disadvantages: de voordelen winnen." },
        { voorbeeld: { titel: "het skelet van een essay, alleen met openers", stappen: [
          "**Introduction:** Nowadays, ... In recent years, ... This essay will examine ...",
          "**Pros:** One major advantage of ... is that ... Supporters also argue that ... For example, ...",
          "**Cons:** On the other hand, critics claim that ... A serious drawback is that ... As a result, ...",
          "**Conclusion:** Having considered both sides, ... While it is true that ..., ... On balance, I believe that ..."
        ] } }
      ],
      begrippen: [
        ["sentence opener", "Zinsopener: vaste formulering waarmee je een zin of alinea begint. One major advantage of ... is that ..."],
        ["Imagine ...", "Stel je voor ... (hook): Imagine a world without social media."],
        ["Nowadays, ...", "Tegenwoordig ... (hook of onderwerp, één woord): Nowadays, most pupils own a laptop."],
        ["This essay will examine ...", "Dit essay onderzoekt ... (thesis): This essay will examine both sides of the issue."],
        ["advantage / benefit", "Voordeel: one major advantage of ..., a clear benefit."],
        ["disadvantage / drawback", "Nadeel: a serious drawback of ..., another disadvantage."],
        ["supporters / opponents", "Voorstanders / tegenstanders: Supporters argue that ..."],
        ["critics", "Critici: Critics claim that ..."],
        ["to argue", "Betogen, stellen: It is often argued that ..."],
        ["to claim", "Beweren (zonder dat het bewezen is): Some people claim that ..."],
        ["to point out", "Erop wijzen: Experts point out that ..."],
        ["to outweigh", "Zwaarder wegen dan: The advantages outweigh the disadvantages."],
        ["Having considered both sides, ...", "Na beide kanten te hebben bekeken, ... (afweging in het slot)."],
        ["All things considered, ...", "Alles bij elkaar genomen, ...: All things considered, I believe that ..."],
        ["On balance, ...", "Alles afwegend, ...: On balance, the drawbacks are more serious."]
      ],
      vragen: [
        { q: "Welke zin is de beste hook?", a: ["Have you ever spent a whole day without your phone?", "This essay will discuss the pros and cons of phones.", "In conclusion, phones have both pros and cons.", "Another disadvantage of phones is that they distract."], u: "Een hook trekt de aandacht, bijvoorbeeld met een vraag. De andere zinnen zijn een thesis, een slotzin en een argument." },
        { q: "This essay will ___ the advantages and disadvantages of a four-day school week.", a: ["examine", "argue", "claim", "outweigh"], u: "Examine of discuss kondigt aan wat het essay doet. Argue en claim worden gevolgd door that, en outweigh is wegen." },
        { q: "One major advantage ___ online lessons is that pupils can study at their own pace.", a: ["of", "for", "from", "by"], u: "Het vaste voorzetsel is advantage of: one major advantage of online lessons." },
        { q: "Supporters ___ that a four-day school week would reduce stress.", a: ["argue", "discuss", "outweigh", "point"], u: "Argue that = betogen dat. Discuss heeft geen that, en point alleen werkt niet: het is point out that." },
        { q: "In my view, the advantages ___ the disadvantages.", a: ["outweigh", "weigh out", "are outweighing", "outweigh over"], u: "Outweigh is een gewoon werkwoord zonder voorzetsel: the advantages outweigh the disadvantages." },
        { q: "Welke opener past aan het begin van de cons-alinea?", a: ["On the other hand, critics claim that ...", "One major advantage is that ...", "This essay will examine ...", "All things considered, I believe ..."], u: "On the other hand en critics claim kondigen de andere kant aan. De rest hoort bij de pros, de inleiding en het slot." },
        { q: "___ considered both sides, I believe that schools should ban phones.", a: ["Having", "After", "Because", "Have"], u: "Having considered = na overwogen te hebben. After zou after considering moeten zijn." },
        { q: "Welke zin is goed?", a: ["While it is true that AI saves time, it also makes pupils lazy.", "While it is true that AI saves time, but it also makes pupils lazy.", "While it is true that AI saves time. It also makes pupils lazy.", "While it is true, that AI saves time it also makes pupils lazy."], u: "While ... is een bijzin: daarna een komma en direct de hoofdzin, zonder but. Geen komma voor that." },
        { q: "One of the biggest drawbacks of social media ___ that it can be addictive.", a: ["is", "are", "were", "have"], u: "Het onderwerp is one (of the drawbacks): enkelvoud, dus is." },
        { q: "Wat betekent: 'Critics claim that homework causes stress.'?", a: ["Critici beweren dat huiswerk stress veroorzaakt.", "Critici klagen dat huiswerk stress veroorzaakt.", "Critici eisen dat huiswerk stress veroorzaakt.", "Critici bewijzen dat huiswerk stress veroorzaakt."], u: "Claim = beweren. Klagen is complain, eisen is demand en bewijzen is prove." },
        { q: "Welke opener hoort in de conclusion?", a: ["On balance, ...", "For instance, ...", "Furthermore, ...", "Have you ever ...?"], u: "On balance (alles afwegend) rondt af. For instance geeft een voorbeeld, furthermore voegt een argument toe en Have you ever is een hook." },
        { q: "Welk woord betekent 'nadeel'?", a: ["drawback", "benefit", "outcome", "claim"], u: "Drawback = nadeel. Benefit = voordeel, outcome = uitkomst, claim = bewering." }
      ],
      reken: [
        { gen: (R) => {
          const [zin, antw, uitleg] = R.kies([
            ["All things ___, I believe that schools should start later.", ["considered"], "All things considered = alles bij elkaar genomen."],
            ["___ balance, the disadvantages seem more serious.", ["on"], "On balance = alles afwegend."],
            ["In my view, the advantages ___ the disadvantages.", ["outweigh"], "Outweigh = zwaarder wegen dan."],
            ["___ considered both sides, I think that a ban goes too far.", ["having"], "Having considered = na overwogen te hebben."],
            ["One major advantage ___ homework is that pupils practise more.", ["of"], "Advantage of = voordeel van."],
            ["This essay will ___ the advantages and disadvantages of online lessons.", ["discuss", "examine", "consider", "explore", "analyse", "analyze", "evaluate", "investigate", "address"], "This essay will discuss / examine ..."],
            ["___ it is true that AI is useful, it also has risks.", ["while", "although", "though", "whilst"], "While it is true that ..., ... (of although)."],
            ["___ you ever wondered what life without a phone would be like?", ["have"], "Have you ever ...? (hook)"],
            ["___, almost every teenager owns a smartphone.", ["nowadays", "today"], "Nowadays (één woord) = tegenwoordig."],
            ["A serious ___ of social media is that it can be addictive.", ["drawback", "disadvantage", "downside"], "A serious drawback = een ernstig nadeel."],
            ["Another ___ of a four-day week is that pupils have more time to rest.", ["benefit", "advantage"], "Another benefit / advantage = nog een voordeel."],
            ["Opponents point ___ that the plan is too expensive.", ["out"], "Point out = erop wijzen."]
          ]);
          return { q: `Vul één woord in: ${zin}`, antwoord: antw, hint: "Het is een vaste zinsopener uit 4.1.", stappen: [uitleg, `Antwoord: ${antw[0]}`] };
        } },
        { gen: (R) => {
          const [nl, antw, uitleg] = R.kies([
            ["nadeel", ["drawback", "disadvantage", "downside"], "a drawback, a disadvantage"],
            ["voordeel", ["advantage", "benefit"], "an advantage, a benefit"],
            ["betogen, stellen", ["argue", "to argue"], "Supporters argue that ..."],
            ["beweren", ["claim", "to claim"], "Critics claim that ..."],
            ["zwaarder wegen dan", ["outweigh", "to outweigh"], "The advantages outweigh the disadvantages."],
            ["voorstanders", ["supporters", "proponents", "advocates"], "Supporters argue that ..."],
            ["tegenstanders", ["opponents", "critics"], "Opponents point out that ..."],
            ["erop wijzen", ["point out", "to point out"], "Experts point out that ..."],
            ["leiden tot", ["lead to", "result in", "to lead to", "to result in"], "Stress can lead to health problems."],
            ["bijdragen aan", ["contribute to", "to contribute to"], "Cars contribute to air pollution."]
          ]);
          return { q: `Geef het Engelse woord dat je in een essay gebruikt voor: **${nl}**`, antwoord: antw, hint: "Denk aan de woorden uit de tabel 'Sterke woorden'.", stappen: [`${antw[0]}: ${uitleg}`] };
        } },
        { q: "Verbeter de fout en typ alleen het goede werkwoord: One of the advantages are that pupils save travel time.", antwoord: ["is"], hint: "Wat is het onderwerp: one of ... of the advantages?", stappen: ["Het onderwerp is one (enkelvoud).", "One of the advantages is that ..."] },
        { q: "Vul het voorzetsel in (één woord): Pupils can benefit ___ smaller classes.", antwoord: ["from"], hint: "Het werkwoord benefit heeft een vast voorzetsel.", stappen: ["To benefit from something = voordeel hebben van iets.", "Pupils can benefit from smaller classes."] }
      ],
      oefen: [
        { type: "volgorde", q: "Zet de openers in de volgorde waarin ze in een essay staan.", items: ["Nowadays, ...", "This essay will examine ...", "One major advantage of ... is that ...", "Supporters also argue that ...", "On the other hand, critics claim that ...", "A serious drawback is that ...", "Having considered both sides, ...", "On balance, I believe that ..."], u: "Hook en thesis, dan twee keer pros, twee keer cons, en in het slot eerst de afweging en dan je mening." },
        { type: "sorteer", q: "Hoort de opener bij de pros, de cons of de conclusion?", groepen: ["Pros", "Cons", "Conclusion"], items: [
          ["One major advantage of ... is that ...", 0], ["Supporters argue that ...", 0], ["Another benefit is that ...", 0],
          ["Critics claim that ...", 1], ["A serious drawback is that ...", 1], ["Opponents point out that ...", 1],
          ["All things considered, ...", 2], ["On balance, ...", 2], ["Having considered both sides, ...", 2]
        ], u: "Advantage, benefit en supporters horen bij de pros; drawback, critics en opponents bij de cons; afwegende openers bij het slot." },
        { type: "koppel", q: "Koppel het Engelse woord aan de betekenis.", paren: [
          ["to argue", "betogen"], ["to claim", "beweren"], ["to point out", "erop wijzen"], ["to outweigh", "zwaarder wegen dan"], ["a drawback", "een nadeel"], ["a benefit", "een voordeel"]
        ], u: "Deze zes woorden maken je essay meteen formeler en preciezer dan good, bad en say." },
        { type: "invul", q: "Vul de openers aan.", tekst: "{Nowadays}, many pupils use AI to help them with their homework. This essay will {examine} the advantages and disadvantages of this development. One major {advantage} is that AI explains difficult topics quickly. On the other hand, critics {claim} that pupils stop thinking for themselves. {On} balance, I believe that the benefits {outweigh} the drawbacks, as long as pupils use AI wisely.", extra: ["drawback", "Imagine", "argue to"], u: "Nowadays (hook), examine (thesis), advantage (pros), claim (cons), on balance en outweigh (slot)." }
      ],
      open: [
        { q: "Schrijf vier zinnen over de stelling 'Schools should replace books with tablets.': een thesis statement, de eerste zin van de pros-alinea, de eerste zin van de cons-alinea en een slotzin met je mening. Gebruik in elke zin een andere opener uit 4.1.", a: "This essay will examine the advantages and disadvantages of replacing books with tablets. One major advantage of tablets is that pupils no longer have to carry heavy bags. On the other hand, critics claim that pupils are more easily distracted on a screen. All things considered, I believe that schools should combine tablets with traditional books.", punten: ["thesis statement die beide kanten aankondigt (This essay will examine ...)", "pros-zin met een opener als One major advantage of ... is that ...", "cons-zin met een opener als On the other hand, critics claim that ...", "slotzin met afweging en mening (All things considered / On balance, I believe ...)", "vier verschillende openers, goed gespeld en formeel"] }
      ],
      widgets: ["bouwer", "formeel"]
    },
    {
      id: "vo-2", nr: "4.2", titel: "Topic vocabulary",
      kern: [
        "Bij een essay hoort een onderwerp, en bij een onderwerp horen vaste woorden. Wie de juiste [[collocation]] kent (woorden die vaak samen voorkomen, zoals reduce emissions of raise awareness), schrijft preciezer en klinkt als een echte Engelstalige.",
        { tip: "Leer woorden niet los, maar met hun vaste partner: niet alleen awareness, maar **raise awareness of** something. Dat is meteen een zin die je in je essay kunt gebruiken." },
        { kop: "Social media" },
        { tabel: { kop: ["Engels", "Nederlands", "collocatie"], rijen: [
          ["screen time", "schermtijd", "limit / reduce screen time"],
          ["addictive", "verslavend", "highly addictive apps"],
          ["cyberbullying", "online pesten", "be a victim of cyberbullying"],
          ["to raise awareness", "bewustzijn vergroten", "raise awareness of mental health"],
          ["privacy", "privacy", "protect your privacy"],
          ["personal data", "persoonsgegevens", "share personal data"],
          ["mental health", "geestelijke gezondheid", "harm young people's mental health"],
          ["peer pressure", "groepsdruk", "give in to peer pressure"],
          ["fake news", "nepnieuws", "spread fake news"],
          ["self-esteem", "eigenwaarde, zelfbeeld", "low self-esteem"],
          ["to stay in touch", "contact houden", "stay in touch with friends abroad"]
        ] } },
        { kop: "Artificial intelligence" },
        { tabel: { kop: ["Engels", "Nederlands", "collocatie"], rijen: [
          ["to automate", "automatiseren", "automate routine tasks"],
          ["to replace jobs", "banen vervangen", "machines may replace jobs"],
          ["reliable", "betrouwbaar", "a reliable source"],
          ["accurate", "nauwkeurig, juist", "accurate information"],
          ["to cheat", "spieken, frauderen", "cheat in exams"],
          ["plagiarism", "plagiaat", "commit plagiarism"],
          ["efficiency", "efficiëntie", "improve efficiency"],
          ["to generate", "genereren, maken", "generate text in seconds"],
          ["to rely on", "vertrouwen op, afhankelijk zijn van", "rely too much on technology"],
          ["critical thinking", "kritisch denken", "develop critical thinking skills"],
          ["bias", "vooringenomenheid, vertekening", "AI systems can show bias"]
        ] } },
        { kop: "Climate" },
        { tabel: { kop: ["Engels", "Nederlands", "collocatie"], rijen: [
          ["carbon emissions", "CO2-uitstoot", "reduce carbon emissions"],
          ["renewable energy", "hernieuwbare (duurzame) energie", "invest in renewable energy"],
          ["sustainable", "duurzaam", "a sustainable lifestyle"],
          ["to reduce", "verminderen", "reduce waste"],
          ["global warming", "opwarming van de aarde", "slow down global warming"],
          ["fossil fuels", "fossiele brandstoffen", "burn fossil fuels"],
          ["carbon footprint", "CO2-voetafdruk", "reduce your carbon footprint"],
          ["to tackle", "aanpakken", "tackle climate change"],
          ["public transport", "openbaar vervoer", "travel by public transport"],
          ["extreme weather", "extreem weer", "extreme weather events"]
        ] } },
        { kop: "School and work" },
        { tabel: { kop: ["Engels", "Nederlands", "collocatie"], rijen: [
          ["workload", "hoeveelheid werk, werkdruk", "a heavy workload"],
          ["part-time job", "bijbaan", "have a part-time job"],
          ["to gain experience", "ervaring opdoen", "gain work experience"],
          ["to motivate", "motiveren", "motivate pupils to work harder"],
          ["a balance between", "een balans tussen", "find a balance between school and work"],
          ["to earn money", "geld verdienen", "earn some extra money"],
          ["skills", "vaardigheden", "develop useful skills"],
          ["to focus on", "zich richten op", "focus on your studies"],
          ["to achieve", "bereiken, behalen", "achieve good results"],
          ["to meet a deadline", "een deadline halen", "struggle to meet deadlines"],
          ["to prepare for", "voorbereiden op", "prepare pupils for the future"]
        ] } },
        { let: "Sommige woorden zijn in het Engels ontelbaar: geen a ervoor en geen -s erachter. **research** (niet 'a research' of 'researches'; wel **a study**), **information**, **advice**, **homework**, **equipment**. Zeg dus: a lot of information, a piece of advice." },
        { let: "**Climate change** en **global warming** krijgen geen the: Climate change is a serious threat. Maar **the environment** wel: We must protect the environment." },
        { let: "Geld verdienen is **earn** money. **Deserve** betekent 'verdienen' in de zin van 'recht hebben op': Pupils deserve a break." }
      ],
      begrippen: [
        ["collocation", "Vaste woordcombinatie: raise awareness, reduce emissions, make a decision."],
        ["screen time", "Schermtijd: limit screen time."],
        ["addictive", "Verslavend: highly addictive apps."],
        ["cyberbullying", "Online pesten: be a victim of cyberbullying."],
        ["to raise awareness", "Bewustzijn vergroten: raise awareness of mental health."],
        ["peer pressure", "Groepsdruk: give in to peer pressure."],
        ["to automate", "Automatiseren: automate routine tasks."],
        ["reliable", "Betrouwbaar: a reliable source."],
        ["to cheat", "Spieken, frauderen: cheat in exams."],
        ["efficiency", "Efficiëntie: improve efficiency."],
        ["carbon emissions", "CO2-uitstoot: reduce carbon emissions."],
        ["renewable energy", "Hernieuwbare (duurzame) energie: invest in renewable energy."],
        ["sustainable", "Duurzaam: a sustainable lifestyle."],
        ["workload", "Hoeveelheid werk, werkdruk: a heavy workload."],
        ["to gain experience", "Ervaring opdoen: gain work experience."]
      ],
      vragen: [
        { q: "Many apps are designed to be ___, so users keep scrolling.", a: ["addictive", "addicted", "addiction", "addict"], u: "Addictive = verslavend (eigenschap van de app). Addicted = verslaafd (zo ben jij), addiction is het zelfstandig naamwoord." },
        { q: "Campaigns on social media can ___ awareness of cyberbullying.", a: ["raise", "rise", "make", "grow"], u: "De vaste combinatie is raise awareness. Rise heeft geen lijdend voorwerp, en make awareness bestaat niet." },
        { q: "Welke zin is goed?", a: ["Scientists have done a lot of research on screen time.", "Scientists have done a research on screen time.", "Scientists have done many researches on screen time.", "Scientists have made a lot of researches on screen time."], u: "Research is ontelbaar: geen a, geen -s. En je doet onderzoek: do research." },
        { q: "Welke zin is goed?", a: ["Climate change is a serious threat.", "The climate change is a serious threat.", "A climate change is a serious threat.", "The climate changes are a serious threat."], u: "Climate change krijgt in deze betekenis geen lidwoord." },
        { q: "Many teenagers have a part-time job to ___ some extra money.", a: ["earn", "deserve", "win", "merit"], u: "Geld verdienen is earn money. Deserve is verdienen in de zin van 'recht hebben op'." },
        { q: "A part-time job helps teenagers to ___ work experience.", a: ["gain", "win", "make", "become"], u: "Ervaring opdoen is gain experience (of get experience). Win en make passen niet, become is worden." },
        { q: "AI tools can ___ many routine tasks in offices.", a: ["automate", "automatic", "automation", "automatically"], u: "Na can komt een werkwoord: automate. Automatic is een bijvoeglijk naamwoord, automation een zelfstandig naamwoord." },
        { q: "Information from an AI chatbot is not always ___.", a: ["reliable", "relying", "reliant", "relied"], u: "Reliable = betrouwbaar. Reliant on betekent afhankelijk van." },
        { q: "Governments should invest more in ___ energy, such as wind and solar power.", a: ["renewable", "renewing", "renewed", "durable"], u: "Hernieuwbare energie is renewable energy. Durable betekent stevig of slijtvast, niet duurzaam in de zin van milieuvriendelijk." },
        { q: "We can all ___ our carbon footprint by flying less.", a: ["reduce", "decline", "fall", "drop down"], u: "Reduce heeft een lijdend voorwerp: reduce your carbon footprint. Decline en fall gebruik je zonder lijdend voorwerp (emissions fell)." },
        { q: "Many pupils struggle to find a ___ between school and a part-time job.", a: ["balance", "equality", "scale", "weight"], u: "Een balans tussen twee dingen is a balance between: find a balance between school and work." },
        { q: "Welke zin is goed?", a: ["The internet gives us a lot of information.", "The internet gives us a lot of informations.", "The internet gives us many informations.", "The internet gives us an information."], u: "Information is ontelbaar: geen -s, geen an en geen many. Wel: a lot of information, much information." }
      ],
      reken: [
        { gen: (R) => {
          const [nl, antw, thema] = R.kies([
            ["schermtijd", ["screen time"], "social media"], ["verslavend", ["addictive"], "social media"], ["online pesten", ["cyberbullying"], "social media"],
            ["groepsdruk", ["peer pressure"], "social media"], ["nepnieuws", ["fake news"], "social media"], ["geestelijke gezondheid", ["mental health"], "social media"],
            ["automatiseren", ["automate", "to automate"], "AI"], ["betrouwbaar", ["reliable"], "AI"], ["plagiaat", ["plagiarism"], "AI"],
            ["kritisch denken", ["critical thinking"], "AI"], ["nauwkeurig, juist", ["accurate", "correct", "precise"], "AI"],
            ["CO2-uitstoot", ["carbon emissions", "emissions", "co2 emissions"], "klimaat"], ["fossiele brandstoffen", ["fossil fuels"], "klimaat"],
            ["opwarming van de aarde", ["global warming"], "klimaat"], ["openbaar vervoer", ["public transport"], "klimaat"], ["duurzaam (milieuvriendelijk)", ["sustainable"], "klimaat"],
            ["bijbaan", ["part-time job", "parttime job", "side job"], "school en werk"], ["vaardigheden", ["skills"], "school en werk"],
            ["geld verdienen", ["earn money", "to earn money"], "school en werk"], ["hoeveelheid werk, werkdruk", ["workload", "work pressure"], "school en werk"]
          ]);
          return { q: `Thema ${thema}. Vertaal in het Engels: **${nl}**`, antwoord: antw, hint: "Het woord staat in de tabel van dit thema in 4.2.", stappen: [`${nl} = ${antw[0]}`] };
        } },
        { gen: (R) => {
          const [zin, antw, uitleg] = R.kies([
            ["Schools can organise lessons to ___ awareness of online privacy.", ["raise"], "raise awareness of"],
            ["Every country must ___ its carbon emissions.", ["reduce", "cut", "lower"], "reduce (cut, lower) carbon emissions"],
            ["A part-time job is a good way to ___ experience.", ["gain", "get"], "gain experience"],
            ["Social media can be used to ___ fake news.", ["spread"], "spread fake news"],
            ["Users should be careful to ___ their privacy online.", ["protect"], "protect your privacy"],
            ["Governments need to ___ climate change together.", ["tackle", "fight", "combat", "address"], "tackle climate change"],
            ["Pupils should not ___ too much on AI to do their homework.", ["rely"], "rely on"],
            ["Many pupils find it hard to ___ deadlines.", ["meet"], "meet a deadline"],
            ["Some pupils use AI to ___ in exams.", ["cheat"], "cheat in exams"],
            ["Teenagers should try to ___ their screen time.", ["limit", "reduce", "cut", "restrict"], "limit (reduce) screen time"],
            ["Good teachers know how to ___ their pupils.", ["motivate", "inspire", "encourage"], "motivate pupils"],
            ["Social media helps people to stay in ___ with friends abroad.", ["touch"], "stay in touch"]
          ]);
          return { q: `Vul het ontbrekende woord van de collocatie in (één woord): ${zin}`, antwoord: antw, hint: "Welk woord hoort vast bij de rest van de combinatie?", stappen: [`Collocatie: ${uitleg}`, `Antwoord: ${antw[0]}`] };
        } },
        { q: "Verbeter de fout en typ alleen het verbeterde woord: The internet offers a lot of useful informations.", antwoord: ["information"], hint: "Is dit woord telbaar?", stappen: ["Information is ontelbaar.", "Dus zonder -s: a lot of useful information."] },
        { q: "Vul in (één woord): Using AI to write your essay and handing it in as your own work is a form of ___.", antwoord: ["plagiarism", "cheating", "fraud"], hint: "Andermans werk als je eigen werk inleveren.", stappen: ["Andermans werk inleveren als eigen werk = plagiarism (of cheating)."] }
      ],
      oefen: [
        { type: "sorteer", q: "Bij welk thema hoort het woord het best?", groepen: ["Social media", "AI", "Climate", "School and work"], items: [
          ["cyberbullying", 0], ["peer pressure", 0], ["screen time", 0],
          ["to automate", 1], ["plagiarism", 1], ["algorithm", 1],
          ["fossil fuels", 2], ["renewable energy", 2], ["carbon footprint", 2],
          ["workload", 3], ["part-time job", 3], ["to meet a deadline", 3]
        ], u: "Leer woorden per thema: dan heb je bij elk onderwerp meteen een rijtje bruikbare woorden paraat." },
        { type: "koppel", q: "Koppel het werkwoord aan het woord waarmee het een vaste combinatie vormt.", paren: [
          ["raise", "awareness"], ["reduce", "emissions"], ["gain", "experience"], ["spread", "fake news"], ["meet", "a deadline"], ["protect", "your privacy"]
        ], u: "Dit zijn collocations: vaste partners. 'Make awareness' of 'win experience' klinkt voor een Engelstalige meteen fout." },
        { type: "invul", q: "Vul de woorden in.", tekst: "Many teenagers have a {part-time} job. It allows them to {earn} money and to {gain} experience. However, a heavy {workload} can cause stress, so pupils need to find a {balance} between school and work.", extra: ["deserve", "win", "equality"], u: "Part-time job, earn money, gain experience, a heavy workload, a balance between." }
      ],
      open: [
        { q: "Schrijf een pros-alinea van vier tot vijf zinnen over de stelling 'Social media does more good than harm.' Gebruik minstens vier woorden of collocaties uit de tabel social media en een opener uit 4.1.", a: "One major advantage of social media is that it helps young people to stay in touch with friends and family abroad. In addition, it can be used to raise awareness of important issues, such as mental health or climate change. Supporters also argue that young people who feel lonely can find others with the same interests online. For example, pupils with a rare illness can share their experiences in online groups.", punten: ["begint met een opener uit 4.1 (One major advantage of ... is that ...)", "minstens vier woorden of collocaties uit de tabel (stay in touch, raise awareness, mental health, ...)", "collocaties goed gebruikt (raise awareness of, stay in touch with)", "argumenten uitgewerkt met een voorbeeld", "formele stijl, geen samentrekkingen"] }
      ]
    }
  ]
});
