"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { projects } from "@/data/projects";
import { staggerContainer, scaleIn, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ProjectCard } from "@/components/shared/ProjectCard";

export function Projects() {
  const featured = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section id="projects" className="relative py-24">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A sample of products I've designed, built, and shipped end to end."
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featured.map((project) => (
            <motion.div key={project.id} variants={scaleIn}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="outline" icon={<ArrowRight className="h-4 w-4" />}>
            View All Projects
          </Button>
        </div>
      </Container>
    </section>
  );
}
