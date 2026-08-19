"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import { cn } from "@/lib/utils";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(contactFormSchema) });

  async function onSubmit(data: ContactFormValues) {
    setStatus("idle");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Your Name" htmlFor="name" error={errors.name?.message}>
          <input
            id="name"
            type="text"
            placeholder="Jane Doe"
            className={inputClasses(Boolean(errors.name))}
            {...register("name")}
          />
        </Field>
        <Field label="Email Address" htmlFor="email" error={errors.email?.message}>
          <input
            id="email"
            type="email"
            placeholder="jane@company.com"
            className={inputClasses(Boolean(errors.email))}
            {...register("email")}
          />
        </Field>
      </div>

      <Field label="Subject" htmlFor="subject" error={errors.subject?.message}>
        <input
          id="subject"
          type="text"
          placeholder="Let's build something great"
          className={inputClasses(Boolean(errors.subject))}
          {...register("subject")}
        />
      </Field>

      <Field label="Message" htmlFor="message" error={errors.message?.message}>
        <textarea
          id="message"
          rows={5}
          placeholder="Tell me a bit about your project..."
          className={inputClasses(Boolean(errors.message))}
          {...register("message")}
        />
      </Field>

      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-lg shadow-primary/25 transition-transform hover:-translate-y-0.5 disabled:opacity-60"
      >
        {isSubmitting ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Send className="h-4 w-4" />
        )}
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
          <CheckCircle2 className="h-4 w-4" /> Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="flex items-center gap-2 text-sm text-red-500">
          <AlertCircle className="h-4 w-4" /> Something went wrong. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "w-full rounded-xl border bg-white px-4 py-3 text-sm text-neutral-900 outline-none transition-colors dark:bg-neutral-900 dark:text-white",
    hasError
      ? "border-red-400 focus:border-red-500"
      : "border-neutral-300 focus:border-primary dark:border-neutral-700"
  );
}

function Field({
  label,
  htmlFor,
  error,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-neutral-700 dark:text-neutral-300">
        {label}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
