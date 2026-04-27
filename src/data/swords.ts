import type { TarotCard } from "../types/tarot";

export const swords: TarotCard[] = [
  {
    id: 50,
    name: "Ace of Swords (소드 에이스)",
    englishName: "Ace of Swords",
    type: "Swords",
    number: 1,
    keywords: ["결단", "승리", "명확함", "새로운 아이디어", "권위", "정의"],
    reversedKeywords: ["혼란", "오판", "말실수", "지연"],
    meaning:
      "정신적인 명확함과 강력한 의지로 새로운 돌파구를 찾아내는 시기입니다.",
    advice:
      "복잡한 생각은 버리고 논리적이고 객관적인 판단으로 과감하게 결정하세요.",
    reversedMeaning:
      "생각은 많지만 정리가 되지 않아 판단이 흐려지고 결정이 늦어질 수 있습니다.",
    reversedAdvice:
      "내 생각은 옳지만 전달 방식이 너무 날카롭지는 않은지 점검하세요.",
    image: "/images/Swords/Swords01.webp",
    shortMeaning: "명확한 판단과 강한 결단",
    yesNo: "Yes",
    powerScore: 89,

    categoryInterpretations: {
      love: {
        meaning: "애매했던 관계가 분명해지고 솔직한 대화가 이루어집니다.",
        advice: "감추지 말고 진심을 정확히 전달하세요.",
      },
      career: {
        meaning:
          "명확한 비전과 아이디어로 난관을 극복하고 주도권을 잡게 됩니다.",
        advice:
          "지금은 겸손보다 전문성을 바탕으로 한 자신감이 필요합니다. 확실하게 밀어붙이세요.",
      },
      money: {
        meaning: "냉정한 판단으로 재정 개선 기회가 생깁니다.",
        advice: "감정 소비를 줄이고 계획적으로 움직이세요.",
      },
      mind: {
        meaning: "머리가 맑아지고 판단력이 상승합니다.",
        advice: "미뤄둔 결정을 지금 내리세요.",
      },
      relation: {
        meaning: "오해가 풀리거나 진실이 드러납니다.",
        advice: "돌려 말하지 말고 명확하게 표현하세요.",
      },
      health: {
        meaning: "집중력과 정신 에너지가 회복됩니다.",
        advice: "수면 패턴을 정리하면 더 좋아집니다.",
      },
      future: {
        meaning: "막혀 있던 일이 뚫리며 새 방향이 열립니다.",
        advice: "결단을 미루지 마세요.",
      },
      choice: {
        meaning: "이성적이고 현실적인 선택이 정답입니다.",
        advice: "감정보다 데이터와 사실을 보세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "말이 엇갈리거나 오해가 커질 수 있습니다.",
        advice: "감정적으로 말하지 말고 차분히 설명하세요.",
      },
      career: {
        meaning: "판단 미스나 계획 지연이 생길 수 있습니다.",
        advice: "중요 결정은 재검토하세요.",
      },
      money: {
        meaning: "잘못된 정보로 손해 볼 수 있습니다.",
        advice: "계약·투자 전 다시 확인하세요.",
      },
      mind: {
        meaning: "생각이 복잡하고 집중이 흐려집니다.",
        advice: "우선순위를 하나씩 정리하세요.",
      },
      relation: {
        meaning: "오해와 날카로운 말다툼 가능성이 있습니다.",
        advice: "즉흥 반응보다 경청이 필요합니다.",
      },
      health: {
        meaning: "두통·과로·신경 피로가 누적될 수 있습니다.",
        advice: "휴식과 디지털 디톡스가 도움 됩니다.",
      },
      future: {
        meaning: "진행이 늦어지지만 재정비 기회입니다.",
        advice: "방향 수정 후 다시 출발하세요.",
      },
      choice: {
        meaning: "지금 선택은 정보 부족 가능성이 큽니다.",
        advice: "판단을 잠시 미루고 확인하세요.",
      },
    },
  },

  {
    id: 51,
    name: "Two of Swords (소드 2)",
    englishName: "Two of Swords",
    type: "Swords",
    number: 2,
    keywords: ["교착 상태", "결정 장애", "회피", "팽팽한 균형", "정보 차단"],
    reversedKeywords: ["결정", "진실 직면", "균형 붕괴", "압박"],
    meaning:
      "두 가지 선택지 사이에서 눈을 가린 채 결정을 내리지 못하고 고민하는 상태입니다.",
    advice:
      "회피한다고 해결되지 않습니다. 감정을 배제하고 사실 관계를 파악해 결단을 내려야 합니다.",
    reversedMeaning:
      "더 이상 미룰 수 없는 상황이 오며 숨겨둔 문제가 드러날 수 있습니다.",
    reversedAdvice:
      "감당하기 힘든 진실이 한꺼번에 쏟아질 수 있으므로 불편하더라도 현실을 직면하고 결정을 내려야 흐름이 움직입니다.",
    image: "/images/Swords/Swords02.webp",
    shortMeaning: "결정을 미루는 교착 상태",
    yesNo: "Maybe",
    powerScore: 63,

    categoryInterpretations: {
      love: {
        meaning: "관계에서 마음을 정하지 못하거나 정체된 흐름입니다.",
        advice: "애매한 상태를 오래 끌지 마세요.",
      },
      career: {
        meaning: "방향성 문제로 결론이 늦어질 수 있습니다.",
        advice: "우선순위를 정하세요.",
      },
      money: {
        meaning: "현실적인 선택 앞에서 판단을 미루고 있습니다.",
        advice: "손익 기준을 세우세요.",
      },
      mind: {
        meaning:
          "감정에 휩쓸리지 않으려 마음을 닫고 평정을 유지하려 애쓰는 중입니다.",
        advice:
          "일시적인 평화일 뿐입니다. 마음의 빗장을 열고 무엇이 두려운지 들여다보세요.",
      },
      relation: {
        meaning: "서로 눈치만 보는 관계입니다.",
        advice: "누군가는 먼저 입을 열어야 합니다.",
      },
      health: {
        meaning: "스트레스로 긴장감이 높습니다.",
        advice: "마음 정리가 필요합니다.",
      },
      future: {
        meaning: "결정 전까지 흐름이 멈춰 있습니다.",
        advice: "미루는 것도 선택임을 기억하세요.",
      },
      choice: {
        meaning: "아직 추가 정보가 필요합니다.",
        advice: "보고 싶지 않은 진실이 무엇인지 직면할 용기가 필요합니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 방향이 곧 정리될 가능성이 큽니다.",
        advice: "회피 대신 솔직한 결론을 내리세요.",
      },
      career: {
        meaning: "결단 압박이 커지고 빠른 선택이 필요합니다.",
        advice: "미루던 문제를 처리하세요.",
      },
      money: {
        meaning: "지연되던 재정 문제가 드러날 수 있습니다.",
        advice: "수입·지출 구조를 현실적으로 점검하세요.",
      },
      mind: {
        meaning: "내적 갈등이 커져 피로해질 수 있습니다.",
        advice: "한 번에 다 해결하려 하지 마세요.",
      },
      relation: {
        meaning: "감춰진 불만이 터질 수 있습니다.",
        advice: "정중하지만 솔직하게 말하세요.",
      },
      health: {
        meaning: "스트레스성 불면·긴장이 심해질 수 있습니다.",
        advice: "휴식 루틴을 만들세요.",
      },
      future: {
        meaning: "결정 후에야 길이 열립니다.",
        advice: "지금은 행동할 타이밍입니다.",
      },
      choice: {
        meaning: "더 미루면 손해가 커질 수 있습니다.",
        advice: "지금 가능한 최선안을 택하세요.",
      },
    },
  },

  {
    id: 52,
    name: "Three of Swords (소드 3)",
    englishName: "Three of Swords",
    type: "Swords",
    number: 3,
    keywords: ["마음 상함", "이별", "슬픔", "비판", "삼각 관계", "트라우마"],
    reversedKeywords: ["치유", "회복", "용서", "상처 정리"],
    meaning:
      "정신적인 충격이나 감정적인 상처로 인해 마음이 아픈 시기를 겪을 수 있습니다.",
    advice:
      "아픔을 외면하지 말고 충분히 슬퍼하되, 이를 통해 성장의 계기로 삼으세요.",
    reversedMeaning:
      "상처가 서서히 회복되며 감정 정리와 치유가 시작되는 흐름입니다.",
    reversedAdvice:
      "과거를 붙잡기보다 회복에 집중하세요. 용서가 해방이 될 수 있습니다.",
    image: "/images/Swords/Swords03.webp",
    shortMeaning: "상처를 통해 배우는 시기",
    yesNo: "No",
    powerScore: 45,

    categoryInterpretations: {
      love: {
        meaning:
          "가슴 아픈 소식을 듣거나 깊은 상처를 받는 갈등이 생길 수 있습니다.",
        advice:
          "상처를 덮어두면 덧납니다. 지금은 아픔을 충분히 표현하고 치유하는 시간을 가지세요.",
      },
      career: {
        meaning: "직장 내 갈등과 스트레스가 누적될 수 있습니다.",
        advice: "감정 소모를 줄이세요.",
      },
      money: {
        meaning: "기대 수익이 어긋날 수 있습니다.",
        advice: "현실적으로 재정비하세요.",
      },
      mind: {
        meaning: "상처받은 기억으로 예민해질 수 있습니다.",
        advice:
          "자책하는 생각의 칼날을 멈추고, 자신에게 다정한 언어를 사용하세요.",
      },
      relation: {
        meaning: "인간관계 실망감이 드러납니다.",
        advice: "거리 둘 관계는 구분하세요.",
      },
      health: {
        meaning: "무기력과 피로가 올 수 있습니다.",
        advice: "휴식이 중요합니다.",
      },
      future: {
        meaning: "아픈 경험 뒤 성장이 찾아옵니다.",
        advice: "상처를 교훈으로 바꾸세요.",
      },
      choice: {
        meaning: "감정적으로 불리한 선택일 수 있습니다.",
        advice: "안정 후 다시 판단하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 상처가 회복되거나 화해 가능성이 있습니다.",
        advice: "과거 감정을 정리하세요.",
      },
      career: {
        meaning: "갈등 국면이 완화됩니다.",
        advice:
          "실패 원인을 분석하되 비난의 대상을 찾기보다 시스템 개선에 집중하세요.",
      },
      money: {
        meaning: "손실 회복의 기회가 생길 수 있습니다.",
        advice: "무리한 만회 심리는 피하세요.",
      },
      mind: {
        meaning: "마음이 조금씩 가벼워집니다.",
        advice: "회복 속도를 존중하세요.",
      },
      relation: {
        meaning: "오해가 풀리고 관계가 정리됩니다.",
        advice: "용서할 건 용서하고 끊을 건 끊으세요.",
      },
      health: {
        meaning: "스트레스 회복세가 시작됩니다.",
        advice: "생활 리듬을 회복하세요.",
      },
      future: {
        meaning: "힘든 시기를 지나 새 흐름이 옵니다.",
        advice: "과거보다 앞으로 집중하세요.",
      },
      choice: {
        meaning: "이전 실패를 반영하면 좋은 선택이 가능합니다.",
        advice: "같은 패턴만 반복하지 마세요.",
      },
    },
  },

  {
    id: 53,
    name: "Four of Swords (소드 4)",
    englishName: "Four of Swords",
    type: "Swords",
    number: 4,
    keywords: ["휴식", "회복", "명상", "은둔", "사고의 정리"],
    reversedKeywords: ["번아웃", "불안", "휴식 부족", "재가동"],
    meaning:
      "치열한 상황에서 잠시 벗어나 몸과 마음을 재충전해야 하는 시기입니다.",
    advice:
      "지금은 행동할 때가 아니라 에너지를 모을 때입니다. 충분히 쉬면서 다음 단계를 구상하세요.",
    reversedMeaning:
      "쉬어야 할 시기를 놓쳤거나, 너무 오래 멈춰 다시 움직여야 하는 상황입니다.",
    reversedAdvice:
      "회복이 먼저인지 행동이 먼저인지 구분하세요. 무리한 재출발은 피해야 합니다.",
    image: "/images/Swords/Swords04.webp",
    shortMeaning: "멈춤과 회복의 시간",
    yesNo: "Maybe",
    powerScore: 70,

    categoryInterpretations: {
      love: {
        meaning: "관계에 잠시 거리 두기나 휴식이 필요합니다.",
        advice: "억지로 진전시키려 하지 마세요.",
      },
      career: {
        meaning: "잠시 숨 고르기와 재정비 시기입니다.",
        advice: "무리한 확장보다 체력 회복이 우선입니다.",
      },
      money: {
        meaning: "큰 변화 없이 안정적 정체 상태입니다.",
        advice: "지출 관리하며 다음 기회를 준비하세요.",
      },
      mind: {
        meaning: "과로한 정신이 휴식을 요구합니다.",
        advice:
          "아무것도 하지 않는 것이 가장 생산적인 활동일 때가 있어서 혼자만의 시간을 충분히 가지세요.",
      },
      relation: {
        meaning: "조용히 정리할 시간이 필요합니다.",
        advice: "불필요한 만남은 줄여도 됩니다.",
      },
      health: {
        meaning:
          "충분한 수면과 휴식이 필요한 신호입니다. 면역력이 떨어졌을 수 있습니다.",
        advice:
          "스마트폰을 끄고 완벽한 어둠 속에서 휴식하는 시간을 의도적으로 만드세요.",
      },
      future: {
        meaning: "멈춘 듯 보여도 내부 준비가 진행됩니다.",
        advice: "조급함을 내려놓으세요.",
      },
      choice: {
        meaning: "지금은 선택보다 보류가 낫습니다.",
        advice: "조금 더 쉬고 판단하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "거리 두기가 길어져 소원해질 수 있습니다.",
        advice: "침묵만 이어가지 말고 의사를 표현하세요.",
      },
      career: {
        meaning: "번아웃 상태이거나 다시 업무 복귀 압박이 큽니다.",
        advice:
          "준비가 덜 된 상태에서의 업무 복귀 관련 속도보다 회복 상태를 점검하세요.",
      },
      money: {
        meaning: "쉬는 동안 재정 관리가 느슨해질 수 있습니다.",
        advice: "현실 점검표를 다시 세우세요.",
      },
      mind: {
        meaning: "쉬어도 개운하지 않고 불안이 남아 있습니다.",
        advice: "환경 전환과 루틴 재정비가 필요합니다.",
      },
      relation: {
        meaning: "혼자만의 시간이 길어져 단절감이 생길 수 있습니다.",
        advice: "가벼운 연락부터 다시 시작하세요.",
      },
      health: {
        meaning: "피로 누적, 수면 질 저하 가능성이 있습니다.",
        advice: "생활 리듬을 우선 회복하세요.",
      },
      future: {
        meaning: "멈춤이 끝나고 다시 움직일 시점입니다.",
        advice: "준비된 것부터 작게 시작하세요.",
      },
      choice: {
        meaning: "더 미루면 기회를 놓칠 수 있습니다.",
        advice: "충분히 쉬었다면 실행을 택하세요.",
      },
    },
  },

  {
    id: 54,
    name: "Five of Swords (소드 5)",
    englishName: "Five of Swords",
    type: "Swords",
    number: 5,
    keywords: [
      "패배감",
      "이기적인 승리",
      "갈등",
      "불명예",
      "가스라이팅",
      "비겁한 수단",
    ],
    reversedKeywords: ["화해", "후회", "갈등 종료", "반성"],
    meaning:
      "갈등에서 승리했을지라도 상처뿐인 영광이거나 주변 사람을 잃을 수 있는 상황입니다.",
    advice:
      "이기는 것보다 중요한 것이 무엇인지 생각해보세요. 불필요한 논쟁은 피하는 것이 상책입니다.",
    reversedMeaning:
      "소모적인 갈등이 끝나가며 후회와 반성을 통해 관계를 정리하는 흐름입니다.",
    reversedAdvice:
      "자존심보다 회복을 택하세요. 사과할 골든타임을 놓치지 마세요.",
    image: "/images/Swords/Swords05.webp",
    shortMeaning: "이겨도 남는 상처",
    yesNo: "No",
    powerScore: 48,

    categoryInterpretations: {
      love: {
        meaning: "자존심 싸움, 말다툼, 감정 소모가 큽니다.",
        advice: "승부욕보다 관계 회복을 우선하세요.",
      },
      career: {
        meaning: "직장 내 경쟁과 갈등이 심해질 수 있습니다.",
        advice: "불필요한 대립은 피하세요.",
      },
      money: {
        meaning: "손해 보는 거래나 경쟁적 소비를 주의해야 합니다.",
        advice: "감정적으로 돈 쓰지 마세요.",
      },
      mind: {
        meaning: "예민하고 공격적인 심리가 올라옵니다.",
        advice: "잠시 물러나는 것도 전략입니다.",
      },
      relation: {
        meaning:
          "서로에게 상처를 주는 날카로운 대화로 주변 사람들까지 등 돌리게 할 수 있습니다.",
        advice:
          "옳고 그름을 따지기보다 이 논쟁이 내일의 관계에 도움이 될지 생각해보세요.",
      },
      health: {
        meaning: "스트레스성 두통, 긴장감 주의.",
        advice: "과한 경쟁 환경에서 벗어나세요.",
      },
      future: {
        meaning: "갈등을 정리해야 다음 단계로 갑니다.",
        advice: "이기려는 태도를 내려놓으세요.",
      },
      choice: {
        meaning: "지금 선택은 대가가 클 수 있습니다.",
        advice: "지금은 지는 것이 이기는 길일 수도 있습니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "다툼 후 화해 가능성이 있습니다.",
        advice: "누가 이겼는지보다 무엇이 필요한지 보세요.",
      },
      career: {
        meaning: "직장 갈등이 완화되거나 정리됩니다.",
        advice: "감정 잔여물은 남기지 마세요.",
      },
      money: {
        meaning: "손해 패턴을 끊고 재정비할 수 있습니다.",
        advice: "경쟁 심리 소비를 멈추세요.",
      },
      mind: {
        meaning: "날카로움이 줄고 후회가 남을 수 있습니다.",
        advice: "스스로를 지나치게 탓하지 마세요.",
      },
      relation: {
        meaning: "멀어진 관계를 다시 풀 기회가 있습니다.",
        advice: "진심 어린 대화가 필요합니다.",
      },
      health: {
        meaning: "긴장이 풀리며 회복세가 옵니다.",
        advice: "스트레스 해소 습관을 만드세요.",
      },
      future: {
        meaning: "갈등 종료 후 새 출발이 가능합니다.",
        advice: "과거 싸움을 반복하지 마세요.",
      },
      choice: {
        meaning: "싸우지 않는 선택이 더 유리합니다.",
        advice: "체면보다 실리를 보세요.",
      },
    },
  },

  {
    id: 55,
    name: "Six of Swords (소드 6)",
    englishName: "Six of Swords",
    type: "Swords",
    number: 6,
    keywords: ["이동", "회복", "전환", "조력자", "여행/출장"],
    reversedKeywords: ["정체", "과거 집착", "지연", "미련"],
    meaning: "힘든 상황을 벗어나 더 나은 방향으로 천천히 이동하는 시기입니다.",
    advice: "급하게 결과를 내기보다 현재의 변화 흐름을 믿고 차분히 나아가세요.",
    reversedMeaning:
      "떠나야 할 곳에 머물거나 과거 문제를 놓지 못해 전환이 지연되는 상태입니다.",
    reversedAdvice:
      "익숙한 불편함에 머무르지 마세요. 변화는 불안해도 필요할 수 있습니다.",
    image: "/images/Swords/Swords06.webp",
    shortMeaning: "고난을 지나 회복으로",
    yesNo: "Yes",
    powerScore: 62,

    categoryInterpretations: {
      love: {
        meaning: "갈등이 줄어들고 관계가 안정 단계로 이동합니다.",
        advice: "과거 문제를 반복하지 말고 새 흐름을 만드세요.",
      },
      career: {
        meaning:
          "힘들었던 프로젝트나 부서에서 벗어나 점차 안정적인 환경으로 옮겨가게 됩니다.",
        advice:
          "당장 큰 성공은 아니더라도 올바른 방향으로 가고 있으니 안심하고 나아가세요.",
      },
      money: {
        meaning: "재정 문제가 서서히 정리되며 안정세로 갑니다.",
        advice: "무리한 투자보다 회복 중심 전략이 좋습니다.",
      },
      mind: {
        meaning: "불안이 줄고 마음이 점차 평온해집니다.",
        advice: "회복에는 시간이 필요하니 조급해하지 마세요.",
      },
      relation: {
        meaning: "불편했던 관계에서 거리 조절이나 화해가 가능합니다.",
        advice: "억지 관계보다 편안한 관계를 선택하세요.",
      },
      health: {
        meaning: "컨디션이 천천히 회복되는 흐름입니다.",
        advice: "휴식과 생활 리듬 회복에 집중하세요.",
      },
      future: {
        meaning: "앞으로 상황이 지금보다 분명히 나아집니다.",
        advice: "방향 전환을 받아들이면 운이 풀립니다.",
      },
      choice: {
        meaning: "현재 자리를 고집하기보다 이동이 유리합니다.",
        advice: "익숙함보다 성장 가능성을 선택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "과거 갈등을 놓지 못해 진전이 늦어집니다.",
        advice: "지난 문제를 반복 소환하지 마세요.",
      },
      career: {
        meaning: "이직·이동이 지연되거나 망설임이 큽니다.",
        advice: "준비를 끝냈다면 실행 시점을 잡으세요.",
      },
      money: {
        meaning: "재정 회복 속도가 느릴 수 있습니다.",
        advice: "조급한 만회 전략은 피하세요.",
      },
      mind: {
        meaning: "떠나고 싶지만 미련이 남아 흔들립니다.",
        advice: "지금의 감정보다 장기 행복을 보세요.",
      },
      relation: {
        meaning: "불편한 관계를 끊지 못하고 이어갈 수 있습니다.",
        advice: "거리 조절도 중요한 선택입니다.",
      },
      health: {
        meaning: "회복이 더디거나 생활 습관이 다시 무너질 수 있습니다.",
        advice: "기본 루틴부터 재정비하세요.",
      },
      future: {
        meaning: "변화는 오지만 늦어질 수 있습니다.",
        advice: "머뭇거림을 줄이면 흐름이 빨라집니다.",
      },
      choice: {
        meaning: "이동이 맞지만 아직 결심이 부족합니다.",
        advice: "미련보다 성장 가능성을 택하세요.",
      },
    },
  },

  {
    id: 56,
    name: "Seven of Swords (소드 7)",
    englishName: "Seven of Swords",
    type: "Swords",
    number: 7,
    keywords: ["속임수", "전략", "은밀함", "회피", "임기응변", "불완전한 승리"],
    reversedKeywords: ["고백", "진실", "들통", "정면대응"],
    meaning: "정면 돌파보다 우회 전략을 택하거나 숨기는 것이 있는 상황입니다.",
    advice: "잔꾀보다 정직한 방식이 결국 더 큰 신뢰를 만듭니다.",
    reversedMeaning:
      "숨겨왔던 사실이 드러나거나 더 이상 회피할 수 없어 정면으로 마주해야 하는 흐름입니다.",
    reversedAdvice:
      "플랜 B를 가동하기보다 지금이라도 상황을 투명하게 공유하는 것이 피해를 최소화하는 길입니다.",
    image: "/images/Swords/Swords07.webp",
    shortMeaning: "숨김과 전략의 카드",
    yesNo: "Maybe",
    powerScore: 51,

    categoryInterpretations: {
      love: {
        meaning: "비밀스러운 관계나 속마음을 숨기는 흐름입니다.",
        advice: "애매함보다 솔직함이 관계를 살립니다.",
      },
      career: {
        meaning: "경쟁 속 정보전이나 눈치 싸움이 생길 수 있습니다.",
        advice:
          "협업보다 혼자 처리하는 것이 효율적일 수 있으나, 나중에 책임 소재가 불분명해지지 않도록 주의하세요",
      },
      money: {
        meaning:
          "수익을 얻더라도 예상보다 적거나, 거래 과정에서 석연치 않은 구석이 있을 수 있습니다.",
        advice:
          "세부 조항을 꼼꼼히 확인하고, '공짜 점심'은 없다는 사실을 명심하세요.",
      },
      mind: {
        meaning: "회피 심리와 불신이 커질 수 있습니다.",
        advice: "문제를 미루지 말고 직접 다루세요.",
      },
      relation: {
        meaning: "신뢰 문제나 뒤에서 말이 나올 수 있습니다.",
        advice: "오해 살 행동은 피하세요.",
      },
      health: {
        meaning: "스트레스 누적, 신경 예민 상태입니다.",
        advice: "휴식 없이 버티는 습관을 멈추세요.",
      },
      future: {
        meaning: "불확실한 흐름이 이어질 수 있습니다.",
        advice: "투명한 선택이 미래를 안정시킵니다.",
      },
      choice: {
        meaning: "쉬운 길처럼 보여도 대가가 따를 수 있습니다.",
        advice: "정면 승부가 더 좋은 결과를 줍니다.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "숨겼던 마음이 드러나며 관계 방향이 분명해집니다.",
        advice: "밀당보다 진심 어린 대화가 필요합니다.",
      },
      career: {
        meaning: "편법이나 비효율 구조가 드러날 수 있습니다.",
        advice: "정석적인 방식으로 다시 정비하세요.",
      },
      money: {
        meaning: "숨은 비용이나 놓친 문제가 발견됩니다.",
        advice: "재정 상태를 투명하게 점검하세요.",
      },
      mind: {
        meaning: "도망치던 문제를 마주할 용기가 생깁니다.",
        advice: "회피를 끝내면 마음도 가벼워집니다.",
      },
      relation: {
        meaning: "오해가 풀리거나 진실이 밝혀집니다.",
        advice: "숨기기보다 설명하는 태도를 가지세요.",
      },
      health: {
        meaning: "방치했던 몸 상태를 점검해야 할 시기입니다.",
        advice: "늦기 전에 검사와 관리에 나서세요.",
      },
      future: {
        meaning: "불안정했던 흐름이 점차 정리됩니다.",
        advice: "정직한 선택이 좋은 결과를 만듭니다.",
      },
      choice: {
        meaning: "우회보다 정면 돌파가 유리합니다.",
        advice: "떳떳한 길을 고르세요.",
      },
    },
  },

  {
    id: 57,
    name: "Eight of Swords (소드 8)",
    englishName: "Eight of Swords",
    type: "Swords",
    number: 8,
    keywords: ["제한", "고립", "두려움", "무력감", "피해망상", "착각"],
    reversedKeywords: ["해방", "각성", "용기", "탈출"],
    meaning:
      "스스로 만든 생각의 틀에 갇혀 움직이지 못한다고 느끼는 상태입니다.",
    advice:
      "현실보다 두려움이 더 크게 보일 수 있습니다. 작은 행동부터 시작하세요.",
    reversedMeaning:
      "답답했던 상황에서 벗어날 실마리를 찾고 스스로를 제한하던 생각을 끊어내는 시기입니다.",
    reversedAdvice:
      "완벽히 준비될 때까지 기다리지 말고 지금 가능한 행동부터 시작하세요.",
    image: "/images/Swords/Swords08.webp",
    shortMeaning: "갇힌 건 생각일 수 있다",
    yesNo: "No",
    powerScore: 44,

    categoryInterpretations: {
      love: {
        meaning: "눈치 보며 답답한 관계가 이어질 수 있습니다.",
        advice: "상대보다 내 감정부터 분명히 하세요.",
      },
      career: {
        meaning:
          "역량이 충분함에도 환경 탓이나 타인의 시선 때문에 스스로 한계를 짓고 있습니다.",
        advice:
          "주변의 제약은 생각보다 크지 않습니다. 일단 한 걸음만 내디뎌보세요.",
      },
      money: {
        meaning: "돈 걱정만 하고 실행은 멈춘 상태입니다.",
        advice: "작은 절약과 계획부터 시작하세요.",
      },
      mind: {
        meaning: "부정적 생각이 자신을 가두고 있습니다.",
        advice:
          "당신을 묶은 밧줄은 느슨합니다. 눈가리개만 벗으면 언제든 걸어 나갈 수 있다는 사실을 기억하세요.",
      },
      relation: {
        meaning: "관계 속 위축감이나 소외감이 느껴집니다.",
        advice: "참기만 하지 말고 표현하세요.",
      },
      health: {
        meaning: "긴장성 피로와 무기력이 올 수 있습니다.",
        advice: "몸을 움직이며 정체 에너지를 푸세요.",
      },
      future: {
        meaning: "현재 패턴을 깨야 미래가 열립니다.",
        advice: "두려움을 기준으로 결정하지 마세요.",
      },
      choice: {
        meaning: "소극적 선택은 같은 문제를 반복시킵니다.",
        advice: "작더라도 변화 쪽을 선택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "답답했던 관계가 풀리거나 표현이 시작됩니다.",
        advice: "이제는 솔직하게 마음을 전하세요.",
      },
      career: {
        meaning: "막혔던 업무 흐름이 서서히 해결됩니다.",
        advice: "주저하지 말고 기회를 잡으세요.",
      },
      money: {
        meaning: "재정 압박에서 벗어날 방법이 보입니다.",
        advice: "작은 개선부터 실행하세요.",
      },
      mind: {
        meaning: "자신을 묶던 생각에서 깨어납니다.",
        advice: "가능성을 스스로 막지 마세요.",
      },
      relation: {
        meaning: "거리감 있던 관계가 회복될 수 있습니다.",
        advice: "먼저 손 내미는 용기가 필요합니다.",
      },
      health: {
        meaning: "무기력에서 점차 회복 흐름이 생깁니다.",
        advice: "규칙적인 움직임을 시작하세요.",
      },
      future: {
        meaning: "정체된 흐름이 다시 움직이기 시작합니다.",
        advice: "변화를 두려워하지 마세요.",
      },
      choice: {
        meaning: "새로운 선택지가 열립니다.",
        advice: "익숙함보다 자유를 주는 길을 택하세요.",
      },
    },
  },

  {
    id: 58,
    name: "Nine of Swords (소드 9)",
    englishName: "Nine of Swords",
    type: "Swords",
    number: 9,
    keywords: ["걱정", "불면", "스트레스", "죄책감", "과도한 책임감", "우울감"],
    reversedKeywords: ["회복", "안도", "치유", "걱정 완화"],
    meaning: "걱정과 압박감으로 마음이 무거워진 시기입니다.",
    advice: "혼자 감당하지 말고 말로 꺼내는 순간 부담은 줄어듭니다.",
    reversedMeaning:
      "끝없이 커지던 불안에서 벗어나며 치유와 안정의 흐름이 시작됩니다.",
    reversedAdvice:
      "이제 머릿속의 칼날을 내려놓으세요. 당신은 스스로 생각하는 것보다 훨씬 더 안전합니다.",
    image: "/images/Swords/Swords09.webp",
    shortMeaning: "생각이 만든 밤의 불안",
    yesNo: "No",
    powerScore: 39,

    categoryInterpretations: {
      love: {
        meaning: "연애 문제로 혼자 과하게 걱정할 수 있습니다.",
        advice: "상상보다 대화가 필요합니다.",
      },
      career: {
        meaning: "실수 압박, 평가 스트레스가 큽니다.",
        advice: "완벽주의를 조금 내려놓으세요.",
      },
      money: {
        meaning: "재정 걱정이 커질 수 있습니다.",
        advice: "막연함보다 숫자로 정리하세요.",
      },
      mind: {
        meaning: "불안과 예민함이 최고조에 이릅니다.",
        advice:
          "해 뜨기 직전이 가장 어둡습니다. 지금의 고통은 끝이 보이지 않는 터널이 아니라 곧 지나갈 밤일 뿐입니다.",
      },
      relation: {
        meaning: "혼자 오해를 키우기 쉽습니다.",
        advice: "직접 확인하세요.",
      },
      health: {
        meaning: "불면, 두통, 신경성 피로 주의.",
        advice: "생활 루틴을 안정시키세요.",
      },
      future: {
        meaning: "지금의 불안은 영원하지 않습니다.",
        advice: "버티기보다 도움을 요청하세요.",
      },
      choice: {
        meaning: "두려움 기반 선택은 후회를 남깁니다.",
        advice: "현실 데이터를 보고 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "괜한 걱정이 줄고 관계가 안정됩니다.",
        advice: "상대를 믿고 현재에 집중하세요.",
      },
      career: {
        meaning: "압박감이 줄며 다시 집중력이 돌아옵니다.",
        advice: "실수보다 회복 속도에 집중하세요.",
      },
      money: {
        meaning: "재정 스트레스가 완화될 수 있습니다.",
        advice: "현실적인 계획으로 안정을 만드세요.",
      },
      mind: {
        meaning: "불안의 터널 끝이 보이기 시작합니다.",
        advice: "혼자 끌어안지 말고 주변 도움을 받으세요.",
      },
      relation: {
        meaning: "오해가 풀리고 마음이 편해질 수 있습니다.",
        advice: "걱정은 확인으로 끝내세요.",
      },
      health: {
        meaning: "수면과 컨디션이 점차 회복됩니다.",
        advice: "생활 리듬을 유지하세요.",
      },
      future: {
        meaning: "힘든 시기를 지나 안정으로 향합니다.",
        advice: "지금 회복 흐름을 믿으세요.",
      },
      choice: {
        meaning:
          "불안 때문에 망설였던 선택지가 생각보다 나쁘지 않음을 알게 됩니다.",
        advice:
          "최악의 시나리오는 끝났습니다. 이제 안심하고 나은 방향을 선택하세요.",
      },
    },
  },

  {
    id: 59,
    name: "Ten of Swords (소드 10)",
    englishName: "Ten of Swords",
    type: "Swords",
    number: 10,
    keywords: [
      "종결",
      "바닥",
      "배신",
      "재시작 직전",
      "피할 수 없는 변화",
      "바닥을 침",
    ],
    reversedKeywords: ["회복", "재기", "치유", "끝의 종료"],
    meaning:
      "고통스러운 끝맺음이지만 동시에 새로운 시작 직전의 상태입니다. 가장 어두운 밤이 지나면 반드시 해가 뜬다는 사실을 기억해야 하는 시기입니다.",
    advice: "끝난 것을 인정할 때 다음 기회가 시작됩니다.",
    reversedMeaning:
      "최악의 시기를 지나 회복 단계에 들어서며 다시 일어설 힘이 생기는 흐름입니다.",
    reversedAdvice:
      "과거 상처에 머무르지 말고 새로운 출발을 위한 정비에 집중하세요.",
    image: "/images/Swords/Swords10.webp",
    shortMeaning: "끝은 곧 새로운 시작",
    yesNo: "No",
    powerScore: 35,

    categoryInterpretations: {
      love: {
        meaning: "관계 종결이나 큰 실망감이 나타날 수 있습니다.",
        advice: "억지 유지보다 정리가 답일 수 있습니다.",
      },
      career: {
        meaning: "프로젝트 종료, 퇴사, 실패 경험 가능성이 있습니다.",
        advice:
          "이번 끝맺음을 미련에 두기 보다 배움을 얻고 빠르게 다음 장으로 넘어가세요.",
      },
      money: {
        meaning: "손실 후 재정비가 필요한 흐름입니다.",
        advice: "손실 인정 후 구조를 다시 짜세요.",
      },
      mind: {
        meaning: "심리적으로 바닥을 친 느낌입니다.",
        advice: "이제 올라갈 일만 남았습니다.",
      },
      relation: {
        meaning: "끊어질 관계는 정리되는 시기입니다.",
        advice: "남아야 할 사람에게 집중하세요.",
      },
      health: {
        meaning: "과로 후 방전 상태를 주의하세요.",
        advice: "충분한 회복 시간을 가지세요.",
      },
      future: {
        meaning: "낡은 사이클 종료 후 새 국면이 열립니다.",
        advice: "과거를 내려놓으세요.",
      },
      choice: {
        meaning: "미련을 택하면 고통이 길어집니다.",
        advice: "정리와 재출발을 선택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "힘들었던 관계가 회복되거나 새 인연의 가능성이 열립니다.",
        advice: "과거 상처를 현재 관계에 투영하지 마세요.",
      },
      career: {
        meaning: "실패 이후 재도전 기회가 찾아옵니다.",
        advice: "경험을 교훈으로 삼아 다시 시작하세요.",
      },
      money: {
        meaning: "손실에서 벗어나 재정이 회복될 수 있습니다.",
        advice: "작은 안정부터 다시 쌓아가세요.",
      },
      mind: {
        meaning: "바닥이라 느낀 감정에서 서서히 벗어납니다.",
        advice: "회복 속도를 믿고 자신을 몰아붙이지 마세요.",
      },
      relation: {
        meaning: "정리된 뒤 진짜 필요한 관계만 남습니다.",
        advice: "새로운 연결을 두려워하지 마세요.",
      },
      health: {
        meaning: "지친 몸과 마음이 회복 국면에 들어섭니다.",
        advice: "무리한 복귀보다 단계적 회복이 중요합니다.",
      },
      future: {
        meaning:
          "길었던 고난의 터널을 지나 드디어 빛이 보이기 시작하며 상황이 반전됩니다.",
        advice:
          "일어설 힘이 생겼습니다. 이제 과거의 무거운 짐을 다 버리고 가볍게 출발하세요.",
      },
      choice: {
        meaning: "재도전과 재출발 선택이 유리합니다.",
        advice: "끝난 길보다 새 길을 택하세요.",
      },
    },
  },

  {
    id: 60,
    name: "Page of Swords (소드 페이지)",
    englishName: "Page of Swords",
    type: "Swords",
    number: 11,
    keywords: ["경계", "관찰", "정보 수집", "예리함", "비판적 사고", "초심자"],
    reversedKeywords: ["오해", "경솔함", "루머", "산만함"],
    meaning:
      "새로운 소식에 민감하게 반응하며 상황을 예의주시하고 있는 에너지입니다.",
    advice:
      "성급하게 판단하기보다 정보를 더 모으고 신중하게 주변을 살피는 태도가 필요합니다.",
    reversedMeaning:
      "불완전한 정보로 성급히 판단하거나 예민함이 과해져 오해가 커질 수 있는 시기입니다.",
    reversedAdvice:
      "근거 없는 소문에 휘둘리지 말고, 정보의 출처가 명확한지 먼저 팩트 체크를 하세요.",
    image: "/images/Swords/Swords11_Page.webp",
    shortMeaning: "예민한 관찰자",
    yesNo: "Maybe",
    powerScore: 59,

    categoryInterpretations: {
      love: {
        meaning:
          "상대의 마음을 탐색하거나 관계를 조심스럽게 지켜보는 단계입니다.",
        advice: "추측만 하지 말고 솔직한 대화로 오해를 줄이세요.",
      },
      career: {
        meaning:
          "새로운 기술 스택이나 업무 지식을 빠르게 습득해야 하는 상황에 놓입니다.",
        advice:
          "모르는 것을 부끄러워 말고 예리하게 질문하여 내 것으로 만드세요.",
      },
      money: {
        meaning:
          "새로운 재테크 정보, 부업 기회, 수익 관련 소식이 들어올 수 있습니다.",
        advice: "좋은 정보도 검증이 필요합니다.",
      },
      mind: {
        meaning:
          "예민하고 생각이 많아지지만 동시에 통찰력이 높아지는 시기입니다.",
        advice:
          "모든 것을 다 알려고 하기보다, 지금 당장 필요한 '질문'이 무엇인지 정의하는 데 집중하세요.",
      },
      relation: {
        meaning: "주변 사람의 말과 행동에 민감해질 수 있습니다.",
        advice: "지레짐작보다 사실 확인이 우선입니다.",
      },
      health: {
        meaning: "신경 예민, 피로 누적, 집중 스트레스 주의.",
        advice: "휴식과 수면 리듬을 챙기세요.",
      },
      future: {
        meaning: "새로운 소식이 방향을 바꿀 수 있습니다.",
        advice: "정보를 모으되 성급히 움직이지 마세요.",
      },
      choice: {
        meaning: "아직 더 알아봐야 하는 선택입니다.",
        advice: "판단 전 자료 수집부터 하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "의심과 추측으로 관계가 피곤해질 수 있습니다.",
        advice: "상상보다 직접 대화가 답입니다.",
      },
      career: {
        meaning: "정보 부족이나 실수로 혼선이 생길 수 있습니다.",
        advice: "체크리스트로 검수하세요.",
      },
      money: {
        meaning: "검증 안 된 정보로 손해 볼 수 있습니다.",
        advice: "급한 투자 결정을 피하세요.",
      },
      mind: {
        meaning: "생각이 산만하고 예민함이 커질 수 있습니다.",
        advice: "정보 과부하를 줄이세요.",
      },
      relation: {
        meaning: "말 전달 과정에서 오해가 생기기 쉽습니다.",
        advice: "확실하지 않은 말은 퍼뜨리지 마세요.",
      },
      health: {
        meaning: "신경 피로와 집중력 저하가 올 수 있습니다.",
        advice: "디지털 휴식이 필요합니다.",
      },
      future: {
        meaning: "성급한 판단이 흐름을 늦출 수 있습니다.",
        advice: "조금 더 확인 후 움직이세요.",
      },
      choice: {
        meaning: "아직 판단 재료가 부족합니다.",
        advice: "추가 정보 수집 후 결정하세요.",
      },
    },
  },

  {
    id: 61,
    name: "Knight of Swords (소드 나이트)",
    englishName: "Knight of Swords",
    type: "Swords",
    number: 12,
    keywords: ["돌진", "급진적", "용맹함", "빠른 실행력", "독설", "결단력"],
    reversedKeywords: ["무모함", "폭주", "충돌", "성급함"],
    meaning:
      "목표가 정해지면 뒤를 돌아보지 않고 빠르게 돌진하는 저돌적인 인물입니다.",
    advice:
      "속도가 빠른 것은 좋지만, 주변 상황을 살피지 않으면 예기치 못한 실수를 할 수 있으니 주의하세요.",
    reversedMeaning:
      "성급한 돌진과 공격적 태도로 충돌이나 실수가 커질 수 있는 흐름입니다.",
    reversedAdvice:
      "빠름보다 정확함이 중요합니다. 잠시 속도를 줄이고 방향을 점검하세요.",
    image: "/images/Swords/Swords12_Knight.webp",
    shortMeaning: "속도전 돌파",
    yesNo: "Yes",
    powerScore: 76,

    categoryInterpretations: {
      love: {
        meaning: "급하게 다가오는 인연이나 빠르게 진전되는 관계입니다.",
        advice: "속도보다 서로의 감정 속도를 맞추세요.",
      },
      career: {
        meaning: "추진력과 경쟁력으로 성과를 낼 수 있는 시기입니다.",
        advice: "독주보다 협업도 함께 챙기세요.",
      },
      money: {
        meaning: "빠른 판단으로 기회를 잡을 수 있습니다.",
        advice: "충동 투자보다 계산된 실행이 중요합니다.",
      },
      mind: {
        meaning:
          "복잡한 고민을 끝내고 명확한 목표를 향해 정신력이 집중되는 시기입니다.",
        advice: "추진력은 좋으나 번아웃이 오지 않게 완급 조절을 잊지 마세요.",
      },
      relation: {
        meaning: "직설적 태도로 충돌이 생길 수 있습니다.",
        advice:
          "정의감에 불타 솔직하게 한 말이 상대에게 상처가 될 수 있으니 말의 속도를 줄이고 배려를 더하세요.",
      },
      health: {
        meaning: "과로, 급한 움직임, 사고성 부상 주의.",
        advice: "무리한 일정은 조절하세요.",
      },
      future: {
        meaning: "빠르게 판이 바뀌는 흐름입니다.",
        advice: "기회가 오면 망설이지 말되 계산은 하세요.",
      },
      choice: {
        meaning: "빠른 결단이 유리할 수 있습니다.",
        advice: "준비된 선택인지 먼저 점검하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "급한 감정 표현이나 다툼으로 관계가 흔들릴 수 있습니다.",
        advice: "승부욕보다 배려를 선택하세요.",
      },
      career: {
        meaning: "무리한 추진으로 실수나 갈등이 생길 수 있습니다.",
        advice: "속도 조절과 협업이 필요합니다.",
      },
      money: {
        meaning: "충동적 판단으로 손실 가능성이 있습니다.",
        advice: "빠른 투자보다 검토가 우선입니다.",
      },
      mind: {
        meaning: "조급함과 분노가 커질 수 있습니다.",
        advice: "행동 전 한 번 더 생각하세요.",
      },
      relation: {
        meaning: "말이 너무 날카롭게 전달될 수 있습니다.",
        advice: "표현 수위를 낮추세요.",
      },
      health: {
        meaning: "과로와 사고성 실수 주의가 필요합니다.",
        advice: "서두르지 말고 몸 신호를 보세요.",
      },
      future: {
        meaning: "성급함이 흐름을 꼬이게 만들 수 있습니다.",
        advice: "지금은 속도보다 안정이 중요합니다.",
      },
      choice: {
        meaning: "무작정 빠른 선택은 불리합니다.",
        advice:
          "지금은 '빨리빨리'보다 '제대로'가 필요한 때입니다. 한 박자 늦춰 판단하세요.",
      },
    },
  },

  {
    id: 62,
    name: "Queen of Swords (소드 퀸)",
    englishName: "Queen of Swords",
    type: "Swords",
    number: 13,
    keywords: [
      "냉철함",
      "독립심",
      "공정함",
      "직설적",
      "분별력",
      "슬픔을 이겨낸",
    ],
    reversedKeywords: ["차가움", "비판적", "감정 단절", "독설"],
    meaning:
      "상처에 휘둘리지 않고 스스로를 보호하기 위해 선을 긋는 단호함 및 감정에 치우치지 않고 이성적으로 상황을 판단하는 냉철한 지혜를 가진 인물입니다.",
    advice:
      "주관적인 감정은 배제하고 객관적인 사실에 입각하여 명확하게 선을 그으세요.",

    reversedMeaning:
      "지나치게 차갑거나 비판적으로 굴며 사람들과 감정적 거리가 커질 수 있습니다.",
    reversedAdvice:
      "정확함도 중요하지만 따뜻함 없는 진실은 상처가 됩니다. 표현 방식을 부드럽게 조정하세요.",

    image: "/images/Swords/Swords13_Queen.webp",
    shortMeaning: "차가운 지혜",
    yesNo: "Yes",
    powerScore: 72,

    categoryInterpretations: {
      love: {
        meaning: "감정보다 현실성과 진정성을 따지는 관계 흐름입니다.",
        advice:
          "상대에게 바라는 점을 돌려 말하지 말고, 투명하고 명확하게 요구하세요",
      },
      career: {
        meaning: "전문성, 판단력, 명확한 소통으로 인정받습니다.",
        advice: "애매함을 줄이고 기준을 제시하세요.",
      },
      money: {
        meaning: "합리적 소비와 냉정한 판단으로 손실을 줄입니다.",
        advice: "조건과 숫자를 꼼꼼히 보세요.",
      },
      mind: {
        meaning:
          "혼란스러운 감정을 이성이라는 칼로 잘라내고, 내면의 독립성을 회복하는 단계입니다.",
        advice:
          "주변의 동정이나 방해에 흔들리지 말고, 본인만의 원칙을 믿고 나아가세요.",
      },
      relation: {
        meaning: "솔직하지만 차갑게 보일 수 있습니다.",
        advice: "진심은 부드럽게 전달하세요.",
      },
      health: {
        meaning: "스트레스성 긴장, 목·어깨 뭉침 주의.",
        advice: "몸의 긴장을 풀어주세요.",
      },
      future: {
        meaning: "불필요한 것을 정리하며 선명해집니다.",
        advice: "냉정한 판단이 미래를 좋게 만듭니다.",
      },
      choice: {
        meaning: "감정보다 현실 판단이 유리합니다.",
        advice: "증거와 데이터 중심으로 선택하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "너무 까다롭거나 차가운 태도로 거리감이 생길 수 있습니다.",
        advice: "기준만 세우지 말고 감정 표현도 보여주세요.",
      },
      career: {
        meaning: "비판적 분위기나 소통 단절로 협업 문제가 생길 수 있습니다.",
        advice: "정답만 말하기보다 팀워크를 고려하세요.",
      },
      money: {
        meaning: "지나친 계산으로 기회를 놓칠 수 있습니다.",
        advice: "리스크 관리와 유연함의 균형을 잡으세요.",
      },
      mind: {
        meaning: "감정을 억누르며 냉소적 태도가 커질 수 있습니다.",
        advice: "이성 뒤에 숨은 감정도 인정하세요.",
      },
      relation: {
        meaning: "독설이나 선 긋기로 인간관계가 멀어질 수 있습니다.",
        advice: "솔직함과 배려를 함께 사용하세요.",
      },
      health: {
        meaning: "긴장 누적, 두통, 신경 예민 상태가 커질 수 있습니다.",
        advice: "몸과 마음의 경직을 풀어주세요.",
      },
      future: {
        meaning: "혼자만 옳다고 여기면 흐름이 막힐 수 있습니다.",
        advice: "타인의 의견도 수용해야 길이 열립니다.",
      },
      choice: {
        meaning: "너무 냉정한 선택은 후회를 남길 수 있습니다.",
        advice: "조건뿐 아니라 감정 만족도 함께 보세요.",
      },
    },
  },

  {
    id: 63,
    name: "King of Swords (소드 킹)",
    englishName: "King of Swords",
    type: "Swords",
    number: 14,
    keywords: ["권위", "지적 능력", "엄격함", "전략가", "전문직", "체계적"],
    reversedKeywords: ["독재적", "냉혹함", "조종", "불공정"],
    meaning:
      "높은 지적 능력과 윤리 의식을 바탕으로 공정한 판결을 내리는 지도자를 의미합니다.",
    advice:
      "원칙과 소신을 지키세요. 당신의 전문성과 분석력이 문제를 해결하는 핵심 열쇠가 될 것입니다.",

    reversedMeaning:
      "권위를 앞세워 타인을 통제하거나 차가운 판단으로 갈등을 만들 수 있습니다.",
    reversedAdvice:
      "당신의 날카로운 비판이 조직이나 관계의 성장을 돕는 것인지, 아니면 단순히 본인의 우월함을 증명하려는 것인지 자문해 보세요.",

    image: "/images/Swords/Swords14_King.webp",
    shortMeaning: "원칙의 지배자",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning:
          "감정보다 이성을 우선하는 관계 흐름입니다. 차갑게 느껴질 수 있습니다.",
        advice: "논리도 중요하지만 따뜻한 표현을 함께 보여주세요.",
      },
      career: {
        meaning: "리더십, 전문성, 냉정한 판단력으로 인정받을 수 있습니다.",
        advice:
          "감정적인 호소보다는 논리적인 근거와 데이터를 기반으로 설득할 때 당신의 권위가 바로 섭니다.",
      },
      money: {
        meaning: "현실 판단력, 계약, 법률, 전략적 투자에 강합니다.",
        advice: "감이 아닌 데이터 중심으로 결정하세요.",
      },
      mind: {
        meaning: "감정을 정리하고 머리를 맑게 세우는 시기입니다.",
        advice: "사실 기반으로 생각하면 혼란이 줄어듭니다.",
      },
      relation: {
        meaning: "존경받지만 거리감이 생길 수 있습니다.",
        advice: "권위보다 소통을 더해보세요.",
      },
      health: {
        meaning: "과도한 긴장, 두통, 피로 누적 주의.",
        advice: "쉬는 시간도 일정에 넣으세요.",
      },
      future: {
        meaning: "명확한 계획 아래 안정적으로 전진합니다.",
        advice: "감정보다 전략으로 움직이세요.",
      },
      choice: {
        meaning: "가장 합리적인 선택이 정답에 가깝습니다.",
        advice: "원칙과 장기 이익 기준으로 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "지배적 태도나 감정 없는 관계로 답답함이 커질 수 있습니다.",
        advice: "통제보다 존중이 관계를 살립니다.",
      },
      career: {
        meaning: "권위주의 상사, 독단적 운영, 갈등 가능성이 있습니다.",
        advice: "규칙보다 사람을 함께 보세요.",
      },
      money: {
        meaning: "무리한 통제나 지나친 계산으로 손실 가능성이 있습니다.",
        advice: "냉정함과 유연함을 함께 가져가세요.",
      },
      mind: {
        meaning: "완고함과 강박적 사고가 커질 수 있습니다.",
        advice: "모든 것을 통제하려 하지 마세요.",
      },
      relation: {
        meaning: "논리로는 이겼지만 마음은 잃는 상황이 발생할 수 있습니다.",
        advice:
          "가까운 사이일수록 '옳은 말'보다는 '듣고 싶은 말'이 필요할 때가 있음을 기억하세요.",
      },
      health: {
        meaning: "스트레스성 긴장, 혈압, 두통 관리가 필요합니다.",
        advice: "휴식 없는 책임감은 독이 됩니다.",
      },
      future: {
        meaning: "독단적 판단은 좋은 기회를 놓치게 할 수 있습니다.",
        advice: "혼자 결정하지 말고 조언을 들으세요.",
      },
      choice: {
        meaning: "너무 계산적이거나 강압적 선택은 불리합니다.",
        advice: "합리성과 인간적 요소를 함께 고려하세요.",
      },
    },
  },
];
