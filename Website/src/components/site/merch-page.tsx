import { ArrowUpRight } from "lucide-react";
import { buttonClass } from "@/components/ui/button";
import { instagramUrl } from "@/data/catalog";
import { useDocTitle, useI18n, type Lang } from "@/lib/i18n";

type Localized = Record<Lang, string>;

const PRODUCTS: {
  image: string;
  name: Localized;
  description: Localized;
  alt: Localized;
  anniversary?: boolean;
}[] = [
  {
    image: "/media/merch-anniversary-001.png",
    name: { es: "Anniversary 001", en: "Anniversary 001" },
    description: {
      es: "Edición especial conmemorativa del primer aniversario de THE VØID. Logo al frente y numeración 001 en la espalda.",
      en: "Special edition commemorating THE VØID’s first anniversary. Logo on the front and 001 numbering on the back.",
    },
    alt: {
      es: "Playera negra THE VØID, vista frontal y posterior, edición especial 001 del primer aniversario",
      en: "Black THE VØID tee, front and back, special 001 first-anniversary edition",
    },
    anniversary: true,
  },
  {
    image: "/media/merch-signal.jpg",
    name: { es: "Electric Signal", en: "Electric Signal" },
    description: {
      es: "El logotipo de THE VØID atravesado por una descarga azul eléctrica.",
      en: "THE VØID’s logo cut through by an electric-blue signal.",
    },
    alt: {
      es: "Playera negra con logotipo THE VØID y descarga azul al frente",
      en: "Black tee with THE VØID logo and blue lightning across the front",
    },
  },
  {
    image: "/media/merch-enter-the-void.jpg",
    name: { es: "Enter the VØID", en: "Enter the VØID" },
    description: {
      es: "Símbolo Ø discreto al frente y el llamado ENTER THE VØID en la espalda.",
      en: "A subtle Ø on the front and the ENTER THE VØID message on the back.",
    },
    alt: {
      es: "Playera negra con símbolo Ø al frente y texto ENTER THE VØID en la espalda",
      en: "Black tee with an Ø symbol on the front and ENTER THE VØID text on the back",
    },
  },
  {
    image: "/media/merch-no-time-no-space.jpg",
    name: { es: "No Time / No Space", en: "No Time / No Space" },
    description: {
      es: "Logo pequeño al frente y la consigna NO TIME · NO SPACE · JUST MUSIC al reverso.",
      en: "Small front logo with NO TIME · NO SPACE · JUST MUSIC on the back.",
    },
    alt: {
      es: "Playera negra con logo pequeño al frente y símbolo Ø con la frase No Time No Space Just Music atrás",
      en: "Black tee with a small front logo and the Ø symbol with No Time No Space Just Music on the back",
    },
  },
  {
    image: "/media/merch-vertical-void.jpg",
    name: { es: "Vertical VØID", en: "Vertical VØID" },
    description: {
      es: "El nombre THE VØID en vertical al frente y el símbolo Ø en la espalda.",
      en: "THE VØID set vertically on the front, with the Ø symbol on the back.",
    },
    alt: {
      es: "Playera negra con THE VØID en vertical al frente y el símbolo Ø atrás",
      en: "Black tee with vertical THE VØID lettering on the front and the Ø symbol on the back",
    },
  },
  {
    image: "/media/merch-core.jpg",
    name: { es: "Core Ø", en: "Core Ø" },
    description: {
      es: "Símbolo Ø al frente y el nombre THE VØID en vertical en la espalda.",
      en: "The Ø symbol on the front and THE VØID lettering running vertically down the back.",
    },
    alt: {
      es: "Playera negra con símbolo Ø al frente y THE VØID en vertical en la espalda",
      en: "Black tee with an Ø symbol on the front and THE VØID running vertically down the back",
    },
  },
];

export function MerchPage() {
  const { t, lang } = useI18n();
  useDocTitle(t("merchTitleDoc"));

  return (
    <>
      <header className="page-pad pb-10 pt-32 xl:pt-36">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("merchKicker")}</p>
        <h1 className="mt-3 max-w-5xl font-display text-6xl uppercase sm:text-8xl">{t("merchTitle")}</h1>
        <p className="mt-6 max-w-2xl text-muted">{t("merchLede")}</p>
      </header>

      <section className="page-pad pb-24">
        <div className="mb-8 grid gap-2 border-l-2 border-acid bg-dim px-5 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center sm:gap-8">
          <div>
            <h2 className="font-mono text-xs uppercase tracking-widest text-acid">{t("merchProductionTitle")}</h2>
            <p className="mt-2 max-w-3xl text-sm text-muted">{t("merchProductionBody")}</p>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-fg">{t("cityLine")}</p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {PRODUCTS.map((product) => (
            <article key={product.image} className="flex flex-col border border-line bg-dim">
              <div className="relative overflow-hidden bg-surface">
                <img
                  src={product.image}
                  alt={product.alt[lang]}
                  width={1536}
                  height={1024}
                  className="aspect-[3/2] w-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
                {product.anniversary && (
                  <span className="absolute left-3 top-3 max-w-xs bg-acid px-3 py-2 font-mono text-xs uppercase tracking-wider text-bg">
                    {t("merchAnniversaryBadge")}
                  </span>
                )}
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h2 className="font-display text-3xl uppercase">{product.name[lang]}</h2>
                <p className="mt-3 flex-1 text-sm text-muted">{product.description[lang]}</p>
                <a
                  className={buttonClass("line", "mt-6 w-full justify-between")}
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${t("merchOrder")}: ${product.name[lang]}`}
                >
                  <span>{t("merchOrder")}</span>
                  <ArrowUpRight size={16} aria-hidden="true" />
                </a>
              </div>
            </article>
          ))}
        </div>

        <section className="mt-16 border-t border-line pt-10" aria-labelledby="merch-order-heading">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">VØID_SYSTEM / DM</p>
          <h2 id="merch-order-heading" className="mt-3 max-w-4xl font-display text-4xl uppercase sm:text-6xl">
            {t("merchHowTitle")}
          </h2>
          <ol className="mt-8 grid gap-px bg-line md:grid-cols-3">
            {[t("merchStepOne"), t("merchStepTwo"), t("merchStepThree")].map((step, index) => (
              <li key={step} className="bg-bg p-5">
                <span className="font-mono text-xs text-acid">0{index + 1}</span>
                <p className="mt-3 text-sm text-muted">{step}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 font-mono text-xs uppercase tracking-widest text-muted">{t("merchInstagramNote")}</p>
        </section>
      </section>
    </>
  );
}
