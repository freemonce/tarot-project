// src/components/result/ResultHeader.tsx

type Props = {
  mainCategory: string;
  subCategory?: string;
  questionType?: string;
  titleTyping: string;
};

export default function ResultHeader({
  mainCategory,
  subCategory,
  questionType,
  titleTyping,
}: Props) {
  return (
    <>
      <p className="cinematic-sub">Tarot Reading</p>

      <div className="result-context">
        {mainCategory} · {subCategory} · {questionType}
      </div>

      <h1 className="main-title">
        {titleTyping}
        <span className="cursor">|</span>
      </h1>

      <p className="flow-line">
        이 카드는 지금, 당신에게 꼭 필요한 이야기를 전하고 있습니다.
      </p>
    </>
  );
}
