"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Languages, Heart } from "lucide-react";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { formatDate } from "@/lib/utils";
import { staggerContainer, slideUp, slideInLeft, slideInRight } from "@/lib/animations";
import { viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { SectionHeading } from "@/components/shared/SectionHeading";

const timeline = [
  ...experience.map((item) => ({
    id: `exp-${item.id}`,
    title: item.position,
    org: item.company,
    start: item.startDate,
    end: item.endDate,
    icon: Briefcase,
  })),
  ...education.map((item) => ({
    id: `edu-${item.id}`,
    title: item.degree,
    org: item.institution,
    start: item.startDate,
    end: item.endDate,
    icon: GraduationCap,
  })),
]
  .sort((a, b) => (a.start < b.start ? 1 : -1))
  .slice(0, 4);

interface AboutProps {
  showHeading?: boolean;
}

export function About({ showHeading = true }: AboutProps) {
  return (
    <section id="about" className="relative py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="About Me"
            title="Turning ideas into reliable software"
            description="A quick look at who I am, how I work, and what I've been building."
          />
        )}

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="relative mx-auto w-full max-w-sm lg:mx-0"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-primary/20 to-accent/15 blur-2xl" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-neutral-200/60 shadow-xl dark:border-neutral-800/60">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                sizes="(min-width: 1024px) 380px, 320px"
                className="object-cover"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-neutral-200 bg-white/60 p-4 text-center backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60"
                >
                  <p className="text-2xl font-bold text-primary">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={staggerContainer()}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-8"
          >
            <motion.div variants={slideInRight} className="space-y-4 text-neutral-600 dark:text-neutral-400">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </motion.div>

            <motion.div variants={slideUp} className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                  <Languages className="h-4 w-4 text-primary" />
                  Languages
                </h3>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {profile.languages.map((lang) => (
                    <li key={lang.name} className="flex items-center justify-between">
                      <span>{lang.name}</span>
                      <span className="text-neutral-400 dark:text-neutral-500">{lang.level}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="mb-3 flex items-center gap-2 text-sm font-semibold text-neutral-900 dark:text-white">
                  <Heart className="h-4 w-4 text-primary" />
                  Interests
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profile.interests.map((interest) => (
                    <Badge key={interest}>{interest}</Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={slideUp}>
              <h3 className="mb-4 text-sm font-semibold text-neutral-900 dark:text-white">
                Recent Timeline
              </h3>
              <ol className="relative space-y-6 border-l border-neutral-200 pl-6 dark:border-neutral-800">
                {timeline.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li key={item.id} className="relative">
                      <span className="absolute -left-[1.85rem] flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm font-medium text-neutral-900 dark:text-white">
                        {item.title}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {item.org} &middot; {formatDate(item.start)} – {formatDate(item.end)}
                      </p>
                    </li>
                  );
                })}
              </ol>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
