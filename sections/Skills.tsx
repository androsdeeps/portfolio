"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { FilterChip } from "@/components/ui/FilterChip";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { TechIcon } from "@/components/shared/TechIcon";

type FilterValue = "all" | (typeof skillCategories)[number]["id"];

interface SkillsProps {
  showHeading?: boolean;
}

export function Skills({ showHeading = true }: SkillsProps) {
  const [filter, setFilter] = useState<FilterValue>("all");

  const filtered = useMemo(
    () => (filter === "all" ? skills : skills.filter((s) => s.category === filter)),
    [filter]
  );

  return (
    <section id="skills" className="relative py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Skills"
            title="Technologies I work with"
            description="A categorized breakdown of the tools and frameworks I use to ship production software."
          />
        )}

        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <FilterChip active={filter === "all"} onClick={() => setFilter("all")}>
            All
          </FilterChip>
          {skillCategories.map((category) => (
            <FilterChip
              key={category.id}
              active={filter === category.id}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </FilterChip>
          ))}
        </div>

        <motion.div
          variants={staggerContainer(0.06)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((skill) => (
              <motion.div
                key={skill.id}
                layout
                variants={scaleIn}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, scale: 0.9 }}
                className="rounded-2xl border border-neutral-200 bg-white/60 p-5 backdrop-blur-sm transition-transform hover:-translate-y-1 dark:border-neutral-800 dark:bg-neutral-900/60"
              >
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                      className="flex h-10 w-10 items-center justify-center rounded-xl"
                      style={{ backgroundColor: `${skill.color}1a` }}
                    >
                      <TechIcon name={skill.icon} className="h-5 w-5" style={{ color: skill.color }} />
                    </span>
                    <div>
                      <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                        {skill.name}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{skill.level}</p>
                    </div>
                  </div>
                  <span className="text-sm font-semibold text-neutral-500 dark:text-neutral-400">
                    {skill.percentage}%
                  </span>
                </div>
                <ProgressBar percentage={skill.percentage} color={skill.color} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
