import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProjectsExplorer } from "@/components/shared/ProjectsExplorer";

export const metadata: Metadata = buildMetadata({
  title: "Projects",
  description: "Browse a collection of web, mobile, and backend projects I've built.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Projects"
        description="Search and filter through everything I've shipped, from full-stack platforms to design systems."
      />
      <section className="pb-24">
        <Container>
          <ProjectsExplorer />
        </Container>
      </section>
    </>
  );
}
