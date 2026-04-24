import Image from "next/image";

import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, veteranStandards } from "@/lib/site";

export function VeteranOwnedVerification() {
  return (
    <section className="section-frame relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(184,154,115,0.16),transparent_36%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_18%,rgba(15,11,9,0.1)_100%)]" />

      <Container className="relative z-10 grid gap-10 xl:grid-cols-[minmax(0,0.84fr)_minmax(0,1fr)] xl:items-center">
        <Reveal className="space-y-8">
          <span className="inline-flex items-center border border-brand-gold/25 bg-brand-gold/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
            Verified {siteConfig.veteranOwnedLabel} {siteConfig.baseRegion} Business
          </span>

          <div className="space-y-5">
            <p className="eyebrow">
              <span className="h-px w-8 bg-brand-gold/70" />
              Built on Service. Powered by Standards.
            </p>

            <div className="space-y-4">
              <h2 className="section-title text-balance sm:text-5xl lg:text-[3.75rem]">
                Built on Service. Powered by Standards.
              </h2>

              <p className="section-copy max-w-2xl">
                Nvizion Transportation LLC is proudly verified by the Texas Veterans Commission as
                a Veteran-Owned Business. That identity is not just a label. It reflects how we
                operate.
              </p>

              <p className="section-copy max-w-2xl">
                We value preparedness, accountability, respect, and mission-focused execution in
                every job we take on. Our goal is simple: deliver dependable transportation service
                that clients can trust long term.
              </p>
            </div>
          </div>

          <div className="surface-card rounded-[26px] border-brand-gold/16 bg-[linear-gradient(135deg,rgba(184,154,115,0.12),rgba(255,255,255,0.02))] p-6 sm:p-7">
            <p className="text-[0.66rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
              Service Code
            </p>
            <p className="mt-4 text-base leading-8 text-brand-mist/80">
              Our veteran-owned identity shows up in the work: prepared routing, direct
              communication, professional conduct, and a disciplined standard that clients can rely
              on under routine and time-sensitive conditions alike.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="surface-card rounded-[32px] border-brand-gold/15 bg-[linear-gradient(180deg,rgba(255,255,255,0.03),rgba(0,0,0,0.12))] p-6 sm:p-8">
            <div className="flex flex-col items-center text-center">
              <Image
                src="/images/vep-vob-logo.png"
                alt="Veteran-Owned Business badge verified by the Texas Veterans Commission"
                width={1124}
                height={1276}
                className="h-auto w-full max-w-[240px] sm:max-w-[300px] lg:max-w-[340px]"
              />

              <h3 className="mt-6 text-2xl font-semibold uppercase tracking-[0.08em] text-brand-ivory">
                Verified Veteran-Owned
              </h3>

              <p className="mt-4 max-w-md text-sm leading-7 text-brand-mist/76">
                Verified by the Texas Veterans Commission and built on discipline, accountability,
                and professional transportation execution.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {veteranStandards.map((item) => (
                <article
                  key={item.title}
                  className="border border-white/10 bg-black/[0.16] px-4 py-5 transition duration-300 hover:border-brand-gold/28 hover:bg-brand-gold/[0.07] sm:px-5"
                >
                  <p className="text-[0.68rem] font-semibold uppercase tracking-[0.28em] text-brand-gold">
                    {item.title}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-brand-mist/76">{item.body}</p>
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
