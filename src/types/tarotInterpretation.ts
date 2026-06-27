// src/types/tarotInterpretation.ts

import type { CategoryKey } from "./tarot";
import type { ToneType } from "./tone";

export type InterpretationBlock = {
  meaning: string;

  advice: string;

  keywords: string[];

  tone: ToneType;

  emotionalLevel: number;

  chance: number;
};

export type DirectionInterpretation = {
  general: InterpretationBlock;

  categories?: Partial<Record<CategoryKey, InterpretationBlock>>;
};

export type TarotInterpretation = {
  upright: DirectionInterpretation;

  reversed: DirectionInterpretation;
};
