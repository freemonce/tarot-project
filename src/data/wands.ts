import type { TarotCard } from "../types/tarot";

export const wands: TarotCard[] = [
  {
    id: 64,
    name: "Ace of Wands (완드 에이스)",
    englishName: "Ace of Wands",
    type: "Wands",
    number: 1,
    keywords: ["열정", "새로운 시작", "창의적 에너지", "영감"],
    meaning:
      "새로운 프로젝트나 아이디어가 시작되는 강력한 에너지의 시기입니다.",
    advice:
      "망설이지 말고 당신의 열정을 따라 첫 발을 내딛으세요. 지금이 바로 기회입니다.",
    image: "/images/Wands/Wands01.webp",
    shortMeaning: "불꽃 같은 시작",
    yesNo: "Yes",
    powerScore: 86,

    categoryInterpretations: {
      love: {
        meaning:
          "새로운 인연, 설레는 시작, 뜨거운 감정이 빠르게 피어나는 흐름입니다.",
        advice:
          "좋은 감정이 생겼다면 지나치게 계산하지 말고 자연스럽게 표현해보세요.",
      },
      career: {
        meaning: "새 프로젝트, 새로운 도전, 커리어 확장의 시작을 뜻합니다.",
        advice: "지금은 안정성보다 추진력이 성과를 만드는 시기입니다.",
      },
      money: {
        meaning:
          "새로운 수입원, 부업, 창업 아이디어처럼 돈의 시작점이 열리는 카드입니다.",
        advice: "생각만 하지 말고 실행 계획을 세워 움직이세요.",
      },
      mind: {
        meaning: "의욕과 생기가 돌아오며 다시 해보고 싶은 마음이 강해집니다.",
        advice: "작은 행동 하나가 흐름을 깨는 열쇠입니다.",
      },
      relation: {
        meaning: "새로운 사람들과 연결되거나 관계가 활기를 띱니다.",
        advice: "먼저 다가가는 용기가 기회를 만듭니다.",
      },
      health: {
        meaning: "에너지 회복, 활동성 증가의 흐름입니다.",
        advice: "운동과 생활 리듬을 시작하기 좋습니다.",
      },
      future: {
        meaning: "새로운 시작점이 열리며 빠르게 전개됩니다.",
        advice: "첫 타이밍을 놓치지 마세요.",
      },
      choice: {
        meaning: "도전하는 선택이 유리합니다.",
        advice: "머뭇거림보다 실행이 답입니다.",
      },
    },
  },

  {
    id: 65,
    name: "Two of Wands (완드 2)",
    englishName: "Two of Wands",
    type: "Wands",
    number: 2,
    keywords: ["계획", "확장", "미래 전망", "결정"],
    meaning:
      "초기의 성공을 바탕으로 더 큰 세상을 향해 계획을 세우는 단계입니다.",
    advice:
      "현재에 안주하지 말고 더 넓은 시야로 미래를 설계하며 목표를 구체화하세요.",
    image: "/images/Wands/Wands02.webp",
    shortMeaning: "다음 판을 설계",
    yesNo: "Yes",
    powerScore: 71,

    categoryInterpretations: {
      love: {
        meaning: "관계를 다음 단계로 발전시킬지 고민하는 흐름입니다.",
        advice: "미래 방향성에 대해 솔직히 이야기하세요.",
      },
      career: {
        meaning: "이직, 확장, 새로운 목표 설정에 좋습니다.",
        advice: "현재 성과에 만족하지 말고 더 크게 보세요.",
      },
      money: {
        meaning: "장기 투자나 수입 구조 확장을 고민하게 됩니다.",
        advice: "눈앞 이익보다 미래 가치 중심으로 판단하세요.",
      },
      mind: {
        meaning: "시야가 넓어지고 더 큰 꿈을 보게 됩니다.",
        advice: "작게 머물지 말고 목표를 키우세요.",
      },
      relation: {
        meaning: "관계 선택과 방향 정리가 필요합니다.",
        advice: "애매함을 줄이고 의도를 명확히 하세요.",
      },
      health: {
        meaning: "생활 패턴 재정비가 필요한 시기입니다.",
        advice: "장기적으로 지속 가능한 루틴을 만드세요.",
      },
      future: {
        meaning: "앞으로 나아갈 큰 기회가 준비됩니다.",
        advice: "준비된 사람에게 확장이 옵니다.",
      },
      choice: {
        meaning: "현상 유지보다 성장 선택이 유리합니다.",
        advice: "멀리 보는 결정을 하세요.",
      },
    },
  },

  {
    id: 66,
    name: "Three of Wands (완드 3)",
    englishName: "Three of Wands",
    type: "Wands",
    number: 3,
    keywords: ["탐험", "전망", "협력", "진척"],
    meaning:
      "당신의 노력이 결실을 맺기 시작하며, 더 넓은 가능성이 열리고 있습니다.",
    advice:
      "자신감을 가지고 멀리 내다보세요. 당신의 배가 곧 성과를 싣고 돌아올 것입니다.",
    image: "/images/Wands/Wands03.webp",
    shortMeaning: "성과가 다가온다",
    yesNo: "Yes",
    powerScore: 78,

    categoryInterpretations: {
      love: {
        meaning: "관계가 안정적으로 진전되며 기대감이 커집니다.",
        advice: "서두르지 말고 흐름을 믿으세요.",
      },
      career: {
        meaning: "사업 확장, 해외운, 프로젝트 진척운이 좋습니다.",
        advice: "네트워크를 넓히면 더 큰 성과가 납니다.",
      },
      money: {
        meaning: "투자나 노력의 결과가 서서히 보입니다.",
        advice: "조급함보다 지속성이 중요합니다.",
      },
      mind: {
        meaning: "희망과 자신감이 커지는 시기입니다.",
        advice: "기대감을 현실 계획으로 연결하세요.",
      },
      relation: {
        meaning: "사람들과 협력하며 좋은 흐름이 생깁니다.",
        advice: "혼자보다 함께 움직이세요.",
      },
      health: {
        meaning: "회복세가 보이며 활력이 올라옵니다.",
        advice: "꾸준한 관리가 효과를 냅니다.",
      },
      future: {
        meaning: "기다리던 결과가 다가옵니다.",
        advice: "준비를 계속 유지하세요.",
      },
      choice: {
        meaning: "확장성과 성장성이 높은 선택입니다.",
        advice: "좁은 길보다 넓은 길을 보세요.",
      },
    },
  },

  {
    id: 67,
    name: "Four of Wands (완드 4)",
    englishName: "Four of Wands",
    type: "Wands",
    number: 4,
    keywords: ["축하", "안정", "화합", "휴식"],
    meaning: "중요한 단계를 달성하고 평화와 기쁨을 만끽하는 행복한 시기입니다.",
    advice:
      "함께 고생한 사람들과 성취를 축하하며 잠시 에너지를 재충전하는 시간을 가지세요.",
    image: "/images/Wands/Wands04.webp",
    shortMeaning: "기쁨의 완성",
    yesNo: "Yes",
    powerScore: 82,

    categoryInterpretations: {
      love: {
        meaning: "연애 안정, 동거, 약혼, 결혼운까지 좋은 카드입니다.",
        advice: "행복한 순간을 충분히 함께 누리세요.",
      },
      career: {
        meaning: "프로젝트 성공, 팀 성과, 안정적 자리 잡음을 뜻합니다.",
        advice: "성과를 인정하고 다음 단계도 준비하세요.",
      },
      money: {
        meaning: "안정적인 재정 흐름과 만족감이 큽니다.",
        advice: "지금 구조를 잘 유지하세요.",
      },
      mind: {
        meaning: "마음의 평화와 안정감이 강해집니다.",
        advice: "감사하는 마음이 더 큰 복을 부릅니다.",
      },
      relation: {
        meaning: "가족·친구와 화목한 시간이 늘어납니다.",
        advice: "좋은 사람들과 시간을 보내세요.",
      },
      health: {
        meaning: "컨디션 안정, 회복 흐름이 좋습니다.",
        advice: "무리보다 균형 있는 생활을 유지하세요.",
      },
      future: {
        meaning: "안정된 기반 위에 좋은 일이 이어집니다.",
        advice: "기반을 단단히 하세요.",
      },
      choice: {
        meaning: "안정적이고 만족도 높은 선택입니다.",
        advice: "평화와 지속성을 기준으로 보세요.",
      },
    },
  },

  {
    id: 68,
    name: "Five of Wands (완드 5)",
    englishName: "Five of Wands",
    type: "Wands",
    number: 5,
    keywords: ["경쟁", "갈등", "혼란", "도전"],
    meaning:
      "주변과 의견이 충돌하거나 사소한 다툼이 발생할 수 있는 역동적인 상황입니다.",
    advice:
      "이 경쟁을 성장의 발판으로 삼으세요. 자신의 의견을 명확히 하되 유연함도 잃지 마세요.",
    image: "/images/Wands/Wands05.webp",
    shortMeaning: "부딪치며 성장",
    yesNo: "Maybe",
    powerScore: 58,

    categoryInterpretations: {
      love: {
        meaning: "의견 충돌, 경쟁 구도, 감정 기복이 생길 수 있습니다.",
        advice: "이기려 하지 말고 이해하려 하세요.",
      },
      career: {
        meaning: "경쟁 환경 속에서 실력을 증명해야 합니다.",
        advice: "갈등보다 실력으로 보여주세요.",
      },
      money: {
        meaning: "지출 충돌, 경쟁적 소비를 주의해야 합니다.",
        advice: "남과 비교 소비를 줄이세요.",
      },
      mind: {
        meaning: "조급함과 예민함이 올라올 수 있습니다.",
        advice: "에너지를 생산적인 곳에 쓰세요.",
      },
      relation: {
        meaning: "말다툼이나 자존심 충돌이 생길 수 있습니다.",
        advice: "한발 물러나면 쉽게 풀립니다.",
      },
      health: {
        meaning: "스트레스, 과열, 피로 누적 주의.",
        advice: "몸과 마음의 열을 식히세요.",
      },
      future: {
        meaning: "경쟁을 통과하면 성장 기회가 옵니다.",
        advice: "충돌을 두려워 말고 배움으로 바꾸세요.",
      },
      choice: {
        meaning: "쉽진 않지만 성장 가능한 선택입니다.",
        advice: "도전 난이도까지 계산하세요.",
      },
    },
  },
  {
    id: 69,
    name: "Six of Wands (완드 6)",
    englishName: "Six of Wands",
    type: "Wands",
    number: 6,
    keywords: ["승리", "인정", "자부심", "좋은 소식"],
    meaning: "어려움을 극복하고 대중 앞에서 당당히 성공을 인정받는 시기입니다.",
    advice:
      "충분히 자부심을 가지되, 이 성공을 도와준 주변 사람들에게 감사를 표하세요.",
    image: "/images/Wands/Wands06.webp",
    shortMeaning: "당당한 승리",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning:
          "연애에서 좋은 평가를 받거나 상대에게 매력적으로 비치는 흐름입니다.",
        advice: "자신감을 가지되 상대의 마음도 함께 배려하세요.",
      },
      career: {
        meaning:
          "승진, 합격, 프로젝트 성공, 주변 인정 가능성이 높은 시기입니다.",
        advice: "성과를 당당히 보여주고 다음 목표도 준비하세요.",
      },
      money: {
        meaning: "성과 인정, 보너스, 계약 성공 등 결과로 보상받는 카드입니다.",
        advice: "지금의 성과를 다음 단계 자산으로 연결하세요.",
      },
      mind: {
        meaning: "자신감 회복과 성취감이 커지는 매우 긍정적인 흐름입니다.",
        advice: "스스로의 능력을 과소평가하지 마세요.",
      },
      relation: {
        meaning: "주변의 지지와 응원을 받기 쉽습니다.",
        advice: "도움을 준 사람들에게 감사 표현을 하세요.",
      },
      health: {
        meaning: "컨디션 회복과 활력 상승 흐름입니다.",
        advice: "좋아진 페이스를 유지하세요.",
      },
      future: {
        meaning: "좋은 결과와 인정받는 일이 다가옵니다.",
        advice: "자신 있게 앞으로 나아가세요.",
      },
      choice: {
        meaning: "성공 확률이 높은 선택입니다.",
        advice: "망설이지 말고 추진하세요.",
      },
    },
  },

  {
    id: 70,
    name: "Seven of Wands (완드 7)",
    englishName: "Seven of Wands",
    type: "Wands",
    number: 7,
    keywords: ["방어", "용기", "신념 고수", "저항"],
    meaning:
      "당신의 자리를 지키기 위해 많은 도전들에 맞서 싸워야 하는 상황입니다.",
    advice:
      "당신의 신념을 믿고 끝까지 버티세요. 유리한 고지에 있으니 포기하지 않는 것이 중요합니다.",
    image: "/images/Wands/Wands07.webp",
    shortMeaning: "끝까지 버틴다",
    yesNo: "Yes",
    powerScore: 73,

    categoryInterpretations: {
      love: {
        meaning: "관계를 지키기 위한 노력과 방어가 필요한 시기입니다.",
        advice: "오해와 외부 변수에 흔들리지 마세요.",
      },
      career: {
        meaning: "경쟁자 속에서도 자리를 지켜내는 흐름입니다.",
        advice: "실력과 자신감으로 대응하세요.",
      },
      money: {
        meaning: "재정 방어가 필요한 시기입니다.",
        advice: "불필요한 지출을 막고 자산을 지키세요.",
      },
      mind: {
        meaning: "긴장감 속에서도 의지가 강해집니다.",
        advice: "지쳤더라도 포기하지 마세요.",
      },
      relation: {
        meaning: "주변 압박이나 간섭이 있을 수 있습니다.",
        advice: "선은 분명히 그으세요.",
      },
      health: {
        meaning: "피로 누적, 긴장 상태 주의.",
        advice: "휴식과 회복 시간을 챙기세요.",
      },
      future: {
        meaning: "경쟁을 통과하면 자리를 굳힙니다.",
        advice: "지금은 수비가 중요합니다.",
      },
      choice: {
        meaning: "힘들어도 지켜야 할 선택입니다.",
        advice: "쉽게 포기하지 마세요.",
      },
    },
  },

  {
    id: 71,
    name: "Eight of Wands (완드 8)",
    englishName: "Eight of Wands",
    type: "Wands",
    number: 8,
    keywords: ["신속", "빠른 변화", "소식 전달", "진행"],
    meaning:
      "모든 일이 급격하게 진행되며 기다리던 소식이 빠르게 당도함을 의미합니다.",
    advice:
      "기회가 왔을 때 지체하지 말고 행동하세요. 지금은 속도가 핵심인 시기입니다.",
    image: "/images/Wands/Wands08.webp",
    shortMeaning: "속도전 시작",
    yesNo: "Yes",
    powerScore: 87,

    categoryInterpretations: {
      love: {
        meaning:
          "연락, 고백, 빠른 진전처럼 관계 속도가 급격히 빨라질 수 있습니다.",
        advice: "좋은 흐름일수록 타이밍을 놓치지 마세요.",
      },
      career: {
        meaning:
          "프로젝트 진척, 합격 소식, 이직 연락 등 빠른 전개가 예상됩니다.",
        advice: "준비된 사람에게 속도는 기회가 됩니다.",
      },
      money: {
        meaning: "돈의 흐름이 빨라지고 계약·거래 기회가 움직입니다.",
        advice: "속도는 필요하지만 검토는 놓치지 마세요.",
      },
      mind: {
        meaning: "답답했던 흐름이 풀리며 에너지가 움직입니다.",
        advice: "멈춰 있던 일을 바로 재시작하세요.",
      },
      relation: {
        meaning: "소통이 활발해지고 연락이 늘어납니다.",
        advice: "답장은 미루지 않는 것이 좋습니다.",
      },
      health: {
        meaning: "활동량 증가, 바쁜 일정 속 피로 주의.",
        advice: "속도 조절도 필요합니다.",
      },
      future: {
        meaning: "빠르게 판이 바뀌며 기회가 옵니다.",
        advice: "준비된 상태를 유지하세요.",
      },
      choice: {
        meaning: "지금은 빠른 선택이 유리합니다.",
        advice: "과감하게 움직이세요.",
      },
    },
  },

  {
    id: 72,
    name: "Nine of Wands (완드 9)",
    englishName: "Nine of Wands",
    type: "Wands",
    number: 9,
    keywords: ["경계", "끈기", "최후의 저력", "회복력"],
    meaning:
      "거의 다 왔습니다. 지치고 힘들지만 마지막 고비를 넘기기 위해 대비하는 상태입니다.",
    advice:
      "조금만 더 힘을 내세요. 지금까지의 경험이 당신을 보호해 줄 방패가 될 것입니다.",
    image: "/images/Wands/Wands09.webp",
    shortMeaning: "마지막 한 고비",
    yesNo: "Maybe",
    powerScore: 69,

    categoryInterpretations: {
      love: {
        meaning: "상처 경험으로 조심스러운 연애 흐름입니다.",
        advice: "경계심은 두되 마음까지 닫진 마세요.",
      },
      career: {
        meaning: "끝물 프로젝트나 마지막 고비를 버티는 시기입니다.",
        advice: "지금까지 쌓은 경험을 믿으세요.",
      },
      money: {
        meaning: "재정 압박이 있지만 버틸 힘은 있습니다.",
        advice: "지출 관리로 마지막 구간을 넘기세요.",
      },
      mind: {
        meaning: "지쳤지만 포기하지 않는 정신력입니다.",
        advice: "휴식하며 끝까지 가세요.",
      },
      relation: {
        meaning: "사람을 쉽게 믿지 못할 수 있습니다.",
        advice: "과거와 현재를 분리해 보세요.",
      },
      health: {
        meaning: "체력 저하, 누적 피로 주의.",
        advice: "회복 루틴이 필요합니다.",
      },
      future: {
        meaning: "고비를 넘기면 곧 안정됩니다.",
        advice: "조금만 더 버티세요.",
      },
      choice: {
        meaning: "힘들지만 가치 있는 선택일 수 있습니다.",
        advice: "끝까지 갈 힘이 있는지 점검하세요.",
      },
    },
  },

  {
    id: 73,
    name: "Ten of Wands (완드 10)",
    englishName: "Ten of Wands",
    type: "Wands",
    number: 10,
    keywords: ["책임감", "과부하", "압박감", "헌신"],
    meaning:
      "너무 많은 짐을 혼자 짊어지고 있어 육체적, 정신적으로 한계에 다다른 상태입니다.",
    advice:
      "모든 것을 혼자 감당하려 하지 마세요. 우선순위를 정해 짐을 나누거나 덜어내야 합니다.",
    image: "/images/Wands/Wands10.webp",
    shortMeaning: "짐이 너무 많다",
    yesNo: "No",
    powerScore: 44,

    categoryInterpretations: {
      love: {
        meaning: "관계가 의무감처럼 느껴질 수 있습니다.",
        advice: "혼자만 책임지려 하지 마세요.",
      },
      career: {
        meaning: "업무 과부하와 책임 압박이 큽니다.",
        advice: "분담과 우선순위 조정이 필요합니다.",
      },
      money: {
        meaning: "경제 부담이나 책임 지출이 늘 수 있습니다.",
        advice: "감당 가능한 범위를 정하세요.",
      },
      mind: {
        meaning: "지쳐 있고 여유가 부족한 상태입니다.",
        advice: "내려놓을 것을 정해야 합니다.",
      },
      relation: {
        meaning: "주변 부탁을 과하게 떠안을 수 있습니다.",
        advice: "거절도 필요합니다.",
      },
      health: {
        meaning: "번아웃, 허리·어깨 피로 주의.",
        advice: "무리한 일정부터 줄이세요.",
      },
      future: {
        meaning: "현재 방식은 오래가기 어렵습니다.",
        advice: "구조를 바꿔야 다음 단계로 갑니다.",
      },
      choice: {
        meaning: "부담이 큰 선택일 수 있습니다.",
        advice: "책임 범위를 먼저 계산하세요.",
      },
    },
  },
  {
    id: 74,
    name: "Page of Wands (완드 페이지)",
    englishName: "Page of Wands",
    type: "Wands",
    number: 11,
    keywords: ["탐험가", "열정적인 소식", "자유분방", "낙천적"],
    meaning:
      "새로운 모험이나 제안에 설레며 의욕이 앞서는 순수한 열정의 시기입니다.",
    advice:
      "실패를 두려워하지 말고 아이처럼 즐거운 마음으로 새로운 분야에 도전해 보세요.",
    image: "/images/Wands/Wands11_Page.webp",
    shortMeaning: "새로운 도전의 신호",
    yesNo: "Yes",
    element: "Fire",
    astrology: "Fire Messenger",
    moodTags: ["설렘", "호기심", "도전", "활기"],
    powerScore: 79,

    categoryInterpretations: {
      love: {
        meaning: "새로운 썸, 호감 표현, 가벼우면서 즐거운 만남운이 들어옵니다.",
        advice: "너무 계산하지 말고 자연스럽게 다가가 보세요.",
      },
      career: {
        meaning: "새 프로젝트, 배우는 기회, 새로운 제안이 들어올 수 있습니다.",
        advice: "처음이라도 자신 있게 시작해보세요.",
      },
      money: {
        meaning: "부업 아이디어나 작은 기회가 생길 수 있습니다.",
        advice: "가볍게 시작하되 꾸준함으로 키우세요.",
      },
      mind: {
        meaning: "답답함이 풀리고 새로운 자극을 원하게 됩니다.",
        advice: "익숙함에서 잠시 벗어나 보세요.",
      },
      relation: {
        meaning: "밝고 유쾌한 인간관계가 늘어날 수 있습니다.",
        advice: "먼저 말을 걸면 좋은 인연이 시작됩니다.",
      },
      health: {
        meaning: "활력이 살아나며 몸을 움직이고 싶어집니다.",
        advice: "가벼운 운동부터 시작해 에너지를 순환시키세요.",
      },
      future: {
        meaning: "새로운 시작이 미래 흐름을 바꾸게 됩니다.",
        advice: "작은 도전 하나가 큰 전환점이 됩니다.",
      },
      choice: {
        meaning: "새로운 길을 선택할수록 가능성이 큽니다.",
        advice: "안정보다 성장 쪽 선택이 유리합니다.",
      },
    },
  },

  {
    id: 75,
    name: "Knight of Wands (완드 나이트)",
    englishName: "Knight of Wands",
    type: "Wands",
    number: 12,
    keywords: ["에너지", "충동적", "모험심", "빠른 이동"],
    meaning:
      "목표를 향해 뜨거운 열정으로 거침없이 달려나가는 저돌적인 에너지입니다.",
    advice:
      "추진력은 좋지만 너무 서두르다 중요한 것을 놓칠 수 있으니 가끔은 속도를 조절하세요.",
    image: "/images/Wands/Wands12_Knight.webp",
    shortMeaning: "열정적으로 돌진",
    yesNo: "Yes",
    element: "Fire",
    astrology: "Sagittarius",
    moodTags: ["열정", "속도", "승부욕", "자신감"],
    powerScore: 87,

    categoryInterpretations: {
      love: {
        meaning: "강렬한 끌림, 빠른 썸, 열정적인 접근이 들어올 수 있습니다.",
        advice: "속도감은 좋지만 진정성은 꼭 확인하세요.",
      },
      career: {
        meaning: "도전 정신, 실행력, 이동·출장·변화에 강한 카드입니다.",
        advice: "기세를 살리되 마무리 관리도 중요합니다.",
      },
      money: {
        meaning: "새로운 기회를 향해 공격적으로 움직이는 시기입니다.",
        advice: "충동 투자보다 전략적 실행으로 연결하세요.",
      },
      mind: {
        meaning: "답답함을 깨고 앞으로 나아가고 싶은 힘이 강해집니다.",
        advice: "생각보다 행동이 해결책이 될 수 있습니다.",
      },
      relation: {
        meaning: "강한 존재감으로 사람들을 끌어당깁니다.",
        advice: "내 페이스만 강요하지 마세요.",
      },
      health: {
        meaning: "에너지가 넘치지만 무리수도 커질 수 있습니다.",
        advice: "과로와 부상을 주의하세요.",
      },
      future: {
        meaning: "빠른 변화와 강한 추진력이 미래를 움직입니다.",
        advice: "기회가 왔을 때 바로 잡으세요.",
      },
      choice: {
        meaning: "정체보다 전진을 택하는 것이 유리합니다.",
        advice: "준비 후 빠르게 실행하세요.",
      },
    },
  },

  {
    id: 76,
    name: "Queen of Wands (완드 퀸)",
    englishName: "Queen of Wands",
    type: "Wands",
    number: 13,
    keywords: ["자신감", "매력적", "독립심", "따뜻한 활력"],
    meaning:
      "자신감이 넘치고 주변에 긍정적인 에너지를 전파하는 매력적인 리더를 상징합니다.",
    advice:
      "당신의 매력과 능력을 믿고 당당하게 행동하세요. 당신의 밝은 기운이 답을 찾아줄 것입니다.",
    image: "/images/Wands/Wands13_Queen.webp",
    shortMeaning: "당당한 매력과 리더십",
    yesNo: "Yes",
    element: "Fire",
    astrology: "Aries",
    moodTags: ["매력", "당당함", "활력", "자존감"],
    powerScore: 90,

    categoryInterpretations: {
      love: {
        meaning: "매력 상승, 인기운, 자신감 있는 사랑 흐름입니다.",
        advice: "당신답게 행동할수록 좋은 인연이 옵니다.",
      },
      career: {
        meaning: "주도권을 잡고 사람들을 이끄는 힘이 강해집니다.",
        advice: "리더 역할을 피하지 마세요.",
      },
      money: {
        meaning: "능력과 브랜드 가치가 돈으로 연결될 수 있습니다.",
        advice: "자신의 강점을 적극 활용하세요.",
      },
      mind: {
        meaning: "자존감과 자신감이 크게 올라갑니다.",
        advice: "스스로를 작게 보지 마세요.",
      },
      relation: {
        meaning: "사람들이 자연스럽게 당신을 따르게 됩니다.",
        advice: "따뜻함을 함께 보여주면 더 강합니다.",
      },
      health: {
        meaning: "활력과 회복력이 좋은 흐름입니다.",
        advice: "꾸준한 루틴으로 컨디션을 유지하세요.",
      },
      future: {
        meaning: "당신 중심으로 판이 움직이기 시작합니다.",
        advice: "기회를 기다리지 말고 만드세요.",
      },
      choice: {
        meaning: "자신감 있는 선택이 정답에 가깝습니다.",
        advice: "남 눈치보다 내 확신을 따르세요.",
      },
    },
  },

  {
    id: 77,
    name: "King of Wands (완드 킹)",
    englishName: "King of Wands",
    type: "Wands",
    number: 14,
    keywords: ["리더십", "비전", "영감", "강력한 의지"],
    meaning:
      "자신의 비전을 실현시킬 능력을 갖춘, 카리스마 넘치는 성숙한 지도자입니다.",
    advice:
      "큰 그림을 그리며 주도적으로 상황을 이끄세요. 당신의 결단력이 승리를 가져올 것입니다.",
    image: "/images/Wands/Wands14_King.webp",
    shortMeaning: "비전을 현실로 만드는 리더",
    yesNo: "Yes",
    element: "Fire",
    astrology: "Leo",
    moodTags: ["카리스마", "결단력", "성공", "통솔력"],
    powerScore: 96,

    categoryInterpretations: {
      love: {
        meaning:
          "주도적이고 매력적인 상대, 혹은 관계를 이끄는 강한 에너지입니다.",
        advice: "카리스마만큼 배려도 함께 보여주면 더 강해집니다.",
      },
      career: {
        meaning:
          "팀장급 리더십, 창업가 정신, 강한 추진력으로 성과를 내는 시기입니다.",
        advice: "결정은 과감하게, 운영은 체계적으로 하세요.",
      },
      money: {
        meaning: "사업 감각, 리더십, 큰 그림으로 수익을 만드는 카드입니다.",
        advice: "단기보다 장기 전략으로 움직이세요.",
      },
      mind: {
        meaning: "의지력과 자신감이 최고조로 올라가는 카드입니다.",
        advice: "망설임보다 실행이 운을 끌어옵니다.",
      },
      relation: {
        meaning: "주변 사람들에게 영향력이 강해집니다.",
        advice: "강함 속에 존중을 잊지 마세요.",
      },
      health: {
        meaning: "체력과 정신력이 강한 흐름입니다.",
        advice: "과신으로 무리하지만 않으면 좋습니다.",
      },
      future: {
        meaning: "당신이 중심이 되어 큰 성과를 만들 미래입니다.",
        advice: "비전을 구체적 계획으로 전환하세요.",
      },
      choice: {
        meaning: "크게 보는 선택이 유리합니다.",
        advice: "작은 두려움보다 큰 가능성을 보세요.",
      },
    },
  },
];
