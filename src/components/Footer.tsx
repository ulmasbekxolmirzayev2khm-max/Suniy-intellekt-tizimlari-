import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { Translations } from '../i18n/translations';

interface FooterProps {
  t: Translations;
  onScrollToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ t, onScrollToTop }) => {
  return (
    <footer className="mt-20 border-t border-slate-200/80 dark:border-white/10 dark:bg-slate-950/70 bg-slate-50 transition-colors py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand and Description */}
          <div className="text-center md:text-left max-w-xl">
            <div className="flex items-center justify-center md:justify-start space-x-2 font-bold text-base text-slate-900 dark:text-white">
              <Sparkles className="w-4 h-4 text-emerald-500" />
              <span>{t.appName}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-mono">
                2026
              </span>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
              {t.footer.aboutText}
            </p>
            <p className="mt-2 text-[11px] text-slate-400 dark:text-slate-500 italic">
              {t.footer.disclaimer}
            </p>
          </div>

          {/* Back to top button */}
          <div className="flex flex-col items-center md:items-end space-y-3">
            <button
              onClick={onScrollToTop}
              className="group flex items-center space-x-2 px-4 py-2 rounded-xl text-xs font-semibold border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-white hover:bg-slate-100 border-slate-200 text-slate-700 dark:text-slate-300 shadow-sm transition-all"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-emerald-500 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <div className="text-xs text-slate-400 dark:text-slate-500">
              © 2026 {t.appName}. {t.footer.allRightsReserved}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
