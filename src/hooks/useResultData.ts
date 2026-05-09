import { useMemo } from "react";
import { CategoryKey, TarotCard } from "../types/tarot";

type ResultParams = {
  card: TarotCard;
  category: CategoryKey;
  subCategory?: string;
  questionType?: string;
  isReversed: boolean;
};

export type ResultData = {
  meaning: string;
  advice: string;
  keywords: string[];
};

// 1️⃣ 순수 함수
export function getResultData({
  card,
  category,
  subCategory,
  questionType,
  isReversed,
}: ResultParams): ResultData {
  const normal = card.categoryInterpretations ?? {};
  const reverse = card.reversedCategoryInterpretations ?? {};

  const selected = isReversed
    ? (reverse[category] ?? normal[category])
    : normal[category];

  let meaning =
    selected?.meaning ??
    (isReversed ? card.reversedMeaning : card.meaning) ??
    "";

  let advice =
    selected?.advice ?? (isReversed ? card.reversedAdvice : card.advice) ?? "";

  // 🔥 질문 타입별 해석 강화
  if (questionType === "상대의 마음은?") {
    meaning += " 상대의 감정 흐름이 아직 완전히 정리되지 않았습니다.";
  }

  if (questionType === "재회 가능성은?") {
    advice += " 과거 문제를 먼저 해결하는 접근이 중요합니다.";
  }

  if (subCategory === "연애") {
    advice += " 감정 표현을 지나치게 숨기지 않는 것이 좋습니다.";
  }

  const keywords =
    isReversed && card.reversedKeywords?.length
      ? card.reversedKeywords
      : (card.keywords ?? []);

  return { meaning, advice, keywords };
}

// 2️⃣ Hook
export function useResultData(params: ResultParams): ResultData {
  return useMemo(() => {
    return getResultData(params);
  }, [
    params.card,
    params.category,
    params.subCategory,
    params.questionType,
    params.isReversed,
  ]);
}
