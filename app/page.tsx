import React from 'react';

export default function EngagementInvite() {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Lakshmi Vedika Indrani Function Halls Sujatha Nagar Visakhapatnam 530051'
  )}`;

  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-950 via-stone-900 to-rose-950 text-amber-50 flex flex-col items-center justify-between p-4 sm:p-8 font-sans relative overflow-hidden">

      {/* Background Decorative Temple Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-600/20 rounded-full blur-3xl pointer-events-none" />

      {/* Main Temple Card Container */}
      <section className="relative z-10 w-full max-w-xl my-auto bg-stone-900/90 backdrop-blur-xl border-2 border-amber-500/40 rounded-[2.5rem] p-6 sm:p-10 shadow-[0_0_50px_rgba(217,119,6,0.15)] text-center space-y-8 my-8">

        {/* Decorative Top Arch Accent */}
        <div className="flex flex-col items-center space-y-2">
          <div className="text-3xl text-amber-400 font-serif">🛕</div>
          <p className="text-xs uppercase tracking-[0.35em] text-amber-300 font-semibold">
            ॥ श्री गणेशाय नमः ॥
          </p>
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-amber-500 to-transparent my-2" />
          <p className="text-xs sm:text-sm uppercase tracking-widest text-amber-200/80 font-medium max-w-md">
            We cordially invite you to attend the engagement ceremony of
          </p>
        </div>

        {/* Couple Hero Section */}
        <div className="space-y-3 py-2">
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wide">
            Srivatsav
          </h1>
          <div className="flex items-center justify-center gap-3">
            <span className="w-16 h-px bg-gradient-to-r from-transparent to-amber-500/60" />
            <span className="text-2xl font-serif italic text-rose-400">&</span>
            <span className="w-16 h-px bg-gradient-to-l from-transparent to-amber-500/60" />
          </div>
          <h1 className="text-4xl sm:text-6xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-100 tracking-wide">
            Harshitha
          </h1>
        </div>

        {/* Auspicious Date Banner */}
        <div className="py-6 border-y border-amber-500/30 bg-amber-950/40 rounded-2xl space-y-2">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            Auspicious Date & Time
          </p>
          <div className="text-2xl sm:text-3xl font-serif font-bold text-amber-100">
            Sunday, August 23, 2026
          </div>
          <p className="text-xl font-serif text-rose-300">
            11:15 AM
          </p>
        </div>

        {/* Venue Information */}
        <div className="space-y-3 pt-2">
          <p className="text-xs uppercase tracking-[0.25em] text-amber-400 font-semibold">
            Venue
          </p>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-amber-100">
              Lakshmi Vedika, Indrani Function Halls
            </h2>
            <p className="text-amber-200/80 text-sm">
              (3rd & 4th floors)
            </p>
            <p className="text-amber-200/80 text-sm">
              Sujatha Nagar, Visakhapatnam - 530051
            </p>
          </div>

          <div className="pt-4">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600 text-white font-medium px-6 py-3 rounded-full shadow-lg border border-amber-400/30 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              <span>📍</span> Open Location in Google Maps
            </a>
          </div>
        </div>

        {/* Warm Regards Section */}
        <div className="pt-6 border-t border-amber-500/30 space-y-1">
          <p className="text-xs uppercase tracking-[0.2em] text-amber-400/80 font-semibold">
            Warm Regards
          </p>
          <p className="text-lg font-serif font-bold text-amber-200">
            P.V. Appa Rao (Sai) & Lakshmi Bhavani
          </p>
        </div>

      </section>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-xl text-center py-4 text-xs text-amber-200/50">
        Seeking your blessings & presence on our special day
      </footer>
    </main>
  );
}