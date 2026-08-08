"use client";

import GaneshaMotif from "./GaneshaMotif";
import { useAudio } from "@/lib/audio-context";
import { useLanguage } from "@/lib/language-context";
import { eventData } from "@/lib/event-data";

/**
 * First-visit interaction gate. Sits above the whole page (fixed, full
 * screen) until the visitor clicks — the click is the "real user gesture"
 * required to start audio playback without tripping browser autoplay
 * blocking. Once opened() fires it fades out via CSS and stops intercepting
 * clicks, revealing the Temple Hero underneath unchanged.
 *
 * Not remounted/re-shown on later visits within the same browser session
 * (see AudioProvider — sessionStorage-backed), and never blocks rendering
 * of the rest of the tree: children behind it are always mounted, so nothing
 * about Hero's own entrance animation is disturbed by this gate.
 */
export default function OpenInvitationGate() {
  const { opened, openInvitation } = useAudio();
  const { t } = useLanguage();

  return (
    <div
      className={`invitation-gate${opened ? " invitation-gate--dismissed" : ""}`}
      aria-hidden={opened}
    >
      <div className="invitation-gate-inner">
        <GaneshaMotif className="invitation-gate-ganesha" />
        <p className="invitation-gate-names">
          {eventData.groom} &amp; {eventData.bride}
        </p>
        <p className="invitation-gate-date">{eventData.dateShort}</p>
        <button
          type="button"
          className="invitation-gate-button"
          onClick={openInvitation}
          tabIndex={opened ? -1 : 0}
        >
          [ {t.gate.open} ]
        </button>
      </div>
    </div>
  );
}
