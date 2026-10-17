# The Bowl Theory — static storefront

A simple, responsive storefront built with **HTML, CSS and vanilla JavaScript**. There is no Node.js, npm, pnpm, framework, build step or dependency installation.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive visual design
- `script.js` — menu filters, portion selection, order basket and checkout behaviour

## Preview locally

Open `index.html` in a browser. No terminal is required. An internet connection is needed for the hosted fonts and food photography.

## Deploy on Cloudflare Pages

Create a Pages project connected to this GitHub repository and use these settings:

- **Production branch:** `main`
- **Build command:** leave blank
- **Build output directory:** `/` or `.` (the repository root, depending on the Cloudflare dashboard's accepted value)
- **Root directory:** leave blank

Cloudflare Pages will serve `index.html` directly. There is no build step.

## Enable WhatsApp ordering

In `script.js`, replace the empty value in the first line with your WhatsApp business number in international format, digits only, with no plus sign or spaces. Example format: `919876543210`.

Until a number is configured, customers can still build an order and copy the order summary to send manually.

## Before launch

The menu prices are carried over as **illustrative preview prices** from the previous storefront. Confirm all prices, portion weights, item descriptions, delivery availability, and business contact details before publishing for customers. Food images are loaded from Unsplash and require an internet connection.
