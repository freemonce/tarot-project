// src/utils/result/getEnergyLabel.ts

const getEnergyLabel = (energy: string) => {
  switch (energy) {
    case "hope":
      return "희망적인 흐름";

    case "dark":
      return "어두운 흐름";

    case "warning":
      return "주의가 필요한 흐름";

    case "anxiety":
      return "불안정한 흐름";

    case "positive":
      return "긍정적인 흐름";

    case "neutral":
    default:
      return "중립적인 흐름";
  }
};

export default getEnergyLabel;
