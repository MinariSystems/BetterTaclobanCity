# BetterTaclobanCity

An independent community preview for finding Tacloban City services, discovering local places, and accessing public information.

This project is a customized **GitHub fork of [iyanski/betterlocalgov](https://github.com/iyanski/betterlocalgov)**, the Better Local Gov starter listed on [BetterLGU’s community templates](https://lgu.bettergov.ph/TEMPLATES). The React, TypeScript, Vite, Tailwind, Kapwa, router, and SEO foundation is retained. Original documentation is preserved in [UPSTREAM_README.md](UPSTREAM_README.md) and the upstream CC0 dedication in [LICENSE](LICENSE).

## Local preview

Use a current Node version supported by the locked Vite toolchain.

```bash
npm ci
npm run build
npm run preview:local
```

The build is served at **http://127.0.0.1:5187**. Only the `dist/` directory is exposed. Source files, Git metadata, and environment files are excluded from the HTTP surface. SPA routes support refreshes. The preview sends no-index headers and applies a same-origin content security policy.

For development with live rebuilds:

```bash
npm run dev -- --host 127.0.0.1 --port 5188 --strictPort
```

To put the built preview on an already authenticated Tailscale machine, use an unused Serve HTTPS port:

```bash
tailscale serve --bg --https=9447 http://127.0.0.1:5187
tailscale serve status
```

This is tailnet-only access. No Tailscale Funnel or public web hosting is used. The local server must stay running and the machine must stay online. On the original development host, `bettertaclobancity-preview.service` is a user transient systemd service that keeps the server running after the chat; it lasts until stopped or the host reboots.

## Preview features

- Responsive Tacloban identity, self-hosted typography, and credited San Juanico Bridge photography.
- Twelve service pathways, with resident/business/visitor filters, phrase and keyword search, empty states, and detail dialogs.
- City office directory, local tourism links, public disclosure, ordinances, and procurement destinations.
- Official emergency directory and PAGASA bulletin links.
- `/services`, `/services/residents`, `/services/business`, `/services/visitors`, `/government`, and `/about` routes.
- Keyboard-accessible native dialogs, focus restoration, reduced-motion support, and a mobile navigation menu.

Service applications, sign-in, and payments happen on the linked official provider. This project does not accept applications, collect payments, receive emergency reports, or claim to represent the City Government or BetterGov.ph.

## Content and sources

Curated local service data lives in `src/data/tacloban-services.ts`. The page sections use the starter’s component structure under `src/components` and `src/pages`.

Links were checked November 3, 2026 against [Tacloban City](https://tacloban.gov.ph/), its [Citizen’s Charter](https://tacloban.gov.ph/citizens-charter/), [office directory](https://tacloban.gov.ph/departments/), and [eBOSS portal](https://eboss.tacloban.gov.ph/). Requirements and availability must be checked with official providers. The original starter’s unused sample content remains in the source for future adaptation and is not routed into the preview.

Image and font attribution is available in the page’s Sources & photo credits dialog and `public/assets/tacloban/CREDITS.txt`. The San Juanico image by Mermarquez remains CC BY-SA 4.0; Figtree is under the SIL Open Font License.

## Validation

```bash
npm run build
npm run verify:preview
```

The render checks cover home content, all twelve official destinations, the initial and complete service list, category filters, phrase/keyword search, and the empty state. This is not an interactive browser or physical-device test. Visual browser QA was unavailable because local browser access was disabled in the task environment.

No production website deployment is part of this preview.
