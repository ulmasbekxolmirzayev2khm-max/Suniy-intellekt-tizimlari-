import React, { useState, useEffect } from 'react';
import {
  X,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Layers,
  ShieldCheck,
  Copy,
  Check,
  Calendar,
  Building2,
  DollarSign,
  Smartphone,
  Info,
  Heart,
  Scale,
  Code,
  GraduationCap,
  Briefcase,
  Megaphone,
  FileText,
  Search,
  Languages,
  Lightbulb,
  Video,
  Music,
  Palette,
  Globe,
  Bug,
  BarChart2,
  FileSpreadsheet,
  Presentation,
  Users,
  Mail,
  Monitor,
  Image as ImageIcon,
  Flame,
  TrendingUp,
  Smile,
  Compass,
  Eye,
  Zap,
  Cpu,
  Calculator,
  Server,
  CheckSquare,
  FileCode,
  ShoppingBag,
  HelpCircle,
  Newspaper,
  Home,
  Shirt,
  Camera,
  MessageCircle,
  Sliders,
  Bot,
  Shield,
} from 'lucide-react';
import { AIModel, Language } from '../types';
import { Translations } from '../i18n/translations';
import { AILogo } from './AILogo';

interface AIModalProps {
  model: AIModel;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  language: Language;
  t: Translations;
  isFavorite: boolean;
  onToggleFavorite: (id: string, e: React.MouseEvent) => void;
  isInCompare: boolean;
  onToggleCompare: (id: string, e: React.MouseEvent) => void;
}

