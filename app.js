// ============================================================
// Multilingual Kids Dictionary - app.js
// Languages: English, French, Spanish
// ============================================================

const WORDS = [
  // ── ANIMALS ──────────────────────────────────────────────
  { id: 1,  category: "animals",  emoji: "🐶", en: "dog",        fr: "chien",      es: "perro",     enPron: "dɒɡ",          frPron: "ʃjɛ̃",        esPron: "ˈpe.ro" },
  { id: 2,  category: "animals",  emoji: "🐱", en: "cat",        fr: "chat",       es: "gato",      enPron: "kæt",          frPron: "ʃa",          esPron: "ˈɡa.to" },
  { id: 3,  category: "animals",  emoji: "🐘", en: "elephant",   fr: "éléphant",   es: "elefante",  enPron: "ˈɛl.ɪ.fənt",  frPron: "e.le.fɑ̃",    esPron: "e.le.ˈfan.te" },
  { id: 4,  category: "animals",  emoji: "🦁", en: "lion",       fr: "lion",       es: "león",      enPron: "ˈlaɪ.ən",      frPron: "ljɔ̃",        esPron: "ˈle.on" },
  { id: 5,  category: "animals",  emoji: "🐸", en: "frog",       fr: "grenouille", es: "rana",      enPron: "frɒɡ",         frPron: "ɡʁə.nuj",    esPron: "ˈra.na" },
  { id: 6,  category: "animals",  emoji: "🐦", en: "bird",       fr: "oiseau",     es: "pájaro",    enPron: "bɜːd",         frPron: "wa.zo",       esPron: "ˈpa.xa.ro" },
  { id: 7,  category: "animals",  emoji: "🐟", en: "fish",       fr: "poisson",    es: "pez",       enPron: "fɪʃ",          frPron: "pwa.sɔ̃",     esPron: "pes" },
  { id: 8,  category: "animals",  emoji: "🐢", en: "turtle",     fr: "tortue",     es: "tortuga",   enPron: "ˈtɜː.tl̩",    frPron: "tɔʁ.ty",     esPron: "tor.ˈtu.ɣa" },
  { id: 9,  category: "animals",  emoji: "🐰", en: "rabbit",     fr: "lapin",      es: "conejo",    enPron: "ˈræb.ɪt",      frPron: "la.pɛ̃",      esPron: "ko.ˈne.xo" },
  { id: 10, category: "animals",  emoji: "🦋", en: "butterfly",  fr: "papillon",   es: "mariposa",  enPron: "ˈbʌt.ə.flaɪ", frPron: "pa.pi.jɔ̃",   esPron: "ma.ri.ˈpo.sa" },
  { id: 11, category: "animals",  emoji: "🐻", en: "bear",       fr: "ours",       es: "oso",       enPron: "bɛr",          frPron: "uʁs",         esPron: "ˈo.so" },
  { id: 12, category: "animals",  emoji: "🐍", en: "snake",      fr: "serpent",    es: "serpiente", enPron: "sneɪk",         frPron: "sɛʁ.pɑ̃",    esPron: "ser.ˈpjen.te" },

  // ── COLORS ────────────────────────────────────────────────
  { id: 13, category: "colors",   emoji: "🔴", en: "red",        fr: "rouge",      es: "rojo",      enPron: "rɛd",          frPron: "ʁuʒ",         esPron: "ˈro.xo" },
  { id: 14, category: "colors",   emoji: "🔵", en: "blue",       fr: "bleu",       es: "azul",      enPron: "bluː",          frPron: "blø",          esPron: "a.ˈsul" },
  { id: 15, category: "colors",   emoji: "🟢", en: "green",      fr: "vert",       es: "verde",     enPron: "ɡriːn",         frPron: "vɛʁ",          esPron: "ˈber.ðe" },
  { id: 16, category: "colors",   emoji: "🟡", en: "yellow",     fr: "jaune",      es: "amarillo",  enPron: "ˈjɛl.oʊ",      frPron: "ʒon",          esPron: "a.ma.ˈri.ʎo" },
  { id: 17, category: "colors",   emoji: "🟣", en: "purple",     fr: "violet",     es: "morado",    enPron: "ˈpɜː.pl̩",     frPron: "vjɔ.lɛ",       esPron: "mo.ˈra.ðo" },
  { id: 18, category: "colors",   emoji: "🟠", en: "orange",     fr: "orange",     es: "naranja",   enPron: "ˈɒr.ɪndʒ",     frPron: "ɔ.ʁɑ̃ʒ",      esPron: "na.ˈran.xa" },
  { id: 19, category: "colors",   emoji: "⬛", en: "black",      fr: "noir",       es: "negro",     enPron: "blæk",          frPron: "nwaʁ",         esPron: "ˈne.ɣro" },
  { id: 20, category: "colors",   emoji: "⬜", en: "white",      fr: "blanc",      es: "blanco",    enPron: "waɪt",          frPron: "blɑ̃",         esPron: "ˈblan.ko" },
  { id: 21, category: "colors",   emoji: "🩷", en: "pink",       fr: "rose",       es: "rosa",      enPron: "pɪŋk",          frPron: "ʁoz",          esPron: "ˈro.sa" },
  { id: 22, category: "colors",   emoji: "🟤", en: "brown",      fr: "marron",     es: "marrón",    enPron: "braʊn",         frPron: "ma.ʁɔ̃",       esPron: "ma.ˈron" },

  // ── NUMBERS ───────────────────────────────────────────────
  { id: 23, category: "numbers",  emoji: "1️⃣", en: "one",        fr: "un",         es: "uno",       enPron: "wʌn",           frPron: "œ̃",           esPron: "ˈu.no" },
  { id: 24, category: "numbers",  emoji: "2️⃣", en: "two",        fr: "deux",       es: "dos",       enPron: "tuː",            frPron: "dø",           esPron: "dos" },
  { id: 25, category: "numbers",  emoji: "3️⃣", en: "three",      fr: "trois",      es: "tres",      enPron: "θriː",           frPron: "tʁwa",         esPron: "tres" },
  { id: 26, category: "numbers",  emoji: "4️⃣", en: "four",       fr: "quatre",     es: "cuatro",    enPron: "fɔːr",           frPron: "katʁ",         esPron: "ˈkwa.tro" },
  { id: 27, category: "numbers",  emoji: "5️⃣", en: "five",       fr: "cinq",       es: "cinco",     enPron: "faɪv",           frPron: "sɛ̃k",         esPron: "ˈsin.ko" },
  { id: 28, category: "numbers",  emoji: "6️⃣", en: "six",        fr: "six",        es: "seis",      enPron: "sɪks",           frPron: "sis",          esPron: "ˈsejs" },
  { id: 29, category: "numbers",  emoji: "7️⃣", en: "seven",      fr: "sept",       es: "siete",     enPron: "ˈsɛv.ən",       frPron: "sɛt",          esPron: "ˈsje.te" },
  { id: 30, category: "numbers",  emoji: "8️⃣", en: "eight",      fr: "huit",       es: "ocho",      enPron: "eɪt",            frPron: "ɥit",          esPron: "ˈo.tʃo" },
  { id: 31, category: "numbers",  emoji: "9️⃣", en: "nine",       fr: "neuf",       es: "nueve",     enPron: "naɪn",           frPron: "nœf",          esPron: "ˈnwe.βe" },
  { id: 32, category: "numbers",  emoji: "🔟", en: "ten",        fr: "dix",        es: "diez",      enPron: "tɛn",            frPron: "dis",          esPron: "ˈdjes" },

  // ── FOOD ──────────────────────────────────────────────────
  { id: 33, category: "food",     emoji: "🍎", en: "apple",      fr: "pomme",      es: "manzana",   enPron: "ˈæp.l̩",        frPron: "pɔm",          esPron: "man.ˈsa.na" },
  { id: 34, category: "food",     emoji: "🍌", en: "banana",     fr: "banane",     es: "banana",    enPron: "bəˈnɑː.nə",     frPron: "ba.nan",       esPron: "ba.ˈna.na" },
  { id: 35, category: "food",     emoji: "🍕", en: "pizza",      fr: "pizza",      es: "pizza",     enPron: "ˈpiːt.sə",      frPron: "pid.za",       esPron: "ˈpit.sa" },
  { id: 36, category: "food",     emoji: "🍞", en: "bread",      fr: "pain",       es: "pan",       enPron: "brɛd",           frPron: "pɛ̃",           esPron: "pan" },
  { id: 37, category: "food",     emoji: "🧀", en: "cheese",     fr: "fromage",    es: "queso",     enPron: "tʃiːz",          frPron: "fʁɔ.maʒ",     esPron: "ˈke.so" },
  { id: 38, category: "food",     emoji: "🥕", en: "carrot",     fr: "carotte",    es: "zanahoria", enPron: "ˈkær.ət",        frPron: "ka.ʁɔt",       esPron: "sa.na.ˈo.rja" },
  { id: 39, category: "food",     emoji: "🍓", en: "strawberry", fr: "fraise",     es: "fresa",     enPron: "ˈstrɔː.bər.i",  frPron: "fʁɛz",         esPron: "ˈfre.sa" },
  { id: 40, category: "food",     emoji: "🍰", en: "cake",       fr: "gâteau",     es: "pastel",    enPron: "keɪk",           frPron: "ɡɑ.to",        esPron: "pas.ˈtel" },
  { id: 41, category: "food",     emoji: "🥛", en: "milk",       fr: "lait",       es: "leche",     enPron: "mɪlk",           frPron: "lɛ",            esPron: "ˈle.tʃe" },
  { id: 42, category: "food",     emoji: "🍫", en: "chocolate",  fr: "chocolat",   es: "chocolate", enPron: "ˈtʃɒk.lɪt",     frPron: "ʃɔ.kɔ.la",    esPron: "tʃo.ko.ˈla.te" },
  { id: 43, category: "food",     emoji: "🍊", en: "orange",     fr: "orange",     es: "naranja",   enPron: "ˈɒr.ɪndʒ",      frPron: "ɔ.ʁɑ̃ʒ",      esPron: "na.ˈran.xa" },
  { id: 44, category: "food",     emoji: "🍇", en: "grapes",     fr: "raisins",    es: "uvas",      enPron: "ɡreɪps",         frPron: "ʁɛ.zɛ̃",      esPron: "ˈu.βas" },

  // ── BODY PARTS ────────────────────────────────────────────
  { id: 45, category: "body",     emoji: "👁️", en: "eye",        fr: "œil",        es: "ojo",       enPron: "aɪ",             frPron: "œj",           esPron: "ˈo.xo" },
  { id: 46, category: "body",     emoji: "👃", en: "nose",       fr: "nez",        es: "nariz",     enPron: "noʊz",           frPron: "ne",            esPron: "na.ˈɾis" },
  { id: 47, category: "body",     emoji: "👂", en: "ear",        fr: "oreille",    es: "oreja",     enPron: "ɪr",             frPron: "ɔ.ʁɛj",        esPron: "o.ˈɾe.xa" },
  { id: 48, category: "body",     emoji: "👄", en: "mouth",      fr: "bouche",     es: "boca",      enPron: "maʊθ",           frPron: "buʃ",           esPron: "ˈbo.ka" },
  { id: 49, category: "body",     emoji: "✋", en: "hand",       fr: "main",       es: "mano",      enPron: "hænd",           frPron: "mɛ̃",           esPron: "ˈma.no" },
  { id: 50, category: "body",     emoji: "🦶", en: "foot",       fr: "pied",       es: "pie",       enPron: "fʊt",            frPron: "pje",           esPron: "ˈpje" },
  { id: 51, category: "body",     emoji: "💪", en: "arm",        fr: "bras",       es: "brazo",     enPron: "ɑːrm",           frPron: "bʁɑ",           esPron: "ˈbra.so" },
  { id: 52, category: "body",     emoji: "🦵", en: "leg",        fr: "jambe",      es: "pierna",    enPron: "lɛɡ",            frPron: "ʒɑ̃b",          esPron: "ˈpjer.na" },
  { id: 53, category: "body",     emoji: "🫀", en: "heart",      fr: "cœur",       es: "corazón",   enPron: "hɑːrt",          frPron: "kœʁ",           esPron: "ko.ra.ˈson" },
  { id: 54, category: "body",     emoji: "🧠", en: "brain",      fr: "cerveau",    es: "cerebro",   enPron: "breɪn",          frPron: "sɛʁ.vo",        esPron: "se.ˈɾe.βro" },

  // ── FAMILY ────────────────────────────────────────────────
  { id: 55, category: "family",   emoji: "👩", en: "mother",     fr: "mère",       es: "madre",     enPron: "ˈmʌð.ər",        frPron: "mɛʁ",           esPron: "ˈma.ðɾe" },
  { id: 56, category: "family",   emoji: "👨", en: "father",     fr: "père",       es: "padre",     enPron: "ˈfɑː.ðər",       frPron: "pɛʁ",           esPron: "ˈpa.ðɾe" },
  { id: 57, category: "family",   emoji: "👧", en: "sister",     fr: "sœur",       es: "hermana",   enPron: "ˈsɪs.tər",       frPron: "sœʁ",           esPron: "er.ˈma.na" },
  { id: 58, category: "family",   emoji: "👦", en: "brother",    fr: "frère",      es: "hermano",   enPron: "ˈbrʌð.ər",       frPron: "fʁɛʁ",          esPron: "er.ˈma.no" },
  { id: 59, category: "family",   emoji: "👴", en: "grandpa",    fr: "grand-père", es: "abuelo",    enPron: "ˈɡrænd.pɑː",     frPron: "ɡʁɑ̃.pɛʁ",     esPron: "a.ˈβwe.lo" },
  { id: 60, category: "family",   emoji: "👵", en: "grandma",    fr: "grand-mère", es: "abuela",    enPron: "ˈɡrænd.mɑː",     frPron: "ɡʁɑ̃.mɛʁ",     esPron: "a.ˈβwe.la" },
  { id: 61, category: "family",   emoji: "👶", en: "baby",       fr: "bébé",       es: "bebé",      enPron: "ˈbeɪ.bi",        frPron: "be.be",         esPron: "be.ˈβe" },

  // ── NATURE ────────────────────────────────────────────────
  { id: 62, category: "nature",   emoji: "🌸", en: "flower",     fr: "fleur",      es: "flor",      enPron: "ˈflaʊ.ər",       frPron: "flœʁ",          esPron: "floɾ" },
  { id: 63, category: "nature",   emoji: "🌳", en: "tree",       fr: "arbre",      es: "árbol",     enPron: "triː",            frPron: "aʁbʁ",          esPron: "ˈar.βol" },
  { id: 64, category: "nature",   emoji: "⭐", en: "star",       fr: "étoile",     es: "estrella",  enPron: "stɑːr",           frPron: "e.twal",        esPron: "es.ˈtɾe.ʎa" },
  { id: 65, category: "nature",   emoji: "☀️", en: "sun",        fr: "soleil",     es: "sol",       enPron: "sʌn",             frPron: "sɔ.lɛj",        esPron: "sol" },
  { id: 66, category: "nature",   emoji: "🌙", en: "moon",       fr: "lune",       es: "luna",      enPron: "muːn",            frPron: "lyn",           esPron: "ˈlu.na" },
  { id: 67, category: "nature",   emoji: "🌊", en: "ocean",      fr: "océan",      es: "océano",    enPron: "ˈoʊ.ʃən",        frPron: "o.se.ɑ̃",       esPron: "o.ˈse.a.no" },
  { id: 68, category: "nature",   emoji: "🏔️", en: "mountain",   fr: "montagne",   es: "montaña",   enPron: "ˈmaʊn.tɪn",      frPron: "mɔ̃.taɲ",       esPron: "mon.ˈta.ɲa" },
  { id: 69, category: "nature",   emoji: "🌧️", en: "rain",       fr: "pluie",      es: "lluvia",    enPron: "reɪn",            frPron: "plɥi",          esPron: "ˈʎu.βja" },
  { id: 70, category: "nature",   emoji: "❄️", en: "snow",       fr: "neige",      es: "nieve",     enPron: "snoʊ",            frPron: "nɛʒ",           esPron: "ˈnje.βe" },

  // ── HOME ──────────────────────────────────────────────────
  { id: 71, category: "home",     emoji: "🪑", en: "chair",      fr: "chaise",     es: "silla",     enPron: "tʃɛr",            frPron: "ʃɛz",           esPron: "ˈsi.ʎa" },
  { id: 72, category: "home",     emoji: "🛏️", en: "bed",        fr: "lit",        es: "cama",      enPron: "bɛd",             frPron: "li",            esPron: "ˈka.ma" },
  { id: 73, category: "home",     emoji: "🚪", en: "door",       fr: "porte",      es: "puerta",    enPron: "dɔːr",            frPron: "pɔʁt",          esPron: "ˈpwer.ta" },
  { id: 74, category: "home",     emoji: "🪟", en: "window",     fr: "fenêtre",    es: "ventana",   enPron: "ˈwɪn.doʊ",       frPron: "fə.nɛtʁ",       esPron: "ben.ˈta.na" },
  { id: 75, category: "home",     emoji: "📚", en: "book",       fr: "livre",      es: "libro",     enPron: "bʊk",             frPron: "livʁ",          esPron: "ˈli.βɾo" },
  { id: 76, category: "home",     emoji: "⌚", en: "clock",      fr: "horloge",    es: "reloj",     enPron: "klɒk",            frPron: "ɔʁ.lɔʒ",        esPron: "re.ˈlox" },
  { id: 77, category: "home",     emoji: "🪞", en: "mirror",     fr: "miroir",     es: "espejo",    enPron: "ˈmɪr.ər",        frPron: "mi.ʁwaʁ",       esPron: "es.ˈpe.xo" },

  // ── SCHOOL ────────────────────────────────────────────────
  { id: 78, category: "school",   emoji: "✏️", en: "pencil",     fr: "crayon",     es: "lápiz",     enPron: "ˈpɛn.sɪl",       frPron: "kʁɛ.jɔ̃",      esPron: "ˈla.pis" },
  { id: 79, category: "school",   emoji: "📏", en: "ruler",      fr: "règle",      es: "regla",     enPron: "ˈruː.lər",        frPron: "ʁɛɡl",          esPron: "ˈreɣ.la" },
  { id: 80, category: "school",   emoji: "🎒", en: "backpack",   fr: "sac-à-dos",  es: "mochila",   enPron: "ˈbæk.pæk",       frPron: "sak.a.do",      esPron: "mo.ˈtʃi.la" },
  { id: 81, category: "school",   emoji: "🖊️", en: "pen",        fr: "stylo",      es: "bolígrafo", enPron: "pɛn",             frPron: "sti.lo",        esPron: "bo.ˈli.ɣɾa.fo" },
  { id: 82, category: "school",   emoji: "📐", en: "triangle",   fr: "triangle",   es: "triángulo", enPron: "ˈtraɪ.æŋ.ɡl̩",   frPron: "tʁi.ɑ̃ɡl",     esPron: "tɾiˈan.ɡu.lo" },

  // ── TRANSPORT ─────────────────────────────────────────────
  { id: 83, category: "transport",emoji: "🚗", en: "car",        fr: "voiture",    es: "coche",     enPron: "kɑːr",            frPron: "vwa.tyʁ",       esPron: "ˈko.tʃe" },
  { id: 84, category: "transport",emoji: "✈️", en: "airplane",   fr: "avion",      es: "avión",     enPron: "ˈɛr.pleɪn",       frPron: "a.vjɔ̃",         esPron: "a.ˈβjon" },
  { id: 85, category: "transport",emoji: "🚂", en: "train",      fr: "train",      es: "tren",      enPron: "treɪn",           frPron: "tʁɛ̃",           esPron: "tren" },
  { id: 86, category: "transport",emoji: "🚢", en: "ship",       fr: "bateau",     es: "barco",     enPron: "ʃɪp",             frPron: "ba.to",         esPron: "ˈbar.ko" },
  { id: 87, category: "transport",emoji: "🚲", en: "bicycle",    fr: "vélo",       es: "bicicleta", enPron: "ˈbaɪ.sɪ.kl̩",    frPron: "ve.lo",         esPron: "bi.si.ˈkle.ta" },
  { id: 88, category: "transport",emoji: "🚀", en: "rocket",     fr: "fusée",      es: "cohete",    enPron: "ˈrɒk.ɪt",        frPron: "fy.ze",         esPron: "ko.ˈe.te" },

  // ── FEELINGS ──────────────────────────────────────────────
  { id: 89, category: "feelings", emoji: "😊", en: "happy",      fr: "heureux",    es: "feliz",     enPron: "ˈhæp.i",          frPron: "ø.ʁø",          esPron: "fe.ˈlis" },
  { id: 90, category: "feelings", emoji: "😢", en: "sad",        fr: "triste",     es: "triste",    enPron: "sæd",             frPron: "tʁist",         esPron: "ˈtris.te" },
  { id: 91, category: "feelings", emoji: "😠", en: "angry",      fr: "en colère",  es: "enojado",   enPron: "ˈæŋ.ɡri",        frPron: "ɑ̃ kɔ.lɛʁ",    esPron: "e.no.ˈxa.ðo" },
  { id: 92, category: "feelings", emoji: "😨", en: "scared",     fr: "effrayé",    es: "asustado",  enPron: "skɛrd",           frPron: "ɛ.fʁe.je",      esPron: "a.sus.ˈta.ðo" },
  { id: 93, category: "feelings", emoji: "😴", en: "sleepy",     fr: "somnolent",  es: "soñoliento",enPron: "ˈsliː.pi",        frPron: "sɔm.nɔ.lɑ̃",   esPron: "so.ɲo.ˈljen.to" },
  { id: 94, category: "feelings", emoji: "🤩", en: "excited",    fr: "excité",     es: "emocionado",enPron: "ɪkˈsaɪ.tɪd",     frPron: "ɛk.si.te",      esPron: "e.mo.sjo.ˈna.ðo" },

  // ── SPORTS ────────────────────────────────────────────────
  { id: 95, category: "sports",   emoji: "⚽", en: "soccer",     fr: "football",   es: "fútbol",    enPron: "ˈsɒk.ər",        frPron: "fut.bɔl",       esPron: "ˈfut.βol" },
  { id: 96, category: "sports",   emoji: "🏀", en: "basketball", fr: "basketball", es: "baloncesto",enPron: "ˈbɑːs.kɪt.bɔːl", frPron: "bas.kɛt.bɔl",   esPron: "ba.lon.ˈses.to" },
  { id: 97, category: "sports",   emoji: "🎾", en: "tennis",     fr: "tennis",     es: "tenis",     enPron: "ˈtɛn.ɪs",        frPron: "tɛ.nis",        esPron: "ˈte.nis" },
  { id: 98, category: "sports",   emoji: "🏊", en: "swimming",   fr: "natation",   es: "natación",  enPron: "ˈswɪm.ɪŋ",       frPron: "na.ta.sjɔ̃",    esPron: "na.ta.ˈsjon" },
  { id: 99, category: "sports",   emoji: "🎸", en: "guitar",     fr: "guitare",    es: "guitarra",  enPron: "ɡɪˈtɑːr",        frPron: "ɡi.taʁ",        esPron: "ɡi.ˈta.ra" },
  { id:100, category: "sports",   emoji: "🎨", en: "painting",   fr: "peinture",   es: "pintura",   enPron: "ˈpeɪn.tɪŋ",      frPron: "pɛ̃.tyʁ",       esPron: "pin.ˈtu.ɾa" },
];

