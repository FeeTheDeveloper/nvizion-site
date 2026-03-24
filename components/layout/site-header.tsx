"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-brand-ink/82 backdrop-blur-xl">
      <Container>
        <div className="flex min-h-[84px] items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <BrandMark />
            <div className="hidden xl:flex items-center gap-3">
              <span className="border border-brand-gold/25 bg-brand-gold/10 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                {siteConfig.veteranOwnedLabel}
              </span>
              <div className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-mist/52">
                {siteConfig.baseRegion}
              </div>
            </div>
          </div>

          <nav
            className="hidden items-center gap-2 md:flex"
            aria-label={`${siteConfig.shortName} primary navigation`}
          >
            {siteConfig.primaryNavigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "inline-flex items-center border px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition",
                    active
                      ? "border-brand-gold/30 bg-brand-gold/10 text-brand-ivory"
                      : "border-transparent text-brand-mist/72 hover:border-white/8 hover:text-brand-ivory"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block text-right">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.28em] text-brand-mist/48">
                {siteConfig.baseLocation}
              </p>
              <Link
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block text-xs uppercase tracking-[0.24em] text-brand-mist/76 transition hover:text-brand-ivory"
              >
                {siteConfig.email}
              </Link>
            </div>
            <Link href="/contact" className="btn-primary hidden md:inline-flex">
              Get a Quote
            </Link>
            <button
              type="button"
              onClick={() => setOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center border border-white/12 text-brand-ivory md:hidden"
              aria-expanded={open}
              aria-label="Toggle navigation menu"
            >
              <span className="space-y-1.5">
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
                <span className="block h-0.5 w-5 bg-current" />
              </span>
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="border-t border-white/8 bg-brand-ink/95 md:hidden">
          <Container className="flex flex-col gap-3 py-5">
            <div className="flex flex-wrap items-center gap-3 border border-white/8 bg-white/[0.03] px-4 py-4">
              <span className="border border-brand-gold/25 bg-brand-gold/10 px-3 py-2 text-[0.62rem] font-semibold uppercase tracking-[0.3em] text-brand-gold">
                {siteConfig.veteranOwnedLabel}
              </span>
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.24em] text-brand-mist/62">
                {siteConfig.baseLocation}
              </p>
            </div>
            {siteConfig.primaryNavigation.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "border border-white/8 px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] transition",
                    active
                      ? "border-brand-gold/40 bg-brand-gold/10 text-brand-ivory"
                      : "text-brand-mist/78 hover:border-brand-gold/35 hover:text-brand-ivory"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href={`mailto:${siteConfig.email}`}
              className="border border-white/8 px-4 py-3 text-sm font-semibold uppercase tracking-[0.24em] text-brand-mist/78 transition hover:border-brand-gold/35 hover:text-brand-ivory"
            >
              {siteConfig.email}
            </Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a Quote
            </Link>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
