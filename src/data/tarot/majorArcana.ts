// src/data/tarot/majorArcana.ts

import type { TarotInterpretation } from "../../types/tarotInterpretation";

export const majorArcana: Record<number, TarotInterpretation> = {
  0: {
    upright: {
      general: {
        meaning: "새로운 시작과 가능성이 열리는 시기입니다.",

        advice: "완벽함보다 첫걸음을 내딛는 용기가 중요합니다.",

        keywords: ["시작", "가능성", "도전"],

        tone: "hope",

        emotionalLevel: 75,

        chance: 80,
      },

      categories: {
        love: {
          meaning: "새로운 인연이나 감정의 흐름이 시작될 수 있습니다.",

          advice: "계산보다 솔직한 감정 표현이 중요합니다.",

          keywords: ["설렘", "새로운 만남", "직감"],

          tone: "emotion",

          emotionalLevel: 82,

          chance: 76,
        },

        career: {
          meaning: "새로운 도전이나 방향 전환의 기회가 보입니다.",

          advice: "지금은 경험을 두려워하지 않는 자세가 필요합니다.",

          keywords: ["도전", "변화", "기회"],

          tone: "hope",

          emotionalLevel: 68,

          chance: 74,
        },

        money: {
          meaning: "새로운 수입 흐름이나 기회가 들어올 수 있습니다.",

          advice: "충동적인 소비보다는 가능성을 보는 판단이 중요합니다.",

          keywords: ["기회", "재물", "흐름"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 70,
        },
      },
    },

    reversed: {
      general: {
        meaning: "방향성 혼란이나 충동적인 선택 가능성이 있습니다.",

        advice: "지금은 잠시 멈추고 흐름을 정리할 필요가 있습니다.",

        keywords: ["혼란", "불안", "충동"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 35,
      },

      categories: {
        love: {
          meaning: "감정의 오해나 불안정한 관계 흐름이 나타날 수 있습니다.",

          advice: "확신 없는 행동보다 대화가 중요합니다.",

          keywords: ["오해", "거리감", "불안정"],

          tone: "sad",

          emotionalLevel: 40,

          chance: 30,
        },

        career: {
          meaning: "계획 부족이나 준비 미흡으로 흔들릴 수 있습니다.",

          advice: "급하게 움직이기보다 방향 점검이 우선입니다.",

          keywords: ["불안", "지연", "재정비"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 42,
        },
      },
    },
  },
  1: {
    upright: {
      general: {
        meaning: "원하는 방향으로 흐름을 만들어갈 힘이 커지고 있습니다.",

        advice: "망설이기보다 스스로 가능성을 믿고 움직이는 것이 중요합니다.",

        keywords: ["능력", "실행력", "자신감"],

        tone: "hope",

        emotionalLevel: 78,

        chance: 82,
      },

      categories: {
        love: {
          meaning:
            "관계에서 자신의 감정을 솔직하게 표현할 기회가 생길 수 있습니다.",

          advice:
            "상대의 반응을 두려워하기보다 진심을 보여주는 것이 중요합니다.",

          keywords: ["표현", "매력", "자신감"],

          tone: "emotion",

          emotionalLevel: 84,

          chance: 80,
        },

        career: {
          meaning: "능력을 인정받거나 새로운 기회를 잡게 될 가능성이 있습니다.",

          advice:
            "지금은 아이디어를 숨기기보다 적극적으로 보여주는 것이 좋습니다.",

          keywords: ["성과", "기회", "능력"],

          tone: "hope",

          emotionalLevel: 70,

          chance: 86,
        },

        money: {
          meaning:
            "재정 흐름에서 새로운 기회나 수입 가능성이 열릴 수 있습니다.",

          advice:
            "충동보다 계획적인 움직임이 더 좋은 결과로 이어질 수 있습니다.",

          keywords: ["수입", "기회", "계획"],

          tone: "neutral",

          emotionalLevel: 62,

          chance: 74,
        },
      },
    },

    reversed: {
      general: {
        meaning: "자신감 부족이나 방향 혼란으로 흐름이 흔들릴 수 있습니다.",

        advice:
          "결과를 조급하게 만들기보다 지금 필요한 준비를 먼저 점검해보세요.",

        keywords: ["혼란", "망설임", "불안"],

        tone: "warning",

        emotionalLevel: 44,

        chance: 38,
      },

      categories: {
        love: {
          meaning: "감정을 숨기거나 표현 방식의 오해가 생길 가능성이 있습니다.",

          advice: "확신 없는 태도보다 솔직한 대화가 관계 흐름에 도움이 됩니다.",

          keywords: ["오해", "거리감", "불안"],

          tone: "sad",

          emotionalLevel: 40,

          chance: 34,
        },

        career: {
          meaning:
            "능력을 충분히 보여주지 못하거나 기회를 놓칠 가능성이 있습니다.",

          advice: "불안감 때문에 스스로를 제한하지 않는 것이 중요합니다.",

          keywords: ["지연", "위축", "불안"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 40,
        },

        money: {
          meaning: "재정 흐름에서 계획 부족으로 흔들릴 가능성이 있습니다.",

          advice: "지금은 새로운 투자보다 현재 흐름 관리가 더 중요합니다.",

          keywords: ["불안정", "지출", "관리"],

          tone: "neutral",

          emotionalLevel: 50,

          chance: 42,
        },
      },
    },
  },
  2: {
    upright: {
      general: {
        meaning:
          "겉으로 드러나지 않은 흐름 속에서 중요한 직감이 움직이고 있습니다.",

        advice: "지금은 서두르기보다 조용히 상황을 관찰하는 태도가 필요합니다.",

        keywords: ["직감", "관찰", "내면"],

        tone: "emotion",

        emotionalLevel: 72,

        chance: 68,
      },

      categories: {
        love: {
          meaning: "말보다 감정의 흐름 속에서 서로를 느끼게 되는 시기입니다.",

          advice:
            "억지로 관계를 움직이기보다 감정의 흐름을 천천히 받아들이세요.",

          keywords: ["감정", "직감", "거리감"],

          tone: "emotion",

          emotionalLevel: 86,

          chance: 70,
        },

        career: {
          meaning: "아직 드러나지 않은 기회나 가능성이 숨어 있을 수 있습니다.",

          advice: "성급하게 결정하기보다 정보를 충분히 모으는 것이 중요합니다.",

          keywords: ["판단", "정보", "준비"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 66,
        },

        money: {
          meaning:
            "재정 흐름에서 신중함이 필요한 시기이며 숨은 변수 가능성이 있습니다.",

          advice: "지금은 공격적인 선택보다 안정적인 흐름 유지가 중요합니다.",

          keywords: ["신중", "안정", "흐름"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 62,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "혼란스러운 감정이나 불안정한 판단으로 흐름이 흔들릴 수 있습니다.",

        advice: "직감만 믿기보다 현실적인 기준을 함께 확인할 필요가 있습니다.",

        keywords: ["혼란", "불안", "착각"],

        tone: "warning",

        emotionalLevel: 48,

        chance: 40,
      },

      categories: {
        love: {
          meaning:
            "감정의 오해나 숨겨진 불안이 관계 흐름에 영향을 줄 수 있습니다.",

          advice: "혼자 판단하기보다 상대와의 솔직한 대화가 중요합니다.",

          keywords: ["오해", "불안", "거리"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 36,
        },

        career: {
          meaning:
            "정보 부족이나 판단 실수로 인해 방향이 흔들릴 가능성이 있습니다.",

          advice: "불확실한 상황일수록 확인 과정을 더 꼼꼼히 해야 합니다.",

          keywords: ["혼란", "판단미스", "불안"],

          tone: "warning",

          emotionalLevel: 46,

          chance: 38,
        },
      },
    },
  },

  3: {
    upright: {
      general: {
        meaning:
          "풍요로운 흐름과 함께 감정적으로 안정감을 느끼게 되는 시기입니다.",

        advice:
          "지금은 자신을 돌보며 흐름을 자연스럽게 받아들이는 것이 중요합니다.",

        keywords: ["풍요", "안정", "성장"],

        tone: "hope",

        emotionalLevel: 82,

        chance: 84,
      },

      categories: {
        love: {
          meaning: "따뜻하고 안정적인 관계 흐름이 만들어질 가능성이 높습니다.",

          advice:
            "상대에게 편안함과 진심을 보여주는 것이 관계를 더 깊게 만듭니다.",

          keywords: ["안정", "애정", "따뜻함"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 86,
        },

        career: {
          meaning:
            "주변의 도움이나 좋은 환경 속에서 성장 기회가 열릴 수 있습니다.",

          advice: "혼자 해결하려 하기보다 협력을 활용하는 것이 중요합니다.",

          keywords: ["성장", "협력", "기회"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 80,
        },

        money: {
          meaning:
            "재정적으로 안정 흐름이 들어오며 만족감을 느낄 가능성이 있습니다.",

          advice: "지금은 무리한 확장보다 현재 흐름을 유지하는 것이 좋습니다.",

          keywords: ["안정", "풍요", "유지"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 78,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "감정적인 피로감이나 지나친 기대감으로 흐름이 흔들릴 수 있습니다.",

        advice: "외부보다 자신의 균형을 먼저 돌보는 시간이 필요합니다.",

        keywords: ["피로", "과몰입", "불균형"],

        tone: "sad",

        emotionalLevel: 52,

        chance: 44,
      },

      categories: {
        love: {
          meaning: "관계 속 기대 차이로 인해 서운함이 커질 가능성이 있습니다.",

          advice: "상대의 반응만 기다리기보다 자신의 감정을 먼저 정리해보세요.",

          keywords: ["서운함", "기대", "감정"],

          tone: "sad",

          emotionalLevel: 48,

          chance: 38,
        },

        career: {
          meaning: "주변 환경 문제나 감정 소모로 집중력이 흔들릴 수 있습니다.",

          advice: "지금은 무리하게 결과를 만들기보다 리듬 회복이 중요합니다.",

          keywords: ["피로", "스트레스", "흔들림"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 42,
        },
      },
    },
  },

  4: {
    upright: {
      general: {
        meaning:
          "안정적인 기반과 통제력이 강해지며 흐름을 주도하게 될 수 있습니다.",

        advice: "지금은 감정보다 현실적인 판단이 더 중요한 시기입니다.",

        keywords: ["안정", "통제", "책임"],

        tone: "neutral",

        emotionalLevel: 64,

        chance: 82,
      },

      categories: {
        love: {
          meaning:
            "관계에서 안정감은 커지지만 감정 표현은 다소 부족할 수 있습니다.",

          advice: "확신을 주는 것도 중요하지만 따뜻한 표현 역시 필요합니다.",

          keywords: ["안정", "책임감", "거리"],

          tone: "neutral",

          emotionalLevel: 70,

          chance: 74,
        },

        career: {
          meaning:
            "조직 내 입지 강화나 책임 있는 역할을 맡게 될 가능성이 있습니다.",

          advice: "지금은 흔들리지 않는 태도가 가장 큰 무기가 됩니다.",

          keywords: ["권한", "책임", "성과"],

          tone: "hope",

          emotionalLevel: 66,

          chance: 88,
        },

        money: {
          meaning:
            "재정 흐름이 안정적으로 유지되며 계획적인 관리가 가능해집니다.",

          advice: "충동보다 장기적인 흐름을 중심으로 움직이는 것이 중요합니다.",

          keywords: ["관리", "안정", "계획"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 84,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "지나친 통제 욕구나 고집으로 인해 흐름이 막힐 가능성이 있습니다.",

        advice: "모든 상황을 억지로 통제하려 하기보다 유연함이 필요합니다.",

        keywords: ["고집", "압박", "통제"],

        tone: "warning",

        emotionalLevel: 46,

        chance: 40,
      },

      categories: {
        love: {
          meaning: "관계 속 답답함이나 거리감이 커질 가능성이 있습니다.",

          advice:
            "상대방을 통제하려 하기보다 감정을 이해하려는 노력이 필요합니다.",

          keywords: ["답답함", "거리감", "고집"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 36,
        },

        career: {
          meaning: "권한 문제나 조직 스트레스로 인해 부담이 커질 수 있습니다.",

          advice: "혼자 모든 책임을 떠안으려 하지 않는 것이 중요합니다.",

          keywords: ["압박", "책임", "스트레스"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 38,
        },
      },
    },
  },

  5: {
    upright: {
      general: {
        meaning:
          "배움과 조언을 통해 흐름이 안정적으로 정리될 가능성이 있습니다.",

        advice:
          "혼자 판단하기보다 경험 있는 조언을 참고하는 것이 도움이 됩니다.",

        keywords: ["조언", "배움", "안정"],

        tone: "neutral",

        emotionalLevel: 66,

        chance: 76,
      },

      categories: {
        love: {
          meaning:
            "관계에서 신뢰와 안정감을 중심으로 흐름이 이어질 가능성이 있습니다.",

          advice: "가벼운 감정보다 진지한 태도가 관계를 더 단단하게 만듭니다.",

          keywords: ["신뢰", "안정", "진지함"],

          tone: "emotion",

          emotionalLevel: 78,

          chance: 74,
        },

        career: {
          meaning:
            "배움이나 경험 축적을 통해 성장 흐름이 만들어질 수 있습니다.",

          advice: "기본기를 다지는 시간이 앞으로 큰 힘이 될 가능성이 높습니다.",

          keywords: ["성장", "경험", "배움"],

          tone: "hope",

          emotionalLevel: 68,

          chance: 80,
        },

        money: {
          meaning:
            "안정적인 흐름 속에서 재정 관리 능력이 중요해지는 시기입니다.",

          advice: "단기 이익보다 지속 가능한 흐름을 우선하는 것이 좋습니다.",

          keywords: ["안정", "관리", "유지"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 72,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "고정된 생각이나 답답한 흐름 속에서 방향 혼란이 생길 수 있습니다.",

        advice: "익숙한 방식만 고집하기보다 새로운 시각을 받아들여보세요.",

        keywords: ["고정관념", "답답함", "혼란"],

        tone: "warning",

        emotionalLevel: 48,

        chance: 42,
      },

      categories: {
        love: {
          meaning:
            "관계 속 가치관 차이나 소통 문제로 거리감이 생길 수 있습니다.",

          advice:
            "정답을 강요하기보다 서로의 생각을 이해하려는 태도가 중요합니다.",

          keywords: ["거리감", "소통", "답답함"],

          tone: "sad",

          emotionalLevel: 44,

          chance: 36,
        },

        career: {
          meaning:
            "지나치게 익숙한 방식에 머물러 기회를 놓칠 가능성이 있습니다.",

          advice: "새로운 변화 흐름을 받아들이는 유연함이 필요합니다.",

          keywords: ["정체", "보수적", "변화"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 40,
        },
      },
    },
  },
  6: {
    upright: {
      general: {
        meaning:
          "중요한 선택의 흐름 속에서 감정과 현실 사이의 균형이 중요해지고 있습니다.",

        advice:
          "지금은 억지로 답을 정하기보다 진심이 향하는 방향을 바라보세요.",

        keywords: ["선택", "관계", "균형"],

        tone: "emotion",

        emotionalLevel: 84,

        chance: 78,
      },

      categories: {
        love: {
          meaning:
            "서로의 감정이 깊어지며 관계 흐름이 진지하게 발전할 가능성이 있습니다.",

          advice:
            "불안보다 진심을 선택하는 태도가 관계를 더 단단하게 만듭니다.",

          keywords: ["연결", "진심", "관계"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 88,
        },

        career: {
          meaning:
            "협업이나 중요한 결정 속에서 방향 선택의 기회가 나타날 수 있습니다.",

          advice: "조건만 보지 말고 스스로 납득할 수 있는 방향을 선택하세요.",

          keywords: ["선택", "협력", "결정"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 74,
        },

        money: {
          meaning:
            "재정 흐름에서 중요한 판단이나 소비 선택이 필요한 시기입니다.",

          advice:
            "감정 소비보다 장기적인 안정 흐름을 우선하는 것이 중요합니다.",

          keywords: ["선택", "판단", "안정"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 70,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "감정과 현실 사이의 충돌로 인해 선택 흐름이 흔들릴 가능성이 있습니다.",

        advice:
          "조급하게 결론을 내리기보다 자신의 진짜 마음을 먼저 확인해보세요.",

        keywords: ["혼란", "갈등", "망설임"],

        tone: "sad",

        emotionalLevel: 50,

        chance: 40,
      },

      categories: {
        love: {
          meaning:
            "관계 속 거리감이나 감정 혼란으로 인해 흐름이 불안정해질 수 있습니다.",

          advice: "상대의 반응만 기다리기보다 자신의 감정을 먼저 정리해보세요.",

          keywords: ["거리감", "갈등", "혼란"],

          tone: "sad",

          emotionalLevel: 46,

          chance: 34,
        },

        career: {
          meaning: "결정 장애나 우유부단함으로 기회를 놓칠 가능성이 있습니다.",

          advice:
            "모든 조건을 완벽히 맞추려 하기보다 우선순위를 정하는 것이 중요합니다.",

          keywords: ["우유부단", "갈등", "지연"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 38,
        },
      },
    },
  },

  7: {
    upright: {
      general: {
        meaning:
          "강한 추진력과 의지로 원하는 방향을 향해 움직일 가능성이 높아지고 있습니다.",

        advice:
          "흔들리는 상황 속에서도 자신의 방향성을 놓치지 않는 것이 중요합니다.",

        keywords: ["전진", "의지", "추진력"],

        tone: "hope",

        emotionalLevel: 78,

        chance: 86,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 빠르게 진전되거나 감정 변화가 강하게 움직일 수 있습니다.",

          advice: "감정에만 휩쓸리기보다 서로의 속도를 맞추는 것이 중요합니다.",

          keywords: ["진전", "열정", "속도"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 82,
        },

        career: {
          meaning:
            "목표를 향해 빠르게 성과를 만들어갈 가능성이 커지고 있습니다.",

          advice: "지금은 망설이기보다 추진력을 유지하는 것이 큰 힘이 됩니다.",

          keywords: ["성과", "전진", "집중"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 90,
        },

        money: {
          meaning:
            "재정 흐름에서 적극적인 움직임이나 새로운 기회가 생길 수 있습니다.",

          advice:
            "무리한 확장보다 계획된 실행이 더 좋은 결과로 이어질 수 있습니다.",

          keywords: ["기회", "실행", "흐름"],

          tone: "neutral",

          emotionalLevel: 64,

          chance: 78,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "방향 혼란이나 조급함으로 인해 흐름이 흔들릴 가능성이 있습니다.",

        advice:
          "속도보다 방향 점검이 먼저이며 무리한 추진은 피하는 것이 좋습니다.",

        keywords: ["조급함", "혼란", "충돌"],

        tone: "warning",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "감정 흐름이 급격히 흔들리며 다툼이나 거리감이 생길 가능성이 있습니다.",

          advice:
            "감정적인 반응보다 상대의 입장을 이해하려는 태도가 중요합니다.",

          keywords: ["충돌", "감정기복", "거리"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning:
            "무리한 추진이나 과한 경쟁으로 인해 피로감이 커질 수 있습니다.",

          advice: "지금은 속도를 줄이고 리듬을 회복하는 것이 더 중요합니다.",

          keywords: ["과부하", "스트레스", "혼란"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 36,
        },
      },
    },
  },

  8: {
    upright: {
      general: {
        meaning:
          "흔들리는 상황 속에서도 중심을 지켜낼 수 있는 힘이 강해지고 있습니다.",

        advice: "강한 압박 속에서도 감정을 조절하는 태도가 중요한 시기입니다.",

        keywords: ["인내", "통제", "내면의 힘"],

        tone: "hope",

        emotionalLevel: 76,

        chance: 80,
      },

      categories: {
        love: {
          meaning:
            "관계 속 감정을 안정적으로 이끌며 신뢰가 깊어질 가능성이 있습니다.",

          advice: "감정을 억누르기보다 부드럽게 표현하는 태도가 중요합니다.",

          keywords: ["신뢰", "안정", "배려"],

          tone: "emotion",

          emotionalLevel: 86,

          chance: 78,
        },

        career: {
          meaning:
            "압박감 속에서도 꾸준히 자신의 역할을 해내게 될 가능성이 있습니다.",

          advice: "지금은 단기 성과보다 꾸준함과 멘탈 관리가 중요합니다.",

          keywords: ["인내", "책임", "꾸준함"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 82,
        },

        money: {
          meaning: "재정 흐름에서 안정적으로 균형을 유지할 가능성이 높습니다.",

          advice: "무리한 욕심보다 현재 흐름 유지가 더 좋은 결과를 만듭니다.",

          keywords: ["균형", "관리", "안정"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 76,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "감정 피로감이나 자신감 저하로 인해 흐름이 약해질 가능성이 있습니다.",

        advice: "억지로 버티기보다 스스로를 회복시키는 시간이 필요합니다.",

        keywords: ["지침", "불안", "약화"],

        tone: "sad",

        emotionalLevel: 44,

        chance: 36,
      },

      categories: {
        love: {
          meaning:
            "감정 소모가 커지며 관계 흐름에서 피로감을 느낄 수 있습니다.",

          advice: "참고 견디기보다 자신의 감정을 솔직하게 표현해보세요.",

          keywords: ["감정소모", "답답함", "지침"],

          tone: "sad",

          emotionalLevel: 40,

          chance: 32,
        },

        career: {
          meaning:
            "압박감이나 스트레스로 인해 집중력이 흔들릴 가능성이 있습니다.",

          advice: "혼자 버티려 하기보다 주변 도움을 활용하는 것이 중요합니다.",

          keywords: ["스트레스", "압박", "피로"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 38,
        },
      },
    },
  },
  9: {
    upright: {
      general: {
        meaning:
          "혼자만의 시간 속에서 중요한 깨달음과 방향을 찾게 될 가능성이 있습니다.",

        advice:
          "지금은 외부 소음보다 자신의 내면 목소리에 집중하는 것이 중요합니다.",

        keywords: ["내면", "탐색", "고독"],

        tone: "emotion",

        emotionalLevel: 70,

        chance: 72,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 잠시 조용해지며 감정을 돌아보게 되는 시기일 수 있습니다.",

          advice: "억지로 관계를 움직이기보다 자신의 감정을 먼저 이해해보세요.",

          keywords: ["거리", "생각", "정리"],

          tone: "sad",

          emotionalLevel: 62,

          chance: 58,
        },

        career: {
          meaning:
            "진로 방향이나 목표를 다시 정리하게 되는 흐름이 들어올 수 있습니다.",

          advice: "당장의 속도보다 자신에게 맞는 방향을 찾는 것이 중요합니다.",

          keywords: ["탐색", "방향", "정리"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 68,
        },

        money: {
          meaning:
            "재정 흐름에서 신중함과 안정 중심의 판단이 중요해질 수 있습니다.",

          advice: "지금은 무리한 확장보다 흐름 유지에 집중하는 것이 좋습니다.",

          keywords: ["신중", "안정", "관리"],

          tone: "neutral",

          emotionalLevel: 54,

          chance: 64,
        },
      },
    },

    reversed: {
      general: {
        meaning: "혼자만의 생각에 갇히며 흐름이 정체될 가능성이 있습니다.",

        advice: "지나친 고립보다 주변 조언을 받아들이는 태도도 필요합니다.",

        keywords: ["고립", "정체", "혼란"],

        tone: "sad",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "감정을 혼자 끌어안으며 관계 흐름이 멀어질 가능성이 있습니다.",

          advice: "상대에게 마음을 조금씩 표현하는 용기가 필요합니다.",

          keywords: ["거리감", "외로움", "침묵"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning: "방향 혼란이나 자신감 저하로 흐름이 막힐 가능성이 있습니다.",

          advice: "혼자 해결하려 하기보다 객관적인 피드백을 받아보세요.",

          keywords: ["혼란", "정체", "고민"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 36,
        },
      },
    },
  },
  10: {
    upright: {
      general: {
        meaning:
          "흐름의 전환점 속에서 예상치 못한 기회가 들어올 가능성이 있습니다.",

        advice:
          "변화를 두려워하기보다 흐름을 유연하게 받아들이는 것이 중요합니다.",

        keywords: ["변화", "기회", "전환"],

        tone: "hope",

        emotionalLevel: 80,

        chance: 88,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 빠르게 변화하며 새로운 전환점을 맞이할 수 있습니다.",

          advice: "우연처럼 보이는 흐름 속에서도 자신의 감정을 놓치지 마세요.",

          keywords: ["변화", "인연", "전환"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 84,
        },

        career: {
          meaning:
            "새로운 기회나 환경 변화가 들어오며 흐름이 크게 움직일 수 있습니다.",

          advice: "변화 흐름을 피하기보다 활용하는 태도가 중요합니다.",

          keywords: ["기회", "변화", "성장"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 90,
        },

        money: {
          meaning:
            "재정 흐름이 예상보다 빠르게 움직이며 기회가 생길 수 있습니다.",

          advice: "운에만 기대기보다 흐름을 잘 활용하는 판단이 중요합니다.",

          keywords: ["흐름", "기회", "변화"],

          tone: "neutral",

          emotionalLevel: 64,

          chance: 82,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "예상치 못한 변수나 흐름 변화로 혼란이 생길 가능성이 있습니다.",

        advice: "변화를 억지로 막기보다 상황에 맞게 유연하게 대응해보세요.",

        keywords: ["변수", "혼란", "변화"],

        tone: "warning",

        emotionalLevel: 48,

        chance: 40,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 불안정하게 흔들리며 감정 기복이 커질 수 있습니다.",

          advice: "순간 감정에 휘둘리기보다 관계의 본질을 바라보세요.",

          keywords: ["변화", "불안정", "혼란"],

          tone: "sad",

          emotionalLevel: 44,

          chance: 36,
        },

        career: {
          meaning:
            "환경 변화나 예상 밖 상황으로 인해 계획이 흔들릴 가능성이 있습니다.",

          advice: "계획 수정이 필요한 시기일 수 있으니 유연함을 유지하세요.",

          keywords: ["변수", "지연", "흔들림"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 38,
        },
      },
    },
  },
  11: {
    upright: {
      general: {
        meaning:
          "객관적인 판단과 균형 잡힌 선택이 중요한 흐름으로 들어오고 있습니다.",

        advice: "감정보다 현실적인 기준으로 상황을 바라보는 태도가 필요합니다.",

        keywords: ["균형", "판단", "책임"],

        tone: "neutral",

        emotionalLevel: 66,

        chance: 78,
      },

      categories: {
        love: {
          meaning:
            "관계 속 균형과 신뢰 문제가 중요하게 작용할 가능성이 있습니다.",

          advice: "감정만 앞세우기보다 서로의 입장을 공정하게 바라보세요.",

          keywords: ["균형", "신뢰", "관계"],

          tone: "emotion",

          emotionalLevel: 76,

          chance: 72,
        },

        career: {
          meaning:
            "노력에 대한 평가나 결과가 현실적으로 드러날 가능성이 있습니다.",

          advice: "지금은 감정보다 원칙과 책임감이 더 중요한 시기입니다.",

          keywords: ["평가", "책임", "결과"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 84,
        },

        money: {
          meaning:
            "재정 흐름에서 균형 잡힌 소비와 관리가 중요해질 수 있습니다.",

          advice: "감정 소비보다 계획 중심 흐름을 유지하는 것이 좋습니다.",

          keywords: ["균형", "관리", "판단"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 76,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "불균형한 판단이나 감정 치우침으로 흐름이 흔들릴 가능성이 있습니다.",

        advice: "억울함이나 감정 반응보다 객관적인 기준을 다시 확인해보세요.",

        keywords: ["불균형", "감정", "왜곡"],

        tone: "warning",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning: "관계 속 오해나 감정 치우침으로 거리감이 생길 수 있습니다.",

          advice: "누가 맞는지보다 서로를 이해하려는 태도가 중요합니다.",

          keywords: ["오해", "불균형", "거리"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning:
            "불공정함이나 결과에 대한 스트레스로 피로감이 커질 수 있습니다.",

          advice: "감정적으로 반응하기보다 상황을 냉정하게 정리해보세요.",

          keywords: ["압박", "평가", "스트레스"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 36,
        },
      },
    },
  },
  12: {
    upright: {
      general: {
        meaning:
          "잠시 멈춰 있는 듯한 흐름 속에서 새로운 시각과 깨달음을 얻게 될 가능성이 있습니다.",

        advice:
          "억지로 앞으로 나아가기보다 지금 흐름을 받아들이는 태도가 중요합니다.",

        keywords: ["멈춤", "관점", "깨달음"],

        tone: "emotion",

        emotionalLevel: 70,

        chance: 68,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 잠시 정체되지만 서로를 다시 바라보게 되는 시기일 수 있습니다.",

          advice: "조급하게 결과를 만들기보다 감정을 천천히 이해해보세요.",

          keywords: ["정체", "이해", "거리"],

          tone: "sad",

          emotionalLevel: 64,

          chance: 58,
        },

        career: {
          meaning:
            "현재 상황을 다시 돌아보며 방향 수정이 필요한 흐름이 들어올 수 있습니다.",

          advice:
            "지금은 무리하게 결과를 만들기보다 전략을 재정비하는 것이 중요합니다.",

          keywords: ["재정비", "관점", "준비"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 66,
        },

        money: {
          meaning:
            "재정 흐름에서 잠시 멈춤이나 신중한 판단이 필요한 시기입니다.",

          advice:
            "새로운 투자보다 현재 흐름을 안정적으로 유지하는 것이 좋습니다.",

          keywords: ["유지", "신중", "정체"],

          tone: "neutral",

          emotionalLevel: 54,

          chance: 62,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "답답함이나 정체감이 길어지며 흐름이 막힌 듯 느껴질 수 있습니다.",

        advice: "억지로 버티기보다 지금 필요한 변화가 무엇인지 돌아보세요.",

        keywords: ["답답함", "정체", "지연"],

        tone: "warning",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름 속 거리감이나 감정 단절이 커질 가능성이 있습니다.",

          advice: "혼자 참고 버티기보다 솔직한 대화가 필요한 시기입니다.",

          keywords: ["거리감", "단절", "답답함"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning:
            "정체된 흐름 속에서 의욕 저하나 방향 혼란이 생길 수 있습니다.",

          advice: "지금은 억지 추진보다 흐름을 재정리하는 시간이 필요합니다.",

          keywords: ["지연", "혼란", "피로"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 36,
        },
      },
    },
  },

  13: {
    upright: {
      general: {
        meaning:
          "기존 흐름이 끝나고 새로운 변화가 시작되는 전환점이 다가오고 있습니다.",

        advice:
          "끝을 두려워하기보다 새로운 시작을 받아들이는 용기가 중요합니다.",

        keywords: ["변화", "전환", "끝과 시작"],

        tone: "warning",

        emotionalLevel: 72,

        chance: 78,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름에 큰 변화가 들어오며 새로운 국면으로 이어질 가능성이 있습니다.",

          advice:
            "억지로 붙잡기보다 관계의 진짜 방향을 받아들이는 것이 중요합니다.",

          keywords: ["변화", "정리", "전환"],

          tone: "emotion",

          emotionalLevel: 82,

          chance: 72,
        },

        career: {
          meaning:
            "직장이나 진로 흐름에서 중요한 변화와 전환 가능성이 커지고 있습니다.",

          advice:
            "익숙함에 머물기보다 새로운 흐름을 준비하는 태도가 필요합니다.",

          keywords: ["전환", "변화", "새출발"],

          tone: "hope",

          emotionalLevel: 68,

          chance: 84,
        },

        money: {
          meaning:
            "재정 흐름의 구조가 바뀌며 새로운 방식의 관리가 필요해질 수 있습니다.",

          advice: "과거 흐름에 집착하기보다 현실적인 조정이 중요합니다.",

          keywords: ["변화", "조정", "정리"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 70,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "변화를 받아들이지 못하며 흐름 정체가 길어질 가능성이 있습니다.",

        advice: "끝나야 할 흐름을 붙잡고 있지는 않은지 돌아볼 필요가 있습니다.",

        keywords: ["집착", "정체", "두려움"],

        tone: "sad",

        emotionalLevel: 44,

        chance: 34,
      },

      categories: {
        love: {
          meaning:
            "관계 정리 문제나 미련으로 인해 감정 소모가 커질 수 있습니다.",

          advice: "억지로 관계를 유지하기보다 자신의 감정을 먼저 돌보세요.",

          keywords: ["미련", "집착", "감정소모"],

          tone: "sad",

          emotionalLevel: 40,

          chance: 30,
        },

        career: {
          meaning: "변화를 두려워하며 현재 흐름에 갇힐 가능성이 있습니다.",

          advice: "익숙함만 유지하려 하기보다 새로운 가능성을 바라보세요.",

          keywords: ["정체", "불안", "고착"],

          tone: "warning",

          emotionalLevel: 46,

          chance: 36,
        },
      },
    },
  },

  14: {
    upright: {
      general: {
        meaning:
          "흐름의 균형이 회복되며 감정과 현실이 안정적으로 조화를 이루게 될 가능성이 있습니다.",

        advice: "지금은 조급함보다 천천히 균형을 맞춰가는 태도가 중요합니다.",

        keywords: ["균형", "조화", "안정"],

        tone: "hope",

        emotionalLevel: 78,

        chance: 82,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 부드럽게 안정되며 서로를 이해하게 될 가능성이 있습니다.",

          advice: "감정을 급하게 몰아가기보다 자연스러운 흐름을 유지해보세요.",

          keywords: ["조화", "안정", "배려"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 84,
        },

        career: {
          meaning:
            "업무 흐름이나 인간관계가 안정적으로 정리될 가능성이 있습니다.",

          advice: "무리하게 속도를 내기보다 균형 있는 리듬 유지가 중요합니다.",

          keywords: ["안정", "조율", "균형"],

          tone: "neutral",

          emotionalLevel: 66,

          chance: 78,
        },

        money: {
          meaning:
            "재정 흐름에서 균형 회복과 안정 관리가 가능해질 수 있습니다.",

          advice: "과한 욕심보다 꾸준한 흐름 유지에 집중하는 것이 좋습니다.",

          keywords: ["균형", "안정", "관리"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 76,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "감정과 현실 사이 균형이 무너지며 흐름이 불안정해질 가능성이 있습니다.",

        advice:
          "한쪽으로 치우친 선택보다 균형 감각을 회복하는 것이 중요합니다.",

        keywords: ["불균형", "조급함", "흔들림"],

        tone: "warning",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "감정 기복이나 관계 리듬 차이로 인해 거리감이 생길 수 있습니다.",

          advice: "서로의 속도를 이해하려는 태도가 관계 안정에 도움이 됩니다.",

          keywords: ["기복", "거리", "불안정"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning:
            "업무 리듬 불균형이나 과로로 인해 피로감이 커질 수 있습니다.",

          advice: "무리한 추진보다 흐름 조절과 휴식이 더 중요할 수 있습니다.",

          keywords: ["과부하", "불균형", "피로"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 36,
        },
      },
    },
  },
  15: {
    upright: {
      general: {
        meaning:
          "강한 욕망이나 집착이 흐름을 흔들며 유혹에 끌릴 가능성이 커지고 있습니다.",

        advice:
          "순간적인 감정이나 욕망에 휘둘리기보다 스스로 중심을 지키는 것이 중요합니다.",

        keywords: ["유혹", "욕망", "집착"],

        tone: "warning",

        emotionalLevel: 72,

        chance: 58,
      },

      categories: {
        love: {
          meaning:
            "강렬한 끌림이나 집착적인 감정 흐름이 관계에 영향을 줄 수 있습니다.",

          advice:
            "감정의 강도보다 건강한 관계 균형을 유지하는 것이 중요합니다.",

          keywords: ["집착", "유혹", "강렬함"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 72,
        },

        career: {
          meaning:
            "성과 욕심이나 경쟁 심리로 인해 무리한 흐름이 생길 가능성이 있습니다.",

          advice:
            "결과에만 집착하기보다 자신의 리듬을 유지하는 것이 중요합니다.",

          keywords: ["욕심", "경쟁", "압박"],

          tone: "warning",

          emotionalLevel: 66,

          chance: 64,
        },

        money: {
          meaning:
            "충동 소비나 과한 욕심으로 재정 흐름이 흔들릴 가능성이 있습니다.",

          advice: "지금은 감정 소비보다 현실적인 관리가 우선되어야 합니다.",

          keywords: ["충동", "욕심", "지출"],

          tone: "warning",

          emotionalLevel: 58,

          chance: 52,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "스스로를 얽매던 흐름에서 벗어나며 균형을 회복할 가능성이 있습니다.",

        advice: "지금은 불필요한 집착이나 미련을 정리하는 것이 중요합니다.",

        keywords: ["해방", "정리", "회복"],

        tone: "hope",

        emotionalLevel: 64,

        chance: 72,
      },

      categories: {
        love: {
          meaning:
            "불안정했던 감정 흐름이 정리되며 관계를 다시 바라보게 될 수 있습니다.",

          advice: "감정에 끌려가기보다 자신의 기준을 다시 세워보세요.",

          keywords: ["정리", "회복", "거리두기"],

          tone: "sad",

          emotionalLevel: 54,

          chance: 62,
        },

        career: {
          meaning: "과한 압박감이나 경쟁 흐름에서 벗어날 가능성이 있습니다.",

          advice: "지금은 무리한 목표보다 지속 가능한 흐름이 더 중요합니다.",

          keywords: ["회복", "정리", "안정"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 68,
        },
      },
    },
  },

  16: {
    upright: {
      general: {
        meaning:
          "예상하지 못한 변화나 충격적인 흐름 속에서 기존 기반이 흔들릴 가능성이 있습니다.",

        advice:
          "무너지는 흐름 속에서도 새로운 시작의 가능성을 바라보는 태도가 중요합니다.",

        keywords: ["붕괴", "변화", "충격"],

        tone: "warning",

        emotionalLevel: 74,

        chance: 48,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름 속 갈등이나 급격한 변화가 나타날 가능성이 있습니다.",

          advice:
            "감정을 억누르기보다 현실적인 문제를 함께 바라보는 것이 중요합니다.",

          keywords: ["충돌", "변화", "갈등"],

          tone: "sad",

          emotionalLevel: 82,

          chance: 42,
        },

        career: {
          meaning:
            "예상 밖 변수나 환경 변화로 인해 방향 수정이 필요해질 수 있습니다.",

          advice:
            "갑작스러운 변화 속에서도 유연하게 대응하는 태도가 중요합니다.",

          keywords: ["변수", "변화", "재정비"],

          tone: "warning",

          emotionalLevel: 64,

          chance: 46,
        },

        money: {
          meaning:
            "재정 흐름에서 갑작스러운 지출이나 변화 가능성이 나타날 수 있습니다.",

          advice: "무리한 확장보다 안정성을 우선하는 것이 중요합니다.",

          keywords: ["변수", "손실", "변화"],

          tone: "warning",

          emotionalLevel: 56,

          chance: 40,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "혼란스러운 흐름이 서서히 정리되며 회복 방향이 보이기 시작할 수 있습니다.",

        advice: "변화를 완전히 두려워하기보다 새로운 기반을 준비해보세요.",

        keywords: ["회복", "재정비", "정리"],

        tone: "neutral",

        emotionalLevel: 58,

        chance: 64,
      },

      categories: {
        love: {
          meaning: "갈등 이후 관계 흐름을 다시 정리하게 될 가능성이 있습니다.",

          advice: "상처를 덮기보다 서로의 감정을 이해하려는 노력이 필요합니다.",

          keywords: ["회복", "정리", "이해"],

          tone: "emotion",

          emotionalLevel: 60,

          chance: 58,
        },

        career: {
          meaning:
            "불안정했던 흐름이 조금씩 안정되며 방향이 다시 보일 수 있습니다.",

          advice: "지금은 새로운 기반을 차근차근 다시 만드는 것이 중요합니다.",

          keywords: ["재시작", "안정", "정리"],

          tone: "hope",

          emotionalLevel: 60,

          chance: 66,
        },
      },
    },
  },

  17: {
    upright: {
      general: {
        meaning:
          "희망적인 흐름 속에서 마음의 안정과 새로운 가능성을 느끼게 될 수 있습니다.",

        advice:
          "불안보다 앞으로의 가능성을 믿고 흐름을 받아들이는 것이 중요합니다.",

        keywords: ["희망", "회복", "가능성"],

        tone: "hope",

        emotionalLevel: 86,

        chance: 90,
      },

      categories: {
        love: {
          meaning:
            "관계 속 따뜻한 감정 흐름과 회복의 기운이 강하게 들어오고 있습니다.",

          advice:
            "상대에게 진심을 자연스럽게 표현하는 것이 관계를 더 깊게 만듭니다.",

          keywords: ["희망", "회복", "진심"],

          tone: "emotion",

          emotionalLevel: 94,

          chance: 90,
        },

        career: {
          meaning:
            "긍정적인 기회나 미래 가능성이 점차 현실화될 가능성이 있습니다.",

          advice: "지금은 작은 가능성이라도 꾸준히 이어가는 것이 중요합니다.",

          keywords: ["기회", "성장", "가능성"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 86,
        },

        money: {
          meaning:
            "재정 흐름에서 안정 회복이나 긍정적인 변화 가능성이 보이고 있습니다.",

          advice: "조급하게 결과를 만들기보다 흐름을 안정적으로 이어가세요.",

          keywords: ["회복", "안정", "희망"],

          tone: "neutral",

          emotionalLevel: 60,

          chance: 80,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "희망이 약해지며 불안이나 미래에 대한 걱정이 커질 가능성이 있습니다.",

        advice:
          "결과를 너무 비관적으로 보기보다 작은 가능성부터 다시 바라보세요.",

        keywords: ["불안", "지침", "걱정"],

        tone: "sad",

        emotionalLevel: 44,

        chance: 36,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름 속 기대감이 약해지며 감정 거리감이 생길 수 있습니다.",

          advice: "혼자 실망하기보다 현재 감정을 솔직하게 나눠보세요.",

          keywords: ["거리감", "실망", "불안"],

          tone: "sad",

          emotionalLevel: 40,

          chance: 32,
        },

        career: {
          meaning:
            "미래 방향에 대한 불확실성이나 자신감 저하가 나타날 수 있습니다.",

          advice: "지금은 결과보다 자신의 가능성을 다시 믿는 것이 중요합니다.",

          keywords: ["불안", "혼란", "위축"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 38,
        },
      },
    },
  },
  18: {
    upright: {
      general: {
        meaning:
          "불확실했던 흐름이 점차 정리되며 희망적인 방향이 보이기 시작하고 있습니다.",

        advice: "지금은 자신을 믿고 앞으로 나아가는 용기가 중요한 시기입니다.",

        keywords: ["희망", "회복", "긍정"],

        tone: "hope",

        emotionalLevel: 88,

        chance: 90,
      },

      categories: {
        love: {
          meaning:
            "관계 속에서 따뜻한 감정 흐름이 회복되며 서로를 이해하게 될 가능성이 있습니다.",

          advice:
            "불안했던 감정보다 앞으로의 가능성에 집중해보는 것이 중요합니다.",

          keywords: ["회복", "따뜻함", "희망"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 88,
        },

        career: {
          meaning:
            "앞으로의 방향성이 명확해지며 긍정적인 기회가 들어올 가능성이 있습니다.",

          advice:
            "작은 가능성이라도 포기하지 않는 태도가 좋은 결과로 이어질 수 있습니다.",

          keywords: ["기회", "성장", "가능성"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 86,
        },

        money: {
          meaning:
            "재정 흐름이 점차 안정되며 희망적인 변화 가능성이 나타나고 있습니다.",

          advice:
            "지금은 조급하게 움직이기보다 안정적인 흐름을 유지하는 것이 중요합니다.",

          keywords: ["안정", "회복", "흐름"],

          tone: "neutral",

          emotionalLevel: 70,

          chance: 82,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "희망을 잃거나 미래 흐름에 대한 불안감이 커질 가능성이 있습니다.",

        advice:
          "결과를 단정짓기보다 스스로를 회복시키는 시간을 먼저 가져보세요.",

        keywords: ["불안", "실망", "혼란"],

        tone: "sad",

        emotionalLevel: 48,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "관계 속 기대감이 흔들리며 감정적인 거리감이 생길 수 있습니다.",

          advice:
            "혼자 결론 내리기보다 서로의 감정을 다시 확인해보는 것이 중요합니다.",

          keywords: ["거리감", "불안", "실망"],

          tone: "sad",

          emotionalLevel: 44,

          chance: 34,
        },

        career: {
          meaning:
            "미래 방향성에 대한 불확실함으로 인해 의욕이 흔들릴 수 있습니다.",

          advice:
            "지금은 완벽한 답보다 작은 흐름부터 회복하는 것이 중요합니다.",

          keywords: ["혼란", "불안", "정체"],

          tone: "warning",

          emotionalLevel: 50,

          chance: 36,
        },
      },
    },
  },

  19: {
    upright: {
      general: {
        meaning:
          "밝고 긍정적인 흐름 속에서 자신감과 활력이 커질 가능성이 높습니다.",

        advice:
          "지금은 스스로를 숨기기보다 있는 그대로 드러내는 것이 중요합니다.",

        keywords: ["행복", "성공", "활력"],

        tone: "hope",

        emotionalLevel: 94,

        chance: 92,
      },

      categories: {
        love: {
          meaning:
            "관계 속에서 따뜻함과 안정감이 커지며 행복한 흐름이 이어질 가능성이 있습니다.",

          advice: "감정을 숨기지 말고 진심 어린 표현을 더 자주 보여주세요.",

          keywords: ["행복", "애정", "안정"],

          tone: "emotion",

          emotionalLevel: 96,

          chance: 90,
        },

        career: {
          meaning:
            "노력했던 부분에서 긍정적인 성과나 인정 흐름이 나타날 가능성이 있습니다.",

          advice: "지금은 자신감을 가지고 흐름을 즐기는 태도가 중요합니다.",

          keywords: ["성과", "인정", "성장"],

          tone: "hope",

          emotionalLevel: 84,

          chance: 90,
        },

        money: {
          meaning:
            "재정 흐름이 안정적으로 이어지며 만족감을 느낄 가능성이 있습니다.",

          advice:
            "현재의 좋은 흐름을 유지하는 방향으로 움직이는 것이 중요합니다.",

          keywords: ["풍요", "안정", "만족"],

          tone: "neutral",

          emotionalLevel: 74,

          chance: 86,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "겉으로는 괜찮아 보여도 내면의 피로감이나 불안이 쌓일 수 있습니다.",

        advice:
          "억지로 밝아지려 하기보다 현재 감정을 인정하는 것도 중요합니다.",

        keywords: ["피로", "불안", "감정소모"],

        tone: "sad",

        emotionalLevel: 50,

        chance: 42,
      },

      categories: {
        love: {
          meaning:
            "관계 속 기대감 차이로 인해 서운함이 커질 가능성이 있습니다.",

          advice: "완벽한 관계를 기대하기보다 현실적인 소통이 중요합니다.",

          keywords: ["서운함", "거리감", "기대"],

          tone: "sad",

          emotionalLevel: 46,

          chance: 36,
        },

        career: {
          meaning:
            "성과 압박이나 과도한 책임감으로 인해 피로가 커질 수 있습니다.",

          advice: "지금은 무리하게 달리기보다 리듬 조절이 더 중요합니다.",

          keywords: ["과부하", "스트레스", "압박"],

          tone: "warning",

          emotionalLevel: 52,

          chance: 40,
        },
      },
    },
  },

  20: {
    upright: {
      general: {
        meaning:
          "과거 흐름이 정리되며 새로운 방향으로 나아갈 중요한 전환점이 다가오고 있습니다.",

        advice: "지금은 후회보다 앞으로의 가능성에 집중하는 것이 중요합니다.",

        keywords: ["전환점", "각성", "변화"],

        tone: "hope",

        emotionalLevel: 82,

        chance: 86,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름 속에서 서로의 진심을 다시 확인하게 될 가능성이 있습니다.",

          advice: "과거 감정에 머무르기보다 앞으로의 방향을 함께 바라보세요.",

          keywords: ["재회", "진심", "변화"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 82,
        },

        career: {
          meaning:
            "중요한 기회나 새로운 방향 전환 흐름이 나타날 가능성이 있습니다.",

          advice: "두려움보다 스스로의 가능성을 믿는 선택이 중요합니다.",

          keywords: ["변화", "기회", "전환"],

          tone: "hope",

          emotionalLevel: 76,

          chance: 88,
        },

        money: {
          meaning:
            "재정 흐름에서 새로운 시작이나 회복 흐름이 나타날 가능성이 있습니다.",

          advice: "과거 실수에 머무르기보다 앞으로의 흐름 관리에 집중해보세요.",

          keywords: ["회복", "변화", "정리"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 80,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "과거에 대한 미련이나 후회로 인해 새로운 흐름을 받아들이기 어려울 수 있습니다.",

        advice:
          "이미 지나간 흐름보다 지금 바꿀 수 있는 부분에 집중하는 것이 중요합니다.",

        keywords: ["미련", "후회", "정체"],

        tone: "sad",

        emotionalLevel: 46,

        chance: 38,
      },

      categories: {
        love: {
          meaning:
            "과거 감정 문제나 unresolved 된 흐름으로 인해 관계가 흔들릴 수 있습니다.",

          advice: "억눌린 감정보다 솔직한 대화를 통해 흐름을 정리해보세요.",

          keywords: ["과거", "미련", "혼란"],

          tone: "sad",

          emotionalLevel: 42,

          chance: 34,
        },

        career: {
          meaning:
            "변화를 두려워하거나 과거 방식에 머물러 기회를 놓칠 가능성이 있습니다.",

          advice:
            "익숙함보다 앞으로 성장할 수 있는 방향을 고민해보는 것이 중요합니다.",

          keywords: ["정체", "두려움", "망설임"],

          tone: "warning",

          emotionalLevel: 48,

          chance: 36,
        },
      },
    },
  },
  21: {
    upright: {
      general: {
        meaning:
          "하나의 흐름이 완성되며 노력의 결과와 안정감을 얻게 될 가능성이 높습니다.",

        advice: "지금까지의 경험을 믿고 새로운 단계로 나아갈 준비를 해보세요.",

        keywords: ["완성", "성취", "안정"],

        tone: "hope",

        emotionalLevel: 94,

        chance: 96,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름이 안정적으로 자리 잡으며 서로에 대한 확신이 커질 가능성이 있습니다.",

          advice:
            "지금의 행복을 당연하게 여기기보다 함께 쌓아온 시간을 소중히 바라보세요.",

          keywords: ["완성", "안정", "확신"],

          tone: "emotion",

          emotionalLevel: 98,

          chance: 94,
        },

        career: {
          meaning:
            "노력의 결과가 드러나며 중요한 성취나 목표 달성 흐름이 나타날 수 있습니다.",

          advice:
            "지금은 결과를 인정하면서도 다음 단계 준비를 함께 시작하는 것이 중요합니다.",

          keywords: ["성공", "완성", "성과"],

          tone: "hope",

          emotionalLevel: 88,

          chance: 94,
        },

        money: {
          meaning:
            "재정 흐름이 안정적으로 자리 잡으며 만족스러운 결과를 얻을 가능성이 있습니다.",

          advice:
            "현재의 안정 흐름을 유지하며 장기적인 계획을 세워보는 것이 좋습니다.",

          keywords: ["안정", "풍요", "완성"],

          tone: "neutral",

          emotionalLevel: 78,

          chance: 90,
        },
      },
    },

    reversed: {
      general: {
        meaning:
          "거의 완성 단계에 가까워졌지만 마무리 부족이나 불안감이 남아 있을 수 있습니다.",

        advice: "완벽함에 집착하기보다 지금까지의 성장 흐름을 인정해보세요.",

        keywords: ["미완성", "아쉬움", "불안"],

        tone: "sad",

        emotionalLevel: 52,

        chance: 44,
      },

      categories: {
        love: {
          meaning:
            "관계 흐름 속에서 애매한 거리감이나 확신 부족이 남아 있을 가능성이 있습니다.",

          advice:
            "결핍에만 집중하기보다 서로가 만들어온 흐름을 다시 돌아보세요.",

          keywords: ["거리감", "불안", "미완성"],

          tone: "sad",

          emotionalLevel: 48,

          chance: 38,
        },

        career: {
          meaning:
            "성과 직전 단계에서 방향 혼란이나 피로감이 커질 가능성이 있습니다.",

          advice: "마지막 순간일수록 조급함보다 균형 유지가 중요합니다.",

          keywords: ["지연", "피로", "아쉬움"],

          tone: "warning",

          emotionalLevel: 54,

          chance: 42,
        },

        money: {
          meaning:
            "재정 흐름은 안정적이지만 만족감 부족이나 불안 요소가 남아 있을 수 있습니다.",

          advice:
            "부족함만 바라보기보다 현재의 기반을 유지하는 데 집중해보세요.",

          keywords: ["불안", "유지", "아쉬움"],

          tone: "neutral",

          emotionalLevel: 50,

          chance: 46,
        },
      },
    },
  },
};
