// src/utils/result/createShareData.ts

import type { TarotCard } from "../../types/tarot";
import type { ResultData } from "../../types/result";

export type ShareData = {
  cardName: string;
  cardImage: string;

  question: string;

  advice: string;
  meaning: string;
  keywords: string[];

  isReversed: boolean;
};

type Params = {
  card: TarotCard;
  content: string;
  result: ResultData;
  isReversed: boolean;
};

export default function createShareData({
  card,
  content,
  result,
  isReversed,
}: Params): ShareData {
  return {
    cardName: card.name,
    cardImage: card.image,

    question: content,

    advice: result.advice,
    meaning: result.meaning,
    keywords: result.keywords,

    isReversed,
  };
}
