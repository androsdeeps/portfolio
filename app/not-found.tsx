import { Home, ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlobs } from "@/components/ui/GradientBlobs";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden py-24">
      <GradientBlobs />
      <Container className="text-center">
        <p className="text-gradient text-8xl font-extrabold sm:text-9xl">404</p>
        <h1 className="mt-4 text-2xl font-bold text-neutral-900 sm:text-3xl dark:text-white">
          Page not found
        </h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-600 dark:text-neutral-400">
          The page you&apos;re looking for doesn&apos;t exist or may have been moved.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" icon={<Home className="h-4 w-4" />}>
            Back to Home
          </Button>
          <Button href="/projects" variant="outline" icon={<ArrowLeft className="h-4 w-4" />}>
            View Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
