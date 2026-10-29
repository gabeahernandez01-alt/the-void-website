import {
  type EventRecord,
  type TicketStatus,
  events,
  facebookUrl,
  instagramUrl,
  tiktokUrl,
  youtubeUrl,
} from "@/data/catalog";
import type { Lang } from "@/lib/i18n";

export function meridaKey(date: Date) {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "America/Merida",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function isEnded(event: EventRecord, now = new Date()) {
  return meridaKey(new Date(event.start)) < meridaKey(now);
}

export function displayStatus(event: EventRecord, now = new Date()): TicketStatus {
  if (isEnded(event, now)) return "ended";
  return event.status;
}

export function listUpcoming(now = new Date()) {
  return events
    .filter((event) => !isEnded(event, now))
    .sort((a, b) => a.start.localeCompare(b.start));
}

export function listArchive(now = new Date()) {
  return events
    .filter((event) => isEnded(event, now))
    .sort((a, b) => b.start.localeCompare(a.start));
}

export function getEvent(id: string) {
  return events.find((event) => event.id === id);
}

export function formatWhen(iso: string, lang: Lang, timeKnown: boolean) {
  const date = new Date(iso);
  const locale = lang === "es" ? "es-MX" : "en-GB";
  const day = new Intl.DateTimeFormat(locale, {
    timeZone: "America/Merida",
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
  const time = timeKnown
    ? new Intl.DateTimeFormat(locale, {
        timeZone: "America/Merida",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      }).format(date)
    : null;
  const stamp = new Intl.DateTimeFormat("en-GB", {
    timeZone: "America/Merida",
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  })
    .format(date)
    .replaceAll("/", ".");
  return { day, time, stamp };
}

export function eventJsonLd(event: EventRecord) {
  const status = displayStatus(event);
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: event.name,
    startDate: event.start,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus:
      status === "ended"
        ? "https://schema.org/EventScheduled"
        : "https://schema.org/EventScheduled",
    description: event.summary.es,
    inLanguage: ["es", "en"],
    location:
      event.venue === "UNKNOWN"
        ? undefined
        : {
            "@type": "Place",
            name: event.venue,
            address: {
              "@type": "PostalAddress",
              streetAddress: event.address ?? event.venue,
              addressLocality: event.city ?? "Mérida",
              addressRegion: "Yucatán",
              addressCountry: "MX",
            },
          },
    organizer: {
      "@type": "Organization",
      name: "THE VØID",
      sameAs: [instagramUrl, tiktokUrl, youtubeUrl, facebookUrl],
    },
  };
  if (event.end) data.endDate = event.end;
  if (event.artists.length > 0) {
    data.performer = event.artists.map((name) => ({ "@type": "Person", name }));
  }
  if (event.ticketUrl && status !== "ended") {
    data.offers = {
      "@type": "Offer",
      url: event.ticketUrl,
      availability: "https://schema.org/InStock",
      priceCurrency: "MXN",
    };
  }
  return data;
}

export function jsonScript(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
