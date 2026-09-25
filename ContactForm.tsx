"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

type Status = "idle" | "submitting" | "success" | "error";

const FIELD =
  "w-full rounded-xl border border-white/[0.1] bg-white/[0.02] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 transition-colors focus:border-electric-400/60 focus:outline-none";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  // Wire this endpoint to a Make.com, Zapier, or GoHighLevel inbound webhook
  // to route submissions straight into your CRM pipeline.
  const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ?? "";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      if (WEBHOOK_URL) {
        await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        });
      }
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center gap-3 py-16 text-center"
      >
        <CheckCircle2 className="text-electric-glow" size={36} />
        <p className="font-display text-lg text-ink-100">Message sent.</p>
        <p className="max-w-xs text-sm text-ink-300">
          Thanks for reaching out — I'll get back to you within one business
          day.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs text-ink-500">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className={FIELD}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs text-ink-500">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className={FIELD}
          />
        </div>
      </div>

      <div>
        <label htmlFor="company" className="mb-2 block text-xs text-ink-500">
          Company
        </label>
        <input
          id="company"
          name="company"
          type="text"
          placeholder="Company name"
          className={FIELD}
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs text-ink-500">
          What would you like to automate?
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell me about the manual process you'd like off your plate."
          className={`${FIELD} resize-none`}
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-sm text-red-400"
          >
            Something went wrong sending that — try again, or email directly.
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-electric-500 px-6 py-3 text-sm font-medium text-white shadow-glow transition-all hover:bg-electric-600 disabled:opacity-60 sm:w-auto"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
        <Send size={15} />
      </button>
    </form>
  );
}
