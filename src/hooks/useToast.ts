// src/hooks/useToast.ts

import { useEffect, useRef, useState } from "react";

export default function useToast() {
  const [toast, setToast] = useState("");

  const toastTimer = useRef<number | null>(null);

  const showToast = (msg: string) => {
    setToast(msg);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    toastTimer.current = window.setTimeout(() => {
      setToast("");
      toastTimer.current = null;
    }, 1800);
  };

  useEffect(() => {
    return () => {
      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }
    };
  }, []);

  return {
    toast,
    showToast,
  };
}
