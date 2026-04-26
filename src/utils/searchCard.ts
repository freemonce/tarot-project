import { tarotCards } from "../data/tarot";
import { TarotCard } from "../types/tarot";

// 이름 검색 기능
export const searchCard = (keyword: string): TarotCard[] => {
  return tarotCards.filter((card) =>
    card.name.toLowerCase().includes(keyword.toLowerCase()),
  );
};
