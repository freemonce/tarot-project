// src/services/storage.js

const KEYS = {
  HISTORY: "tarot_history",
  RESULTS: "tarot_results", // 기존 데이터 유지용 key
};

/* =========================
   공통 안전 저장소
========================= */
export const safeStorage = {
  get(key, fallback = []) {
    try {
      const raw = localStorage.getItem(key);
      const parsed = raw ? JSON.parse(raw) : fallback;

      return parsed ?? fallback;
    } catch (error) {
      console.error("Storage Read Error:", error);
      return fallback;
    }
  },

  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error("Storage Save Error:", error);
    }
  },

  remove(key) {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      console.error("Storage Remove Error:", error);
    }
  },

  clear() {
    try {
      localStorage.clear();
    } catch (error) {
      console.error("Storage Clear Error:", error);
    }
  },
};

/* =========================
   History 관리
========================= */
export function getHistory() {
  const data = safeStorage.get(KEYS.HISTORY, []);
  return Array.isArray(data) ? data : [];
}

export function saveHistory(list) {
  safeStorage.set(KEYS.HISTORY, Array.isArray(list) ? list : []);
}

export function clearHistory() {
  safeStorage.remove(KEYS.HISTORY);
}

/* =========================
   Result 관리
========================= */
export function getResults() {
  const data = safeStorage.get(KEYS.RESULTS, []);
  return Array.isArray(data) ? data : [];
}

/* 결과 1개 추가
   - 중복 방지
   - 최신순 저장
   - 최대 10개 유지
*/
export function saveResult(data) {
  if (!data) return;

  const prev = getResults();

  const duplicated = prev.some(
    (item) =>
      item?.card?.name === data?.card?.name && item?.content === data?.content,
  );

  if (duplicated) return;

  const next = [data, ...prev].slice(0, 10);
  safeStorage.set(KEYS.RESULTS, next);
}

/* 전체 배열 저장 (삭제 / 수정 / 정렬 / 전체 갱신용) */
export function saveResults(list) {
  safeStorage.set(KEYS.RESULTS, Array.isArray(list) ? list : []);
}

export function clearResults() {
  safeStorage.remove(KEYS.RESULTS);
}
