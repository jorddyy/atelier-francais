// Contenu pour l’examen B1- : oral, écrit, exercices de transformation.
const oralGuide = {
  steps: [
    ["1. Présenter le document", `<p>Annonce le <b>type</b> de document, le <b>thème</b> et la question posée.</p><ul><li>Le document que j’ai choisi est <b>un article</b> / <b>un reportage</b> / <b>une affiche</b>. Il <b>traite de</b>… / Il s’agit de…</li><li>Le <b>thème</b> principal, c’est… Le document <b>pose la question</b> suivante : …</li><li>Je vais d’abord présenter les <b>points forts</b>, puis les <b>points faibles</b>, et je terminerai par <b>mon opinion</b>.</li></ul>`],
    ["2. Les points forts (avantages)", `<p>Donne deux ou trois avantages, chacun avec un exemple.</p><ul><li><b>Un premier avantage</b>, c’est que… Par exemple, …</li><li><b>Ce qui est bien</b>, c’est… / Ce qui me paraît positif, c’est…</li><li>Cela <b>permet de</b> + infinitif : cela permet de gagner du temps.</li></ul>`],
    ["3. Les points faibles (inconvénients)", `<p>Annonce le changement avec un connecteur d’opposition, puis donne aussi deux ou trois inconvénients avec exemples.</p><ul><li><b>En revanche</b>, il y a aussi des inconvénients. <b>Le principal problème</b>, c’est que…</li><li><b>Ce qui pose problème</b>, c’est… / <b>Ce dont on parle moins</b>, c’est…</li><li>Il est <b>dommage que</b> + subjonctif : il est dommage que les gens se sentent seuls.</li></ul>`],
    ["4. Mon opinion et un exemple personnel", `<p>Donne clairement ton avis, puis raconte une expérience (passé composé et imparfait).</p><ul><li><b>Selon moi</b> / <b>À mon avis</b> / En ce qui me concerne, …</li><li><b>Je pense que</b> + indicatif ; <b>je ne pense pas que</b> + subjonctif.</li><li><b>Je vais vous donner un exemple</b> : l’année dernière, je travaillais… et un jour, j’ai décidé de…</li></ul>`],
    ["5. Conclure", `<p>Résume en une ou deux phrases et propose une solution ou une hypothèse.</p><ul><li><b>Pour conclure</b> / En résumé / Pour terminer, je dirais que…</li><li><b>À mon avis</b>, la meilleure solution serait de… (conditionnel)</li><li>Si on <b>pouvait</b> + infinitif, on <b>pourrait</b> + infinitif.</li></ul>`],
    ["6. Répondre aux questions de l’examinateur", `<p>Ne reste pas muet : reformule, précise, défends ta position.</p><ul><li><b>Si j’ai bien compris</b>, vous me demandez si… Alors, …</li><li><b>Je n’y avais pas pensé</b>, mais… / C’est une bonne question.</li><li><b>Je comprends votre point de vue</b>, cependant je reste convaincu(e) que… / Je suis d’accord avec vous <b>sur ce point</b>.</li></ul>`]
  ],
  connectors: [
    ["Commencer", ["Tout d’abord", "Pour commencer", "D’abord", "Je vais commencer par…", "Dans un premier temps"]],
    ["Ajouter", ["De plus", "En plus", "Ensuite", "Par ailleurs", "Non seulement… mais aussi…"]],
    ["Opposer, nuancer", ["Mais", "En revanche", "Par contre", "Cependant", "Pourtant", "Même si + indicatif"]],
    ["Donner un exemple", ["Par exemple", "Comme", "Ainsi", "Je pense notamment à…", "Pour illustrer cela, je vais vous donner un exemple"]],
    ["Cause", ["Parce que", "Car", "En effet", "À cause de + nom (cause négative)", "Grâce à + nom (cause positive)"]],
    ["Conséquence", ["Donc", "Alors", "C’est pourquoi", "Par conséquent", "Du coup (oral)"]],
    ["Conclure", ["Pour conclure", "En résumé", "Pour terminer", "En conclusion", "Finalement"]],
    ["Gagner du temps, reformuler", ["Comment dire…", "Je voulais dire que…", "En d’autres termes", "Autrement dit", "Laissez-moi réfléchir un instant", "C’est-à-dire"]]
  ],
  grid: [
    ["Parler assez longtemps sur le thème (au moins 3 minutes)", 2, `Prépare <b>trois</b> avantages, <b>trois</b> inconvénients et un exemple personnel : cela fait déjà 3 minutes. Développe chaque idée avec « parce que » et « par exemple ».`],
    ["Présenter le sujet de manière simple et directe", 1, `Commence toujours par la même phrase : <b>« Le document traite de… »</b> + le thème en une phrase. Ne raconte pas tout le document.`],
    ["Dégager et présenter les avantages et les inconvénients", 4, `C’est la plus grosse partie : <b>deux ou trois</b> avantages <b>et</b> deux ou trois inconvénients, chacun avec un exemple concret. Annonce ton plan.`],
    ["Exprimer une opinion personnelle illustrée par des exemples", 2, `Dis clairement <b>« Selon moi… »</b>, puis raconte une expérience vécue (<b>passé composé + imparfait</b>) ou un exemple de ton pays.`],
    ["Relier les idées logiquement, utiliser des connecteurs", 2, `Utilise au moins un connecteur par étape : <b>d’abord, de plus, en revanche, par exemple, pour conclure</b>. Évite de répéter « et puis ».`],
    ["Répondre à l’examinateur, préciser, défendre sa position", 2, `Écoute la question, reformule-la (<b>« Si j’ai bien compris… »</b>), réponds avec un argument et un exemple. Si tu ne comprends pas, demande de répéter.`],
    ["Lexique général et lexique du thème, périphrases", 3, `Prépare 6 à 8 mots précis sur le thème. Si un mot te manque, utilise une <b>périphrase</b> : « c’est l’endroit où on… », « c’est quand on… ».`],
    ["Morphosyntaxe : phrases simples et complexes, conjugaison", 3, `Montre les structures du cours : un <b>subjonctif</b> (je ne pense pas que), un <b>conditionnel</b> (il faudrait), une <b>relative</b> (qui, que, dont, ce qui), un pronom (y, en) et des temps du passé bien conjugués. Garde des phrases simples mais correctes.`],
    ["Phonologie : prononciation claire, intonation marquée", 1, `Parle lentement, fais des pauses entre les idées et marque l’intonation (montante pour une question, descendante pour une affirmation). Articule les liaisons : <b>les_amis, vous_avez</b>.`]
  ],
  prep: [
    `Tu as <b>7 minutes</b> de préparation, puis 5 à 6 minutes de passage (monologue + questions). Prends <b>1 à 2 minutes</b> pour lire le document et repérer le thème. Souligne les mots-clés ; ne traduis pas chaque phrase.`,
    `Note des <b>mots-clés</b>, pas des phrases complètes : sinon tu vas lire au lieu de parler. Un tableau « + / – » en deux colonnes suffit.`,
    `Prépare un <b>exemple personnel</b> au passé (ce qui s’est passé, comment c’était) et ton <b>opinion en une phrase</b> avec un subjonctif ou un conditionnel.`,
    `Écris à l’avance <b>tes connecteurs</b> dans la marge : d’abord, de plus, en revanche, par exemple, pour conclure.`,
    `Pense aux questions possibles : « Et vous, qu’en pensez-vous ? », « Dans votre pays ? ». Prépare une réponse courte pour chacune.`
  ]
};

