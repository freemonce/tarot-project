// src/data/tarot/wands.ts

import type { TarotInterpretation } from "../../types/tarotInterpretation";

export const wandsInterpretations: Record<number, TarotInterpretation> = {
  50: {
    upright: {
      general: {
        meaning: "강한 열정과 새로운 도전의 에너지가 시작됩니다.",

        advice: "망설이지 말고 첫걸음을 내디뎌 보세요.",

        keywords: ["열정", "도전", "시작"],

        tone: "hope",

        emotionalLevel: 85,

        chance: 88,
      },

      categories: {
        love: {
          meaning: "새로운 인연이나 설레는 감정이 시작될 수 있습니다.",

          advice: "적극적으로 감정을 표현해보세요.",

          keywords: ["설렘", "시작", "고백"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 85,
        },

        career: {
          meaning: "새로운 프로젝트나 도전 기회가 찾아옵니다.",

          advice: "아이디어를 실행으로 옮겨보세요.",

          keywords: ["도전", "프로젝트", "기회"],

          tone: "hope",

          emotionalLevel: 80,

          chance: 92,
        },

        money: {
          meaning: "새로운 수입 기회가 보일 수 있습니다.",

          advice: "기회를 발견하면 적극적으로 검토하세요.",

          keywords: ["기회", "수입", "시작"],

          tone: "neutral",

          emotionalLevel: 68,

          chance: 82,
        },
      },
    },

    reversed: {
      general: {
        meaning: "의욕 부족이나 시작 지연이 나타날 수 있습니다.",

        advice: "동기를 다시 찾는 시간이 필요합니다.",

        keywords: ["지연", "의욕부족", "정체"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },

  51: {
    upright: {
      general: {
        meaning: "더 큰 목표를 바라보며 미래를 계획하는 시기입니다.",

        advice: "시야를 넓혀 새로운 가능성을 살펴보세요.",

        keywords: ["계획", "미래", "확장"],

        tone: "hope",

        emotionalLevel: 75,

        chance: 84,
      },

      categories: {
        love: {
          meaning: "관계의 미래를 진지하게 고민하게 됩니다.",

          advice: "감정뿐 아니라 현실도 함께 고려하세요.",

          keywords: ["미래", "계획", "관계"],

          tone: "emotion",

          emotionalLevel: 78,

          chance: 80,
        },

        career: {
          meaning: "새로운 목표나 진로 방향이 보이기 시작합니다.",

          advice: "장기적인 관점에서 계획을 세워보세요.",

          keywords: ["목표", "비전", "확장"],

          tone: "hope",

          emotionalLevel: 72,

          chance: 88,
        },

        money: {
          meaning: "재정적 성장 가능성이 보이는 시기입니다.",

          advice: "장기적인 투자 계획을 검토하세요.",

          keywords: ["성장", "투자", "계획"],

          tone: "neutral",

          emotionalLevel: 65,

          chance: 80,
        },
      },
    },

    reversed: {
      general: {
        meaning: "계획은 있지만 실행력이 부족할 수 있습니다.",

        advice: "생각만 하지 말고 작은 행동부터 시작하세요.",

        keywords: ["망설임", "정체", "불확실"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  52: {
    upright: {
      general: {
        meaning: "기다리던 결과가 서서히 나타나기 시작합니다.",

        advice: "지금까지의 노력을 믿고 흐름을 지켜보세요.",

        keywords: ["성장", "기대", "확장"],

        tone: "hope",

        emotionalLevel: 82,

        chance: 88,
      },

      categories: {
        love: {
          meaning: "관계가 한 단계 발전할 가능성이 있습니다.",

          advice: "조급해하지 말고 자연스럽게 흐름을 따르세요.",

          keywords: ["발전", "기대", "성장"],

          tone: "emotion",

          emotionalLevel: 82,

          chance: 84,
        },

        career: {
          meaning: "노력의 결과가 보이기 시작할 수 있습니다.",

          advice: "더 큰 목표를 준비해보세요.",

          keywords: ["성과", "확장", "발전"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 90,
        },

        money: {
          meaning: "수익이나 재정적 성장 가능성이 나타납니다.",

          advice: "지금의 흐름을 꾸준히 유지하세요.",

          keywords: ["성장", "수익", "확장"],

          tone: "neutral",

          emotionalLevel: 70,

          chance: 85,
        },
      },
    },

    reversed: {
      general: {
        meaning: "기대했던 결과가 늦어질 수 있습니다.",

        advice: "조급함을 줄이고 계획을 다시 점검하세요.",

        keywords: ["지연", "답답함", "기다림"],

        tone: "warning",

        emotionalLevel: 48,

        chance: 42,
      },
    },
  },

  53: {
    upright: {
      general: {
        meaning: "노력의 결실을 축하하고 안정감을 느낄 수 있는 시기입니다.",

        advice: "지금의 성과를 충분히 즐기고 주변 사람들과 기쁨을 나누세요.",

        keywords: ["축하", "안정", "성취"],

        tone: "hope",

        emotionalLevel: 90,

        chance: 92,
      },

      categories: {
        love: {
          meaning:
            "관계가 안정적으로 발전하거나 행복한 순간을 맞이할 수 있습니다.",

          advice: "현재의 행복을 소중히 여기세요.",

          keywords: ["안정", "행복", "기념"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 90,
        },

        career: {
          meaning: "프로젝트 성공이나 목표 달성 가능성이 높습니다.",

          advice: "성과를 인정받을 준비를 하세요.",

          keywords: ["성공", "성과", "안정"],

          tone: "hope",

          emotionalLevel: 85,

          chance: 94,
        },

        money: {
          meaning: "재정적으로 안정감을 느낄 수 있습니다.",

          advice: "현재의 흐름을 유지하는 것이 중요합니다.",

          keywords: ["안정", "수익", "유지"],

          tone: "neutral",

          emotionalLevel: 75,

          chance: 88,
        },
      },
    },

    reversed: {
      general: {
        meaning: "기대했던 축하나 안정이 늦어질 수 있습니다.",

        advice: "조급함을 줄이고 기반을 다시 점검하세요.",

        keywords: ["지연", "불안정", "답답함"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  54: {
    upright: {
      general: {
        meaning: "경쟁과 갈등 속에서 자신의 능력을 시험받게 됩니다.",

        advice: "갈등을 두려워하지 말고 성장의 기회로 활용하세요.",

        keywords: ["경쟁", "갈등", "도전"],

        tone: "warning",

        emotionalLevel: 60,

        chance: 65,
      },

      categories: {
        love: {
          meaning: "의견 충돌이나 감정적인 긴장이 생길 수 있습니다.",

          advice: "감정보다 이해하려는 태도가 중요합니다.",

          keywords: ["충돌", "갈등", "긴장"],

          tone: "sad",

          emotionalLevel: 55,

          chance: 50,
        },

        career: {
          meaning: "치열한 경쟁 속에서 자신의 실력을 보여줄 기회입니다.",

          advice: "비교보다 성장에 집중하세요.",

          keywords: ["경쟁", "도전", "실력"],

          tone: "warning",

          emotionalLevel: 65,

          chance: 72,
        },

        money: {
          meaning: "금전 문제에서 의견 차이나 경쟁이 생길 수 있습니다.",

          advice: "감정적으로 대응하지 마세요.",

          keywords: ["경쟁", "충돌", "조율"],

          tone: "neutral",

          emotionalLevel: 58,

          chance: 55,
        },
      },
    },

    reversed: {
      general: {
        meaning: "갈등이 정리되며 협력의 가능성이 높아집니다.",

        advice: "불필요한 경쟁을 내려놓으세요.",

        keywords: ["화해", "협력", "정리"],

        tone: "hope",

        emotionalLevel: 72,

        chance: 78,
      },
    },
  },

  55: {
    upright: {
      general: {
        meaning: "승리와 인정, 성공의 흐름이 강하게 들어오는 시기입니다.",

        advice: "자신감을 갖고 앞으로 나아가세요.",

        keywords: ["승리", "성공", "인정"],

        tone: "hope",

        emotionalLevel: 92,

        chance: 95,
      },

      categories: {
        love: {
          meaning: "관계에서 긍정적인 결과나 고백 성공 가능성이 있습니다.",

          advice: "자신감을 가지고 표현해보세요.",

          keywords: ["성공", "고백", "인정"],

          tone: "emotion",

          emotionalLevel: 90,

          chance: 92,
        },

        career: {
          meaning: "성과가 인정받고 좋은 평가를 받을 수 있습니다.",

          advice: "겸손함도 함께 유지하세요.",

          keywords: ["성과", "인정", "성공"],

          tone: "hope",

          emotionalLevel: 88,

          chance: 96,
        },

        money: {
          meaning: "재정적으로 만족스러운 결과를 얻을 수 있습니다.",

          advice: "성과를 안정적으로 관리하세요.",

          keywords: ["수익", "성공", "보상"],

          tone: "neutral",

          emotionalLevel: 78,

          chance: 90,
        },
      },
    },

    reversed: {
      general: {
        meaning: "자만심이나 기대 이하의 결과에 실망할 수 있습니다.",

        advice: "평가에 지나치게 집착하지 마세요.",

        keywords: ["자만", "실망", "과신"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },
  56: {
    upright: {
      general: {
        meaning: "노력의 결과가 인정받고 좋은 평가를 받을 수 있습니다.",

        advice: "겸손함을 유지하며 성과를 즐기세요.",

        keywords: ["성공", "인정", "승리"],

        tone: "hope",

        emotionalLevel: 88,

        chance: 90,
      },

      categories: {
        love: {
          meaning: "관계에서 긍정적인 결과나 진전이 기대됩니다.",

          advice: "자신감을 가지고 표현해보세요.",

          keywords: ["성공", "인기", "관심"],

          tone: "emotion",

          emotionalLevel: 85,

          chance: 88,
        },

        career: {
          meaning: "성과를 인정받거나 좋은 평가를 받을 수 있습니다.",

          advice: "지금까지의 노력을 믿으세요.",

          keywords: ["승진", "성과", "인정"],

          tone: "hope",

          emotionalLevel: 90,

          chance: 92,
        },

        money: {
          meaning: "재정적으로 만족할 만한 결과가 기대됩니다.",

          advice: "성과를 안정적으로 유지하는 데 집중하세요.",

          keywords: ["수익", "성과", "보상"],

          tone: "neutral",

          emotionalLevel: 75,

          chance: 86,
        },
      },
    },

    reversed: {
      general: {
        meaning: "기대했던 인정이나 결과가 늦어질 수 있습니다.",

        advice: "타인의 평가보다 자신의 성장을 바라보세요.",

        keywords: ["지연", "불만", "실망"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  57: {
    upright: {
      general: {
        meaning: "경쟁 속에서도 자신의 자리를 지켜낼 수 있습니다.",

        advice: "쉽게 물러서지 말고 자신감을 가지세요.",

        keywords: ["경쟁", "방어", "도전"],

        tone: "hope",

        emotionalLevel: 78,

        chance: 82,
      },

      categories: {
        love: {
          meaning: "관계를 지키기 위한 노력이 필요할 수 있습니다.",

          advice: "상대와의 신뢰를 잊지 마세요.",

          keywords: ["경쟁", "신뢰", "노력"],

          tone: "emotion",

          emotionalLevel: 72,

          chance: 76,
        },

        career: {
          meaning: "경쟁자 속에서도 자신의 능력을 보여줄 기회입니다.",

          advice: "포기하지 말고 끝까지 밀고 나가세요.",

          keywords: ["경쟁", "도전", "방어"],

          tone: "hope",

          emotionalLevel: 80,

          chance: 85,
        },

        money: {
          meaning: "재정적인 위치를 지키는 것이 중요합니다.",

          advice: "무리한 투자보다 현재 자산을 보호하세요.",

          keywords: ["방어", "유지", "안정"],

          tone: "neutral",

          emotionalLevel: 65,

          chance: 72,
        },
      },
    },

    reversed: {
      general: {
        meaning: "압박감이 커지고 자신감이 떨어질 수 있습니다.",

        advice: "혼자 버티기보다 도움을 요청해보세요.",

        keywords: ["압박", "피로", "불안"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },

  58: {
    upright: {
      general: {
        meaning: "상황이 빠르게 전개되며 좋은 소식이 들어올 수 있습니다.",

        advice: "기회가 왔을 때 망설이지 마세요.",

        keywords: ["속도", "소식", "진행"],

        tone: "hope",

        emotionalLevel: 84,

        chance: 90,
      },

      categories: {
        love: {
          meaning: "연락이나 관계 진전이 빠르게 이루어질 수 있습니다.",

          advice: "적극적으로 마음을 표현해보세요.",

          keywords: ["연락", "진전", "설렘"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 90,
        },

        career: {
          meaning: "프로젝트나 업무가 빠르게 진행됩니다.",

          advice: "변화에 유연하게 대응하세요.",

          keywords: ["진행", "속도", "기회"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 92,
        },

        money: {
          meaning: "금전 흐름이 활발해질 수 있습니다.",

          advice: "빠른 결정에도 기본 검토는 잊지 마세요.",

          keywords: ["흐름", "수익", "기회"],

          tone: "neutral",

          emotionalLevel: 72,

          chance: 86,
        },
      },
    },

    reversed: {
      general: {
        meaning: "지연이나 의사소통 문제가 발생할 수 있습니다.",

        advice: "조급함을 줄이고 상황을 점검하세요.",

        keywords: ["지연", "혼선", "답답함"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  59: {
    upright: {
      general: {
        meaning: "많은 어려움을 겪었지만 끝까지 버텨낼 힘이 있습니다.",

        advice: "지금까지 해온 노력을 믿으세요.",

        keywords: ["인내", "경계", "끈기"],

        tone: "hope",

        emotionalLevel: 75,

        chance: 80,
      },

      categories: {
        love: {
          meaning: "관계를 지키기 위한 인내가 필요한 시기입니다.",

          advice: "쉽게 포기하지 말고 진심을 보여주세요.",

          keywords: ["인내", "신뢰", "지속"],

          tone: "emotion",

          emotionalLevel: 70,

          chance: 74,
        },

        career: {
          meaning: "힘든 상황에서도 끝까지 버티면 결과가 따를 수 있습니다.",

          advice: "마지막 고비를 넘는 데 집중하세요.",

          keywords: ["인내", "도전", "지속"],

          tone: "hope",

          emotionalLevel: 78,

          chance: 84,
        },

        money: {
          meaning: "재정적으로 신중한 방어가 필요한 시기입니다.",

          advice: "현재 자산을 지키는 데 집중하세요.",

          keywords: ["방어", "유지", "관리"],

          tone: "neutral",

          emotionalLevel: 65,

          chance: 72,
        },
      },
    },

    reversed: {
      general: {
        meaning: "지친 상태가 누적되어 포기하고 싶은 마음이 생길 수 있습니다.",

        advice: "무조건 버티기보다 재정비도 필요합니다.",

        keywords: ["피로", "소진", "한계"],

        tone: "warning",

        emotionalLevel: 40,

        chance: 35,
      },
    },
  },
  60: {
    upright: {
      general: {
        meaning: "책임과 부담이 크게 늘어나는 시기입니다.",

        advice: "모든 것을 혼자 짊어지려 하지 마세요.",

        keywords: ["부담", "책임", "노력"],

        tone: "warning",

        emotionalLevel: 58,

        chance: 68,
      },

      categories: {
        love: {
          meaning: "관계에서 부담감이 커질 수 있습니다.",

          advice: "혼자 책임지려 하지 말고 대화하세요.",

          keywords: ["부담", "책임", "관계"],

          tone: "emotion",

          emotionalLevel: 60,

          chance: 62,
        },

        career: {
          meaning: "업무량 증가와 책임 확대가 나타날 수 있습니다.",

          advice: "우선순위를 정하는 것이 중요합니다.",

          keywords: ["업무", "책임", "과부하"],

          tone: "warning",

          emotionalLevel: 55,

          chance: 70,
        },

        money: {
          meaning: "재정적 책임이 증가할 수 있습니다.",

          advice: "무리한 지출을 줄여보세요.",

          keywords: ["부담", "관리", "책임"],

          tone: "neutral",

          emotionalLevel: 52,

          chance: 65,
        },
      },
    },

    reversed: {
      general: {
        meaning: "무거운 짐을 내려놓을 수 있는 시기입니다.",

        advice: "혼자 감당하던 문제를 나누어 보세요.",

        keywords: ["해방", "정리", "회복"],

        tone: "hope",

        emotionalLevel: 75,

        chance: 82,
      },
    },
  },

  61: {
    upright: {
      general: {
        meaning: "새로운 도전과 호기심이 강해지는 시기입니다.",

        advice: "실패를 두려워하지 말고 경험해보세요.",

        keywords: ["도전", "열정", "시작"],

        tone: "hope",

        emotionalLevel: 85,

        chance: 88,
      },

      categories: {
        love: {
          meaning: "설레는 만남이나 연락이 들어올 수 있습니다.",

          advice: "가벼운 마음으로 다가가 보세요.",

          keywords: ["설렘", "연락", "새로운인연"],

          tone: "emotion",

          emotionalLevel: 88,

          chance: 85,
        },

        career: {
          meaning: "새로운 기회나 제안이 찾아올 수 있습니다.",

          advice: "배우려는 자세를 유지하세요.",

          keywords: ["기회", "도전", "성장"],

          tone: "hope",

          emotionalLevel: 80,

          chance: 90,
        },
      },
    },

    reversed: {
      general: {
        meaning: "의욕은 있지만 실행력이 부족할 수 있습니다.",

        advice: "작은 행동부터 시작해보세요.",

        keywords: ["망설임", "지연", "불안"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },

  62: {
    upright: {
      general: {
        meaning: "강한 추진력과 행동력이 나타나는 시기입니다.",

        advice: "열정을 행동으로 연결해보세요.",

        keywords: ["열정", "추진력", "행동"],

        tone: "hope",

        emotionalLevel: 90,

        chance: 92,
      },

      categories: {
        love: {
          meaning: "강렬한 감정과 빠른 관계 진전이 가능합니다.",

          advice: "상대방의 속도도 존중하세요.",

          keywords: ["열정", "고백", "직진"],

          tone: "emotion",

          emotionalLevel: 92,

          chance: 90,
        },

        career: {
          meaning: "도전적인 프로젝트를 추진할 수 있습니다.",

          advice: "무모함보다는 계획성을 함께 가져가세요.",

          keywords: ["도전", "추진", "성과"],

          tone: "hope",

          emotionalLevel: 85,

          chance: 94,
        },

        money: {
          meaning: "새로운 재정 기회를 잡을 수 있습니다.",

          advice: "충동적 판단은 피하세요.",

          keywords: ["기회", "투자", "판단"],

          tone: "neutral",

          emotionalLevel: 72,

          chance: 82,
        },
      },
    },

    reversed: {
      general: {
        meaning: "성급함과 충동성이 문제를 만들 수 있습니다.",

        advice: "속도를 줄이고 방향을 확인하세요.",

        keywords: ["충동", "실수", "무모함"],

        tone: "warning",

        emotionalLevel: 42,

        chance: 38,
      },
    },
  },
  63: {
    upright: {
      general: {
        meaning: "강한 리더십과 추진력으로 목표를 이끌어가는 시기입니다.",

        advice: "자신감을 가지고 결정을 내리세요.",

        keywords: ["리더십", "비전", "추진력"],

        tone: "hope",

        emotionalLevel: 88,

        chance: 92,
      },

      categories: {
        love: {
          meaning: "주도적이고 자신감 있는 관계 흐름이 나타납니다.",

          advice: "상대방을 존중하면서 리드해보세요.",

          keywords: ["주도권", "매력", "신뢰"],

          tone: "emotion",

          emotionalLevel: 85,

          chance: 88,
        },

        career: {
          meaning: "리더 역할을 맡거나 영향력이 커질 수 있습니다.",

          advice: "큰 그림을 보고 움직이세요.",

          keywords: ["리더", "성공", "비전"],

          tone: "hope",

          emotionalLevel: 82,

          chance: 95,
        },

        money: {
          meaning: "재정 운영 능력이 빛나는 시기입니다.",

          advice: "장기적 관점으로 계획을 세우세요.",

          keywords: ["관리", "성장", "투자"],

          tone: "neutral",

          emotionalLevel: 72,

          chance: 88,
        },
      },
    },

    reversed: {
      general: {
        meaning: "독선적이거나 지나치게 강압적인 태도를 보일 수 있습니다.",

        advice: "주변 의견에도 귀를 기울여보세요.",

        keywords: ["독선", "고집", "과욕"],

        tone: "warning",

        emotionalLevel: 45,

        chance: 40,
      },
    },
  },
};
