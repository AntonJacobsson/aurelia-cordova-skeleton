import { Router, RouterConfiguration } from "aurelia-router";
import { PLATFORM } from "aurelia-pal";

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.title = "Aurelia";
    config.map([
      {
        route: ["", "welcome"],
        name: "welcome",
        moduleId: PLATFORM.moduleName("./welcome"),
        nav: true,
        title: "Welcome"
      },
      {
        route: "users",
        name: "users",
        moduleId: PLATFORM.moduleName("./users"),
        nav: true,
        title: "Github Users"
      },
      {
        route: "cordova",
        name: "cordova",
        moduleId: PLATFORM.moduleName("./cordova/cordova"),
        nav: true,
        title: "Cordova"
      }
    ]);

    this.router = router;
  }
}
