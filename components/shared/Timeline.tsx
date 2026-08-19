import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";
import { MapPin } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { slideInLeft, slideInRight } from "@/lib/animations";

type Accent = "primary" | "accent";

const accentClasses: Record<Accent, { badge: string; text: string; dot: string }> = {
  primary: {
    badge: "bg-primary",
    text: "text-primary",
    dot: "bg-primary",
  },
  accent: {
    badge: "bg-accent",
    text: "text-accent",
    dot: "bg-accent",
  },
};

export function TimelineList({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-10 border-l border-neutral-200 pl-8 dark:border-neutral-800">
      {children}
    </ol>
  );
}

interface TimelineItemProps {
  index: number;
  icon: LucideIcon;
  accent: Accent;
  title: string;
  org: string;
  meta: string;
  startDate: string;
  endDate: string | null;
  description: string;
  items: string[];
  children?: ReactNode;
}

export function TimelineItem({
  index,
  icon: Icon,
  accent,
  title,
  org,
  meta,
  startDate,
  endDate,
  description,
  items,
  children,
}: TimelineItemProps) {
  const colors = accentClasses[accent];

  return (
    <RevealOnScroll
      as="li"
      variants={index % 2 === 0 ? slideInLeft : slideInRight}
      className="relative"
    >
      <span
        className={`absolute -left-[2.6rem] flex h-8 w-8 items-center justify-center rounded-full border-4 border-white text-white shadow dark:border-neutral-950 ${colors.badge}`}
      >
        <Icon className="h-3.5 w-3.5" />
      </span>

      <div className="rounded-2xl border border-neutral-200 bg-white/60 p-6 backdrop-blur-sm dark:border-neutral-800 dark:bg-neutral-900/60">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <h3 className="text-lg font-semibold text-neutral-900 dark:text-white">{title}</h3>
            <p className={`text-sm font-medium ${colors.text}`}>{org}</p>
          </div>
          <span className="rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-600 dark:bg-neutral-800 dark:text-neutral-300">
            {formatDate(startDate)} – {formatDate(endDate)}
          </span>
        </div>

        <p className="mt-1 flex items-center gap-1.5 text-xs text-neutral-500 dark:text-neutral-400">
          <MapPin className="h-3.5 w-3.5" />
          {meta}
        </p>

        <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400">{description}</p>

        <ul className="mt-4 space-y-2">
          {items.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-neutral-600 dark:text-neutral-400"
            >
              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${colors.dot}`} />
              {item}
            </li>
          ))}
        </ul>

        {children}
      </div>
    </RevealOnScroll>
  );
}
