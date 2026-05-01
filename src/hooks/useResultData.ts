import { useMemo } from "react";
import { CategoryKey, TarotCard } from "../types/tarot";

export type ResultData = {
  meaning: string;
  advice: string;
  keywords: string[];
};

// 1️⃣ 순수 함수
export function getResultData(
  card: TarotCard,
  category: CategoryKey,
  isReversed: boolean,
): ResultData {
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

  return { meaning, advice, keywords };
}

// 2️⃣ Hook
export function useResultData(
  card: TarotCard,
  category: CategoryKey,
  isReversed: boolean,
): ResultData {
  return useMemo(() => {
    return getResultData(card, category, isReversed);
  }, [card, category, isReversed]);
}
