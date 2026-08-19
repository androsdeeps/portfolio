import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const statusLabel: Record<Project["status"], string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  maintained: "Maintained",
};

const statusColor: Record<Project["status"], string> = {
  completed: "text-emerald-600 dark:text-emerald-400",
  "in-progress": "text-amber-600 dark:text-amber-400",
  maintained: "text-sky-600 dark:text-sky-400",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotlightCard className="group flex h-full flex-col">
      <Link href={`/projects/${project.slug}`} className="relative block aspect-video overflow-hidden">
        <Image
          src={project.thumbnail}
          alt={project.title}
          fill
          sizes="(min-width: 1024px) 380px, 90vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span
          className={`absolute right-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-xs font-medium backdrop-blur dark:bg-neutral-900/90 ${statusColor[project.status]}`}
        >
          {statusLabel[project.status]}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5">
        <Link href={`/projects/${project.slug}`}>
          <h3 className="text-lg font-semibold text-neutral-900 transition-colors group-hover:text-primary dark:text-white">
            {project.title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.techStack.slice(0, 4).map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between pt-5">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm font-medium text-primary"
          >
            View Details <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} on GitHub`}
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <FaGithub className="h-4 w-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${project.title} live demo`}
                className="text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-white"
              >
                <ArrowUpRight className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
