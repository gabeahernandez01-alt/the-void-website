import { ArrowUpRight, MapPin } from "lucide-react";
import type { EventRecord } from "@/data/catalog";
import { buttonClass } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

export function EventMap({ event }: { event: EventRecord }) {
  const { t } = useI18n();

  return (
    <section
      aria-label={`${t("mapLocation")}: ${event.name}`}
      className="grid gap-4 border border-line bg-dim p-4 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] sm:items-stretch sm:p-6"
    >
      <div className="flex flex-col items-start justify-center">
        <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-acid">
          <MapPin aria-hidden="true" className="size-4" />
          {t("mapLocation")}
        </p>
        <p className="mt-3 font-display text-3xl uppercase text-fg">{event.venue}</p>
        {event.address && <p className="mt-2 text-sm text-muted">{event.address}</p>}
        {event.mapQuery ? (
          <a
            className={buttonClass("line", "mt-5 w-full sm:w-auto")}
            href={event.mapUrl ?? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(event.mapQuery)}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("openMap")}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
        ) : null}
      </div>
      {event.mapQuery ? (
        <iframe
          title={`${t("mapLocation")}: ${event.name}`}
          src={`https://www.google.com/maps?q=${encodeURIComponent(event.mapQuery)}&output=embed`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="min-h-56 w-full border border-line bg-surface sm:min-h-72"
        />
      ) : (
        <div className="flex min-h-44 items-center justify-center border border-line bg-surface px-6 py-8 sm:min-h-56">
          <p className="max-w-sm text-center font-mono text-xs uppercase leading-relaxed tracking-widest text-muted">
            {t("mapPending")}
          </p>
        </div>
      )}
    </section>
  );
}
