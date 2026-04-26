import type { TarotCard, CategoryKey } from "./tarot";

export interface CardPageState {
  content: string;
  category: CategoryKey;
}

export interface WritePageState {
  content: string;
  category: CategoryKey;
}

export interface ResultPageState {
  card: TarotCard;
  content: string;
  category: CategoryKey;
  isReversed?: boolean;
  originRect?: DOMRect;
}
