"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import LanguageToggle from "./LanguageToggle";
import MusicControl from "./MusicControl";

const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "ceremony", href: "#invitation" },
  { key: "journey", href: "#our-journey" },
  { key: "blessings", href: "#blessings" },
  { key: "venue", href: "#venue" },
] as const;

/**
 * Global top nav. Desktop: links inline in one bar. Mobile: links collapse
 * into a compact dropdown behind a hamburger button, but language + music
 * controls stay in the persistent bar at all times (not hidden behind the
 * menu) per the requirement that they remain easily accessible.
 */
export default function SiteNav() {
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-nav">
      <div className="site-nav-bar">
        <a href="#home" className="site-nav-brand" onClick={() => setMenuOpen(false)}>
          S &amp; H
        </a>

        <nav className="site-nav-links" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <a key={link.key} href={link.href}>
              {t.nav[link.key]}
            </a>
          ))}
        </nav>

        <div className="site-nav-controls">
          <LanguageToggle />
          <MusicControl />
          <button
            type="button"
            className="site-nav-menu-button"
            aria-expanded={menuOpen}
            aria-controls="site-nav-mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </button>
        </div>
      </div>

      <nav
        id="site-nav-mobile-menu"
        className={`site-nav-mobile-menu${menuOpen ? " is-open" : ""}`}
        aria-label="Primary"
      >
        {NAV_LINKS.map((link) => (
          <a key={link.key} href={link.href} onClick={() => setMenuOpen(false)}>
            {t.nav[link.key]}
          </a>
        ))}
      </nav>
    </header>
  );
}