// ── Category metadata ─────────────────────────────────────
const CATEGORIES = {
  all:       { label: { en: "All Words",    fr: "Tous les mots",  es: "Todas las palabras" }, emoji: "✨" },
  animals:   { label: { en: "Animals",      fr: "Animaux",        es: "Animales"           }, emoji: "🐾" },
  colors:    { label: { en: "Colors",       fr: "Couleurs",       es: "Colores"            }, emoji: "🎨" },
  numbers:   { label: { en: "Numbers",      fr: "Nombres",        es: "Números"            }, emoji: "🔢" },
  food:      { label: { en: "Food",         fr: "Nourriture",     es: "Comida"             }, emoji: "🍽️" },
  body:      { label: { en: "Body",         fr: "Corps",          es: "Cuerpo"             }, emoji: "🧍" },
  family:    { label: { en: "Family",       fr: "Famille",        es: "Familia"            }, emoji: "👨‍👩‍👧‍👦" },
  nature:    { label: { en: "Nature",       fr: "Nature",         es: "Naturaleza"         }, emoji: "🌿" },
  home:      { label: { en: "Home",         fr: "Maison",         es: "Hogar"              }, emoji: "🏠" },
  school:    { label: { en: "School",       fr: "École",          es: "Escuela"            }, emoji: "🎒" },
  transport: { label: { en: "Transport",    fr: "Transport",      es: "Transporte"         }, emoji: "🚗" },
  feelings:  { label: { en: "Feelings",     fr: "Sentiments",     es: "Sentimientos"       }, emoji: "😊" },
  sports:    { label: { en: "Sports",       fr: "Sports",         es: "Deportes"           }, emoji: "🏆" },
};

