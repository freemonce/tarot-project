// src/utils/result/applyToneStyle.ts

import { ToneStyle } from "../../types/result";

type Params = {
  toneStyle?: ToneStyle;
  advice?: string;
};

export function applyToneStyle({ toneStyle, advice = "" }: Params): string {
  if (!advice) return "";

  switch (toneStyle) {
    case "warm":
      return `너무 자신을 몰아붙이지 마세요. ${advice}`;

    case "direct":
      return `지금은 감정보다 현실 판단이 중요합니다. ${advice}`;

    case "mystic":
      return `보이지 않는 흐름이 천천히 움직이고 있습니다. ${advice}`;

    case "healing":
      return `지금은 스스로를 다그치기보다 마음을 돌보는 시간이 필요합니다. ${advice}`;

    case "cold":
      return `감정보다 현실적인 판단이 우선되어야 할 수 있습니다. ${advice}`;

    case "poetic":
      return `흔들리는 감정 속에서도 마음은 자신의 방향을 찾아가고 있습니다. ${advice}`;

    default:
      return advice;
  }
}
