// src/data/result/specialCases/index.ts

import { loveSpecialCases } from "./love";
import { careerSpecialCases } from "./career";
import { moneySpecialCases } from "./money";
import { mindSpecialCases } from "./mind";
import { majorSpecialCases } from "./major";

export const specialCases = {
  ...loveSpecialCases,
  ...careerSpecialCases,
  ...moneySpecialCases,
  ...mindSpecialCases,
  ...majorSpecialCases,
};
