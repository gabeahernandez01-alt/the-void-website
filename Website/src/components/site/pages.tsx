import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { ArchiveBrowser } from "@/components/site/archive-browser";
import { Countdown, EventCard, StatusMark } from "@/components/site/event-card";
import { buttonClass } from "@/components/ui/button";
import { media, radio, youtubeUrl, type EventRecord, type MediaItem } from "@/data/catalog";
import { VideoCard } from "@/components/site/radio";
import { displayStatus, eventJsonLd, formatWhen, jsonScript, listArchive, listUpcoming } from "@/lib/events";
import { useDocTitle, useI18n } from "@/lib/i18n";
import { contactInbox, sendContact } from "@/lib/contact";
import { cn } from "@/lib/utils";

function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="page-pad pb-10 pt-32 xl:pt-36">
      <p className="font-mono text-xs uppercase tracking-widest text-acid">{kicker}</p>
      <h1 className="mt-3 max-w-5xl font-display text-5xl uppercase sm:text-7xl md:text-8xl">{title}</h1>
      <p className="mt-6 max-w-2xl text-muted">{lede}</p>
    </header>
  );
}

export function TransmissionsPage() {
  const { t, lang } = useI18n();
  useDocTitle(t("transmissionsTitle"));
  const upcoming = listUpcoming();
  const next = upcoming[0];
  const lede =
    lang === "es"
      ? "Dos fechas. Dos transmisiones distintas. La señal ya tiene nuevas coordenadas. Guarda las fechas: lo que viene apenas comienza."
      : "Two dates. Two different transmissions. The signal has new coordinates. Save the dates. What comes next is only the beginning.";

  return (
    <>
      {next && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonScript(eventJsonLd(next)) }} />
      )}
      <PageIntro kicker="VØID_SYSTEM / TX" title={t("navTransmissions")} lede={lede} />
      <div className="page-pad pb-24">
        {next ? (
          <div className="grid gap-8">
            {upcoming.map((event, index) => {
              const when = formatWhen(event.start, lang, event.timeKnown);
              return (
                <section key={event.id} className="grid gap-4">
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-acid">
                      VØID_SYSTEM / {event.name} · {when.stamp}
                    </p>
                    <div className="mt-3 max-w-2xl">
                      <Countdown iso={event.start} />
                    </div>
                  </div>
                  <EventCard event={event} featured={index === 0} />
                </section>
              );
            })}
          </div>
        ) : (
          <div className="border border-line p-6">
            <h2 className="font-display text-4xl uppercase">{t("emptyTitle")}</h2>
            <p className="mt-3 max-w-xl text-muted">{t("emptyBody")}</p>
            <Link to="/archive" className={buttonClass("line", "mt-6")}>
              {t("enterArchive")}
            </Link>
          </div>
        )}
      </div>
    </>
  );
}

export function ArchivePage() {
  const { t } = useI18n();
  useDocTitle(t("archiveTitleDoc"));
  const archive = listArchive();
  return (
    <>
      <PageIntro kicker={t("archiveKicker")} title={t("archiveTitle")} lede={t("archiveLede")} />
      <div className="page-pad pb-24">
        <ArchiveBrowser events={archive} />
      </div>
    </>
  );
}

function SignalCard({ item }: { item: MediaItem }) {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  return (
    <article className="border border-line bg-dim">
      <div className="poster relative overflow-hidden bg-surface">
        {!open && (
          <img src={item.image} alt="" width={1200} height={1600} className="h-full w-full object-cover" loading="lazy" />
        )}
        {open && item.embedUrl && (
          <iframe
            title={item.title[lang]}
            src={item.embedUrl}
            className="absolute inset-0 h-full w-full bg-bg"
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        )}
        {!open && item.embedUrl && (
          <div className="absolute inset-x-0 bottom-0 p-4">
            <button type="button" className={buttonClass("solid")} onClick={() => setOpen(true)}>
              {t("loadEmbed")}
            </button>
          </div>
        )}
      </div>
      <div className="space-y-3 p-4">
        <p className="font-mono text-xs uppercase tracking-widest text-acid">{item.source}</p>
        <h2 className="font-display text-3xl uppercase">{item.title[lang]}</h2>
        <p className="text-sm text-muted">{item.caption[lang]}</p>
        <a className={buttonClass("quiet")} href={item.href} target="_blank" rel="noopener noreferrer">
          {t("openOriginal")}
          <ArrowUpRight aria-hidden="true" className="size-4" />
        </a>
      </div>
    </article>
  );
}

