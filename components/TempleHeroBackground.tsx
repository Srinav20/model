/**
 * TempleHeroBackground
 * ---------------------------------------------------------------------------
 * Base layer behind the real photo (components/Hero.tsx renders this first,
 * then layers /public/images/temple-hero.jpg on top via next/image).
 *
 * It exists so the hero never shows a blank/white flash: it paints instantly
 * (no network request, no decode time) the moment the section mounts, and it
 * doubles as the fallback look if the photo file is ever missing or removed
 * — it sits directly underneath, so nothing breaks visually either way.
 * ---------------------------------------------------------------------------
 */
export default function TempleHeroBackground() {
  const cx = 195;
  const tierCount = 8;
  const topY = 205;
  const baseY = 560;
  const topWidth = 44;
  const baseWidth = 232;

  const tiers = Array.from({ length: tierCount }, (_, i) => {
    const t0 = i / tierCount;
    const t1 = (i + 1) / tierCount;
    return {
      y0: topY + t0 * (baseY - topY),
      y1: topY + t1 * (baseY - topY),
      w0: topWidth + t0 * (baseWidth - topWidth),
      w1: topWidth + t1 * (baseWidth - topWidth),
      accent: i % 2 === 1,
    };
  });

  const palm = (x: number, scale: number, flip: boolean, opacity: number) => {
    const dir = flip ? -1 : 1;
    const topPointX = x + dir * 10 * scale;
    const topPointY = baseY - 150 * scale;
    return (
      <g opacity={opacity}>
        <path
          d={`M ${x} ${baseY} Q ${x + dir * 14 * scale} ${baseY - 90 * scale} ${topPointX} ${topPointY}`}
          stroke="#170a04"
          strokeWidth={5 * scale}
          strokeLinecap="round"
          fill="none"
        />
        {[-2, -1, 0, 1, 2].map((i) => (
          <path
            key={i}
            d={`M ${topPointX} ${topPointY} Q ${topPointX + dir * (18 + i * 10) * scale} ${topPointY - 18 * scale} ${topPointX + dir * (34 + i * 14) * scale} ${topPointY + (6 + Math.abs(i) * 10) * scale}`}
            stroke="#170a04"
            strokeWidth={3.5 * scale}
            strokeLinecap="round"
            fill="none"
          />
        ))}
      </g>
    );
  };

  const lamp = (x: number, y: number, scale: number) => (
    <g opacity={0.85}>
      <ellipse cx={x} cy={y} rx={16 * scale} ry={4 * scale} fill="#170a04" />
      <rect x={x - 2 * scale} y={y - 40 * scale} width={4 * scale} height={40 * scale} fill="#170a04" />
      <ellipse cx={x} cy={y - 34 * scale} rx={9 * scale} ry={2.5 * scale} fill="#170a04" />
      <ellipse cx={x} cy={y - 40 * scale} rx={7 * scale} ry={4 * scale} fill="#170a04" />
      <circle cx={x} cy={y - 47 * scale} r={7 * scale} fill="url(#flameGlow)" />
    </g>
  );

  return (
    <svg
      viewBox="0 0 390 844"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <linearGradient id="skyGradient" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a1108" />
          <stop offset="48%" stopColor="#7a3714" />
          <stop offset="66%" stopColor="#c9822f" />
          <stop offset="82%" stopColor="#3a1a0c" />
          <stop offset="100%" stopColor="#150a05" />
        </linearGradient>
        <radialGradient id="horizonGlow" cx="50%" cy="63%" r="45%">
          <stop offset="0%" stopColor="#ffcf7a" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#ffcf7a" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffd88a" stopOpacity="0.9" />
          <stop offset="100%" stopColor="#ffd88a" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Sky */}
      <rect x="0" y="0" width="390" height="844" fill="url(#skyGradient)" />
      <ellipse cx="195" cy="540" rx="230" ry="180" fill="url(#horizonGlow)" />

      {/* Distant tree line for depth */}
      <g opacity="0.35">
        {palm(20, 0.7, false, 1)}
        {palm(370, 0.7, true, 1)}
      </g>

      {/* Gopuram */}
      <g>
        {/* base plinth */}
        <rect x={cx - baseWidth / 2 - 10} y={baseY} width={baseWidth + 20} height="26" fill="#170a04" />
        {/* doorway glow */}
        <ellipse cx={cx} cy={baseY + 6} rx="20" ry="16" fill="url(#flameGlow)" opacity="0.5" />

        {tiers
          .slice()
          .reverse()
          .map((tier, idx) => (
            <g key={idx}>
              <polygon
                points={`${cx - tier.w0 / 2},${tier.y0} ${cx + tier.w0 / 2},${tier.y0} ${cx + tier.w1 / 2},${tier.y1} ${cx - tier.w1 / 2},${tier.y1}`}
                fill="#170a04"
              />
              <rect
                x={cx - tier.w1 / 2 - 4}
                y={tier.y1 - 2}
                width={tier.w1 + 8}
                height="3"
                fill="#170a04"
              />
              {tier.accent && (
                <>
                  <circle cx={cx - tier.w1 / 2} cy={tier.y1} r="2.4" fill="#caa057" opacity="0.55" />
                  <circle cx={cx + tier.w1 / 2} cy={tier.y1} r="2.4" fill="#caa057" opacity="0.55" />
                </>
              )}
            </g>
          ))}

        {/* pediment + kalasha finials */}
        <polygon points={`${cx - 26},${topY} ${cx + 26},${topY} ${cx},${topY - 24}`} fill="#170a04" />
        {[-10, 0, 10].map((dx) => (
          <g key={dx}>
            <rect x={cx + dx - 1.2} y={topY - 40} width="2.4" height="18" fill="#170a04" />
            <circle cx={cx + dx} cy={topY - 42} r={dx === 0 ? 4 : 2.6} fill="#caa057" opacity="0.65" />
          </g>
        ))}
      </g>

      {/* Near tree line, foreground */}
      {palm(48, 1.05, false, 0.95)}
      {palm(345, 1.05, true, 0.95)}

      {/* Brass lamps (kuthuvilakku), foreground corners */}
      {lamp(34, 812, 1)}
      {lamp(358, 812, 1)}
    </svg>
  );
}
