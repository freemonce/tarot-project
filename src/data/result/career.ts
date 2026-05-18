// src/data/result/career.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { QuestionFlow } from "../../types/result";

export const careerFlow: Record<string, QuestionFlow> = {
  [QUESTION_TYPES.career.INTERVIEW]: {
    upright: {
      intro: ["긍정적인 흐름이 천천히 만들어지고 있습니다."],

      extraMeaning: [
        "당신의 강점이 상대에게 잘 전달될 가능성이 높아 보입니다.",
        "생각보다 좋은 분위기로 이어질 수 있습니다.",
      ],

      extraAdvice: ["지나친 긴장보다 자연스러운 태도가 더 중요합니다."],

      ending: [
        "지금까지 준비해온 과정이 좋은 결과로 이어질 가능성이 있습니다.",
      ],

      extraKeywords: ["면접", "합격운", "기회"],
    },

    reversed: {
      intro: ["긴장감이 커질 가능성이 있어 보입니다."],

      extraMeaning: ["예상하지 못한 변수로 흐름이 흔들릴 수 있습니다."],

      extraAdvice: ["완벽함보다 침착함을 유지하는 것이 중요합니다."],

      ending: ["결과보다 경험 자체에 의미를 두는 것도 필요합니다."],

      extraKeywords: ["긴장", "변수", "불안"],
    },
  },

  [QUESTION_TYPES.career.TRANSFER]: {
    upright: {
      intro: ["새로운 환경으로의 흐름이 열리고 있습니다."],

      extraMeaning: ["변화를 통해 더 나은 방향을 찾게 될 가능성이 있습니다."],

      extraAdvice: ["익숙함에만 머물기보다 새로운 가능성을 바라보세요."],

      ending: ["이번 선택이 앞으로의 성장 흐름에 영향을 줄 수 있습니다."],

      extraKeywords: ["이직", "변화", "성장"],
    },

    reversed: {
      intro: ["아직은 이동 시점이 완전히 안정적이지 않을 수 있습니다."],

      extraMeaning: ["충동적인 결정은 후회로 이어질 가능성이 있습니다."],

      extraAdvice: ["조건과 현실을 충분히 비교해보는 과정이 필요합니다."],

      ending: ["조금 더 흐름을 지켜보는 것도 좋은 선택이 될 수 있습니다."],

      extraKeywords: ["고민", "불안정", "신중함"],
    },
  },

  [QUESTION_TYPES.career.PROMOTION]: {
    upright: {
      intro: ["노력에 대한 평가가 서서히 드러나고 있습니다."],

      extraMeaning: ["주변에서 당신의 능력을 인정할 가능성이 높아 보입니다."],

      extraAdvice: ["지금은 꾸준함과 책임감이 가장 큰 강점이 됩니다."],

      ending: ["작은 성과들이 결국 더 큰 기회로 이어질 수 있습니다."],

      extraKeywords: ["승진", "성과", "인정"],
    },

    reversed: {
      intro: ["기대만큼 빠른 결과가 나오지 않을 수 있습니다."],

      extraMeaning: ["평가 흐름 속에서 답답함을 느낄 가능성이 있습니다."],

      extraAdvice: ["조급함보다 자신의 흐름을 유지하는 것이 중요합니다."],

      ending: ["지금의 경험이 이후의 성장 기반이 될 수 있습니다."],

      extraKeywords: ["지연", "답답함", "인내"],
    },
  },

  [QUESTION_TYPES.career.RESIGN]: {
    upright: {
      intro: ["현재 흐름의 마무리를 고민하게 되는 시기입니다."],

      extraMeaning: ["새로운 방향을 찾고자 하는 마음이 커지고 있습니다."],

      extraAdvice: ["감정적인 결정보다 현실적인 준비가 우선되어야 합니다."],

      ending: ["마무리 역시 중요한 선택이라는 점을 잊지 마세요."],

      extraKeywords: ["퇴사", "전환점", "새출발"],
    },

    reversed: {
      intro: ["지금은 결정을 서두르기보다 상황을 더 지켜볼 필요가 있습니다."],

      extraMeaning: ["일시적인 감정이 판단에 영향을 주고 있을 수 있습니다."],

      extraAdvice: [
        "현실적인 계획 없이 움직이는 것은 부담으로 이어질 수 있습니다.",
      ],

      ending: ["조금 더 안정적인 기반을 만든 뒤 움직이는 것이 좋습니다."],

      extraKeywords: ["고민", "유지", "현실"],
    },
  },
};
