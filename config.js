/* ============================================================
   📅 FESTIVAL CONFIG — this file is now the ONLY place that
   controls which day (J1–J4) the site shows, and holds all the
   stand/question data for each day.
   ============================================================
   - date: "YYYY-MM-DD" — the real calendar date for that day
   - label: short label shown on the day-selector buttons ("J1")
   - display: full text shown in the day badge at the top
   - stands: the list of stops/questions for that day

   DEFAULT_DAY forces a specific day regardless of today's date:
   0 = J1, 1 = J2, 2 = J3, 3 = J4
   null = auto-detect based on today's date (recommended)
   ============================================================ */

const J1_STANDS = [
  { title:"Point Animations", text:"🔥✨ C'est parti ! ✨🔥\n\nPars explorer les stands et réponds à leurs énigmes." },
  { title:"Hall 4 / Stand N430 – e-Enfance", question:"Comment s'appelle la trilogie de romans graphiques à laquelle l'Association e-Enfance / 3018 a contribué pour sensibiliser aux violences et au cyberharcèlement ?", answers:["les combats invisibles"] },
  { title:"Hall 4 / Stand K424 – FF Museum", question:"Quel est le nom complet de l'héroïne du film Final Fantasy les Créatures de l'Esprit ?", answers:["aki ross"] },
  { title:"Hall 4 / Stand P435 – L'Abri du collectionneur fallout", question:"Comment s'appelle la célèbre marque de soda dans le jeu Fallout ?", answers:["nuka cola"] },
  { title:"Hall 5A / Stand Q547 – Iokai Shiatsu Paris", question:"Quel est le véritable nom du Shiatsu ?", answers:["do in an kyo"] },
  { title:"Hall 5A / Stand W515 – Kanimy", question:"Quel anime a remporté le prix de Meilleur Anime aux ANIME AWARDS organisés par KANIMY à JAPAN EXPO MARSEILLE ?", answers:["Le péché originel de takopi"] },
  { title:"Hall 5A / Stand S541 – Les Dix Lunes AMZ", question:"Quel est le nom du créateur de la boutique de baguettes magiques ?", answers:["maître aelred d'ambroise"] },
  { title:"Hall 5A / Stand U525 – NOOB Olydri", question:"Quelle est la 4ème faction jouable de la série NOOB ? L'Empire, la Coalition, l'Ordre, et ... ?", answers:["les sans factions"] },
  { title:"Hall 5A / Stand S625 – Taikoyaki", question:"Quelle est la couleur des cordes du plus gros Katsugi daiko de Taikoyaki ?", answers:["orange"] },
  { title:"Hall 5A / Stand V518 – Vainkeurz", question:"Quelle est la personne française la plus connue qui ait fait une TopList en live Twitch ?", answers:["mister V"] },
  { title:"Hall 6 / Stand N506 – Tolkiendil", question:"Dans le Seigneur des Anneaux combien d'Anneaux de Pouvoir ont été forgés pour les Nains ?", answers:["7"] },
  { title:"Hall 6 / Stand N735 – Association Saint Seiya Myth Chloth News", question:"Comment se nomme la sorcière maléfique dans Power Rangers ?", answers:["rita repulsa"] },
  { title:"Hall 6 / Stand L844 – Yosakoi", question:"Quelle esr la ville d'origine du yosakoi ?", answers:["kochi"] }
];

