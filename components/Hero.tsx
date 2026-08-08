"use client";

import TempleHeroBackground from "./TempleHeroBackground";
import TempleHeroPhoto from "./TempleHeroPhoto";
import GaneshaMotif from "./GaneshaMotif";
import { eventData } from "@/lib/event-data";
import { useLanguage } from "@/lib/language-context";

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" className="hero" aria-label="Engagement invitation">
      {/* SVG silhouette as an instant, zero-request base layer — also the
          fallback look if the photo below is ever removed. */}
      <div className="hero-bg" aria-hidden="true">
        <TempleHeroBackground />
      </div>

      {/* Real gopuram photo — responsive: mobile below 768px, existing
          desktop image at 768px+. See TempleHeroPhoto.tsx. */}
      <div className="hero-bg-photo">
        <TempleHeroPhoto />
      </div>

      <div className="hero-overlay" />

      <div className="hero-content">
        <div className="hero-blessing-block">
          <GaneshaMotif className="hero-ganesha" />
          <p className="hero-blessing">{eventData.blessing}</p>
        </div>

        <p className="hero-intro">{t.hero.intro}</p>

        <p className="hero-small">{t.hero.subIntro}</p>

        <div className="hero-names">
          <h1>{eventData.groom}</h1>

          <div className="hero-and">
            <span />
            <strong>&amp;</strong>
            <span />
          </div>

          <h1>{eventData.bride}</h1>
        </div>

        <p className="hero-date">
          <time dateTime={eventData.isoDateTime}>{eventData.dateShort}</time>
        </p>

        <a href="#invitation" className="scroll-indicator">
          <span>{t.hero.scrollCta}</span>
          <span className="arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
