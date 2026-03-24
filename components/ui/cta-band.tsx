import Link from "next/link";

import { cn } from "@/lib/utils";

type CtaBandProps = {
  eyebrow: string;
  title: string;
  description?: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
  aside?: React.ReactNode;
};

export function CtaBand({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  className,
  aside
}: CtaBandProps) {
  return (
    <div
      className={cn(
        "surface-card rounded-[28px] border-brand-gold/20 bg-[linear-gradient(135deg,rgba(184,154,115,0.16),rgba(255,255,255,0.02))] px-6 py-10 sm:px-10 sm:py-12",
        className
      )}
    >
      <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(260px,0.34fr)] xl:items-center">
        <div className="space-y-4">
          <p className="eyebrow">
            <span className="h-px w-8 bg-brand-gold/70" />
            {eyebrow}
          </p>
          <h2 className="text-balance text-4xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-5xl">
            {title}
          </h2>
          {description ? (
            <p className="max-w-3xl text-base leading-7 text-brand-mist/78">{description}</p>
          ) : null}
          <div className="flex flex-col gap-4 pt-2 sm:flex-row">
            <Link href={primaryAction.href} className="btn-primary">
              {primaryAction.label}
            </Link>
            {secondaryAction ? (
              <Link href={secondaryAction.href} className="btn-secondary">
                {secondaryAction.label}
              </Link>
            ) : null}
          </div>
        </div>

        {aside ? <div>{aside}</div> : null}
      </div>
    </div>
  );
}
