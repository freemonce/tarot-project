// src/components/mypage/MyPageInsight.tsx

import React, { memo } from "react";

import InsightDeep from "./InsightDeep";

import { HistoryItem } from "../../types/history";

type Props = {
  totalCount: number;

  topType: string;

  recentKeywords: string;

  topCards: [string, number][];

  moodFlow: string;

  monthCount: number;

  streak: number;

  topCategory: string;

  list: HistoryItem[];
};

function MyPageInsight({
  totalCount,
  topType,
  recentKeywords,
  topCards,
  moodFlow,
  monthCount,
  streak,
  topCategory,
  list,
}: Props) {
  return (
    <>
      <section className="insight-grid">
        <div className="insight-box glass-panel">
          <span>총 기록</span>
          <strong>{totalCount}개</strong>
        </div>

        <div className="insight-box glass-panel">
          <span>가장 많이 나온 타입</span>
          <strong>{topType}</strong>
        </div>

        <div className="insight-box glass-panel">
          <span>최근 키워드</span>
          <strong>{recentKeywords}</strong>
        </div>

        <div className="insight-box glass-panel">
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

        <div className="insight-box glass-panel">
          <span>최근 감정 흐름</span>

          <strong>{moodFlow}</strong>
        </div>

        <div className="insight-box glass-panel">
          <span>이번 달 질문 수</span>

          <strong>{monthCount}회</strong>
        </div>

        <div className="insight-box glass-panel">
          <span>연속 기록</span>

          <strong>{streak}일 🔥</strong>
        </div>

        <div className="insight-box glass-panel">
          <span>가장 많이 묻는 주제</span>

          <strong>{topCategory}</strong>
        </div>
      </section>

      <InsightDeep list={list} />
    </>
  );
}

export default memo(MyPageInsight);
