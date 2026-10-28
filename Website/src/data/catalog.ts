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

export type EventRecord = {
  id: string;
  name: string;
  gallery?: string[];
  /** ISO 8601 with Mexico offset. Noon anchor when the clock time was not published. */
  start: string;
  end?: string;
  timeKnown: boolean;
  venue: string;
  address?: string;
  city: string;
  artists: string[];
  artistNote?: LocaleText;
  genres: string[];
  status: TicketStatus;
  ticketUrl?: string;
  priceMxn?: number;
  summary: LocaleText;
  image: string;
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
    id: "HFD78JpZc9A",
    title: "GATES OF XIBALBA II — HARDGROOVE SET",
    series: "GATES OF XIBALBA",
    caption: {
      es: "Sabina Palma. Hardgroove grabado en un cenote de Homún, Yucatán.",
      en: "Sabina Palma. Hardgroove recorded in a cenote in Homún, Yucatán.",
    },
  },
  {
    id: "xeqFQkqFeWQ",
    title: "GATES OF XIBALBA I — TECHNO DJ SET",
    series: "GATES OF XIBALBA",
    caption: {
      es: "TRKO. Hard techno grabado en un cenote de Homún, Yucatán.",
      en: "TRKO. Hard techno recorded in a cenote in Homún, Yucatán.",
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
  "HARD TECHNO",
  "SCHRANZ",
  "INDUSTRIAL",
  "HARD BOUNCE",
  "HARD GROOVE",
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
    image: "/media/events/oo1/cover.webp",
    gallery: [
  "/media/events/oo1/oo1/gallery-01.webp",
  "/media/events/oo1/oo1/gallery-02.webp",
  "/media/events/oo1/oo1/gallery-03.webp",
  "/media/events/oo1/oo1/gallery-04.webp",
  "/media/events/oo1/oo1/gallery-05.webp",
],
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
    image: "/media/events/oo3/cover.webp",
    gallery: [
  "/media/events/oo3/oo3/gallery-01.webp",
  "/media/events/oo3/oo3/gallery-02.webp",
  "/media/events/oo3/oo3/gallery-03.webp",
  "/media/events/oo3/oo3/gallery-04.webp",
  "/media/events/oo3/oo3/gallery-05.webp",
],
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
