# WESMILAP Portfolio

The WESMILAP International Limited portfolio website, built with Next.js, React, TypeScript, Tailwind CSS, and Framer Motion.

## Requirements

- Node.js 24 or newer
- npm

## Getting started

1. Install the project dependencies:

   ```bash
   npm ci
   ```

2. Create a local environment file from the sample:

   ```bash
   cp env.sample .env.local
   ```

3. If needed, update the values in `.env.local`:

   | Variable | Purpose |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | Canonical site URL used for metadata and sitemap generation. Use `http://localhost:3000` for local development. |
   | `NEXT_PUBLIC_CONTACT_EMAIL` | Email address used as the recipient for project enquiries. |

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

The development server supports hot reloading. Stop it with `Ctrl+C`.

## Available commands

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create an optimized production build. |
| `npm run start` | Serve the production build locally; run `npm run build` first. |
| `npm run lint` | Run ESLint. |
| `npm run lint:fix` | Run ESLint and apply automatic fixes. |
| `npm run typecheck` | Check TypeScript types without emitting files. |
| `npm run format` | Format files with Prettier. |
| `npm run format:check` | Check formatting with Prettier. |

To try the production build locally:

```bash
npm run build
npm run start
```

## Site pages

- `/` — Home
- `/about` — About WESMILAP
- `/projects` — Project portfolio
- `/projects/[slug]` — Individual project details
- `/contact` — Contact and project enquiry form

## Project structure

- `src/app/` — Next.js App Router pages, layout, and site metadata.
- `src/components/` — Page sections and feature components for the landing page, about, projects, and contact pages.
- `src/common/` — Shared navigation, footer, and motion components.
- `public/` — Static images, logos, and other public assets.

Project portfolio content is maintained in `src/components/Projects/data.ts`. Place project images and videos in `public/` and update their paths in that data file when adding or replacing project entries.

## Contact form

The enquiry form prepares an email in the visitor's default email application; it does not submit to a server-side form endpoint. Set `NEXT_PUBLIC_CONTACT_EMAIL` to the desired recipient address and ensure an email application is configured on the visitor's device.
