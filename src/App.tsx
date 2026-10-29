import React, { useState, useMemo, useCallback } from 'react';
import { AI_MODELS } from './data/aiModels';
import { AIModel, Category } from './types';
import { useLanguage } from './hooks/useLanguage';
import { useTheme } from './hooks/useTheme';
import { useFavorites } from './hooks/useFavorites';
import { useComparison } from './hooks/useComparison';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SearchFilterBar } from './components/SearchFilterBar';
import { AICard } from './components/AICard';
import { CursorTooltip } from './components/CursorTooltip';
import { AIModal } from './components/AIModal';
import { AuthorModal } from './components/AuthorModal';
import { CompareModal } from './components/CompareModal';
import { LiveClockBadge } from './components/LiveClockBadge';
import { ScrollProgress } from './components/ScrollProgress';
import { Footer } from './components/Footer';
import { Sparkles, Inbox } from 'lucide-react';

export default function App() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { favorites, toggleFavorite, isFavorite } = useFavorites();
  const { compareList, toggleCompare, isInCompare, clearCompare } = useComparison();

  // Search & Filtering State
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [isFavoritesFilterActive, setIsFavoritesFilterActive] = useState(false);

  // Modals State
  const [activeModalModel, setActiveModalModel] = useState<AIModel | null>(null);
  const [isAuthorModalOpen, setIsAuthorModalOpen] = useState(false);
  const [isCompareModalOpen, setIsCompareModalOpen] = useState(false);

  // Cursor Tooltip State
  const [hoveredModel, setHoveredModel] = useState<AIModel | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  // Filtered AI Models
  const filteredModels = useMemo(() => {
    return AI_MODELS.filter((model) => {
      // Category filter
      if (selectedCategory !== 'all' && model.category !== selectedCategory) {
        return false;
      }

      // Favorites filter
      if (isFavoritesFilterActive && !favorites.includes(model.id)) {
        return false;
      }

      // Search query filter
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase().trim();
        const content = model[language];
        const matchName = model.name.toLowerCase().includes(query);
        const matchCompany = model.company.toLowerCase().includes(query);
        const matchShortDesc = content.shortDesc.toLowerCase().includes(query);
        const matchBadge = model.badge[language].toLowerCase().includes(query);

        return matchName || matchCompany || matchShortDesc || matchBadge;
      }

      return true;
    });
  }, [selectedCategory, isFavoritesFilterActive, favorites, searchQuery, language]);

  // Modal navigation (Prev / Next cycle)
  const handlePrevModel = useCallback(() => {
    if (!activeModalModel) return;
    const currentIndex = AI_MODELS.findIndex((m) => m.id === activeModalModel.id);
    const prevIndex = (currentIndex - 1 + AI_MODELS.length) % AI_MODELS.length;
    setActiveModalModel(AI_MODELS[prevIndex]);
  }, [activeModalModel]);

  const handleNextModel = useCallback(() => {
    if (!activeModalModel) return;
    const currentIndex = AI_MODELS.findIndex((m) => m.id === activeModalModel.id);
    const nextIndex = (currentIndex + 1) % AI_MODELS.length;
    setActiveModalModel(AI_MODELS[nextIndex]);
  }, [activeModalModel]);

  // Mouse hover handlers for cursor tooltip
  const handleCardMouseEnter = (model: AIModel, e: React.MouseEvent) => {
    setHoveredModel(model);
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleCardMouseMove = (e: React.MouseEvent) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleCardMouseLeave = () => {
    setHoveredModel(null);
  };

  const scrollToCatalog = () => {
    const catalogElement = document.getElementById('catalog-section');
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const resetAllFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setIsFavoritesFilterActive(false);
  };

  const isFiltered =
    searchQuery.trim().length > 0 || selectedCategory !== 'all' || isFavoritesFilterActive;

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100 bg-slate-50 text-slate-900 font-sans selection:bg-emerald-500 selection:text-white">
      {/* Top Scroll Indicator */}
      <ScrollProgress />

      {/* Header Navigation */}
      <Header
        language={language}
        onLanguageChange={setLanguage}
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAuthor={() => setIsAuthorModalOpen(true)}
        onOpenCompare={() => setIsCompareModalOpen(true)}
        compareCount={compareList.length}
        favoritesCount={favorites.length}
        onToggleFavoritesFilter={() => setIsFavoritesFilterActive((prev) => !prev)}
        isFavoritesFilterActive={isFavoritesFilterActive}
        t={t}
      />

      {/* Hero Showcase */}
      <Hero t={t} onScrollToCatalog={scrollToCatalog} />

      {/* Catalog & Filter Section */}
      <main id="catalog-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 w-full">
        {/* Search & Filter Controls */}
        <SearchFilterBar
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCategory={selectedCategory}
          onCategorySelect={setSelectedCategory}
          resultsCount={filteredModels.length}
          totalCount={AI_MODELS.length}
          onResetFilters={resetAllFilters}
          isFiltered={isFiltered}
          t={t}
        />

        {/* 10 AI Cards Grid */}
        <div className="mt-8">
          {filteredModels.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 sm:gap-6">
              {filteredModels.map((model, index) => (
                <AICard
                  key={model.id}
                  model={model}
                  language={language}
                  onSelect={(m) => {
                    setHoveredModel(null);
                    setActiveModalModel(m);
                  }}
                  isFavorite={isFavorite(model.id)}
                  onToggleFavorite={(id, e) => toggleFavorite(id)}
                  isInCompare={isInCompare(model.id)}
                  onToggleCompare={(id, e) => toggleCompare(id)}
                  onMouseEnter={handleCardMouseEnter}
                  onMouseMove={handleCardMouseMove}
                  onMouseLeave={handleCardMouseLeave}
                  t={t}
                  index={index}
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="p-12 text-center rounded-3xl glass-panel border border-dashed border-slate-300 dark:border-white/10 my-8">
              <div className="w-16 h-16 rounded-2xl bg-slate-100 dark:bg-white/5 flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Inbox className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t.noResultsTitle}
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 max-w-md mx-auto">
                {t.noResultsDesc}
              </p>
              <button
                onClick={resetAllFilters}
                className="mt-5 px-4 py-2 rounded-xl text-xs font-semibold bg-emerald-500 text-white shadow-md hover:bg-emerald-600 transition-colors"
              >
                {t.resetFilters}
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Floating Follow-Cursor Tooltip */}
      <CursorTooltip
        model={hoveredModel}
        cursorPos={cursorPos}
        language={language}
        t={t}
      />

      {/* Detailed Modal Window for Selected AI */}
      {activeModalModel && (
        <AIModal
          model={activeModalModel}
          onClose={() => setActiveModalModel(null)}
          onPrev={handlePrevModel}
          onNext={handleNextModel}
          language={language}
          t={t}
          isFavorite={isFavorite(activeModalModel.id)}
          onToggleFavorite={(id, e) => toggleFavorite(id)}
          isInCompare={isInCompare(activeModalModel.id)}
          onToggleCompare={(id, e) => toggleCompare(id)}
        />
      )}

      {/* Author Modal */}
      {isAuthorModalOpen && (
        <AuthorModal
          onClose={() => setIsAuthorModalOpen(false)}
          language={language}
          t={t}
        />
      )}

      {/* Compare Modal */}
      {isCompareModalOpen && (
        <CompareModal
          allModels={AI_MODELS}
          compareIds={compareList}
          onClose={() => setIsCompareModalOpen(false)}
          onClear={clearCompare}
          language={language}
          t={t}
        />
      )}

      {/* Fixed Bottom Right Live Clock & Date Badge */}
      <LiveClockBadge language={language} t={t} />

      {/* Global Footer */}
      <Footer t={t} onScrollToTop={scrollToTop} />
    </div>
  );
}
