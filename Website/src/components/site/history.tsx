import { useDocTitle, useI18n, type Lang } from "@/lib/i18n";

type Chapter = { year: string; title: string; body: string[] };

const chapters: Record<Lang, Chapter[]> = {
  es: [
    {
      year: "1981 — 1985",
      title: "Detroit escribe el futuro.",
      body: [
        "En Belleville, a las afueras de una ciudad que las plantas de autos iban apagando, tres amigos escuchaban la misma radio: Juan Atkins, Derrick May y Kevin Saunderson. El Electrifying Mojo les pasaba Kraftwerk junto al funk de Parliament. Chicago, al lado, ya tenía house — Frankie Knuckles, el Warehouse, un cuatro por cuatro nacido del disco. Detroit escuchó eso y lo enfrió.",
        "Atkins, con Richard Davis, forma Cybotron. Alleys of Your Mind (1981) y Clear (1983) todavía son electro, pero la máquina ya no acompaña: manda. En 1985 abre el sello Metroplex y, como Model 500, publica No UFO's. Muchos llaman a ese corte el primer techno. El nombre del sello viene de Alvin Toffler, el futurista que hablaba de techno-rebels: gente que usa la tecnología para no obedecer el siglo que la aplasta.",
        "No era una moda europea. Era ciencia ficción negra, hecha en una ciudad industrial que se quedaba sin futuro y decidió fabricar otro. Derrick May lo sintió como Kraftwerk y George Clinton atrapados en un elevador, con un secuenciador como única compañía.",
      ],
    },
    {
      year: "1988",
      title: "La palabra cruza el océano.",
      body: [
        "Neil Rushton, desde el sello 10 de Virgin, arma con Derrick May un compilado para el Reino Unido. Iban a archivarlo como house de Detroit. Atkins tenía un tema llamado Techno Music, y el círculo de Belleville rechazó ser una sucursal de Chicago. El disco salió como Techno! The New Dance Sound of Detroit.",
        "La palabra ya existía — Cybotron había grabado Techno City años antes — pero 1988 es cuando Europa la oye como nombre de un género. El mismo año, Kevin Saunderson lleva la máquina hacia la radio con Inner City y Good Life. El futuro tenía dos puertas: el club, y el mundo.",
      ],
    },
    {
      year: "1989",
      title: "El muro se abre.",
      body: [
        "El 1 de julio de 1989, antes de que cayera el muro, el Dr. Motte saca la Love Parade al Kurfürstendamm de Berlín Occidental. Era una manifestación con disfraz de fiesta. El lema, irónico y exacto: paz, alegría, panqueques. Unos cientos de personas. Un camión. Un sistema de sonido.",
        "El 9 de noviembre el muro se abre. Berlín del Este queda lleno de edificios sin dueño: fábricas, bóvedas, centrales eléctricas. Jóvenes del este y del oeste se encuentran en cuartos que el siglo había abandonado. El techno llega como idioma común, porque no pide pasaporte ni pasado.",
      ],
    },
    {
      year: "1991 — 2004",
      title: "Berlín habita la máquina.",
      body: [
        "En marzo de 1991 abre Tresor, en la bóveda del antiguo almacén Wertheim, sobre Leipziger Straße. Dimitri Hegemann baja el club bajo tierra. Los primeros discos del sello no son berlineses: son de Detroit. Blake Baxter, Jeff Mills, Underground Resistance.",
        "Underground Resistance — Mike Banks, y con él Jeff Mills y Robert Hood — había convertido el techno de Detroit en una posición: sin rostros de estrella, contra la industria, la música como arma. Mills se queda cerca de Berlín. Su 909, los lock-grooves, The Bells, se vuelven la gramática de la noche larga.",
        "E-Werk (1993) ocupa una antigua subestación. La fiesta ya no cabe en una hora: amanece adentro. En 1999 abre Ostgut. En 2004, Berghain, en una antigua planta de calefacción entre Kreuzberg y Friedrichshain. La puerta difícil, la oscuridad, la prohibición de cámaras no eran marketing. Eran un contrato: el cuarto manda, no el espectáculo.",
      ],
    },
    {
      year: "La calle",
      title: "Un movimiento, no solo un sonido.",
      body: [
        "La Love Parade crece de cientos a más de un millón, sale de Berlín y se vuelve masiva. En julio de 2010, en Duisburgo, una avalancha mata a 21 personas. La marcha se apaga. La calle y el club nunca fueron la misma cosa: una quería el día y la ciudad; el otro, un interior sin reloj.",
        "En el Reino Unido, la Criminal Justice Act de 1994 intentó perseguir reuniones definidas por «golpes repetitivos». El estado oyó la máquina y le tuvo miedo. En Berlín el club fue, con todas sus fallas — la puerta, las drogas, más tarde el turismo — uno de los pocos cuartos donde este y oeste, la noche queer y el rave heterosexual, podían compartir piso. No una utopía. Una invención social: la noche como espacio público.",
        "Detroit no se quedó atrás como museo. Jeff Mills, Robert Hood, Mad Mike y una segunda generación siguieron tratando el techno como futuro negro, no como souvenir europeo. La línea entre las dos ciudades es un cable, no una copia.",
      ],
    },
    {
      year: "2010s",
      title: "La década en que el kick se volvió educado.",
      body: [
        "Después del minimal llegó un techno melódico, grande, caro, hermoso de lejos. Llenó festivales. Algunos lo llamaron business techno. El kick bajó la voz. La noche se podía ver desde la barra sin entrar en ella.",
        "En los márgenes, el schranz no había muerto. A mediados de los noventa, en Fráncfort, Chris Liebing y los cuartos duros habían puesto nombre a un kick sin melodía y sin perdón. Siguió vivo en salas pequeñas mientras el centro se pulía.",
      ],
    },
    {
      year: "2020 —",
      title: "Después del silencio.",
      body: [
        "En 2020 los cuartos se apagan. El cuerpo se queda quieto más tiempo del que el techno sabe medir. La corriente dura ya venía de antes — finales de la década, sellos industriales, I Hate Models, salas de Berlín y también Tiflis, donde Bassiani había demostrado que un club puede ser una plaza. El silencio no inventó el hard techno. Lo dejó con hambre.",
        "Cuando las puertas vuelven, entre 2021 y 2022, la gente no pide una banda sonora. Pide presión. Los tempos suben. La distorsión regresa. Una generación más joven encuentra el kick en festivales y en clips de unos segundos: Sara Landry, 999999999, KI/KI, Shlømo, VTSS, Klangkuenstler, Nico Moreno. El schranz reaparece como herramienta dentro del set, no como escena sellada.",
        "Al lado nace otra respuesta al mismo apetito: hard groove y hard bounce, un techno con tambor que rueda, percusión que empuja, menos muro y más cadera. Distintos rostros de una sola necesidad — sentir el futuro en el esternón, no contemplarlo.",
      ],
    },
    {
      year: "Mérida",
      title: "La señal llega al sur.",
      body: [
        "El cable no se detiene en el Atlántico. En Mérida, THE VØID sostiene el tiempo futuro: lineups cortos, cuarto físico, hard techno, schranz, industrial, hard groove. No una sucursal. Una antena.",
        "Gates of Xibalba mete la máquina bajo la piedra caliza, en el cenote. Detroit imaginó naves. Berlín ocupó ruinas. Yucatán abre el agua antigua. Entrar al vacío es seguir esa línea: el cuerpo como instrumento, la noche como portal, el kick como prueba de que el futuro todavía se puede bailar.",
      ],
    },
  ],
  en: [
    {
      year: "1981 — 1985",
      title: "Detroit writes the future.",
      body: [
        "In Belleville, outside a city the car plants were switching off, three friends heard the same radio: Juan Atkins, Derrick May and Kevin Saunderson. The Electrifying Mojo played them Kraftwerk next to Parliament's funk. Chicago, next door, already had house — Frankie Knuckles, the Warehouse, a four-on-the-floor born from disco. Detroit heard it and made it cold.",
        "Atkins, with Richard Davis, forms Cybotron. Alleys of Your Mind (1981) and Clear (1983) are still electro, but the machine no longer accompanies. It leads. In 1985 he opens Metroplex and, as Model 500, releases No UFO's. Many call that cut the first techno record. The label's name comes from Alvin Toffler, the futurist who wrote about techno-rebels: people who use technology to refuse the century crushing them.",
        "This was not a European fashion. It was Black science fiction, made in an industrial city running out of future and deciding to build another. Derrick May felt it as Kraftwerk and George Clinton stuck in an elevator, with only a sequencer for company.",
      ],
    },
    {
      year: "1988",
      title: "The word crosses the ocean.",
      body: [
        "Neil Rushton, at Virgin's 10 Records, builds a compilation with Derrick May for the UK. They were going to file it as the house sound of Detroit. Atkins had a track called Techno Music, and the Belleville circle refused to be a branch of Chicago. The record came out as Techno! The New Dance Sound of Detroit.",
        "The word already existed — Cybotron had recorded Techno City years earlier — but 1988 is when Europe hears it as the name of a genre. The same year Kevin Saunderson carries the machine toward the radio with Inner City and Good Life. The future had two doors: the club, and the world.",
      ],
    },
    {
      year: "1989",
      title: "The wall opens.",
      body: [
        "On 1 July 1989, before the wall fell, Dr. Motte takes the Love Parade onto West Berlin's Kurfürstendamm. A demonstration dressed as a party. The motto, ironic and exact: peace, joy, pancakes. A few hundred people. One truck. One sound system.",
        "On 9 November the wall opens. East Berlin is full of buildings with no owner: factories, vaults, power stations. Young people from east and west meet in rooms the century had abandoned. Techno arrives as a common language, because it asks for neither passport nor past.",
      ],
    },
    {
      year: "1991 — 2004",
      title: "Berlin inhabits the machine.",
      body: [
        "In March 1991 Tresor opens in the vault of the former Wertheim department store on Leipziger Straße. Dimitri Hegemann puts the club underground. The label's first records are not Berlin records. They are Detroit: Blake Baxter, Jeff Mills, Underground Resistance.",
        "Underground Resistance — Mike Banks, and with him Jeff Mills and Robert Hood — had turned Detroit techno into a position: no star faces, against the industry, music as a weapon. Mills stays close to Berlin. His 909, the lock-grooves, The Bells, become the grammar of the long night.",
        "E-Werk (1993) takes a former electrical substation. The party no longer fits in an hour: morning happens inside. Ostgut opens in 1999. In 2004, Berghain, in a former heating plant between Kreuzberg and Friedrichshain. The hard door, the dark, the ban on cameras were not marketing. They were a contract: the room is in charge, not the show.",
      ],
    },
    {
      year: "The street",
      title: "A movement, not only a sound.",
      body: [
        "The Love Parade grows from hundreds to more than a million, leaves Berlin, and becomes a mass. In July 2010, in Duisburg, a crush kills 21 people. The march goes dark. The street and the club were never the same thing: one wanted the day and the city; the other, an interior with no clock.",
        "In the UK, the Criminal Justice Act of 1994 tried to police gatherings defined by “repetitive beats.” The state heard the machine and feared it. In Berlin the club was, with every flaw — the door, the drugs, later the tourism — one of the few rooms where east and west, queer nightlife and the straight rave, could share a floor. Not a utopia. A social invention: the night as public space.",
        "Detroit did not stay behind as a museum. Jeff Mills, Robert Hood, Mad Mike and a second generation kept treating techno as Black future, not as a European souvenir. The line between the two cities is a cable, not a copy.",
      ],
    },
    {
      year: "2010s",
      title: "The decade the kick learned manners.",
      body: [
        "After minimal came a melodic techno, large, expensive, beautiful from far away. It filled festivals. Some called it business techno. The kick lowered its voice. You could watch the night from the bar without entering it.",
        "At the edges, schranz had not died. In the mid-nineties, in Frankfurt, Chris Liebing and the hard rooms had named a kick with no melody and no mercy. It stayed alive in small rooms while the center was being polished.",
      ],
    },
    {
      year: "2020 —",
      title: "After the silence.",
      body: [
        "In 2020 the rooms go dark. The body stays still longer than techno knows how to measure. The hard current was already moving — the late decade, industrial labels, I Hate Models, rooms in Berlin and also Tbilisi, where Bassiani had shown a club can be a square. The silence did not invent hard techno. It left it hungry.",
        "When the doors return, through 2021 and 2022, people do not ask for a soundtrack. They ask for pressure. Tempos climb. Distortion comes back. A younger generation finds the kick at festivals and in clips a few seconds long: Sara Landry, 999999999, KI/KI, Shlømo, VTSS, Klangkuenstler, Nico Moreno. Schranz reappears as a tool inside the set, not as a sealed scene.",
        "Beside it, another answer to the same hunger: hard groove and hard bounce, techno with a drum that rolls, percussion that pushes, less wall and more hip. Different faces of one need — to feel the future in the sternum, not to look at it.",
      ],
    },
    {
      year: "Mérida",
      title: "The signal reaches the south.",
      body: [
        "The cable does not stop at the Atlantic. In Mérida, THE VØID holds the future tense: short lineups, a physical room, hard techno, schranz, industrial, hard groove. Not a branch office. An antenna.",
        "Gates of Xibalba takes the machine under the limestone, into the cenote. Detroit imagined ships. Berlin occupied ruins. Yucatán opens the ancient water. To enter the void is to follow that line: the body as instrument, the night as portal, the kick as proof the future can still be danced.",
      ],
    },
  ],
};

