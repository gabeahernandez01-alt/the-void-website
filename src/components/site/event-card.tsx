import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { EventRecord } from "@/data/catalog";
import { buttonClass } from "@/components/ui/button";
import { displayStatus, formatWhen } from "@/lib/events";
import { useI18n, type CopyKey } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const STATUS_KEY: Record<ReturnType<typeof displayStatus>, CopyKey> = {
  confirmed: "confirmed",
  tickets: "ticketsStatus",
  limited: "limited",
  ended: "ended",
};

export function StatusMark({ event }: { event: EventRecord }) {
  const { t } = useI18n();
  const status = displayStatus(event);
  const live = status === "tickets" || status === "limited" || status === "confirmed";
  return (
    <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest">
      <span className={cn("size-2", live ? "bg-acid" : "bg-muted")} aria-hidden="true" />
      <span className={live ? "text-acid" : "text-muted"}>{t(STATUS_KEY[status])}</span>
    </p>
  );
}

export function EventCard({ event, featured = false }: { event: EventRecord; featured?: boolean }) {
  const { t, lang } = useI18n();
  const when = formatWhen(event.start, lang, event.timeKnown);
  const status = displayStatus(event);
  const canBuy = Boolean(event.ticketUrl) && status !== "ended";
  const hint = event.ticketUrl?.includes("instagram.com")
    ? t("viaIg")
    : event.ticketUrl?.includes("ra.co")
      ? t("viaRa")
      : event.ticketUrl?.includes("shows.link")
        ? t("viaShow")
        : null;
  const location = [event.venue, event.city].filter((place): place is string => Boolean(place)).join(" · ");

  return (
    <article className={cn("group border border-line bg-dim", featured && "md:grid md:grid-cols-12")}>
      <Link
        to="/transmission/$eventId"
        params={{ eventId: event.id }}
        className={cn("relative block overflow-hidden", featured ? "md:col-span-6" : "")}
      >
        {event.image ? (
          <img
            src={event.image}
            alt={event.imageAlt?.[lang] ?? ""}
            width={1200}
            height={1600}
            className={cn(
              "w-full motion-safe:transition-transform motion-safe:duration-500",
              event.imagePresentation === "portrait"
                ? "aspect-[2/3] bg-bg object-contain"
                : "poster object-cover motion-safe:group-hover:scale-105",
            )}
            loading={featured ? "eager" : "lazy"}
          />
        ) : (
          <div className="poster flex flex-col justify-between bg-surface p-5 sm:p-8">
            <p className="font-mono text-xs uppercase tracking-widest text-acid">VØID_SYSTEM / TX</p>
            <p className="font-display text-5xl uppercase sm:text-7xl">{event.name}</p>
            <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("flyerPending")}</p>
          </div>
        )}
        <span className="absolute left-3 top-3 bg-bg/80 px-2 py-1 font-mono text-xs tracking-widest text-acid">
          {when.stamp}
        </span>
      </Link>
      <div className={cn("flex flex-col gap-4 p-4 sm:p-6", featured && "md:col-span-6 md:justify-end md:p-8")}>
        <StatusMark event={event} />
        <div>
          <h2 className={cn("font-display uppercase text-fg", featured ? "text-5xl sm:text-6xl" : "text-4xl")}>
            <Link to="/transmission/$eventId" params={{ eventId: event.id }} className="hover:text-acid">
              {event.name}
            </Link>
          </h2>
          <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
            {when.day}{when.time ? ` · ${when.time}` : ""} · {location}
          </p>
        </div>
        <p className="max-w-xl text-sm text-muted">{event.summary[lang]}</p>
        {event.artists.length > 0 ? (
          <p className="font-mono text-xs uppercase leading-relaxed tracking-wide text-fg">
            {event.artists.join("  /  ")}
          </p>
        ) : (
          event.artistNote && <p className="text-sm text-muted">{event.artistNote[lang]}</p>
        )}
        {event.genres.length > 0 && (
          <ul className="flex flex-wrap gap-2">
            {event.genres.map((genre) => (
              <li key={genre} className="border border-line px-2 py-1 font-mono text-xs uppercase tracking-widest text-muted">
                {genre}
              </li>
            ))}
          </ul>
        )}
        <div className="mt-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
          {canBuy && event.ticketUrl ? (
            <a className={buttonClass("solid", "w-full sm:w-auto")} href={event.ticketUrl} target="_blank" rel="noopener noreferrer">
              {t("tickets")}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
          ) : (
            <Link
              to="/transmission/$eventId"
              params={{ eventId: event.id }}
              className={buttonClass("line", "w-full sm:w-auto")}
            >
              {t("openRecord")}
            </Link>
          )}
          {canBuy && hint && <p className="font-mono text-xs uppercase tracking-widest text-muted">{hint}</p>}
        </div>
      </div>
    </article>
  );
}

export function Countdown({ iso }: { iso: string }) {
  const { t } = useI18n();
  const [parts, setParts] = useState<{ d: string; h: string; m: string; s: string } | null>(null);

  useEffect(() => {
    const target = new Date(iso).getTime();
    const pad = (value: number) => String(value).padStart(2, "0");
    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setParts({
        d: pad(Math.floor(diff / 86400000)),
        h: pad(Math.floor(diff / 3600000) % 24),
        m: pad(Math.floor(diff / 60000) % 60),
        s: pad(Math.floor(diff / 1000) % 60),
      });
    };
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, [iso]);

  const shown = parts ?? { d: "--", h: "--", m: "--", s: "--" };
  const cells = [
    [t("days"), shown.d],
    [t("hours"), shown.h],
    [t("minutes"), shown.m],
    [t("seconds"), shown.s],
  ] as const;

  return (
    <div className="grid grid-cols-4 gap-2" aria-live="off">
      {cells.map(([label, value]) => (
        <div key={label} className="border border-line px-2 py-3 text-center">
          <p className="font-display text-3xl tabular-nums text-fg sm:text-4xl">{value}</p>
          <p className="mt-1 font-mono text-xs uppercase tracking-widest text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
}
