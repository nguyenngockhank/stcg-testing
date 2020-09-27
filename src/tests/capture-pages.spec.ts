import { getTestingDevices } from '../modules/shared/infra/utils/envUtils'

import ProcessInfo from '../modules/shared/domain/ProcessInfo'
import setPageDimension from '../modules/shared/infra/setPageDimension'

import DEVICE_SIZES from '../modules/shared/infra/config/devices'
import WEB_PAGES from '../modules/capture-pages/infra/config/pages'

describe('Capture Pages', () => {
  
    beforeEach(() => {
      jest.setTimeout(30000)
    })

    let processInfoList = getTestingDevices()
                            .filter(deviceName => !!DEVICE_SIZES[deviceName])
                            .map(deviceName => {
                                const deviceDimension = DEVICE_SIZES[deviceName]
                                return { page, deviceName, deviceDimension } as ProcessInfo
                            })
                            

    for(const processInfo of processInfoList) {
        describe(`Capture Pages with Browser: ${processInfo.deviceName}`,  () => {      
            for(let webPage of WEB_PAGES) {
                it(`Capture URL: ${webPage.url}` ,  async () => {
                    await setPageDimension(processInfo)
                    processInfo.webPage = webPage

                    expect.assertions(1)
                    try {
                        const result = await executeCapturePageUC(processInfo)
                        expect(result).toBeUndefined()
                    } catch (ex) { /** ignore will be failed this case */}
                })
            }  
        })
    }
})


import CapturePageUC from '../modules/capture-pages/use-cases/CapturePage'
import CapturePageProcessImpl from '../modules/capture-pages/infra/CapturePageProcessImpl'

async function executeCapturePageUC(info : ProcessInfo) {
  const captureUC = resolveCaptureUsecase(info)
  await captureUC.execute()
}

function resolveCaptureUsecase(info : ProcessInfo) {
  const command = new CapturePageProcessImpl(info)
  return new CapturePageUC(command)
}
