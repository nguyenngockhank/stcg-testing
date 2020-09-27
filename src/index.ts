import puppeteer, { Page } from 'puppeteer'

import { getTestingDevices } from './modules/shared/infra/utils/envUtils'

import DEVICE_SIZES from './modules/shared/infra/config/devices'

import DeviceSize from './modules/shared/domain/DeviceSize'
import ProcessInfo from './modules/shared/domain/ProcessInfo'

import setPageDimension from './modules/shared/infra/setPageDimension'


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


async function testDevice (
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

  // execute capture pages
  await executeCapturePagesUC(info)
}

import CapturePagesUC from './modules/capture-pages/use-cases/CapturePages'
import CapturePagesProcessImpl from './modules/capture-pages/infra/CapturePagesProcessImpl'

async function executeCapturePagesUC(info : ProcessInfo) {
  const captureUC = resolveCaptureUsecase(info)
  await captureUC.execute()
}

function resolveCaptureUsecase(info : ProcessInfo) {
  const command = new CapturePagesProcessImpl(info)
  return new CapturePagesUC(command)
}
