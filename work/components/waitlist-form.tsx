"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { trackEvent } from "@/lib/analytics";
import { waitlistSchema, type WaitlistValues } from "@/lib/waitlist";

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
    "min-h-[70px] w-full rounded-[18px] border border-line bg-white px-5 text-sm text-verdant-950 shadow-sm transition placeholder:text-neutral-500 focus:border-verdant-400";

  return (
    <div
      id="waitlist-form"
      className="scroll-mt-24 bg-white p-6 shadow-premium sm:p-10 lg:p-[46px]"
    >
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            className="flex min-h-[520px] flex-col items-center justify-center text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            key="success"
            transition={{ duration: 0.4 }}
          >
            <motion.div
              animate={{ scale: [0.9, 1.08, 1] }}
              className="mb-6 grid h-16 w-16 place-items-center rounded-full bg-verdant-300 text-base font-semibold text-verdant-950"
              transition={{ duration: 0.55 }}
            >
              OK
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
            className="space-y-[22px]"
            initial={{ opacity: 0, y: 16 }}
            key="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Field
              error={errors.email?.message}
              label="Email Address"
              input={
                <input
                  className={fieldClass}
                  placeholder="you@example.com"
                  type="email"
                  {...register("email")}
                />
              }
            />
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                error={errors.firstName?.message}
                label="First Name"
                input={
                  <input
                    className={fieldClass}
                    placeholder="First name"
                    {...register("firstName")}
                  />
                }
              />
              <Field
                error={errors.lastName?.message}
                label="Last Name"
                input={
                  <input
                    className={fieldClass}
                    placeholder="Last name"
                    {...register("lastName")}
                  />
                }
              />
            </div>
            <Field
              error={errors.company?.message}
              label="What best describes you?"
              optional
              input={
                <select className={fieldClass} {...register("company")}>
                  <option value="">Select one</option>
                  <option value="Founder">Founder</option>
                  <option value="Remote worker">Remote worker</option>
                  <option value="Creative professional">Creative professional</option>
                  <option value="Startup team">Startup team</option>
                  <option value="Service business">Service business</option>
                </select>
              }
            />
            <Field
              error={errors.phone?.message}
              label="Phone Number"
              optional
              input={
                <input
                  className={fieldClass}
                  placeholder="+234"
                  type="tel"
                  {...register("phone")}
                />
              }
            />
            <label className="block">
              <span className="mb-2 flex items-center justify-between text-sm font-semibold text-verdant-950">
                What are you hoping VERDUX helps with?
                <span className="text-xs font-normal text-neutral-500">Optional</span>
              </span>
              <textarea
                className="min-h-[154px] w-full resize-none rounded-[18px] border border-line bg-white px-5 py-4 text-sm text-verdant-950 shadow-sm transition placeholder:text-neutral-500 focus:border-verdant-400"
                placeholder="Tell us a little about your work setup."
              />
            </label>
            {formError ? (
              <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                {formError}
              </p>
            ) : null}
            <button
              className="min-h-[69px] w-full rounded-full bg-verdant-700 px-6 text-base font-semibold text-white transition duration-300 ease-out hover:scale-[1.03] hover:bg-verdant-400 disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
              type="submit"
            >
              {isSubmitting ? "Joining..." : "Join the Waitlist"}
            </button>
            <p className="text-center text-xs text-neutral-500">
              No spam. Just progress updates and launch news.
            </p>
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
