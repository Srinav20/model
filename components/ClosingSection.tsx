"use client";

import OrnamentDivider from "./OrnamentDivider";
import ScrollReveal from "./ScrollReveal";
import GoogleMapsIcon from "./GoogleMapsIcon";
import { eventData, googleMapsUrl } from "@/lib/event-data";
import { buildEventICSDataUrl } from "@/lib/calendar";
import { useLanguage } from "@/lib/language-context";

export default function ClosingSection() {
  const { t } = useLanguage();
  const hasWhatsapp = eventData.whatsappNumber.length > 0;

  return (
    <section id="closing" className="closing-section" aria-label="Closing">
      <ScrollReveal className="closing-reveal">
        <p className="closing-glyph" aria-hidden="true">
          ❦
        </p>

        <h2 className="closing-heading">
          {t.closing.headingLine1}
          <br />
          {t.closing.headingLine2}
        </h2>

        <p className="closing-text">{t.closing.text}</p>

        <p className="closing-signoff">{t.closing.signoff}</p>
        <p className="closing-names">
          {t.event.groom} &amp; {t.event.bride}
        </p>

        <p className="closing-glyph closing-glyph--heart" aria-hidden="true">
          ♡
        </p>

        <div className="closing-actions">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="closing-button"
            aria-label="View the venue location on Google Maps"
          >
            <GoogleMapsIcon className="closing-button-icon" />
            {t.closing.viewLocation}
          </a>

          <a
            href={buildEventICSDataUrl()}
            download="Srivatsav-Harshitha-Engagement.ics"
            className="closing-button"
            aria-label="Download a calendar invite for the engagement ceremony"
          >
            {t.closing.addToCalendar}
          </a>

          {hasWhatsapp ? (
            <a
              href={`https://wa.me/${eventData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-button"
              aria-label="Contact via WhatsApp"
            >
              {t.closing.whatsapp}
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="closing-button closing-button--disabled"
              aria-label="WhatsApp contact number not yet available"
            >
              {t.closing.whatsapp}
              <span className="closing-button-note">{t.closing.whatsappNote}</span>
            </button>
          )}
        </div>
      </ScrollReveal>

      <OrnamentDivider className="closing-ornament" />

      {/* Final sign-off — the last line of the invitation, after the
          Maps/Calendar/WhatsApp actions and the ornament divider above. */}
      <ScrollReveal className="closing-final-reveal">
        <p className="closing-glyph closing-final-glyph" aria-hidden="true">
          ❦
        </p>
        <p className="closing-final-signoff">{t.closing.seeYouSoon}</p>
      </ScrollReveal>
    </section>
  );
}
