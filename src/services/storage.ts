// src/services/storage.ts

import { HistoryItem } from "../types/history";

export function getResults(): HistoryItem[] {
  return safeStorage.get<HistoryItem[]>(KEYS.RESULTS, []);
}

export function saveResults(data: HistoryItem[]) {
  safeStorage.set(KEYS.RESULTS, data);
}

export function clearResults() {
  safeStorage.remove(KEYS.RESULTS);
}

const KEYS = {
  HISTORY: "tarot_history",
  RESULTS: "tarot_results",
} as const;

export type StorageKey = (typeof KEYS)[keyof typeof KEYS];

export const safeStorage = {
  get<T>(key: StorageKey, fallback: T): T {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : fallback;
      return parsed ?? fallback;
    } catch (error) {
      console.error("Storage Read Error:", error);
      return fallback;
    }
  },

  set<T>(key: StorageKey, value: T): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage Save Error:", error);
    }
  },

  remove(key: StorageKey): void {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Storage Remove Error:", error);
    }
  },

  clear(): void {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Storage Clear Error:", error);
    }
  },
};

export function importResults(fileContent: string): HistoryItem[] {
  try {
    const parsed = JSON.parse(fileContent);

    if (!Array.isArray(parsed)) throw new Error();
    if (!parsed.every((item) => item.card && item.date)) {
      throw new Error();
    }

    return parsed as HistoryItem[];
  } catch {
    throw new Error("INVALID_FILE");
  }
}

export function mergeResults(
  oldList: HistoryItem[],
  newList: HistoryItem[],
): HistoryItem[] {
  const merged = [...oldList, ...newList];

  return merged.filter(
    (v, i, arr) => arr.findIndex((x) => x.date === v.date) === i,
  );
}
