"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, Command } from "lucide-react";
import { navigation } from "@/data/navigation";
import { profile } from "@/data/profile";
import { useScrollDirection } from "@/hooks/useScrollDirection";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { MobileDrawer } from "@/components/layout/MobileDrawer";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { direction, isAtTop } = useScrollDirection();
  const activeId = useActiveSection(
    isHome ? navigation.map((n) => n.id) : []
  );
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <>
      <motion.header
        animate={{ y: direction === "down" && !isAtTop ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={cn(
            "mx-auto mt-3 flex max-w-6xl items-center justify-between rounded-2xl border px-4 py-3 transition-colors duration-300 sm:px-6",
            isAtTop
              ? "border-transparent bg-transparent"
              : "border-neutral-200/70 bg-white/70 shadow-lg shadow-black/5 backdrop-blur-xl dark:border-neutral-800/70 dark:bg-neutral-950/70"
          )}
        >
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-sm text-primary-foreground">
              {profile.initials}
            </span>
            <span className="hidden sm:inline">{profile.name}</span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeId === item.id
                    ? "text-primary"
                    : "text-neutral-600 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
                )}
              >
                {activeId === item.id && (
                  <motion.span
                    layoutId="navbar-active"
                    className="absolute inset-0 rounded-full bg-primary/10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() =>
                window.dispatchEvent(new CustomEvent("open-command-palette"))
              }
              className="hidden items-center gap-2 rounded-full border border-neutral-200 px-3 py-1.5 text-xs text-neutral-500 hover:border-neutral-300 sm:flex dark:border-neutral-800 dark:text-neutral-400 dark:hover:border-neutral-700"
              aria-label="Open command palette"
            >
              <Command className="h-3.5 w-3.5" />
              <span>K</span>
            </button>
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <div className="hidden lg:block">
              <Button href="/contact" size="sm">
                Hire Me
              </Button>
            </div>
            <button
              type="button"
              onClick={() => setDrawerOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-700 lg:hidden dark:border-neutral-800 dark:text-neutral-200"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {drawerOpen && (
          <MobileDrawer
            activeId={activeId}
            onClose={() => setDrawerOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
