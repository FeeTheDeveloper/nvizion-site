import { Container } from "@/components/ui/container";
import { FreightVisual } from "@/components/ui/freight-visual";
import { cn } from "@/lib/utils";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description: string;
  chips?: string[];
  visualVariant?: "hero" | "stack" | "route";
  className?: string;
};

export function PageHero({
  eyebrow,
  title,
  description,
  chips = [],
  visualVariant = "route",
  className
}: PageHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-white/8 pb-16 pt-28 sm:pb-20 sm:pt-32",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(184,154,115,0.16),transparent_40%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(118deg,rgba(243,238,228,0.03),transparent_34%,rgba(108,74,47,0.12)_100%)]" />
      <Container className="relative z-10">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.82fr)] lg:items-end">
          <div className="space-y-8">
            {eyebrow ? (
              <p className="eyebrow">
                <span className="h-px w-10 bg-brand-gold/70" />
                {eyebrow}
              </p>
            ) : null}
            <div className="space-y-5">
              <h1 className="text-balance text-5xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-6xl lg:text-7xl">
                {title}
              </h1>
              <p className="section-copy max-w-3xl">{description}</p>
            </div>
            {chips.length ? (
              <div className="flex flex-wrap gap-3">
                {chips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-mist/82"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            ) : null}
          </div>
          <FreightVisual
            variant={visualVariant}
            className="min-h-[420px] rounded-[30px] border-brand-gold/12 bg-brand-umber/80"
          />
        </div>
      </Container>
    </section>
  );
}
