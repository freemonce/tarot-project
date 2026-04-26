import { useEffect, useRef, useState } from "react";

export default function useCardAnimation(originRect?: DOMRect) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [cardSettled, setCardSettled] = useState(!originRect);
  const isMobile = window.innerWidth <= 900;

  useEffect(() => {
    if (!originRect || !cardRef.current) return;

    const el = cardRef.current;

    const centerX = isMobile
      ? window.innerWidth / 2 - originRect.width / 2
      : window.innerWidth * 0.22;

    const centerY = isMobile ? 40 : 110;

    el.style.position = "fixed";
    el.style.left = `${originRect.left}px`;
    el.style.top = `${originRect.top}px`;
    el.style.zIndex = "20";

    requestAnimationFrame(() => {
      el.style.transition = "all 0.8s cubic-bezier(0.22, 1, 0.36, 1)";

      el.style.left = `${centerX}px`;
      el.style.top = `${centerY}px`;

      /* 과한 확대 제거 */
      el.style.transform = "scale(1.08)";
    });

    const timer = setTimeout(() => {
      setCardSettled(true);

      el.classList.add("settled");

      el.style.position = "relative";
      el.style.left = "";
      el.style.top = "";
      el.style.transition = "";
      el.style.transform = isMobile ? "scale(1.02)" : "scale(1.08)";
      el.style.zIndex = "";
    }, 850);

    return () => clearTimeout(timer);
  }, [originRect]);

  return { cardRef, cardSettled };
}
