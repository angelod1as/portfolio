import puppeteer from 'puppeteer'

export const runPuppeteer = async (finalHtml: string, finalPath: string) => {
  // eslint-disable-next-line no-console
  console.log(`\nCreating social file:\n ${finalPath}\n`)
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox'],
    devtools: false,
    defaultViewport: {
      height: 630,
      width: 1200,
    },
  })

  try {
    const page = await browser.newPage()
    await page.setContent(finalHtml)
    await page.waitForNetworkIdle()
    await page.screenshot({ path: finalPath })
  } catch (error) {
    console.error(error)
  } finally {
    await browser.close()
  }
}
