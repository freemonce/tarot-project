// src/data/resultData.ts

import { loveFlow } from "../data/result/love";
import { moneyFlow } from "../data/result/money";
import { careerFlow } from "./result/career";
import { QuestionFlow } from "../types/result";
import { CategoryKey } from "../types/tarot";
import { mindFlow } from "./result/mind";
import { relationFlow } from "../data/result/relation";
import { futureFlow } from "../data/result/future";

export const resultDataMap: Record<
  CategoryKey,
  Record<string, QuestionFlow>
> = {
  love: loveFlow,
  money: moneyFlow,
  career: careerFlow,
  mind: mindFlow,
  relation: relationFlow,
  future: futureFlow,

  health: {},
  choice: {},
};
