import type { Metadata } from "next";

import { baseRegion, siteConfig } from "@/lib/site";

const baseKeywords = siteConfig.seoKeywords;

type PageMetadataArgs = {
  title: string;
  description: string;
  pathname: string;
  keywords?: string[];
};

export function buildAbsoluteUrl(pathname = "/") {
  const normalizedPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  return new URL(normalizedPath, siteConfig.url).toString();
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  email: siteConfig.email,
  areaServed: siteConfig.baseLocation,
  description: siteConfig.defaultDescription,
  slogan: siteConfig.tagline,
  knowsAbout: siteConfig.seoKeywords,
  logo: siteConfig.logoPath ? buildAbsoluteUrl(siteConfig.logoPath) : undefined,
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: siteConfig.email,
      areaServed: "US"
    }
  ]
};

export function buildPageMetadata({
  title,
  description,
  pathname,
  keywords = []
}: PageMetadataArgs): Metadata {
  const canonicalPath = pathname === "/" ? "/" : pathname.replace(/\/$/, "");
  const url = buildAbsoluteUrl(canonicalPath);
  const socialImage = siteConfig.socialImagePath
    ? buildAbsoluteUrl(siteConfig.socialImagePath)
    : undefined;

  return {
    title,
    description,
    keywords: [...baseKeywords, ...keywords],
    alternates: {
      canonical: url
    },
    robots: {
      index: true,
      follow: true
    },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.name,
      locale: "en_US",
      type: "website",
      images: socialImage
        ? [
            {
              url: socialImage,
              alt: siteConfig.name
            }
          ]
        : undefined
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: socialImage ? [socialImage] : undefined
    }
  };
}
