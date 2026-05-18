// src/data/result/money.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const moneyFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.money.INVEST]: {
    upright: {
      intro: ["금전의 흐름은 서서히 움직이고 있습니다."],

      extraMeaning: ["지금은 공격적인 선택보다 안정성이 중요합니다."],

      extraAdvice: ["충동적인 판단은 피하는 것이 좋습니다."],

      ending: ["현실적인 시선이 결국 좋은 결과를 만듭니다."],

      extraKeywords: ["투자", "현실판단", "재물운"],
    },

    reversed: {
      intro: ["불안정한 흐름이 감지됩니다."],

      extraMeaning: ["기대했던 결과와 다른 방향으로 흘러갈 수 있습니다."],

      extraAdvice: ["확신 없는 투자는 잠시 멈추는 편이 좋습니다."],

      ending: ["지금은 지키는 선택이 더 중요할 수 있습니다."],

      extraKeywords: ["손실주의", "불안정"],
    },
  },

  [QUESTION_TYPES.money.CONSUMPTION]: {
    upright: {
      intro: ["현재 소비 흐름은 비교적 안정적으로 유지되고 있습니다."],

      extraMeaning: [
        "필요한 곳에 적절히 에너지를 사용하고 있는 모습입니다.",
        "지출 속에서도 균형을 유지하려는 흐름이 보입니다.",
      ],

      extraAdvice: ["당장의 만족보다 장기적인 안정감을 함께 고려해보세요."],

      ending: ["작은 소비 습관 하나가 앞으로의 흐름을 바꿀 수 있습니다."],

      extraKeywords: ["소비", "지출", "생활패턴"],
    },

    reversed: {
      intro: ["불필요한 소비 흐름이 점점 커지고 있을 가능성이 있습니다."],

      extraMeaning: ["감정적인 소비가 반복될 가능성이 높아 보입니다."],

      extraAdvice: ["스트레스를 소비로 해결하려 하지 않는 것이 중요합니다."],

      ending: ["지금은 지출을 줄이는 선택이 더 안정적일 수 있습니다."],

      extraKeywords: ["과소비", "충동지출", "재정불안"],
    },
  },

  [QUESTION_TYPES.money.SIDE_HUSTLE]: {
    upright: {
      intro: ["새로운 수입 흐름이 만들어질 가능성이 보입니다."],

      extraMeaning: ["작은 기회가 예상보다 좋은 결과로 이어질 수 있습니다."],

      extraAdvice: [
        "처음부터 완벽하려 하기보다 꾸준히 이어가는 것이 중요합니다.",
      ],

      ending: ["지금의 경험이 앞으로 더 큰 기회로 연결될 수 있습니다."],

      extraKeywords: ["부업", "추가수입", "기회"],
    },

    reversed: {
      intro: ["기대만큼 빠른 결과는 나오지 않을 수 있습니다."],

      extraMeaning: ["수익보다 피로감이 더 커질 가능성도 있어 보입니다."],

      extraAdvice: ["무리한 확장보다 현실적인 계획이 우선입니다."],

      ending: ["지금은 방향을 다시 점검해보는 것도 좋은 선택입니다."],

      extraKeywords: ["피로", "지연", "현실점검"],
    },
  },
};
