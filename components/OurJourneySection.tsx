"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { journeyChapters } from "@/lib/journey-data";
import { useLanguage } from "@/lib/language-context";

/**
 * 03 — Our Journey. Three confirmed chapters only (Pelli Choopulu → growing
 * bond → engagement) — see lib/journey-data.ts. Desktop alternates
 * image/story sides via CSS nth-child on .journey-chapter (odd = image
 * left, even = image right); mobile stacks everything in one column via
 * the same markup, no separate mobile layout needed.
 *
 * Chapter title/subtitle/text come from t.journey.chapters[index] — matched
 * to journeyChapters by array position, since the two arrays are always the
 * same length and order (see lib/journey-data.ts).
 */
export default function OurJourneySection() {
  const { t } = useLanguage();

  return (
    <section id="our-journey" className="journey-section" aria-label="Our Journey">
      <ScrollReveal className="journey-intro">
        <p className="journey-label">{t.journey.label}</p>
        <h2 className="journey-heading">{t.journey.heading}</h2>
        <p className="journey-intro-text">{t.journey.intro}</p>
      </ScrollReveal>

      <ol className="journey-timeline">
        {journeyChapters.map((chapter, index) => {
          const copy = t.journey.chapters[index];
          return (
            <li className="journey-chapter" key={chapter.number}>
              <ScrollReveal className="journey-chapter-inner">
                <span className="journey-marker" aria-hidden="true" />

                <div className="journey-image-wrap">
                  <Image
                    src={chapter.image}
                    alt={chapter.imageAlt}
                    width={1448}
                    height={1086}
                    sizes="(min-width: 768px) 480px, 90vw"
                    className="journey-image"
                  />
                </div>

                <div className="journey-copy">
                  <span className="journey-number" aria-hidden="true">
                    {chapter.number}
                  </span>
                  <h3 className="journey-title">{copy.title}</h3>
                  <p className="journey-subtitle">{copy.subtitle}</p>
                  {chapter.date && <p className="journey-date">{chapter.date}</p>}
                  <p className="journey-text">{copy.text}</p>
                </div>
              </ScrollReveal>
            </li>
          );
        })}
      </ol>

      <ScrollReveal className="journey-outro">
        <p className="journey-glyph" aria-hidden="true">
          ❦
        </p>
        <p className="journey-outro-heading">{t.journey.outroHeading}</p>
        <p className="journey-outro-text">{t.journey.outroText}</p>
      </ScrollReveal>
    </section>
  );
}
