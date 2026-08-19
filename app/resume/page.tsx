import type { Metadata } from "next";
import { Download } from "lucide-react";
import { buildMetadata } from "@/lib/seo";
import { profile } from "@/data/profile";
import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { skills, skillCategories } from "@/data/skills";
import { formatDate } from "@/lib/utils";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { PageHeader } from "@/components/shared/PageHeader";

export const metadata: Metadata = buildMetadata({
  title: "Resume",
  description: "Download or preview my resume, including experience, education, and skills.",
  path: "/resume",
});

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="My Resume"
        description="A summary of my professional journey — or download the full PDF."
      />

      <section className="pb-24">
        <Container className="max-w-4xl">
          <div className="mb-10 flex justify-center">
            <Button href={profile.resumeUrl} target="_blank" icon={<Download className="h-4 w-4" />}>
              Download PDF Resume
            </Button>
          </div>

          <div className="rounded-3xl border border-neutral-200 bg-white/60 p-8 backdrop-blur-sm sm:p-10 dark:border-neutral-800 dark:bg-neutral-900/60">
            <header className="border-b border-neutral-200 pb-6 dark:border-neutral-800">
              <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">{profile.name}</h2>
              <p className="mt-1 text-primary">{profile.title}</p>
              <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                linkedin.com/in/deepak-ghale-3b7670424
              </p>
            </header>

            <section className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Summary
              </h3>
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">{profile.bio[0]}</p>
            </section>

            <section className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Experience
              </h3>
              <div className="mt-4 space-y-6">
                {experience.map((item) => (
                  <div key={item.id}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <p className="font-semibold text-neutral-900 dark:text-white">
                        {item.position} &middot; {item.company}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {formatDate(item.startDate)} – {formatDate(item.endDate)}
                      </p>
                    </div>
                    <ul className="mt-2 space-y-1">
                      {item.responsibilities.map((r) => (
                        <li key={r} className="text-sm text-neutral-600 dark:text-neutral-400">
                          &bull; {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Education
              </h3>
              <div className="mt-4 space-y-4">
                {education.map((item) => (
                  <div key={item.id} className="flex flex-wrap items-baseline justify-between gap-2">
                    <p className="font-semibold text-neutral-900 dark:text-white">
                      {item.degree} &middot; {item.institution}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">
                      {formatDate(item.startDate)} – {formatDate(item.endDate)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Skills
              </h3>
              <div className="mt-4 space-y-3">
                {skillCategories.map((category) => {
                  const items = skills.filter((s) => s.category === category.id);
                  if (items.length === 0) return null;
                  return (
                    <div key={category.id} className="flex flex-wrap items-center gap-2">
                      <span className="w-24 shrink-0 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        {category.label}
                      </span>
                      {items.map((skill) => (
                        <Badge key={skill.id}>{skill.name}</Badge>
                      ))}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </Container>
      </section>
    </>
  );
}
