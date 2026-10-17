# The Bowl Theory

A monorepo for **The Bowl Theory** cloud kitchen: customer storefront, kitchen administration, and business operations tools.

## Current status

The first responsive storefront has been scaffolded in `apps/storefront` with an editorial premium-brand direction: warm paper tones, olive and ink, serif typography, restrained labels, and a mobile-first menu experience. It includes category filters, menu search, product cards, selectable pack sizes, and configurable ordering/contact links.

**Pricing note:** current storefront prices are indicative preview values and must be verified against recipe costs, packaging, taxes, and channel fees before launch.

## Project structure

```text
apps/
  storefront/   Next.js customer-facing menu and ordering entry point
  admin/        Planned kitchen operations and business dashboard
  api/          Planned API and integration layer
packages/
  ui/           Shared UI primitives
  types/        Planned shared TypeScript domain types
  config/       Planned shared tooling configuration
business/
  pricing/      Recipe costing, pack costing, and price lists
  inventory/    Ingredients, packaging, and stock tracking
  operations/   Preparation, order fulfilment, and checklists
  analytics/    Sales, margin, and operating metrics
docs/
  architecture.md
  roadmap.md
  deployment.md
```

## Run locally

Requires Node.js 20+ and pnpm 9.

```bash
pnpm install
pnpm dev
```

## Build checks

```bash
pnpm lint
pnpm typecheck
pnpm build
```

## Configuration

Set `NEXT_PUBLIC_SWIGGY_URL`, `NEXT_PUBLIC_ZOMATO_URL`, `NEXT_PUBLIC_INSTAGRAM_URL`, and `NEXT_PUBLIC_CONTACT_URL` in the storefront deployment environment. See `.env.example` for placeholders.

## Security

- Never commit API keys, access tokens, database credentials, customer information, or payment secrets.
- Keep local secrets in untracked environment files.
- Treat customer/order data and internal financial reports as private operational data, even though this source repository is public.

## Roadmap

See [the roadmap](docs/roadmap.md) for the planned sequence and [the architecture notes](docs/architecture.md) for application boundaries.
