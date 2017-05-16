import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BasePage } from "../base/base";

/**
 * Generated class for the AboutPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage extends BasePage {

  constructor(private browser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams,
    eventsCtrl: Events) {
      // Ref.: http://stackoverflow.com/questions/39836010/ionic-2-page-change-event
      // Due to an issue in angular, by now you must send the dependency to the super class
      // https://github.com/angular/angular/issues/5155
      super(eventsCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
  }

  openBrowser(url: string) {
    let options:any = { 
      hardwareback: 'yes',
      location: 'yes'
    };
    this.browser.create(url, '_self', options);
  }

}
