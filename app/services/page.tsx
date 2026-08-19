import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { Services } from "@/sections/Services";

export const metadata: Metadata = buildMetadata({
  title: "Services",
  description: "Web development, backend engineering, API design, UI development, and database design services.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="How I Can Help"
        description="Flexible engagements for startups and teams that need senior full-stack expertise."
      />
      <Services showHeading={false} />
    </>
  );
}
