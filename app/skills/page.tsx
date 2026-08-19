import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { Skills } from "@/sections/Skills";

export const metadata: Metadata = buildMetadata({
  title: "Skills",
  description: "A categorized breakdown of the technologies I use to build production software.",
  path: "/skills",
});

export default function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="Technical Skills"
        description="Frontend, backend, database, mobile, cloud, DevOps and tooling — filter by category below."
      />
      <Skills showHeading={false} />
    </>
  );
}
