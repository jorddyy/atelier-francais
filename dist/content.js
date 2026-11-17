// Extend this catalogue with new modules. Stable ids preserve deep links.
const modules = [
{id:'present',n:'01',title:'Le présent',subtitle:'Formation et verbes fréquents',lessons:[1,3],tag:'Conjugaison',color:'teal',intro:'Parler de maintenant, de ses habitudes et de faits généraux.',sections:[
['Trois modèles utiles',`<table><tr><th></th><th>parler</th><th>finir</th><th>attendre</th></tr><tr><td>je / j’</td><td>parle</td><td>finis</td><td>attends</td></tr><tr><td>tu</td><td>parles</td><td>finis</td><td>attends</td></tr><tr><td>il / elle / on</td><td>parle</td><td>finit</td><td>attend</td></tr><tr><td>nous</td><td>parlons</td><td>finissons</td><td>attendons</td></tr><tr><td>vous</td><td>parlez</td><td>finissez</td><td>attendez</td></tr><tr><td>ils / elles</td><td>parlent</td><td>finissent</td><td>attendent</td></tr></table><p>Le modèle <b>finir</b> s’applique aux verbes en -ir qui font -issons avec nous. Il ne s’applique pas à venir ou courir.</p>`],
['Les irréguliers à revoir',`<p><b>être, avoir, aller, faire</b>, puis pouvoir, vouloir, devoir, savoir, prendre et venir. Retrouve les 27 verbes de la fiche du cours dans le <a href="#verbes">répertoire des verbes</a>.</p><div class="example">Vous <b>faites</b> une expérience. Vous <b>dites</b> bonjour.<br>Ils <b>prennent</b> le tram, puis ils <b>viennent</b> au bureau.</div><p>Attention aux changements de radical : nous <b>buvons</b> / ils <b>boivent</b> ; nous <b>recevons</b> / je <b>reçois</b>.</p>`],
['Habitudes, durée et orthographe',`<div class="example">Je travaille au CERN <b>depuis</b> juin.<br>Nous <b>mangeons</b> ensemble le vendredi.<br>Je <b>m’appelle</b> Léa ; nous <b>nous appelons</b> souvent.</div><p>Une situation commencée dans le passé et encore vraie s’exprime souvent au présent avec depuis. Pour une profession sans précision supplémentaire : <b>je suis chercheur</b>, sans article.</p>`]],en:'Use the present for ongoing situations with <span class="fr" lang="fr">depuis</span>. Not all verbs ending in <span class="fr" lang="fr">-ir</span> follow <span class="fr" lang="fr">finir</span>.',source:'Cours 1 · verbes_frequents_indicatif_present.pdf, p. 1 ; Cours 3 · PARLER DE SON PARCOURS ACADÉMIQUE ET PROFESSIONNEL.docx',q:[['Nous ___ (faire) une pause.','faisons','Faire : nous faisons, vous faites, ils font.'],['Je ___ (travailler) ici depuis deux ans.','travaille','La situation continue maintenant : présent.'],['Vous ___ (dire) souvent cela.','dites','La forme est vous dites.']]},
{id:'pc',n:'02',title:'Le passé composé',subtitle:'Les événements du récit',lessons:[1,2,3,6],tag:'Temps du passé',color:'terra',intro:'Présenter un événement ou une période comme un tout achevé.',sections:[
['Construire le passé composé',`<div class="formula">avoir / être au présent <span>+</span> participe passé</div><div class="example">J’<b>ai travaillé</b>. Elle <b>est venue</b>. Nous <b>avons compris</b>.</div><p>Verbes en -er → -é ; finir → fini ; attendre → attendu. Les autres participes sont à apprendre : faire → fait, prendre → pris, voir → vu, écrire → écrit.</p>`],
['Avoir ou être ?',`<p>La plupart des verbes utilisent <b>avoir</b>. Un groupe de verbes utilise <b>être</b> : aller, venir, arriver, partir, entrer, sortir, monter, descendre, retourner, rentrer, passer, naître, mourir, rester, tomber, ainsi que des dérivés comme revenir ou devenir. Les verbes pronominaux utilisent aussi être.</p><div class="example">Elle <b>est sortie</b> du bureau.<br>Elle <b>a sorti</b> son ordinateur de son sac.</div><p>Le sens et la construction comptent : certains verbes comme sortir, monter, descendre ou passer utilisent avoir avec un complément direct : <b>il est descendu du train</b>, mais <b>il a descendu la poubelle</b>. « Verbe de mouvement = être » est faux : <b>j’ai couru</b>, <b>j’ai marché</b>.</p>`],
['Les accords essentiels',`<p>Avec être, pour les verbes non pronominaux, le participe s’accorde avec le sujet : <b>elle est arrivée ; ils sont partis ; elles sont venues</b>.</p><p>Avec avoir, pas d’accord avec le sujet : <b>elles ont travaillé</b>. Un COD placé avant entraîne un accord : <b>les lettres que j’ai écrites</b>. La même règle vaut au plus-que-parfait (cours 8) : <b>les notes que j’avais prises</b>.</p><details><summary>Précision : les verbes pronominaux</summary><p>L’accord dépend de la fonction du pronom : elle s’est levée, mais elles se sont parlé (parler à quelqu’un) et elle s’est lavé les mains. Retiens surtout : être n’entraîne pas un accord automatique.</p></details>`],
['Accord avec un pronom COD',`<div class="example">Léa ? Je <b>l’</b>ai <b>vue</b> hier.<br>Les clés ? Je <b>les</b> ai <b>trouvées</b>.<br>Les notes ? Je <b>les</b> ai <b>prises</b>.<br>Les clients ? Je <b>les</b> ai <b>vus</b>.</div><p>Avec avoir, le participe s’accorde avec le COD placé <b>avant</b> : le, la, l’, les. Me, te, nous, vous entraînent l’accord seulement s’ils sont COD : <b>il nous a invités</b>, mais <b>il nous a parlé</b>. Remplace le pronom par le nom pour trouver le genre et le nombre. Avec <b>lui</b>, <b>leur</b> (COI) et <b>en</b>, il n’y a pas d’accord : <b>je leur ai parlé ; j’en ai pris</b>. Voir aussi <a href="#pronoms">COD ou COI ?</a>.</p>`],
['Négation et durée',`<div class="example">Je <b>n’ai pas compris</b>.<br>Il <b>a travaillé</b> dix ans à Lausanne, puis il a déménagé.</div><p>Une action longue peut être au passé composé. Ce qui compte est la manière de la présenter, pas sa durée.</p>`]],en:'The passé composé presents an event as a completed whole. It is not restricted to short actions. Most verbs take <span class="fr" lang="fr">avoir</span>.',source:'Cours 1 · Le passé composé RAPPEL.docx ; Cours 3 · PC vs IMP.docx ; Cours 8 · LE PLUS QUE PARFAIT.docx (image intégrée). Les exceptions des verbes pronominaux sont un complément de référence.',q:[['Hier, elles ___ (venir) à Genève.','sont venues','Venir utilise être ; accord au féminin pluriel.'],['Nous ___ (faire) une randonnée samedi dernier.','avons fait','Faire → fait, avec avoir.'],['Tes clés ? Je les ai ___ (trouver) sur le bureau.','trouvées','Le COD les est placé avant : accord au féminin pluriel.'],['Léa ? Je l’ai ___ (voir) hier.','vue','Le COD l’ = Léa : accord au féminin.'],['Mes collègues ? Je leur ai ___ (téléphoner) hier.','téléphoné','Leur est un COI : pas d’accord.'],['Elle ___ (sortir) son téléphone de son sac.','a sorti','Sortir quelque chose : auxiliaire avoir.']]},
{id:'imparfait',n:'03',title:'L’imparfait',subtitle:'Le décor, les habitudes, la situation',lessons:[2,3,6],tag:'Temps du passé',color:'blue',intro:'Montrer ce qui se passait, comment c’était ou ce qu’on faisait habituellement.',sections:[
['Une formation très régulière',`<div class="formula">nous au présent − ons <span>+</span> ais · ais · ait · ions · iez · aient</div><table><tr><th>Présent</th><th>Radical</th><th>Imparfait</th></tr><tr><td>nous prenons</td><td>pren-</td><td>je prenais</td></tr><tr><td>nous finissons</td><td>finiss-</td><td>nous finissions</td></tr><tr><td>nous buvons</td><td>buv-</td><td>ils buvaient</td></tr></table><p><b>Être</b> est l’exception : j’étais, tu étais, il était, nous étions, vous étiez, ils étaient.</p>`],
['Trois usages dans un récit',`<div class="example"><b>Description :</b> Il faisait froid et le bureau était vide.<br><b>Habitude :</b> Je prenais le train tous les lundis.<br><b>En cours :</b> Je travaillais quand elle a appelé.<br><b>Pour insister :</b> J’étais en train de travailler quand elle a appelé.</div><p><b>Être en train de</b> + infinitif, à l’imparfait, montre qu’une action était en cours au moment de l’événement. Il y avait… / c’était… / il faisait… installent le contexte.</p>`],
['Orthographe et suggestion',`<p>Manger : je <b>mangeais</b>, mais nous <b>mangions</b>. Commencer : je <b>commençais</b>, mais nous <b>commencions</b>. Étudier : nous <b>étudiions</b>.</p><div class="example"><b>Si on prenait</b> un café ?</div><p>Si + imparfait peut proposer une activité maintenant. Ici, l’imparfait ne raconte pas le passé.</p>`]],en:'Use the <span class="fr" lang="fr">nous</span> form of the present to build the imperfect. It gives background or an inside view of an ongoing situation. <span class="fr" lang="fr">Si on…?</span> can be a suggestion.',source:'Cours 2 · IMPARFAIT(formation) 1.docx ; Cours 3 · PC vs IMP.docx et présent-imparfait.docx ; Cours 6 · PC-IMP 1 (1).pdf (être en train de)',q:[['Avant, nous ___ (boire) du café ensemble chaque matin.','buvions','Nous buvons → buv- + ions.'],['Il ___ (être) très tard.','était','Être utilise le radical ét-.'],['Si on ___ (prendre) le tram ?','prenait','Une suggestion avec si on + imparfait.']]},
{id:'choisir',n:'04',title:'Choisir le bon passé',subtitle:'Passé composé, imparfait, plus-que-parfait',lessons:[2,3,6,7,8],tag:'Priorité révision',color:'terra',intro:'Repérer le point de vue et l’ordre des événements avant de conjuguer.',sections:[
['Trois rôles complémentaires',`<div class="tense-grid"><div class="blue"><small>LE CONTEXTE</small><h3>Imparfait</h3><p>Je préparais mon exposé.</p></div><div class="terra"><small>L’ÉVÉNEMENT</small><h3>Passé composé</h3><p>Mon collègue est arrivé.</p></div><div class="teal"><small>AVANT CE MOMENT</small><h3>Plus-que-parfait</h3><p>Il avait déjà lu mes notes.</p></div></div>`],
['Lire le récit sur une ligne du temps',`<div class="timeline"><div><small>1 · AVANT</small><b>avait commencé</b><span>La réunion commence.</span></div><div><small>2 · ÉVÉNEMENT</small><b>suis arrivé</b><span>J’arrive au bureau.</span></div><div><small>À CE MOMENT-LÀ</small><b>discutaient</b><span>Les collègues discutent.</span></div></div><div class="example">Quand je <b>suis arrivé</b>, la réunion <b>avait déjà commencé</b>. Mes collègues <b>discutaient</b> du projet.</div>`],
['Les raccourcis à éviter',`<p><b>Long ≠ imparfait.</b> J’ai vécu cinq ans à Paris : une période délimitée, vue comme un tout.</p><p><b>Hier ≠ passé composé obligatoire.</b> Hier, j’étais fatigué : un état décrit.</p><p><b>Répétition ≠ imparfait obligatoire.</b> Cette semaine, j’ai pris le tram trois fois : bilan délimité.</p><p>Les mots comme quand, souvent ou déjà ne choisissent pas le temps à ta place. Le contexte et le sens décident.</p>`]],en:'Choose the viewpoint, not a keyword: background (imperfect), completed event (passé composé), earlier than another past reference point (pluperfect).',source:'Cours 2 · IMPARFAIT(formation) 1.docx ; Cours 3 · PC vs IMP.docx ; Cours 6 · PC-IMP 1 (1).pdf ; Cours 8 · LE PLUS QUE PARFAIT.docx',q:[['Je lisais quand le téléphone ___ (sonner). Présente la sonnerie comme un événement ponctuel.','a sonné','L’événement fait avancer le récit.'],['Quand je suis arrivé, mes collègues ___ (discuter) déjà. Décris leur activité en cours à cet instant.','discutaient','Ils étaient en train de discuter à ce moment-là.'],['Je ne pouvais pas ouvrir la porte : j’___ (oublier) mes clés chez moi avant de partir.','avais oublié','L’oubli précède la situation passée.'],['Quand j’ai ouvert la porte, ___.','il pleuvait','Le temps qu’il faisait est le décor : imparfait.',['il pleuvait','il a plu']],['Hier soir, quand le téléphone a sonné, ___.','je dormais déjà','Une action en cours au moment de l’événement : imparfait.',['j’ai dormi déjà','je dormais déjà']],['Hier, après la réunion, ___. Raconte une action unique et terminée.','nous avons pris une décision','Une action unique et terminée qui fait avancer le récit : passé composé.',['nous prenions une décision','nous avons pris une décision']],['Quand nous sommes sortis du cinéma, ___.','il faisait nuit','La nuit est le décor de la sortie : imparfait.',['il faisait nuit','il a fait nuit']]]},
{id:'pqp',n:'05',title:'Le plus-que-parfait',subtitle:'Le passé avant le passé',lessons:[7,8],tag:'Temps du passé',color:'teal',intro:'Exprimer ce qui avait eu lieu avant un autre moment du passé.',sections:[
['La formule',`<div class="formula">avoir / être à l’imparfait <span>+</span> participe passé</div><table><tr><th></th><th>avoir</th><th>être</th></tr><tr><td>je / j’</td><td>avais</td><td>étais</td></tr><tr><td>tu</td><td>avais</td><td>étais</td></tr><tr><td>il / elle / on</td><td>avait</td><td>était</td></tr><tr><td>nous</td><td>avions</td><td>étions</td></tr><tr><td>vous</td><td>aviez</td><td>étiez</td></tr><tr><td>ils / elles</td><td>avaient</td><td>étaient</td></tr></table><p>Le choix de l’auxiliaire et les règles d’accord sont les mêmes qu’au passé composé.</p>`],
['Expliquer une situation passée',`<div class="example">Je n’ai pas pu payer parce que j’<b>avais oublié</b> mon portefeuille.<br>Quand j’ai téléphoné, elle <b>était déjà partie</b>.<br>Il était inquiet : il <b>n’avait jamais présenté</b> un projet en français.</div><p>Le repère passé peut être au passé composé ou à l’imparfait. Il peut aussi être compris grâce au contexte.</p>`],
['Déjà et négation',`<p>Déjà et jamais se placent souvent entre l’auxiliaire et le participe : <b>j’avais déjà fini ; je n’avais jamais essayé</b>.</p><p>N’emploie pas le plus-que-parfait simplement parce qu’un événement est ancien. Il faut un autre repère passé : <b>j’ai obtenu mon diplôme en 2018</b> suffit pour raconter ce fait.</p>`]],en:'The pluperfect is relative to a past reference point. An event is not pluperfect merely because it happened a long time ago.',source:'Cours 7 · ERASMUS PQP.docx (texte en image) ; Cours 8 · LE PLUS QUE PARFAIT.docx',q:[['À notre arrivée, elle ___ (partir) : elle était absente. Exprime une action antérieure, au plus-que-parfait, avec déjà.','était déjà partie','Être à l’imparfait + partie, accord avec elle.'],['J’étais perdu parce que je ___ (ne pas noter) l’adresse.','n’avais pas noté|n\'avais pas noté','La négation encadre l’auxiliaire ; noter → noté.']]},
{id:'pronoms',n:'06',title:'COD ou COI ?',subtitle:'Le, la, les ou lui, leur ?',lessons:[4],tag:'Pronoms',color:'blue',intro:'Apprendre la construction du verbe pour remplacer le bon complément.',sections:[
['Sans préposition ou avec à ?',`<p><b>COD</b> = complément d’objet <b>direct</b> : il suit le verbe sans préposition (voir <b>quelqu’un</b>). Il répond à « qui ? » ou « quoi ? ».<br><b>COI</b> = complément d’objet <b>indirect</b> : il est relié au verbe par une préposition, ici <b>à</b> (parler <b>à quelqu’un</b>). Il répond à « à qui ? ».</p><table><tr><th>Construction</th><th>Exemple</th><th>Pronom</th></tr><tr><td>voir quelqu’un</td><td>Je vois Léa.</td><td>Je <b>la</b> vois.</td></tr><tr><td>regarder quelque chose</td><td>Je regarde les photos.</td><td>Je <b>les</b> regarde.</td></tr><tr><td>parler à quelqu’un</td><td>Je parle à Léa.</td><td>Je <b>lui</b> parle.</td></tr><tr><td>écrire à des personnes</td><td>J’écris à mes collègues.</td><td>Je <b>leur</b> écris.</td></tr></table><p>Lui remplace une personne masculine <b>ou féminine</b>. Leur remplace plusieurs personnes et ne prend pas de s.</p>`],
['Les séries de pronoms',`<p><b>COD :</b> me, te, le / la, nous, vous, les.<br><b>COI avec les verbes concernés :</b> me, te, lui, nous, vous, leur.</p><p>Me, te, le et la deviennent m’, t’, l’ devant une voyelle ou un h muet : <b>je l’écoute</b>. Lui et leur ne s’élident pas.</p><div class="example">J’offre <b>un livre</b> <b>à ma sœur</b>.<br>Je <b>lui</b> offre un livre. Je <b>l’</b>offre à ma sœur.</div>`],
['Les constructions à mémoriser',`<p><b>Direct :</b> écouter quelqu’un, regarder quelque chose, attendre quelqu’un, aider quelqu’un, connaître quelqu’un, appeler quelqu’un, chercher quelqu’un / quelque chose, entendre quelqu’un / quelque chose.</p><p><b>À + personne, avec lui / leur :</b> parler à, téléphoner à, écrire à, répondre à, donner à, dire à, prêter à, montrer à, lire une histoire à, faire confiance à, offrir quelque chose à quelqu’un, envoyer quelque chose à quelqu’un. La plupart des verbes de transaction ou de communication sont indirects.</p><div class="example">J’<b>appelle</b> Léa → je <b>l’</b>appelle (COD).<br>Je <b>téléphone à</b> Léa → je <b>lui</b> téléphone (COI).</div><p>Appeler et téléphoner à ont le même sens, mais pas la même construction. Au passé composé, le COD placé avant entraîne l’accord (Léa ? je l’ai <b>appelée</b>) : voir <a href="#pc">Le passé composé</a>.</p><div class="warning">Attention : « à + personne » ne donne pas toujours lui / leur.<br>Je pense à Léa → <b>je pense à elle</b>.<br>Je m’intéresse à Paul → <b>je m’intéresse à lui</b>.</div>`]],en:'COD (complément d’objet direct) is the direct object; COI (complément d’objet indirect) is the indirect object, linked to the verb by a preposition such as <span class="fr" lang="fr">à</span>. Learn the French construction: <span class="fr" lang="fr">attendre quelqu’un</span> is direct despite English “wait for”. <span class="fr" lang="fr">Lui</span>/<span class="fr" lang="fr">leur</span> do not replace every <span class="fr" lang="fr">à</span> + person complement.',source:'Cours 4 · LES PRONOMS COMPLEMENTS INTRO.docx ; Cours 5 · LE PRONOM Y (1).docx',q:[['Je téléphone à mes parents. → Je ___ téléphone.','leur','Téléphoner à plusieurs personnes → leur.'],['J’attends ma collègue. → Je ___ attends. Écris le pronom élidé, avec son apostrophe.','l’|l\'','Attendre quelqu’un : COD, la → l’ devant une voyelle.'],['Je pense à mes amis. → Je pense à ___.','eux','Penser à une personne utilise un pronom tonique.'],['Je cherche mes clés. → Je ___ cherche.','les','Chercher quelque chose : COD, les.'],['Je dis la vérité à mes amis. → Je ___ dis la vérité.','leur','Dire à quelqu’un : COI pluriel, leur.']]},
{id:'yen',n:'07',title:'Y et en',subtitle:'Un lieu, une idée, une quantité',lessons:[5],tag:'Pronoms',color:'teal',intro:'Éviter les répétitions tout en conservant le sens de la phrase.',sections:[
['Y : où ? à quoi ?',`<div class="example">Je vais <b>au bureau</b> → J’<b>y</b> vais.<br>Je travaille <b>à Genève</b> → J’<b>y</b> travaille.<br>Je participe <b>à ce projet</b> → J’<b>y</b> participe.<br>Je pense <b>à cette question</b> → J’<b>y</b> pense.</div><p>Y remplace un lieu (à, en, chez, dans, sur…) ou, avec les verbes concernés, à + chose / idée. Pour un lieu d’origine avec de : <b>je reviens de Lausanne → j’en reviens</b>.</p><p>Avec <b>penser à</b> et <b>s’intéresser à</b>, une personne se reprend par à + pronom tonique : <b>je pense à elle</b>, pas « j’y pense ». Avec parler à, téléphoner à ou écrire à, on utilise lui / leur : <b>je lui parle</b> (voir la fiche COD ou COI).</p>`],
['En : de quoi ? combien ?',`<div class="example">Je parle <b>de ce projet</b> → J’<b>en</b> parle.<br>Je bois <b>du café</b> → J’<b>en</b> bois.<br>J’ai <b>trois livres</b> → J’<b>en</b> ai <b>trois</b>.<br>J’ai <b>une voiture</b> → J’<b>en</b> ai <b>une</b>.<br>Je joue <b>du piano</b> → J’<b>en</b> joue.<br>Je fais <b>de l’escalade</b> → J’<b>en</b> fais.</div><p>Garde la quantité : <b>un, une, deux, beaucoup, assez…</b> La quantité zéro se dit simplement : <b>je n’en ai pas</b>.</p><p>En peut remplacer un complément en de, un groupe avec un article partitif (du, de la, de l’) ou indéfini (un, une, des), ou le nom associé à une quantité.</p>`],
['Le contraste qui compte',`<table><tr><th>Groupe de départ</th><th>Réponse</th></tr><tr><td>Tu aimes le café ?</td><td>Oui, je <b>l’</b>aime.</td></tr><tr><td>Tu bois du café ?</td><td>Oui, j’<b>en</b> bois.</td></tr><tr><td>Tu penses au projet ?</td><td>Oui, j’<b>y</b> pense.</td></tr><tr><td>Tu parles du projet ?</td><td>Oui, j’<b>en</b> parle.</td></tr></table><p>Avec une personne, les formes explicites sont utiles : <b>je parle de lui ; je m’occupe d’elle</b>. Ne transforme pas mécaniquement tout de en en.</p><p><b>À reconnaître :</b> ça y est (c’est fait), on y va (on part), allez-y (invitation à agir ou à parler). Dans <b>il n’y en a plus</b>, y fait partie de il y a et en reprend ce dont on parle.</p>`]],en:'<span class="fr" lang="fr">Y</span> usually replaces a place or <span class="fr" lang="fr">à</span> + thing. <span class="fr" lang="fr">En</span> replaces <span class="fr" lang="fr">de</span>-complements or indefinite quantities. Keep the quantity: <span class="fr" lang="fr">j’en ai deux</span>.',source:'Cours 5 · LE PRONOM Y (1).docx, LE PRONOM Y (2).docx et Le pronom EN.docx. Les contrastes et exemples sont reformulés.',q:[['Tu participes à ce projet ? Oui, j’___ participe.','y','Participer à quelque chose → y.'],['Tu as deux vélos ? Oui, j’___ ai deux.','en','En remplace vélos ; on garde deux.'],['Tu aimes le thé ? Oui, je ___ aime.','l’|l\'','Le thé est défini : COD le, élidé en l’.']]},
{id:'place',n:'08',title:'Placement et négation',subtitle:'Mettre chaque mot à sa place',lessons:[4,5,7],tag:'Construction',color:'blue',intro:'Placer le pronom devant le verbe auquel il se rapporte.',sections:[
['Les trois structures essentielles',`<table><tr><th>Structure</th><th>Affirmation</th><th>Négation</th></tr><tr><td>Verbe conjugué</td><td>Je lui parle.</td><td>Je ne lui parle pas.</td></tr><tr><td>Temps composé</td><td>Je lui ai parlé.</td><td>Je ne lui ai pas parlé.</td></tr><tr><td>Verbe + infinitif</td><td>Je vais lui parler.</td><td>Je ne vais pas lui parler.</td></tr></table><div class="example">Je veux <b>y aller</b>. Je vais <b>en acheter</b>.<br>Je <b>n’en ai pas acheté</b>.</div><p>Avec un infinitif, le pronom se place devant cet infinitif si c’est son complément. Dans les temps composés, il se place avant l’auxiliaire.</p>`],
['Pas, plus, jamais et de',`<p><b>Ne… pas</b> : négation simple. <b>Ne… plus</b> : une situation a cessé. <b>Ne… jamais</b> : aucune fois.</p><p><b>Ne… rien</b> : aucune chose, je n’ai rien acheté. <b>Ne… personne</b> : aucune personne, je n’ai rencontré personne. Au passé composé, rien précède généralement le participe ; personne le suit.</p><div class="example">J’ai une voiture → Je <b>n’ai pas de voiture</b>.<br>Je bois du café → Je <b>ne bois plus de café</b>.<br>J’aime le café → Je <b>n’aime pas le café</b>.</div><p>Après une négation, un / une / des et les partitifs deviennent généralement de / d’ devant un COD. Les articles définis restent. Avec être : <b>ce n’est pas une voiture</b>. En cas de contraste : <b>je ne bois pas du thé, mais du café</b>.</p>`],
['Petits compléments utiles',`<details><summary>Deux pronoms (cours 14) et impératif</summary><p>Avant le verbe, l’ordre courant est : <b>me / te / se / nous / vous → le / la / les → lui / leur → y → en</b>. Exemple : je le lui donne.</p><p>À l’impératif affirmatif, les pronoms suivent le verbe : donne-le-moi, allez-y. À la forme négative : ne me le donne pas, n’y allez pas.</p></details><p>À l’écrit, conserve ne. À l’oral courant, il est souvent omis, mais reste utile pour la préparation au test.</p>`]],en:'Pronouns go before the auxiliary in compound tenses, but before an infinitive when they belong to that infinitive. Negative <span class="fr" lang="fr">de</span> does not replace definite articles.',source:'Cours 4–5 · fiches pronoms ; Cours 7 · BREF 2.docx. Ordre de deux pronoms : cours 14 ; impératif : complément de référence.',q:[['Mets à la forme négative avec ne… pas : « Je lui ai parlé. »','Je ne lui ai pas parlé.','Ne + pronom + auxiliaire + pas + participe.'],['Transforme « J’ai un vélo » en négation simple : je n’ai pas ___ vélo.','de','Un vélo devient pas de vélo.'],['Complète : « Je vais ___ téléphoner. » (à ma sœur)','lui','Le pronom complément de téléphoner se place devant l’infinitif.']]},
{id:'reperes',n:'09',title:'Les repères temporels',subtitle:'Depuis, il y a, en, dans',lessons:[3,5],tag:'Construction',color:'terra',intro:'Distinguer durée, point de départ, temps nécessaire et délai.',sections:[
['Quatre questions, quatre repères',`<table><tr><th>Repère</th><th>Idée</th><th>Exemple</th></tr><tr><td><b>depuis</b></td><td>Début / durée jusqu’au repère</td><td>J’habite ici depuis deux ans / depuis 2024.</td></tr><tr><td><b>il y a</b></td><td>Combien de temps avant maintenant</td><td>J’ai déménagé il y a deux ans.</td></tr><tr><td><b>en</b></td><td>Temps nécessaire</td><td>J’ai écrit le message en dix minutes.</td></tr><tr><td><b>dans</b></td><td>Délai avant un événement</td><td>La réunion commence dans dix minutes.</td></tr></table><p><b>En</b> sert aussi pour une année ou un mois : en 2026, en octobre. C’est un autre usage.</p>`],
['Pendant et depuis',`<div class="example">J’ai travaillé à Lyon <b>pendant trois ans</b>.<br>Je travaille à Genève <b>depuis trois ans</b>.</div><p>Pendant indique la durée d’une activité ; il ne signifie pas toujours qu’elle est terminée : <b>demain, je travaillerai pendant deux heures</b>. Depuis relie la situation à un point de départ. Ce repère peut être passé : <b>j’y travaillais depuis un an quand…</b></p><p><b>Depuis ne commande pas toujours le présent :</b> je <b>n’ai pas vu</b> Léa depuis lundi. Le passé composé négatif exprime ici l’absence d’un événement entre lundi et maintenant.</p>`],
['Dates, saisons et heures',`<div class="example">Nous sommes <b>le 12 mai</b>.<br>Je suis arrivé <b>en septembre</b>, <b>en 2024</b>.<br><b>Au printemps</b> ; <b>en été</b>, <b>en automne</b>, <b>en hiver</b>.<br>La réunion est <b>à 9 heures</b>.<br>Je suis occupé <b>en ce moment</b> ; je rentrerai <b>ce soir</b>.</div><p><b>Lundi</b> désigne un lundi situé par le contexte ; <b>le lundi</b> exprime généralement une habitude. <b>De 2020 à 2023</b> indique les deux limites d’une période.</p>`],
['Fréquence et récit',`<p><b>Tous les jours · toutes les semaines · une fois par mois · un jour sur deux · rarement · parfois · souvent · ne… jamais.</b></p><div class="example">D’abord, j’ai étudié la physique. Ensuite, j’ai fait un stage. Puis, j’ai commencé ma thèse. Enfin, j’ai rejoint une nouvelle équipe.</div><p><b>Quand</b> situe un événement ; <b>pendant que</b> relie des situations simultanées ; <b>parce que</b> explique une cause.</p>`]],en:'<span class="fr" lang="fr">Depuis</span> = since/for an ongoing situation; <span class="fr" lang="fr">il y a</span> = ago; <span class="fr" lang="fr">en</span> = time needed; <span class="fr" lang="fr">dans</span> = time from now. <span class="fr" lang="fr">Pendant</span> describes duration without itself choosing a tense.',source:'Cours 3 · PARLER DE SON PARCOURS ACADÉMIQUE ET PROFESSIONNEL.docx et syllabus ; Cours 5 · LE PRONOM Y (2).docx. Exemples nouveaux.',q:[['Je suis arrivé ici ___ trois semaines. Situe cette arrivée par rapport à maintenant.','il y a','Un événement situé avant maintenant.'],['J’ai terminé ce formulaire ___ cinq minutes. Indique le temps nécessaire.','en','Le temps nécessaire pour accomplir la tâche.'],['Le cours commence ___ dix minutes. Indique le délai à partir de maintenant.','dans','Un délai à partir de maintenant.'],['Je travaille ici ___ 2024. La situation a commencé en 2024 et continue.','depuis','Un point de départ, et la situation continue.'],['Je ne l’ai pas vu ___ lundi. La dernière rencontre était lundi.','depuis','Depuis peut accompagner un passé composé négatif.'],['Les cours reprennent ___ printemps.','au','Au printemps, mais en été, en automne et en hiver.']]},
{id:'expressions',n:'10',title:'Vocabulaire et expressions',subtitle:'Parcours, candidature et entreprise',lessons:[2,3,6,7,8],tag:'Mémo pratique',color:'teal',intro:'Des constructions courtes pour utiliser la grammaire dans les tâches du cours.',sections:[
['Présenter son parcours',`<p><b>Étudier la physique · faire des études de physique · obtenir un diplôme en… · faire un stage chez… · travailler comme… · être chargé de… · s’occuper de…</b></p><div class="example">J’ai obtenu un master en physique. Pendant mes études, je travaillais dans un laboratoire. Aujourd’hui, je suis chercheur et je m’occupe de l’analyse des données.</div><p><b>Un diplôme, un stage, une formation, une expérience professionnelle, un poste.</b> Une profession après être s’emploie généralement sans article : je suis ingénieur.</p>`],
['Candidature et entretien',`<p><b>Postuler à un poste · envoyer sa candidature · avoir de l’expérience en… · maîtriser un outil / une langue · être titulaire d’un diplôme.</b></p><div class="example">Je vous adresse ma candidature au poste de…<br>Cette expérience m’a permis de…<br>Je suis disponible pour un entretien.<br>Je reste à votre disposition. Cordialement,</div><p>Structure courte : le poste visé → l’expérience pertinente → la motivation → la disponibilité. Pour un entretien, relie une qualité à un exemple concret.</p><details><summary>Lettre de candidature : ordre et formules</summary><p><b>Ordre habituel :</b> Madame, Monsieur, → 1. la raison de la lettre → 2. l’expérience (par exemple à l’étranger) → 3. les détails de cette expérience → 4. le bilan → 5. les qualités et la disponibilité → 6. la formule de politesse.</p><div class="example">Madame, Monsieur,<br>Suite à votre annonce, je vous adresse ma candidature…<br>Je me permets de vous envoyer ma candidature spontanée avec mon CV ci-joint.<br>Ces expériences m’ont permis de… (améliorer mon anglais).<br>Je pense avoir les qualités requises.<br>Je me tiens à votre disposition pour vous exposer mes motivations lors d’un entretien.<br>Cordialement, / Sincères salutations,</div></details>`],
['CV et entretien : repères courts',`<details><summary>Les éléments à savoir réutiliser</summary><p><b>CV :</b> expériences et formation du plus récent au plus ancien ; compétences, outils et langues. Pour les activités, emploie des noms : <b>analyse de données, gestion de projet</b>.</p><p><b>Lieu et fonction :</b> travailler dans une entreprise, chez Omega (chez + nom de l’entreprise), dans un laboratoire, au service de la formation ; prendre en charge un projet.</p><div class="example">Je suis rigoureux et autonome. Par exemple…<br>J’ai tendance à être trop réservé, mais…<br>Je souhaiterais rejoindre votre équipe.<br>Pourriez-vous préciser les missions du poste ?</div><p>Les deux dernières formules sont au conditionnel de politesse : retiens-les telles quelles.</p><p><b>Une annonce, les qualités requises, le goût du contact, une candidature spontanée, un CV ci-joint.</b> Pour raconter un entretien : <b>se dérouler</b> (se passer), <b>avoir l’air + adjectif</b> (sembler), <b>une rubrique</b> (une partie du CV).</p></details>`],
['Présenter une entreprise',`<p><b>Une entreprise, un siège social, un produit, un service, le chiffre d’affaires, les bénéfices, une filiale.</b></p><div class="example">L’entreprise a été fondée en… à… par…<br>Elle est spécialisée dans…<br>Elle propose / fabrique / développe…<br>Elle est présente dans plusieurs pays.<br>L’un de ses points forts est…<br>Elle s’est développée à l’international. Avant cette expansion, elle avait…</div><p>Le chiffre d’affaires correspond aux ventes ; le bénéfice tient compte des charges. Retiens « a été fondée » comme une expression toute faite.</p><details><summary>Lexique et exemple : Michelin</summary><p><b>Le fondateur / la fondatrice · le domaine · le lieu de fondation · les résultats, les bénéfices · un leader mondial · être présent dans 175 pays · l’essor (de l’automobile) · l’expansion mondiale · les points forts · l’image de marque · l’innovation.</b></p><div class="example">L’entreprise Michelin a été fondée en 1889 à Clermont-Ferrand par Édouard et André Michelin.<br>Son domaine : les pneumatiques et les guides touristiques.<br>Elle est présente dans 175 pays : c’est un leader mondial du pneu.<br>L’un de ses points forts est l’innovation technique.</div></details>`],
['Relier ses idées à l’oral',`<div class="example">Ce document présente…<br>D’un côté… D’un autre côté…<br>Un avantage est que… Cependant…<br>À mon avis… Par exemple… Pour conclure…</div><p>Ces expressions répondent aux critères de l’oral : présenter le sujet, expliquer avantages et inconvénients, donner une opinion et des exemples. Pour décrire et faire une hypothèse : <b>on voit… ; il semble… ; peut-être que…</b>.</p>`]],en:'These are reusable sentence frames, not texts to memorise. Practise the tenses and pronouns by changing the situation and examples.',source:'Cours 3 · PARLER DE SON PARCOURS ACADÉMIQUE ET PROFESSIONNEL.docx ; Cours 2 · Edito B1 Pro 3.pdf (encadrés CV et travail) ; Cours 6 · POSTULER POUR UN EMPLOI.docx et MOTIVATION.docx ; Cours 7 · entretien.pdf et BREF 2.docx ; Cours 8 · PRÉSENTER UNE ENTREPRISE.docx ; B1- EXAMEN.docx. Phrases reformulées.',q:[['J’ai vu votre ___ sur le site de l’entreprise et je souhaite postuler.','annonce','Une annonce présente le poste à pourvoir.',['candidature','annonce','disposition']],['Je suis ___ d’un master en physique.','titulaire','Être titulaire d’un diplôme : l’avoir obtenu.',['titulaire','chargé','disponible']],['Je ___ l’anglais et l’allemand.','maîtrise','Maîtriser une langue : bien la connaître.',['postule','m’occupe','maîtrise']],['Je reste à votre ___ pour un entretien.','disposition','Formule de fin de lettre de motivation.',['expérience','disposition','annonce']],['L’entreprise a été ___ en 1889.','fondée','Avec être, accord avec le sujet : l’entreprise, féminin singulier.',['fondé','fondées','fondée']],['Ces expériences m’ont ___ d’améliorer mon anglais.','permis','Permettre à quelqu’un de… : m’ est COI, donc pas d’accord.',['permis','permise','permettre']],['Michelin est un ___ mondial du pneu.','leader','Un leader mondial : l’entreprise numéro un.',['leader','fondateur','essor']]]}
];
const verbs=[
['aller','vais,vas,va,allons,allez,vont','allé','être'],['s’appeler','m’appelle,t’appelles,s’appelle,nous appelons,vous appelez,s’appellent','appelé','être'],['attendre','attends,attends,attend,attendons,attendez,attendent','attendu'],['avoir','ai,as,a,avons,avez,ont','eu'],['boire','bois,bois,boit,buvons,buvez,boivent','bu'],['conduire','conduis,conduis,conduit,conduisons,conduisez,conduisent','conduit'],['connaître','connais,connais,connaît,connaissons,connaissez,connaissent','connu'],['courir','cours,cours,court,courons,courez,courent','couru'],['devoir','dois,dois,doit,devons,devez,doivent','dû'],['dire','dis,dis,dit,disons,dites,disent','dit'],['écrire','écris,écris,écrit,écrivons,écrivez,écrivent','écrit'],['être','suis,es,est,sommes,êtes,sont','été'],['faire','fais,fais,fait,faisons,faites,font','fait'],['finir','finis,finis,finit,finissons,finissez,finissent','fini'],['lire','lis,lis,lit,lisons,lisez,lisent','lu'],['manger','mange,manges,mange,mangeons,mangez,mangent','mangé'],['mettre','mets,mets,met,mettons,mettez,mettent','mis'],['offrir','offre,offres,offre,offrons,offrez,offrent','offert'],['parler','parle,parles,parle,parlons,parlez,parlent','parlé'],['pouvoir','peux,peux,peut,pouvons,pouvez,peuvent','pu'],['prendre','prends,prends,prend,prenons,prenez,prennent','pris'],['recevoir','reçois,reçois,reçoit,recevons,recevez,reçoivent','reçu'],['savoir','sais,sais,sait,savons,savez,savent','su'],['suivre','suis,suis,suit,suivons,suivez,suivent','suivi'],['venir','viens,viens,vient,venons,venez,viennent','venu','être'],['voir','vois,vois,voit,voyons,voyez,voient','vu'],['vouloir','veux,veux,veut,voulons,voulez,veulent','voulu']
];
// Past participles grouped by final sound, as in Cours 1 · Le passé composé RAPPEL.docx. A third item marks forms met in later stories and homework.
const participleGroups=[
['é','tous les verbes en -er',[['manger','mangé'],['regarder','regardé'],['aller','allé'],['travailler','travaillé']]],
['u','',[['lire','lu'],['voir','vu'],['boire','bu'],['entendre','entendu'],['attendre','attendu'],['répondre','répondu'],['perdre','perdu'],['vouloir','voulu'],['devoir','dû'],['pouvoir','pu'],['savoir','su'],['croire','cru'],['falloir','fallu'],['courir','couru'],['connaître','connu'],['disparaître','disparu'],['plaire','plu'],['pleuvoir','plu'],['recevoir','reçu'],['venir','venu'],['vivre','vécu'],['devenir','devenu',1],['obtenir','obtenu',1],['battre','battu',1]]],
['i','on écrit -i, -is ou -it',[['finir','fini'],['grandir','grandi'],['choisir','choisi'],['partir','parti',1],['sortir','sorti',1],['prendre','pris'],['apprendre','appris'],['comprendre','compris'],['mettre','mis'],['(s’)asseoir','assis',1],['dire','dit'],['écrire','écrit'],['conduire','conduit'],['(s’)inscrire','inscrit',1]]],
['autres','',[['faire','fait'],['être','été'],['avoir','eu'],['ouvrir','ouvert'],['découvrir','découvert'],['offrir','offert'],['souffrir','souffert'],['peindre','peint'],['craindre','craint'],['rejoindre','rejoint',1],['mourir','mort',1]]]
];

