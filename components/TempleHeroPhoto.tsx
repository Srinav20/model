import { getImageProps } from "next/image";

/**
 * Hero background photo — responsive art direction, both sources real.
 *
 * Mobile (below 768px):     /public/images/temple-hero-mobile.webp
 *                            new portrait 9:16 asset
 * Desktop/tablet (768px+):  /public/images/temple-hero.png
 *                            the existing hero source — unchanged, same
 *                            file the site has been using all along, so
 *                            desktop appearance is untouched by this change
 */
export default function TempleHeroPhoto() {
  const shared = {
    alt: "",
    quality: 75,
    sizes: "100vw",
    priority: true,
  } as const;

  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({
    ...shared,
    src: "/images/temple-hero.png",
    // Same dimensions used for this file before — desktop path unchanged.
    width: 1600,
    height: 900,
  });

  const { props: mobileImgProps } = getImageProps({
    ...shared,
    src: "/images/temple-hero-mobile.webp",
    // Approximate portrait dimensions — exact px doesn't affect rendering,
    // since app/globals.css forces width/height:100% + object-fit: cover
    // on this element regardless; only used for Next's internal
    // aspect-ratio bookkeeping.
    width: 1080,
    height: 1920,
  });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={desktopSrcSet} />
      {/* Default <img> (below 768px, and non-JS/no-media-query fallback) is
          the mobile asset — the documented next/image "art direction"
          pattern: a raw <img> here still gets Next's optimized, responsive
          srcSet via getImageProps. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img {...mobileImgProps} alt="" />
    </picture>
  );
}
