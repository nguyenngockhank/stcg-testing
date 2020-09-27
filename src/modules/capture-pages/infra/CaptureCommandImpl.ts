import CaptureCommand from '../domain/CaptureCommand'

import ProcessInfo from '../../shared/domain/ProcessInfo'
import accessPage from '../../shared/infra/accessPage'
import capturePage from '../../shared/infra/capturePage'

import { WEB_PAGES } from './config/pages'


class CaptureCommandImpl implements CaptureCommand {

    private processInfo: ProcessInfo

    constructor(processInfo: ProcessInfo) { 
        this.processInfo = Object.assign({}, processInfo)
    }
    
    async execute(): Promise<void> {
        let processInfo = this.processInfo

        for(const webPage of WEB_PAGES) {
            processInfo.webPage = webPage
            await accessPage(processInfo)
            await capturePage(processInfo)
        }
    }
    
}

export default CaptureCommandImpl