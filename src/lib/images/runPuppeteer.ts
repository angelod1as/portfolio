/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Viewport } from 'puppeteer'

let puppeteer: any
let chromium: any

if (process.env.VERCEL) {
  puppeteer = require('puppeteer-core')
  chromium = require('@sparticuz/chromium')
} else {
  puppeteer = require('puppeteer')
}

export const runPuppeteer = async (
  finalHtml: string,
  finalPath: string,
  viewport: Viewport
) => {
  // eslint-disable-next-line no-console
  console.log(`\nCreating file using Puppeteer:\n ${finalPath}\n`)

  const launchOptions = process.env.VERCEL
    ? {
        args: chromium.args,
        defaultViewport: viewport,
        executablePath: await chromium.executablePath(),
        headless: chromium.headless,
      }
    : {
        headless: true,
        args: ['--no-sandbox'],
        devtools: false,
        defaultViewport: viewport,
      }

  const browser = await puppeteer.launch(launchOptions)

  try {
    const page = await browser.newPage()
    await page.setContent(finalHtml)
    await page.waitForNetworkIdle()
    await page.screenshot({ path: finalPath as `${string}.png` })
    await page.close()
  } catch (error) {
    console.error(error)
  } finally {
    await browser.close()
  }
}
