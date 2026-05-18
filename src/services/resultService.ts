// src/services/resultService.ts

import { getResults, saveResults } from "./storage";
import { HistoryItem } from "../types/history";

export function saveResult(item: HistoryItem) {
  const prev = getResults() ?? [];

  const latest = prev[0];

  const isDuplicate =
    latest &&
    latest.content === item.content &&
    latest.card.name === item.card.name &&
    latest.category === item.category &&
    latest.isReversed === item.isReversed;

  if (isDuplicate) return;

  const MAX = 100;

  saveResults([item, ...prev].slice(0, MAX));
}
