import dotenv from 'dotenv'
dotenv.config()

export function getTestingDevices() : string[] {
  let testingBrowsers = process.env.TESTING_DEVICES
  return testingBrowsers.split(',').filter(item => item != '')
}

export function siteUrl() : string {
    return process.env.SITE_URL
}
