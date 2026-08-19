import Link from "next/link";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { footerLinks } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { SocialIcon } from "@/components/shared/SocialIcon";
import { NewsletterForm } from "@/components/shared/NewsletterForm";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50 dark:border-neutral-900 dark:bg-neutral-950">
      <Container className="grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            className="text-xl font-bold tracking-tight text-neutral-900 dark:text-white"
          >
            {profile.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-neutral-600 dark:text-neutral-400">
            {profile.tagline}
          </p>
          <div className="mt-6 flex gap-3">
            {socials.map((social) => (
              <SocialIcon key={social.id} social={social} />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Quick Links
          </h3>
          <ul className="mt-4 space-y-3">
            {footerLinks.map((link) => (
              <li key={link.id}>
                <Link
                  href={link.href}
                  className="text-sm text-neutral-600 transition-colors hover:text-primary dark:text-neutral-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
            Stay Updated
          </h3>
          <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">
            Occasional notes on things I&apos;m building and learning. No spam.
          </p>
          <NewsletterForm className="mt-4" />
        </div>
      </Container>

      <div className="border-t border-neutral-200 py-6 dark:border-neutral-900">
        <Container className="flex flex-col items-center justify-between gap-2 text-sm text-neutral-500 sm:flex-row dark:text-neutral-500">
          <p>
            &copy; {year} {profile.name}. All rights reserved.
          </p>
          <p>Built with Next.js, TypeScript &amp; Tailwind CSS.</p>
        </Container>
      </div>
    </footer>
  );
}
