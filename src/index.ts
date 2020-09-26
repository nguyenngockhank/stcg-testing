import puppeteer, { Page } from 'puppeteer'

import { getTestingDevices } from './utils/envUtils'

import { 
  DEVICE_SIZES,
  WEB_PAGES,
} from './config/index'

import DeviceSize from './domain/DeviceSize'
import ProcessInfo from './domain/ProcessInfo'

import accessPage from './infra/accessPage'
import capturePage from './infra/capturePage'
import setPageDimension from './infra/setPageDimension'


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


async function testDevice(
  page: Page, 
  deviceName: string, 
  deviceDimension: DeviceSize
) {

  let info : ProcessInfo = {
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