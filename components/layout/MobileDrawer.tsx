"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { navigation } from "@/data/navigation";
import { socials } from "@/data/socials";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { SocialIcon } from "@/components/shared/SocialIcon";

interface MobileDrawerProps {
  activeId: string;
  onClose: () => void;
}

export function MobileDrawer({ activeId, onClose }: MobileDrawerProps) {
  useLockBodyScroll(true);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
      />
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
        className="absolute right-0 top-0 flex h-full w-full max-w-xs flex-col justify-between bg-white p-6 shadow-2xl dark:bg-neutral-950"
      >
        <div>
          <div className="mb-8 flex items-center justify-between">
            <span className="text-lg font-bold text-neutral-900 dark:text-white">
              Menu
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 dark:border-neutral-800 dark:text-neutral-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={onClose}
                className={cn(
                  "rounded-xl px-4 py-3 text-base font-medium transition-colors",
                  activeId === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-neutral-700 hover:bg-neutral-100 dark:text-neutral-300 dark:hover:bg-neutral-900"
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-col gap-4">
          <Button href="/contact" onClick={onClose} className="w-full justify-center">
            Hire Me
          </Button>
          <div className="flex items-center justify-center gap-3">
            {socials.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
