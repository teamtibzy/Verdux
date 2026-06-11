"use client";

import { motion } from "framer-motion";

type Feature = {
  title: string;
  text: string;
};

export function FeatureCards({ features }: { features: Feature[] }) {
  return (
    <motion.div
      className="mt-10 grid gap-5 md:grid-cols-3"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={{
        hidden: {},
        show: {
          transition: { staggerChildren: 0.12 }
        }
      }}
    >
      {features.map((feature) => (
        <motion.article
          className="rounded-[20px] border border-line bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          key={feature.title}
          variants={{
            hidden: { opacity: 0, y: 18 },
            show: { opacity: 1, y: 0 }
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <h3 className="font-serif text-2xl font-semibold text-verdant-950">
            {feature.title}
          </h3>
          <p className="mt-4 text-sm leading-6 text-neutral-600">{feature.text}</p>
        </motion.article>
      ))}
    </motion.div>
  );
}
