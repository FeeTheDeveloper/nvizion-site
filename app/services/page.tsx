import { CtaBand } from "@/components/ui/cta-band";
import { Container } from "@/components/ui/container";
import { FreightVisual } from "@/components/ui/freight-visual";
import { PageHero } from "@/components/ui/page-hero";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { buildPageMetadata } from "@/lib/metadata";
import { pageHeroChips, serviceDetails, siteConfig } from "@/lib/site";

export const metadata = buildPageMetadata({
  title: "Transportation Services Built for Reliability",
  description:
    `Explore freight transportation, dedicated transportation support, scheduled deliveries, time-sensitive transportation, and business-to-business logistics support from ${siteConfig.name}.`,
  pathname: "/services",
  keywords: ["transportation services Texas", "dedicated logistics service", "time-sensitive freight transportation"]
});

export default function ServicesPage() {
  const variants: Array<"hero" | "stack" | "route"> = ["hero", "stack", "route"];

  return (
    <>
      <PageHero
        eyebrow="Transportation Services Built for Reliability"
        title="Transportation Services Built for Reliability"
        description={`${siteConfig.name} provides focused transportation support for businesses that value timing, communication, and dependable execution. Our services are built to keep your operation moving with confidence.`}
        chips={pageHeroChips.services}
        visualVariant="hero"
      />

      <section className="py-20 sm:py-24">
        <Container className="space-y-12">
          <Reveal>
            <SectionHeading
              eyebrow="Service Coverage"
              title="Professional transportation support across routine, dedicated, and high-priority needs"
              description="Whether your need is scheduled, recurring, urgent, or business-critical, our service model is centered on discipline, consistency, and client confidence."
            />
          </Reveal>

          <div className="space-y-8">
            {serviceDetails.map((service, index) => (
              <Reveal key={service.id} delay={index * 60}>
                <section
                  id={service.id}
                  className="surface-card rounded-[28px] px-6 py-8 sm:px-8 sm:py-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.82fr)] lg:items-center">
                    <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                      <p className="text-xs font-semibold uppercase tracking-[0.32em] text-brand-gold">
                        0{index + 1}
                      </p>
                      <h2 className="mt-4 text-balance text-4xl font-semibold uppercase tracking-[0.08em] text-brand-ivory sm:text-5xl">
                        {service.title}
                      </h2>
                      <p className="mt-5 max-w-2xl text-base leading-7 text-brand-mist/80">
                        {service.intro}
                      </p>
                      <div className="mt-7 space-y-4">
                        {service.points.map((point) => (
                          <div
                            key={point}
                            className="flex items-start gap-4 border-t border-white/8 pt-4 first:border-t-0 first:pt-0"
                          >
                            <span className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-gold" />
                            <p className="text-sm leading-7 text-brand-mist/76">{point}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <FreightVisual
                      variant={variants[index % variants.length]}
                      className={index % 2 === 1 ? "lg:order-1 min-h-[360px]" : "min-h-[360px]"}
                    />
                  </div>
                </section>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="section-frame">
        <Container className="grid gap-12 py-20 lg:grid-cols-[minmax(0,0.94fr)_minmax(300px,0.7fr)] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="Business Focus"
              title="Built to support commercial clients that value consistency and responsiveness"
              description="We are positioned to support businesses that need a transportation partner who understands professional standards, operational timing, and the importance of communication that keeps teams aligned."
            />
          </Reveal>

          <Reveal delay={100}>
            <div className="surface-card rounded-[24px] p-7">
              <div className="space-y-5">
                {[
                  "Freight movement managed with professionalism",
                  "Dedicated support for recurring transportation demands",
                  "Business-to-business service grounded in trust and accountability"
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-white/10 bg-white/[0.03] px-4 py-4 text-sm leading-7 text-brand-mist/80"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <Reveal>
            <CtaBand
              eyebrow="Need Service Support"
              title="Let&apos;s discuss the transportation solution that fits your operation."
              description="We can talk through freight movement, recurring support, or a more dedicated transportation requirement based on how your business moves."
              primaryAction={{ label: "Request a Quote", href: "/contact" }}
              secondaryAction={{ label: "Driver Sign Up", href: "/drivers" }}
              aside={
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
                </div>
              }
            />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
