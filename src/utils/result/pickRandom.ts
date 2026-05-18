// src/utils/result/pickRandom.ts

export function pickRandom<T>(arr?: T[]): T | undefined {
  if (!arr?.length) return undefined;

  return arr[Math.floor(Math.random() * arr.length)];
}
