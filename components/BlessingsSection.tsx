import Image from "next/image";
import TwoRings from "./TwoRings";
import ScrollReveal from "./ScrollReveal";
import { eventData } from "@/lib/event-data";

export default function BlessingsSection() {
  return (
    <section
      id="blessings"
      className="blessings-section"
      aria-label="Blessings"
    >
      <ScrollReveal className="blessings-reveal">
        <h2 className="blessings-heading">With Love &amp; Blessings</h2>

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
          As we begin this new chapter,
          <br />
          we seek your blessings and
          <br />
          look forward to celebrating
          <br />
          this special day with you.
        </p>
      </ScrollReveal>
    </section>
  );
}
