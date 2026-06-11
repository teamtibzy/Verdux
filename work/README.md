# VERDUX Waitlist Landing Page

Production-ready Next.js MVP for the VERDUX waitlist landing page.

## Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- React Hook Form
- Zod
- Supabase
- Google Analytics 4
- Vercel Analytics

## Local Setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open `http://localhost:3000`.

## Environment Variables

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

Use `SUPABASE_SERVICE_ROLE_KEY` only on the server. Do not expose it in browser code.

## Supabase Setup

1. Create a Supabase project.
2. Open the SQL editor.
3. Run `supabase/schema.sql`.
4. Add the environment variables above to `.env.local` and to Vercel.

The `waitlist` table stores:

- `id`
- `first_name`
- `last_name`
- `email`
- `phone`
- `company`
- `created_at`

Email duplication is prevented by a unique index on `lower(email)`.

## Component Structure

- `app/page.tsx`: full landing page composition.
- `app/api/waitlist/route.ts`: server-side waitlist submission endpoint.
- `components/waitlist-form.tsx`: validated waitlist form and success state.
- `components/faq-accordion.tsx`: accessible single-open FAQ accordion.
- `components/scroll-strip.tsx`: infinite Framer Motion strip bar.
- `components/cta-button.tsx`: CTA buttons with smooth waitlist scrolling and analytics.
- `components/motion-section.tsx`: reusable section entrance animation.
- `components/scroll-depth-tracker.tsx`: GA scroll depth tracking.
- `lib/waitlist.ts`: shared Zod schema and form type.
- `lib/analytics.ts`: GA event helper.

## Deployment

1. Push the project to GitHub.
2. Import it into Vercel.
3. Set the environment variables in Vercel project settings.
4. Deploy.

Vercel Analytics is already wired through `@vercel/analytics/react`.

## Analytics Events

- `cta_click`
- `waitlist_submission`
- `faq_interaction`
- `scroll_depth`

## Design Notes

The implementation uses the VERDUX brand palette from the Figma file:

- Deep green: `#084734`
- Hover green: `#64AD29`
- Light green: `#7DD039`
- Citron hover: `#F9F90D`
- FAQ background: `#DFFBF3`

The FAQ section follows the linked Figma node closely, including the rounded white cards, soft border, green background, typography hierarchy, single-open accordion behavior, smooth height animation, and icon rotation.
