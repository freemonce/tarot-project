// src/hooks/useResultData.ts

import { useMemo } from "react";

import type { CategoryKey, TarotCard } from "../types/tarot";

import { buildResult } from "../utils/result/buildResult";

import { cardEnergyMap } from "../data/cardEnergyMap";
import { tarotData } from "../data/tarot/index";

import { generateResult } from "../utils/result/generateResult";

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
    // 기존 AI 스타일 결과
    const baseResult = generateResult({
      card,
      category: safeCategory,
      questionType: questionType ?? "",
      isReversed,
    });

    // 새 해석 데이터

    const interpretation = tarotData[card.id];

    // 데이터 없을 때 fallback
    if (!interpretation) {
      return {
        ...baseResult,

        meaning: "해석 데이터를 준비 중입니다.",

        advice: "현재 흐름을 천천히 바라보는 시간이 필요합니다.",

        keywords: baseResult.keywords ?? [],

        flow: baseResult.flow ?? [],

        tone: baseResult.tone ?? "neutral",

        summary:
          baseResult.summary ?? "현재 흐름을 천천히 바라보는 것이 중요합니다.",

        special: baseResult.special ?? "",

        toneStyle: baseResult.toneStyle,

        emotionalLevel: baseResult.emotionalLevel ?? 0,

        chance: baseResult.chance ?? 0,
      };
    }

    const direction = isReversed
      ? interpretation.reversed
      : interpretation.upright;

    const categoryResult = direction.categories?.[safeCategory];

    const finalResult = categoryResult ?? direction.general;

    // 기존 결과 + 새 meaning/advice 덮어쓰기
    return {
      ...baseResult,

      meaning: finalResult.meaning,

      advice: finalResult.advice,
    };
  }, [card, safeCategory, questionType, isReversed]);

  const specialResult = buildResult({
    mainCategory,

    subCategory: subCategory ?? "",

    questionType: questionType ?? "",

    tone: result.tone ?? "neutral",
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
