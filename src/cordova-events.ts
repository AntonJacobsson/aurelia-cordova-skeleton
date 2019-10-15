
export class CordovaEvents {

    public waitForDeviceReady(): Promise<boolean> {
        let p = new Promise<boolean>((resolve, reject) => {
            document.addEventListener('deviceready', () => {
                resolve(true);
            }, false);
        });
        return p;
    }
    public checkConnections(): any {
        var connectionType = navigator.connection.type;
 
        var states = {};
        states[Connection.UNKNOWN]  = 'Unknown connection';
        states[Connection.ETHERNET] = 'Ethernet connection';
        states[Connection.WIFI]     = 'WiFi connection';
        states[Connection.CELL_2G]  = 'Cell 2G connection';
        states[Connection.CELL_3G]  = 'Cell 3G connection';
        states[Connection.CELL_4G]  = 'Cell 4G connection';
        states[Connection.CELL]     = 'Cell generic connection';
        states[Connection.NONE]     = 'No network connection';
        
        return states[connectionType];
    }

}