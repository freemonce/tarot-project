// src/types/tarot.ts
export type CardType = "Major" | "Cups" | "Wands" | "Swords" | "Pents";

export type CategoryKey =
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "health"
  | "future"
  | "choice";

// UI 전용 (새로 추가)
export type UICategoryKey = "love" | "career" | "money" | "relation" | "self";

export interface TarotInterpretation {
  meaning: string;
  advice: string;
}

export interface TarotCard {
  id: number; // 카드 고유번호
  name: string; // 한글 포함 카드명
  englishName: string; // 영문 카드명
  type: CardType; // "Major" | "Cups" | "Wands" | "Swords" | "Pents"
  number: number; // 카드 숫자

  keywords: string[]; // 핵심 키워드 목록
  reversedKeywords?: string[]; // 리버스 핵심 키워드 목록

  image: string; // 카드 이미지 경로

  meaning: string; // 기본 정방향 해석
  advice: string; // 기본 조언 메세지

  shortMeaning?: string; // 짧은 한줄 요약

  reversedMeaning?: string; // 역방향 해석
  reversedAdvice?: string; // 역방향 조언

  yesNo?: "Yes" | "No" | "Maybe"; // 예/아니오 질문용 결과

  element?: "Fire" | "Water" | "Air" | "Earth"; // 원소 속성
  astrology?: string; // 별자리 / 행성 / 점성술 연결값
  moodTags?: string[]; // 감정 태그 (불안, 희망, 변화 등)

  powerScore?: number; // 카드 에너지 점수 (1~100 추천)

  categoryInterpretations?: Partial<Record<CategoryKey, TarotInterpretation>>;
  // 카테고리별 상세 해석
  reversedCategoryInterpretations?: Partial<
    Record<CategoryKey, TarotInterpretation>
  >;
  // 리버스 카테고리별 상세 해석
}
