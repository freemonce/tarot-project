// src/utils/history/createHistoryItem.ts

import type { HistoryItem, CategoryType } from "../../types/history";
import type { ResultData } from "../../types/result";
import type { TarotCard } from "../../types/tarot";

type Params = {
  card: TarotCard;

  content: string;

  category: CategoryType;

  subCategory?: string;
  questionType?: string;

  isReversed?: boolean;

  result: ResultData;
};

export function createHistoryItem({
  card,
  content,
  category,
  subCategory,
  questionType,
  isReversed = false,
  result,
}: Params): HistoryItem {
  return {
    id: crypto.randomUUID(),

    card,

    content,

    category,
    subCategory,
    questionType,

    meaning: result.meaning,
    advice: result.advice,

    keywords: result.keywords,

    flow: result.flow,

    tone: result.tone,
    summary: result.summary,

    isReversed,

    date: new Date().toISOString(),

    favorite: false,
  };
}
