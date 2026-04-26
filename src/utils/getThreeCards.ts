import { tarotCards } from "../data/tarot";
import { TarotCard } from "../types/tarot";

export const getThreeCards = (): TarotCard[] => {
  const copied = [...tarotCards];
  const result: TarotCard[] = [];

  while (result.length < 3) {
    const randomIndex = Math.floor(Math.random() * copied.length);
    const picked = copied.splice(randomIndex, 1)[0];
    result.push(picked);
  }

  return result;
};
