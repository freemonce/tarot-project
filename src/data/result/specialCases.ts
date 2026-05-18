// src/data/result/specialCases.ts

import { QUESTION_TYPES } from "../../constants/questionTypes";
import { SpecialCasesMap } from "../../types/specialCase";

export const specialCases: SpecialCasesMap = {
  Death: [
    {
      type: QUESTION_TYPES.love.REUNION,

      texts: [
        "끊어진 관계처럼 보여도 감정의 흐름은 아직 남아 있습니다.",
        "끝났다고 생각했던 감정이 다시 움직일 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.love.BREAKUP,

      texts: ["지금의 관계는 이전과 같은 방식으로 이어지기 어려워 보입니다."],
    },

    {
      type: QUESTION_TYPES.future.CHANGE,

      texts: [
        "기존 흐름을 정리해야 새로운 변화가 시작될 가능성이 있습니다.",
        "끝이라고 느껴졌던 상황이 새로운 방향으로 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.MONTH_FLOW,

      texts: ["한동안 흐름의 변화 폭이 크게 느껴질 가능성이 있습니다."],
    },
  ],

  Star: [
    {
      type: QUESTION_TYPES.love.CONFESSION,

      texts: [
        "상대 역시 당신을 긍정적으로 바라보고 있을 가능성이 있습니다.",
        "천천히지만 좋은 감정 흐름이 이어지고 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.love.REUNION,

      texts: [
        "천천히지만 관계 회복 가능성이 다시 보이기 시작합니다.",
        "조금씩 감정의 거리감이 줄어들 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.NEAR_FUTURE,

      texts: [
        "천천히지만 긍정적인 흐름이 다시 이어질 가능성이 있습니다.",
        "희망적으로 바라보던 일이 조금씩 움직이기 시작할 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.MONTH_FLOW,

      texts: ["감정적으로 안정감을 되찾는 흐름이 들어올 가능성이 있습니다."],
    },
  ],

  Devil: [
    {
      type: QUESTION_TYPES.love.BREAKUP,

      texts: [
        "미련과 집착이 쉽게 감정을 놓지 못하게 만들고 있습니다.",
        "감정적으로 서로 얽혀 있는 흐름이 강하게 보입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.love.REUNION,

      texts: [
        "서로를 쉽게 놓지 못하는 감정 흐름이 강하게 남아 있습니다.",
        "미련과 집착이 관계를 다시 이어지게 만들 가능성도 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.money.CONSUMPTION,

      texts: [
        "순간적인 만족이 반복적인 지출로 이어질 가능성이 있습니다.",
        "감정적인 소비 패턴이 강해질 수 있어 보입니다.",
      ],
    },
  ],

  Moon: [
    {
      type: QUESTION_TYPES.love.SOME,

      texts: [
        "상대의 감정을 확신하기 어려운 흐름이 이어질 수 있습니다.",
        "보이지 않는 불안감이 관계를 흔들 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.money.INVEST,

      texts: [
        "보이지 않는 리스크가 숨어있을 수 있습니다.",
        "확실하지 않은 정보가 많아 보입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.MONTH_FLOW,

      texts: [
        "불확실한 흐름 속에서 감정 기복이 커질 가능성이 있습니다.",
        "확신하기 어려운 상황이 이어질 수 있어 보입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.POSSIBILITY,

      texts: ["보이지 않는 변수들이 결과 흐름에 영향을 줄 가능성이 있습니다."],
    },
  ],

  Hermit: [
    {
      type: QUESTION_TYPES.love.RELATION_FLOW,

      texts: ["지금은 감정보다 혼자만의 시간이 더 필요한 흐름일 수 있습니다."],
    },
  ],

  Sun: [
    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: [
        "긍정적인 평가와 좋은 결과로 이어질 가능성이 높습니다.",
        "당신의 장점이 자연스럽게 드러날 수 있는 흐름입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.PROMOTION,

      texts: ["주변에서 당신의 성과를 인정할 가능성이 높아 보입니다."],
    },
  ],

  Tower: [
    {
      type: QUESTION_TYPES.love.CONFESSION,

      texts: ["예상하지 못한 감정 변화가 관계 흐름을 크게 흔들 수 있습니다."],
    },

    {
      type: QUESTION_TYPES.career.RESIGN,

      texts: [
        "갑작스러운 환경 변화가 결정을 흔들 가능성이 있습니다.",
        "예상하지 못한 흐름 변화가 나타날 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.CHANGE,

      texts: [
        "예상하지 못했던 변화가 흐름을 크게 흔들 가능성이 있습니다.",
        "갑작스러운 전환점이 새로운 방향으로 이어질 수 있습니다.",
      ],
    },
  ],

  WheelOfFortune: [
    {
      type: QUESTION_TYPES.money.INVEST,

      texts: [
        "흐름이 빠르게 변하고 있어 타이밍이 중요해 보입니다.",
        "예상하지 못한 기회가 들어올 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.TRANSFER,

      texts: [
        "예상하지 못했던 기회가 갑자기 들어올 가능성이 있습니다.",
        "흐름의 변화가 새로운 방향으로 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: ["타이밍이 생각보다 중요한 영향을 줄 수 있습니다."],
    },

    {
      type: QUESTION_TYPES.future.NEAR_FUTURE,

      texts: [
        "예상하지 못했던 흐름 변화가 가까운 시기에 들어올 가능성이 있습니다.",
        "타이밍의 변화가 새로운 기회로 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.CHANGE,

      texts: ["지금의 변화 흐름은 생각보다 빠르게 움직일 가능성이 있습니다."],
    },
  ],

  Emperor: [
    {
      type: QUESTION_TYPES.career.PROMOTION,

      texts: [
        "책임감 있는 태도가 좋은 평가로 이어질 수 있습니다.",
        "안정적인 리더십이 강점으로 작용할 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: ["차분하고 신뢰감 있는 인상이 중요하게 작용할 수 있습니다."],
    },
  ],

  Magician: [
    {
      type: QUESTION_TYPES.career.TRANSFER,

      texts: [
        "새로운 기회를 스스로 만들어갈 가능성이 높아 보입니다.",
        "당신의 능력을 더 잘 활용할 수 있는 흐름이 열리고 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: ["자신감 있는 표현이 좋은 결과로 이어질 가능성이 있습니다."],
    },
  ],

  Justice: [
    {
      type: QUESTION_TYPES.love.BREAKUP,

      texts: [
        "감정보다 현실적인 문제들이 관계에 더 큰 영향을 주고 있을 가능성이 있습니다.",
        "서로의 입장을 냉정하게 바라볼 필요가 있는 흐름입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.money.INVEST,

      texts: [
        "충동적인 선택보다 현실적인 분석이 더 중요하게 작용할 수 있습니다.",
        "객관적인 판단이 손실을 줄이는 데 도움이 될 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: ["차분하고 논리적인 태도가 좋은 평가로 이어질 가능성이 있습니다."],
    },
  ],

  Temperance: [
    {
      type: QUESTION_TYPES.love.RELATION_FLOW,

      texts: [
        "서로의 감정 균형이 천천히 맞춰지고 있는 흐름입니다.",
        "급하게 관계를 움직이기보다 자연스러운 조율이 중요해 보입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.mind.HEALING,

      texts: [
        "조금씩 마음의 안정을 되찾아갈 가능성이 있습니다.",
        "지금은 스스로를 회복시키는 흐름이 중요하게 작용할 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.mind.ANXIETY,

      texts: [
        "불안했던 감정 흐름이 천천히 안정되어 갈 가능성이 있습니다.",
        "지금은 감정을 억누르기보다 천천히 정리하는 시간이 필요해 보입니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.MONTH_FLOW,

      texts: [
        "급격한 변화보다 안정적인 흐름 회복이 더 중요하게 작용할 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.future.DIRECTION,

      texts: [
        "균형을 유지하는 선택이 앞으로의 흐름에 긍정적인 영향을 줄 수 있습니다.",
      ],
    },
  ],

  Fool: [
    {
      type: QUESTION_TYPES.love.CONFESSION,

      texts: [
        "예상하지 못했던 감정 흐름이 갑자기 시작될 가능성이 있습니다.",
        "가벼운 시작이 새로운 관계 흐름으로 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.TRANSFER,

      texts: [
        "새로운 환경에 대한 도전 의지가 강해지고 있습니다.",
        "익숙함보다 새로운 가능성을 선택하게 될 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.mind.CONFIDENCE,

      texts: ["지금은 결과보다 한 걸음 움직여보는 용기가 중요할 수 있습니다."],
    },

    {
      type: QUESTION_TYPES.future.NEAR_FUTURE,

      texts: ["새로운 흐름이 예상보다 가볍고 빠르게 시작될 가능성이 있습니다."],
    },

    {
      type: QUESTION_TYPES.future.DIRECTION,

      texts: ["결과를 확신하기보다 직접 움직여보는 과정이 중요할 수 있습니다."],
    },
  ],

  HighPriestess: [
    {
      type: QUESTION_TYPES.love.SOME,

      texts: [
        "겉으로 드러나지 않은 감정이 천천히 쌓이고 있을 가능성이 있습니다.",
        "상대의 속마음을 쉽게 확신하기 어려운 흐름이 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.love.RELATION_FLOW,

      texts: [
        "지금은 관계를 서두르기보다 흐름을 조용히 지켜보는 것이 중요해 보입니다.",
        "말보다 분위기와 감정 흐름이 더 크게 작용할 가능성이 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.mind.ANXIETY,

      texts: [
        "겉으로 드러나지 않은 걱정이 마음속에 계속 남아 있을 수 있습니다.",
        "생각이 많아질수록 감정 흐름이 더 복잡해질 가능성이 있습니다.",
      ],
    },
  ],

  Chariot: [
    {
      type: QUESTION_TYPES.career.INTERVIEW,

      texts: [
        "강한 추진력과 자신감이 좋은 결과로 이어질 가능성이 있습니다.",
        "주도적인 태도가 긍정적인 인상으로 이어질 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.career.TRANSFER,

      texts: [
        "지금의 변화는 새로운 성장 흐름으로 이어질 가능성이 있습니다.",
        "망설임보다 행동력이 중요한 시기가 될 수 있습니다.",
      ],
    },

    {
      type: QUESTION_TYPES.mind.CONFIDENCE,

      texts: ["스스로 방향을 정하고 움직이는 힘이 점점 강해지고 있습니다."],
    },

    {
      type: QUESTION_TYPES.future.CHANGE,

      texts: ["강한 추진력이 흐름 변화를 빠르게 만들 가능성이 있습니다."],
    },

    {
      type: QUESTION_TYPES.future.TIMING,

      texts: ["지금은 망설이기보다 움직이는 타이밍이 중요해 보입니다."],
    },
  ],
};
