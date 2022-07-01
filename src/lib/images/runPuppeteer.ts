import puppeteer from 'puppeteer'

export const runPuppeteer = async (
  finalHtml: string,
  finalPath: string,
  viewport: puppeteer.Viewport
) => {
  // eslint-disable-next-line no-console
  console.log(`\nCreating file using Puppeteer:\n ${finalPath}\n`)

  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
    devtools: false,
    defaultViewport: viewport,
  })

  try {
    const page = await browser.newPage()
    await page.setContent(finalHtml)
    await page.waitForNetworkIdle()
    await page.screenshot({ path: finalPath })
    await page.close()
  } catch (error) {
    console.error(error)
  } finally {
    await browser.close()
  }
}
