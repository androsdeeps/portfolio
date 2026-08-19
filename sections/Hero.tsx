"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { useTypewriter } from "@/hooks/useTypewriter";
import { staggerContainer, slideUp, floatAnimation } from "@/lib/animations";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { GradientBlobs } from "@/components/ui/GradientBlobs";
import { ScrollIndicator } from "@/components/ui/ScrollIndicator";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { DynamicIcon } from "@/components/shared/DynamicIcon";

const floatingTech = [
  { icon: "atom", color: "#61DAFB", top: "12%", left: "6%", delay: 0 },
  { icon: "triangle", color: "#94a3b8", top: "68%", left: "10%", delay: 0.6 },
  { icon: "file-code", color: "#3178C6", top: "22%", left: "88%", delay: 1.1 },
  { icon: "wind", color: "#06B6D4", top: "76%", left: "86%", delay: 0.3 },
  { icon: "server", color: "#68A063", top: "48%", left: "94%", delay: 0.9 },
];

export function Hero() {
  const typedText = useTypewriter({ words: profile.roles });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-20"
    >
      <GradientBlobs />

      <div aria-hidden className="pointer-events-none absolute inset-0 hidden lg:block">
        {floatingTech.map((tech) => (
          <motion.div
            key={tech.icon}
            className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-neutral-200/60 bg-white/70 shadow-lg backdrop-blur-md dark:border-neutral-800/60 dark:bg-neutral-900/70"
            style={{ top: tech.top, left: tech.left }}
            animate={floatAnimation}
            transition={{ ...floatAnimation.transition, delay: tech.delay }}
          >
            <DynamicIcon name={tech.icon} className="h-6 w-6" style={{ color: tech.color }} />
          </motion.div>
        ))}
      </div>

      <Container className="relative grid items-center gap-12 lg:grid-cols-2">
        <motion.div
          variants={staggerContainer()}
          initial="hidden"
          animate="visible"
          className="text-center lg:text-left"
        >
          {profile.availableForWork && (
            <motion.div
              variants={slideUp}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-sm text-emerald-600 dark:text-emerald-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for new opportunities
            </motion.div>
          )}

          <motion.p variants={slideUp} className="text-lg font-medium text-primary">
            Hi, I&apos;m
          </motion.p>

          <motion.h1
            variants={slideUp}
            className="mt-2 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            {profile.name}
          </motion.h1>

          <motion.div
            variants={slideUp}
            className="mt-4 h-10 text-xl font-semibold text-neutral-600 sm:text-2xl dark:text-neutral-300"
          >
            <span className="text-gradient">{typedText}</span>
            <span className="ml-1 inline-block h-6 w-0.5 animate-pulse bg-primary align-middle" />
          </motion.div>

          <motion.p
            variants={slideUp}
            className="mx-auto mt-6 max-w-lg text-balance text-neutral-600 lg:mx-0 dark:text-neutral-400"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={slideUp}
            className="mt-8 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Button href={profile.resumeUrl} target="_blank" icon={<Download className="h-4 w-4" />}>
              Download Resume
            </Button>
            <Button href="/contact" variant="outline" icon={<Mail className="h-4 w-4" />}>
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            variants={slideUp}
            className="mt-8 flex items-center justify-center gap-3 lg:justify-start"
          >
            {socials.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-primary/40 to-accent/30 blur-3xl" />
          <div className="relative aspect-square overflow-hidden rounded-[2.5rem] border border-neutral-200/60 shadow-2xl dark:border-neutral-800/60">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              sizes="(min-width: 1024px) 400px, 320px"
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </Container>

      <ScrollIndicator />
    </section>
  );
}