// Curriculum extension reviewed 3 November 2026. Stable existing IDs retained.
modules.push(...[{"id": "subjonctif", "n": "11", "title": "Le subjonctif présent", "subtitle": "Former le subjonctif et choisir le mode", "lessons": [9, 10, 11, 13], "tag": "Conjugaison", "color": "teal", "intro": "Exprimer une volonté, un sentiment, un doute ou une nécessité.", "sections": [["Deux bases, puis les irréguliers", "<p>Pour je, tu, il et ils : pars de <b>ils au présent sans ‑ent</b>, puis ajoute <b>‑e, ‑es, ‑e, ‑ent</b>. Pour nous et vous : utilise la base de nous au présent avec <b>‑ions, ‑iez</b>.</p><div class=\"example\">Ils prennent → que je <b>prenne</b>, qu’ils <b>prennent</b>.<br>Nous prenons → que nous <b>prenions</b>, que vous <b>preniez</b>.<br>Ils boivent / nous buvons → qu’il <b>boive</b>, que nous <b>buvions</b>.</div><p>Être et avoir ont des terminaisons particulières : <b>sois, sois, soit, soyons, soyez, soient</b> ; <b>aie, aies, ait, ayons, ayez, aient</b>. Autres formes : que je fasse, puisse, sache, veuille, aille ; que nous fassions, puissions, sachions, voulions, allions. Falloir : <b>qu’il faille</b>. Voir les six personnes dans le <a href=\"#verbes\">répertoire</a>.</p>"], ["Les déclencheurs utiles", "<table><tr><th>Usage</th><th>Construction</th></tr><tr><td>Volonté</td><td>Je souhaite / je veux / j’aimerais que tu viennes.</td></tr><tr><td>Sentiment</td><td>Je suis content qu’elle soit là. Je crains qu’il parte.</td></tr><tr><td>Nécessité</td><td>Il faut / il est important que nous finissions.</td></tr><tr><td>Doute</td><td>Je ne pense pas qu’il ait raison.</td></tr><tr><td>But</td><td>Je répète pour que vous compreniez.</td></tr><tr><td>Concession</td><td>Bien qu’il soit fatigué, il continue.</td></tr></table><p>Autres conjonctions du cours : <b>avant que, en attendant que, jusqu’à ce que, à condition que, à moins que, pourvu que, afin que</b>. Le <i>ne</i> de « avant qu’il ne parte » peut être explétif : il ne signifie pas une négation.</p>"], ["Indicatif, subjonctif ou infinitif ?", "<div class=\"example\">Je pense qu’elle <b>vient</b>. Je ne pense pas qu’elle <b>vienne</b>.<br>J’espère qu’elle <b>viendra</b>.<br>Je souhaite <b>partir</b>. Je souhaite qu’elle <b>parte</b>.<br>Il faut <b>réviser</b>. Il faut que tu <b>révises</b>.</div><p>Affirmatifs : penser, croire, trouver, constater, savoir et espérer prennent normalement l’indicatif. Une appréciation change la construction : <b>je trouve qu’il est gentil</b>, mais <b>je trouve normal qu’il soit ici</b>. Avec le même sujet, préférer l’infinitif après souhaiter ou vouloir.</p><p>Le subjonctif n’est pas simplement « l’incertitude » : on peut être content d’un fait certain. La construction et le sens gouvernent le choix. <b>Il est certain que</b> et <b>après que</b> prennent l’indicatif. <b>De sorte que</b> prend le subjonctif pour un but voulu, l’indicatif pour une conséquence constatée.</p>"], ["Verbes de la tête, verbes du cœur", "<table><tr><th>Verbes de la tête (objectifs) → indicatif</th><th>Verbes du cœur (subjectifs) → subjonctif</th></tr><tr><td>je constate / je remarque que<br>je crois / je pense / je trouve que<br>je suppose / j’imagine que<br>j’affirme / je dis que<br>j’espère que<br><b>il est clair / certain que</b><br>après que</td><td>je souhaite / je désire / j’aimerais que<br>j’ai peur / je crains / je redoute que<br>je regrette / je suis désolé que<br>je veux / j’exige / j’ordonne que<br>je doute que<br><b>il faut / il vaut mieux que</b><br><b>il est important / il est dommage que</b><br><b>c’est + adjectif + que</b> (c’est dommage que)<br><b>je trouve + adjectif + que</b> (je trouve normal que)<br>de peur que, de crainte que</td></tr></table><div class=\"example\">Je constate qu’il <b>est</b> en retard. Je regrette qu’il <b>soit</b> en retard.<br>Je cherche une maison qui <b>a</b> un jardin (elle existe). Je cherche une maison qui <b>ait</b> un jardin (je ne sais pas si elle existe).</div><p>Certains verbes de la tête prennent le subjonctif à la forme négative : <b>je ne crois pas, je ne pense pas, je ne trouve pas que</b>.</p>"], ["Le temps du verbe principal", "<p>Le subjonctif présent peut suivre un verbe principal au présent, au passé ou au futur : <b>j’attends / j’ai attendu / j’attendrai qu’elle soit prête</b>. Le choix du temps dans la subordonnée dépend du sens. La forme ne devient pas automatiquement un passé parce que le verbe principal est au passé.</p>"]], "en": "Mood is governed by constructions and meaning.", "source": "Cours 9 : LE SUBJONCTIF INTRO.pdf p. 1, LE SUBJONCTIF 1.docx p. 1 ; cours 10 : LE SUBJONCTIF 2.docx p. 1 ; cours 13 : OPINIONS.docx p. 3. Faute de la fiche (« il faut que + infinitif ») corrigée. Exercices nouveaux.", "q": [["Pour que chacun ___ (être) à l’aise, il faut discuter des règles.", "soit", "Pour que + subjonctif."], ["Il faut que nous ___ (prendre) le tram.", "prenions", "Base de nous prenons + ions."], ["Je souhaite que tu ___ (être) disponible.", "sois", "Être : que tu sois."], ["J’espère qu’elle ___ demain.", "viendra", "Espérer affirmatif est normalement suivi de l’indicatif.", ["vienne", "viendra"]], ["Je suis heureux que vous ___ (avoir) du temps.", "ayez", "Avoir : que vous ayez."], ["Je révise pour que tout ___ (aller) bien.", "aille", "Aller : que tout aille."], ["Il faut ___ avant midi.", "partir", "Il faut + infinitif, sans que.", ["partir", "que partir"]], ["Je regrette qu’il ___ (être) absent.", "soit", "Regretter est un verbe du cœur : subjonctif."], ["Il est clair qu’elle ___ (avoir) raison.", "a", "Il est clair que + indicatif.", ["a", "ait"]], ["Il vaut mieux que tu ___ (partir) tôt.", "partes", "Il vaut mieux que + subjonctif."]]}, {"id": "opinions", "n": "12", "title": "Exprimer son opinion", "subtitle": "Affirmer, nuancer et réagir", "lessons": [10, 13], "tag": "Communication", "color": "teal", "intro": "Construire un avis et le défendre avec une raison et un exemple.", "sections": [["Des expressions qui changent le mode", "<div class=\"example\"><b>À mon avis</b>, ce projet est utile.<br><b>Je pense que</b> ce projet est utile.<br><b>Je ne pense pas que</b> ce projet soit inutile.<br><b>Je ne suis pas sûr que</b> cette solution convienne.</div><p>Sans que : <b>selon moi, de mon point de vue, en ce qui me concerne</b>. Avec indicatif : je crois que, je pense que, je trouve que, il me semble que, je suppose que, je considère que, je suis certain que, je suis sûr que. Avec subjonctif : je ne crois pas que, je ne pense pas que, je ne trouve pas que, je ne suis pas sûr que.</p><p>Aussi avec l’indicatif : <b>je constate que, je remarque que, j’affirme que, je dis que, il est clair que</b>. Pour réagir, avec le subjonctif : <b>je suis choqué(e) que, je trouve inquiétant que, je regrette que, j’aimerais que</b>. Voir <a href=\"#subjonctif\">Le subjonctif présent</a>.</p>"], ["Une réponse structurée", "<p><b>Position → raison → exemple → nuance.</b> Utilise d’abord, parce que, par exemple, cependant, d’un côté et de l’autre, enfin. Pour réagir : <b>je comprends ton point de vue, mais… ; je suis d’accord sur ce point ; je ne partage pas cet avis.</b></p><div class=\"example\">À mon avis, travailler près de chez soi est un avantage parce qu’on perd moins de temps dans les transports. Par exemple, on peut rentrer déjeuner. Cependant, le poste doit aussi correspondre à ses compétences.</div>"], ["À pratiquer sans corrigé automatique", "<p>Choisis une question : la semaine de quatre jours, les téléphones à l’école, les voitures électriques ou le FCC. Présente un avantage, un inconvénient, ton avis et un exemple. Puis réponds à une objection.</p><p><b>Devoir 6 :</b> répondre à une amie qui hésite à partir travailler à l’étranger. Le document demande <b>120–150 mots</b>, une opinion et des exemples d’expériences.</p><p>Pour une image : décris d’abord ce qui est visible, puis distingue ton interprétation. Lexique du cours : le saut à l’élastique, les bains glacés, la chirurgie esthétique ; courageux, dangereux, inutile, cher.</p>"]], "en": "Use the indicative for an asserted opinion and normally the subjunctive in the negative opinion patterns practised here.", "source": "Cours 10 : LES EXPRESSIONS DE L.docx pp. 1–3 ; cours 13 : OPINIONS.docx pp. 1–3 ; B1- DEVOIR 6.docx p. 1. Exercices nouveaux.", "q": [["Je ne pense pas qu’il ___ (pouvoir) venir.", "puisse", "Je ne pense pas que + subjonctif."], ["Je trouve normal que chacun ___ (donner) son avis.", "donne", "Une appréciation : trouver normal que + subjonctif."], ["___ moi, il faut changer les horaires.", "selon|pour|d’après|d'après", "Selon moi, pour moi, d’après moi : pas de « que » après."], ["Je suis certain que cette idée ___ utile.", "est", "La certitude affirmative appelle l’indicatif.", ["est", "soit"]], ["Je remarque que tu ___ fatigué.", "es", "Remarquer que + indicatif.", ["es", "sois"]], ["Je suis choqué que les prix ___ (être) si élevés.", "soient", "Je suis choqué que + subjonctif."]]}, {"id": "conditionnel", "n": "13", "title": "Le conditionnel présent", "subtitle": "Demandes, souhaits et conseils", "lessons": [11, 12], "tag": "Conjugaison", "color": "teal", "intro": "Adoucir une demande, exprimer un souhait et proposer une solution.", "sections": [["La formation", "<p><b>Base du futur + terminaisons de l’imparfait : ‑ais, ‑ais, ‑ait, ‑ions, ‑iez, ‑aient.</b> Pour les verbes réguliers, partir de l’infinitif ; enlever le e final des verbes en -re.</p><div class=\"example\">parler → je <b>parlerais</b> ; finir → nous <b>finirions</b> ; attendre → vous <b>attendriez</b>.</div><table><tr><th>Verbe</th><th>Base</th><th>Exemple</th></tr><tr><td>être / avoir</td><td>ser- / aur-</td><td>je serais / j’aurais</td></tr><tr><td>aller / faire</td><td>ir- / fer-</td><td>tu irais / tu ferais</td></tr><tr><td>pouvoir / vouloir</td><td>pourr- / voudr-</td><td>vous pourriez / vous voudriez</td></tr><tr><td>devoir / savoir</td><td>devr- / saur-</td><td>elle devrait / elle saurait</td></tr><tr><td>venir / voir</td><td>viendr- / verr-</td><td>ils viendraient / ils verraient</td></tr></table><p>Retrouvez les six personnes dans le répertoire des verbes.</p>"], ["Quatre intentions", "<table><tr><th>Intention</th><th>Exemple</th></tr><tr><td>Demande polie</td><td>Pourriez-vous m’envoyer le document ?</td></tr><tr><td>Souhait</td><td>J’aimerais mieux comprendre cette règle.</td></tr><tr><td>Conseil</td><td>Tu devrais prendre une pause.</td></tr><tr><td>Suggestion</td><td>On pourrait en parler demain.</td></tr></table><div class=\"example\"><b>À votre place, je vérifierais</b> les horaires.<br>Je <b>ferais bien</b> une promenade.</div>"], ["Demander un service au travail", "<p>Précise le besoin, propose une solution et remercie. Pour accepter : <b>ça me va ; je suis d’accord ; ça m’arrange</b>. Pour refuser : <b>je suis désolé, je ne peux pas ; j’aimerais bien, mais…</b></p><p>Lexique de la lecture : <b>poser un jour de congé, remplacer quelqu’un, échanger un jour de travail, mettre quelqu’un en copie, c’est réglé</b>. Exprime la raison avec parce que, comme ou en raison de ; la conséquence avec donc ou par conséquent.</p>"], ["Désirs et degrés de politesse", "<div class=\"example\">Je <b>prendrais bien</b> un café.<br>Je <b>mangerais bien</b> une pizza.<br>Je <b>ferais bien</b> une partie de tennis.<br>J’<b>irais bien</b> voir ce film, pas toi ?</div><p>Avec <b>bien</b>, le conditionnel exprime une envie douce ou une suggestion.</p><table><tr><th>Degré</th><th>Exemple</th></tr><tr><td>Brutal (familier)</td><td>Le fric !</td></tr><tr><td>Ordre</td><td>Passez-moi le fric !</td></tr><tr><td>Poli</td><td>Pouvez-vous me donner l’argent ?</td></tr><tr><td>Plus poli</td><td>Pourriez-vous me donner l’argent de la caisse ?</td></tr><tr><td>Très poli</td><td>Auriez-vous l’extrême obligeance de me donner l’argent de la caisse, s’il vous plaît ?</td></tr></table>"], ["À distinguer", "<div class=\"example\">Demain, je <b>partirai</b> tôt. (futur)<br>À ta place, je <b>partirais</b> tôt. (conditionnel)<br>Avant, je <b>partais</b> tôt. (imparfait)</div><p>Ne confonds pas la base du futur et la base de l’imparfait. Pour une hypothèse, <b>si + imparfait → conditionnel</b> : si j’avais le temps, je viendrais. Pas de conditionnel après si dans cette construction.</p>"]], "en": "Use the future stem with imperfect endings. Present conditional expresses politeness, wishes and advice.", "source": "Cours 11 : remplacement.pdf p. 1 ; cours 12 : LE CONDITIONNEL 1 (1).pdf p. 1, LE CONDITIONNEL.pdf p. 1. Bases irrégulières et si + imparfait : compléments de référence. Exercices nouveaux.", "q": [["Vous ___ (pouvoir, conditionnel) répéter la question ?", "pourriez", "Pourr- + iez."], ["À ta place, je ___ (faire) une pause.", "ferais", "Fer- + ais."], ["Nous ___ (aimer, conditionnel) visiter Lyon.", "aimerions", "Aimer- + ions."], ["Tu ___ (devoir, conditionnel) lui écrire.", "devrais", "Devr- + ais."], ["Je ___ (être, conditionnel) disponible lundi.", "serais", "Ser- + ais."], ["Je ___ (prendre, conditionnel) bien un café.", "prendrais", "Prendr- + ais : envie douce."], ["Je ___ (manger, conditionnel) bien une pizza.", "mangerais", "Manger- + ais."]]}, {"id": "reproches", "n": "14", "title": "Reproches et malentendus", "subtitle": "Réagir et proposer une autre réponse", "lessons": [11, 12, 13], "tag": "Communication", "color": "teal", "intro": "Expliquer ce qui ne va pas et dire ce qui aurait été préférable.", "sections": [["Une réaction avec le subjonctif", "<div class=\"example\"><b>Comment se fait-il que</b> tu sois encore au bureau ?<br>J’ai besoin que nous <b>soyons</b> clairs.<br>Je regrette que cette réponse <b>soit</b> ambiguë.</div><p>Comment se fait-il que… ? exprime l’étonnement, parfois un reproche. Le ton compte : pour ouvrir une discussion, on peut commencer par <b>je voudrais comprendre ce qui s’est passé</b>.</p>"], ["Le conditionnel passé rencontré dans le cours", "<p>Le script du cours 13 contient <b>j’aurais dû répondre, tu aurais fait, j’aurais dit</b>. Il s’agit du conditionnel passé. Repère : <b>avoir ou être au conditionnel + participe passé</b>.</p><div class=\"example\">Tu <b>devrais prévenir</b> ton équipe. (conseil maintenant)<br>Tu <b>aurais dû prévenir</b> ton équipe. (reproche sur le passé)<br>À ta place, j’<b>aurais demandé</b> une précision.<br>Elle <b>serait venue</b>, mais elle était malade.</div><p>Les règles d’auxiliaire et d’accord des temps composés restent valables. Le conditionnel peut aussi exprimer un futur vu depuis le passé : <b>il a dit qu’il viendrait</b>. Ce n’est pas forcément un souhait.</p>"], ["Expliquer le problème sans accuser", "<p><b>Un malentendu, une date butoir, un délai, rendre un projet, avancer une date, laisser entendre, dire franchement, tenir le même discours.</b></p><p>Décris les faits, explique ton interprétation, puis propose une solution : <b>j’avais compris que… ; ce n’était pas mon intention ; je me suis mal exprimé ; la prochaine fois, on pourrait…</b></p><p>Exercice oral libre : un collègue pense que tu as accepté une tâche, mais tu voulais seulement vérifier ta disponibilité. Clarifie le malentendu et propose une meilleure façon de répondre.</p>"]], "en": "The past conditional is <span class=\"fr\" lang=\"fr\">avoir</span> or <span class=\"fr\" lang=\"fr\">être</span> in the conditional plus a past participle: <span class=\"fr\" lang=\"fr\">tu aurais dû prévenir</span> = you should have warned. It expresses a reproach about the past.", "source": "Cours 11 : MYLENE - SUBJ- CO15.docx pp. 1–2 ; cours 13 : reproches transcription.pdf p. 1. Le script a été lu ; l’audio n’a pas été vérifié. Formation du conditionnel passé : complément explicatif. Exercices nouveaux.", "q": [["Comment se fait-il que vous ___ (être) en retard ?", "soyez", "Comment se fait-il que + subjonctif."], ["Tu ___ dû vérifier hier. (avoir, conditionnel)", "aurais", "Aurais dû : conditionnel passé de devoir."], ["À sa place, nous ___ demandé une explication. (avoir, conditionnel)", "aurions", "Aurions demandé : conditionnel passé."]]}, {"id": "doubles", "n": "15", "title": "Les doubles pronoms", "subtitle": "Ordre, placement et accords", "lessons": [13, 14], "tag": "Grammaire", "color": "teal", "intro": "Remplacer deux compléments sans perdre leur rôle dans la phrase.", "sections": [["L’ordre avant le verbe", "<table><tr><th>1</th><th>2</th><th>3</th><th>4</th><th>5</th></tr><tr><td>me, te, se, nous, vous</td><td>le, la, les</td><td>lui, leur</td><td>y</td><td>en</td></tr></table><p>Ce tableau indique l’ordre des combinaisons possibles, pas une invitation à tout combiner.</p><p><b>À la 3e personne, l’ordre s’inverse</b> : me, te, nous, vous viennent avant le / la / les (<b>me le</b>), mais le / la / les viennent avant lui / leur (<b>le lui</b>).</p><div class=\"example\">Tu <b>me le</b> prêtes ? Je <b>te les</b> offre.<br>Elle <b>le lui</b> explique. Nous <b>les leur</b> apportons.</div><div class=\"example\">Elle donne le dossier à Paul → elle <b>le lui</b> donne.<br>Elle me donne le dossier → elle <b>me le</b> donne.<br>Je parle du projet à mes collègues → je <b>leur en</b> parle.<br>Je m’intéresse à ce projet → je <b>m’y</b> intéresse.</div>"], ["Verbe, auxiliaire et infinitif", "<div class=\"example\">Je <b>ne le lui donne pas</b>.<br>Je <b>le lui ai donné</b>.<br>Je <b>vais le lui donner</b>.<br>Je <b>ne peux pas le lui donner</b>.</div><p>Au temps composé, les pronoms précèdent l’auxiliaire. Avec un infinitif, ils précèdent normalement le verbe dont ils dépendent. À l’impératif affirmatif, la disposition change : <b>donne-le-moi</b> ; à l’impératif négatif : <b>ne me le donne pas</b>.</p>"], ["Remplacer « de + infinitif » ou une quantité", "<div class=\"example\">Ils me recommandent d’aller voir ce film → ils <b>me le</b> recommandent.<br>J’ai envie d’aller au cinéma → j’<b>en</b> ai envie.<br>Il nous faut de l’argent → il <b>nous en</b> faut.</div><p>« De + infinitif » devient <b>le</b> si le verbe se construit avec un COD (recommander, conseiller, proposer quelque chose), et <b>en</b> si le verbe se construit avec de (avoir envie de, parler de quelque chose). En remplace aussi une quantité.</p>"], ["Accord et référents", "<div class=\"example\">La lettre ? Je <b>la lui ai envoyée</b>.<br>Les dossiers ? Elle <b>me les a montrés</b>.</div><p>Avec avoir, le participe s’accorde avec le COD placé avant : la = lettre, les = dossiers. <b>Lui/leur</b> sont COI et ne commandent pas cet accord. Pour vérifier, rétablis les noms et repère le verbe.</p><p>En remplace notamment une quantité : <b>des copies, je lui en ai donné deux</b>. Le participe reste normalement invariable avec en.</p>"], ["Y et en ensemble", "<p>Règle de la fiche, à suivre à l’examen : <b>y</b> et <b>en</b> ne s’utilisent pas ensemble, sauf dans <b>il y en a</b> (il y en avait, il n’y en a plus). Y se combine surtout avec les verbes pronominaux : <b>je m’y intéresse</b>.</p><details><summary>Au-delà du cours</summary><p>La combinaison existe ailleurs, mais elle est rare : des livres dans ce sac, j’y en ai mis deux. L’ordre est toujours y puis en. Inutile de la produire à l’examen.</p></details>"]], "en": "Third-person <span class=\"fr\" lang=\"fr\">lui</span>/<span class=\"fr\" lang=\"fr\">leur</span> follows <span class=\"fr\" lang=\"fr\">le</span>/<span class=\"fr\" lang=\"fr\">la</span>/<span class=\"fr\" lang=\"fr\">les</span>, whereas <span class=\"fr\" lang=\"fr\">me</span>/<span class=\"fr\" lang=\"fr\">te</span>/<span class=\"fr\" lang=\"fr\">nous</span>/<span class=\"fr\" lang=\"fr\">vous</span> comes before them. Identify the direct object before applying past-participle agreement. Follow the handout for <span class=\"fr\" lang=\"fr\">y</span>/<span class=\"fr\" lang=\"fr\">en</span>: together only in <span class=\"fr\" lang=\"fr\">il y en a</span>; the rarer combination is given as an aside.", "source": "Cours 13 : Pronoms révision.docx p. 1, Les pronoms récapitulatif.pdf p. 1 ; cours 14 : B1 - LES DOUBLES PRONOMS.pdf pp. 1–2. Exercices nouveaux.", "q": [["Je donne le dossier à Léa. → Je ___ donne.", "le lui", "Le dossier = le ; à Léa = lui."], ["Elle me montre les photos. → Elle ___ montre.", "me les", "Les photos = les ; me reste devant les."], ["Nous parlons du projet à nos voisins. → Nous ___ parlons.", "leur en", "À nos voisins = leur ; du projet = en."], ["La carte ? Je la lui ai ___ (envoyer).", "envoyée", "La reprend carte, féminin singulier, COD avant avoir."], ["Je vais donner le livre à Paul. → Je vais ___ donner.", "le lui", "Les pronoms précèdent donner, dont ils dépendent."], ["Elle explique la règle à Paul. → Elle ___ explique.", "la lui", "Le COD la précède lui à la 3e personne."], ["Il nous faut de l’argent. → Il nous ___ faut.", "en", "En remplace de l’argent."], ["Nous apportons les dossiers aux clients. → Nous ___ apportons.", "les leur", "Ordre inversé à la 3e personne : les avant leur."]]}]);

