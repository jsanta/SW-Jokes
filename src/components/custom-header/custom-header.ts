import { Component, Input } from '@angular/core';
import { AlertController, Toggle } from "ionic-angular";

/**
 * Generated class for the CustomHeader component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeader {

	@Input('appName') appName: string;
  @Input('pageTitle') pageTitle: string;

  chewie: boolean = false;

  constructor(private alertCtrl: AlertController) {
    console.log('Hello CustomHeader Component');
  }

  chewieMode(toggle: Toggle, chw: any): void {
    console.log('chewieMode', chw, toggle);
    this.chewie = toggle.checked;
    if(toggle.checked) {
      this.presentAlert();
    }
  }

  presentAlert() {
  let alert = this.alertCtrl.create({
    title: 'Chewie mode ON',
    message: 'Rrrrugh arah-ah-woof?',
    buttons: [{
        text: 'OK',
        handler: () => {
          console.log('OK clicked');
          this.chewie = false;
          alert.dismiss();

          return false;
        }
      }]
  });
  alert.present();
}

}
