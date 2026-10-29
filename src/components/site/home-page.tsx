import { Link } from "@tanstack/react-router";
import { buttonClass } from "@/components/ui/button";
import { Countdown, EventCard } from "@/components/site/event-card";
import { facebookUrl, instagramUrl, radio, soundGenres, tiktokUrl, youtubeUrl } from "@/data/catalog";
import { VideoCard } from "@/components/site/radio";
import { eventJsonLd, formatWhen, jsonScript, listArchive, listUpcoming } from "@/lib/events";
import { useDocTitle, useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STRIP = [
  "/media/room-wide.webp",
  "/media/booth-mask.webp",
  "/media/decks-white.webp",
  "/media/floor-close.webp",
  "/media/red-haze.webp",
  "/media/beams.webp",
  "/media/void-booth.webp",
  "/media/fire.webp",
];

function Waveform() {
  return (
    <svg viewBox="0 0 240 48" className="h-12 w-full text-acid" aria-hidden="true">
      {Array.from({ length: 48 }, (_, index) => {
        const height = 6 + ((index * 17) % 34);
        return (
          <rect
            key={index}
            x={index * 5}
            y={(48 - height) / 2}
            width="2"
            height={height}
            fill="currentColor"
            opacity={0.35 + (index % 5) * 0.13}
          />
        );
      })}
    </svg>
  );
}

export function HomePage() {
  const { t, lang } = useI18n();
  useDocTitle(t("homeTitle"));
  const upcoming = listUpcoming();
  const next = upcoming[0];
  const recent = listArchive().slice(0, 4);
  const nextWhen = next ? formatWhen(next.start, lang, next.timeKnown) : null;
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "THE VØID",
    areaServed: "Mérida, Yucatán, Mexico",
    sameAs: [instagramUrl, tiktokUrl, youtubeUrl, facebookUrl],
    description: t("philosophyBody"),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonScript(org) }} />
      {next && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonScript(eventJsonLd(next)) }} />
      )}
      <section className="grain relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <img
          src="/media/hero.webp"
          alt=""
          width={1837}
          height={1225}
          className="hero-still"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/35 to-bg/20" />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-bg via-bg/55 to-transparent xl:block" />
        <div className="scanlines absolute inset-0 opacity-50" />
        <div className="pointer-events-none absolute inset-5 hidden border border-white/15 xl:block" aria-hidden="true">
          <span className="absolute left-0 top-0 size-8 border-l-2 border-t-2 border-acid" />
          <span className="absolute right-0 top-0 size-8 border-r-2 border-t-2 border-acid" />
          <span className="absolute bottom-0 left-0 size-8 border-b-2 border-l-2 border-acid" />
          <span className="absolute bottom-0 right-0 size-8 border-b-2 border-r-2 border-acid" />
        </div>
        <div className="page-pad relative z-10 grid items-end gap-10 pb-12 pt-32 xl:grid-cols-12 xl:pb-16">
          <div className="xl:col-span-7">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">
              VØID_SYSTEM / STATUS: UNSTABLE
            </p>
            <p className="mt-2 font-mono text-xs uppercase tracking-widest text-muted">{t("reality")}</p>
            <h1 className="mt-6 max-w-5xl font-display text-6xl uppercase text-fg sm:text-8xl xl:text-[7.5rem]">
              {t("heroTitle")}
            </h1>
            <p className="mt-4 font-display text-2xl uppercase tracking-wide text-fg sm:text-4xl">
              {t("heroSupport")}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/transmissions" className={buttonClass("solid")}>
                {t("explore")}
              </Link>
              <Link to="/archive" className={buttonClass("line")}>
                {t("enterArchive")}
              </Link>
            </div>
            <p className="mt-8 font-mono text-xs uppercase tracking-widest text-muted">
              {t("location")} · 20.967° N / 89.593° W
            </p>
          </div>
          {next && (
            <aside className="border border-line bg-bg/75 p-5 backdrop-blur-sm xl:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("nextKicker")}</p>
              <h2 className="mt-2 font-display text-4xl uppercase xl:text-5xl">{next.name}</h2>
              <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                {nextWhen?.stamp}
                {nextWhen?.time ? ` · ${nextWhen.time}` : ""} · {next.venue}
              </p>
              <div className="mt-5">
                <Countdown iso={next.start} />
              </div>
              {next.ticketUrl && (
                <a
                  className={buttonClass("solid", "mt-5 w-full")}
                  href={next.ticketUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("tickets")}
                </a>
              )}
            </aside>
          )}
        </div>
      </section>

      <section aria-label={lang === "es" ? "Archivo fotográfico" : "Photo archive"} className="border-y border-line">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-8">
          {STRIP.map((src, index) => (
            <img
              key={src}
              src={src}
              alt=""
              width={800}
              height={450}
              className={cn(
                "aspect-[4/5] w-full object-cover xl:aspect-[3/4]",
                index > 3 && "hidden md:block",
              )}
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <section className="page-pad py-16 xl:py-24">
        {upcoming.length > 0 ? (
          <div className="grid gap-8">
            {next && <EventCard event={next} featured />}
            {upcoming.slice(1, 2).map((event) => {
              const when = formatWhen(event.start, lang, event.timeKnown);
              return (
                <div key={event.id} className="grid gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-acid">
                      VØID_SYSTEM / {event.name} · {when.stamp}
                    </p>
                    <div className="mt-3 max-w-2xl">
                      <Countdown iso={event.start} />
                    </div>
                  </div>
                  <EventCard event={event} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="border border-line p-6">
            <p className="max-w-xl text-muted">{t("emptyBody")}</p>
            <Link to="/archive" className={buttonClass("line", "mt-6")}>
              {t("enterArchive")}
            </Link>
          </div>
        )}
      </section>

      <section className="page-pad border-t border-line py-16 xl:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("philosophyKicker")}</p>
        <h2 className="mt-3 max-w-5xl font-display text-5xl uppercase xl:text-8xl">{t("philosophyTitle")}</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <p className="text-muted">{t("philosophyBody")}</p>
          <p className="text-muted">{t("philosophyBody2")}</p>
        </div>
        <dl className="mt-10 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["01", "Mérida, Yucatán"],
            ["02", "ØØ1 · 27.09.25"],
            ["03", lang === "es" ? "1 año · 26.09.26" : "1 year · 26.09.26"],
            ["04", "+18"],
          ].map(([index, label]) => (
            <div key={index} className="bg-bg p-4">
              <dt className="font-mono text-xs text-acid">{index}</dt>
              <dd className="mt-2 font-display text-2xl uppercase">{label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="page-pad border-t border-line py-16 xl:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("historyKicker")}</p>
        <h2 className="mt-3 max-w-5xl font-display text-5xl uppercase xl:text-8xl">{t("historyHomeTitle")}</h2>
        <p className="mt-6 max-w-2xl text-muted">{t("historyHomeBody")}</p>
        <Link to="/history" className={buttonClass("line", "mt-8")}>
          {t("viewHistory")}
        </Link>
      </section>

      <section className="border-t border-line">
        <div className="overflow-hidden">
          <div className="marquee-track flex w-max">
            {[0, 1].map((copy) => (
              <p key={copy} className={copy === 1 ? "flex motion-reduce:hidden" : "flex"} aria-hidden={copy === 1}>
                {soundGenres.map((genre) => (
                  <span key={`${genre}-${copy}`} className="flex items-center gap-6 px-3 py-5 font-display text-4xl uppercase sm:text-6xl">
                    {genre}
                    <span className="text-acid">/</span>
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
        <div className="page-pad grid gap-10 py-16 xl:grid-cols-2 xl:py-28">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("soundKicker")}</p>
            <h2 className="mt-3 font-display text-5xl uppercase sm:text-7xl">{t("soundTitle")}</h2>
            <p className="mt-6 max-w-xl text-muted">{t("soundBody")}</p>
          </div>
          <div className="flex flex-col justify-end gap-6">
            <Waveform />
            <ul className="grid grid-cols-1 gap-2 sm:grid-cols-2">
              {soundGenres.map((genre) => (
                <li key={genre} className="border border-line px-3 py-3 font-mono text-xs uppercase tracking-widest">
                  {genre}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="page-pad border-t border-line py-16 xl:py-28">
        <div className="mb-8 flex items-end justify-between gap-4">
          <h2 className="font-display text-5xl uppercase xl:text-7xl">{t("archiveHomeTitle")}</h2>
          <Link to="/archive" className={buttonClass("quiet")}>
            {t("viewArchive")}
          </Link>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {recent.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      <section className="page-pad border-t border-line py-16 xl:py-28">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("radioKicker")}</p>
            <h2 className="mt-2 font-display text-5xl uppercase xl:text-7xl">{t("radioTitle")}</h2>
            <p className="mt-4 max-w-2xl text-muted">{t("radioLede")}</p>
          </div>
          <a className={buttonClass("line")} href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            {t("watchChannel")}
          </a>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {radio.slice(0, 2).map((video) => (
            <VideoCard key={video.id} video={video} featured />
          ))}
        </div>
      </section>

      <section className="page-pad border-t border-line py-16 xl:py-28">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("joinKicker")}</p>
        <h2 className="mt-3 max-w-5xl font-display text-5xl uppercase xl:text-8xl">{t("joinTitle")}</h2>
        <p className="mt-6 max-w-2xl text-muted">{t("joinBody")}</p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a className={buttonClass("solid", "w-full sm:w-auto")} href={instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a className={buttonClass("line", "w-full sm:w-auto")} href={tiktokUrl} target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a className={buttonClass("line", "w-full sm:w-auto")} href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
          <a className={buttonClass("line", "w-full sm:w-auto")} href={facebookUrl} target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          <Link to="/contact" className={buttonClass("line", "w-full sm:w-auto")}>
            {t("navContact")}
          </Link>
          <Link to="/signal" className={buttonClass("quiet", "w-full sm:w-auto")}>
            {t("viewSignal")}
          </Link>
        </div>
      </section>
    </>
  );
}
