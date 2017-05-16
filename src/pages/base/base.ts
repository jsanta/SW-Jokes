// Ref.: http://stackoverflow.com/questions/39836010/ionic-2-page-change-event
import { Events } from 'ionic-angular';

export class BasePage {

  constructor(public eventsCtrl: Events) { }

  ionViewDidEnter() {
    this.eventsCtrl.publish('page:load');   
  }

  ionViewDidUnload() {
    this.eventsCtrl.publish('page:unload');   
  }

  ionViewDidLeave() {    
    this.eventsCtrl.publish('page:didleave');   
  }
}
