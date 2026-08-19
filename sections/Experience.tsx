import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ExperienceTimeline } from "@/components/shared/ExperienceTimeline";

export function Experience() {
  return (
    <section id="experience" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          description="A career built around shipping reliable software for teams that move fast."
        />

        <div className="mx-auto max-w-3xl">
          <ExperienceTimeline />
        </div>

        <div className="mt-12 flex justify-center">
          <Button href="/experience" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            Full Experience &amp; Education
          </Button>
        </div>
      </Container>
    </section>
  );
}
