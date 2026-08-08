"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language, type Translations } from "./translations";

const STORAGE_KEY = "invitation-language";

type LanguageContextValue = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Global language state. Hydration-safe: server always renders "en" (the
 * default), and any stored preference is only applied after mount — the
 * same pattern used by Countdown.tsx and ScrollReveal.tsx elsewhere in this
 * app, so the server-rendered HTML and the first client render always
 * match, then the real preference takes over a tick later.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en");

  useEffect(() => {
    // Deferred one tick so this reads as a callback reacting to storage,
    // not a synchronous effect-body update — same pattern used in
    // Countdown.tsx/ScrollReveal.tsx, required by
    // react-hooks/set-state-in-effect.
    const id = setTimeout(() => {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored === "en" || stored === "te") {
        setLanguageState(stored);
      }
    }, 0);
    return () => clearTimeout(id);
  }, []);

  // Keep <html lang> in sync so screen readers and :lang(te) CSS selectors
  // (used for Telugu-safe letter-spacing/font fallback — see globals.css)
  // reflect the active language, not just the static "en" set in layout.tsx.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    window.localStorage.setItem(STORAGE_KEY, lang);
  };

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language],
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
