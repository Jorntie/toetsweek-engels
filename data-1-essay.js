// Hoofdstuk 1: het essay zelf (opbouw, alinea's, linking words, formele stijl).
TW.hoofdstuk({
  id: "essay", nr: "1", titel: "Het essay", icoon: "🧱",
  intro: "Hoe bouw je een for-and-against essay op? Structuur, alinea's, linking words en formele stijl.",
  onderdelen: [
    {
      id: "es-1", nr: "1.1", titel: "Opbouw: introduction, pros, cons, conclusion",
      kern: [
        "Een [[for-and-against essay]] bespreekt beide kanten van een onderwerp en eindigt met jouw afweging. Je kiest dus niet meteen partij: eerst de voordelen, dan de nadelen, dan pas je mening.",
        "Het essay heeft **vier alinea's**: introduction, pros, cons en conclusion. Elke alinea begint op een nieuwe regel, met een witregel ertussen. Geen kopjes en geen opsommingstekens.",
        { fig: "opbouw", bij: "De vier alinea's met hun aandeel in het aantal woorden." },
        { kop: "Introduction (ongeveer 15%)" },
        "Begin met een [[hook]]: een zin die de aandacht trekt (een herkenbare situatie, een vraag of een opvallend feit).",
        "Noem daarna het onderwerp en eindig met een [[thesis statement]]: de zin die aankondigt wat het essay gaat doen.",
        { voorbeeld: { titel: "mini-inleiding in drie zinnen", stappen: [
          "**Hook:** Almost every teenager owns a smartphone, and most of them take it to school every day.",
          "**Onderwerp:** In recent years, a growing number of secondary schools have banned phones from the classroom.",
          "**Thesis statement:** This essay discusses the advantages and disadvantages of such a ban."
        ] } },
        { let: "Geef in de inleiding nog geen argumenten en nog geen mening. Die komen pas in de body en in het slot." },
        { kop: "Body: pros en cons (elk ongeveer 30 tot 35%)" },
        "Eén alinea met voordelen en één met nadelen. Twee of drie argumenten per alinea is genoeg, als je ze uitwerkt met een reden of een voorbeeld.",
        "Laat met [[linking words]] zien waar je bent: **On the one hand, ...** voor de eerste kant en **On the other hand, ...** voor de andere kant.",
        { kop: "Conclusion (ongeveer 20%)" },
        "Vat in één zin beide kanten samen, weeg ze tegen elkaar af en geef dan je [[own opinion]]. Voeg geen nieuwe argumenten toe.",
        { tip: "Tel je woorden. Bij een opdracht van 200 tot 250 woorden: inleiding 30 tot 40, twee body-alinea's van elk 70 tot 80, slot 40 tot 50." },
        { ezel: "Een essay is een hamburger: broodje (introduction), twee lagen beleg (pros en cons), broodje (conclusion). Zonder broodjes valt het uit elkaar." }
      ],
      begrippen: [
        ["for-and-against essay", "Essay dat de voordelen en nadelen van een onderwerp bespreekt en eindigt met een afweging."],
        ["introduction", "Eerste alinea: hook, onderwerp en thesis statement. Nog geen argumenten."],
        ["hook", "Eerste zin van het essay, bedoeld om de aandacht van de lezer te trekken."],
        ["thesis statement", "Zin aan het eind van de inleiding die aankondigt wat het essay gaat bespreken."],
        ["body paragraph", "Alinea in het middendeel: één kant van de zaak, uitgewerkt met argumenten."],
        ["pros", "De voordelen, de argumenten vóór (advantages, benefits)."],
        ["cons", "De nadelen, de argumenten tegen (disadvantages, drawbacks)."],
        ["conclusion", "Laatste alinea: samenvatting van beide kanten, afweging en eigen mening."],
        ["own opinion", "Jouw mening. Hoort in de conclusion: In my opinion, ... / I believe that ..."],
        ["paragraph", "Alinea: een blok zinnen over één hoofdgedachte, gescheiden door een witregel."],
        ["outline", "Schrijfplan in steekwoorden dat je maakt voordat je begint te schrijven."],
        ["word limit", "Het aantal woorden dat je mag of moet schrijven."]
      ],
      vragen: [
        { q: "Wat is de juiste volgorde van een for-and-against essay?", a: ["introduction, pros, cons, conclusion", "introduction, opinion, pros, cons", "hook, conclusion, pros, cons", "pros, cons, introduction, opinion"], u: "Eerst de inleiding, dan de twee kanten in de body, en pas in het slot je afweging en mening." },
        { q: "Welke zin is een goede thesis statement voor een for-and-against essay?", a: ["This essay looks at the advantages and disadvantages of homework.", "I think that homework is a waste of time for every single pupil.", "Homework has existed for a very long time, as everybody knows.", "Firstly, homework helps pupils to practise the skills they learn."], u: "Een thesis statement kondigt aan wat het essay gaat doen. Een mening hoort in het slot en 'Firstly' is al een argument." },
        { q: "Wat hoort NIET in de inleiding?", a: ["Je sterkste argument met een voorbeeld", "Een zin die de aandacht van de lezer trekt", "Het onderwerp waar het essay over gaat", "Een aankondiging van wat je gaat bespreken"], u: "Argumenten en voorbeelden bewaar je voor de body. De inleiding is hook, onderwerp en thesis statement." },
        { q: "Welke zin is de beste hook voor een essay over telefoons op school?", a: ["Imagine a school day without a single phone in sight.", "In this essay I am going to write about phones.", "Phones are devices that a lot of people have.", "I will now give you my opinion about phones."], u: "Een hook maakt nieuwsgierig. De andere zinnen zijn een kale aankondiging of een open deur." },
        { q: "Waar geef je in dit soort essay je eigen mening?", a: ["In de conclusion, na de afweging", "In de introduction, direct na de hook", "In elke alinea, na ieder argument", "In de pros-alinea, als topic sentence"], u: "In de body blijf je neutraal. Je mening komt in het slot: In my opinion, ..." },
        { q: "Je mag 200 tot 250 woorden schrijven. Welke verdeling over de vier alinea's is het best?", a: ["35 · 75 · 75 · 45", "90 · 60 · 60 · 20", "20 · 140 · 40 · 30", "60 · 30 · 30 · 110"], u: "De twee body-alinea's zijn het langst en ongeveer even lang. Inleiding en slot zijn korter." },
        { q: "Wat doe je in de conclusion NIET?", a: ["Een nieuw argument toevoegen", "Beide kanten kort samenvatten", "De voor- en nadelen afwegen", "Je eigen mening geven"], u: "Het slot rondt af. Een nieuw argument hoort in de body, waar je het ook kunt uitwerken." },
        { q: "Welke zin past als eerste zin van de cons-alinea?", a: ["On the other hand, a ban also has clear drawbacks.", "In conclusion, a ban has more pros than cons.", "Firstly, a ban helps pupils to concentrate.", "For example, pupils cannot call their parents."], u: "'On the other hand' kondigt de andere kant aan en 'drawbacks' noemt het thema van de alinea." },
        { q: "Hoe laat je in een essay zien dat er een nieuwe alinea begint?", a: ["Met een witregel tussen de alinea's", "Met een kopje boven iedere alinea", "Met een streepje voor de eerste zin", "Met een nummer voor de eerste zin"], u: "Een essay is doorlopende tekst: geen kopjes, nummers of opsommingstekens, wel witregels." },
        { q: "Waarom bespreek je ook de kant waar je het zelf niet mee eens bent?", a: ["Omdat je beide kanten eerlijk moet afwegen", "Omdat je anders het woordenaantal niet haalt", "Omdat de lezer je mening niet mag kennen", "Omdat een essay altijd neutraal moet eindigen"], u: "Een for-and-against essay toont dat je beide kanten begrijpt. Daarna mag je in het slot wel degelijk kiezen." }
      ],
      oefen: [
        { type: "volgorde", q: "Zet de bouwstenen van het essay in de goede volgorde.", items: ["Hook", "Onderwerp noemen", "Thesis statement", "Topic sentence van de pros", "Argumenten vóór, met uitleg", "Topic sentence van de cons", "Argumenten tegen, met uitleg", "Samenvatting en afweging", "Eigen mening"], u: "Inleiding (hook, onderwerp, thesis), pros, cons, en in het slot eerst afwegen en dan je mening." },
        { type: "sorteer", q: "In welk deel van het essay hoort de zin?", groepen: ["Introduction", "Body", "Conclusion"], items: [
          ["This essay discusses both sides of the issue.", 0], ["Have you ever spent a whole day offline?", 0],
          ["Firstly, online lessons save travel time.", 1], ["For instance, pupils can study at their own pace.", 1], ["On the other hand, many pupils feel lonely.", 1],
          ["To sum up, online lessons have benefits and drawbacks.", 2], ["In my opinion, the advantages outweigh the disadvantages.", 2]
        ], u: "Aankondigen en aandacht trekken doe je in de inleiding, argumenten en voorbeelden in de body, samenvatten en je mening in het slot." },
        { type: "koppel", q: "Koppel het onderdeel aan zijn functie.", paren: [
          ["hook", "trekt de aandacht"], ["thesis statement", "kondigt het essay aan"], ["topic sentence", "noemt het thema van de alinea"], ["body", "werkt de argumenten uit"], ["conclusion", "weegt af en geeft de mening"]
        ], u: "Elk onderdeel heeft één taak. Weet je de taak, dan weet je ook wat je er moet schrijven." },
        { type: "invul", q: "Vul het schema van het essay aan.", tekst: "A for-and-against essay starts with an {introduction}. The first body paragraph gives the {advantages}, the second one gives the {disadvantages}. In the {conclusion} you weigh both sides and give your own {opinion}.", extra: ["example", "heading"], u: "Introduction, advantages (pros), disadvantages (cons), conclusion met opinion." }
      ],
      open: [
        { q: "Schrijf een mini-inleiding van drie zinnen (hook, onderwerp, thesis statement) bij de stelling: 'Teenagers should not use social media before the age of sixteen.'", a: "Most teenagers open a social media app before they have even got out of bed. Some experts and politicians now want to raise the minimum age for these apps to sixteen. This essay discusses the arguments for and against such a rule.", punten: ["een hook die de aandacht trekt", "het onderwerp wordt duidelijk genoemd", "een thesis statement die beide kanten aankondigt", "nog geen argumenten en geen mening"] },
        { q: "Schrijf een conclusion van twee of drie zinnen voor een essay over de vraag of huiswerk moet worden afgeschaft. Kies zelf een kant.", a: "To sum up, homework gives pupils useful extra practice, but it also causes stress and takes away free time. In my opinion, homework should not be abolished, although schools should limit it to a reasonable amount. A maximum of one hour a day seems fair to me.", punten: ["begint met een afsluitend linking word", "vat beide kanten in één zin samen", "geeft duidelijk een eigen mening", "geen nieuw argument"] }
      ],
      widgets: ["bouwer", "arena"]
    },
    {
      id: "es-2", nr: "1.2", titel: "Alinea's: topic sentence en PEEL",
      kern: [
        "Elke body-alinea gaat over **één hoofdgedachte**. Die staat in de eerste zin: de [[topic sentence]].",
        "Daarna werk je elk argument uit volgens [[PEEL]]: Point, Evidence, Explain, Link.",
        { fig: "peel", bij: "PEEL: van bewering naar uitgewerkt argument." },
        { tabel: { kop: ["Stap", "Wat doe je?", "Voorbeeld"], rijen: [
          ["**P**oint", "Je noemt het argument.", "Firstly, a phone ban reduces distraction."],
          ["**E**vidence", "Je geeft een voorbeeld of situatie.", "For example, pupils cannot check their messages during a lesson."],
          ["**E**xplain", "Je legt uit waarom dat ertoe doet.", "This means that they can focus on the teacher."],
          ["**L**ink", "Je koppelt terug naar de stelling.", "Therefore, a ban may lead to better marks."]
        ] } },
        { let: "Een rijtje losse argumenten zonder uitleg levert weinig punten op. Liever twee uitgewerkte argumenten dan vijf losse." },
        { kop: "Een goede topic sentence" },
        "Een topic sentence is **algemeen** (nog geen voorbeeld), noemt de **kant** (voor of tegen) en dekt de hele alinea.",
        { voorbeeld: { titel: "zwak en sterk", stappen: [
          "Zwak: Phones are bad. (te vaag en te stellig)",
          "Zwak: For example, some pupils look at their phones all day. (een voorbeeld, geen hoofdgedachte)",
          "Sterk: On the one hand, there are strong arguments in favour of a phone ban."
        ] } },
        { tip: "Controleer je alinea: kun je elke zin koppelen aan de topic sentence? Zo niet, dan hoort die zin in een andere alinea of moet hij weg." },
        { kop: "Evidence zonder bronnen" },
        "Op de toets heb je geen internet. Evidence mag dus een logisch voorbeeld, een herkenbare situatie of algemene kennis zijn: **For instance, many pupils ...**",
        { let: "Verzin geen exacte cijfers of onderzoeken, zoals '87% of teenagers'. Schrijf liever **many**, **most** of **a growing number of**." }
      ],
      begrippen: [
        ["topic sentence", "Eerste zin van een alinea: noemt de hoofdgedachte waar de hele alinea over gaat."],
        ["PEEL", "Point, Evidence, Explain, Link: de vier stappen waarmee je een argument uitwerkt."],
        ["point", "De bewering of het argument zelf, in één zin."],
        ["evidence", "Voorbeeld, feit of situatie die je argument ondersteunt."],
        ["explain", "De zin waarin je uitlegt waarom je voorbeeld het argument sterker maakt."],
        ["link", "De zin die het argument terugkoppelt naar de stelling of overgaat naar het volgende punt."],
        ["supporting sentence", "Zin die de topic sentence ondersteunt met uitleg of een voorbeeld."],
        ["main idea", "Hoofdgedachte: waar de alinea in de kern over gaat."],
        ["in favour of", "Vóór iets: arguments in favour of a ban = argumenten voor een verbod."],
        ["a growing number of", "Steeds meer: veilige vervanger voor een verzonnen percentage."]
      ],
      vragen: [
        { q: "Wat is de functie van een topic sentence?", a: ["Hij noemt de hoofdgedachte van de alinea", "Hij geeft een voorbeeld bij het argument", "Hij vat het hele essay kort samen", "Hij trekt de aandacht van de lezer"], u: "De topic sentence is de eerste zin van een alinea en vertelt waar die alinea over gaat." },
        { q: "Waar staat PEEL voor?", a: ["Point, Evidence, Explain, Link", "Point, Example, End, Link", "Plan, Evidence, Explain, List", "Pros, Evidence, Essay, Link"], u: "Bewering, bewijs of voorbeeld, uitleg en terugkoppeling." },
        { q: "Firstly, a job teaches teenagers responsibility. For instance, they have to arrive on time. Welke zin is de Explain-stap die hierop volgt?", a: ["This means that they learn habits employers value.", "For instance, they have to be polite to customers.", "Secondly, a job gives teenagers their own money.", "On the other hand, a job also has drawbacks."], u: "Explain legt uit waarom het voorbeeld ertoe doet. De andere zinnen zijn een nieuw voorbeeld, een nieuw punt of een nieuwe alinea." },
        { q: "Wat is de beste topic sentence voor een alinea over de nadelen van social media?", a: ["However, social media also has several serious drawbacks.", "For example, some teenagers are bullied online at night.", "Social media was invented more than twenty years ago.", "In conclusion, social media does more harm than good."], u: "Algemeen, noemt de kant (drawbacks) en dekt de hele alinea. Een voorbeeld of conclusie is geen topic sentence." },
        { q: "Topic sentence: 'On the one hand, school uniforms have clear advantages.' Welke zin hoort NIET in deze alinea?", a: ["However, uniforms are expensive for many families.", "Firstly, pupils do not have to choose clothes every day.", "Moreover, uniforms make differences in income less visible.", "As a result, there is less bullying about clothing."], u: "De alinea gaat over voordelen. Een nadeel hoort in de cons-alinea." },
        { q: "Welke evidence is het meest geschikt op een toets zonder bronnen?", a: ["For instance, many pupils check their phones in class.", "Research shows that 87.3% of pupils check their phones.", "Everybody knows that this is simply the truth.", "A boy in my class once checked his phone."], u: "Een herkenbaar, algemeen voorbeeld is geloofwaardig. Verzonnen cijfers, 'everybody knows' en één losse anekdote zijn zwak." },
        { q: "Hoeveel hoofdgedachten heeft één alinea?", a: ["Eén", "Twee", "Drie", "Vier"], u: "Eén alinea, één hoofdgedachte. Binnen de pros-alinea is die hoofdgedachte: er zijn voordelen." },
        { q: "Wat doet de Link-zin aan het eind van een argument?", a: ["Hij koppelt het argument terug aan de stelling", "Hij geeft een tweede voorbeeld bij het punt", "Hij introduceert de mening van de schrijver", "Hij herhaalt de topic sentence woord voor woord"], u: "Met de link laat je zien wat het argument betekent voor de vraag van het essay." },
        { q: "Welke zin is een Point (bewering) en geen Evidence?", a: ["Secondly, cycling to school is good for your health.", "For example, a ride of twenty minutes burns energy.", "For instance, many pupils cycle five kilometres a day.", "A good example is the daily ride to school."], u: "Een point is de bewering zelf. Zinnen met 'for example' of 'for instance' geven evidence." }
      ],
      oefen: [
        { type: "volgorde", q: "Zet de zinnen in de goede volgorde: topic sentence, daarna PEEL.", items: [
          "On the one hand, homework has clear benefits.",
          "Firstly, it gives pupils extra practice.",
          "For example, they can repeat new maths problems at home.",
          "This means that the material stays in their memory for longer.",
          "As a result, they are better prepared for their tests."
        ], u: "Topic sentence, dan Point (Firstly), Evidence (For example), Explain (This means that) en Link (As a result)." },
        { type: "sorteer", q: "Is de zin een Point, Evidence of Explain?", groepen: ["Point", "Evidence", "Explain"], items: [
          ["Firstly, public transport is cheaper than a car.", 0], ["Secondly, trains are better for the environment.", 0],
          ["For instance, a monthly bus pass costs less than petrol.", 1], ["A good example is the electric train.", 1],
          ["This means that families have more money left.", 2], ["This is important because cities become cleaner.", 2]
        ], u: "Point = de bewering, Evidence = het voorbeeld, Explain = waarom het ertoe doet (This means that ..., This is important because ...)." },
        { type: "koppel", q: "Koppel elke topic sentence aan de zin die erbij past.", paren: [
          ["On the one hand, online lessons offer more freedom.", "Pupils can study at their own pace."],
          ["However, online lessons also have drawbacks.", "Many pupils miss the contact with classmates."],
          ["Firstly, school uniforms save time in the morning.", "Nobody has to think about what to wear."],
          ["Secondly, cycling to school is healthy.", "Pupils get exercise before lessons start."]
        ], u: "Een supporting sentence werkt precies de hoofdgedachte van de topic sentence uit." },
        { type: "invul", q: "Vul de stappen van een goede alinea in.", tekst: "A paragraph starts with a {topic} sentence. Then you make your {point}, give {evidence}, {explain} why it matters and {link} back to the question.", extra: ["hook", "opinion"], u: "Topic sentence, daarna Point, Evidence, Explain en Link." }
      ],
      open: [
        { q: "Schrijf een PEEL-alinea van vier of vijf zinnen over één voordeel van een bijbaan voor tieners.", a: "On the one hand, a part-time job has clear advantages. Firstly, it teaches teenagers how to handle money. For example, they have to decide whether to spend their wages or to save them. This means that they learn to plan ahead. As a result, they are better prepared for life after school.", punten: ["topic sentence die de kant noemt", "point: één duidelijk argument", "evidence: een voorbeeld of situatie", "explain: waarom dat belangrijk is", "link: terug naar de stelling"] },
        { q: "Schrijf een topic sentence voor een alinea over de nadelen van AI-hulpmiddelen bij huiswerk.", a: "On the other hand, using AI tools for homework also has some serious disadvantages.", punten: ["algemeen, nog geen voorbeeld", "noemt de kant (nadelen)", "begint met een linking word van tegenstelling"] }
      ]
    },
    {
      id: "es-3", nr: "1.3", titel: "Linking words",
      kern: [
        "[[Linking words]] (signaalwoorden) laten zien hoe je zinnen samenhangen. Ze leveren punten op voor samenhang, als je ze juist gebruikt en juist interpungeert.",
        { tabel: { kop: ["Functie", "Linking words"], rijen: [
          ["Opsommen", "Firstly, Secondly, Finally, To begin with"],
          ["Toevoegen", "Furthermore, Moreover, In addition, What is more"],
          ["Tegenstelling", "However, On the other hand, Nevertheless, although, whereas, despite"],
          ["Oorzaak", "because, since, as, because of, due to"],
          ["Gevolg", "Therefore, As a result, Consequently, so"],
          ["Voorbeeld", "For example, For instance, such as"],
          ["Mening", "In my opinion, I believe that, Personally, In my view"],
          ["Afsluiten", "In conclusion, To sum up, All in all, On balance"]
        ] } },
        { kop: "Interpunctie: drie soorten" },
        "**Soort 1: zinsbijwoorden** (However, Therefore, Moreover, Furthermore, Nevertheless, As a result, In addition, For example). Ze staan aan het begin van een nieuwe zin en krijgen een **komma erna**.",
        { voorbeeld: { titel: "However", stappen: [
          "Goed: Phones are useful. **However,** they can also distract pupils.",
          "Fout: Phones are useful, however they can also distract pupils. (twee hoofdzinnen met alleen een komma)",
          "Ook goed: Phones are useful; however, they can also distract pupils."
        ] } },
        "**Soort 2: voegwoorden** (although, because, whereas, while, since, if, unless). Ze verbinden twee zinsdelen binnen één zin. **Geen komma direct erna.** Begint de zin met de bijzin, dan komt de komma aan het eind van die bijzin.",
        { voorbeeld: { titel: "although en because", stappen: [
          "Goed: **Although** phones are useful, they can distract pupils.",
          "Goed: Pupils are distracted **because** their phones keep buzzing. (geen komma voor because)",
          "Fout: Although, phones are useful, they can distract pupils."
        ] } },
        "**Soort 3: voorzetsels** (despite, in spite of, because of, due to). Daarna volgt een **zelfstandig naamwoord of een -ing-vorm**, geen hele zin.",
        { voorbeeld: { titel: "despite", stappen: [
          "Goed: **Despite** the rules, pupils still use their phones.",
          "Goed: **Despite** having strict rules, the school still has problems.",
          "Fout: Despite the school has rules, ... → **Although** the school has rules, ..."
        ] } },
        { let: "**but**, **and** en **so** verbinden twee zinsdelen binnen één zin. Begin er in een formeel essay geen zin mee: gebruik However, In addition of Therefore." },
        { let: "**On the one hand** en **On the other hand** horen bij elkaar als paar. Het is **hand**, niet side." },
        { tip: "Wissel af. Drie keer **also** of **but** is zwak. Kies per functie twee favorieten en leer die foutloos, met de komma erbij." },
        { ezel: "Linking word met een hoofdletter aan het begin van de zin? Komma erachter: **However, / Therefore, / In addition, / For example,**" }
      ],
      begrippen: [
        ["However, ...", "Echter. Begint een nieuwe zin, komma erna. Tegenstelling."],
        ["although", "Hoewel. Voegwoord: gevolgd door een hele zin, geen komma direct erna."],
        ["Furthermore, ... / Moreover, ...", "Bovendien. Voegt een extra argument toe; komma erna."],
        ["In addition, ...", "Daarnaast. Voegt een extra argument toe; komma erna."],
        ["Therefore, ...", "Daarom, dus. Geeft een gevolg of conclusie aan; komma erna."],
        ["As a result, ...", "Als gevolg daarvan. Geeft een gevolg aan; komma erna."],
        ["Consequently, ...", "Bijgevolg, dus. Formeel woord voor een gevolg; komma erna."],
        ["Nevertheless, ...", "Desondanks, toch. Sterke tegenstelling; komma erna."],
        ["whereas", "Terwijl (tegenstelling tussen twee dingen). Voegwoord binnen één zin."],
        ["despite / in spite of", "Ondanks. Voorzetsel: + zelfstandig naamwoord of -ing-vorm."],
        ["due to / because of", "Vanwege, door. Voorzetsel: + zelfstandig naamwoord."],
        ["For instance, ...", "Bijvoorbeeld. Zelfde als For example; komma erna."],
        ["such as", "Zoals. Leidt voorbeelden in midden in de zin: apps such as WhatsApp."],
        ["On balance, ...", "Alles afwegend. Past in de conclusion; komma erna."],
        ["In conclusion, ... / To sum up, ...", "Concluderend, samenvattend. Eerste woorden van de conclusion; komma erna."]
      ],
      vragen: [
        { q: "Social media connects people. ___, it can also make them feel lonely.", a: ["However", "Therefore", "For example", "Furthermore"], u: "De tweede zin is een tegenstelling met de eerste: However." },
        { q: "Welke zin is goed geïnterpungeerd?", a: ["However, many pupils disagree with this rule.", "However many pupils disagree with this rule.", "However; many pupils disagree with this rule.", "However many pupils, disagree with this rule."], u: "Na een zinsbijwoord aan het begin van de zin komt een komma." },
        { q: "___ the high costs, many families buy an electric car.", a: ["Despite", "Although", "However", "Because"], u: "Na de open plek staat een zelfstandig naamwoord (the high costs), dus het voorzetsel despite." },
        { q: "___ electric cars are expensive, many families buy one.", a: ["Although", "Despite", "However", "In spite"], u: "Na de open plek staat een hele zin met onderwerp en werkwoord, dus het voegwoord although." },
        { q: "Welke functie heeft 'Consequently'?", a: ["gevolg", "tegenstelling", "toevoeging", "voorbeeld"], u: "Consequently betekent 'bijgevolg' en leidt een gevolg in, net als Therefore en As a result." },
        { q: "Welke zin is correct?", a: ["Many teenagers work because they want to earn money.", "Many teenagers work because of they want to earn money.", "Many teenagers work due to they want to earn money.", "Many teenagers work despite they want to earn money."], u: "because + hele zin. Because of, due to en despite zijn voorzetsels: daarna komt een zelfstandig naamwoord." },
        { q: "Je wilt een extra argument toevoegen. Welk begin is het meest formeel?", a: ["Furthermore, a ban is cheap.", "And a ban is cheap too.", "Plus, a ban is cheap.", "Also a ban is cheap."], u: "Furthermore met een komma is formeel. Een zin beginnen met And, Plus of Also is spreektaal." },
        { q: "Pupils can use helpful apps, ___ dictionaries and calculators.", a: ["such as", "for example of", "as like", "therefore"], u: "such as leidt voorbeelden in midden in de zin." },
        { q: "Welk paar is correct Engels?", a: ["On the one hand ... On the other hand", "On the one side ... On the other side", "At the one hand ... At the other hand", "In the one hand ... In the other hand"], u: "Het is altijd hand en altijd on." },
        { q: "The bus was late. ___, half the class missed the first lesson.", a: ["As a result", "Although", "Because", "Whereas"], u: "De tweede zin is het gevolg van de eerste. Although, because en whereas kunnen niet los voor een komma staan." },
        { q: "Welke zin is correct?", a: ["Although it was raining, the match continued.", "Although, it was raining, the match continued.", "Although it was raining. The match continued.", "Although it was raining, but the match continued."], u: "Geen komma direct na although, de bijzin is geen losse zin, en although en but samen is dubbelop." },
        { q: "Bij welke functie hoort 'In my view'?", a: ["mening geven", "voorbeeld geven", "afsluiten", "opsommen"], u: "In my view betekent hetzelfde als In my opinion." }
      ],
      reken: [
        { q: "Vul één woord in (ondanks): ___ the bad weather, the school trip was a success.", antwoord: ["despite"], hint: "Voorzetsel, gevolgd door een zelfstandig naamwoord.", stappen: ["Na de open plek staat 'the bad weather': een zelfstandig naamwoord, geen zin.", "Dus een voorzetsel: Despite."] },
        { q: "Vul één woord in (bovendien, begint met M): Cycling is healthy. ___, it is good for the environment.", antwoord: ["moreover", "moreover,"], hint: "Zinsbijwoord van toevoeging.", stappen: ["Er komt een extra argument bij: toevoegen.", "Moreover, met een komma erna."] },
        { q: "Vul één woord in (terwijl, als tegenstelling): Some pupils love group work, ___ others prefer to work alone.", antwoord: ["whereas", "while", "whilst"], hint: "Voegwoord dat twee dingen tegenover elkaar zet.", stappen: ["Twee groepen worden tegenover elkaar gezet binnen één zin.", "Whereas (of while)."] },
        { q: "Vul één woord in (daarom, begint met T): Sleep is essential for the brain. ___, teenagers should go to bed on time.", antwoord: ["therefore", "therefore,"], hint: "Zinsbijwoord van gevolg.", stappen: ["De tweede zin is een conclusie uit de eerste.", "Therefore, met een komma erna."] }
      ],
      oefen: [
        { type: "sorteer", q: "Welke functie heeft het linking word?", groepen: ["Toevoegen", "Tegenstelling", "Gevolg", "Voorbeeld"], items: [
          ["Furthermore", 0], ["In addition", 0], ["However", 1], ["Nevertheless", 1], ["As a result", 2], ["Consequently", 2], ["For instance", 3], ["such as", 3]
        ], u: "Furthermore en In addition voegen toe; However en Nevertheless stellen tegenover; As a result en Consequently geven een gevolg; For instance en such as geven een voorbeeld." },
        { type: "sorteer", q: "Welke soort is het? Dat bepaalt de interpunctie.", groepen: ["Nieuwe zin, komma erna", "Voegwoord + hele zin", "Voorzetsel + zelfst. nw."], items: [
          ["However", 0], ["Therefore", 0], ["Moreover", 0], ["although", 1], ["because", 1], ["whereas", 1], ["despite", 2], ["due to", 2], ["because of", 2]
        ], u: "Zinsbijwoorden krijgen een komma erna, voegwoorden verbinden twee zinsdelen, voorzetsels krijgen een zelfstandig naamwoord of -ing-vorm." },
        { type: "invul", q: "Maak de alinea compleet.", tekst: "{On the one hand}, working from home saves travel time. {Furthermore}, people can plan their own day. {On the other hand}, they may feel lonely {because} they do not see their colleagues. {Therefore}, a mix of home and office seems the best solution.", extra: ["Although", "Despite"], u: "Eerste kant, extra argument, andere kant, reden en ten slotte de conclusie." },
        { type: "koppel", q: "Koppel het linking word aan de Nederlandse betekenis.", paren: [["However", "echter"], ["Therefore", "daarom"], ["Although", "hoewel"], ["Moreover", "bovendien"], ["Despite", "ondanks"], ["Whereas", "terwijl"]], u: "Leer ze met hun betekenis én met hun interpunctie." }
      ],
      open: [
        { q: "Maak van deze drie gedachten een korte, samenhangende alinea met minstens vier linking words: phones help with learning · phones distract pupils · schools need clear rules.", a: "On the one hand, phones can help pupils to learn, for example when they need to look up a word. However, phones also distract pupils because messages keep coming in. Therefore, schools need clear rules about when phones may be used.", punten: ["minstens vier linking words", "komma na However en Therefore", "geen komma direct na because", "geen zin die begint met And, But of So"] }
      ],
      widgets: ["transformer"]
    },
    {
      id: "es-4", nr: "1.4", titel: "Formele stijl",
      kern: [
        "Een essay schrijf je in **formeel, neutraal Engels**: alsof je voor een krant schrijft, niet voor een vriendin.",
        { tabel: { kop: ["Niet doen", "Wel doen"], rijen: [
          ["contractions: don't, it's, can't", "do not, it is, cannot"],
          ["spreektaal: kids, stuff, gonna, loads of", "children, things, going to, many"],
          ["vage woorden: thing, get, nice, big", "aspect, receive, pleasant, major"],
          ["de lezer aanspreken: you", "people, pupils, parents"],
          ["uitroeptekens en afkortingen: !, etc., e.g.", "een punt; and so on; for example"]
        ] } },
        { let: "**cannot** is één woord. Schrijf ook **do not**, **does not** en **will not** voluit: elke apostrof in een werkwoord is een [[contraction]]." },
        { kop: "Hedging: voorzichtig formuleren" },
        "Met [[hedging]] maak je een bewering voorzichtiger. Zo klink je geloofwaardig en hoef je niets te bewijzen. Gebruik **may, might, can, tends to, is likely to, seems to, often, generally, in many cases**.",
        { voorbeeld: { titel: "van stellig naar voorzichtig", stappen: [
          "Te stellig: Social media makes teenagers unhappy.",
          "Voorzichtig: Social media **may** make some teenagers unhappy.",
          "Voorzichtig: Teenagers who spend many hours online **tend to** sleep less."
        ] } },
        { kop: "Onpersoonlijk schrijven" },
        "Begin een bewering met een [[impersonal construction]]: **It is often said that ..., It is clear that ..., It can be argued that ..., There are several reasons why ...**",
        "Bewaar **I** voor de conclusion: **In my opinion, ...** of **I believe that ...**",
        { kop: "Sterke woorden in plaats van get, do en thing" },
        { tabel: { kop: ["Zwak", "Sterker"], rijen: [
          ["get", "receive, obtain, become"],
          ["do", "carry out, perform"],
          ["a lot of", "many, much, a great deal of"],
          ["big", "major, significant"],
          ["good", "beneficial, positive"],
          ["bad", "harmful, negative"],
          ["thing", "aspect, issue, factor"],
          ["think", "believe, argue"]
        ] } },
        { tip: "Lees je essay na op drie dingen: apostroffen in werkwoorden, het woord **you** en de woorden **thing**, **get** en **a lot**." }
      ],
      begrippen: [
        ["contraction", "Samentrekking met een apostrof (don't, it's). Niet gebruiken in een formeel essay."],
        ["hedging", "Voorzichtig formuleren met may, might, tends to, often: je bewering wordt geloofwaardiger."],
        ["impersonal construction", "Onpersoonlijke zin zonder I of you: It is often said that ..., There are ..."],
        ["formal register", "Formeel taalgebruik: volledige vormen, neutrale woorden, geen spreektaal."],
        ["cannot", "Formele, voluit geschreven vorm van can't. Eén woord."],
        ["tends to", "Heeft de neiging om, doet meestal: Teenagers tend to sleep late."],
        ["It can be argued that ...", "Men kan stellen dat ...: onpersoonlijke opening voor een argument."],
        ["a great deal of", "Heel veel (bij ontelbare woorden): a great deal of research."],
        ["significant / major", "Aanzienlijk, belangrijk: formeel alternatief voor big."],
        ["beneficial", "Gunstig, nuttig: formeel alternatief voor good."],
        ["harmful", "Schadelijk: formeel alternatief voor bad. Harmful to your health."],
        ["issue", "Kwestie, probleem: formeel alternatief voor thing of problem."],
        ["to obtain / to receive", "Verkrijgen, ontvangen: formeel alternatief voor get."],
        ["to carry out", "Uitvoeren: formeel alternatief voor do. To carry out research."]
      ],
      vragen: [
        { q: "Welke zin is het meest formeel?", a: ["Many teenagers do not get enough sleep.", "Lots of teens don't get enough sleep.", "Teens aren't getting enough sleep, sadly!", "Kids these days just don't sleep enough."], u: "Geen contraction, geen spreektaal (lots of, teens, kids) en geen uitroepteken." },
        { q: "Welke zin gebruikt hedging?", a: ["Video games may improve reaction speed.", "Video games improve reaction speed.", "Video games always improve reaction speed.", "Video games really improve reaction speed."], u: "May maakt de bewering voorzichtig. Always en really maken haar juist stelliger." },
        { q: "Hoe schrijf je 'can't' voluit in een essay?", a: ["cannot", "can not", "cann't", "can no"], u: "De standaardvorm is cannot, aan elkaar." },
        { q: "Maak formeler: 'A lot of research has been done.'", a: ["A great deal of research has been done.", "Many research has been done.", "Lots of research has been done.", "Much researches have been done."], u: "Research is ontelbaar: a great deal of. Many hoort bij telbare woorden en research heeft geen meervoud." },
        { q: "Welke opening is onpersoonlijk?", a: ["It is often argued that homework is useful.", "I really think that homework is useful.", "You all know that homework is useful.", "We can all agree homework is useful."], u: "It is often argued that ... noemt geen I, you of we." },
        { q: "Welke zin spreekt de lezer niet aan en past dus het best in een essay?", a: ["People who exercise regularly feel healthier.", "If you exercise regularly, you feel healthier.", "You should exercise: it makes you healthier.", "Exercise regularly and you will feel healthier."], u: "Vervang you door people, pupils of een ander zelfstandig naamwoord." },
        { q: "Pupils ___ better marks when they sleep enough. Welk werkwoord is het formeelst?", a: ["achieve", "get", "grab", "pick up"], u: "Achieve is een sterk, formeel werkwoord. Get is vaag; grab en pick up zijn spreektaal." },
        { q: "Welke zin bevat een contraction?", a: ["It's clear that prices have risen.", "Its price has risen sharply.", "The pupils' marks have improved.", "The school's rules are strict."], u: "It's = it is. De apostrof in pupils' en school's geeft bezit aan: dat is geen contraction en mag gewoon." },
        { q: "Wat is het probleem in: 'Phones are a really bad thing for kids!'", a: ["Spreektaal en een uitroepteken", "De verkeerde werkwoordstijd", "Een spelfout in het werkwoord", "Een verkeerde woordvolgorde"], u: "Really, thing, kids en het uitroepteken zijn informeel. Beter: Phones can be harmful to children." },
        { q: "Welke versie van 'Things got worse.' past in een essay?", a: ["The situation became worse.", "Stuff got even worse.", "It all went downhill.", "Things went really bad."], u: "The situation is preciezer dan things en became is formeler dan got." },
        { q: "Waar mag je in dit essay wél 'I' gebruiken?", a: ["In de conclusion, bij je mening", "In de hook, bij je ervaring", "In elke topic sentence", "Nergens in het hele essay"], u: "In de body blijf je onpersoonlijk. In het slot geef je je mening: In my opinion, ... / I believe that ..." }
      ],
      reken: [
        { gen: (R) => {
          const [kort, lang, uitleg] = R.kies([
            ["don't", "do not", "do + not"], ["doesn't", "does not", "does + not"], ["isn't", "is not", "is + not"], ["aren't", "are not", "are + not"],
            ["won't", "will not", "will + not (onregelmatig)"], ["can't", "cannot", "één woord: cannot"], ["shouldn't", "should not", "should + not"], ["wouldn't", "would not", "would + not"],
            ["they're", "they are", "they + are"], ["we're", "we are", "we + are"], ["there's", "there is", "there + is"], ["didn't", "did not", "did + not"],
            ["haven't", "have not", "have + not"], ["hasn't", "has not", "has + not"], ["I'm", "I am", "I + am"], ["that's", "that is", "that + is"]
          ]);
          return { q: `Schrijf voluit, zoals het in een essay moet: **${kort}**`, antwoord: [lang], hint: "Haal de apostrof weg en schrijf beide woorden.", stappen: [`${kort} = ${uitleg}`, `In een essay: ${lang}`] };
        } },
        { q: "Vervang 'kids' door een formeel woord (één woord): Many ___ have their own phone.", antwoord: ["children", "teenagers", "pupils", "youngsters", "adolescents"], hint: "Het neutrale woord voor kinderen.", stappen: ["Kids is spreektaal.", "Formeel: children (of teenagers, pupils)."] },
        { q: "Maak voorzichtiger met één woord (misschien): Too much screen time ___ cause sleeping problems.", antwoord: ["may", "might", "can", "could"], hint: "Een modal verb voor hedging.", stappen: ["Je weet het niet zeker voor iedereen.", "Hedging: may, might, can of could."] }
      ],
      oefen: [
        { type: "sorteer", q: "Formeel of informeel?", groepen: ["Formeel", "Informeel"], items: [["children", 0], ["kids", 1], ["a great deal of", 0], ["loads of", 1], ["cannot", 0], ["gonna", 1], ["however", 0], ["anyway", 1], ["to obtain", 0], ["stuff", 1]], u: "Formeel is neutraal en voluit geschreven. Spreektaal en samentrekkingen horen niet in een essay." },
        { type: "koppel", q: "Koppel de informele uitdrukking aan de formele.", paren: [["get better", "improve"], ["a lot of people", "many people"], ["bad for", "harmful to"], ["kids", "children"], ["find out", "discover"], ["a big problem", "a major issue"]], u: "Eén precies woord is bijna altijd formeler dan een combinatie met get of een vaag woord als big." },
        { type: "invul", q: "Maak de alinea formeel en voorzichtig.", tekst: "It is often {argued} that social media {may} be harmful. Teenagers who spend many hours online {tend} to sleep less. {However}, it also helps them to stay in touch with friends.", extra: ["stuff", "But"], u: "Onpersoonlijke opening (It is often argued), hedging (may, tend to) en een formeel linking word met een komma." }
      ],
      open: [
        { q: "Herschrijf formeel: 'I think kids shouldn't get so much homework because it's really bad for them and they can't do fun stuff.'", a: "In my opinion, children should not receive so much homework because it may be harmful to their well-being and leaves them little time to relax.", punten: ["geen contractions (should not, it is, cannot)", "kids → children of pupils", "get → receive; stuff → een precies woord", "really bad → harmful, met hedging (may)"] }
      ],
      widgets: ["formeel"]
    }
  ]
});
