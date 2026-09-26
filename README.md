# Sudhanva Patil | AI Engineer Portfolio

Production-grade portfolio for AI Engineer, ML Systems Developer, and Computer Vision Specialist.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
/app           - Pages (Home, About, Projects, Experience, Skills, Certifications, Contact)
/components    - Layout (Navbar, Footer), Sections (Hero, StatsGrid, FeaturedProjects, ContactForm), Shared
/lib           - Data, utils, constants
/public        - Images, icons, resume.pdf
```

## Deployment

### Vercel

1. Push to GitHub and import to Vercel
2. Set environment variable: `NEXT_PUBLIC_SITE_URL=https://sudhanvapatil.vercel.app`
3. Add `resume.pdf` to `/public` for the Download Resume button

### Contact Form

The contact form currently validates input and returns success. To send emails, integrate with [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or similar in `app/api/contact/route.ts`.

## Customization

- **Contact links:** Update `lib/constants.ts` with your GitHub, LinkedIn URLs
- **Content:** Edit `lib/data.ts` for projects, experience, skills, certifications
- **OG image:** Add `/public/images/og-image.png` (1200×630) for social previews

## License

Private portfolio. All rights reserved.
