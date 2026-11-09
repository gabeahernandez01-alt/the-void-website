/**
 * Source of truth for THE VØID.
 * Add an object to `events` to publish a transmission — the layout does not change.
 * Set `ticketUrl` only when an official link exists. Empty means no purchase button.
 * Analytics ids stay blank until the collective provides them; nothing loads otherwise.
 * There is no public WhatsApp or booking email on file — contact routes to Instagram.
 */

export type TicketStatus = "confirmed" | "tickets" | "limited" | "ended";
export type LocaleText = { es: string; en: string };

export type EventLink = { label: string; href: string };
export type EventDescription = {
  intro: LocaleText;
  paragraphs: LocaleText[];
  detailsHeading: LocaleText;
  details: { label: LocaleText; value: LocaleText }[];
  closing: LocaleText[];
};

export type EventRecord = {
  id: string;
  name: string;
  /** ISO 8601 with Mexico offset. Noon anchor when the clock time was not published. */
  start: string;
  end?: string;
  timeKnown: boolean;
  venue: string;
  address?: string;
  /** Exact, public map search query. Omit until the venue is confirmed. */
  mapQuery?: string;
  /** Canonical venue map link, when the organizer provides one. */
  mapUrl?: string;
  city?: string;
  artists: string[];
  artistNote?: LocaleText;
  genres: string[];
  status: TicketStatus;
  ticketUrl?: string;
  priceMxn?: number;
  access?: LocaleText;
  description?: EventDescription;
  summary: LocaleText;
  image?: string;
  imagePresentation?: "portrait";
  imageAlt?: LocaleText;
  video?: string;
  videoLabel?: LocaleText;
  links: EventLink[];
  age?: string;
  production?: string[];
  scheduleNote?: LocaleText;
};

export type MediaItem = {
  id: string;
  title: LocaleText;
  caption: LocaleText;
  href: string;
  source: "Instagram" | "TikTok" | "Resident Advisor";
  image: string;
  embedUrl?: string;
};

export const instagramUrl = "https://www.instagram.com/thevoid_mid/";
export const tiktokUrl = "https://www.tiktok.com/@the.void.mid";
export const youtubeUrl = "https://www.youtube.com/@thevoid-mid";
export const facebookUrl = "https://www.facebook.com/share/14u2gQKL5w4/";

export type RadioVideo = {
  id: string;
  title: string;
  series: string;
  caption: LocaleText;
};

/** Published on THE VOID RADIO. Order matches the channel feed. */
export const radio: RadioVideo[] = [
  {
    id: "1le-Mv1MB8Q",
    title: "THE VØID — ANNIVERSARY AFTERMOVIE 2026 | MÉRIDA, YUCATÁN",
    series: "THE VØID ANNIVERSARY",
    caption: {
      es: "Aftermovie del primer aniversario de THE VØID en Mérida, Yucatán.",
      en: "Aftermovie from THE VØID’s first anniversary in Mérida, Yucatán.",
    },
  },
  {
    id: "mXN6idrkWlU",
    title: "BRI — SCHRANZ SET | THE VØID ANNIVERSARY | MÉRIDA, MX.",
    series: "THE VØID ANNIVERSARY",
    caption: {
      es: "Set de schranz de BRI durante el aniversario de THE VØID en Mérida.",
      en: "BRI’s schranz set from THE VØID anniversary in Mérida.",
    },
  },
  {
    id: "qwOhppffmyI",
    title: "THE FIFTH ELEMENT — AUNTY CUUNTY",
    series: "THE FIFTH ELEMENT",
    caption: {
      es: "Momentos del set de Aunty Cuunty. Mérida, Yucatán.",
      en: "Moments from Aunty Cuunty’s set. Mérida, Yucatán.",
    },
  },
  {
    id: "TIcJSQHfWSc",
    title: "THE FIFTH ELEMENT — ANGELLO",
    series: "THE FIFTH ELEMENT",
    caption: {
      es: "Momentos del set de Angello. Mérida, Yucatán.",
      en: "Moments from Angello’s set. Mérida, Yucatán.",
    },
  },
  {
    id: "oIJlaeyFuVY",
    title: "THE FIFTH ELEMENT — BRI",
    series: "THE FIFTH ELEMENT",
    caption: {
      es: "El set de Bri durante THE FIFTH ELEMENT. Mérida, Yucatán.",
      en: "Bri’s set during THE FIFTH ELEMENT. Mérida, Yucatán.",
    },
  },
  {
    id: "ZDIOvE5wgzA",
    title: "THE FIFTH ELEMENT — MAGNOLIA CORONADO",
    series: "THE FIFTH ELEMENT",
    caption: {
      es: "Sesión de Magnolia Coronado. Mérida, Yucatán.",
      en: "Magnolia Coronado’s session. Mérida, Yucatán.",
    },
  },
];

