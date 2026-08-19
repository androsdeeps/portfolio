import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { Mail, Link as LinkIcon } from "lucide-react";

const brandIcons: Record<string, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
};

interface BrandIconProps {
  name: string;
  className?: string;
}

export function BrandIcon({ name, className }: BrandIconProps) {
  const key = name.toLowerCase();

  if (key === "email" || key === "mail") {
    return <Mail className={className} />;
  }

  const Icon = brandIcons[key];
  if (!Icon) return <LinkIcon className={className} />;

  return <Icon className={className} />;
}
