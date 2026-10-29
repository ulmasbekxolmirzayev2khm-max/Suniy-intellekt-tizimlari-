import React, { useState, useRef, useEffect } from 'react';
import { Globe, Moon, Sun, User, Scale, Heart, Sparkles, Check } from 'lucide-react';
import { Language, Theme } from '../types';
import { Translations } from '../i18n/translations';

interface HeaderProps {
  language: Language;
  onLanguageChange: (lang: Language) => void;
  theme: Theme;
  onToggleTheme: () => void;
  onOpenAuthor: () => void;
  onOpenCompare: () => void;
  compareCount: number;
  favoritesCount: number;
  onToggleFavoritesFilter: () => void;
  isFavoritesFilterActive: boolean;
  t: Translations;
}

export const Header: React.FC<HeaderProps> = ({
  language,
  onLanguageChange,
  theme,
  onToggleTheme,
  onOpenAuthor,
  onOpenCompare,
  compareCount,
  favoritesCount,
  onToggleFavoritesFilter,
  isFavoritesFilterActive,
  t,
}) => {
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const langMenuRef = useRef<HTMLDivElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langMenuRef.current && !langMenuRef.current.contains(event.target as Node)) {
        setIsLangMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const languageOptions: { code: Language; label: string; flag: string }[] = [
    { code: 'uz', label: "O'zbekcha", flag: '🇺🇿' },
    { code: 'ru', label: 'Русский', flag: '🇷🇺' },
    { code: 'en', label: 'English', flag: '🇬🇧' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-xl border-b transition-colors duration-300 dark:bg-slate-950/80 dark:border-white/10 bg-white/80 border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        {/* Left side: Language Selector & Logo Brand */}
        <div className="flex items-center space-x-3 sm:space-x-5">
          {/* Language Selector Dropdown */}
          <div className="relative" ref={langMenuRef}>
            <button
              onClick={() => setIsLangMenuOpen((prev) => !prev)}
              aria-label={t.selectLanguage}
              aria-expanded={isLangMenuOpen}
              className="flex items-center space-x-2 px-3 py-2 rounded-xl text-sm font-semibold transition-all duration-200 border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-white bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200 shadow-sm"
            >
              <Globe className="w-4 h-4 text-emerald-500" />
              <span className="uppercase tracking-wider font-mono">{language}</span>
              <span className="text-xs opacity-60">▼</span>
            </button>

            {isLangMenuOpen && (
              <div className="absolute left-0 mt-2 w-44 rounded-2xl shadow-2xl py-2 z-50 border backdrop-blur-2xl transition-all animate-in fade-in zoom-in-95 duration-150 dark:bg-slate-900/95 dark:border-white/10 dark:text-white bg-white/95 border-slate-200 text-slate-900">
                <div className="px-3 py-1.5 text-xs font-semibold text-slate-400 dark:text-slate-500 border-b border-slate-100 dark:border-white/5">
                  {t.selectLanguage}
                </div>
                {languageOptions.map((opt) => (
                  <button
                    key={opt.code}
                    onClick={() => {
                      onLanguageChange(opt.code);
                      setIsLangMenuOpen(false);
                    }}
                    className={`w-full flex items-center justify-between px-3.5 py-2.5 text-sm text-left transition-colors ${
                      language === opt.code
                        ? 'bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 font-semibold'
                        : 'hover:bg-slate-100 dark:hover:bg-white/5'
                    }`}
                  >
                    <span className="flex items-center space-x-2.5">
                      <span className="text-base">{opt.flag}</span>
                      <span>{opt.label}</span>
                    </span>
                    {language === opt.code && <Check className="w-4 h-4 text-emerald-500" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Logo & Brand title */}
          <a href="#" className="flex items-center space-x-2.5 group">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center bg-gradient-to-tr from-emerald-500 via-teal-500 to-cyan-500 text-white shadow-lg shadow-emerald-500/25 group-hover:scale-105 transition-transform">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <div className="hidden md:block">
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white block leading-tight">
                {t.appName}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 block font-normal">
                {t.appSubtitle}
              </span>
            </div>
          </a>
        </div>

        {/* Right side: Action controls */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          {/* Favorites Filter button */}
          <button
            onClick={onToggleFavoritesFilter}
            aria-label={t.favoritesBtn}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
              isFavoritesFilterActive
                ? 'bg-rose-500/15 text-rose-600 dark:text-rose-400 border-rose-500/40 shadow-sm'
                : 'dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            title={t.favoritesBtn}
          >
            <Heart
              className={`w-4 h-4 ${isFavoritesFilterActive ? 'fill-rose-500 text-rose-500' : ''}`}
            />
            <span className="hidden sm:inline">{t.favoritesBtn}</span>
            {favoritesCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs font-mono font-bold bg-rose-500/20 text-rose-600 dark:text-rose-400">
                {favoritesCount}
              </span>
            )}
          </button>

          {/* Compare Matrix button */}
          <button
            onClick={onOpenCompare}
            aria-label={t.compareBtn}
            className={`flex items-center space-x-1.5 px-3 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 border ${
              compareCount > 0
                ? 'bg-cyan-500/15 text-cyan-600 dark:text-cyan-400 border-cyan-500/40 shadow-sm'
                : 'dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-slate-300 bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
            }`}
            title={t.compareBtn}
          >
            <Scale className="w-4 h-4" />
            <span className="hidden sm:inline">{t.compareBtn}</span>
            {compareCount > 0 && (
              <span className="ml-1 px-1.5 py-0.5 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-600 dark:text-cyan-400">
                {compareCount}/2
              </span>
            )}
          </button>

          {/* Theme Switcher */}
          <button
            onClick={onToggleTheme}
            aria-label={t.themeToggle}
            className="p-2 rounded-xl border transition-all duration-200 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 dark:text-amber-400 bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200 shadow-sm"
            title={theme === 'dark' ? t.themeLight : t.themeDark}
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Author Button */}
          <button
            onClick={onOpenAuthor}
            aria-label={t.authorBtn}
            className="flex items-center space-x-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 text-white shadow-lg shadow-emerald-500/20 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 hover:brightness-110 active:scale-95"
          >
            <User className="w-4 h-4" />
            <span>{t.authorBtn}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
