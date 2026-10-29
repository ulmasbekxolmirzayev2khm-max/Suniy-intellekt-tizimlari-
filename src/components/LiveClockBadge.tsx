import React, { useState, useEffect } from 'react';
import { Clock, Calendar } from 'lucide-react';
import { Language } from '../types';
import { Translations } from '../i18n/translations';

interface LiveClockBadgeProps {
  language: Language;
  t: Translations;
}

export const LiveClockBadge: React.FC<LiveClockBadgeProps> = ({ language, t }) => {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Format month name in the selected language
  const formatLocalizedDate = (date: Date, lang: Language): string => {
    const day = date.getDate();
    const year = date.getFullYear();

    const uzMonths = [
      'Yanvar',
      'Fevral',
      'Mart',
      'Aprel',
      'May',
      'Iyun',
      'Iyul',
      'Avgust',
      'Sentabr',
      'Oktabr',
      'Noyabr',
      'Dekabr',
    ];

    const ruMonths = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const enMonths = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    if (lang === 'uz') {
      return `${day} ${uzMonths[date.getMonth()]} ${year}`;
    } else if (lang === 'ru') {
      return `${day} ${ruMonths[date.getMonth()]} ${year}`;
    } else {
      return `${enMonths[date.getMonth()]} ${day}, ${year}`;
    }
  };

  const pad = (n: number) => n.toString().padStart(2, '0');
  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <aside
      aria-label="Live time and date"
      className="fixed bottom-4 right-4 z-30 select-none hidden sm:block animate-in fade-in duration-300"
    >
      <div className="flex items-center space-x-3 px-4 py-2.5 rounded-2xl glass-panel border border-slate-200/80 dark:border-white/10 dark:bg-slate-900/85 bg-white/90 text-slate-900 dark:text-white shadow-xl shadow-slate-950/10 backdrop-blur-xl">
        {/* Pulsing live status indicator */}
        <div className="relative flex items-center justify-center">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping absolute opacity-75" />
          <span className="w-2 h-2 rounded-full bg-emerald-500 relative" />
        </div>

        {/* Localized Date */}
        <div className="flex items-center space-x-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 border-r border-slate-200 dark:border-white/10 pr-3">
          <Calendar className="w-3.5 h-3.5 text-emerald-500" />
          <span>{formatLocalizedDate(time, language)}</span>
        </div>

        {/* Live Digital Clock (HH:mm:ss) */}
        <div className="flex items-center space-x-1.5 text-xs font-mono font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
          <Clock className="w-3.5 h-3.5" />
          <span>
            {hours}:{minutes}:<span className="opacity-70">{seconds}</span>
          </span>
        </div>
      </div>
    </aside>
  );
};
