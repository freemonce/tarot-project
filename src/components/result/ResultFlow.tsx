// src/components/result/ResultFlow.tsx

type Props = {
  flow: string[];
};

export default function ResultFlow({ flow }: Props) {
  if (flow.length === 0) return null;

  return (
    <section className="section-box reveal-up">
      <h3>흐름의 변화</h3>

      <div className="flow-list">
        {flow.map((item, i) => (
          <p
            key={i}
            className="flow-item line-appear"
            style={{ animationDelay: `${i * 0.35}s` }}
          >
            ✦ {item}
          </p>
        ))}
      </div>
    </section>
  );
}
