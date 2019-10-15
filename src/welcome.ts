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
    this.getDeviceStatus();
    if (this.isCordova == undefined) {
      this.isCordova = false;
    }
    this.networkState = this.cordovaEvents.checkConnections();
    }

  //Getters can't be directly observed, so they must be dirty checked.
  //However, if you tell Aurelia the dependencies, it no longer needs to dirty check the property.
  //To optimize by declaring the properties that this getter is computed from, uncomment the line below
  //as well as the corresponding import above.
  //@computedFrom('firstName', 'lastName')
  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  submit() {
    this.previousValue = this.fullName;
    alert(`Welcome, ${this.fullName}!`);
  }

  public async getDeviceStatus() {
      this.isCordova =  await this.cordovaEvents.waitForDeviceReady();
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
