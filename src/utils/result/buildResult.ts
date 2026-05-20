import { specialCases } from "../../data/specialCases";
import { pickRandom } from "./pickRandom";

type Tone = "positive" | "neutral" | "negative";

type MainCategory = string;

type BuildResultParams = {
  mainCategory: MainCategory;
  subCategory: string;
  questionType: string;
  tone: string;
};

function convertTone(tone: string): Tone {
  if (tone === "hope") return "positive";

  if (tone === "anxiety" || tone === "warning" || tone === "dark") {
    return "negative";
  }

  return "neutral";
}

export function buildResult({
  mainCategory,
  subCategory,
  questionType,
  tone,
}: BuildResultParams): {
  specialMessage: string | null;
} {
  const situation = (specialCases as any)?.[mainCategory]?.[subCategory]?.[
    questionType
  ];

  if (!situation) {
    return {
      specialMessage: null,
    };
  }

  const convertedTone = convertTone(tone);

  const messages = situation[convertedTone];

  return {
    specialMessage: pickRandom(messages) ?? null,
  };
}