// ── UI text strings ──────────────────────────────────────
const UI = {
  en: {
    title:        "Kids Dictionary",
    subtitle:     "Learn words in 3 languages!",
    searchPlaceholder: "Search for a word...",
    noResults:    "No words found! Try another search. 🤔",
    wordOf:       "Word of the Day",
    pronHint:     "Say it like this:",
    langLabel:    "My language:",
    cardClose:    "Close",
    allWords:     "All Words",
    randomWord:   "Random Word! 🎲",
  },
  fr: {
    title:        "Dictionnaire pour enfants",
    subtitle:     "Apprends des mots dans 3 langues!",
    searchPlaceholder: "Cherche un mot...",
    noResults:    "Aucun mot trouvé! Essaie autre chose. 🤔",
    wordOf:       "Mot du jour",
    pronHint:     "Prononce comme ça:",
    langLabel:    "Ma langue:",
    cardClose:    "Fermer",
    allWords:     "Tous les mots",
    randomWord:   "Mot aléatoire! 🎲",
  },
  es: {
    title:        "Diccionario para niños",
    subtitle:     "¡Aprende palabras en 3 idiomas!",
    searchPlaceholder: "Busca una palabra...",
    noResults:    "¡No se encontraron palabras! Intenta otra búsqueda. 🤔",
    wordOf:       "Palabra del día",
    pronHint:     "Pronúncialo así:",
    langLabel:    "Mi idioma:",
    cardClose:    "Cerrar",
    allWords:     "Todas las palabras",
    randomWord:   "¡Palabra aleatoria! 🎲",
  },
};

