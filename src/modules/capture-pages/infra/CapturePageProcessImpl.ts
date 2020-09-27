import CapturePageProcess from '../domain/CapturePageProcess'
import accessPage from '../../shared/infra/accessPage'
import capturePage from '../../shared/infra/capturePage'


class CapturePageProcessImpl extends CapturePageProcess {

    async accessPage(): Promise<void> {
        await accessPage(this.processInfo)
    }
    
    async capturePage(): Promise<void> {
        await capturePage(this.processInfo)
    }
}

export default CapturePageProcessImpl