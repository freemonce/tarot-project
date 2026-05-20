// src/components/result/ResultAdvice.tsx

import getEnergyLabel from "../../utils/result/getEnergyLabel";

type Props = {
  advice: string;
  cardEnergy: string;
};

export default function ResultAdvice({ advice, cardEnergy }: Props) {
  return (
    <>
      <section className="section-box reveal-up">
        <h3>카드의 조언</h3>

        {advice
          .split(".")
          .filter((line) => line.trim() !== "")
          .map((line, i) => (
            <p
              key={i}
              className="line-appear"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              {line}
            </p>
          ))}
      </section>

      <div className="result-energy-box">
        <p>현재 흐름: {getEnergyLabel(cardEnergy)}</p>
      </div>
    </>
  );
}
