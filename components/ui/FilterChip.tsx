import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface FilterChipProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

export function FilterChip({ active, onClick, children }: FilterChipProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "rounded-full px-4 py-2 text-sm font-medium transition-colors",
        active
          ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
          : "border border-neutral-200 text-neutral-600 hover:border-primary/50 hover:text-primary dark:border-neutral-800 dark:text-neutral-400"
      )}
    >
      {children}
    </button>
  );
}
