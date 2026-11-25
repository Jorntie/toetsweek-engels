// Hoofdstuk 3: Dunglish en veelgemaakte fouten (false friends, verwarwoorden, spelling, irregular verbs).
TW.hoofdstuk({
  id: "fouten", nr: "3", titel: "Dunglish en veelgemaakte fouten", icoon: "🕵️",
  intro: "De fouten die Nederlanders het vaakst maken in een Engels essay: false friends, voorzetsels, verwarwoorden, spelling en onregelmatige werkwoorden. Elke fout die je vermijdt, is een punt dat je houdt.",
  onderdelen: [
    {
      id: "fo-1", nr: "3.1", titel: "False friends en voorzetsels",
      kern: [
        "Een [[false friend]] is een Engels woord dat op een Nederlands woord lijkt, maar iets anders betekent. Omdat het zo vertrouwd voelt, valt de fout je bij het nalezen niet op. Een docent ziet hem meteen.",
        "[[Dunglish]] is Engels dat letterlijk uit het Nederlands is vertaald: Nederlandse woorden, voorzetsels of zinsbouw in een Engels jasje.",
        { kop: "De bekendste false friends" },
        { tabel: { kop: ["Engels woord", "betekent", "Nederlands woord", "in het Engels"], rijen: [
          ["actual", "echt, werkelijk", "actueel", "topical, current, up to date"],
          ["eventually", "uiteindelijk", "eventueel", "possibly, if necessary, any"],
          ["sensible", "verstandig", "gevoelig", "sensitive"],
          ["become", "worden", "krijgen (bekomen)", "get, receive"],
          ["chef", "kok (chef-kok)", "chef, baas", "boss, manager"],
          ["control", "beheersen, besturen", "controleren", "check"],
          ["politics", "politiek", "beleid", "policy"]
        ] } },
        { voorbeeld: { titel: "zo gaat het mis", stappen: [
          "**Fout:** Climate change is a very actual problem. → **Goed:** Climate change is a very topical problem.",
          "**Fout:** Eventually you can ask your teacher for help. (Dat betekent: uiteindelijk kun je ...) → **Goed:** If necessary, you can ask your teacher for help.",
          "**Fout:** I became a new phone for my birthday. (Je veranderde in een telefoon.) → **Goed:** I got a new phone for my birthday.",
          "**Fout:** Teachers should control our homework. → **Goed:** Teachers should check our homework."
        ] } },
        { let: "'I am agree' bestaat niet. **Agree** is zelf een werkwoord: **I agree** (with you / that ...). Net zo: I think, I believe. Ontkennend: **I do not agree** of **I disagree**." },
        { kop: "Leren en onderwijzen, een foto maken, ook" },
        "**Learn** is zelf iets leren, **teach** is iemand anders iets leren. Dus: Pupils learn English. Teachers teach English. Nooit: 'The teacher learns us English.'",
        "Een foto **neem** je in het Engels: **take a photo**, niet 'make a photo'.",
        "[[also]] staat vóór het hoofdwerkwoord (Phones **also** distract pupils), maar ná een vorm van be en ná het eerste hulpwerkwoord (Phones are **also** ...; Phones can **also** ...). Nooit tussen werkwoord en lijdend voorwerp: niet 'Phones distract also pupils'.",
        { tip: "Wil je 'ook' aan het eind van de zin, gebruik dan **too** of **as well**. Wil je een argument beginnen met 'ook', schrijf dan **In addition,** of **Moreover,** in plaats van 'Also,'." },
        { kop: "Vaste voorzetsels" },
        { tabel: { kop: ["Nederlands", "Engels", "voorbeeld"], rijen: [
          ["geïnteresseerd in", "interested **in**", "Many pupils are interested in politics."],
          ["afhangen van", "depend **on**", "Success often depends on hard work."],
          ["anders dan", "different **from**", "Online lessons are different from normal lessons."],
          ["iets bespreken", "discuss (zonder voorzetsel)", "This essay discusses the pros and cons."],
          ["op school", "**at** school", "Phones are not allowed at school."],
          ["op internet", "**on** the internet", "Not everything on the internet is reliable."],
          ["'s ochtends", "**in** the morning", "Many teenagers are tired in the morning."],
          ["getrouwd met", "married **to**", "She is married to a doctor."],
          ["bang voor", "afraid **of**", "Some parents are afraid of online dangers."],
          ["goed in", "good **at**", "Young people are good at using technology."]
        ] } },
        { let: "**Discuss about** is fout: discuss heeft geen voorzetsel nodig. Het zelfstandig naamwoord mag wel: a discussion **about** homework." },
        { tip: "**Different from** is altijd goed. Different to hoor je ook in Brits Engels en different than vooral in Amerikaans Engels. Kies in je essay different from, dan zit je altijd goed." },
        { ezel: "De **teach**er **teach**es: wie lesgeeft, doet teach. Wie in de bank zit, doet learn." }
      ],
      begrippen: [
        ["false friend", "Engels woord dat op een Nederlands woord lijkt maar iets anders betekent, zoals actual (echt) en actueel (topical)."],
        ["Dunglish", "Engels dat letterlijk uit het Nederlands is vertaald, zoals 'I am agree' of 'make a photo'."],
        ["actual / actually", "Echt, werkelijk / eigenlijk, in feite. Niet: actueel."],
        ["topical / current", "Actueel: a topical issue, current events."],
        ["eventually", "Uiteindelijk: Eventually, the school changed its rules."],
        ["possibly / if necessary", "Eventueel: If necessary, pupils can retake the test."],
        ["sensible", "Verstandig: a sensible decision."],
        ["sensitive", "Gevoelig: a sensitive topic, sensitive data."],
        ["check", "Controleren: check your answers. Control = beheersen of besturen."],
        ["policy", "Beleid: the government's climate policy. Politics = politiek."],
        ["learn / teach", "Zelf leren / iemand iets leren (onderwijzen): Teachers teach, pupils learn."],
        ["take a photo", "Een foto maken. Niet: make a photo."],
        ["also", "Ook: vóór het hoofdwerkwoord, na be en na het eerste hulpwerkwoord."],
        ["depend on", "Afhangen van: It depends on the situation."],
        ["discuss", "Bespreken, zonder about: discuss a problem."]
      ],
      vragen: [
        { q: "Welke zin is goed?", a: ["I agree that schools should ban phones.", "I am agree that schools should ban phones.", "I am agreeing that schools should ban phones.", "I agree with that schools should ban phones."], u: "Agree is zelf het werkwoord: I agree that ... Er hoort geen am voor en geen with voor een that-zin." },
        { q: "Wat betekent: 'Eventually, the government banned the app.'?", a: ["Uiteindelijk verbood de regering de app.", "Eventueel verbood de regering de app.", "Misschien verbood de regering de app.", "Gelukkig verbood de regering de app."], u: "Eventually = uiteindelijk. Het Nederlandse eventueel is in het Engels possibly of if necessary." },
        { q: "Hoe zeg je: 'Dit is een heel actueel onderwerp.'?", a: ["This is a very topical issue.", "This is a very actual issue.", "This is a very eventual issue.", "This is a very sensible issue."], u: "Actual betekent echt of werkelijk. Actueel is topical of current." },
        { q: "It would be ___ to limit the time you spend on your phone.", a: ["sensible", "sensitive", "sensibly", "sensational"], u: "Sensible = verstandig. Sensitive = gevoelig, en sensibly is een bijwoord, dat past niet na would be." },
        { q: "Teachers should ___ pupils how to recognise fake news.", a: ["teach", "learn", "learn to", "teach to"], u: "Iemand iets leren is teach. Learn gebruik je alleen als je zelf iets leert." },
        { q: "Hoe zeg je: 'Ik controleer mijn tekst op fouten.'?", a: ["I check my text for mistakes.", "I control my text for mistakes.", "I control my text on mistakes.", "I check my text on mistakes."], u: "Controleren is check, en je controleert for mistakes. Control betekent beheersen of besturen." },
        { q: "In welke zin staat 'also' goed?", a: ["Social media can also cause stress.", "Social media can cause also stress.", "Social media cause also stress.", "Social media causes also much stress."], u: "Also staat na het eerste hulpwerkwoord (can also) of vóór het hoofdwerkwoord, nooit tussen werkwoord en lijdend voorwerp." },
        { q: "Many tourists ___ photos of the old city centre.", a: ["take", "make", "do", "draw"], u: "Een foto maken is in het Engels take a photo." },
        { q: "Your future often depends ___ your education.", a: ["on", "of", "from", "at"], u: "Het vaste voorzetsel is depend on, ook al zeg je in het Nederlands afhangen van." },
        { q: "Many young people are not very interested ___ politics.", a: ["in", "for", "about", "on"], u: "Interested in, net als in het Nederlands geïnteresseerd in. Interested for of about is Dunglish." },
        { q: "Welke zin is goed?", a: ["This essay discusses the advantages of homework.", "This essay discusses about the advantages of homework.", "This essay discusses over the advantages of homework.", "This essay is discussing about the advantages of homework."], u: "Discuss heeft geen voorzetsel: je bespreekt iets direct. A discussion about is wel goed." },
        { q: "Hoe zeg je: 'Mijn chef bij de supermarkt is streng.'?", a: ["My manager at the supermarket is strict.", "My chef at the supermarket is strict.", "My chief in the supermarket is strict.", "My chef in the supermarket is strict."], u: "Een chef is een kok. Je baas is your boss of your manager, en je werkt at the supermarket." }
      ],
      reken: [
        { gen: (R) => {
          const [zin, antw, uitleg] = R.kies([
            ["Many teenagers are addicted ___ their phones.", ["to"], "addicted to = verslaafd aan"],
            ["Success often depends ___ hard work.", ["on"], "depend on = afhangen van"],
            ["Online lessons are very different ___ normal lessons.", ["from", "to"], "different from (different to mag in Brits Engels ook, from is het veiligst)"],
            ["Most young people are good ___ using technology.", ["at"], "good at = goed in"],
            ["Some parents are afraid ___ the dangers of the internet.", ["of"], "afraid of = bang voor"],
            ["Her sister is married ___ a teacher.", ["to"], "married to = getrouwd met"],
            ["Many students are interested ___ climate change.", ["in"], "interested in = geïnteresseerd in"],
            ["Teenagers spend hours ___ the internet every day.", ["on"], "on the internet = op internet"],
            ["Phones should be switched off ___ school.", ["at"], "at school = op school"],
            ["Most people check their phone first thing ___ the morning.", ["in"], "in the morning = 's ochtends"],
            ["Pupils should be responsible ___ their own learning.", ["for"], "responsible for = verantwoordelijk voor"],
            ["Not all information ___ social media is reliable.", ["on"], "on social media = op sociale media"]
          ]);
          return { q: `Vul het voorzetsel in (één woord): ${zin}`, antwoord: antw, hint: "Denk niet in het Nederlands: veel Engelse voorzetsels zijn vaste combinaties.", stappen: [uitleg, `Antwoord: ${antw[0]}`] };
        } },
        { gen: (R) => {
          const [nl, antw, uitleg] = R.kies([
            ["controleren (je antwoorden controleren)", ["check"], "Controleren = check. Control = beheersen."],
            ["verstandig", ["sensible", "wise"], "Verstandig = sensible (of wise). Sensitive = gevoelig."],
            ["gevoelig (een gevoelig onderwerp)", ["sensitive"], "Gevoelig = sensitive. Sensible = verstandig."],
            ["uiteindelijk", ["eventually", "finally", "ultimately", "in the end"], "Uiteindelijk = eventually (of finally, ultimately, in the end)."],
            ["beleid (het klimaatbeleid)", ["policy"], "Beleid = policy. Politics = politiek."],
            ["actueel (een actueel onderwerp)", ["topical", "current"], "Actueel = topical of current. Actual = echt."],
            ["iemand iets leren, onderwijzen", ["teach"], "Iemand iets leren = teach. Zelf leren = learn."],
            ["worden (beroemd worden)", ["become", "get"], "Worden = become (of get). Krijgen = get of receive."],
            ["baas, chef", ["boss", "manager"], "Je baas = boss of manager. Een chef is een kok."]
          ]);
          return { q: `Vertaal in één Engels woord of vaste uitdrukking: **${nl}**`, antwoord: antw, hint: "Pas op voor het woord dat op het Nederlands lijkt: dat is vaak een false friend.", stappen: [uitleg] };
        } },
        { q: "Verbeter de zin en typ hem helemaal: I am agree with this idea.", antwoord: ["I agree with this idea.", "I agree with this idea"], hint: "Agree is zelf al een werkwoord.", stappen: ["'Am' moet weg: agree is het werkwoord.", "I agree with this idea."] },
        { q: "Zet 'also' op de goede plaats en typ de zin: Phones are useful for homework.", antwoord: ["Phones are also useful for homework.", "Phones are also useful for homework"], hint: "Bij een vorm van be komt also erachter.", stappen: ["Are is een vorm van be.", "Also komt ná be: Phones are also useful for homework."] }
      ],
      oefen: [
        { type: "sorteer", q: "Goed Engels of Dunglish?", groepen: ["Goed", "Dunglish"], items: [
          ["I agree with this opinion.", 0], ["I am agree with this opinion.", 1],
          ["This essay discusses two problems.", 0], ["This essay discusses about two problems.", 1],
          ["Pupils can take photos of the board.", 0], ["Pupils can make photos of the board.", 1],
          ["Teachers teach us how to write.", 0], ["Teachers learn us how to write.", 1],
          ["Plastic pollution is a topical issue.", 0], ["Plastic pollution is an actual issue.", 1]
        ], u: "Agree zonder am, discuss zonder about, take a photo, teach voor onderwijzen en topical voor actueel." },
        { type: "koppel", q: "Koppel het Nederlandse woord aan de goede Engelse vertaling.", paren: [
          ["actueel", "topical"], ["uiteindelijk", "eventually"], ["verstandig", "sensible"], ["gevoelig", "sensitive"], ["controleren", "check"], ["beleid", "policy"]
        ], u: "Het Engelse woord dat op het Nederlands lijkt, betekent vaak iets anders: actual, sensible en control zijn de beruchtste." },
        { type: "invul", q: "Vul de goede voorzetsels in.", tekst: "Most teenagers are very good {at} using apps, and many of them are interested {in} new technology. However, what they read {on} the internet is not always true. Whether they believe it often depends {on} what they learn {at} school.", extra: ["of", "for"], u: "Good at, interested in, on the internet, depend on, at school." }
      ],
      open: [
        { q: "Verbeter de Dunglish in deze alinea en schrijf hem goed over: 'I am agree that phones are an actual problem. Pupils make photos of each other and they do not control their messages. The school should learn them how to be sensitive online.' (Bedoeld is: verstandig.)", a: "I agree that phones are a topical problem. Pupils take photos of each other and they do not check their messages. The school should teach them how to be sensible online.", punten: ["I am agree → I agree", "an actual problem → a topical (of current) problem", "make photos → take photos", "control → check", "learn them → teach them", "sensitive → sensible (verstandig)"] }
      ],
      widgets: ["speurder"]
    },
    {
      id: "fo-2", nr: "3.2", titel: "Verwarwoorden",
      kern: [
        "Sommige Engelse woorden klinken hetzelfde of lijken op elkaar, maar zijn verschillend. Een spellingcontrole vindt deze fouten niet, want beide woorden bestaan. Je moet ze dus zelf leren herkennen.",
        { kop: "Klinkt hetzelfde, schrijf je anders" },
        { tabel: { kop: ["woord", "betekenis", "voorbeeld"], rijen: [
          ["their", "hun (bezit)", "Pupils need their phones."],
          ["there", "daar, er", "There are many reasons."],
          ["they're", "they are", "They're often tired."],
          ["its", "zijn, haar (bezit van een ding)", "The school changed its rules."],
          ["it's", "it is / it has", "It's clear that ..."],
          ["your", "jouw (bezit)", "Check your answers."],
          ["you're", "you are", "You're right."],
          ["whose", "van wie, wiens", "Pupils whose parents work ..."],
          ["who's", "who is / who has", "Who's responsible?"],
          ["to", "naar, om te", "to school, to learn"],
          ["too", "te, ook", "too expensive; me too"]
        ] } },
        { ezel: "Een **apostrof** staat voor een weggelaten letter: it's = it **i**s, they're = they **a**re, you're = you **a**re, who's = who **i**s. Kun je het niet voluit schrijven, dan hoort er geen apostrof." },
        { let: "**Its** (bezit) heeft nooit een apostrof, ook al heeft the school's wel een apostrof. Fout: 'The company lost it's customers.' Goed: The company lost **its** customers." },
        { tip: "In een essay schrijf je samentrekkingen voluit (zie 1.4). Schrijf dus it is en they are: dan kun je it's en they're ook niet verkeerd schrijven." },
        { kop: "Than of then: allebei 'dan'" },
        "**Than** gebruik je bij een vergelijking: Phones are more popular **than** books. **Then** gaat over tijd (toen, daarna, dan): First read the text, **then** answer the questions.",
        { kop: "Make of do" },
        { tabel: { kop: ["make (iets maken of veroorzaken)", "do (een taak of activiteit uitvoeren)"], rijen: [
          ["make a decision", "do research"],
          ["make a mistake", "do homework"],
          ["make money, make a profit", "do a job, do your best"],
          ["make friends", "do exercise"],
          ["make an effort", "do damage, do harm"],
          ["make a difference", "do someone a favour"]
        ] } },
        { let: "Nederlanders schrijven 'make homework' en 'do a mistake'. Het is precies andersom: **do homework**, **make a mistake**." },
        { kop: "Telbaar en ontelbaar, en nog twee lastige paren" },
        "**Many** en **few** gebruik je bij telbare woorden (many pupils, few jobs). **Much** en **little** bij ontelbare woorden (much time, little money). In bevestigende zinnen klinkt **a lot of** vaak natuurlijker dan much.",
        "Let op het verschil tussen **few** (weinig, negatief) en **a few** (een paar, positief): Few pupils enjoy exams. / A few pupils got full marks.",
        { tabel: { kop: ["woord", "soort", "voorbeeld"], rijen: [
          ["affect", "werkwoord: beïnvloeden", "Screen time affects sleep."],
          ["effect", "zelfstandig naamwoord: effect, gevolg", "Screen time has an effect on sleep."],
          ["lose", "werkwoord: verliezen (lose, lost, lost)", "Many people may lose their jobs."],
          ["loose", "bijvoeglijk naamwoord: los, wijd", "a loose screw, loose clothes"]
        ] } },
        { ezel: "**A**ffect is de **a**ctie (werkwoord), **e**ffect is het **e**indresultaat (zelfstandig naamwoord)." },
        { tip: "Effect als werkwoord bestaat ook (to effect change = verandering teweegbrengen), maar dat heb je in je essay niet nodig. Schrijf: something **affects** something, of: something **has an effect on** something." }
      ],
      begrippen: [
        ["their", "Hun (bezit): Pupils forget their homework."],
        ["there", "Daar, er: There are two sides to this issue."],
        ["they're", "Samentrekking van they are. In een essay voluit schrijven."],
        ["its / it's", "Zijn of haar (bezit, zonder apostrof) / it is of it has."],
        ["your / you're", "Jouw (bezit) / you are."],
        ["whose / who's", "Van wie, wiens / who is of who has."],
        ["than / then", "Dan bij een vergelijking (bigger than) / toen, daarna (then, ...)."],
        ["to / too", "Naar, om te / te, ook: too expensive, me too."],
        ["make", "Maken, veroorzaken: make a decision, make a mistake, make money."],
        ["do", "Doen, uitvoeren: do research, do homework, do your best."],
        ["many / much", "Veel bij telbaar (many jobs) / veel bij ontelbaar (much time)."],
        ["few / little", "Weinig bij telbaar (few jobs) / weinig bij ontelbaar (little time)."],
        ["affect / effect", "Beïnvloeden (werkwoord) / effect, gevolg (zelfstandig naamwoord)."],
        ["lose / loose", "Verliezen / los, wijd."]
      ],
      vragen: [
        { q: "Many pupils forget ___ sports kit at home.", a: ["their", "there", "they're", "theirs"], u: "Bezit (hun spullen) is their. There = daar of er, they're = they are." },
        { q: "Phones are more popular ___ books among teenagers.", a: ["than", "then", "as", "like"], u: "Bij een vergelijking met -er of more gebruik je than. Then gaat over tijd." },
        { q: "The school has changed ___ rules on phones.", a: ["its", "it's", "it is", "its'"], u: "Bezit van een ding is its, zonder apostrof. It's betekent it is of it has." },
        { q: "Scientists ___ a lot of research into the effects of screen time.", a: ["do", "make", "take", "give"], u: "Research doe je: do research. Make gebruik je bij make a decision, make a mistake." },
        { q: "Welke combinatie is goed?", a: ["make a mistake", "do a mistake", "make homework", "do a decision"], u: "Make a mistake, make a decision, maar do homework. Nederlanders draaien dit vaak om." },
        { q: "There are not ___ jobs that cannot be done by a computer.", a: ["many", "much", "little", "a little"], u: "Jobs is telbaar (one job, two jobs), dus many. Much en little horen bij ontelbare woorden." },
        { q: "Pupils have very ___ free time during exam week.", a: ["little", "few", "many", "a few"], u: "Time is hier ontelbaar, dus little (weinig). Few en many horen bij telbare woorden." },
        { q: "Too much screen time can ___ your concentration.", a: ["affect", "effect", "effects", "affection"], u: "Na can staat een werkwoord: affect (beïnvloeden). Effect is meestal een zelfstandig naamwoord." },
        { q: "If robots take over, many people could ___ their jobs.", a: ["lose", "loose", "lost", "loss"], u: "Verliezen is lose (lose, lost, lost). Loose betekent los, en loss is het zelfstandig naamwoord." },
        { q: "Online games can be ___ addictive for young children.", a: ["too", "to", "two", "toe"], u: "Te (in de betekenis 'te veel') is too, met twee o's. To is naar of om te." },
        { q: "Pupils ___ parents check their homework tend to get better marks.", a: ["whose", "who's", "who", "which"], u: "Van wie of wiens is whose. Who's = who is of who has, en dat past hier niet." },
        { q: "First collect your arguments, ___ write your outline.", a: ["then", "than", "after", "so"], u: "Then = daarna (tijd). Than gebruik je alleen bij vergelijkingen. After is een voorzetsel en past hier niet." }
      ],
      reken: [
        { gen: (R) => {
          const [zin, keus, antw, uitleg] = R.kies([
            ["Many teenagers spend most of ___ free time online.", "their / there / they're", ["their"], "Bezit (hun vrije tijd): their."],
            ["___ are two sides to every discussion.", "Their / There / They're", ["there"], "Er zijn: there are."],
            ["Smartphones are smaller ___ laptops.", "than / then", ["than"], "Vergelijking: than."],
            ["Read the question carefully and ___ start writing.", "than / then", ["then"], "Daarna (tijd): then."],
            ["The government must explain ___ new policy.", "its / it's", ["its"], "Bezit van een ding: its, zonder apostrof."],
            ["___ clear that something must change.", "Its / It's", ["it's", "it’s"], "It is clear: it's (in een essay schrijf je it is)."],
            ["Do not forget to check ___ spelling.", "your / you're", ["your"], "Bezit (jouw spelling): your."],
            ["Many families cannot afford ___ go on holiday.", "to / too", ["to"], "Om te / to + werkwoord: to go."],
            ["Electric cars are still ___ expensive for many people.", "to / too", ["too"], "Te duur: too expensive."],
            ["Pupils ___ phones are taken away often feel anxious.", "whose / who's", ["whose"], "Van wie: whose."],
            ["Screen time can ___ the quality of your sleep.", "affect / effect", ["affect"], "Na can een werkwoord: affect."],
            ["Social media has a big ___ on young people.", "affect / effect", ["effect"], "Na a big een zelfstandig naamwoord: effect."],
            ["Careless pupils often ___ their keys.", "lose / loose", ["lose"], "Verliezen: lose."]
          ]);
          return { q: `Kies het goede woord en typ het (${keus}): ${zin}`, antwoord: antw, hint: "Vraag jezelf af: bezit, een samentrekking, tijd of vergelijking?", stappen: [uitleg, `Antwoord: ${antw[0]}`] };
        } },
        { gen: (R) => {
          const [zin, antw, uitleg] = R.kies([
            ["Scientists ___ research into the effects of social media.", ["do"], "do research"],
            ["At the age of eighteen, you have to ___ a decision about your future.", ["make"], "make a decision"],
            ["Everybody can ___ a mistake now and then.", ["make"], "make a mistake"],
            ["Most pupils ___ their homework in the evening.", ["do"], "do homework"],
            ["It is easier to ___ friends online than many people think.", ["make"], "make friends"],
            ["Teenagers should ___ more exercise.", ["do", "take", "get"], "do exercise (take of get exercise mag ook)"],
            ["Companies use AI to ___ more money.", ["make"], "make money"],
            ["A small change can ___ a big difference.", ["make"], "make a difference"],
            ["Too much sugar can ___ serious harm to your health.", ["do"], "do harm"],
            ["Schools should ___ more effort to prevent cyberbullying.", ["make"], "make an effort"]
          ]);
          return { q: `Make of do? Typ het goede werkwoord: ${zin}`, antwoord: antw, hint: "Make: iets maken of veroorzaken. Do: een taak of activiteit uitvoeren. Veel combinaties moet je gewoon kennen.", stappen: [`Vaste combinatie: ${uitleg}`] };
        } },
        { q: "Schrijf voluit wat 'it's' betekent in: It's been a difficult year. (twee woorden)", antwoord: ["it has"], hint: "Na it's staat been: dat is een voltooid deelwoord.", stappen: ["It's = it is of it has.", "Voor been hoort has: it has been."] },
        { q: "Few of little? Vul één woord in: Very ___ pupils enjoy exams.", antwoord: ["few"], hint: "Kun je pupils tellen?", stappen: ["Pupils is telbaar (one pupil, two pupils).", "Weinig bij telbaar is few: very few pupils."] }
      ],
      oefen: [
        { type: "sorteer", q: "Hoort het woord bij make of bij do?", groepen: ["make", "do"], items: [
          ["a decision", 0], ["a mistake", 0], ["money", 0], ["friends", 0], ["an effort", 0],
          ["research", 1], ["homework", 1], ["your best", 1], ["exercise", 1], ["harm", 1]
        ], u: "Make: decision, mistake, money, friends, effort. Do: research, homework, your best, exercise, harm." },
        { type: "invul", q: "Vul de goede woorden in.", tekst: "Many teenagers check {their} phones every few minutes. {There} is no doubt that this can {affect} their concentration. Some pupils are even more tired {than} their teachers, because they use {too} much social media at night.", extra: ["they're", "effect", "then", "to"], u: "Their (bezit), there is (er is), affect (werkwoord), than (vergelijking), too much (te veel)." },
        { type: "koppel", q: "Koppel het woord aan de betekenis.", paren: [
          ["its", "bezit van een ding"], ["it's", "it is / it has"], ["whose", "van wie"], ["who's", "who is / who has"], ["loose", "los, wijd"], ["lose", "verliezen"]
        ], u: "Een apostrof staat voor weggelaten letters. Bezitswoorden (its, whose) hebben geen apostrof." }
      ],
      open: [
        { q: "Verbeter de zeven fouten in deze zinnen en schrijf ze goed over: 'Their are many advantages to online lessons. Pupils can do less mistakes because they can watch a video more then once. However, it's main disadvantage is that pupils can loose they're motivation.'", a: "There are many advantages to online lessons. Pupils can make fewer mistakes because they can watch a video more than once. However, its main disadvantage is that pupils can lose their motivation.", punten: ["Their are → There are", "do less mistakes → make fewer mistakes (make a mistake; mistakes is telbaar, dus fewer)", "more then once → more than once", "it's main disadvantage → its main disadvantage", "loose they're motivation → lose their motivation"] }
      ],
      widgets: ["speurder"]
    },
    {
      id: "fo-3", nr: "3.3", titel: "Hoofdletters, spelling en interpunctie",
      kern: [
        "Hoofdletters, spelling en komma's lijken details, maar ze vallen bij elke zin op. Een essay vol kleine fouten maakt een slordige indruk, ook als je argumenten goed zijn.",
        { kop: "Hoofdletters: meer dan in het Nederlands" },
        { tabel: { kop: ["soort woord", "Engels", "Nederlands"], rijen: [
          ["ik", "**I** think that ...", "ik denk dat ..."],
          ["dagen", "on **M**onday", "op maandag"],
          ["maanden", "in **J**une", "in juni"],
          ["talen", "**E**nglish, **D**utch, **F**rench", "Engels, Nederlands, Frans"],
          ["nationaliteiten", "a **D**utch pupil, **B**ritish teenagers", "een Nederlandse leerling"],
          ["landen en steden", "the **N**etherlands, **L**ondon", "Nederland, Londen"]
        ] } },
        { let: "Seizoenen krijgen géén hoofdletter: in spring, in summer, in winter. Schoolvakken ook niet, behalve talen: maths, biology, maar **E**nglish." },
        { kop: "Komma's" },
        "Voor **that** zet je geen komma: I believe **that** schools should ... / The app **that** most pupils use is free. In oudere Nederlandse teksten stond voor 'dat' vaak een komma; die neem je niet mee naar het Engels.",
        "Na een [[zinsbijwoord]] of linking word aan het begin van de zin zet je wel een komma: **However,** ... **Moreover,** ... **In addition,** ... **For example,** ... **Firstly,** ... **In conclusion,** ...",
        "Staat however midden in de zin, dan staat het tussen twee komma's: Phones, **however,** can also distract pupils.",
        { let: "Plak twee hele zinnen niet aan elkaar met alleen een komma (een [[comma splice]]). Fout: 'Phones are useful, however they distract pupils.' Goed: Phones are useful. However, they distract pupils. Of: Phones are useful, but they distract pupils." },
        { tip: "Voor **because** staat meestal geen komma: Many pupils are tired because they sleep too little." },
        { kop: "Woorden die bijna iedereen fout spelt" },
        { tabel: { kop: ["goed", "let op", "veelgemaakte fout"], rijen: [
          ["necessary", "één c, twee s", "neccessary, necesary"],
          ["environment", "n vóór de m", "enviroment"],
          ["government", "n vóór de m", "goverment"],
          ["beginning", "dubbele n", "begining"],
          ["believe", "i vóór e", "beleive"],
          ["definitely", "-ite- in het midden", "definately"],
          ["opportunity", "dubbele p", "oportunity"],
          ["recommend", "één c, twee m", "reccomend"],
          ["which", "met wh", "wich"],
          ["because", "be + cause", "becouse"],
          ["until", "één l aan het eind", "untill"],
          ["really", "twee l's (real + ly)", "realy"]
        ] } },
        { ezel: "There is a **lie** in be**lie**ve. En in environment en government zit eerst het hele stamwoord: environ + ment, govern + ment. Necessary heeft one **C**ollar and two **S**leeves: één c, twee s." },
        { kop: "Brits Engels" },
        "Op school leer je meestal Brits Engels. Kies één spelling en blijf die gebruiken: **behaviour**, **colour**, **favourite** (-our), **centre**, **theatre** (-re), **programme** (tv-programma), **travelled** (dubbele l), **analyse**.",
        { tip: "Bij -ise of -ize (organise, organize; realise, realize) zijn in Brits Engels beide goed; -ise is het gebruikelijkst. Wees vooral consequent. Een computerprogramma heet ook in Brits Engels een **program**." },
        { tip: "Brits Engels maakt verschil tussen zelfstandig naamwoord en werkwoord: advice / to advise, practice / to practise. Pupils need more practice. Pupils should practise every day." }
      ],
      begrippen: [
        ["hoofdletter bij I", "Ik schrijf je in het Engels altijd met een hoofdletter: I, ook midden in de zin."],
        ["dagen en maanden", "Met hoofdletter: Monday, June. Seizoenen niet: spring, winter."],
        ["talen en nationaliteiten", "Met hoofdletter: English, Dutch, a British pupil."],
        ["zinsbijwoord", "Woord of woordgroep aan het begin van de zin, zoals However of In addition. Daarna komt een komma."],
        ["comma splice", "Fout: twee hele zinnen alleen met een komma aan elkaar plakken. Gebruik een punt of een voegwoord."],
        ["geen komma voor that", "I believe that ...; the app that pupils use. Geen komma, anders dan in oud Nederlands."],
        ["necessary", "Nodig: één c, twee s."],
        ["environment / government", "Milieu / regering: environ+ment, govern+ment."],
        ["definitely", "Zeker, beslist: -ite- in het midden, niet definately."],
        ["opportunity", "Kans, mogelijkheid: dubbele p."],
        ["recommend", "Aanraden: één c, twee m."],
        ["behaviour", "Gedrag: Brits -our (Amerikaans behavior)."],
        ["centre / programme", "Centrum / programma: Brits -re en -mme."],
        ["practice / practise", "Oefening (zelfstandig naamwoord) / oefenen (werkwoord) in Brits Engels."]
      ],
      vragen: [
        { q: "Welk woord krijgt in het Engels wél een hoofdletter (anders dan in het Nederlands)?", a: ["wednesday", "winter", "biology", "teenager"], u: "Dagen krijgen in het Engels een hoofdletter: Wednesday. Seizoenen (winter), schoolvakken die geen taal zijn (biology) en gewone woorden niet." },
        { q: "Welk woord krijgt in het Engels GEEN hoofdletter?", a: ["autumn", "english", "french", "august"], u: "Seizoenen schrijf je met een kleine letter: autumn. Talen (English, French) en maanden (August) krijgen wel een hoofdletter." },
        { q: "Welke zin heeft de goede komma's?", a: ["I believe that schools should start later.", "I believe, that schools should start later.", "I believe that, schools should start later.", "I, believe that schools should start later."], u: "Voor that komt geen komma. Ook tussen onderwerp en werkwoord hoort geen komma." },
        { q: "Welke zin is goed?", a: ["However, phones can also distract pupils.", "However phones, can also distract pupils.", "However phones can also, distract pupils.", "However; phones can also distract pupils."], u: "Na een zinsbijwoord aan het begin (However) komt een komma, verder niet." },
        { q: "Welke zin bevat een comma splice?", a: ["Phones are useful, they distract pupils.", "Phones are useful, but they distract pupils.", "Phones are useful. However, they distract pupils.", "Although phones are useful, they distract pupils."], u: "Twee hele zinnen alleen met een komma: dat is een comma splice. Met but, although of een punt is het goed." },
        { q: "Welk woord is goed gespeld?", a: ["necessary", "neccessary", "necesary", "neccesary"], u: "Necessary: één c en twee s. Ezelsbruggetje: one Collar, two Sleeves." },
        { q: "Welk woord is goed gespeld?", a: ["environment", "enviroment", "envirnoment", "enviromment"], u: "Environment = environ + ment. De n van environ vergeet je makkelijk." },
        { q: "Welk woord is goed gespeld?", a: ["definitely", "definately", "definetly", "definitly"], u: "Definitely komt van finite: de-fin-ite-ly." },
        { q: "Welke spelling is Brits Engels?", a: ["behaviour", "behavior", "behaviur", "behavoir"], u: "Brits Engels schrijft -our: behaviour, colour, favourite. Behavior is Amerikaans." },
        { q: "Welke zin is goed in Brits Engels?", a: ["Pupils should practise writing every week.", "Pupils should practice writing every weak.", "Pupils should practise writting every week.", "Pupils should practice writting every week."], u: "Practise (met s) is in Brits Engels het werkwoord. Writing heeft één t, en week (week) is iets anders dan weak (zwak)." },
        { q: "Welk woord is goed gespeld?", a: ["opportunity", "oppertunity", "oportunity", "opportunaty"], u: "Opportunity: dubbele p, en -tunity aan het eind." },
        { q: "Welke zin is goed gespeld?", a: ["I recommend waiting until the results are in.", "I reccomend waiting untill the results are in.", "I recomend waiting untill the results are in.", "I reccommend waiting until the results are in."], u: "Recommend: één c en twee m. Until: één l aan het eind." }
      ],
      reken: [
        { gen: (R) => {
          const [fout, goed, uitleg] = R.kies([
            ["neccessary", "necessary", "één c, twee s"], ["enviroment", "environment", "environ + ment"], ["goverment", "government", "govern + ment"],
            ["begining", "beginning", "dubbele n voor -ing"], ["beleive", "believe", "a lie in believe"], ["definately", "definitely", "de-fin-ite-ly"],
            ["oportunity", "opportunity", "dubbele p"], ["reccomend", "recommend", "één c, twee m"], ["wich", "which", "met wh"],
            ["becouse", "because", "be + cause"], ["untill", "until", "één l aan het eind"], ["realy", "really", "real + ly"],
            ["seperate", "separate", "er zit 'a par' in: sep-a-rate"], ["tommorow", "tomorrow", "één m, twee r"], ["adress", "address", "dubbele d en dubbele s"]
          ]);
          return { q: `Dit woord is fout gespeld. Typ het goed: **${fout}**`, antwoord: [goed], hint: "Spreek het woord langzaam uit en denk aan het stamwoord.", stappen: [`Let op: ${uitleg}`, `Goed: ${goed}`] };
        } },
        { gen: (R) => {
          const [am, br] = R.kies([
            ["color", "colour"], ["behavior", "behaviour"], ["center", "centre"], ["favorite", "favourite"], ["neighbor", "neighbour"],
            ["analyze", "analyse"], ["traveled", "travelled"], ["defense", "defence"], ["theater", "theatre"], ["labor", "labour"]
          ]);
          return { q: `Dit is Amerikaans Engels. Typ de Britse spelling: **${am}**`, antwoord: [br], hint: "Brits Engels: -our, -re, -ce, -yse en een dubbele l bij travelled.", stappen: [`Amerikaans: ${am}`, `Brits: ${br}`] };
        } },
        { q: "Krijgt 'summer' in het Engels een hoofdletter? Typ 'met' of 'zonder'.", antwoord: ["zonder"], hint: "Dagen en maanden wel, maar seizoenen?", stappen: ["Dagen (Monday) en maanden (June) krijgen een hoofdletter.", "Seizoenen niet: in summer, in winter."] },
        { q: "Welk woord komt er vóór de komma als je een tegenstelling begint? Vul één woord in: Phones are useful. ___, they can also be a distraction.", antwoord: ["however", "nevertheless", "nonetheless"], hint: "Het formele linking word voor 'maar' aan het begin van een zin.", stappen: ["Aan het begin van een zin gebruik je in een formeel essay liever geen but.", "However, ... (met een komma erna)."] }
      ],
      oefen: [
        { type: "sorteer", q: "Hoofdletter of niet?", groepen: ["Met hoofdletter", "Zonder hoofdletter"], items: [
          ["Tuesday", 0], ["French", 0], ["Dutch", 0], ["February", 0], ["I (ik)", 0],
          ["autumn", 1], ["history", 1], ["spring", 1], ["maths", 1], ["summer holiday", 1]
        ], u: "Dagen, maanden, talen, nationaliteiten en I krijgen een hoofdletter. Seizoenen en schoolvakken (behalve talen) niet." },
        { type: "invul", q: "Vul de goed gespelde woorden in.", tekst: "It is {necessary} to protect the {environment}. The {government} should {definitely} invest more in public transport, {which} is cleaner than travelling by car.", extra: ["neccessary", "enviroment", "goverment", "definately", "wich"], u: "Necessary, environment, government, definitely, which: vijf woorden die in bijna elk essay fout gaan." },
        { type: "koppel", q: "Koppel het Amerikaanse woord aan de Britse spelling.", paren: [
          ["behavior", "behaviour"], ["center", "centre"], ["program (tv)", "programme"], ["analyze", "analyse"], ["traveled", "travelled"]
        ], u: "Brits Engels: -our, -re, -mme, -yse, en een dubbele l voor -ed bij travel." }
      ],
      open: [
        { q: "Verbeter alle fouten in hoofdletters, komma's en spelling: 'in my opinion the goverment should do more for the enviroment, however most people dont beleive, that it is neccessary. On monday i read an article in english about it.'", a: "In my opinion, the government should do more for the environment. However, most people do not believe that it is necessary. On Monday I read an article in English about it.", punten: ["hoofdletters: In, Monday, I, English", "komma na In my opinion", "comma splice opgelost: punt voor However, komma erna", "geen komma voor that", "spelling: government, environment, believe, necessary", "dont → do not (voluit; met apostrof zou het don't zijn)"] }
      ]
    },
    {
      id: "fo-4", nr: "3.4", titel: "Irregular verbs",
      kern: [
        "Een [[irregular verb]] krijgt in de verleden tijd geen -ed. Je moet drie vormen kennen: het hele werkwoord, de [[past simple]] en het [[past participle]] (voltooid deelwoord): write, wrote, written.",
        { kop: "Waar heb je ze nodig in een essay?" },
        { tabel: { kop: ["tijd of vorm", "welke vorm", "voorbeeld"], rijen: [
          ["past simple", "2e vorm", "When smartphones first appeared, few people **saw** the risks."],
          ["present perfect", "have/has + 3e vorm", "Social media **has become** part of daily life."],
          ["passive", "be + 3e vorm", "Many essays **are written** with the help of AI."],
          ["passive present perfect", "has/have been + 3e vorm", "New rules **have been made** to protect pupils."]
        ] } },
        { let: "Gebruik na have, has en be altijd de 3e vorm. Fout: 'Prices have rose.' 'The essay was wrote by AI.' Goed: Prices **have risen**. The essay **was written** by AI." },
        { kop: "Vier patronen" },
        { tabel: { kop: ["patroon", "voorbeelden"], rijen: [
          ["alle drie gelijk", "cut, cut, cut · put, put, put · let, let, let · cost, cost, cost · hurt, hurt, hurt · set, set, set"],
          ["2e en 3e gelijk", "buy, bought, bought · think, thought, thought · teach, taught, taught · keep, kept, kept · spend, spent, spent · make, made, made · get, got, got"],
          ["i, a, u", "sing, sang, sung · begin, began, begun · drink, drank, drunk · swim, swam, swum"],
          ["3e vorm op -en/-n", "write, wrote, written · take, took, taken · give, gave, given · choose, chose, chosen · grow, grew, grown · know, knew, known"]
        ] } },
        { ezel: "De -ought/-aught-familie rijmt: buy-**bought**, bring-**brought**, think-**thought**, fight-**fought**, teach-**taught**, catch-**caught**. Die eindigen allemaal op -ght." },
        { kop: "De belangrijkste voor een essay" },
        { tabel: { kop: ["werkwoord", "past simple", "past participle", "betekenis"], rijen: [
          ["be", "was / were", "been", "zijn"], ["become", "became", "become", "worden"], ["begin", "began", "begun", "beginnen"],
          ["bring", "brought", "brought", "brengen"], ["build", "built", "built", "bouwen"], ["buy", "bought", "bought", "kopen"],
          ["choose", "chose", "chosen", "kiezen"], ["do", "did", "done", "doen"], ["feel", "felt", "felt", "voelen"],
          ["find", "found", "found", "vinden"], ["get", "got", "got", "krijgen, worden"], ["give", "gave", "given", "geven"],
          ["go", "went", "gone", "gaan"], ["grow", "grew", "grown", "groeien"], ["keep", "kept", "kept", "houden"],
          ["know", "knew", "known", "weten, kennen"], ["lead", "led", "led", "leiden"], ["learn", "learnt / learned", "learnt / learned", "leren"],
          ["lose", "lost", "lost", "verliezen"], ["make", "made", "made", "maken"], ["mean", "meant", "meant", "betekenen"],
          ["pay", "paid", "paid", "betalen"], ["rise", "rose", "risen", "stijgen"], ["say", "said", "said", "zeggen"],
          ["see", "saw", "seen", "zien"], ["spend", "spent", "spent", "uitgeven, doorbrengen"], ["take", "took", "taken", "nemen"],
          ["teach", "taught", "taught", "onderwijzen"], ["think", "thought", "thought", "denken"], ["write", "wrote", "written", "schrijven"]
        ] } },
        { tip: "Bij **learn**, **dream**, **burn** en **spell** zijn in Brits Engels twee vormen goed: learnt of learned, dreamt of dreamed. Bij **get** is het Brits **got** (I have got); gotten is Amerikaans." },
        { let: "Drie beruchte verwarringen: **rise, rose, risen** (stijgen, zonder lijdend voorwerp) tegenover **raise, raised, raised** (verhogen: raise prices, raise awareness); **fall, fell, fallen** (vallen) tegenover **feel, felt, felt** (voelen); **find, found, found** (vinden) tegenover **found, founded, founded** (oprichten)." },
        { voorbeeld: { titel: "drie tijden in één alinea", stappen: [
          "**Past simple:** Twenty years ago, few teenagers **had** a smartphone.",
          "**Present perfect:** Since then, the situation **has changed** completely and screen time **has grown** enormously.",
          "**Passive:** As a result, phones **are** now **forbidden** in many classrooms, and new rules **have been made** to protect pupils."
        ] } }
      ],
      begrippen: [
        ["irregular verb", "Onregelmatig werkwoord: verleden tijd zonder -ed, zoals go, went, gone."],
        ["past simple", "Verleden tijd (2e vorm): wrote, saw, took. Voor een afgelopen moment: In 2020, ..."],
        ["past participle", "Voltooid deelwoord (3e vorm): written, seen, taken. Na have/has en be."],
        ["present perfect", "Have/has + 3e vorm: Social media has changed our lives."],
        ["passive", "Be + 3e vorm: The rules were made by the school."],
        ["rise, rose, risen", "Stijgen (zonder lijdend voorwerp): Prices have risen."],
        ["raise, raised, raised", "Verhogen, iets omhoog brengen (regelmatig): raise taxes, raise awareness."],
        ["fall, fell, fallen", "Vallen: The number of readers has fallen."],
        ["feel, felt, felt", "Voelen: Many pupils felt stressed."],
        ["lead, led, led", "Leiden: This has led to problems."],
        ["choose, chose, chosen", "Kiezen: She has chosen to study abroad."],
        ["learn, learnt/learned", "Leren: in Brits Engels zijn learnt en learned allebei goed."],
        ["get, got, got", "Krijgen, worden: Brits voltooid deelwoord is got; gotten is Amerikaans."],
        ["teach, taught, taught", "Onderwijzen: Our teacher taught us to plan an essay."]
      ],
      vragen: [
        { q: "Prices have ___ sharply in recent years.", a: ["risen", "rose", "raised", "rised"], u: "Na have komt de 3e vorm: rise, rose, risen. Raised hoort bij raise (iets verhogen) en heeft een lijdend voorwerp nodig." },
        { q: "This essay was ___ in forty minutes.", a: ["written", "wrote", "writed", "writen"], u: "Passive: was + 3e vorm. Write, wrote, written, met dubbele t." },
        { q: "Last year, our school ___ new laptops for every class.", a: ["bought", "brought", "buyed", "has bought"], u: "Past simple van buy is bought. Brought komt van bring. Bij last year gebruik je de past simple, niet de present perfect." },
        { q: "Our teacher ___ us how to write a good introduction.", a: ["taught", "teached", "learned", "thought"], u: "Teach, taught, taught. Thought komt van think, en learned betekent dat je zelf leert." },
        { q: "Social media has ___ an important part of our lives.", a: ["become", "became", "becomed", "becoming"], u: "Become, became, become: de 3e vorm is gelijk aan het hele werkwoord, net als bij come." },
        { q: "After the test, many pupils ___ relieved.", a: ["felt", "fell", "feeled", "fallen"], u: "Feel, felt, felt (voelen). Fell is de past simple van fall (vallen)." },
        { q: "These problems have ___ to a lot of discussion.", a: ["led", "lead", "leaded", "lid"], u: "Lead, led, led. De 3e vorm schrijf je als led, ook al klinkt die hetzelfde als lead (lood)." },
        { q: "Welke rij is goed?", a: ["choose, chose, chosen", "choose, choosed, choosen", "chose, chosed, chosen", "choose, chose, choosen"], u: "Choose (oo), chose (één o), chosen (één o). Een -ed-vorm bestaat niet." },
        { q: "Welke zin is goed in Brits Engels?", a: ["I have learnt a lot from my part-time job.", "I have learn a lot from my part-time job.", "I have lernt a lot from my part-time job.", "I have learning a lot from my part-time job."], u: "Na have de 3e vorm: learnt (of learned, in Brits Engels allebei goed)." },
        { q: "In which sentence is the past participle correct?", a: ["The new sports hall was built last year.", "The new sports hall was build last year.", "The new sports hall was builded last year.", "The new sports hall was builted last year."], u: "Build, built, built. Passive: was + 3e vorm, dus was built." },
        { q: "Many people have ___ their jobs because of automation.", a: ["lost", "losed", "loosed", "lose"], u: "Lose, lost, lost. Na have de 3e vorm: have lost." },
        { q: "Online shopping has ___ enormously since 2010.", a: ["grown", "grew", "growed", "growing"], u: "Grow, grew, grown. Present perfect: has + 3e vorm." }
      ],
      reken: [
        { gen: (R) => {
          const V = [
            ["be", ["was", "were", "was/were", "was, were", "was or were", "was of were"], ["been"], "zijn"], ["become", ["became"], ["become"], "worden"], ["begin", ["began"], ["begun"], "beginnen"],
            ["bring", ["brought"], ["brought"], "brengen"], ["build", ["built"], ["built"], "bouwen"], ["buy", ["bought"], ["bought"], "kopen"],
            ["catch", ["caught"], ["caught"], "vangen"], ["choose", ["chose"], ["chosen"], "kiezen"], ["come", ["came"], ["come"], "komen"],
            ["cost", ["cost"], ["cost"], "kosten"], ["cut", ["cut"], ["cut"], "snijden"], ["do", ["did"], ["done"], "doen"],
            ["drink", ["drank"], ["drunk"], "drinken"], ["drive", ["drove"], ["driven"], "rijden, besturen"], ["eat", ["ate"], ["eaten"], "eten"],
            ["fall", ["fell"], ["fallen"], "vallen"], ["feel", ["felt"], ["felt"], "voelen"], ["fight", ["fought"], ["fought"], "vechten"],
            ["find", ["found"], ["found"], "vinden"], ["forget", ["forgot"], ["forgotten"], "vergeten"], ["get", ["got"], ["got", "gotten"], "krijgen, worden"],
            ["give", ["gave"], ["given"], "geven"], ["go", ["went"], ["gone"], "gaan"], ["grow", ["grew"], ["grown"], "groeien"],
            ["hear", ["heard"], ["heard"], "horen"], ["keep", ["kept"], ["kept"], "houden"], ["know", ["knew"], ["known"], "weten, kennen"],
            ["lead", ["led"], ["led"], "leiden"], ["learn", ["learnt", "learned"], ["learnt", "learned"], "leren"], ["leave", ["left"], ["left"], "vertrekken, verlaten"],
            ["lose", ["lost"], ["lost"], "verliezen"], ["make", ["made"], ["made"], "maken"], ["mean", ["meant"], ["meant"], "betekenen"],
            ["pay", ["paid"], ["paid"], "betalen"], ["put", ["put"], ["put"], "zetten, leggen"], ["rise", ["rose"], ["risen"], "stijgen"],
            ["say", ["said"], ["said"], "zeggen"], ["see", ["saw"], ["seen"], "zien"], ["sell", ["sold"], ["sold"], "verkopen"],
            ["send", ["sent"], ["sent"], "sturen"], ["sing", ["sang"], ["sung"], "zingen"], ["sleep", ["slept"], ["slept"], "slapen"],
            ["speak", ["spoke"], ["spoken"], "spreken"], ["spend", ["spent"], ["spent"], "uitgeven, doorbrengen"], ["steal", ["stole"], ["stolen"], "stelen"],
            ["take", ["took"], ["taken"], "nemen"], ["teach", ["taught"], ["taught"], "onderwijzen"], ["tell", ["told"], ["told"], "vertellen"],
            ["think", ["thought"], ["thought"], "denken"], ["understand", ["understood"], ["understood"], "begrijpen"], ["win", ["won"], ["won"], "winnen"],
            ["write", ["wrote"], ["written"], "schrijven"], ["dream", ["dreamt", "dreamed"], ["dreamt", "dreamed"], "dromen"], ["throw", ["threw"], ["thrown"], "gooien"]
          ];
          const v = R.kies(V), i = R.kies([1, 2]);
          const naam = i === 1 ? "past simple (2e vorm)" : "past participle (3e vorm)";
          const antw = v[i];
          const toon = (l) => (l[0] === "was" ? "was/were" : l[0] === "got" && l.length > 1 ? "got" : l.join("/"));
          let extra = "";
          if (v[0] === "be" && i === 1) extra = " (was bij I/he/she/it, were bij you/we/they)";
          else if (v[0] === "get" && i === 2) extra = " (Brits; gotten is Amerikaans en wordt ook goed gerekend)";
          else if (antw.length > 1) extra = " (allebei goed)";
          return { q: `Geef de **${naam}** van **${v[0]}** (${v[3]}).`, antwoord: antw, hint: i === 1 ? "De vorm die je gebruikt bij yesterday of last year." : "De vorm na have/has of na be (passive).", stappen: [`${v[0]}, ${toon(v[1])}, ${toon(v[2])}`, `De ${naam}: ${toon(antw)}${extra}`] };
        } },
        { gen: (R) => {
          const [zin, ww, antw, uitleg] = R.kies([
            ["Last year, the school ___ new laptops for every pupil.", "buy", ["bought"], "last year → past simple: bought"],
            ["Prices have ___ sharply in recent years.", "rise", ["risen"], "have + 3e vorm: risen"],
            ["This essay was ___ in forty minutes.", "write", ["written"], "passive: was + 3e vorm: written"],
            ["Many jobs have already been ___ over by machines.", "take", ["taken"], "have been + 3e vorm: taken"],
            ["When smartphones first appeared, few people ___ they would change our lives so much.", "think", ["thought"], "afgelopen moment → past simple: thought"],
            ["Social media has ___ part of everyday life.", "become", ["become"], "has + 3e vorm: become"],
            ["I have ___ a lot from my part-time job.", "learn", ["learnt", "learned"], "have + 3e vorm: learnt of learned"],
            ["The rules were ___ to protect pupils.", "make", ["made"], "passive: were + 3e vorm: made"],
            ["Our school ___ a project on climate change last month.", "begin", ["began"], "last month → past simple: began"],
            ["The new library was ___ two years ago.", "build", ["built"], "passive: was + 3e vorm: built"],
            ["Many pupils have ___ interest in reading books.", "lose", ["lost"], "have + 3e vorm: lost"],
            ["Online shopping has ___ enormously.", "grow", ["grown"], "has + 3e vorm: grown"],
            ["After the exam yesterday, I ___ relieved.", "feel", ["felt"], "yesterday → past simple: felt"],
            ["Have you ever ___ an electric car?", "drive", ["driven"], "have + 3e vorm: driven"],
            ["Last term, our English teacher ___ us how to plan an essay.", "teach", ["taught"], "last term → past simple: taught"],
            ["The pupils ___ very enthusiastic about the school trip last week.", "be", ["were"], "last week → past simple; the pupils (meervoud) → were"],
            ["This decision has ___ to a lot of protests.", "lead", ["led"], "has + 3e vorm: led"],
            ["The government has ___ a lot of money on new schools.", "spend", ["spent"], "has + 3e vorm: spent"]
          ]);
          return { q: `Vul de goede vorm van **${ww}** in: ${zin}`, antwoord: antw, hint: "Kijk naar het signaal: last year of ago (past simple), have/has (3e vorm), was/were/been (passive, 3e vorm).", stappen: [uitleg] };
        } },
        { q: "Verbeter de fout en typ alleen het verbeterde werkwoord: The number of cars on the road has rised.", antwoord: ["risen"], hint: "Rise is onregelmatig.", stappen: ["Rise, rose, risen.", "Na has de 3e vorm: has risen."] },
        { q: "Verhogen of stijgen? Vul de goede vorm in (één woord): Campaigns on social media have ___ awareness of climate change.", antwoord: ["raised"], hint: "Er staat een lijdend voorwerp: awareness.", stappen: ["Iets verhogen met een lijdend voorwerp is raise (regelmatig).", "Have + 3e vorm: have raised awareness."] }
      ],
      oefen: [
        { type: "sorteer", q: "Welk patroon heeft het werkwoord?", groepen: ["alle drie gelijk", "2e = 3e", "drie verschillende vormen"], items: [
          ["cut", 0], ["put", 0], ["cost", 0],
          ["buy", 1], ["teach", 1], ["spend", 1], ["make", 1],
          ["write", 2], ["begin", 2], ["choose", 2], ["grow", 2]
        ], u: "Cut, put, cost: drie keer gelijk. Buy-bought-bought, teach-taught-taught, spend-spent-spent, make-made-made: 2e = 3e. Write, begin, choose, grow: drie verschillende vormen." },
        { type: "koppel", q: "Koppel het werkwoord aan zijn past participle.", paren: [
          ["rise", "risen"], ["raise", "raised"], ["fall", "fallen"], ["feel", "felt"], ["lead", "led"], ["find", "found"]
        ], u: "Rise/raise, fall/feel en lead/find worden vaak verward. Rise en fall zijn onregelmatig, raise is regelmatig." },
        { type: "invul", q: "Vul de goede vormen in.", tekst: "Twenty years ago, very few teenagers {had} a smartphone. Since then, screen time has {grown} enormously and many new apps have been {developed}. Some schools have {taken} action, and phones are now {forbidden} in many classrooms.", extra: ["growed", "took", "forbid"], u: "Had (past simple bij ago), has grown, have been developed (regelmatig), have taken, are forbidden (passive)." }
      ],
      open: [
        { q: "Schrijf drie zinnen over hoe smartphones het leven van tieners hebben veranderd. Gebruik in de eerste zin de past simple, in de tweede de present perfect en in de derde een passive, elk met een onregelmatig werkwoord.", a: "When smartphones first came out, most teenagers did not see the risks. Since then, phones have become the centre of their social lives. As a result, phones are now forbidden in many schools during lessons.", punten: ["past simple met een onregelmatig werkwoord (came, saw, did)", "present perfect: have/has + 3e vorm (have become, have grown)", "passive: be + 3e vorm (are forbidden, were taken)", "alle vormen goed gespeld", "de zinnen passen inhoudelijk bij het onderwerp"] }
      ],
      widgets: ["werkwoorden"]
    }
  ]
});
