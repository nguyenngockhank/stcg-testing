import WebPage from '../../shared/domain/WebPage'
import ProcessInfo from '../../shared/domain/ProcessInfo'

export default abstract class CapturePageProcess {

    protected processInfo: ProcessInfo
    constructor(processInfo: ProcessInfo) { 
        if (!processInfo.webPage) {
            throw new Error("Required webPage in processInfo")
        }
        this.processInfo = processInfo
    }

    async execute() : Promise<void> {
        await this.accessPage()
        await this.capturePage()
    }

    abstract accessPage() : Promise<void> 

    abstract capturePage() : Promise<void> 
}