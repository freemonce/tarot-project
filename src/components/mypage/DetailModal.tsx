// src/components/mypage/DetailModal.tsx

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
  const meaning = item.meaning;

  const advice = item.advice;

  const keywords = item.keywords;

  const flow = item.flow;

  const handleShare = async () => {
    const text = `
${item.card.name}${item.isReversed ? " (역방향)" : ""}

${item.content}

[해석]
${meaning}

[조언]
${advice}
`.trim();

    try {
      if (navigator.share) {
        await navigator.share({
          title: "타로 결과",
          text,
        });

        return;
      }

      await navigator.clipboard.writeText(text);

      alert("복사 완료!");
    } catch {
      alert("공유 실패");
    }
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
            <h2 className="detail-title">
              {item.card.name} {item.isReversed ? " (역방향)" : ""}
            </h2>
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

        <div className="detail-meta">
          {[item.category, item.subCategory, item.questionType]
            .filter(Boolean)
            .join(" · ")}
        </div>

        <div className={`tone-badge ${item.tone}`}>
          {!item.tone && "🌙 일반"}
          {item.tone === "hope" && "✨ 희망 흐름"}
          {item.tone === "warning" && "⚠ 경고 흐름"}
          {item.tone === "emotion" && "💙 감정 흐름"}
        </div>

        {/* QUESTION */}
        <div className="detail-question">{item.content}</div>

        <section className="detail-summary">
          <h4>이번 흐름 요약</h4>

          <p>{item.summary}</p>
        </section>

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

        {flow.length > 0 && (
          <section className="detail-card">
            <h4>흐름의 변화</h4>

            <div className="detail-flow">
              {flow.map((text, i) => (
                <p key={i} className="detail-flow-item">
                  <span>✦</span>
                  {text}
                </p>
              ))}
            </div>
          </section>
        )}

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
