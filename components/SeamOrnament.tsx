/**
 * Small decorative divider that straddles the hero → details seam: a thin
 * gold line broken by a ring motif (nods to both the engagement rings and
 * the kalasha finials in the temple silhouette). Deliberately minimal —
 * this is a transition marker, not a focal illustration.
 */
export default function SeamOrnament() {
  return (
    <svg
      className="seam-ornament"
      viewBox="0 0 160 48"
      aria-hidden="true"
      focusable="false"
    >
      <line x1="0" y1="24" x2="58" y2="24" stroke="#caa057" strokeWidth="1" />
      <line x1="102" y1="24" x2="160" y2="24" stroke="#caa057" strokeWidth="1" />
      <circle cx="80" cy="24" r="11" fill="none" stroke="#caa057" strokeWidth="1.4" />
      <circle cx="80" cy="24" r="3.5" fill="#caa057" />
    </svg>
  );
}
