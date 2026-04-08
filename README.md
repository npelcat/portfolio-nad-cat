# Nadège Pelcat — Developer Portfolio

My personal portfolio, built from scratch to present my journey, technical skills and projects as a fullstack developer.

🌐 **[nadegepelcat.com](#)**

---

## About this project

I built this portfolio during my time as a fullstack developer apprentice at EDF Power Solutions.  
It was a good opportunity to work on something entirely mine — from design decisions to deployment — outside of a team environment.

I come from a non-traditional background (11 years as a veterinary nurse before switching to tech in 2023), and I wanted this portfolio to reflect both my technical growth and who I am.

---

## Technical choices worth mentioning

**Tailwind CSS v4 with a custom design system**  
All colors, surfaces and states are defined as CSS variables in a single `globals.css` file. Changing the entire color theme only requires editing that one file — no hunting through components.

**Dark mode done properly**  
Handled via `next-themes` with system preference detection. No flash on load (`suppressHydrationWarning` on `<html>`), smooth transition on toggle.

**Contact form with Resend**  
Instead of a classic `mailto:` link, I built a real API route (`/api/contact`) that sends a formatted HTML email via Resend. The form handles loading, success and error states.

**Framer Motion for animations**  
Scroll-triggered entrance animations on each section, with `viewport={{ once: true }}` so they only play once and don't feel repetitive.

**One-page architecture**  
Everything lives in a single `page.tsx` with anchor navigation. Simple, fast, and recruiter-friendly.

---

## Stack

| Category   | Tools                   |
| ---------- | ----------------------- |
| Framework  | Next.js 16 (App Router) |
| Language   | TypeScript              |
| Styling    | Tailwind CSS v4         |
| Animations | Framer Motion           |
| Dark mode  | next-themes             |
| Email      | Resend                  |
| Icons      | Lucide React            |
| Font       | Inter (Google Fonts)    |
| Deployment | Vercel                  |

---

## Run locally

```bash
npm install
npm run dev
# → http://localhost:4000
```

Create a `.env.local` file at the root:

```bash
RESEND_API_KEY=your_resend_api_key
```

The contact form won't work without it, but everything else will.

---

## Project structure

```
app/
├── page.tsx              # Single page — all sections
├── layout.tsx            # Metadata, font, ThemeProvider
├── globals.css           # Design system (colors, custom utilities)
└── api/contact/          # Email API route

components/
├── Header.tsx            # Fixed nav + dark mode toggle
├── Hero.tsx              # Landing section + CV download
├── Experience.tsx        # Work experience
├── Projects.tsx          # Featured technical projects
├── Skills.tsx            # Tech stack + soft skills
├── About.tsx             # Career change story
├── Contact.tsx           # Contact form
└── Footer.tsx

public/
├── cv/                   # Downloadable resumes (FR + EN)
└── screenshots/          # Project screenshots (used in Projects section)
```
