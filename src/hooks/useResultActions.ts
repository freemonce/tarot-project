import React from "react";

import type { TarotCard } from "../types/tarot";

import { buildShareText, copyToClipboard } from "../services/shareService";

import { saveShareImage } from "../services/shareImageService";

type Props = {
  card: TarotCard;

  content: string;

  result: {
    meaning: string;
    advice: string;
    keywords: string[];
  };

  isReversed: boolean;

  shareRef: React.RefObject<HTMLDivElement | null>;

  showToast: (msg: string) => void;
};

export default function useResultActions({
  card,
  content,
  result,
  isReversed,
  shareRef,
  showToast,
}: Props) {
  const handleCopy = async () => {
    try {
      const text = buildShareText({
        card,
        content,
        meaning: result.meaning,
        advice: result.advice,
        isReversed,
      });

      await copyToClipboard(text);

      showToast("📝 결과 복사 완료");
    } catch {
      showToast("복사 실패");
    }
  };

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(window.location.href);

    showToast("🔗 링크 복사 완료");
  };

  const handleSaveImage = async (
    isPreparingShare: boolean,
    setIsPreparingShare: React.Dispatch<React.SetStateAction<boolean>>,
  ) => {
    if (isPreparingShare) return;

    setIsPreparingShare(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 150));

      if (!shareRef.current) {
        showToast("이미지 생성 실패");
        return;
      }

      await saveShareImage({
        target: shareRef.current,

        onSuccess: () => {
          showToast("📷 공유 이미지 저장 완료");
        },

        onFail: () => {
          showToast("이미지 저장 실패");
        },
      });
    } finally {
      setIsPreparingShare(false);
    }
  };

  return {
    handleCopy,
    handleCopyLink,
    handleSaveImage,
  };
}
