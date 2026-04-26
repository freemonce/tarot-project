// src/pages/MyPage.tsx

import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/pages/Mypage.css";

import { clearResults, getResults, saveResults } from "../services/storage";

import Button from "../components/Button";
import EmptyState from "../components/mypage/EmptyState";
import HistoryCard from "../components/mypage/HistoryCard";

import { TarotCard } from "../types/tarot";

type HistoryItem = {
  card: TarotCard;
  content: string;
  category: string;
  date: string;
};

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

  const [list, setList] = useState<HistoryItem[]>(getResults());

  const [selected, setSelected] = useState<HistoryItem | null>(null);
  const [closing, setClosing] = useState(false);
  const [visible, setVisible] = useState(false);

  const [filter, setFilter] = useState<FilterType>("all");
  const [keyword, setKeyword] = useState("");
  const [sort, setSort] = useState<SortType>("latest");

  /* CRUD */
  const updateList = (nextList: HistoryItem[]) => {
    setList(nextList);
    saveResults(nextList);
  };

  const handleDelete = useCallback((targetDate: string) => {
    setList((prev) => {
      const next = prev.filter((item) => item.date !== targetDate);
      saveResults(next);
      return next;
    });
  }, []);

  const handleClearAll = () => {
    const ok = window.confirm("모든 기록을 삭제할까요?");
    if (!ok) return;

    setList([]);
    clearResults();
  };

  /* MODAL */
  const openModal = useCallback((item: HistoryItem) => {
    setClosing(false);
    setSelected(item);
    setVisible(false);

    requestAnimationFrame(() => {
      setVisible(true);
    });
  }, []);

  const closeModal = useCallback(() => {
    if (closing) return;

    setClosing(true);

    setTimeout(() => {
      setSelected(null);
      setClosing(false);
      setVisible(false);
    }, MODAL_DURATION);
  }, [closing]);

  /* FILTER */
  const filteredList = useMemo(() => {
    let data = [...list];

    if (filter !== "all") {
      data = data.filter((item) => item.category === filter);
    }

    const searchWord = keyword.trim().toLowerCase();

    if (searchWord) {
      data = data.filter(
        (item) =>
          item.content.toLowerCase().includes(searchWord) ||
          item.card.name.toLowerCase().includes(searchWord) ||
          item.card.keywords?.some((tag) =>
            tag.toLowerCase().includes(searchWord),
          ),
      );
    }

    data.sort((a, b) =>
      sort === "latest"
        ? new Date(b.date).getTime() - new Date(a.date).getTime()
        : new Date(a.date).getTime() - new Date(b.date).getTime(),
    );

    return data;
  }, [list, filter, keyword, sort]);

  const hasHistory = filteredList.length > 0;

  /* INSIGHT */
  const totalCount = list.length;

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

  /* ESC + BODY LOCK */
  useEffect(() => {
    if (!selected) return;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selected]);

  /* =========================
     UI
  ========================= */
  return (
    <div className="mypage-root">
      <div className="mypage-overlay" />

      <div className="mypage-wrap">
        {/* HEADER */}
        <header className="mypage-header">
          <p className="mypage-mini">MY TAROT JOURNAL</p>

          <h1 className="mypage-title">내 질문들의 기록관</h1>

          <p className="mypage-sub">지난 고민과 메시지를 다시 돌아보세요.</p>
        </header>

        {/* INSIGHT */}
        {list.length > 0 && (
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
          </section>
        )}

        {/* TOOLBAR */}
        {list.length > 0 && (
          <div className="mypage-topbar">
            <span className="history-count">
              {filteredList.length}개의 기록
            </span>

            <div className="toolbar-controls">
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value as FilterType)}
              >
                {CATEGORY_OPTIONS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>

              <input
                type="text"
                placeholder="질문 / 카드 / 키워드 검색"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />

              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortType)}
              >
                <option value="latest">최신순</option>
                <option value="oldest">오래된순</option>
              </select>

              <Button variant="danger" onClick={handleClearAll}>
                전체 삭제
              </Button>
            </div>
          </div>
        )}

        {/* EMPTY */}
        {!list.length ? (
          <EmptyState navigate={navigate} />
        ) : !hasHistory ? (
          <div className="empty-filter-result">검색 결과가 없습니다.</div>
        ) : (
          <section className="history-list">
            {filteredList.map((item) => (
              <HistoryCard
                key={`${item.date}-${item.card.id}`}
                item={item}
                handleDelete={handleDelete}
                onOpen={() => openModal(item)}
              />
            ))}

            <div className="restart-btn">
              <Button variant="primary" size="lg" onClick={() => navigate("/")}>
                🔮 새로운 질문 시작하기
              </Button>
            </div>
          </section>
        )}
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className={`detail-overlay ${
            closing ? "hide" : visible ? "show" : "hide"
          }`}
          onClick={closeModal}
        >
          <div
            className={`detail-modal ${
              closing ? "hide" : visible ? "show" : "hide"
            }`}
            onClick={(e: React.MouseEvent<HTMLDivElement>) =>
              e.stopPropagation()
            }
          >
            <button className="detail-close" onClick={closeModal} autoFocus>
              ✕
            </button>

            <p className="detail-date">
              {new Date(selected.date).toLocaleDateString("ko-KR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>

            <h2 className="detail-title">{selected.card.name}</h2>
            <p className="detail-subtype">{selected.card.type}</p>

            <section>
              <h4>질문</h4>
              <p>{selected.content}</p>
            </section>

            <section>
              <h4>카드 의미</h4>
              <p>{selected.card.meaning}</p>
            </section>

            <section>
              <h4>조언</h4>
              <p>{selected.card.advice}</p>
            </section>

            {selected.card.keywords?.length > 0 && (
              <section>
                <h4>키워드</h4>

                <div className="detail-tags">
                  {selected.card.keywords.map((tag, i) => (
                    <span key={i}>#{tag}</span>
                  ))}
                </div>
              </section>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