const oralTopics = [
  { id: "teletravail", title: "Le télétravail", document: "Un article de journal intitulé « Le télétravail : une chance ou un piège ? ».",
    pour: ["On gagne du temps, car on ne prend pas les transports.", "On organise sa journée plus librement.", "On est souvent plus concentré, sans bruit ni interruptions."],
    contre: ["On peut se sentir isolé, loin de ses collègues.", "La frontière entre vie privée et travail devient floue.", "Il faut un espace calme et du bon matériel chez soi."],
    vocab: [["le télétravail", "remote work"], ["le coworking", "shared workspace"], ["le trajet", "commute"], ["la visioconférence", "video call"], ["l’isolement (m.)", "isolation"], ["se concentrer", "to concentrate"], ["la flexibilité", "flexibility"], ["l’équilibre vie privée–vie professionnelle", "work–life balance"]],
    amorce: "Ce qui me plaît dans le télétravail, c’est la liberté, mais je ne pense pas qu’on puisse travailler seul tous les jours.",
    questions: ["Et vous, préférez-vous travailler au bureau ou à la maison ?", "Le coworking pourrait-il être une solution, selon vous ?", "Le télétravail est-il possible dans votre métier ?"] },
  { id: "semaine4", title: "La semaine de quatre jours", document: "Un reportage télévisé : « Quatre jours de travail par semaine : l’essai de plusieurs entreprises ».",
    pour: ["Trois jours de repos permettent de mieux récupérer et de s’occuper de sa famille.", "Les employés sont souvent plus motivés et moins stressés.", "L’entreprise attire plus facilement de nouveaux talents."],
    contre: ["Les journées de dix heures sont très fatigantes.", "Certains métiers (hôpital, magasins) s’adaptent difficilement.", "Il faut faire le même travail en moins de temps, ce qui peut augmenter le stress."],
    vocab: [["la semaine de quatre jours", "four-day week"], ["la fatigue", "tiredness"], ["la productivité", "productivity"], ["le salaire", "salary"], ["récupérer", "to recover"], ["les horaires (m.)", "working hours"], ["la charge de travail", "workload"], ["le jour de repos", "day off"]],
    amorce: "Si on travaillait quatre jours par semaine, je serais plus motivé, mais il faudrait que les journées ne soient pas trop longues.",
    questions: ["Pensez-vous que tous les métiers puissent passer à quatre jours ?", "Que feriez-vous de votre jour libre ?", "Accepteriez-vous des journées plus longues pour avoir un jour de repos en plus ?"] },
  { id: "uniforme", title: "L’uniforme à l’école ou au travail", document: "Un débat à la télévision : « Faut-il remettre l’uniforme à l’école ? ».",
    pour: ["Tous les élèves sont à égalité : on ne voit pas les différences de richesse.", "Les enfants pensent au travail plutôt qu’à la mode.", "Les parents n’ont pas besoin d’acheter beaucoup de vêtements."],
    contre: ["L’uniforme limite la liberté d’expression des jeunes.", "Il coûte cher, surtout pour les familles nombreuses.", "Il ne règle pas les vrais problèmes, comme le harcèlement."],
    vocab: [["l’uniforme (m.)", "uniform"], ["la tenue", "outfit, dress"], ["l’égalité (f.)", "equality"], ["la liberté d’expression", "freedom of expression"], ["le harcèlement", "bullying, harassment"], ["le règlement", "rules, regulations"], ["s’habiller", "to get dressed"], ["le vêtement", "garment"]],
    amorce: "Ce que je trouve important, c’est que les élèves se sentent égaux, mais je ne suis pas sûr que l’uniforme soit la meilleure solution.",
    questions: ["Avez-vous porté un uniforme quand vous étiez enfant ?", "Faut-il aussi un uniforme au travail, par exemple dans les banques ?", "Dans votre pays, y a-t-il des uniformes à l’école ?"] },
  { id: "voiture", title: "La fin des voitures à moteur thermique", document: "Un article : « L’Union européenne veut mettre fin à la vente des voitures neuves à moteur thermique ».",
    pour: ["Les voitures électriques polluent moins en ville et font moins de bruit.", "Elles aident à lutter contre le réchauffement climatique.", "On dépend moins du pétrole."],
    contre: ["Elles coûtent encore très cher.", "Il n’y a pas assez de bornes de recharge, surtout à la campagne.", "La fabrication des batteries pollue aussi."],
    vocab: [["le moteur thermique", "combustion engine"], ["la voiture électrique", "electric car"], ["la borne de recharge", "charging point"], ["la batterie", "battery"], ["la pollution", "pollution"], ["le réchauffement climatique", "global warming"], ["l’autonomie (f.)", "range"], ["les transports en commun", "public transport"]],
    amorce: "Je suis pour les voitures électriques, mais il faudrait que l’on installe beaucoup plus de bornes de recharge.",
    questions: ["Avez-vous une voiture ? Pourriez-vous passer à l’électrique ?", "Les transports en commun sont-ils une meilleure solution ?", "Qui doit payer cette transition, selon vous ?"] },
  { id: "fcc", title: "Le FCC (Futur collisionneur circulaire) du CERN", document: "Un article : « Le CERN étudie la construction d’un collisionneur de 91 kilomètres, le FCC ».",
    pour: ["Il permettrait de mieux comprendre le boson de Higgs et de chercher de nouvelles particules.", "Les technologies développées servent aussi à la médecine et à l’informatique.", "Le projet crée des emplois et renforce la coopération internationale."],
    contre: ["Il coûterait plusieurs milliards.", "Les travaux auraient un impact sur l’environnement et sur les habitants de la région.", "On n’est pas certain d’y découvrir quelque chose de nouveau."],
    vocab: [["le collisionneur", "collider"], ["la particule", "particle"], ["le tunnel", "tunnel"], ["le coût", "cost"], ["la recherche fondamentale", "basic research"], ["les retombées (f. pl.)", "spin-offs, benefits"], ["l’impact environnemental", "environmental impact"], ["les riverains", "local residents"]],
    amorce: "Ce qui me paraît essentiel, c’est la recherche fondamentale, même si je comprends qu’on trouve le coût trop élevé.",
    questions: ["Pensez-vous que l’argent public doive financer ce type de projet ?", "Comment expliqueriez-vous l’intérêt du FCC à quelqu’un qui n’est pas scientifique ?", "Que pourraient craindre les habitants de la région ?"] },
  { id: "generations", title: "Les générations au travail", document: "Un article : « Baby-boomers, génération Z : travailler ensemble, est-ce possible ? ».",
    pour: ["Les jeunes apportent des idées nouvelles et maîtrisent le numérique.", "Les plus âgés transmettent leur expérience.", "Travailler ensemble permet de s’enrichir mutuellement."],
    contre: ["Les valeurs et les méthodes de travail sont parfois très différentes.", "Les stéréotypes créent des conflits (« les jeunes sont paresseux »).", "Certains collègues ont du mal à s’adapter aux nouvelles technologies."],
    vocab: [["la génération", "generation"], ["les baby-boomers (1946–1964)", "baby boomers"], ["la génération X (1965–1979)", "Gen X"], ["la génération Y (1980–1994)", "Gen Y, millennials"], ["la génération Z (1995–2009)", "Gen Z"], ["la génération Alpha (2010–2024)", "Gen Alpha"], ["les rapports familiaux", "family relationships"], ["rapprocher / éloigner", "to bring closer / to push apart"], ["transmettre", "to pass on"], ["l’expérience (f.)", "experience"], ["le stéréotype", "stereotype"], ["les valeurs (f. pl.)", "values"], ["le conflit", "conflict"]],
    amorce: "Il me semble que chaque génération a quelque chose à apprendre aux autres, mais ce qui pose problème, c’est le manque de dialogue.",
    questions: ["À quelle génération appartenez-vous, et êtes-vous d’accord avec les caractéristiques qu’on lui donne ?", "Avez-vous déjà travaillé avec quelqu’un de beaucoup plus jeune ou plus âgé ?", "Que peut-on faire pour mieux se comprendre ?"] },
  { id: "cohabitation", title: "La cohabitation intergénérationnelle", document: "Un reportage : « Étudiants et seniors sous le même toit » (et le cas de Tanguy, 28 ans, toujours chez ses parents).",
    pour: ["Le loyer est moins cher pour l’étudiant.", "La personne âgée est moins seule et se sent en sécurité.", "On partage des expériences et on se rend des services."],
    contre: ["On perd son intimité et son indépendance.", "Les rythmes de vie sont parfois très différents.", "Des conflits sur les règles de la maison peuvent apparaître."],
    vocab: [["la cohabitation", "living together"], ["le loyer", "rent"], ["la solitude", "loneliness"], ["l’intimité (f.)", "privacy"], ["l’indépendance (f.)", "independence"], ["partager", "to share"], ["quitter le nid familial", "to leave the family nest"], ["cohabiter avec quelqu’un", "to live with someone"], ["vivre chez ses parents", "to live with one’s parents"], ["s’assumer", "to support oneself"], ["l’entraide (f.)", "mutual help"], ["rendre service", "to do a favour"]],
    amorce: "Je trouverais intéressant de vivre avec une personne âgée, parce que ce dont les étudiants ont besoin, c’est d’un logement pas trop cher.",
    questions: ["Avez-vous déjà vécu avec plusieurs générations sous le même toit ?", "À quel âge faut-il quitter la maison de ses parents, selon vous ?", "Comment est la situation dans votre pays ?"] },
  { id: "sieste", title: "Les horaires de travail et la sieste", document: "Un article : « La sieste au travail : des entreprises testent les horaires flexibles et les salles de repos ».",
    pour: ["Une petite sieste de vingt minutes améliore l’attention et la mémoire.", "Des horaires flexibles permettent de travailler quand on est le plus efficace.", "Les employés se sentent respectés et moins stressés."],
    contre: ["Certains patrons pensent qu’un employé qui dort ne travaille pas.", "Il est difficile d’installer une salle de repos dans une petite entreprise.", "Des horaires différents compliquent les réunions."],
    vocab: [["la sieste", "nap"], ["les horaires flexibles", "flexible hours"], ["la salle de repos", "break room, quiet room"], ["l’efficacité (f.)", "efficiency"], ["la pause déjeuner", "lunch break"], ["s’endormir", "to fall asleep"], ["être en forme", "to feel fit, to be in good shape"], ["le rythme", "rhythm"]],
    amorce: "Je trouve normal qu’on puisse se reposer quinze minutes après le déjeuner, mais il faudrait que cela ne gêne pas les collègues.",
    questions: ["À quelle heure êtes-vous le plus efficace ?", "Avez-vous déjà fait une sieste au travail ?", "Les horaires de votre pays vous conviennent-ils ?"] },
  { id: "portables", title: "Les téléphones portables à l’école", document: "Un article : « Faut-il interdire le téléphone portable à l’école ? ».",
    pour: ["Les élèves sont plus attentifs en classe.", "On évite le harcèlement en ligne et les photos non autorisées.", "Les enfants jouent et parlent entre eux à la récréation."],
    contre: ["Les parents veulent pouvoir joindre leur enfant en cas de problème.", "Le téléphone peut servir d’outil pédagogique (dictionnaire, recherches).", "Une interdiction est difficile à contrôler."],
    vocab: [["le téléphone portable", "mobile phone"], ["l’écran (m.)", "screen"], ["la récréation", "break (at school)"], ["interdire", "to ban"], ["la dépendance", "addiction"], ["la distraction", "distraction"], ["les réseaux sociaux", "social media"], ["la sécurité", "safety"]],
    amorce: "Je ne pense pas qu’il faille interdire complètement le portable, mais ce que je souhaiterais, c’est qu’on le range pendant les cours.",
    questions: ["À quel âge un enfant doit-il avoir un téléphone, selon vous ?", "Êtes-vous souvent sur votre téléphone ?", "Comment fait-on respecter une interdiction ?"] },
  { id: "ia", title: "L’intelligence artificielle au travail", document: "Un article : « L’intelligence artificielle au travail : un assistant ou une menace ? ».",
    pour: ["L’IA fait gagner du temps sur les tâches répétitives.", "Elle aide à traduire, à écrire et à chercher des informations.", "Elle aide les chercheurs à analyser beaucoup de données."],
    contre: ["Certains emplois pourraient disparaître.", "Les réponses de l’IA ne sont pas toujours correctes : il faut vérifier.", "Les données personnelles ne sont pas toujours protégées."],
    vocab: [["l’intelligence artificielle (f.)", "artificial intelligence"], ["une tâche", "task"], ["un emploi", "job"], ["vérifier", "to check"], ["les données (f. pl.)", "data"], ["se méfier de", "to be wary of"], ["un outil", "tool"], ["fiable", "reliable"]],
    amorce: "Je trouve que l’IA est un outil très utile, mais ce dont il faut se méfier, c’est de croire tout ce qu’elle dit.",
    questions: ["Utilisez-vous l’IA dans votre travail ? Pour quoi faire ?", "Pensez-vous que votre métier puisse disparaître ?", "Faut-il apprendre à utiliser l’IA à l’école ?"] }
];

