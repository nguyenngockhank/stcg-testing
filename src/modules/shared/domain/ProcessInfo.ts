import { Page } from 'puppeteer'

import DeviceSize from './DeviceSize'
import WebPage from './WebPage'

interface ProcessInfo {
    page: Page,
    deviceName: string,
    deviceDimension: DeviceSize
    webPage?: WebPage
}

export default ProcessInfo