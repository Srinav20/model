"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Reveals its children with a subtle fade/rise once the wrapper scrolls
 * into view. Hydration-safe: `visible` starts false on both server and
 * client, so first paint matches on both — the IntersectionObserver only
 * runs client-side, inside useEffect, well after hydration.
 *
 * The actual "should this animate at all" decision lives in CSS
 * (`.scroll-reveal` + the site's existing prefers-reduced-motion block in
 * globals.css) — this component only ever toggles a class; it doesn't
 * decide presentation.
 */
export default function ScrollReveal({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
    >
      {children}
    </div>
  );
}
