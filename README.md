# Nadège Pelcat — Portfolio

Personal portfolio of a fullstack developer (React, TypeScript, Python, NestJS).

Live site: [nadegepelcat.com](https://www.nadegepelcat.com/)

## About

I built this site on my own, from design to deployment, to present my experience and projects. Before moving into development in 2023, I worked for 11 years as a veterinary nurse. Since then I have trained at Ada Tech School and worked at EDF Power Solutions, first as an apprentice, then on a contract mission.

## Technical choices

- **Design tokens**: colors are semantic CSS variables (`bg`, `fg`, `accent`...) in `app/globals.css`, defined once for light mode and once for dark mode, and exposed to Tailwind with `@theme inline`.
- **Content apart from the layout**: all texts live in typed files in `content/`. Updating a project or an experience does not touch the components.
- **Dark mode** with `next-themes`, following the system preference without a flash on load.
- **Accessible projects accordion**: real buttons with `aria-expanded`, closed panels made `inert`, animated in CSS only.
- **Contact form**: the API route (`app/api/contact`) validates the fields with Zod, escapes them before building the email HTML, checks a honeypot field against bots, and sends the message with Resend. The build does not need the Resend key.
- **Motion**: a few CSS animations, all turned off with `prefers-reduced-motion`.
- **Tests** with Vitest and Testing Library for the contact route, the validation schema and the form.

## Stack

Next.js 16 (App Router), TypeScript, Tailwind CSS v4, next-themes, Zod, Resend, Lucide React. Vitest, Testing Library and jsdom for tests. Deployed on Vercel.

## Run locally

```bash
npm install
npm run dev
```

The site runs on http://localhost:4000.

To send real messages from the contact form, add a Resend key in a `.env.local` file at the root:

```bash
RESEND_API_KEY=your_resend_api_key
```

Without it, the site and the build work, and the form answers with an error.

```bash
npm run lint
npm run test
npm run build
```

## Project structure

```
app/
├── page.tsx               # Single page, all sections
├── layout.tsx             # Metadata, fonts, theme provider
├── opengraph-image.tsx    # Social preview image, generated at build time
├── globals.css            # Design tokens and animations
└── api/contact/           # Email API route and its tests

components/                # One component per section (Hero, Projects, Journey...)
└── ui/                    # Shared pieces (Section, ButtonLink, Tag)

content/                   # Texts: profile, principles, projects, journey, skills

lib/
├── availability.ts        # Job-search status shown in several sections
├── contact-limits.ts      # Field limits shared by the form and the server
├── contact-schema.ts      # Zod schema of the contact form
└── escape-html.ts         # Escapes user text before it goes into HTML

public/
├── cv/                    # Downloadable resumes (FR and EN)
└── *.png, *.webp, *.jpg   # Project screenshots
```
