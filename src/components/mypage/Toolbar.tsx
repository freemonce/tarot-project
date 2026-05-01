import Button from "../Button";

type Props = {
  filter: string;
  setFilter: (v: any) => void;
  CATEGORY_OPTIONS: { value: string; label: string }[];

  favFirst: boolean;
  setFavFirst: (v: boolean) => void;

  keyword: string;
  setKeyword: (v: string) => void;

  sort: string;
  setSort: (v: any) => void;

  showFavOnly: boolean;
  setShowFavOnly: (v: boolean) => void;

  favoriteCount: number;

  handleResetFilters: () => void;
  handleClearAll: () => void;

  handleImport: (file: File) => void;
  handleExport: () => void;
};

export default function Toolbar({
  filter,
  setFilter,
  CATEGORY_OPTIONS,
  favFirst,
  setFavFirst,
  keyword,
  setKeyword,
  sort,
  setSort,
  showFavOnly,
  setShowFavOnly,
  favoriteCount,
  handleResetFilters,
  handleClearAll,
  handleImport,
  handleExport,
}: Props) {
  return (
    <section className="mypage-topbar">
      <p className="backup-guide">
        💾 백업: 파일로 저장 📂 불러오기: 파일 불러오기
      </p>

      <div className="toolbar-controls">
        <select value={filter} onChange={(e) => setFilter(e.target.value)}>
          {CATEGORY_OPTIONS.map((item) => (
            <option key={item.value} value={item.value}>
              {item.label}
            </option>
          ))}
        </select>

        <Button
          className={favFirst ? "active" : ""}
          onClick={() => setFavFirst(!favFirst)}
        >
          📌 {favFirst ? "ON" : "OFF"}
        </Button>
        <div className="search-box">
          <input
            value={keyword}
            placeholder="검색..."
            onChange={(e) => setKeyword(e.target.value)}
          />

          {keyword && (
            <button className="clear-btn" onClick={() => setKeyword("")}>
              ✕
            </button>
          )}
        </div>

        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="latest">최신순</option>
          <option value="oldest">오래된순</option>
        </select>

        <Button onClick={() => setShowFavOnly(!showFavOnly)}>
          {showFavOnly ? `⭐ ${favoriteCount}` : `☆ ${favoriteCount}`}
        </Button>

        <Button onClick={handleResetFilters}>초기화</Button>
        <Button variant="danger" onClick={handleClearAll}>
          전체삭제
        </Button>

        <label className="btn">
          불러오기
          <input
            type="file"
            hidden
            onChange={(e) => {
              const file = e.target.files?.[0];
              if (file) handleImport(file);
            }}
          />
        </label>

        <Button onClick={handleExport}>백업</Button>
      </div>
    </section>
  );
}
