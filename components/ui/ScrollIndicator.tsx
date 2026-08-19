"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
    >
      <span className="text-xs uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
        Scroll
      </span>
      <motion.div
        className="flex h-9 w-6 items-start justify-center rounded-full border-2 border-neutral-400 p-1 dark:border-neutral-600"
        aria-hidden
      >
        <motion.span
          className="h-1.5 w-1.5 rounded-full bg-primary"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </motion.div>
  );
}
