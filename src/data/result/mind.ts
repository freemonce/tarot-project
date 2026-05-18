// src/data/result/mind.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const mindFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.mind.ANXIETY]: {
    upright: {
      intro: [
        "마음속 불안이 점점 커지고 있는 흐름이 보입니다.",
        "생각이 많아지면서 감정 소모도 함께 커질 가능성이 있습니다.",
      ],

      extraMeaning: [
        "아직 일어나지 않은 상황까지 걱정하고 있을 수 있습니다.",
        "불안감이 현실보다 더 크게 느껴지고 있을 가능성도 있습니다.",
      ],

      extraAdvice: [
        "모든 문제를 한 번에 해결하려 하지 않는 것이 중요합니다.",
        "지금은 결과보다 마음의 균형을 먼저 회복하는 시간이 필요합니다.",
      ],

      ending: [
        "지나가는 감정의 흐름에 너무 오래 붙잡혀 있지 않아도 괜찮습니다.",
      ],

      extraKeywords: ["불안", "걱정", "감정소모"],
    },

    reversed: {
      intro: ["조금씩 마음의 압박감에서 벗어나기 시작하는 흐름이 보입니다."],

      extraMeaning: [
        "복잡했던 감정이 천천히 정리될 가능성이 있습니다.",
        "스스로를 몰아붙이던 흐름이 약해지고 있을 수 있습니다.",
      ],

      extraAdvice: ["완벽함보다 안정감을 우선으로 두는 것이 중요합니다."],

      ending: ["지금의 회복 흐름을 조급하게 흔들지 않는 것이 중요합니다."],

      extraKeywords: ["회복", "정리", "안정"],
    },
  },

  [QUESTION_TYPES.mind.HEALING]: {
    upright: {
      intro: [
        "지친 마음이 천천히 회복되어 가는 흐름이 보입니다.",
        "감정적으로 안정을 찾게 될 가능성이 있습니다.",
      ],

      extraMeaning: [
        "지금은 결과보다 스스로를 돌보는 시간이 더 중요할 수 있습니다.",
        "억눌려 있던 감정이 조금씩 풀려나고 있을 가능성이 있습니다.",
      ],

      extraAdvice: [
        "무리하게 앞으로 나아가기보다 충분히 쉬어가는 것도 필요합니다.",
      ],

      ending: ["천천히 회복된 마음은 이전보다 더 단단해질 수 있습니다."],

      extraKeywords: ["회복", "위로", "안정"],
    },

    reversed: {
      intro: ["아직은 마음의 피로가 충분히 정리되지 않았을 가능성이 있습니다."],

      extraMeaning: [
        "겉으로는 괜찮아 보여도 내면의 감정은 지쳐 있을 수 있습니다.",
      ],

      extraAdvice: ["억지로 괜찮은 척하기보다 스스로의 감정을 인정해보세요."],

      ending: ["회복에도 시간이 필요하다는 점을 잊지 않는 것이 중요합니다."],

      extraKeywords: ["피로", "지침", "감정누적"],
    },
  },

  [QUESTION_TYPES.mind.CONFIDENCE]: {
    upright: {
      intro: [
        "스스로를 다시 믿기 시작하는 흐름이 보입니다.",
        "자신감이 천천히 회복되고 있을 가능성이 있습니다.",
      ],

      extraMeaning: [
        "지금까지의 경험이 앞으로의 선택에 힘이 되어줄 수 있습니다.",
        "생각보다 더 많은 가능성을 가지고 있을 수 있습니다.",
      ],

      extraAdvice: ["다른 사람과 비교하기보다 자신의 흐름에 집중해보세요."],

      ending: ["작은 확신 하나가 앞으로의 방향을 크게 바꿀 수 있습니다."],

      extraKeywords: ["자신감", "확신", "성장"],
    },

    reversed: {
      intro: ["스스로에 대한 확신이 흔들리고 있을 가능성이 있습니다."],

      extraMeaning: [
        "실패 경험이나 불안감이 자신감을 약하게 만들고 있을 수 있습니다.",
      ],

      extraAdvice: [
        "결과 하나만으로 자신의 가치를 판단하지 않는 것이 중요합니다.",
      ],

      ending: ["지금은 자신을 다시 믿기 위한 시간이 필요할 수 있습니다."],

      extraKeywords: ["위축", "불안", "자기의심"],
    },
  },
};
