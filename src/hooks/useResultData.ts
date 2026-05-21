// src/hooks/useResultData.ts

import { useMemo } from "react";

import type { CategoryKey, TarotCard } from "../types/tarot";

import { generateResult } from "../utils/result/generateResult";
import { buildResult } from "../utils/result/buildResult";

import { cardEnergyMap } from "../data/cardEnergyMap";

type Props = {
  card: TarotCard;

  safeCategory: CategoryKey;

  mainCategory: string;

  subCategory?: string;

  questionType?: string;

  isReversed: boolean;

  endingMessageMap: Record<string, string>;
};

export default function useResultData({
  card,
  safeCategory,
  mainCategory,
  subCategory,
  questionType,
  isReversed,
  endingMessageMap,
}: Props) {
  const result = useMemo(() => {
    return (
      generateResult({
        card,
        category: safeCategory,
        questionType: questionType ?? "",
        isReversed,
      }) ?? {
        meaning: "",
        advice: "",

        keywords: [],

        flow: [],

        tone: "neutral" as const,

        summary: "현재 흐름을 분석 중입니다.",

        special: "",
        toneStyle: undefined,

        emotionalLevel: 0,
        chance: 0,
      }
    );
  }, [card, safeCategory, questionType, isReversed]);

  const specialResult = buildResult({
    mainCategory,
    subCategory: subCategory ?? "",
    questionType: questionType ?? "",
    tone: result.tone,
  });

  const cardEnergy = cardEnergyMap[card.name] ?? "neutral";

  const endingText =
    endingMessageMap[safeCategory] ??
    "당신이 찾는 답은 이미 마음속에서 움직이고 있습니다.";

  return {
    result,
    specialResult,
    cardEnergy,
    endingText,
  };
}
