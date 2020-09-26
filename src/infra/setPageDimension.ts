import ProcessInfo from '../domain/ProcessInfo'

async function setPageDimension(info: ProcessInfo) {
    const isMobile: boolean = info.deviceName != 'desktop'
  
    await info.page.setViewport({
      width: info.deviceDimension[0],
      height: info.deviceDimension[1],
      isMobile,
    })
}

export default setPageDimension