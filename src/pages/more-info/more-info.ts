import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SwApiServiceProvider } from "../../providers/sw-api-service/sw-api-service";

import * as _ from 'lodash';

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
export class MoreInfoPage {

  category: string;
  queryUrl: string;
  ellapsed: number;
  response: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams, private swApiService: SwApiServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoreInfoPage');
  }

  ionViewWillEnter(): void {
    console.log('ionViewWillEnter MoreInfoPage');
    console.log(this.navParams);

    let params = this.navParams.data;
    let self: any = this;

    this.category = params.category;
    this.queryUrl = params.url;


    this.swApiService.retrieveData(this.category + this.queryUrl).then(res => { 
      console.log('Query is done ', self.queryUrl, res);

      this.response = _.map(res['results'], (v, k) => {
        console.log('v, k', v, k);
        let adjustedData = _.map(_.omit(v, ['films', 'people', 'species', 'starships', 'planets', 'vehicles', 'opening_crawl', 'characters', 'pilots', 'homeworld', 'created', 'edited', 'url']), (vv, kk) => {
          console.log('vv, kk', vv, kk);
          return {
            label: kk.replace(/_/g, ' '),
            value: vv
          };
        });
        console.log('adjustedData', adjustedData);
        return { data: adjustedData };
      });

      console.log('Adjusted response data: ', this.response)

    });
    //Store data
    //Get keys from data
    //Adjust key text (replace _)
    // Iterate over response using only the keys
    // or iterate over an adjusted arrray


  }

  goBack() {
    this.navCtrl.push('JokePage', { back: true, joke: this.navParams.data.joke });
  }



}
