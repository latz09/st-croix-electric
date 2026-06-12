# St. Croix Electric Website

The official website for St. Croix Electric Inc. Built with Next.js and hosted on Vercel.

## Tech Stack

- **Framework:** Next.js 13+ (App Router)
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Hosting:** Vercel
- **Language:** JavaScript

## Project Structure

    app/                  → Pages and route components (Next.js App Router)
      components/         → Reusable React components
      contact-us/         → /contact-us page
      meet-the-team/      → /meet-the-team page
      see-our-work/       → /see-our-work page
      what-we-do/         → /what-we-do page
      why-choose-us/      → /why-choose-us page
    data/                 → Site content (text, team info, services, testimonials)
    public/               → Static assets (images, favicon, etc.)
      images/content/     → All site images

## Editing Content

All site content lives in the `/data` folder as plain JavaScript files, or directly inside each page file in `/app`. To update text, team members, services, testimonials, etc., open the relevant file and edit directly.

- `data/services.js` — Service categories, descriptions, and subcategories
- `data/testimonials.js` — All customer testimonials (mark `isFeatured: true` to show on homepage)
- Page-specific content (home page, contact, see our work, etc.) lives inside the corresponding `page.js` file in `/app`

After editing, commit and push — Vercel will redeploy automatically.

## Images

To add or update images, drop them into `public/images/content/` and reference them in the data files using a path like `/images/content/your-image.jpg`.

For best performance, compress and resize images before adding them (recommended: max 1600px wide, WebP or optimized JPG).

## Running Locally

Requires Node.js 18+.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The site will auto-reload as you edit files.

## Deployment

The site is deployed on Vercel. Pushes to the `main` branch trigger an automatic production deploy. Pushes to other branches generate preview URLs.

The Vercel project is owned by St. Croix Electric Inc.

## Domain & Hosting

- **Domain:** stcroixelectricinc.com
- **Hosting:** Vercel (account owned by St. Croix Electric)
- **DNS:** Configured to point at Vercel

## Original Build

Originally built by Latz Web Design, LLC. Full ownership of all code, design, content, and assets was transferred to St. Croix Electric Inc. 
