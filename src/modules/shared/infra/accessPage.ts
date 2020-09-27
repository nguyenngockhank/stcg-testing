import ProcessInfo from '../domain/ProcessInfo'
import { siteUrl } from './utils/envUtils'

async function accessPage(info: ProcessInfo) {
  const url = siteUrl() + info.webPage.url
  await info.page.goto(url)
}

export default accessPage