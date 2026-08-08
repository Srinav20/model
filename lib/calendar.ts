import { eventData } from "./event-data";

// No explicit end time exists in eventData, only a start — assuming a
// 2-hour ceremony window for the calendar entry. Adjust here if the actual
// duration is known.
const EVENT_DURATION_HOURS = 2;

function formatICSDate(date: Date): string {
  // "2026-08-23T05:45:00.000Z" -> "20260823T054500Z"
  return date.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

function escapeICSText(text: string): string {
  return text.replace(/([,;])/g, "\\$1").replace(/\n/g, "\\n");
}

/**
 * Builds a standard .ics (iCalendar) file body for the engagement event,
 * derived entirely from lib/event-data.ts — no date/venue/name literals
 * duplicated here.
 */
export function buildEventICS(): string {
  const start = new Date(eventData.isoDateTime);
  const end = new Date(start.getTime() + EVENT_DURATION_HOURS * 60 * 60 * 1000);
  const now = new Date();

  const summary = `${eventData.groom} & ${eventData.bride} Engagement`;
  const location = `${eventData.venueName}, ${eventData.venueFloors}, ${eventData.venueAddress}`;
  const description = `Engagement ceremony of ${eventData.groom} & ${eventData.bride}.`;
  const uid = `${eventData.groom.toLowerCase()}-${eventData.bride.toLowerCase()}-engagement@invitation`;

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Srivatsav and Harshitha Engagement//EN",
    "CALSCALE:GREGORIAN",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${formatICSDate(now)}`,
    `DTSTART:${formatICSDate(start)}`,
    `DTEND:${formatICSDate(end)}`,
    `SUMMARY:${escapeICSText(summary)}`,
    `DESCRIPTION:${escapeICSText(description)}`,
    `LOCATION:${escapeICSText(location)}`,
    "END:VEVENT",
    "END:VCALENDAR",
  ];

  // iCalendar requires CRLF line endings.
  return lines.join("\r\n");
}

/** data: URL version of buildEventICS(), ready to drop into an <a href>. */
export function buildEventICSDataUrl(): string {
  return `data:text/calendar;charset=utf8,${encodeURIComponent(buildEventICS())}`;
}
