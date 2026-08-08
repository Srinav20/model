import type { SVGProps } from "react";

type TwoRingsProps = SVGProps<SVGSVGElement> & {
  title?: string;
  idPrefix?: string;
};

export default function TwoRings({
  title = "Two interlocking gold rings",
  idPrefix = "two-rings",
  className = "",
  ...props
}: TwoRingsProps) {
  const gold1 = `${idPrefix}-gold-1`;
  const gold2 = `${idPrefix}-gold-2`;
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
        <linearGradient id={gold1} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#6E4300" />
          <stop offset="18%" stopColor="#B9780D" />
          <stop offset="38%" stopColor="#F2C24E" />
          <stop offset="55%" stopColor="#FFF0A6" />
          <stop offset="72%" stopColor="#D8951C" />
          <stop offset="100%" stopColor="#7C4B00" />
        </linearGradient>

        <linearGradient id={gold2} x1="1" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#6E4300" />
          <stop offset="18%" stopColor="#B9780D" />
          <stop offset="38%" stopColor="#F2C24E" />
          <stop offset="55%" stopColor="#FFF0A6" />
          <stop offset="72%" stopColor="#D8951C" />
          <stop offset="100%" stopColor="#7C4B00" />
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
          stroke={`url(#${gold1})`}
          strokeWidth="22"
        />
        <ellipse
          cx="-5"
          cy="-8"
          rx="47"
          ry="31"
          stroke="#FFF5C9"
          strokeOpacity="0.35"
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
          stroke={`url(#${gold2})`}
          strokeWidth="22"
        />
        <ellipse
          cx="-5"
          cy="-8"
          rx="47"
          ry="31"
          stroke="#FFF5C9"
          strokeOpacity="0.35"
          strokeWidth="2.5"
        />
      </g>
    </svg>
  );
}
