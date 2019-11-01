
export class CordovaEvents {

    public waitForDeviceReady(): Promise<boolean> {
        let p = new Promise<boolean>((resolve, reject) => {
            document.addEventListener('deviceready', () => {
                resolve(true);
            }, false);
        });
        return p;
    }

}