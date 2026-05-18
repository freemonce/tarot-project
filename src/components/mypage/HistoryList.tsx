// src/components/mypage/HistoryList.tsx
import React, { memo } from "react";

import EmptyState from "./EmptyState";
import HistoryCard from "./HistoryCard";
import { HistoryItem } from "../../types/history";

type Props = {
  data: HistoryItem[];
  keyword: string;
  handleDelete: (date: string) => void;
  handleFavorite: (date: string) => void;
  onOpen: (item: HistoryItem) => void;
};

function HistoryList({
  data,
  keyword,
  handleDelete,
  handleFavorite,
  onOpen,
}: Props) {
  if (!data.length) return <EmptyState navigate={() => {}} />;

  return (
    <section className="history-list">
      {data.map((item, index) => (
        <div key={item.date} className={index < 10 ? "initial-show" : ""}>
          <HistoryCard
            item={item}
            keyword={keyword}
            handleDelete={handleDelete}
            handleFavorite={handleFavorite}
            onOpen={onOpen}
          />
        </div>
      ))}
    </section>
  );
}

export default memo(HistoryList);
