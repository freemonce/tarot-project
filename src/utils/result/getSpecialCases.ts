// src/utils/result/getSpecialCases.ts

import { specialCases } from "../../data/result/specialCases";

type Params = {
  card: string;
  questionType: string;
};

export function getSpecialCases({ card, questionType }: Params): string[] {
  const cases = specialCases[card];

  if (!cases) return [];

  const matched = cases.find((item) => item.type === questionType);

  return matched?.texts ?? [];
}
