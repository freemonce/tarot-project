// src/types/storage.ts
import { TarotCard, CategoryKey } from "./tarot";

export interface SavedResult {
  id: string;
  card: TarotCard;
  content: string;
  category: CategoryKey;
  isReversed: boolean;
  date: string;
}