const J2_STANDS = [
  { title:"Point Animations", text:"🔥✨ C'est parti ! ✨🔥\n\nPars explorer les stands et réponds à leurs énigmes." },
  { title:"Hall 5A / Stand W565 – Art Body Club", question:"Comment appelle-t-on l'art de peindre sur le corps ?", answers:["body painting"] },
  { title:"Hall 5A / Stand U561 – Cosstar", question:"Quel le matériau le plus utilisé pour faire des armures dans le cosplay?", answers:["mousse"] },
  { title:"Hall 5A / Stand R530 – El Isabelle Jeudy / Atelier Duvet", question:"Avec quel instrument écrit-on en calligraphie japonaise ?", answers:["fude"] },
  { title:"Hall 5A / Stand W515 – Kanimy", question:"Au 26 Avril 2026 combien de mangas KANIMY avait récoltés dans le cadre du PROJET YUME qui visait à récupérer puis distribuer des mangas dans des hôpitaux en France et en Belgique ?", answers:["2533"] },
  { title:"Hall 5A / Stand T596 – La Star Hill Team", question:"Quelle est la matière principale d'un diorama ?", answers:["polystirène extrudé"] },
  { title:"Hall 5A / Stand S541 – Les Dix Lunes AMZ", question:"Quelles sont les deux équipes qui vont s'affronter dans le match de quadball dans la boutique de balais ?", answers:["les dix lunes & the stone"] },
  { title:"Hall 5A / Stand S595 – Pierre DELINFINI", question:"A quoi font références les noms des œuvres d'art autobiographiques de Pierre DELINFINI, sculpteur de héros ?", answers:["ses émotions"] },
  { title:"Hall 5A / Stand U517 – Roxx'N Roll", question:"Quel artiste invité sur la scène Roxx'N Roll lors de Japan Expo 2026 signera la bande originale de la prochaine saison de leur Actual Play ?", answers:["katja chevalier"] },
  { title:"Hall 5A / Stand S609 – TENGUMI", question:"Dans quelle activité du stand se trouve Totoro ?", answers:["origami"] },
  { title:"Hall 6 / Stand P730 – Animaniak", question:"En quelle année a été créée l'association Animaniak ?", answers:["2016"] },
  { title:"Hall 4 / Stand A420 – Gaming event", question:"Quel est le nom du pokemon Mélofee en japonais ?", answers:["pippi"] },
  { title:"Hall 4 / Stand N447 – Women In Games", question:"Pouvez-vous citez 1 des 3 axes de travail de Women in Games France ?", answers:["visibiliser", "sensibiliser", "accompagner"] }
];

const J3_STANDS = [
  { title:"Point Animations", text:"🔥✨ C'est parti ! ✨🔥\n\nPars explorer les stands et réponds à leurs énigmes." },
  { title:"Hall 6 / Stand H817 – Cause We Play", question:"Quel est le nom de la barrière de protection que les chasseresses cherchent à ériger ?", answers:["honmoon"] },
  { title:"Hall 5A / Stand W562 – CoSA", question:"Quel est le spectacle cosplay que propose l'association CoSA cette année ?", answers:["attack on titan"] },
  { title:"Hall 5A / Stand S507 – KAOKIG", question:"Qui sont ces cosplayers costumés présents depuis 2016 à Japan Expo ?", answers:["cosplayers kigurumi"] },
  { title:"Hall 5A / Stand P530 – La Yuai Association", question:"Comment s'appelle l'art de faire des bracelets tressés japonais (comme ceux que l'on voit dans le film Your Name) ?", answers:["kumihimo"] },
  { title:"Hall 5A / Stand U619 – Ligue de Shogi IDF", question:"Vrai ou faux : au shogi, une pièce capturée peut revenir dans la partie", answers:["vrai"] },
  { title:"Hall 5A / Stand U516 – AMV France", question:"Citez un logiciel de montage généralement utilisé pour faire des AMVs.", answers:["premiere pro","davinci resolve","vegas pro","capcut","filmora","final cut"] },
  { title:"Hall 5A / Stand W507 – Bento Pop", question:"Comment s'appelle la nouvelle émission proposée par les équipes d'Anjou Pop Corner depuis 2025 et dont le tournage a lieu sur le festival ?", answers:["bento pop"] },
  { title:"Hall 5A / Stand U525 – NOOB Olydri", question:"Qui sont les 4 premiers membres de la Guilde NOOB ? Sparadrap, Arthéon, Gaeae, et … ?", answers:["omegazell"] },
  { title:"Hall 5A / Stand U517 – Roxx'N Roll", question:"Quel est le vrai nom de la Cité Noire, la ville dans laquelle évoluent désormais nos joueurs ?", answers:["valauros"] },
  { title:"Hall 5A / Stand S619 – Fédération Française de Mah-jong", question:"Combien de manches peut contenir une partie ?", answers:["8","16", "8 ou 16"] },
  { title:"Hall 4 / Stand M415 – MO5", question:"Dans quel jeu a vu la première apparition de Sonic ?", answers:["rad mobile"] },
  { title:"Hall 4 / Stand L418 – Touhou Bohu", question:"Comment s'appelle l'univers dans lequel se déroule Touhou Project ?", answers:["gensokyo"] }
];

