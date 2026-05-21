import React from "react";

import ShareCard from "./ShareCard";
import type { ShareData } from "../../utils/result/createShareData";

type Props = {
  shareRef: React.RefObject<HTMLDivElement | null>;

  shareData: ShareData;
};

export default function ResultSharePortal({ shareRef, shareData }: Props) {
  return (
    <div
      style={{
        position: "fixed",
        top: "-9999px",
        left: "0",

        width: "1080px",
        height: "1080px",

        overflow: "hidden",

        zIndex: -100,
      }}
    >
      <div ref={shareRef}>
        <ShareCard
          cardName={shareData.cardName}
          cardImage={shareData.cardImage}
          question={shareData.question}
          advice={shareData.advice}
          meaning={shareData.meaning}
          keywords={shareData.keywords}
          isReversed={shareData.isReversed}
        />
      </div>
    </div>
  );
}
