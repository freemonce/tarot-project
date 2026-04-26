//  ResultSection.tsx = 해석 박스
import { ReactNode } from "react";

type ResultSectionProps = {
  title: string;
  children: ReactNode;
  highlight?: boolean;
};

export default function ResultSection({
  title,
  children,
  highlight = false,
}: ResultSectionProps) {
  return (
    <div className={`fade-up result-box ${highlight ? "highlight" : ""}`}>
      <strong>{title}</strong>
      <p>{children}</p>
    </div>
  );
}
