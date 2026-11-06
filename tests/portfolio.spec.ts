import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

test('portfolio renders without hydration errors and exposes search metadata', async ({ page }) => {
  const runtimeErrors: string[] = []
  page.on('pageerror', (error) => runtimeErrors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error' || /hydration|did not match/i.test(message.text()))
      runtimeErrors.push(message.text())
  })
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toHaveText(
    'Turning datainto usefulintelligence.',
  )
  await expect(page.locator('#projects article')).toHaveCount(4)
  for (const id of ['about', 'skills', 'experience', 'projects', 'contact']) {
    await expect(page.locator(`#${id}`)).toBeVisible()
  }
  await expect(
    page.locator('#contact').getByRole('link', { name: 'hulkbai@gmail.com' }),
  ).toHaveAttribute('href', 'mailto:hulkbai@gmail.com')
  await expect(page).toHaveTitle(/Tianyang Bai.*AI Engineer/)
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://hulkbai-beep.github.io/',
  )
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    'content',
    /Tianyang Bai.*data pipelines/,
  )
  const schema = await page.locator('script[type="application/ld+json"]').textContent()
  expect(JSON.parse(schema!)).toMatchObject({
    '@type': 'ProfilePage',
    url: 'https://hulkbai-beep.github.io/',
    mainEntity: {
      '@type': 'Person',
      name: 'Tianyang Bai',
      sameAs: ['https://github.com/hulkbai-beep'],
    },
  })
  // Interacting confirms the initial HTML has hydrated successfully.
  await page.getByRole('button', { name: 'Data pipelines', exact: true }).click()
  await expect(page.locator('#projects article')).toHaveCount(1)
  expect(runtimeErrors).toEqual([])
})

test('keyboard skip link and section navigation work on each layout', async ({
  page,
}, testInfo) => {
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(page.getByRole('link', { name: 'Skip to content' })).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page.locator('main')).toBeFocused()
  await expect(page).toHaveURL(/#main$/)

  if (testInfo.project.name === 'mobile') {
    const toggle = page.getByRole('button', { name: 'Menu', exact: true })
    await toggle.click()
    await expect(page.getByRole('button', { name: 'Close', exact: true })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  }
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Projects', exact: true })
    .click()
  await expect(page).toHaveURL(/#projects$/)
  if (testInfo.project.name === 'mobile') {
    await expect(page.getByRole('button', { name: 'Menu', exact: true })).toHaveAttribute(
      'aria-expanded',
      'false',
    )
    await expect(page.getByRole('navigation', { name: 'Main navigation' })).toBeHidden()
  }
})

test('project filtering updates results and preserves repository destinations', async ({
  page,
}) => {
  await page.goto('/#projects')
  const filters = page.getByRole('group', { name: 'Filter projects' })
  await filters.getByRole('button', { name: 'AI & analytics', exact: true }).click()
  await expect(page.locator('#projects article')).toHaveCount(2)
  await expect(page.getByRole('status')).toHaveText('Showing 2 projects')
  await expect(
    filters.getByRole('button', { name: 'AI & analytics', exact: true }),
  ).toHaveAttribute('aria-pressed', 'true')
  await expect(
    page.getByRole('heading', { name: 'FMP Technical Analysis' }).getByRole('link'),
  ).toHaveAttribute('href', 'https://github.com/hulkbai-beep/fmp-technical-analysis')
  await expect(
    page.getByRole('heading', { name: 'FMP Fundamental Analysis' }).getByRole('link'),
  ).toHaveAttribute('href', 'https://github.com/hulkbai-beep/fmp-fundamental-analysis')

  const dataFilter = filters.getByRole('button', { name: 'Data pipelines', exact: true })
  await dataFilter.focus()
  await page.keyboard.press('Space')
  await expect(page.locator('#projects article')).toHaveCount(1)
  await expect(page.getByRole('status')).toHaveText('Showing 1 project')
  await expect(
    page.getByRole('heading', { name: 'Earnings Report Extractor' }).getByRole('link'),
  ).toHaveAttribute(
    'href',
    'https://github.com/hulkbai-beep/factset-earnings-insight-pdf-extractor',
  )
  await filters.getByRole('button', { name: 'Agent workflows', exact: true }).click()
  await expect(page.locator('#projects article')).toHaveCount(1)
  await expect(
    page.getByRole('heading', { name: 'AI Engineer Resource Tracker' }).getByRole('link'),
  ).toHaveAttribute('href', 'https://github.com/hulkbai-beep/ai-engineer-enhance')
  await filters.getByRole('button', { name: 'All projects', exact: true }).click()
  await expect(page.locator('#projects article')).toHaveCount(4)
})

test('layouts pass automated accessibility checks and fit narrow screens', async ({
  page,
}, testInfo) => {
  await page.goto('/')
  let audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
  expect(audit.violations).toEqual([])

  if (testInfo.project.name === 'mobile') {
    await page.getByRole('button', { name: 'Menu', exact: true }).click()
    audit = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze()
    expect(audit.violations).toEqual([])
  }
  for (const width of [390, 320]) {
    await page.setViewportSize({ width, height: 844 })
    expect(
      await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
    ).toBe(true)
  }
})

test('pre-rendered content and navigation remain usable without JavaScript', async ({
  browser,
}, testInfo) => {
  const context = await browser.newContext({
    javaScriptEnabled: false,
    viewport: testInfo.project.use.viewport,
  })
  const page = await context.newPage()
  await page.goto('http://127.0.0.1:4173/')
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
  await expect(page.locator('#projects article')).toHaveCount(4)
  await expect(
    page.locator('#contact').getByRole('link', { name: 'hulkbai@gmail.com' }),
  ).toBeVisible()
  await page
    .getByRole('navigation', { name: 'Main navigation' })
    .getByRole('link', { name: 'Contact', exact: true })
    .click()
  await expect(page).toHaveURL(/#contact$/)
  await context.close()
})
