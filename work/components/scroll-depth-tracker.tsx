"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

const thresholds = [25, 50, 75, 100];

export function ScrollDepthTracker() {
  const sent = useRef(new Set<number>());

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;

      const depth = Math.min(100, Math.round((scrollTop / height) * 100));
      for (const threshold of thresholds) {
        if (depth >= threshold && !sent.current.has(threshold)) {
          sent.current.add(threshold);
          trackEvent("scroll_depth", { percent: threshold });
        }
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
