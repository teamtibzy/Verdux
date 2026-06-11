"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

const stripItems = [
  "Reliable power",
  "Enterprise internet",
  "Founder community",
  "Premium workspace",
  "Early access",
  "Port Harcourt"
];

export function ScrollStrip() {
  const [isPaused, setIsPaused] = useState(false);
  const [loopWidth, setLoopWidth] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const content = [...stripItems, ...stripItems, ...stripItems];

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) {
        setLoopWidth(trackRef.current.scrollWidth / 3);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useAnimationFrame((_, delta) => {
    if (isPaused || loopWidth === 0) return;

    const next = x.get() - delta * 0.055;
    x.set(Math.abs(next) >= loopWidth ? next + loopWidth : next);
  });

  return (
    <div className="overflow-hidden border-y border-verdant-800/15 bg-verdant-950 py-4 text-white">
      <motion.div
        className="flex w-max gap-8 whitespace-nowrap"
        ref={trackRef}
        style={{ x }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        transition={{ duration: 0.4 }}
      >
        {content.map((item, index) => (
          <span
            className="flex items-center gap-8 text-xs font-semibold uppercase tracking-[0.25em]"
            key={`${item}-${index}`}
          >
            {item}
            <span className="h-2 w-2 rounded-full bg-citron" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}
