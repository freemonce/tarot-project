// src/components/result/ResultMeaning.tsx

import type { TarotCard } from "../../types/tarot";

type Props = {
  card: TarotCard;
  isReversed: boolean;
  meaning: string;
};

export default function ResultMeaning({ card, isReversed, meaning }: Props) {
  return (
    <section className="section-box reveal-up">
      <h3>
        {card.name}
        {isReversed ? " (역방향)" : ""}
      </h3>

      {meaning
        .split(".")
        .filter((line) => line.trim() !== "")
        .map((line, i) => (
          <p
            key={i}
            className="line-appear"
            style={{ animationDelay: `${i * 0.4}s` }}
          >
            {line}.
          </p>
        ))}
    </section>
  );
}
