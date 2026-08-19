"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight } from "lucide-react";
import { navigation, footerLinks } from "@/data/navigation";
import { projects } from "@/data/projects";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { cn } from "@/lib/utils";

interface PaletteItem {
  id: string;
  label: string;
  hint: string;
  href: string;
}

export function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  useLockBodyScroll(open);

  const items: PaletteItem[] = useMemo(() => {
    const pages = footerLinks.map((link) => ({
      id: `page-${link.id}`,
      label: link.label,
      hint: "Page",
      href: link.href,
    }));
    const sections = navigation.map((link) => ({
      id: `section-${link.id}`,
      label: link.label,
      hint: "Section",
      href: link.href,
    }));
    const projectItems = projects.map((project) => ({
      id: `project-${project.id}`,
      label: project.title,
      hint: "Project",
      href: `/projects/${project.slug}`,
    }));
    return [...sections, ...pages, ...projectItems];
  }, []);

  const filtered = useMemo(() => {
    if (!query.trim()) return items.slice(0, 8);
    const q = query.toLowerCase();
    return items.filter((item) => item.label.toLowerCase().includes(q)).slice(0, 8);
  }, [items, query]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    }
    function onOpenEvent() {
      setOpen(true);
    }

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("open-command-palette", onOpenEvent);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("open-command-palette", onOpenEvent);
    };
  }, []);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  function navigate(href: string) {
    setOpen(false);
    setQuery("");
    router.push(href);
  }

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-start justify-center px-4 pt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-2xl dark:border-neutral-800 dark:bg-neutral-900"
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
          >
            <div className="flex items-center gap-3 border-b border-neutral-200 px-4 py-3 dark:border-neutral-800">
              <Search className="h-4 w-4 text-neutral-400" />
              <input
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.min(i + 1, filtered.length - 1));
                  }
                  if (e.key === "ArrowUp") {
                    e.preventDefault();
                    setActiveIndex((i) => Math.max(i - 1, 0));
                  }
                  if (e.key === "Enter" && filtered[activeIndex]) {
                    navigate(filtered[activeIndex].href);
                  }
                }}
                placeholder="Search pages, sections, projects..."
                className="w-full bg-transparent text-sm text-neutral-900 outline-none placeholder:text-neutral-400 dark:text-white"
              />
              <kbd className="rounded border border-neutral-200 px-1.5 py-0.5 text-xs text-neutral-400 dark:border-neutral-700">
                Esc
              </kbd>
            </div>
            <ul className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-neutral-400">
                  No results found.
                </li>
              )}
              {filtered.map((item, index) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => navigate(item.href)}
                    onMouseEnter={() => setActiveIndex(index)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors",
                      index === activeIndex
                        ? "bg-primary/10 text-primary"
                        : "text-neutral-700 dark:text-neutral-300"
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <span>{item.label}</span>
                      <span className="text-xs text-neutral-400">{item.hint}</span>
                    </span>
                    <ArrowRight className="h-3.5 w-3.5 opacity-60" />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
