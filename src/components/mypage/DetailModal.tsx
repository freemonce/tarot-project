import Button from "../Button";
import { HistoryItem } from "../../types/history";

type Props = {
  item: HistoryItem;
  visible: boolean;
  closing: boolean;
  onClose: () => void;
  onDelete: (date: string) => void;
  onFavorite: (date: string) => void;
};

export default function DetailModal({
  item,
  visible,
  closing,
  onClose,
  onDelete,
  onFavorite,
}: Props) {
  const reversed = item.isReversed;

  const meaning = reversed
    ? (item.card.reversedMeaning ?? item.card.meaning)
    : item.card.meaning;

  const advice = reversed
    ? (item.card.reversedAdvice ?? item.card.advice)
    : item.card.advice;

  const keywords =
    reversed && item.card.reversedKeywords?.length
      ? item.card.reversedKeywords
      : item.card.keywords || [];

  const handleShare = () => {
    navigator.clipboard.writeText(`${item.card.name}\n${meaning}\n${advice}`);
    alert("복사 완료!");
  };

  return (
    <div
      className={`detail-overlay ${visible ? "show" : ""} ${
        closing ? "closing" : ""
      }`}
      onClick={(e) => {
        if (closing) return;
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className={`detail-modal ${visible ? "show" : ""} ${
          closing ? "closing" : ""
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="detail-header">
          <div>
            <p className="detail-date">
              {new Date(item.date).toLocaleDateString("ko-KR")}
            </p>
            <h2 className="detail-title">{item.card.name}</h2>
          </div>

          <button
            className="detail-close"
            onClick={() => {
              if (closing) return;
              onClose();
            }}
          >
            ✕
          </button>
        </div>

        {/* QUESTION */}
        <div className="detail-question">{item.content}</div>

        {/* MAIN */}
        <div className="detail-body">
          <section className="detail-card">
            <h4>카드 의미</h4>
            <p>{meaning}</p>
          </section>

          <section className="detail-card">
            <h4>조언</h4>
            <p>{advice}</p>
          </section>
        </div>

        {/* TAGS */}
        <div className="detail-tags">
          {keywords.map((k) => (
            <span key={k}>#{k}</span>
          ))}
        </div>

        {/* ACTIONS */}
        <div className="detail-actions">
          <Button
            className={item.favorite ? "active" : ""}
            onClick={() => onFavorite(item.date)}
          >
            {item.favorite ? "★" : "☆"}
          </Button>

          <Button variant="danger" onClick={() => onDelete(item.date)}>
            삭제
          </Button>

          <Button onClick={handleShare}>공유</Button>
        </div>
      </div>
    </div>
  );
}
