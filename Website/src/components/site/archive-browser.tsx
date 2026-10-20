import { useMemo, useState } from "react";
import { EventCard } from "@/components/site/event-card";
import type { EventRecord } from "@/data/catalog";
import { meridaKey } from "@/lib/events";
import { useI18n } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function ArchiveBrowser({ events }: { events: EventRecord[] }) {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [year, setYear] = useState("all");
  const [genre, setGenre] = useState("all");

  const years = useMemo(() => {
    return [...new Set(events.map((event) => meridaKey(new Date(event.start)).slice(0, 4)))].sort((a, b) =>
      b.localeCompare(a),
    );
  }, [events]);

  const genres = useMemo(() => {
    return [...new Set(events.flatMap((event) => event.genres))].sort((a, b) => a.localeCompare(b));
  }, [events]);

  const filtered = events.filter((event) => {
    const eventYear = meridaKey(new Date(event.start)).slice(0, 4);
    if (year !== "all" && eventYear !== year) return false;
    if (genre !== "all" && !event.genres.includes(genre)) return false;
    const haystack = [
      event.name,
      event.venue,
      event.address ?? "",
      event.artists.join(" "),
      event.genres.join(" "),
      event.summary.es,
      event.summary.en,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(query.trim().toLowerCase());
  });

  const chip = (active: boolean) =>
    cn(
      "min-h-11 border px-3 font-mono text-xs uppercase tracking-widest",
      active ? "border-acid bg-acid text-bg" : "border-line text-muted hover:text-fg",
    );

  return (
    <div>
      <div className="border border-line p-4">
        <label htmlFor="archive-search" className="font-mono text-xs uppercase tracking-widest text-muted">
          {t("searchLabel")}
        </label>
        <input
          id="archive-search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={t("searchPlaceholder")}
          className="mt-2 w-full border border-line bg-bg px-3 py-3 font-mono text-sm text-fg outline-none placeholder:text-muted"
        />
        <div className="mt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("year")}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className={chip(year === "all")} aria-pressed={year === "all"} onClick={() => setYear("all")}>
              {t("all")}
            </button>
            {years.map((item) => (
              <button key={item} type="button" className={chip(year === item)} aria-pressed={year === item} onClick={() => setYear(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <p className="font-mono text-xs uppercase tracking-widest text-muted">{t("genre")}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            <button type="button" className={chip(genre === "all")} aria-pressed={genre === "all"} onClick={() => setGenre("all")}>
              {t("all")}
            </button>
            {genres.map((item) => (
              <button key={item} type="button" className={chip(genre === item)} aria-pressed={genre === item} onClick={() => setGenre(item)}>
                {item}
              </button>
            ))}
          </div>
        </div>
        {(query || year !== "all" || genre !== "all") && (
          <button
            type="button"
            className="mt-4 min-h-11 font-mono text-xs uppercase tracking-widest text-acid"
            onClick={() => {
              setQuery("");
              setYear("all");
              setGenre("all");
            }}
          >
            {t("clear")}
          </button>
        )}
      </div>
      <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted" aria-live="polite">
        {filtered.length} {t("results")}
      </p>
      {filtered.length === 0 ? (
        <p className="mt-8 border border-line p-6 text-muted">{t("noResults")}</p>
      ) : (
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {filtered.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
}
