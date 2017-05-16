import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalScopeService } from "../global-scope-service/global-scope-service";
import { Subscription } from "rxjs/Subscription";

/*
  Generated class for the SwApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SwApiServiceProvider {
  private baseUrl: string = 'http://swapi.co/api/';
  private data: any;
  private wookiee: string;
  private wookiee$: Subscription;

  constructor(public http: Http, private rootScope: GlobalScopeService) {    
    this.wookiee  = (this.rootScope.getItem('chewieMode')) ? '?format=wookiee' : '';
    if(this.rootScope.getItem('chewieMode') === undefined) {
      this.rootScope.setItem('chewieMode', false);
    }
    this.wookiee$ = this.rootScope.watch('chewieMode').subscribe(chewie => {      
      this.wookiee = (!!chewie && chewie.value) ? 'format=wookiee' : '';
    });
  }

  retrieveData(queryUrl) {
    // if (this.data) {
    //   // already loaded data
    //   return Promise.resolve(this.data);
    // }

    // don't have the data yet
    return new Promise(resolve => {
      // We're using Angular HTTP provider to request the data,
      // then on the response, it'll map the JSON data to a parsed JS object.
      // Next, we process the data and resolve the promise with the new data.
      let and: string = (this.wookiee !== '') ? (queryUrl.indexOf('?') !== -1) ? '&' : '?' : '';
      this.http.get(this.baseUrl + queryUrl + and + this.wookiee)
        .map(res => {           
          let responseString = res['_body'];
          if(responseString.indexOf('whhuanan') !== -1 || responseString.indexOf('rcwochuanaoc') !== -1){            
            let newResponse = responseString.replace(/whhuanan/g, 'null');
            newResponse = newResponse.replace(/rcwochuanaoc/g, 'results');  
            newResponse = newResponse.replace(/\\/g, '');            
            return JSON.parse(newResponse);
          } else {
            return res.json() 
          }          
        })
        .subscribe(data => {
            // we've got back the raw data, now generate the core schedule data
            // and save the data for later reference
            this.data = data;
            resolve(this.data);
          }); 
    });
  }

}

