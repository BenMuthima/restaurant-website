# Ember & Oak Restaurant Website

A Vite + React + TypeScript restaurant landing page for Ember & Oak, with product browsing, WhatsApp ordering, reservation flow, image galleries, and responsive navigation.

## Local development

```bash
npm install
npm run dev
```

## Project structure

- `src/config.ts` — restaurant details, WhatsApp number, contact info
- `src/data/menuData.ts` — menu catalogue and featured dishes
- `public/images/` — hero, menu, gallery, and service images
- `src/pages/` — Home, Menu, Reservations, Services, Gallery, placeholder pages

## Deployment notes

This project is ready to deploy to GitHub Pages or any static host.

### GitHub Pages (recommended for a static Vite app)

```bash
npm install
npm run build
```

The workflow in `.github/workflows/deploy.yml` builds and deploys the site automatically whenever you push to `main` or `master`.

1. Push this project to a GitHub repository named `restaurant-website`.
2. In the repository, open **Settings → Pages** and set the build and deployment source to **GitHub Actions**.
3. Push to `main` (or `master`), or run **Deploy to GitHub Pages** from the **Actions** tab.

The workflow includes a fallback for direct links to client-side routes, so refreshing a page such as `/menu` continues to work on GitHub Pages.

### Important: private repo + public Pages

If you create a private GitHub repository, the published Pages website is still publicly accessible unless your GitHub plan supports access-controlled Pages. Use a private hosting provider or an access-controlled Pages plan if the website itself must stay private.

## Business info to edit

Update the following in `src/config.ts`:

- `SITE.whatsappNumber`
- `SITE.phone`
- `SITE.email`
- `SITE.address`
- `SITE.hours`

## Notes

- Replace the sample photos in `public/images/` with your own restaurant photography.
- Missing images fall back to a warm gradient placeholder.
- The site already includes WhatsApp-based ordering and reservation flows.
# restraunt
# restraunt
