"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/types";
import { useDebounce } from "@/hooks/useDebounce";
import { cn } from "@/lib/utils";
import { staggerContainer, scaleIn } from "@/lib/animations";
import { FilterChip } from "@/components/ui/FilterChip";
import { ProjectCard } from "@/components/shared/ProjectCard";

const PAGE_SIZE = 6;

type CategoryFilter = "all" | ProjectCategory;

export function ProjectsExplorer() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [page, setPage] = useState(1);
  const debouncedSearch = useDebounce(search, 250);

  const filtered = useMemo(() => {
    const query = debouncedSearch.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = category === "all" || project.category === category;
      const matchesQuery =
        !query ||
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.techStack.some((tech) => tech.toLowerCase().includes(query));
      return matchesCategory && matchesQuery;
    });
  }, [debouncedSearch, category]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  function updateCategory(value: CategoryFilter) {
    setCategory(value);
    setPage(1);
  }

  function updateSearch(value: string) {
    setSearch(value);
    setPage(1);
  }

  return (
    <div>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-xs">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-neutral-400" />
          <input
            value={search}
            onChange={(e) => updateSearch(e.target.value)}
            placeholder="Search projects or tech..."
            className="w-full rounded-full border border-neutral-300 bg-white py-2.5 pl-10 pr-4 text-sm text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          />
        </div>

        <div className="flex flex-wrap gap-2">
          <FilterChip active={category === "all"} onClick={() => updateCategory("all")}>
            All
          </FilterChip>
          {projectCategories.map((c) => (
            <FilterChip key={c.id} active={category === c.id} onClick={() => updateCategory(c.id)}>
              {c.label}
            </FilterChip>
          ))}
        </div>
      </div>

      {paginated.length === 0 ? (
        <p className="py-16 text-center text-neutral-500 dark:text-neutral-400">
          No projects match your search.
        </p>
      ) : (
        <motion.div
          key={`${category}-${debouncedSearch}-${currentPage}`}
          variants={staggerContainer(0.08)}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {paginated.map((project) => (
              <motion.div key={project.id} variants={scaleIn} layout>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex items-center justify-center gap-2">
          <button
            type="button"
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            aria-label="Previous page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 disabled:opacity-40 dark:border-neutral-800 dark:text-neutral-300"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-current={p === currentPage ? "page" : undefined}
              className={cn(
                "flex h-9 w-9 items-center justify-center rounded-full text-sm font-medium transition-colors",
                p === currentPage
                  ? "bg-primary text-primary-foreground"
                  : "border border-neutral-200 text-neutral-600 dark:border-neutral-800 dark:text-neutral-300"
              )}
            >
              {p}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            aria-label="Next page"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 disabled:opacity-40 dark:border-neutral-800 dark:text-neutral-300"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}
