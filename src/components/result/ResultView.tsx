import type { TarotCard } from "../../types/tarot";
import type { ResultData } from "../../hooks/useResultData";

type Props = {
  card: TarotCard;
  content: string;
  resultData: ResultData;
  isReversed: boolean;
  onCopy: () => void;
};

export default function ResultView({
  card,
  content,
  resultData,
  isReversed,
  onCopy,
}: Props) {
  return (
    <div>
      <h1>{card.name}</h1>

      <p>{content}</p>

      <p>{resultData.meaning}</p>
      <p>{resultData.advice}</p>

      <button onClick={onCopy}>복사</button>
    </div>
  );
}
