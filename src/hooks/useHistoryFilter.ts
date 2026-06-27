// src/hooks/useHistoryFilter.ts

import { useMemo } from "react";

import type { HistoryItem, CategoryType } from "../types/history";
import type { ToneType } from "../types/tone";

import {
  applyHistoryFilters,
  sortByLatest,
  sortByOldest,
} from "../utils/history/historyFilter";

type Props = {
  data: HistoryItem[];

  query: string;

  sort: "latest" | "oldest";

  category: CategoryType | "all";

  tone: ToneType | "all";

  favoriteOnly: boolean;

  favFirst: boolean;
};

export default function useHistoryFilter({
  data,
  query,
  sort,
  category,
  tone,
  favoriteOnly,
  favFirst,
}: Props) {
  return useMemo(() => {
    let result = applyHistoryFilters(data, {
      category,
      tone,
      keyword: query,
      favoriteOnly,
    });

    if (sort === "oldest") {
      result = sortByOldest(result);
    } else {
      result = sortByLatest(result);
    }

    if (favFirst) {
      result.sort((a, b) => {
        if (a.favorite === b.favorite) return 0;
        return a.favorite ? -1 : 1;
      });
    }

    return result;
  }, [data, query, sort, category, tone, favoriteOnly, favFirst]);
}
