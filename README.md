# Jhomalyn Automates — Portfolio

A premium, dark-themed portfolio site for an AI Automation Specialist
(GoHighLevel · Make.com · Zapier · n8n), built with Next.js 15 (App Router),
Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Replace before launch

- **Resume**: swap `public/resume.pdf` with your real resume. The "Download
  Resume" button links straight to `/resume.pdf` for an instant download —
  no upload feature, by design.
- **Contact form webhook**: copy `.env.example` to `.env.local` and set
  `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` to a Make.com, Zapier, or GoHighLevel
  inbound webhook if you want submissions routed into your CRM. Without it,
  the form still validates and shows a success state, but nothing is sent
  anywhere — wire it up before relying on it.
- **Case studies, services, stats**: all editable in `lib/data.ts`.
- **Email / social links**: `components/Footer.tsx` and `app/contact/page.tsx`.
- **Metadata / OG info**: `app/layout.tsx`.

## Project structure

```
app/
  layout.tsx          Root layout, fonts, metadata
  globals.css          Base styles, glass + gradient utilities
  page.tsx              Home
  about/page.tsx         About
  case-studies/page.tsx  Case Studies
  contact/page.tsx       Contact
  not-found.tsx          404 page

components/
  Navbar.tsx           Sticky glass nav with active-link indicator
  Footer.tsx            Site footer
  ParticlesBackground.tsx  Canvas floating-particles background
  WorkflowGraphic.tsx      Animated hero workflow diagram
  GlassCard.tsx            Reusable glassmorphism card
  Button.tsx               Reusable button/link component
  SectionReveal.tsx        Scroll-reveal wrapper (Framer Motion)
  ContactForm.tsx          Client-side contact form

lib/
  data.ts              Case studies, services, stats, tool list

public/
  resume.pdf           Placeholder — replace with the real file
```

## Design notes

- Palette: deep navy base (`#040611`–`#131B33`) with an electric-blue accent
  (`#3B82F6`→`#7DD3FC`), defined as Tailwind tokens in `tailwind.config.ts`.
- Type: Space Grotesk for display/headings, Inter for body text.
- Motion respects `prefers-reduced-motion` throughout (particles, scroll
  reveals, and the hero workflow animation all check for it).

## Deploying to Vercel

1. Push this project to a GitHub repository.
2. Import it at [vercel.com/new](https://vercel.com/new).
3. Framework preset: **Next.js** (auto-detected). No extra build config
   needed.
4. Add `NEXT_PUBLIC_CONTACT_WEBHOOK_URL` under Project Settings →
   Environment Variables if you're using the contact webhook.
5. Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```
