import React, { useEffect, useState } from 'react';
import { AIModel, Language } from '../types';
import { Translations } from '../i18n/translations';
import { AILogo } from './AILogo';
import { Sparkles, Calendar, Building2 } from 'lucide-react';

interface CursorTooltipProps {
  model: AIModel | null;
  cursorPos: { x: number; y: number };
  language: Language;
  t: Translations;
}

export const CursorTooltip: React.FC<CursorTooltipProps> = ({
  model,
  cursorPos,
  language,
  t,
}) => {
  const [adjustedPos, setAdjustedPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!model) {
      setIsVisible(false);
      return;
    }

    setIsVisible(true);

    const tooltipWidth = 320;
    const tooltipHeight = 200;
    const offset = 18;

    let posX = cursorPos.x + offset;
    let posY = cursorPos.y + offset;

    // Check right edge
    if (posX + tooltipWidth > window.innerWidth - 16) {
      posX = cursorPos.x - tooltipWidth - offset;
    }

    // Check bottom edge
    if (posY + tooltipHeight > window.innerHeight - 16) {
      posY = cursorPos.y - tooltipHeight - offset;
    }

    // Guard against negative left/top
    if (posX < 16) posX = 16;
    if (posY < 16) posY = 16;

    setAdjustedPos({ x: posX, y: posY });
  }, [cursorPos, model]);

  if (!model || !isVisible) return null;

  const content = model[language];

  return (
    <div
      className="fixed pointer-events-none z-50 w-80 p-4 rounded-2xl glass-panel shadow-2xl border transition-all duration-75 ease-out backdrop-blur-2xl dark:bg-slate-950/90 dark:border-white/20 bg-white/95 border-slate-300 text-slate-900 dark:text-white hidden lg:block"
      style={{
        left: `${adjustedPos.x}px`,
        top: `${adjustedPos.y}px`,
        boxShadow: `0 20px 40px -10px ${model.accentColor}30, 0 0 1px ${model.accentColor}`,
      }}
    >
      <div className="flex items-center space-x-3 mb-2.5">
        <AILogo id={model.id} name={model.name} accentColor={model.accentColor} size="sm" />
        <div className="flex-1 min-w-0">
          <div className="font-bold text-sm tracking-tight truncate flex items-center justify-between">
            <span>{model.name}</span>
            <span
              className="text-[10px] px-2 py-0.5 rounded-full font-mono font-medium"
              style={{
                backgroundColor: `${model.accentColor}20`,
                color: model.accentColor,
              }}
            >
              {model.badge[language]}
            </span>
          </div>
          <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            <span className="flex items-center space-x-1">
              <Building2 className="w-3 h-3" />
              <span>{model.company}</span>
            </span>
            <span>•</span>
            <span className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{model.year}</span>
            </span>
          </div>
        </div>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-3">
        {content.shortDesc}
      </p>

      <div className="pt-2 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] font-semibold text-emerald-500 dark:text-emerald-400">
        <span className="flex items-center space-x-1">
          <Sparkles className="w-3 h-3" />
          <span>{t.card.hoverHint}</span>
        </span>
        <span className="opacity-70">➔</span>
      </div>
    </div>
  );
};
