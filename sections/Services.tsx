"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { staggerContainer, slideUp, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { DynamicIcon } from "@/components/shared/DynamicIcon";

interface ServicesProps {
  showHeading?: boolean;
}

export function Services({ showHeading = true }: ServicesProps) {
  return (
    <section id="services" className="relative py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Services"
            title="What I can help you with"
            description="From idea to production, here's how I can support your team or project."
          />
        )}

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.id} variants={slideUp}>
              <SpotlightCard className="h-full p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <DynamicIcon name={service.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 text-lg font-semibold text-neutral-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  {service.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
