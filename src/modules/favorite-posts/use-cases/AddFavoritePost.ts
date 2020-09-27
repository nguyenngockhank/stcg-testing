import AddFavoritePostProcess from "../domain/AddFavoritePostProcess";

class AddFavoritePost {

    constructor(private process : AddFavoritePostProcess) { }

    async execute() {
        return await this.process.execute()
    }
}

export default AddFavoritePost