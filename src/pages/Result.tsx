// src/pages/Result.tsx

import React, {
  useEffect,
  useMemo,
  useRef,
  useState,
  CSSProperties,
} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";

import { tarotCards } from "../data/tarot";
import type { TarotCard } from "../types/tarot";
import type { ResultPageState } from "../types/navigation";

import { STEP } from "../constants/resultStep";
import Button from "../components/Button";
import ShareCard from "../components/result/ShareCard";

import "../styles/pages/Result.css";

import useResultTimeline from "../hooks/useResultTimeline";
import useCardAnimation from "../hooks/useCardAnimation";
import useResultClosing from "../hooks/useResultClosing";
import useCardTilt from "../hooks/useCardTilt";

import { getResults, saveResults } from "../services/storage";
import { HistoryItem } from "../types/history";

export type CategoryType =
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "health"
  | "future"
  | "choice";

const CATEGORY_KEYS = [
  "love",
  "career",
  "money",
  "mind",
  "relation",
  "health",
  "future",
  "choice",
] as const;

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

  const shareRef = useRef<HTMLDivElement>(null);
  const [isPreparingShare, setIsPreparingShare] = useState(false);

  const [toast, setToast] = useState("");
  const toastTimer = useRef<number | null>(null);

  const [showCard, setShowCard] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCard(true), 250);
    const t2 = setTimeout(() => setShowContent(true), 700);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  /* =====================================
     fallback
  ===================================== */
  const content = state?.content ?? "";
  const category: CategoryType = CATEGORY_KEYS.includes(
    state?.category as CategoryType,
  )
    ? (state?.category as CategoryType)
    : "love";
  const isReversed = state?.isReversed ?? false;

  const fallbackCard: TarotCard = tarotCards[0];

  const card = useMemo(() => {
    return state?.card ?? fallbackCard;
  }, [state]);

  /* =====================================
     hooks
  ===================================== */
  const { step, titleTyping } = useResultTimeline();

  const { cardRef, cardSettled } = useCardAnimation(state?.originRect);

  const { handleClose } = useResultClosing();

  const { tiltStyle, onMouseMove, onMouseLeave } = useCardTilt(
    cardRef,
    cardSettled,
  );

  /* =====================================
   final data (SAFE VERSION)
===================================== */

  const safeCategory = CATEGORY_KEYS.includes(category as CategoryType)
    ? (category as CategoryType)
    : "love";

  const normalSet = card.categoryInterpretations ?? {};
  const reverseSet = card.reversedCategoryInterpretations ?? {};

  const selectedData = isReversed
    ? (reverseSet[safeCategory] ?? normalSet[safeCategory])
    : normalSet[safeCategory];

  const finalMeaning = isReversed
    ? (card.reversedMeaning ?? card.meaning)
    : card.meaning;

  const finalAdvice = isReversed
    ? (card.reversedAdvice ?? card.advice)
    : card.advice;

  const finalKeywords =
    isReversed && card.reversedKeywords?.length
      ? card.reversedKeywords
      : card.keywords;

  const finalCategoryMeaning = selectedData?.meaning ?? finalMeaning;

  const finalCategoryAdvice = selectedData?.advice ?? finalAdvice;

  const resultData = {
    meaning: finalCategoryMeaning,
    advice: finalCategoryAdvice,
    keywords: finalKeywords,
  };

  const endingText =
    ENDING_MESSAGE[safeCategory] ??
    "당신이 찾는 답은 이미 마음속에서 움직이고 있습니다.";

  /* =====================================
   save result (FIXED)
===================================== */
  const hasSavedRef = useRef(false);

  useEffect(() => {
    if (!state) return;

    const prev = getResults() ?? [];

    const isDuplicate = prev[0]?.content === content;

    if (isDuplicate) return;

    const newItem: HistoryItem = {
      id: crypto.randomUUID(),
      card,
      content,
      category,
      isReversed,
      date: new Date().toISOString(),
      favorite: false,
    };

    const MAX = 100;

    saveResults([newItem, ...prev].slice(0, MAX));

    hasSavedRef.current = true;
  }, [state]);

  /* =====================================
     toast
  ===================================== */
  const showToast = (msg: string) => {
    setToast(msg);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = window.setTimeout(() => {
      setToast("");
      toastTimer.current = null;
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  /* =====================================
     share functions
  ===================================== */
  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);

      showToast("🔗 링크가 복사되었습니다.");
    } catch {
      showToast("복사에 실패했습니다.");
    }
  };

  const copyText = async () => {
    const reverseMark = isReversed ? " ↻" : "";

    const text = `
🔮 ${card.name}${reverseMark}

질문:
${content}

해석:
${finalCategoryMeaning}

조언:
${finalCategoryAdvice}
`;

    try {
      await navigator.clipboard.writeText(text);

      showToast("📝 결과가 복사되었습니다.");
    } catch {
      showToast("복사에 실패했습니다.");
    }
  };

  const saveShareImage = async () => {
    if (isPreparingShare) return;
    setIsPreparingShare(true);

    try {
      await document.fonts.ready;

      await new Promise((resolve) => setTimeout(resolve, 800));

      if (!shareRef.current) {
        showToast("공유 카드를 불러오지 못했습니다.");
        return;
      }

      const canvas = await html2canvas(shareRef.current, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#080808",
        windowWidth: 1080,
        windowHeight: 1080,
        logging: false,

        // 폰트 렌더링을 위해 이미지 로드 대기 옵션 추가
        onclone: (doc: Document) => {
          const root = doc.querySelector(".share-card-root") as HTMLElement;

          if (root) {
            root.style.opacity = "1";
            root.style.transform = "none";
            root.style.animation = "none";
            root.style.filter = "none";
            root.style.width = "1080px";
            root.style.height = "1080px";
            root.style.display = "flex";
          }

          const imgs = doc.querySelectorAll("img");

          imgs.forEach((img) => {
            img.style.objectFit = "cover";
            img.style.display = "block";
          });

          const title = doc.querySelector(".share-card-title") as HTMLElement;

          if (title) {
            title.style.textShadow = "none";
            title.style.letterSpacing = "-0.02em";
          }
        },
      });

      const url = canvas.toDataURL("image/png", 0.9);

      const link = document.createElement("a");
      link.href = url;
      link.download = `tarot-reading-${Date.now()}.png`;
      link.click();

      showToast("📷 공유 이미지 저장 완료");
    } catch {
      showToast("이미지 저장 실패");
    } finally {
      setIsPreparingShare(false);
    }
  };

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

  /* =====================================
     UI
  ===================================== */
  return (
    <div className="result-root show">
      {toast && <div className="toast">{toast}</div>}

      <div className="center-light" />
      <div className="vignette" />

      <div className="result-inner">
        {/* card */}
        <div className="card-stage">
          <div className="card-float-layer">
            <div
              className={`card-rotate-layer ${isReversed ? "reversed" : ""}`}
            >
              <div
                ref={cardRef}
                className={`result-card ${showCard ? "show" : ""}`}
                style={tiltStyle as CSSProperties}
                onMouseMove={onMouseMove}
                onMouseLeave={onMouseLeave}
              >
                <img
                  src={card.image}
                  alt={card.name}
                  className="result-card-img"
                />
                <div className="card-shine" />
              </div>
            </div>
          </div>
        </div>

        {/* content */}
        <div className={`result-content ${showContent ? "show" : ""}`}>
          <p className="cinematic-sub">Tarot Reading</p>

          <h1 className="main-title">
            {titleTyping}
            <span className="cursor">|</span>
          </h1>

          <p className="flow-line">
            지금 당신의 흐름을 카드가 비추고 있습니다.
          </p>

          {/* question */}
          {step >= STEP.QUESTION && (
            <div className="question-box reveal-up">
              <strong>당신의 질문</strong>
              <p>{content}</p>
            </div>
          )}

          {/* meaning */}
          {step >= STEP.MEANING && (
            <section className="section-box reveal-up">
              <h3>
                {card.name}
                {isReversed ? " (역방향)" : ""}
              </h3>

              <p>{resultData.meaning}</p>
            </section>
          )}

          {/* advice */}
          {step >= STEP.ADVICE && (
            <section className="section-box reveal-up">
              <h3>카드의 조언</h3>

              <p>{resultData.advice}</p>
            </section>
          )}

          {/* keywords */}
          {step >= STEP.KEYWORD && (
            <div className="keyword-wrap reveal-up">
              {(resultData.keywords ?? []).map((word) => (
                <span key={word}>#{word}</span>
              ))}
            </div>
          )}

          {/* ending */}
          {step >= STEP.KEYWORD && (
            <div className="emotion-ending reveal-up">{endingText}</div>
          )}

          {/* share */}
          {step >= STEP.CTA && (
            <div className="cta-wrap reveal-up">
              <p className="share-title">공유하기</p>

              <div className="share-group">
                <Button onClick={copyLink}>🔗 링크 복사</Button>

                <Button onClick={copyText}>📝 결과 복사</Button>

                <Button onClick={saveShareImage}>
                  {isPreparingShare ? "📸 생성 중..." : "📷 공유 이미지 저장"}
                </Button>
              </div>

              <div className="action-group">
                <Button onClick={() => navigate("/write")}>
                  🔮 다시 질문하기
                </Button>

                <Button onClick={handleClose}>📜 내 기록 보기</Button>

                <Button onClick={() => navigate("/")}>🏠 홈으로</Button>
              </div>
            </div>
          )}
        </div>
        {isPreparingShare && (
          <div
            style={{
              position: "fixed",
              top: "-9999px",
              left: "0",
              width: "1080px",
              height: "1080px",
              overflow: "hidden",
              zIndex: -100,
            }}
          >
            <div ref={shareRef}>
              <ShareCard
                cardName={card.name}
                cardImage={card.image}
                question={content}
                advice={resultData.advice}
                meaning={resultData.meaning}
                keywords={resultData.keywords}
                isReversed={isReversed}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
