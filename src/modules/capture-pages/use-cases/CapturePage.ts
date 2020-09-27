import CapturePageProcess from "../domain/CapturePageProcess";

class CapturePages {

    constructor(private process : CapturePageProcess) { }

    async execute() {
        await this.process.execute()
    }
}

export default CapturePages