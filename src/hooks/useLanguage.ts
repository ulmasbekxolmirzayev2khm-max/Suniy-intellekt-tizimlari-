import { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations, Translations } from '../i18n/translations';

const LANGUAGE_KEY = 'ai_catalog_language_pref';

export function useLanguage() {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(LANGUAGE_KEY);
      if (saved === 'uz' || saved === 'ru' || saved === 'en') {
        return saved;
      }
    } catch {
      // ignore
    }
    return 'uz';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(LANGUAGE_KEY, lang);
    } catch {
      // ignore
    }
    // Update HTML lang attribute
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const t: Translations = translations[language];

  return {
    language,
    setLanguage,
    t,
  };
}
