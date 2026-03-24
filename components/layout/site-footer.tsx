import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/ui/container";
import { contactHighlights, footerServiceLinks, siteConfig } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/8 bg-[#090705]">
      <Container className="space-y-10 py-14">
        <div className="surface-card rounded-[28px] border-brand-gold/18 bg-[linear-gradient(135deg,rgba(184,154,115,0.14),rgba(255,255,255,0.02))] px-6 py-8 sm:px-8 lg:px-10">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_auto] xl:items-center">
            <div className="space-y-4">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                Transportation Support
              </p>
              <h2 className="text-balance text-4xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-5xl">
                Need a transportation partner that leads with discipline and follow-through?
              </h2>
              <p className="max-w-3xl text-base leading-7 text-brand-mist/78">
                Reach out to discuss freight movement, dedicated transportation support, or a
                recurring route need that requires credible execution.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row xl:flex-col">
              <Link href="/contact" className="btn-primary">
                Get a Quote
              </Link>
              <Link href="/services" className="btn-secondary">
                View Services
              </Link>
            </div>
          </div>
        </div>

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1.15fr)_minmax(0,0.7fr)_minmax(0,0.8fr)_minmax(0,0.86fr)]">
          <div className="space-y-5">
            <BrandMark size="lg" />
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-gold/86">
              {siteConfig.tagline}
            </p>
            <p className="max-w-xl text-sm leading-7 text-brand-mist/74">
              {siteConfig.footerSummary}
            </p>
            <div className="flex flex-wrap gap-3 pt-1">
              <span className="meta-chip">{siteConfig.veteranOwnedLabel}</span>
              <span className="meta-chip">{siteConfig.baseRegion}</span>
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-gold">
              Navigation
            </p>
            <div className="space-y-3 text-sm text-brand-mist/74">
              {siteConfig.primaryNavigation.map((item) => (
                <Link key={item.href} href={item.href} className="block transition hover:text-brand-ivory">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-gold">
              Services
            </p>
            <div className="space-y-3 text-sm text-brand-mist/74">
              {footerServiceLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block transition hover:text-brand-ivory">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.34em] text-brand-gold">
              Contact
            </p>
            <div className="space-y-3 text-sm text-brand-mist/74">
              {contactHighlights.map((item) =>
                item.href ? (
                  <Link key={item.label} href={item.href} className="block transition hover:text-brand-ivory">
                    {item.value}
                  </Link>
                ) : (
                  <p key={item.label}>{item.value}</p>
                )
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.28em] text-brand-mist/60 sm:flex-row sm:items-center sm:justify-between">
          <p>{siteConfig.identityDescription}</p>
          <p>{siteConfig.domain}</p>
          <p>{new Date().getFullYear()} {siteConfig.name}</p>
        </div>
      </Container>
    </footer>
  );
}
