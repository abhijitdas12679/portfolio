# Abhijit Das — Portfolio

A Next.js + Tailwind CSS + Framer Motion portfolio site, built from the
provided `.env` configuration content.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel (free)

1. Push this folder to a new GitHub repository.
2. Go to https://vercel.com/new and import that repository.
3. Leave all settings on their defaults (Framework Preset: Next.js) and click Deploy.

No environment variables are required — all content lives in `lib/data.ts`.

## Editing content

- Text, links, and case-study copy: `lib/data.ts`
- Profile photo: `public/images/profile.png` (swap the file, keep the name, or
  update the path in `components/Hero.tsx`)
- Colors and fonts: `tailwind.config.ts` and `app/layout.tsx`

## Notes

- The footer's contact line is a placeholder — add a real email, LinkedIn, or
  contact form when you have one you'd like to publish.
