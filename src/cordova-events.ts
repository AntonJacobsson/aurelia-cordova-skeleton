
export class CordovaEvents {

    constructor() {
        document.addEventListener("backbutton", this.onBackKeyDown, false);
    }

    public waitForDeviceReady(): Promise<boolean> {
        let p = new Promise<boolean>((resolve, reject) => {
            document.addEventListener('deviceready', () => {
                resolve(true);
            }, false);
        });
        return p;
    }

    public onBackKeyDown() {
        alert("BACKBUTTON");
    }

}