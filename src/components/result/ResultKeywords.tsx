// src/components/result/ResultKeywords.tsx

type Props = {
  keywords: string[];
};

export default function ResultKeywords({ keywords }: Props) {
  return (
    <div className="keyword-wrap reveal-up">
      {keywords.map((word) => (
        <span key={word}>#{word}</span>
      ))}
    </div>
  );
}
