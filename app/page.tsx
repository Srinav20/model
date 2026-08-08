import React from 'react';

export default function EngagementInvite() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-orange-50 text-stone-800 flex flex-col items-center justify-between p-4 sm:p-8 font-sans">
      <div className="w-full max-w-2xl text-center pt-8 pb-4">
        <span className="text-sm uppercase tracking-[0.3em] text-amber-700 font-semibold">
          Together with their families
        </span>
      </div>

      <section className="w-full max-w-2xl bg-white/80 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-100 text-center space-y-6 my-auto">
        <div className="space-y-2">
          <p className="text-xs sm:text-sm tracking-widest text-stone-500 uppercase">
            Are Joyfully Celebrating The Engagement Of
          </p>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-900 tracking-wide py-2">
            Sri <span className="text-rose-600 font-sans font-light">&</span> Harshitha
          </h1>
        </div>

        <div className="w-24 h-0.5 bg-amber-400 mx-auto my-4 rounded-full" />

        <p className="text-stone-600 italic text-base sm:text-lg max-w-md mx-auto">
          "Two lives, two hearts, joined together in friendship, united forever in love."
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
          <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60">
            <h3 className="text-xs uppercase tracking-wider text-amber-800 font-bold mb-1">
              Date & Time
            </h3>
            <p className="text-stone-800 font-medium">Date to be announced</p>
            <p className="text-sm text-stone-500">Time TBA</p>
          </div>

          <div className="bg-rose-50/70 p-4 rounded-2xl border border-rose-200/60">
            <h3 className="text-xs uppercase tracking-wider text-rose-800 font-bold mb-1">
              Venue
            </h3>
            <p className="text-stone-800 font-medium">Venue Details</p>
            <p className="text-sm text-stone-500">City, State</p>
          </div>
        </div>

        <div className="pt-6">
          <a
            href="#rsvp"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            Save The Date
          </a>
        </div>
      </section>

      <footer className="w-full max-w-2xl text-center py-6 text-xs text-stone-500">
        We look forward to celebrating this special day with you!
      </footer>
    </main>
  );
}