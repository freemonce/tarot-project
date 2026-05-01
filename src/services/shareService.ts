import type { TarotCard } from "../types/tarot";

type ShareParams = {
  card: TarotCard;
  content: string;
  meaning: string;
  advice: string;
  isReversed: boolean;
};

export function buildShareText({
  card,
  content,
  meaning,
  advice,
  isReversed,
}: ShareParams) {
  const reverseMark = isReversed ? " ↻" : "";

  return `🔮 ${card.name}${reverseMark}

질문:
${content}

해석:
${meaning}

조언:
${advice}`;
}

export async function copyToClipboard(text: string) {
  await navigator.clipboard.writeText(text);
}
