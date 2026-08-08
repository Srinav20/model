import TempleHeroBackground from "./TempleHeroBackground";
import TempleHeroPhoto from "./TempleHeroPhoto";
import { eventData } from "@/lib/event-data";

export default function Hero() {
  return (
    <section className="hero" aria-label="Engagement invitation">
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
        <p className="hero-blessing">{eventData.blessing}</p>

        <p className="hero-intro">With the blessings of our families</p>

        <p className="hero-small">
          We joyfully invite you to celebrate the engagement of
        </p>

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
          <span>Scroll to enter</span>
          <span className="arrow" aria-hidden="true">
            ↓
          </span>
        </a>
      </div>
    </section>
  );
}
