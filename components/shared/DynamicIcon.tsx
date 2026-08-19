"use client";

import { Circle, type LucideProps } from "lucide-react";
import { DynamicIcon as LucideDynamicIcon, type IconName } from "lucide-react/dynamic";

function toKebabCase(name: string): string {
  if (name.includes("-")) return name.toLowerCase();
  return name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
}

interface DynamicIconProps extends LucideProps {
  name: string;
}

export function DynamicIcon({ name, ...props }: DynamicIconProps) {
  const key = toKebabCase(name) as IconName;
  return <LucideDynamicIcon name={key} fallback={() => <Circle {...props} />} {...props} />;
}
