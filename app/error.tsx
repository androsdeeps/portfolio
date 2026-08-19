"use client";

import { useEffect } from "react";
import { RefreshCcw, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[70vh] items-center justify-center py-24">
      <Container className="text-center">
        <h1 className="text-2xl font-bold text-neutral-900 dark:text-white">
          Something went wrong
        </h1>
        <p className="mx-auto mt-3 max-w-md text-neutral-600 dark:text-neutral-400">
          An unexpected error occurred while rendering this page. You can try again or head back home.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <Button onClick={reset} icon={<RefreshCcw className="h-4 w-4" />}>
            Try Again
          </Button>
          <Button href="/" variant="outline" icon={<Home className="h-4 w-4" />}>
            Back to Home
          </Button>
        </div>
      </Container>
    </section>
  );
}
