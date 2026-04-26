// src/hooks/useCardTilt.ts

import { useRef } from "react";
import type { CSSProperties, MouseEventHandler, RefObject } from "react";

type UseCardTiltReturn = {
  tiltStyle: CSSProperties;
  onMouseMove: MouseEventHandler<HTMLDivElement>;
  onMouseLeave: MouseEventHandler<HTMLDivElement>;
};

export default function useCardTilt(
  cardRef: RefObject<HTMLDivElement | null>,
  cardSettled: boolean,
): UseCardTiltReturn {
  const frameRef = useRef<number | null>(null);

  const applyTransform = (x: number, y: number) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();

    const px = x - rect.left;
    const py = y - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = (px - centerX) / 14;
    const rotateX = -(py - centerY) / 14;

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.035)
    `;

    // glare 위치
    cardRef.current.style.setProperty("--mx", `${px}px`);
    cardRef.current.style.setProperty("--my", `${py}px`);
  };

  const onMouseMove: MouseEventHandler<HTMLDivElement> = (e) => {
    if (!cardSettled || !cardRef.current) return;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const x = e.clientX;
    const y = e.clientY;

    frameRef.current = requestAnimationFrame(() => {
      applyTransform(x, y);
    });
  };

  const onMouseLeave = () => {
    if (!cardRef.current) return;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    cardRef.current.style.transition =
      "transform 0.55s cubic-bezier(.22,.61,.36,1)";

    cardRef.current.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;

    cardRef.current.style.setProperty("--mx", `50%`);
    cardRef.current.style.setProperty("--my", `50%`);

    setTimeout(() => {
      if (cardRef.current) {
        cardRef.current.style.transition = "";
      }
    }, 550);
  };

  return {
    tiltStyle: {
      transformStyle: "preserve-3d",
      willChange: "transform",
    },
    onMouseMove,
    onMouseLeave,
  };
}
