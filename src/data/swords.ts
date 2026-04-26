import type { TarotCard } from "../types/tarot";

export const swords: TarotCard[] = [
  {
    id: 50,
    name: "Ace of Swords (소드 에이스)",
    englishName: "Ace of Swords",
    type: "Swords",
    number: 1,
    keywords: ["결단", "승리", "명확함", "새로운 아이디어"],
    meaning:
      "정신적인 명확함과 강력한 의지로 새로운 돌파구를 찾아내는 시기입니다.",
    advice:
      "복잡한 생각은 버리고 논리적이고 객관적인 판단으로 과감하게 결정하세요.",
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
        meaning: "기획력, 분석력, 면접·시험운이 강합니다.",
        advice: "논리와 실력으로 승부하세요.",
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
  },

  {
    id: 51,
    name: "Two of Swords (소드 2)",
    englishName: "Two of Swords",
    type: "Swords",
    number: 2,
    keywords: ["교착 상태", "결정 장애", "회피", "팽팽한 균형"],
    meaning:
      "두 가지 선택지 사이에서 눈을 가린 채 결정을 내리지 못하고 고민하는 상태입니다.",
    advice:
      "회피한다고 해결되지 않습니다. 감정을 배제하고 사실 관계를 파악해 결단을 내려야 합니다.",
    image: "/images/Swords/Swords02.webp",
    shortMeaning: "결정을 미루는 교착 상태",
    yesNo: "Maybe",
    powerScore: 63,

    categoryInterpretations: {
      love: {
        meaning:
          "관계에서 마음을 정하지 못하거나 서로의 진심을 확인하지 못해 정체된 흐름입니다.",
        advice:
          "애매한 상태를 오래 끌지 말고 솔직한 대화로 방향을 정하는 것이 중요합니다.",
      },
      career: {
        meaning:
          "업무 방향성이나 팀 내 선택 문제로 결론이 나지 않아 속도가 느려질 수 있습니다.",
        advice: "우선순위를 정하고 빠르게 한 방향으로 집중하세요.",
      },
      money: {
        meaning:
          "투자·지출·이직 등 현실적인 선택 앞에서 판단을 미루고 있는 모습입니다.",
        advice: "정보를 충분히 모은 뒤 손익 기준을 세워 냉정하게 결정하세요.",
      },
      mind: {
        meaning:
          "생각이 너무 많아 오히려 아무 행동도 못하는 심리 상태를 나타냅니다.",
        advice: "완벽한 답을 찾기보다 지금 가능한 최선의 선택을 하세요.",
      },
      relation: {
        meaning: "서로 눈치만 보며 정체된 관계입니다.",
        advice: "누군가는 먼저 입을 열어야 합니다.",
      },
      health: {
        meaning: "스트레스 누적으로 긴장감이 높습니다.",
        advice: "휴식과 마음 정리가 필요합니다.",
      },
      future: {
        meaning: "결정을 내릴 때까지 흐름이 멈춰 있습니다.",
        advice: "미루는 것도 선택이라는 점을 기억하세요.",
      },
      choice: {
        meaning: "아직 추가 정보가 필요합니다.",
        advice: "성급히 고르지 말고 핵심 기준을 세우세요.",
      },
    },
  },

  {
    id: 52,
    name: "Three of Swords (소드 3)",
    englishName: "Three of Swords",
    type: "Swords",
    number: 3,
    keywords: ["마음 상함", "이별", "슬픔", "비탄"],
    meaning:
      "정신적인 충격이나 감정적인 상처로 인해 마음이 아픈 시기를 겪을 수 있습니다.",
    advice:
      "아픔을 외면하지 말고 충분히 슬퍼하되, 이를 통해 정신적으로 성장하는 계기로 삼으세요.",
    image: "/images/Swords/Swords03.webp",
    shortMeaning: "상처를 통해 배우는 시기",
    yesNo: "No",
    powerScore: 45,

    categoryInterpretations: {
      love: {
        meaning:
          "이별, 서운함, 삼각관계, 배신감 등 관계 속 상처가 크게 드러나는 카드입니다.",
        advice:
          "억지로 참기보다 감정을 인정하고 건강하게 정리하는 시간이 필요합니다.",
      },
      career: {
        meaning:
          "직장 내 갈등, 평가 스트레스, 인간관계 피로가 누적될 수 있습니다.",
        advice: "문제의 핵심을 분리해서 처리하고 감정 소모를 줄이세요.",
      },
      money: {
        meaning:
          "기대했던 수익이 어긋나거나 금전 문제로 스트레스를 받을 수 있습니다.",
        advice: "손실을 감정적으로 대응하지 말고 현실적으로 재정비하세요.",
      },
      mind: {
        meaning:
          "상처받은 기억이 계속 떠오르며 마음이 예민해질 수 있는 시기입니다.",
        advice: "치유에는 시간이 필요합니다. 스스로를 몰아붙이지 마세요.",
      },
      relation: {
        meaning: "인간관계의 실망감이 드러납니다.",
        advice: "거리 둘 관계는 구분하세요.",
      },
      health: {
        meaning: "스트레스성 피로와 무기력이 올 수 있습니다.",
        advice: "감정 관리와 휴식이 중요합니다.",
      },
      future: {
        meaning: "아픈 경험 뒤에 성장이 찾아옵니다.",
        advice: "지금의 상처를 교훈으로 바꾸세요.",
      },
      choice: {
        meaning: "지금 선택은 감정적으로 불리할 수 있습니다.",
        advice: "마음이 안정된 뒤 다시 판단하세요.",
      },
    },
  },

  {
    id: 53,
    name: "Four of Swords (소드 4)",
    englishName: "Four of Swords",
    type: "Swords",
    number: 4,
    keywords: ["휴식", "회복", "명상", "은둔"],
    meaning:
      "치열한 상황에서 잠시 벗어나 몸과 마음을 재충전해야 하는 시기입니다.",
    advice:
      "지금은 행동할 때가 아니라 에너지를 모을 때입니다. 충분히 쉬면서 다음 단계를 구상하세요.",
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
        advice: "혼자만의 시간을 충분히 가지세요.",
      },
      relation: {
        meaning: "조용히 정리할 시간이 필요합니다.",
        advice: "불필요한 만남은 줄여도 됩니다.",
      },
      health: {
        meaning: "회복운이 강합니다.",
        advice: "수면과 휴식이 최고의 약입니다.",
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
  },

  {
    id: 54,
    name: "Five of Swords (소드 5)",
    englishName: "Five of Swords",
    type: "Swords",
    number: 5,
    keywords: ["패배감", "이기적인 승리", "갈등", "불명예"],
    meaning:
      "갈등에서 승리했을지라도 상처뿐인 영광이거나 주변 사람을 잃을 수 있는 상황입니다.",
    advice:
      "이기는 것보다 중요한 것이 무엇인지 생각해보세요. 불필요한 논쟁은 피하는 것이 상책입니다.",
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
        meaning: "말 한마디로 관계가 틀어질 수 있습니다.",
        advice: "강한 표현을 줄이세요.",
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
        advice: "승리보다 손실을 먼저 계산하세요.",
      },
    },
  },

  {
    id: 55,
    name: "Six of Swords (소드 6)",
    englishName: "Six of Swords",
    type: "Swords",
    number: 6,
    keywords: ["이동", "회복", "전환", "안정으로 향함"],
    meaning: "힘든 상황을 벗어나 더 나은 방향으로 천천히 이동하는 시기입니다.",
    advice: "급하게 결과를 내기보다 현재의 변화 흐름을 믿고 차분히 나아가세요.",
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
        meaning: "이직, 부서 이동, 업무 환경 개선운이 있습니다.",
        advice: "변화를 두려워하지 말고 장기적 이익을 보세요.",
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
  },

  {
    id: 56,
    name: "Seven of Swords (소드 7)",
    englishName: "Seven of Swords",
    type: "Swords",
    number: 7,
    keywords: ["속임수", "전략", "은밀함", "회피"],
    meaning: "정면 돌파보다 우회 전략을 택하거나 숨기는 것이 있는 상황입니다.",
    advice: "잔꾀보다 정직한 방식이 결국 더 큰 신뢰를 만듭니다.",
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
        advice: "편법보다 실력으로 인정받으세요.",
      },
      money: {
        meaning: "불투명한 거래나 손해 보는 제안을 주의해야 합니다.",
        advice: "조건을 꼼꼼히 확인하세요.",
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
  },

  {
    id: 57,
    name: "Eight of Swords (소드 8)",
    englishName: "Eight of Swords",
    type: "Swords",
    number: 8,
    keywords: ["제한", "고립", "두려움", "무력감"],
    meaning:
      "스스로 만든 생각의 틀에 갇혀 움직이지 못한다고 느끼는 상태입니다.",
    advice:
      "현실보다 두려움이 더 크게 보일 수 있습니다. 작은 행동부터 시작하세요.",
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
        meaning: "압박감 때문에 능력을 못 펼칠 수 있습니다.",
        advice: "할 수 있는 일부터 정리하세요.",
      },
      money: {
        meaning: "돈 걱정만 하고 실행은 멈춘 상태입니다.",
        advice: "작은 절약과 계획부터 시작하세요.",
      },
      mind: {
        meaning: "부정적 생각이 자신을 가두고 있습니다.",
        advice: "사실과 상상을 구분해보세요.",
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
  },

  {
    id: 58,
    name: "Nine of Swords (소드 9)",
    englishName: "Nine of Swords",
    type: "Swords",
    number: 9,
    keywords: ["걱정", "불면", "스트레스", "죄책감"],
    meaning: "걱정과 압박감으로 마음이 무거워진 시기입니다.",
    advice: "혼자 감당하지 말고 말로 꺼내는 순간 부담은 줄어듭니다.",
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
        advice: "수면과 휴식 관리가 우선입니다.",
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
  },

  {
    id: 59,
    name: "Ten of Swords (소드 10)",
    englishName: "Ten of Swords",
    type: "Swords",
    number: 10,
    keywords: ["종결", "바닥", "배신", "재시작 직전"],
    meaning: "고통스러운 끝맺음이지만 동시에 새로운 시작 직전의 상태입니다.",
    advice: "끝난 것을 인정할 때 다음 기회가 시작됩니다.",
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
        advice: "이번 끝맺음을 경력 자산으로 바꾸세요.",
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
  },
  {
    id: 60,
    name: "Page of Swords (소드 페이지)",
    englishName: "Page of Swords",
    type: "Swords",
    number: 11,
    keywords: ["경계", "관찰", "정보 수집", "예리함"],
    meaning:
      "새로운 소식에 민감하게 반응하며 상황을 예의주시하고 있는 에너지입니다.",
    advice:
      "성급하게 판단하기보다 정보를 더 모으고 신중하게 주변을 살피는 태도가 필요합니다.",
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
          "면접, 시험, 기획 조사, 시장 분석 등 정보력이 중요한 시기입니다.",
        advice: "빠른 학습력과 관찰력을 활용하세요.",
      },
      money: {
        meaning:
          "새로운 재테크 정보, 부업 기회, 수익 관련 소식이 들어올 수 있습니다.",
        advice: "좋은 정보도 검증이 필요합니다.",
      },
      mind: {
        meaning:
          "예민하고 생각이 많아지지만 동시에 통찰력이 높아지는 시기입니다.",
        advice: "불안보다 호기심에 집중하세요.",
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
  },

  {
    id: 61,
    name: "Knight of Swords (소드 나이트)",
    englishName: "Knight of Swords",
    type: "Swords",
    number: 12,
    keywords: ["돌진", "급진적", "용맹함", "빠른 실행력"],
    meaning:
      "목표가 정해지면 뒤를 돌아보지 않고 빠르게 돌진하는 저돌적인 인물입니다.",
    advice:
      "속도가 빠른 것은 좋지만, 주변 상황을 살피지 않으면 예기치 못한 실수를 할 수 있으니 주의하세요.",
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
        meaning: "의욕과 승부욕이 강해집니다.",
        advice: "열정에 브레이크도 필요합니다.",
      },
      relation: {
        meaning: "직설적 태도로 충돌이 생길 수 있습니다.",
        advice: "말의 속도를 줄이고 배려를 더하세요.",
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
  },

  {
    id: 62,
    name: "Queen of Swords (소드 퀸)",
    englishName: "Queen of Swords",
    type: "Swords",
    number: 13,
    keywords: ["냉철함", "독립심", "공정함", "직설적"],
    meaning:
      "감정에 치우치지 않고 이성적으로 상황을 판단하는 냉철한 지혜를 가진 인물입니다.",
    advice:
      "주관적인 감정은 배제하고 객관적인 사실에 입각하여 명확하게 선을 그으세요.",
    image: "/images/Swords/Swords13_Queen.webp",
    shortMeaning: "차가운 지혜",
    yesNo: "Yes",
    powerScore: 72,

    categoryInterpretations: {
      love: {
        meaning: "감정보다 현실성과 진정성을 따지는 관계 흐름입니다.",
        advice: "기준은 중요하지만 벽처럼 보이지 않게 표현하세요.",
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
        meaning: "감정 정리가 되며 중심을 세우게 됩니다.",
        advice: "차분한 거리두기가 도움이 됩니다.",
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
  },

  {
    id: 63,
    name: "King of Swords (소드 킹)",
    englishName: "King of Swords",
    type: "Swords",
    number: 14,
    keywords: ["권위", "지적 능력", "엄격함", "전략가"],
    meaning:
      "높은 지적 능력과 윤리 의식을 바탕으로 공정한 판결을 내리는 지도자를 의미합니다.",
    advice:
      "원칙과 소신을 지키세요. 당신의 전문성과 분석력이 문제를 해결하는 핵심 열쇠가 될 것입니다.",
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
        advice: "원칙과 기준을 세우고 흔들림 없이 추진하세요.",
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
  },
];
