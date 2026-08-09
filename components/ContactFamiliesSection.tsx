"use client";

import ScrollReveal from "./ScrollReveal";
import { familyContacts } from "@/lib/event-data";
import { useLanguage } from "@/lib/language-context";

/**
 * One person's row inside a family block: name, plus either a real
 * clickable `tel:` link (only when a number has actually been supplied in
 * lib/event-data.ts) or a quiet "Number coming soon" note — never an
 * invented placeholder number. The `tel:` href is derived from the same
 * display string shown on screen (spaces stripped), so the visible number
 * and the dialed number can never drift apart.
 */
function ContactPerson({
  name,
  phone,
  pendingLabel,
}: {
  name: string;
  phone: string;
  pendingLabel: string;
}) {
  const hasPhone = phone.trim().length > 0;

  return (
    <div className="contact-person">
      <p className="contact-person-name">{name}</p>
      {hasPhone ? (
        <a
          href={`tel:${phone.replace(/\s+/g, "")}`}
          className="contact-person-phone"
          aria-label={`Call ${name}`}
        >
          {phone}
        </a>
      ) : (
        <p className="contact-person-phone contact-person-phone--pending">
          {pendingLabel}
        </p>
      )}
    </div>
  );
}

/**
 * Contact the Families — sits between Blessings and Closing. Replaces the
 * old single WhatsApp Contact button with real per-person phone numbers
 * for both families, reusing the same bilingual name data already used in
 * the Warm Regards block (t.event.groomParents / brideParents) rather than
 * duplicating it. Two balanced blocks: two columns from 900px up, stacked
 * (groom's family first) below that.
 */
export default function ContactFamiliesSection() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="contact-section"
      aria-label="Contact the Families"
    >
      <ScrollReveal className="contact-intro">
        <p className="contact-label">{t.contact.label}</p>
        <h2 className="contact-heading">{t.contact.heading}</h2>
      </ScrollReveal>

      <div className="contact-grid">
        <ScrollReveal className="contact-family">
          <p className="contact-family-label">{t.ceremony.groomFamilyLabel}</p>
          <ContactPerson
            name={t.event.groomParents.father}
            phone={familyContacts.groomFather}
            pendingLabel={t.closing.whatsappNote}
          />
          <ContactPerson
            name={t.event.groomParents.mother}
            phone={familyContacts.groomMother}
            pendingLabel={t.closing.whatsappNote}
          />
        </ScrollReveal>

        <ScrollReveal className="contact-family">
          <p className="contact-family-label">{t.ceremony.brideFamilyLabel}</p>
          <ContactPerson
            name={t.event.brideParents.father}
            phone={familyContacts.brideFather}
            pendingLabel={t.closing.whatsappNote}
          />
          <ContactPerson
            name={t.event.brideParents.mother}
            phone={familyContacts.brideMother}
            pendingLabel={t.closing.whatsappNote}
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
