import { Container } from "@/components/ui/Container";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-16">
      <GradientBlobs />
      <Container>
        <RevealOnScroll className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
            {eyebrow}
          </span>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-white">
            {title}
          </h1>
          {description && (
            <p className="mt-4 text-balance text-neutral-600 dark:text-neutral-400">
              {description}
            </p>
          )}
        </RevealOnScroll>
      </Container>
    </section>
  );
}
