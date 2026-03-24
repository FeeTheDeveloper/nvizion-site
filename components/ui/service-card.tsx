import Link from "next/link";

type ServiceCardProps = {
  index: number;
  eyebrow?: string;
  title: string;
  summary: string;
  highlights?: string[];
  href: string;
};

export function ServiceCard({ index, eyebrow, title, summary, highlights = [], href }: ServiceCardProps) {
  return (
    <article className="surface-card group isolate flex h-full flex-col rounded-[26px] border-brand-gold/12 bg-[linear-gradient(165deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02)_34%,rgba(15,11,9,0.16)_100%)] p-6 transition duration-300 hover:-translate-y-1.5 hover:border-brand-gold/42 sm:p-7 lg:p-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,154,115,0.16),transparent_34%),linear-gradient(180deg,rgba(243,238,228,0.03),transparent_28%)] opacity-80 transition duration-300 group-hover:opacity-100" />
      <div className="pointer-events-none absolute right-0 top-0 h-28 w-28 translate-x-1/4 -translate-y-1/4 rounded-full bg-brand-gold/10 blur-3xl transition duration-300 group-hover:bg-brand-gold/16" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="space-y-3">
            <span className="inline-flex min-h-12 min-w-12 items-center justify-center border border-brand-gold/25 bg-brand-gold/10 px-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-gold">
              0{index}
            </span>
            {eyebrow ? (
              <span className="inline-flex items-center border border-white/10 bg-white/[0.03] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.26em] text-brand-mist/76">
                {eyebrow}
              </span>
            ) : null}
          </div>
          <span className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-mist/60">
            Commercial
          </span>
        </div>

        <div className="space-y-4">
          <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-[2rem]">
            {title}
          </h3>
          <p className="text-sm leading-7 text-brand-mist/78 sm:text-[0.96rem]">{summary}</p>
        </div>

        {highlights.length ? (
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="flex items-center gap-3 border border-white/8 bg-black/[0.14] px-3 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-brand-mist/72 transition duration-300 group-hover:border-brand-gold/18"
              >
                <span className="h-2 w-2 rounded-full bg-brand-gold" />
                {highlight}
              </div>
            ))}
          </div>
        ) : null}

        <div className="mt-auto pt-7">
          <div className="h-px bg-gradient-to-r from-brand-gold/30 via-white/8 to-transparent" />
          <Link
            href={href}
            className="mt-5 inline-flex items-center justify-between gap-4 text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold transition hover:text-brand-ivory"
          >
            <span>Explore service</span>
            <span
              aria-hidden="true"
              className="text-base leading-none transition duration-300 group-hover:translate-x-1"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>
    </article>
  );
}
