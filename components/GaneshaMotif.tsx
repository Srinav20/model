import type { SVGProps } from "react";

type GaneshaMotifProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

export default function GaneshaMotif({
  title = "Ganesha",
  className = "",
  ...props
}: GaneshaMotifProps) {
  return (
    <svg
      viewBox="0 0 240 240"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="4.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>{title}</title>

      {/* Crown / tilak */}
      <path d="M120 24c-6 8-6 14 0 20 6-6 6-12 0-20Z" />
      <path d="M120 51v10" />
      <path d="M113 58h14" />

      {/* Head */}
      <path d="M92 72c8-8 18-12 28-12s20 4 28 12" />
      <path d="M96 78c-7 14-6 28 2 40" />
      <path d="M144 78c7 14 6 28-2 40" />

      {/* Ears */}
      <path d="M94 79C79 65 61 66 51 73c16 6 22 17 21 32-1 11-5 20-13 28 17-2 31-12 40-27" />
      <path d="M146 79c15-14 33-13 43-6-16 6-22 17-21 32 1 11 5 20 13 28-17-2-31-12-40-27" />

      {/* Eyes */}
      <path d="M103 91c4 3 8 3 12 0" />
      <path d="M125 91c4 3 8 3 12 0" />

      {/* Trunk */}
      <path d="M118 96c-5 15-8 29-7 42 1 16 9 27 21 27 12 0 21-9 21-20 0-10-6-17-15-19" />
      <path d="M138 126c8 4 12 10 12 18" />

      {/* Tusks */}
      <path d="M105 112c-7 7-10 13-9 20" />
      <path d="M139 112c7 7 10 13 9 20" />

      {/* Left arm / hand */}
      <path d="M81 122c-13 6-22 16-25 28" />
      <path d="M56 150c-8 1-14 5-18 11 8 2 15 1 21-3" />

      {/* Right arm / hand */}
      <path d="M159 122c13 6 22 16 25 28" />
      <path d="M184 150c8 1 14 5 18 11-8 2-15 1-21-3" />

      {/* Body */}
      <path d="M93 129c-10 12-15 26-14 40 1 13 7 24 18 32" />
      <path d="M147 129c10 12 15 26 14 40-1 13-7 24-18 32" />
      <path d="M96 160c8 9 16 13 24 13s16-4 24-13" />

      {/* Seated legs */}
      <path d="M96 196c-18-8-34-7-48 4 18 7 35 8 52 3" />
      <path d="M144 196c18-8 34-7 48 4-18 7-35 8-52 3" />
      <path d="M102 203c6 7 12 11 18 11s12-4 18-11" />

      {/* Decorative curls */}
      <path d="M64 116c-9 4-13 11-12 19 1 6 5 10 11 12-2-7 0-13 7-18" />
      <path d="M176 116c9 4 13 11 12 19-1 6-5 10-11 12 2-7 0-13-7-18" />
    </svg>
  );
}
