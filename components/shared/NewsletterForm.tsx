"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2 } from "lucide-react";
import { newsletterSchema, type NewsletterValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function NewsletterForm({ className }: { className?: string }) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<NewsletterValues>({ resolver: zodResolver(newsletterSchema) });

  async function onSubmit(data: NewsletterValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className={cn("flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400", className)}>
        <CheckCircle2 className="h-4 w-4" />
        Subscribed! Check your inbox.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div className="flex gap-2">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>
        <input
          id="newsletter-email"
          type="email"
          placeholder="you@email.com"
          className="w-full rounded-full border border-neutral-300 bg-white px-4 py-2 text-sm text-neutral-900 outline-none focus:border-primary dark:border-neutral-700 dark:bg-neutral-900 dark:text-white"
          {...register("email")}
        />
        <button
          type="submit"
          disabled={isSubmitting}
          aria-label="Subscribe"
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-60"
        >
          {isSubmitting ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </button>
      </div>
      {errors.email && (
        <p className="mt-2 text-xs text-red-500">{errors.email.message}</p>
      )}
      {status === "error" && (
        <p className="mt-2 text-xs text-red-500">Something went wrong. Try again.</p>
      )}
    </form>
  );
}
