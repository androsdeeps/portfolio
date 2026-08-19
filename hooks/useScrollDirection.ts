"use client";

import { useEffect, useState } from "react";

export function useScrollDirection() {
  const [direction, setDirection] = useState<"up" | "down">("up");
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateDirection = () => {
      const scrollY = window.scrollY;
      setIsAtTop(scrollY < 40);

      if (Math.abs(scrollY - lastScrollY) > 8) {
        setDirection(scrollY > lastScrollY ? "down" : "up");
        lastScrollY = scrollY > 0 ? scrollY : 0;
      }
    };

    window.addEventListener("scroll", updateDirection, { passive: true });
    return () => window.removeEventListener("scroll", updateDirection);
  }, []);

  return { direction, isAtTop };
}
