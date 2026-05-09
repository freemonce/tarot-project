// src/data/categoryData.ts

export const categoryData = {
  love: {
    label: "연애",
    sub: ["썸", "연애", "재회", "결혼"],
    questions: [
      "상대의 마음은?",
      "관계의 흐름은?",
      "주의할 점은?",
      "결혼 가능성은?",
    ],
  },

  career: {
    label: "진로 / 직업",
    sub: ["취업", "이직", "성공", "선택"],
    questions: ["이 선택이 맞을까?", "성공 가능성은?", "주의할 점은?"],
  },

  money: {
    label: "금전",
    sub: ["재물운", "투자", "지출"],
    questions: ["재물운 흐름은?", "투자 괜찮을까?", "주의할 점은?"],
  },

  relation: {
    label: "인간관계",
    sub: ["친구", "직장", "갈등"],
    questions: ["상대의 속마음은?", "관계 유지될까?", "조심할 점은?"],
  },

  self: {
    label: "자기자신",
    sub: ["현재 상태", "성장", "고민"],
    questions: [
      "지금 내 상태는?",
      "어떻게 성장해야 할까?",
      "이 고민 해결될까?",
    ],
  },
};