// ── App State ─────────────────────────────────────────────
let state = {
  lang:       "en",     // active UI language
  category:   "all",
  search:     "",
  activeWord: null,     // word object shown in modal
  wordOfDay:  null,
};

// ── DOM helpers ───────────────────────────────────────────
const $  = (sel) => document.querySelector(sel);
const $$ = (sel) => [...document.querySelectorAll(sel)];

// ── Filtered word list ────────────────────────────────────
function filteredWords() {
  const q = state.search.toLowerCase().trim();
  return WORDS.filter(w => {
    const catMatch = state.category === "all" || w.category === state.category;
    if (!catMatch) return false;
    if (!q) return true;
    return (
      w.en.toLowerCase().includes(q) ||
      w.fr.toLowerCase().includes(q) ||
      w.es.toLowerCase().includes(q)
    );
  });
}

// ── Render ────────────────────────────────────────────────
function render() {
  renderHeader();
  renderCategories();
  renderGrid();
  renderModal();
  renderWordOfDay();
}

function renderHeader() {
  const u = UI[state.lang];
  $("#app-title").textContent        = u.title;
  $("#app-subtitle").textContent     = u.subtitle;
  $("#search-input").placeholder     = u.searchPlaceholder;
  $("#lang-label").textContent       = u.langLabel;
  $("#random-btn").textContent       = u.randomWord;

  // sync lang buttons
  $$(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === state.lang);
  });
}

