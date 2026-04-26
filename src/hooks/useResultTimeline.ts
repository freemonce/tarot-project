// src/hooks/useResultTimeline.ts

import { useEffect, useState } from "react";
import { STEP } from "../constants/resultStep";

type UseResultTimelineReturn = {
  showPage: boolean;
  step: number;
  titleTyping: string;
};

export default function useResultTimeline(): UseResultTimelineReturn {
  const [showPage, setShowPage] = useState<boolean>(false);
  const [step, setStep] = useState<number>(0);
  const [titleTyping, setTitleTyping] = useState<string>("");

  useEffect(() => {
    setShowPage(true);

    const timers: ReturnType<typeof setTimeout>[] = [
      setTimeout(() => setStep(STEP.QUESTION), 900),
      setTimeout(() => setStep(STEP.MEANING), 2200),
      setTimeout(() => setStep(STEP.ADVICE), 3400),
      setTimeout(() => setStep(STEP.KEYWORD), 4300),
      setTimeout(() => setStep(STEP.CTA), 5200),
    ];

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const text = "✨ 당신이 남긴 질문";
    let index = 0;

    const typing: ReturnType<typeof setInterval> = setInterval(() => {
      setTitleTyping(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(typing);
      }
    }, 50);

    return () => clearInterval(typing);
  }, []);

  return {
    showPage,
    step,
    titleTyping,
  };
}
