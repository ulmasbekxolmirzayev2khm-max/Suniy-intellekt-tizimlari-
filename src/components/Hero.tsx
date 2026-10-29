import React from 'react';
import { ArrowDown, Cpu, Sparkles, Terminal, Globe2, Layers } from 'lucide-react';
import { Translations } from '../i18n/translations';

interface HeroProps {
  t: Translations;
  onScrollToCatalog: () => void;
}

export const Hero: React.FC<HeroProps> = ({ t, onScrollToCatalog }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-200/50 dark:border-white/5">
      {/* Background Neon Aurora Glow Effects */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none animate-aurora-1" />
      <div className="absolute top-12 right-1/4 translate-x-1/2 w-96 h-96 bg-cyan-500/20 dark:bg-cyan-500/15 rounded-full blur-3xl pointer-events-none animate-aurora-2" />
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[32rem] h-64 bg-indigo-500/15 dark:bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Futuristic Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border dark:bg-white/5 dark:border-white/10 dark:text-emerald-400 bg-emerald-50 border-emerald-200 text-emerald-700 shadow-sm backdrop-blur-md mb-6 animate-pulse">
          <Sparkles className="w-4 h-4 text-emerald-500" />
          <span>{t.hero.badge}</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white max-w-5xl mx-auto leading-[1.12]">
          {t.hero.titleFirst}{' '}
          <span className="bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 bg-clip-text text-transparent">
            {t.hero.titleHighlight}
          </span>{' '}
          {t.hero.titleLast}
        </h1>

        {/* Hero Subtitle */}
        <p className="mt-6 text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
          {t.hero.subtitle}
        </p>

        {/* Key Metrics / Stat Badges */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto">
          <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 text-left transition-all hover:scale-102">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">10</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.hero.statModels}</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 text-left transition-all hover:scale-102">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-500 flex items-center justify-center">
                <Terminal className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">100</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.hero.statPrompts}</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 text-left transition-all hover:scale-102">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 dark:bg-cyan-500/20 text-cyan-500 flex items-center justify-center">
                <Layers className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">80+</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.hero.statUseCases}</div>
              </div>
            </div>
          </div>

          <div className="p-4 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 text-left transition-all hover:scale-102">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 dark:bg-indigo-500/20 text-indigo-500 flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-mono">UZ/RU/EN</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{t.hero.statLanguages}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll CTA Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onScrollToCatalog}
            aria-label={t.hero.scrollCta}
            className="group inline-flex items-center space-x-2.5 px-6 py-3 rounded-2xl text-sm font-semibold tracking-wide transition-all duration-300 dark:bg-white/10 dark:hover:bg-white/15 dark:text-white bg-slate-900 text-white hover:bg-slate-800 shadow-xl shadow-slate-900/10 dark:shadow-emerald-950/30 border border-slate-700/50 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{t.hero.scrollCta}</span>
            <ArrowDown className="w-4 h-4 text-emerald-400 group-hover:translate-y-1 transition-transform animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
