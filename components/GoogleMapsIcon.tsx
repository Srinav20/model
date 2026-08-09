type GoogleMapsIconProps = {
  className?: string;
};

/**
 * Small map-pin glyph used on both "View on Google Maps" links (Ceremony +
 * Closing) so the action reads as "opens a map" at a glance — replaces the
 * previous 📍 emoji (Ceremony) / no icon at all (Closing).
 *
 * Deliberately a generic pin-drop silhouette, not Google's actual
 * multicolor "G" pin mark — recognizable as "a location pin" without
 * reproducing Google's trademarked logo. Renders in currentColor so it
 * always matches the surrounding button's text color.
 */
export default function GoogleMapsIcon({ className }: GoogleMapsIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="15"
      height="15"
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="currentColor"
        d="M12 2C7.86 2 4.5 5.36 4.5 9.5c0 5.25 6.34 11.23 6.61 11.48a1.25 1.25 0 0 0 1.78 0c.27-.25 6.61-6.23 6.61-11.48C19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"
      />
    </svg>
  );
}
