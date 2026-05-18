import type { TarotCard } from "../types/tarot";

export const pentacles: TarotCard[] = [
  {
    id: 36,
    name: "Ace of Pentacles (펜타클 에이스)",
    englishName: "Ace of Pentacles",
    type: "Pents",
    number: 1,
    keywords: ["금전운", "기회", "번영", "새 시작", "선물", "보상", "합격"],
    reversedKeywords: ["기회 상실", "지연", "불안정", "손실"],
    image: "/images/Pentacles/pentacles01.webp",

    meaning: "현실적 이득과 새로운 기회가 시작되는 카드.",
    advice: "기회를 잡고 구체적으로 실행하세요.",

    reversedMeaning:
      "좋은 기회가 와도 놓치거나 준비 부족으로 현실화되지 않을 수 있습니다.",
    reversedAdvice: "조급하게 잡으려 하지 말고 기반부터 다시 점검하세요.",

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
        advice: "문서화된 계약을 확인하세요.",
      },
      money: {
        meaning: "예상치 못한 보너스나 수익성 높은 투자 기회가 찾아옵니다.",
        advice:
          "운에만 맡기지 말고 수익을 장기적인 자산으로 바꿀 계획을 세우세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "관계 시작이 늦어지거나 현실 문제로 거리감이 생길 수 있습니다.",
        advice: "조건보다 진심과 타이밍을 보세요.",
      },
      career: {
        meaning: "취업·계약 기회가 지연될 수 있습니다.",
        advice: "준비 부족 부분을 먼저 보완하세요.",
      },
      money: {
        meaning: "수입 지연, 투자 손실 주의 흐름입니다.",
        advice:
          "초기 자본의 부족이나 지출이 수입보다 큰 상태가 나타날 수 있으니 안정성을 택하세요.",
      },
      mind: {
        meaning: "불안감 때문에 기회를 의심할 수 있습니다.",
        advice: "두려움보다 현실 데이터를 확인하세요.",
      },
      relation: {
        meaning: "믿음 형성이 늦어질 수 있습니다.",
        advice: "서두르지 말고 꾸준함을 보여주세요.",
      },
      health: {
        meaning: "체력 저하나 회복 지연 가능성이 있습니다.",
        advice: "기초 생활습관부터 재정비하세요.",
      },
      future: {
        meaning: "좋은 가능성은 있으나 실행력이 부족합니다.",
        advice: "계획을 실제 행동으로 옮기세요.",
      },
      choice: {
        meaning: "겉보기에 좋아 보여도 실속이 부족할 수 있습니다.",
        advice: "수익 구조와 지속성을 확인하세요.",
      },
    },
  },

  {
    id: 37,
    name: "Two of Pentacles (펜타클 2)",
    englishName: "Two of Pentacles",
    type: "Pents",
    number: 2,
    keywords: ["균형", "적응", "멀티태스킹", "유연성", "변화", "유희"],
    reversedKeywords: ["불균형", "혼란", "과부하", "우왕좌왕"],
    image: "/images/Pentacles/pentacles02.webp",

    meaning: "여러 상황을 동시에 조율하며 균형을 잡는 카드.",
    advice: "우선순위를 정하고 유연하게 움직이세요.",

    reversedMeaning:
      "감당할 일이 많아 균형이 무너지거나 중요한 것을 놓칠 수 있습니다.",
    reversedAdvice: "모든 것을 잡으려 하지 말고 하나씩 정리하세요.",

    shortMeaning: "균형과 조율의 카드",
    yesNo: "Maybe",
    powerScore: 78,

    categoryInterpretations: {
      love: {
        meaning: "연애와 현실 사이 균형 고민.",
        advice: "시간 배분을 잘하세요.",
      },
      career: {
        meaning:
          "동시에 여러 업무를 수행해야 하는 상황이지만, 당신의 적응력으로 잘 헤쳐나갑니다.",
        advice:
          "중요도에 따라 에너지를 분배하세요. 모든 일을 완벽하게 하려다 지치지 않는 것이 핵심입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계와 개인생활의 균형이 깨질 수 있습니다.",
        advice: "우선순위를 솔직히 정리하세요.",
      },
      career: {
        meaning: "업무 과부하로 실수가 늘 수 있습니다.",
        advice: "일을 나누고 집중 순서를 세우세요.",
      },
      money: {
        meaning: "지출 관리가 흔들릴 수 있습니다.",
        advice: "임시방편식의 자금 운용을 멈추고 근본적인 지출을 줄이세요.",
      },
      mind: {
        meaning: "정신없이 바빠 마음의 여유가 부족합니다.",
        advice: "잠시 멈추고 정리 시간이 필요합니다.",
      },
      relation: {
        meaning: "여러 관계를 맞추다 지칠 수 있습니다.",
        advice: "모두 만족시키려 하지 마세요.",
      },
      health: {
        meaning: "피로 누적, 생활 리듬 붕괴 주의.",
        advice: "수면과 식사 패턴부터 회복하세요.",
      },
      future: {
        meaning: "방향은 있으나 정리가 안 된 상태입니다.",
        advice: "선택과 집중이 필요합니다.",
      },
      choice: {
        meaning: "둘 다 잡으려다 둘 다 놓칠 수 있습니다.",
        advice: "핵심 하나를 먼저 선택하세요.",
      },
    },
  },

  {
    id: 38,
    name: "Three of Pentacles (펜타클 3)",
    englishName: "Three of Pentacles",
    type: "Pents",
    number: 3,
    keywords: ["협력", "전문성", "설계", "기술 인정", "마일스톤"],
    reversedKeywords: ["불협화음", "미숙함", "협업 실패", "평가 절하"],
    image: "/images/Pentacles/pentacles03.webp",

    meaning: "실력과 협업으로 성과를 만드는 카드.",
    advice: "혼자보다 함께할 때 더 커집니다.",

    reversedMeaning:
      "협업이 어긋나거나 실력이 제대로 인정받지 못할 수 있습니다.",
    reversedAdvice: "자존심보다 소통과 기본기 점검이 먼저입니다.",

    shortMeaning: "협력 성과의 카드",
    yesNo: "Yes",
    powerScore: 86,

    categoryInterpretations: {
      love: {
        meaning:
          "서로의 가치관을 공유하며 미래를 견고하게 설계하는 관계입니다. 솔로라면 주변의 주선이나 공식적인 모임을 통해 검증된 인연이 나타날 수 있습니다.",
        advice:
          "주변의 도움을 적극적으로 활용해 보세요. 서로 협력하여 신뢰를 쌓아가는 과정이 두 사람을 더 단단하게 연결해 줄 것입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "함께 노력 부족으로 관계가 정체될 수 있습니다.",
        advice: "한쪽만 애쓰는 구조를 바꾸세요.",
      },
      career: {
        meaning:
          "팀 내 커뮤니케이션 오류로 재작업이 발생하거나, 전문성 부족으로 프로젝트 진행에 차질이 생길 수 있습니다.",
        advice:
          "자신의 실력을 객관적으로 점검하고 팀원들과 더 긴밀하게 소통하세요. 마일스톤(이정표)을 재점검하며 기초부터 다시 다져야 할 때입니다.",
      },
      money: {
        meaning: "공동 자금이나 협업 수익 문제 주의.",
        advice: "역할과 분배를 명확히 하세요.",
      },
      mind: {
        meaning: "노력 대비 인정받지 못해 의욕 저하가 생길 수 있습니다.",
        advice: "비교보다 성장에 집중하세요.",
      },
      relation: {
        meaning:
          "공동의 목표보다 각자의 이익을 앞세워 협력이 깨질 우려가 있습니다.",
        advice:
          "내 의견이 정답이라는 고집을 버리고, 전체의 완성도를 위해 소통의 빈도를 높이세요.",
      },
      health: {
        meaning: "꾸준함이 무너지면 효과가 떨어집니다.",
        advice: "작더라도 지속 가능한 루틴을 만드세요.",
      },
      future: {
        meaning: "재능은 있으나 연결과 협업이 부족합니다.",
        advice: "혼자만의 방식에서 벗어나세요.",
      },
      choice: {
        meaning: "혼자 가는 길보다 함께 가는 길이 필요합니다.",
        advice: "도움받을 수 있는 선택을 보세요.",
      },
    },
  },

  {
    id: 39,
    name: "Four of Pentacles (펜타클 4)",
    englishName: "Four of Pentacles",
    type: "Pents",
    number: 4,
    keywords: ["소유", "인색함", "안정", "경계", "고집", "변화 거부"],
    reversedKeywords: ["집착 해소", "불안정", "손실", "통제 상실"],
    image: "/images/Pentacles/pentacles04.webp",

    meaning: "안정을 지키려 하지만 닫혀 있을 수 있는 카드.",
    advice: "지키는 것과 흐르게 하는 균형이 필요합니다.",

    reversedMeaning:
      "지나친 집착이 무너지거나 반대로 관리 부족으로 손실이 생길 수 있습니다.",
    reversedAdvice: "불안 때문에 움켜쥐지도 말고, 무심히 흘려보내지도 마세요.",

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
        advice:
          "이미 가진 기술이나 자리에 안주하다가 새로운 트렌드를 놓치지 않도록 주의하세요.",
      },
      money: {
        meaning: "저축·자산 방어 성향 강함.",
        advice: "지나친 집착은 피하세요.",
      },
      mind: {
        meaning:
          "상실에 대한 두려움으로 인해 마음을 굳게 닫고 있는 상태입니다.",
        advice:
          "손을 펴야 새로운 것을 잡을 수 있습니다. 안정에 대한 집착이 오히려 성장을 방해할 수 있음을 기억하세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "집착하거나 반대로 마음을 놓아 관계가 흔들릴 수 있습니다.",
        advice: "상대를 소유하려 하기보다 자유를 줄 때 관계가 회복됩니다.",
      },
      career: {
        meaning: "자리나 성과에 대한 불안이 커질 수 있습니다.",
        advice: "변화를 두려워하지 말고 대비하세요.",
      },
      money: {
        meaning: "예상치 못한 지출이나 자산 흔들림 가능성.",
        advice: "재점검과 분산 관리가 필요합니다.",
      },
      mind: {
        meaning: "불안정함과 집착이 교차할 수 있습니다.",
        advice: "놓아야 할 것과 지켜야 할 것을 구분하세요.",
      },
      relation: {
        meaning: "소유욕이나 거리 두기가 갈등을 만듭니다.",
        advice: "솔직한 감정 표현이 필요합니다.",
      },
      health: {
        meaning: "긴장 누적 또는 생활 루틴 붕괴 가능성.",
        advice: "몸과 마음을 이완시키세요.",
      },
      future: {
        meaning: "안정 기반이 흔들리며 재정비가 필요합니다.",
        advice: "기초부터 다시 세우세요.",
      },
      choice: {
        meaning: "무조건 안전만 고르면 기회를 놓칠 수 있습니다.",
        advice: "안정성과 성장성을 함께 보세요.",
      },
    },
  },

  {
    id: 40,
    name: "Five of Pentacles (펜타클 5)",
    englishName: "Five of Pentacles",
    type: "Pents",
    number: 5,
    keywords: ["어려움", "소외감", "고난", "정신적 빈곤", "도움을 보지 못함"],
    reversedKeywords: ["회복", "지원", "희망", "재기"],
    image: "/images/Pentacles/pentacles05.webp",

    meaning: "경제적·심리적으로 힘든 시기를 뜻하는 카드.",
    advice: "혼자 버티지 말고 도움을 요청하세요.",

    reversedMeaning:
      "힘든 시기가 서서히 끝나며 회복의 기회와 도움의 손길이 들어옵니다.",
    reversedAdvice:
      "아직 완전한 회복 전이니 희망을 갖고 현실적으로 움직이세요.",

    shortMeaning: "고난 극복의 카드",
    yesNo: "No",
    powerScore: 58,

    categoryInterpretations: {
      love: {
        meaning: "외로움이나 관계의 거리감.",
        advice: "솔직한 대화가 필요합니다.",
      },
      career: {
        meaning: "프로젝트 중단, 팀 내 고립, 일시적 어려움, 압박감.",
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
        meaning:
          "당분간 현실적인 제약과 어려움이 예상되나, 이는 성장을 위한 일시적인 구간입니다.",
        advice:
          "자존심 때문에 혼자 앓지 마세요. 주변을 둘러보면 반드시 당신을 도울 시스템이나 인연이 있습니다.",
      },
      choice: {
        meaning: "무리한 선택은 불리합니다.",
        advice: "안정 확보부터 하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "멀어졌던 관계가 다시 가까워질 수 있습니다.",
        advice: "상처 회복 대화를 시작하세요.",
      },
      career: {
        meaning: "압박이 줄고 새 기회가 보입니다.",
        advice: "재도전 타이밍을 잡으세요.",
      },
      money: {
        meaning: "재정 압박이 완화되는 흐름입니다.",
        advice: "회복기에 낭비는 주의하세요.",
      },
      mind: {
        meaning: "위축감에서 벗어나 자신감이 회복됩니다.",
        advice: "작은 성공 경험을 쌓으세요.",
      },
      relation: {
        meaning: "주변의 도움으로 고립감이 줄어듭니다.",
        advice: "감사 표현을 잊지 마세요.",
      },
      health: {
        meaning: "회복세가 시작됩니다.",
        advice: "꾸준한 관리로 흐름을 이어가세요.",
      },
      future: {
        meaning: "어두운 터널 끝이 보이기 시작합니다.",
        advice: "악조건이 개선될 예정이니 포기하지 말고 한 걸음씩 가세요.",
      },
      choice: {
        meaning: "힘든 선택지보다 회복 가능한 길이 보입니다.",
        advice: "재기 가능성을 기준으로 판단하세요.",
      },
    },
  },

  {
    id: 41,
    name: "Six of Pentacles (펜타클 6)",
    englishName: "Six of Pentacles",
    type: "Pents",
    number: 6,
    keywords: ["나눔", "보상", "공정한 계약", "인센티브", "후원"],
    reversedKeywords: ["불균형", "대가성", "의존", "편애"],
    image: "/images/Pentacles/pentacles06.webp",

    meaning: "주고받는 균형과 정당한 보상을 뜻하는 카드.",
    advice: "받은 만큼 베풀고, 베푼 만큼 돌아올 것을 믿으세요.",

    reversedMeaning:
      "주고받는 흐름이 깨져 일방적 관계, 대가성 도움, 불공정이 생길 수 있습니다.",
    reversedAdvice: "주는 사람도 받는 사람도 경계를 세우고 균형을 회복하세요.",

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
        meaning:
          "재물운의 선순환이 시작됩니다. 투자 유치에 성공하거나 빌려준 돈을 돌려받는 등 정당한 권리를 되찾고 자금에 여유가 생깁니다.",
        advice:
          "나에게 들어온 보상을 혼자 독점하기보다 적절히 나누고 재투자하세요. 건강한 자금 흐름을 유지하는 것이 핵심입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "한쪽만 주거나 받는 관계가 될 수 있습니다.",
        advice: "감정 노동의 균형을 맞추세요.",
      },
      career: {
        meaning:
          "노력에 비해 보상이 불공정하거나, 위계 관계를 이용한 압박으로 인해 업무적 스트레스가 커질 수 있는 상황입니다.",
        advice:
          "자신의 가치를 정당하게 주장하거나, 주고받는 것이 투명하고 공정한 환경으로의 이직 혹은 파트 전환을 진지하게 고려해 보세요.",
      },
      money: {
        meaning: "빌려주기·빌리기 문제 주의.",
        advice: "돈 거래는 명확히 하세요.",
      },
      mind: {
        meaning: "억울함이나 결핍감이 생길 수 있습니다.",
        advice: "비교보다 자기 기준을 세우세요.",
      },
      relation: {
        meaning: "이용당한다는 느낌이 들 수 있습니다.",
        advice: "경계선을 분명히 하세요.",
      },
      health: {
        meaning: "도움이 필요한데 미루고 있을 수 있습니다.",
        advice: "전문가 도움을 받으세요.",
      },
      future: {
        meaning: "불균형한 구조를 바로잡아야 성장합니다.",
        advice: "공정한 환경을 선택하세요.",
      },
      choice: {
        meaning: "겉으로 좋아 보여도 손해 보는 선택일 수 있습니다.",
        advice:
          "세상에 공짜 점심은 없음을 기억하고, 제안 뒤의 조건을 꼼꼼히 따지세요.",
      },
    },
  },

  {
    id: 42,
    name: "Seven of Pentacles (펜타클 7)",
    englishName: "Seven of Pentacles",
    type: "Pents",
    number: 7,
    keywords: ["인내", "기다림", "평가", "수확 대기", "중간 점검", "수익 분석"],
    reversedKeywords: ["조급함", "실망", "지연", "포기 고민"],
    image: "/images/Pentacles/pentacles07.webp",

    meaning: "성과를 기다리며 다음 단계를 점검하는 카드.",
    advice: "서두르지 말고 과정을 믿으세요.",

    reversedMeaning:
      "기다림이 길어지며 조급함과 실망이 커질 수 있습니다. 뿌린 대로 거두지 못할까 봐 생기는 불안 및 방향 점검이 필요한 시기입니다.",
    reversedAdvice:
      "결과만 보며 포기하지 말고, 전략을 수정하며 다시 꾸준히 이어가세요.",

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
        meaning:
          "지금까지의 진행 상황을 정산하고 다음 투자 가치를 따져보는 시기입니다.",
        advice:
          "무작정 계속하기보다 투입 대비 성과(ROI)를 냉정하게 평가한 뒤 결정하세요.",
      },
    },

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계 진전에 답답함을 느낄 수 있습니다.",
        advice: "조급하게 결론 내리지 마세요.",
      },
      career: {
        meaning: "성과 지연으로 의욕이 떨어질 수 있습니다.",
        advice: "방법을 바꾸고 효율을 점검하세요.",
      },
      money: {
        meaning: "투자 회수 지연이나 기대 이하 결과 가능성.",
        advice: "감정적 손절보다 냉정한 재검토가 필요합니다.",
      },
      mind: {
        meaning: "노력 대비 보상이 없어 지칩니다.",
        advice: "속도보다 지속 가능성을 보세요.",
      },
      relation: {
        meaning: "상대 반응이 느려 답답함이 커집니다.",
        advice: "기다림 속에서도 대화는 이어가세요.",
      },
      health: {
        meaning: "회복 속도가 더딜 수 있습니다.",
        advice: "단기 효과보다 꾸준한 관리가 중요합니다.",
      },
      future: {
        meaning: "계획이 예상보다 늦어질 수 있습니다.",
        advice: "포기보다 재정비가 해답입니다.",
      },
      choice: {
        meaning: "지금 선택은 시기상조일 수 있습니다.",
        advice: "조금 더 데이터와 상황을 보세요.",
      },
    },
  },

  {
    id: 43,
    name: "Eight of Pentacles (펜타클 8)",
    englishName: "Eight of Pentacles",
    type: "Pents",
    number: 8,
    keywords: ["숙련", "노력", "장인 정신", "성실", "자격증/학업"],
    reversedKeywords: ["권태", "실수", "대충함", "집중력 저하"],
    image: "/images/Pentacles/pentacles08.webp",

    meaning: "꾸준한 노력과 기술 연마를 뜻하는 카드.",
    advice: "디테일과 반복이 실력을 만듭니다.",

    reversedMeaning:
      "노력은 하지만 집중력이 흐트러지거나 반복 속 권태로 효율이 떨어질 수 있습니다.",
    reversedAdvice: "대충 넘기지 말고 기본기부터 다시 점검하세요.",

    shortMeaning: "성실 성장의 카드",
    yesNo: "Yes",
    powerScore: 90,

    categoryInterpretations: {
      love: {
        meaning: "관계를 위해 꾸준히 노력합니다.",
        advice: "작은 배려를 지속하세요.",
      },
      career: {
        meaning:
          "기술 연마와 전문성 강화에 최적의 시기입니다. 당신의 성실함이 실무에서 빛을 발합니다.",
        advice:
          "기교보다 기본기에 집중하세요. 꾸준히 쌓은 디테일이 곧 당신의 대체 불가능한 자산이 됩니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "노력이 의무감처럼 느껴질 수 있습니다.",
        advice: "진심 어린 소통을 회복하세요.",
      },
      career: {
        meaning: "실수 반복, 집중력 저하 가능성.",
        advice: "기초부터 다시 점검하세요.",
      },
      money: {
        meaning: "노력 대비 수익 효율이 낮을 수 있습니다.",
        advice: "방식 개선이 필요합니다.",
      },
      mind: {
        meaning: "번아웃이나 지루함이 커질 수 있습니다.",
        advice: "나무만 보지 말고 숲을 보는 여유를 가지세요.",
      },
      relation: {
        meaning: "형식적인 관계가 될 수 있습니다.",
        advice: "마음 담긴 행동이 필요합니다.",
      },
      health: {
        meaning: "관리 루틴이 무너지기 쉽습니다.",
        advice: "작게라도 다시 시작하세요.",
      },
      future: {
        meaning: "노력은 있으나 방향성이 부족합니다.",
        advice: "열심히보다 제대로가 중요합니다.",
      },
      choice: {
        meaning: "익숙하지만 성장 없는 선택일 수 있습니다.",
        advice: "배움이 있는 길인지 확인하세요.",
      },
    },
  },

  {
    id: 44,
    name: "Nine of Pentacles (펜타클 9)",
    englishName: "Nine of Pentacles",
    type: "Pents",
    number: 9,
    keywords: ["성공", "자기 관리", "풍요", "여유", "솔로 경제", "우아함"],
    reversedKeywords: ["허영", "불안", "의존", "과소비"],
    image: "/images/Pentacles/pentacles09.webp",

    meaning: "스스로 이룬 성공과 여유를 뜻하는 카드.",
    advice: "성과를 누리되 관리도 병행하세요.",

    reversedMeaning:
      "겉으로는 풍요로워 보여도 내면 불안이나 의존성이 숨어 있을 수 있습니다.",
    reversedAdvice: "보여주기식 소비보다 진짜 안정 기반을 점검하세요.",

    shortMeaning: "자립 풍요의 카드",
    yesNo: "Yes",
    powerScore: 95,

    categoryInterpretations: {
      love: {
        meaning:
          "혼자서도 충분히 행복하며 비혼주의적 성향이나 강한 자기애를 가질 수 있습니다. 스스로를 사랑하는 마음이 건강한 관계를 끌어당기는 힘이 됩니다.",
        advice:
          "외로움 때문에 섣불리 타협하지 마세요. 지금은 타인과의 관계보다 자신만의 우아한 일상을 가꾸는 것이 당신을 더 빛나게 합니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning:
          "자신의 가치를 증명하기 위해 상대를 이용하거나, 조건 위주의 만남에 매몰되어 정서적인 공허함을 느낄 수 있습니다.",
        advice:
          "타인의 시선에 맞춘 화려한 관계보다 실속 있는 내면의 연결이 먼저입니다. 외적인 조건 뒤에 숨겨진 진심을 마주하는 시간을 가지세요.",
      },
      career: {
        meaning: "성과는 있으나 만족감이 부족할 수 있습니다.",
        advice: "외적 성공 외 목표도 점검하세요.",
      },
      money: {
        meaning: "과소비나 보여주기식 지출 주의.",
        advice: "자산 보호에 집중하세요.",
      },
      mind: {
        meaning: "겉은 괜찮아도 내면 불안이 있습니다.",
        advice: "비교보다 자기 기준을 세우세요.",
      },
      relation: {
        meaning: "독립성이 지나쳐 고립될 수 있습니다.",
        advice: "도움받는 것도 능력입니다.",
      },
      health: {
        meaning: "생활은 안정적이나 긴장 누적 가능성.",
        advice: "휴식의 질을 높이세요.",
      },
      future: {
        meaning: "풍요는 가능하지만 기반 점검이 필요합니다.",
        advice: "겉보다 내실을 챙기세요.",
      },
      choice: {
        meaning: "화려하지만 실속 없는 선택일 수 있습니다.",
        advice: "타인의 시선에 맞춘 화려함보다 실속 있는 기반이 먼저입니다.",
      },
    },
  },

  {
    id: 45,
    name: "Ten of Pentacles (펜타클 10)",
    englishName: "Ten of Pentacles",
    type: "Pents",
    number: 10,
    keywords: ["유산", "안정", "부", "가족", "공동체", "부동산"],
    reversedKeywords: ["가족 갈등", "불안정", "손실", "기반 흔들림"],
    image: "/images/Pentacles/pentacles10.webp",

    meaning: "장기적 안정과 큰 자산 완성을 뜻하는 카드.",
    advice: "오늘의 선택을 미래 기반으로 연결하세요.",

    reversedMeaning:
      "기반은 있으나 가족이나 팀원 간의 돈 문제는 서류로 명확히 정리하세요.",
    reversedAdvice:
      "겉으로 유지하는 것보다 구조적 문제를 정리하고 다시 세우는 것이 중요합니다.",

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
        advice:
          "대형 조직과의 협업이나 안정적인 시스템 구축 관련 신뢰를 계속 쌓으세요.",
      },
      money: {
        meaning:
          "안정적인 자산 흐름이 완성되었습니다. 상속, 증여, 혹은 부동산 관련 이득이 따를 수 있습니다.",
        advice:
          "나 혼자의 부가 아닌 가족이나 공동체 전체의 자산 구조를 설계할 시기입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "가족 문제나 현실 조건으로 갈등이 생길 수 있습니다.",
        advice: "관계와 현실을 함께 조율하세요.",
      },
      career: {
        meaning: "조직 내 기반이 흔들리거나 방향 수정이 필요합니다.",
        advice: "기초 체계를 점검하세요.",
      },
      money: {
        meaning: "자산 손실, 상속·재산 문제 주의.",
        advice: "장기 재정 계획을 다시 세우세요.",
      },
      mind: {
        meaning: "겉은 안정적이어도 내면 불안이 있습니다.",
        advice: "진짜 안전감을 만드는 요소를 찾으세요.",
      },
      relation: {
        meaning: "가족·조직 갈등 가능성이 있습니다.",
        advice: "오래된 문제를 미루지 마세요.",
      },
      health: {
        meaning: "생활 리듬 붕괴가 건강에 영향을 줄 수 있습니다.",
        advice: "기본 루틴부터 회복하세요.",
      },
      future: {
        meaning: "기반은 있으나 정비 없이는 흔들릴 수 있습니다.",
        advice: "내실을 먼저 다지세요.",
      },
      choice: {
        meaning: "안정적으로 보이지만 숨은 문제가 있을 수 있습니다.",
        advice: "겉보다 구조를 확인하세요.",
      },
    },
  },

  {
    id: 46,
    name: "Page of Pentacles (펜타클 페이지)",
    englishName: "Page of Pentacles",
    type: "Pents",
    number: 11,
    keywords: [
      "학구열",
      "신중함",
      "현실적 시작",
      "기회",
      "장학생",
      "아이디어의 현실화",
    ],
    reversedKeywords: ["미숙함", "게으름", "기회 놓침", "산만함"],
    image: "/images/Pentacles/pentacles11_Page.webp",

    meaning: "실제적인 이득이나 배움에 대한 새로운 소식이 들려오는 시기입니다.",
    advice:
      "작은 기회라도 소중히 여기며 기초부터 차근차근 배워나가는 태도가 필요합니다.",

    reversedMeaning: "기회는 오지만 준비 부족이나 산만함으로 놓칠 수 있습니다.",
    reversedAdvice: "욕심내어 여러 개를 잡기보다 하나를 제대로 시작하세요.",

    shortMeaning: "배움과 현실 기회의 시작",
    yesNo: "Yes",
    powerScore: 78,

    categoryInterpretations: {
      love: {
        meaning: "느리지만 진지한 관계가 시작될 수 있습니다.",
        advice: "급하게 판단하지 말고 천천히 알아가세요.",
      },
      career: {
        meaning:
          "새로운 기술을 배우거나 신입으로서 첫발을 내딛기에 아주 좋은 운입니다.",
        advice:
          "지금의 배움이 미래의 연봉을 결정합니다. 기초를 다지는 공부에 시간을 아끼지 마세요.",
      },
      money: {
        meaning: "작은 돈, 부업, 공부를 통한 수익 기회가 생깁니다.",
        advice: "기초 지식 습득이 미래 돈이 됩니다.",
      },
      mind: {
        meaning: "배우고 싶고 성장하고 싶은 의지가 강해집니다.",
        advice: "이론에만 그치지 말고 직접 손으로 구현(코딩)하며 배우세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "가벼운 관심은 있으나 진정성이 부족할 수 있습니다.",
        advice: "말보다 행동을 보세요.",
      },
      career: {
        meaning: "준비 부족, 집중력 분산으로 기회를 놓칠 수 있습니다.",
        advice: "기초 역량부터 다시 채우세요.",
      },
      money: {
        meaning: "소액 손실, 충동 소비 주의.",
        advice: "작은 돈 관리가 핵심입니다.",
      },
      mind: {
        meaning: "하고 싶은 건 많지만 실행력이 약합니다.",
        advice: "하나씩 끝내는 습관을 만드세요.",
      },
      relation: {
        meaning: "미숙한 태도로 신뢰가 흔들릴 수 있습니다.",
        advice: "성실함을 보여주세요.",
      },
      health: {
        meaning: "생활 습관이 흐트러질 수 있습니다.",
        advice: "기본 루틴부터 다시 세우세요.",
      },
      future: {
        meaning: "좋은 가능성도 준비 없으면 멀어집니다.",
        advice: "완벽주의 때문에 시작을 미루지 마세요.",
      },
      choice: {
        meaning: "흥미만 보고 선택하면 지속성이 약합니다.",
        advice: "현실성부터 검토하세요.",
      },
    },
  },

  {
    id: 47,
    name: "Knight of Pentacles (펜타클 나이트)",
    englishName: "Knight of Pentacles",
    type: "Pents",
    number: 12,
    keywords: [
      "성실함",
      "책임감",
      "느리지만 확실한",
      "신뢰",
      "루틴",
      "보수적 투자",
    ],
    reversedKeywords: ["정체", "고집", "답답함", "게으름"],
    image: "/images/Pentacles/pentacles12_Knight.webp",

    meaning:
      "속도는 느리지만 목표를 향해 아주 성실하고 확실하게 나아가는 에너지입니다.",
    advice: "요행을 바라지 말고 맡은 바 책임을 다해 묵묵히 전진하세요.",

    reversedMeaning:
      "꾸준함이 지나쳐 정체되거나, 변화 거부로 답답한 흐름이 생길 수 있습니다.",
    reversedAdvice:
      "때로는 효율을 위해 익숙한 도구가 아닌 새로운 기술 스택을 도입할 용기가 필요합니다.",

    shortMeaning: "느리지만 확실한 전진",
    yesNo: "Yes",
    powerScore: 84,

    categoryInterpretations: {
      love: {
        meaning: "천천히 깊어지는 안정적인 관계입니다.",
        advice: "속도보다 신뢰를 우선하세요.",
      },
      career: {
        meaning:
          "장기 프로젝트의 완수나 정적인 운영 및 유지보수 관련 꾸준함으로 인정받고 성과가 쌓입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "관계가 너무 느리게 흘러 답답함이 커질 수 있습니다.",
        advice: "감정 표현을 조금 더 적극적으로 하세요.",
      },
      career: {
        meaning: "성실하지만 발전 없는 반복 상태일 수 있습니다.",
        advice: "효율 개선이 필요합니다.",
      },
      money: {
        meaning: "안정적이나 성장 정체 가능성.",
        advice: "새로운 수익 구조를 검토하세요.",
      },
      mind: {
        meaning:
          "자신만의 방식에 갇혀 변화를 두려워하거나, 매일 반복되는 일상에 무기력함을 느낄 수 있습니다.",
        advice:
          "성실함은 무기지만 고집은 독입니다. 시야를 넓히기 위해 환경을 환기하거나 새로운 자극을 찾아보세요.",
      },
      relation: {
        meaning: "융통성 부족으로 거리감이 생길 수 있습니다.",
        advice: "원칙만큼 배려도 중요합니다.",
      },
      health: {
        meaning: "움직임 부족, 몸의 둔화 주의.",
        advice: "활동량을 늘리세요.",
      },
      future: {
        meaning: "가긴 가지만 너무 느릴 수 있습니다.",
        advice: "속도보다 방향 개선이 우선입니다.",
      },
      choice: {
        meaning: "안전하지만 지나치게 답답한 선택일 수 있습니다.",
        advice: "안정과 성장의 균형을 보세요.",
      },
    },
  },

  {
    id: 48,
    name: "Queen of Pentacles (펜타클 퀸)",
    englishName: "Queen of Pentacles",
    type: "Pents",
    number: 13,
    keywords: [
      "실용적",
      "풍요로운 환경",
      "양육",
      "현명함",
      "오감의 즐거움",
      "내조/외조",
    ],
    reversedKeywords: ["과보호", "집착", "소진", "불안정"],
    image: "/images/Pentacles/pentacles13_Queen.webp",

    meaning:
      "가정과 현실적인 부분을 아주 지혜롭고 풍요롭게 관리하는 인물입니다.",
    advice:
      "실용적인 면을 살려 주변을 돌보고, 자신을 위한 안락한 환경을 조성하세요.",

    reversedMeaning:
      "돌봄이 과해 자신을 소모하거나, 현실 문제로 여유를 잃을 수 있습니다.",
    reversedAdvice:
      "모든 것을 통제하려 하기보다 상황이 자연스럽게 흐르도록 두는 여유가 필요합니다.",

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
        meaning:
          "물질적, 정서적으로 충분히 만족스러운 상태이며 주변에 긍정적인 에너지를 전파합니다.",
        advice:
          "지금의 여유를 즐기며 나를 위한 작은 사치를 누려보세요. 당신은 충분히 그럴 자격이 있습니다.",
      },
      relation: {
        meaning: "주변을 챙기며 신뢰를 얻습니다.",
        advice: "과한 희생은 피하세요.",
      },
      health: {
        meaning: "생활 패턴 안정으로 건강운이 좋습니다.",
        advice:
          "직접 만든 건강한 음식이나 자연과 함께하는 휴식을 꾸준히 관리하세요.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "지나친 헌신이나 간섭으로 부담을 줄 수 있습니다.",
        advice: "돌봄과 통제는 다르다는 점을 기억하세요.",
      },
      career: {
        meaning: "실무 부담 과중, 책임감으로 지칠 수 있습니다.",
        advice: "혼자 떠안지 말고 분담하세요.",
      },
      money: {
        meaning: "생활비 압박이나 관리 스트레스 가능성.",
        advice: "완벽 관리보다 현실적인 예산이 중요합니다.",
      },
      mind: {
        meaning: "남을 챙기느라 자신을 놓칠 수 있습니다.",
        advice: "내 컨디션부터 확인하세요.",
      },
      relation: {
        meaning: "과보호나 간섭으로 거리감이 생길 수 있습니다.",
        advice: "상대의 자율성을 존중하세요.",
      },
      health: {
        meaning: "피로 누적, 정서적 소진 가능성.",
        advice: "휴식과 자기 돌봄이 필요합니다.",
      },
      future: {
        meaning: "기반은 있으나 에너지 관리가 필요합니다.",
        advice: "속도보다 지속 가능성을 보세요.",
      },
      choice: {
        meaning: "남을 위한 선택일 가능성이 큽니다.",
        advice: "내 현실과 행복도 기준에 넣으세요.",
      },
    },
  },

  {
    id: 49,
    name: "King of Pentacles (펜타클 킹)",
    englishName: "King of Pentacles",
    type: "Pents",
    number: 14,
    keywords: ["자산가", "신용", "성공", "마이더스의 손", "현실적 조언자"],
    reversedKeywords: ["탐욕", "고집", "물질주의", "통제욕"],
    image: "/images/Pentacles/pentacles14_King.webp",

    meaning:
      "물질적 성공의 정점에 도달한 인물로, 뛰어난 비즈니스 능력과 안정된 자산을 보유하고 있음을 의미합니다.",
    advice:
      "지금까지 쌓아온 성과를 잘 유지하고 관리하세요. 현실적이고 보수적인 판단이 큰 이득을 가져다줄 것입니다.",

    reversedMeaning:
      "성공은 있으나 욕심, 권위주의, 지나친 통제로 균형을 잃을 수 있습니다.",
    reversedAdvice: "돈과 성과만 좇기보다 관계와 품격까지 함께 관리하세요.",

    shortMeaning: "성공과 안정의 정점",
    yesNo: "Yes",
    powerScore: 97,

    categoryInterpretations: {
      love: {
        meaning: "믿음직하고 책임감 있는 상대와의 인연을 뜻합니다.",
        advice: "말보다 꾸준한 행동을 보는 눈이 중요합니다.",
      },
      career: {
        meaning:
          "최고의 실무 역량과 리더십을 발휘하여 실질적인 부와 명예를 거머쥐는 시기입니다.",
        advice:
          "단기적인 유행에 흔들리지 마세요. 당신이 구축한 견고한 시스템과 경험이 곧 정답입니다.",
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

    reversedCategoryInterpretations: {
      love: {
        meaning: "소유욕이나 통제 성향으로 갈등이 생길 수 있습니다.",
        advice: "상대방은 당신의 소유물이 아닌 인격체임을 잊지 마세요.",
      },
      career: {
        meaning: "권위적 리더십, 고집으로 팀 흐름이 막힐 수 있습니다.",
        advice: "성과만큼 소통도 중요합니다.",
      },
      money: {
        meaning: "탐욕, 무리한 투자, 돈 집착 주의.",
        advice: "안정 자산 중심으로 재정비하세요.",
      },
      mind: {
        meaning: "겉은 강해도 불안 때문에 더 움켜쥘 수 있습니다.",
        advice: "통제보다 신뢰를 배우세요.",
      },
      relation: {
        meaning: "권위적 태도로 거리감이 생길 수 있습니다.",
        advice: "존중받고 싶다면 먼저 존중하세요.",
      },
      health: {
        meaning: "과로, 스트레스, 생활 불균형 주의.",
        advice: "성과보다 회복 루틴이 우선입니다.",
      },
      future: {
        meaning: "기반은 강하지만 운영 방식 수정이 필요합니다.",
        advice: "고집을 내려놓으면 더 커집니다.",
      },
      choice: {
        meaning:
          "이익만 쫓다가 명분을 잃거나, 너무 보수적인 태도로 오히려 기회를 놓칠 수 있는 선택입니다.",
        advice:
          "숫자 너머에 있는 가치를 보세요. 당장의 이득보다 장기적인 평판과 관계가 더 큰 자산입니다.",
      },
    },
  },
];
