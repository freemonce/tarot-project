// src/utils/result/getToneStyle.ts

import { specialTone } from "../../data/result/specialTone";
import { ToneStyle } from "../../types/result";

type Params = {
  card: string;
  questionType: string;
};

export function getToneStyle({
  card,
  questionType,
}: Params): ToneStyle | undefined {
  const matched = specialTone.find((item) => {
    if (item.card && item.card === card) {
      return true;
    }

    if (item.questionType && item.questionType === questionType) {
      return true;
    }

    return false;
  });

  return matched?.toneStyle;
}
