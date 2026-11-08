import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import ES from './es';

export type Lang = 'en' | 'es';

const STORAGE_KEY = 'dojo-lang';

// First visit: follow the browser's language (a Spanish-language browser
// gets Spanish). Returning visitors keep whichever language they picked,
// saved in localStorage. Storage failures (private mode) fall back to
// detection silently.
function detectLang(): Lang {
  try {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
  } catch {
    // localStorage unavailable; continue to browser detection.
  }
  const candidates =
    typeof navigator !== 'undefined' && navigator.languages
      ? navigator.languages
      : typeof navigator !== 'undefined' && navigator.language
        ? [navigator.language]
        : [];
  return candidates.some((tag) => tag.toLowerCase().startsWith('es'))
    ? 'es'
    : 'en';
}

interface LangContextValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  /** Translate a UI string. The English source is the key; unknown keys fall back to English. */
  t: (en: string) => string;
}

const LanguageContext = createContext<LangContextValue>({
  lang: 'en',
  setLang: () => undefined,
  t: (en) => en,
});

/** Supplies the active language and t() to the whole app. */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(detectLang);

  const setLang = (next: Lang) => {
    setLangState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Storage unavailable; the choice applies for this page view only.
    }
  };

  useEffect(() => {
    // Keep the document language in sync for screen readers, translation
    // tools, and search engines.
    document.documentElement.lang = lang;
  }, [lang]);

  const t = useMemo(
    () => (en: string) => (lang === 'es' ? ES[en] ?? en : en),
    [lang]
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

/** Returns the active language, its setter, and the t() translator. */
export function useLang(): LangContextValue {
  return useContext(LanguageContext);
}
