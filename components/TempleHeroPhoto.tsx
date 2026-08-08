import { getImageProps } from "next/image";

/**
 * Hero background photo.
 *
 * STATUS: temple-hero-mobile.webp / temple-hero-desktop.webp do not exist
 * yet. Requesting nonexistent paths through next/image throws (404 +
 * "invalid image" in the optimizer) — a decorative layer underneath does
 * NOT prevent that, since next/image actively fetches/optimizes whatever
 * src it's given regardless of what's behind it. So this component falls
 * back to a single existing asset until both files are real:
 *
 *   1. NOW            → /public/images/temple-hero.png (current fallback —
 *                         update this filename/extension if you swap it
 *                         for a different file later; a mismatched
 *                         extension is exactly what caused a silent
 *                         fallback-to-SVG before this was fixed)
 *   2. new art ready   → /public/images/temple-hero-mobile.webp  (9:16,  ~1440x2560)
 *                         /public/images/temple-hero-desktop.webp (~16:9, >=1920x1080)
 *   3. flip the flag   → RESPONSIVE_SOURCES_READY = true below
 *
 * The responsive <picture> implementation is kept intact further down —
 * don't rebuild it later, just add the two files and flip the flag.
 */
const RESPONSIVE_SOURCES_READY = false;

export default function TempleHeroPhoto() {
  const shared = {
    alt: "",
    quality: 75,
    sizes: "100vw",
    priority: true,
  } as const;

  if (!RESPONSIVE_SOURCES_READY) {
    const { props } = getImageProps({
      ...shared,
      src: "/images/temple-hero.png",
      // Approximate dimensions — exact px doesn't matter visually since the
      // CSS layer forces width/height:100% + object-fit:cover regardless;
      // this is only used for Next's internal aspect-ratio bookkeeping.
      width: 1600,
      height: 900,
    });

    return <img {...props} alt="" />;
  }

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...shared,
    src: "/images/temple-hero-desktop.webp",
    width: 1920,
    height: 1080,
  });

  const { props: mobileImgProps } = getImageProps({
    ...shared,
    src: "/images/temple-hero-mobile.webp",
    width: 1440,
    height: 2560,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...mobileImgProps} alt="" />
    </picture>
  );
}
