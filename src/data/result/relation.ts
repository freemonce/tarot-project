// src/data/result/relation.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const relationFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.relation.FEELING]: {
    upright: {
      intro: ["겉으로 드러나지 않은 감정 흐름이 보이고 있습니다."],

      extraMeaning: [
        "상대 역시 여러 감정을 혼자 정리하고 있을 가능성이 있습니다.",
      ],

      extraAdvice: [
        "확신을 서두르기보다 감정의 흐름을 천천히 바라보는 것이 중요합니다.",
      ],

      ending: ["작은 반응 속에서도 진짜 감정이 드러날 가능성이 있습니다."],

      extraKeywords: ["속마음", "감정", "관계"],
    },

    reversed: {
      intro: ["감정 표현이 쉽게 드러나지 않고 있을 수 있습니다."],

      extraMeaning: ["마음속 거리감이 관계를 애매하게 만들 가능성이 있습니다."],

      extraAdvice: [
        "상대의 반응만으로 모든 감정을 단정짓지 않는 것이 중요합니다.",
      ],

      ending: ["지금은 감정보다 상황 흐름을 지켜볼 필요가 있습니다."],

      extraKeywords: ["혼란", "거리감", "속마음"],
    },
  },

  [QUESTION_TYPES.relation.DISTANCE]: {
    upright: {
      intro: ["서로 사이에 미묘한 거리감이 생기고 있을 가능성이 있습니다."],

      extraMeaning: [
        "감정이 완전히 사라진 것보다 표현 방식이 달라졌을 수 있습니다.",
      ],

      extraAdvice: [
        "억지로 관계를 가까워지게 만들기보다 자연스러운 흐름을 지켜보세요.",
      ],

      ending: ["조금의 여유가 관계 흐름을 다시 편안하게 만들 수 있습니다."],

      extraKeywords: ["거리감", "소원함", "감정변화"],
    },

    reversed: {
      intro: ["감정적인 거리감이 예상보다 더 커지고 있을 수 있습니다."],

      extraMeaning: [
        "서로의 오해나 감정 누적이 관계 흐름에 영향을 주고 있을 가능성이 있습니다.",
      ],

      extraAdvice: [
        "감정을 억누르기보다 솔직하게 정리해보는 시간이 필요할 수 있습니다.",
      ],

      ending: ["지금은 관계를 무리하게 움직이려 하지 않는 것이 중요합니다."],

      extraKeywords: ["단절", "어색함", "거리"],
    },
  },

  [QUESTION_TYPES.relation.MISUNDERSTANDING]: {
    upright: {
      intro: ["서로의 감정이 완전히 전달되지 않았을 가능성이 있습니다."],

      extraMeaning: [
        "작은 표현 차이가 관계 흐름을 어색하게 만들고 있을 수 있습니다.",
      ],

      extraAdvice: [
        "상대의 행동을 단정짓기보다 상황을 조금 더 지켜보는 것이 중요합니다.",
      ],

      ending: ["대화 흐름 속에서 오해가 자연스럽게 풀릴 가능성이 있습니다."],

      extraKeywords: ["오해", "감정차이", "혼란"],
    },

    reversed: {
      intro: ["감정이 반복적으로 엇갈리고 있을 가능성이 있습니다."],

      extraMeaning: [
        "서로의 입장을 이해하지 못한 채 감정 소모가 이어질 수 있습니다.",
      ],

      extraAdvice: [
        "지금은 감정적인 반응보다 차분한 거리두기가 필요할 수 있습니다.",
      ],

      ending: [
        "억지로 결론을 내리기보다 시간을 두는 것이 더 도움이 될 수 있습니다.",
      ],

      extraKeywords: ["갈등", "답답함", "엇갈림"],
    },
  },

  [QUESTION_TYPES.relation.HUMAN_RELATION]: {
    upright: {
      intro: ["주변 인간관계 흐름이 조금씩 안정되어 가고 있습니다."],

      extraMeaning: ["새로운 관계나 긍정적인 연결이 들어올 가능성이 있습니다."],

      extraAdvice: [
        "억지로 모든 관계를 붙잡기보다 편안한 흐름을 유지하는 것이 중요합니다.",
      ],

      ending: ["자연스러운 관계 속에서 좋은 인연이 이어질 가능성이 있습니다."],

      extraKeywords: ["인간관계", "소통", "연결"],
    },

    reversed: {
      intro: ["인간관계 속에서 피로감이 커지고 있을 가능성이 있습니다."],

      extraMeaning: [
        "감정적인 거리감이나 반복되는 스트레스가 영향을 주고 있을 수 있습니다.",
      ],

      extraAdvice: ["모든 관계를 혼자 감당하려 하지 않는 것이 중요합니다."],

      ending: [
        "지금은 자신에게 편안한 관계가 무엇인지 돌아볼 필요가 있습니다.",
      ],

      extraKeywords: ["피로감", "스트레스", "관계정리"],
    },
  },
};
