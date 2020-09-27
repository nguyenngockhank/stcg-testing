import WebPage from '../../shared/domain/WebPage'
import ProcessInfo from '../../shared/domain/ProcessInfo'

abstract class AddFavoritePostProcess {
    
    protected processInfo: ProcessInfo
    constructor(processInfo: ProcessInfo) { 
        this.processInfo = Object.assign({}, processInfo)
    }

    async execute() : Promise<void> {
        this.processInfo.webPage = this.getPage()
        await this.accessPage()
        await this.addFavoritePost()
        await this.verifyFavoritePost()
    }

    abstract getPage() : WebPage

    abstract accessPage() : Promise<void>

    abstract addFavoritePost() : Promise<void>

    abstract verifyFavoritePost() : Promise<void>

}

export default AddFavoritePostProcess