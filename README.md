# UX Portfolio — Next.js + Tailwind CSS + Framer Motion

A modern, editorial-style UX portfolio built for Vercel deployment.

## Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Fonts | Cormorant Garamond (display) + DM Sans (body) via Google Fonts |
| Images | next/image with Unsplash placeholder images |

---

## File Structure

```
portfolio/
├── app/
│   ├── globals.css          ← Tailwind base + Google Fonts import
│   ├── layout.tsx           ← Root layout: Nav + Footer + PageTransition
│   ├── page.tsx             ← Home (hero, work preview, about teaser)
│   ├── about/page.tsx       ← About (bio, timeline)
│   ├── work/
│   │   ├── page.tsx         ← Work index (project grid)
│   │   └── [slug]/page.tsx  ← Case study template
│   ├── blog/
│   │   ├── page.tsx         ← Blog index (article list)
│   │   └── [slug]/page.tsx  ← Blog post template
│   └── contact/page.tsx     ← Contact form + socials
├── components/
│   ├── Nav.tsx              ← Global nav (desktop + mobile)
│   ├── Footer.tsx           ← Footer
│   ├── PageTransition.tsx   ← Framer Motion page transitions
│   └── FadeIn.tsx           ← Reusable FadeIn + StaggerContainer
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Open http://localhost:3000
```

---

## Customisation Checklist

### Personal Info
- [ ] `app/layout.tsx` — update `metadata.title` and `metadata.description`
- [ ] `components/Nav.tsx` — replace `"Your Name"` with your actual name
- [ ] `components/Footer.tsx` — update social links + email
- [ ] `app/page.tsx` — update hero subtitle and location
- [ ] `app/about/page.tsx` — replace bio, timeline, and skills
- [ ] `app/contact/page.tsx` — update email address and availability

### Projects
- [ ] `app/work/page.tsx` — replace the `projects` array with your real projects (images, titles, descriptions)
- [ ] `app/work/[slug]/page.tsx` — replace `caseStudyContent` with per-project content (or fetch from a CMS)

### Blog
- [ ] Replace placeholder posts in `app/blog/page.tsx`
- [ ] Connect a CMS (recommended: **Sanity**, **Contentful**, or **MDX files**) for real blog content
  - For MDX: install `@next/mdx` and store posts as `.mdx` files in `content/blog/`

### Contact Form
- [ ] Replace the `setTimeout` stub in `app/contact/page.tsx` with a real form handler:
  - **Easiest**: [Formspree](https://formspree.io) — add your endpoint URL, use `fetch`
  - **With email**: [Resend](https://resend.com) + a Next.js Route Handler (`app/api/contact/route.ts`)

### Images
- Replace Unsplash placeholder URLs with your actual project screenshots
- Store them in `/public/images/` and use `/images/your-file.jpg` as the `src`

---

## Deploying to Vercel

```bash
# Push to GitHub, then:
# 1. Go to vercel.com/new
# 2. Import your GitHub repo
# 3. Vercel auto-detects Next.js — click Deploy
# Done. Your portfolio is live!
```

No environment variables needed for the base setup.

---

## Design Tokens

| Token | Value | Usage |
|---|---|---|
| `cream` | `#F5F2EC` | Page background |
| `ink` | `#1A1814` | Primary text |
| `ink-muted` | `#6B6760` | Secondary text |
| `accent` | `#C8A96E` | Highlights, hover states |
| `font-display` | Cormorant Garamond | Headings |
| `font-body` | DM Sans | Body text, labels |
