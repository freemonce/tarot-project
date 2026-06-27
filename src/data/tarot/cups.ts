// src/data/tarot/cups.ts

import type { TarotInterpretation } from "../../types/tarotInterpretation";

export const cupsInterpretations: Record<number, TarotInterpretation> = {
  22: {
    upright: {
      general: {
        meaning: "새로운 감정과 가능성이 시작되는 흐름입니다.",

        advice: "마음을 열고 다가오는 기회를 받아들여 보세요.",

        keywords: ["감정", "시작", "설렘"],

        tone: "emotion",

        emotionalLevel: 82,

        chance: 80,
      },

      categories: {
        love: {
          meaning: "새로운 인연이나 관계 발전의 가능성이 보입니다.",

          advice: "감정을 솔직하게 표현하는 것이 중요합니다.",

          keywords: ["고백", "설렘", "새로운 만남"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 85,
        },

        career: {
          meaning: "새로운 프로젝트나 긍정적인 협업 기회가 생길 수 있습니다.",

          advice: "사람과의 관계를 적극적으로 활용해보세요.",

          keywords: ["협업", "기회", "관계"],

          tone: "hope",

          emotionalLevel: 70,

          chance: 75,
        },

        money: {
          meaning: "새로운 수입원이나 재정적 기회가 보일 수 있습니다.",

          advice: "작은 기회라도 가볍게 넘기지 마세요.",

          keywords: ["수입", "기회", "흐름"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 72,
        },
      },
    },

    reversed: {
      general: {
        meaning: "감정 표현이 막히거나 기회를 놓칠 수 있습니다.",

        advice: "억누르기보다 자신의 마음을 먼저 이해해보세요.",

        keywords: ["답답함", "억제", "망설임"],

        tone: "sad",

        emotionalLevel: 40,

        chance: 35,
      },

      categories: {
        love: {
          meaning: "감정의 엇갈림이나 표현 부족이 나타날 수 있습니다.",

          advice: "상대방의 마음을 추측하기보다 직접 대화하세요.",

          keywords: ["오해", "거리감", "답답함"],

          tone: "sad",

          emotionalLevel: 35,

          chance: 30,
        },

        career: {
          meaning: "협업 과정에서 의사소통 문제가 발생할 수 있습니다.",

          advice: "혼자 판단하기보다 의견을 나누는 것이 중요합니다.",

          keywords: ["오해", "지연", "소통"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 40,
        },

        money: {
          meaning: "기회를 알아보지 못하거나 판단이 늦어질 수 있습니다.",

          advice: "지나친 신중함이 기회를 놓치게 만들 수 있습니다.",

          keywords: ["망설임", "기회상실", "지연"],

          tone: "neutral",

          emotionalLevel: 48,

          chance: 42,
        },
      },
    },
  },

  23: {
    upright: {
      general: {
        meaning: "서로를 이해하고 연결되는 흐름이 강해집니다.",

        advice: "진심 어린 관계를 만들어가는 데 집중해보세요.",

        keywords: ["조화", "관계", "신뢰"],

        tone: "emotion",

        emotionalLevel: 85,

        chance: 83,
      },

      categories: {
        love: {
          meaning: "서로에게 호감을 느끼고 관계가 발전할 수 있습니다.",

          advice: "상대방과의 균형 있는 소통이 중요합니다.",

          keywords: ["연애", "호감", "교감"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 88,
        },

        career: {
          meaning: "좋은 파트너나 협력자를 만날 가능성이 있습니다.",

          advice: "혼자보다 함께하는 방식이 좋은 결과를 만듭니다.",

          keywords: ["파트너", "협력", "신뢰"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 80,
        },

        money: {
          meaning: "재정적으로 도움을 주고받는 흐름이 나타납니다.",

          advice: "신뢰할 수 있는 사람과 협력해보세요.",

          keywords: ["협력", "공동", "지원"],

          tone: "neutral",

          emotionalLevel: 65,

          chance: 75,
        },
      },
    },

    reversed: {
      general: {
        meaning: "관계의 균형이 깨지거나 오해가 생길 수 있습니다.",

        advice: "감정적인 판단보다 대화를 우선해보세요.",

        keywords: ["갈등", "오해", "불균형"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 38,
      },

      categories: {
        love: {
          meaning: "서로의 기대가 엇갈릴 수 있습니다.",

          advice: "혼자 결론 내리지 말고 직접 확인해보세요.",

          keywords: ["거리감", "갈등", "오해"],

          tone: "sad",

          emotionalLevel: 38,

          chance: 32,
        },
      },
    },
  },

  24: {
    upright: {
      general: {
        meaning: "기쁨과 축하, 긍정적인 교류가 활발해집니다.",

        advice: "좋은 사람들과 함께하는 시간을 즐기세요.",

        keywords: ["축하", "우정", "행복"],

        tone: "hope",

        emotionalLevel: 88,

        chance: 86,
      },

      categories: {
        love: {
          meaning: "즐거운 만남이나 관계 진전의 계기가 생길 수 있습니다.",

          advice: "가벼운 만남 속에서도 좋은 인연이 시작될 수 있습니다.",

          keywords: ["만남", "즐거움", "인연"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 84,
        },

        career: {
          meaning: "팀워크와 협력이 성과로 이어질 수 있습니다.",

          advice: "혼자보다 함께하는 과정에 집중하세요.",

          keywords: ["팀워크", "성과", "협력"],

          tone: "hope",

          emotionalLevel: 75,

          chance: 82,
        },

        money: {
          meaning: "작은 성과나 수익을 기쁘게 받아들일 수 있습니다.",

          advice: "지금은 확장보다 현재 성과를 즐겨보세요.",

          keywords: ["성과", "수익", "안정"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 78,
        },
      },
    },

    reversed: {
      general: {
        meaning: "즐거움이 과해져 집중력을 잃을 수 있습니다.",

        advice: "균형을 유지하며 중요한 일을 놓치지 마세요.",

        keywords: ["산만함", "과소비", "방심"],

        tone: "warning",

        emotionalLevel: 50,

        chance: 40,
      },
    },
  },

  25: {
    upright: {
      general: {
        meaning: "주변 기회가 있음에도 만족하지 못하는 상태입니다.",

        advice: "지금 가진 것의 가치를 다시 바라보는 것이 필요합니다.",

        keywords: ["권태", "무관심", "정체"],

        tone: "neutral",

        emotionalLevel: 55,

        chance: 60,
      },

      categories: {
        love: {
          meaning: "관계에 권태감이나 무관심이 생길 수 있습니다.",

          advice: "당연하게 여기던 감정을 다시 돌아보세요.",

          keywords: ["권태", "거리감", "무관심"],

          tone: "sad",

          emotionalLevel: 45,

          chance: 50,
        },

        career: {
          meaning: "현재 업무에 대한 동기 저하가 나타날 수 있습니다.",

          advice: "새로운 관점으로 일을 바라보는 것이 좋습니다.",

          keywords: ["정체", "권태", "피로"],

          tone: "neutral",

          emotionalLevel: 52,

          chance: 58,
        },
      },
    },

    reversed: {
      general: {
        meaning: "정체 상태를 벗어나 새로운 기회를 발견하게 됩니다.",

        advice: "작은 변화라도 시도해보는 것이 중요합니다.",

        keywords: ["각성", "변화", "기회"],

        tone: "hope",

        emotionalLevel: 70,

        chance: 75,
      },
    },
  },

  26: {
    upright: {
      general: {
        meaning: "상실감과 아쉬움이 크게 느껴질 수 있습니다.",

        advice: "잃은 것보다 남아 있는 것을 바라보세요.",

        keywords: ["상실", "후회", "아쉬움"],

        tone: "sad",

        emotionalLevel: 35,

        chance: 40,
      },

      categories: {
        love: {
          meaning: "관계에서 실망하거나 감정적 상처를 받을 수 있습니다.",

          advice: "과거보다 앞으로의 가능성을 보세요.",

          keywords: ["실망", "상처", "후회"],

          tone: "sad",

          emotionalLevel: 30,

          chance: 35,
        },

        career: {
          meaning: "예상보다 결과가 좋지 않을 수 있습니다.",

          advice: "실패 속에서도 배울 점을 찾는 것이 중요합니다.",

          keywords: ["실패", "아쉬움", "경험"],

          tone: "warning",

          emotionalLevel: 40,

          chance: 45,
        },
      },
    },

    reversed: {
      general: {
        meaning: "상실감을 극복하고 다시 앞으로 나아갈 수 있습니다.",

        advice: "과거를 정리하고 새로운 흐름을 받아들이세요.",

        keywords: ["회복", "재출발", "희망"],

        tone: "hope",

        emotionalLevel: 72,

        chance: 76,
      },
    },
  },

  27: {
    upright: {
      general: {
        meaning: "과거의 좋은 기억이나 인연이 다시 연결될 수 있습니다.",

        advice: "순수했던 마음을 떠올려보세요.",

        keywords: ["추억", "재회", "순수"],

        tone: "emotion",

        emotionalLevel: 85,

        chance: 82,
      },

      categories: {
        love: {
          meaning: "옛 인연이나 과거 감정이 다시 떠오를 수 있습니다.",

          advice: "현재 감정과 과거 추억을 구분해서 바라보세요.",

          keywords: ["재회", "추억", "인연"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 84,
        },

        career: {
          meaning: "과거 경험이 현재 문제 해결에 도움이 됩니다.",

          advice: "이미 배운 것을 적극 활용해보세요.",

          keywords: ["경험", "기억", "활용"],

          tone: "hope",

          emotionalLevel: 68,

          chance: 78,
        },
      },
    },

    reversed: {
      general: {
        meaning: "과거에 집착하여 현재를 놓칠 수 있습니다.",

        advice: "추억은 추억으로 남겨두는 것이 필요합니다.",

        keywords: ["집착", "과거", "정체"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 42,
      },
    },
  },

  28: {
    upright: {
      general: {
        meaning: "여러 가능성과 선택지가 눈앞에 펼쳐지는 시기입니다.",

        advice: "환상보다 현실적인 판단을 우선하세요.",

        keywords: ["선택", "가능성", "환상"],

        tone: "neutral",

        emotionalLevel: 68,

        chance: 70,
      },

      categories: {
        love: {
          meaning: "여러 감정이나 선택지 사이에서 고민할 수 있습니다.",

          advice: "순간적인 설렘보다 진정성을 확인해보세요.",

          keywords: ["선택", "고민", "설렘"],

          tone: "emotion",

          emotionalLevel: 75,

          chance: 68,
        },

        career: {
          meaning: "여러 기회가 보이지만 방향성이 부족할 수 있습니다.",

          advice: "모든 것을 잡기보다 우선순위를 정하세요.",

          keywords: ["기회", "선택", "방향"],

          tone: "neutral",

          emotionalLevel: 62,

          chance: 72,
        },

        money: {
          meaning: "투자나 소비 선택이 많아질 수 있습니다.",

          advice: "과장된 기대를 경계하세요.",

          keywords: ["투자", "판단", "선택"],

          tone: "warning",

          emotionalLevel: 58,

          chance: 60,
        },
      },
    },

    reversed: {
      general: {
        meaning: "혼란스러웠던 상황이 정리되고 방향이 보이기 시작합니다.",

        advice: "결정을 미루지 말고 실행해보세요.",

        keywords: ["결정", "정리", "집중"],

        tone: "hope",

        emotionalLevel: 72,

        chance: 76,
      },
    },
  },

  29: {
    upright: {
      general: {
        meaning: "익숙한 것을 떠나 새로운 길을 찾게 되는 시기입니다.",

        advice: "미련보다 성장 가능성을 선택하세요.",

        keywords: ["떠남", "변화", "성장"],

        tone: "hope",

        emotionalLevel: 70,

        chance: 78,
      },

      categories: {
        love: {
          meaning: "현재 관계를 다시 고민하거나 거리두게 될 수 있습니다.",

          advice: "감정에 솔직해지는 것이 중요합니다.",

          keywords: ["거리감", "고민", "정리"],

          tone: "sad",

          emotionalLevel: 45,

          chance: 40,
        },

        career: {
          meaning: "새로운 진로나 도전을 고민하게 될 수 있습니다.",

          advice: "안정성보다 성장성을 살펴보세요.",

          keywords: ["이직", "도전", "성장"],

          tone: "hope",

          emotionalLevel: 68,

          chance: 80,
        },

        money: {
          meaning: "기존 재정 방식에 변화를 주게 될 수 있습니다.",

          advice: "익숙한 방식만 고집하지 마세요.",

          keywords: ["변화", "재정", "새로운방식"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 70,
        },
      },
    },

    reversed: {
      general: {
        meaning: "떠나야 할 상황을 붙잡고 있을 수 있습니다.",

        advice: "익숙함 때문에 기회를 놓치지 마세요.",

        keywords: ["미련", "집착", "정체"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },

  30: {
    upright: {
      general: {
        meaning: "바라던 일이 이루어지거나 만족감을 느끼게 됩니다.",

        advice: "지금의 성취를 충분히 즐기세요.",

        keywords: ["만족", "성취", "행복"],

        tone: "hope",

        emotionalLevel: 92,

        chance: 90,
      },

      categories: {
        love: {
          meaning: "감정적으로 만족스러운 흐름이 기대됩니다.",

          advice: "현재의 행복을 있는 그대로 받아들이세요.",

          keywords: ["행복", "만족", "연애"],

          tone: "emotion",

          emotionalLevel: 95,

          chance: 90,
        },

        career: {
          meaning: "원하던 성과를 얻게 될 가능성이 있습니다.",

          advice: "결과를 즐기면서 다음 목표도 준비해보세요.",

          keywords: ["성과", "달성", "만족"],

          tone: "hope",

          emotionalLevel: 85,

          chance: 88,
        },

        money: {
          meaning: "재정적으로 만족할 만한 결과가 나타날 수 있습니다.",

          advice: "현재 성과를 안정적으로 관리하세요.",

          keywords: ["수익", "만족", "안정"],

          tone: "neutral",

          emotionalLevel: 80,

          chance: 85,
        },
      },
    },

    reversed: {
      general: {
        meaning: "만족해야 할 상황에서도 공허함을 느낄 수 있습니다.",

        advice: "진짜 원하는 것이 무엇인지 돌아보세요.",

        keywords: ["공허", "욕심", "불만족"],

        tone: "warning",

        emotionalLevel: 48,

        chance: 42,
      },
    },
  },

  31: {
    upright: {
      general: {
        meaning: "관계와 감정에서 완성에 가까운 행복을 느끼게 됩니다.",

        advice: "주변 사람들과 행복을 나누세요.",

        keywords: ["행복", "완성", "가족"],

        tone: "hope",

        emotionalLevel: 98,

        chance: 95,
      },

      categories: {
        love: {
          meaning: "이상적인 관계나 안정적인 사랑의 흐름이 나타납니다.",

          advice: "지금의 관계를 소중히 여기세요.",

          keywords: ["사랑", "행복", "안정"],

          tone: "emotion",

          emotionalLevel: 98,

          chance: 95,
        },

        career: {
          meaning: "주변 사람들과 좋은 관계 속에서 성과를 만들 수 있습니다.",

          advice: "혼자보다 함께하는 성공을 추구하세요.",

          keywords: ["협력", "완성", "성과"],

          tone: "hope",

          emotionalLevel: 85,

          chance: 88,
        },

        money: {
          meaning: "재정적으로 안정감을 느끼게 될 가능성이 있습니다.",

          advice: "현재의 안정성을 유지하는 데 집중하세요.",

          keywords: ["안정", "풍요", "만족"],

          tone: "neutral",

          emotionalLevel: 82,

          chance: 90,
        },
      },
    },

    reversed: {
      general: {
        meaning: "관계 속 기대와 현실이 달라 실망할 수 있습니다.",

        advice: "완벽함보다 현실적인 행복을 찾아보세요.",

        keywords: ["실망", "기대", "불균형"],

        tone: "sad",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  32: {
    upright: {
      general: {
        meaning: "순수한 감정과 새로운 소식이 다가올 수 있습니다.",

        advice: "직감과 감정을 믿어보세요.",

        keywords: ["감성", "소식", "순수함"],

        tone: "emotion",

        emotionalLevel: 85,

        chance: 82,
      },

      categories: {
        love: {
          meaning: "설레는 연락이나 새로운 인연의 가능성이 있습니다.",

          advice: "마음을 닫지 말고 자연스럽게 표현해보세요.",

          keywords: ["연락", "고백", "설렘"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 88,
        },

        career: {
          meaning: "새로운 제안이나 긍정적인 소식이 들어올 수 있습니다.",

          advice: "배우는 자세를 유지하세요.",

          keywords: ["제안", "배움", "기회"],

          tone: "hope",

          emotionalLevel: 70,

          chance: 78,
        },
      },
    },

    reversed: {
      general: {
        meaning: "감정 기복이나 미성숙한 대응이 나타날 수 있습니다.",

        advice: "감정에 휘둘리지 않도록 주의하세요.",

        keywords: ["감정기복", "유치함", "혼란"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  33: {
    upright: {
      general: {
        meaning: "감정을 따라 움직이며 이상을 향해 나아갑니다.",

        advice: "진심을 행동으로 보여주는 것이 중요합니다.",

        keywords: ["로맨스", "행동", "감정"],

        tone: "emotion",

        emotionalLevel: 88,

        chance: 84,
      },

      categories: {
        love: {
          meaning: "연애운이 강하게 들어오는 시기입니다.",

          advice: "감정을 솔직하게 전달해보세요.",

          keywords: ["연애", "고백", "로맨틱"],

          tone: "emotion",

          emotionalLevel: 95,

          chance: 92,
        },

        career: {
          meaning: "좋아하는 일을 향해 움직이게 됩니다.",

          advice: "현실성과 열정을 균형 있게 가져가세요.",

          keywords: ["열정", "도전", "꿈"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 80,
        },
      },
    },

    reversed: {
      general: {
        meaning: "감정에 치우쳐 현실 판단이 흐려질 수 있습니다.",

        advice: "이상과 현실을 함께 고려하세요.",

        keywords: ["환상", "감정과잉", "불안정"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },

  34: {
    upright: {
      general: {
        meaning: "감정적으로 성숙하며 타인을 깊이 이해할 수 있습니다.",

        advice: "자신의 직감을 신뢰해보세요.",

        keywords: ["직감", "이해", "배려"],

        tone: "emotion",

        emotionalLevel: 90,

        chance: 86,
      },

      categories: {
        love: {
          meaning: "깊고 안정적인 사랑의 흐름이 나타납니다.",

          advice: "상대를 이해하려는 태도가 중요합니다.",

          keywords: ["배려", "공감", "안정"],

          tone: "emotion",

          emotionalLevel: 95,

          chance: 90,
        },

        career: {
          meaning: "사람을 다루는 능력이 강점으로 작용합니다.",

          advice: "관계 중심의 접근이 좋은 결과를 만듭니다.",

          keywords: ["공감", "관계", "신뢰"],

          tone: "hope",

          emotionalLevel: 75,

          chance: 82,
        },
      },
    },

    reversed: {
      general: {
        meaning: "감정 소모가 심하거나 지나친 예민함이 나타날 수 있습니다.",

        advice: "타인보다 자신의 감정도 돌보세요.",

        keywords: ["예민함", "감정소모", "불안"],

        tone: "sad",

        emotionalLevel: 40,

        chance: 35,
      },
    },
  },

  35: {
    upright: {
      general: {
        meaning: "감정을 잘 통제하며 성숙하게 상황을 이끌어갑니다.",

        advice: "냉정함과 따뜻함의 균형을 유지하세요.",

        keywords: ["성숙", "안정", "통제"],

        tone: "hope",

        emotionalLevel: 88,

        chance: 90,
      },

      categories: {
        love: {
          meaning: "안정적이고 신뢰할 수 있는 관계가 형성됩니다.",

          advice: "감정을 숨기기보다 표현해보세요.",

          keywords: ["신뢰", "안정", "책임감"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 90,
        },

        career: {
          meaning: "리더십과 판단력이 인정받을 수 있습니다.",

          advice: "감정적 판단보다 균형 잡힌 결정을 내리세요.",

          keywords: ["리더십", "판단력", "신뢰"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 88,
        },

        money: {
          meaning: "안정적인 재정 운영이 가능한 시기입니다.",

          advice: "장기적인 관점으로 자산을 관리하세요.",

          keywords: ["안정", "관리", "신뢰"],

          tone: "neutral",

          emotionalLevel: 72,

          chance: 86,
        },
      },
    },

    reversed: {
      general: {
        meaning: "감정을 억누르거나 반대로 통제하지 못할 수 있습니다.",

        advice: "감정을 외면하지 말고 건강하게 표현하세요.",

        keywords: ["억압", "감정폭발", "불균형"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },
};
