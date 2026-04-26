import type { TarotCard } from "../types/tarot";

export const pentacles: TarotCard[] = [
  {
    id: 36,
    name: "Ace of Pentacles (펜타클 에이스)",
    englishName: "Ace of Pentacles",
    type: "Pents",
    number: 1,
    keywords: ["금전운", "기회", "번영", "새 시작"],
    image: "/images/Pentacles/pentacles01.webp",

    meaning: "현실적 이득과 새로운 기회가 시작되는 카드.",
    advice: "기회를 잡고 구체적으로 실행하세요.",

    shortMeaning: "현실적 기회의 카드",
    yesNo: "Yes",
    powerScore: 96,

    categoryInterpretations: {
      love: {
        meaning: "안정적이고 오래갈 인연운.",
        advice: "말보다 행동으로 신뢰를 주세요.",
      },
      career: {
        meaning: "취업, 이직, 계약, 사업운 상승.",
        advice: "실행을 미루지 마세요.",
      },
      money: {
        meaning: "대표적인 금전 상승 카드입니다.",
        advice: "들어오는 기회를 잘 운용하세요.",
      },
      mind: {
        meaning: "현실 기반 위에서 안정감 회복.",
        advice: "작은 성과를 쌓으세요.",
      },
      relation: {
        meaning: "믿을 수 있는 관계가 생깁니다.",
        advice: "성실함을 보여주세요.",
      },
      health: {
        meaning: "기초 체력 회복 흐름.",
        advice: "생활 루틴을 정비하세요.",
      },
      future: {
        meaning: "탄탄한 성장 기회가 열립니다.",
        advice: "지금 시작이 중요합니다.",
      },
      choice: {
        meaning: "현실적이고 수익성 있는 선택이 좋습니다.",
        advice: "실속을 기준으로 보세요.",
      },
    },
  },

  {
    id: 37,
    name: "Two of Pentacles (펜타클 2)",
    englishName: "Two of Pentacles",
    type: "Pents",
    number: 2,
    keywords: ["균형", "적응", "멀티태스킹", "유연성"],
    image: "/images/Pentacles/pentacles02.webp",

    meaning: "여러 상황을 동시에 조율하며 균형을 잡는 카드.",
    advice: "우선순위를 정하고 유연하게 움직이세요.",

    shortMeaning: "균형과 조율의 카드",
    yesNo: "Maybe",
    powerScore: 78,

    categoryInterpretations: {
      love: {
        meaning: "연애와 현실 사이 균형 고민.",
        advice: "시간 배분을 잘하세요.",
      },
      career: {
        meaning: "여러 업무를 동시에 처리합니다.",
        advice: "일정 관리가 핵심입니다.",
      },
      money: {
        meaning: "수입·지출 조율이 필요한 시기.",
        advice: "예산을 정리하세요.",
      },
      mind: {
        meaning: "바쁘지만 적응력은 높습니다.",
        advice: "과로는 피하세요.",
      },
      relation: {
        meaning: "여러 사람과 조율할 일이 생깁니다.",
        advice: "유연한 태도를 가지세요.",
      },
      health: {
        meaning: "피로 누적 가능성.",
        advice: "휴식 시간을 확보하세요.",
      },
      future: {
        meaning: "변화 속에서 길을 찾습니다.",
        advice: "흐름에 맞춰 대응하세요.",
      },
      choice: {
        meaning: "둘 다 병행 가능한 선택입니다.",
        advice: "균형점을 찾으세요.",
      },
    },
  },

  {
    id: 38,
    name: "Three of Pentacles (펜타클 3)",
    englishName: "Three of Pentacles",
    type: "Pents",
    number: 3,
    keywords: ["협력", "기술", "팀워크", "인정"],
    image: "/images/Pentacles/pentacles03.webp",

    meaning: "실력과 협업으로 성과를 만드는 카드.",
    advice: "혼자보다 함께할 때 더 커집니다.",

    shortMeaning: "협력 성과의 카드",
    yesNo: "Yes",
    powerScore: 86,

    categoryInterpretations: {
      love: {
        meaning: "함께 미래를 만들어가는 관계.",
        advice: "협력하는 연애가 중요합니다.",
      },
      career: {
        meaning: "팀 프로젝트, 실력 인정운.",
        advice: "소통하며 완성도를 높이세요.",
      },
      money: {
        meaning: "협업 수익, 공동 성과 가능.",
        advice: "전문성을 활용하세요.",
      },
      mind: {
        meaning: "성장 욕구가 커집니다.",
        advice: "배우며 발전하세요.",
      },
      relation: {
        meaning: "믿을 만한 동료를 얻습니다.",
        advice: "함께하는 태도를 보이세요.",
      },
      health: {
        meaning: "꾸준한 관리가 효과적입니다.",
        advice: "전문가 도움도 좋습니다.",
      },
      future: {
        meaning: "실력으로 인정받는 미래.",
        advice: "기술을 갈고닦으세요.",
      },
      choice: {
        meaning: "협력 가능한 선택이 유리합니다.",
        advice: "혼자 고집하지 마세요.",
      },
    },
  },

  {
    id: 39,
    name: "Four of Pentacles (펜타클 4)",
    englishName: "Four of Pentacles",
    type: "Pents",
    number: 4,
    keywords: ["소유", "보수적", "안정", "경계"],
    image: "/images/Pentacles/pentacles04.webp",

    meaning: "안정을 지키려 하지만 닫혀 있을 수 있는 카드.",
    advice: "지키는 것과 흐르게 하는 균형이 필요합니다.",

    shortMeaning: "안정 집착의 카드",
    yesNo: "Maybe",
    powerScore: 72,

    categoryInterpretations: {
      love: {
        meaning: "마음을 쉽게 열지 않습니다.",
        advice: "조금 더 표현해보세요.",
      },
      career: {
        meaning: "안정적이지만 변화는 적습니다.",
        advice: "새 기회도 검토하세요.",
      },
      money: {
        meaning: "저축·자산 방어 성향 강함.",
        advice: "지나친 집착은 피하세요.",
      },
      mind: {
        meaning: "불안 때문에 움켜쥐는 상태.",
        advice: "여유를 가지세요.",
      },
      relation: {
        meaning: "거리감 있는 관계 흐름.",
        advice: "신뢰를 조금씩 열어보세요.",
      },
      health: {
        meaning: "긴장으로 몸이 굳을 수 있습니다.",
        advice: "스트레칭이 도움 됩니다.",
      },
      future: {
        meaning: "안정은 있으나 확장은 느립니다.",
        advice: "변화도 받아들이세요.",
      },
      choice: {
        meaning: "안전한 선택이 무난합니다.",
        advice: "단, 지나친 보수성은 주의.",
      },
    },
  },

  {
    id: 40,
    name: "Five of Pentacles (펜타클 5)",
    englishName: "Five of Pentacles",
    type: "Pents",
    number: 5,
    keywords: ["어려움", "부족", "고난", "소외"],
    image: "/images/Pentacles/pentacles05.webp",

    meaning: "경제적·심리적으로 힘든 시기를 뜻하는 카드.",
    advice: "혼자 버티지 말고 도움을 요청하세요.",

    shortMeaning: "고난 극복의 카드",
    yesNo: "No",
    powerScore: 58,

    categoryInterpretations: {
      love: {
        meaning: "외로움이나 관계의 거리감.",
        advice: "솔직한 대화가 필요합니다.",
      },
      career: {
        meaning: "일시적 어려움, 압박감.",
        advice: "지원받을 방법을 찾으세요.",
      },
      money: {
        meaning: "지출 부담, 재정 압박 가능.",
        advice: "비용 구조를 조정하세요.",
      },
      mind: {
        meaning: "위축감이 커질 수 있습니다.",
        advice: "현재는 지나가는 과정입니다.",
      },
      relation: {
        meaning: "도움이 필요하지만 고립된 느낌.",
        advice: "믿을 사람에게 손 내미세요.",
      },
      health: {
        meaning: "피로 누적, 컨디션 저하.",
        advice: "무리하지 말고 회복에 집중하세요.",
      },
      future: {
        meaning: "잠시 힘들지만 회복 가능성 있습니다.",
        advice: "버티며 지원을 받으세요.",
      },
      choice: {
        meaning: "무리한 선택은 불리합니다.",
        advice: "안정 확보부터 하세요.",
      },
    },
  },

  {
    id: 41,
    name: "Six of Pentacles (펜타클 6)",
    englishName: "Six of Pentacles",
    type: "Pents",
    number: 6,
    keywords: ["나눔", "보상", "지원", "균형"],
    image: "/images/Pentacles/pentacles06.webp",

    meaning: "주고받는 균형과 정당한 보상을 뜻하는 카드.",
    advice: "받은 만큼 베풀고, 베푼 만큼 돌아올 것을 믿으세요.",

    shortMeaning: "보상과 나눔의 카드",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning: "서로 배려하며 균형 잡힌 관계.",
        advice: "일방적 관계는 조정하세요.",
      },
      career: {
        meaning: "노력에 대한 인정과 도움운.",
        advice: "협조 요청도 좋은 선택입니다.",
      },
      money: {
        meaning: "금전 지원, 보상, 수입 회복 가능성.",
        advice: "흐름을 건강하게 관리하세요.",
      },
      mind: {
        meaning: "심리적 여유가 생깁니다.",
        advice: "감사와 나눔을 실천하세요.",
      },
      relation: {
        meaning: "서로 돕는 인간관계 형성.",
        advice: "주고받는 균형을 맞추세요.",
      },
      health: {
        meaning: "회복을 위한 도움을 받을 수 있습니다.",
        advice: "혼자 버티지 마세요.",
      },
      future: {
        meaning: "도움받거나 보상받을 일이 생깁니다.",
        advice: "관계를 소중히 하세요.",
      },
      choice: {
        meaning: "서로 윈윈 되는 선택이 좋습니다.",
        advice: "균형을 기준으로 판단하세요.",
      },
    },
  },

  {
    id: 42,
    name: "Seven of Pentacles (펜타클 7)",
    englishName: "Seven of Pentacles",
    type: "Pents",
    number: 7,
    keywords: ["인내", "기다림", "평가", "수확 대기"],
    image: "/images/Pentacles/pentacles07.webp",

    meaning: "성과를 기다리며 다음 단계를 점검하는 카드.",
    advice: "서두르지 말고 과정을 믿으세요.",

    shortMeaning: "기다림과 평가의 카드",
    yesNo: "Maybe",
    powerScore: 79,

    categoryInterpretations: {
      love: {
        meaning: "관계가 천천히 자라고 있습니다.",
        advice: "조급함을 줄이세요.",
      },
      career: {
        meaning: "노력 대비 결과를 점검하는 시기.",
        advice: "방향 수정도 검토하세요.",
      },
      money: {
        meaning: "투자 성과를 기다리는 흐름.",
        advice: "성급한 판단은 피하세요.",
      },
      mind: {
        meaning: "내가 잘하고 있는지 고민합니다.",
        advice: "과정을 인정하세요.",
      },
      relation: {
        meaning: "관계의 가치 판단 시기.",
        advice: "시간을 두고 보세요.",
      },
      health: {
        meaning: "회복은 느리지만 진행 중입니다.",
        advice: "꾸준함이 중요합니다.",
      },
      future: {
        meaning: "조금 늦지만 결과는 옵니다.",
        advice: "지속하세요.",
      },
      choice: {
        meaning: "지금은 결정 전 관찰이 유리합니다.",
        advice: "더 지켜보세요.",
      },
    },
  },

  {
    id: 43,
    name: "Eight of Pentacles (펜타클 8)",
    englishName: "Eight of Pentacles",
    type: "Pents",
    number: 8,
    keywords: ["숙련", "노력", "반복", "성실"],
    image: "/images/Pentacles/pentacles08.webp",

    meaning: "꾸준한 노력과 기술 연마를 뜻하는 카드.",
    advice: "디테일과 반복이 실력을 만듭니다.",

    shortMeaning: "성실 성장의 카드",
    yesNo: "Yes",
    powerScore: 90,

    categoryInterpretations: {
      love: {
        meaning: "관계를 위해 꾸준히 노력합니다.",
        advice: "작은 배려를 지속하세요.",
      },
      career: {
        meaning: "실력 향상, 전문성 강화 시기.",
        advice: "배움에 투자하세요.",
      },
      money: {
        meaning: "꾸준한 수입 기반 형성.",
        advice: "한방보다 지속성을 보세요.",
      },
      mind: {
        meaning: "몰입도가 높아집니다.",
        advice: "집중력을 잘 활용하세요.",
      },
      relation: {
        meaning: "성실함으로 신뢰를 얻습니다.",
        advice: "말보다 행동을 보여주세요.",
      },
      health: {
        meaning: "꾸준한 관리가 효과적입니다.",
        advice: "운동 루틴을 유지하세요.",
      },
      future: {
        meaning: "노력이 확실한 결과로 이어집니다.",
        advice: "계속 쌓아가세요.",
      },
      choice: {
        meaning: "배울 수 있는 선택이 좋습니다.",
        advice: "성장 가능성을 보세요.",
      },
    },
  },

  {
    id: 44,
    name: "Nine of Pentacles (펜타클 9)",
    englishName: "Nine of Pentacles",
    type: "Pents",
    number: 9,
    keywords: ["성공", "자립", "풍요", "여유"],
    image: "/images/Pentacles/pentacles09.webp",

    meaning: "스스로 이룬 성공과 여유를 뜻하는 카드.",
    advice: "성과를 누리되 관리도 병행하세요.",

    shortMeaning: "자립 풍요의 카드",
    yesNo: "Yes",
    powerScore: 95,

    categoryInterpretations: {
      love: {
        meaning: "스스로 만족도가 높아 건강한 관계를 끌어당깁니다.",
        advice: "외로움 때문에 타협하지 마세요.",
      },
      career: {
        meaning: "혼자서도 인정받는 성과.",
        advice: "브랜딩을 강화하세요.",
      },
      money: {
        meaning: "재정 성장과 경제적 여유.",
        advice: "자산 관리를 병행하세요.",
      },
      mind: {
        meaning: "자존감과 만족감 상승.",
        advice: "지금 성장을 인정하세요.",
      },
      relation: {
        meaning: "당당한 매력으로 좋은 인연 유입.",
        advice: "자신감을 가지세요.",
      },
      health: {
        meaning: "생활 안정이 건강에 도움 됩니다.",
        advice: "좋은 습관 유지하세요.",
      },
      future: {
        meaning: "풍요로운 결과가 다가옵니다.",
        advice: "기반을 계속 다지세요.",
      },
      choice: {
        meaning: "독립성과 가치가 높은 선택이 좋습니다.",
        advice: "스스로 만족할 길을 택하세요.",
      },
    },
  },

  {
    id: 45,
    name: "Ten of Pentacles (펜타클 10)",
    englishName: "Ten of Pentacles",
    type: "Pents",
    number: 10,
    keywords: ["유산", "안정", "부", "가족"],
    image: "/images/Pentacles/pentacles10.webp",

    meaning: "장기적 안정과 큰 자산 완성을 뜻하는 카드.",
    advice: "오늘의 선택을 미래 기반으로 연결하세요.",

    shortMeaning: "완성된 부의 카드",
    yesNo: "Yes",
    powerScore: 98,

    categoryInterpretations: {
      love: {
        meaning: "결혼, 가족 계획, 장기 관계운 강함.",
        advice: "미래 가치관을 나눠보세요.",
      },
      career: {
        meaning: "안정적 커리어와 승진 기반.",
        advice: "신뢰를 계속 쌓으세요.",
      },
      money: {
        meaning: "대표적인 자산 축적 카드.",
        advice: "단기보다 장기 구조를 보세요.",
      },
      mind: {
        meaning: "든든함과 안정감을 느낍니다.",
        advice: "기반에 감사하세요.",
      },
      relation: {
        meaning: "가족·조직과 유대 강화.",
        advice: "함께 성장하는 방향을 택하세요.",
      },
      health: {
        meaning: "안정된 생활이 건강에 좋습니다.",
        advice: "루틴을 유지하세요.",
      },
      future: {
        meaning: "오래가는 성공이 만들어집니다.",
        advice: "지속 가능한 길을 택하세요.",
      },
      choice: {
        meaning: "가장 안정적이고 오래가는 선택입니다.",
        advice: "장기 관점으로 결정하세요.",
      },
    },
  },

  {
    id: 46,
    name: "Page of Pentacles (펜타클 페이지)",
    englishName: "Page of Pentacles",
    type: "Pents",
    number: 11,
    keywords: ["학구열", "신중함", "현실적 시작", "기회"],
    meaning: "실제적인 이득이나 배움에 대한 새로운 소식이 들려오는 시기입니다.",
    advice:
      "작은 기회라도 소중히 여기며 기초부터 차근차근 배워나가는 태도가 필요합니다.",
    image: "/images/Pentacles/pentacles11_Page.webp",
    shortMeaning: "배움과 현실 기회의 시작",
    yesNo: "Yes",
    powerScore: 78,

    categoryInterpretations: {
      love: {
        meaning: "느리지만 진지한 관계가 시작될 수 있습니다.",
        advice: "급하게 판단하지 말고 천천히 알아가세요.",
      },
      career: {
        meaning: "취업 준비, 자격증, 신입 기회운이 좋습니다.",
        advice: "지금은 성장 투자 시기입니다.",
      },
      money: {
        meaning: "작은 돈, 부업, 공부를 통한 수익 기회가 생깁니다.",
        advice: "기초 지식 습득이 미래 돈이 됩니다.",
      },
      mind: {
        meaning: "배우고 싶고 성장하고 싶은 의지가 강해집니다.",
        advice: "작게라도 바로 시작하세요.",
      },
      relation: {
        meaning: "성실한 사람과의 인연이 들어옵니다.",
        advice: "가볍게 보지 말고 진정성을 보세요.",
      },
      health: {
        meaning: "생활 습관 개선에 좋은 시기입니다.",
        advice: "기초 체력부터 차근히 만들어가세요.",
      },
      future: {
        meaning: "작은 시작이 큰 자산으로 성장합니다.",
        advice: "지금 배우는 것이 미래를 만듭니다.",
      },
      choice: {
        meaning: "안정적이고 현실적인 선택이 좋습니다.",
        advice: "가능성보다 실현 가능성을 보세요.",
      },
    },
  },

  {
    id: 47,
    name: "Knight of Pentacles (펜타클 나이트)",
    englishName: "Knight of Pentacles",
    type: "Pents",
    number: 12,
    keywords: ["성실함", "책임감", "느리지만 확실한", "신뢰"],
    meaning:
      "속도는 느리지만 목표를 향해 아주 성실하고 확실하게 나아가는 에너지입니다.",
    advice: "요행을 바라지 말고 맡은 바 책임을 다해 묵묵히 전진하세요.",
    image: "/images/Pentacles/pentacles12_Knight.webp",
    shortMeaning: "느리지만 확실한 전진",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning: "천천히 깊어지는 안정적인 관계입니다.",
        advice: "속도보다 신뢰를 우선하세요.",
      },
      career: {
        meaning: "꾸준함으로 인정받고 성과가 쌓입니다.",
        advice: "지금 페이스를 유지하세요.",
      },
      money: {
        meaning: "급등은 없지만 안정적으로 늘어납니다.",
        advice: "장기적 저축과 계획이 유리합니다.",
      },
      mind: {
        meaning: "차분하고 현실적인 판단력이 강합니다.",
        advice: "조급함만 내려놓으세요.",
      },
      relation: {
        meaning: "믿을 수 있는 사람들과 연결됩니다.",
        advice: "약속을 지키는 태도가 중요합니다.",
      },
      health: {
        meaning: "기초 체력 회복 흐름입니다.",
        advice: "꾸준한 운동이 가장 효과적입니다.",
      },
      future: {
        meaning: "느리지만 원하는 곳에 도달합니다.",
        advice: "중간에 포기하지 마세요.",
      },
      choice: {
        meaning: "안전하고 검증된 길이 맞습니다.",
        advice: "빠른 길보다 오래가는 길을 택하세요.",
      },
    },
  },

  {
    id: 48,
    name: "Queen of Pentacles (펜타클 퀸)",
    englishName: "Queen of Pentacles",
    type: "Pents",
    number: 13,
    keywords: ["실용적", "풍요로운 환경", "양육", "현명함"],
    meaning:
      "가정과 현실적인 부분을 아주 지혜롭고 풍요롭게 관리하는 인물입니다.",
    advice:
      "실용적인 면을 살려 주변을 돌보고, 자신을 위한 안락한 환경을 조성하세요.",
    image: "/images/Pentacles/pentacles13_Queen.webp",
    shortMeaning: "현실 감각 있는 풍요",
    yesNo: "Yes",
    powerScore: 90,

    categoryInterpretations: {
      love: {
        meaning: "따뜻하고 안정적인 관계운이 강합니다.",
        advice: "배려하되 자신도 챙기세요.",
      },
      career: {
        meaning: "실무 능력과 관리 능력을 인정받습니다.",
        advice: "당신의 꼼꼼함을 강점으로 쓰세요.",
      },
      money: {
        meaning: "생활 안정과 재정 관리 능력이 좋아집니다.",
        advice: "수입보다 관리가 핵심입니다.",
      },
      mind: {
        meaning: "심리적으로 안정되고 여유가 생깁니다.",
        advice: "편안한 환경을 정돈해보세요.",
      },
      relation: {
        meaning: "주변을 챙기며 신뢰를 얻습니다.",
        advice: "과한 희생은 피하세요.",
      },
      health: {
        meaning: "생활 패턴 안정으로 건강운이 좋습니다.",
        advice: "식습관과 수면을 꾸준히 관리하세요.",
      },
      future: {
        meaning: "안정된 기반 위에 풍요가 커집니다.",
        advice: "현재 시스템을 유지·확장하세요.",
      },
      choice: {
        meaning: "현실적이고 지속 가능한 선택이 좋습니다.",
        advice: "감정보다 실속을 보세요.",
      },
    },
  },

  {
    id: 49,
    name: "King of Pentacles (펜타클 킹)",
    englishName: "King of Pentacles",
    type: "Pents",
    number: 14,
    keywords: ["자산가", "안정", "성공", "실질적인 성과"],
    meaning:
      "물질적 성공의 정점에 도달한 인물로, 뛰어난 비즈니스 능력과 안정된 자산을 보유하고 있음을 의미합니다.",
    advice:
      "지금까지 쌓아온 성과를 잘 유지하고 관리하세요. 현실적이고 보수적인 판단이 큰 이득을 가져다줄 것입니다.",
    image: "/images/Pentacles/pentacles14_King.webp",
    shortMeaning: "성공과 안정의 정점",
    yesNo: "Yes",
    powerScore: 97,

    categoryInterpretations: {
      love: {
        meaning: "믿음직하고 책임감 있는 상대와의 인연을 뜻합니다.",
        advice: "말보다 꾸준한 행동을 보는 눈이 중요합니다.",
      },
      career: {
        meaning: "리더십, 승진, 대표 역할, 실질적 성공운이 좋습니다.",
        advice: "당신의 경험치를 활용해 판을 키우세요.",
      },
      money: {
        meaning: "사업운, 자산운, 큰 돈을 다루는 흐름이 강합니다.",
        advice: "공격보다 안정적 운영이 더 큰 부를 만듭니다.",
      },
      mind: {
        meaning: "흔들림 없는 안정감과 자신감이 커집니다.",
        advice: "이미 가진 강점을 믿고 중심을 잡으세요.",
      },
      relation: {
        meaning: "주변 사람들에게 신뢰받는 위치입니다.",
        advice: "권위보다 품격으로 이끄세요.",
      },
      health: {
        meaning: "전반적 컨디션은 안정적입니다.",
        advice: "과로와 스트레스 누적만 주의하세요.",
      },
      future: {
        meaning: "큰 성과와 안정된 기반을 이루게 됩니다.",
        advice: "지속 가능한 구조를 완성하세요.",
      },
      choice: {
        meaning: "안전성과 수익성이 높은 선택입니다.",
        advice: "충동보다 계산된 판단이 유리합니다.",
      },
    },
  },
];
