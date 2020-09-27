import WebPage from '../../shared/domain/WebPage'
import accessPage from '../../shared/infra/accessPage'
import capturePage from '../../shared/infra/capturePage'

import AddFavoritePostProcess from '../domain/AddFavoritePostProcess'

class AddFavoritePostProcessImpl extends AddFavoritePostProcess {

    getPage(): WebPage {
        return  { 
            title: 'Stcg-Latest-Posts', 
            url: '/bai-moi' 
        }
    }
    
    async accessPage() : Promise<void> {
        await accessPage(this.processInfo)
    }

    async addFavoritePost() : Promise<void> {
        const page = this.processInfo.page
        await page.click(`.post-list .post-item:first-child .post-react`)
    }

    async verifyFavoritePost() : Promise<void> {
        const page = this.processInfo.page
        // .fa-heart will be added favorite list
        page.waitForSelector(`.post-list .post-item:first-child .post-react.fa-heart`) 

        await capturePage(this.processInfo)
    }
}

export default AddFavoritePostProcessImpl