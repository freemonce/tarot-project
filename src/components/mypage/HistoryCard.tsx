import React, { memo, useMemo } from "react";
import Button from "../Button";
import { HistoryItem } from "../../types/history";
import { highlightText } from "../../utils/highlight";

type Props = {
  item: HistoryItem;
  keyword: string;
  handleDelete: (date: string) => void;
  handleFavorite: (date: string) => void;
  onOpen: () => void;
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
    return new Date(item.date).toLocaleDateString("ko-KR");
  }, [item.date]);

  const categoryLabel = useMemo(() => {
    return categoryLabelMap[item.category] || item.category;
  }, [item.category]);

  const previewKeywords = useMemo(() => {
    const source =
      item.isReversed && item.card.reversedKeywords?.length
        ? item.card.reversedKeywords
        : item.card.keywords;

    return source?.slice(0, 3) || [];
  }, [item.isReversed, item.card]);

  const cardName = item.card?.name || "Tarot";

  const handleOpen = () => {
    onOpen();
  };

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDelete(item.date);
  };

  const handleDetailClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onOpen();
  };

  const previewMeaning = useMemo(() => {
    return item.isReversed
      ? (item.card.reversedMeaning ?? item.card.meaning)
      : item.card.meaning;
  }, [item.isReversed, item.card]);

  return (
    <article
      className="history-card"
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          onOpen();
        }
      }}
    >
      <div className="history-glow" />

      <div className="history-top">
        <span className="history-date">{formattedDate}</span>
        <span className="history-badge">{cardName}</span>
      </div>

      <h3 className="history-question">
        {highlightText(item.content, keyword)}
      </h3>

      <p className="history-category">{categoryLabel}</p>

      <p className="history-message">
        {" "}
        {highlightText(previewMeaning, keyword)}
      </p>

      <h3 className="history-title">
        {item.card.name}
        {item.isReversed && <span className="reverse-icon"> 🔄</span>}
      </h3>

      {previewKeywords.length > 0 && (
        <div className="history-keywords">
          {previewKeywords.map((tag) => (
            <span key={tag}>#{highlightText(tag, keyword)}</span>
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

export default memo(HistoryCard);
