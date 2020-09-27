import CapturePageProcess from "../domain/CapturePageProcess";

class CapturePages {

    constructor(private command : CapturePageProcess) { }

    async execute() {
        await this.command.execute()
    }
}

export default CapturePages