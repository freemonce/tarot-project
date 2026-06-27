// src/types/history.ts

import { TarotCard } from "./tarot";
import type { ToneType } from "./tone";

export type CategoryType =
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "health"
  | "future"
  | "choice";

export type HistoryItem = {
  id?: string;
  card: TarotCard;

  content: string;
  category: CategoryType;
  date: string;

  favorite: boolean;
  isReversed?: boolean;

  summary: string;

  meaning: string;
  advice: string;
  keywords: string[];
  flow: string[];

  tone: ToneType;

  questionType?: string;
  subCategory?: string;
  version?: number;
};

export interface BackupData {
  version: number;
  exportedAt: string;
  results: HistoryItem[];
}
