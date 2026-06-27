// src/pages/Result.tsx

import React, { useRef, useState, CSSProperties } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import type { ResultPageState } from "../types/navigation";

import Button from "../components/Button";

import "../styles/pages/Result.css";

import useResultTimeline from "../hooks/useResultTimeline";
import useCardAnimation from "../hooks/useCardAnimation";
import useResultClosing from "../hooks/useResultClosing";
import useCardTilt from "../hooks/useCardTilt";

import useToast from "../hooks/useToast";

import ResultCard from "../components/result/ResultCard";
import ResultSharePortal from "../components/result/ResultSharePortal";

import useResultActions from "../hooks/useResultActions";
import ResultBody from "../components/result/ResultBody";
import useResultPage from "../hooks/useResultPage";
import useResultReveal from "../hooks/useResultReveal";
import useResultDevice from "../hooks/useResultDevice";

import useResultSave from "../hooks/useResultSave";
import createShareData from "../utils/result/createShareData";

/* =====================================
   Ending Message
===================================== */
const ENDING_MESSAGE: Record<string, string> = {
  love: "마음은 이미 답을 알고 있습니다. 솔직함이 흐름을 바꿉니다.",
  career: "기회는 준비된 사람에게 다가옵니다. 지금의 선택이 방향이 됩니다.",
  money: "돈의 흐름은 판단에서 시작됩니다. 조급함보다 균형을 선택하세요.",
  mind: "지금 필요한 것은 정답보다 마음의 정리일 수 있습니다.",
  relation: "관계의 답은 상대보다 당신의 태도 안에 있습니다.",
  future: "미래는 기다리는 것이 아니라 오늘의 행동으로 만들어집니다.",
  choice: "망설임 끝에는 결국 당신의 결정이 있습니다.",
};

export default function Result() {
  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as ResultPageState | null;

  /* =====================================
     no state
  ===================================== */
  if (!state) {
    return (
      <div className="no-result">
        <div className="no-result-box">
          <h2>결과를 불러올 수 없습니다.</h2>

          <Button onClick={() => navigate("/")}>처음으로</Button>
        </div>
      </div>
    );
  }

  const {
    content,
    mainCategory,
    safeCategory,
    isReversed,
    card,
    result,
    specialResult,
    cardEnergy,
    endingText,
  } = useResultPage(state, ENDING_MESSAGE);

  const shareRef = useRef<HTMLDivElement>(null);

  const [isPreparingShare, setIsPreparingShare] = useState(false);

  const { showCard, showContent } = useResultReveal();

  /* =====================================
     hooks
  ===================================== */
  const { step, titleTyping } = useResultTimeline();

  const { cardRef, cardSettled } = useCardAnimation(state.originRect);

  const { handleClose } = useResultClosing();

  const {
    tiltStyle: originalTiltStyle,
    onMouseMove,
    onMouseLeave,
  } = useCardTilt(cardRef, cardSettled);

  const { isMobile } = useResultDevice();

  const tiltStyle = isMobile ? {} : originalTiltStyle;

  const { toast, showToast } = useToast();

  useResultSave({
    state,
    card,
    content,
    safeCategory,
    isReversed,
    result,
  });

  /* =====================================
   save result (FIXED)
===================================== */

  const shareData = createShareData({
    card,
    content,
    result,
    isReversed,
  });

  const { handleCopy, handleCopyLink, handleSaveImage } = useResultActions({
    card,
    content,
    result,
    isReversed,
    shareRef,
    showToast,
  });

  /* =====================================
     UI
  ===================================== */
  return (
    <div
      className={`
    result-root
    show
    energy-${cardEnergy}
    tone-${result.tone}
  `}
    >
      {toast && <div className="toast">{toast}</div>}

      <div className="center-light" />
      <div className="vignette" />

      <div className="result-inner">
        {/* card */}
        <ResultCard
          card={card}
          cardRef={cardRef}
          isReversed={isReversed}
          showCard={showCard}
          tiltStyle={tiltStyle as CSSProperties}
          onMouseMove={isMobile ? undefined : onMouseMove}
          onMouseLeave={isMobile ? undefined : onMouseLeave}
        />

        {/* content */}
        <ResultBody
          showContent={showContent}
          step={step}
          mainCategory={mainCategory}
          subCategory={state.subCategory}
          questionType={state.questionType}
          titleTyping={titleTyping}
          content={content}
          card={card}
          isReversed={isReversed}
          result={result}
          cardEnergy={cardEnergy}
          specialResult={specialResult}
          endingText={endingText}
          isPreparingShare={isPreparingShare}
          onSaveImage={() =>
            handleSaveImage(isPreparingShare, setIsPreparingShare)
          }
          onCopy={handleCopy}
          onCopyLink={handleCopyLink}
          onRetry={() => navigate("/write")}
          onHistory={handleClose}
          onHome={() => navigate("/")}
        />

        {isPreparingShare && (
          <ResultSharePortal shareRef={shareRef} shareData={shareData} />
        )}
      </div>
    </div>
  );
}
