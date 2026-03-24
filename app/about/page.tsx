import { CtaBand } from "@/components/ui/cta-band";
import { Container } from "@/components/ui/container";
import { FreightVisual } from "@/components/ui/freight-visual";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import { aboutPillars, coreValues, pageHeroChips, relationshipPoints, siteConfig } from "@/lib/site";

const aboutPageTitle = `About ${siteConfig.shortName}`;

export const metadata = buildPageMetadata({
  title: aboutPageTitle,
  description:
    `Learn about ${siteConfig.name}, a veteran-owned ${siteConfig.baseRegion} transportation company built on professionalism, reliability, and long-term service relationships.`,
  pathname: "/about",
  keywords: ["about veteran-owned transportation company", "Texas logistics partner", "reliable freight support"]
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow={aboutPageTitle}
        title={aboutPageTitle}
        description={`${siteConfig.name} is a veteran-owned transportation company serving clients with a disciplined, professional, and relationship-driven approach. We believe reliability is built through preparation, accountability, and consistent follow-through.`}
        chips={pageHeroChips.about}
        visualVariant="stack"
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-12">
          <Reveal>
            <SectionHeading
              eyebrow="Mission and Vision"
              title="Our direction is simple: execute well and earn trust over time"
              description="Every relationship, route, and delivery opportunity is approached with the mindset that professionalism and consistency are what build lasting business."
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            {aboutPillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <article className="surface-card rounded-[24px] p-7 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                    {pillar.title}
                  </p>
                  <p className="mt-5 text-3xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {pillar.title === "Mission" ? "Dependable execution" : "Trusted partnership"}
                  </p>
                  <p className="mt-5 text-sm leading-7 text-brand-mist/78">{pillar.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-frame">
        <Container className="grid gap-12 py-20 lg:grid-cols-[minmax(320px,0.82fr)_minmax(0,1fr)] lg:items-center">
          <Reveal>
            <FreightVisual variant="route" className="min-h-[420px]" />
          </Reveal>
          <Reveal delay={90}>
            <SectionHeading
              eyebrow="Veteran-Owned Identity"
              title="Service values are part of how we operate, not just how we describe ourselves"
              description={`${siteConfig.shortName} carries a veteran-owned identity that influences how we show up: prepared, respectful, accountable, and committed to the mission. We believe strong transportation service is built on standards that clients can feel in every interaction.`}
            />
          </Reveal>
        </Container>
      </section>

      <section className="py-20 sm:py-24">
        <Container className="space-y-12">
          <Reveal>
            <SectionHeading
              eyebrow="Core Values"
              title="The values behind our daily operating standard"
              description="Our core values guide how we communicate, plan, deliver, and support the businesses that trust us with transportation responsibility."
            />
          </Reveal>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {coreValues.map((value, index) => (
              <Reveal key={value.title} delay={index * 70}>
                <article className="surface-card h-full rounded-[22px] p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    0{index + 1}
                  </p>
                  <h3 className="mt-5 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {value.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/78">{value.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-frame">
        <Container className="grid gap-12 py-20 lg:grid-cols-[minmax(0,0.9fr)_minmax(320px,0.74fr)]">
          <Reveal>
            <SectionHeading
              eyebrow="Relationship Focus"
              title="Professionalism that supports long-term service relationships"
              description="We want clients to feel confident that they have a transportation partner who values communication, consistency, and dependable performance just as much as they do."
            />
          </Reveal>

          <div className="grid gap-5">
            {relationshipPoints.map((point, index) => (
              <Reveal key={point.title} delay={index * 80}>
                <article className="surface-card rounded-[22px] p-6">
                  <h3 className="text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                    {point.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-brand-mist/78">{point.body}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <CtaBand
              eyebrow="Work With Us"
              title="Looking for a transportation company with a disciplined service mindset?"
              description="If you value professionalism, responsive communication, and dependable transportation support, let&apos;s start the conversation."
              primaryAction={{ label: "Contact Nvizion", href: "/contact" }}
              secondaryAction={{ label: "View Services", href: "/services" }}
              aside={
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-1">
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
                </div>
              }
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
