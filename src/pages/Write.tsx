// src/pages/Write.tsx

import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Write.css";
import Button from "../components/Button";
import type { UICategoryKey } from "../types/tarot";
import { categoryUI, questionMap, subCategoryMap } from "../data/category";

const MAX_LENGTH = 120;

export default function Write() {
  const navigate = useNavigate();

  const [content, setContent] = useState("");
  const [mainCategory, setMainCategory] = useState<UICategoryKey>("love");

  const [subCategory, setSubCategory] = useState<string | null>(null);
  const [questionType, setQuestionType] = useState<string | null>(null);

  const [shake, setShake] = useState(false);
  const currentMain = categoryUI.find((c) => c.key === mainCategory);

  const remain = useMemo(() => MAX_LENGTH - content.length, [content]);
  const warning = remain <= 20;

  // ✅ 카테고리 변경 시 초기화 (핵심)
  const handleMainCategory = (key: UICategoryKey) => {
    setMainCategory(key);
    setSubCategory(null);
    setQuestionType(null);
  };

  const handleSubmit = () => {
    // ✅ 필수 입력 체크 강화
    if (!content.trim() || !subCategory || !questionType) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    if (!content.trim()) {
      alert("질문을 입력해주세요");
      return;
    }

    if (!subCategory) {
      alert("세부 상황을 선택해주세요");
      return;
    }

    if (!questionType) {
      alert("궁금한 방향을 선택해주세요");
      return;
    }

    navigate("/card", {
      state: {
        content: content.trim(),
        mainCategory,
        subCategory,
        questionType,
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

          <div className={`write-counter ${warning ? "warning" : ""}`}>
            <span>{content.length}</span> / {MAX_LENGTH}
          </div>
        </div>

        {/* main category */}
        <div className="write-category-grid">
          {categoryUI.map((item) => {
            const active = mainCategory === item.key;

            return (
              <button
                key={item.key}
                type="button"
                className={`category-chip ${active ? "active" : ""}`}
                onClick={() => handleMainCategory(item.key)}
              >
                <span className="chip-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* sub category */}
        {mainCategory && (
          <div className="section-block">
            <p className="section-label">세부 상황</p>
            <div className="sub-category">
              {subCategoryMap[mainCategory].map((sub) => (
                <button
                  key={sub}
                  className={`chip ${subCategory === sub ? "active" : ""}`}
                  onClick={() => {
                    setSubCategory(sub);
                    setQuestionType(null); // ✅ 다시 선택 강제
                  }}
                >
                  {sub}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* question type */}
        {subCategory && (
          <div className="section-block">
            <p className="section-label">궁금한 방향</p>
            <div className="question-category">
              {questionMap[mainCategory].map((q) => (
                <button
                  key={q}
                  className={`chip ${questionType === q ? "active" : ""}`}
                  onClick={() => setQuestionType(q)}
                >
                  {q}
                </button>
              ))}
            </div>

            {subCategory && questionType && (
              <div className="selection-summary">
                {currentMain?.label} → {subCategory} → {questionType}
              </div>
            )}
          </div>
        )}

        {/* submit */}
        <Button
          variant="primary"
          size="lg"
          className="write-submit-btn"
          onClick={handleSubmit}
          disabled={!subCategory || !questionType || !content.trim()}
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
