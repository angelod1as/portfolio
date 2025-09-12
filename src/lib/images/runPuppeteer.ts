/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { type Viewport, type Browser } from 'puppeteer'

let puppeteer: any
let chromium: any

if (process.env.VERCEL) {
  puppeteer = require('puppeteer-core')
  chromium = require('@sparticuz/chromium')
  // Set chromium to single process mode to avoid ETXTBSY errors
  chromium.setHeadlessMode = true
  chromium.setGraphicsMode = false
} else {
  puppeteer = require('puppeteer')
}

// Browser instance singleton to avoid concurrent launches
let browserInstance: Browser | null = null
let browserLaunchPromise: Promise<Browser> | null = null

const getBrowser = async (viewport: Viewport): Promise<Browser> => {
  // If browser is already launching, wait for it
  if (browserLaunchPromise) {
    return browserLaunchPromise
  }

  // If browser already exists and is connected, return it
  if (browserInstance && browserInstance.isConnected()) {
    return browserInstance
  }

  // Launch new browser instance
  browserLaunchPromise = (async (): Promise<Browser> => {
    const launchOptions = process.env.VERCEL
      ? {
          args: [...chromium.args, '--single-process', '--no-zygote'],
          defaultViewport: viewport,
          executablePath: await chromium.executablePath(),
          headless: chromium.headless,
        }
      : {
          headless: true,
          args: ['--no-sandbox', '--disable-setuid-sandbox'],
          devtools: false,
          defaultViewport: viewport,
        }

    browserInstance = await puppeteer.launch(launchOptions)
    browserLaunchPromise = null
    return browserInstance!
  })()

  return browserLaunchPromise
}

export const runPuppeteer = async (
  finalHtml: string,
  finalPath: string,
  viewport: Viewport
) => {
  // eslint-disable-next-line no-console
  console.log(`\nCreating file using Puppeteer:\n ${finalPath}\n`)

  const browser = await getBrowser(viewport)

  try {
    const page = await browser.newPage()
    await page.setContent(finalHtml)
    await page.waitForNetworkIdle()
    await page.screenshot({ path: finalPath as `${string}.png` })
    await page.close()
  } catch (error) {
    console.error(error)
    throw error
  }
  // Don't close the browser - reuse it for multiple screenshots
}

// Clean up browser on process exit
if (typeof process !== 'undefined') {
  process.on('exit', async () => {
    if (browserInstance) {
      await browserInstance.close().catch(() => {})
    }
  })
}
