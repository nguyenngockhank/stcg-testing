import WebPage from '../../shared/domain/WebPage'
import ProcessInfo from '../../shared/domain/ProcessInfo'

import CapturePageProcess from './CapturePageProcess'

export default abstract class CapturePagesProcess {

    protected processInfo: ProcessInfo
    constructor(processInfo: ProcessInfo) { 
        this.processInfo = Object.assign({}, processInfo)
    }

    async execute() : Promise<void> {
        let processInfo = this.processInfo
        const webPages = this.getWebPages()

        for(const webPage of webPages) {
            processInfo.webPage = webPage
            let process = this.getCapturePageProcess(processInfo)

            await process.execute()
        }
    }

    abstract getCapturePageProcess(processInfo: ProcessInfo) : CapturePageProcess;

    abstract getWebPages() : WebPage[]
}