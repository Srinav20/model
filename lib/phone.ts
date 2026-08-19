/**
 * Formats a stored phone number (however it was typed — with spaces,
 * dashes, or none at all) into a consistent display string and a matching
 * `tel:` href, so every phone number in ContactFamiliesSection.tsx looks
 * identical regardless of how it was entered in lib/event-data.ts
 * (familyContacts currently has a mix: some with spaces, some without).
 * This never changes which number it is — only how it's shown. The
 * underlying digits in lib/event-data.ts are untouched by this file.
 *
 * Assumes Indian mobile numbers (a 10-digit local number, optionally
 * preceded by a country code): the last 10 digits become the local
 * number, displayed split 5+5 ("98765 43210"), and anything before that
 * becomes the country code ("+91 "). A bare 10-digit number with no
 * country code gets "91" assumed, matching the rest of this invitation
 * (Indian venue, IST date/time). Numbers that don't fit this shape still
 * get a plain "+<digits>" fallback rather than breaking.
 */
export function formatPhone(
  raw: string,
): { display: string; href: string } | null {
  const digits = raw.replace(/\D/g, "");
  if (!digits) return null;

  let countryCode = "";
  let local = digits;

  if (digits.length === 10) {
    countryCode = "91";
  } else if (digits.length > 10) {
    countryCode = digits.slice(0, digits.length - 10);
    local = digits.slice(-10);
  }

  const display =
    countryCode && local.length === 10
      ? `+${countryCode} ${local.slice(0, 5)} ${local.slice(5)}`
      : `+${digits}`;

  const href = `tel:+${countryCode}${local}`;

  return { display, href };
}
