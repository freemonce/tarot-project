// src/types/tone.ts

import { ToneStyle } from "./result";

export type SpecialTone = {
  card?: string;
  questionType?: string;

  toneStyle: ToneStyle;
};
