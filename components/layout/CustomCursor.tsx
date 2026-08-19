"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CustomCursor() {
  const isDesktop = useMediaQuery("(hover: hover) and (pointer: fine)");
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  useEffect(() => {
    if (!isDesktop) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      setIsPointer(Boolean(target.closest("a, button, [role='button'], input, textarea")));
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isDesktop, cursorX, cursorY, visible]);

  if (!isDesktop || !visible) return null;

  return (
    <motion.div
      style={{ translateX: x, translateY: y }}
      className="pointer-events-none fixed left-0 top-0 z-[90] mix-blend-difference"
    >
      <motion.div
        animate={{
          width: isPointer ? 44 : 16,
          height: isPointer ? 44 : 16,
          x: isPointer ? -22 : -8,
          y: isPointer ? -22 : -8,
        }}
        transition={{ duration: 0.2 }}
        className="rounded-full bg-white"
      />
    </motion.div>
  );
}