export const analytics = {
  gaId: "",
  metaPixelId: "",
};

export const soundGenres = [
  {
    id: "hard-techno",
    name: "HARD TECHNO",
    es: {
      definition: "Techno de bombo frontal y energía sostenida; mantiene la pista bajo presión con percusión firme y texturas contundentes.",
      difference: "Es el territorio más amplio: puede sumar melodía, tensión o recursos rave sin depender de un loop saturado.",
    },
    en: {
      definition: "Techno built around a forceful kick and sustained energy, keeping pressure on the floor with firm percussion and weighty textures.",
      difference: "It is the broadest lane here: it can use melody, tension or rave accents without relying on a saturated loop.",
    },
  },
  {
    id: "schranz",
    name: "SCHRANZ",
    es: {
      definition: "Vertiente alemana del techno duro asociada a Frankfurt en los años noventa: percusión repetida, áspera y muy saturada.",
      difference: "Su sello es el loop denso y machacante; el hard techno puede variar más la textura y el fraseo.",
    },
    en: {
      definition: "A German hard-techno strain associated with Frankfurt in the 1990s, built from repeated, rough and heavily saturated percussion.",
      difference: "Its signature is a dense, grinding loop; hard techno can vary its texture and phrasing more widely.",
    },
  },
  {
    id: "industrial",
    name: "INDUSTRIAL",
    es: {
      definition: "Techno de timbres metálicos, ruido, distorsión y percusión que evoca máquinas y espacios duros.",
      difference: "Describe sobre todo la textura y la atmósfera, no una velocidad fija ni un único patrón de bombo.",
    },
    en: {
      definition: "Techno shaped by metallic timbres, noise, distortion and percussion that suggests machinery and hard spaces.",
      difference: "It describes texture and atmosphere more than a fixed tempo or one specific kick pattern.",
    },
  },
  {
    id: "hard-bounce",
    name: "HARD BOUNCE",
    es: {
      definition: "Techno duro emparentado con el hard house, reconocible por un bajo a contratiempo y una energía elástica.",
      difference: "Donde el hard techno suele avanzar con un empuje más recto, el hard bounce enfatiza el rebote del bajo.",
    },
    en: {
      definition: "Hard-edged techno with roots in hard house, known for an offbeat bassline and elastic energy.",
      difference: "Where hard techno often drives straight ahead, hard bounce puts more weight on bass bounce.",
    },
  },
  {
    id: "hard-groove",
    name: "HARD GROOVE",
    es: {
      definition: "Techno rítmico de percusión sincopada, swing y capas rodantes que sostienen el movimiento.",
      difference: "Su motor es el patrón percusivo y el groove; no necesita la distorsión ni el peso constante del schranz.",
    },
    en: {
      definition: "Rhythm-led techno with syncopated percussion, swing and rolling layers that keep the body moving.",
      difference: "Its engine is the percussion pattern and groove; it does not need schranz's distortion or constant weight.",
    },
  },
  {
    id: "hypnotic-techno",
    name: "HYPNOTIC TECHNO",
    es: {
      definition: "Loops persistentes y pequeños cambios de textura crean una tensión inmersiva y envolvente.",
      difference: "La sensación nace de la repetición y el detalle gradual, no de grandes subidas o golpes sorpresa.",
    },
    en: {
      definition: "Persistent loops and subtle textural shifts build immersive, absorbing tension.",
      difference: "Its pull comes from repetition and gradual detail, not big builds or surprise drops.",
    },
  },
  {
    id: "detroit-techno",
    name: "DETROIT TECHNO",
    es: {
      definition: "Linaje nacido en Detroit de pioneros negros que cruzaron futurismo electrónico con funk, electro y ritmos de máquina.",
      difference: "Su identidad está en ese origen y en el diálogo entre máquina, funk y futuro; no en ser simplemente más duro u oscuro.",
    },
    en: {
      definition: "A Detroit-born lineage created by Black pioneers, joining electronic futurism with funk, electro and machine rhythms.",
      difference: "Its identity comes from that history and the exchange between machine, funk and future, not simply from being harder or darker.",
    },
  },
  {
    id: "raw-techno",
    name: "RAW TECHNO",
    es: {
      definition: "Techno de bordes ásperos y producción poco pulida, con pocos elementos y loops al frente.",
      difference: "“Raw” es una etiqueta flexible, no una receta única: puede cruzarse con lo industrial, lo hipnótico o lo duro.",
    },
    en: {
      definition: "Rough-edged, less-polished techno that puts a small number of elements and loops up front.",
      difference: "“Raw” is a flexible label, not one fixed recipe; it can overlap with industrial, hypnotic or hard techno.",
    },
  },
  {
    id: "bochka",
    name: "BOCHKA",
    es: {
      definition: "Término de uso variable para techno duro guiado por un bombo redondo, grave y persistente; бо́чка significa “barril” en ruso.",
      difference: "Aquí el foco es el golpe pesado y redondo del bombo; schranz suele reconocerse más por sus loops de percusión saturados.",
    },
    en: {
      definition: "A loosely used term for hard techno led by a round, weighty, persistent kick; бо́чка means “barrel” in Russian.",
      difference: "Here the focus is the kick's heavy, rounded thump; schranz is more often recognized by saturated percussion loops.",
    },
  },
  {
    id: "acid-techno",
    name: "ACID TECHNO",
    es: {
      definition: "Techno atravesado por líneas resonantes y cambiantes de bajo ácido, inspiradas en el sonido del Roland TB-303.",
      difference: "Su firma es una línea de sintetizador que se retuerce y evoluciona; no solo el ruido industrial ni la fuerza del bombo.",
    },
    en: {
      definition: "Techno threaded with resonant, shifting acid-bass lines inspired by the sound of the Roland TB-303.",
      difference: "Its signature is an evolving, squelching synth line, rather than industrial noise or kick weight alone.",
    },
  },
  {
    id: "tribal-techno",
    name: "TRIBAL TECHNO",
    es: {
      definition: "Una vertiente donde capas de percusión sincopada y polirrítmica toman el primer plano sobre el pulso constante del techno.",
      difference: "Comparte energía rítmica con el hard groove, pero destaca más la conversación entre capas de percusión.",
    },
    en: {
      definition: "A strain where syncopated, polyrhythmic percussion layers move to the foreground over techno's steady pulse.",
      difference: "It shares rhythmic energy with hard groove, while putting more focus on interplay between percussion layers.",
    },
  },
] as const;

