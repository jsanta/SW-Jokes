import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { InAppBrowser } from "@ionic-native/in-app-browser";
import { BasePage } from "../base/base";

/**
 * Generated class for the CreditsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-credits',
  templateUrl: 'credits.html',
})
export class CreditsPage extends BasePage {

  constructor(private browser: InAppBrowser, public navCtrl: NavController, public navParams: NavParams,
    eventsCtrl: Events) {
      super(eventsCtrl);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditsPage');
  }

  openBrowser(url: string) {
    let options:any = { 
      hardwareback: 'yes',
      location: 'yes'
    };
    this.browser.create(url, '_self', options);
  }

}
