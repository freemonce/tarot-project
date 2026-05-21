// src/hooks/useResultReveal.ts

import { useEffect, useState } from "react";

export default function useResultReveal() {
  const [showCard, setShowCard] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCard(true), 120);
    const t2 = setTimeout(() => setShowContent(true), 260);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  return {
    showCard,
    showContent,
  };
}
