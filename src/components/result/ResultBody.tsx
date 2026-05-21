// src/components/result/ResultBody.tsx

import React from "react";
import { STEP } from "../../constants/resultStep";

import type { TarotCard } from "../../types/tarot";
import type { ResultData } from "../../types/result";

import ResultHeader from "./ResultHeader";
import ResultQuestion from "./ResultQuestion";
import ResultMeaning from "./ResultMeaning";
import ResultAdvice from "./ResultAdvice";
import ResultFlow from "./ResultFlow";
import ResultKeywords from "./ResultKeywords";
import ResultEnding from "./ResultEnding";
import ResultCTA from "./ResultCTA";

type Props = {
  showContent: boolean;

  step: number;

  mainCategory: string;

  subCategory?: string;

  questionType?: string;

  titleTyping: string;

  content: string;

  card: TarotCard;

  isReversed: boolean;

  result: ResultData;

  cardEnergy: string;

  specialResult?: {
    specialMessage?: string | null;
  };

  endingText: string;

  isPreparingShare: boolean;

  onSaveImage: () => void;

  onCopy: () => void;

  onCopyLink: () => void;

  onRetry: () => void;

  onHistory: () => void;

  onHome: () => void;
};

export default function ResultBody({
  showContent,
  step,

  mainCategory,
  subCategory,
  questionType,
  titleTyping,

  content,

  card,
  isReversed,

  result,
  cardEnergy,

  specialResult,
  endingText,

  isPreparingShare,

  onSaveImage,
  onCopy,
  onCopyLink,
  onRetry,
  onHistory,
  onHome,
}: Props) {
  return (
    <div className={`result-content ${showContent ? "show" : ""}`}>
      <ResultHeader
        mainCategory={mainCategory}
        subCategory={subCategory}
        questionType={questionType}
        titleTyping={titleTyping}
      />

      {/* question */}
      {step >= STEP.QUESTION && <ResultQuestion content={content} />}

      {/* meaning */}
      {step >= STEP.MEANING && (
        <ResultMeaning
          card={card}
          isReversed={isReversed}
          meaning={result.meaning}
        />
      )}

      {/* advice */}
      {step >= STEP.ADVICE && (
        <ResultAdvice advice={result.advice} cardEnergy={cardEnergy} />
      )}

      {specialResult?.specialMessage && (
        <div className="result-special-box reveal-up">
          <p>{specialResult.specialMessage}</p>
        </div>
      )}

      {/* flow */}
      {step >= STEP.ADVICE && <ResultFlow flow={result.flow} />}

      {/* keywords */}
      {step >= STEP.KEYWORD && <ResultKeywords keywords={result.keywords} />}

      {/* ending */}
      {step >= STEP.KEYWORD && <ResultEnding endingText={endingText} />}

      <div id="result-card"></div>

      {/* CTA */}
      {step >= STEP.CTA && (
        <ResultCTA
          isPreparingShare={isPreparingShare}
          onSaveImage={onSaveImage}
          onCopy={onCopy}
          onCopyLink={onCopyLink}
          onRetry={onRetry}
          onHistory={onHistory}
          onHome={onHome}
        />
      )}
    </div>
  );
}
