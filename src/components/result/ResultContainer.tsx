import { useLocation } from "react-router-dom";
import { ResultPageState } from "../../types/navigation";
import { CategoryKey } from "../../types/tarot";
import { getResultData } from "../../hooks/useResultData";
import { buildShareText, copyToClipboard } from "../../services/shareService";
import ResultView from "./ResultView";
import { tarotCards } from "../../data/tarot";
import { CATEGORY_KEYS } from "../../constants/category";

export default function ResultContainer() {
  const location = useLocation();

  const state = location.state as ResultPageState | null;

  const content = state?.content ?? "";
  const category = state?.mainCategory ?? "love";
  const isReversed = state?.isReversed ?? false;

  const card = state?.card ?? tarotCards[0];

  const safeCategory: CategoryKey = CATEGORY_KEYS.includes(
    category as CategoryKey,
  )
    ? (category as CategoryKey)
    : "love";

  const resultData = getResultData({
    card,
    category: safeCategory,
    subCategory: state?.subCategory,
    questionType: state?.questionType,
    isReversed,
  });

  const handleCopy = async () => {
    const text = buildShareText({
      card,
      content,
      meaning: resultData.meaning,
      advice: resultData.advice,
      isReversed,
    });

    await copyToClipboard(text);
  };

  return (
    <ResultView
      card={card}
      content={content}
      resultData={resultData}
      isReversed={isReversed}
      onCopy={handleCopy}
    />
  );
}
