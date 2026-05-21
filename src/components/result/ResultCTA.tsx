//   src/components/result/ResultCTA.tsx
// ResultCTA.tsx = 버튼
import Button from "../Button";

type Props = {
  isPreparingShare: boolean;

  onSaveImage: () => void;
  onCopy: () => void;
  onCopyLink: () => void;

  onRetry: () => void;
  onHistory: () => void;
  onHome: () => void;
};

export default function ResultCTA({
  isPreparingShare,
  onSaveImage,
  onCopy,
  onCopyLink,
  onRetry,
  onHistory,
  onHome,
}: Props) {
  return (
    <div className="cta-wrap reveal-up">
      <p className="share-title">이 순간을 남겨보세요</p>

      <div className="share-group">
        <Button onClick={onSaveImage}>
          {isPreparingShare ? "📸 생성 중..." : "📷 오늘의 카드 기록하기"}
        </Button>

        <Button onClick={onCopy}>📋 이 해석 저장하기</Button>

        <Button onClick={onCopyLink}>🔗 링크 복사</Button>
      </div>

      <div className="action-group">
        <Button onClick={onRetry}>🔮 다시 질문하기</Button>

        <Button onClick={onHistory}>📜 내 기록 보기</Button>

        <Button onClick={onHome}>🏠 홈으로</Button>
      </div>
    </div>
  );
}
