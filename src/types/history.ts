import { TarotCard } from "./tarot";

export type CategoryType =
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "health"
  | "future"
  | "choice";

export interface HistoryItem {
  id: string; // uuid 또는 timestamp
  card: TarotCard;
  content: string;
  category: CategoryType;
  date: string; // ISO 문자열
  favorite: boolean;
  isReversed: boolean;
}

export interface BackupData {
  version: number;
  exportedAt: string;
  results: HistoryItem[];
}
