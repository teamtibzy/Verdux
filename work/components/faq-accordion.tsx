"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/analytics";

const faqs = [
  {
    question: "What is VERDUX?",
    answer:
      "VERDUX is a premium coworking space and startup hub in Port Harcourt, built around reliable power, enterprise internet, and a serious community of founders, operators, and creatives."
  },
  {
    question: "Who is it for?",
    answer:
      "Founders, freelancers, remote workers, creatives, startup teams, and any professional building digital or service-based businesses who want a reliable, credible place to work."
  },
  {
    question: "What makes it different?",
    answer:
      "We treat infrastructure as a product, not a perk. Power and internet are engineered to be invisible. The space and the community are designed for outcomes, not just attendance."
  },
  {
    question: "When will it launch?",
    answer:
      "We're finalizing the flagship location now. Waitlist members will be the first to hear launch dates, founding-member pricing, and early-access invites."
  },
  {
    question: "How do I join the waitlist?",
    answer:
      "Fill in the form above. It takes under a minute, and there's no commitment."
  },
  {
    question: "Will there be flexible memberships?",
    answer:
      "Yes. VERDUX will support flexible ways to work, from hot desks and dedicated desks to private offices for growing teams."
  },
  {
    question: "Is this only for tech people?",
    answer:
      "No. VERDUX is for anyone doing serious work; tech founders, creative professionals, service-based operators, and remote teams are all welcome."
  },
  {
    question: "Will there be membership options?",
    answer:
      "Yes; Hot Desk, Dedicated Desk, and Private Office tiers. Detailed pricing will be shared with waitlist members first."
  }
];

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto w-full max-w-[780px]">
      <p className="mb-4 text-xs uppercase tracking-[0.25em] text-verdant-800">
        FAQ
      </p>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-verdant-700 sm:text-5xl">
        Questions, answered.
      </h2>
      <div className="mt-8 flex flex-col gap-3.5">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              className="rounded-[20px] border border-line bg-white px-5 shadow-sm"
              key={faq.question}
            >
              <button
                aria-controls={`faq-panel-${index}`}
                aria-expanded={isOpen}
                className="flex min-h-[60px] w-full items-center justify-between gap-4 py-4 text-left font-serif text-lg text-verdant-950"
                id={`faq-button-${index}`}
                onClick={() => {
                  setOpenIndex(index);
                  trackEvent("faq_interaction", { question: faq.question });
                }}
                type="button"
              >
                <span>{faq.question}</span>
                <motion.span
                  aria-hidden="true"
                  className="text-xl leading-none"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ^
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    animate={{ height: "auto", opacity: 1 }}
                    className="overflow-hidden"
                    exit={{ height: 0, opacity: 0 }}
                    id={`faq-panel-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <p className="pb-4 pr-8 font-serif text-sm leading-5 text-verdant-950">
                      {faq.answer}
                    </p>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}
