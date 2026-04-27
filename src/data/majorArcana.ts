import type { TarotCard } from "../types/tarot";

export const majorArcana: TarotCard[] = [
  {
    id: 0,
    name: "The Fool (광대)",
    englishName: "The Fool",
    type: "Major",
    number: 0,
    keywords: ["시작", "자유", "도전", "순수"],
    reversedKeywords: ["충동", "무책임", "준비 부족", "방향 상실", "낙관주의"],
    image: "/images/Major/00_Fool.webp",
    meaning: "새로운 시작과 자유로운 가능성을 뜻하는 카드.",
    advice: "완벽한 준비를 기다리기보다 첫걸음을 내딛으세요.",

    reversedMeaning:
      "충동적으로 움직이거나 준비 없이 시작해 시행착오를 겪을 수 있습니다.",
    reversedAdvice:
      "새 출발 자체는 좋지만, 지금은 계획과 현실 점검이 먼저입니다.",

    shortMeaning: "새로운 시작과 가능성이 열리는 카드",
    yesNo: "Yes",
    powerScore: 95,

    categoryInterpretations: {
      love: {
        meaning: "새로운 인연이나 예상치 못한 감정의 시작.",
        advice: "계산보다 솔직한 감정 표현이 중요합니다.",
      },
      career: {
        meaning: "새로운 직장, 도전, 이직운 상승.",
        advice: "익숙함보다 가능성이 큰 길을 보세요.",
      },
      money: {
        meaning: "새로운 수입 기회가 생길 수 있습니다.",
        advice: "무모한 지출만 조심하세요.",
      },
      mind: {
        meaning: "답답함에서 벗어나고 싶은 상태.",
        advice: "생각보다 행동이 필요한 시기입니다.",
      },
      relation: {
        meaning: "새로운 인간관계 확장.",
        advice: "편견 없이 다가가면 좋은 인연이 옵니다.",
      },
      health: {
        meaning: "컨디션 회복 가능성.",
        advice: "가벼운 운동과 산책이 도움 됩니다.",
      },
      future: {
        meaning: "예상 밖의 새로운 기회가 다가옵니다.",
        advice: "두려움보다 호기심을 선택하세요.",
      },
      choice: {
        meaning: "새로운 길 선택이 유리합니다.",
        advice: "안정보다 성장 가능성을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "가벼운 접근이나 성급한 감정 표현으로 흔들릴 수 있습니다.",
        advice: "설렘보다 책임감 있는 태도를 보여주세요.",
      },
      career: {
        meaning: "준비되지 않은 도전으로 실수가 생길 수 있습니다.",
        advice: "시작 전 계획과 정보 정리가 필요합니다.",
      },
      money: {
        meaning: "예상치 못한 지출(충동구매)이나 무리한 투자 위험이 있습니다.",
        advice: "당장의 욕심보다 안정성을 우선하세요.",
      },
      mind: {
        meaning: "방향을 잃고 들뜬 마음이 커질 수 있습니다.",
        advice: "우선순위를 정하고 하나씩 해결하세요.",
      },
      relation: {
        meaning: "가볍게 시작된 관계가 오래가기 어려울 수 있습니다.",
        advice: "진심과 신뢰를 먼저 쌓으세요.",
      },
      health: {
        meaning: "생활 리듬이 흐트러질 수 있습니다.",
        advice: "수면과 식사 패턴부터 안정시키세요.",
      },
      future: {
        meaning: "새 기회는 오지만 준비 부족으로 놓칠 수 있습니다.",
        advice: "기회가 오기 전 실력을 갖추세요.",
      },
      choice: {
        meaning: "성급한 선택은 후회를 남길 수 있습니다.",
        advice: "한 번 더 검토한 뒤 결정하세요.",
      },
    },
  },

  {
    id: 1,
    name: "The Magician (마법사)",
    englishName: "The Magician",
    type: "Major",
    number: 1,
    keywords: ["능력", "실현", "집중", "창조"],
    reversedKeywords: ["속임수", "허풍", "자신감 부족", "준비되지 않는 기술"],
    image: "/images/Major/01_Magician.webp",
    meaning: "능력과 자원을 활용해 현실을 만들어내는 카드.",
    advice: "이미 가진 재능을 믿고 직접 행동하세요.",

    reversedMeaning:
      "능력이 있어도 집중력이 흐트러지거나 자신을 과소평가할 수 있습니다.",
    reversedAdvice: "없는 것을 찾기보다 이미 가진 자원부터 제대로 활용하세요.",

    shortMeaning: "원하는 것을 현실로 만들 힘",
    yesNo: "Yes",
    powerScore: 97,

    categoryInterpretations: {
      love: {
        meaning:
          "매력적인 대화나 자신감 있는 태도로 상대에게 강하게 어필되는 시기.",
        advice: "주도적으로 다가가면 결과가 좋습니다.",
      },
      career: {
        meaning: "능력 인정, 성과 상승.",
        advice: "지금은 자신감 있게 밀어붙이세요.",
      },
      money: {
        meaning: "수익 창출 능력이 강해집니다.",
        advice: "아이디어를 돈으로 연결하세요.",
      },
      mind: {
        meaning: "집중력 상승.",
        advice: "흩어진 목표를 하나로 모으세요.",
      },
      relation: {
        meaning: "말과 행동으로 사람을 끌어당깁니다.",
        advice: "리더십을 보여주세요.",
      },
      health: {
        meaning: "에너지 강함.",
        advice: "활동량을 늘리면 더 좋아집니다.",
      },
      future: {
        meaning: "능력으로 미래를 바꾸게 됩니다.",
        advice: "기회를 기다리지 말고 만드세요.",
      },
      choice: {
        meaning: "직접 움직이는 선택이 정답입니다.",
        advice: "망설임보다 실행이 중요합니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "말과 행동이 엇갈려 오해가 생길 수 있습니다.",
        advice: "과한 기술보다 진정성을 보여주세요.",
      },
      career: {
        meaning: "능력은 있으나 성과로 연결되지 않을 수 있습니다.",
        advice: "집중할 목표를 하나로 좁히세요.",
      },
      money: {
        meaning: "수익 기회를 놓치거나 판단 착오가 생길 수 있습니다.",
        advice: "과장된 제안은 신중히 검토하세요.",
      },
      mind: {
        meaning: "자신감 저하와 산만함이 커질 수 있습니다.",
        advice: "작은 성공 경험을 다시 쌓으세요.",
      },
      relation: {
        meaning: "말솜씨만 앞서 신뢰가 약해질 수 있습니다.",
        advice: "행동으로 보여주는 것이 중요합니다.",
      },
      health: {
        meaning: "에너지 분산으로 피로감이 올 수 있습니다.",
        advice: "과로보다 휴식 균형을 맞추세요.",
      },
      future: {
        meaning: "기회는 있으나 활용하지 못할 수 있습니다.",
        advice: "준비된 능력을 실제 행동으로 옮기세요.",
      },
      choice: {
        meaning: "겉보기 좋은 선택이 실속 없을 수 있습니다.",
        advice: "실행 가능성을 기준으로 판단하세요.",
      },
    },
  },

  {
    id: 2,
    name: "The High Priestess (여사제)",
    englishName: "The High Priestess",
    type: "Major",
    number: 2,
    keywords: ["직감", "비밀", "내면", "지혜"],
    reversedKeywords: ["혼란", "직감 무시", "숨김", "불안"],
    image: "/images/Major/02_High_Priestess.webp",
    meaning: "직감과 숨겨진 진실을 읽는 카드.",
    advice: "서두르지 말고 조용히 상황을 관찰하세요.",

    reversedMeaning:
      "직감을 무시하거나 불안에 휘둘려 판단력이 흐려질 수 있습니다.",
    reversedAdvice:
      "외부 소음보다 내 마음의 신호를 다시 듣는 시간이 필요합니다.",

    shortMeaning: "보이지 않는 진실을 읽는 카드",
    yesNo: "Maybe",
    powerScore: 88,

    categoryInterpretations: {
      love: {
        meaning: "서로를 탐색하는 단계, 정신적인 교감이 강한 시기.",
        advice: "조급한 고백보다는 신비로운 매력을 유지하며 천천히 다가가세요.",
      },
      career: {
        meaning: "겉보다 내부 정보가 중요합니다.",
        advice: "조용히 실력을 쌓으세요.",
      },
      money: {
        meaning: "아직 드러나지 않은 기회.",
        advice: "신중한 판단이 필요합니다.",
      },
      mind: {
        meaning: "예민하고 직감이 강한 상태.",
        advice: "혼자만의 시간이 필요합니다.",
      },
      relation: {
        meaning: "말하지 않은 감정이 많습니다.",
        advice: "침묵 속 의미를 읽어보세요.",
      },
      health: {
        meaning: "스트레스성 피로 가능성(여성질환, 호르몬 등).",
        advice: "휴식과 수면 관리가 중요합니다.",
      },
      future: {
        meaning: "시간이 지나며 진실이 드러납니다.",
        advice: "조급함을 버리면 길이 보입니다.",
      },
      choice: {
        meaning: "논리보다 직감이 맞습니다.",
        advice: "첫 느낌을 무시하지 마세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "속마음을 숨기며 거리감이 생길 수 있습니다.",
        advice: "말하지 않으면 오해가 커집니다.",
      },
      career: {
        meaning: "정보 부족이나 내부 혼선이 있을 수 있습니다.",
        advice: "확인되지 않은 소문은 믿지 마세요.",
      },
      money: {
        meaning: "애매한 투자 판단에 흔들릴 수 있습니다.",
        advice: "직감만 믿지 말고 자료도 확인하세요.",
      },
      mind: {
        meaning: "예민함과 불안이 커질 수 있습니다.",
        advice: "혼자 끌어안지 말고 정리해서 표현하세요.",
      },
      relation: {
        meaning: "서로 속내를 몰라 답답함이 생깁니다.",
        advice: "솔직한 대화가 필요합니다.",
      },
      health: {
        meaning: "스트레스 누적으로 컨디션 저하 가능성.",
        advice: "휴식 루틴을 강제로라도 만드세요.",
      },
      future: {
        meaning: "진실이 늦게 드러나며 지연될 수 있습니다.",
        advice: "조급한 결정은 미루는 편이 좋습니다.",
      },
      choice: {
        meaning: "감이 흐려져 선택이 어렵습니다.",
        advice: "시간을 두고 다시 판단하세요.",
      },
    },
  },
  {
    id: 3,
    name: "The Empress (여황제)",
    englishName: "The Empress",
    type: "Major",
    number: 3,
    keywords: ["풍요", "매력", "성장", "결실", "창의성"],
    reversedKeywords: ["의존", "과보호", "정체", "과소비"],
    image: "/images/Major/03_Empress.webp",
    meaning: "풍요와 성장을 상징하는 카드.",
    advice: "자신의 가치를 믿고 충분히 누리세요.",

    reversedMeaning:
      "감정적 의존이나 정체된 흐름으로 풍요를 제대로 누리지 못할 수 있습니다.",
    reversedAdvice: "남을 채우기 전에 자신의 에너지와 균형부터 돌보세요.",

    shortMeaning: "풍요와 결과를 만들어내는 카드",
    yesNo: "Yes",
    powerScore: 94,

    categoryInterpretations: {
      love: {
        meaning: "애정운 상승, 사랑받는 시기.",
        advice: "있는 그대로의 매력을 보여주세요.",
      },
      career: {
        meaning: "안정적 성장과 인정.",
        advice: "꾸준함이 큰 성과가 됩니다.",
      },
      money: {
        meaning: "재물운 상승.",
        advice: "가치 있는 곳에 투자하세요.",
      },
      mind: {
        meaning: "심리적 안정감.",
        advice: "자신을 충분히 돌보세요.",
      },
      relation: {
        meaning: "주변의 호감과 도움 증가.",
        advice: "따뜻하게 대하면 더 커집니다.",
      },
      health: {
        meaning: "회복력 양호.",
        advice: "몸 관리 루틴을 유지하세요.",
      },
      future: {
        meaning: "노력한 만큼 풍요로운 결과가 옵니다.",
        advice: "지금의 성실함을 이어가세요.",
      },
      choice: {
        meaning: "안정적이고 지속 가능한 선택이 좋습니다.",
        advice: "즉흥성보다 현실성을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "과한 기대나 의존으로 관계 균형이 흔들릴 수 있습니다.",
        advice: "상대보다 자신의 만족감도 중요하게 보세요.",
      },
      career: {
        meaning: "성장이 정체되거나 의욕이 떨어질 수 있습니다.",
        advice: "새로운 자극과 목표 설정이 필요합니다.",
      },
      money: {
        meaning: "감정 소비나 과소비 가능성이 있습니다.",
        advice: "필요와 욕구를 구분해 지출하세요.",
      },
      mind: {
        meaning: "자존감 저하나 공허함이 생길 수 있습니다.",
        advice: "외부 인정보다 내 만족을 채우세요.",
      },
      relation: {
        meaning: "돌봄이 부담으로 느껴질 수 있습니다.",
        advice: "배려와 간섭의 경계를 지키세요.",
      },
      health: {
        meaning: "생활 루틴이 무너지며 컨디션 저하 가능성.",
        advice: "수면과 식습관부터 바로잡으세요.",
      },
      future: {
        meaning: "원하던 결과가 늦어질 수 있습니다.",
        advice: "기초를 다시 다지면 흐름이 살아납니다.",
      },
      choice: {
        meaning: "겉보기 편한 선택이 장기적으로 불리할 수 있습니다.",
        advice: "지속 가능성을 기준으로 판단하세요.",
      },
    },
  },

  {
    id: 4,
    name: "The Emperor (황제)",
    englishName: "The Emperor",
    type: "Major",
    number: 4,
    keywords: ["권위", "통제", "리더십", "안정"],
    reversedKeywords: ["독단", "통제 과함", "경직", "무책임", "허세"],
    image: "/images/Major/04_Emperor.webp",
    meaning: "질서와 책임감으로 성취를 이루는 카드.",
    advice: "원칙을 세우고 흔들림 없이 추진하세요.",

    reversedMeaning:
      "지나친 통제 욕구나 경직된 태도로 관계와 흐름이 막힐 수 있습니다.",
    reversedAdvice: "강함만이 답은 아닙니다. 유연함과 협력이 필요합니다.",

    shortMeaning: "질서와 성취를 만드는 카드",
    yesNo: "Yes",
    powerScore: 96,

    categoryInterpretations: {
      love: {
        meaning: "책임감 있는 관계로 발전.",
        advice: "가벼움보다 진중함을 보여주세요.",
      },
      career: {
        meaning: "승진, 리더 역할 가능성.",
        advice: "원칙 있게 행동하세요.",
      },
      money: {
        meaning: "안정적 자산 형성.",
        advice: "계획적 관리가 중요합니다.",
      },
      mind: {
        meaning: "강한 통제 욕구.",
        advice: "완벽주의는 조금 내려놓으세요.",
      },
      relation: {
        meaning: "영향력 있는 위치.",
        advice: "말보다는 행동(책임감)으로 신뢰를 얻으세요.",
      },
      health: {
        meaning: "기초 체력 안정.",
        advice: "규칙적인 생활이 핵심입니다.",
      },
      future: {
        meaning: "확실한 기반 위에 성장합니다.",
        advice: "지금 질서를 세우세요.",
      },
      choice: {
        meaning: "안정적이고 검증된 선택이 좋습니다.",
        advice: "감정보다 현실 판단을 우선하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "고집과 통제로 관계 긴장이 커질 수 있습니다.",
        advice: "이기려 하지 말고 이해하려 하세요.",
      },
      career: {
        meaning: "권위 충돌 및 무능력한 리더십으로 조직 스트레스 가능성.",
        advice: "독단보다 협업 능력을 보여주세요.",
      },
      money: {
        meaning: "재정 운영이 경직되거나 불안정할 수 있습니다.",
        advice: "지나친 보수성도 기회를 놓칩니다.",
      },
      mind: {
        meaning: "압박감과 완벽주의 스트레스가 커집니다.",
        advice: "모든 것을 통제하려 하지 마세요.",
      },
      relation: {
        meaning: "강압적 태도나 고집으로 주변 사람들이 떠나갈 수 있습니다.",
        advice: "내 기준을 강요하기보다 상대의 입장도 경청해 보세요.",
      },
      health: {
        meaning: "긴장 누적으로 몸이 굳을 수 있습니다.",
        advice: "스트레칭과 휴식이 필요합니다.",
      },
      future: {
        meaning: "기반은 있으나 방식이 막혀 지연됩니다.",
        advice: "틀을 바꾸면 다시 전진합니다.",
      },
      choice: {
        meaning: "너무 안전한 선택이 오히려 답답함을 줍니다.",
        advice: "안정과 성장의 균형을 보세요.",
      },
    },
  },

  {
    id: 5,
    name: "The Hierophant (교황)",
    englishName: "The Hierophant",
    type: "Major",
    number: 5,
    keywords: ["전통", "배움", "조언", "신뢰"],
    reversedKeywords: ["고정관념", "반항", "형식적", "답답함"],
    image: "/images/Major/05_Hierophant.webp",
    meaning: "배움과 전통, 올바른 길을 뜻하는 카드.",
    advice: "경험자의 조언을 받아들이면 도움이 됩니다.",

    reversedMeaning:
      "틀에 갇힌 사고방식이나 형식적인 관계로 답답함을 느낄 수 있습니다.",
    reversedAdvice: "정답만 찾지 말고 나에게 맞는 방식을 새롭게 고민하세요.",

    shortMeaning: "배움과 올바른 길을 뜻하는 카드",
    yesNo: "Yes",
    powerScore: 87,

    categoryInterpretations: {
      love: {
        meaning:
          "신뢰를 바탕으로 한 진지한 만남. 주변의 도움이나 소개운이 있습니다.",
        advice: "예의를 갖추고 천천히 서로의 가치관을 확인하세요.",
      },
      career: {
        meaning: "멘토, 교육, 조직운 상승.",
        advice: "경험자 조언을 적극 활용하세요.",
      },
      money: {
        meaning: "안전한 재정 흐름.",
        advice: "검증된 방식으로 가세요.",
      },
      mind: {
        meaning: "기준과 가치관 정립.",
        advice: "흔들릴 때 기본으로 돌아가세요.",
      },
      relation: {
        meaning: "믿을 수 있는 사람 등장.",
        advice: "진심 어린 관계를 유지하세요.",
      },
      health: {
        meaning: "생활 습관 개선 필요.",
        advice: "기본 건강 루틴을 지키세요.",
      },
      future: {
        meaning: "배움이 미래 자산이 됩니다.",
        advice: "지금 공부가 큰 힘이 됩니다.",
      },
      choice: {
        meaning: "정석적인 길이 유리합니다.",
        advice: "무리한 지름길은 피하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "형식적인 관계나 감정 없는 반복이 될 수 있습니다.",
        advice: "관계의 본질을 다시 대화해보세요.",
      },
      career: {
        meaning: "조직 규칙이나 융통성 부족으로 답답함이 큽니다.",
        advice: "기존 방식 개선안을 제안해보세요.",
      },
      money: {
        meaning: "너무 보수적 판단으로 기회를 놓칠 수 있습니다.",
        advice: "안전함 속에서도 변화는 필요합니다.",
      },
      mind: {
        meaning: "고정관념에 갇혀 시야가 좁아질 수 있습니다.",
        advice: "다른 관점도 받아들여 보세요.",
      },
      relation: {
        meaning: "겉만 예의 있고 속은 멀어질 수 있습니다.",
        advice: "진짜 마음을 표현하세요.",
      },
      health: {
        meaning: "습관은 있으나 효과 없는 루틴일 수 있습니다.",
        advice: "현재 몸 상태에 맞게 조정하세요.",
      },
      future: {
        meaning: "기존 방식만 고수하면 발전이 느릴 수 있습니다.",
        advice: "맹목적인 믿음을 경계하세요",
      },
      choice: {
        meaning: "남들이 맞다는 길이 내 답은 아닐 수 있습니다.",
        advice: "기준보다 적성을 먼저 보세요.",
      },
    },
  },
  {
    id: 6,
    name: "The Lovers (연인)",
    englishName: "The Lovers",
    type: "Major",
    number: 6,
    keywords: ["사랑", "선택", "조화", "연결"],
    reversedKeywords: ["갈등", "불일치", "유혹", "결정 장애", "우유부단"],
    image: "/images/Major/06_Lovers.webp",
    meaning: "관계와 중요한 선택의 순간을 뜻하는 카드.",
    advice: "타협보다 진심이 향하는 방향을 선택하세요.",

    reversedMeaning:
      "관계의 균형이 흔들리거나 중요한 선택 앞에서 갈등이 커질 수 있습니다.",
    reversedAdvice: "겉조건보다 진짜 마음과 가치관이 맞는지를 먼저 보세요.",

    shortMeaning: "중요한 선택과 관계의 카드",
    yesNo: "Yes",
    powerScore: 93,

    categoryInterpretations: {
      love: {
        meaning: "강한 인연, 연애운 상승.",
        advice: "진심으로 선택하세요.",
      },
      career: {
        meaning: "협업이 성과를 냅니다.",
        advice: "혼자보다 함께 가세요.",
      },
      money: {
        meaning:
          "협력을 통한 수익 발생과 동시에, 감정에 치우친 즉흥적 소비가 공존하는 시기입니다.",
        advice:
          "공동 투자나 협업은 길하나, 기분에 휩쓸린 지출은 자제하고 계획적인 예산 집행이 필요합니다.",
      },
      mind: {
        meaning: "갈등과 선택 고민.",
        advice: "마음이 향하는 쪽을 보세요.",
      },
      relation: {
        meaning: "좋은 인맥과 연결.",
        advice: "소통을 열어두세요.",
      },
      health: {
        meaning: "감정 상태가 건강에 영향.",
        advice: "스트레스 관리가 중요합니다.",
      },
      future: {
        meaning: "중요한 사람과 함께 길이 열립니다.",
        advice: "관계를 소중히 하세요.",
      },
      choice: {
        meaning: "둘 중 하나를 결정해야 합니다.",
        advice: "타협보다 진짜 원하는 쪽을 고르세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "오해, 거리감, 삼각관계 같은 혼선이 생길 수 있습니다.",
        advice: "감정 회피보다 솔직한 대화가 필요합니다.",
      },
      career: {
        meaning: "협업 불화나 파트너 문제 가능성이 있습니다.",
        advice: "역할 분담과 소통을 명확히 하세요.",
      },
      money: {
        meaning: "공동 자금 문제나 이해관계 충돌 가능성.",
        advice: "계약과 분배 기준을 분명히 하세요.",
      },
      mind: {
        meaning: "마음이 흔들려 결정을 못 내릴 수 있습니다.",
        advice: "남의 시선보다 내 기준을 세우세요.",
      },
      relation: {
        meaning: "가까운 사람과 의견 충돌이 생길 수 있습니다.",
        advice: "맞고 틀림보다 이해를 우선하세요.",
      },
      health: {
        meaning: "감정 스트레스가 컨디션에 영향을 줄 수 있습니다.",
        advice: "관계 스트레스를 오래 끌지 마세요.",
      },
      future: {
        meaning: "중요한 관계나 선택이 지연될 수 있습니다.",
        advice: "억지 결정 말고 정리 후 선택하세요.",
      },
      choice: {
        meaning:
          "선택의 기로에서 우유부단함으로 인해 최적의 타이밍을 놓치거나 잘못된 판단을 내릴 수 있습니다.",
        advice:
          "완벽한 선택을 기다리다 기회를 날리지 마세요. 결정을 미루는 것 자체가 현재 당신에게 가장 큰 리스크입니다.",
      },
    },
  },

  {
    id: 7,
    name: "The Chariot (전차)",
    englishName: "The Chariot",
    type: "Major",
    number: 7,
    keywords: ["승리", "돌파", "의지", "전진"],
    reversedKeywords: ["폭주", "정체", "방향 상실", "통제 실패"],
    image: "/images/Major/07_Chariot.webp",
    meaning: "강한 의지와 추진력으로 승리하는 카드.",
    advice: "망설이지 말고 지금 전진하세요.",

    reversedMeaning:
      "의욕은 강하지만 방향이 흔들리거나 무리한 추진으로 충돌이 생길 수 있습니다.",
    reversedAdvice: "속도보다 방향이 중요합니다. 통제력을 먼저 회복하세요.",

    shortMeaning: "강한 추진력으로 승리하는 카드",
    yesNo: "Yes",
    powerScore: 98,

    categoryInterpretations: {
      love: {
        meaning: "관계가 빠르게 진전됩니다.",
        advice: "주도적으로 표현하세요.",
      },
      career: {
        meaning: "성과, 합격, 경쟁 승리.",
        advice: "지금은 밀어붙일 타이밍입니다.",
      },
      money: {
        meaning: "공격적 수익 상승 가능.",
        advice: "과욕만 조심하세요.",
      },
      mind: {
        meaning: "의욕 충만 상태.",
        advice: "집중력을 한 방향에 쓰세요.",
      },
      relation: {
        meaning: "강한 존재감으로 주목받습니다.",
        advice: "독주보다 협력도 챙기세요.",
      },
      health: {
        meaning: "체력 상승.",
        advice: "운동 시작하기 좋습니다.",
      },
      future: {
        meaning: "정체를 뚫고 빠르게 전진합니다.",
        advice: "지금 행동하면 결과가 납니다.",
      },
      choice: {
        meaning: "강하게 추진하는 선택이 맞습니다.",
        advice: "망설임을 끝내고 실행하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "감정만 앞서며 충돌하거나 속도 차이가 날 수 있습니다.",
        advice: "밀어붙이기보다 상대 페이스를 보세요.",
      },
      career: {
        meaning: "성과 압박이나 방향 착오로 지칠 수 있습니다.",
        advice: "우선순위를 재정비하세요.",
      },
      money: {
        meaning: "무리한 투자나 공격적 판단 위험이 있습니다.",
        advice: "속도전보다 안정 운영이 중요합니다.",
      },
      mind: {
        meaning: "조급함과 분노가 커질 수 있습니다.",
        advice: "잠시 멈추고 감정을 정리하세요.",
      },
      relation: {
        meaning: "독주 이미지로 주변과 거리감이 생길 수 있습니다.",
        advice: "상대를 이기려 하기보다 같은 목표를 보고 있는지 확인하세요.",
      },
      health: {
        meaning: "과로로 인한 면역력 저하나 이동 중 갑작스러운 부상 주의.",
        advice: "속도를 줄이고 안전과 휴식을 최우선으로 하세요.",
      },
      future: {
        meaning: "전진은 하나 예상보다 늦어질 수 있습니다.",
        advice: "방향 수정 후 다시 가속하세요.",
      },
      choice: {
        meaning: "성급한 추진은 실수를 만들 수 있습니다.",
        advice: "확신이 들 때 움직이세요.",
      },
    },
  },

  {
    id: 8,
    name: "Strength (힘)",
    englishName: "Strength",
    type: "Major",
    number: 8,
    keywords: ["용기", "인내", "부드러운 통제", "불굴의 의지", "포용력"],
    reversedKeywords: ["자신감 부족", "감정 폭발", "지침", "불안", "열정 고갈"],
    image: "/images/Major/08_Strength.webp",
    meaning: "내면의 힘과 인내로 상황을 극복하는 카드.",
    advice: "강압보다 부드러움과 꾸준함으로 해결하세요.",

    reversedMeaning:
      "내면 에너지가 약해지거나 감정을 다루기 어려워 흔들릴 수 있습니다.",
    reversedAdvice: "강한 척 버티기보다 회복과 자기 신뢰부터 다시 세우세요.",

    shortMeaning: "내면의 힘으로 승리하는 카드",
    yesNo: "Yes",
    powerScore: 92,

    categoryInterpretations: {
      love: {
        meaning: "인내와 포용으로 관계를 주도하는 시기.",
        advice:
          "감정적으로 맞서기보다 부드럽게 설득하는 것이 훨씬 효과적입니다.",
      },
      career: {
        meaning: "까다로운 업무도 결국 해결합니다.",
        advice: "지치지 말고 끝까지 밀고 가세요.",
      },
      money: {
        meaning: "큰 변화보다 안정적 흐름입니다.",
        advice: "충동 소비를 절제하세요.",
      },
      mind: {
        meaning: "감정을 다스리는 성장기입니다.",
        advice: "스스로를 믿고 평정심을 유지하세요.",
      },
      relation: {
        meaning: "포용력으로 관계가 좋아집니다.",
        advice: "강한 말보다 따뜻한 태도가 힘입니다.",
      },
      health: {
        meaning: "회복력과 정신력이 강합니다.",
        advice: "운동과 명상이 잘 맞습니다.",
      },
      future: {
        meaning: "버틴 만큼 좋은 결과가 옵니다.",
        advice: "조급함 없이 지속하세요.",
      },
      choice: {
        meaning: "무리한 돌진보다 꾸준한 선택이 좋습니다.",
        advice: "강함은 지속성에서 나옵니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "예민함과 자존감 문제로 관계가 흔들릴 수 있습니다.",
        advice: "상대 반응보다 내 감정 안정이 우선입니다.",
      },
      career: {
        meaning: "지쳐서 실력이 있어도 힘을 못 낼 수 있습니다.",
        advice: "무리한 버티기보다 페이스 조절이 필요합니다.",
      },
      money: {
        meaning: "감정 소비나 스트레스 지출 가능성.",
        advice: "소비 전 감정 상태를 점검하세요.",
      },
      mind: {
        meaning: "불안, 자신감 저하, 감정 기복이 커질 수 있습니다.",
        advice: "작은 성공 경험으로 다시 회복하세요.",
      },
      relation: {
        meaning: "참기만 하다 폭발할 수 있습니다.",
        advice: "쌓기 전에 부드럽게 표현하세요.",
      },
      health: {
        meaning: "체력 저하와 피로 누적 신호입니다.",
        advice: "휴식과 영양 보충이 필요합니다.",
      },
      future: {
        meaning: "결과는 오지만 시간이 더 필요합니다.",
        advice: "속도보다 회복력을 믿으세요.",
      },
      choice: {
        meaning: "억지로 버티는 선택은 비효율적일 수 있습니다.",
        advice: "지속 가능한 방향을 고르세요.",
      },
    },
  },

  {
    id: 9,
    name: "The Hermit (은둔자)",
    englishName: "The Hermit",
    type: "Major",
    number: 9,
    keywords: ["성찰", "고독", "탐구", "내면의 인도", "전문성"],
    reversedKeywords: ["고립", "외로움", "폐쇄", "길 잃음"],
    image: "/images/Major/09_Hermit.webp",
    meaning: "혼자만의 성찰을 통해 답을 찾는 카드.",
    advice: "잠시 멈추고 내면의 목소리를 들으세요.",

    reversedMeaning:
      "혼자 버티는 시간이 길어지며 외로움과 방향 상실감이 커질 수 있습니다.",
    reversedAdvice:
      "모든 답을 혼자 찾을 필요는 없습니다. 손을 내밀면 길이 다시 보입니다.",

    shortMeaning: "고요함 속에서 답을 찾는 카드",
    yesNo: "Maybe",
    powerScore: 85,

    categoryInterpretations: {
      love: {
        meaning: "거리감이 생기거나 혼자 정리가 필요한 시기.",
        advice: "억지 관계보다 자기 이해가 먼저입니다.",
      },
      career: {
        meaning: "깊이 있는 연구나 전문 지식을 쌓기에 최적의 시기입니다.",
        advice:
          "드러내기보다 실력을 다지고, 필요하다면 멘토의 지혜를 빌리세요.",
      },
      money: {
        meaning: "지출 절제 흐름입니다.",
        advice: "투자보다 관리가 우선입니다.",
      },
      mind: {
        meaning: "삶의 의미를 고민하는 시기입니다.",
        advice: "혼자만의 시간을 확보하세요.",
      },
      relation: {
        meaning: "사람과 거리 두고 싶어질 수 있습니다.",
        advice: "소수의 진짜 관계에 집중하세요.",
      },
      health: {
        meaning: "피로 누적 주의.",
        advice: "휴식과 산책이 도움 됩니다.",
      },
      future: {
        meaning: "늦어 보여도 올바른 방향으로 갑니다.",
        advice: "속도보다 깊이를 택하세요.",
      },
      choice: {
        meaning: "당장 움직이기보다 숙고가 필요합니다.",
        advice: "혼자 생각할 시간을 가지세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "서로 마음을 닫아 거리감이 깊어질 수 있습니다.",
        advice: "침묵보다 작은 진심 한마디가 관계를 살립니다.",
      },
      career: {
        meaning: "혼자 해결하려다 기회를 놓칠 수 있습니다.",
        advice: "도움 요청은 약함이 아니라 전략입니다.",
      },
      money: {
        meaning: "지나친 불안으로 움츠러들 수 있습니다.",
        advice: "지키는 것도 중요하지만 흐름도 필요합니다.",
      },
      mind: {
        meaning: "외로움과 공허함이 커질 수 있습니다.",
        advice: "혼자 견디지 말고 감정을 밖으로 꺼내세요.",
      },
      relation: {
        meaning: "사람을 피하다 소중한 인연도 멀어질 수 있습니다.",
        advice: "한 사람과의 진솔한 대화부터 시작하세요.",
      },
      health: {
        meaning: "무기력과 생활 단절로 컨디션이 떨어질 수 있습니다.",
        advice: "햇빛, 산책, 규칙적인 수면이 회복의 시작입니다.",
      },
      future: {
        meaning: "답을 찾지 못한 채 시간이 지날 수 있습니다.",
        advice: "움직이면서 찾는 답도 있다는 걸 기억하세요.",
      },
      choice: {
        meaning: "너무 오래 고민해 타이밍을 놓칠 수 있습니다.",
        advice: "완벽한 답보다 지금 가능한 답을 고르세요.",
      },
    },
  },

  {
    id: 10,
    name: "Wheel of Fortune (운명의 수레바퀴)",
    englishName: "Wheel of Fortune",
    type: "Major",
    number: 10,
    keywords: ["변화", "운명", "기회", "터닝포인트"],
    reversedKeywords: [
      "지연",
      "반복",
      "악순환",
      "예상 밖 변수",
      "부적절한 타이밍",
    ],
    image: "/images/Major/10_Wheel_of_Fortune.webp",
    meaning: "피할 수 없는 변화와 기회의 흐름을 뜻하는 카드.",
    advice: "흐름이 바뀔 때는 유연하게 올라타세요.",

    reversedMeaning:
      "흐름이 막힌 듯 느껴지거나 같은 문제가 반복되어 답답함이 커질 수 있습니다.",
    reversedAdvice:
      "운이 떠난 것이 아닙니다. 지금은 방향을 재조정하는 시간입니다.",

    shortMeaning: "운명의 전환점이 오는 카드",
    yesNo: "Yes",
    powerScore: 94,

    categoryInterpretations: {
      love: {
        meaning: "운명적인 인연이나 관계 급진전.",
        advice: "자연스러운 흐름을 막지 마세요.",
      },
      career: {
        meaning: "이직·이동·기회가 찾아옵니다.",
        advice: "변화를 두려워하지 마세요.",
      },
      money: {
        meaning: "재정 흐름 변화 가능성.",
        advice: "기회는 빠르게 잡으세요.",
      },
      mind: {
        meaning: "인생 굴곡 속 깨달음.",
        advice: "좋은 때와 나쁜 때는 지나갑니다.",
      },
      relation: {
        meaning: "옛 인연 재회 가능성 또는 우연한 만남.",
        advice: "모든 인연엔 타이밍이 있습니다.",
      },
      health: {
        meaning: "컨디션 기복 가능성.",
        advice: "생활 리듬을 일정하게 유지하세요.",
      },
      future: {
        meaning: "예상 못한 좋은 변화가 옵니다.",
        advice: "새 흐름에 올라타세요.",
      },
      choice: {
        meaning: "변화를 택하는 쪽이 유리합니다.",
        advice: "정체보다 전환을 선택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "타이밍이 어긋나며 관계가 엇갈릴 수 있습니다.",
        advice: "억지로 맞추기보다 서로의 속도를 이해하세요.",
      },
      career: {
        meaning: "기회 지연이나 계획 변경 가능성이 있습니다.",
        advice: "플랜B를 준비한 사람이 결국 웃습니다.",
      },
      money: {
        meaning:
          "자금 흐름이 정체되거나 예상치 못한 변수로 지출이 생길 수 있습니다.",
        advice: "무리한 투자는 금물이며, 현금을 확보하여 유동성에 대비하세요.",
      },
      mind: {
        meaning: "왜 나만 제자리인가 싶은 답답함이 커질 수 있습니다.",
        advice: "멈춘 것 같아도 내부에선 변화가 진행 중입니다.",
      },
      relation: {
        meaning: "반복되는 갈등 패턴이 나타날 수 있습니다.",
        advice: "익숙한 실수를 끊는 용기가 필요합니다.",
      },
      health: {
        meaning: "컨디션 기복이 커질 수 있습니다.",
        advice: "루틴을 지키는 것이 최고의 처방입니다.",
      },
      future: {
        meaning: "전환점은 오지만 예상보다 늦어질 수 있습니다.",
        advice: "지금은 기다림 속 준비가 미래를 바꿉니다.",
      },
      choice: {
        meaning: "무작정 변화만 좇으면 흔들릴 수 있습니다.",
        advice: "새로움보다 나에게 맞는 변화를 고르세요.",
      },
    },
  },

  {
    id: 11,
    name: "Justice (정의)",
    englishName: "Justice",
    type: "Major",
    number: 11,
    keywords: ["균형", "공정", "진실", "결과"],
    reversedKeywords: ["불공정", "왜곡", "책임 회피", "불균형"],
    image: "/images/Major/11_Justice.webp",
    meaning: "공정한 판단과 균형 잡힌 결과를 뜻하는 카드.",
    advice: "감정보다 사실과 원칙을 기준으로 판단하세요.",

    reversedMeaning:
      "불균형한 판단이나 억울함, 책임 회피로 문제가 길어질 수 있습니다.",
    reversedAdvice:
      "세상이 불공평해 보여도 결국 정리는 됩니다. 먼저 내 기준부터 바로 세우세요.",

    shortMeaning: "정확한 판단과 결과의 카드",
    yesNo: "Yes",
    powerScore: 90,

    categoryInterpretations: {
      love: {
        meaning: "감정보다 신뢰와 조건, 균형이 중요한 관계입니다.",
        advice: "서로에게 요구하는 바를 명확히 하고 공정한 태도를 유지하세요.",
      },
      career: {
        meaning: "노력한 만큼 평가받습니다.",
        advice: "정직하고 정확하게 행동하세요.",
      },
      money: {
        meaning: "계약·정산·금전 문제 해결운.",
        advice: "문서는 꼼꼼히 확인하세요.",
      },
      mind: {
        meaning: "이성적 판단력이 높아집니다.",
        advice: "감정 치우침을 경계하세요.",
      },
      relation: {
        meaning: "주고받음이 공평한 관계가 됩니다.",
        advice: "약속을 지키는 태도가 중요합니다.",
      },
      health: {
        meaning: "몸의 균형 관리가 중요합니다.",
        advice: "생활 리듬을 일정하게 유지하세요.",
      },
      future: {
        meaning: "과거 행동의 결과가 돌아옵니다.",
        advice: "지금 바르게 행동하세요.",
      },
      choice: {
        meaning: "공정하고 현실적인 선택이 유리합니다.",
        advice: "감정보다 데이터로 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "한쪽만 노력하며 서운함이 쌓일 수 있습니다.",
        advice: "누가 더 했는지보다 서로 원하는 것을 말하세요.",
      },
      career: {
        meaning: "평가 불만, 기준 혼선, 억울함이 생길 수 있습니다.",
        advice: "감정보다 기록과 실적으로 대응하세요.",
      },
      money: {
        meaning: "계산 착오나 계약 문제 가능성이 있습니다.",
        advice: "숫자와 문서를 다시 확인하세요.",
      },
      mind: {
        meaning: "억울함과 분노로 시야가 좁아질 수 있습니다.",
        advice: "감정과 사실을 분리하면 답이 보입니다.",
      },
      relation: {
        meaning: "불공평하다는 감정이 갈등을 만듭니다.",
        advice: "기대치와 역할을 명확히 정리하세요.",
      },
      health: {
        meaning: "생활 밸런스 붕괴로 피로가 쌓일 수 있습니다.",
        advice: "수면·식사·운동 균형을 되찾으세요.",
      },
      future: {
        meaning: "결과가 늦어지거나 재조정될 수 있습니다.",
        advice: "지금 바로잡는 선택이 미래를 편하게 만듭니다.",
      },
      choice: {
        meaning: "감정 치우친 선택은 후회를 남길 수 있습니다.",
        advice: "냉정하게 비교하고 결정하세요.",
      },
    },
  },

  {
    id: 12,
    name: "The Hanged Man (매달린 사람)",
    englishName: "The Hanged Man",
    type: "Major",
    number: 12,
    keywords: ["희생", "멈춤", "새로운 관점", "인내"],
    reversedKeywords: ["지연", "정체", "헛된 희생", "고집"],
    image: "/images/Major/12_Hanged_Man.webp",
    meaning: "잠시 멈춤 속에서 새로운 시각을 얻는 카드.",
    advice: "억지로 밀지 말고 흐름을 기다리세요.",

    reversedMeaning:
      "멈춤이 길어져 답답함이 커지거나 의미 없는 희생을 반복할 수 있습니다.",
    reversedAdvice:
      "참는 것이 미덕은 아닙니다. 바꿔야 할 때는 움직여야 합니다.",

    shortMeaning: "멈춤 속 깨달음의 카드",
    yesNo: "Maybe",
    powerScore: 82,

    categoryInterpretations: {
      love: {
        meaning: "관계가 정체되거나 기다림이 필요합니다.",
        advice: "자신의 마음을 먼저 돌보며 기다리세요.",
      },
      career: {
        meaning: "진행이 느리지만 준비 기간입니다.",
        advice: "지금은 방향 점검이 중요합니다.",
      },
      money: {
        meaning: "돈이 묶이거나 지연될 수 있습니다.",
        advice: "무리한 투자는 피하세요.",
      },
      mind: {
        meaning: "생각이 많고 답답할 수 있습니다.",
        advice: "관점을 바꾸면 해답이 보입니다.",
      },
      relation: {
        meaning: "오해를 참고 넘겨야 할 수 있습니다.",
        advice: "즉시 반응하지 마세요.",
      },
      health: {
        meaning:
          "활동량 저하로 인한 무기력감이나 혈액순환 문제가 생길 수 있습니다.",
        advice: "거꾸로 서기나 가벼운 스트레칭으로 몸의 순환을 도와주세요.",
      },
      future: {
        meaning: "늦어 보여도 필요한 과정입니다.",
        advice: "멈춤을 실패로 보지 마세요.",
      },
      choice: {
        meaning: "지금 결정은 보류가 낫습니다.",
        advice: "조금 더 지켜보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "한쪽만 참고 버티는 관계가 될 수 있습니다.",
        advice: "희생만 하는 사랑은 건강하지 않습니다.",
      },
      career: {
        meaning: "일이 막히고 제자리걸음처럼 느껴질 수 있습니다.",
        advice: "새 방식이나 새 방향 검토가 필요합니다.",
      },
      money: {
        meaning: "지연된 돈 문제나 비효율이 생길 수 있습니다.",
        advice: "묶인 자금 구조를 다시 점검하세요.",
      },
      mind: {
        meaning: "답답함과 무력감이 커질 수 있습니다.",
        advice: "생각만 하지 말고 작은 행동부터 시작하세요.",
      },
      relation: {
        meaning: "참기만 하다 감정이 쌓일 수 있습니다.",
        advice: "늦기 전에 솔직하게 표현하세요.",
      },
      health: {
        meaning: "무기력, 순환 저하, 피로 누적 가능성.",
        advice: "몸을 조금씩 움직이는 루틴이 필요합니다.",
      },
      future: {
        meaning: "지연은 되지만 멈춘 것은 아닙니다.",
        advice: "정체기엔 전략 수정이 답입니다.",
      },
      choice: {
        meaning: "계속 미루면 기회를 놓칠 수 있습니다.",
        advice: "기다림과 회피를 구분하세요.",
      },
    },
  },

  {
    id: 13,
    name: "Death (죽음)",
    englishName: "Death",
    type: "Major",
    number: 13,
    keywords: ["끝", "변화", "재탄생", "정리", "숙명적 변화"],
    reversedKeywords: ["변화 거부", "미련", "정체", "끝맺음 지연"],
    image: "/images/Major/13_Death.webp",
    meaning: "끝남과 동시에 새로운 시작을 뜻하는 카드.",
    advice: "놓아야 할 것을 놓을 때 다음 문이 열립니다.",

    reversedMeaning:
      "끝내야 할 것을 붙잡으며 변화가 늦어지고 답답함이 길어질 수 있습니다.",
    reversedAdvice:
      "사라지는 것이 손실만은 아닙니다. 비워야 새것이 들어옵니다.",

    shortMeaning: "강력한 변화와 재시작의 카드",
    yesNo: "Maybe",
    powerScore: 96,

    categoryInterpretations: {
      love: {
        meaning: "관계 종료 또는 완전한 새 시작.",
        advice: "억지 인연은 놓아주세요.",
      },
      career: {
        meaning: "현재 맡은 프로젝트의 종료나 직업적인 큰 전환점을 맞이합니다.",
        advice:
          "과거의 방식에 연연하지 말고, 완전히 새로운 판을 짠다는 마음으로 임하세요.",
      },
      money: {
        meaning: "재정 구조 개편 시기.",
        advice: "손실 요소를 정리하세요.",
      },
      mind: {
        meaning: "낡은 생각이 끝나는 시기.",
        advice: "변화를 두려워하지 마세요.",
      },
      relation: {
        meaning: "인간관계 대정리 가능성.",
        advice: "남을 사람에게 집중하세요.",
      },
      health: {
        meaning: "생활 습관 개선 적기.",
        advice: "나쁜 습관을 끊으세요.",
      },
      future: {
        meaning: "크게 바뀐 후 더 좋아집니다.",
        advice: "변화는 성장의 신호입니다.",
      },
      choice: {
        meaning: "과감한 정리가 필요합니다.",
        advice: "미련보다 새 출발을 택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "끝난 관계를 붙잡거나 미련이 남을 수 있습니다.",
        advice: "추억보다 현재의 행복을 보세요.",
      },
      career: {
        meaning: "그만둘 시기를 놓쳐 소모될 수 있습니다.",
        advice: "버틸 가치와 떠날 이유를 냉정히 보세요.",
      },
      money: {
        meaning: "낡은 소비 패턴을 못 끊을 수 있습니다.",
        advice: "새 재정 습관을 만들어야 합니다.",
      },
      mind: {
        meaning: "변화를 두려워해 제자리걸음할 수 있습니다.",
        advice: "두려움 뒤에 성장 기회가 있습니다.",
      },
      relation: {
        meaning: "정리된 관계를 계속 끌고 갈 수 있습니다.",
        advice: "모든 인연이 영원할 필요는 없습니다.",
      },
      health: {
        meaning: "나쁜 습관 반복으로 회복이 늦어질 수 있습니다.",
        advice: "작은 습관 하나부터 끊어내세요.",
      },
      future: {
        meaning: "새 시작은 오지만 결단이 늦어질 수 있습니다.",
        advice: "문을 열려면 먼저 손을 놓아야 합니다.",
      },
      choice: {
        meaning: "미련 때문에 선택이 늦어질 수 있습니다.",
        advice: "끝낼 것을 끝내야 길이 열립니다.",
      },
    },
  },

  {
    id: 14,
    name: "Temperance (절제)",
    englishName: "Temperance",
    type: "Major",
    number: 14,
    keywords: ["조화", "균형", "치유", "절제"],
    reversedKeywords: ["불균형", "극단", "조급함", "과함"],
    image: "/images/Major/14_Temperance.webp",
    meaning: "균형과 조화를 통해 안정되는 카드.",
    advice: "극단을 피하고 중간 지점을 찾으세요.",

    reversedMeaning:
      "균형이 깨지고 감정이나 생활 패턴이 한쪽으로 치우칠 수 있습니다.",
    reversedAdvice: "급하게 맞추려 하지 말고 하나씩 천천히 바로잡으세요.",

    shortMeaning: "균형과 치유의 카드",
    yesNo: "Yes",
    powerScore: 89,

    categoryInterpretations: {
      love: {
        meaning: "서로 맞춰가며 안정됩니다.",
        advice: "대화를 꾸준히 이어가세요.",
      },
      career: {
        meaning: "협업이 잘 풀립니다.",
        advice: "해외 업무나 다른 부서와의 협업과 같은 중재자 역할이 빛납니다.",
      },
      money: {
        meaning: "수입·지출 균형이 좋아집니다.",
        advice: "무리 없는 소비를 유지하세요.",
      },
      mind: {
        meaning: "감정이 차분해집니다.",
        advice: "생활 루틴을 정돈하세요.",
      },
      relation: {
        meaning: "사람들과 무난하게 어울립니다.",
        advice: "한쪽 편만 들지 마세요.",
      },
      health: {
        meaning: "회복과 안정운.",
        advice: "과로를 줄이세요.",
      },
      future: {
        meaning: "점차 안정되고 좋아집니다.",
        advice: "급하게 결과를 재촉하지 마세요.",
      },
      choice: {
        meaning: "중간 지점 선택이 유리합니다.",
        advice: "극단적 선택은 피하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "서로 속도 차이로 갈등이 생길 수 있습니다.",
        advice: "맞추려는 노력보다 이해가 먼저입니다.",
      },
      career: {
        meaning: "협업 균형이 깨져 피로가 쌓일 수 있습니다.",
        advice: "업무 분배를 다시 조정하세요.",
      },
      money: {
        meaning:
          "수입과 지출의 균형이 깨져 자금 회전이 원활하지 않을 수 있습니다.",
        advice: "감정적인 소비를 줄이고 지출의 우선순위를 다시 정해야 합니다.",
      },
      mind: {
        meaning: "감정 기복과 조급함이 커질 수 있습니다.",
        advice: "완벽히 고치려 말고 조금씩 회복하세요.",
      },
      relation: {
        meaning: "한쪽만 배려하는 관계가 될 수 있습니다.",
        advice: "균형 있는 거리감을 지키세요.",
      },
      health: {
        meaning: "생활 루틴 붕괴로 컨디션 저하 가능성.",
        advice: "수면과 식사부터 정상화하세요.",
      },
      future: {
        meaning: "좋아지지만 시간이 더 필요합니다.",
        advice: "천천히 맞춰지는 과정이라 생각하세요.",
      },
      choice: {
        meaning: "극단적 선택은 후회를 부를 수 있습니다.",
        advice: "지금은 중간 해답이 최선입니다.",
      },
    },
  },

  {
    id: 15,
    name: "The Devil (악마)",
    englishName: "The Devil",
    type: "Major",
    number: 15,
    keywords: ["유혹", "집착", "속박", "욕망", "강한 끌림"],
    reversedKeywords: ["해방", "각성", "중독 탈출", "관계 정리"],
    image: "/images/Major/15_Devil.webp",
    meaning: "욕망과 집착, 끊기 어려운 관계를 뜻하는 카드.",
    advice: "당신을 묶는 습관이나 관계를 직시하세요.",

    reversedMeaning:
      "나를 옭아매던 집착과 중독에서 벗어나기 시작하는 전환점입니다.",
    reversedAdvice:
      "끊어내기 힘들어도 이미 첫걸음은 시작됐습니다. 자유를 선택하세요.",

    shortMeaning: "유혹과 집착의 카드",
    yesNo: "No",
    powerScore: 91,

    categoryInterpretations: {
      love: {
        meaning: "강렬하지만 unhealthy한 관계 가능성.",
        advice: "집착인지 사랑인지 구분하세요.",
      },
      career: {
        meaning: "강한 성과 욕심이나 불합리한 조직 문화에 얽매일 수 있습니다.",
        advice:
          "일과 삶의 균형을 점검하고, 나를 소모시키는 유혹(편법 등)을 경계하세요.",
      },
      money: {
        meaning: "도박, 무리한 대출 등의 과소비·욕심 주의.",
        advice: "단기 고수익 유혹을 피하세요.",
      },
      mind: {
        meaning: "부정 감정에 묶일 수 있습니다.",
        advice: "생각의 사슬을 끊으세요.",
      },
      relation: {
        meaning: "악연이나 피곤한 관계 가능성.",
        advice: "단호하게 선을 그으세요.",
      },
      health: {
        meaning: "중독성 습관 주의.",
        advice: "하나씩 끊어내세요.",
      },
      future: {
        meaning: "현재 패턴을 바꾸지 않으면 반복됩니다.",
        advice: "지금 끊어야 미래가 바뀝니다.",
      },
      choice: {
        meaning: "달콤한 선택은 위험할 수 있습니다.",
        advice: "즉시 만족보다 장기 이익을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "집착적 관계에서 벗어나 건강한 흐름이 시작됩니다.",
        advice: "사랑은 통제가 아니라 존중임을 기억하세요.",
      },
      career: {
        meaning: "압박 구조나 불합리한 환경을 벗어날 수 있습니다.",
        advice: "나를 소모시키는 조건은 거절하세요.",
      },
      money: {
        meaning: "과소비 습관을 끊고 재정 회복이 가능합니다.",
        advice: "작은 절제가 큰 자유를 만듭니다.",
      },
      mind: {
        meaning: "부정적 사고에서 점차 벗어납니다.",
        advice: "나를 묶은 생각을 하나씩 놓아주세요.",
      },
      relation: {
        meaning: "악연 정리, 거리 두기가 가능합니다.",
        advice: "떠나야 할 관계를 붙잡지 마세요.",
      },
      health: {
        meaning: "중독 습관 개선의 적기입니다.",
        advice: "오늘 끊는 작은 선택이 미래를 바꿉니다.",
      },
      future: {
        meaning: "반복되던 문제의 고리가 끊어집니다.",
        advice: "같은 패턴으로 돌아가지 마세요.",
      },
      choice: {
        meaning: "당장의 달콤함보다 자유를 주는 선택이 맞습니다.",
        advice: "편한 길보다 건강한 길을 고르세요.",
      },
    },
  },

  {
    id: 16,
    name: "The Tower (탑)",
    englishName: "The Tower",
    type: "Major",
    number: 16,
    keywords: ["붕괴", "충격", "각성", "해방"],
    reversedKeywords: ["위기 회피", "지연된 붕괴", "내부 혼란", "변화 저항"],
    image: "/images/Major/16_Tower.webp",
    meaning: "갑작스러운 변화로 낡은 구조가 무너지는 카드.",
    advice: "무너짐을 끝으로 보지 말고 새 시작으로 받아들이세요.",

    reversedMeaning:
      "겉으론 버티고 있지만 내부 균열이 커지고 있어 변화가 지연될 수 있습니다.",
    reversedAdvice: "무너지기 전에 스스로 고치는 용기가 더 현명한 선택입니다.",

    shortMeaning: "충격 뒤 재탄생의 카드",
    yesNo: "No",
    powerScore: 97,

    categoryInterpretations: {
      love: {
        meaning: "숨겨진 문제가 터지거나 관계가 크게 흔들립니다.",
        advice: "억지 유지보다 진실을 마주하세요.",
      },
      career: {
        meaning: "회사·프로젝트 변화 가능성.",
        advice: "기존 방식에 집착하지 마세요.",
      },
      money: {
        meaning: "예상 밖 지출 주의.",
        advice: "비상자금을 확보하세요.",
      },
      mind: {
        meaning: "고정관념이 깨집니다.",
        advice: "충격 속 배움을 찾으세요.",
      },
      relation: {
        meaning: "갈등이 폭발할 수 있습니다.",
        advice: "감정 폭발보다 거리 두기가 필요합니다.",
      },
      health: {
        meaning: "갑작스러운 컨디션 난조나 예상치 못한 부상의 위험이 있습니다.",
        advice: "무리한 활동을 자제하고 안전과 휴식을 최우선으로 챙기세요.",
      },
      future: {
        meaning: "큰 변화 후 더 나은 기반이 생깁니다.",
        advice: "정리될 것은 정리됩니다.",
      },
      choice: {
        meaning: "낡은 선택지를 버려야 합니다.",
        advice: "새 판을 짜는 결단이 필요합니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "문제를 덮어두며 관계가 불안정해질 수 있습니다.",
        advice: "폭발 전에 대화로 균열을 다루세요.",
      },
      career: {
        meaning: "변화가 필요한데 미루고 있을 수 있습니다.",
        advice: "늦기 전에 구조를 바꾸세요.",
      },
      money: {
        meaning: "숨겨진 비용이나 누적 문제 가능성.",
        advice: "작은 새는 돈부터 막으세요.",
      },
      mind: {
        meaning: "겉은 괜찮아도 내면 스트레스가 큽니다.",
        advice: "무너질 때까지 참지 마세요.",
      },
      relation: {
        meaning: "겉으로만 유지되는 관계일 수 있습니다.",
        advice: "진실 없는 평화는 오래가지 않습니다.",
      },
      health: {
        meaning: "피로 누적, 스트레스성 경고 가능성.",
        advice: "몸의 신호를 무시하지 마세요.",
      },
      future: {
        meaning: "변화는 피할 수 없지만 늦어질 수 있습니다.",
        advice: "스스로 바꾸면 충격은 줄어듭니다.",
      },
      choice: {
        meaning: "낡은 방식을 붙잡으면 더 큰 비용이 듭니다.",
        advice: "두려워도 개편을 선택하세요.",
      },
    },
  },

  {
    id: 17,
    name: "The Star (별)",
    englishName: "The Star",
    type: "Major",
    number: 17,
    keywords: ["희망", "치유", "영감", "미래", "예술성"],
    reversedKeywords: ["실망", "불신", "의욕 저하", "희망 상실"],
    image: "/images/Major/17_Star.webp",
    meaning: "희망과 회복, 밝은 미래를 뜻하는 카드.",
    advice: "지금의 가능성을 믿고 꾸준히 나아가세요.",

    reversedMeaning:
      "희망이 흐려지고 자신감이 떨어져 미래가 막막하게 느껴질 수 있습니다.",
    reversedAdvice:
      "빛이 사라진 것이 아니라 잠시 가려진 것입니다. 다시 고개를 들어보세요.",

    shortMeaning: "희망과 치유의 카드",
    yesNo: "Yes",
    powerScore: 95,

    categoryInterpretations: {
      love: {
        meaning: "순수하고 건강한 인연운.",
        advice: "있는 그대로의 모습을 보여주세요.",
      },
      career: {
        meaning: "창의성과 비전이 인정받습니다.",
        advice: "꿈꾸던 방향을 실행하세요.",
      },
      money: {
        meaning: "재정적 압박으로부터의 해방.",
        advice: "장기 계획이 유리합니다.",
      },
      mind: {
        meaning: "불안이 걷히고 평온해집니다.",
        advice: "희망을 놓지 마세요.",
      },
      relation: {
        meaning: "좋은 사람들과 연결됩니다.",
        advice: "진실한 태도가 운을 부릅니다.",
      },
      health: {
        meaning: "회복과 안정운.",
        advice: "충분한 휴식을 취하세요.",
      },
      future: {
        meaning: "원하던 방향으로 서서히 열립니다.",
        advice: "믿음을 유지하세요.",
      },
      choice: {
        meaning: "희망이 느껴지는 쪽이 맞습니다.",
        advice: "불안보다 가능성을 택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계에 대한 기대가 낮아질 수 있습니다.",
        advice: "실망 한 번이 사랑 전체를 뜻하진 않습니다.",
      },
      career: {
        meaning: "비전이 흐려져 의욕이 떨어질 수 있습니다.",
        advice: "처음 시작한 이유를 다시 떠올리세요.",
      },
      money: {
        meaning: "수입에 대한 막연한 기대감이 실망으로 이어질 수 있습니다.",
        advice: "희망 섞인 추측보다 정확한 데이터로 자금을 관리하세요.",
      },
      mind: {
        meaning: "우울감, 자신감 저하가 올 수 있습니다.",
        advice: "작은 희망 하나라도 붙잡으세요.",
      },
      relation: {
        meaning: "사람에게 실망하거나 거리감이 생길 수 있습니다.",
        advice: "모두를 닫지 말고 믿을 사람은 남겨두세요.",
      },
      health: {
        meaning: "회복 속도가 더딜 수 있습니다.",
        advice: "몸도 마음도 시간을 필요로 합니다.",
      },
      future: {
        meaning: "미래가 흐릿해 보여도 가능성은 살아 있습니다.",
        advice: "안 보인다고 없는 것은 아닙니다.",
      },
      choice: {
        meaning: "불안 때문에 좋은 선택을 놓칠 수 있습니다.",
        advice: "두려움이 아닌 가능성을 기준으로 보세요.",
      },
    },
  },

  {
    id: 18,
    name: "The Moon (달)",
    englishName: "The Moon",
    type: "Major",
    number: 18,
    keywords: ["불안", "환상", "직감", "모호함", "잠재의식"],
    reversedKeywords: ["진실 발견", "불안 해소", "착각 종료", "명확해짐"],
    image: "/images/Major/18_Moon.webp",
    meaning: "불확실함과 감정의 흔들림을 뜻하는 카드.",
    advice: "두려움에 휘둘리지 말고 사실을 확인하세요.",

    reversedMeaning:
      "흐릿했던 상황이 서서히 명확해지고 숨겨진 진실이 드러나기 시작합니다.",
    reversedAdvice:
      "불안은 끝없이 상상하게 만들지만, 진실은 오히려 당신을 편하게 합니다.",

    shortMeaning: "안개 속 직감의 카드",
    yesNo: "Maybe",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning:
          "상대의 속마음이나 관계의 앞날이 불투명하게 느껴질 수 있습니다.",
        advice:
          "혼자만의 상상으로 괴로워하기보다, 차분하게 사실을 확인할 시간이 필요합니다.",
      },
      career: {
        meaning: "방향성이 흐릴 수 있습니다.",
        advice: "중요 결정은 신중히 하세요.",
      },
      money: {
        meaning: "불확실한 투자 주의.",
        advice: "검증되지 않은 제안은 피하세요.",
      },
      mind: {
        meaning: "예민함과 불안감 상승.",
        advice: "휴식과 감정 정리가 필요합니다.",
      },
      relation: {
        meaning: "오해가 생기기 쉽습니다.",
        advice: "소문보다 사실을 보세요.",
      },
      health: {
        meaning: "수면·스트레스 관리 필요.",
        advice: "심리적 안정이 신체 회복의 우선입니다.",
      },
      future: {
        meaning: "아직 안개가 걷히지 않았습니다.",
        advice: "시간을 두고 지켜보세요.",
      },
      choice: {
        meaning: "지금 결정은 정보 부족일 수 있습니다.",
        advice: "조금 더 확인 후 움직이세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "오해가 풀리고 상대 마음이 보이기 시작합니다.",
        advice: "불안한 상상보다 직접 확인하세요.",
      },
      career: {
        meaning: "흐리던 방향성이 점차 선명해집니다.",
        advice: "이제 계획을 구체화할 때입니다.",
      },
      money: {
        meaning: "불안정했던 재정 상황이 정리될 수 있습니다.",
        advice: "숫자를 명확히 보면 해답이 보입니다.",
      },
      mind: {
        meaning: "불안감이 줄고 마음이 차분해집니다.",
        advice: "스스로를 겁주던 생각에서 벗어나세요.",
      },
      relation: {
        meaning: "숨은 감정이나 진실이 드러날 수 있습니다.",
        advice: "솔직한 대화가 관계를 살립니다.",
      },
      health: {
        meaning: "수면 패턴과 컨디션이 회복될 수 있습니다.",
        advice: "생활 리듬을 꾸준히 유지하세요.",
      },
      future: {
        meaning: "안개가 걷히며 길이 보이기 시작합니다.",
        advice: "조금만 더 가면 확신이 생깁니다.",
      },
      choice: {
        meaning: "정보가 모이며 판단이 쉬워집니다.",
        advice: "이제는 머뭇거림보다 실행입니다.",
      },
    },
  },

  {
    id: 19,
    name: "The Sun (태양)",
    englishName: "The Sun",
    type: "Major",
    number: 19,
    keywords: ["성공", "기쁨", "활력", "명확함"],
    reversedKeywords: ["지연", "자신감 저하", "활력 저하", "흐린 전망"],
    image: "/images/Major/19_Sun.webp",
    meaning: "밝은 성공과 기쁨, 확실한 결과를 뜻하는 카드.",
    advice: "자신감 있게 전진하세요.",

    reversedMeaning:
      "기대했던 성과가 늦어지거나 빛나야 할 순간이 잠시 흐려질 수 있습니다.",
    reversedAdvice:
      "태양이 사라진 것이 아닙니다. 구름이 지나가면 다시 빛납니다.",

    shortMeaning: "최고의 긍정 에너지 카드",
    yesNo: "Yes",
    powerScore: 99,

    categoryInterpretations: {
      love: {
        meaning: "행복한 관계, 밝은 연애운.",
        advice: "솔직하고 따뜻하게 표현하세요.",
      },
      career: {
        meaning: "성과·합격·인정운 강함.",
        advice: "지금은 적극적으로 나서세요.",
      },
      money: {
        meaning: "수익 상승 가능성.",
        advice: "좋은 흐름을 잘 관리하세요.",
      },
      mind: {
        meaning: "자신감과 활력이 높습니다.",
        advice: "긍정 에너지를 활용하세요.",
      },
      relation: {
        meaning: "주변 인기가 높아집니다.",
        advice: "계산 없는 순수한 마음이 관계를 밝게 만듭니다.",
      },
      health: {
        meaning:
          "최상의 컨디션과 강력한 생명력을 상징하며, 지쳤던 몸과 마음이 빠르게 회복되는 시기입니다.",
        advice:
          "적당한 일광욕과 야외 활동은 보약이 됩니다. 다만, 과한 활동으로 인한 탈수나 열성 질환은 주의가 필요합니다.",
      },
      future: {
        meaning: "원하던 성공이 가까워집니다.",
        advice: "계속 밀고 나가세요.",
      },
      choice: {
        meaning: "가장 밝고 확실한 길이 맞습니다.",
        advice: "망설이지 마세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "오해나 거리감으로 관계 온도가 잠시 낮아질 수 있습니다.",
        advice: "자존심보다 진심 어린 대화를 선택하세요.",
      },
      career: {
        meaning:
          "성과는 나오지만 기대치에 미치지 못하거나, 자신의 능력을 과신해 실수가 생길 수 있습니다.",
        advice:
          "지금의 성취에 안주하지 말고 구름 뒤의 태양을 기다리듯 내실을 기하세요.",
      },
      money: {
        meaning: "수익 지연, 기대 수입 미달 가능성이 있습니다.",
        advice: "무리한 확장보다 안정적 운영이 중요합니다.",
      },
      mind: {
        meaning: "자신감 저하나 의욕 감소가 올 수 있습니다.",
        advice: "작은 성공부터 다시 쌓아가세요.",
      },
      relation: {
        meaning: "주변과의 텐션 차이로 서운함이 생길 수 있습니다.",
        advice: "밝은 척보다 솔직한 감정 표현이 필요합니다.",
      },
      health: {
        meaning: "피로 누적, 체력 저하를 주의해야 합니다.",
        advice: "휴식과 생활 리듬 회복이 우선입니다.",
      },
      future: {
        meaning: "성공은 오지만 예상보다 시간이 더 필요합니다.",
        advice: "속도보다 지속성이 결과를 만듭니다.",
      },
      choice: {
        meaning: "겉으로 화려한 선택이 정답은 아닐 수 있습니다.",
        advice: "현실성과 지속 가능성을 먼저 보세요.",
      },
    },
  },

  {
    id: 20,
    name: "Judgement (심판)",
    englishName: "Judgement",
    type: "Major",
    number: 20,
    keywords: ["각성", "결단", "부활", "소명", "보상"],
    reversedKeywords: ["망설임", "후회", "과거 집착", "결단 지연"],
    image: "/images/Major/20_Judgement.webp",
    meaning: "중요한 결단과 새로운 각성을 뜻하는 카드.",
    advice: "과거를 정리하고 부름에 응답하세요.",

    reversedMeaning:
      "결정을 미루거나 과거에 묶여 새 출발의 타이밍을 놓칠 수 있습니다.",
    reversedAdvice: "후회는 과거에 머물게 하고 결단은 미래를 열어줍니다.",

    shortMeaning: "새로운 부름의 카드",
    yesNo: "Yes",
    powerScore: 93,

    categoryInterpretations: {
      love: {
        meaning: "재회 또는 관계 재정비 가능성.",
        advice: "과거 실수를 반복하지 마세요.",
      },
      career: {
        meaning: "합격·승진·기회운.",
        advice: "온 기회를 잡으세요.",
      },
      money: {
        meaning:
          "과거에 묶였던 금전 문제가 해결되거나 정당한 보상을 받게 되는 흐름입니다.",
        advice:
          "받아야 할 권리를 확실히 챙기고, 새로운 재정 계획을 세우기에 좋은 시점입니다.",
      },
      mind: {
        meaning: "마음이 깨어나는 시기.",
        advice: "스스로를 용서하세요.",
      },
      relation: {
        meaning: "끊긴 인연 회복 가능성.",
        advice: "진심 어린 대화를 하세요.",
      },
      health: {
        meaning: "회복운 상승.",
        advice: "새로운 건강 루틴을 시작하세요.",
      },
      future: {
        meaning: "인생 전환점이 옵니다.",
        advice: "준비된 사람에게 기회가 옵니다.",
      },
      choice: {
        meaning: "망설였던 것을 결정할 때입니다.",
        advice: "확신 있는 길을 택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "재회 고민이나 과거 관계 미련이 남을 수 있습니다.",
        advice: "그리움과 행복은 다른 문제입니다.",
      },
      career: {
        meaning: "기회를 앞두고 망설일 수 있습니다.",
        advice: "준비됐다면 스스로를 믿으세요.",
      },
      money: {
        meaning: "결정 지연으로 타이밍을 놓칠 수 있습니다.",
        advice: "완벽한 때보다 적절한 때가 중요합니다.",
      },
      mind: {
        meaning: "자책과 후회가 마음을 무겁게 할 수 있습니다.",
        advice: "지난 선택보다 지금 선택이 더 중요합니다.",
      },
      relation: {
        meaning: "풀지 못한 감정이 남아 있을 수 있습니다.",
        advice: "정리할 대화는 미루지 마세요.",
      },
      health: {
        meaning: "회복 의지는 있으나 실천이 늦어질 수 있습니다.",
        advice: "작은 루틴 하나부터 시작하세요.",
      },
      future: {
        meaning: "전환점은 오지만 결단이 늦어질 수 있습니다.",
        advice: "기회는 기다리지 않고 지나가기도 합니다.",
      },
      choice: {
        meaning: "확신 부족으로 머뭇거릴 수 있습니다.",
        advice: "모든 확신은 움직이며 만들어집니다.",
      },
    },
  },

  {
    id: 21,
    name: "The World (세계)",
    englishName: "The World",
    type: "Major",
    number: 21,
    keywords: ["완성", "성공", "통합", "달성", "해외", "이동", "확장"],
    reversedKeywords: ["미완성", "지연", "공허함", "마무리 부족"],
    image: "/images/Major/21_World.webp",
    meaning: "목표 달성과 완성을 뜻하는 최고의 카드.",
    advice: "지금의 성취를 누리고 다음 단계로 나아가세요.",

    reversedMeaning:
      "거의 다 왔지만 마지막 한 조각이 부족해 완성의 기쁨이 늦어질 수 있습니다.",
    reversedAdvice:
      "포기할 시점이 아니라 마무리할 시점입니다. 끝까지 완성하세요.",

    shortMeaning: "완성과 승리의 카드",
    yesNo: "Yes",
    powerScore: 100,

    categoryInterpretations: {
      love: {
        meaning: "완성도 높은 안정적 관계.",
        advice: "현재 행복을 충분히 누리세요.",
      },
      career: {
        meaning:
          "현재의 목표를 완벽히 달성하거나, 더 큰 세상(해외, 큰 규모)으로 나갈 기회가 생깁니다.",
        advice:
          "하나의 마디가 완성되었습니다. 이 성공을 발판 삼아 더 넓은 무대를 꿈꾸세요.",
      },
      money: {
        meaning: "재정 안정과 성취운.",
        advice: "유지와 관리에 집중하세요.",
      },
      mind: {
        meaning: "내면의 균형이 완성됩니다.",
        advice: "성장한 자신을 인정하세요.",
      },
      relation: {
        meaning: "조화로운 인간관계.",
        advice: "감사 표현을 아끼지 마세요.",
      },
      health: {
        meaning: "심신 안정 상태.",
        advice: "좋은 습관을 유지하세요.",
      },
      future: {
        meaning: "큰 목표가 완성됩니다.",
        advice: "다음 챕터를 준비하세요.",
      },
      choice: {
        meaning: "가장 완성도 높은 선택입니다.",
        advice: "자신 있게 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계는 좋지만 채워지지 않은 부분이 남아 있을 수 있습니다.",
        advice: "겉으로 괜찮아 보여도 필요한 대화를 미루지 마세요.",
      },
      career: {
        meaning: "마무리 단계에서 지연이나 수정이 생길 수 있습니다.",
        advice: "끝까지 집중하는 사람이 결국 완성합니다.",
      },
      money: {
        meaning: "안정 직전의 흔들림이나 관리 부족 가능성이 있습니다.",
        advice: "버는 것보다 지키는 능력을 점검하세요.",
      },
      mind: {
        meaning: "많이 이뤘는데도 공허함을 느낄 수 있습니다.",
        advice: "결과만이 아니라 성장 과정도 인정하세요.",
      },
      relation: {
        meaning:
          "전반적으로 조화롭지만, 사소한 오해나 표현 부족으로 2% 부족한 느낌을 받을 수 있습니다.",
        advice:
          "익숙함에 속아 소중함을 잊지 마세요. 작은 배려가 관계의 완성도를 높입니다.",
      },
      health: {
        meaning: "거의 회복됐지만 완전한 안정엔 시간이 더 필요합니다.",
        advice: "조급하게 무리하지 말고 회복을 끝까지 챙기세요.",
      },
      future: {
        meaning: "성공은 가까우나 마지막 관문이 남아 있습니다.",
        advice: "지금 멈추면 아쉽고, 한 걸음 더 가면 완성입니다.",
      },
      choice: {
        meaning: "좋은 선택이지만 세부 조정이 더 필요합니다.",
        advice: "결정 후 실행 계획까지 세워야 완벽해집니다.",
      },
    },
  },
];
