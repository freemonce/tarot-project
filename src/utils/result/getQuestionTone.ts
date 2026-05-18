// src/utils/result/getQuestionTone.ts

export type QuestionTone = "hope" | "warning" | "emotion" | "neutral";

export function getQuestionTone(questionType: string): QuestionTone {
  if (!questionType) return "neutral";

  if (questionType.includes("주의") || questionType.includes("조심")) {
    return "warning";
  }

  if (
    questionType.includes("가능") ||
    questionType.includes("기회") ||
    questionType.includes("합격")
  ) {
    return "hope";
  }

  if (questionType.includes("속마음") || questionType.includes("감정")) {
    return "emotion";
  }

  return "neutral";
}
