import { getDeepInsight } from "../../services/insight";
import { HistoryItem } from "../../types/history";

type Props = {
  list: HistoryItem[];
};

export default function InsightDeep({ list }: Props) {
  const data = getDeepInsight(list);

  if (!data) return null;

  const message = `
최근 당신은 ${data.topCategory}에 대한 고민이 많았습니다.

현재 흐름은 ${data.emotion.label}입니다.

자주 등장하는 키워드는 ${data.topKeywords.map((k) => k[0]).join(", ")} 입니다.

👉 ${data.emotion.message}
`;

  return (
    <section className="insight-deep">
      <h3>🧠 당신의 흐름 분석</h3>

      <p className="insight-line">
        요즘 당신은 <strong>{data.topCategory}</strong>에 가장 많은 에너지를
        쓰고 있습니다.
      </p>

      <p className="insight-line">
        현재 흐름은 <strong>{data.emotion.label}</strong> 상태입니다.
      </p>

      <p className="insight-line">
        반복되는 키워드는{" "}
        <strong>{data.topKeywords.map((k) => k[0]).join(", ")}</strong>
        입니다.
      </p>

      <div className="insight-highlight">👉 {data.emotion.message}</div>
    </section>
  );
}