export const AIModal: React.FC<AIModalProps> = ({
  model,
  onClose,
  onPrev,
  onNext,
  language,
  t,
  isFavorite,
  onToggleFavorite,
  isInCompare,
  onToggleCompare,
}) => {
  const [activeTab, setActiveTab] = useState<'usecases' | 'requirements' | 'prompts'>('usecases');
  const [copiedPromptId, setCopiedPromptId] = useState<number | null>(null);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  // Keyboard navigation: Esc to close, ArrowLeft / ArrowRight to switch models
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        onPrev();
      } else if (e.key === 'ArrowRight') {
        onNext();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  const copyToClipboard = async (id: number, text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPromptId(id);
      setTimeout(() => {
        setCopiedPromptId(null);
      }, 2000);
    } catch {
      // fallback if clipboard API fails
      const textarea = document.createElement('textarea');
      textarea.value = text;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedPromptId(id);
      setTimeout(() => setCopiedPromptId(null), 2000);
    }
  };

  const content = model[language];

  // Helper to map icon names to Lucide icons
  const renderIcon = (iconName: string) => {
    const icons: Record<string, React.ReactNode> = {
      Code: <Code className="w-5 h-5" />,
      GraduationCap: <GraduationCap className="w-5 h-5" />,
      Briefcase: <Briefcase className="w-5 h-5" />,
      Megaphone: <Megaphone className="w-5 h-5" />,
      FileText: <FileText className="w-5 h-5" />,
      Search: <Search className="w-5 h-5" />,
      Languages: <Languages className="w-5 h-5" />,
      Lightbulb: <Lightbulb className="w-5 h-5" />,
      Video: <Video className="w-5 h-5" />,
      Music: <Music className="w-5 h-5" />,
      Palette: <Palette className="w-5 h-5" />,
      Globe: <Globe className="w-5 h-5" />,
      Bug: <Bug className="w-5 h-5" />,
      BarChart2: <BarChart2 className="w-5 h-5" />,
      FileSpreadsheet: <FileSpreadsheet className="w-5 h-5" />,
      Presentation: <Presentation className="w-5 h-5" />,
      Users: <Users className="w-5 h-5" />,
      Mail: <Mail className="w-5 h-5" />,
      Monitor: <Monitor className="w-5 h-5" />,
      Image: <ImageIcon className="w-5 h-5" />,
      Flame: <Flame className="w-5 h-5" />,
      TrendingUp: <TrendingUp className="w-5 h-5" />,
      Smile: <Smile className="w-5 h-5" />,
      Compass: <Compass className="w-5 h-5" />,
      Eye: <Eye className="w-5 h-5" />,
      Zap: <Zap className="w-5 h-5" />,
      Cpu: <Cpu className="w-5 h-5" />,
      Calculator: <Calculator className="w-5 h-5" />,
      Server: <Server className="w-5 h-5" />,
      CheckSquare: <CheckSquare className="w-5 h-5" />,
      FileCode: <FileCode className="w-5 h-5" />,
      ShoppingBag: <ShoppingBag className="w-5 h-5" />,
      HelpCircle: <HelpCircle className="w-5 h-5" />,
      Newspaper: <Newspaper className="w-5 h-5" />,
      Home: <Home className="w-5 h-5" />,
      Shirt: <Shirt className="w-5 h-5" />,
      Camera: <Camera className="w-5 h-5" />,
      MessageCircle: <MessageCircle className="w-5 h-5" />,
      Sliders: <Sliders className="w-5 h-5" />,
      Bot: <Bot className="w-5 h-5" />,
      Shield: <Shield className="w-5 h-5" />,
    };

    return icons[iconName] || <Sparkles className="w-5 h-5" />;
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xl flex items-center justify-center p-3 sm:p-5 md:p-8 animate-in fade-in duration-200">
      {/* Click outside backdrop */}
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      {/* Main Modal Window */}
      <div className="relative w-full max-w-5xl rounded-3xl overflow-hidden glass-panel border border-slate-200/80 dark:border-white/15 dark:bg-slate-900/95 bg-white text-slate-900 dark:text-white shadow-2xl z-10 max-h-[92vh] flex flex-col my-auto">
        {/* Top Header Banner with dynamic brand gradient */}
        <div
          className="relative px-6 py-6 sm:px-8 sm:py-8 border-b border-slate-200 dark:border-white/10"
          style={{
            background: `linear-gradient(135deg, ${model.accentColor}25, transparent 75%)`,
          }}
        >
          {/* Top Bar: Prev/Next, Status controls, Close button */}
          <div className="flex items-center justify-between mb-4">
            {/* Prev / Next navigation */}
            <div className="flex items-center space-x-1">
              <button
                onClick={onPrev}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white dark:bg-white/5 bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:border-white/10 transition-colors flex items-center space-x-1 text-xs font-semibold"
                title={`${t.modal.prev} (←)`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{t.modal.prev}</span>
              </button>
              <button
                onClick={onNext}
                className="p-2 rounded-xl text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white dark:bg-white/5 bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:border-white/10 transition-colors flex items-center space-x-1 text-xs font-semibold"
                title={`${t.modal.next} (→)`}
              >
                <span className="hidden sm:inline">{t.modal.next}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Quick action buttons & Close */}
            <div className="flex items-center space-x-2">
              {/* Compare toggle */}
              <button
                onClick={(e) => onToggleCompare(model.id, e)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-medium border transition-all ${
                  isInCompare
                    ? 'bg-cyan-500/20 border-cyan-500 text-cyan-600 dark:text-cyan-400'
                    : 'dark:border-white/10 dark:bg-white/5 bg-slate-100 border-slate-200 text-slate-700 dark:text-slate-300'
                }`}
                title={t.card.addToCompare}
              >
                <Scale className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">{isInCompare ? t.card.removeFromCompare : t.card.addToCompare}</span>
              </button>

              {/* Favorite toggle */}
              <button
                onClick={(e) => onToggleFavorite(model.id, e)}
                className={`p-2 rounded-xl border transition-all ${
                  isFavorite
                    ? 'bg-rose-500/20 border-rose-500 text-rose-500'
                    : 'dark:border-white/10 dark:bg-white/5 bg-slate-100 border-slate-200 text-slate-700 dark:text-slate-300'
                }`}
                title={isFavorite ? t.card.removeFromFavorites : t.card.addToFavorites}
              >
                <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              </button>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-100 hover:bg-slate-200 dark:bg-white/5 dark:hover:bg-white/15 border border-slate-200 dark:border-white/10 transition-colors"
                title={t.modal.closeEsc}
                aria-label={t.modal.closeEsc}
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Model Identification Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-4">
              <AILogo id={model.id} name={model.name} accentColor={model.accentColor} size="xl" />
              <div>
                <div className="flex items-center space-x-2.5">
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                    {model.name}
                  </h2>
                  <span
                    className="text-xs px-3 py-1 rounded-full font-mono font-bold tracking-wide uppercase border"
                    style={{
                      backgroundColor: `${model.accentColor}20`,
                      borderColor: `${model.accentColor}40`,
                      color: model.accentColor,
                    }}
                  >
                    {model.badge[language]}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1.5">
                  <span className="flex items-center space-x-1 font-medium">
                    <Building2 className="w-4 h-4 text-emerald-500" />
                    <span>{model.company}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 font-mono">
                    <Calendar className="w-4 h-4 text-teal-500" />
                    <span>{model.year}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center space-x-1 font-mono">
                    <Smartphone className="w-4 h-4 text-cyan-500" />
                    <span>{model.platforms.join(', ')}</span>
                  </span>
                </div>
              </div>
            </div>

            {/* Official Website Button */}
            <a
              href={model.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-2 px-5 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold text-white shadow-lg transition-all hover:scale-105 active:scale-95 shrink-0"
              style={{
                backgroundColor: model.accentColor,
                boxShadow: `0 8px 20px -4px ${model.accentColor}50`,
              }}
            >
              <span>{t.modal.websiteBtn}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Scrollable Content Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8 space-y-8">
          {/* Section 1: Detailed Overview (2-3 paragraphs) */}
          <div className="space-y-3">
            <h3 className="text-base sm:text-lg font-bold tracking-tight text-slate-900 dark:text-white flex items-center space-x-2">
              <Info className="w-4 h-4 text-emerald-500" />
              <span>{t.modal.overview}</span>
            </h3>
            <div className="space-y-3 text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              {content.fullDescription.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Section 2: Core Capabilities & Strengths / Limitations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Capabilities (6-8 items) */}
            <div className="p-5 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3.5 flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-500" />
                <span>{t.modal.capabilities}</span>
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {content.capabilities.map((cap, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Strengths & Limitations */}
            <div className="space-y-4">
              {/* Strengths */}
              <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-emerald-500/5 bg-emerald-50/60 border-emerald-200 dark:border-emerald-500/20">
                <h4 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 mb-2.5 flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{t.modal.strengths}</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {content.strengths.map((str, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-emerald-500 font-bold">•</span>
                      <span>{str}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Limitations */}
              <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-rose-500/5 bg-rose-50/60 border-rose-200 dark:border-rose-500/20">
                <h4 className="text-sm font-bold text-rose-700 dark:text-rose-400 mb-2.5 flex items-center space-x-2">
                  <AlertTriangle className="w-4 h-4" />
                  <span>{t.modal.limitations}</span>
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  {content.limitations.map((lim, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-rose-500 font-bold">•</span>
                      <span>{lim}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Section 3: Pricing structure & disclaimer */}
          <div className="p-5 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3 flex items-center space-x-2">
              <DollarSign className="w-4 h-4 text-emerald-500" />
              <span>{t.modal.pricing}</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-white/5 shadow-sm">
                <div className="font-semibold text-slate-500 dark:text-slate-400 text-xs mb-1">
                  {t.modal.freeTier}
                </div>
                <div className="font-medium text-slate-900 dark:text-white">
                  {content.pricing.freeTier}
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-white dark:bg-slate-800 border border-slate-200/60 dark:border-white/5 shadow-sm">
                <div className="font-semibold text-slate-500 dark:text-slate-400 text-xs mb-1">
                  {t.modal.paidTier}
                </div>
                <div className="font-medium text-slate-900 dark:text-white">
                  {content.pricing.paidTier}
                </div>
              </div>
            </div>
            <p className="mt-3 text-xs text-slate-400 dark:text-slate-500 italic">
              {content.pricing.note || t.modal.pricingNote}
            </p>
          </div>

          {/* Section 4: Three Interactive Tabs */}
          <div className="pt-2 border-t border-slate-200 dark:border-white/10">
            {/* Tab Navigation Buttons */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <button
                onClick={() => setActiveTab('usecases')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'usecases'
                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25 scale-102'
                    : 'dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Layers className="w-4 h-4" />
                <span>{t.modal.tabUseCases}</span>
              </button>

              <button
                onClick={() => setActiveTab('requirements')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'requirements'
                    ? 'bg-teal-500 text-white shadow-md shadow-teal-500/25 scale-102'
                    : 'dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <ShieldCheck className="w-4 h-4" />
                <span>{t.modal.tabRequirements}</span>
              </button>

              <button
                onClick={() => setActiveTab('prompts')}
                className={`flex items-center space-x-2 px-4 py-2.5 rounded-2xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === 'prompts'
                    ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/25 scale-102'
                    : 'dark:bg-white/5 dark:text-slate-300 dark:hover:bg-white/10 bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <Sparkles className="w-4 h-4" />
                <span>{t.modal.tabPrompts}</span>
                <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-mono font-bold bg-white/20">
                  10
                </span>
              </button>
            </div>

            {/* TAB 1: Use Cases & Domains (8 practical fields) */}
            {activeTab === 'usecases' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.modal.useCasesTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {t.modal.useCasesDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
                  {content.useCases.map((uc) => (
                    <div
                      key={uc.id}
                      className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200 hover:border-emerald-500/40 transition-colors flex flex-col justify-between"
                    >
                      <div>
                        <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-3">
                          {renderIcon(uc.icon)}
                        </div>
                        <div className="font-bold text-sm text-slate-900 dark:text-white mb-1.5">
                          {uc.title}
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          {uc.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 2: Requirements, Criteria & Ethics Checklist */}
            {activeTab === 'requirements' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.modal.requirementsTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {t.modal.requirementsDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Technical requirements */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
                      {t.modal.reqSections.technical}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.technical.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Registration requirements */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-teal-600 dark:text-teal-400 mb-2">
                      {t.modal.reqSections.registration}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.registration.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Restrictions & Boundaries */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
                      {t.modal.reqSections.restrictions}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.restrictions.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-2">
                      {t.modal.reqSections.pricingTiers}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.pricingTiers.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <DollarSign className="w-3.5 h-3.5 text-cyan-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Security & Confidentiality */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
                      {t.modal.reqSections.security}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.security.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <ShieldCheck className="w-3.5 h-3.5 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Ethics & Effective Practice */}
                  <div className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200">
                    <div className="font-bold text-xs uppercase tracking-wider text-purple-600 dark:text-purple-400 mb-2">
                      {t.modal.reqSections.ethics}
                    </div>
                    <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                      {content.requirements.ethics.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <Sparkles className="w-3.5 h-3.5 text-purple-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 3: Exactly 10 Productivity Prompts */}
            {activeTab === 'prompts' && (
              <div className="space-y-4 animate-in fade-in duration-200">
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    {t.modal.promptsTitle}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {t.modal.promptsDesc}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-3.5">
                  {content.prompts.map((p) => {
                    const isCopied = copiedPromptId === p.id;

                    return (
                      <div
                        key={p.id}
                        className="p-4 rounded-2xl border dark:border-white/10 dark:bg-white/5 bg-slate-50 border-slate-200 hover:border-cyan-500/40 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="w-6 h-6 rounded-lg bg-cyan-500/10 text-cyan-500 font-mono text-xs font-bold flex items-center justify-center">
                              #{p.id}
                            </span>
                            <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded-full bg-slate-200/70 dark:bg-white/10 text-slate-700 dark:text-slate-300">
                              {p.category}
                            </span>
                            <span className="font-bold text-sm text-slate-900 dark:text-white">
                              {p.title}
                            </span>
                          </div>

                          <button
                            onClick={() => copyToClipboard(p.id, p.prompt)}
                            className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                              isCopied
                                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/25'
                                : 'dark:bg-white/10 dark:hover:bg-white/20 bg-slate-200 hover:bg-slate-300 text-slate-800 dark:text-white'
                            }`}
                          >
                            {isCopied ? (
                              <>
                                <Check className="w-3.5 h-3.5" />
                                <span>{t.modal.copied}</span>
                              </>
                            ) : (
                              <>
                                <Copy className="w-3.5 h-3.5" />
                                <span>{t.modal.copyPrompt}</span>
                              </>
                            )}
                          </button>
                        </div>

                        <div className="relative mt-2 p-3 rounded-xl dark:bg-slate-950/70 bg-white border border-slate-200 dark:border-white/5 font-mono text-xs text-slate-700 dark:text-slate-300 whitespace-pre-wrap leading-relaxed select-all">
                          {p.prompt}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
