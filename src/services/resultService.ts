import { getResults, saveResults } from "./storage";
import { HistoryItem } from "../types/history";

export function saveResult(item: HistoryItem) {
  const prev = getResults() ?? [];

  const isDuplicate = prev[0]?.content === item.content;
  if (isDuplicate) return;

  const MAX = 100;

  saveResults([item, ...prev].slice(0, MAX));
}
