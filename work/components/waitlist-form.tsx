"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { waitlistSchema, type WaitlistValues } from "@/lib/waitlist";
import { trackEvent } from "@/lib/analytics";

export function WaitlistForm() {
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<WaitlistValues>({
    resolver: zodResolver(waitlistSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: ""
    }
  });

  async function onSubmit(values: WaitlistValues) {
    setFormError("");
    const response = await fetch("/api/waitlist", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    const data = (await response.json().catch(() => ({}))) as { message?: string };

    if (!response.ok) {
      setFormError(data.message || "We could not add you right now. Please try again.");
      return;
    }

    trackEvent("waitlist_submission", { email_domain: values.email.split("@")[1] });
    setSuccess(true);
  }

  const fieldClass =
    "min-h-12 w-full rounded-full border border-line bg-white px-4 text-sm text-verdant-950 shadow-sm transition placeholder:text-neutral-500 focus:border-verdant-400";

  return (
    <div id="waitlist-form" className="scroll-mt-24 rounded-[24px] bg-white p-5 shadow-premium sm:p-8">
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[420px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            key="success"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ scale: [0.9, 1.08, 1] }}
              className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-verdant-300 text-3xl text-verdant-950"
              transition={{ duration: 0.55 }}
            >
              ✓
            </motion.div>
            <h2 className="font-serif text-3xl font-semibold text-verdant-700">
              You're officially on the VERDUX waitlist.
            </h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-600">
              Thank you for joining. We'll notify you as soon as early access
              becomes available.
            </p>
          </motion.div>
        ) : (
          <motion.form
            animate={{ opacity: 1, y: 0 }}
            className="space-y-5"
            initial={{ opacity: 0, y: 16 }}
            key="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-verdant-800">
                Join the waitlist
              </p>
              <h2 className="mt-3 font-serif text-3xl font-semibold leading-tight text-verdant-700 sm:text-4xl">
                Get founding-member access first.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.firstName?.message}
                label="First Name"
                input={<input className={fieldClass} {...register("firstName")} />}
              />
              <Field
                error={errors.lastName?.message}
                label="Last Name"
                input={<input className={fieldClass} {...register("lastName")} />}
              />
            </div>
            <Field
              error={errors.email?.message}
              label="Email Address"
              input={<input className={fieldClass} type="email" {...register("email")} />}
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.phone?.message}
                label="Phone Number"
                optional
                input={<input className={fieldClass} type="tel" {...register("phone")} />}
              />
              <Field
                error={errors.company?.message}
                label="Company Name"
                optional
                input={<input className={fieldClass} {...register("company")} />}
              />
            </div>
            {formError ? (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {formError}
              </p>
            ) : null}
            <button
              className="min-h-12 w-full rounded-full bg-verdant-700 px-6 text-sm font-semibold text-white transition duration-300 ease-out hover:scale-[1.03] hover:bg-verdant-400 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Joining..." : "Reserve Spot"}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

function Field({
  label,
  input,
  error,
  optional = false
}: {
  label: string;
  input: ReactNode;
  error?: string;
  optional?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center justify-between text-sm font-semibold text-verdant-950">
        {label}
        {optional ? <span className="text-xs font-normal text-neutral-500">Optional</span> : null}
      </span>
      {input}
      {error ? <span className="mt-2 block text-xs text-red-700">{error}</span> : null}
    </label>
  );
}
