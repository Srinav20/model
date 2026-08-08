import type { SVGProps } from "react";

/**
 * Small reusable line+ring divider — thin flanking lines with a circular
 * ring/dot at centre (same visual language as the hero's seam ornament:
 * rings for the engagement, echoing the temple's kalasha finials).
 *
 * Unlike SeamOrnament.tsx (which bakes in absolute positioning for
 * straddling the hero → details seam), this one is unpositioned and
 * colour-agnostic (currentColor) so it can be dropped inline into normal
 * content flow anywhere — e.g. under a section heading.
 */
export default function OrnamentDivider(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 160 48"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <line x1="0" y1="24" x2="58" y2="24" stroke="currentColor" strokeWidth="1" />
      <line x1="102" y1="24" x2="160" y2="24" stroke="currentColor" strokeWidth="1" />
      <circle cx="80" cy="24" r="11" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="80" cy="24" r="3.5" fill="currentColor" />
    </svg>
  );
}
