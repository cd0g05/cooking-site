# cooking.cartercripe.com

A small static recipe-sharing site built with [Astro](https://astro.build), styled after the
Light Film Room design system (`style-guide/`).

## Develop

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the production build locally
```

## Adding a recipe

1. Create `src/content/recipes/<slug>.yaml` — copy `deep-braise-beef-barbacoa.yaml`
   as a template. The filename becomes the URL: `/recipes/<slug>/`.
2. Drop the recipe PDF in `public/pdfs/` and set the `pdf:` field to `/pdfs/<file>.pdf`.
3. (Optional) Add a photo to `public/images/` and set `image:` + `imageAlt:`.
   Without one, the card and page show a graph-paper placeholder.
4. Commit and push — Vercel redeploys automatically.

The build validates every recipe against the schema in `src/content.config.ts`
and fails with a clear error if a field is missing or malformed.

Tag filters on the home page are generated from the union of all recipes' `tags`,
so new tags appear automatically.

## Deploying to Vercel

1. Import the repo in Vercel; set **Root Directory** to `cooking/`.
   Framework preset: **Astro** (auto-detected). No env vars needed.
2. Add the domain `cooking.cartercripe.com` in Project → Settings → Domains
   (Vercel will tell you the CNAME record to add).
3. Enable **Analytics** in the project dashboard — the tracking script is
   already in the layout (production builds only).

To also serve the site at `cartercripe.com/cooking` later, add a rewrite to the
main site's `vercel.json`:

```json
{ "rewrites": [{ "source": "/cooking/:path*", "destination": "https://cooking.cartercripe.com/:path*" }] }
```

## Font licensing note

Headings use **Druk** trial fonts (`public/fonts/`). Trial licenses don't cover
production websites — license from [Commercial Type](https://commercialtype.com/catalog/druk)
or swap the `@font-face` rules in `src/styles/global.css` for a free alternative
(e.g. Oswald or Archivo, already in the fallback stack).
