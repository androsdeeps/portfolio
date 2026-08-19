import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import { PageHeader } from "@/components/shared/PageHeader";
import { Contact } from "@/sections/Contact";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Get in touch to discuss your next project or opportunity.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title="Contact Me"
        description="Fill out the form below or reach out directly — I typically respond within one business day."
      />
      <Contact showHeading={false} />
    </>
  );
}
