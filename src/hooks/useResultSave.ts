// src/hooks/useResultSave.ts

import { useEffect, useRef } from "react";

import { saveResult } from "../services/resultService";
import { createHistoryItem } from "../utils/history/createHistoryItem";
import type { CategoryType } from "../types/category";
import { ResultPageState } from "../types/navigation";
import { TarotCard } from "../types/tarot";
import { ResultData } from "../types/result";

type Params = {
  state: ResultPageState;

  card: TarotCard;
  content: string;

  safeCategory: CategoryType;

  isReversed: boolean;

  result: ResultData;
};

export default function useResultSave({
  state,
  card,
  content,
  safeCategory,
  isReversed,
  result,
}: Params) {
  const savedRef = useRef(false);

  useEffect(() => {
    if (!state || savedRef.current) return;

    savedRef.current = true;

    const historyItem = createHistoryItem({
      card,
      content,

      category: safeCategory,

      subCategory: state.subCategory,
      questionType: state.questionType,

      isReversed,

      result,
    });

    saveResult(historyItem);
  }, [state, card, content, safeCategory, isReversed, result]);
}
