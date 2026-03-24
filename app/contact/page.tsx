import Link from "next/link";

import { ContactForm } from "@/components/forms/contact-form";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { buildPageMetadata } from "@/lib/metadata";
import {
  contactExpectationPoints,
  contactHighlights,
  pageHeroChips,
  siteConfig
} from "@/lib/site";

const contactPageTitle = `Get in Touch With ${siteConfig.shortName}`;

export const metadata = buildPageMetadata({
  title: contactPageTitle,
  description:
    `Contact ${siteConfig.name} for freight transportation, logistics support, scheduled deliveries, and dedicated transportation service in ${siteConfig.baseLocation}.`,
  pathname: "/contact",
  keywords: ["contact Texas transportation company", "freight quote request", "logistics support contact"]
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contactPageTitle}
        title={contactPageTitle}
        description={siteConfig.contactIntro}
        chips={pageHeroChips.contact}
        visualVariant="route"
      />

      <section className="py-20 sm:py-24">
        <Container className="grid gap-10 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)] lg:items-start">
          <div className="space-y-6">
            <Reveal className="surface-card rounded-[24px] p-6 sm:p-7">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                Contact Details
              </p>
              <div className="mt-6 space-y-5">
                {contactHighlights.map((item) => (
                  <div key={item.label} className="border border-white/10 bg-white/[0.03] px-4 py-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      {item.label}
                    </p>
                    {item.href ? (
                      <Link
                        href={item.href}
                        className="mt-2 block text-base text-brand-ivory transition hover:text-brand-gold"
                      >
                        {item.value}
                      </Link>
                    ) : (
                      <p className="mt-2 text-base text-brand-ivory">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={90} className="surface-card rounded-[24px] p-6 sm:p-7">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                What to Expect
              </p>
              <div className="mt-6 space-y-4">
                {contactExpectationPoints.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                    <p className="text-sm leading-7 text-brand-mist/78">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
