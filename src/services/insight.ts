import { HistoryItem } from "../types/history";

export function getDeepInsight(list: HistoryItem[]) {
  if (!list.length) return null;

  // 1. 카테고리
  const categoryMap: Record<string, number> = {};
  list.forEach((item) => {
    categoryMap[item.category] = (categoryMap[item.category] || 0) + 1;
  });

  const [topCategory] = Object.entries(categoryMap).sort(
    (a, b) => b[1] - a[1],
  )[0];

  // 2. 키워드
  const keywordMap: Record<string, number> = {};
  list.forEach((item) => {
    item.card.keywords?.forEach((k) => {
      keywordMap[k] = (keywordMap[k] || 0) + 1;
    });
  });

  const topKeywords = Object.entries(keywordMap)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 3);

  // 3. 감정 점수화 (🔥 핵심 업그레이드)
  const emotionScore = {
    anxiety: 0,
    growth: 0,
    stable: 0,
  };

  list.slice(0, 7).forEach((item) => {
    const words = item.card.keywords || [];

    words.forEach((w) => {
      if (/불안|걱정|혼란|갈등/.test(w)) emotionScore.anxiety++;
      if (/성장|기회|도전|시작/.test(w)) emotionScore.growth++;
      if (/안정|회복|평화|치유/.test(w)) emotionScore.stable++;
    });
  });

  let emotion = {
    label: "변화기 ✨",
    message: "흐름이 전환되는 시점입니다.",
  };

  if (emotionScore.anxiety > emotionScore.growth) {
    emotion = {
      label: "불안기 😵",
      message: "지금은 선택보다 안정이 먼저입니다.",
    };
  } else if (emotionScore.growth > emotionScore.anxiety) {
    emotion = {
      label: "상승기 🚀",
      message: "지금의 흐름은 확장으로 이어질 가능성이 큽니다.",
    };
  } else if (emotionScore.stable > 2) {
    emotion = {
      label: "회복기 🌿",
      message: "흐름이 안정 단계에 들어왔습니다.",
    };
  }

  return {
    topCategory,
    topKeywords,
    emotion,
  };
}
