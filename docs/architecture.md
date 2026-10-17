# Architecture

## Goals

1. Present a fast, mobile-first menu and ordering entry point.
2. Keep kitchen workflows distinct from the public storefront.
3. Centralize domain types and validation so prices, products, and order states mean the same thing across apps.
4. Keep third-party credentials and private operational data out of the public repository.

## Proposed boundaries

- `apps/storefront`: customer-facing pages, menu categories, pack sizes, product details, contact, and links to ordering channels.
- `apps/admin`: authenticated staff workflows for menu availability, order preparation, stock, and reporting.
- `apps/api`: server-side validation, persistence, integrations, and authorization. Do not expose provider credentials to browser code.
- `packages/ui`: reusable visual components with no business-specific persistence.
- `packages/types`: shared domain types and API contracts.
- `packages/config`: shared TypeScript, lint, and formatting defaults.
- `business/`: requirements, calculations, operating procedures, and metric definitions.

## Initial domain concepts

- Product: name, category, description, active status, and customer-facing presentation.
- Pack option: net weight, packaging cost, price, and availability.
- Recipe/cost sheet: ingredient quantities and cost assumptions, kept separate from public menu content.
- Inventory item: unit, on-hand quantity, reorder threshold, and supplier notes.
- Order: channel, line items, quantities, status, timestamps, and fulfilment notes.
- Sales record: gross sales, discounts, channel fees, packaging, and estimated contribution margin.

## Security and data rules

- Validate all input at server boundaries.
- Authenticate and authorize all admin endpoints.
- Never trust a price or total supplied by the browser; calculate totals server-side.
- Store secrets in deployment environment variables.
- Do not store payment-card data. Use an approved payment provider if online payments are added.
- Avoid placing customer personal information or detailed financial records in this public repository.

## Integration strategy

Use configuration-driven links first. Add authenticated API integrations only after provider access, API terms, credentials, and operational requirements are confirmed. Do not imply Swiggy/Zomato order sync exists until it is implemented and tested.
