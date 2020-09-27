import ProcessInfo from '../modules/shared/domain/ProcessInfo'


describe('Favorite Posts Feature', () => {

    let processInfo : ProcessInfo 

    beforeEach(() => {
        jest.setTimeout(30000)
        processInfo = {
            deviceName: 'Default',
            deviceDimension: [1024, 800],
            page
        }
    })

    it(`Add a Post to Favorite`, async () => {
        expect.assertions(1)
        try {
            const result = await executeAddFavoritePostUC(processInfo)
            expect(result).toBeUndefined()
        } catch (err) { /** ignore */ }
    })
})


import AddFavoritePostUC from '../modules/favorite-posts/use-cases/AddFavoritePost'
import AddFavoritePostProcessImpl from '../modules/favorite-posts/infra/AddFavoritePostProcessImpl'

async function executeAddFavoritePostUC(info : ProcessInfo) {
  await resolveAddFavoritePostUC(info).execute()
}

function resolveAddFavoritePostUC(info : ProcessInfo) {
  const command = new AddFavoritePostProcessImpl(info)
  return new AddFavoritePostUC(command)
}