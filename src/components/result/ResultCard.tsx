import React from "react";
import type { TarotCard } from "../../types/tarot";

type Props = {
  card: TarotCard;
  cardRef: React.RefObject<HTMLDivElement | null>;
  cardName: string;
  isReversed?: boolean;
  handleMove: (e: React.MouseEvent<HTMLElement>) => void;
  handleLeave: () => void;
};

export default function ResultCard({
  card,
  cardRef,
  cardName,
  isReversed = false,
  handleMove,
  handleLeave,
}: Props) {
  return (
    <div
      ref={cardRef}
      className="result-card-wrap"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      <img
        src={card.image}
        alt={cardName}
        className="result-card-img"
        style={{
          transform: isReversed ? "rotate(180deg)" : "rotate(0deg)",
        }}
      />
    </div>
  );
}
