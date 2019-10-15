//import {computedFrom} from 'aurelia-framework';
import { CordovaEvents } from './cordova-events';
import { inject } from 'aurelia-framework';

@inject(CordovaEvents)

export class Welcome {
  heading: string = 'Welcome to the Aurelia Cordova Skeleton App';
  firstName: string = 'John';
  lastName: string = 'Doe';
  previousValue: string = this.fullName;
  public cordovaEvents: CordovaEvents;
  public isCordova: boolean;
  public networkState: any;

  constructor(cordovaEvents: CordovaEvents) {
    this.cordovaEvents = cordovaEvents;
    this.initCordova();
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  public submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
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

  canDeactivate(): boolean | undefined {
    if (this.fullName !== this.previousValue) {
      return confirm('Are you sure you want to leave?');
    }
  }
}

export class UpperValueConverter {
  toView(value: string): string {
    return value && value.toUpperCase();
  }
}
