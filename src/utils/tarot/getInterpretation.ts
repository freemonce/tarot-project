// src/utils/tarot/getInterpretation.ts

import type { CategoryKey } from "../../types/tarot";

import { tarotData } from "../../data/tarot/index";

export function getInterpretation(
  cardNumber: number,
  isReversed: boolean,
  category?: CategoryKey,
) {
  const card = tarotData[cardNumber];

  if (!card) return null;

  const direction = isReversed ? card.reversed : card.upright;

  const interpretation =
    category && direction.categories?.[category]
      ? direction.categories[category]
      : direction.general;

  return interpretation;
}
