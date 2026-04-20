"use client";

import Link from "next/link";
import {
  useActionState,
  type HTMLInputTypeAttribute,
  type InputHTMLAttributes,
  type TextareaHTMLAttributes
} from "react";

import { submitDriverApplication } from "@/app/drivers/actions";
import { SubmitButton } from "@/components/forms/submit-button";
import {
  commercialDrivingExperienceOptions,
  driverAgreementFields,
  driverApplicantTypeOptions,
  driverPrescreeningQuestions,
  initialDriverApplicationFormState,
  preferredWorkTypeOptions,
  type DriverApplicationFormState,
  type DriverApplicationValues
} from "@/lib/driver-application";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

function sectionControlClassName(error?: string) {
  return cn(
    "w-full border bg-[#130f0c] px-4 py-3 text-sm text-brand-ivory outline-none transition placeholder:text-brand-mist/34",
    error ? "border-red-400/60" : "border-white/10 focus:border-brand-gold/55"
  );
}

function FieldLabel({
  label,
  required = false,
  hint
}: {
  label: string;
  required?: boolean;
  hint?: string;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-mist/78">
        <span>{label}</span>
        {required ? (
          <span className="text-[0.58rem] tracking-[0.3em] text-brand-gold/86">Required</span>
        ) : null}
      </div>
      {hint ? <p className="text-xs leading-6 text-brand-mist/60">{hint}</p> : null}
    </div>
  );
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) {
    return null;
  }

  return (
    <span id={id} className="block text-sm text-red-300">
      {error}
    </span>
  );
}

