import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { BasePage } from "../base/base";

/**
 * Generated class for the SplashPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-splash',
  templateUrl: 'splash.html',
})
export class SplashPage extends BasePage {


  public showBtn: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams, eventsCtrl: Events) {
    super(eventsCtrl);
  }



  showHideBtn() {
    this.showBtn = false;
    setTimeout(() => {
      this.showBtn = true;
    }, 12000);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SplashPage');
    //this.showHideBtn();
  }

  openPage(page) {
    this.navCtrl.push(page);
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter SplashPage');
    this.showHideBtn();
  }

}