const writingGuide = {
  types: [
    { id: "email", title: "Le courriel à un(e) ami(e)",
      consigne: "Votre ami Thomas vous écrit : son entreprise lui propose de travailler trois jours par semaine à la maison, et il hésite. Il vous demande ce que vous en pensez. Vous lui répondez en donnant votre opinion, des conseils et des exemples d’expériences (120–150 mots).",
      plan: [
        ["Introduction (2 phrases)", `<p>Salue, remercie et réagis à la nouvelle : <b>Merci pour ton message ! C’est une super nouvelle / Je comprends que tu hésites.</b></p>`],
        ["Développement (5–7 phrases)", `<p>Donne ton opinion (<b>je trouve que…</b>), un exemple vécu (<b>passé composé + imparfait + plus-que-parfait</b>), puis deux ou trois conseils (<b>tu devrais…, il faut que tu…</b>).</p>`],
        ["Conclusion (1–2 phrases)", `<p>Résume ton avis et encourage : <b>Bref, essaie !</b> Termine par une formule amicale : <b>Grosses bises, à très vite !</b></p>`]
      ],
      formules: [
        ["Commencer", ["Salut Thomas,", "Cher Thomas,", "Merci pour ton message !", "Ça m’a fait plaisir d’avoir de tes nouvelles."]],
        ["Terminer", ["À très vite !", "Grosses bises,", "Amicalement,", "Dis-moi ce que tu décides !", "Tiens-moi au courant !"]],
        ["Donner un conseil", ["À ta place, je + conditionnel", "Tu devrais + infinitif", "Il faudrait que tu + subjonctif", "Je te conseille de + infinitif", "Pourquoi tu n’essaies pas de… ?"]],
        ["Donner son opinion", ["Je trouve que…", "À mon avis,", "Selon moi,", "Je pense que… / Je ne pense pas que + subjonctif", "Ce qui compte, c’est…"]],
        ["Nuancer", ["Mais attention,", "Par contre,", "Cela dit,", "Même si c’est un peu difficile,", "Ça dépend de…"]]
      ],
      modele: `<p>Salut Thomas,</p><p>Merci pour ton message ! Je comprends que tu hésites, mais c’est une bonne nouvelle.</p><p>À ta place, j’<b>accepterais</b>. Je <b>trouve que</b> le télétravail est très pratique. L’année dernière, quand j’<b>ai commencé</b> à travailler deux jours à la maison, je <b>gagnais</b> une heure par jour, parce que je ne <b>prenais</b> plus le train. <b>Ce qui</b> m’a manqué, ce sont mes collègues. Au début, je <b>n’avais</b> pas <b>compris</b> qu’il fallait organiser mes journées. Je te conseille donc de fixer des horaires, et il faut <b>que tu aies</b> un coin tranquille chez toi. Tu <b>devrais</b> aussi aller au bureau un jour par semaine : c’est <b>ce dont</b> on a besoin pour ne pas se sentir seul.</p><p>Bref, essaie pendant trois mois ! Si ça ne te plaît pas, tu pourras toujours <b>en</b> parler à ton chef.</p><p>Grosses bises et à très vite,<br>Julie</p>`
    },
    { id: "opinion", title: "Le texte d’opinion structuré",
      consigne: "Quels commentaires vous inspire le thème des rapports entre les générations ? Qu’est-ce qui peut rapprocher ou éloigner les jeunes et les plus âgés ? Quelle est la situation dans votre pays ? Écrivez un texte structuré (120–150 mots).",
      plan: [
        ["Introduction (1–2 phrases)", `<p>Présente le thème et pose la question : <b>De nos jours, … ; on peut se demander si…</b></p>`],
        ["Développement (6–8 phrases)", `<p>Un paragraphe d’avantages (<b>d’abord, de plus</b>), un paragraphe d’inconvénients (<b>en revanche, cependant</b>), avec un exemple personnel ou de ton pays (<b>par exemple</b>).</p>`],
        ["Conclusion (2 phrases)", `<p>Donne ton opinion (<b>à mon avis</b>) et une proposition ou une hypothèse (<b>il faudrait que…, si on…, on pourrait…</b>).</p>`]
      ],
      formules: [
        ["Introduire le thème", ["De nos jours,", "Aujourd’hui, de plus en plus de…", "On entend souvent dire que…", "On peut se demander si…"]],
        ["Organiser les idées", ["D’abord,", "De plus,", "En revanche,", "Par exemple,", "Pour conclure,"]],
        ["Donner son opinion", ["À mon avis,", "Selon moi,", "Je trouve que…", "Je ne pense pas que + subjonctif", "En ce qui me concerne,"]],
        ["Nuancer", ["Cependant,", "Même si…", "Cela dépend de…", "Il faut aussi tenir compte de…"]],
        ["Proposer, faire une hypothèse", ["Il faudrait que + subjonctif", "On pourrait + infinitif", "Si + imparfait, conditionnel", "La meilleure solution serait de…"]]
      ],
      modele: `<p>De nos jours, les jeunes et les personnes âgées se parlent moins, et on peut se demander ce qui pourrait les rapprocher.</p><p>D’abord, la cohabitation rapproche les générations. Un étudiant qui <b>habite</b> chez une personne âgée paie moins cher, et celle-ci se sent moins seule. De plus, <b>ce que</b> les jeunes apprennent de leurs grands-parents, ils ne le trouvent pas sur Internet. En revanche, d’autres choses les éloignent : le numérique et le rythme de vie. Dans mon pays, beaucoup de jeunes quittent tôt la maison de leurs parents. Quand j’<b>étais</b> petit, mon grand-père <b>vivait</b> chez nous. Nous <b>nous disputions</b>, parce que personne n’<b>avait expliqué</b> les règles, mais j’<b>ai</b> <b>appris</b> beaucoup de choses.</p><p>À mon avis, <b>il faudrait que</b> les générations <b>se rencontrent</b> plus souvent. Je <b>ne pense pas que</b> la cohabitation <b>convienne</b> à tout le monde, mais <b>ce qui compte</b>, c’est le respect.</p>`
    }
  ],
  checklist: [
    ["Un subjonctif", `Je ne pense pas que ce <b>soit</b> possible. / Il faut que tu <b>aies</b> du temps.`],
    ["Un conditionnel", `À ta place, je <b>dirais</b> oui. / Il <b>faudrait</b> que…`],
    ["Un pronom relatif", `L’ami <b>dont</b> je te parle… / Le quartier <b>où</b> j’habite…`],
    ["Une mise en relief", `<b>Ce qui</b> me plaît, c’est… / <b>Ce dont</b> j’ai besoin, c’est de…`],
    ["Un pronom y, en ou un double pronom", `Tu devrais <b>en</b> parler. / Je <b>le lui</b> ai conseillé.`],
    ["Plusieurs temps du passé", `Quand j’<b>étais</b> étudiant, j’<b>ai travaillé</b> à Lyon. J’<b>avais</b> déjà <b>vécu</b> à Paris.`],
    ["Des connecteurs", `<b>D’abord</b>, <b>en revanche</b>, <b>par exemple</b>, <b>pour conclure</b>.`],
    ["Les accords", `Participe passé avec COD avant : la lettre que j’ai <b>écrite</b> ; elle est <b>partie</b>.`],
    ["Les auxiliaires", `Je <b>suis</b> allé(e), je me <b>suis</b> levé(e) ; mais j’<b>ai</b> pris, j’<b>ai</b> fini.`],
    ["Nombre de mots et structure", `120–150 mots : introduction, développement, conclusion. Relis une dernière fois : majuscules, accents, ponctuation.`]
  ],
  sujets: [
    { type: "email", consigne: "Une amie française, Claire, vous écrit : elle hésite à quitter son travail à Lyon pour travailler à Genève. Répondez-lui en donnant votre opinion, des conseils et un exemple personnel (120–150 mots)." },
    { type: "email", consigne: "Votre ami Hugo dort mal et ne se concentre plus l’après-midi au travail. Il vous demande ce que vous pensez de la sieste et des horaires flexibles. Répondez-lui avec des conseils (120–150 mots)." },
    { type: "email", consigne: "Un ami, Marc, vit encore chez ses parents à 29 ans. Il vous demande s’il doit déménager. Répondez-lui en donnant votre avis et des exemples d’expériences diverses (120–150 mots)." },
    { type: "email", consigne: "Votre amie Sarah hésite à acheter une voiture électrique. Elle vous demande votre avis. Répondez-lui avec des conseils et un exemple de votre expérience (120–150 mots)." },
    { type: "email", consigne: "Deux adultes d’âges différents veulent partager un logement. Écrivez à un ami pour présenter deux avantages, une difficulté et une règle de vie commune (120–150 mots)." },
    { type: "opinion", consigne: "Qu’est-ce qui rapproche ou éloigne les générations dans votre pays ? Écrivez un texte structuré avec une introduction, un développement et une conclusion (120–150 mots, comme le devoir 8)." },
    { type: "opinion", consigne: "Que pensez-vous de la semaine de quatre jours ? Quels avantages et inconvénients voyez-vous ? Écrivez un texte structuré (120–150 mots)." },
    { type: "opinion", consigne: "Faut-il interdire le téléphone portable à l’école ? Écrivez un texte structuré avec une introduction, des arguments et une conclusion (120–150 mots)." },
    { type: "opinion", consigne: "Le télétravail et le coworking : quelles sont les conséquences pour les employés et pour les entreprises ? Donnez votre opinion (120–150 mots)." },
    { type: "opinion", consigne: "Un grand projet scientifique, comme le FCC au CERN, justifie-t-il un coût très élevé ? Écrivez un texte structuré et donnez votre opinion (120–150 mots)." }
  ]
};

