import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'museomorph-recent-styles';
const MAX_RECENT = 8;

export interface RecentStyleEntry {
  id: string;
  displayName: string;
  group: string;
  timestamp: number;
}

export function useRecentStyles() {
  const [recentStyles, setRecentStyles] = useState<RecentStyleEntry[]>(() => {
    if (typeof window === 'undefined') return [];
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored) as RecentStyleEntry[];
        return Array.isArray(parsed) ? parsed.slice(0, MAX_RECENT) : [];
      }
    } catch {
      // Ignore parse errors
    }
    return [];
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recentStyles));
    } catch {
      // Ignore storage errors (quota exceeded, etc.)
    }
  }, [recentStyles]);

  const addRecentStyle = useCallback((entry: Omit<RecentStyleEntry, 'timestamp'>) => {
    setRecentStyles((prev) => {
      // Remove existing entry with same ID
      const filtered = prev.filter((item) => item.id !== entry.id);
      // Add new entry at the beginning
      const newEntry: RecentStyleEntry = {
        ...entry,
        timestamp: Date.now(),
      };
      return [newEntry, ...filtered].slice(0, MAX_RECENT);
    });
  }, []);

  const clearRecentStyles = useCallback(() => {
    setRecentStyles([]);
  }, []);

  return { recentStyles, addRecentStyle, clearRecentStyles };
}
