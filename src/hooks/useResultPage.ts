// src/hooks/useResultPage.ts

import { useMemo } from "react";

import { tarotCards } from "../data/tarot";

import type { CategoryKey, TarotCard } from "../types/tarot";
import type { ResultPageState } from "../types/navigation";

import useResultData from "./useResultData";

const CATEGORY_KEYS = [
  "love",
  "career",
  "money",
  "mind",
  "relation",
  "health",
  "future",
  "choice",
] as const;

export default function useResultPage(
  state: ResultPageState,
  endingMessageMap: Record<string, string>,
) {
  const content = state?.content ?? "";

  const mainCategory = CATEGORY_KEYS.includes(
    state?.mainCategory as CategoryKey,
  )
    ? (state?.mainCategory as CategoryKey)
    : "love";

  const isReversed = state?.isReversed ?? false;

  const fallbackCard: TarotCard = tarotCards[0];

  const card = useMemo(() => {
    return state?.card ?? fallbackCard;
  }, [state]);

  const safeCategory: CategoryKey = CATEGORY_KEYS.includes(
    mainCategory as CategoryKey,
  )
    ? (mainCategory as CategoryKey)
    : "love";

  const { result, specialResult, cardEnergy, endingText } = useResultData({
    card,
    safeCategory,
    mainCategory,
    subCategory: state.subCategory,
    questionType: state.questionType,
    isReversed,
    endingMessageMap,
  });

  return {
    content,

    mainCategory,
    safeCategory,

    isReversed,

    card,

    result,
    specialResult,

    cardEnergy,
    endingText,
  };
}
