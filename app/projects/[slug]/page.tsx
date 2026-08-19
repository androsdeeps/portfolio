import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, CalendarDays, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { projects } from "@/data/projects";
import { formatDate } from "@/lib/utils";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { ImageGallery } from "@/components/shared/ImageGallery";
import { ProjectCard } from "@/components/shared/ProjectCard";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return buildMetadata({ title: "Project Not Found", noIndex: true });

  return buildMetadata({
    title: project.title,
    description: project.description,
    path: `/projects/${project.slug}`,
    image: project.thumbnail,
  });
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const related = projects
    .filter((p) => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <section className="pb-24 pt-32">
      <Container>
        <Link
          href="/projects"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-primary dark:text-neutral-400"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Projects
        </Link>

        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr]">
          <div>
            <ImageGallery images={project.images} alt={project.title} />

            <h1 className="mt-8 text-3xl font-bold tracking-tight text-neutral-900 sm:text-4xl dark:text-white">
              {project.title}
            </h1>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              {project.longDescription}
            </p>

            <div className="mt-8">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Key Features
              </h2>
              <ul className="grid gap-2 sm:grid-cols-2">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                    <Layers className="h-4 w-4" /> Category
                  </span>
                  <span className="font-medium capitalize text-neutral-900 dark:text-white">
                    {project.category}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                    <CalendarDays className="h-4 w-4" /> Completed
                  </span>
                  <span className="font-medium text-neutral-900 dark:text-white">
                    {formatDate(project.completionDate)}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3">
                {project.liveUrl && (
                  <Button
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full justify-center"
                    icon={<ExternalLink className="h-4 w-4" />}
                  >
                    Live Demo
                  </Button>
                )}
                {project.githubUrl && (
                  <Button
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    className="w-full justify-center"
                    icon={<FaGithub className="h-4 w-4" />}
                  >
                    View Source
                  </Button>
                )}
              </div>
            </div>

            <div className="rounded-2xl border border-neutral-200 p-6 dark:border-neutral-800">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
                Tech Stack
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <Badge key={tech}>{tech}</Badge>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="mb-6 text-xl font-bold text-neutral-900 dark:text-white">
              Related Projects
            </h2>
            <div className="grid gap-6 md:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
