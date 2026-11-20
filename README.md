# Nadège Pelcat — Portfolio

Personal portfolio of a fullstack developer (React, TypeScript, Python, NestJS).

Live site: [nadegepelcat.com](https://www.nadegepelcat.com/)

## About

I built this site on my own, from design to deployment, to present my experience and projects. Before moving into development in 2023, I worked for 11 years as a veterinary nurse. Since then I have trained at Ada Tech School and worked at EDF Power Solutions, first as an apprentice, then on a contract mission.

## Technical choices

- **Tailwind CSS v4 theme**: colors and surfaces are CSS variables in `app/globals.css`, so the theme is changed in one place.
- **Dark mode** with `next-themes`, following the system preference without a flash on load.
- **Contact form**: an API route (`app/api/contact`) sends the message by email with Resend.
- **Animations** with Framer Motion, played once when a section enters the viewport.
- **Single page** with anchor navigation.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Framer Motion, next-themes, Resend, Lucide React. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

The site runs on http://localhost:4000.

The contact form needs a Resend key in a `.env.local` file at the root:

```bash
RESEND_API_KEY=your_resend_api_key
```

Without it, the rest of the site works but `npm run build` fails.

## Project structure

```
app/
├── page.tsx          # Single page, all sections
├── layout.tsx        # Metadata, font, theme provider
├── globals.css       # Theme (colors, utilities)
└── api/contact/      # Email API route

components/           # One component per section (Hero, Experience, Projects...)

lib/
└── availability.ts   # Job-search status shown in several sections

public/
├── cv/               # Downloadable resumes (FR and EN)
└── *.png, *.webp     # Project screenshots
```
