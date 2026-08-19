import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { About } from "@/sections/About";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description: "Learn more about my background, experience, and what drives me as a developer.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Get to know me"
        description="My story, the way I work, and what I care about outside of code."
      />
      <About showHeading={false} />
    </>
  );
}
