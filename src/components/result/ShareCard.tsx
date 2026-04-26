// src/components/result/ShareCard.tsx

import React from "react";
import "../../styles/components/result/ShareCard.css";

interface Props {
  cardName: string;
  cardImage: string;
  question: string;
  meaning: string;
  advice: string;
  keywords: string[];
  isReversed: boolean;
}

export default function ShareCard({
  cardName,
  cardImage,
  question,
  meaning,
  advice,
  keywords,
  isReversed,
}: Props) {
  return (
    <div
      className={`share-card-root ${isReversed ? "reversed-mode" : "normal-mode"}`}
    >
      <div className="share-bg-orb share-bg-orb-1"></div>
      <div className="share-bg-orb share-bg-orb-2"></div>
      <p className="share-brand">🔮 TAROT READING</p>

      {/* 컨텐츠를 감싸는 내부 래퍼 추가 */}
      <div className="share-main-content">
        <div className="share-question-box">
          <span>QUESTION</span>
          <p>{question}</p>
        </div>

        <div className="share-image-wrap">
          <img
            src={cardImage}
            alt={cardName}
            className={`share-card-image ${isReversed ? "reversed" : ""}`}
          />
        </div>

        <h2 className="share-card-title">
          {cardName} {isReversed && "(Reversed)"}
        </h2>

        <p className="share-card-meaning">{meaning}</p>

        <div className="share-keywords">
          {keywords.slice(0, 4).map((item) => (
            <span key={item}>#{item}</span>
          ))}
        </div>

        <div className="share-advice-box">
          <span>MESSAGE</span>
          <p>{advice}</p>
        </div>
      </div>

      <p className="share-footer">
        {isReversed ? "Reflection & Growth 🌙" : "Your Energy Today ✨"}
      </p>
    </div>
  );
}
