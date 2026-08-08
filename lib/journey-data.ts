import { eventData } from "./event-data";

// Structured chapter data for the Our Journey section — three chapters
// only, per the confirmed story. Keeping this as data (rather than three
// near-identical JSX blocks) means OurJourneySection.tsx can render them
// with a single .map(), and adding image/copy tweaks later never means
// touching layout code.
export type JourneyChapter = {
  number: string;
  title: string;
  subtitle: string;
  text: string;
  image: string;
  imageAlt: string;
  /** Only Chapter 03 has a confirmed date — the other two deliberately don't. */
  date?: string;
};

export const journeyChapters: JourneyChapter[] = [
  {
    number: "01",
    title: "Pelli Choopulu",
    subtitle: "The First Meeting",
    text: "What began with Pelli Choopulu — a traditional meeting in the presence of our families — became the first step in a journey we would soon choose together.",
    image: "/images/pellichupulu.png",
    imageAlt:
      "Both families gathered together in a warm home setting for the traditional Pelli Choopulu meeting, sharing tea and sweets",
  },
  {
    number: "02",
    title: "A Growing Bond",
    subtitle: "In the Weeks That Followed",
    text: "With the blessings of our families, conversations followed, and a quiet understanding began to grow between us. As we came to know one another better, shared values, hopes, and everyday conversations slowly turned familiarity into trust.",
    image: "/images/growingbond.png",
    imageAlt:
      "A sequence of moments from the weeks that followed — talking together at home, walking together near a temple, and speaking on the phone across two cities, one in Europe and one in South India",
  },
  {
    number: "03",
    title: "The Engagement",
    subtitle: "With the Blessings of Our Families",
    date: eventData.dateShort,
    text: "With joyful hearts and the blessings of our families, we now take the next step together and begin a beautiful new chapter.",
    image: "/images/engagement.png",
    imageAlt: `${eventData.groom} and ${eventData.bride} exchanging rings during their traditional engagement ceremony, surrounded by both families amid flowers and lit brass lamps`,
  },
];
