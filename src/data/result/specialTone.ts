import { QUESTION_TYPES } from "../../constants/questionTypes";
import { SpecialTone } from "../../types/tone";

export const specialTone: SpecialTone[] = [
  {
    questionType: QUESTION_TYPES.love.BREAKUP,
    toneStyle: "mystic",
  },

  {
    card: "Tower",
    toneStyle: "direct",
  },

  {
    card: "Devil",
    toneStyle: "direct",
  },

  {
    card: "Star",
    toneStyle: "healing",
  },

  {
    card: "Justice",
    toneStyle: "cold",
  },

  {
    card: "Temperance",
    toneStyle: "healing",
  },

  {
    card: "Moon",
    toneStyle: "poetic",
  },

  {
    card: "Hermit",
    toneStyle: "poetic",
  },
];
