import { tarotCards } from "../data/tarot";
import { CardType, TarotCard } from "../types/tarot";

// 카드 종류별 필터
export const getCardsByType = (type: CardType): TarotCard[] => {
  return tarotCards.filter((card) => card.type === type);
};
