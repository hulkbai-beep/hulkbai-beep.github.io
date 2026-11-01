import { readFile, writeFile } from 'node:fs/promises'
import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import App from '../src/App'
import { profile } from '../src/data/portfolio'

const file = new URL('../dist/index.html', import.meta.url)
const template = await readFile(file, 'utf8')
if (!template.includes('<div id="root"></div>') || !template.includes('<!--structured-data-->')) {
  throw new Error('Pre-render placeholders are missing from dist/index.html. Check index.html.')
}
const markup = renderToString(createElement(App))
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  url: profile.siteUrl,
  mainEntity: {
    '@type': 'Person',
    name: profile.name,
    url: profile.siteUrl,
    sameAs: [profile.github],
    email: `mailto:${profile.email}`,
    description: profile.description,
  },
}
await writeFile(
  file,
  template
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`)
    .replace(
      '<!--structured-data-->',
      `<script type="application/ld+json">${JSON.stringify(structuredData).replace(/</g, '\\u003c')}</script>`,
    ),
)
console.log('Pre-rendered portfolio HTML and ProfilePage structured data.')
