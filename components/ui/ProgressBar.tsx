"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface ProgressBarProps {
  percentage: number;
  color?: string;
}

export function ProgressBar({ percentage, color = "var(--color-primary)" }: ProgressBarProps) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <div
      ref={ref}
      className="h-2 w-full overflow-hidden rounded-full bg-neutral-200 dark:bg-neutral-800"
      role="progressbar"
      aria-valuenow={percentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <motion.div
        className="h-full rounded-full"
        style={{ backgroundColor: color }}
        initial={{ width: 0 }}
        animate={{ width: inView ? `${percentage}%` : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.15 }}
      />
    </div>
  );
}
