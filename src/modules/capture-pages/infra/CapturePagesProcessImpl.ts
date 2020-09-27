import CapturePagesProcess from '../domain/CapturePagesProcess'

import ProcessInfo from '../../shared/domain/ProcessInfo'

import { WEB_PAGES } from './config/pages'
import WebPage from '../../shared/domain/WebPage'
import CapturePageProcess from '../domain/CapturePageProcess'
import CapturePageProcessImpl from './CapturePageProcessImpl'

class CapturePagesProcessImpl extends CapturePagesProcess {

    getCapturePageProcess(processInfo: ProcessInfo): CapturePageProcess {
        return new CapturePageProcessImpl(processInfo)
    }

    getWebPages(): WebPage[] {
        return WEB_PAGES
    }
}

export default CapturePagesProcessImpl