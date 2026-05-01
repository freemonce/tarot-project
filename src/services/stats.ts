import { HistoryItem } from "../types/history";

// 연속 날짜 계산
export function getStreakDays(list: HistoryItem[]) {
  if (!list.length) return 0;

  const dates = [
    ...new Set(list.map((item) => new Date(item.date).toDateString())),
  ]
    .map((d) => new Date(d))
    .sort((a, b) => b.getTime() - a.getTime());

  let streak = 1;

  for (let i = 1; i < dates.length; i++) {
    const diff =
      (dates[i - 1].getTime() - dates[i].getTime()) / (1000 * 60 * 60 * 24);

    if (diff === 1) streak++;
    else break;
  }

  return streak;
}

// 가장 많이 묻는 카테고리
export function getTopCategory(list: HistoryItem[]) {
  if (!list.length) return "-";

  const map: Record<string, number> = {};

  list.forEach((item) => {
    map[item.category] = (map[item.category] || 0) + 1;
  });

  return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
}

// 최근 활동
export function getRecentActivity(list: HistoryItem[]) {
  if (!list.length) return "기록 없음";

  const latest = list
    .slice()
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())[0];

  return `${latest.card.name} / ${latest.category}`;
}

export function getTopCards(list: HistoryItem[]) {
  const map: Record<string, number> = {};

  list.forEach((item) => {
    map[item.card.name] = (map[item.card.name] || 0) + 1;
  });

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);
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

export function getMoodFlow(list: HistoryItem[]) {
  const words = list
    .slice(0, 5)
    .flatMap((item) => item.card.keywords || [])
    .join(" ");

  if (/불안|걱정|혼란|갈등/.test(words)) return "불안기 😵";
  if (/회복|안정|치유|평화/.test(words)) return "회복기 🌿";
  if (/성장|도전|기회|시작/.test(words)) return "상승기 🚀";

  return "변화기 ✨";
}
