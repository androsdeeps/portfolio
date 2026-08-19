import type { SocialLink } from "@/types";
import { BrandIcon } from "@/components/shared/BrandIcon";

export function SocialIcon({ social }: { social: SocialLink }) {
  return (
    <a
      href={social.url}
      target={social.url.startsWith("mailto:") ? undefined : "_blank"}
      rel="noopener noreferrer"
      aria-label={social.name}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 text-neutral-600 transition-colors hover:border-primary hover:text-primary dark:border-neutral-800 dark:text-neutral-400"
    >
      <BrandIcon name={social.icon} className="h-4 w-4" />
    </a>
  );
}
