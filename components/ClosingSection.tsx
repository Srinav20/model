"use client";

import OrnamentDivider from "./OrnamentDivider";
import ScrollReveal from "./ScrollReveal";
import GoogleMapsIcon from "./GoogleMapsIcon";
import { googleMapsUrl } from "@/lib/event-data";
import { useLanguage } from "@/lib/language-context";

export default function ClosingSection() {
  const { t } = useLanguage();

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
        </div>
      </ScrollReveal>

      <OrnamentDivider className="closing-ornament" />

      {/* Final sign-off — the last line of the invitation, after the Maps
          action and the ornament divider above. Add to Calendar was
          removed from here earlier (kept only in the Engagement Ceremony
          section) to avoid a duplicate action; WhatsApp Contact was
          removed after that in favor of the new Contact the Families
          section (see ContactFamiliesSection.tsx), which now carries the
          family phone numbers instead. */}
      <ScrollReveal className="closing-final-reveal">
        <p className="closing-glyph closing-final-glyph" aria-hidden="true">
          ❦
        </p>
        <p className="closing-final-signoff">{t.closing.seeYouSoon}</p>
      </ScrollReveal>
    </section>
  );
}
