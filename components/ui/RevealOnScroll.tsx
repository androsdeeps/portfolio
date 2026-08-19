"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { slideUp } from "@/lib/animations";

type AllowedTag = "div" | "li" | "article" | "section";

interface RevealOnScrollProps {
  children: ReactNode;
  variants?: Variants;
  className?: string;
  delay?: number;
  once?: boolean;
  as?: AllowedTag;
}

const tagComponents = {
  div: motion.div,
  li: motion.li,
  article: motion.article,
  section: motion.section,
} as const;

export function RevealOnScroll({
  children,
  variants = slideUp,
  className,
  delay = 0,
  once = true,
  as = "div",
}: RevealOnScrollProps) {
  const { ref, inView } = useInView({ triggerOnce: once, threshold: 0.15 });
  const MotionTag = tagComponents[as];

  return (
    <MotionTag
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}
