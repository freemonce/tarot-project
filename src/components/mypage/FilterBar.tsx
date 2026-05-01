type Props = {
  query: string;
  setQuery: (v: string) => void;
  sort: string;
  setSort: (v: any) => void;
  category: string;
  setCategory: (v: string) => void;
  favoriteOnly: boolean;
  setFavoriteOnly: (v: boolean) => void;
};

export default function FilterBar({
  query,
  setQuery,
  sort,
  setSort,
  category,
  setCategory,
  favoriteOnly,
  setFavoriteOnly,
}: Props) {
  return (
    <div className="filter-bar">
      {/* 검색 */}
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="질문 검색..."
      />

      {/* 정렬 */}
      <select value={sort} onChange={(e) => setSort(e.target.value)}>
        <option value="latest">최신순</option>
        <option value="oldest">오래된순</option>
      </select>

      {/* 카테고리 */}
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="all">전체</option>
        <option value="love">연애</option>
        <option value="career">커리어</option>
      </select>

      {/* 즐겨찾기 */}
      <button
        className={favoriteOnly ? "active" : ""}
        onClick={() => setFavoriteOnly(!favoriteOnly)}
      >
        ⭐
      </button>
    </div>
  );
}
