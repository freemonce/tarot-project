// src/hooks/useInfiniteScroll.ts

import { useEffect } from "react";

type Props = {
  target: React.RefObject<HTMLElement | null>;

  hasMore: boolean;

  onLoadMore: () => void;
};

export default function useInfiniteScroll({
  target,
  hasMore,
  onLoadMore,
}: Props) {
  useEffect(() => {
    const el = target.current;

    if (!el || !hasMore) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          onLoadMore();
        }
      },
      {
        rootMargin: "120px",
      },
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, hasMore, onLoadMore]);
}
