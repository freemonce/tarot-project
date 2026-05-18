// src/types/specialCase.ts

export type SpecialCaseItem = {
  type: string;
  texts: string[];
};

export type SpecialCasesMap = {
  [cardName: string]: SpecialCaseItem[];
};
