import { tarotCards } from "../data/tarot";
import { TarotCard } from "../types/tarot";

// 랜덤 뽑기
export const getRandomCard = (): TarotCard => {
  const randomIndex = Math.floor(Math.random() * tarotCards.length);
  return tarotCards[randomIndex];
};
