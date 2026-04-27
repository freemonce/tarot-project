import type { TarotCard } from "../types/tarot";

export const wands: TarotCard[] = [
  {
    id: 64,
    name: "Ace of Wands (완드 에이스)",
    englishName: "Ace of Wands",
    type: "Wands",
    number: 1,
    keywords: ["열정", "새로운 시작", "창의적 에너지", "영감", "발명", "직관"],
    reversedKeywords: ["의욕 저하", "지연", "공허한 열정", "시작 실패"],
    image: "/images/Wands/Wands01.webp",

    meaning:
      "새로운 프로젝트나 아이디어가 시작되는 강력한 에너지의 시기입니다.",
    advice:
      "망설이지 말고 당신의 열정을 따라 첫 발을 내딛으세요. 지금이 바로 기회입니다.",

    reversedMeaning:
      "하고 싶은 마음은 있으나 추진력이 약하거나 시작 타이밍이 어긋날 수 있습니다.",
    reversedAdvice:
      "억지로 밀어붙이기보다 왜 하고 싶은지 다시 점검하고 에너지를 재정비하세요.",

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
        advice: "생명력이 넘치고 컨디션이 정점에 도달하는 흐름입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "초반 설렘은 있으나 금방 식거나 진전이 느릴 수 있습니다.",
        advice: "순간 감정보다 지속 가능성을 보세요.",
      },
      career: {
        meaning: "아이디어는 많지만 실행력이 부족할 수 있습니다.",
        advice: "하나를 정해 끝까지 추진하세요.",
      },
      money: {
        meaning: "새 수입 계획이 지연되거나 준비 부족일 수 있습니다.",
        advice: "충동 시작보다 구조부터 점검하세요.",
      },
      mind: {
        meaning:
          "시작은 거창했으나 뒷심이 부족해지거나, 막연한 불안감에 불씨가 꺼지려 합니다.",
        advice:
          "처음 이 일을 시작하려 했던 '순수한 열정'을 다시 떠올려보세요. 동기 부여가 최우선입니다.",
      },
      relation: {
        meaning: "관계에 열정 부족이나 소극성이 나타날 수 있습니다.",
        advice: "기다리기보다 먼저 표현해보세요.",
      },
      health: {
        meaning: "체력 저하와 피로 누적이 보일 수 있습니다.",
        advice: "휴식 후 다시 리듬을 만드세요.",
      },
      future: {
        meaning: "시작이 늦어질 수 있으나 기회가 사라진 것은 아닙니다.",
        advice: "준비를 다진 뒤 재도전하세요.",
      },
      choice: {
        meaning: "지금은 즉흥적 도전보다 재정비가 유리합니다.",
        advice: "타이밍을 다시 잡으세요.",
      },
    },
  },

  {
    id: 65,
    name: "Two of Wands (완드 2)",
    englishName: "Two of Wands",
    type: "Wands",
    number: 2,
    keywords: ["계획", "확장", "미래 전망", "결정", "주도권", "해외 진출"],
    reversedKeywords: ["우유부단", "계획 차질", "소극성", "기회 놓침"],
    meaning:
      "초기의 성공을 바탕으로 더 큰 세상을 향해 계획을 세우는 단계입니다.",
    advice:
      "현재에 안주하지 말고 더 넓은 시야로 미래를 설계하며 목표를 구체화하세요.",
    image: "/images/Wands/Wands02.webp",

    reversedMeaning:
      "생각은 많지만 실행이 없거나 두려움 때문에 확장을 미루는 상태입니다.",
    reversedAdvice:
      "완벽한 준비만 기다리지 말고 작은 실행으로 흐름을 시작하세요.",

    shortMeaning: "익숙함을 넘어선 갈망",
    yesNo: "Yes",
    powerScore: 71,

    categoryInterpretations: {
      love: {
        meaning: "관계를 다음 단계로 발전시킬지 고민하는 흐름입니다.",
        advice: "미래 방향성에 대해 솔직히 이야기하세요.",
      },
      career: {
        meaning:
          "현재의 성공을 발판 삼아 더 큰 프로젝트나 해외 협력 등 확장운이 강하게 들어옵니다.",
        advice:
          "안주하지 마세요. 지금의 기술력을 더 넓은 시장이나 새로운 분야에 적용할 계획을 세우세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 미래를 두고 갈팡질팡할 수 있습니다.",
        advice:
          "상대방과의 관계에만 매몰되지 말고, 각자의 영역을 존중하며 시야를 넓히는 것이 관계 유지에 도움이 됩니다.",
      },
      career: {
        meaning: "이직·확장 계획이 지연되거나 자신감 부족이 있습니다.",
        advice: "계획을 세분화해 하나씩 실행하세요.",
      },
      money: {
        meaning: "투자 결정을 미루다 기회를 놓칠 수 있습니다.",
        advice: "과도한 고민보다 기준을 정하세요.",
      },
      mind: {
        meaning: "하고 싶은 것은 많지만 행동이 멈춘 상태입니다.",
        advice: "첫 단계만 시작해도 달라집니다.",
      },
      relation: {
        meaning: "거리만 재며 진전 없는 관계가 될 수 있습니다.",
        advice: "의도를 명확히 전하세요.",
      },
      health: {
        meaning: "루틴 계획만 있고 실천이 부족할 수 있습니다.",
        advice: "오늘 가능한 것부터 하세요.",
      },
      future: {
        meaning: "확장 기회가 늦어질 수 있습니다.",
        advice: "두려움보다 준비된 행동이 필요합니다.",
      },
      choice: {
        meaning: "보수적 선택이 안전하지만 답답할 수 있습니다.",
        advice: "위험 관리된 도전을 검토하세요.",
      },
    },
  },

  {
    id: 66,
    name: "Three of Wands (완드 3)",
    englishName: "Three of Wands",
    type: "Wands",
    number: 3,
    keywords: ["탐험", "전망", "협력", "장기적 안목", "무역", "리더십"],
    reversedKeywords: ["지연", "답보", "기대 불발", "시야 부족"],
    meaning:
      "당신의 노력이 결실을 맺기 시작하며, 더 넓은 가능성이 열리고 있습니다.",
    advice:
      "자신감을 가지고 멀리 내다보세요. 당신의 배가 곧 성과를 싣고 돌아올 것입니다.",
    image: "/images/Wands/Wands03.webp",

    reversedMeaning:
      "기대했던 결과가 늦어지거나 준비 부족으로 확장이 막힐 수 있습니다.",
    reversedAdvice:
      "조급함보다 전략 점검이 먼저입니다. 놓친 부분을 보완하세요.",

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
        meaning:
          "공통의 목표를 가진 사람들과의 유대가 깊어지며, 서로에게 든든한 조력자가 됩니다.",
        advice:
          "멀리 함께 갈 사람들을 소중히 여기고, 비전을 공유하며 관계를 확장하세요.",
      },
      health: {
        meaning: "회복세가 보이며 활력이 올라옵니다.",
        advice: "꾸준한 관리가 효과를 냅니다.",
      },
      future: {
        meaning: "기다리던 결과가 다가옵니다.",
        advice:
          "당신이 뿌린 씨앗이 자라나고 있습니다. 이제 조급함을 버리고 대범하게 결과를 기다려도 좋습니다.",
      },
      choice: {
        meaning: "확장성과 성장성이 높은 선택입니다.",
        advice: "좁은 길보다 넓은 길을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 진전이 예상보다 느릴 수 있습니다.",
        advice: "기대 속도를 낮추고 현실을 보세요.",
      },
      career: {
        meaning: "프로젝트 지연, 확장 차질 가능성이 있습니다.",
        advice: "외부 변수와 준비 상태를 점검하세요.",
      },
      money: {
        meaning: "수익 회수가 늦어질 수 있습니다.",
        advice: "단기 조급함보다 장기 흐름을 보세요.",
      },
      mind: {
        meaning: "기대 대비 현실 차이로 실망감이 생길 수 있습니다.",
        advice: "계획을 수정하면 다시 길이 열립니다.",
      },
      relation: {
        meaning: "협업이 더디거나 소통 부족이 있을 수 있습니다.",
        advice: "역할과 기대치를 명확히 하세요.",
      },
      health: {
        meaning: "회복 속도가 느리게 느껴질 수 있습니다.",
        advice: "꾸준함을 유지하세요.",
      },
      future: {
        meaning: "성과는 오지만 예상보다 늦을 수 있습니다.",
        advice: "중간 점검 후 계속 전진하세요.",
      },
      choice: {
        meaning:
          "기대했던 보상이 지연되거나 외부 환경에 의해 계획이 틀어질 수 있습니다.",
        advice: "기반을 다진 뒤 움직이세요.",
      },
    },
  },

  {
    id: 67,
    name: "Four of Wands (완드 4)",
    englishName: "Four of Wands",
    type: "Wands",
    number: 4,
    keywords: ["축하", "안정", "화합", "휴식", "귀환", "성공적 정착"],
    reversedKeywords: ["불안정", "갈등", "지연", "불화"],
    image: "/images/Wands/Wands04.webp",

    meaning: "중요한 단계를 달성하고 평화와 기쁨을 만끽하는 행복한 시기입니다.",
    advice:
      "함께 고생한 사람들과 성취를 축하하며 잠시 에너지를 재충전하는 시간을 가지세요.",

    reversedMeaning:
      "겉으로는 괜찮아 보여도 내부적으로 불안정하거나 관계의 균열이 생길 수 있습니다.",
    reversedAdvice:
      "기쁨보다 기반 점검이 먼저입니다. 관계와 환경의 균형을 다시 세우세요.",

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
        advice:
          "지금까지의 성과를 발판 삼아 팀원들과 유대감을 다지고, 기쁜 마음으로 다음 스테이지를 계획하세요.",
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
        meaning:
          "기반이 탄단해지며 평화로운 시기가 찾아옵니다. 가정이나 직장에서 안정적인 자리를 잡게 됩니다.",
        advice:
          "지금의 평화는 당신의 노력에 대한 보상입니다. 충분히 누리되, 이 안정감을 유지할 규칙을 만드세요.",
      },
      choice: {
        meaning: "안정적이고 만족도 높은 선택입니다.",
        advice: "평화와 지속성을 기준으로 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "겉보기엔 괜찮아도 감정 거리감이나 불만이 쌓일 수 있습니다.",
        advice: "작은 서운함을 넘기지 말고 대화로 풀어가세요.",
      },
      career: {
        meaning: "팀워크 흔들림이나 일정 지연 가능성이 있습니다.",
        advice: "성과보다 내부 정비에 집중하세요.",
      },
      money: {
        meaning: "안정적이던 흐름에 예상 외 지출이 생길 수 있습니다.",
        advice: "지출 구조를 다시 점검하세요.",
      },
      mind: {
        meaning:
          "집에 있으면서도 마음은 쉬고 싶지만 현실은 불안정하게 느껴질 수 있습니다.",
        advice: "휴식과 정리를 함께 병행하세요.",
      },
      relation: {
        meaning: "가까운 사람과 어색함이나 거리감이 생길 수 있습니다.",
        advice: "먼저 손 내미는 태도가 관계를 회복시킵니다.",
      },
      health: {
        meaning: "무리 후 피로 누적이나 컨디션 저하가 올 수 있습니다.",
        advice: "회복 시간을 충분히 확보하세요.",
      },
      future: {
        meaning: "좋은 흐름은 있으나 완성까지 시간이 더 필요합니다.",
        advice: "조급함보다 기반 강화가 우선입니다.",
      },
      choice: {
        meaning: "겉으로 좋아 보여도 내부 조건 확인이 필요합니다.",
        advice: "안정성을 세밀하게 따져보세요.",
      },
    },
  },

  {
    id: 68,
    name: "Five of Wands (완드 5)",
    englishName: "Five of Wands",
    type: "Wands",
    number: 5,
    keywords: ["경쟁", "갈등", "혼란", "도전", "선의의 경쟁", "시행착오"],
    reversedKeywords: ["화해", "정리", "협력", "갈등 해소"],
    image: "/images/Wands/Wands05.webp",

    meaning:
      "주변과 의견이 충돌하거나 사소한 다툼이 발생할 수 있는 역동적인 상황입니다.",
    advice:
      "이 경쟁을 성장의 발판으로 삼으세요. 자신의 의견을 명확히 하되 유연함도 잃지 마세요.",

    reversedMeaning:
      "길었던 갈등이 정리되고 경쟁 구도가 완화되며 협력의 길이 열립니다.",
    reversedAdvice: "이기려는 태도보다 조율과 소통이 더 큰 성과를 만듭니다.",

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
        advice:
          "의견 충돌은 더 나은 결과물을 위한 과정입니다. 갈등보다 실력으로 보여주세요.",
      },
      money: {
        meaning: "지출 충돌, 경쟁적 소비를 주의해야 합니다.",
        advice: "남과 비교 소비를 줄이세요.",
      },
      mind: {
        meaning:
          "생각이 많고 머릿속에서 여러 아이디어나 고민이 충돌하며 에너지가 분산되는 시기입니다.",
        advice:
          "혼란을 정리하려 애쓰기보다, 그 안에서 가장 빛나는 아이디어 하나를 먼저 선택해 집중해 보세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "갈등이 줄고 서로 이해하려는 분위기가 생깁니다.",
        advice: "화해의 타이밍을 놓치지 마세요.",
      },
      career: {
        meaning: "과열 경쟁이 끝나고 협업 체계가 잡힙니다.",
        advice: "혼자보다 팀 플레이가 유리합니다.",
      },
      money: {
        meaning: "불필요한 경쟁 소비가 줄어 안정됩니다.",
        advice: "비교보다 실속 중심으로 가세요.",
      },
      mind: {
        meaning: "예민했던 감정이 진정되며 중심을 찾습니다.",
        advice: "평온한 루틴을 유지하세요.",
      },
      relation: {
        meaning: "오해가 풀리고 관계 회복 가능성이 높습니다.",
        advice: "먼저 대화의 문을 여세요.",
      },
      health: {
        meaning: "스트레스 완화와 회복 흐름이 들어옵니다.",
        advice: "과열된 생활 패턴을 정리하세요.",
      },
      future: {
        meaning: "혼란 후 질서가 잡히며 길이 선명해집니다.",
        advice: "정리된 방향으로 꾸준히 가세요.",
      },
      choice: {
        meaning: "무리한 경쟁보다 안정적 선택이 유리합니다.",
        advice:
          "불필요한 고집을 꺾고 효율적인 합의점을 찾는 것이 가장 빠른 길입니다.",
      },
    },
  },

  {
    id: 69,
    name: "Six of Wands (완드 6)",
    englishName: "Six of Wands",
    type: "Wands",
    number: 6,
    keywords: [
      "승리",
      "인정",
      "자부심",
      "좋은 소식",
      "금의환향",
      "리더로 부상",
    ],
    reversedKeywords: ["지연", "오만", "불인정", "자신감 하락"],
    image: "/images/Wands/Wands06.webp",

    meaning: "어려움을 극복하고 대중 앞에서 당당히 성공을 인정받는 시기입니다.",
    advice:
      "충분히 자부심을 가지되, 이 성공을 도와준 주변 사람들에게 감사를 표하세요.",

    reversedMeaning:
      "성과가 늦어지거나 기대만큼 인정받지 못해 아쉬움을 느낄 수 있습니다.",
    reversedAdvice:
      "외부 평가보다 내실을 다지세요. 진짜 실력은 결국 드러납니다.",

    shortMeaning: "당당한 승리",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning:
          "주변에서 인정받는 커플이 되거나, 짝사랑이 결실을 맺는 등 연애에서 좋은 평가를 받거나 상대에게 매력적으로 비치는 흐름입니다.",
        advice: "자신감을 가지되 상대의 마음도 함께 배려하세요.",
      },
      career: {
        meaning:
          "승진, 합격, 프로젝트 성공, 주변 인정 가능성이 높은 시기입니다.",
        advice: "성과를 당당히 보여주고 다음 목표도 준비하세요.",
      },
      money: {
        meaning:
          "투자나 노력에 대한 확실한 보상이 따릅니다. 금전적 이득과 함께 사회적 명성도 올라가는 흐름입니다.",
        advice:
          "보상을 혼자 독식하기보다 주변과 작게라도 나누면 더 큰 운이 들어옵니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "인정받고 싶어하는 마음이 커져 관계 균형이 흔들릴 수 있습니다.",
        advice: "보여주기보다 진심에 집중하세요.",
      },
      career: {
        meaning: "성과 대비 평가가 부족하거나 승인이 늦어질 수 있습니다.",
        advice: "조급해하지 말고 결과물을 더 다듬으세요.",
      },
      money: {
        meaning: "성과가 기대보다 작거나 보상이 지연될 수 있습니다.",
        advice: "수익보다 장기 전략을 보세요.",
      },
      mind: {
        meaning: "자신감이 흔들리거나 인정 욕구가 커질 수 있습니다.",
        advice: "남의 평가보다 자신의 기준을 세우세요.",
      },
      relation: {
        meaning: "칭찬 부족으로 서운함을 느낄 수 있습니다.",
        advice: "기대보다 솔직한 소통이 중요합니다.",
      },
      health: {
        meaning: "회복 속도가 기대보다 느릴 수 있습니다.",
        advice: "무리한 자신감보다 현실적 관리가 필요합니다.",
      },
      future: {
        meaning: "성공은 가능하지만 시기가 늦춰질 수 있습니다.",
        advice:
          "성과가 내 손을 떠나지 않도록 끝까지 마무리 점검을 철저히 하고, 겸손함을 유지하여 적을 만들지 마세요.",
      },
      choice: {
        meaning: "좋은 선택이지만 과신은 위험합니다.",
        advice: "준비 상태를 냉정히 점검하세요.",
      },
    },
  },

  {
    id: 70,
    name: "Seven of Wands (완드 7)",
    englishName: "Seven of Wands",
    type: "Wands",
    number: 7,
    keywords: ["방어", "용기", "신념 고수", "저항", "우위", "도전받는 위치"],
    reversedKeywords: ["포기", "압박", "불리함", "자신감 저하"],
    image: "/images/Wands/Wands07.webp",

    meaning:
      "당신의 자리를 지키기 위해 많은 도전들에 맞서 싸워야 하는 상황입니다.",
    advice:
      "당신의 신념을 믿고 끝까지 버티세요. 유리한 고지에 있으니 포기하지 않는 것이 중요합니다.",

    reversedMeaning:
      "압박감이 커지고 방어선이 무너지며 자신감을 잃기 쉬운 흐름입니다.",
    reversedAdvice:
      "모든 싸움을 다 감당할 필요는 없습니다. 선택과 집중으로 힘을 아끼세요.",

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
        advice:
          "당신이 가진 강점이 공격받더라도 논리적으로 방어해낼 수 있는 실력이 있습니다. 실력과 자신감으로 대응하세요.",
      },
      money: {
        meaning: "재정 방어가 필요한 시기입니다.",
        advice: "불필요한 지출을 막고 자산을 지키세요.",
      },
      mind: {
        meaning:
          "외부의 비판이나 스스로의 의구심에 맞서 자신의 선택이 옳음을 증명하려는 의지가 강합니다.",
        advice:
          "혼란 속에서도 당신의 중심을 잃지 마세요. 당신의 확신이 곧 가장 강력한 무기입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "관계를 지키려다 지치거나 일방적으로 버티는 흐름일 수 있습니다.",
        advice: "혼자만 애쓰는 관계인지 점검하세요.",
      },
      career: {
        meaning: "경쟁 압박이 커지고 자리 유지가 버겁게 느껴질 수 있습니다.",
        advice: "무리한 정면승부보다 전략 수정이 필요합니다.",
      },
      money: {
        meaning: "예상 외 지출이나 방어 실패 가능성이 있습니다.",
        advice: "리스크 관리부터 우선하세요.",
      },
      mind: {
        meaning: "의욕 저하와 피로감이 강해질 수 있습니다.",
        advice: "잠시 쉬며 재정비하세요.",
      },
      relation: {
        meaning: "지나친 방어심리로 갈등이 커질 수 있습니다.",
        advice:
          "때로는 지는 것이 이기는 것입니다. 불필요한 자존심 싸움에서 먼저 내려오세요.",
      },
      health: {
        meaning: "스트레스 누적과 체력 저하가 보입니다.",
        advice: "회복 시간을 강제로라도 확보하세요.",
      },
      future: {
        meaning: "현재 방식만으로는 버티기 어려울 수 있습니다.",
        advice: "새로운 접근법을 찾으세요.",
      },
      choice: {
        meaning: "억지로 지키는 선택일 가능성이 있습니다.",
        advice: "고집보다 현실성을 보세요.",
      },
    },
  },

  {
    id: 71,
    name: "Eight of Wands (완드 8)",
    englishName: "Eight of Wands",
    type: "Wands",
    number: 8,
    keywords: [
      "신속",
      "빠른 변화",
      "소식 전달",
      "진행",
      "해외 소식",
      "항공 여행",
    ],
    reversedKeywords: ["지연", "혼선", "막힘", "오발"],
    image: "/images/Wands/Wands08.webp",

    meaning:
      "모든 일이 급격하게 진행되며 기다리던 소식이 빠르게 당도함을 의미합니다.",
    advice:
      "기회가 왔을 때 지체하지 말고 행동하세요. 지금은 속도가 핵심인 시기입니다.",

    reversedMeaning:
      "일이 지연되거나 방향이 꼬이며 기대했던 속도가 나오지 않을 수 있습니다.",
    reversedAdvice:
      "서두를수록 더 엉킬 수 있습니다. 흐름을 정리하고 정확하게 움직이세요.",

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
        advice:
          "정체되었던 데이터 흐름이 터지듯, 프로젝트가 급물살을 타는 시기여서 준비된 사람에게 속도는 기회가 됩니다.",
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
        meaning:
          "기다림은 끝나고 상황이 걷잡을 수 없이 빠르게 전개됩니다. 곧 결론이 날 것입니다.",
        advice:
          "변화의 속도에 당황하지 않도록 마음의 준비를 하세요. 도착한 소식에 즉각 반응해야 합니다.",
      },
      choice: {
        meaning: "지금은 빠른 선택이 유리합니다.",
        advice: "과감하게 움직이세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "연락 지연이나 타이밍 엇갈림이 생길 수 있습니다.",
        advice: "조급하게 단정 짓지 마세요.",
      },
      career: {
        meaning: "진행이 막히거나 승인·연락이 늦어질 수 있습니다.",
        advice: "속도보다 정확도를 챙기세요.",
      },
      money: {
        meaning: "거래 지연이나 판단 미스로 손해가 날 수 있습니다.",
        advice: "급한 결정은 피하세요.",
      },
      mind: {
        meaning: "하고 싶은 마음은 크지만 흐름이 꼬여 답답합니다.",
        advice: "하나씩 정리하면 다시 풀립니다.",
      },
      relation: {
        meaning: "말이 빠르게 오가며 오해가 생길 수 있습니다.",
        advice: "확인 없는 추측은 피하세요.",
      },
      health: {
        meaning: "과로, 급한 일정, 생활 리듬 붕괴 주의.",
        advice: "속도를 늦추는 것도 관리입니다.",
      },
      future: {
        meaning: "기회는 있으나 타이밍이 늦춰질 수 있습니다.",
        advice: "준비를 유지하며 기다리세요.",
      },
      choice: {
        meaning: "지금은 서두른 선택보다 재검토가 유리합니다.",
        advice: "조금 늦어도 정확히 가세요.",
      },
    },
  },

  {
    id: 72,
    name: "Nine of Wands (완드 9)",
    englishName: "Nine of Wands",
    type: "Wands",
    number: 9,
    keywords: ["경계태세", "끈기", "최후의 저력", "회복력", "뒷심", "유비무환"],
    reversedKeywords: ["탈진", "불신", "포기 직전", "과잉 경계"],
    image: "/images/Wands/Wands09.webp",

    meaning:
      "거의 다 왔습니다. 지치고 힘들지만 마지막 고비를 넘기기 위해 대비하는 상태입니다.",
    advice:
      "조금만 더 힘을 내세요. 지금까지의 경험이 당신을 보호해 줄 방패가 될 것입니다.",

    reversedMeaning:
      "지친 상태가 길어지며 의욕이 떨어지고 모든 것에 방어적으로 반응할 수 있습니다.",
    reversedAdvice: "버티기만이 답은 아닙니다. 휴식과 도움 요청도 전략입니다.",

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
        meaning:
          "과거의 상처나 실패 경험으로 인해 돌다리도 두드려 보듯 신중해진 상태지만, 결코 포기하지 않고 끝까지 자리를 지키려는 강인한 정신력입니다.",
        advice:
          "지금은 무리하게 전진하기보다, 스스로를 보호하며 마지막 고비를 넘길 에너지를 비축하세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "과거 상처로 인해 관계를 밀어낼 수 있습니다.",
        advice: "현재 사람에게 과거의 그림자를 씌우지 마세요.",
      },
      career: {
        meaning:
          "끝없는 업무와 책임감에 짓눌려 더 이상 버틸 힘이 고갈된 상태입니다.",
        advice:
          "완벽하게 끝내야 한다는 강박을 내려놓으세요. 지금은 일을 줄이거나 동료에게 권한을 위임해야 할 때입니다.",
      },
      money: {
        meaning: "버티던 재정이 지치며 압박감이 커질 수 있습니다.",
        advice: "혼자 해결하려 하지 말고 구조를 조정하세요.",
      },
      mind: {
        meaning: "예민함, 피로, 불신이 커질 수 있습니다.",
        advice: "마음의 휴식이 먼저입니다.",
      },
      relation: {
        meaning: "지나친 경계로 사람을 멀리할 수 있습니다.",
        advice: "믿을 사람과 거를 사람을 구분하세요.",
      },
      health: {
        meaning: "면역 저하, 만성 피로, 기력 저하 주의.",
        advice:
          "몸이 보내는 신호를 무시하지 마세요. 지금은 정신력으로 버틸 때가 아니라 병원을 가야 할 때입니다.",
      },
      future: {
        meaning: "완성 직전 지쳐 멈출 가능성이 있습니다.",
        advice: "속도를 줄여도 좋으니 끈을 놓지 마세요.",
      },
      choice: {
        meaning: "지금 선택은 부담이 과할 수 있습니다.",
        advice: "현재 체력과 여건을 먼저 고려하세요.",
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
    reversedKeywords: ["해방", "짐 덜기", "분담", "회복"],
    image: "/images/Wands/Wands10.webp",

    meaning:
      "너무 많은 짐을 혼자 짊어지고 있어 육체적, 정신적으로 한계에 다다른 상태입니다.",
    advice:
      "모든 것을 혼자 감당하려 하지 마세요. 우선순위를 정해 짐을 나누거나 덜어내야 합니다.",

    reversedMeaning:
      "과한 부담에서 벗어나기 시작하며 짐을 내려놓고 숨통이 트이는 흐름입니다.",
    reversedAdvice:
      "혼자 해결하려는 습관을 버리고 도움을 받아 구조를 가볍게 만드세요.",

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
        meaning:
          "강박적인 책임감으로 인해 정신적 여유가 완전히 고갈된 상태입니다. 잘해야 한다는 마음이 오히려 독이 되고 있습니다.",
        advice:
          "지금 당신에게 필요한 건 더 열심히 하는 것이 아니라, '못해도 괜찮다'고 스스로를 다독이며 짐을 내려놓는 것입니다.",
      },
      relation: {
        meaning: "주변 부탁을 과하게 떠안을 수 있습니다.",
        advice: "거절도 필요합니다.",
      },
      health: {
        meaning: "번아웃, 척추 질환·어깨 결림 등 피로 주의.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 부담이 줄고 서로 역할 균형이 맞춰질 수 있습니다.",
        advice: "혼자 짊어지지 말고 솔직히 나누세요.",
      },
      career: {
        meaning: "업무 분담이나 정리로 숨통이 트이기 시작합니다.",
        advice: "비효율 업무부터 덜어내세요.",
      },
      money: {
        meaning: "경제적 압박이 점차 완화될 수 있습니다.",
        advice: "지출 구조를 가볍게 재정비하세요.",
      },
      mind: {
        meaning: "지쳤던 마음이 회복 국면으로 들어갑니다.",
        advice: "휴식을 죄책감 없이 받아들이세요.",
      },
      relation: {
        meaning: "타인의 기대에서 벗어나 관계가 편해질 수 있습니다.",
        advice: "선 긋기가 필요합니다.",
      },
      health: {
        meaning: "과로 후 회복 흐름이 보입니다.",
        advice: "몸이 보내는 신호를 무시하지 마세요.",
      },
      future: {
        meaning: "무거운 짐을 정리하면 새 길이 열립니다.",
        advice: "줄일 것을 줄여야 전진합니다.",
      },
      choice: {
        meaning: "부담을 덜 수 있는 선택이 유리합니다.",
        advice: "책임보다 지속 가능성을 보세요.",
      },
    },
  },

  {
    id: 74,
    name: "Page of Wands (완드 페이지)",
    englishName: "Page of Wands",
    type: "Wands",
    number: 11,
    keywords: [
      "탐험가",
      "열정의 씨앗",
      "자유분방",
      "낙천적",
      "전령(메신저)",
      "새로운 아이디어",
    ],
    reversedKeywords: ["미성숙", "변덕", "지연", "의욕 저하"],
    image: "/images/Wands/Wands11_Page.webp",

    meaning:
      "새로운 모험이나 제안에 설레며 의욕이 앞서는 순수한 열정의 시기입니다.",
    advice:
      "실패를 두려워하지 말고 아이처럼 즐거운 마음으로 새로운 분야에 도전해 보세요.",

    reversedMeaning:
      "하고 싶은 마음은 많지만 집중력이 흐트러지거나 시작만 많아질 수 있습니다.",
    reversedAdvice: "열정을 흩뿌리지 말고 한 가지 목표에 에너지를 모으세요.",

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
        meaning:
          "아직 경험은 부족하지만, 새로운 기술이나 프로젝트에 대한 호기심과 열정이 최고조에 달한 시기입니다.",
        advice:
          "실수해도 괜찮은 단계입니다. 모르는 것은 당당히 묻고 배우며 당신만의 에너지를 증명하세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "호감은 있으나 가볍게 끝나거나 진정성이 부족할 수 있습니다.",
        advice: "말보다 행동을 보세요.",
      },
      career: {
        meaning: "아이디어는 많지만 실행력이 부족할 수 있습니다.",
        advice: "하나를 정해 끝까지 밀어보세요.",
      },
      money: {
        meaning: "작은 기회가 있어도 꾸준함 부족으로 놓칠 수 있습니다.",
        advice:
          "작은 돈이라도 가볍게 여기지 말고, 지출 명세서를 꼼꼼히 기록하는 습관부터 들여야 합니다.",
      },
      mind: {
        meaning: "흥미는 많지만 집중이 안 되는 상태입니다.",
        advice: "자극을 줄이고 루틴을 만드세요.",
      },
      relation: {
        meaning: "가벼운 말실수나 철없는 태도로 오해를 살 수 있습니다.",
        advice: "재미와 배려의 균형을 맞추세요.",
      },
      health: {
        meaning: "에너지 기복이 커질 수 있습니다.",
        advice: "생활 패턴을 일정하게 유지하세요.",
      },
      future: {
        meaning: "새 출발이 늦어지거나 방향이 흔들릴 수 있습니다.",
        advice: "기초 계획부터 다시 세우세요.",
      },
      choice: {
        meaning: "재미는 있지만 안정성은 낮을 수 있습니다.",
        advice: "충동 선택은 한 번 더 검토하세요.",
      },
    },
  },

  {
    id: 75,
    name: "Knight of Wands (완드 나이트)",
    englishName: "Knight of Wands",
    type: "Wands",
    number: 12,
    keywords: ["에너지", "충동적", "모험심", "빠른 진행", "이직", "이사"],
    reversedKeywords: ["성급함", "무모함", "변덕", "과열"],
    image: "/images/Wands/Wands12_Knight.webp",

    meaning:
      "목표를 향해 뜨거운 열정으로 거침없이 달려나가는 저돌적인 에너지입니다.",
    advice:
      "추진력은 좋지만 너무 서두르다 중요한 것을 놓칠 수 있으니 가끔은 속도를 조절하세요.",

    reversedMeaning:
      "열정은 강하지만 방향 없이 돌진하거나 쉽게 싫증내는 흐름입니다.",
    reversedAdvice: "속도보다 방향이 중요합니다. 시작보다 완주에 집중하세요.",

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
        advice:
          "완벽한 준비를 기다리다간 기차를 놓칩니다. 일단 출발한 뒤에 경로를 수정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "뜨겁게 시작하지만 금방 식는 관계일 수 있어 상대방에 대한 배려 없는 일방적인 돌진이나 감정적 폭발 주의.",
        advice: "감정보다 지속성을 확인하세요.",
      },
      career: {
        meaning: "의욕은 넘치나 실수가 잦거나 마무리가 약할 수 있습니다.",
        advice: "속도 조절과 체크리스트가 필요합니다.",
      },
      money: {
        meaning: "충동적 지출이나 무리한 투자 위험이 있습니다.",
        advice: "흥분한 상태에서 결정하지 마세요.",
      },
      mind: {
        meaning: "조급함과 답답함이 뒤섞여 산만해질 수 있습니다.",
        advice: "움직이기 전 방향부터 정하세요.",
      },
      relation: {
        meaning:
          "자신의 주장만 강하게 밀어붙여 주변 사람들을 지치게 하거나, 사소한 일에 불같이 화를 낼 수 있습니다.",
        advice:
          "당신의 속도가 타인에게는 폭력적으로 느껴질 수 있습니다. 한 템포 쉬어 가며 주변의 보조를 맞추세요.",
      },
      health: {
        meaning: "과로, 부주의 사고, 에너지 소진 주의.",
        advice: "쉬는 것도 전략입니다.",
      },
      future: {
        meaning: "빠른 변화는 있으나 불안정할 수 있습니다.",
        advice: "기세보다 지속 가능한 계획을 세우세요.",
      },
      choice: {
        meaning: "매력적이지만 리스크 큰 선택일 수 있습니다.",
        advice: "흥분보다 현실 검토가 우선입니다.",
      },
    },
  },

  {
    id: 76,
    name: "Queen of Wands (완드 퀸)",
    englishName: "Queen of Wands",
    type: "Wands",
    number: 13,
    keywords: ["자신감", "매력적", "독립심", "따뜻한 활력", "직관", "사교성"],
    reversedKeywords: ["질투", "자신감 저하", "변덕", "통제욕"],
    image: "/images/Wands/Wands13_Queen.webp",

    meaning:
      "자신감이 넘치고 주변에 긍정적인 에너지를 전파하는 매력적인 리더를 상징합니다.",
    advice:
      "당신의 매력과 능력을 믿고 당당하게 행동하세요. 당신의 밝은 기운이 답을 찾아줄 것입니다.",

    reversedMeaning:
      "자신감이 흔들리거나 인정 욕구가 커져 감정 기복과 예민함이 드러날 수 있습니다.",
    reversedAdvice:
      "남의 시선에 신경쓰는 감정소모보다 자신의 중심으로 자신을 아끼는 시간을 우선하세요. 비교는 에너지만 소모시킵니다.",

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
        meaning:
          "따뜻한 활력으로 주변에 사람이 모이며, 분위기 메이커 역할을 톡톡히 하게 됩니다.",
        advice: "주변을 챙기는 마음씨가 당신의 평판을 더 빛나게 해줄 것입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "질투심이나 자존감 문제로 관계가 흔들릴 수 있습니다.",
        advice: "사랑받는지 시험하지 말고 솔직히 표현하세요.",
      },
      career: {
        meaning:
          "리더십은 있으나 감정 기복으로 팀 분위기가 흔들릴 수 있습니다.",
        advice: "감정보다 기준으로 판단하세요.",
      },
      money: {
        meaning: "과시 소비나 비교 소비를 조심해야 합니다.",
        advice: "보여주기보다 실속을 챙기세요.",
      },
      mind: {
        meaning: "자신감 저하와 예민함이 동시에 올 수 있습니다.",
        advice: "내 가치를 외부 평가에 맡기지 마세요.",
      },
      relation: {
        meaning: "통제하려는 태도로 거리감이 생길 수 있습니다.",
        advice: "존중과 여유를 보여주세요.",
      },
      health: {
        meaning: "감정 스트레스로 컨디션 기복이 생길 수 있습니다.",
        advice: "휴식과 감정 정리가 필요합니다.",
      },
      future: {
        meaning: "좋은 기회 앞에서도 자신감 부족으로 망설일 수 있습니다.",
        advice: "완벽해질 때까지 기다리지 마세요.",
      },
      choice: {
        meaning: "감정에 흔들린 선택이 될 수 있습니다.",
        advice: "잠시 시간을 두고 결정하세요.",
      },
    },
  },

  {
    id: 77,
    name: "King of Wands (완드 킹)",
    englishName: "King of Wands",
    type: "Wands",
    number: 14,
    keywords: ["리더십", "비전", "영감", "불굴의 의지", "개척자", "명예"],
    reversedKeywords: ["독선", "오만", "강압", "무계획"],
    image: "/images/Wands/Wands14_King.webp",

    meaning:
      "자신의 비전을 실현시킬 능력을 갖춘, 카리스마 넘치는 성숙한 지도자입니다.",
    advice:
      "큰 그림을 그리며 주도적으로 상황을 이끄세요. 당신의 결단력이 승리를 가져올 것입니다.",

    reversedMeaning:
      "강한 추진력이 독선으로 변하거나 비전은 크지만 실행 체계가 부족할 수 있습니다.",
    reversedAdvice:
      "남의 시선에 흔들리며 에너지를 낭비하기보다, 오직 나 자신에게 집중하며 마음을 돌보는 시간을 우선하세요. 타인과의 비교는 당신의 빛을 흐릴 뿐입니다.",

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
          "강한 추진력으로 불가능해 보이던 일을 성사시키거나, 새로운 시장을 개척하는 흐름입니다.",
        advice:
          "지금은 망설일 때가 아닙니다. 당신의 직관을 믿고 팀원들에게 명확한 가이드라인을 제시하세요.",
      },
      money: {
        meaning:
          "단순한 저축보다는 투자가치가 있는 곳에 자금을 운용하는 감각이 빛나는 시기와 같은 큰 그림으로 수익을 만드는 카드입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "주도권 다툼이나 일방적 태도로 관계가 답답해질 수 있습니다.",
        advice: "이끄는 것과 지배하는 것은 다릅니다.",
      },
      career: {
        meaning: "독단적 운영, 무리한 확장, 리더 충돌 가능성이 있습니다.",
        advice: "의견 수렴과 현실 점검이 필요합니다.",
      },
      money: {
        meaning: "큰 그림만 보고 세부 관리가 약해 손실이 날 수 있습니다.",
        advice: "기초 재무 관리부터 다시 잡으세요.",
      },
      mind: {
        meaning:
          "자신감이 과해 고집이 되거나 반대로 압박감이 커질 수 있습니다.",
        advice: "유연함이 오히려 강함입니다.",
      },
      relation: {
        meaning: "강한 존재감이 부담으로 느껴질 수 있습니다.",
        advice: "존중과 경청을 함께 보여주세요.",
      },
      health: {
        meaning:
          "과로, 스트레스, 무리한 추진으로 컨디션 저하 가능성이 있습니다.",
        advice: "페이스 조절이 필요합니다.",
      },
      future: {
        meaning: "비전은 크지만 실행이 꼬이면 지연될 수 있습니다.",
        advice: "계획을 세분화해 현실화하세요.",
      },
      choice: {
        meaning:
          "아이디어는 훌륭하지만 현실적인 실행 계획이나 자원이 부족한 선택일 수 있습니다.",
        advice:
          "의욕만으로 밀어붙이기엔 리스크가 큽니다. 전문가의 조언이나 객관적인 지표를 다시 확인하세요.",
      },
    },
  },
];
