import React, { useState, useEffect } from 'react';
import { X, Scale, ExternalLink, RotateCcw, Check, Sparkles } from 'lucide-react';
import { AIModel, Language } from '../types';
import { Translations } from '../i18n/translations';
import { AILogo } from './AILogo';

interface CompareModalProps {
  allModels: AIModel[];
  compareIds: string[];
  onClose: () => void;
  onClear: () => void;
  language: Language;
  t: Translations;
}

export const CompareModal: React.FC<CompareModalProps> = ({
  allModels,
  compareIds,
  onClose,
  onClear,
  language,
  t,
}) => {
  const [model1Id, setModel1Id] = useState<string>(compareIds[0] || allModels[0]?.id || 'chatgpt');
  const [model2Id, setModel2Id] = useState<string>(compareIds[1] || allModels[1]?.id || 'gemini');

  useEffect(() => {
    if (compareIds[0]) setModel1Id(compareIds[0]);
    if (compareIds[1]) setModel2Id(compareIds[1]);
  }, [compareIds]);

  // Lock scroll
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const model1 = allModels.find((m) => m.id === model1Id) || allModels[0];
  const model2 = allModels.find((m) => m.id === model2Id) || allModels[1];

  const content1 = model1[language];
  const content2 = model2[language];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-panel border border-slate-200/80 dark:border-white/15 dark:bg-slate-900/95 bg-white text-slate-900 dark:text-white shadow-2xl z-10 p-6 sm:p-8 max-h-[90vh] flex flex-col">
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight flex items-center space-x-2">
              <Scale className="w-6 h-6 text-cyan-500" />
              <span>{t.compareModal.title}</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {t.compareModal.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={onClear}
              className="p-2 rounded-xl text-slate-500 hover:text-rose-500 dark:text-slate-400 dark:hover:text-rose-400 bg-slate-100 dark:bg-white/5 transition-colors"
              title={t.compareModal.clear}
            >
              <RotateCcw className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 dark:bg-white/5 transition-colors"
              title={t.compareModal.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Model Selectors */}
        <div className="grid grid-cols-2 gap-4 py-4 border-b border-slate-200 dark:border-white/10">
          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              {t.compareModal.selectFirst}
            </label>
            <select
              value={model1Id}
              onChange={(e) => setModel1Id(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border dark:border-white/10 dark:bg-slate-800 dark:text-white bg-slate-100 border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {allModels.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === model2Id}>
                  {m.name} ({m.company})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 mb-1.5">
              {t.compareModal.selectSecond}
            </label>
            <select
              value={model2Id}
              onChange={(e) => setModel2Id(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl text-sm font-semibold border dark:border-white/10 dark:bg-slate-800 dark:text-white bg-slate-100 border-slate-300 text-slate-900 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            >
              {allModels.map((m) => (
                <option key={m.id} value={m.id} disabled={m.id === model1Id}>
                  {m.name} ({m.company})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Comparison Matrix Table */}
        <div className="flex-1 overflow-y-auto py-4 space-y-4">
          {/* Header Row with Logos */}
          <div className="grid grid-cols-2 gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10">
            <div className="flex items-center space-x-3">
              <AILogo id={model1.id} name={model1.name} accentColor={model1.accentColor} size="md" />
              <div>
                <div className="text-lg font-bold">{model1.name}</div>
                <div className="text-xs text-slate-400">{model1.company}</div>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <AILogo id={model2.id} name={model2.name} accentColor={model2.accentColor} size="md" />
              <div>
                <div className="text-lg font-bold">{model2.name}</div>
                <div className="text-xs text-slate-400">{model2.company}</div>
              </div>
            </div>
          </div>

          {/* Row 1: Release Year */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.year}
            </div>
            <div className="grid grid-cols-2 gap-4 font-mono font-bold text-sm">
              <div style={{ color: model1.accentColor }}>{model1.year}</div>
              <div style={{ color: model2.accentColor }}>{model2.year}</div>
            </div>
          </div>

          {/* Row 2: Category Archetype */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.category}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div>{model1.badge[language]}</div>
              <div>{model2.badge[language]}</div>
            </div>
          </div>

          {/* Row 3: Pricing Structure */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.pricing}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs space-y-1">
              <div>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {content1.pricing.freeTier}
                </div>
                <div className="text-slate-500 mt-1">{content1.pricing.paidTier}</div>
              </div>
              <div>
                <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                  {content2.pricing.freeTier}
                </div>
                <div className="text-slate-500 mt-1">{content2.pricing.paidTier}</div>
              </div>
            </div>
          </div>

          {/* Row 4: Key Strengths */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.strengths}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <ul className="space-y-1">
                {content1.strengths.slice(0, 3).map((s, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {content2.strengths.slice(0, 3).map((s, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 5: Limitations */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.limitations}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs text-rose-600 dark:text-rose-400">
              <ul className="space-y-1">
                {content1.limitations.map((lim, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span>•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-1">
                {content2.limitations.map((lim, i) => (
                  <li key={i} className="flex items-start space-x-1.5">
                    <span>•</span>
                    <span>{lim}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Row 6: Platforms */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.platforms}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs font-mono">
              <div>{model1.platforms.join(', ')}</div>
              <div>{model2.platforms.join(', ')}</div>
            </div>
          </div>

          {/* Row 7: Official Website Links */}
          <div className="p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
            <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1.5">
              {t.compareModal.criteria.website}
            </div>
            <div className="grid grid-cols-2 gap-4 text-xs">
              <a
                href={model1.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 font-semibold text-emerald-500 hover:underline"
              >
                <span>{model1.websiteUrl.replace('https://', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>

              <a
                href={model2.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 font-semibold text-cyan-500 hover:underline"
              >
                <span>{model2.websiteUrl.replace('https://', '')}</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