export const events: EventRecord[] = [
  {
    id: "oo1",
    name: "ØØ1",
    start: "2025-09-27T18:00:00-06:00",
    end: "2025-09-28T02:30:00-06:00",
    timeKnown: true,
    venue: "Foro Casa Nohoch",
    address: "C. 60 432, Zona Paseo Montejo, Centro, Mérida",
    city: "Mérida",
    artists: [
      "RUNTIME TERROR",
      "FRENCHIE EL TIEZO",
      "ALBY LOUD",
      "GABY SILVA",
      "FERSA",
      "BRI",
    ],
    genres: ["Techno", "Acid", "Hard Techno", "Industrial", "Schranz", "Hardcore"],
    status: "ended",
    priceMxn: 150,
    age: "18+",
    image: "/media/night-trees.webp",
    summary: {
      es: "La primera transmisión. THE VØID y Rave-U abren la frecuencia en Foro Casa Nohoch: techno, acid, hard, industrial, schranz y hardcore. Cupo limitado.",
      en: "The first transmission. THE VØID and Rave-U open the frequency at Foro Casa Nohoch — techno, acid, hard, industrial, schranz and hardcore. Limited capacity.",
    },
    links: [{ label: "Resident Advisor", href: "https://ra.co/events/2228770" }],
  },
  {
    id: "spirits",
    name: "SPIRITS OF THE NIGHT",
    start: "2025-11-01T12:00:00-06:00",
    timeKnown: false,
    venue: "Terraza El Remate de Montejo",
    address: "Paseo Montejo, Centro, Mérida",
    city: "Mérida",
    artists: ["AVILEEES", "BRI", "FER HERMIDA", "MËADE"],
    genres: ["Hard Techno", "Industrial"],
    status: "ended",
    image: "/media/fan.webp",
    scheduleNote: {
      es: "Disfraz o all black. La hora de puertas quedó en sombra.",
      en: "Costume or all black. The door hour stayed in shadow.",
    },
    summary: {
      es: "Ritual previo a ØØ2. Avileees, Bri, Fer Hermida — set de cumpleaños — y Mëade en la terraza de El Remate. Los accesos se anunciaron en Instagram y Resident Advisor.",
      en: "A ritual ahead of ØØ2. Avileees, Bri, Fer Hermida — a birthday set — and Mëade on the El Remate terrace. Access was announced on Instagram and Resident Advisor.",
    },
    links: [{ label: "Instagram", href: instagramUrl }],
  },
  {
    id: "oo2",
    name: "ØØ2",
    start: "2025-11-28T20:00:00-06:00",
    end: "2025-11-29T02:30:00-06:00",
    timeKnown: true,
    venue: "Foro Casa Nohoch",
    address: "C. 60 432, Zona Paseo Montejo, Centro, 97000 Mérida",
    city: "Mérida",
    artists: ["ANN GARCÍA", "TRKO", "FER HERMIDA", "BRI", "MIKA"],
    genres: ["Hard Techno", "Techno", "Industrial"],
    status: "ended",
    priceMxn: 200,
    age: "18+",
    image: "/media/headphones.webp",
    summary: {
      es: "Hard techno en estado puro. Ann García como headliner, con Trko, Fer Hermida, Bri y Mika en Foro Casa Nohoch.",
      en: "Hard techno with the decoration stripped off. Ann García headlining, with Trko, Fer Hermida, Bri and Mika at Foro Casa Nohoch.",
    },
    links: [{ label: "Resident Advisor", href: "https://ra.co/events/2281109" }],
  },
  {
    id: "transmission-17",
    name: "TRANSMISSION",
    start: "2026-01-17T12:00:00-06:00",
    timeKnown: false,
    venue: "Ubicación secreta",
    address: "Centro, Mérida",
    city: "Mérida",
    artists: [],
    artistNote: {
      es: "Los nombres no se escribieron. La noche se los guardó.",
      en: "The names were not written. The night kept them.",
    },
    genres: ["Tech House", "Techno"],
    status: "ended",
    image: "/media/booth-amber.webp",
    scheduleNote: {
      es: "Sunset. Alberca abierta. Un set quedó grabado. La hora exacta no se escribió.",
      en: "Sunset. Pool open. A set was recorded. The exact hour was never written.",
    },
    summary: {
      es: "Apertura íntima del año. Tech house y techno. El lugar se reveló aparte. El acceso pasó por Resident Advisor.",
      en: "An intimate opening of the year. Tech house and techno. The place was revealed apart. Access passed through Resident Advisor.",
    },
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/thevoid_mid/reel/DS8ez7NCWLc/",
      },
    ],
  },
  {
    id: "oo3",
    name: "ØØ3 — THE THIRD SIGNAL",
    start: "2026-02-07T20:00:00-06:00",
    end: "2026-02-08T03:30:00-06:00",
    timeKnown: true,
    venue: "Ubicación secreta",
    address: "Centro, Mérida",
    city: "Mérida",
    artists: ["BRI", "ERIC SOSA", "FRENCHIE EL TIEZO", "JHAXIE", "MËADE"],
    genres: ["Techno", "Hard Techno", "Schranz", "Hard Bounce", "Industrial", "Acid"],
    status: "ended",
    image: "/media/dj-profile.webp",
    summary: {
      es: "Después de Transmission la señal no se detuvo: se volvió interna. Primera fecha oficial del año, techno y hard techno sin traducción suave.",
      en: "After Transmission the signal did not stop — it turned inward. First official date of the year. Techno and hard techno with nothing softened.",
    },
    links: [{ label: "Resident Advisor", href: "https://ra.co/events/2338382" }],
  },
  {
    id: "oo4",
    name: "ØØ4 — THE FOURTH DIMENSION",
    start: "2026-04-11T20:00:00-06:00",
    end: "2026-04-12T04:00:00-06:00",
    timeKnown: true,
    venue: "Hostal Xooch",
    address: "Calle 85 No. 491C, entre 54 y 56, Centro, Mérida",
    city: "Mérida",
    artists: ["YUDITH", "GABY SILVA", "FER HERMIDA", "RUNTIME TERROR", "BRI", "MUSS"],
    genres: ["Techno", "Hard Techno", "Industrial", "Acid"],
    status: "ended",
    priceMxn: 250,
    age: "18+",
    image: "/media/trails.webp",
    summary: {
      es: "Yudith llega a Mérida con Gaby Silva, Fer Hermida, Runtime Terror, Bri y Muss. Techno como exploración física, en Hostal Xooch.",
      en: "Yudith in Mérida with Gaby Silva, Fer Hermida, Runtime Terror, Bri and Muss. Techno as a physical exploration, at Hostal Xooch.",
    },
    links: [{ label: "Resident Advisor", href: "https://ra.co/events/2383989" }],
  },
  {
    id: "oo5",
    name: "ØØ5 — THE FIFTH ELEMENT",
    start: "2026-07-04T12:00:00-06:00",
    timeKnown: false,
    venue: "Centro, Mérida",
    city: "Mérida",
    artists: ["MAGNOLIA CORONADO", "AUNTY CUUNTY", "BRI", "BRILAM", "AVILEEES", "A^G"],
    genres: ["Techno", "Hard Groove"],
    status: "ended",
    age: "18+",
    image: "/media/red-haze.webp",
    scheduleNote: {
      es: "+18. INE física. La hora de puertas no se escribió. El acceso pasó por Resident Advisor.",
      en: "18+. Physical ID. The door hour was not written. Access passed through Resident Advisor.",
    },
    summary: {
      es: "4 de julio de 2026, en el centro de Mérida. Magnolia Coronado llega desde CDMX a ØØ5 — THE FIFTH ELEMENT, con Aunty Cuunty, Bri, Brilam, Avileees y A^G.",
      en: "4 July 2026, downtown Mérida. Magnolia Coronado comes in from Mexico City for ØØ5 — THE FIFTH ELEMENT, with Aunty Cuunty, Bri, Brilam, Avileees and A^G.",
    },
    links: [
      {
        label: "Instagram",
        href: "https://www.instagram.com/reel/DZN_OglpXWG/",
      },
    ],
  },
  {
    id: "aniversario",
    name: "1ER ANIVERSARIO",
    start: "2026-09-26T20:00:00-06:00",
    timeKnown: true,
    venue: "Mérida Centro",
    address: "Centro, Mérida, Yucatán",
    city: "Mérida",
    artists: ["SABINA PALMA", "COYOTE", "SUJETO ORDINARIO", "WERA", "BRI", "LØZ"],
    genres: ["Techno", "Hard Techno", "Schranz", "Hard Groove", "Hard Bounce"],
    status: "ended",
    age: "18+",
    production: ["Escenario 360°", "Audio cuadrafónico"],
    image: "/media/void-booth.webp",
    summary: {
      es: "Un año dentro de la frecuencia. Seis artistas, escenario 360° y audio cuadrafónico. Sabina Palma como headliner, primera vez en Mérida. LØZ entró desde la convocatoria de nuevos talentos.",
      en: "One year inside the frequency. Six artists, a 360° stage and quadraphonic sound. Sabina Palma headlining, her first time in Mérida. LØZ came through the new-talent call.",
    },
    links: [
      { label: "Instagram", href: instagramUrl },
      {
        label: "Reel",
        href: "https://www.instagram.com/thevoid_mid/reel/Dcze9nNMNsi/",
      },
    ],
  },
  {
    id: "the-possession",
    name: "THE POSSESSION",
    start: "2026-10-24T20:00:00-06:00",
    timeKnown: true,
    venue: "Calle 21 #107a",
    address: "Calle 21 #107a, Colonia México, Mérida",
    city: "Mérida",
    artists: [],
    artistNote: {
      es: "Los nombres todavía no cruzan. La cartelera late en @thevoid_mid.",
      en: "The names have not crossed yet. The bill beats on @thevoid_mid.",
    },
    genres: ["Hard Techno"],
    status: "tickets",
    ticketUrl: "https://shows.link/the-possession/tickets",
    image: "/media/decks-red.webp",
    summary: {
      es: "24 de octubre, desde las 20:00, en Calle 21 #107a, Colonia México. Hard techno, oscuridad y una señal alterada. Los boletos están en el enlace oficial.",
      en: "24 October, from 20:00, at Calle 21 #107a, Colonia México. Hard techno, darkness, and a signal that has already shifted. Tickets are on the official link.",
    },
    links: [
      { label: "Instagram", href: instagramUrl },
      {
        label: "Anuncio",
        href: "https://www.instagram.com/thevoid_mid/p/DeC_kL-JRe8/",
      },
    ],
  },
  {
    id: "xmatkuil-2026",
    name: "XMATKUIL",
    start: "2026-11-14T21:00:00-06:00",
    timeKnown: true,
    venue: "Escenario Raventón · Ex-Teatro del Pueblo",
    address: "Ex-Teatro del Pueblo, Feria Internacional de Yucatán Xmatkuil",
    mapQuery: "Ex-Teatro del Pueblo, Feria Internacional de Yucatán Xmatkuil, Yucatán, México",
    city: "Xmatkuil",
    artists: ["GABY SILVA", "MIKA", "BRI", "RUNTIME TERROR"],
    genres: [],
    status: "confirmed",
    access: { es: "Gratuito", en: "Free entry" },
    image: "/media/xmatkuil-2026.jpg",
    imagePresentation: "portrait",
    imageAlt: {
      es: "Flyer de THE VØID en el escenario Raventón, Ex-Teatro del Pueblo, Feria de Xmatkuil; 14 de noviembre a las 9 p. m., con Gaby Silva, MIKA, BRI y Runtime Terror.",
      en: "THE VØID flyer for the Raventón stage at Ex-Teatro del Pueblo, Xmatkuil Fair; 14 November at 9 p.m., with Gaby Silva, MIKA, BRI and Runtime Terror.",
    },
    summary: {
      es: "Una transmisión abierta para todos. THE VØID llega a la Feria Internacional de Yucatán en Xmatkuil. Entrada gratuita.",
      en: "An open transmission for everyone. THE VØID arrives at the Yucatán International Fair in Xmatkuil. Free entry.",
    },
    links: [],
  },
  {
    id: "unknown-2026",
    name: "SHANTI CLASING — ALL NIGHT LONG",
    start: "2026-12-05T21:00:00-06:00",
    timeKnown: true,
    venue: "Hostal Xooch",
    address: "Calle 85 No. 491C, entre 54 y 56, Centro, Mérida",
    mapQuery: "Hostal Xooch, Calle 85 No. 491C, entre 54 y 56, Centro, Mérida, Yucatán, México",
    mapUrl: "https://maps.app.goo.gl/tyYTxgQ23hEEPTDu6",
    city: "Mérida",
    artists: ["SHANTI CLASING"],
    video: "/media/unknown-2026-flyer.mp4",
    videoLabel: {
      es: "Flyer en video de SHANTI CLASING — ALL NIGHT LONG, 5 de diciembre de 2026.",
      en: "Video flyer for SHANTI CLASING — ALL NIGHT LONG on December 5, 2026.",
    },
    genres: [],
    status: "tickets",
    ticketUrl: "https://shows.link/all-night-long/tickets",
    description: {
      intro: {
        es: "Por primera vez, THE VØID y 100UNDERGROUND unen fuerzas en Mérida para presentar una noche especial con **SHANTI CLASING**.",
        en: "For the first time, THE VØID and 100UNDERGROUND join forces in Mérida to present a special night with **SHANTI CLASING**.",
      },
      paragraphs: [
        {
          es: "El próximo **5 de diciembre**, Shanti Clasing tomará el control de la cabina durante un formato **ALL NIGHT LONG**: una sesión extendida en la que la música evoluciona sin interrupciones, llevando la energía de la pista a través de un viaje sonoro de principio a fin.",
          en: "On **December 5**, Shanti Clasing takes control of the booth for an **ALL NIGHT LONG** set: an extended session where the music evolves without interruption, carrying the dance floor’s energy through a sonic journey from beginning to end.",
        },
        {
          es: "Esta fecha forma parte de **THE LAST DANCE — MÉXICO 2026**, una serie de presentaciones especiales que recorrerá distintas ciudades del país.",
          en: "This date is part of **THE LAST DANCE — MÉXICO 2026**, a series of special performances traveling to cities across the country.",
        },
      ],
      detailsHeading: { es: "INFORMACIÓN DEL EVENTO", en: "EVENT INFORMATION" },
      details: [
        { label: { es: "Artista", en: "Artist" }, value: { es: "Shanti Clasing", en: "Shanti Clasing" } },
        { label: { es: "Formato", en: "Format" }, value: { es: "All Night Long", en: "All Night Long" } },
        { label: { es: "Fecha", en: "Date" }, value: { es: "Sábado 5 de diciembre de 2026", en: "Saturday, December 5, 2026" } },
        { label: { es: "Horario", en: "Time" }, value: { es: "9:00 PM", en: "9:00 PM" } },
        { label: { es: "Ubicación", en: "Location" }, value: { es: "Hostal Xooch, Calle 85 No. 491C, Mérida", en: "Hostal Xooch, Calle 85 No. 491C, Mérida" } },
        { label: { es: "Presentan", en: "Presented by" }, value: { es: "THE VØID x 100UNDERGROUND", en: "THE VØID x 100UNDERGROUND" } },
      ],
      closing: [
        { es: "Una noche. Una artista. Sin interrupciones.", en: "One night. One artist. No interruptions." },
        { es: "WE MEET IN THE UNKNOWN.", en: "WE MEET IN THE UNKNOWN." },
      ],
    },
    summary: {
      es: "SHANTI CLASING toma la cabina en formato ALL NIGHT LONG. Una fecha de THE LAST DANCE — MÉXICO 2026, presentada por THE VØID x 100UNDERGROUND.",
      en: "SHANTI CLASING takes over the booth for an ALL NIGHT LONG set. Part of THE LAST DANCE — MÉXICO 2026, presented by THE VØID x 100UNDERGROUND.",
    },
    links: [],
  },
];

