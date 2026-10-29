import React from 'react';
import { Search, X, SlidersHorizontal, RotateCcw } from 'lucide-react';
import { Category } from '../types';
import { Translations } from '../i18n/translations';

interface SearchFilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: Category;
  onCategorySelect: (category: Category) => void;
  resultsCount: number;
  totalCount: number;
  onResetFilters: () => void;
  isFiltered: boolean;
  t: Translations;
}

export const SearchFilterBar: React.FC<SearchFilterBarProps> = ({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategorySelect,
  resultsCount,
  totalCount,
  onResetFilters,
  isFiltered,
  t,
}) => {
  const categoryKeys: Category[] = ['all', 'llm', 'search', 'image', 'open'];

  return (
    <div className="w-full space-y-4">
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
        {/* Search Input Box */}
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full pl-10 pr-10 py-2.5 rounded-2xl text-sm transition-all duration-200 border dark:border-white/10 dark:bg-slate-900/80 dark:text-white dark:placeholder-slate-400 bg-white border-slate-200 text-slate-900 placeholder-slate-400 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-slate-600 dark:hover:text-white transition-colors"
              title={t.clearSearch}
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Results counter & Reset button */}
        <div className="flex items-center justify-between md:justify-end space-x-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400">
          <div className="flex items-center space-x-1.5 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5 text-emerald-500" />
            <span>
              <strong className="text-slate-900 dark:text-white font-mono">{resultsCount}</strong> / {totalCount} {t.resultsCount}
            </span>
          </div>

          {isFiltered && (
            <button
              onClick={onResetFilters}
              className="inline-flex items-center space-x-1 text-xs text-rose-500 hover:text-rose-600 dark:hover:text-rose-400 font-medium transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>{t.resetFilters}</span>
            </button>
          )}
        </div>
      </div>

      {/* Category Pills */}
      <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
        {categoryKeys.map((catKey) => {
          const isSelected = selectedCategory === catKey;
          const label = t.categories[catKey];

          return (
            <button
              key={catKey}
              onClick={() => onCategorySelect(catKey)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                isSelected
                  ? 'bg-emerald-500 text-white border-emerald-500 shadow-md shadow-emerald-500/25 scale-102'
                  : 'dark:bg-white/5 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/10 bg-slate-100 hover:bg-slate-200 text-slate-700 border-slate-200'
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};
