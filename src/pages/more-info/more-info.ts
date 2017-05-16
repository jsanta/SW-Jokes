import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { SwApiServiceProvider } from "../../providers/sw-api-service/sw-api-service";

import * as _ from 'lodash';
import { GlobalScopeService } from "../../providers/global-scope-service/global-scope-service";
import { Subscription } from "rxjs/Subscription";
import { BasePage } from "../base/base";

/**
 * Generated class for the MoreInfoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-more-info',
  templateUrl: 'more-info.html',
})
export class MoreInfoPage extends BasePage {

  category: string;
  queryUrl: string;
  ellapsed: number;
  response: Array<any>;

  chewie$: Subscription;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swApiService: SwApiServiceProvider, private rootScope: GlobalScopeService, 
    eventsCtrl: Events) {
      super(eventsCtrl);
  }

  ionViewDidLoad() { }

  ionViewWillLeave() {
    //if(!!this.chewie$){
      this.chewie$.unsubscribe();
    //}        
  }

  retrieveData(category: string, queryUrl: string) {

    this.swApiService.retrieveData(category + queryUrl).then(res => {       

      this.response = _.map(res['results'], (v, k) => {
        
        let exceptions           = ['films', 'people', 'species', 'starships', 'planets', 'vehicles', 'opening_crawl', 'characters', 'pilots', 'homeworld', 'created', 'edited', 'url'];
        let shyriiwookExceptions = ['wwahanscc', 'akwoooakanwo', 'cakwooaahwoc', 'caorarccacahakc', 'akanrawhwoaoc', 'howoacahoaanwoc', 'ooakwowhahwhrroarcraohan', 'oaacrarcraoaaoworcc', 'akahanooaoc', 'acooscwoohoorcanwa', 'oarcworaaowowa', 'wowaahaowowa', 'hurcan'];
        let adjustedData = _.map(_.omit(v, _.concat([], exceptions, shyriiwookExceptions)), (vv, kk) => {
          return {
            label: kk.replace(/_/g, ' '),
            value: vv
          };
        });
        
        return { data: adjustedData };
      });      

    });

  }

  ionViewWillEnter(): void {    
    let params = this.navParams.data;

    this.category = params.category;
    this.queryUrl = params.url;

    //this.retrieveData(this.category, this.queryUrl);
    this.chewie$ = this.rootScope.watch('chewieMode').subscribe(chewie => {            
      this.retrieveData(this.category, this.queryUrl);
    });

  }

  goBack() {
    this.navCtrl.setRoot('JokePage', { back: true, joke: this.navParams.data.joke });
  }

}
