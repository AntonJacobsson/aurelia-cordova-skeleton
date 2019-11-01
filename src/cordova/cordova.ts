import { CordovaEvents } from "../cordova-events";
import { inject } from "aurelia-framework";

@inject(CordovaEvents)
export class Cordova {
  public cordovaEvents: CordovaEvents;
  public isCordova: boolean;
  public networkState: any;

  constructor(cordovaEvents: CordovaEvents) {
    this.cordovaEvents = cordovaEvents;
    this.getDeviceStatus();
  }

  public async getDeviceStatus() {
    this.isCordova = await this.cordovaEvents.waitForDeviceReady();
  }
}
