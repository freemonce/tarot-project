// src/services/getResultData.ts

import { CategoryKey, TarotCard } from "../types/tarot";

type ResultParams = {
  card: TarotCard;
  category: CategoryKey;
  isReversed: boolean;
};

export type ResultData = {
  meaning: string;
  advice: string;
  keywords: string[];
};

export function getResultData({
  card,
  category,
  isReversed,
}: ResultParams): ResultData {
  const normal = card.categoryInterpretations ?? {};
  const reverse = card.reversedCategoryInterpretations ?? {};

  const selected = isReversed
    ? (reverse[category] ?? normal[category])
    : normal[category];

  const meaning =
    selected?.meaning ??
    (isReversed ? card.reversedMeaning : card.meaning) ??
    "";

  const advice =
    selected?.advice ?? (isReversed ? card.reversedAdvice : card.advice) ?? "";

  const keywords =
    isReversed && card.reversedKeywords?.length
      ? card.reversedKeywords
      : (card.keywords ?? []);

  return {
    meaning,
    advice,
    keywords,
  };
}
