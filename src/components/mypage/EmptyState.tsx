import { NavigateFunction } from "react-router-dom";
import Button from "../Button";

type Props = {
  navigate: NavigateFunction;
};

export default function EmptyState({ navigate }: Props) {
  return (
    <div className="empty-state">
      <div className="empty-icon">🔮</div>

      <h3>"아직 기록이 없어요"</h3>

      <p>"첫 리딩을 시작해보세요 🔮"</p>

      <Button variant="primary" size="lg" onClick={() => navigate("/")}>
        첫 질문 하러가기
      </Button>
    </div>
  );
}
