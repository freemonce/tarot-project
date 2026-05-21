// src/components/result/ResultQuestion.tsx

type Props = {
  content: string;
};

export default function ResultQuestion({ content }: Props) {
  return (
    <div className="question-box reveal-up">
      <strong>당신의 질문</strong>
      <p>{content}</p>
    </div>
  );
}
