# HON 355 Project Refiner

A React + Vite workshop guide for HON 355 at NC State University. Helps students move from a broad topic to a focused research question using structured prompts and the Project Refiner AI tool.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages Deployment

This repository is configured for standard GitHub Pages hosting at `/Hon355-Refiner/`.

### Manual build for Pages

```bash
npm run build:pages
```

That command generates a `dist/` build whose asset URLs are prefixed for the repository subpath used by GitHub Pages.

### GitHub Actions deployment

The repository includes a Pages workflow at `.github/workflows/deploy.yml`.

To use it:

1. In GitHub, open Settings > Pages.
2. Set Source to `GitHub Actions`.
3. Push to `main`.

The workflow installs dependencies, builds the site, and deploys the generated `dist/` output to GitHub Pages.

### Verification

After deployment, the published site should load assets from `/Hon355-Refiner/assets/...` rather than `/assets/...`.
