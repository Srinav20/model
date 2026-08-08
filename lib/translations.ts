// Centralized translation strings for the invitation. English is the
// verified, authoritative copy (it's what's been live and reviewed all
// along). The Telugu column is a good-faith first pass, NOT reviewed by a
// native speaker — see the report delivered alongside this file for exactly
// which keys need human review before this ships with Telugu enabled for
// real guests.
//
// Deliberately NOT translated (same in both languages, by design — see the
// language-behavior rules this was built against):
//   - eventData.blessing (the Sanskrit/Devanagari shloka — it isn't English
//     or Telugu to begin with, so it never changes)
//   - eventData.groom / eventData.bride (no Telugu name form supplied)
//   - eventData.dateDisplay / dateShort / time (kept numerically/verbatim
//     readable across languages)
//   - eventData.venueName / venueFloors / venueAddress (proper nouns/
//     address — transliterating them would make Maps search less useful)
//   - journeyChapters[].image / imageAlt / date (image alt text stays
//     English for now; see report)

export type Language = "en" | "te";

type JourneyChapterCopy = {
  title: string;
  subtitle: string;
  text: string;
};

export type Translations = {
  nav: {
    home: string;
    ceremony: string;
    journey: string;
    blessings: string;
    venue: string;
  };
  gate: { open: string };
  music: { play: string; pause: string };
  hero: { intro: string; subIntro: string; scrollCta: string };
  ceremony: {
    heading: string;
    invitationMessage: string;
    dateTimeLabel: string;
    venueLabel: string;
    warmRegardsLabel: string;
    footerNote: string;
    viewLocation: string;
    addToCalendar: string;
  };
  countdown: {
    label: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    todayIsTheDay: string;
  };
  journey: {
    label: string;
    heading: string;
    intro: string;
    outroHeading: string;
    outroText: string;
    chapters: JourneyChapterCopy[];
  };
  blessings: { heading: string; lines: string[] };
  closing: {
    headingLine1: string;
    headingLine2: string;
    text: string;
    signoff: string;
    viewLocation: string;
    addToCalendar: string;
    whatsapp: string;
    whatsappNote: string;
  };
};

