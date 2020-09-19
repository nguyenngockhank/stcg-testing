import puppeteer, { Page } from 'puppeteer'

import { prepareFolder } from './utils/fileUtils'
import { getTestingDevices, siteUrl } from './utils/envUtils'

import { 
  DeviceSize, 
  WebPage,
  DEVICE_SIZES,
  WEB_PAGES,
} from './config/index'


;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  let testingBrowsers = getTestingDevices()

  for(const deviceName of testingBrowsers) {
    if (DEVICE_SIZES[deviceName]) {
      await testDevice(page, deviceName, DEVICE_SIZES[deviceName])
    }
  }
  await browser.close()
})()


interface WebPageProcess {
  page: Page,
  deviceName: string,
  deviceDimension: DeviceSize
  webPage?: WebPage
}

async function testDevice(page: Page, deviceName: string, deviceDimension: DeviceSize) {

  let info : WebPageProcess = {
    page,
    deviceName,
    deviceDimension
  }
  // let info 
  await setPageDimension(info)

  for(const webPage of WEB_PAGES) {
    info.webPage = webPage
    await accessPage(info)
    await capturePage(info)
  }
}

async function setPageDimension(info: WebPageProcess) {
  const isMobile: boolean = info.deviceName != 'desktop'

  await info.page.setViewport({
    width: info.deviceDimension[0],
    height: info.deviceDimension[1],
    isMobile,
  })
}

const SITE_URL = siteUrl()
async function accessPage(info: WebPageProcess) {
  const url = SITE_URL + info.webPage.url
  await info.page.goto(url)
}

async function capturePage(info: WebPageProcess) {
  const page = info.page
  const title = info.webPage.title // await page.title()

  const path = `screens/${info.deviceName}/${title}.png`
  prepareFolder(path)
  await page.screenshot({ path })
}
