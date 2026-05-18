// src/components/mypage/HistoryCard.tsx

import React, { memo, useMemo, useCallback } from "react";
import Button from "../Button";
import { HistoryItem } from "../../types/history";
import { highlightText } from "../../utils/highlight";
import { formatDate } from "../../utils/date";

type Props = {
  item: HistoryItem;
  keyword: string;
  handleDelete: (date: string) => void;
  handleFavorite: (date: string) => void;
  onOpen: (item: HistoryItem) => void;
};

const categoryLabelMap: Record<string, string> = {
  love: "연애",
  career: "커리어",
  money: "금전",
  mind: "심리",
  health: "건강",
  relation: "인간관계",
  future: "미래운세",
  choice: "선택 / 결정",
};

function HistoryCard({
  item,
  keyword,
  handleDelete,
  handleFavorite,
  onOpen,
}: Props) {
  const formattedDate = useMemo(() => {
    return formatDate(item.date);
  }, [item.date]);

  const categoryLabel = useMemo(() => {
    return categoryLabelMap[item.category] || item.category;
  }, [item.category]);

  const previewKeywords = useMemo(() => {
    return item.keywords?.slice(0, 3) || [];
  }, [item.keywords]);

  const handleOpen = useCallback(() => {
    onOpen(item);
  }, [onOpen, item]);

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDelete(item.date);
  };

  const handleDetailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpen(item);
  };

  const previewMeaning = useMemo(() => {
    const text = item.meaning || item.card.meaning || "의미 데이터 없음";

    return text.length > 120 ? `${text.slice(0, 120)}...` : text;
  }, [item.meaning, item.card.meaning]);

  const highlightedMeaning = useMemo(() => {
    return highlightText(previewMeaning, keyword);
  }, [previewMeaning, keyword]);

  const highlightedQuestion = useMemo(() => {
    if (!keyword.trim()) return item.content;

    return highlightText(item.content, keyword);
  }, [item.content, keyword]);

  const highlightedKeywords = useMemo(() => {
    return previewKeywords.map((tag) => ({
      original: tag,
      highlighted: highlightText(tag, keyword),
    }));
  }, [previewKeywords, keyword]);

  return (
    <article
      className="history-card glass-panel"
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onOpen(item);
        }
      }}
    >
      <div className="history-glow" />

      <div className="history-top">
        <span className="history-date">{formattedDate}</span>

        <span className="history-badge">
          {item.questionType || categoryLabel}
        </span>
      </div>

      <div className={`tone-badge ${item.tone}`}>
        {!item.tone && "🌙 일반"}
        {item.tone === "hope" && "✨ 희망"}
        {item.tone === "warning" && "⚠ 주의"}
        {item.tone === "emotion" && "💙 감정"}
      </div>

      <h3 className="history-question">{highlightedQuestion}</h3>

      <p className="history-message">{highlightedMeaning}</p>

      <p className="history-category">{categoryLabel}</p>

      {item.summary && (
        <p className={`history-summary ${item.tone}`}>{item.summary}</p>
      )}

      {item.flow?.[0] && (
        <p className="history-flow-preview">✦ {item.flow[0]}</p>
      )}

      <h3 className="history-card-name glass-panel">
        {item.card.name}
        {item.isReversed && <span className="reverse-icon"> 🔄</span>}
      </h3>

      {previewKeywords.length > 0 && (
        <div className="history-keywords">
          {highlightedKeywords.map((tag) => (
            <span key={tag.original}>#{tag.highlighted}</span>
          ))}
        </div>
      )}

      <div className="history-actions">
        <Button variant="ghost" onClick={handleDetailClick}>
          상세보기
        </Button>

        <Button
          className={`fav-btn ${item.favorite ? "active" : ""}`}
          onClick={(e) => {
            e.stopPropagation();
            handleFavorite(item.date);
          }}
          aria-label="즐겨찾기"
        >
          <span className="fav-star">{item.favorite ? "★" : "☆"}</span>
        </Button>

        <Button variant="danger" onClick={handleDeleteClick}>
          삭제
        </Button>
      </div>
    </article>
  );
}

export default memo(HistoryCard, (prev, next) => {
  return prev.item === next.item && prev.keyword === next.keyword;
});
