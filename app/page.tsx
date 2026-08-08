import React from 'react';

export default function EngagementInvite() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Lakshmi Vedika Indrani Function Halls Sujatha Nagar Visakhapatnam 530051'
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-orange-50 to-rose-50 text-stone-800 flex flex-col items-center justify-between p-4 sm:p-8 font-sans">

      {/* Top Traditional Header */}
      <div className="w-full max-w-xl text-center pt-6 pb-2 space-y-2">
        <p className="text-xs uppercase tracking-[0.3em] text-amber-700 font-semibold">
          ॥ श्री गणेशाय नमः ॥
        </p>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-stone-500 font-medium">
          We cordially invite you to attend the engagement ceremony of
        </p>
      </div>

      {/* Main Single-Column Invitation Card */}
      <section className="w-full max-w-xl bg-white/85 backdrop-blur-md rounded-3xl p-8 sm:p-12 shadow-xl border border-amber-200/80 text-center space-y-8 my-auto">

        {/* Couple Names */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-900 tracking-wide">
            Srivatsav
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="w-12 h-px bg-amber-400" />
            <span className="text-2xl font-serif italic text-rose-600">&</span>
            <span className="w-12 h-px bg-amber-400" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-amber-900 tracking-wide">
            Harshitha
          </h1>
        </div>

        {/* Date & Time Flow */}
        <div className="py-5 border-y border-amber-200/70 space-y-2">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
            Date & Time
          </p>
          <div className="text-2xl sm:text-3xl font-serif text-stone-800 font-bold">
            Sunday, August 23, 2026
          </div>
          <p className="text-lg font-semibold text-rose-700">
            at 11:15 AM
          </p>
        </div>

        {/* Venue Information */}
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-widest text-amber-700 font-semibold">
            Venue
          </p>
          <h2 className="text-xl font-bold text-stone-800">
            Lakshmi Vedika, Indrani Function Halls
          </h2>
          <p className="text-stone-600 text-sm">
            (3rd & 4th floors)
          </p>
          <p className="text-stone-600 text-sm">
            Sujatha Nagar, Visakhapatnam - 530051
          </p>

          <div className="pt-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-amber-700 hover:bg-amber-800 text-white font-medium px-6 py-2.5 rounded-full shadow-md transition-all text-sm"
            >
              📍 Open in Google Maps
            </a>
          </div>
        </div>

        {/* Hosts / Warm Regards */}
        <div className="pt-5 border-t border-amber-200/70 space-y-1">
          <p className="text-xs uppercase tracking-widest text-stone-500 font-semibold">
            Warm Regards
          </p>
          <p className="text-lg font-serif font-bold text-amber-900">
            P.V. Appa Rao (Sai) & Lakshmi Bhavani
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="w-full max-w-xl text-center py-6 text-xs text-stone-500">
        Looking forward to celebrating this joyful occasion with you!
      </footer>
    </main>
  );
}