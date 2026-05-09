// src > data > category.ts
import type { CategoryKey, UICategoryKey } from "../types/tarot";

export type CategoryUIItem = {
  key: UICategoryKey;
  label: string;
  icon: string;
  includes: CategoryKey[];
};

export const categoryUI = [
  {
    key: "love",
    label: "연애",
    icon: "💘",
    includes: ["love"] as CategoryKey[],
  },
  {
    key: "career",
    label: "진로 / 직업",
    icon: "💼",
    includes: ["career", "future", "choice"],
  },
  {
    key: "money",
    label: "금전",
    icon: "💰",
    includes: ["money"],
  },
  {
    key: "relation",
    label: "인간관계",
    icon: "🤝",
    includes: ["relation"],
  },
  {
    key: "self",
    label: "자기자신",
    icon: "🌱",
    includes: ["mind", "health"],
  },
] as const;

export const subCategoryMap: Record<UICategoryKey, string[]> = {
  love: ["썸", "연애", "재회", "결혼"],
  career: ["취업", "이직", "성장", "선택"],
  money: ["재물운", "투자", "지출"],
  relation: ["친구", "직장", "갈등"],
  self: ["내 상태", "성장", "방향"],
};

export const questionMap: Record<UICategoryKey, string[]> = {
  love: ["상대의 마음", "관계의 미래", "주의할 점"],
  career: ["이 선택이 맞을까?", "성공 가능성", "주의할 점"],
  money: ["재물 흐름", "손해 가능성", "기회 여부"],
  relation: ["상대의 속마음", "관계 흐름", "갈등 해결"],
  self: ["현재 상태", "성장 방향", "필요한 변화"],
};