// Explicitly typed as Record<Language, Translations> (a shared shape)
// rather than inferred via `typeof translations.en` — with `as const` that
// inference would narrow each leaf to its literal English string, making
// the Telugu object (different literal strings, same shape) fail to
// type-check against it. This way both languages just need to match the
// shape, not the exact characters.
export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      ceremony: "Ceremony",
      journey: "Our Journey",
      blessings: "Blessings",
      venue: "Venue",
    },
    gate: {
      open: "Open Invitation",
    },
    music: {
      play: "Play background music",
      pause: "Pause background music",
    },
    hero: {
      intro: "With the blessings of our families",
      subIntro: "We joyfully invite you to celebrate the engagement of",
      scrollCta: "Scroll to enter",
    },
    ceremony: {
      heading: "Engagement Ceremony",
      invitationMessage:
        "Together with our families, we request the pleasure of your presence as we celebrate our engagement.",
      dateTimeLabel: "Auspicious Date & Time",
      venueLabel: "Venue",
      warmRegardsLabel: "Warm Regards",
      footerNote: "Seeking your blessings & presence on our special day",
      viewLocation: "View Location",
      addToCalendar: "Add to Calendar",
    },
    countdown: {
      label: "The Wait Is Almost Over",
      days: "Days",
      hours: "Hours",
      minutes: "Minutes",
      seconds: "Seconds",
      todayIsTheDay: "Today is the day",
    },
    journey: {
      label: "Our Journey",
      heading: "A Beautiful Beginning",
      intro:
        "What began with a traditional meeting is becoming a journey we choose together.",
      outroHeading: "And the Journey Continues…",
      outroText: "More beautiful chapters are yet to be written.",
      chapters: [
        {
          title: "Pelli Choopulu",
          subtitle: "The First Meeting",
          text: "What began with Pelli Choopulu — a traditional meeting in the presence of our families — became the first step in a journey we would soon choose together.",
        },
        {
          title: "A Growing Bond",
          subtitle: "In the Weeks That Followed",
          text: "With the blessings of our families, conversations followed, and a quiet understanding began to grow between us. As we came to know one another better, shared values, hopes, and everyday conversations slowly turned familiarity into trust.",
        },
        {
          title: "The Engagement",
          subtitle: "With the Blessings of Our Families",
          text: "With joyful hearts and the blessings of our families, we now take the next step together and begin a beautiful new chapter.",
        },
      ],
    },
    blessings: {
      heading: "With Love & Blessings",
      lines: [
        "As we begin this new chapter,",
        "we seek your blessings and",
        "look forward to celebrating",
        "this special day with you.",
      ],
    },
    closing: {
      headingLine1: "We Would Be Delighted",
      headingLine2: "To Have You With Us",
      text: "We look forward to celebrating with you.",
      signoff: "With Love,",
      viewLocation: "View Location",
      addToCalendar: "Add to Calendar",
      whatsapp: "WhatsApp Contact",
      whatsappNote: "Number coming soon",
    },
  },

  te: {
    nav: {
      home: "హోమ్",
      ceremony: "నిశ్చితార్థం",
      journey: "మా ప్రయాణం",
      blessings: "ఆశీర్వాదం",
      venue: "వేదిక",
    },
    gate: {
      open: "ఆహ్వానాన్ని తెరవండి",
    },
    music: {
      play: "నేపథ్య సంగీతం ప్లే చేయండి",
      pause: "నేపథ్య సంగీతం పాజ్ చేయండి",
    },
    hero: {
      intro: "మా కుటుంబాల ఆశీర్వాదాలతో",
      subIntro:
        "మా నిశ్చితార్థ వేడుకను జరుపుకోవడానికి సంతోషంగా మిమ్మల్ని ఆహ్వానిస్తున్నాము",
      scrollCta: "ప్రవేశించడానికి స్క్రోల్ చేయండి",
    },
    ceremony: {
      heading: "నిశ్చితార్థ వేడుక",
      invitationMessage:
        "మా కుటుంబాలతో కలిసి, మా నిశ్చితార్థాన్ని జరుపుకునే ఈ శుభ సందర్భంలో మీ సమక్షాన్ని కోరుకుంటున్నాము.",
      dateTimeLabel: "శుభ ముహూర్తం",
      venueLabel: "వేదిక",
      warmRegardsLabel: "శుభాకాంక్షలతో",
      footerNote: "మా ప్రత్యేక దినాన మీ ఆశీర్వాదం మరియు సమక్షాన్ని కోరుకుంటున్నాము",
      viewLocation: "స్థానాన్ని చూడండి",
      addToCalendar: "క్యాలెండర్‌కు జోడించండి",
    },
    countdown: {
      label: "వేచి ఉండే సమయం దాదాపు ముగిసింది",
      days: "రోజులు",
      hours: "గంటలు",
      minutes: "నిమిషాలు",
      seconds: "సెకన్లు",
      todayIsTheDay: "ఈ రోజే ఆ శుభ దినం",
    },
    journey: {
      label: "మా ప్రయాణం",
      heading: "ఒక అందమైన ఆరంభం",
      intro:
        "సాంప్రదాయ కలయికతో మొదలైనది, ఇప్పుడు మేమిద్దరం కలిసి ఎంచుకుంటున్న ప్రయాణంగా మారుతోంది.",
      outroHeading: "ప్రయాణం సాగుతూనే ఉంది…",
      outroText: "మరిన్ని అందమైన అధ్యాయాలు రాయబడవలసి ఉంది.",
      chapters: [
        {
          title: "పెళ్లి చూపులు",
          subtitle: "మొదటి పరిచయం",
          text: "మా కుటుంబాల సమక్షంలో జరిగిన సాంప్రదాయ పెళ్లి చూపులతో మొదలైన ఈ అనుబంధం, మేమిద్దరం త్వరలో ఎంచుకోబోయే ప్రయాణానికి తొలి అడుగుగా మారింది.",
        },
        {
          title: "పెరుగుతున్న అనుబంధం",
          subtitle: "తరువాతి వారాల్లో",
          text: "మా కుటుంబాల ఆశీర్వాదంతో సంభాషణలు కొనసాగాయి, మా మధ్య మెల్లగా ఒక అవగాహన పెరగసాగింది. ఒకరినొకరు మరింత తెలుసుకుంటూ, ఉమ్మడి విలువలు, ఆశయాలు, నిత్య సంభాషణలు పరిచయాన్ని నమ్మకంగా మార్చాయి.",
        },
        {
          title: "నిశ్చితార్థం",
          subtitle: "మా కుటుంబాల ఆశీర్వాదంతో",
          text: "సంతోషభరిత హృదయాలతో, మా కుటుంబాల ఆశీర్వాదంతో, ఇప్పుడు మేము కలిసి తదుపరి అడుగు వేసి ఒక అందమైన నూతన అధ్యాయాన్ని ప్రారంభిస్తున్నాము.",
        },
      ],
    },
    blessings: {
      heading: "ప్రేమతో ఆశీర్వాదాలు",
      lines: [
        "ఈ నూతన అధ్యాయాన్ని మొదలుపెడుతూ,",
        "మీ ఆశీర్వాదాలను కోరుకుంటున్నాము మరియు",
        "ఈ ప్రత్యేక దినాన్ని మీతో కలిసి",
        "జరుపుకోవాలని ఎదురుచూస్తున్నాము.",
      ],
    },
    closing: {
      headingLine1: "మీ సమక్షం మాకు",
      headingLine2: "ఎంతో సంతోషాన్నిస్తుంది",
      text: "మీతో కలిసి జరుపుకోవాలని ఎదురుచూస్తున్నాము.",
      signoff: "ప్రేమతో,",
      viewLocation: "స్థానాన్ని చూడండి",
      addToCalendar: "క్యాలెండర్‌కు జోడించండి",
      whatsapp: "వాట్సాప్‌లో సంప్రదించండి",
      whatsappNote: "నంబర్ త్వరలో అందుబాటులోకి వస్తుంది",
    },
  },
};