const J4_STANDS = [
  { title:"Point Animations", text:"🔥✨ C'est parti ! ✨🔥\n\nPars explorer les stands et réponds à leurs énigmes." },
  { title:"Hall 6 / Stand P730 – Animaniak", question:"Quel logiciel utilise l'association Animaniak pour ses sessions karaoké ?", answers:["karaoke mugen"] },
  { title:"Hall 6 / Stand H817 – Cause We Play", question:"Quel est le nom de l'animal de compagnie à 4 pattes de Jinu ?", answers:["derpy"] },
  { title:"Hall 6 / Stand R803 – Ludosport Paris", question:"Quelles sont les 3 armes principalement utilisées pour le combat au sabre laser ? Le sabre double, le bâton et, …", answers:["sabre long"] },
  { title:"Hall 5A / Stand S619 – Fédération Française de Mah-jong", question:"A combien de joueurs peut-on jouer à ce jeu au minimum (en chiffre) ?", answers:["3"] },
  { title:"Hall 5A / Stand W566 – Once Upon a Show", question:"Quels sont les deux contes représentés sur le stand de Once Upon a Show ?", answers:["la belle est la bête et la petite sirène"] },
  { title:"Hall 5A / Stand N513 – AFDAMA", question:"Quel personnage et ami de Naruto est un expert en taijutsu ?", answers:["rock lee"] },
  { title:"Hall 5A / Stand S595 – Pierre DELINFINI", question:"Comment s'appelle le fameux grimoire du Professeur DELINFINI où sont détaillés ses œuvres d'art uniques ?", answers:["livre de lemniscate"] },
  { title:"Hall 5A / Stand V526 – Studio JM Production", question:"Comment s'appelle l'égérie / Vtubeuse de Studio JM Production ?", answers:["konata nekoyama"] },
  { title:"Hall 5A / Stand V518 – Vainkeurz", question:"Quel est le manga préféré du créateur de VAINKEURZ ?", answers:["dragon ball z"] },
  { title:"Hall 4 / Stand P435 – L'Abri du collectionneur fallout", question:"Comment s'appelle le joueur dans Fallout New Vegas ?", answers:["courrier"] },
  { title:"Hall 4 / Stand Q440 – Association The Project", question:"Quel moteur de création est utilisé par The Project pour développer ses jeux ?", answers:["unreal engine"] },
  { title:"Hall 3 / Stand A345 – Le Mimic d'Or", question:"Quel jeu de rôle est mis en avant cette année sur le stand du Mimic d'or ?", answers:["donjons et dragons"] }
];

const FESTIVAL_DAYS = [
  { date: "2026-07-09", label: "J1", display: "J1 – Jeudi 9 Juillet",     stands: J1_STANDS },
  { date: "2026-07-10", label: "J2", display: "J2 – Vendredi 10 Juillet", stands: J2_STANDS },
  { date: "2026-07-11", label: "J3", display: "J3 – Samedi 11 Juillet",   stands: J3_STANDS },
  { date: "2026-07-12", label: "J4", display: "J4 – Dimanche 12 Juillet", stands: J4_STANDS },
];

// Force a specific day? Set to 0-3 or null for auto
const DEFAULT_DAY = null;