function renderCategories() {
  const container = $("#category-list");
  container.innerHTML = "";
  Object.entries(CATEGORIES).forEach(([key, meta]) => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (state.category === key ? " active" : "");
    btn.textContent = meta.emoji + " " + meta.label[state.lang];
    btn.addEventListener("click", () => {
      state.category = key;
      render();
    });
    container.appendChild(btn);
  });
}

function renderGrid() {
  const container = $("#word-grid");
  const words = filteredWords();
  container.innerHTML = "";

  if (words.length === 0) {
    container.innerHTML = `<p class="no-results">${UI[state.lang].noResults}</p>`;
    return;
  }

  words.forEach(word => {
    const card = document.createElement("div");
    card.className = "word-card";
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("aria-label", word[state.lang]);

    const primaryWord = word[state.lang];
    const secondLang  = state.lang === "en" ? "fr" : state.lang === "fr" ? "es" : "en";
    const thirdLang   = state.lang === "en" ? "es" : state.lang === "fr" ? "en" : "fr";

    card.innerHTML = `
      <div class="card-emoji">${word.emoji}</div>
      <div class="card-primary">${primaryWord}</div>
      <div class="card-secondary">${word[secondLang]}</div>
      <div class="card-tertiary">${word[thirdLang]}</div>
    `;

    card.addEventListener("click", () => openModal(word));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(word); }
    });
    container.appendChild(card);
  });
}

