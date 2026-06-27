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

  // 디버그
  console.log("========== RESULT DEBUG ==========");
  console.log("card:", card.name);
  console.log("category:", category);
  console.log("isReversed:", isReversed);
  console.log("normal:", normal);
  console.log("reverse:", reverse);
  console.log("selected:", selected);
  console.log("==================================");

  return {
    meaning,
    advice,
    keywords,
  };
}
