// src/services/storage.ts

import { HistoryItem } from "../types/history";

const STORAGE_VERSION = 2;

export function getResults(): HistoryItem[] {
  const raw = safeStorage.get<HistoryItem[]>(KEYS.RESULTS, []);

  return raw.map(normalizeHistory);
}

export function saveResults(data: HistoryItem[]) {
  safeStorage.set(KEYS.RESULTS, data.map(normalizeHistory));
}

export function clearResults() {
  safeStorage.remove(KEYS.RESULTS);
}

/* =========================
   NORMALIZE / MIGRATE
========================= */
function normalizeHistory(item: any): HistoryItem {
  return {
    ...item,

    version: STORAGE_VERSION,

    meaning:
      item.meaning || item.card?.meaning || "카드 의미 데이터가 없습니다.",

    advice: item.advice || item.card?.advice || "조언 데이터가 없습니다.",

    keywords: item.keywords?.length ? item.keywords : item.card?.keywords || [],

    flow: Array.isArray(item.flow) ? item.flow : [],

    summary: item.summary || "현재 흐름을 분석 중입니다.",

    tone: item.tone || "neutral",

    favorite: item.favorite ?? false,
  };
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

    return parsed.map(normalizeHistory);
  } catch {
    throw new Error("INVALID_FILE");
  }
}

export function mergeResults(
  oldList: HistoryItem[],
  newList: HistoryItem[],
): HistoryItem[] {
  const map = new Map<string, HistoryItem>();

  [...oldList, ...newList].forEach((item) => {
    map.set(item.date, normalizeHistory(item));
  });

  return Array.from(map.values());
}
