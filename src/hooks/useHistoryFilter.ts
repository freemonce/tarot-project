import { useMemo } from "react";
import { HistoryItem } from "../types/history";

type Props = {
  data: HistoryItem[];
  query: string;
  sort: "latest" | "oldest";
  category: string | "all";
  favoriteOnly: boolean;
};

export default function useHistoryFilter({
  data,
  query,
  sort,
  category,
  favoriteOnly,
}: Props) {
  return useMemo(() => {
    let result = [...data];

    // 1. 검색
    if (query.trim()) {
      result = result.filter((item) =>
        item.content.toLowerCase().includes(query.toLowerCase()),
      );
    }

    // 2. 카테고리
    if (category !== "all") {
      result = result.filter((item) => item.category === category);
    }

    // 3. 즐겨찾기
    if (favoriteOnly) {
      result = result.filter((item) => item.favorite);
    }

    // 4. 정렬
    result.sort((a, b) => {
      if (sort === "latest") {
        return +new Date(b.date) - +new Date(a.date);
      }
      return +new Date(a.date) - +new Date(b.date);
    });

    return result;
  }, [data, query, sort, category, favoriteOnly]);
}
