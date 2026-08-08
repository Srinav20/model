"use client";

import Image from "next/image";
import TwoRings from "./TwoRings";
import ScrollReveal from "./ScrollReveal";
import { eventData } from "@/lib/event-data";
import { useLanguage } from "@/lib/language-context";

export default function BlessingsSection() {
  const { t } = useLanguage();

  return (
    <section
      id="blessings"
      className="blessings-section"
      aria-label="Blessings"
    >
      <ScrollReveal className="blessings-reveal">
        <h2 className="blessings-heading">{t.blessings.heading}</h2>

        <TwoRings className="blessings-ornament" />

        <Image
          src="/images/templeblessings_image.png"
          alt={`${eventData.groom} and ${eventData.bride} arriving at the temple for blessings, flanked by lit brass lamps and floral garlands`}
          width={941}
          height={1672}
          sizes="(min-width: 768px) 480px, 90vw"
          className="blessings-image"
        />

        <p className="blessings-text">
          {t.blessings.lines.map((line, index) => (
            <span key={line}>
              {line}
              {index < t.blessings.lines.length - 1 && <br />}
            </span>
          ))}
        </p>
      </ScrollReveal>
    </section>
  );
}