modules.find(m=>m.id==='pronoms').lessons=[4,13,14];
modules.find(m=>m.id==='yen').lessons=[5,13,14];
modules.find(m=>m.id==='place').lessons=[4,5,7,13,14];
modules.find(m=>m.id==='place').sections.push(['Cours 14 : approfondir', '<p>La double pronominalisation est désormais traitée dans le cours 14 : voir <a href="#doubles">Les doubles pronoms</a>.</p>']);
modules.find(m=>m.id==='expressions').source+=' ; Cours 8 : MICHELIN.docx p. 1 (plus-que-parfait).';

modules.push({"id": "futur", "n": "16", "title": "Parler du futur", "subtitle": "Futur proche et futur simple", "lessons": [], "tag": "Complément de révision", "color": "blue", "intro": "Exprimer un projet, une prévision ou une promesse. Un rappel utile avant le conditionnel, distinct des leçons fournies.", "sections": [["Le futur proche", "<div class=\"formula\">aller au présent <span>+</span> infinitif</div><div class=\"example\">Je <b>vais préparer</b> la réunion.<br>Nous <b>allons partir</b> demain.<br>Elle <b>va se lever</b> tôt.<br>Je <b>ne vais pas lui écrire</b> ce soir.</div><p>Aller : vais, vas, va, allons, allez, vont. Le second verbe reste à l’infinitif. Un pronom complément se place devant cet infinitif : <b>je vais le lui envoyer</b>.</p>"], ["Le futur simple", "<div class=\"formula\">radical du futur <span>+</span> ai · as · a · ons · ez · ont</div><p>Pour beaucoup de verbes, le radical est l’infinitif. Pour les verbes en -re, enlève le e final.</p><table><tr><th>Verbe</th><th>Je / j’</th><th>Nous</th></tr><tr><td>parler</td><td>parlerai</td><td>parlerons</td></tr><tr><td>finir</td><td>finirai</td><td>finirons</td></tr><tr><td>prendre</td><td>prendrai</td><td>prendrons</td></tr></table><p>Exemple complet : je parlerai, tu parleras, il parlera, nous parlerons, vous parlerez, elles parleront.</p>"], ["Les bases irrégulières", "<p><b>être → ser- ; avoir → aur- ; aller → ir- ; faire → fer- ; pouvoir → pourr- ; vouloir → voudr- ; devoir → devr- ; savoir → saur- ; venir → viendr- ; voir → verr- ; recevoir → recevr- ; courir → courr-.</b></p><div class=\"example\">Je <b>serai</b> au bureau. Tu <b>auras</b> le temps.<br>Nous <b>pourrons</b> en discuter. Ils <b>viendront</b> demain.</div><p>Orthographe : <b>j’appellerai</b>, avec deux l ; pour le verbe pronominal : <b>je m’appellerai</b>. Consulte les 27 tableaux du <a href=\"#verbes\">répertoire</a>.</p>"], ["Choisir sans règle artificielle", "<p>Le futur proche présente souvent une intention ou une évolution liée à la situation actuelle : <b>regarde ces nuages, il va pleuvoir</b>. Le futur simple sert notamment à annoncer, prévoir ou promettre : <b>je te répondrai demain</b>.</p><p>Ce n’est pas une opposition stricte entre bientôt et longtemps après. <b>Je vais déménager l’année prochaine</b> est naturel, tout comme <b>je t’appellerai dans cinq minutes</b>. Les deux formes sont parfois possibles, selon le point de vue.</p>"], ["Futur ou conditionnel ?", "<table><tr><th>Futur simple</th><th>Conditionnel présent</th></tr><tr><td>je pourrai</td><td>je pourrais</td></tr><tr><td>nous serons</td><td>nous serions</td></tr><tr><td>vous viendrez</td><td>vous viendriez</td></tr></table><p>Même base, terminaisons différentes. <b>Je viendrai demain</b> annonce ma venue ; <b>je viendrais si j’avais le temps</b> pose une condition.</p><div class=\"example\"><b>Si j’ai le temps, je viendrai.</b><br><b>Quand tu arriveras, nous commencerons.</b></div><p>Pour une condition réalisable : si + présent, puis futur dans la principale. Dans ce schéma, pas de futur après si. Quand peut prendre le futur pour un événement à venir.</p>"], ["Réutiliser sans modèle", "<p>Décris trois projets pour la semaine prochaine. Fais ensuite une promesse et explique ce que tu feras si une réunion est annulée. </p><p>Le <b>futur antérieur</b> (j’aurai terminé) est un autre temps, vu au cours 18 : voir <a href=\"#futurant\">Le futur antérieur</a>.</p>"]], "en": "The near future is <span class=\"fr\" lang=\"fr\">aller</span> in the present plus an infinitive. The simple future shares its stem with the conditional but has different endings. Near versus distant time is not a strict selection rule. This is supplementary revision.", "source": "Complément ajouté le 3 novembre 2026. Cours 12 : LE CONDITIONNEL 1 (1).pdf p. 1 montre le futur d’aimer et utilise sa base ; aucune unité autonome sur le futur n’est fournie ; futur antérieur traité depuis le cours 18 dans la fiche <a href=\"#futurant\">Le futur antérieur</a>. <a href=\"https://apprendre.tv5monde.com/fr/aides/grammaire-le-futur-simple\" target=\"_blank\" rel=\"noopener\">TV5MONDE : futur simple, niveau A2</a>. Exercices nouveaux.", "q": [["Au futur simple : demain, nous ___ (être) au CERN.", "serons", "Être : ser- + ons."], ["Au futur simple : vous ___ (recevoir) une réponse.", "recevrez", "Recevoir : recevr- + ez."], ["Au futur simple : je ___ (pouvoir) venir demain.", "pourrai", "Futur : pourrai ; conditionnel : pourrais."], ["Au futur proche : elle ___ (se lever) tôt.", "va se lever", "Aller au présent + infinitif pronominal."], ["Au futur simple : si tu as le temps, tu ___ (venir) avec nous.", "viendras", "Si + présent ; futur dans la proposition principale."], ["Quand vous ___ (arriver, futur simple), nous commencerons.", "arriverez", "Un futur est possible après quand."]]});
modules.find(m=>m.id==='conditionnel').sections.push(['Revoir la base du futur', '<p>Besoin du rappel ? Consulte <a href="#futur">Parler du futur</a> : futur proche, futur simple et différence entre je pourrai et je pourrais.</p>']);

