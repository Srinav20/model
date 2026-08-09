import React from 'react';
import Hero from '@/components/Hero';
import SeamOrnament from '@/components/SeamOrnament';
import EngagementCeremonySection from '@/components/EngagementCeremonySection';
import OurJourneySection from '@/components/OurJourneySection';
import BlessingsSection from '@/components/BlessingsSection';
import ContactFamiliesSection from '@/components/ContactFamiliesSection';
import ClosingSection from '@/components/ClosingSection';

export default function Home() {
  return (
    <>
      {/* 01 — Full Screen Cinematic Hero */}
      <Hero />

      {/* 02 — Engagement Ceremony / Formal Invitation.
          Wrapper carries the overlap with the hero; SeamOrnament sits here
          (not inside <main>) so it isn't clipped by main's overflow-hidden. */}
      <div className="relative -mt-[52px] md:-mt-16">
        <SeamOrnament />
        <EngagementCeremonySection />
      </div>

      {/* 03 — Our Journey */}
      <OurJourneySection />

      {/* 04 — With Love & Blessings */}
      <BlessingsSection />

      {/* 04.5 — Contact the Families */}
      <ContactFamiliesSection />

      {/* 05 — Closing */}
      <ClosingSection />
    </>
  );
}
