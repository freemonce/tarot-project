import React, { memo, useMemo } from "react";
import Button from "../Button";
import { TarotCard } from "../../types/tarot";

type HistoryItem = {
  card: TarotCard;
  content: string;
  category: string;
  date: string;
};

type Props = {
  item: HistoryItem;
  handleDelete: (date: string) => void;
  onOpen: () => void;
};

const categoryLabelMap: Record<string, string> = {
  love: "연애",
  career: "커리어",
  money: "금전",
  mind: "심리",
  relation: "인간관계",
  future: "미래운세",
  choice: "선택 / 결정",
};

function HistoryCard({ item, handleDelete, onOpen }: Props) {
  const formattedDate = useMemo(() => {
    return new Date(item.date).toLocaleDateString("ko-KR");
  }, [item.date]);

  const categoryLabel = useMemo(() => {
    return categoryLabelMap[item.category] || item.category;
  }, [item.category]);

  const previewKeywords = useMemo(() => {
    return item.card?.keywords?.slice(0, 3) || [];
  }, [item.card]);

  const cardName = item.card?.name || "Tarot";
  const meaning = item.card?.meaning || "카드 해석 정보가 없습니다.";

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

      <h3 className="history-question">{item.content}</h3>

      <p className="history-category">{categoryLabel}</p>

      <p className="history-message">{meaning}</p>

      {previewKeywords.length > 0 && (
        <div className="history-keywords">
          {previewKeywords.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      )}

      <div className="history-actions">
        <Button variant="ghost" onClick={handleDetailClick}>
          상세보기
        </Button>

        <Button variant="danger" onClick={handleDeleteClick}>
          삭제
        </Button>
      </div>
    </article>
  );
}

export default memo(HistoryCard);
