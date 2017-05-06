import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwJokeProvider } from "../../providers/sw-joke/sw-joke";

import * as _ from 'lodash';

/**
 * Generated class for the JokePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joke',
  templateUrl: 'joke.html',
})
export class JokePage {
  public joke: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams, public jokeProvider: SwJokeProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JokePage');
  }

  getNewJoke() {
    console.log('getNewJoke');
    this.joke = this.jokeProvider.getJoke();
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter JokePage', this.navParams);
    if(!!this.navParams.data && this.navParams.data.back){
      console.log(this.joke);
      if(!!!this.navParams.data.joke.joke) {
        console.log('Loading new joke, from back button.');
        this.getNewJoke();
      } else {
        this.joke = this.navParams.data.joke;
        console.log('Do nothing. Back from Joke annotations.');
      }
    } else {
      console.log('Loading new joke');
      this.getNewJoke();
    }
    
  }

  loadMoreInfo(refData: any) {
    _.assign(refData, { joke: this.joke });
    this.navCtrl.push('MoreInfoPage', refData);
  }

}
