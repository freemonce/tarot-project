// src/pages/MyPage.tsx

import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Mypage.css";

import {
  clearResults,
  getResults,
  importResults,
  mergeResults,
  saveResults,
} from "../services/storage";

import Button from "../components/Button";
import EmptyState from "../components/mypage/EmptyState";
import { getStreakDays, getTopCategory } from "../services/stats";

import { HistoryItem } from "../types/history";
import Toolbar from "../components/mypage/Toolbar";
import HistoryList from "../components/mypage/HistoryList";
import MyPageInsight from "../components/mypage/MyPageInsight";
import DetailModal from "../components/mypage/DetailModal";
import useDebounce from "../hooks/useDebounce";
import useHistoryFilter from "../hooks/useHistoryFilter";
import {
  getTopCards,
  getTopType,
  getRecentKeywords,
  getMoodFlow,
  getMonthCount,
} from "../services/stats/insight";
import useInfiniteScroll from "../hooks/useInfiniteScroll";

type SortType = "latest" | "oldest";

type FilterType =
  | "all"
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "health"
  | "future"
  | "choice";

const CATEGORY_OPTIONS = [
  { value: "all", label: "전체" },
  { value: "love", label: "연애" },
  { value: "career", label: "커리어" },
  { value: "money", label: "금전" },
  { value: "mind", label: "심리" },
  { value: "relation", label: "인간관계" },
  { value: "health", label: "건강" },
  { value: "future", label: "미래운세" },
  { value: "choice", label: "선택/결정" },
];

const MODAL_DURATION = 260;

