import OrnamentDivider from "./OrnamentDivider";
import ScrollReveal from "./ScrollReveal";
import { eventData, googleMapsUrl } from "@/lib/event-data";
import { buildEventICSDataUrl } from "@/lib/calendar";

export default function ClosingSection() {
  const hasWhatsapp = eventData.whatsappNumber.length > 0;

  return (
    <section id="closing" className="closing-section" aria-label="Closing">
      <ScrollReveal className="closing-reveal">
        <p className="closing-glyph" aria-hidden="true">
          ❦
        </p>

        <h2 className="closing-heading">
          We Would Be Delighted
          <br />
          To Have You With Us
        </h2>

        <p className="closing-text">We look forward to celebrating with you.</p>

        <p className="closing-signoff">With Love,</p>
        <p className="closing-names">
          {eventData.groom} &amp; {eventData.bride}
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
            View Location
          </a>

          <a
            href={buildEventICSDataUrl()}
            download="Srivatsav-Harshitha-Engagement.ics"
            className="closing-button"
            aria-label="Download a calendar invite for the engagement ceremony"
          >
            Add to Calendar
          </a>

          {hasWhatsapp ? (
            <a
              href={`https://wa.me/${eventData.whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="closing-button"
              aria-label="Contact via WhatsApp"
            >
              WhatsApp Contact
            </a>
          ) : (
            <button
              type="button"
              disabled
              className="closing-button closing-button--disabled"
              aria-label="WhatsApp contact number not yet available"
            >
              WhatsApp Contact
              <span className="closing-button-note">Number coming soon</span>
            </button>
          )}
        </div>
      </ScrollReveal>

      <OrnamentDivider className="closing-ornament" />
    </section>
  );
}
