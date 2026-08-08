import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Noto_Serif_Devanagari,
  Noto_Serif_Telugu,
} from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/language-context";
import { AudioProvider } from "@/lib/audio-context";
import SiteNav from "@/components/SiteNav";
import OpenInvitationGate from "@/components/OpenInvitationGate";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Ceremonial display serif used for the couple's names (hero + later sections).
const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

// Proper Devanagari glyph support for the Sanskrit blessing line — Playfair
// Display and Geist have no Devanagari coverage, which is what forced the
// browser's fallback rendering (and made letter-spacing look broken).
const notoSerifDevanagari = Noto_Serif_Devanagari({
  variable: "--font-devanagari",
  subsets: ["devanagari"],
  weight: ["500", "600"],
});

// Telugu glyph support for the language toggle — needed now that any
// heading/body copy across the page can render in Telugu, not just one
// label. Used narrowly via :lang(te) selectors in globals.css rather than
// applied document-wide, so English text (including the couple's names,
// which never translate) keeps its existing Latin fonts untouched.
const notoSerifTelugu = Noto_Serif_Telugu({
  variable: "--font-telugu",
  subsets: ["telugu"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: "Srivatsav & Harshitha | Engagement",
  description:
    "Engagement invitation of Srivatsav and Harshitha - 23 August 2026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${notoSerifDevanagari.variable} ${notoSerifTelugu.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <LanguageProvider>
          <AudioProvider>
            <SiteNav />
            <OpenInvitationGate />
            {children}
          </AudioProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
