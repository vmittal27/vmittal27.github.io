# Personal Website

This site is built with Next.js and exported as a static site for GitHub Pages.

## Local development

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm run dev
```

Build the static export:

```bash
npm run build
```

Preview the exported site locally:

```bash
npm run start
```

## Deployment

Deployment is handled by GitHub Actions using:

- [.github/workflows/deploy.yml](./.github/workflows/deploy.yml)

GitHub Pages should be configured to use `GitHub Actions` as the deployment source.

## Updating Google Scholar

The Google Scholar link is stored in:

- [src/siteData.js](./src/siteData.js)

Update:

```js
links: {
  googleScholar: "https://scholar.google.com/..."
}
```

If you want the Google Scholar item to appear in the sidebar again, uncomment the corresponding line in:

- [src/components/Sidebar.jsx](./src/components/Sidebar.jsx)

Look for the commented `Google Scholar` sidebar item and remove the comment.

## Custom domain

If you want to use a custom domain instead of `https://vmittal27.github.io/`:

1. Add a `CNAME` file to `public/` containing your domain only.

Example:

```txt
www.example.com
```

2. Update the site URL in:

- [src/app/layout.js](./src/app/layout.js)

Change:

```js
const siteUrl = "https://vmittal27.github.io";
```

to your custom domain URL.

1. Update:

- [public/robots.txt](./public/robots.txt)
- [public/sitemap.xml](./public/sitemap.xml)

Replace `https://vmittal27.github.io` with your custom domain.

1. In GitHub repository settings:

- Go to `Settings` -> `Pages`
- Enter the custom domain
- Enable HTTPS once GitHub makes it available

5. Update your DNS records to point the domain to GitHub Pages.

## Notes

- Public assets live in `public/`
- Page routes live in `src/app/`
- Shared UI components live in `src/components/`
- Site content lives in `src/siteData.js`
- Need to update publication links once it's published