export function HistoryPage() {
  const { t, lang } = useI18n();
  useDocTitle(t("historyTitleDoc"));
  const list = chapters[lang];

  return (
    <>
      <header className="page-pad pb-10 pt-32 xl:pt-36">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("historyKicker")}</p>
        <h1 className="mt-3 max-w-5xl font-display text-6xl uppercase leading-none xl:text-8xl">{t("historyTitle")}</h1>
        <p className="mt-6 max-w-2xl text-lg text-muted">{t("historyLede")}</p>
      </header>
      <div className="page-pad grid gap-16 pb-28 xl:grid-cols-12">
        <ol className="hidden xl:col-span-3 xl:block">
          <div className="sticky top-28 space-y-3">
            {list.map((chapter) => (
              <li key={chapter.year}>
                <a href={`#${chapter.year.replace(/\s+/g, "-")}`} className="font-mono text-xs uppercase tracking-widest text-muted hover:text-acid">
                  {chapter.year}
                </a>
              </li>
            ))}
          </div>
        </ol>
        <div className="space-y-16 xl:col-span-8 xl:col-start-5">
          {list.map((chapter) => (
            <article key={chapter.year} id={chapter.year.replace(/\s+/g, "-")} className="scroll-mt-28 border-t border-line pt-8">
              <p className="font-mono text-xs uppercase tracking-widest text-acid">{chapter.year}</p>
              <h2 className="mt-3 font-display text-4xl uppercase xl:text-6xl">{chapter.title}</h2>
              <div className="mt-6 space-y-4 text-muted">
                {chapter.body.map((paragraph) => (
                  <p key={paragraph.slice(0, 24)}>{paragraph}</p>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
