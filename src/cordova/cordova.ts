import { CordovaEvents } from "../cordova-events";
import { inject } from "aurelia-framework";

@inject(CordovaEvents)
export class Cordova {
  public cordovaEvents: CordovaEvents;
  public isCordova: boolean;
  public networkState: any;

  constructor(cordovaEvents: CordovaEvents) {
    this.cordovaEvents = cordovaEvents;
    this.initCordova();
  }

  public async getDeviceStatus() {
    this.isCordova = await this.cordovaEvents.waitForDeviceReady();
  }

  private initCordova() {
    this.getDeviceStatus();
    if (this.isCordova == undefined) {
      this.isCordova = false;
    }
    if (this.isCordova == true) {
      this.networkState = this.cordovaEvents.checkConnections();
    } else {
      this.networkState = "no cordova";
    }
  }
}