function SectionPanel({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-[26px] border border-white/10 bg-black/[0.18] p-5 sm:p-6">
      <div className="space-y-3">
        <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-3xl">
          {title}
        </h2>
        <p className="max-w-3xl text-sm leading-7 text-brand-mist/76">{description}</p>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function InputField({
  label,
  name,
  error,
  defaultValue,
  placeholder,
  type = "text",
  required = false,
  autoComplete,
  inputMode,
  hint
}: {
  label: string;
  name: keyof DriverApplicationValues;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  required?: boolean;
  autoComplete?: string;
  inputMode?: InputHTMLAttributes<HTMLInputElement>["inputMode"];
  hint?: string;
}) {
  const fieldId = `driver-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <FieldLabel label={label} required={required} hint={hint} />
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
        className={sectionControlClassName(error)}
      />
      <FieldError id={errorId} error={error} />
    </label>
  );
}

function SelectField({
  label,
  name,
  error,
  defaultValue,
  options,
  required = false,
  placeholder = "Select an option",
  hint
}: {
  label: string;
  name: keyof DriverApplicationValues;
  error?: string;
  defaultValue?: string;
  options: Array<{ label: string; value: string }>;
  required?: boolean;
  placeholder?: string;
  hint?: string;
}) {
  const fieldId = `driver-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <FieldLabel label={label} required={required} hint={hint} />
      <select
        id={fieldId}
        name={name}
        defaultValue={defaultValue ?? ""}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={sectionControlClassName(error)}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <FieldError id={errorId} error={error} />
    </label>
  );
}

function TextareaField({
  label,
  name,
  error,
  defaultValue,
  placeholder,
  hint
}: {
  label: string;
  name: keyof DriverApplicationValues;
  error?: string;
  defaultValue?: string;
  placeholder?: string;
  hint?: string;
}) {
  const fieldId = `driver-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <label htmlFor={fieldId} className="space-y-3">
      <FieldLabel label={label} hint={hint} />
      <textarea
        id={fieldId}
        name={name}
        rows={5}
        defaultValue={defaultValue}
        placeholder={placeholder}
        autoComplete={"off" as TextareaHTMLAttributes<HTMLTextAreaElement>["autoComplete"]}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className={cn(sectionControlClassName(error), "resize-none")}
      />
      <FieldError id={errorId} error={error} />
    </label>
  );
}

function RadioGroupField({
  label,
  name,
  error,
  options,
  defaultValue,
  required = false,
  hint
}: {
  label: string;
  name: keyof DriverApplicationValues;
  error?: string;
  options: Array<{ label: string; value: string }>;
  defaultValue?: string;
  required?: boolean;
  hint?: string;
}) {
  const fieldId = `driver-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <fieldset
      className="space-y-3"
      aria-invalid={error ? true : undefined}
      aria-describedby={error ? errorId : undefined}
    >
      <legend className="w-full">
        <FieldLabel label={label} required={required} hint={hint} />
      </legend>
      <div className="grid gap-3 sm:grid-cols-2">
        {options.map((option) => (
          <label
            key={option.value}
            className={cn(
              "flex min-h-[58px] items-start gap-3 border px-4 py-4 text-sm text-brand-mist/82 transition hover:border-brand-gold/35 hover:text-brand-ivory",
              error ? "border-red-400/35 bg-red-400/[0.04]" : "border-white/10 bg-white/[0.03]"
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              defaultChecked={defaultValue === option.value}
              required={required}
              className="mt-1 h-4 w-4 shrink-0 accent-[#B89A73]"
            />
            <span className="leading-6">{option.label}</span>
          </label>
        ))}
      </div>
      <FieldError id={errorId} error={error} />
    </fieldset>
  );
}

function AgreementField({
  name,
  label,
  error,
  defaultChecked
}: {
  name: keyof DriverApplicationValues;
  label: string;
  error?: string;
  defaultChecked?: boolean;
}) {
  const fieldId = `driver-${String(name)}`;
  const errorId = `${fieldId}-error`;

  return (
    <div className="space-y-3">
      <label
        htmlFor={fieldId}
        className={cn(
          "flex items-start gap-4 border px-4 py-4 text-sm leading-7 text-brand-mist/78",
          error ? "border-red-400/35 bg-red-400/[0.05]" : "border-white/10 bg-white/[0.03]"
        )}
      >
        <input
          id={fieldId}
          type="checkbox"
          name={name}
          defaultChecked={defaultChecked}
          required
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className="mt-1.5 h-4 w-4 shrink-0 accent-[#B89A73]"
        />
        <span>{label}</span>
      </label>
      <FieldError id={errorId} error={error} />
    </div>
  );
}

export function DriverApplicationForm() {
  const [state, formAction] = useActionState<DriverApplicationFormState, FormData>(
    submitDriverApplication,
    initialDriverApplicationFormState
  );
  const values = state?.values ?? initialDriverApplicationFormState.values;
  const errors = state?.errors ?? initialDriverApplicationFormState.errors;
  const status = state?.status ?? initialDriverApplicationFormState.status;
  const message = state?.message ?? initialDriverApplicationFormState.message;

  return (
    <form
      id="driver-application-form"
      action={formAction}
      noValidate
      className="surface-card scroll-mt-32 rounded-[30px] p-6 sm:scroll-mt-36 sm:p-8"
    >
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-gold/70" />
            Driver Admissions
          </p>
          <div className="space-y-3">
            <h2 className="text-3xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
              Driver application and prescreening
            </h2>
            <p className="text-sm leading-7 text-brand-mist/76">
              Complete the prescreening and admissions form below. Our team reviews driver
              applications based on qualifications, documentation, driving history, and
              operational fit.
            </p>
          </div>
          <div className="grid gap-4 border border-white/8 bg-white/[0.03] px-4 py-4 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
            <p className="text-sm leading-7 text-brand-mist/76">
              Questions before you apply? Email{" "}
              <Link
                href={`mailto:${siteConfig.email}`}
                className="font-semibold text-brand-ivory transition hover:text-brand-gold"
              >
                {siteConfig.email}
              </Link>{" "}
              and reference driver admissions.
            </p>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-mist/58">
              Required fields marked
            </p>
          </div>
        </div>

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

        <SectionPanel
          eyebrow="Step 01"
          title="Prescreening"
          description="These questions help our team understand licensing status, availability, and baseline fit before a deeper review."
        >
          <div className="grid gap-6">
            {driverPrescreeningQuestions.map((question) => {
              if (question.input === "radio" && question.options) {
                return (
                  <RadioGroupField
                    key={question.name}
                    label={question.label}
                    name={question.name}
                    options={question.options}
                    defaultValue={values[question.name] as string}
                    error={errors[question.name]}
                    required={question.required}
                    hint={question.description}
                  />
                );
              }

              if (question.input === "select" && question.options) {
                return (
                  <SelectField
                    key={question.name}
                    label={question.label}
                    name={question.name}
                    options={question.options}
                    defaultValue={values[question.name] as string}
                    error={errors[question.name]}
                    required={question.required}
                    hint={question.description}
                  />
                );
              }

              return (
                <InputField
                  key={question.name}
                  label={question.label}
                  name={question.name}
                  type="date"
                  defaultValue={values[question.name] as string}
                  error={errors[question.name]}
                  required={question.required}
                />
              );
            })}
          </div>
        </SectionPanel>

        <SectionPanel
          eyebrow="Step 02"
          title="Application Details"
          description="Share your contact information, operating profile, and the type of work you are seeking with Nvizion Transportation LLC."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <InputField
              label="Full Name"
              name="fullName"
              placeholder="Your full legal name"
              defaultValue={values.fullName}
              error={errors.fullName}
              required
              autoComplete="name"
            />
            <InputField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              placeholder="Best contact number"
              defaultValue={values.phoneNumber}
              error={errors.phoneNumber}
              required
              autoComplete="tel"
              inputMode="tel"
            />
            <InputField
              label="Email Address"
              name="emailAddress"
              type="email"
              placeholder="name@example.com"
              defaultValue={values.emailAddress}
              error={errors.emailAddress}
              required
              autoComplete="email"
              inputMode="email"
            />
            <InputField
              label="City"
              name="city"
              placeholder="Current city"
              defaultValue={values.city}
              error={errors.city}
              required
              autoComplete="address-level2"
            />
            <InputField
              label="State"
              name="state"
              placeholder="State"
              defaultValue={values.state}
              error={errors.state}
              required
              autoComplete="address-level1"
            />
            <SelectField
              label="Driver Type"
              name="applicantType"
              options={driverApplicantTypeOptions}
              defaultValue={values.applicantType}
              error={errors.applicantType}
              required
            />
            <InputField
              label="CDL Number or Note"
              name="cdlNumber"
              placeholder="CDL number or 'Available upon request'"
              defaultValue={values.cdlNumber}
              error={errors.cdlNumber}
              required
            />
            <SelectField
              label="Years of Experience"
              name="experienceYears"
              options={commercialDrivingExperienceOptions}
              defaultValue={values.experienceYears}
              error={errors.experienceYears}
              required
            />
            <InputField
              label="Equipment Type"
              name="equipmentType"
              placeholder="Only required for owner-operators"
              defaultValue={values.equipmentType}
              error={errors.equipmentType}
              hint="Examples: dry van, box truck, cargo van, reefer, flatbed."
            />
            <SelectField
              label="Preferred Work Type"
              name="preferredWorkType"
              options={preferredWorkTypeOptions}
              defaultValue={values.preferredWorkType}
              error={errors.preferredWorkType}
              required
            />
            <InputField
              label="Earliest Start Date"
              name="earliestStartDate"
              type="date"
              defaultValue={values.earliestStartDate}
              error={errors.earliestStartDate}
              required
            />
            <InputField
              label="Current Employer"
              name="currentEmployer"
              placeholder="Optional"
              defaultValue={values.currentEmployer}
              error={errors.currentEmployer}
              autoComplete="organization"
            />
          </div>

          <div className="mt-5">
            <TextareaField
              label="Additional Notes"
              name="additionalNotes"
              placeholder="Share route preferences, endorsements, equipment details, or anything else helpful for review."
              defaultValue={values.additionalNotes}
              error={errors.additionalNotes}
            />
          </div>

          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                Future Document Intake
              </p>
              <p className="text-sm leading-7 text-brand-mist/72">
                Upload fields are intentionally staged as placeholders for a later recruiting
                workflow. Resume, CDL copy, and insurance documents can be connected when document
                handling is ready.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "Resume",
                  body: "Placeholder only. Resume upload can be enabled in a future document step."
                },
                {
                  title: "CDL Copy",
                  body: "Placeholder only. Secure document collection can be added later."
                },
                {
                  title: "Insurance Docs",
                  body: "Placeholder only. Intended for owner-operator onboarding support."
                }
              ].map((item) => (
                <div
                  key={item.title}
                  className="border border-dashed border-white/12 bg-white/[0.03] px-4 py-5"
                >
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-mist/74">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </SectionPanel>

        <SectionPanel
          eyebrow="Step 03"
          title="Agreement and Contact Authorization"
          description="Please confirm the statements below before submitting your application."
        >
          <div className="space-y-4">
            {driverAgreementFields.map((agreement) => (
              <AgreementField
                key={agreement.name}
                name={agreement.name}
                label={agreement.label}
                error={errors[agreement.name]}
                defaultChecked={Boolean(values[agreement.name])}
              />
            ))}
          </div>
        </SectionPanel>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl text-xs uppercase tracking-[0.24em] text-brand-mist/56">
            Submission does not guarantee placement. Each application is reviewed for
            qualifications, documentation readiness, driving history, and current operational fit.
          </p>
          <SubmitButton
            idleLabel="Submit Driver Application"
            pendingLabel="Submitting Application..."
            className="sm:min-w-[240px]"
          />
        </div>
      </div>
    </form>
  );
}
