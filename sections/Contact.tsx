"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { staggerContainer, slideInLeft, slideInRight, viewportOnce } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { ContactForm } from "@/components/shared/ContactForm";

interface ContactProps {
  showHeading?: boolean;
}

export function Contact({ showHeading = true }: ContactProps) {
  return (
    <section id="contact" className="relative py-24">
      <Container>
        {showHeading && (
          <SectionHeading
            eyebrow="Contact"
            title="Let's work together"
            description="Have a project in mind or just want to say hi? My inbox is always open."
          />
        )}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="flex flex-col gap-6"
          >
            <motion.p variants={slideInLeft} className="text-neutral-600 dark:text-neutral-400">
              Reach out on LinkedIn or send a message using the form.
            </motion.p>

            <motion.div variants={slideInLeft} className="flex gap-3">
              {socials.map((social) => (
                <SocialIcon key={social.id} social={social} />
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="rounded-3xl border border-neutral-200 bg-white/60 p-6 backdrop-blur-sm sm:p-8 dark:border-neutral-800 dark:bg-neutral-900/60"
          >
            <ContactForm />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