const extraQuestions = {
  pronoms: [
    ["J’appelle mes collègues. Remplace « mes collègues » par un pronom. Commence par : Je", "je les appelle", "Appeler quelqu’un : COD, donc les."],
    ["Je téléphone à Paul. Remplace « à Paul » par un pronom. Commence par : Je", "je lui téléphone", "Téléphoner à quelqu’un : COI, donc lui."],
    ["J’ai écrit la lettre. Remplace « la lettre » par un pronom. Commence par : Je", "je l’ai écrite|je l'ai écrite", "Le COD la lettre est avant le participe : écrite, accordé au féminin."],
    ["Je regarde la télé. Remplace « la télé » par un pronom et mets la phrase à la forme négative. Commence par : Je", "je ne la regarde pas", "Ne + pronom + verbe + pas."],
    ["Je pense à mon frère. Remplace « à mon frère » par un pronom tonique (personne). Commence par : Je pense", "je pense à lui", "Penser à + personne : à + pronom tonique."],
    ["Remets dans l’ordre en commençant par « Je » : lui / ai / téléphoné / hier / je", "je lui ai téléphoné hier", "Pronom devant l’auxiliaire ; hier à la fin."]
  ],
  yen: [
    ["Je vais à Genève demain. Remplace « à Genève » par un pronom. Commence par : J’", "j’y vais demain|j'y vais demain", "Aller à + lieu : y."],
    ["Je bois du café le matin. Remplace « du café » par un pronom. Commence par : J’", "j’en bois le matin|j'en bois le matin", "Du + nom : en."],
    ["J’ai trois frères. Remplace « frères » par un pronom et garde le chiffre. Commence par : J’", "j’en ai trois|j'en ai trois", "Avec un nombre, on garde le chiffre après en."],
    ["Réponds par « oui » avec y et en, sans répéter le nom : Il y a des places libres ?", "oui, il y en a|oui il y en a", "Y et en ensemble seulement dans il y en a."],
    ["Tu as du temps ? Réponds par « non » avec un pronom (n’écris pas « du temps »). Commence par : Non,", "non, je n’en ai pas|non je n’en ai pas|non, je n'en ai pas|non je n'en ai pas", "Négation : je n’en ai pas."],
    ["Nous avons parlé de ce projet. Remplace « de ce projet » par un pronom. Commence par : Nous", "nous en avons parlé", "Parler de + chose : en, avant l’auxiliaire."]
  ],
  doubles: [
    ["Elle prête sa voiture à son frère. Remplace les deux compléments par des pronoms. Commence par : Elle", "elle la lui prête", "COD (la) avant COI (lui) à la 3e personne."],
    ["Il offre des fleurs à sa mère. Remplace les deux compléments par des pronoms. Commence par : Il", "il lui en offre", "Des fleurs = en ; à sa mère = lui ; lui avant en."],
    ["Je t’ai donné les clés. Remplace « les clés » par un pronom. Commence par : Je", "je te les ai données", "Le COD les est avant le participe : données (féminin pluriel)."],
    ["Vous montrez votre badge au gardien. Remplace les deux compléments par des pronoms. Commence par : Vous", "vous le lui montrez", "Le badge = le ; au gardien = lui."],
    ["Remets dans l’ordre en commençant par « Je » : en / te / donne / je / deux (avec élision)", "je t’en donne deux|je t'en donne deux", "Te + en devient t’en devant la voyelle."],
    ["Il ne donne pas son numéro à ses clients. Remplace les deux compléments par des pronoms. Commence par : Il", "il ne le leur donne pas", "Ne + le + leur + verbe + pas."]
  ],
  relatifs: [
    ["Relie avec un pronom relatif (qui, que, dont, où) : J’ai un collègue. Il travaille à Genève. Commence par : J’ai un collègue", "j’ai un collègue qui travaille à genève|j'ai un collègue qui travaille à genève", "Qui est le sujet de travaille."],
    ["Relie avec un pronom relatif (qui, que, dont, où) : Voici le livre. Je t’ai parlé de ce livre. Commence par : Voici le livre", "voici le livre dont je t’ai parlé|voici le livre dont je t'ai parlé", "Parler de : dont."],
    ["Relie avec un pronom relatif (qui, que, dont, où) : C’est la ville. J’habite dans cette ville. Commence par : C’est la ville", "c’est la ville où j’habite|c'est la ville où j'habite|c’est la ville dans laquelle j’habite", "Où remplace un lieu."],
    ["Relie avec un pronom relatif (qui, que, dont, où) : Le film était long. Nous avons vu ce film hier. Commence par : Le film", "le film que nous avons vu hier était long", "Que remplace le COD (ce film)."],
    ["Relie avec un pronom relatif (qui, que, dont, où) : Le projet est intéressant. Je m’occupe de ce projet. Commence par : Le projet", "le projet dont je m’occupe est intéressant|le projet dont je m'occupe est intéressant", "S’occuper de : dont."],
    ["Relie avec un pronom relatif (qui, que, dont, où) : Les photos sont belles. J’ai pris ces photos à Rome. Commence par : Les photos", "les photos que j’ai prises à rome sont belles|les photos que j'ai prises à rome sont belles", "Le COD (que, reprenant photos) est avant le participe : prises."]
  ],
  relief: [
    ["Le calme me plaît ici. Mets en relief « le calme » avec la structure « Ce …, c’est … ».", "ce qui me plaît ici, c’est le calme|ce qui me plaît ici c’est le calme|ce qui me plaît ici, c'est le calme|ce qui me plaît ici c'est le calme", "Ce qui remplace le sujet."],
    ["J’aime la musique classique. Mets en relief « la musique classique » avec la structure « Ce …, c’est … ».", "ce que j’aime, c’est la musique classique|ce que j’aime c’est la musique classique|ce que j'aime, c'est la musique classique|ce que j'aime c'est la musique classique", "Ce que remplace le COD."],
    ["J’ai besoin de repos. Mets en relief « de repos » avec la structure « Ce …, c’est … ».", "ce dont j’ai besoin, c’est de repos|ce dont j’ai besoin c’est de repos|ce dont j’ai besoin, c’est du repos|ce dont j’ai besoin c’est du repos", "Avoir besoin de : ce dont. On peut garder « de » (c’est de repos) ou dire c’est du repos."],
    ["Marie a organisé la fête. Mets en relief « Marie » avec la structure « C’est … + pronom relatif ».", "c’est marie qui a organisé la fête|c'est marie qui a organisé la fête", "C’est + sujet + qui."],
    ["Je cherche ce livre. Mets en relief « ce livre » avec la structure « C’est … + pronom relatif ».", "c’est ce livre que je cherche|c'est ce livre que je cherche", "C’est + COD + que."],
    ["Je pense à mes vacances. Mets en relief « mes vacances » avec la structure « Ce …, c’est … ».", "ce à quoi je pense, c’est à mes vacances|ce à quoi je pense c’est à mes vacances|ce à quoi je pense, c’est mes vacances|ce à quoi je pense c’est mes vacances|ce à quoi je pense, ce sont mes vacances|ce à quoi je pense ce sont mes vacances", "Penser à quelque chose : ce à quoi. Comme dans le cours (Ce à quoi elle pense, c’est son avenir), le « à » après c’est est facultatif."]
  ],
  opinions: [
    ["Je crois qu’il vient. Mets à la forme négative. Commence par : Je ne crois pas", "je ne crois pas qu’il vienne|je ne crois pas qu'il vienne", "Je ne crois pas que + subjonctif."],
    ["Je pense que le télétravail est utile. Mets à la forme négative. Commence par : Je ne pense pas", "je ne pense pas que le télétravail soit utile", "Être au subjonctif : soit."],
    ["Je trouve que c’est normal. Mets à la forme négative. Commence par : Je ne trouve pas", "je ne trouve pas que ce soit normal", "C’est devient ce soit au subjonctif."],
    ["Je suis sûr que vous avez raison. Mets à la forme négative. Commence par : Je ne suis pas", "je ne suis pas sûr que vous ayez raison|je ne suis pas sûre que vous ayez raison", "Avoir au subjonctif : vous ayez."],
    ["Je pense que le projet est utile. Remplace « Je pense que » par une expression d’opinion sans « que », du type « … moi, ».", "selon moi, le projet est utile|selon moi le projet est utile|pour moi, le projet est utile|pour moi le projet est utile|d’après moi, le projet est utile|d’après moi le projet est utile|à mon avis, le projet est utile|à mon avis le projet est utile", "Selon moi + indicatif, sans que."],
    ["Je pense que tous les enfants ont besoin d’un téléphone portable. Mets à la forme négative. Commence par : Je ne pense pas", "je ne pense pas que tous les enfants aient besoin d’un téléphone portable|je ne pense pas que tous les enfants aient besoin d’un portable", "Je ne pense pas que + subjonctif : ils ont → qu’ils aient."]
  ],
  subjonctif: [
    ["Nous partons. Commence par : Il faut que nous", "il faut que nous partions", "Partir : nous partions."],
    ["Tu viens à la réunion. Commence par : Je veux que tu", "je veux que tu viennes à la réunion", "Venir : que tu viennes."],
    ["Vous faites vos devoirs. Commence par : Il faut que vous", "il faut que vous fassiez vos devoirs", "Faire : que vous fassiez."],
    ["Tu es ici. Commence par : Je suis content que tu", "je suis content que tu sois ici|je suis contente que tu sois ici", "Être : que tu sois."],
    ["Je vais au CERN. Commence par : Il est important que j’", "il est important que j’aille au cern|il est important que j'aille au cern", "Aller : que j’aille."],
    ["Relie avec « pour que » : J’explique lentement. Tu comprends. Commence par : J’explique", "j’explique lentement pour que tu comprennes|j'explique lentement pour que tu comprennes", "Pour que + subjonctif : que tu comprennes."]
  ],
  conditionnel: [
    ["Fais une pause. Transforme l’ordre en conseil poli avec le verbe devoir. Commence par : Tu", "tu devrais faire une pause", "Devoir au conditionnel + infinitif."],
    ["Parle plus lentement. Transforme l’ordre en conseil poli avec le verbe pouvoir. Commence par : Tu", "tu pourrais parler plus lentement", "Pouvoir au conditionnel + infinitif."],
    ["Repose-toi. Donne un conseil. Commence par : À ta place, je", "à ta place, je me reposerais|à ta place je me reposerais|à ta place, je me reposerais un peu|à ta place je me reposerais un peu", "Verbe pronominal : avec je, se devient me (je me reposerais)."],
    ["Je veux un café. Dis-le poliment, avec le même verbe.", "je voudrais un café|je voudrais un café, s’il vous plaît|je voudrais un café s’il vous plaît|je voudrais un café, s’il te plaît|je voudrais un café s’il te plaît", "Vouloir au conditionnel : voudrais."],
    ["Tu ne m’as pas prévenu. Fais un reproche avec le verbe devoir. Commence par : Tu", "tu aurais dû me prévenir|tu aurais pu me prévenir", "Reproche : conditionnel passé de devoir (ou pouvoir) + infinitif."],
    ["Ouvrez la fenêtre. Demande poliment avec le verbe pouvoir, sous forme de question avec inversion.", "pourriez-vous ouvrir la fenêtre|pourriez-vous ouvrir la fenêtre, s’il vous plaît|pourriez-vous ouvrir la fenêtre s’il vous plaît", "Pourriez-vous + infinitif."]
  ],
  choisir: [
    ["Je suis arrivé en retard. J’ai raté le train. Relie les phrases avec « parce que » et le plus-que-parfait. Commence par : Je suis arrivé en retard parce que", "je suis arrivé en retard parce que j’avais raté le train|je suis arrivé en retard parce que j'avais raté le train", "L’action antérieure (rater le train) est au plus-que-parfait."],
    ["Il était fatigué. Il n’a pas dormi. Relie avec « parce que » et le plus-que-parfait. Commence par : Il était fatigué parce qu’il", "il était fatigué parce qu’il n’avait pas dormi|il était fatigué parce qu'il n'avait pas dormi", "N’avait pas dormi : plus-que-parfait négatif."],
    ["Il pleut quand je sors. Mets au passé : le décor, puis l’action qui arrive. Commence par : Il", "il pleuvait quand je suis sorti|il pleuvait quand je suis sortie", "Le décor est à l’imparfait, l’action ponctuelle au passé composé."],
    ["Elle est partie du bureau. Elle a fini son travail avant. Relie avec « parce que ». Commence par : Elle est partie du bureau parce qu’elle", "elle est partie du bureau parce qu’elle avait fini son travail|elle est partie du bureau parce qu'elle avait fini son travail", "Avait fini : plus-que-parfait, action antérieure."],
    ["Quand je suis arrivé à la gare, le train est déjà parti. Mets la phrase au bon temps. Commence par : Quand je suis arrivé à la gare, le train", "quand je suis arrivé à la gare, le train était déjà parti|quand je suis arrivé à la gare le train était déjà parti", "Le train est parti avant mon arrivée : plus-que-parfait."],
    ["Écris au passé : Quand je suis petit, j’habite à Lyon. Commence par : Quand j’", "quand j’étais petit, j’habitais à lyon|quand j’étais petite, j’habitais à lyon|quand j’étais petit j’habitais à lyon|quand j’étais petite j’habitais à lyon", "Habitude ou situation passée : imparfait."]
  ],
  pqp: [
    ["Il a fini avant mon arrivée. Mets au plus-que-parfait. Commence par : Il", "il avait fini avant mon arrivée", "Avoir à l’imparfait + participe."],
    ["Elle est sortie quand j’ai appelé. Exprime l’antériorité avec « déjà ». Commence par : Quand j’ai appelé, elle", "quand j’ai appelé, elle était déjà sortie|quand j’ai appelé elle était déjà sortie", "Être à l’imparfait + sortie, accord avec elle."],
    ["Nous nous sommes rencontrés à Genève. Mets au plus-que-parfait. Commence par : Nous nous", "nous nous étions rencontrés à genève|nous nous étions rencontrées à genève", "Verbe pronominal : être à l’imparfait + participe."],
    ["J’ai écrit la lettre. Mets au plus-que-parfait et remplace « la lettre » par un pronom. Commence par : Je", "je l’avais écrite|je l'avais écrite", "Le COD la est avant le participe : écrite."],
    ["Je n’ai pas réussi l’examen. Je n’ai pas révisé. Relie avec « parce que » et le plus-que-parfait. Commence par : Je n’ai pas réussi l’examen parce que", "je n’ai pas réussi l’examen parce que je n’avais pas révisé|je n'ai pas réussi l'examen parce que je n'avais pas révisé", "Cause antérieure : plus-que-parfait."],
    ["Avant de venir au CERN, je ne travaille jamais à l’étranger. Mets au plus-que-parfait. Commence par : Avant de venir au CERN, je", "avant de venir au cern, je n’avais jamais travaillé à l’étranger|avant de venir au cern je n’avais jamais travaillé à l’étranger", "N’avais jamais travaillé : plus-que-parfait négatif."]
  ],
  adverbes: [
    ["Il attend avec patience. Remplace « avec patience » par un adverbe en -ment. Commence par : Il attend", "il attend patiemment", "Patient → patiemment."],
    ["Elle travaille d’une manière rapide. Remplace « d’une manière rapide » par un adverbe en -ment. Commence par : Elle travaille", "elle travaille rapidement", "Rapide + ment."],
    ["Elle s’habille avec élégance. Remplace « avec élégance » par un adverbe en -ment. Commence par : Elle s’habille", "elle s’habille élégamment|elle s'habille élégamment", "Élégant → élégamment."],
    ["Le bruit augmente de manière constante. Remplace « de manière constante » par un adverbe en -ment. Commence par : Le bruit augmente", "le bruit augmente constamment", "Constant → constamment."],
    ["Il vient d’une manière fréquente. Remplace « d’une manière fréquente » par un adverbe en -ment. Commence par : Il vient", "il vient fréquemment", "Fréquent → fréquemment."],
    ["Elle parle d’une manière claire. Remplace « d’une manière claire » par un adverbe en -ment. Commence par : Elle parle", "elle parle clairement", "Clair + e + ment."]
  ]
};

