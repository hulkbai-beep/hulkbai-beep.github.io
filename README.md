# Tianyang Bai — AI Engineer portfolio

A responsive, accessible portfolio built with React, TypeScript, Vite, and Tailwind CSS. Static HTML is generated during the production build so the portfolio content and metadata are available to crawlers before JavaScript runs. The site uses GitHub Pages without a backend, paid service, or runtime API key.

Public URL: [hulkbai-beep.github.io](https://hulkbai-beep.github.io/).

## Local development

Use Node.js 24 and npm.

```sh
npm ci
npm run dev
```

To validate and preview the production site:

```sh
npm run check
npm run build
npx playwright install chromium
npm run test:e2e
npm run preview
```

On Linux, Playwright may require system packages: use `npx playwright install --with-deps chromium`. The browser checks run against the production build, including responsive navigation and accessibility checks.

## Edit the portfolio

- `src/data/portfolio.ts`: identity, introduction, skills, experience, project descriptions, and public contact links.
- `src/components/`: reusable page sections and navigation.
- `src/styles.css`: colors, typography, spacing, and responsive presentation.
- `index.html`: document metadata and canonical URL.
- `public/`: static files such as the favicon, robots file, and sitemap.

Keep factual content in the data module. Project links go directly to public source repositories; the portfolio does not fetch GitHub data at runtime. See [content guidance](docs/CONTENT.md) before adding biographical or professional details.

`scripts/prerender.ts` writes the React page and `ProfilePage` structured data into `dist/index.html` after Vite builds. Search crawlers and visitors without JavaScript receive the full page content, all featured projects, and working anchor, email, and repository links. React hydrates that HTML to enable the mobile menu and project filters.

## GitHub Pages deployment

The workflow in [`.github/workflows/pages.yml`](.github/workflows/pages.yml) installs the lockfile, builds the site, and runs browser checks on pull requests and pushes to `main`. Pull requests are checked without publishing. Successful pushes to `main` upload `dist/` and deploy through the `github-pages` environment. A manual workflow run also deploys only when run from `main`.

One-time repository settings:

1. Open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
2. Under **Settings → Actions → General**, allow GitHub Actions and the official `actions/*` actions used by this repository. No personal access token or additional repository secret is required.
3. Under **Settings → Environments → github-pages**, allow deployments from `main`. If the environment has required reviewers, approve the deployment when GitHub requests it.
4. Review and merge the feature pull request. Open the **Actions** tab and confirm that **Build and deploy portfolio** completes successfully. If the Pages setting was changed after the merge, run the workflow manually on `main`.

The Vite base path is `/` because this is a user site. Retain the repository name `hulkbai-beep.github.io` to preserve [the existing public URL](https://hulkbai-beep.github.io/). No custom domain or DNS change is needed.

The workflow grants publishing permissions only to the deployment job. The repository's default token can remain read-only; the workflow explicitly requests the Pages and OpenID Connect permissions needed for deployment.

Official references: [GitHub Pages publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [custom Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages), and [Vite deployment guidance](https://vite.dev/guide/static-deploy.html#github-pages).
