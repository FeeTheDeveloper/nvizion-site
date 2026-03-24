# Nvizion Transportation LLC Website

Premium Next.js App Router site for `https://nviziontransport.com`, built for a veteran-owned Texas transportation brand with TypeScript, Tailwind CSS, reusable UI components, and a Server Action-powered contact form flow.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- React Server Components + Server Actions

## Local Development

Install dependencies:

```bash
npm install
```

Start the local dev server:

```bash
npm run dev
```

Create a production build locally:

```bash
npm run build
```

Run the production build:

```bash
npm run start
```

## Vercel Deployment

This project is ready to deploy directly on Vercel.

### 1. Import the Repository

1. Push the repo to GitHub.
2. In Vercel, click `Add New Project`.
3. Import the `nvizion-site` repository.

### 2. Project Settings

Use these settings in Vercel:

- Framework Preset: `Next.js`
- Root Directory: `./`
- Install Command: `npm install`
- Build Command: `npm run build`
- Output Directory: leave blank

Vercel should detect most of these automatically.

### 3. Environment Variables

No environment variables are required for the current version of the site.

Notes:

- The contact form currently uses an in-app demo Server Action flow.
- If you later connect email delivery, CRM submission, or third-party APIs, add those secrets in Vercel Project Settings -> Environment Variables.

### 4. Production Domain

The site is currently configured for:

- Primary domain: `https://nviziontransport.com`

Canonical URLs, metadata, sitemap, and robots references already point to that domain through `lib/site.ts`.

If the production domain changes later, update:

- `siteConfig.domain`
- `siteConfig.url`

in `lib/site.ts`.

### 5. Custom Domain Setup in Vercel

After the first deployment:

1. Open the Vercel project.
2. Go to `Settings -> Domains`.
3. Add `nviziontransport.com`.
4. Optionally add `www.nviziontransport.com` and redirect it to the apex domain.
5. Update DNS records with your domain provider using the values Vercel gives you.

### 6. Preview Deployments

Every push to a branch can generate a Vercel preview deployment.

Recommended workflow:

- `main` -> production deployment
- feature branches -> preview deployments for review

## Where to Edit Later

- Company name, domain, email, base location, veteran-owned label, navigation, service content, trust points, and shared brand content: `lib/site.ts`
- Shared SEO metadata, canonical handling, and organization schema: `lib/metadata.ts` and `app/layout.tsx`
- Homepage structure and premium section flow: `app/page.tsx`
- Navbar and footer: `components/layout/site-header.tsx` and `components/layout/site-footer.tsx`
- Brand mark and logo fallback handling: `components/layout/brand-mark.tsx`
- Transportation motion visual: `components/ui/freight-visual.tsx`
- Contact page UI and form fields: `app/contact/page.tsx` and `components/forms/contact-form.tsx`
- Server Action form handling: `app/contact/actions.ts`

## Business Info Still Placeholder

- `siteConfig.phone` is currently blank in `lib/site.ts`
- The contact form is still a demo Server Action flow and is not connected to live email or CRM delivery yet
- `public/logo.png` is being used as the current logo and social image asset
- The site currently uses region-level location only: `Texas, United States`

## Notes

- This app uses App Router only.
- No `pages/api` routes are used.
- The contact form submission path is app-owned and handled through Server Actions.
- Metadata, sitemap, and robots are already structured for production deployment.
