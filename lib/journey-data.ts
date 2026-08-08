import { eventData } from "./event-data";

// Structured chapter data for the Our Journey section — three chapters
// only, per the confirmed story. Keeping this as data (rather than three
// near-identical JSX blocks) means OurJourneySection.tsx can render them
// with a single .map(), and adding image/copy tweaks later never means
// touching layout code.
//
// title/subtitle/text now live in lib/translations.ts
// (translations.en/te.journey.chapters[]) instead of here, so this stays
// language-independent — chapters are matched to their translated copy by
// array index in OurJourneySection.tsx, not duplicated per language.
export type JourneyChapter = {
  number: string;
  image: string;
  imageAlt: string;
  /** Only Chapter 03 has a confirmed date — the other two deliberately don't. */
  date?: string;
};

export const journeyChapters: JourneyChapter[] = [
  {
    number: "01",
    image: "/images/pellichupulu.png",
    imageAlt:
      "Both families gathered together in a warm home setting for the traditional Pelli Choopulu meeting, sharing tea and sweets",
  },
  {
    number: "02",
    image: "/images/growingbond.png",
    imageAlt:
      "A sequence of moments from the weeks that followed — talking together at home, walking together near a temple, and speaking on the phone across two cities, one in Europe and one in South India",
  },
  {
    number: "03",
    date: eventData.dateShort,
    image: "/images/engagement.png",
    imageAlt: `${eventData.groom} and ${eventData.bride} exchanging rings during their traditional engagement ceremony, surrounded by both families amid flowers and lit brass lamps`,
  },
];
