import React, { useEffect } from 'react';
import { X, Mail, Send, Linkedin, Github, Award, Heart, Sparkles, BookOpen } from 'lucide-react';
import { authorData } from '../data/author';
import { Language } from '../types';
import { Translations } from '../i18n/translations';

interface AuthorModalProps {
  onClose: () => void;
  language: Language;
  t: Translations;
}

export const AuthorModal: React.FC<AuthorModalProps> = ({ onClose, language, t }) => {
  // Lock scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Esc key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const initials = authorData.name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-lg rounded-3xl overflow-hidden glass-panel border border-slate-200/80 dark:border-white/15 dark:bg-slate-900/95 bg-white text-slate-900 dark:text-white shadow-2xl z-10 p-6 sm:p-8">
        {/* Top close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 dark:hover:text-white bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors"
          title={t.authorModal.close}
        >
          <X className="w-5 h-5" />
        </button>

        {/* Profile Card Header */}
        <div className="flex flex-col items-center text-center mt-2">
          {/* Avatar Ring */}
          <div className="relative mb-4">
            <div className="w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan-500 shadow-xl shadow-emerald-500/25">
              <div className="w-full h-full rounded-full bg-slate-900 text-white flex items-center justify-center text-2xl font-bold font-mono tracking-wider">
                {initials}
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-md">
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Name & Occupation */}
          <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            {authorData.name}
          </h3>
          <p className="text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 mt-1">
            {authorData.role[language]}
          </p>
        </div>

        {/* Biography */}
        <div className="mt-6 p-4 rounded-2xl dark:bg-white/5 bg-slate-50 border border-slate-200 dark:border-white/10 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed text-center">
          {authorData.bio[language]}
        </div>

        {/* Project Mission Note */}
        <div className="mt-4 p-4 rounded-2xl dark:bg-emerald-500/5 bg-emerald-50/50 border border-emerald-200 dark:border-emerald-500/20 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <div className="flex items-center space-x-2 font-bold text-emerald-700 dark:text-emerald-400 mb-1.5">
            <BookOpen className="w-4 h-4" />
            <span>{t.authorModal.projectMission}</span>
          </div>
          <p>{authorData.projectNote[language]}</p>
        </div>

        {/* Social and Contact Links */}
        <div className="mt-6">
          <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 text-center">
            {t.authorModal.contact}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            <a
              href={`mailto:${authorData.email}`}
              className="flex items-center justify-center space-x-2 p-2.5 rounded-xl border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              <Mail className="w-4 h-4 text-emerald-500" />
              <span>Email</span>
            </a>

            <a
              href={authorData.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-2.5 rounded-xl border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              <Send className="w-4 h-4 text-cyan-500" />
              <span>Telegram</span>
            </a>

            <a
              href={authorData.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-2.5 rounded-xl border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              <Linkedin className="w-4 h-4 text-blue-500" />
              <span>LinkedIn</span>
            </a>

            <a
              href={authorData.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 p-2.5 rounded-xl border dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10 bg-slate-100 hover:bg-slate-200 transition-colors text-xs font-semibold"
            >
              <Github className="w-4 h-4 text-purple-500" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Footer info & Copyright */}
        <div className="mt-8 pt-4 border-t border-slate-200 dark:border-white/10 text-center text-xs text-slate-400">
          © {authorData.copyrightYear} {authorData.name}. {t.authorModal.rights}.
        </div>
      </div>
    </div>
  );
};
