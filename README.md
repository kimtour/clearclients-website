# ClearClients Website

ClearClients is being repositioned as a fintech and software engineering company focused on payment APIs, M-Pesa integrations, backend systems, cloud engineering, DevOps and AI-enabled applications.

## Stack
- Next.js 16.3 Active LTS
- React 19.2
- TypeScript
- Zod
- GitHub Actions
- Vercel target hosting
- Cloudflare DNS and Turnstile

## Pages
- `/`
- `/services`
- `/projects`
- `/about`
- `/contact`

## Portfolio
- https://github.com/kimtour/mpesa-payment-gateway
- https://github.com/kimtour/kenyan-payroll-system
- https://github.com/kimtour/mpesa-payment-gateway-demo
- https://github.com/kimtour/ML-on-Graphs

## Local development
```bash
npm ci
cp .env.example .env.local
npm run dev
```

## Quality checks
```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

## Environment variables
See `.env.example`. Production email delivery requires `RESEND_API_KEY`, `CONTACT_RECIPIENT_EMAIL`, and `EMAIL_FROM_ADDRESS`. Turnstile can be enabled later with `NEXT_PUBLIC_TURNSTILE_SITE_KEY` and `TURNSTILE_SECRET_KEY`. Never commit real secrets.

## Contact architecture
The contact form posts to `/api/contact`, validates input with Zod, rejects the honeypot field, and sends a project-enquiry email through Resend. Cloudflare Turnstile is optional until both production keys are configured; once configured, verification is enforced server-side.

## Deployment
The intended production deployment is Vercel from the `main` branch with `clearclients.com` managed in Cloudflare DNS.
