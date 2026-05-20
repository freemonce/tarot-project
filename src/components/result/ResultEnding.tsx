// src/components/result/ResultEnding.tsx

type Props = {
  endingText: string;
};

export default function ResultEnding({ endingText }: Props) {
  return <div className="emotion-ending reveal-up">{endingText}</div>;
}
