// src/utils/result/generateResult.ts

import { resultDataMap } from "../../data/resultData";

import { pickRandom } from "./pickRandom";
import { getSpecialCases } from "./getSpecialCases";
import { getToneStyle } from "./getToneStyle";
import { applyToneStyle } from "./applyToneStyle";
import { buildSentence } from "./buildSentence";
import { TarotCard } from "../../types/tarot";
import { CategoryKey } from "../../types/tarot";
import { getQuestionTone } from "./getQuestionTone";

import { getResultData } from "../../services/getResultData";
import { ResultData } from "../../types/result";

type Params = {
  card: TarotCard;
  category: CategoryKey;
  questionType: string;
  isReversed?: boolean;
};

export function generateResult({
  card,
  category,
  questionType,
  isReversed = false,
}: Params): ResultData | null {
  // ✅ 기본 카드 데이터
  const base = getResultData({
    card,
    category,
    isReversed,
  });

  // ✅ 질문 흐름 데이터
  const categoryData = resultDataMap[category];

  if (!categoryData) return null;

  const questionFlow = categoryData[questionType];

  if (!questionFlow) {
    return {
      meaning: base.meaning,

      advice: base.advice,

      keywords: base.keywords,

      flow: [],

      tone: "neutral",

      summary: "현재 흐름을 천천히 살펴보는 것이 좋습니다.",

      special: "",

      toneStyle: undefined,

      emotionalLevel: 0,

      chance: 0,
    };
  }

  const flow = isReversed ? questionFlow.reversed : questionFlow.upright;

  // ✅ 랜덤 문장
  const intro = pickRandom(flow.intro) ?? "";

  const extraMeaning = pickRandom(flow.extraMeaning) ?? "";

  const extraAdvice = pickRandom(flow.extraAdvice) ?? "";

  const ending = pickRandom(flow.ending) ?? "";

  // ✅ 특수 케이스
  const specialTexts = getSpecialCases({
    card: card.name,
    questionType,
  });

  const special = pickRandom(specialTexts) ?? "";

  // ✅ 의미 조합
  const meaning = buildSentence([intro, base.meaning, extraMeaning, special]);

  // ✅ 조언 조합
  const adviceBase = buildSentence([base.advice, extraAdvice, ending]);

  // ✅ 톤 적용
  const toneStyle = getToneStyle({
    card: card.name,
    questionType,
  });

  const tone = getQuestionTone(questionType);

  const advice = applyToneStyle({
    toneStyle,
    advice: adviceBase,
  });

  let finalAdvice = advice;
  let finalFlow = [...(flow.flow ?? [])];

  if (tone === "warning") {
    finalAdvice += " 성급한 판단보다는 상황을 끝까지 살펴보는 것이 중요합니다.";
  }

  if (tone === "hope") {
    finalAdvice += " 긍정적인 흐름이 들어오고 있으니 자신감을 가져보세요.";
  }

  if (tone === "emotion") {
    finalAdvice +=
      " 감정의 흐름을 억누르기보다 솔직하게 바라보는 것이 중요합니다.";
  }

  if (tone === "warning") {
    finalFlow.push("감정적인 선택보다 현실적인 판단이 중요해집니다.");
  }

  // ✅ 키워드 합치기
  const keywords = [
    ...new Set([...base.keywords, ...(flow.extraKeywords ?? [])]),
  ];

  const summary =
    tone === "hope"
      ? "긍정적인 변화 흐름이 강하게 들어오고 있습니다."
      : tone === "warning"
        ? "현재는 신중한 판단이 필요한 시기입니다."
        : tone === "emotion"
          ? "감정 흐름이 크게 움직이고 있는 시기입니다."
          : "천천히 흐름을 관찰해보는 것이 좋습니다.";

  return {
    meaning,
    advice: finalAdvice,
    keywords,

    special,
    toneStyle,

    flow: finalFlow,
    tone,
    summary,

    emotionalLevel: flow.emotionalLevel ?? 0,
    chance: flow.chance ?? 0,
  };
}
