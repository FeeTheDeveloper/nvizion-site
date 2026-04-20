import Link from "next/link";

import { DriverApplicationForm } from "@/components/forms/driver-application-form";
import { Container } from "@/components/ui/container";
import { FreightVisual } from "@/components/ui/freight-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import {
  driverApplicationSteps,
  driverOpportunityHighlights,
  driverPageChips,
  driverReviewStandards,
  siteConfig
} from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Drive With Nvizion",
  description:
    `Start the driver admissions process with ${siteConfig.name}. Company drivers and owner-operators can complete prescreening and submit an application online.`,
  pathname: "/drivers",
  keywords: [
    "driver application transportation company",
    "owner-operator opportunities Texas",
    "CDL driver application"
  ]
});

export default function DriversPage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8 pb-18 pt-24 sm:pb-22 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,154,115,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(108,74,47,0.24),transparent_28%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(243,238,228,0.03),transparent_26%,rgba(42,26,18,0.14)_58%,rgba(15,11,9,0.38)_100%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-b from-transparent to-brand-ink" />

        <Container className="relative z-10">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.96fr)_minmax(360px,0.88fr)] xl:items-center">
            <Reveal className="space-y-8">
              <div className="flex flex-wrap gap-3">
                {driverPageChips.map((chip) => (
                  <span
                    key={chip}
                    className="inline-flex items-center border border-white/10 bg-white/[0.04] px-3 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.3em] text-brand-mist/82"
                  >
                    {chip}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <p className="eyebrow">
                  <span className="h-px w-10 bg-brand-gold/70" />
                  Driver Recruitment
                </p>
                <h1 className="text-balance text-5xl font-semibold uppercase leading-[0.92] tracking-[0.06em] text-brand-ivory sm:text-6xl lg:text-7xl">
                  Drive With Nvizion
                </h1>
                <p className="max-w-3xl text-base leading-8 text-brand-mist/82 sm:text-lg">
                  Join a transportation company built on discipline, professionalism, and reliable
                  execution. Start your driver application and complete the prescreening process
                  today.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
                <Link
                  href="#driver-application"
                  className="btn-primary min-w-[220px] px-7 py-4 text-[0.78rem] tracking-[0.28em]"
                >
                  Start Driver Application
                </Link>
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="btn-secondary min-w-[220px] px-7 py-4 text-[0.78rem] tracking-[0.28em]"
                >
                  Contact Admissions
                </Link>
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <p className="max-w-3xl text-xs font-semibold uppercase tracking-[0.26em] text-brand-mist/58">
                  Dependable company drivers and independent owner-operators are reviewed based on
                  qualifications, documentation, driving history, and operational fit.
                </p>
                <div className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brand-mist/58">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(184,154,115,0.75)]" />
                  Admissions Review
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle,rgba(184,154,115,0.18),transparent_58%)] blur-3xl" />
                <FreightVisual
                  variant="route"
                  className="min-h-[420px] rounded-[30px] border-brand-gold/15 bg-brand-umber/80 p-6 sm:min-h-[520px] sm:p-7"
                />
                <div className="-mt-12 grid gap-4 px-4 sm:grid-cols-2 sm:px-6">
                  <div className="border border-brand-gold/18 bg-brand-ink/92 px-4 py-5 backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Built for Drivers
                    </p>
                    <p className="mt-3 text-sm leading-7 text-brand-mist/78">
                      Serious applicants who operate with professionalism, discipline, and
                      reliability.
                    </p>
                  </div>
                  <div className="border border-brand-gold/18 bg-brand-ink/92 px-4 py-5 backdrop-blur-md">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Review Factors
                    </p>
                    <p className="mt-3 text-sm leading-7 text-brand-mist/78">
                      Licensing, documentation, driving history, and fit for current operational
                      opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="space-y-12">
          <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(320px,0.44fr)] xl:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Who Should Apply"
                title="Built for dependable drivers and contract operators who take the work seriously"
                description={`${siteConfig.name} is looking for dependable, professional drivers and contract drivers who can represent the brand with consistency, communication, and clean execution. Every applicant is reviewed based on qualifications, documentation, driving history, and operational fit before any placement or contract decision is made.`}
                titleClassName="sm:text-5xl lg:text-[3.55rem]"
                descriptionClassName="max-w-3xl"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card rounded-[24px] border-brand-gold/12 p-6 sm:p-7">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                  Review Standards
                </p>
                <div className="mt-5 space-y-4">
                  {driverReviewStandards.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                      <p className="text-sm leading-7 text-brand-mist/76">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {driverOpportunityHighlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <article className="surface-card h-full rounded-[24px] border-brand-gold/10 p-6 sm:p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    0{index + 1}
                  </p>
                  <h2 className="mt-5 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {item.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/78">{item.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section id="driver-application" className="section-frame py-20 sm:py-24">
        <Container className="grid gap-10 xl:grid-cols-[minmax(0,0.44fr)_minmax(0,1fr)] xl:items-start">
          <div className="space-y-6 xl:sticky xl:top-28">
            <Reveal className="surface-card rounded-[24px] p-6 sm:p-7">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                Admissions Overview
              </p>
              <p className="mt-5 text-sm leading-7 text-brand-mist/78">
                This admissions flow is designed for new driver inquiries, contract interest, and
                first-pass qualification review. Complete the full form once so our team can review
                your operational profile in context.
              </p>
            </Reveal>

            <Reveal delay={80} className="surface-card rounded-[24px] p-6 sm:p-7">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                What Happens Next
              </p>
              <div className="mt-6 space-y-4">
                {driverApplicationSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="border border-white/10 bg-white/[0.03] px-4 py-4"
                  >
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      0{index + 1} {step.title}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-brand-mist/76">{step.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140} className="surface-card rounded-[24px] p-6 sm:p-7">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                Direct Contact
              </p>
              <p className="mt-5 text-sm leading-7 text-brand-mist/78">
                If your submission needs manual follow-up, contact{" "}
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="font-semibold text-brand-ivory transition hover:text-brand-gold"
                >
                  {siteConfig.email}
                </Link>{" "}
                and reference driver admissions.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120}>
            <DriverApplicationForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