const recits = [
  { id: "panne", title: "La panne de tram", intro: "Léa travaille dans un bureau au centre-ville et prend le tram tous les jours.",
    items: [
      ["Ce matin-là, il ___ (pleuvoir) très fort et le ciel était tout gris.", "pleuvait", "Description du décor : imparfait."],
      ["Depuis deux ans, Léa ___ (prendre) chaque matin le tram de 7 h 40, et il était presque toujours à l’heure.", "prenait", "Habitude dans le passé (chaque matin) : imparfait."],
      ["Mais ce jour-là, le tram ___ (s’arrêter) brusquement entre deux stations.", "s’est arrêté|s'est arrêté", "Action soudaine et unique (ce jour-là, brusquement) : passé composé ; verbe pronominal avec être."],
      ["Le conducteur a annoncé qu’un camion ___ (tomber) en panne sur les rails quelques minutes plus tôt.", "était tombé", "Action antérieure à l’annonce (quelques minutes plus tôt) : plus-que-parfait avec être."],
      ["Les passagers ___ (rester) bloqués pendant quarante minutes, puis ils ont enfin pu descendre.", "sont restés", "Durée limitée et terminée : « pendant » n’impose pas l’imparfait ; passé composé avec être, accord au masculin pluriel."],
      ["Finalement, Léa ___ (arriver) au bureau avec une heure de retard.", "est arrivée", "Action terminée qui fait avancer le récit : passé composé avec être, accord au féminin."],
      ["Elle était trempée, car elle ___ (ne pas prendre) son parapluie en quittant la maison.", "n’avait pas pris|n'avait pas pris", "Cause antérieure au moment raconté : plus-que-parfait ; la négation encadre l’auxiliaire."]
    ] },
  { id: "entretien", title: "L’entretien d’embauche", intro: "Karim cherche un poste d’ingénieur à Genève et raconte son premier entretien.",
    items: [
      ["Le jour de l’entretien, Karim ___ (être) très nerveux et il avait mal au ventre.", "était", "État physique et moral, description : imparfait."],
      ["Heureusement, il ___ (préparer) ses réponses avec une amie le week-end précédent.", "avait préparé", "Action antérieure au jour de l’entretien (le week-end précédent) : plus-que-parfait."],
      ["Il ___ (arriver) dans le hall à 9 h 50, dix minutes avant l’heure prévue.", "est arrivé", "Action ponctuelle et datée : passé composé avec être."],
      ["Il ___ (relire) son CV dans la salle d’attente quand une femme l’a appelé.", "relisait", "Action en cours, interrompue par une autre (quand… a appelé) : imparfait."],
      ["Elle ___ (se présenter) : c’était la directrice des ressources humaines.", "s’est présentée|s'est présentée", "Action unique qui fait avancer le récit : passé composé ; verbe pronominal, accord au féminin."],
      ["L’entretien ___ (durer) une heure, puis la directrice l’a raccompagné jusqu’à la porte.", "a duré", "Durée limitée et terminée, suivie d’une autre action (puis) : passé composé."],
      ["En rentrant chez lui, Karim pensait qu’il ___ (bien répondre) à toutes les questions.", "avait bien répondu", "Action antérieure à « pensait » : plus-que-parfait ; l’adverbe se place entre l’auxiliaire et le participe."]
    ] },
  { id: "cern", title: "Premier jour au CERN", intro: "Marta est physicienne et vient de commencer un contrat au CERN.",
    items: [
      ["Le lundi 3 mars, Marta ___ (se lever) à six heures, bien avant son réveil.", "s’est levée|s'est levée", "Action unique et datée : passé composé ; verbe pronominal, accord au féminin."],
      ["Elle ne connaissait personne à Genève, car elle ___ (arriver) de Madrid seulement deux jours plus tôt.", "était arrivée", "Action antérieure au moment raconté (deux jours plus tôt) : plus-que-parfait avec être, accord au féminin."],
      ["À l’accueil, il y ___ (avoir) une longue file de nouveaux arrivants qui attendaient leur badge.", "avait", "Description de la scène : imparfait."],
      ["Marta ___ (attendre) pendant une heure et demie, puis elle a enfin reçu son badge.", "a attendu", "Durée limitée et terminée : « pendant » n’impose pas l’imparfait ; passé composé."],
      ["Vers midi, son responsable ___ (venir) la chercher pour déjeuner.", "est venu", "Action ponctuelle qui fait avancer le récit : passé composé avec être."],
      ["Le restaurant ___ (être) plein et tout le monde parlait anglais ou français.", "était", "Description du décor : imparfait."],
      ["Après le déjeuner, elle n’a pas pu entrer dans son bâtiment : elle ___ (laisser) son badge sur la table du restaurant.", "avait laissé", "Cause antérieure à « n’a pas pu entrer » : plus-que-parfait."]
    ] },
  { id: "demenagement", title: "Un déménagement à Lisbonne", intro: "Julie et sa sœur Inès vivent maintenant à Lisbonne et racontent leur arrivée.",
    items: [
      ["En janvier, Julie a trouvé un poste à Lisbonne, une ville où elle ___ (passer) des vacances trois ans plus tôt.", "avait passé", "Action antérieure à « a trouvé » (trois ans plus tôt) : plus-que-parfait."],
      ["Sans hésiter, sa sœur Inès ___ (décider) de partir avec elle.", "a décidé", "Décision ponctuelle : passé composé."],
      ["Les deux sœurs ___ (partir) de Lille le 1er avril, avec seulement quatre valises.", "sont parties", "Action datée et terminée : passé composé avec être, accord au féminin pluriel."],
      ["Quand elles sont arrivées devant leur nouvel immeuble, il ___ (faire) déjà nuit et la rue était vide.", "faisait", "Description du décor au moment de l’arrivée : imparfait."],
      ["Mais il y avait un problème : la veille, le propriétaire ___ (ne pas déposer) les clés chez la voisine.", "n’avait pas déposé|n'avait pas déposé", "Action antérieure au moment raconté (la veille) : plus-que-parfait ; la négation encadre l’auxiliaire."],
      ["Finalement, elles ___ (s’installer) pour la nuit dans un petit hôtel du quartier.", "se sont installées", "Action terminée qui conclut l’épisode : passé composé ; verbe pronominal, accord au féminin pluriel."],
      ["Le lendemain, Inès a écrit à sa mère : « Hier, nous ___ (être) très fatiguées, mais aujourd’hui tout va bien ! »", "étions", "État passager (fatigue) : imparfait, même avec « hier »."]
    ] }
];

