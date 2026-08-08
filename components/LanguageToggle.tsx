"use client";

import { useLanguage } from "@/lib/language-context";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle" role="group" aria-label="Choose language">
      <button
        type="button"
        className={`language-toggle-option${language === "en" ? " is-active" : ""}`}
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
      >
        EN
      </button>
      <span className="language-toggle-divider" aria-hidden="true">|</span>
      <button
        type="button"
        className={`language-toggle-option${language === "te" ? " is-active" : ""}`}
        onClick={() => setLanguage("te")}
        aria-pressed={language === "te"}
      >
        తెలుగు
      </button>
    </div>
  );
}
