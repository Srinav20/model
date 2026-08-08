import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { journeyChapters } from "@/lib/journey-data";

/**
 * 03 — Our Journey. Three confirmed chapters only (Pelli Choopulu → growing
 * bond → engagement) — see lib/journey-data.ts. Desktop alternates
 * image/story sides via CSS nth-child on .journey-chapter (odd = image
 * left, even = image right); mobile stacks everything in one column via
 * the same markup, no separate mobile layout needed.
 */
export default function OurJourneySection() {
  return (
    <section id="our-journey" className="journey-section" aria-label="Our Journey">
      <ScrollReveal className="journey-intro">
        <p className="journey-label">Our Journey</p>
        <p className="journey-label-telugu" lang="te">
          మా ప్రయాణం
        </p>
        <h2 className="journey-heading">A Beautiful Beginning</h2>
        <p className="journey-intro-text">
          What began with a traditional meeting is becoming a journey we
          choose together.
        </p>
      </ScrollReveal>

      <ol className="journey-timeline">
        {journeyChapters.map((chapter) => (
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
                <h3 className="journey-title">{chapter.title}</h3>
                <p className="journey-subtitle">{chapter.subtitle}</p>
                {chapter.date && <p className="journey-date">{chapter.date}</p>}
                <p className="journey-text">{chapter.text}</p>
              </div>
            </ScrollReveal>
          </li>
        ))}
      </ol>

      <ScrollReveal className="journey-outro">
        <p className="journey-glyph" aria-hidden="true">
          ❦
        </p>
        <p className="journey-outro-heading">And the Journey Continues&hellip;</p>
        <p className="journey-outro-text">
          More beautiful chapters are yet to be written.
        </p>
      </ScrollReveal>
    </section>
  );
}
