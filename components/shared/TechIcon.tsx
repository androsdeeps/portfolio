import type { IconType } from "react-icons";
import { FaFigma, FaGithub, FaLinkedin, FaXTwitter, FaDribbble } from "react-icons/fa6";
import { DynamicIcon } from "@/components/shared/DynamicIcon";

const brandIcons: Record<string, IconType> = {
  figma: FaFigma,
  github: FaGithub,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
  dribbble: FaDribbble,
};

interface TechIconProps {
  name: string;
  className?: string;
  style?: React.CSSProperties;
}

export function TechIcon({ name, className, style }: TechIconProps) {
  const Icon = brandIcons[name.toLowerCase()];
  if (Icon) return <Icon className={className} style={style} />;
  return <DynamicIcon name={name} className={className} style={style} />;
}
