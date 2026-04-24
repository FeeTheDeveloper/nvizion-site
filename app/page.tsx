import Link from "next/link";

import { VeteranOwnedVerification } from "@/components/home/veteran-owned-verification";
import { Container } from "@/components/ui/container";
import { FreightVisual } from "@/components/ui/freight-visual";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ServiceCard } from "@/components/ui/service-card";
import { buildPageMetadata } from "@/lib/metadata";
import {
  clientMindsetPoints,
  heroChips,
  heroSupportLine,
  heroVisualHighlights,
  homeStats,
  servicesPreview,
  siteConfig,
  trustPoints
} from "@/lib/site";

const baseRegion = siteConfig.baseRegion;

const operatingPriorities = [
  {
    title: "Timing",
    body: "Schedules matter, and every move is built around protecting delivery windows."
  },
  {
    title: "Communication",
    body: "Clients stay informed through direct, useful updates instead of avoidable guesswork."
  },
  {
    title: "Consistency",
    body: "Repeatable standards keep routine, recurring, and urgent transportation support dependable."
  },
  {
    title: "Trust",
    body: "Credibility is earned through preparedness, follow-through, and professional execution."
  }
];

const featuredTrustPoint = trustPoints[0];
const supportingTrustPoints = trustPoints.slice(1);

