import Countdown from "./Countdown";
import OrnamentDivider from "./OrnamentDivider";
import { eventData } from "@/lib/event-data";

export default function CountdownSection() {
  return (
    <section id="countdown" className="countdown-section" aria-label="Countdown to the engagement ceremony">
      <h2 className="countdown-heading">The Wait Is Almost Over</h2>

      <OrnamentDivider className="countdown-ornament" />

      <Countdown target={eventData.isoDateTime} />

      <p className="countdown-date">{eventData.dateShort}</p>
    </section>
  );
}
