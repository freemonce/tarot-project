// src/data/result/future.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const futureFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.future.NEAR_FUTURE]: {
    upright: {
      intro: ["가까운 미래의 흐름이 조금씩 움직이기 시작하고 있습니다."],

      extraMeaning: [
        "예상하지 못했던 작은 변화가 새로운 흐름으로 이어질 가능성이 있습니다.",
      ],

      extraAdvice: [
        "결과를 조급하게 판단하기보다 현재의 흐름을 천천히 지켜보는 것이 중요합니다.",
      ],

      ending: ["작은 변화가 앞으로의 방향을 바꾸는 계기가 될 수 있습니다."],

      extraKeywords: ["가까운미래", "변화", "흐름"],

      tone: "hope",
      toneStyle: "mystic",
    },

    reversed: {
      intro: ["당장은 흐름의 변화가 뚜렷하게 보이지 않을 수 있습니다."],

      extraMeaning: [
        "생각보다 시간이 더 필요하거나 상황이 잠시 정체될 가능성이 있습니다.",
      ],

      extraAdvice: [
        "불안감 때문에 결과를 서두르기보다 현재 상황을 차분히 바라보는 것이 중요합니다.",
      ],

      ending: [
        "지금은 흐름을 억지로 움직이려 하지 않는 것이 더 도움이 될 수 있습니다.",
      ],

      extraKeywords: ["정체", "지연", "불안"],

      tone: "neutral",
      toneStyle: "poetic",
    },
  },

  [QUESTION_TYPES.future.MONTH_FLOW]: {
    upright: {
      intro: [
        "앞으로의 한 달 흐름은 비교적 안정적으로 이어질 가능성이 있습니다.",
      ],

      extraMeaning: [
        "천천히 쌓이는 변화가 일상 흐름에 긍정적인 영향을 줄 수 있습니다.",
      ],

      extraAdvice: [
        "작은 기회와 변화들을 가볍게 넘기지 않는 것이 중요해 보입니다.",
      ],

      ending: [
        "꾸준한 흐름 속에서 생각보다 좋은 결과가 이어질 가능성이 있습니다.",
      ],

      extraKeywords: ["한달운세", "흐름", "안정"],

      tone: "hope",
      toneStyle: "warm",
    },

    reversed: {
      intro: ["한동안 감정 흐름이나 상황 변화가 답답하게 느껴질 수 있습니다."],

      extraMeaning: [
        "예상했던 방향과 실제 흐름 사이에 차이가 생길 가능성이 있습니다.",
      ],

      extraAdvice: [
        "지금은 무리하게 결과를 만들기보다 균형을 유지하는 것이 중요합니다.",
      ],

      ending: ["잠시의 흔들림이 전체 흐름을 결정짓는 것은 아닙니다."],

      extraKeywords: ["답답함", "변수", "흔들림"],

      tone: "neutral",
      toneStyle: "healing",
    },
  },

  [QUESTION_TYPES.future.CHANGE]: {
    upright: {
      intro: ["지금의 흐름 속에서 새로운 변화 가능성이 열리고 있습니다."],

      extraMeaning: [
        "예상하지 못했던 선택이나 기회가 방향을 바꾸게 만들 수 있습니다.",
      ],

      extraAdvice: [
        "변화를 두려워하기보다 자신의 흐름을 믿고 움직여보는 것이 중요합니다.",
      ],

      ending: ["이번 변화가 앞으로의 흐름에 중요한 전환점이 될 수 있습니다."],

      extraKeywords: ["변화", "전환점", "가능성"],

      tone: "hope",
      toneStyle: "direct",
    },

    reversed: {
      intro: ["변화를 받아들이는 과정에서 혼란이 커질 가능성이 있습니다."],

      extraMeaning: ["익숙한 흐름을 쉽게 놓지 못해 선택이 늦어질 수 있습니다."],

      extraAdvice: [
        "조급하게 결론을 내리기보다 자신의 감정을 먼저 정리해보는 것이 중요합니다.",
      ],

      ending: ["지금의 망설임 역시 앞으로의 방향을 찾는 과정일 수 있습니다."],

      extraKeywords: ["혼란", "망설임", "불안정"],

      tone: "warning",
      toneStyle: "cold",
    },
  },
};
