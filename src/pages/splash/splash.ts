import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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
export class SplashPage {


  public showBtn: boolean = false;


  constructor(public navCtrl: NavController, public navParams: NavParams) {}

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