// Lessons 15–16, verified against the 15 November 2026 archive.
modules.push(...[
  {
    "id": "relatifs",
    "n": "17",
    "title": "Les pronoms relatifs",
    "subtitle": "Qui, que, dont, où",
    "lessons": [
      15
    ],
    "tag": "Grammaire",
    "color": "teal",
    "intro": "Relier deux idées et préciser de qui ou de quoi on parle.",
    "sections": [
      [
        "Choisir selon le rôle dans la relative",
        "<table><tr><th>Rôle</th><th>Pronom</th><th>Exemple</th></tr><tr><td>Sujet du verbe</td><td>qui</td><td>Le tram qui arrive va à la gare.</td></tr><tr><td>Complément direct</td><td>que / qu’</td><td>Le tram que je prends est plein.</td></tr><tr><td>Complément construit avec de</td><td>dont</td><td>Le projet dont je parle commence lundi.</td></tr><tr><td>Lieu ou temps</td><td>où</td><td>Le quartier où je vis ; le jour où je suis arrivé.</td></tr></table><p><b>Qui et que</b> peuvent reprendre une personne ou une chose. Choisis selon leur fonction, pas selon « personne ou objet ». Dans <b>le collègue que Léa connaît</b>, Léa est le sujet de connaît ; que remplace le collègue, son COD.</p>"
      ],
      [
        "Retrouver la construction de départ",
        "<div class=\"example\">J’ai besoin de ce document → le document <b>dont</b> j’ai besoin.<br>Je suis satisfait de ce résultat → le résultat <b>dont</b> je suis satisfait.<br>J’apprécie le calme de ce quartier → le quartier <b>dont</b> j’apprécie le calme.</div><p>Dont peut reprendre un complément de verbe, d’adjectif ou de nom. Évite de reprendre <b>le même complément</b> une seconde fois avec en ou un possessif : <b>le projet dont je parle</b>, pas « dont j’en parle » ; <b>le quartier dont j’apprécie le calme</b>, pas « dont j’apprécie son calme ».</p><p>Autre emploi : <b>deux cafés, dont un serré</b>. Dont signifie ici « inclus dans ce nombre » ; de même : trois collègues, dont deux francophones.</p>"
      ],
      [
        "Élision, préposition et accord",
        "<p><b>Que</b> devient <b>qu’</b> devant une voyelle ou un h muet : le livre qu’elle lit. Le <b>qui relatif</b> ne s’élide pas : le livre qui est ici.</p><p>Avec une préposition et une personne : <b>la collègue avec qui je travaille</b>. La préposition reste celle de la construction d’origine.</p><p>Rappel d’accord : <b>les lettres que j’ai écrites</b>. Que reprend un COD féminin pluriel placé avant avoir. Compare avec <a href=\"#doubles\">les doubles pronoms</a>.</p>"
      ],
      [
        "Définir sans traduire",
        "<p>Décris un objet de ton bureau, un lieu à Genève ou une personne sans donner son nom. Utilise deux relatives : <b>c’est un objet qui… et que…</b>, <b>c’est un lieu où…</b>, <b>c’est une chose dont…</b>. Fais deviner ce que tu décris.</p>"
      ]
    ],
    "en": "Choose by grammatical function inside the relative clause. <span class=\"fr\" lang=\"fr\">Dont</span> replaces a <span class=\"fr\" lang=\"fr\">de</span> complement, so do not repeat that same complement with <span class=\"fr\" lang=\"fr\">en</span> or a possessive. This does not ban every possessive anywhere in a clause containing <span class=\"fr\" lang=\"fr\">dont</span>.",
    "source": "Cours 15 : PRONOMS RELATIFS (1).docx, pp. 1–3 ; PRONOMS RELATIFS.docx, p. 2 ; B1- DEVOIR 7.docx, construction avec préposition. Pagination des DOCX rendus pour cette vérification. Exemples et exercices nouveaux.",
    "q": [
      [
        "Le collègue ___ travaille avec moi habite à Meyrin.",
        "qui",
        "Qui est le sujet de travaille."
      ],
      [
        "Voici le livre ___ tu cherches.",
        "que",
        "Tu cherches le livre : COD."
      ],
      [
        "C’est le document ___ nous avons besoin.",
        "dont",
        "Avoir besoin de ce document."
      ],
      [
        "Je me souviens du jour ___ nous avons emménagé.",
        "où",
        "Où reprend un moment."
      ],
      [
        "C’est la collègue avec ___ je prépare la réunion.",
        "qui",
        "Avec qui reprend une personne ; on garde avec."
      ],
      [
        "Les lettres que j’ai ___ sont sur la table. (écrire, participe passé)",
        "écrites",
        "Que reprend lettres, COD féminin pluriel placé avant avoir."
      ]
    ]
  },
  {
    "id": "relief",
    "n": "18",
    "title": "La mise en relief",
    "subtitle": "C’est… qui / que ; ce qui, ce que, ce dont",
    "lessons": [
      15
    ],
    "tag": "Grammaire",
    "color": "teal",
    "intro": "Mettre une personne, une chose ou une idée au premier plan.",
    "sections": [
      [
        "C’est… qui ou c’est… que",
        "<div class=\"example\">Léa organise la réunion → <b>c’est Léa qui</b> organise la réunion.<br>Je préfère le train → <b>c’est le train que</b> je préfère.</div><p>Qui reprend le sujet ; que reprend le complément direct. La fonction reste la même que dans la phrase de départ.</p><p>Avec un complément introduit par une préposition, on peut garder celle-ci : <b>c’est à ce projet que je pense</b>. Compare avec « ce à quoi » ci-dessous.</p>"
      ],
      [
        "Ce qui, ce que, ce dont, ce à quoi",
        "<table><tr><th>Construction de départ</th><th>Mise en relief</th></tr><tr><td>Ce travail me plaît.</td><td>Ce qui me plaît, c’est ce travail.</td></tr><tr><td>Je cherche une solution.</td><td>Ce que je cherche, c’est une solution.</td></tr><tr><td>J’ai besoin de repos.</td><td>Ce dont j’ai besoin, c’est du repos.</td></tr><tr><td>Je pense à mon départ.</td><td>Ce à quoi je pense, c’est mon départ.</td></tr></table><p>Ces formes annoncent l’élément placé après c’est. Pour choisir, reconstruis le verbe : <b>quelque chose plaît</b> (sujet → ce qui), <b>chercher quelque chose</b> (→ ce que), <b>avoir besoin de</b> (→ ce dont), <b>penser à</b> (→ ce à quoi).</p>"
      ],
      [
        "Changer l’ordre sans changer le sens",
        "<div class=\"example\"><b>Ce qui me motive, c’est</b> la recherche.<br>La recherche, <b>c’est ce qui</b> me motive.<br><b>Ce que je préfère, c’est</b> travailler en équipe.</div><p>Emploie ces structures pour préciser ton opinion ou une priorité. Inutile de les mettre dans chaque phrase. Pour t’entraîner : dis ce qui te plaît dans ton travail, ce que tu voudrais améliorer et ce dont tu as besoin pour progresser.</p>"
      ]
    ],
    "en": "The choice follows the verb construction: <span class=\"fr\" lang=\"fr\">ce qui</span> is the subject, <span class=\"fr\" lang=\"fr\">ce que</span> the direct object, <span class=\"fr\" lang=\"fr\">ce dont</span> a <span class=\"fr\" lang=\"fr\">de</span> complement, and <span class=\"fr\" lang=\"fr\">ce à quoi</span> an <span class=\"fr\" lang=\"fr\">à</span> complement referring to an idea or thing. Keep the original meaning when adding emphasis.",
    "source": "Cours 15 : PRONOMS RELATIFS.docx, p. 1, tableau de mise en relief et questions orales. Exemples et exercices nouveaux ; le modèle c’est à… que est un complément explicatif.",
    "q": [
      [
        "C’est Amélie ___ prépare le dossier.",
        "qui",
        "Amélie est le sujet de prépare."
      ],
      [
        "C’est ce quartier ___ je préfère.",
        "que",
        "Je préfère ce quartier : COD."
      ],
      [
        "Ce ___ me plaît ici, c’est le calme.",
        "qui",
        "Ce qui est le sujet de plaît."
      ],
      [
        "Ce ___ je cherche, c’est un logement.",
        "que",
        "Chercher quelque chose : COD."
      ],
      [
        "Ce ___ j’ai besoin, c’est d’un peu de temps.",
        "dont",
        "Avoir besoin de."
      ],
      [
        "Ce ___ je pense, c’est mon prochain voyage.",
        "à quoi",
        "Penser à quelque chose."
      ]
    ]
  },
  {
    "id": "demonstratifs",
    "n": "19",
    "title": "Les pronoms démonstratifs",
    "subtitle": "Celui, celle, ceux, celles",
    "lessons": [
      15
    ],
    "tag": "Grammaire",
    "color": "teal",
    "intro": "Désigner sans répéter le nom.",
    "sections": [
      [
        "Garder le genre et le nombre",
        "<table><tr><th></th><th>Masculin</th><th>Féminin</th></tr><tr><td>Singulier</td><td>celui</td><td>celle</td></tr><tr><td>Pluriel</td><td>ceux</td><td>celles</td></tr></table><div class=\"example\">Je compare deux appartements. <b>Celui qui</b> est près du tram me plaît.<br>Ces chaussures sont confortables, mais <b>celles que</b> j’ai essayées hier étaient trop petites.</div><p>Le pronom reprend le genre et le nombre du <b>nom remplacé</b>. Une relative permet de préciser lequel ou lesquels.</p>"
      ],
      [
        "Distinguer deux possibilités",
        "<div class=\"example\">Quel sac préfères-tu ? <b>Celui-ci ou celui-là ?</b><br>Quelle veste choisis-tu ? <b>Celle-ci</b> est plus légère.</div><p>Les formes en <b>-ci / -là</b> servent à distinguer des personnes ou des choses selon le contexte. Elles s’écrivent avec un trait d’union.</p><p>Avec de + nom : <b>celui de Léa</b>, <b>celle de mon collègue</b>. Les formes simples celui, celle, ceux, celles sont normalement accompagnées d’une précision : une relative ou un complément en de.</p>"
      ],
      [
        "Ne pas confondre déterminant et pronom",
        "<div class=\"example\"><b>Ce livre</b> est intéressant. → Je préfère <b>celui-ci</b>.<br><b>Cette idée</b> me plaît. → Je préfère <b>celle que</b> tu as proposée.</div><p>Ce, cet, cette, ces accompagnent un nom. Celui, celle, ceux, celles le remplacent.</p>"
      ]
    ],
    "en": "Match the noun being replaced, not the owner or speaker.",
    "source": "Cours 15 et dossier B1- DEVOIRS : B1- DEVOIR 7.docx, section « Les pronoms démonstratifs ». Les deux copies sont identiques. Exemples et exercices nouveaux ; de + nom et le contraste déterminant/pronom sont des compléments.",
    "q": [
      [
        "Parmi ces deux livres, je prends ___ qui parle de Genève.",
        "celui",
        "Livre : masculin singulier."
      ],
      [
        "De toutes ces vestes, je préfère ___ que tu portes.",
        "celle",
        "Veste : féminin singulier."
      ],
      [
        "Les dossiers urgents sont ___ qui sont sur mon bureau.",
        "ceux",
        "Dossiers : masculin pluriel."
      ],
      [
        "Ces clés sont les miennes ; ___ qui sont près de la porte sont à Léa.",
        "celles",
        "Clés : féminin pluriel."
      ],
      [
        "Tu préfères cette lampe-ci ou cette lampe-là ? → Tu préfères ___ ou celle-là ?",
        "celle-ci",
        "Lampe : féminin singulier ; trait d’union avec -ci."
      ]
    ]
  },
  {
    "id": "adverbes",
    "n": "20",
    "title": "Les adverbes",
    "subtitle": "Formation en -ment et emploi",
    "lessons": [
      16
    ],
    "tag": "Grammaire",
    "color": "teal",
    "intro": "Préciser comment, à quelle fréquence ou avec quelle intensité on agit.",
    "sections": [
      [
        "Former les adverbes en -ment",
        "<table><tr><th>Cas fréquent</th><th>Formation</th><th>Exemples</th></tr><tr><td>Adjectif ordinaire</td><td>féminin + ment</td><td>lent → lente → lentement ; doux → douce → doucement ; heureux → heureusement ; sec → sèchement</td></tr><tr><td>Masculin terminé par une voyelle prononcée</td><td>masculin + ment</td><td>poli → poliment ; absolu → absolument ; modéré → modérément ; vrai → vraiment</td></tr><tr><td>-ant</td><td>-amment</td><td>suffisant → suffisamment ; constant → constamment</td></tr><tr><td>-ent</td><td>souvent -emment</td><td>récent → récemment ; fréquent → fréquemment ; prudent → prudemment</td></tr></table><p>Les terminaisons <b>-amment</b> et <b>-emment</b> se prononcent de la même façon. Ces règles ont des exceptions ; ce ne sont pas des recettes universelles.</p>"
      ],
      [
        "Les formes à retenir",
        "<p><b>Gentil → gentiment ; gai → gaiement ; précis → précisément ; profond → profondément ; énorme → énormément ; intense → intensément.</b></p><div class=\"example\">Peux-tu expliquer cela <b>précisément</b> ?<br>Elle m’a répondu <b>gentiment</b>.<br>Il a <b>énormément</b> travaillé.</div><p>À retenir aussi : <b>bon → bien</b>, <b>mauvais → mal</b>, <b>lent → lentement</b> mais <b>rapide → rapidement</b> ou <b>vite</b>. Certains adjectifs en -ent suivent une autre formation, par exemple <b>lent → lentement</b>.</p>"
      ],
      [
        "Adjectif ou adverbe ?",
        "<div class=\"example\">Cette explication est <b>claire</b>. → Elle explique <b>clairement</b>.<br>Ces réponses sont <b>précises</b>. → Ils répondent <b>précisément</b>.</div><p>Un adjectif décrit le nom et s’accorde avec lui. Les adverbes de manière présentés ici sont invariables. Tous les adverbes ne se terminent pas par -ment : <b>souvent, rarement, bien, vite</b>.</p><p>Repère de placement : <b>je comprends bien ; j’ai bien compris ; elle parle très clairement</b>. La place dépend de l’adverbe et de ce qu’il modifie : évite une règle unique pour tous les cas.</p>"
      ],
      [
        "Réutiliser les nuances",
        "<p>Décris tes habitudes de travail avec un adverbe de fréquence, puis explique comment tu prépares une présentation. Utilise par exemple <b>souvent, rarement, régulièrement, soigneusement</b>.</p>"
      ]
    ],
    "en": "Do not treat <span class=\"fr\" lang=\"fr\">-ent → -emment</span> as universal (<span class=\"fr\" lang=\"fr\">lentement</span> is an obvious exception).",
    "source": "Cours 16 : LES ADVERBES (1).pdf, p. 1 (règles dans une image) et p. 2 (application). Exemples et exercices nouveaux, distincts des sept phrases de la fiche.",
    "q": [
      [
        "Elle répond ___ aux visiteurs. (poli → adverbe)",
        "poliment",
        "Poli se termine par une voyelle prononcée : poliment."
      ],
      [
        "Peux-tu parler plus ___ ? (lent → adverbe)",
        "lentement",
        "Lente + ment."
      ],
      [
        "Nous avons ___ changé de bureau. (récent → adverbe)",
        "récemment",
        "Récent → récemment, avec deux m."
      ],
      [
        "J’ai ___ de temps pour finir. (suffisant → adverbe)",
        "suffisamment",
        "Suffisant → suffisamment, avec deux m."
      ],
      [
        "Il a décrit le problème ___. (précis → adverbe)",
        "précisément",
        "Forme à retenir : précisément."
      ],
      [
        "Ils nous ont accueillis ___. (gentil → adverbe)",
        "gentiment",
        "Forme particulière : gentiment."
      ]
    ]
  }
]);

