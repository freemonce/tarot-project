// src/data/cardEnergyMap.ts

/* =========================================
   카드 감정 에너지 맵
========================================= */

/*
  역할:
  - 카드의 기본 감정 흐름 정의
  - specialCases에서 tone 보정
  - 결과 분위기 강화
  - 카드별 감성 연출 통일

  사용 예시:
  Death  → dark
  Star   → hope
  Moon   → anxiety
  Sun    → positive

  향후 확장:
  - 카드별 연출 효과
  - 배경색 변화
  - 사운드 연출
  - 특수 메시지 강화
  - 결과 문체 변화
*/

/* =========================================
   Energy Type
========================================= */

export type CardEnergy =
  | "hope"
  | "positive"
  | "neutral"
  | "anxiety"
  | "dark"
  | "shock";

/* =========================================
   Card Energy Map
========================================= */

export const cardEnergyMap: Record<string, CardEnergy> = {
  /* ---------- 희망 ---------- */
  Star: "hope",
  Sun: "positive",
  World: "positive",

  /* ---------- 불안 ---------- */
  Moon: "anxiety",
  HighPriestess: "anxiety",

  /* ---------- 어두움 ---------- */
  Death: "dark",
  Devil: "dark",
  Tower: "shock",

  /* ---------- 중립 ---------- */
  Fool: "neutral",
  Magician: "neutral",
  Hermit: "neutral",
};
