// src/utils/history/historyFilter.ts

import type { HistoryItem, CategoryType, ToneType } from "../../types/history";

/* =========================
   최신순 정렬
========================= */
export function sortByLatest(list: HistoryItem[]): HistoryItem[] {
  return [...list].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

/* =========================
   오래된순 정렬
========================= */
export function sortByOldest(list: HistoryItem[]): HistoryItem[] {
  return [...list].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
  );
}

/* =========================
   즐겨찾기 우선
========================= */
export function sortByFavorite(list: HistoryItem[]): HistoryItem[] {
  return [...list].sort((a, b) => {
    if (a.favorite === b.favorite) return 0;

    return a.favorite ? -1 : 1;
  });
}

/* =========================
   카테고리 필터
========================= */
export function filterByCategory(
  list: HistoryItem[],
  category: CategoryType | "all",
): HistoryItem[] {
  if (category === "all") return list;

  return list.filter((item) => item.category === category);
}

/* =========================
   tone 필터
========================= */
export function filterByTone(
  list: HistoryItem[],
  tone: ToneType | "all",
): HistoryItem[] {
  if (tone === "all") return list;

  return list.filter((item) => item.tone === tone);
}

/* =========================
   키워드 검색
========================= */
export function searchHistory(
  list: HistoryItem[],
  keyword: string,
): HistoryItem[] {
  if (!keyword.trim()) return list;

  const lower = keyword.toLowerCase();

  return list.filter((item) => {
    return (
      item.card.name.toLowerCase().includes(lower) ||
      item.content.toLowerCase().includes(lower) ||
      item.meaning.toLowerCase().includes(lower) ||
      item.advice.toLowerCase().includes(lower) ||
      item.keywords.some((k) => k.toLowerCase().includes(lower))
    );
  });
}

/* =========================
   복합 필터
========================= */
type FilterParams = {
  category?: CategoryType | "all";
  tone?: ToneType | "all";
  keyword?: string;
  favoriteOnly?: boolean;
};

export function applyHistoryFilters(
  list: HistoryItem[],
  {
    category = "all",
    tone = "all",
    keyword = "",
    favoriteOnly = false,
  }: FilterParams,
): HistoryItem[] {
  let result = [...list];

  result = filterByCategory(result, category);

  result = filterByTone(result, tone);

  result = searchHistory(result, keyword);

  if (favoriteOnly) {
    result = result.filter((item) => item.favorite);
  }

  return sortByLatest(result);
}
