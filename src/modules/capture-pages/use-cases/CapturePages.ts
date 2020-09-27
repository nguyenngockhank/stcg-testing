import CaptureCommand from "../domain/CaptureCommand";

class CapturePages {

    constructor(private command : CaptureCommand) { }

    async execute() {
        await this.command.execute()
    }
}

export default CapturePages