import type { SVGProps } from "react";

type SilverRingsProps = SVGProps<SVGSVGElement> & {
  title?: string;
  idPrefix?: string;
};

/**
 * Same shape/markup as TwoRings.tsx, silver/platinum gradient instead of
 * gold. Kept as a separate component (rather than a colour prop on
 * TwoRings) so both stay simple drop-in SVGs with no runtime branching.
 */
export default function SilverRings({
  title = "Two interlocking silver rings",
  idPrefix = "silver-rings",
  className = "",
  ...props
}: SilverRingsProps) {
  const silver1 = `${idPrefix}-silver-1`;
  const silver2 = `${idPrefix}-silver-2`;
  const shadow = `${idPrefix}-shadow`;

  return (
    <svg
      viewBox="0 0 320 220"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      {...props}
    >
      <title>{title}</title>

      <defs>
        <linearGradient id={silver1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4A4C4E" />
          <stop offset="18%" stopColor="#8C9094" />
          <stop offset="38%" stopColor="#D4D7DA" />
          <stop offset="55%" stopColor="#F8F9FA" />
          <stop offset="72%" stopColor="#B7BBBF" />
          <stop offset="100%" stopColor="#5A5D60" />
        </linearGradient>

        <linearGradient id={silver2} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4A4C4E" />
          <stop offset="18%" stopColor="#8C9094" />
          <stop offset="38%" stopColor="#D4D7DA" />
          <stop offset="55%" stopColor="#F8F9FA" />
          <stop offset="72%" stopColor="#B7BBBF" />
          <stop offset="100%" stopColor="#5A5D60" />
        </linearGradient>

        <filter id={shadow} x="-25%" y="-25%" width="150%" height="150%">
          <feDropShadow
            dx="0"
            dy="5"
            stdDeviation="5"
            floodColor="#000"
            floodOpacity="0.18"
          />
        </filter>
      </defs>

      {/* Left ring */}
      <g filter={`url(#${shadow})`} transform="translate(108 114) rotate(-20)">
        <ellipse
          cx="0"
          cy="0"
          rx="61"
          ry="43"
          stroke={`url(#${silver1})`}
          strokeWidth="22"
        />
        <ellipse
          cx="-5"
          cy="-8"
          rx="47"
          ry="31"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="2.5"
        />
      </g>

      {/* Right ring */}
      <g filter={`url(#${shadow})`} transform="translate(198 101) rotate(22)">
        <ellipse
          cx="0"
          cy="0"
          rx="61"
          ry="43"
          stroke={`url(#${silver2})`}
          strokeWidth="22"
        />
        <ellipse
          cx="-5"
          cy="-8"
          rx="47"
          ry="31"
          stroke="#FFFFFF"
          strokeOpacity="0.4"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
}
