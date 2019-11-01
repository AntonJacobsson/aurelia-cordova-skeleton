import { CordovaEvents } from "../cordova-events";
import { inject } from "aurelia-framework";

@inject(CordovaEvents)
export class Cordova {
  public cordovaEvents: CordovaEvents;
  public isCordova: boolean;
  public networkState: any;

  constructor(cordovaEvents: CordovaEvents) {
    this.cordovaEvents = cordovaEvents;
  }

  public async getDeviceStatus() {
    this.isCordova = await this.cordovaEvents.waitForDeviceReady();
  }
}
