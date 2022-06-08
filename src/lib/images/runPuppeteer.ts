import puppeteer from 'puppeteer'

export const runPuppeteer = async (finalHtml: string, finalName: string) => {
  const browser = await puppeteer.launch({
    headless: true,
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
    await page.screenshot({ path: finalName })
  } catch (error) {
    console.error(error)
  } finally {
    await browser.close()
  }
}