const lectures = [
  { id: "coworking", title: "Travailler ailleurs qu’au bureau", type: "article",
    texte: `<p>Depuis quelques années, de plus en plus de salariés travaillent à distance. À Lyon, un espace de coworking a ouvert l’an dernier près de la gare. On peut y louer un bureau à la journée ou au mois. La plupart des clients viennent de petites entreprises qui n’ont pas de locaux.</p><p>Selon la directrice, Sandrine Morel, le but n’est pas seulement de louer des postes de travail. « Il faut que les gens se rencontrent, sinon ils se sentent seuls chez eux », explique-t-elle. Elle y organise un petit-déjeuner chaque vendredi, et certains clients y ont même trouvé de nouveaux collaborateurs. Pourtant, le prix reste un problème : beaucoup de travailleurs indépendants le trouvent trop élevé, alors ils préfèrent rester dans un café.</p>`,
    lexique: [["à distance", "remotely"], ["des locaux", "premises, offices"], ["un poste de travail", "a workstation, a desk"], ["un collaborateur", "a colleague, a work partner"], ["un travailleur indépendant", "a freelancer"], ["élevé", "high"]],
    questions: [
      ["On peut louer un bureau pour une seule journée.", "Vrai", "« On peut y louer un bureau à la journée ou au mois. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Sandrine Morel a créé l’espace de coworking avec deux amis.", "On ne sait pas", "Le texte dit seulement qu’elle est la directrice ; il ne parle pas de la création de l’espace.", ["Vrai", "Faux", "On ne sait pas"]],
      ["Pourquoi la directrice organise-t-elle un petit-déjeuner chaque vendredi ?", "Pour que les clients se rencontrent", "« Il faut que les gens se rencontrent, sinon ils se sentent seuls chez eux. »", ["Pour faire de la publicité", "Pour que les clients se rencontrent", "Pour baisser les prix"]],
      ["Dans « Elle y organise un petit-déjeuner », « y » remplace…", "dans l’espace de coworking", "Le paragraphe parle de l’espace dirigé par Sandrine Morel : « y » = dans cet espace.", ["dans un café", "chez les clients", "dans l’espace de coworking"]],
      ["Quel problème le texte mentionne-t-il à la fin ?", "Le prix est trop élevé pour beaucoup de gens", "« Le prix reste un problème : beaucoup de travailleurs indépendants le trouvent trop élevé. »", ["Il n’y a pas assez de places", "Le prix est trop élevé pour beaucoup de gens", "L’espace est trop loin de la gare"]]
    ] },
  { id: "entretien", title: "Mon entretien à Bordeaux", type: "courriel",
    texte: `<p>Salut Hugo,</p><p>Tu ne devineras jamais ce qui m’est arrivé ! Jeudi, j’avais un entretien d’embauche dans une agence de voyages à Bordeaux. J’avais préparé mes réponses toute la semaine, mais le matin, mon train est tombé en panne et je suis arrivée avec quarante minutes de retard. J’étais très stressée. Heureusement, la directrice m’a attendue et elle m’a même offert un café. Finalement, l’entretien s’est bien passé.</p><p>Elle m’a dit qu’elle me donnerait une réponse lundi. Il faut que je sois patiente ! Si je suis prise, je déménagerai en janvier. Et toi, ça va ? Tu devrais m’appeler ce week-end, j’ai envie d’avoir de tes nouvelles.</p><p>Bises, Clara</p>`,
    lexique: [["un entretien d’embauche", "a job interview"], ["tomber en panne", "to break down"], ["heureusement", "luckily"], ["être pris(e)", "to get the job (informal)"], ["déménager", "to move house"]],
    questions: [
      ["Clara est arrivée en retard à son entretien.", "Vrai", "« Je suis arrivée avec quarante minutes de retard. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Clara connaît déjà la réponse de l’agence.", "Faux", "« Elle m’a dit qu’elle me donnerait une réponse lundi. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Pourquoi Clara a-t-elle eu du retard ?", "Son train est tombé en panne", "« Mon train est tombé en panne. »", ["Elle avait mal préparé l’entretien", "Elle s’est trompée d’adresse", "Son train est tombé en panne"]],
      ["Dans « Si je suis prise », l’expression veut dire…", "si l’agence m’embauche", "Après un entretien d’embauche, « être prise » signifie obtenir le poste ; elle déménagerait alors en janvier.", ["si l’agence m’embauche", "si je suis occupée", "si je suis en retard"]],
      ["Pourquoi Clara écrit-elle ce courriel à Hugo ?", "Pour lui raconter son entretien", "Elle commence par « Tu ne devineras jamais ce qui m’est arrivé ! » et raconte son entretien.", ["Pour lui demander un emploi", "Pour lui raconter son entretien", "Pour annuler un rendez-vous"]]
    ] },
  { id: "accueil", title: "Assistant(e) d’accueil international(e)", type: "annonce",
    texte: `<p>Notre centre de recherche, situé près de Genève, accueille chaque année des milliers de scientifiques venus de plus de cinquante pays. Pour aider ces visiteurs, nous recherchons un(e) assistant(e) d’accueil. Vous recevrez les nouveaux arrivants, vous leur expliquerez comment louer un logement et vous les aiderez à remplir leurs papiers.</p><p>Nous souhaitons que vous parliez couramment français et anglais ; une troisième langue serait un plus. Vous travaillerez du lundi au vendredi, de 8 h 30 à 17 h, avec la possibilité de faire du télétravail un jour par semaine. Le poste est à pourvoir dès le 1er mars.</p><p>Pour postuler, envoyez-nous votre CV et une lettre de motivation avant le 15 janvier. Si vous avez déjà travaillé dans un milieu international, n’hésitez pas à nous le dire.</p>`,
    lexique: [["un centre de recherche", "a research centre"], ["les nouveaux arrivants", "newcomers"], ["couramment", "fluently"], ["le télétravail", "remote work"], ["à pourvoir", "to be filled (job)"], ["postuler", "to apply"]],
    questions: [
      ["Le télétravail est impossible pour ce poste.", "Faux", "« Avec la possibilité de faire du télétravail un jour par semaine. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Le contrat proposé est un contrat à durée indéterminée.", "On ne sait pas", "L’annonce ne précise pas le type de contrat, seulement que le poste est à pourvoir dès le 1er mars.", ["Vrai", "Faux", "On ne sait pas"]],
      ["Avant quelle date faut-il envoyer sa candidature ?", "Avant le 15 janvier", "« Envoyez-nous votre CV et une lettre de motivation avant le 15 janvier. »", ["Avant le 1er mars", "Avant le 15 janvier", "Avant le 1er février"]],
      ["Dans « vous leur expliquerez comment louer un logement », « leur » remplace…", "les nouveaux arrivants", "La phrase précédente : « Vous recevrez les nouveaux arrivants, vous leur expliquerez… »", ["les directeurs du centre", "les nouveaux arrivants", "les futurs collègues"]],
      ["Quel est le travail principal de la personne recherchée ?", "Aider les scientifiques étrangers à s’installer", "« Pour aider ces visiteurs, nous recherchons un(e) assistant(e) d’accueil. »", ["Faire de la recherche scientifique", "Enseigner les langues", "Aider les scientifiques étrangers à s’installer"]]
    ] },
  { id: "boulanger", title: "De comptable à boulanger", type: "témoignage",
    texte: `<p>« Pendant douze ans, j’ai travaillé comme comptable dans une grande banque à Lille. Mon salaire était bon, mais je m’ennuyais. Un jour, mon voisin, qui avait une boulangerie, m’a proposé de l’aider le samedi. J’y suis allé par curiosité et j’ai adoré l’odeur du pain chaud. Alors, j’ai décidé de tout changer.</p><p>Ma femme trouvait que c’était risqué, mais elle m’a soutenu. J’ai suivi une formation d’un an, puis j’ai ouvert ma propre boutique il y a trois ans. Je me lève à quatre heures du matin, c’est dur ! Pourtant, je ne regrette rien. Je gagne moins qu’avant, mais je suis plus heureux. Je conseille à tous ceux qui s’ennuient de ne pas attendre trop longtemps. » (Karim, 38 ans)</p>`,
    lexique: [["un comptable", "an accountant"], ["s’ennuyer", "to be bored"], ["risqué", "risky"], ["soutenir", "to support"], ["une formation", "training course"], ["regretter", "to regret"]],
    questions: [
      ["Karim gagne moins d’argent qu’avant.", "Vrai", "« Je gagne moins qu’avant, mais je suis plus heureux. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Sa femme l’a empêché de changer de métier.", "Faux", "« Ma femme trouvait que c’était risqué, mais elle m’a soutenu. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Pourquoi Karim a-t-il changé de métier ?", "Il s’ennuyait dans son travail", "« Mon salaire était bon, mais je m’ennuyais. »", ["Il avait perdu son emploi", "Son salaire était trop bas", "Il s’ennuyait dans son travail"]],
      ["Dans « J’y suis allé par curiosité », « y » remplace…", "à la boulangerie du voisin", "Le voisin « avait une boulangerie » et lui a proposé de l’aider : il y est allé.", ["à la banque", "à la boulangerie du voisin", "à la formation"]],
      ["Quel conseil Karim donne-t-il à la fin ?", "Ne pas attendre trop longtemps pour changer", "« Je conseille à tous ceux qui s’ennuient de ne pas attendre trop longtemps. »", ["Rester dans sa banque", "Ne pas attendre trop longtemps pour changer", "Toujours demander l’avis de sa famille"]]
    ] },
  { id: "colocation", title: "Une étudiante à la maison", type: "témoignage",
    texte: `<p>« Depuis septembre, j’héberge une étudiante, Lina, dans la chambre de mon fils, qui est parti à Montréal il y a dix ans. Mon mari est décédé en 2019 et la maison me semblait trop grande. Quand j’ai vu une annonce dans le journal, j’ai téléphoné tout de suite.</p><p>Lina ne paie pas de loyer : en échange, elle rentre avant 20 h et elle m’aide pour les courses. Au début, j’avais peur qu’on n’ait rien à se dire. En fait, nous parlons beaucoup ! Elle m’a appris à utiliser mon téléphone et moi, je lui prépare des plats de mon enfance. Je trouve dommage que les jeunes et les personnes âgées vivent si séparés. Il faut qu’on se connaisse mieux. » (Odette, 72 ans)</p>`,
    lexique: [["héberger", "to put someone up, to host"], ["décédé", "deceased"], ["un loyer", "rent"], ["en échange", "in exchange"], ["les courses", "the shopping, errands"], ["les personnes âgées", "elderly people"]],
    questions: [
      ["Lina ne paie pas de loyer.", "Vrai", "« Lina ne paie pas de loyer : en échange, elle rentre avant 20 h. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Lina étudie la médecine.", "On ne sait pas", "Le texte dit seulement que Lina est étudiante, sans préciser ses études.", ["Vrai", "Faux", "On ne sait pas"]],
      ["Pourquoi Odette a-t-elle décidé d’héberger une étudiante ?", "Sa maison lui semblait trop grande", "« Mon mari est décédé en 2019 et la maison me semblait trop grande. »", ["Elle avait besoin d’argent", "Son fils le lui avait demandé", "Sa maison lui semblait trop grande"]],
      ["Dans « je lui prépare des plats », « lui » remplace…", "Lina", "Odette parle de Lina : « Elle m’a appris à utiliser mon téléphone et moi, je lui prépare… »", ["son fils", "Lina", "sa voisine"]],
      ["Que pense Odette de la vie entre générations ?", "Les jeunes et les âgés devraient mieux se connaître", "« Je trouve dommage que les jeunes et les personnes âgées vivent si séparés. Il faut qu’on se connaisse mieux. »", ["Les jeunes et les âgés devraient mieux se connaître", "Les jeunes ne s’intéressent pas aux autres", "Il vaut mieux vivre seul"]]
    ] },
  { id: "biscuiterie", title: "Cent ans de biscuits", type: "article",
    texte: `<p>En 1921, Marcel Lefèvre, un pâtissier de Nantes, a vendu ses premiers biscuits sur le marché. Avant cela, il avait travaillé pendant dix ans dans une usine, où il avait appris le métier. Son idée était simple : fabriquer des gâteaux secs que les gens pouvaient emporter facilement en voyage. Le succès est arrivé vite, car les familles partaient de plus en plus en vacances. Dans les années 1960, l’entreprise employait déjà trois cents personnes et elle exportait en Belgique.</p><p>Aujourd’hui, la direction est assurée par sa petite-fille, Anne, qui souhaite que l’usine reste à Nantes. Elle veut aussi réduire les emballages en plastique. « Mon grand-père serait fier de voir ça, mais il faudrait que nous allions plus vite », dit-elle. Selon elle, la tradition ne doit pas empêcher l’innovation.</p>`,
    lexique: [["un pâtissier", "a pastry chef"], ["un gâteau sec", "a biscuit, a cookie"], ["emporter", "to take along"], ["exporter", "to export"], ["un emballage", "packaging"], ["la direction", "management"]],
    questions: [
      ["Marcel Lefèvre n’avait jamais travaillé avant de vendre ses biscuits.", "Faux", "« Avant cela, il avait travaillé pendant dix ans dans une usine. »", ["Vrai", "Faux", "On ne sait pas"]],
      ["Aujourd’hui, l’entreprise exporte ses biscuits dans plus de dix pays.", "On ne sait pas", "Le texte ne parle d’exportation que pour les années 1960 (« elle exportait en Belgique »).", ["Vrai", "Faux", "On ne sait pas"]],
      ["Qui dirige l’entreprise aujourd’hui ?", "La petite-fille du fondateur", "« La direction est assurée par sa petite-fille, Anne. »", ["Le fils du fondateur", "La petite-fille du fondateur", "Un groupe étranger"]],
      ["Dans « Avant cela, il avait travaillé… », « cela » désigne…", "la vente des premiers biscuits en 1921", "La phrase précédente : « Marcel Lefèvre a vendu ses premiers biscuits sur le marché. »", ["l’ouverture de l’usine à Nantes", "la vente des premiers biscuits en 1921", "l’arrivée de sa petite-fille"]],
      ["Quelle est l’opinion d’Anne ?", "La tradition et l’innovation peuvent aller ensemble", "« La tradition ne doit pas empêcher l’innovation. »", ["Il faut oublier la tradition", "La tradition et l’innovation peuvent aller ensemble", "Il faut déménager l’usine"]]
    ] }
];
