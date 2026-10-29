import { useState } from 'react';

export function useComparison() {
  const [compareList, setCompareList] = useState<string[]>([]);

  const toggleCompare = (id: string) => {
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= 2) {
        // Replace second item if already 2 selected
        return [prev[0], id];
      }
      return [...prev, id];
    });
  };

  const isInCompare = (id: string) => compareList.includes(id);

  const clearCompare = () => setCompareList([]);

  return {
    compareList,
    toggleCompare,
    isInCompare,
    clearCompare,
  };
}
