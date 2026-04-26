import { NavigateFunction } from "react-router-dom";
import Button from "../Button";

type Props = {
  navigate: NavigateFunction;
};

export default function EmptyState({ navigate }: Props) {
  return (
    <div className="empty-box">
      <div className="empty-icon">🔮</div>

      <h3>아직 저장된 기록이 없습니다</h3>

      <p>
        첫 질문을 남기고
        <br />
        당신만의 타로 기록을 시작해보세요.
      </p>

      <Button variant="primary" size="lg" onClick={() => navigate("/")}>
        첫 질문 하러가기
      </Button>
    </div>
  );
}
