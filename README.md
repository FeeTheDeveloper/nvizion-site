# Nvizion Transportation LLC Website

Next.js App Router site for `nviziontransport.com` with TypeScript, Tailwind CSS, reusable components, and a placeholder Server Action contact flow.

## Where to edit later

- Company name, domain, email, base location, veteran-owned label, navigation, services, trust points, and page copy snippets: `lib/site.ts`
- Shared SEO metadata helper and canonical domain setup: `lib/metadata.ts` and `app/layout.tsx`
- Navbar and footer structure: `components/layout/site-header.tsx` and `components/layout/site-footer.tsx`
- Fallback brand mark or future real logo swap: `components/layout/brand-mark.tsx`
- Placeholder transportation visuals: `components/ui/freight-visual.tsx`
- Contact form fields and Server Action handling: `components/forms/contact-form.tsx` and `app/contact/actions.ts`

## Notes

- The current logo asset is `public/logo.png`, referenced through `siteConfig.logoPath` in `lib/site.ts`. Replace that file or point the config to a new asset path when branding changes later.
- `siteConfig.phone` is currently blank. Add a real business phone number in `lib/site.ts` when available and it will flow into shared contact presentation.
- The contact form is intentionally a dummy workflow for now. It validates input and returns a success state through a Server Action, ready for later email or CRM integration.
