"use client";

import { useFormStatus } from "react-dom";

import { cn } from "@/lib/utils";

export function SubmitButton({
  idleLabel = "Request Transportation Support",
  pendingLabel = "Submitting...",
  className
}: {
  idleLabel?: string;
  pendingLabel?: string;
  className?: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className={cn("btn-primary w-full sm:w-auto", className)}
    >
      {pending ? pendingLabel : idleLabel}
    </button>
  );
}
