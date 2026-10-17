# The Bowl Theory storefront

Premium consumer brand direction: **luxury, editorial, restrained minimalism**. The current first pass uses warm paper tones, deep olive and ink, expressive serif typography, generous whitespace, small editorial labels, and responsive menu cards.

## Run locally

From the repository root:

```bash
pnpm install
pnpm dev
```

Open the local URL printed by Next.js.

## Checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Configuration

Set the public links in your deployment environment:

- `NEXT_PUBLIC_SWIGGY_URL`
- `NEXT_PUBLIC_ZOMATO_URL`
- `NEXT_PUBLIC_INSTAGRAM_URL`
- `NEXT_PUBLIC_CONTACT_URL`

See the root `.env.example`. Only use public links in `NEXT_PUBLIC_*` variables; never put API keys or secrets there.

## Before launch

- Menu and pack prices are illustrative preview values. Confirm recipe yields, ingredient cost, packaging, tax treatment, and platform fees before publishing final prices.
- Replace editorial placeholder photography with approved brand/product images.
- Configure verified ordering, social, and contact links.
- Check mobile layouts, image loading, accessibility, SEO, and deployment settings.
