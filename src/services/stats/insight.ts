// src/services/stats/insight.ts

import { HistoryItem } from "../../types/history";

export function getTopCards(list: HistoryItem[]) {
  const map: Record<string, number> = {};

  list.forEach((item) => {
    map[item.card.name] = (map[item.card.name] || 0) + 1;
  });

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
}

export function getTopType(list: HistoryItem[]) {
  if (!list.length) return "-";

  const map: Record<string, number> = {};

  list.forEach((item) => {
    map[item.card.type] = (map[item.card.type] || 0) + 1;
  });

  return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
}

export function getRecentKeywords(list: HistoryItem[]) {
  const words = list
    .slice(0, 5)
    .flatMap((item) => item.keywords || [])
    .slice(0, 3);

  return words.length ? words.join(" / ") : "-";
}

export function getMoodFlow(list: HistoryItem[]) {
  if (!list.length) return "분석 중 ✨";

  const toneMap: Record<string, number> = {};

  list.slice(0, 10).forEach((item) => {
    if (!item.tone) return;

    toneMap[item.tone] = (toneMap[item.tone] || 0) + 1;
  });

  const topTone = Object.entries(toneMap).sort((a, b) => b[1] - a[1])[0]?.[0];

  if (topTone === "hope") {
    return "희망 흐름 증가 ✨";
  }

  if (topTone === "warning") {
    return "경고 흐름 반복 ⚠";
  }

  if (topTone === "emotion") {
    return "감정 소모 증가 💙";
  }

  return "변화기 🌙";
}

export function getMonthCount(list: HistoryItem[]) {
  const now = new Date();

  return list.filter((item) => {
    const d = new Date(item.date);

    return (
      d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
    );
  }).length;
}
