"use client";

import Link from "next/link";
import {
  useActionState,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes
} from "react";

import { submitContactForm } from "@/app/contact/actions";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  initialContactFormState,
  type ContactFormState,
  type ContactValues
} from "@/lib/contact-form";
import { serviceDetails, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function Field({
  label,
  name,
  error,
  defaultValue,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
  inputMode
}: {
  label: string;
  name: keyof ContactValues;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  const fieldId = `contact-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <span className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist/78">
        <span>{label}</span>
        {required ? (
          <span className="text-[0.58rem] tracking-[0.3em] text-brand-gold/86">Required</span>
        ) : null}
      </span>
      <input
        id={fieldId}
        type={type}
        name={name}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        inputMode={inputMode}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full border bg-[#130f0c] px-4 py-3 text-sm text-brand-ivory outline-none transition placeholder:text-brand-mist/34",
          error ? "border-red-400/60" : "border-white/10 focus:border-brand-gold/55"
        )}
      />
      {error ? (
        <span id={errorId} className="block text-sm text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function SelectField({
  label,
  name,
  error,
  defaultValue,
  required = false
}: {
  label: string;
  name: keyof ContactValues;
  error?: string;
  defaultValue?: string;
  required?: boolean;
}) {
  const fieldId = `contact-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <span className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist/78">
        <span>{label}</span>
        {required ? (
          <span className="text-[0.58rem] tracking-[0.3em] text-brand-gold/86">Required</span>
        ) : null}
      </span>
      <select
        id={fieldId}
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full border bg-[#130f0c] px-4 py-3 text-sm text-brand-ivory outline-none transition",
          error ? "border-red-400/60" : "border-white/10 focus:border-brand-gold/55"
        )}
      >
        <option value="">Select a service</option>
        {serviceDetails.map((service) => (
          <option key={service.id} value={service.title}>
            {service.title}
          </option>
        ))}
      </select>
      {error ? (
        <span id={errorId} className="block text-sm text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

function TextareaField({
  label,
  name,
  error,
  defaultValue,
  placeholder,
  required = false
}: {
  label: string;
  name: keyof ContactValues;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
}) {
  const fieldId = `contact-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <span className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist/78">
        <span>{label}</span>
        {required ? (
          <span className="text-[0.58rem] tracking-[0.3em] text-brand-gold/86">Required</span>
        ) : null}
      </span>
      <textarea
        id={fieldId}
        name={name}
        rows={5}
        defaultValue={defaultValue}
        placeholder={placeholder}
        required={required}
        autoComplete={"off" as TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"]}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(
          "w-full resize-none border bg-[#130f0c] px-4 py-3 text-sm text-brand-ivory outline-none transition placeholder:text-brand-mist/34",
          error ? "border-red-400/60" : "border-white/10 focus:border-brand-gold/55"
        )}
      />
      {error ? (
        <span id={errorId} className="block text-sm text-red-300">
          {error}
        </span>
      ) : null}
    </label>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState<ContactFormState, FormData>(
    submitContactForm,
    initialContactFormState
  );
  const values = state?.values ?? initialContactFormState.values;
  const errors = state?.errors ?? initialContactFormState.errors;
  const status = state?.status ?? initialContactFormState.status;
  const message = state?.message ?? initialContactFormState.message;

  return (
    <form action={formAction} className="surface-card rounded-[26px] p-6 sm:p-8">
      <div className="space-y-7">
        <div className="space-y-3">
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-gold/70" />
            Request Support
          </p>
          <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
            Start the conversation
          </h2>
          <p className="text-sm leading-7 text-brand-mist/76">
            Share the route basics, timing, and service need so we can direct the next step with
            clarity.
          </p>
        </div>

        <div className="grid gap-4 border border-white/8 bg-white/[0.03] px-4 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
          <p className="text-sm leading-7 text-brand-mist/76">
            Prefer to reach out directly? Email{" "}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="font-semibold text-brand-ivory transition hover:text-brand-gold"
            >
              {siteConfig.email}
            </Link>{" "}
            and include route details, timing, and service expectations.
          </p>
          <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-mist/58">
            Required fields marked
          </p>
        </div>

        <div className="space-y-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Contact Details
          </p>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field
              label="Full Name"
              name="fullName"
              placeholder="Your name"
              defaultValue={values.fullName}
              error={errors.fullName}
              required
              autoComplete="name"
            />
            <Field
              label="Company Name"
              name="companyName"
              placeholder="Company or organization"
              defaultValue={values.companyName}
              error={errors.companyName}
              autoComplete="organization"
            />
            <Field
              label="Phone"
              name="phone"
              type="tel"
              placeholder="Best contact number"
              defaultValue={values.phone}
              error={errors.phone}
              autoComplete="tel"
              inputMode="tel"
            />
            <Field
              label="Email"
              name="email"
              type="email"
              placeholder="name@company.com"
              defaultValue={values.email}
              error={errors.email}
              required
              autoComplete="email"
              inputMode="email"
            />
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Route Details
          </p>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            <SelectField
              label="Service Needed"
              name="serviceNeeded"
              defaultValue={values.serviceNeeded}
              error={errors.serviceNeeded}
              required
            />
            <Field
              label="Pickup Location"
              name="pickupLocation"
              placeholder="Pickup city or region"
              defaultValue={values.pickupLocation}
              error={errors.pickupLocation}
              autoComplete="off"
            />
            <Field
              label="Delivery Location"
              name="deliveryLocation"
              placeholder="Delivery city or region"
              defaultValue={values.deliveryLocation}
              error={errors.deliveryLocation}
              autoComplete="off"
            />
          </div>
        </div>

        <TextareaField
          label="Message"
          name="message"
          placeholder="Tell us about the load, timeline, or transportation support you need."
          defaultValue={values.message}
          error={errors.message}
          required
        />

        {message ? (
          <div
            role={status === "success" ? "status" : "alert"}
            aria-live="polite"
            className={cn(
              "border px-4 py-3 text-sm leading-7",
              status === "success"
                ? "border-brand-gold/30 bg-brand-gold/10 text-brand-ivory"
                : "border-red-400/35 bg-red-400/10 text-red-100"
            )}
          >
            {message}
          </div>
        ) : null}

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-xs uppercase tracking-[0.24em] text-brand-mist/56">
            Share enough context for an informed quote and a cleaner follow-up conversation.
          </p>
          <SubmitButton />
        </div>
      </div>
    </form>
  );
}
