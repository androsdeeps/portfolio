import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExperienceTimeline } from "@/components/shared/ExperienceTimeline";
import { EducationTimeline } from "@/components/shared/EducationTimeline";

export const metadata: Metadata = buildMetadata({
  title: "Experience",
  description: "My professional experience and educational background.",
  path: "/experience",
});

export default function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Career"
        title="Experience & Education"
        description="The roles, companies, and schools that shaped how I build software today."
      />
      <section className="pb-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Work Experience" align="left" className="mb-10" />
            <ExperienceTimeline />
          </div>
        </Container>
      </section>
      <section className="pb-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <SectionHeading title="Education" align="left" className="mb-10" />
            <EducationTimeline />
          </div>
        </Container>
      </section>
    </>
  );
}
