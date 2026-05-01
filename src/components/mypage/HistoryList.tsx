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

export default function HistoryList({
  data,
  keyword,
  handleDelete,
  handleFavorite,
  onOpen,
}: Props) {
  if (!data.length) return <EmptyState navigate={() => {}} />;

  return (
    <div className="history-list">
      {data.map((item) => (
        <HistoryCard
          key={item.date}
          item={item}
          keyword={keyword}
          handleDelete={handleDelete}
          handleFavorite={handleFavorite}
          onOpen={() => onOpen(item)}
        />
      ))}
    </div>
  );
}
