// src/data/result/love.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const loveFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.love.REUNION]: {
    upright: {
      intro: [
        "아직 끝나지 않은 감정이 보입니다.",
        "서로의 마음이 완전히 멀어진 것은 아닙니다.",
      ],

      extraMeaning: ["하지만 지금은 조급함보다 흐름을 읽는 것이 중요합니다."],

      extraAdvice: ["상대의 반응을 억지로 끌어내려 하지 마세요."],

      ending: ["시간이 감정을 다시 움직이게 만들 수 있습니다."],

      extraKeywords: ["재회", "미련", "감정흐름"],
    },

    reversed: {
      intro: [],
      extraMeaning: [],
      extraAdvice: [],
      ending: [],
      extraKeywords: [],
    },
  },

  [QUESTION_TYPES.love.SOME]: {
    upright: {
      intro: ["서로를 조금씩 알아가는 흐름이 이어지고 있습니다."],

      extraMeaning: ["아직은 확신보다 조심스러운 감정 교류에 가까워 보입니다."],

      extraAdvice: ["서두르기보다 자연스러운 흐름을 지켜보는 것이 중요합니다."],

      ending: ["천천히 쌓이는 감정이 더 안정적인 관계로 이어질 수 있습니다."],

      extraKeywords: ["썸", "호감", "감정교류"],
    },

    reversed: {
      intro: ["감정 흐름이 조금 엇갈리고 있을 가능성이 있습니다."],

      extraMeaning: ["서로의 속도 차이가 관계를 애매하게 만들 수 있습니다."],

      extraAdvice: ["불안감 때문에 관계를 서두르지 않는 것이 중요합니다."],

      ending: ["지금은 감정을 명확히 정리하는 시간이 필요할 수 있습니다."],

      extraKeywords: ["혼란", "거리감", "애매함"],
    },
  },

  [QUESTION_TYPES.love.CONFESSION]: {
    upright: {
      intro: ["상대의 감정 흐름이 조금씩 드러나고 있습니다."],

      extraMeaning: ["조심스럽지만 진심 어린 감정이 이어질 가능성이 있습니다."],

      extraAdvice: [
        "억지로 분위기를 만들기보다 자연스럽게 다가가는 것이 중요합니다.",
      ],

      ending: ["천천히 가까워지는 흐름이 좋은 결과로 이어질 수 있습니다."],

      extraKeywords: ["고백", "감정표현", "호감"],
    },

    reversed: {
      intro: ["감정 표현에 대한 부담감이 커지고 있을 가능성이 있습니다."],

      extraMeaning: ["확신 없는 접근이 관계 흐름을 흔들 수 있습니다."],

      extraAdvice: ["상대의 반응을 너무 서두르지 않는 것이 중요합니다."],

      ending: ["지금은 감정을 정리하는 시간이 더 필요할 수 있습니다."],

      extraKeywords: ["불안", "망설임", "거리감"],
    },
  },

  [QUESTION_TYPES.love.BREAKUP]: {
    upright: {
      intro: ["서로의 감정 흐름이 점점 멀어지고 있는 모습입니다."],

      extraMeaning: [
        "감정은 남아 있어도 관계 방식의 충돌이 커졌을 가능성이 있습니다.",
      ],

      extraAdvice: [
        "억지로 관계를 붙잡기보다 현재 감정을 차분히 바라보는 것이 중요합니다.",
      ],

      ending: ["시간이 지나야 보이는 감정도 존재합니다."],

      extraKeywords: ["이별", "거리감", "감정소모"],
    },

    reversed: {
      intro: ["정리되지 않은 감정이 계속 마음에 남아 있을 수 있습니다."],

      extraMeaning: ["관계의 끝을 받아들이기 어려운 흐름이 보입니다."],

      extraAdvice: [
        "지금은 감정을 억누르기보다 천천히 정리하는 시간이 필요합니다.",
      ],

      ending: ["억지로 결론을 내리려 하지 않아도 괜찮습니다."],

      extraKeywords: ["미련", "혼란", "집착"],
    },
  },

  [QUESTION_TYPES.love.RELATION_FLOW]: {
    upright: {
      intro: ["관계의 흐름은 천천히 움직이고 있습니다."],

      extraMeaning: [
        "급격한 변화보다는 감정이 서서히 쌓여가는 흐름에 가까워 보입니다.",
      ],

      extraAdvice: [
        "상대의 속도를 존중하는 태도가 중요하게 작용할 수 있습니다.",
      ],

      ending: ["작은 감정 변화가 앞으로의 관계 흐름을 바꿀 수 있습니다."],

      extraKeywords: ["관계흐름", "감정변화", "거리감"],
    },

    reversed: {
      intro: ["관계 흐름이 잠시 정체되어 있을 가능성이 있습니다."],

      extraMeaning: ["서로의 감정 방향이 엇갈리고 있을 수 있습니다."],

      extraAdvice: [
        "답답함 때문에 관계를 억지로 움직이려 하지 않는 것이 중요합니다.",
      ],

      ending: ["지금은 흐름을 지켜보는 시간이 더 필요할 수 있습니다."],

      extraKeywords: ["정체", "혼란", "엇갈림"],
    },
  },
};
