import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'museomorph-favorite-styles';

export function useFavorites() {
  const [favorites, setFavorites] = useState<Set<string>>(() => {
    if (typeof window === 'undefined') return new Set();
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as string[];
        return new Set(Array.isArray(parsed) ? parsed : []);
      }
    } catch {
      // Ignore parse errors
    }
    return new Set();
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(Array.from(favorites)));
    } catch {
      // Ignore storage errors (quota exceeded, etc.)
    }
  }, [favorites]);

  const toggleFavorite = useCallback((styleId: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(styleId)) {
        next.delete(styleId);
      } else {
        next.add(styleId);
      }
      return next;
    });
  }, []);

  const isFavorite = useCallback((styleId: string) => {
    return favorites.has(styleId);
  }, [favorites]);

  const clearFavorites = useCallback(() => {
    setFavorites(new Set());
  }, []);

  return { favorites, toggleFavorite, isFavorite, clearFavorites };
}