// Lessons 17–19, verified against the 17 November 2026 archive (FrenchB1m_lesson1-19).
modules.push(...[
  {
    "id": "cause",
    "n": "21",
    "title": "Cause, conséquence et but",
    "subtitle": "Parce que, donc, pour que",
    "lessons": [
      17
    ],
    "tag": "Grammaire",
    "color": "terra",
    "intro": "Expliquer pourquoi quelque chose arrive, ce qui en résulte et dans quel but on agit.",
    "sections": [
      [
        "La cause : une phrase ou un nom ?",
        "<table><tr><th>Après…</th><th>On utilise</th><th>Exemple</th></tr><tr><td><b>comme · parce que · car · puisque · étant donné que</b></td><td>une phrase avec un verbe conjugué</td><td>Comme le tram est en retard, je prends le bus.</td></tr><tr><td><b>en raison de · étant donné · à cause de · grâce à</b></td><td>un nom</td><td>En raison des travaux, la rue est fermée.</td></tr></table><div class=\"example\">Je reste à la maison <b>parce que</b> je suis malade.<br><b>Étant donné</b> le prix, je n’achète pas ce vélo.<br>Le vol a du retard <b>à cause du</b> brouillard.<br>J’ai trouvé ce poste <b>grâce à</b> une amie.</div><p>Attention aux contractions : à cause <b>du</b> / <b>de la</b> / <b>des</b> ; grâce <b>au</b> / <b>à la</b> / <b>aux</b> ; en raison <b>du</b> / <b>des</b>.</p>"
      ],
      [
        "Les remarques du cours",
        "<ul><li><b>À cause de</b> = cause négative ; <b>grâce à</b> = cause positive.</li><li><b>Comme</b> se place toujours en début de phrase : <b>Comme il pleut</b>, je reste. Au milieu de la phrase, on dit <b>parce que</b> : je reste <b>parce qu’</b>il pleut.</li><li><b>Puisque</b> = cause évidente ou connue de l’interlocuteur : <b>Puisque tu es là</b>, aide-moi.</li><li><b>Car</b> est plus soutenu que <b>parce que</b> : il est absent, <b>car</b> il est malade.</li><li><b>Étant donné</b> est invariable : étant donné la situation, étant donné les prix.</li></ul>"
      ],
      [
        "La conséquence",
        "<table><tr><th>Connecteur</th><th>Exemple</th></tr><tr><td><b>donc · du coup · alors · par conséquent · en conséquence</b></td><td>Le serveur est en panne, <b>donc</b> je ne peux pas me connecter.</td></tr><tr><td><b>de sorte que</b> + indicatif</td><td>Il a bien expliqué, <b>de sorte que</b> nous avons tous compris.</td></tr><tr><td><b>tellement… que</b> + indicatif</td><td>Elle est <b>tellement</b> fatiguée <b>qu’</b>elle s’endort au bureau.<br>Il y avait <b>tellement de</b> monde <b>que</b> nous sommes partis.</td></tr><tr><td><b>ce qui fait que</b> + indicatif</td><td>Elle parle fort, <b>ce qui fait que</b> tout le monde l’entend.</td></tr><tr><td><b>c’est pour ça que</b> + indicatif</td><td>Mon vélo est cassé, <b>c’est pour ça que</b> je suis en retard.</td></tr></table><p><b>Du coup, alors, ce qui fait que, c’est pour ça que</b> s’utilisent surtout à l’oral. À l’écrit, préfère <b>donc, par conséquent, en conséquence</b>.</p><div class=\"example\">Cause : je suis en retard <b>parce que</b> le bus est tombé en panne.<br>Conséquence : le bus est tombé en panne, <b>donc</b> je suis en retard.</div>"
      ],
      [
        "Le but : pour que + subjonctif",
        "<div class=\"formula\">pour que · de façon que · de manière que <span>+</span> subjonctif</div><div class=\"example\">J’ai laissé la clé à Léa <b>pour qu’</b>elle <b>puisse</b> entrer.<br>Il parle lentement <b>de manière que</b> tout le monde <b>comprenne</b>.<br>Elle a écrit un résumé <b>de façon que</b> les autres <b>soient</b> informés.</div><p>Quand le sujet est <b>le même</b>, on utilise <b>pour</b> ou <b>afin de</b> + infinitif : je prends des notes <b>pour</b> ne rien oublier ; elle étudie <b>afin de</b> réussir. Sujets différents : je répète <b>pour que tu comprennes</b> ; même sujet : je répète <b>pour comprendre</b>.</p><p>But ou cause ? Je ferme la fenêtre <b>parce qu’</b>il y a du bruit (cause) ; je la ferme <b>pour qu’</b>il n’y ait plus de bruit (but). Rappel des formes : <a href=\"#subjonctif\">Le subjonctif présent</a>.</p>"
      ]
    ],
    "en": "Use a clause after <span class=\"fr\" lang=\"fr\">comme, parce que, car, puisque, étant donné que</span> and a noun after <span class=\"fr\" lang=\"fr\">en raison de, étant donné, à cause de, grâce à</span>. <span class=\"fr\" lang=\"fr\">Donc</span> introduces the result, <span class=\"fr\" lang=\"fr\">parce que</span> the reason. Purpose: <span class=\"fr\" lang=\"fr\">pour que</span> + subjunctive when the subjects differ, <span class=\"fr\" lang=\"fr\">pour / afin de</span> + infinitive when the subject is the same (the infinitive rule is a reference addition).",
    "source": "Cours 17 : CAUSE ET CONSÉQUENCE.docx (tableau en image et remarques) ; CAUSE ET BUT.docx (rappels sur comme, puisque, parce que, à cause de / grâce à ; but avec pour que, de façon que, de manière que) ; Connecteurs.docx (afin de). Pour / afin de + infinitif, si… que et le contraste but / cause sont des compléments de référence. Exemples et exercices nouveaux.",
    "q": [
      [
        "Le vol a été retardé ___ la neige. (cause négative)",
        "à cause de",
        "Une cause négative suivie d’un nom : à cause de.",
        [
          "à cause de",
          "grâce à",
          "pour que"
        ]
      ],
      [
        "Nous avons réussi ___ ton aide. (cause positive)",
        "grâce à",
        "Une cause positive suivie d’un nom : grâce à."
      ],
      [
        "___ il pleut, le match est annulé.",
        "Comme",
        "Comme, en début de phrase, + verbe conjugué. Car ne commence pas une phrase ; grâce à demande un nom.",
        [
          "Comme",
          "Car",
          "Grâce à"
        ]
      ],
      [
        "___ la situation, nous reportons la réunion.",
        "Étant donné",
        "Étant donné + nom ; étant donné que et parce que demandent un verbe conjugué.",
        [
          "Étant donné",
          "Étant donné que",
          "Parce que"
        ]
      ],
      [
        "___ tu connais déjà Marc, je ne te le présente pas. (cause connue de l’interlocuteur)",
        "puisque|comme|étant donné que",
        "Puisque : une cause que l’autre connaît déjà. Comme ou étant donné que sont aussi possibles en début de phrase."
      ],
      [
        "Il parle ___ vite que je ne comprends rien.",
        "tellement|si",
        "Tellement… que + indicatif exprime la conséquence (si… que aussi)."
      ],
      [
        "Il y a une grève, ___ je vais au travail à vélo.",
        "donc",
        "Le résultat de la grève : donc.",
        [
          "donc",
          "car",
          "grâce à"
        ]
      ],
      [
        "J’explique encore une fois pour que tout le monde ___ (comprendre).",
        "comprenne",
        "Pour que + subjonctif : que tout le monde comprenne."
      ],
      [
        "Elle a écrit clairement de manière que le texte ___ (être) facile à lire. (but)",
        "soit",
        "Pour exprimer le but, de manière que + subjonctif : que le texte soit. Avec l’indicatif (est), on dirait seulement le résultat."
      ],
      [
        "Je me lève tôt ___ ne pas rater le train.",
        "pour|afin de|de manière à|de façon à",
        "Même sujet (je… je) : pour ou afin de + infinitif."
      ]
    ]
  },
  {
    "id": "connecteurs",
    "n": "22",
    "title": "Les connecteurs logiques",
    "subtitle": "Relier ses idées",
    "lessons": [
      17,
      19
    ],
    "tag": "Communication",
    "color": "blue",
    "intro": "Choisir le mot qui montre le lien entre deux idées : ajout, opposition, cause, conséquence, ordre, exemple, conclusion.",
    "sections": [
      [
        "Le tableau par fonction",
        "<table><tr><th>Fonction</th><th>Connecteurs</th><th>Exemple</th></tr><tr><td>Ajouter</td><td><b>et · de plus · en outre</b></td><td>Le loyer est cher ; <b>en outre</b>, il n’y a pas de balcon.</td></tr><tr><td>Choisir</td><td><b>ou</b></td><td>Tu prends le train <b>ou</b> la voiture ?</td></tr><tr><td>Opposer</td><td><b>mais · cependant · pourtant · néanmoins · toutefois · en revanche</b></td><td>Le quartier est calme ; <b>en revanche</b>, il n’y a pas de commerces.</td></tr><tr><td>Cause</td><td><b>parce que · car · en effet</b></td><td>Elle est absente ; <b>en effet</b>, elle est malade.</td></tr><tr><td>Conséquence</td><td><b>donc · par conséquent · c’est pourquoi</b></td><td>Il y a des travaux, <b>c’est pourquoi</b> la rue est fermée.</td></tr><tr><td>But</td><td><b>afin de</b> + infinitif</td><td>Elle étudie <b>afin de</b> réussir.</td></tr><tr><td>Ordre</td><td><b>d’abord · ensuite · puis · enfin</b></td><td><b>D’abord</b> je lis, <b>puis</b> je prends des notes, <b>enfin</b> je résume.</td></tr><tr><td>Exemple</td><td><b>par exemple</b></td><td>J’aime les sports, <b>par exemple</b> le ski.</td></tr><tr><td>Conclure</td><td><b>pour conclure · en conclusion</b></td><td><b>En conclusion</b>, ce projet est utile.</td></tr></table><p>Pour la cause et la conséquence en détail (comme, puisque, grâce à, tellement… que), voir <a href=\"#cause\">Cause, conséquence et but</a>.</p>"
      ],
      [
        "Opposer : mais, pourtant, en revanche",
        "<p><b>Mais</b> s’emploie partout. <b>Cependant, néanmoins, toutefois</b> sont plus soignés. <b>Pourtant</b> marque la surprise : on attendait autre chose. Il a beaucoup révisé ; <b>pourtant</b>, il a raté l’examen.</p><div class=\"example\">Le restaurant est cher ; <b>en revanche</b>, la cuisine est excellente.<br>Les chambres sont claires ; <b>par contre</b>, elles sont petites.</div><p><b>En revanche</b> et <b>par contre</b> (plus courant à l’oral) opposent deux côtés d’une même chose, souvent un point positif et un point négatif. Très utile pour peser le pour et le contre à l’oral.</p>"
      ],
      [
        "Bien que, même si, malgré",
        "<table><tr><th>Construction</th><th>Après</th><th>Exemple</th></tr><tr><td><b>bien que</b></td><td>subjonctif</td><td>Bien qu’il <b>fasse</b> froid, nous sortons.</td></tr><tr><td><b>même si</b></td><td>indicatif</td><td>Même s’il <b>fait</b> froid, nous sortons.</td></tr><tr><td><b>malgré</b></td><td>un nom</td><td>Malgré le <b>froid</b>, nous sortons.</td></tr></table><p>Les trois disent la même chose : l’obstacle n’empêche pas l’action. <b>Même si + il</b> devient <b>même s’il</b>. Comme après si, pas de futur après même si : <b>même s’il pleut demain</b>, nous sortirons. Pour <b>bien que</b>, revois <a href=\"#subjonctif\">le subjonctif</a> : bien que je sois, bien qu’il ait, bien qu’elle puisse.</p>"
      ],
      [
        "Dans un petit texte argumentatif",
        "<div class=\"example\">À mon avis, il faudrait fermer le centre-ville aux voitures, <b>car</b> elles polluent. <b>Cependant</b>, certains commerçants ont peur de perdre des clients. <b>Par exemple</b>, les livraisons seraient plus compliquées. <b>Pourtant</b>, dans beaucoup de villes, les rues piétonnes attirent du monde. <b>En conclusion</b>, je pense qu’il faut essayer, mais progressivement.</div><p><b>En effet</b> explique ce qu’on vient de dire (il est absent ; en effet, il est malade). <b>Donc</b> donne le résultat (il est malade, donc il est absent). <b>Toutefois</b> = cependant. <b>En outre</b> = de plus.</p>"
      ]
    ],
    "en": "Choose the connector by its function: <span class=\"fr\" lang=\"fr\">en effet</span> gives the reason for what was just said, <span class=\"fr\" lang=\"fr\">donc</span> the result, <span class=\"fr\" lang=\"fr\">toutefois</span> = <span class=\"fr\" lang=\"fr\">cependant</span>, <span class=\"fr\" lang=\"fr\">en outre</span> = <span class=\"fr\" lang=\"fr\">de plus</span>. <span class=\"fr\" lang=\"fr\">Bien que</span> takes the subjunctive, <span class=\"fr\" lang=\"fr\">même si</span> the indicative (never the future), <span class=\"fr\" lang=\"fr\">malgré</span> a noun.",
    "source": "Cours 17 : Connecteurs.docx (tableau de vingt connecteurs, bien que / même si) ; cours 18 : B1 DONNER SON OPINION.docx (par contre, en revanche) ; cours 19 : B1 - BILAN.pdf, questions 18 à 20 (en effet, toutefois, donc ; en outre, en revanche, cependant, pourtant). Regroupement par fonction et nuances : compléments de référence. Exemples et exercices nouveaux ; le texte de l’exercice 2 n’est pas reproduit.",
    "q": [
      [
        "Il fait beau, ___ je reste à la maison. (opposition)",
        "pourtant|cependant|néanmoins|toutefois|mais|et pourtant",
        "Tous ces mots opposent deux idées ; pourtant marque la surprise."
      ],
      [
        "Bien qu’il ___ (être) tard, nous continuons.",
        "soit",
        "Bien que + subjonctif : qu’il soit."
      ],
      [
        "Même s’il ___ (pleuvoir) demain, nous sortirons.",
        "pleut",
        "Même si + indicatif présent, pas de futur : s’il pleut."
      ],
      [
        "___ le bruit, elle a bien dormi.",
        "malgré",
        "Malgré + nom : malgré le bruit."
      ],
      [
        "Le restaurant est cher ; ___, la cuisine est excellente.",
        "en revanche",
        "Un point négatif puis un point positif : en revanche.",
        [
          "en revanche",
          "donc",
          "d’abord"
        ]
      ],
      [
        "J’ai raté mon train ; ___, je suis arrivé en retard.",
        "donc",
        "Le retard est le résultat : donc.",
        [
          "donc",
          "toutefois",
          "par exemple"
        ]
      ],
      [
        "Il n’est pas venu ; ___, il était malade.",
        "en effet",
        "En effet donne la raison de ce qui précède.",
        [
          "en effet",
          "en conclusion",
          "malgré"
        ]
      ],
      [
        "___, je pense que ce projet est une bonne idée. (dernière phrase du texte)",
        "En conclusion",
        "Un connecteur de conclusion.",
        [
          "En conclusion",
          "Par exemple",
          "En effet"
        ]
      ],
      [
        "Les chambres sont propres. ___, elles sont petites.",
        "Toutefois",
        "Une opposition : toutefois (= cependant).",
        [
          "Toutefois",
          "Donc",
          "En effet"
        ]
      ],
      [
        "Le train a du retard ; ___ nous arriverons après vingt heures.",
        "donc",
        "Une conséquence : donc.",
        [
          "donc",
          "en revanche",
          "par exemple"
        ]
      ],
      [
        "Elle est très compétente ; ___, elle parle trois langues.",
        "en outre",
        "On ajoute une qualité : en outre (= de plus).",
        [
          "en outre",
          "toutefois",
          "donc"
        ]
      ]
    ]
  },
  {
    "id": "futurant",
    "n": "23",
    "title": "Le futur antérieur",
    "subtitle": "Une action terminée avant une autre",
    "lessons": [
      18
    ],
    "tag": "Conjugaison",
    "color": "teal",
    "intro": "Dire qu’une action sera finie avant une autre action future ou avant une date.",
    "sections": [
      [
        "Avant, puis après",
        "<div class=\"example\">Tu partiras en vacances quand tu <b>auras passé</b> ton examen.<br>Quand tu rentreras (à 22 h), j’<b>aurai mangé</b> (à 20 h).<br>Pour mes 30 ans, j’<b>aurai obtenu</b> mon diplôme.</div><p>On imagine une action future <b>préalable</b> : elle sera terminée <b>avant</b> une autre action future, ou avant une date. D’abord (1) tu passes ton examen, ensuite (2) tu pars en vacances : l’action (1) est au futur antérieur, l’action (2) au futur simple.</p>"
      ],
      [
        "Formation",
        "<div class=\"formula\">avoir / être au futur simple <span>+</span> participe passé</div><table><tr><th></th><th>avoir : manger</th><th>être : aller</th></tr><tr><td>je / j’</td><td>aurai mangé</td><td>serai allé(e)</td></tr><tr><td>tu</td><td>auras mangé</td><td>seras allé(e)</td></tr><tr><td>il / elle / on</td><td>aura mangé</td><td>sera allé / allée</td></tr><tr><td>nous</td><td>aurons mangé</td><td>serons allé(e)s</td></tr><tr><td>vous</td><td>aurez mangé</td><td>serez allé(e)(s)</td></tr><tr><td>ils / elles</td><td>auront mangé</td><td>seront allés / allées</td></tr></table><p>L’auxiliaire et les accords sont ceux du <a href=\"#pc\">passé composé</a> : avec <b>être</b>, accord avec le sujet (elle sera partie, ils seront arrivés, je me serai levé(e)) ; avec <b>avoir</b>, accord avec un COD placé avant (les lettres que j’aurai écrites). Négation et adverbe autour de l’auxiliaire : je <b>n’</b>aurai <b>pas</b> fini ; j’aurai <b>déjà</b> fini. Les 27 verbes sont conjugués dans le <a href=\"#verbes\">répertoire</a>.</p>"
      ],
      [
        "Après quand, dès que, une fois que",
        "<div class=\"example\"><b>Quand</b> vous <b>aurez lu</b> le texte, vous répondrez aux questions.<br>Je t’appellerai <b>dès que</b> je <b>serai arrivé(e)</b>.<br><b>Une fois que</b> nous <b>aurons mangé</b>, nous sortirons.<br>Il rangera tout <b>aussitôt qu’</b>il <b>aura fini</b>.</div><p>Après <b>quand, dès que, une fois que, aussitôt que</b>, on trouve souvent le futur antérieur : l’action est terminée avant l’autre. Mais c’est l’action déjà terminée qui prend le futur antérieur, pas le mot qui décide : dans <b>quand tu rentreras, j’aurai mangé</b>, le futur antérieur est dans l’autre partie de la phrase, car le repas vient en premier. Avec une date ou <b>déjà</b> : demain à midi, j’<b>aurai</b> déjà <b>terminé</b>.</p>"
      ],
      [
        "Futur simple ou futur antérieur ?",
        "<table><tr><th>Futur simple</th><th>Futur antérieur</th></tr><tr><td>Quand elle <b>se réveillera</b>, nous <b>partirons</b>.<br>Une action, puis l’autre, tout de suite après.</td><td>Quand elle <b>se réveillera</b>, j’<b>aurai</b> déjà <b>préparé</b> le café.<br>Le café sera prêt <b>avant</b> son réveil.</td></tr></table><p>Le futur antérieur présente une action comme <b>déjà terminée</b> au moment de l’autre. Si les deux actions se suivent simplement, deux futurs simples suffisent. Après <b>si</b>, ni futur ni futur antérieur : <b>si tu as fini, tu pourras partir</b> (présent ou passé composé après si). Le futur simple se révise dans <a href=\"#futur\">Parler du futur</a>.</p>"
      ]
    ],
    "en": "The future perfect is <span class=\"fr\" lang=\"fr\">avoir / être</span> in the simple future plus the past participle, with the same auxiliary and agreement rules as the <span class=\"fr\" lang=\"fr\">passé composé</span>. It marks the action that will be finished first. Where English says “when I have finished”, French says <span class=\"fr\" lang=\"fr\">quand j’aurai fini</span>: after <span class=\"fr\" lang=\"fr\">quand</span>, a future action is never in the present tense.",
    "source": "Cours 18 : LE FUTUR ANTÉRIEUR.docx (idée d’antériorité, exemples, tableau de formation aller / manger, exercices). Dès que, une fois que, aussitôt que, accords, négation et contraste avec le futur simple et avec si : compléments de référence. Exemples et exercices nouveaux.",
    "q": [
      [
        "Quand tu ___ (lire, futur antérieur) ce chapitre, tu pourras faire l’exercice.",
        "auras lu",
        "Lire → lu ; avoir au futur : tu auras lu."
      ],
      [
        "Dès que nous ___ (arriver, futur antérieur) à Lyon, nous t’appellerons.",
        "serons arrivés|serons arrivées",
        "Arriver prend être ; accord avec nous."
      ],
      [
        "Elle sortira dès qu’elle ___ (finir, futur antérieur) ses devoirs.",
        "aura fini",
        "Finir prend avoir : elle aura fini."
      ],
      [
        "Une fois que vous ___ (recevoir, futur antérieur) le colis, vous m’écrirez.",
        "aurez reçu",
        "Recevoir → reçu, avec avoir."
      ],
      [
        "D’ici la fin de l’année, nous ___ (déménager, futur antérieur).",
        "aurons déménagé",
        "Une action terminée avant une date ; déménager prend avoir."
      ],
      [
        "Ils partiront dès qu’ils ___ (se préparer, futur antérieur).",
        "se seront préparés",
        "Verbe pronominal : être, accord avec le sujet."
      ],
      [
        "Quand elle ___ (se réveiller, futur simple), j’aurai déjà préparé le café.",
        "se réveillera",
        "L’action la plus tardive est au futur simple."
      ],
      [
        "Je dînerai à 20 h ; tu rentreras à 22 h. Quand tu rentreras, ___.",
        "j’aurai dîné",
        "Le dîner sera terminé avant ton retour : futur antérieur.",
        [
          "j’aurai dîné",
          "je dînerai",
          "je dîne"
        ]
      ],
      [
        "Je te rendrai ton livre quand je l’___.",
        "aurai lu",
        "Lire d’abord, rendre ensuite : futur antérieur. Le passé composé et le plus-que-parfait ne parlent pas du futur.",
        [
          "aurai lu",
          "ai lu",
          "avais lu"
        ]
      ]
    ]
  }
]);
modules.find(m=>m.id==='opinions').lessons.push(18);
modules.find(m=>m.id==='opinions').sections.push(...[["Peser le pour et le contre","<table><tr><th>Le pour</th><th>Le contre</th></tr><tr><td>D’un côté… · D’une part…</td><td>D’un autre côté… · D’autre part…</td></tr><tr><td>C’est vrai que… · Il faut reconnaître que… · D’accord…</td><td>Par contre… · En revanche… · Pourtant… · Mais…</td></tr></table><div class=\"example\"><b>D’une part</b>, les caméras protègent ; <b>d’autre part</b>, elles limitent la liberté.<br><b>C’est vrai que</b> le train est rapide, <b>mais</b> il coûte cher.</div><p>Pour donner son avis, varie : <b>personnellement · à mon avis · pour moi / selon moi · en ce qui me concerne</b>.</p>"],["S’opposer en douceur, conclure","<p><b>Je comprends bien, mais… / cependant… · Je ne suis pas tout à fait d’accord… · Je ne suis pas sûr(e)… · Il faut nuancer…</b></p><div class=\"example\">Je comprends bien, mais il faut nuancer.<br>Je ne pense pas que cela <b>soit</b> toujours le cas / toujours vrai.</div><p>Après <b>je ne pense pas que</b> et <b>je ne suis pas sûr(e) que</b> : subjonctif.</p><p><b>Pour conclure :</b> donc… · par conséquent… · en conclusion… · c’est pourquoi… · c’est la raison pour laquelle… · c’est pour ça que… (à l’oral). Voir aussi <a href=\"#connecteurs\">Les connecteurs logiques</a>.</p>"]]);
modules.find(m=>m.id==='opinions').q.push(...[["Je ne pense pas que cela ___ (être) toujours le cas.","soit","Je ne pense pas que + subjonctif."],["D’une part, les caméras protègent ; ___, elles limitent la liberté.","d’autre part","D’une part… d’autre part… (comme d’un côté… d’un autre côté…).",["d’autre part","d’un côté","par exemple"]],["C’est ___ que les prix ont augmenté, mais les salaires aussi.","vrai","C’est vrai que… mais… : on reconnaît le « pour » avant le « contre ».",["vrai","pourquoi","dommage"]],["C’est la raison pour ___ je ne suis pas d’accord.","laquelle","Raison est féminin : pour laquelle."]]);
modules.find(m=>m.id==='opinions').source+=" Cours 18 : B1 DONNER SON OPINION.docx (peser le pour et le contre, donner son avis, s’opposer en douceur, conclure).";
modules.find(m=>m.id==='pc').lessons.push(19);
modules.find(m=>m.id==='pc').sections.push(...[["Rappels du cours 19","<div class=\"example\">Elle a mangé <b>une pomme</b>. (COD après le verbe : pas d’accord)<br>La pomme <b>qu’</b>elle a <b>mangée</b> était empoisonnée.<br>Les champignons <b>qu’</b>il a <b>mangés</b> étaient empoisonnés.</div><p>Le participe s’accorde avec le COD placé avant (que, l’, la, les), jamais avec le sujet d’avoir : la pomme qu’ils ont <b>mangée</b>.</p><p><b>On entend l’accord</b> quand le participe finit par -s ou -t : la lettre qu’il a <b>écrite</b> ; la robe qu’elle a <b>mise</b>.</p><p><b>Pronominaux :</b> elles se sont <b>vues</b> (voir quelqu’un : se est COD), mais elles ne se sont pas <b>parlé</b> (parler à quelqu’un : se est COI).</p><p><b>Biographie, frise chronologique :</b> passé composé, même pour une période longue. J’ai étudié quatre ans à l’université, puis j’ai fait un stage. Les Romains <b>ont occupé</b> la Gaule pendant cinq siècles.</p>"]]);
modules.find(m=>m.id==='pc').q.push(...[["Les champignons qu’elle a ___ (manger) étaient empoisonnés.","mangés","Que = les champignons : COD masculin pluriel placé avant."],["La soupe qu’ils ont ___ (manger) était trop salée.","mangée","Que = la soupe, féminin singulier ; pas d’accord avec ils."],["La veste qu’elle a ___ (mettre) hier est bleue.","mise","Que = la veste, féminin : mise, on entend le s."],["Léa et Inès se sont ___ (voir) hier au café.","vues","Voir quelqu’un : se est COD, accord au féminin pluriel."],["Elles se sont ___ (téléphoner) hier soir.","téléphoné","Téléphoner à quelqu’un : se est COI, pas d’accord."],["Mon oncle ___ (travailler) vingt ans dans une banque, puis il a ouvert un café.","a travaillé","Une étape d’une biographie : passé composé, même pour une longue durée."],["J’ai ___ (craindre) de la perdre.","craint","Craindre → craint (comme peindre → peint)."],["Elle s’est ___ (taire) pendant toute la réunion.","tue","Se taire → tu ; accord avec le sujet féminin : tue."]]);
modules.find(m=>m.id==='pc').source+=" Cours 19 · TABLEAU RECAP.docx (accord avec le COD placé avant, accord audible, se sont vues / se sont parlé, biographie) et Révisions temps du passé.docx, exercice 14 (participes irréguliers).";
modules.find(m=>m.id==='choisir').lessons.push(19);
modules.find(m=>m.id==='choisir').source+=" ; Cours 19 · Révisions PC-IMP.docx, Révisions temps du passé.docx et TABLEAU RECAP.docx (synthèse) : mêmes règles, révisées dans le récit « Le vélo disparu ».";
modules.find(m=>m.id==='reperes').lessons.push(19);
modules.find(m=>m.id==='reperes').q.push(...[["Ma sœur se marie ___ deux mois.","dans","Un événement futur : délai avec dans.",["il y a","pendant","dans"]],["Nous avons déménagé ___ cinq ans.","il y a","Un événement passé situé avant maintenant : il y a.",["il y a","pendant","dans"]],["Elle a vécu à Rome ___ quatre ans, puis elle est rentrée à Genève.","pendant","La durée d’une période : pendant.",["il y a","pendant","dans"]]]);
modules.find(m=>m.id==='reperes').source+=" Cours 19 · Révisions temps du passé.docx, exercice 15 (il y a, pendant, dans).";
modules.find(m=>m.id==='relatifs').lessons.push(19);
modules.find(m=>m.id==='relatifs').sections.push(...[["À reconnaître : préposition + lequel","<p>Vu seulement dans le bilan du cours 19 : à reconnaître dans un QCM.</p><details><summary>Dans lequel, sur lequel, pour laquelle…</summary><div class=\"example\">L’hôtel <b>dans lequel</b> nous sommes descendus (= l’hôtel <b>où</b>…).<br>Le matelas <b>sur lequel</b> j’ai dormi était dur.<br>La raison <b>pour laquelle</b> je pars est simple.</div><p>Après une préposition (dans, sur, pour, avec…) et pour une chose : <b>lequel, laquelle, lesquels, lesquelles</b>, comme le nom repris. Pour une personne, <b>avec qui, à qui</b> suffisent. Avec à et de, la forme se contracte : <b>auquel, duquel</b>. Pour un lieu ou un moment, <b>où</b> reste le plus simple : l’été <b>où</b> il a fait si chaud. Ce qui, ce que, ce dont : voir <a href=\"#relief\">La mise en relief</a>.</p></details>"]]);
modules.find(m=>m.id==='relatifs').q.push(...[["Le canapé ___ je dors est très confortable.","sur lequel","On dort sur un canapé : sur + lequel (masculin).",["sur lequel","duquel","laquelle"]],["La raison ___ je démissionne est personnelle.","pour laquelle","Raison est féminin : pour laquelle.",["pour laquelle","pour lequel","laquelle"]],["C’est la boîte ___ je range mes clés.","dans laquelle","Ranger dans une boîte : dans + laquelle (féminin).",["dans laquelle","dans lequel","dont"]],["Ce sont des vacances dont on ___ longtemps.","se souviendra","Se souvenir de quelque chose → dont. Oublier et rappeler se construisent sans de.",["se souviendra","rappellera","oubliera"]]]);
modules.find(m=>m.id==='relatifs').source+=" Cours 19 · B1 - BILAN.pdf, questions 1 à 9 (qui, que, dont, où ; préposition + lequel, à reconnaître).";
modules.find(m=>m.id==='demonstratifs').lessons.push(19);
modules.find(m=>m.id==='demonstratifs').sections.push(...[["Les pronoms possessifs, chacun, tout (à reconnaître)","<p>Vu seulement dans le bilan du cours 19 : à reconnaître dans un QCM.</p><details><summary>Les pronoms possessifs : le mien, la sienne, les leurs…</summary><table><tr><th>C’est à…</th><th>Singulier</th><th>Pluriel</th></tr><tr><td>moi</td><td>le mien · la mienne</td><td>les miens · les miennes</td></tr><tr><td>toi</td><td>le tien · la tienne</td><td>les tiens · les tiennes</td></tr><tr><td>lui / elle</td><td>le sien · la sienne</td><td>les siens · les siennes</td></tr><tr><td>nous</td><td>le nôtre · la nôtre</td><td>les nôtres</td></tr><tr><td>vous</td><td>le vôtre · la vôtre</td><td>les vôtres</td></tr><tr><td>eux / elles</td><td>le leur · la leur</td><td>les leurs</td></tr></table><div class=\"example\">Ces lunettes sont à Félix ? Oui, ce sont <b>les siennes</b>.<br>Ces clés sont à mes parents ? Oui, ce sont <b>les leurs</b>.</div><p>Le pronom prend le genre et le nombre de la <b>chose possédée</b>, pas du possesseur.</p></details><details><summary>Chacun… son, sa, ses</summary><p>Chacun = chaque personne, une à la fois : <b>son, sa, ses</b>. Chacun doit prendre <b>ses</b> responsabilités ; chacun apporte <b>son</b> ordinateur. <b>Leur / leurs</b> va avec ils, elles ou tous.</p></details><details><summary>Tout, quelques, plusieurs, certains</summary><p><b>Tout / toute / tous / toutes</b> + le, la, les + nom = la totalité : <b>toutes</b> les chambres, <b>tous</b> mes amis, <b>tout</b> le monde. Seul, <b>tout</b> = toutes les choses : j’ai déjà <b>tout</b> rangé.</p><p><b>Quelques</b> = un petit nombre ; <b>plusieurs</b> = un nombre non précisé, plus d’un (souvent plus de deux) ; <b>certains / certaines</b> = une partie seulement : certains collègues sont absents.</p></details>"]]);
modules.find(m=>m.id==='demonstratifs').q.push(...[["Ce sac est à Léa ? — Oui, c’est ___.","le sien","Sac : masculin singulier ; une seule propriétaire : le sien.",["le sien","la sienne","le leur"]],["Ces livres sont à mes parents ? — Oui, ce sont ___.","les leurs","Plusieurs propriétaires, plusieurs livres : les leurs.",["les leurs","la leur","les siens"]],["Chacun doit apporter ___ ordinateur.","son","Chacun = une personne à la fois : son.",["son","leur","ses"]],["Il y a des fleurs dans ___ les chambres.","toutes","Les chambres : féminin pluriel, toutes les chambres.",["toutes","tous","tout"]],["___ de mes collègues ne parlent pas français, mais la plupart le parlent.","Certains","Certains = une partie seulement (on ne dit pas « quelques de »).",["Certains","Quelques","Toutes"]]]);
modules.find(m=>m.id==='demonstratifs').source+=" Cours 19 · B1 - BILAN.pdf, questions 10, 11 et 15 à 17 (pronoms possessifs, chacun, indéfinis : à reconnaître seulement).";
participleGroups.find(g=>g[0]==='u')[2].push(...[["(se) taire","tu",1],["concevoir","conçu",1]]);
participleGroups.find(g=>g[0]==='i')[2].push(...[["surprendre","surpris",1]]);
participleGroups.find(g=>g[0]==='autres')[2].push(...[["(s’)éteindre","éteint",1]]);
