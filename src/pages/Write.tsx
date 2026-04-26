// src/pages/Write.tsx

import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Write.css";
import Button from "../components/Button";
import type { CategoryKey } from "../types/tarot";

type CategoryItem = {
  key: CategoryKey;
  label: string;
  icon: string;
};

const categories: CategoryItem[] = [
  { key: "love", label: "연애", icon: "💘" },
  { key: "career", label: "커리어", icon: "💼" },
  { key: "money", label: "금전", icon: "💰" },
  { key: "mind", label: "심리", icon: "🧠" },
  { key: "relation", label: "인간관계", icon: "🤝" },
  { key: "health", label: "건강", icon: "🌿" },
  { key: "future", label: "미래운세", icon: "🌙" },
  { key: "choice", label: "선택/결정", icon: "⚖️" },
];

const MAX_LENGTH = 120;

export default function Write() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [category, setCategory] = useState<CategoryKey>("love");
  const [shake, setShake] = useState(false);

  const remain = useMemo(() => MAX_LENGTH - content.length, [content]);

  const handleSubmit = () => {
    if (!content.trim()) {
      setShake(true);

      setTimeout(() => {
        setShake(false);
      }, 500);

      return;
    }

    navigate("/card", {
      state: {
        content: content.trim(),
        category,
      },
    });
  };

  return (
    <div className="write-page">
      {/* background */}
      <div className="write-stars" />
      <div className="write-glow glow-1" />
      <div className="write-glow glow-2" />

      <div className="write-shell">
        <p className="write-badge">🔮 TAROT READING</p>

        <h1 className="write-title">
          지금 떠오르는
          <br />
          마음의 질문을 적어보세요
        </h1>

        <p className="write-subtitle">
          작은 고민도 괜찮아요. 지금의 흐름을 카드가 비춰드립니다.
        </p>

        {/* textarea */}
        <div className={`write-box ${shake ? "shake" : ""}`}>
          <textarea
            className="write-textarea"
            placeholder="예: 지금 이 선택이 나에게 맞는 길일까요?"
            value={content}
            maxLength={MAX_LENGTH}
            onChange={(e) => setContent(e.target.value)}
          />

          <div className="write-counter">
            <span>{content.length}</span> / {MAX_LENGTH}
          </div>
        </div>

        {/* category */}
        <div className="write-category-grid">
          {categories.map((item) => {
            const active = category === item.key;

            return (
              <button
                key={item.key}
                type="button"
                className={`category-chip ${active ? "active" : ""}`}
                onClick={() => setCategory(item.key)}
              >
                <span className="chip-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* submit */}
        <Button
          variant="primary"
          size="lg"
          className="write-submit-btn"
          onClick={handleSubmit}
        >
          카드에게 물어보기 ✨
        </Button>

        <p className="write-bottom-text">
          오늘의 직감은 생각보다 정확할 수 있습니다.
        </p>
      </div>
    </div>
  );
}
