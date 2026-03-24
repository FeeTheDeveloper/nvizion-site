import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
  eyebrowClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  eyebrowClassName,
  titleClassName,
  descriptionClassName
}: SectionHeadingProps) {
  return (
    <div className={cn("space-y-5", align === "center" ? "mx-auto text-center" : "", className)}>
      {eyebrow ? (
        <p className={cn("eyebrow", align === "center" ? "justify-center" : "", eyebrowClassName)}>
          <span className="h-px w-8 bg-brand-gold/70" />
          {eyebrow}
        </p>
      ) : null}
      <div className={cn("space-y-4", align === "center" ? "mx-auto max-w-3xl" : "")}>
        <h2 className={cn("section-title text-balance", titleClassName)}>{title}</h2>
        {description ? <p className={cn("section-copy", descriptionClassName)}>{description}</p> : null}
      </div>
    </div>
  );
}
