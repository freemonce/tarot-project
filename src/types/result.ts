// src/types/result.ts
import type { ToneType } from "./tone";

export type ToneStyle =
  | "warm"
  | "direct"
  | "mystic"
  | "healing"
  | "cold"
  | "poetic";

export type Tone = "positive" | "neutral" | "negative";

export type ResultFlow = {
  intro?: string[];

  extraMeaning: string[];
  extraAdvice: string[];

  ending?: string[];

  extraKeywords: string[];

  flow?: string[];

  tone?: ToneType;

  toneStyle?: ToneStyle;

  emotionalLevel?: number;
  chance?: number;
};

export type QuestionResult = {
  upright: ResultFlow;
  reversed: ResultFlow;
};

export type FlowTextSet = {
  intro: string[];

  extraMeaning: string[];
  extraAdvice: string[];

  ending: string[];

  extraKeywords: string[];

  flow?: string[];

  tone?: ToneType;

  toneStyle?: ToneStyle;

  emotionalLevel?: number;
  chance?: number;
};

export type QuestionFlow = {
  upright: FlowTextSet;
  reversed: FlowTextSet;
};

export type ResultData = {
  meaning: string;
  advice: string;

  keywords: string[];

  flow: string[];

  tone: ToneType;

  summary: string;

  special?: string;
  toneStyle?: string;

  emotionalLevel?: number;
  chance?: number;
};
