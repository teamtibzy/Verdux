"use client";

import type { ReactNode } from "react";
import { trackEvent } from "@/lib/analytics";

type CtaButtonProps = {
  children: ReactNode;
  variant?: "primary" | "light";
  className?: string;
  eventLabel?: string;
};

export function CtaButton({
  children,
  variant = "primary",
  className = "",
  eventLabel = "cta_click"
}: CtaButtonProps) {
  const scrollToWaitlist = () => {
    trackEvent("cta_click", { label: eventLabel });
    document
      .getElementById("waitlist-form")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const variantClass =
    variant === "light"
      ? "bg-verdant-300 text-verdant-950 hover:bg-citron"
      : "bg-verdant-700 text-white hover:bg-verdant-400";

  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition duration-300 ease-out hover:scale-[1.03] ${variantClass} ${className}`}
      onClick={scrollToWaitlist}
      type="button"
    >
      {children}
    </button>
  );
}
