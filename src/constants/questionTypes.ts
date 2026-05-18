// src/constants/questionTypes.ts

export const QUESTION_TYPES = {
  love: {
    REUNION: "reunion",
    CONFESSION: "confession",
    SOME: "some",
    BREAKUP: "breakup",
    RELATION_FLOW: "relationFlow",
  },

  money: {
    INVEST: "invest",
    SIDE_HUSTLE: "sideHustle",
    CONSUMPTION: "consumption",
  },

  career: {
    TRANSFER: "transfer",
    PROMOTION: "promotion",
    RESIGN: "resign",
    INTERVIEW: "interview",
  },

  mind: {
    ANXIETY: "anxiety",
    HEALING: "healing",
    CONFIDENCE: "confidence",
  },
  relation: {
    FEELING: "feeling",
    RELATION_FLOW: "relationFlow",
    DISTANCE: "distance",
    HUMAN_RELATION: "humanRelation",
    MISUNDERSTANDING: "misunderstanding",
  },
  future: {
    NEAR_FUTURE: "nearFuture",
    MONTH_FLOW: "monthFlow",
    CHANGE: "change",

    OPPORTUNITY: "opportunity",
    TURNING_POINT: "turningPoint",
    POSSIBILITY: "possibility",
    TIMING: "timing",
    DIRECTION: "direction",
  },
} as const;
