// src/components/result/ResultCard.tsx

import React, { CSSProperties } from "react";
import type { TarotCard } from "../../types/tarot";

type Props = {
  card: TarotCard;
  cardRef: React.RefObject<HTMLDivElement | null>;
  isReversed: boolean;
  showCard: boolean;
  tiltStyle: CSSProperties;

  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
};

export default function ResultCard({
  card,
  cardRef,
  isReversed,
  showCard,
  tiltStyle,
  onMouseMove,
  onMouseLeave,
}: Props) {
  return (
    <div className="card-stage">
      <div className="card-float-layer">
        <div className={`card-rotate-layer ${isReversed ? "reversed" : ""}`}>
          <div
            ref={cardRef}
            className={`result-card ${showCard ? "show" : ""}`}
            style={tiltStyle}
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
          >
            <img src={card.image} alt={card.name} className="result-card-img" />

            <div className="card-shine" />
          </div>
        </div>
      </div>
    </div>
  );
}
