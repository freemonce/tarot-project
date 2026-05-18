// src/utils/date.ts

const formatter = new Intl.DateTimeFormat("ko-KR");

export function formatDate(date: string) {
  return formatter.format(new Date(date));
}
