import { useEffect, useState, type MouseEvent } from "react";
import { CalendarPlus, Share2 } from "lucide-react";
import type { EventRecord } from "@/data/catalog";
import { buttonClass } from "@/components/ui/button";
import { displayStatus } from "@/lib/events";
import { useI18n, type Lang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const CALENDAR_TIME_ZONE = "America/Merida";
const SITE_ORIGIN = "https://www.thevoid.com.mx";

function eventUrl(event: EventRecord) {
  return `${SITE_ORIGIN}/transmission/${encodeURIComponent(event.id)}`;
}

function dateParts(iso: string, includeTime = false) {
  const timeOptions = includeTime
    ? { hour: "2-digit" as const, minute: "2-digit" as const, second: "2-digit" as const, hourCycle: "h23" as const }
    : {};
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: CALENDAR_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...timeOptions,
  })
    .formatToParts(new Date(iso))
    .filter((part) => part.type !== "literal");
  return Object.fromEntries(parts.map(({ type, value }) => [type, value])) as Record<string, string>;
}

function meridaDate(iso: string) {
  const parts = dateParts(iso);
  return `${parts.year}${parts.month}${parts.day}`;
}

function meridaDateTime(iso: string) {
  const parts = dateParts(iso, true);
  return `${meridaDate(iso)}T${parts.hour}${parts.minute}${parts.second}`;
}

function addCalendarDays(date: string, days: number) {
  const parsed = new Date(Date.UTC(Number(date.slice(0, 4)), Number(date.slice(4, 6)) - 1, Number(date.slice(6, 8)) + days));
  return parsed.toISOString().slice(0, 10).replaceAll("-", "");
}

function googleCalendarUrl(event: EventRecord, lang: Lang, ticketsLabel: string) {
  let dates: string;
  if (event.timeKnown) {
    if (!event.end) return null;
    dates = `${meridaDateTime(event.start)}/${meridaDateTime(event.end)}`;
  } else {
    const start = meridaDate(event.start);
    const end = addCalendarDays(meridaDate(event.end ?? event.start), 1);
    dates = `${start}/${end}`;
  }

  const details = [
    event.summary[lang],
    event.ticketUrl ? `${ticketsLabel}: ${event.ticketUrl}` : "",
    eventUrl(event),
  ]
    .filter(Boolean)
    .join("\n\n");
  const location = event.address ?? [event.venue, event.city].filter(Boolean).join(", ");
  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", event.name);
  url.searchParams.set("dates", dates);
  url.searchParams.set("ctz", CALENDAR_TIME_ZONE);
  url.searchParams.set("details", details);
  url.searchParams.set("location", location);
  return url.toString();
}

function escapeIcs(value: string) {
  return value
    .replace(/\\/g, "\\\\")
    .replace(/\r\n|\r|\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function utcIcsDate(iso: string) {
  return new Date(iso).toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function calendarFile(event: EventRecord, lang: Lang, ticketsLabel: string) {
  const url = eventUrl(event);
  const location = event.address ?? [event.venue, event.city].filter(Boolean).join(", ");
  const details = [
    event.summary[lang],
    event.ticketUrl ? `${ticketsLabel}: ${event.ticketUrl}` : "",
    url,
  ]
    .filter(Boolean)
    .join("\n\n");
  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//THE VOID//Events//ES",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${escapeIcs(event.id)}@thevoid.com.mx`,
    `DTSTAMP:${utcIcsDate(new Date().toISOString())}`,
  ];

  if (event.timeKnown) {
    lines.push(`DTSTART:${utcIcsDate(event.start)}`);
    if (event.end) lines.push(`DTEND:${utcIcsDate(event.end)}`);
  } else {
    const start = meridaDate(event.start);
    const end = addCalendarDays(meridaDate(event.end ?? event.start), 1);
    lines.push(`DTSTART;VALUE=DATE:${start}`, `DTEND;VALUE=DATE:${end}`);
  }

  lines.push(
    `SUMMARY:${escapeIcs(event.name)}`,
    `DESCRIPTION:${escapeIcs(details)}`,
    `LOCATION:${escapeIcs(location)}`,
    `URL:${escapeIcs(url)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  );
  return `${lines.join("\r\n")}\r\n`;
}

function downloadCalendar(event: EventRecord, lang: Lang, ticketsLabel: string) {
  const blob = new Blob([calendarFile(event, lang, ticketsLabel)], { type: "text/calendar;charset=utf-8" });
  const objectUrl = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = objectUrl;
  anchor.download = `${event.id.replace(/[^a-z0-9-]/gi, "-").toLowerCase()}.ics`;
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(objectUrl), 1000);
}

function isShareCancelled(error: unknown) {
  return typeof error === "object" && error !== null && "name" in error && error.name === "AbortError";
}

export function EventActions({ event, className }: { event: EventRecord; className?: string }) {
  const { t, lang } = useI18n();
  const [shareFeedback, setShareFeedback] = useState<"" | "copied" | "failed">("");
  const active = displayStatus(event) !== "ended";
  const googleUrl = active ? googleCalendarUrl(event, lang, t("tickets")) : null;
  const url = eventUrl(event);

  useEffect(() => {
    if (!shareFeedback) return;
    const id = window.setTimeout(() => setShareFeedback(""), 2400);
    return () => window.clearTimeout(id);
  }, [shareFeedback]);

  const share = async () => {
    setShareFeedback("");
    if (typeof navigator.share === "function") {
      try {
        await navigator.share({ title: event.name, text: event.summary[lang], url });
        return;
      } catch (error) {
        if (isShareCancelled(error)) return;
      }
    }

    try {
      await navigator.clipboard.writeText(url);
      setShareFeedback("copied");
    } catch {
      setShareFeedback("failed");
    }
  };

  const download = (click: MouseEvent<HTMLButtonElement>) => {
    downloadCalendar(event, lang, t("tickets"));
    click.currentTarget.closest("details")?.removeAttribute("open");
  };

  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {active && (
        <details className="relative">
          <summary
            className={cn(
              buttonClass("line", "w-full list-none sm:w-auto"),
              "[&::-webkit-details-marker]:hidden",
            )}
          >
            <CalendarPlus aria-hidden="true" className="size-4" />
            {t("saveEvent")}
          </summary>
          <div className="absolute left-0 top-full z-30 mt-2 flex w-56 flex-col border border-line bg-bg p-1 shadow-xl">
            {googleUrl && (
              <a
                className="flex min-h-11 items-center px-3 font-mono text-xs uppercase tracking-widest text-fg hover:bg-dim hover:text-acid"
                href={googleUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("googleCalendar")}
              </a>
            )}
            <button
              type="button"
              className="flex min-h-11 items-center px-3 text-left font-mono text-xs uppercase tracking-widest text-fg hover:bg-dim hover:text-acid"
              onClick={download}
            >
              {t("downloadCalendar")}
            </button>
          </div>
        </details>
      )}
      <button type="button" className={buttonClass("line", "w-full sm:w-auto")} onClick={share}>
        <Share2 aria-hidden="true" className="size-4" />
        {t("shareEvent")}
      </button>
      {shareFeedback && (
        <span role="status" className="font-mono text-xs uppercase tracking-widest text-acid">
          {shareFeedback === "copied" ? t("linkCopied") : t("shareUnavailable")}
        </span>
      )}
    </div>
  );
}
