"use client";

import { useAudio } from "@/lib/audio-context";
import { useLanguage } from "@/lib/language-context";

/**
 * Small nav/header control — musical note that fills solid + shows a
 * subtle pulse when playing, outlined and static when paused. Always
 * present and always clickable regardless of the gate/autoplay state, so a
 * visitor can start or stop music at any time.
 */
export default function MusicControl() {
  const { isPlaying, togglePlayback } = useAudio();
  const { t } = useLanguage();

  return (
    <button
      type="button"
      className={`music-control${isPlaying ? " music-control--playing" : ""}`}
      onClick={togglePlayback}
      aria-label={isPlaying ? t.music.pause : t.music.play}
      aria-pressed={isPlaying}
    >
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path
          d="M9 17.5c0 1.1-1.12 2-2.5 2S4 18.6 4 17.5s1.12-2 2.5-2 2.5.9 2.5 2Z"
          fill="currentColor"
        />
        <path d="M9 17.5V5.8a1 1 0 0 1 .77-.97l9-2.2A1 1 0 0 1 20 3.58v10.42" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path
          d="M20 15.5c0 1.1-1.12 2-2.5 2s-2.5-.9-2.5-2 1.12-2 2.5-2 2.5.9 2.5 2Z"
          fill="currentColor"
        />
        {!isPlaying && (
          <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        )}
      </svg>
    </button>
  );
}
