import ProcessInfo from '../domain/ProcessInfo'
import { prepareFolder } from './utils/fileUtils'

async function capturePage(info: ProcessInfo) {
    const page = info.page
    const title = info.webPage.title // await page.title()
  
    const path = `screens/${info.deviceName}/${title}.png`
    prepareFolder(path)
    await page.screenshot({ 'fullPage': true, type: 'jpeg', path })
}

export default capturePage