function renderModal() {
  const modal = $("#word-modal");
  if (!state.activeWord) {
    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    return;
  }

  const w = state.activeWord;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  const langNames = { en: "English", fr: "Français", es: "Español" };
  const langFlags = { en: "🇬🇧", fr: "🇫🇷", es: "🇪🇸" };

  const rows = (["en", "fr", "es"]).map(lng => `
    <div class="modal-lang-row ${lng === state.lang ? "primary-lang" : ""}">
      <span class="modal-flag">${langFlags[lng]}</span>
      <span class="modal-lang-name">${langNames[lng]}</span>
      <span class="modal-word">${w[lng]}</span>
      <span class="modal-pron">[${w[lng + "Pron"]}]</span>
    </div>
  `).join("");

  $("#modal-content").innerHTML = `
    <div class="modal-emoji">${w.emoji}</div>
    <div class="modal-langs">${rows}</div>
    <div class="modal-category">
      <span>${CATEGORIES[w.category].emoji}</span>
      <span>${CATEGORIES[w.category].label[state.lang]}</span>
    </div>
    <button class="modal-close-btn" id="modal-close-btn" aria-label="Close">${UI[state.lang].cardClose} ✕</button>
  `;

  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
}

function renderWordOfDay() {
  const container = $("#word-of-day");
  if (!state.wordOfDay) return;
  const w = state.wordOfDay;
  container.innerHTML = `
    <div class="wod-label">${UI[state.lang].wordOf} ⭐</div>
    <div class="wod-emoji">${w.emoji}</div>
    <div class="wod-word">${w[state.lang]}</div>
    <div class="wod-translations">
      ${["en","fr","es"].filter(l => l !== state.lang).map(l =>
        `<span class="wod-trans">${{ en:"🇬🇧",fr:"🇫🇷",es:"🇪🇸" }[l]} ${w[l]}</span>`
      ).join("")}
    </div>
  `;
}

