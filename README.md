# The Bowl Theory

A monorepo for **The Bowl Theory** cloud kitchen: customer storefront, kitchen administration, and business operations tools.

## Project status

This repository is the platform foundation. The first milestone is to establish architecture, secure configuration practices, and a working storefront before adding order management and internal business tools.

## Planned workspace

```text
apps/
  storefront/   Customer-facing menu and ordering experience
  admin/        Kitchen operations and business dashboard
  api/          API and integration layer
packages/
  ui/           Shared interface components
  types/        Shared TypeScript domain types
  config/       Shared linting and TypeScript configuration
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

## Proposed technology

- **Web:** Next.js and TypeScript
- **UI:** Tailwind CSS with shared components
- **Data:** PostgreSQL when persistent orders and inventory are introduced
- **Validation:** schema validation at API boundaries
- **Delivery:** GitHub Actions and an appropriate host for each app
- **Integrations:** Swiggy, Zomato, contact, and social links configured through environment variables

These are proposed defaults, not claims that the production integrations are already implemented.

## Getting started

The application workspaces are being introduced in phases. See [the roadmap](docs/roadmap.md) for the planned sequence and [the architecture notes](docs/architecture.md) for boundaries between apps and business modules.

## Security

- Never commit API keys, access tokens, database credentials, customer information, or payment secrets.
- Keep local secrets in an untracked `.env.local` file; use `.env.example` only for placeholder variable names.
- Treat customer/order data and internal financial reports as private operational data, even though this source repository is public.

## License

Add a license only after choosing the intended reuse and distribution terms.
