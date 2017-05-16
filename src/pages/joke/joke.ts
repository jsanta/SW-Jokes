import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SwJokeProvider } from "../../providers/sw-joke/sw-joke";

import * as _ from 'lodash';
import { GlobalScopeService } from "../../providers/global-scope-service/global-scope-service";
import { Subscription } from "rxjs/Subscription";
import { BasePage } from "../base/base";

/**
 * Generated class for the JokePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-joke',
  templateUrl: 'joke.html'
})
export class JokePage extends BasePage {
  joke: any = {};
  isJedi: boolean = false;
  isJedi$: Subscription;

  chewie: boolean = false;
  chewie$: Subscription;



  variables: any;  

  constructor(public navCtrl: NavController, public navParams: NavParams, public jokeProvider: SwJokeProvider, private rootScope: GlobalScopeService,
    eventsCtrl: Events) {  

      super(eventsCtrl);  

    this.isJedi  = rootScope.getItem('isJedi');
    this.isJedi$ = rootScope.watch('isJedi').subscribe(variable => { 
      this.isJedi = (variable != undefined) ? variable.value : undefined;       
    });  

    this.chewie = this.rootScope.getItem('chewieMode');
    if(this.rootScope.getItem('chewieMode') === undefined) {      
      this.chewie = false;
      this.rootScope.setItem('chewieMode', this.chewie);
    }
    this.chewie$ = this.rootScope.watch('chewieMode')         
    .subscribe(chewie => {              
      this.chewie = (chewie != undefined) ? chewie.value : false;                   
    });   
    
  }

  ionViewWillLeave() {
    //if(!!this.isJedi$){
      this.isJedi$.unsubscribe();
      this.chewie$.unsubscribe();
    //}    
  }

  ionViewDidLoad() {}

  getNewJoke() {    
    this.joke = this.jokeProvider.getJoke();
  }

  ionViewWillEnter(): void {    
    if(!!this.navParams.data && this.navParams.data.back){      
      if(!!!this.navParams.data.joke.joke) {        
        this.getNewJoke();
      } else {
        this.joke = this.navParams.data.joke;        
      }
    } else {      
      this.getNewJoke();
    }

    if(!!!this.joke){      
      this.getNewJoke();
    }
    
  }

  loadMoreInfo(refData: any) {
    _.assign(refData, { joke: this.joke });
    this.navCtrl.setRoot('MoreInfoPage', refData);
  }

}
