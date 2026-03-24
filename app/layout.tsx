import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Manrope } from "next/font/google";
import Script from "next/script";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { buildAbsoluteUrl, organizationSchema } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

import "./globals.css";

const headingFont = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"]
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"]
});

const socialImage = siteConfig.socialImagePath
  ? buildAbsoluteUrl(siteConfig.socialImagePath)
  : undefined;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`
  },
  description: siteConfig.defaultDescription,
  keywords: siteConfig.seoKeywords,
  applicationName: siteConfig.name,
  referrer: "origin-when-cross-origin",
  category: "Transportation",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  icons: siteConfig.logoPath
    ? {
        icon: siteConfig.logoPath,
        apple: siteConfig.logoPath
      }
    : undefined,
  alternates: {
    canonical: siteConfig.url
  },
  openGraph: {
    title: siteConfig.name,
    description: siteConfig.defaultDescription,
    url: siteConfig.url,
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
    title: siteConfig.name,
    description: siteConfig.defaultDescription,
    images: socialImage ? [socialImage] : undefined
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  }
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <body className="bg-brand-ink text-brand-ivory antialiased">
        <Script
          id="nvizion-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