export const metadata = buildPageMetadata({
  title: `${siteConfig.veteranOwnedLabel} Transportation Company in ${baseRegion}`,
  description:
    `${siteConfig.name} delivers disciplined freight transportation and logistics support built on professionalism, accountability, and dependable execution.`,
  pathname: "/",
  keywords: [siteConfig.name, "dependable transportation solutions", "Texas freight company"]
});

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-white/8 pb-20 pt-24 sm:pb-24 sm:pt-28 lg:pb-24 lg:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,154,115,0.18),transparent_32%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(108,74,47,0.28),transparent_28%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(243,238,228,0.05),transparent_22%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(243,238,228,0.035),transparent_24%,rgba(42,26,18,0.14)_58%,rgba(15,11,9,0.38)_100%)]" />
        <div className="absolute left-[7%] top-24 hidden h-48 w-48 rounded-full border border-brand-gold/10 xl:block" />
        <div className="absolute right-[10%] top-20 hidden h-px w-40 bg-gradient-to-r from-transparent via-brand-gold/35 to-transparent xl:block" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-brand-ink" />

        <Container className="relative z-10">
          <div className="grid gap-12 xl:grid-cols-[minmax(0,0.96fr)_minmax(430px,0.94fr)] xl:items-center">
            <Reveal className="space-y-8 lg:space-y-9 xl:pr-8">
              <div className="flex flex-wrap gap-3">
                {heroChips.map((chip) => (
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
                  {siteConfig.identityDescription}
                </p>
                <h1 className="text-balance text-5xl font-semibold uppercase leading-[0.9] tracking-[0.05em] text-brand-ivory sm:text-6xl md:text-7xl xl:text-[6.55rem]">
                  <span className="block">
                    Driven With <span className="text-fade">Precision.</span>
                  </span>
                  <span className="mt-2 block">Delivered With Purpose.</span>
                </h1>
                <p className="max-w-3xl text-base leading-8 text-brand-mist/82 sm:text-lg sm:leading-8">
                  {siteConfig.name} provides dependable freight and transportation solutions built
                  on discipline, professionalism, and execution. As a veteran-owned company, we
                  move every load with focus, accountability, and real-world reliability.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/contact"
                  className="btn-primary min-w-[220px] px-7 py-4 text-[0.78rem] tracking-[0.28em]"
                >
                  Get a Quote
                </Link>
                <Link
                  href="/services"
                  className="btn-secondary min-w-[220px] px-7 py-4 text-[0.78rem] tracking-[0.28em]"
                >
                  View Services
                </Link>
              </div>

              <div className="grid gap-4 border-t border-white/10 pt-5 sm:grid-cols-[minmax(0,1fr)_auto] sm:items-center">
                <p className="max-w-3xl text-xs font-semibold uppercase tracking-[0.26em] text-brand-mist/58">
                  {heroSupportLine}
                </p>
                <div className="flex items-center gap-3 text-[0.66rem] font-semibold uppercase tracking-[0.26em] text-brand-mist/58">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-gold shadow-[0_0_24px_rgba(184,154,115,0.75)]" />
                  Client-Ready Service
                </div>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="relative">
                <div className="absolute -inset-6 rounded-[40px] bg-[radial-gradient(circle,rgba(184,154,115,0.2),transparent_58%)] blur-3xl" />
                <div className="absolute -right-2 bottom-12 hidden border border-brand-gold/18 bg-brand-ink/84 px-4 py-4 backdrop-blur-md xl:block">
                  <p className="text-[0.58rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                    Mission Focus
                  </p>
                  <p className="mt-2 max-w-[12rem] text-sm leading-6 text-brand-mist/78">
                    Direct communication and disciplined route execution for commercial clients.
                  </p>
                </div>
                <FreightVisual
                  variant="hero"
                  className="min-h-[430px] rounded-[32px] border-brand-gold/15 bg-brand-umber/80 p-6 sm:min-h-[530px] sm:p-7 lg:min-h-[640px]"
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {heroVisualHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="border border-brand-gold/16 bg-brand-ink/84 px-4 py-4 backdrop-blur-md sm:px-5"
                    >
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                        {item.label}
                      </p>
                      <p className="mt-2 text-lg font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                        {item.value}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-brand-mist/72">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={180} className="mt-10 sm:mt-12">
            <div className="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_repeat(3,minmax(0,0.72fr))]">
              <div className="surface-card rounded-[28px] border-brand-gold/15 bg-[linear-gradient(135deg,rgba(184,154,115,0.14),rgba(255,255,255,0.02))] p-6 sm:p-7">
                <p className="eyebrow">
                  <span className="h-px w-8 bg-brand-gold/70" />
                  Commercial Confidence
                </p>
                <p className="mt-5 max-w-2xl text-base leading-8 text-brand-mist/80">
                  Built to support routine freight, dedicated transportation coverage, and
                  time-sensitive delivery needs with professionalism that holds up under pressure.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="meta-chip">Veteran-Owned Discipline</span>
                  <span className="meta-chip">Service-First Communication</span>
                  <span className="meta-chip">Execution-Focused Support</span>
                </div>
              </div>

              {homeStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="surface-card rounded-[24px] border-brand-gold/10 bg-black/[0.14] p-5 sm:p-6"
                >
                  <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                    0{index + 1} {stat.label}
                  </p>
                  <p className="mt-3 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-mist/74">{stat.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="relative z-20 -mt-8 pb-14 sm:-mt-10 sm:pb-16 lg:-mt-12">
        <Container>
          <Reveal>
            <div className="surface-card rounded-[32px] border-brand-gold/15 bg-[linear-gradient(135deg,rgba(184,154,115,0.14),rgba(255,255,255,0.02))] p-6 sm:p-8 lg:p-10">
              <div className="grid gap-10 xl:grid-cols-[minmax(0,0.94fr)_minmax(0,1.06fr)] xl:items-end">
                <div className="space-y-8">
                  <SectionHeading
                    eyebrow="Transportation You Can Count On"
                    title="Transportation You Can Count On"
                    description={`At ${siteConfig.shortName}, we believe transportation is more than moving freight from point A to point B. It is about timing, communication, consistency, and trust. Our team operates with a service-first mindset and a standard of excellence shaped by discipline and commitment. Whether the job is routine, scheduled, or time-sensitive, we show up ready to deliver.`}
                    titleClassName="sm:text-5xl lg:text-[3.75rem]"
                    descriptionClassName="max-w-3xl"
                  />

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="border border-white/10 bg-black/[0.18] px-4 py-5 sm:px-5">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                        Operating Posture
                      </p>
                      <p className="mt-3 text-base font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                        Disciplined and client-ready
                      </p>
                    </div>
                    <div className="border border-white/10 bg-black/[0.18] px-4 py-5 sm:px-5">
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                        Service Mindset
                      </p>
                      <p className="mt-3 text-base font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                        Professional from dispatch to delivery
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  {operatingPriorities.map((priority, index) => (
                    <div
                      key={priority.title}
                      className="group border border-white/10 bg-black/[0.18] px-4 py-5 transition duration-300 hover:border-brand-gold/28 hover:bg-brand-gold/[0.08] sm:px-5"
                    >
                      <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                        0{index + 1} {priority.title}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-brand-mist/78">{priority.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:py-28">
        <Container className="space-y-12">
          <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_minmax(300px,0.42fr)] xl:items-end">
            <Reveal>
              <SectionHeading
                eyebrow="Core Services"
                title="Commercial transportation support built for dependable execution"
                description="We provide focused transportation solutions designed to keep clients moving with consistency, responsiveness, and a high standard of professional service."
                titleClassName="sm:text-5xl lg:text-[3.55rem]"
                descriptionClassName="max-w-3xl"
              />
            </Reveal>

            <Reveal delay={80}>
              <div className="surface-card rounded-[24px] border-brand-gold/12 p-5 sm:p-6">
                <p className="text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                  Coverage Snapshot
                </p>
                <p className="mt-4 text-sm leading-7 text-brand-mist/76">
                  Freight, recurring route support, dedicated transportation service, and
                  time-sensitive coverage built around client schedules.
                </p>
                <Link href="/services" className="btn-secondary mt-6 w-full sm:w-auto">
                  See Full Service Coverage
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-6 xl:grid-cols-2">
            {servicesPreview.map((service, index) => (
              <Reveal key={service.title} delay={index * 80}>
                <ServiceCard
                  index={index + 1}
                  eyebrow={service.eyebrow}
                  title={service.title}
                  summary={service.summary}
                  highlights={service.highlights}
                  href={service.href}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <VeteranOwnedVerification />

      <section className="relative py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_22%,rgba(184,154,115,0.08),transparent_24%)]" />
        <Container className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,0.72fr)_minmax(0,1fr)]">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="Why Choose Nvizion"
              title="A transportation partner commercial clients can trust"
              description="Our operating standard is built to reduce uncertainty and deliver a more professional transportation experience from first call to final handoff."
              titleClassName="sm:text-5xl lg:text-[3.45rem]"
              descriptionClassName="max-w-2xl"
            />

            <div className="surface-card rounded-[30px] border-brand-gold/15 bg-[linear-gradient(135deg,rgba(184,154,115,0.14),rgba(255,255,255,0.02))] p-6 sm:p-8">
              <p className="eyebrow">
                <span className="h-px w-8 bg-brand-gold/70" />
                Credibility First
              </p>
              <h3 className="mt-5 text-3xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-4xl">
                {featuredTrustPoint.title}
              </h3>
              <p className="mt-5 text-base leading-8 text-brand-mist/78">
                {featuredTrustPoint.body}
              </p>
              <div className="mt-6 space-y-4">
                {[
                  "Professional support designed for commercial clients",
                  "Clear updates that reduce friction and uncertainty",
                  "Execution standards built to earn repeat business"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                    <p className="text-sm leading-7 text-brand-mist/76">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="btn-primary mt-7">
                Talk With Our Team
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2">
            {supportingTrustPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <article className="surface-card h-full rounded-[24px] border-brand-gold/10 p-6 transition duration-300 hover:border-brand-gold/28 sm:p-7">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    0{index + 2}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/78">{point.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-frame relative overflow-hidden py-20 sm:py-24 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(184,154,115,0.12),transparent_34%)]" />
        <Container className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,0.96fr)] xl:items-center">
          <Reveal className="space-y-8">
            <SectionHeading
              eyebrow="About the Company"
              title="Focused on long-term service relationships, not one-time transactions"
              description={`${siteConfig.shortName} is built around dependable service, honest communication, and a standard of professionalism shaped by veteran-owned discipline. We aim to become the transportation partner clients trust when consistency matters.`}
              titleClassName="sm:text-5xl lg:text-[3.45rem]"
              descriptionClassName="max-w-2xl"
            />
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn-primary">
                Start a Conversation
              </Link>
              <Link href="/about" className="btn-secondary">
                Learn More About Us
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(220px,0.62fr)]">
              <div className="surface-card rounded-[28px] border-brand-gold/12 bg-[linear-gradient(180deg,rgba(184,154,115,0.08),rgba(255,255,255,0.02))] p-7 sm:p-8">
                <p className="eyebrow">
                  <span className="h-px w-8 bg-brand-gold/70" />
                  Client Mindset
                </p>
                <div className="mt-6 space-y-5">
                  {clientMindsetPoints.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                    >
                      <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                      <p className="text-sm leading-7 text-brand-mist/78">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-5">
                <div className="surface-card rounded-[24px] border-brand-gold/12 p-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    Identity
                  </p>
                  <p className="mt-4 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {siteConfig.veteranOwnedLabel}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/76">
                    {baseRegion}-based transportation support with a disciplined service mindset.
                  </p>
                </div>
                <div className="surface-card rounded-[24px] border-brand-gold/12 p-6">
                  <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    Contact
                  </p>
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-brand-ivory">
                    {siteConfig.email}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/76">
                    Reach out to discuss freight needs, recurring routes, or dedicated support.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24 lg:pb-28">
        <Container>
          <Reveal>
            <div className="relative overflow-hidden rounded-[34px] border border-brand-gold/24 bg-[radial-gradient(circle_at_top_left,rgba(184,154,115,0.18),transparent_30%),linear-gradient(135deg,rgba(184,154,115,0.16),rgba(255,255,255,0.02)_42%,rgba(15,11,9,0.18)_100%)] px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
              <div className="absolute left-10 right-10 top-0 h-px bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent" />
              <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_minmax(280px,0.34fr)] xl:items-center">
                <div className="space-y-5">
                  <p className="eyebrow">
                    <span className="h-px w-8 bg-brand-gold/70" />
                    Ready to Move
                  </p>
                  <h2 className="text-balance text-4xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-5xl lg:text-[3.45rem]">
                    Need dependable transportation support backed by discipline and follow-through?
                  </h2>
                  <p className="max-w-3xl text-base leading-8 text-brand-mist/78">
                    Let&apos;s talk about your route, freight needs, or recurring transportation
                    support and build a service plan that fits your operation.
                  </p>
                  <div className="flex flex-col gap-4 pt-2 sm:flex-row">
                    <Link href="/contact" className="btn-primary">
                      Get a Quote
                    </Link>
                    <Link href="/drivers" className="btn-secondary">
                      Apply to Drive
                    </Link>
                    <Link href="/services" className="btn-secondary">
                      View Services
                    </Link>
                  </div>
                </div>

                <div className="grid gap-3">
                  <div className="border border-white/10 bg-black/[0.18] px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Email
                    </p>
                    <p className="mt-2 text-sm text-brand-ivory">{siteConfig.email}</p>
                  </div>
                  <div className="border border-white/10 bg-black/[0.18] px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Base Region
                    </p>
                    <p className="mt-2 text-sm text-brand-ivory">{siteConfig.baseLocation}</p>
                  </div>
                  <div className="border border-white/10 bg-black/[0.18] px-4 py-4">
                    <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                      Service Posture
                    </p>
                    <p className="mt-2 text-sm text-brand-ivory">
                      Direct communication. Reliable execution. Long-term client focus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