export default function MyPage() {
  const navigate = useNavigate();

  const closeTimer = useRef<number | null>(null);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  /* =========================
     STATE
  ========================= */

  const [list, setList] = useState<HistoryItem[]>(getResults());

  useEffect(() => {
    setList(getResults() ?? []);
  }, []);

  const [filter, setFilter] = useState<FilterType>(
    () => (localStorage.getItem("mypage_filter") as FilterType) || "all",
  );

  const [keyword, setKeyword] = useState(
    () => localStorage.getItem("mypage_keyword") || "",
  );

  const debouncedKeyword = useDebounce(keyword, 300);

  const [sort, setSort] = useState<SortType>(() => {
    const saved = localStorage.getItem("mypage_sort");
    return saved === "oldest" ? "oldest" : "latest";
  });

  const [showFavOnly, setShowFavOnly] = useState(
    () => localStorage.getItem("mypage_showFavOnly") === "true",
  );

  const [favFirst, setFavFirst] = useState(
    () => localStorage.getItem("mypage_favFirst") === "true",
  );

  const [selected, setSelected] = useState<HistoryItem | null>(null);
  const [visible, setVisible] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);
  const [closing, setClosing] = useState(false);

  /* =========================
     SAVE
  ========================= */
  const updateList = useCallback((next: HistoryItem[]) => {
    setList(next);
    saveResults(next);
  }, []);

  /* =========================
     CRUD
  ========================= */
  const handleDelete = useCallback(
    (targetDate: string) => {
      const next = list.filter((item) => item.date !== targetDate);
      updateList(next);

      if (selected?.date === targetDate) {
        setSelected(null);
      }
    },
    [list, selected, updateList],
  );

  const handleFavorite = useCallback(
    (targetDate: string) => {
      const next = list.map((item) =>
        item.date === targetDate ? { ...item, favorite: !item.favorite } : item,
      );

      updateList(next);

      if (selected?.date === targetDate) {
        const found = next.find((v) => v.date === targetDate) || null;
        setSelected(found);
      }
    },
    [list, selected, updateList],
  );

  const handleClearAll = () => {
    const ok = window.confirm("모든 기록을 삭제할까요?");
    if (!ok) return;

    setList([]);
    clearResults();

    setSelected(null);
    setKeyword("");
    setFilter("all");
    setSort("latest");
    setShowFavOnly(false);
    setFavFirst(false);
  };

  const handleResetFilters = () => {
    setFilter("all");
    setKeyword("");
    setSort("latest");
    setShowFavOnly(false);
    setFavFirst(false);
  };

  /* =========================
     MODAL
  ========================= */
  const openModal = useCallback((item: HistoryItem) => {
    setSelected(item);
    setClosing(false);
    setVisible(false);

    requestAnimationFrame(() => setVisible(true));
  }, []);

  const closeModal = useCallback(() => {
    if (closing) return;

    setClosing(true);

    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    closeTimer.current = window.setTimeout(() => {
      setSelected(null);
      setVisible(false);
      setClosing(false);
      closeTimer.current = null;
    }, MODAL_DURATION);
  }, [closing]);

  useEffect(() => {
    if (!localStorage.getItem("backup_guide_seen")) {
      alert("데이터는 기기에 저장됩니다.\n백업을 권장합니다.");
      localStorage.setItem("backup_guide_seen", "true");
    }
  }, []);

  /* =========================
     SELECTED DATA
  ========================= */
  const selectedReversed = selected?.isReversed ?? false;

  const selectedMeaning =
    selected?.meaning ||
    (selectedReversed
      ? (selected?.card.reversedMeaning ?? selected?.card.meaning)
      : selected?.card.meaning);

  const selectedAdvice =
    selected?.advice ||
    (selectedReversed
      ? (selected?.card.reversedAdvice ?? selected?.card.advice)
      : selected?.card.advice);

  const selectedKeywords = selected?.keywords?.length
    ? selected.keywords
    : selectedReversed && selected?.card.reversedKeywords?.length
      ? selected.card.reversedKeywords
      : selected?.card.keywords || [];

  /* =========================
   FILTERED LIST
========================= */

  const filteredList = useHistoryFilter({
    data: list,

    query: debouncedKeyword,

    sort,

    category: filter,

    tone: "all",

    favoriteOnly: showFavOnly,

    favFirst,
  });

  const streak = getStreakDays(list);
  const topCategory = getTopCategory(list);

  const visibleList = filteredList.slice(0, visibleCount);

  const hasMore = filteredList.length > visibleCount;

  /* =========================
     INSIGHT
  ========================= */
  const totalCount = list.length;

  const favoriteCount = useMemo(
    () => list.filter((item) => item.favorite).length,
    [list],
  );

  const topCards = getTopCards(list);

  const topType = getTopType(list);

  const recentKeywords = getRecentKeywords(list);

  const moodFlow = getMoodFlow(list);

  const monthCount = getMonthCount(list);

  const hasHistory = filteredList.length > 0;

  const handleImport = async (file: File) => {
    const text = await file.text();

    try {
      const data = importResults(text);
      const merged = mergeResults(list, data);
      updateList(merged);
    } catch {
      alert("파일 오류");
    }
  };

  const handleExport = () => {
    const data = JSON.stringify(list);
    const blob = new Blob([data], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");

    a.href = url;
    a.download = "tarot_backup.json";
    a.click();

    URL.revokeObjectURL(url);
  };

  /* =========================
     EFFECT
  ========================= */
  useEffect(() => {
    localStorage.setItem("mypage_filter", filter);
    localStorage.setItem("mypage_keyword", keyword);
    localStorage.setItem("mypage_sort", sort);
    localStorage.setItem("mypage_showFavOnly", String(showFavOnly));
    localStorage.setItem("mypage_favFirst", String(favFirst));
  }, [filter, keyword, sort, showFavOnly, favFirst]);

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  useEffect(() => {
    if (!selected) return;

    document.body.style.overflow = "hidden";

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEsc);
    };
  }, [selected, closeModal]);

  useEffect(() => {
    setVisibleCount(10);
  }, [keyword, filter, sort, showFavOnly, favFirst]);

  useInfiniteScroll({
    target: loadMoreRef,
    hasMore,
    onLoadMore: () => {
      setVisibleCount((prev) => prev + 10);
    },
  });

  /* =========================
     UI
  ========================= */
  return (
    <div className="mypage-root">
      {/* HEADER */}
      <div className="mypage-wrap">
        <header className="mypage-header">
          <p className="mypage-mini">MY TAROT JOURNAL</p>
          <h1 className="mypage-title">내 질문들의 기록관</h1>

          <Button
            variant="ghost"
            className="back-home-btn"
            onClick={() => navigate("/")}
          >
            홈으로
          </Button>
          <p className="mypage-sub">지난 고민과 메시지를 다시 돌아보세요.</p>
        </header>

        {/* INSIGHT */}
        {list.length > 0 && (
          <MyPageInsight
            totalCount={totalCount}
            topType={topType}
            recentKeywords={recentKeywords}
            topCards={topCards}
            moodFlow={moodFlow}
            monthCount={monthCount}
            streak={streak}
            topCategory={topCategory}
            list={list}
          />
        )}

        {/* TOOLBAR */}
        <Toolbar
          filter={filter}
          setFilter={setFilter}
          CATEGORY_OPTIONS={CATEGORY_OPTIONS}
          favFirst={favFirst}
          setFavFirst={setFavFirst}
          keyword={keyword}
          setKeyword={setKeyword}
          sort={sort}
          setSort={setSort}
          showFavOnly={showFavOnly}
          setShowFavOnly={setShowFavOnly}
          favoriteCount={favoriteCount}
          handleResetFilters={handleResetFilters}
          handleClearAll={handleClearAll}
          handleImport={handleImport}
          handleExport={handleExport}
        />

        {/* LIST */}
        {!list.length ? (
          <EmptyState navigate={navigate} />
        ) : !hasHistory ? (
          <div className="empty-filter-result glass-panel">
            검색 결과가 없습니다.
          </div>
        ) : (
          <>
            <HistoryList
              data={visibleList}
              keyword={keyword}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
              onOpen={openModal}
            />

            {hasMore && <div ref={loadMoreRef} className="load-trigger" />}
          </>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <DetailModal
          item={selected}
          visible={visible}
          closing={closing}
          onClose={closeModal}
          onDelete={handleDelete}
          onFavorite={handleFavorite}
        />
      )}
    </div>
  );
}
