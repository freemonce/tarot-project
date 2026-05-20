// src/services/shareImageService.ts

import html2canvas from "html2canvas";

export async function saveShareImage({
  target,
  onSuccess,
  onFail,
}: {
  target: HTMLElement;
  onSuccess?: () => void;
  onFail?: () => void;
}) {
  try {
    await document.fonts.ready;

    await new Promise((resolve) => setTimeout(resolve, 800));

    const canvas = await html2canvas(target, {
      scale: 2,
      useCORS: true,
      allowTaint: false,
      backgroundColor: "#080808",
      windowWidth: 1080,
      windowHeight: 1080,
      logging: false,
    });

    const url = canvas.toDataURL("image/png", 0.9);

    const link = document.createElement("a");
    link.href = url;
    link.download = `tarot-reading-${Date.now()}.png`;

    link.click();

    onSuccess?.();
  } catch {
    onFail?.();
  }
}
