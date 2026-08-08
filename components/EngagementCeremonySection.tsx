"use client";

import TwoRings from "./TwoRings";
import Countdown from "./Countdown";
import { eventData, googleMapsUrl } from "@/lib/event-data";
import { buildEventICSDataUrl } from "@/lib/calendar";
import { useLanguage } from "@/lib/language-context";

/**
 * 02 — Engagement Ceremony / Formal Invitation.
 *
 * Same dark amber/maroon card that has been here since the original
 * scaffold — reorganized into Invitation Message / Auspicious Date & Time
 * (with the existing Countdown component embedded, reskinned for this
 * background via .ceremony-countdown in globals.css, not a new countdown)
 * / Venue, rather than redesigned.
 *
 * The small-caps labels ("Auspicious Date & Time" / "Venue" / "Warm
 * Regards") use `uppercase tracking-[...]` Tailwind utilities in English —
 * heavy letter-spacing breaks Telugu glyph shaping the same way it did for
 * the Devanagari blessing line, so those two utilities are dropped when the
 * label is rendered in Telugu (see `labelClass` below).
 */
export default function EngagementCeremonySection() {
  const { language, t } = useLanguage();
  const labelClass =
    language === "te"
      ? "text-xs text-amber-400 font-semibold"
      : "text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold";

  return (
    <main
      id="invitation"
      className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-rose-950 text-amber-50 flex flex-col items-center justify-between p-4 sm:p-8 font-sans relative overflow-hidden py-16 rounded-t-[40px] md:rounded-t-[56px] scroll-mt-[100px]"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      <section className="relative z-10 w-full max-w-xl bg-stone-900/90 backdrop-blur-xl border-2 border-amber-500/40 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_0_50px_rgba(217,119,6,0.15)] text-center space-y-8 my-auto">
        {/* Header: rings ornament + heading */}
        <div className="flex flex-col items-center space-y-2">
          <TwoRings className="w-14 h-auto md:w-16 text-amber-400" />
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-amber-100 tracking-wide">
            {t.ceremony.heading}
          </h2>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-1" />
        </div>

        {/* Invitation message */}
        <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed max-w-md mx-auto font-serif italic">
          {t.ceremony.invitationMessage}
        </p>

        {/* Auspicious Date & Time, with the live countdown inside it */}
        <div className="py-6 border-y border-amber-500/30 bg-amber-950/40 rounded-2xl space-y-2">
          <p className={labelClass}>{t.ceremony.dateTimeLabel}</p>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            {eventData.dateDisplay}
          </div>
          <p className="text-xl font-serif text-rose-300">{eventData.time}</p>

          <div className="ceremony-countdown">
            <p className="ceremony-countdown-label">{t.countdown.label}</p>
            <Countdown target={eventData.isoDateTime} />
          </div>
        </div>

        {/* Venue — visually subordinate to date/time above */}
        <div id="venue" className="space-y-3 pt-2 scroll-mt-[100px]">
          <p className={labelClass}>{t.ceremony.venueLabel}</p>
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-amber-100">
              {eventData.venueName}
            </h3>
            <p className="text-amber-200/80 text-sm">
              ({eventData.venueFloors})
            </p>
            <p className="text-amber-200/80 text-sm">{eventData.venueAddress}</p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium px-6 py-3 rounded-full shadow-lg border border-amber-400/30 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <span aria-hidden="true">📍</span> {t.ceremony.viewLocation}
            </a>

            <a
              href={buildEventICSDataUrl()}
              download="Srivatsav-Harshitha-Engagement.ics"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-amber-500/10 text-amber-100 font-medium px-6 py-3 rounded-full border border-amber-400/40 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <span aria-hidden="true">🗓️</span> {t.ceremony.addToCalendar}
            </a>
          </div>
        </div>

        {/* Warm regards */}
        <div className="pt-6 border-t border-amber-500/30 space-y-1">
          <p
            className={
              language === "te"
                ? "text-xs text-amber-400/80 font-semibold"
                : "text-xs uppercase tracking-[0.2em] text-amber-400/80 font-semibold"
            }
          >
            {t.ceremony.warmRegardsLabel}
          </p>
          <p className="text-lg font-serif font-bold text-amber-200">
            {eventData.parents}
          </p>
        </div>
      </section>

      <footer className="relative z-10 w-full max-w-xl text-center py-4 text-xs text-amber-200/50">
        {t.ceremony.footerNote}
      </footer>
    </main>
  );
}