export function SignalPage() {
  const { t } = useI18n();
  useDocTitle(t("signalTitleDoc"));
  return (
    <>
      <PageIntro kicker={t("signalKicker")} title={t("signalTitle")} lede={t("signalLede")} />
      <section className="page-pad pb-16">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-acid">{t("radioKicker")}</p>
            <h2 className="mt-2 font-display text-4xl uppercase xl:text-6xl">{t("radioTitle")}</h2>
            <p className="mt-3 max-w-2xl text-sm text-muted">{t("radioLede")}</p>
          </div>
          <a className={buttonClass("line")} href={youtubeUrl} target="_blank" rel="noopener noreferrer">
            {t("watchChannel")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        </div>
        <div className="grid gap-4 xl:grid-cols-2">
          {radio.map((video, index) => (
            <VideoCard key={video.id} video={video} featured={index < 2} />
          ))}
        </div>
      </section>
      <div className="page-pad grid gap-4 pb-24 xl:grid-cols-3">
        {media.map((item) => (
          <SignalCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

const TOPICS = ["booking", "collab", "press", "other"] as const;

export function ContactPage() {
  const { t } = useI18n();
  useDocTitle(t("contactTitleDoc"));
  const started = useRef(0);
  if (started.current === 0 && typeof performance !== "undefined") started.current = performance.now();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof TOPICS)[number]>("booking");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [activate, setActivate] = useState(false);
  const [pending, setPending] = useState(false);

  const topicLabel = {
    booking: t("topicBooking"),
    collab: t("topicCollab"),
    press: t("topicPress"),
    other: t("topicOther"),
  }[topic];

  const onSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (company.trim()) {
      setSent(true);
      setError(null);
      return;
    }
    if (name.trim().length < 2) return setError(t("errName"));
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError(t("errEmail"));
    if (message.trim().length < 8) return setError(t("errMessage"));
    const fast = performance.now() - started.current < 800;
    if (fast) return;
    setPending(true);
    setError(null);
    try {
      const result = await sendContact({ data: { name, email, topic: topicLabel, message, company } });
      if (!result.ok) {
        setError(result.error === "email" ? t("errEmail") : result.error === "name" ? t("errName") : result.error === "message" ? t("errMessage") : t("contactFail"));
        return;
      }
      setSent(true);
      setActivate("activate" in result && result.activate === true);
      setMessage("");
    } catch {
      setError(t("contactFail"));
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <PageIntro kicker="VØID_SYSTEM / IN" title={t("contactTitle")} lede={t("contactLede")} />
      <div className="page-pad grid gap-10 pb-24 xl:grid-cols-2">
        <form className="relative border border-line p-4 sm:p-6" onSubmit={onSubmit} noValidate>
          <div className="absolute h-px w-px overflow-hidden" aria-hidden="true">
            <label>
              Company
              <input value={company} onChange={(event) => setCompany(event.target.value)} tabIndex={-1} autoComplete="off" />
            </label>
          </div>
          <div className="grid gap-4">
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest text-muted" htmlFor="contact-name">
              {t("name")}
              <input id="contact-name" value={name} onChange={(event) => setName(event.target.value)} autoComplete="name" required className="border border-line bg-bg px-3 py-3 font-mono text-sm text-fg" />
            </label>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest text-muted" htmlFor="contact-email">
              {t("email")}
              <input id="contact-email" type="email" value={email} onChange={(event) => setEmail(event.target.value)} autoComplete="email" required className="border border-line bg-bg px-3 py-3 font-mono text-sm text-fg" />
            </label>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest text-muted" htmlFor="contact-topic">
              {t("topic")}
              <select id="contact-topic" value={topic} onChange={(event) => setTopic(event.target.value as (typeof TOPICS)[number])} className="min-h-11 border border-line bg-bg px-3 font-mono text-sm text-fg">
                {TOPICS.map((item) => (
                  <option key={item} value={item}>
                    {item === "booking" ? t("topicBooking") : item === "collab" ? t("topicCollab") : item === "press" ? t("topicPress") : t("topicOther")}
                  </option>
                ))}
              </select>
            </label>
            <label className="grid gap-2 font-mono text-xs uppercase tracking-widest text-muted" htmlFor="contact-message">
              {t("message")}
              <textarea id="contact-message" value={message} onChange={(event) => setMessage(event.target.value)} required rows={6} className="border border-line bg-bg px-3 py-3 font-mono text-sm text-fg" />
            </label>
          </div>
          {error && (
            <p className="mt-4 text-sm text-acid" role="alert">
              {error}
            </p>
          )}
          <button type="submit" disabled={pending} className={buttonClass("solid", "mt-6 w-full sm:w-auto")}>
            {pending ? t("sending") : t("send")}
          </button>
        </form>
        <div className="border border-line p-4 sm:p-6">
          {sent ? (
            <p className="text-muted">{activate ? t("contactActivate") : t("contactSent")}</p>
          ) : (
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-widest text-acid">{contactInbox}</p>
              <p className="text-muted">{t("contactLede")}</p>
              <a className={buttonClass("line")} href={`mailto:${contactInbox}`}>
                {contactInbox}
              </a>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export function PrivacyPage() {
  const { t, lang } = useI18n();
  useDocTitle(t("privacyTitleDoc"));
  const blocks =
    lang === "es"
      ? [
          "El idioma elegido se queda en este navegador. No es una cookie de rastreo.",
          "Los mensajes viajan a the.void.merida@gmail.com. Aquí no se archivan. Un campo oculto aparta los envíos automáticos.",
          "No hay rastreadores encendidos. Si algún día se activan, primero se pedirá permiso.",
          "Instagram, TikTok, YouTube, Facebook y Resident Advisor tienen sus propias reglas al salir, o cuando un video empieza.",
        ]
      : [
          "The language you choose stays in this browser. It is not a tracking cookie.",
          "Messages travel to the.void.merida@gmail.com. Nothing is archived here. A hidden field turns automated submissions away.",
          "No trackers are switched on. If they ever are, permission comes first.",
          "Instagram, TikTok, YouTube, Facebook and Resident Advisor keep their own rules once you leave, or when a video starts.",
        ];
  return (
    <>
      <PageIntro kicker="VØID_SYSTEM / PRIV" title={t("privacyTitle")} lede={t("privacyLede")} />
      <div className="page-pad mb-24">
        <div className="max-w-3xl space-y-4 border border-line p-6 text-muted xl:p-8">
          {blocks.map((block) => (
            <p key={block}>{block}</p>
          ))}
        </div>
      </div>
    </>
  );
}

export function EventPage({ event }: { event: EventRecord }) {
  const { t, lang } = useI18n();
  useDocTitle(`${event.name} — THE VØID`);
  const when = formatWhen(event.start, lang, event.timeKnown);
  const end = event.end ? formatWhen(event.end, lang, true) : null;
  const status = displayStatus(event);
  const canBuy = Boolean(event.ticketUrl) && status !== "ended";
  const related = [...listUpcoming(), ...listArchive()].filter((item) => item.id !== event.id).slice(0, 2);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonScript(eventJsonLd(event)) }} />
      <article className="page-pad pb-16 pt-32 xl:pt-36">
        <Link to={status === "ended" ? "/archive" : "/transmissions"} className={buttonClass("quiet")}>
          {t("back")}
        </Link>
        <div className="mt-6 grid gap-8 lg:grid-cols-12">
          {event.image ? (
            <img
              src={event.image}
              alt={event.imageAlt?.[lang] ?? ""}
              width={1200}
              height={1600}
              className={cn(
                "w-full lg:col-span-5",
                event.imagePresentation === "portrait"
                  ? "aspect-[2/3] bg-bg object-contain"
                  : "poster object-cover",
              )}
            />
          ) : (
            <div className="poster flex flex-col justify-between bg-surface p-5 sm:p-8 lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-widest text-acid">VØID_SYSTEM / TX</p>
              <p className="font-display text-5xl uppercase sm:text-7xl">{event.name}</p>
              <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("flyerPending")}</p>
            </div>
          )}
          <div className="lg:col-span-7">
            <StatusMark event={event} />
            <h1 className="mt-3 font-display text-5xl uppercase sm:text-7xl">{event.name}</h1>
            <p className="mt-4 max-w-xl text-muted">{event.summary[lang]}</p>
            {status !== "ended" && <div className="mt-6 max-w-md"><Countdown iso={event.start} /></div>}
            <dl className="mt-8 grid gap-px bg-line sm:grid-cols-2">
              {[
                [t("when"), `${when.day}${when.time ? ` · ${when.time}` : ""}${end?.time ? ` — ${end.time}` : ""}`],
                [t("venue"), event.address ?? event.venue],
                [t("artists"), event.artists.length ? event.artists.join(" · ") : event.artistNote?.[lang] ?? "—"],
                ...(event.genres.length ? [[t("genres"), event.genres.join(" · ")]] : []),
                ...(event.access ? [[t("access"), event.access[lang]]] : []),
                ...(event.age ? [[t("age"), event.age]] : []),
                ...(event.production ? [[t("production"), event.production.join(" · ")]] : []),
                ...(event.priceMxn ? [[t("price"), `MXN ${event.priceMxn}`]] : []),
              ].map(([label, value]) => (
                <div key={label} className="bg-bg p-4">
                  <dt className="font-mono text-xs uppercase tracking-widest text-acid">{label}</dt>
                  <dd className="mt-2 text-sm text-fg">{value}</dd>
                </div>
              ))}
            </dl>
            {event.scheduleNote && <p className="mt-4 text-sm text-muted">{event.scheduleNote[lang]}</p>}
            {event.priceMxn && status === "ended" && <p className="mt-2 text-sm text-muted">{t("priceNote")}</p>}
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              {canBuy && event.ticketUrl && (
                <a className={buttonClass("solid")} href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
                  {t("tickets")}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </a>
              )}
              {event.links.map((link) => (
                <a key={link.href} className={buttonClass("line")} href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
        </article>
      {event.gallery && event.gallery.length > 0 && (
        <section className="page-pad pb-16">
          <p className="font-mono text-xs uppercase tracking-widest text-acid">
            THE VØID / ARCHIVE
          </p>
          <h2 className="mt-2 mb-6 font-display text-4xl uppercase sm:text-5xl">
            {lang === "es" ? "Galería" : "Gallery"}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {event.gallery.map((photo, index) => (
              <img
                key={photo}
                src={photo}
                alt={`${event.name} — ${lang === "es" ? "fotografía" : "photo"} ${index + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full border border-line object-cover"
              />
            ))}
          </div>
        </section>
      )}
      {related.length > 0 && (
        <section className="page-pad pb-24">
          <h2 className="mb-4 font-display text-3xl uppercase">{t("related")}</h2>
          <div className="grid gap-4 lg:grid-cols-2">
            {related.map((item) => (
              <EventCard key={item.id} event={item} />
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export function NotFoundPage() {
  const { t } = useI18n();
  useDocTitle(t("notFoundTitle"));
  return (
    <div className="page-pad pb-24 pt-36">
      <p className="font-mono text-xs uppercase tracking-widest text-acid">404 / SIGNAL LOST</p>
      <h1 className="mt-3 font-display text-6xl uppercase sm:text-8xl">{t("notFoundTitle")}</h1>
      <p className="mt-4 max-w-md text-muted">{t("notFoundBody")}</p>
      <Link to="/" className={buttonClass("solid", "mt-8")}>
        THE VØID
      </Link>
    </div>
  );
}