// ── Modal open / close ────────────────────────────────────
function openModal(word) {
  state.activeWord = word;
  renderModal();
  // Focus the modal for accessibility
  setTimeout(() => document.getElementById("modal-close-btn")?.focus(), 50);
}

function closeModal() {
  state.activeWord = null;
  renderModal();
}

// ── Search ────────────────────────────────────────────────
function setupSearch() {
  const input = $("#search-input");
  input.addEventListener("input", () => {
    state.search = input.value;
    state.category = "all"; // reset category when searching
    renderCategories();
    renderGrid();
  });
}

// ── Language toggle ───────────────────────────────────────
function setupLangToggle() {
  $$(".lang-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.lang = btn.dataset.lang;
      render();
    });
  });
}

// ── Random word ───────────────────────────────────────────
function setupRandom() {
  $("#random-btn").addEventListener("click", () => {
    const words = filteredWords().length > 0 ? filteredWords() : WORDS;
    const word = words[Math.floor(Math.random() * words.length)];
    openModal(word);
    renderModal();
  });
}

// ── Word of the day (seeded by date) ─────────────────────
function setupWordOfDay() {
  const today = new Date();
  const seed  = today.getFullYear() * 10000 + (today.getMonth() + 1) * 100 + today.getDate();
  state.wordOfDay = WORDS[seed % WORDS.length];
  renderWordOfDay();
}

// ── Close modal on backdrop click ────────────────────────
function setupModalBackdrop() {
  $("#word-modal").addEventListener("click", (e) => {
    if (e.target === $("#word-modal")) closeModal();
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && state.activeWord) closeModal();
  });
}

// ── Boot ──────────────────────────────────────────────────
function init() {
  render();
  setupSearch();
  setupLangToggle();
  setupRandom();
  setupWordOfDay();
  setupModalBackdrop();
}

document.addEventListener("DOMContentLoaded", init);
