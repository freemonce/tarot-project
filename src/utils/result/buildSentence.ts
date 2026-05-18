// src/utils/result/buildSentence.ts

export function buildSentence(parts: string[]): string {
  return parts
    .filter((text) => text.trim() !== "")
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}
