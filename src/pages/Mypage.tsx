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
import InsightDeep from "../components/mypage/InsightDeep";
import DetailModal from "../components/mypage/DetailModal";

type SortType = "latest" | "oldest";

type FilterType =
  | "all"
  | "love"
  | "career"
  | "money"
  | "mind"
  | "relation"
  | "future"
  | "choice";

const CATEGORY_OPTIONS = [
  { value: "all", label: "전체" },
  { value: "love", label: "연애" },
  { value: "career", label: "커리어" },
  { value: "money", label: "금전" },
  { value: "mind", label: "심리" },
  { value: "relation", label: "인간관계" },
  { value: "future", label: "미래운세" },
  { value: "choice", label: "선택/결정" },
];

const MODAL_DURATION = 260;

export default function MyPage() {
  const navigate = useNavigate();

  const closeTimer = useRef<number | null>(null);

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

  const selectedMeaning = selectedReversed
    ? (selected?.card.reversedMeaning ?? selected?.card.meaning)
    : selected?.card.meaning;

  const selectedAdvice = selectedReversed
    ? (selected?.card.reversedAdvice ?? selected?.card.advice)
    : selected?.card.advice;

  const selectedKeywords =
    selectedReversed && selected?.card.reversedKeywords?.length
      ? selected.card.reversedKeywords
      : selected?.card.keywords || [];

  /* =========================
     FILTERED LIST
  ========================= */
  const filteredList = useMemo(() => {
    let data = [...list];

    if (filter !== "all") {
      data = data.filter((item) => item.category === filter);
    }

    if (showFavOnly) {
      data = data.filter((item) => item.favorite);
    }

    const search = keyword.trim().toLowerCase();

    if (search) {
      data = data.filter((item) => {
        const pool = [
          item.content,
          item.card.name,
          item.card.meaning,
          item.card.advice,
          ...(item.card.keywords || []),
        ]
          .join(" ")
          .toLowerCase();

        return pool.includes(search);
      });
    }

    data.sort((a, b) => {
      if (favFirst && !!a.favorite !== !!b.favorite) {
        return a.favorite ? -1 : 1;
      }

      return sort === "latest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime();
    });

    return data;
  }, [list, filter, keyword, sort, showFavOnly, favFirst]);

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

  const topType = useMemo(() => {
    if (!list.length) return "-";

    const map: Record<string, number> = {};

    list.forEach((item) => {
      map[item.card.type] = (map[item.card.type] || 0) + 1;
    });

    return Object.entries(map).sort((a, b) => b[1] - a[1])[0][0];
  }, [list]);

  const recentKeywords = useMemo(() => {
    const words = list
      .slice(0, 5)
      .flatMap((item) => item.card.keywords || [])
      .slice(0, 3);

    return words.length ? words.join(" / ") : "-";
  }, [list]);

  const topCards = useMemo(() => {
    const map: Record<string, number> = {};

    list.forEach((item) => {
      map[item.card.name] = (map[item.card.name] || 0) + 1;
    });

    return Object.entries(map)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);
  }, [list]);

  const moodFlow = useMemo(() => {
    const recent = list.slice(0, 5).flatMap((item) => item.card.keywords || []);

    const joined = recent.join(" ");

    if (/불안|걱정|혼란|갈등/.test(joined)) return "불안기 😵";
    if (/회복|안정|치유|평화/.test(joined)) return "회복기 🌿";
    if (/성장|도전|기회|시작/.test(joined)) return "상승기 🚀";

    return "변화기 ✨";
  }, [list]);

  const monthCount = useMemo(() => {
    const now = new Date();

    return list.filter((item) => {
      const d = new Date(item.date);

      return (
        d.getFullYear() === now.getFullYear() && d.getMonth() === now.getMonth()
      );
    }).length;
  }, [list]);

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
    const blob = new Blob([data], { type: "application/json" });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "tarot_backup.json";
    a.click();
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
          <>
            <section className="insight-grid">
              <div className="insight-box">
                <span>총 기록</span>
                <strong>{totalCount}개</strong>
              </div>

              <div className="insight-box">
                <span>가장 많이 나온 타입</span>
                <strong>{topType}</strong>
              </div>

              <div className="insight-box">
                <span>최근 키워드</span>
                <strong>{recentKeywords}</strong>
              </div>

              <div className="insight-box">
                <span>TOP3 카드</span>
                <div className="rank-list">
                  {topCards.map(([name, count], i) => (
                    <div key={name} className="rank-row">
                      <b>{i === 0 ? "🥇" : i === 1 ? "🥈" : "🥉"}</b>
                      <em>{name}</em>
                      <strong>{count}회</strong>
                    </div>
                  ))}
                </div>
              </div>

              <div className="insight-box">
                <span>최근 감정 흐름</span>
                <strong>{moodFlow}</strong>
              </div>

              <div className="insight-box">
                <span>이번 달 질문 수</span>
                <strong>{monthCount}회</strong>
              </div>

              <div className="insight-box">
                <span>연속 기록</span>
                <strong>{streak}일 🔥</strong>
              </div>

              <div className="insight-box">
                <span>가장 많이 묻는 주제</span>
                <strong>{topCategory}</strong>
              </div>
            </section>

            <InsightDeep list={list} />
          </>
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
          <div className="empty-filter-result">검색 결과가 없습니다.</div>
        ) : (
          <>
            <HistoryList
              data={visibleList}
              keyword={keyword}
              handleDelete={handleDelete}
              handleFavorite={handleFavorite}
              onOpen={openModal}
            />

            {hasMore && (
              <div className="load-more-wrap">
                <Button
                  variant="ghost"
                  className="load-more-btn"
                  onClick={() => setVisibleCount((prev) => prev + 10)}
                >
                  이전 기록 10개 더 보기
                </Button>
              </div>
            )}
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
