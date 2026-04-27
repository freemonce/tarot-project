import type { TarotCard } from "../types/tarot";

export const cups: TarotCard[] = [
  {
    id: 22,
    name: "Ace of Cups (컵 에이스)",
    englishName: "Ace of Cups",
    type: "Cups",
    number: 1,
    keywords: ["사랑의 시작", "감정", "기쁨", "새로운 인연", "직관", "영성"],
    reversedKeywords: ["감정 막힘", "상처", "공허함", "마음 닫힘"],
    image: "/images/Cups/Cups01.webp",

    meaning: "새로운 감정과 사랑, 기쁨이 시작되는 카드.",
    advice: "마음을 열고 좋은 흐름을 받아들이세요.",

    reversedMeaning:
      "감정의 흐름이 막히거나 마음속 공허함 때문에 좋은 기회를 놓칠 수 있습니다.",
    reversedAdvice:
      "상처 때문에 닫힌 마음이라면, 다시 느끼는 연습부터 시작하세요.",

    shortMeaning: "감정의 새 출발 카드",
    yesNo: "Yes",
    powerScore: 94,

    categoryInterpretations: {
      love: {
        meaning: "새로운 사랑이나 설레는 인연운.",
        advice: "감정을 솔직하게 표현하세요.",
      },
      career: {
        meaning: "새로운 프로젝트나 창의적인 아이디어가 샘솟는 시기입니다.",
        advice:
          "직관을 믿고 제안해 보세요. 당신의 진심이 동료들에게 닿을 것입니다.",
      },
      money: {
        meaning: "즐거운 일에서 수익 기회 가능.",
        advice: "가치 있는 일에 집중하세요.",
      },
      mind: {
        meaning: "메말랐던 감정이 회복됩니다.",
        advice: "좋아하는 것으로 마음을 채우세요.",
      },
      relation: {
        meaning: "따뜻한 인간관계가 시작됩니다.",
        advice: "먼저 다가가 보세요.",
      },
      health: {
        meaning: "정서 회복운이 좋습니다.",
        advice: "휴식과 힐링 시간을 가지세요.",
      },
      future: {
        meaning: "기분 좋은 새 출발이 다가옵니다.",
        advice: "닫힌 마음을 열어두세요.",
      },
      choice: {
        meaning: "마음이 끌리는 쪽이 맞습니다.",
        advice: "직감을 믿으세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "마음은 있으나 표현이 막혀 거리감이 생길 수 있습니다.",
        advice: "상처를 숨기기보다 솔직히 말해보세요.",
      },
      career: {
        meaning: "좋은 기회가 와도 의욕 부족으로 놓칠 수 있습니다.",
        advice: "감정 회복이 먼저입니다.",
      },
      money: {
        meaning: "감정 소비나 충동 지출 주의.",
        advice: "허전함을 소비로 채우지 마세요.",
      },
      mind: {
        meaning: "공허함, 외로움이 커질 수 있습니다.",
        advice: "혼자 견디기보다 도움을 요청하세요.",
      },
      relation: {
        meaning: "마음의 벽으로 관계가 서먹해질 수 있습니다.",
        advice: "먼저 한마디 건네는 용기가 필요합니다.",
      },
      health: {
        meaning: "정서 피로가 누적될 수 있습니다.",
        advice: "휴식과 감정 정리를 우선하세요.",
      },
      future: {
        meaning: "새 시작은 오지만 마음 준비가 더 필요합니다.",
        advice: "조급히 열기보다 천천히 회복하세요.",
      },
      choice: {
        meaning: "끌림만으로는 부족할 수 있습니다.",
        advice: "감정과 현실을 함께 보세요.",
      },
    },
  },

  {
    id: 23,
    name: "Two of Cups (컵 2)",
    englishName: "Two of Cups",
    type: "Cups",
    number: 2,
    keywords: ["결합", "화합", "파트너십", "교감"],
    reversedKeywords: ["불화", "거리감", "오해", "균형 깨짐"],
    image: "/images/Cups/Cups02.webp",

    meaning: "두 사람이 서로 통하고 연결되는 카드.",
    advice: "협력과 진솔한 소통이 해답입니다.",

    reversedMeaning:
      "서로의 마음이 어긋나거나 오해로 인해 관계 균형이 흔들릴 수 있습니다.",
    reversedAdvice: "누가 맞는지가 아니라, 서로 이해하려는 태도가 먼저입니다.",

    shortMeaning: "관계와 조화의 카드",
    yesNo: "Yes",
    powerScore: 92,

    categoryInterpretations: {
      love: {
        meaning: "서로 마음이 통하는 연애운.",
        advice: "밀당보다 진심이 중요합니다.",
      },
      career: {
        meaning: "좋은 협업과 팀워크 운.",
        advice: "혼자보다 함께 움직이세요.",
      },
      money: {
        meaning: "동업·소개를 통한 기회운.",
        advice: "믿을 사람과 협력하세요.",
      },
      mind: {
        meaning: "이해받고 싶은 마음이 커집니다.",
        advice: "믿는 사람에게 털어놓으세요.",
      },
      relation: {
        meaning: "인간관계가 좋아집니다.",
        advice: "먼저 손 내밀어 보세요.",
      },
      health: {
        meaning: "정서 안정에 좋습니다.",
        advice: "좋은 사람과 시간을 보내세요.",
      },
      future: {
        meaning: "중요한 인연이 들어올 수 있습니다.",
        advice: "관계를 소중히 하세요.",
      },
      choice: {
        meaning: "함께 가는 선택이 유리합니다.",
        advice: "혼자 해결하려 하지 마세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "연인 사이 오해나 감정 엇갈림이 생길 수 있습니다.",
        advice: "추측보다 직접 대화하세요.",
      },
      career: {
        meaning: "팀워크 불균형, 협업 마찰 가능성.",
        advice: "역할과 기대치를 명확히 하세요.",
      },
      money: {
        meaning:
          "동업자나 믿었던 지인과의 금전적 신뢰에 균형이 깨질 수 있습니다.",
        advice:
          "관계 때문에 손해를 감수하지 마세요. 서류와 계약은 명확히 해야 합니다.",
      },
      mind: {
        meaning: "이해받지 못한다는 외로움이 커질 수 있습니다.",
        advice: "감정을 쌓아두지 마세요.",
      },
      relation: {
        meaning: "친했던 사람과 거리감이 생길 수 있습니다.",
        advice: "작은 오해를 오래 두지 마세요.",
      },
      health: {
        meaning: "감정 스트레스가 컨디션에 영향 줄 수 있습니다.",
        advice: "관계 스트레스 관리가 필요합니다.",
      },
      future: {
        meaning: "중요한 인연이 와도 타이밍이 어긋날 수 있습니다.",
        advice: "급하게 단정 짓지 마세요.",
      },
      choice: {
        meaning: "함께 가는 길이 부담될 수 있습니다.",
        advice: "관계의 균형부터 점검하세요.",
      },
    },
  },

  {
    id: 24,
    name: "Three of Cups (컵 3)",
    englishName: "Three of Cups",
    type: "Cups",
    number: 3,
    keywords: ["축하", "우정", "기쁨", "모임"],
    reversedKeywords: ["과한 유흥", "질투", "소외감", "가벼운 관계"],
    image: "/images/Cups/Cups03.webp",

    meaning: "기쁨을 사람들과 함께 나누는 카드.",
    advice: "혼자보다 함께할 때 행운이 커집니다.",

    reversedMeaning:
      "즐거움이 과해지거나 사람들 속에서도 외로움을 느낄 수 있습니다.",
    reversedAdvice:
      "많은 사람보다 진심으로 연결되는 몇 사람이 더 중요할 수 있습니다.",

    shortMeaning: "축하와 우정의 카드",
    yesNo: "Yes",
    powerScore: 89,

    categoryInterpretations: {
      love: {
        meaning: "즐거운 만남과 데이트운 상승.",
        advice: "가벼운 모임에서 기회가 옵니다.",
      },
      career: {
        meaning: "팀 성과와 분위기 상승.",
        advice: "협업을 적극 활용하세요.",
      },
      money: {
        meaning: "축하받을 수익 흐름.",
        advice: "성과를 잘 관리하세요.",
      },
      mind: {
        meaning: "우울감이 줄고 밝아집니다.",
        advice: "사람들과 어울리세요.",
      },
      relation: {
        meaning: "친구·동료 관계 호조.",
        advice: "연락을 먼저 해보세요.",
      },
      health: {
        meaning: "기분 전환이 건강에 도움 됩니다.",
        advice: "외출과 활동을 늘리세요.",
      },
      future: {
        meaning:
          "결혼 제안, 합격 파티 등 구체적인 경사 및 좋은 소식과 축하할 일이 옵니다.",
        advice: "주변과 기쁨을 나누세요.",
      },
      choice: {
        meaning: "즐겁고 사람 많은 쪽이 유리합니다.",
        advice: "고립된 선택은 피하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "두 사람 사이에 제 3자가 끼어들거나, 우정과 사랑 사이에서 혼란이 올 수 있습니다.",
        advice:
          "단순한 즐거움 뒤에 숨은 복잡한 관계의 실타래를 냉정히 살펴보세요.",
      },
      career: {
        meaning: "팀 내 잡음이나 분위기 저하 가능성.",
        advice: "겉도는 소통을 줄이세요.",
      },
      money: {
        meaning: "모임·유흥 비용 지출 증가 가능성.",
        advice: "즐거움에도 예산은 필요합니다.",
      },
      mind: {
        meaning: "사람들 속에서도 소외감을 느낄 수 있습니다.",
        advice: "억지로 어울리기보다 진짜 휴식을 선택하세요.",
      },
      relation: {
        meaning: "친구 사이 질투나 뒷말 주의.",
        advice: "가벼운 말도 신중히 하세요.",
      },
      health: {
        meaning: "과음·과로·생활 리듬 붕괴 주의.",
        advice: "즐거움 뒤 회복 시간도 챙기세요.",
      },
      future: {
        meaning: "좋은 소식이 늦어지거나 기대보다 작을 수 있습니다.",
        advice: "비교보다 자신의 속도를 보세요.",
      },
      choice: {
        meaning: "사람 많고 화려한 선택이 꼭 맞진 않습니다.",
        advice: "진짜 만족을 주는 길을 고르세요.",
      },
    },
  },

  {
    id: 25,
    name: "Four of Cups (컵 4)",
    englishName: "Four of Cups",
    type: "Cups",
    number: 4,
    keywords: ["권태", "지루함", "불만족", "재검토"],
    reversedKeywords: ["새 자극", "기회 인식", "의욕 회복", "재시작"],
    image: "/images/Cups/Cups04.webp",

    meaning: "현재에 만족하지 못하고 무기력한 카드.",
    advice: "놓치고 있는 기회를 다시 보세요.",

    reversedMeaning:
      "무기력에서 벗어나 다시 움직일 힘이 생기며 놓쳤던 기회가 보이기 시작합니다.",
    reversedAdvice:
      "지루함은 끝나고 있습니다. 작은 행동 하나가 흐름을 바꿉니다.",

    shortMeaning: "권태와 재점검의 카드",
    yesNo: "Maybe",
    powerScore: 72,

    categoryInterpretations: {
      love: {
        meaning: "연애 권태기 가능성.",
        advice: "새로운 대화가 필요합니다.",
      },
      career: {
        meaning: "일에 흥미가 떨어질 수 있습니다.",
        advice: "변화 포인트를 찾으세요.",
      },
      money: {
        meaning: "수익에 만족감이 낮습니다.",
        advice: "새 방향을 검토하세요.",
      },
      mind: {
        meaning: "무기력감이 올라옵니다.",
        advice: "환경 변화를 주세요.",
      },
      relation: {
        meaning: "사람에게 시큰둥해질 수 있습니다.",
        advice: "감사를 표현해 보세요.",
      },
      health: {
        meaning: "활력 저하 가능성.",
        advice: "가벼운 운동이 필요합니다.",
      },
      future: {
        meaning: "기회가 와도 못 볼 수 있습니다.",
        advice: "시야를 넓히세요.",
      },
      choice: {
        meaning:
          "주변의 제안이 매력적으로 보이지 않거나, 심리적으로 새로운 것을 받아들일 여유가 없는 정체기입니다.",
        advice:
          "억지로 결정하지 마세요. 마음이 내키지 않는다면 '아니오'라고 말하며 에너지를 보존해도 괜찮습니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "권태기가 지나고 다시 설렘이 살아날 수 있습니다.",
        advice: "새로운 추억을 함께 만들어보세요.",
      },
      career: {
        meaning: "일에 대한 의욕과 동기가 회복됩니다.",
        advice: "작은 변화가 큰 활력을 줍니다.",
      },
      money: {
        meaning: "새로운 수익 기회를 발견할 수 있습니다.",
        advice: "익숙한 방식만 고집하지 마세요.",
      },
      mind: {
        meaning:
          "답답했던 감정의 정체가 풀리고, 다시 외부 세계와 소통하며 움직이고 싶은 의지가 살아납니다.",
        advice:
          "가벼운 명상으로 마음을 먼저 정돈해보세요. 어느 정도 생각이 정리되었다면, 그 뒤에 따르는 '행동'이 당신의 가장 확실한 해답이 될 것입니다.",
      },
      relation: {
        meaning: "닫혔던 마음이 열리며 관계가 회복됩니다.",
        advice: "먼저 다가가면 반응이 옵니다.",
      },
      health: {
        meaning: "활력이 서서히 돌아옵니다.",
        advice: "생활 리듬을 다시 세우세요.",
      },
      future: {
        meaning: "정체됐던 흐름이 다시 움직입니다.",
        advice: "놓친 기회를 다시 잡을 수 있습니다.",
      },
      choice: {
        meaning: "다시 검토했던 선택이 유효해질 수 있습니다.",
        advice: "망설임보다 실행으로 옮기세요.",
      },
    },
  },

  {
    id: 26,
    name: "Five of Cups (컵 5)",
    englishName: "Five of Cups",
    type: "Cups",
    number: 5,
    keywords: ["상실", "후회", "슬픔", "실망"],
    reversedKeywords: ["회복", "용서", "재출발", "희망 발견"],
    image: "/images/Cups/Cups05.webp",

    meaning: "잃은 것에 집중해 슬픔이 큰 카드.",
    advice: "아직 남아 있는 가능성을 보세요.",

    reversedMeaning:
      "슬픔에서 서서히 벗어나 남아 있는 가능성과 회복의 길을 보기 시작합니다.",
    reversedAdvice: "잃은 것을 인정한 순간, 다시 얻을 수 있는 것들이 보입니다.",

    shortMeaning: "상실 뒤 회복의 카드",
    yesNo: "No",
    powerScore: 68,

    categoryInterpretations: {
      love: {
        meaning: "실연이나 서운함 가능성.",
        advice: "과거보다 회복에 집중하세요.",
      },
      career: {
        meaning: "결과 아쉬움이 남을 수 있습니다.",
        advice: "실패를 복기하고 다시 준비하세요.",
      },
      money: {
        meaning: "손실감이 있을 수 있습니다.",
        advice: "남은 자산부터 지키세요.",
      },
      mind: {
        meaning: "우울감·후회가 큽니다.",
        advice: "스스로를 너무 몰아세우지 마세요.",
      },
      relation: {
        meaning: "실망감으로 인한 관계 단절 이슈.",
        advice: "서운함을 표현하기 전에 자신의 마음을 먼저 다독이세요.",
      },
      health: {
        meaning: "감정 스트레스 주의.",
        advice: "충분히 쉬고 털어내세요.",
      },
      future: {
        meaning: "지금은 힘들어도 회복됩니다.",
        advice: "남은 기회를 놓치지 마세요.",
      },
      choice: {
        meaning: "감정적 선택은 불리합니다.",
        advice: "상처가 가라앉은 뒤 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "상처가 치유되며 새로운 감정이 열립니다.",
        advice: "지난 사람보다 앞으로 올 사람을 보세요.",
      },
      career: {
        meaning: "실패 경험이 성장 자산이 됩니다.",
        advice: "다시 도전하면 결과가 달라집니다.",
      },
      money: {
        meaning:
          "손실이 멈추고 예상치 못한 곳에서 작은 보상이나 수입이 생길 수 있습니다.",
        advice:
          "지나간 지출에 연연하기보다 남은 자금을 어떻게 굴릴지 고민할 때입니다.",
      },
      mind: {
        meaning: "우울감에서 벗어나 희망이 돌아옵니다.",
        advice: "스스로를 용서하세요.",
      },
      relation: {
        meaning: "서운했던 관계가 화해될 수 있습니다.",
        advice: "먼저 손 내미는 용기가 필요합니다.",
      },
      health: {
        meaning: "감정 안정과 함께 컨디션이 좋아집니다.",
        advice: "몸과 마음 회복을 함께 챙기세요.",
      },
      future: {
        meaning: "어두운 시기를 지나 새 흐름이 시작됩니다.",
        advice: "회복은 이미 시작됐습니다.",
      },
      choice: {
        meaning: "과거 상처를 기준으로 판단하지 않게 됩니다.",
        advice: "새 기준으로 선택하세요.",
      },
    },
  },

  {
    id: 27,
    name: "Six of Cups (컵 6)",
    englishName: "Six of Cups",
    type: "Cups",
    number: 6,
    keywords: ["향수", "추억", "재회", "순수함", "선물", "유산"],
    reversedKeywords: ["과거 집착", "미련", "성장 필요", "현재 외면"],
    image: "/images/Cups/Cups06.webp",

    meaning: "따뜻한 과거의 기억과 순수한 감정이 돌아오는 카드.",
    advice: "과거의 좋은 가치를 현재에 살려보세요.",

    reversedMeaning:
      "과거의 기억이나 미련에 머물러 현재의 기회를 놓칠 수 있습니다.",
    reversedAdvice: "추억은 힘이 될 수 있지만, 앞으로 나아갈 때 더 빛납니다.",

    shortMeaning: "추억과 재회의 카드",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning: "옛 인연 재회 또는 순수한 사랑운.",
        advice: "진심 어린 태도가 중요합니다.",
      },
      career: {
        meaning:
          "과거의 경력이나 예전 인연이 새로운 기회의 징검다리가 되어줍니다.",
        advice:
          "이전 직장 동료나 지인에게 안부를 전해 보세요. 기분 좋은 소식이 들려올 수 있습니다.",
      },
      money: {
        meaning: "예전 인연이나 경험에서 기회가 옵니다.",
        advice: "기존 자산을 재점검하세요.",
      },
      mind: {
        meaning: "마음이 따뜻해지고 안정됩니다.",
        advice: "좋았던 기억이 힘이 됩니다.",
      },
      relation: {
        meaning: "친구·가족과 관계 회복운.",
        advice: "먼저 연락해 보세요.",
      },
      health: {
        meaning: "정서 안정이 건강에 도움 됩니다.",
        advice: "편안한 환경을 만드세요.",
      },
      future: {
        meaning: "과거 인연이 다시 연결될 수 있습니다.",
        advice: "좋은 것은 다시 받아들이세요.",
      },
      choice: {
        meaning: "익숙하고 믿을 수 있는 선택이 좋습니다.",
        advice: "기본으로 돌아가세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "옛사랑 미련이 현재 관계를 방해할 수 있습니다.",
        advice: "추억과 현실을 구분하세요.",
      },
      career: {
        meaning: "예전 방식만 고집하면 정체될 수 있습니다.",
        advice: "경험은 활용하되 업데이트하세요.",
      },
      money: {
        meaning: "낡은 수입 구조에 머물 수 있습니다.",
        advice: "새 기회를 받아들일 준비를 하세요.",
      },
      mind: {
        meaning: "과거에 머물러 현재 만족감이 낮아질 수 있습니다.",
        advice: "오늘의 삶에 집중하세요.",
      },
      relation: {
        meaning: "오래된 감정 문제 재등장 가능성.",
        advice: "미뤄둔 감정을 정리하세요.",
      },
      health: {
        meaning: "정서적 미련이 컨디션에 영향 줄 수 있습니다.",
        advice: "마음 정리가 필요합니다.",
      },
      future: {
        meaning: "앞으로 가야 할 시점인데 뒤를 볼 수 있습니다.",
        advice: "미래는 과거보다 넓습니다.",
      },
      choice: {
        meaning: "익숙함만 보고 선택하면 후회할 수 있습니다.",
        advice: "안전함과 성장 가능성을 함께 보세요.",
      },
    },
  },

  {
    id: 28,
    name: "Seven of Cups (컵 7)",
    englishName: "Seven of Cups",
    type: "Cups",
    number: 7,
    keywords: ["환상", "혼란", "선택지", "유혹", "중독", "백일몽"],
    reversedKeywords: ["현실 직시", "선택 확정", "집중", "판단 회복"],
    image: "/images/Cups/Cups07.webp",

    meaning: "선택지가 많아 혼란스럽고 현실감이 부족한 카드.",
    advice: "꿈보다 현실성을 기준으로 선택하세요.",

    reversedMeaning:
      "흐려졌던 판단이 맑아지며 진짜 원하는 것과 현실적인 길이 보이기 시작합니다.",
    reversedAdvice:
      "모든 가능성을 잡으려 하지 말고, 가장 가치 있는 하나에 집중하세요.",

    shortMeaning: "환상과 선택의 카드",
    yesNo: "Maybe",
    powerScore: 70,

    categoryInterpretations: {
      love: {
        meaning: "이상형 환상 또는 여러 인연 사이 고민.",
        advice: "겉모습보다 진정성을 보세요.",
      },
      career: {
        meaning: "아이디어는 많으나 구체적인 실행 계획이 부족해 보입니다.",
        advice:
          "상상력을 발휘하되, 오늘 당장 실천 가능한 '하나'부터 선택해 몰입하세요.",
      },
      money: {
        meaning: "달콤한 제안 주의.",
        advice: "검증되지 않은 투자 피하세요.",
      },
      mind: {
        meaning: "생각이 많고 산만합니다.",
        advice: "우선순위를 정리하세요.",
      },
      relation: {
        meaning: "겉과 속 다른 사람 주의.",
        advice: "말보다 행동을 보세요.",
      },
      health: {
        meaning: "생활 패턴이 흐트러질 수 있습니다.",
        advice: "규칙성을 회복하세요.",
      },
      future: {
        meaning: "가능성은 많지만 확정은 아닙니다.",
        advice: "선택과 집중이 필요합니다.",
      },
      choice: {
        meaning: "지금은 신중한 판단이 필요합니다.",
        advice: "환상보다 현실을 택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "헷갈리던 감정이 정리되고 한 사람에게 마음이 모입니다.",
        advice: "비교보다 진심이 가는 관계를 선택하세요.",
      },
      career: {
        meaning: "흩어진 목표가 정리되며 방향성이 선명해집니다.",
        advice: "핵심 목표 하나를 정해 집중하세요.",
      },
      money: {
        meaning: "허황된 기대를 버리고 안정적 판단이 가능해집니다.",
        advice: "현실 수익 구조를 우선하세요.",
      },
      mind: {
        meaning: "복잡했던 생각이 정돈됩니다.",
        advice: "결정 미루기를 끝내세요.",
      },
      relation: {
        meaning: "진짜 사람과 아닌 사람이 구분됩니다.",
        advice: "에너지 소모 관계는 줄이세요.",
      },
      health: {
        meaning:
          "정신적 혼란이 걷히고 심리적 안정 및 흐트러진 생활이 다시 안정됩니다.",
        advice: "기본 루틴부터 회복하세요.",
      },
      future: {
        meaning: "많은 가능성 중 실현될 길이 드러납니다.",
        advice: "선택한 길을 믿고 가세요.",
      },
      choice: {
        meaning: "이제는 결정할 타이밍입니다.",
        advice: "현실성 높은 선택이 정답입니다.",
      },
    },
  },

  {
    id: 29,
    name: "Eight of Cups (컵 8)",
    englishName: "Eight of Cups",
    type: "Cups",
    number: 8,
    keywords: ["이동", "떠남", "정리", "새 여정"],
    reversedKeywords: ["미련", "정체", "복귀 고민", "떠나지 못함"],
    image: "/images/Cups/Cups08.webp",

    meaning: "익숙하지만 만족스럽지 않은 것을 떠나는 카드.",
    advice: "미련보다 성장 가능성을 선택하세요.",

    reversedMeaning:
      "떠나야 할 것을 알면서도 미련과 두려움 때문에 머무를 수 있습니다.",
    reversedAdvice: "익숙함은 안전해 보여도 성장까지 보장하진 않습니다.",

    shortMeaning: "떠남과 성장의 카드",
    yesNo: "Yes",
    powerScore: 82,

    categoryInterpretations: {
      love: {
        meaning:
          "익숙한 관계에 회의감이 들거나, 더 깊은 정서적 성장을 위해 현재의 관계에서 한 발짝 물러나고 싶어지는 시기입니다.",

        advice:
          "서로를 위해 잠시 거리를 두는 시간을 가져보세요. 이 공백이 두 사람의 성장에 중요한 계기가 될 것입니다.",
      },
      career: {
        meaning:
          "진행 중이던 프로젝트가 중단되거나, 본인의 의사에 따라 다른 부서로의 전환, 혹은 이직 등 환경의 큰 변화가 예상됩니다.",
        advice:
          "지금의 자리에 안주하기보다 더 나은 비전을 제시하는 곳으로 과감히 시선을 돌리세요.",
      },
      money: {
        meaning:
          "수익이 나지 않는 투자처나 비효율적인 지출 구조를 정리해야 하는 시점입니다.",
        advice:
          "손실이 아까워 붙잡고 있기보다는, 더 큰 미래를 위해 '손절'과 '정리'를 택하는 과감함이 필요합니다.",
      },
      mind: {
        meaning: "성장을 위한 결단 시기.",
        advice: "익숙함에 머물지 마세요.",
      },
      relation: {
        meaning: "거리 둘 관계가 생깁니다.",
        advice: "에너지 소모 관계를 정리하세요.",
      },
      health: {
        meaning:
          "반복되는 일상 속에서 쌓인 피로와 스트레스로 인해 에너지가 고갈된 상태입니다.",
        advice:
          "온천, 가벼운 산책, 혹은 짧은 여행처럼 물리적인 환경을 바꿔주는 힐링이 필요합니다. 익숙한 공간을 벗어나는 것만으로도 큰 회복이 됩니다.",
      },
      future: {
        meaning: "새로운 길이 열립니다.",
        advice: "떠날 용기가 기회가 됩니다.",
      },
      choice: {
        meaning: "남는 것보다 떠나는 쪽이 유리합니다.",
        advice: "정리 결단을 하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "끝난 관계에 미련이 남아 앞으로 나아가기 어렵습니다.",
        advice: "추억보다 현재 감정을 보세요.",
      },
      career: {
        meaning: "불만족스러운 환경에 머무를 수 있습니다.",
        advice: "준비 후 움직여도 늦지 않습니다.",
      },
      money: {
        meaning: "비효율 구조를 알면서도 못 바꿀 수 있습니다.",
        advice: "작은 지출부터 정리하세요.",
      },
      mind: {
        meaning:
          "떠나야 할 때임을 직감하면서도 미련과 두려움에 마음이 정착하지 못하고 방황합니다.",
        advice:
          "결정을 지연시키는 것이 가장 큰 피로를 유발합니다. 이제는 과거가 아닌 앞을 보아야 할 때입니다.",
      },
      relation: {
        meaning: "정리해야 할 관계를 계속 끌 수 있습니다.",
        advice: "경계선을 분명히 하세요.",
      },
      health: {
        meaning: "나쁜 생활패턴 반복 가능성.",
        advice: "끊어야 할 습관 하나부터 바꾸세요.",
      },
      future: {
        meaning: "변화가 늦어질 수 있으나 기회는 남아 있습니다.",
        advice: "두려움보다 성장 가능성을 보세요.",
      },
      choice: {
        meaning: "머무름과 이동 사이 갈등이 큽니다.",
        advice: "안정감만이 기준은 아닙니다.",
      },
    },
  },

  {
    id: 30,
    name: "Nine of Cups (컵 9)",
    englishName: "Nine of Cups",
    type: "Cups",
    number: 9,
    keywords: ["만족", "소원성취", "풍요", "행복", "자부심", "성취감"],
    reversedKeywords: ["허전함", "과욕", "겉만 만족", "불만족"],
    image: "/images/Cups/Cups09.webp",

    meaning: "원하던 바가 이루어지고 만족감이 큰 카드.",
    advice: "행복을 누리되 감사함을 잊지 마세요.",

    reversedMeaning:
      "겉으로는 채워진 듯 보여도 마음 깊은 곳의 허전함이나 과욕이 남아 있을 수 있습니다.",
    reversedAdvice: "나의 성공이 누군가에게 상처가 되지는 않는지 살피세요.",

    shortMeaning: "소원 성취의 카드",
    yesNo: "Yes",
    powerScore: 95,

    categoryInterpretations: {
      love: {
        meaning: "원하던 연애 흐름이 이루어집니다.",
        advice: "기쁨을 자연스럽게 표현하세요.",
      },
      career: {
        meaning: "성과와 만족감이 높습니다.",
        advice: "결과를 자신 있게 누리세요.",
      },
      money: {
        meaning: "재정 만족도가 높아집니다.",
        advice: "과소비만 주의하세요.",
      },
      mind: {
        meaning:
          "물질적으로 풍요로워도 내면의 정서적 교감이 부족해 외로움을 느낄 수 있습니다.",
        advice:
          "혼자만의 성취보다 소중한 사람들과 기쁨을 나눌 때 진짜 만족이 완성됩니다.",
      },
      relation: {
        meaning: "사람들과 즐거운 관계 흐름.",
        advice: "좋은 에너지를 나누세요.",
      },
      health: {
        meaning:
          "몸과 마음이 안정을 되찾고 활력이 넘치며, 스스로의 컨디션에 매우 만족하게 되는 시기입니다.",
        advice:
          "풍요로움이 지나쳐 영양 과잉이나 체중 증가로 이어질 수 있습니다. 즐거운 식사도 좋지만 적절한 조절이 필요합니다.",
      },
      future: {
        meaning: "바라던 일이 성사될 가능성 높음.",
        advice: "긍정적으로 움직이세요.",
      },
      choice: {
        meaning: "가장 만족감 높은 선택입니다.",
        advice: "마음이 기쁜 쪽을 택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계는 있어도 마음의 공허함이 남을 수 있습니다.",
        advice: "겉모습보다 진짜 만족을 점검하세요.",
      },
      career: {
        meaning: "성과를 얻고도 만족감이 낮을 수 있습니다.",
        advice: "왜 시작했는지 초심을 돌아보세요.",
      },
      money: {
        meaning: "과소비나 욕심으로 균형이 흔들릴 수 있습니다.",
        advice: "소유보다 관리가 중요합니다.",
      },
      mind: {
        meaning:
          "표면적인 성공에 취해 내면의 공허함을 외면하거나, 지나친 우월감에 빠질 위험이 있습니다.",
        advice:
          "나의 성공이 누군가에게 상처가 되지는 않는지 주변을 살피세요. 진정한 만족은 타인과 함께 나눌 때 완성됩니다.",
      },
      relation: {
        meaning: "즐거워 보여도 진심 어린 연결이 부족할 수 있습니다.",
        advice: "깊이 있는 관계를 챙기세요.",
      },
      health: {
        meaning: "과식·과로 등 과한 즐김을 주의해야 합니다.",
        advice: "절제가 컨디션을 지킵니다.",
      },
      future: {
        meaning: "성과는 오지만 기대만큼 행복하지 않을 수 있습니다.",
        advice: "목표와 행복의 기준을 다시 세우세요.",
      },
      choice: {
        meaning: "겉보기에 좋아 보여도 만족도는 다를 수 있습니다.",
        advice: "남 시선보다 내 기준으로 고르세요.",
      },
    },
  },

  {
    id: 31,
    name: "Ten of Cups (컵 10)",
    englishName: "Ten of Cups",
    type: "Cups",
    number: 10,
    keywords: ["가족", "행복", "평화", "완성"],
    reversedKeywords: ["불화", "기대 불일치", "가정 갈등", "겉만 행복"],
    image: "/images/Cups/Cups10.webp",

    meaning: "정서적 완성과 행복이 가득한 카드.",
    advice: "소중한 사람들과 기쁨을 나누세요.",

    reversedMeaning:
      "겉으로는 괜찮아 보여도 관계 안의 거리감이나 기대 차이로 균열이 생길 수 있습니다.",
    reversedAdvice:
      "완벽한 행복을 만들려 하기보다 솔직한 대화로 현실의 행복을 회복하세요.",

    shortMeaning: "행복한 완성의 카드",
    yesNo: "Yes",
    powerScore: 98,

    categoryInterpretations: {
      love: {
        meaning: "결혼운·장기연애운 매우 강합니다.",
        advice: "현재 관계를 미래 관점으로 보세요.",
      },
      career: {
        meaning: "장기적인 파트너십이나 가족같은 끈끈한 조직문화가 좋습니다.",
        advice: "함께 성장하는 방식을 택하세요.",
      },
      money: {
        meaning: "안정적 생활 기반이 만들어집니다.",
        advice: "지속 가능한 구조에 집중하세요.",
      },
      mind: {
        meaning: "감사와 안정감이 커집니다.",
        advice: "이미 가진 행복을 인정하세요.",
      },
      relation: {
        meaning: "가족·지인과 조화로운 관계.",
        advice: "따뜻한 표현을 자주 하세요.",
      },
      health: {
        meaning: "심리 안정이 건강으로 이어집니다.",
        advice: "편안한 생활 리듬을 유지하세요.",
      },
      future: {
        meaning: "행복한 결과와 안정이 옵니다.",
        advice: "좋은 사람들과 함께하세요.",
      },
      choice: {
        meaning: "오래 행복할 선택이 맞습니다.",
        advice: "단기 이익보다 장기 행복을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "서로 원하는 미래 그림이 달라 갈등이 생길 수 있습니다.",
        advice: "사랑의 방식보다 가치관 대화를 먼저 하세요.",
      },
      career: {
        meaning: "팀 분위기는 있어도 내부 소통 문제가 숨겨질 수 있습니다.",
        advice: "겉평화보다 실질 협업을 점검하세요.",
      },
      money: {
        meaning: "생활은 유지되지만 만족감이 낮을 수 있습니다.",
        advice: "지출보다 삶의 균형을 점검하세요.",
      },
      mind: {
        meaning: "행복해야 한다는 압박감이 생길 수 있습니다.",
        advice: "비교를 멈추고 내 기준을 세우세요.",
      },
      relation: {
        meaning: "가족·지인과 서운함이 쌓일 수 있습니다.",
        advice: "참기보다 대화가 필요합니다.",
      },
      health: {
        meaning: "감정 스트레스가 컨디션에 영향을 줄 수 있습니다.",
        advice: "마음의 피로도 함께 관리하세요.",
      },
      future: {
        meaning: "좋은 결과는 가능하지만 관계 정비가 먼저입니다.",
        advice: "기반을 다지면 안정이 따라옵니다.",
      },
      choice: {
        meaning:
          "타인의 시선이나 가족의 기대에 맞춘 선택일 수 있어 진정한 만족이 어려울 수 있습니다.",
        advice:
          "내가 정말 원하는 행복인지, 아니면 완벽해 보이고 싶어 하는 욕심인지 구분해야 합니다.",
      },
    },
  },

  {
    id: 32,
    name: "Page of Cups (컵 페이지)",
    englishName: "Page of Cups",
    type: "Cups",
    number: 11,
    keywords: ["호기심", "감성", "예술적 영감", "새 소식"],
    reversedKeywords: ["감정 미성숙", "예민함", "헛기대", "소식 지연"],
    image: "/images/Cups/Cups11_Page.webp",

    meaning: "새로운 감정의 시작과 반가운 소식을 뜻하는 카드.",
    advice: "순수한 마음으로 기회를 받아들이세요.",

    reversedMeaning:
      "감정 기복이 커지거나 기대만 앞서 현실적인 움직임이 부족할 수 있습니다.",
    reversedAdvice: "설렘은 좋지만 행동과 책임이 따라올 때 진짜 기회가 됩니다.",

    shortMeaning: "감성적 시작의 카드",
    yesNo: "Yes",
    powerScore: 82,

    categoryInterpretations: {
      love: {
        meaning: "새로운 호감, 연락, 설레는 시작운.",
        advice: "솔직하고 귀엽게 표현해보세요.",
      },
      career: {
        meaning: "창의적인 아이디어가 주목받습니다.",
        advice: "작은 아이디어도 기록하세요.",
      },
      money: {
        meaning: "취미·감성 분야 수익 기회.",
        advice: "좋아하는 것을 활용해보세요.",
      },
      mind: {
        meaning: "감성이 살아나고 마음이 부드러워집니다.",
        advice: "직감을 무시하지 마세요.",
      },
      relation: {
        meaning: "기분 좋은 연락이나 새 인연 가능성.",
        advice: "먼저 가볍게 다가가 보세요.",
      },
      health: {
        meaning: "심리 안정이 회복됩니다.",
        advice: "감정을 건강하게 표현하세요.",
      },
      future: {
        meaning: "기분 좋은 제안이나 소식이 옵니다.",
        advice: "열린 마음으로 기다리세요.",
      },
      choice: {
        meaning: "마음이 끌리는 선택이 좋습니다.",
        advice: "지나친 계산은 내려놓으세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "연락 기대만 커지고 진전은 느릴 수 있습니다.",
        advice: "상상보다 실제 행동을 보세요.",
      },
      career: {
        meaning:
          "창의적이지만 비현실적인 계획으로 인해 실행 단계에서 차질이 생길 수 있습니다.",
        advice:
          "아이디어는 좋으나 디테일이 부족합니다. 현실적인 수치와 기한을 정해 다시 검토하세요.",
      },
      money: {
        meaning: "감성 소비나 충동 지출 주의.",
        advice: "기분 소비를 줄이세요.",
      },
      mind: {
        meaning: "예민함과 감정 기복이 커질 수 있습니다.",
        advice: "감정을 사실처럼 믿지 마세요.",
      },
      relation: {
        meaning: "말은 달콤하지만 가벼운 관계일 수 있습니다.",
        advice: "진정성을 천천히 확인하세요.",
      },
      health: {
        meaning: "감정 피로가 누적될 수 있습니다.",
        advice: "휴식과 감정 정리가 필요합니다.",
      },
      future: {
        meaning: "좋은 소식이 늦어질 수 있습니다.",
        advice: "기다리는 동안 준비를 하세요.",
      },
      choice: {
        meaning: "설렘만 보고 선택하면 흔들릴 수 있습니다.",
        advice: "현실 조건도 함께 보세요.",
      },
    },
  },

  {
    id: 33,
    name: "Knight of Cups (컵 나이트)",
    englishName: "Knight of Cups",
    type: "Cups",
    number: 12,
    keywords: ["로맨틱", "제안", "꿈", "부드러움"],
    reversedKeywords: ["변덕", "공허한 약속", "비현실", "감정 회피"],
    image: "/images/Cups/Cups12_Knight.webp",

    meaning: "매력적인 제안과 감성적인 움직임을 뜻하는 카드.",
    advice: "부드럽지만 확실하게 행동하세요.",

    reversedMeaning:
      "말은 아름답지만 실행력이 부족하거나 감정이 오락가락할 수 있습니다.",
    reversedAdvice: "매력적인 말보다 꾸준한 행동이 진심을 증명합니다.",

    shortMeaning: "매력적 제안의 카드",
    yesNo: "Yes",
    powerScore: 88,

    categoryInterpretations: {
      love: {
        meaning: "고백, 썸 진전, 매력적인 인연 등장운.",
        advice: "기다리기보다 표현이 중요합니다.",
      },
      career: {
        meaning: "협상, 제안, 면접운 상승.",
        advice: "부드러운 설득이 통합니다.",
      },
      money: {
        meaning: "귀인의 도움, 감성적인 투자 제안",
        advice: "도움을 주는 사람의 손길을 기쁘게 받으세요.",
      },
      mind: {
        meaning: "사랑받고 싶은 마음이 커집니다.",
        advice: "자신에게도 다정해지세요.",
      },
      relation: {
        meaning: "좋은 제안자나 호감형 인물 등장.",
        advice: "인연을 흘려보내지 마세요.",
      },
      health: {
        meaning: "감정 상태가 컨디션에 영향 줍니다.",
        advice: "스트레스 완화가 중요합니다.",
      },
      future: {
        meaning: "좋은 제안과 기회가 다가옵니다.",
        advice: "망설이지 말고 응답하세요.",
      },
      choice: {
        meaning: "가슴 뛰는 선택이 맞습니다.",
        advice: "열정이 있는 방향으로 가세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "달콤한 로맨스에 눈이 멀어 상대의 단점이나 무책임한 면을 보지 못할 수 있습니다.",
        advice:
          "상대의 말보다는 일관된 태도를 보세요. 감정에 취하기보다 시간을 두고 지켜봐야 합니다.",
      },
      career: {
        meaning: "좋은 제안처럼 보여도 구체성이 부족할 수 있습니다.",
        advice: "조건과 실행 계획을 확인하세요.",
      },
      money: {
        meaning: "감성 마케팅에 흔들려 손해 볼 수 있습니다.",
        advice: "숫자로 판단하세요.",
      },
      mind: {
        meaning: "감정이 들쑥날쑥하고 공허함이 생길 수 있습니다.",
        advice: "외부 인정 대신 내 중심을 세우세요.",
      },
      relation: {
        meaning: "호감형 인물이지만 책임감은 부족할 수 있습니다.",
        advice: "말보다 행동을 보세요.",
      },
      health: {
        meaning: "감정 스트레스가 피로로 이어질 수 있습니다.",
        advice: "수면과 휴식을 챙기세요.",
      },
      future: {
        meaning: "좋은 기회가 와도 확정까지 시간 걸릴 수 있습니다.",
        advice: "기대만 하지 말고 검증하세요.",
      },
      choice: {
        meaning: "두근거림만으로 선택하면 흔들릴 수 있습니다.",
        advice: "열정과 현실성을 함께 보세요.",
      },
    },
  },

  {
    id: 34,
    name: "Queen of Cups (컵 퀸)",
    englishName: "Queen of Cups",
    type: "Cups",
    number: 13,
    keywords: ["자애", "직관", "공감", "치유", "현모양처", "예술적 감각"],
    reversedKeywords: ["감정 소진", "예민함", "의존", "혼란"],
    image: "/images/Cups/Cups13_Queen.webp",

    meaning: "깊은 공감과 따뜻한 치유 에너지를 가진 카드.",
    advice: "타인뿐 아니라 자신도 돌보세요.",

    reversedMeaning:
      "타인의 감정을 너무 떠안거나 자신의 감정에 휩쓸려 중심을 잃을 수 있습니다.",
    reversedAdvice:
      "모든 문제를 책임지려 하지 말고, 내 감정의 경계를 먼저 세우세요.",

    shortMeaning: "공감과 치유의 카드",
    yesNo: "Yes",
    powerScore: 91,

    categoryInterpretations: {
      love: {
        meaning: "깊고 성숙한 사랑의 흐름.",
        advice: "상대와 내 감정을 함께 존중하세요.",
      },
      career: {
        meaning: "사람을 다루는 일에서 강점 발휘.",
        advice: "섬세함이 경쟁력입니다.",
      },
      money: {
        meaning: "상담·돌봄·감성 서비스 운 상승.",
        advice: "공감 능력을 활용하세요.",
      },
      mind: {
        meaning: "직관력이 강해지고 감정 이해도가 높습니다.",
        advice: "내면의 목소리를 들어보세요.",
      },
      relation: {
        meaning: "주변을 편안하게 만드는 존재감.",
        advice: "무리한 희생은 피하세요.",
      },
      health: {
        meaning: "정서 안정이 회복에 도움 됩니다.",
        advice: "충분한 휴식을 취하세요.",
      },
      future: {
        meaning: "따뜻한 인간관계가 큰 힘이 됩니다.",
        advice: "좋은 사람들과 함께하세요.",
      },
      choice: {
        meaning: "배려와 안정이 있는 선택이 좋습니다.",
        advice: "마음이 편안한 쪽을 고르세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "감정 기복이나 지나친 기대감으로 서운함이 커질 수 있습니다.",
        advice: "상대 마음을 추측하지 말고 솔직히 대화하세요.",
      },
      career: {
        meaning: "감정 소모가 큰 업무 환경일 수 있습니다.",
        advice: "남의 문제까지 떠안지 말고 역할을 구분하세요.",
      },
      money: {
        meaning: "감정적 소비나 타인을 위한 지출이 늘 수 있습니다.",
        advice: "배려도 좋지만 내 재정부터 지키세요.",
      },
      mind: {
        meaning: "예민함과 피로가 겹쳐 마음이 흔들릴 수 있습니다.",
        advice: "혼자 회복하는 시간을 반드시 확보하세요.",
      },
      relation: {
        meaning: "퍼주기만 하는 관계로 지칠 수 있습니다.",
        advice: "상대에게 감정적으로 지나치게 의존하거나 통제하려 할 수 있음.",
      },
      health: {
        meaning: "스트레스성 피로, 감정 소진 주의.",
        advice: "휴식과 감정 정리가 먼저입니다.",
      },
      future: {
        meaning: "좋은 흐름은 오지만 먼저 내 중심 회복이 필요합니다.",
        advice: "타인보다 자신을 돌보는 선택이 미래를 살립니다.",
      },
      choice: {
        meaning:
          "거절하지 못하는 마음이나 죄책감 때문에 나에게 해로운 선택을 할 수 있습니다.",
        advice:
          "착한 사람이 되기보다 나를 먼저 지키는 사람이 되세요. 거절도 용기입니다.",
      },
    },
  },

  {
    id: 35,
    name: "King of Cups (컵 킹)",
    englishName: "King of Cups",
    type: "Cups",
    number: 14,
    keywords: ["평정심", "성숙", "통제력", "현명함"],
    reversedKeywords: ["감정 억압", "냉담함", "기복", "조종"],
    image: "/images/Cups/Cups14_King.webp",

    meaning: "감정을 다스리며 현명하게 이끄는 카드.",
    advice: "감정과 이성의 균형을 유지하세요.",

    reversedMeaning:
      "감정을 숨기거나 반대로 감정 기복이 커져 관계와 판단이 흔들릴 수 있습니다.",
    reversedAdvice:
      "차가운 침묵이나 감정 폭발 대신, 솔직하고 안정적인 표현을 선택하세요.",

    shortMeaning: "성숙한 감정 통제의 카드",
    yesNo: "Yes",
    powerScore: 94,

    categoryInterpretations: {
      love: {
        meaning: "안정적이고 믿음직한 관계운.",
        advice: "감정 기복보다 신뢰를 보여주세요.",
      },
      career: {
        meaning: "리더십과 중재 능력이 빛납니다.",
        advice:
          "상하관계 사이에서 갈등을 해결하는 역할이기에 차분하게 판단하세요.",
      },
      money: {
        meaning: "안정적인 자산 운영 능력.",
        advice: "감정 소비를 줄이세요.",
      },
      mind: {
        meaning: "감정이 안정되고 성숙해집니다.",
        advice: "침착함을 유지하세요.",
      },
      relation: {
        meaning: "사람들이 의지하는 존재가 됩니다.",
        advice: "포용력 있게 대하세요.",
      },
      health: {
        meaning: "정신적 안정이 건강에 긍정적입니다.",
        advice: "스트레스 관리 루틴을 유지하세요.",
      },
      future: {
        meaning: "안정된 기반 위 성장합니다.",
        advice: "냉정함과 따뜻함을 함께 가지세요.",
      },
      choice: {
        meaning: "가장 안정적이고 성숙한 선택이 맞습니다.",
        advice: "감정적 충동은 피하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "무뚝뚝함이나 감정 거리감으로 오해가 생길 수 있습니다.",
        advice: "표현하지 않는 배려는 전달되지 않습니다.",
      },
      career: {
        meaning: "권위적 태도나 감정적 판단으로 갈등이 생길 수 있습니다.",
        advice: "통제보다 소통이 성과를 만듭니다.",
      },
      money: {
        meaning:
          "친분 관계를 앞세운 제안에 흔들려 재정적 손실을 볼 위험이 있습니다.",
        advice:
          "돈 문제는 감정이 섞이면 안 됩니다. 지인과의 거래일수록 냉정하게 수치를 따지세요.",
      },
      mind: {
        meaning: "감정을 눌러 담아 내면 압박이 커질 수 있습니다.",
        advice: "강한 척보다 건강하게 표현하세요.",
      },
      relation: {
        meaning: "차갑거나 계산적으로 보일 수 있습니다.",
        advice: "진심을 말과 행동으로 보여주세요.",
      },
      health: {
        meaning:
          "감정을 억눌러 생기는 스트레스성 질환이나 심리적 압박이 건강을 해칠 수 있습니다.",
        advice:
          "괜찮은 척 참기보다 감정을 분출할 수 있는 취미나 상담을 통해 내면의 압력을 낮추세요.",
      },
      future: {
        meaning: "좋은 능력은 있지만 감정 균형이 성패를 좌우합니다.",
        advice: "내면 안정부터 잡으면 흐름이 살아납니다.",
      },
      choice: {
        meaning: "억지로 강해 보이는 선택은 불리할 수 있습니다.",
        advice: "체면보다 진짜 지속 가능한 길을 고르세요.",
      },
    },
  },
];
