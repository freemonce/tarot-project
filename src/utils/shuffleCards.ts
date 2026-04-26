import { tarotCards } from "../data/tarot";
import { TarotCard } from "../types/tarot";

// 전체 셔플
export const shuffleCards = (): TarotCard[] => {
  const copied = [...tarotCards];

  return copied.sort(() => Math.random() - 0.5);
};
