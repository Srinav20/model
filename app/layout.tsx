import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Noto_Serif_Devanagari,
} from "next/font/google";
import "./globals.css";

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

export const metadata = {
  title: "Srivatsav & Harshitha | Engagement",
  description:
    "Engagement invitation of Srivatsav and Harshitha - 23 August 2026",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${notoSerifDevanagari.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
