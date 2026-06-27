// src/data/tarot/index.ts

import { majorArcana } from "./majorArcana";
import { cupsInterpretations } from "./cups";
import { swordsInterpretations } from "./swords";
import { wandsInterpretations } from "./wands";
import { pentaclesInterpretations } from "./pentacles";
import type { TarotInterpretation } from "../../types/tarotInterpretation";

export const tarotData: Record<number, TarotInterpretation> = {
  ...majorArcana,
  ...cupsInterpretations,
  ...swordsInterpretations,
  ...wandsInterpretations,
  ...pentaclesInterpretations,
};
