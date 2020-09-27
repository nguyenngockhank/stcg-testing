import CapturePagesProcess from "../domain/CapturePagesProcess";

class CapturePages {

    constructor(private command : CapturePagesProcess) { }

    async execute() {
        await this.command.execute()
    }
}

export default CapturePages