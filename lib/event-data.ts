// Single source of truth for the invitation's event details.
// Update names, date, venue, etc. here — every section (hero, venue card,
// countdown, etc.) should import from this file instead of hardcoding copy.

export const eventData = {
  groom: "Srivatsav",
  bride: "Harshitha",

  // Full display date, used in the venue/details card.
  dateDisplay: "Sunday, August 23, 2026",
  // Compact date, used in the hero (dot-separated, uppercase by CSS).
  dateShort: "23 · August · 2026",
  // Machine-readable date for <time dateTime> / future countdown logic.
  isoDateTime: "2026-08-23T11:15:00+05:30",

  time: "11:15 AM",

  venueName: "Lakshmi Vedika, Indrani Function Halls",
  venueFloors: "3rd & 4th floors",
  venueAddress: "Sujatha Nagar, Visakhapatnam - 530051",

  parents: "P.V. Appa Rao (Sai) & Lakshmi Bhavani",

  blessing: "॥ श्री गणेशाय नमः ॥",
} as const;

// Google Maps deep link — identical query string to the one already live in
// app/page.tsx, just centralised so it isn't duplicated across sections.
export const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  "Lakshmi Vedika Indrani Function Halls Sujatha Nagar Visakhapatnam 530051"
)}`;
