# Deployment

## Deployment principles

- Deploy the storefront and admin as separate applications or clearly isolated routes.
- Keep server-only credentials out of client bundles.
- Use separate development and production environments.
- Prefer preview deployments for pull requests and require a successful build before release.
- Maintain a documented rollback path.

## Environment configuration

Create local environment files from the examples added by each app. Never commit real values.

Potential variables, depending on the implementation:

- `DATABASE_URL` — server-only database connection string.
- `AUTH_SECRET` — server-only session/authentication secret.
- `SWIGGY_URL`, `ZOMATO_URL`, `INSTAGRAM_URL`, `CONTACT_URL` — public links; validate before release.
- Provider API credentials — server-only, named only when a real integration is implemented.

## Hosting

Choose hosting based on runtime needs. Static pages may be served from a static host; server-rendered pages, authenticated admin workflows, and APIs need a compatible server/runtime. Confirm database connectivity, environment-variable support, build commands, and regional requirements before selecting production targets.

## Release checklist

- [ ] CI passes.
- [ ] Required environment variables are present.
- [ ] No secrets or customer data are committed.
- [ ] Public pages render correctly on mobile and desktop.
- [ ] Admin routes require authentication and authorization.
- [ ] Database migrations and backups are understood before persistent data is introduced.
- [ ] Smoke tests pass after deployment.
