import { Component, ViewChild } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'SplashPage';
  pages: Array < {
      title: string,
      name: string
    } >
    @ViewChild('content') nav: NavController;

  public isJedi: boolean;
  public isSith: boolean;

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.initializeApp();
    this.pages = [{
        title: 'Splash',
        name: 'Splash'
      },
      {
        title: 'Credits',
        name: 'Credits'
      },
      {
        title: 'Search',
        name: 'Search'
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      this.isJedi = false;
      this.isSith = false;
    });
  }

  openPage(page) {
    this.nav.push(page);
  }

  changeAffiliation() {
    console.log("Change affiliation!");
  }

  chewieMode() {
    console.log('Chewie mode');
  }

  exitApp() {
    console.log("exitApp");
    this.platform.exitApp();
  }

}