export const media: MediaItem[] = [
  {
    id: "still-room",
    title: { es: "El cuarto", en: "The room" },
    caption: {
      es: "Desde atrás de la mesa. La pista mira hacia la máquina.",
      en: "From behind the decks. The floor faces the machine.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/room-wide.webp",
  },
  {
    id: "still-mask",
    title: { es: "Máscara", en: "Mask" },
    caption: {
      es: "Cabina, mural y un kick bajo las manos.",
      en: "Booth, mural, a kick under the hands.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/booth-mask.webp",
  },
  {
    id: "still-white",
    title: { es: "Luz blanca", en: "White light" },
    caption: {
      es: "Lentes, camisa, la mixer encendida.",
      en: "Lenses, shirt, the mixer lit.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/decks-white.webp",
  },
  {
    id: "still-close",
    title: { es: "Cerca", en: "Close" },
    caption: {
      es: "El cuarto se aprieta alrededor de la cabina.",
      en: "The room tightens around the booth.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/floor-close.webp",
  },
  {
    id: "still-floor",
    title: { es: "Pista", en: "Floor" },
    caption: {
      es: "Una noche de THE VØID. La pista todavía caliente.",
      en: "A THE VØID night. The floor still warm.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/hero.webp",
  },
  {
    id: "still-haze",
    title: { es: "Humo rojo", en: "Red haze" },
    caption: {
      es: "Luz, humo, una mano dentro de la frecuencia.",
      en: "Light, smoke, a hand inside the frequency.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/red-haze.webp",
  },
  {
    id: "still-decks",
    title: { es: "Cabina", en: "Booth" },
    caption: {
      es: "Desde la cabina. El rojo manda.",
      en: "From the booth. Red is in charge.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/decks-red.webp",
  },
  {
    id: "still-booth-sign",
    title: { es: "THE VØID", en: "THE VØID" },
    caption: {
      es: "El letrero enciende la cabina.",
      en: "The sign lights the booth.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/void-booth.webp",
  },
  {
    id: "still-beams",
    title: { es: "Haz", en: "Beam" },
    caption: {
      es: "Brazos arriba. Un solo haz.",
      en: "Arms up. One beam.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/beams.webp",
  },
  {
    id: "still-fire",
    title: { es: "Frente", en: "Front" },
    caption: {
      es: "Pared roja. El frente de la noche.",
      en: "Red wall. The front of the night.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/fire.webp",
  },
  {
    id: "still-profile",
    title: { es: "Perfil", en: "Profile" },
    caption: {
      es: "Perfil en la cabina. Humo rojo.",
      en: "Profile in the booth. Red smoke.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/dj-profile.webp",
  },
  {
    id: "still-headphones",
    title: { es: "Auriculares", en: "Headphones" },
    caption: {
      es: "Contra el haz.",
      en: "Against the beam.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/headphones.webp",
  },
  {
    id: "still-trails",
    title: { es: "Rastro", en: "Trail" },
    caption: {
      es: "Larga exposición sobre la mixer. El tiempo se arrastra.",
      en: "Long exposure across the mixer. Time drags.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/trails.webp",
  },
  {
    id: "still-backline",
    title: { es: "Espalda", en: "Backline" },
    caption: {
      es: "De espaldas a la pista. La máquina adelante.",
      en: "Back to the floor. The machine ahead.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/backline.webp",
  },
  {
    id: "still-fan",
    title: { es: "Abanico", en: "Fan" },
    caption: {
      es: "Abanico bajo luz ámbar.",
      en: "A fan under amber light.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/fan.webp",
  },
  {
    id: "still-trees",
    title: { es: "Afuera", en: "Outside" },
    caption: {
      es: "Afuera. Patio, árboles, una cuerda de focos.",
      en: "Outside. Courtyard, trees, a string of bulbs.",
    },
    href: instagramUrl,
    source: "Instagram",
    image: "/media/night-trees.webp",
  },
];
