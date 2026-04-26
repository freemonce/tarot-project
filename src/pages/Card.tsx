import React, { useEffect, useMemo, useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { tarotCards } from "../data/tarot";
import type { TarotCard } from "../types/tarot";
import Button from "../components/Button";
import "../styles/pages/Card.css";
import type { CardPageState } from "../types/navigation";

type DrawnCard = {
  card: TarotCard;
  isReversed: boolean;
};

/* 카드 섞기 */
function shuffle(array: TarotCard[]): TarotCard[] {
  const copied = [...array];

  for (let i = copied.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copied[i], copied[j]] = [copied[j], copied[i]];
  }

  return copied;
}

export default function Card() {
  const navigate = useNavigate();
  const { state } = useLocation() as { state: CardPageState };

  const cardRefs = useRef<Record<number, HTMLDivElement | null>>({});
  const timersRef = useRef<number[]>([]);

  const { content, category } = state ?? {
    content: "테스트 고민",
    category: "mind",
  };

  const [loading, setLoading] = useState(true);
  const [seed, setSeed] = useState(0);

  const [isLocked, setIsLocked] = useState(false);
  const [selectedCardId, setSelectedCardId] = useState<number | null>(null);

  const [flipStyle, setFlipStyle] = useState<React.CSSProperties>({});
  const [isZoomed, setIsZoomed] = useState(false);
  const [isGlow, setIsGlow] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* 첫 진입 로딩 */
  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  /* 타이머 정리 */
  useEffect(() => {
    return () => {
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  /* 카드 20장 랜덤 + 역방향 포함 */
  const selectedCards = useMemo<DrawnCard[]>(() => {
    return shuffle(tarotCards)
      .slice(0, 20)
      .map((card) => ({
        card,
        isReversed: Math.random() < 0.5,
      }));
  }, [seed]);

  /* 다시 섞기 */
  const handleReshuffle = () => {
    if (isLocked) return;

    setLoading(true);
    setSelectedCardId(null);
    setFlipStyle({});
    setIsZoomed(false);
    setIsGlow(false);
    setIsTransitioning(false);

    const timer = window.setTimeout(() => {
      setSeed((prev) => prev + 1);
      setLoading(false);
    }, 500);

    timersRef.current.push(timer);
  };

  /* 카드 선택 */
  const handleSelect = (drawn: DrawnCard) => {
    if (isLocked) return;

    const card = drawn.card;
    const el = cardRefs.current[card.id];

    if (!el) return;

    const rect = el.getBoundingClientRect();

    setIsLocked(true);
    setSelectedCardId(card.id);

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const cardCenterX = rect.left + rect.width / 2;
    const cardCenterY = rect.top + rect.height / 2;

    const deltaX = centerX - cardCenterX;
    const deltaY = centerY - cardCenterY;

    setFlipStyle({
      transform: `translate(${deltaX}px, ${deltaY}px) scale(1.35)`,
      zIndex: 100,
    });

    const glowTimer = window.setTimeout(() => {
      setIsZoomed(true);
      setIsGlow(true);
    }, 700);

    const fadeTimer = window.setTimeout(() => {
      setIsTransitioning(true);
    }, 1400);

    const moveTimer = window.setTimeout(() => {
      navigate("/result", {
        state: {
          card,
          content,
          category,
          isReversed: drawn.isReversed,
          originRect: rect,
        },
      });
    }, 2100);

    timersRef.current.push(glowTimer, fadeTimer, moveTimer);
  };

  /* 로딩 화면 */
  if (loading) {
    return (
      <div className="loading-screen">
        ✨ 별들이 당신의 운명을 읽고 있습니다...
      </div>
    );
  }

  return (
    <div className="card-page">
      {isTransitioning && <div className="page-fade" />}

      {/* 상단 메뉴 */}
      <div className="card-toolbar">
        <Button
          variant="ghost"
          size="sm"
          disabled={isLocked}
          onClick={() =>
            navigate("/write", {
              state: { content, category },
            })
          }
        >
          고민 수정
        </Button>

        <Button
          variant="ghost"
          size="sm"
          disabled={isLocked}
          onClick={handleReshuffle}
        >
          다시 섞기
        </Button>

        <Button
          variant="ghost"
          size="sm"
          disabled={isLocked}
          onClick={() => navigate("/")}
        >
          처음으로
        </Button>
      </div>

      <h2 className="card-title">카드를 선택하세요</h2>

      {isLocked && <div className="dim-layer" />}

      <div className="card-grid">
        {selectedCards.map((drawn) => {
          const card = drawn.card;
          const isReversed = drawn.isReversed;
          const isSelected = selectedCardId === card.id;

          return (
            <div
              key={card.id}
              ref={(el) => {
                cardRefs.current[card.id] = el;
              }}
              className={`
                tarot-card
                ${isLocked && !isSelected ? "dimmed" : ""}
                ${isSelected ? "selected" : ""}
                ${isZoomed && isSelected ? "zoomed" : ""}
                ${isGlow && isSelected ? "glow" : ""}
              `}
              style={isSelected ? flipStyle : {}}
              onClick={() => handleSelect(drawn)}
            >
              <div className={`card-inner ${isSelected ? "flipped" : ""}`}>
                {/* 뒷면 */}
                <div className="card-front">
                  <img src="/images/Tarot_Back.webp" alt="카드 뒷면" />
                </div>

                {/* 앞면 */}
                <div className="card-back">
                  <img
                    src={card.image}
                    alt={card.name}
                    className={isReversed ? "reversed" : ""}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
