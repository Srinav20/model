"use client";

import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  reached: boolean;
};

function getTimeLeft(targetMs: number): TimeLeft {
  const diff = targetMs - Date.now();

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, reached: true };
  }

  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
    reached: false,
  };
}

const UNITS: { key: "days" | "hours" | "minutes" | "seconds"; label: string }[] = [
  { key: "days", label: "Days" },
  { key: "hours", label: "Hours" },
  { key: "minutes", label: "Minutes" },
  { key: "seconds", label: "Seconds" },
];

/**
 * Live countdown to `target` (ISO datetime string).
 *
 * Hydration-safe by construction: initial state is `null`, so the very
 * first client render matches the server-rendered markup exactly (both
 * show the same zeroed fallback). The real, clock-dependent value is only
 * computed inside useEffect, which never runs during SSR — it fires once
 * after mount, then every second after that. React only patches the
 * changed text nodes, so there's no full-section reflow per tick.
 */
export default function Countdown({ target }: { target: string }) {
  const targetMs = new Date(target).getTime();
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetMs));
    const id = setInterval(() => {
      setTimeLeft(getTimeLeft(targetMs));
    }, 1000);
    return () => clearInterval(id);
  }, [targetMs]);

  if (timeLeft?.reached) {
    return <p className="countdown-reached">Today is the day</p>;
  }

  // Stable fallback (server render + first client paint before useEffect
  // runs): zeroed units, not the real countdown — avoids ever rendering a
  // clock-dependent value outside the client-only effect.
  const display = timeLeft ?? { days: 0, hours: 0, minutes: 0, seconds: 0 };

  return (
    <div className="countdown-grid" role="group" aria-label="Countdown to the engagement ceremony">
      {UNITS.map((unit) => (
        <div className="countdown-unit" key={unit.key}>
          <span className="countdown-value">
            {String(display[unit.key]).padStart(2, "0")}
          </span>
          <span className="countdown-label">{unit.label}</span>
        </div>
      ))}
    </div>
  );
}
