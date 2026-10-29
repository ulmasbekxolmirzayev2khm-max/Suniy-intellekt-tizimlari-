import React, { useState } from 'react';
import { Heart, Scale, ExternalLink, ArrowRight, Calendar, Building2 } from 'lucide-react';
import { AIModel, Language } from '../types';
import { Translations } from '../i18n/translations';
import { AILogo } from './AILogo';

interface AICardProps {
  model: AIModel;
  language: Language;
  onSelect: (model: AIModel) => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  isInCompare: boolean;
  onToggleCompare: (id: string, e: React.MouseEvent) => void;
  onMouseEnter: (model: AIModel, e: React.MouseEvent) => void;
  onMouseMove: (e: React.MouseEvent) => void;
  onMouseLeave: () => void;
  t: Translations;
  index: number;
}

export const AICard: React.FC<AICardProps> = ({
  model,
  language,
  onSelect,
  isFavorite,
  onToggleFavorite,
  isInCompare,
  onToggleCompare,
  onMouseEnter,
  onMouseMove,
  onMouseLeave,
  t,
  index,
}) => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Subtle 3D tilt effect on mouse move
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    onMouseMove(e);
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRotate({ x: rotateX, y: rotateY });
  };

  const handleCardMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    onMouseEnter(model, e);
  };

  const handleCardMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
    onMouseLeave();
  };

  const content = model[language];

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`${model.name} — ${model.company}`}
      onClick={() => onSelect(model)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onSelect(model);
        }
      }}
      onMouseEnter={handleCardMouseEnter}
      onMouseMove={handleCardMouseMove}
      onMouseLeave={handleCardMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateY(-8px)`
          : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
        borderColor: isHovered ? model.accentColor : undefined,
        boxShadow: isHovered
          ? `0 24px 48px -12px ${model.accentColor}35, 0 0 20px -2px ${model.accentColor}30`
          : undefined,
        animationDelay: `${index * 60}ms`,
      }}
      className="group relative flex flex-col justify-between p-6 rounded-3xl cursor-pointer transition-all duration-300 glass-panel border border-slate-200/90 dark:border-white/10 dark:hover:border-white/20 select-none overflow-hidden glow-card"
    >
      {/* Dynamic ambient color glow in background */}
      <div
        className="absolute -top-12 -right-12 w-36 h-36 rounded-full blur-2xl transition-opacity duration-500 pointer-events-none"
        style={{
          backgroundColor: model.accentColor,
          opacity: isHovered ? 0.22 : 0.08,
        }}
      />

      {/* Top row: Category Badge & Action Buttons */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <span
            className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full uppercase tracking-wider border"
            style={{
              backgroundColor: `${model.accentColor}15`,
              borderColor: `${model.accentColor}35`,
              color: model.accentColor,
            }}
          >
            {model.badge[language]}
          </span>

          <div className="flex items-center space-x-1.5" onClick={(e) => e.stopPropagation()}>
            {/* Compare checkbox / button */}
            <button
              onClick={(e) => onToggleCompare(model.id, e)}
              className={`p-1.5 rounded-lg border transition-all ${
                isInCompare
                  ? 'bg-cyan-500/20 border-cyan-500 text-cyan-600 dark:text-cyan-400 scale-105'
                  : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title={isInCompare ? t.card.removeFromCompare : t.card.addToCompare}
              aria-label={isInCompare ? t.card.removeFromCompare : t.card.addToCompare}
            >
              <Scale className="w-4 h-4" />
            </button>

            {/* Favorite button */}
            <button
              onClick={(e) => onToggleFavorite(model.id, e)}
              className={`p-1.5 rounded-lg border transition-all ${
                isFavorite
                  ? 'bg-rose-500/15 border-rose-500/40 text-rose-500 scale-105'
                  : 'border-transparent text-slate-400 hover:text-slate-600 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10'
              }`}
              title={isFavorite ? t.card.removeFromFavorites : t.card.addToFavorites}
              aria-label={isFavorite ? t.card.removeFromFavorites : t.card.addToFavorites}
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
            </button>
          </div>
        </div>

        {/* Logo and Identity */}
        <div className="flex items-center space-x-4 mb-4">
          <AILogo id={model.id} name={model.name} accentColor={model.accentColor} size="lg" />
          <div className="min-w-0 flex-1">
            <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors truncate">
              {model.name}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              <span className="flex items-center space-x-1 truncate">
                <Building2 className="w-3.5 h-3.5" />
                <span>{model.company}</span>
              </span>
              <span>•</span>
              <span className="flex items-center space-x-1 font-mono">
                <Calendar className="w-3.5 h-3.5" />
                <span>{model.year}</span>
              </span>
            </div>
          </div>
        </div>

        {/* Short description */}
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed mb-6 font-normal">
          {content.shortDesc}
        </p>
      </div>

      {/* Bottom Footer: Platform badges & Details link */}
      <div className="pt-4 border-t border-slate-100 dark:border-white/5 flex items-center justify-between">
        <div className="flex items-center space-x-1 text-[11px] text-slate-400 font-mono">
          <span>{model.platforms.slice(0, 3).join(', ')}</span>
          {model.platforms.length > 3 && <span>+{model.platforms.length - 3}</span>}
        </div>

        <div className="flex items-center space-x-1 text-xs font-semibold text-emerald-500 dark:text-emerald-400 group-hover:translate-x-1 transition-transform">
          <span>{t.card.viewDetails}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </div>
  );
};
