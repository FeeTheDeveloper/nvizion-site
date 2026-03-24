import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

type BrandMarkProps = {
  className?: string;
  size?: "sm" | "lg";
};

export function BrandMark({ className, size = "sm" }: BrandMarkProps) {
  const imageSize = size === "lg" ? 120 : 74;
  const brandPrimary = siteConfig.shortName.split(" ")[0] ?? siteConfig.shortName;
  const brandSecondary = siteConfig.name.startsWith(`${brandPrimary} `)
    ? siteConfig.name.slice(brandPrimary.length + 1)
    : siteConfig.name;

  return (
    <Link href="/" aria-label={siteConfig.name} className={cn("inline-flex items-center gap-3", className)}>
      {siteConfig.logoPath ? (
        <span
          className={cn(
            "inline-flex items-center justify-center border border-brand-gold/35 bg-brand-ivory/98 p-1 shadow-metal",
            size === "lg" ? "rounded-[22px]" : "rounded-[18px]"
          )}
        >
          <Image
            src={siteConfig.logoPath}
            alt={siteConfig.name}
            width={imageSize}
            height={imageSize}
            priority={size === "sm"}
            className="h-auto w-auto"
          />
        </span>
      ) : (
        <>
          <div className="flex h-11 w-11 items-center justify-center border border-brand-gold/55 bg-brand-ink text-sm font-semibold uppercase tracking-[0.3em] text-brand-gold">
            NV
          </div>
          <div className="leading-none">
            <span className="block text-xl font-semibold uppercase tracking-[0.18em] text-brand-ivory">
              {brandPrimary}
            </span>
            <span className="mt-1 block text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-brand-mist/72">
              {brandSecondary}
            </span>
          </div>
        </>
      )}
    </Link>
  );
}
