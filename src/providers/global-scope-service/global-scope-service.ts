import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Injectable } from "@angular/core";
import * as _ from 'lodash';
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs/Observable";
import { Subscriber } from "rxjs/Subscriber";

/*
  Generated class for the GlobalScopeServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
// Ref.: https://coryrylan.com/blog/angular-observable-data-services
// Most logic based on http://stackoverflow.com/questions/34434057/angular-2-x-watching-for-variable-change
export interface Data {
  key: string,
  value: any
}

@Injectable()
export class GlobalScopeService { 

  private keyIndex: any;
  private dataArray: Array<BehaviorSubject<Data>>; 
  private dataObservables: Array<Observable<any>>;

  constructor() {    
    this.keyIndex = {};
    this.dataArray = [];
    this.dataObservables = [];
  }

  // TODO Use Ionic Cache
  // Ref. :https://github.com/Nodonisko/ionic-cache
  setItem(key: string, data:any) {
      let dataObj: Data = {
        key: key,
        value: data
      };
      let idx: number;

      if(_.find(this.dataArray, { value: { key: key } }) === undefined) {
        let changeSubject = new BehaviorSubject<any>(dataObj);        
        this.dataArray.push(changeSubject);
        this.dataObservables.push(changeSubject.asObservable());

        idx = this.dataArray.length - 1;
        this.keyIndex[key] = idx;        
      } else {
        idx = this.keyIndex[key];               
      }             
      this.dataArray[idx].next(dataObj); 

  }

  getItem(key: string): any {
    let idx: number = this.keyIndex[key];    
    return (!!this.dataArray[idx]) ? this.dataArray[idx].value.value : undefined;  
  }

  clearItem(key: string) {    
    this.setItem(key, undefined);
  }

  getAll() {
    return _.map(this.dataArray, (v) => { return v.value; });
  }

  watch(variable: string): any {
    let idx: number = this.keyIndex[variable];    
    try{ 
      // let watchVar: Observable<any> =  this.dataObservables[idx];
      // return watchVar;
      return this.dataArray[idx].asObservable();
    } catch(err) {
      throw new Error('Variable ' + variable + ' not present. Try setItem("' + variable + '", this.' + variable + ') first.');
    }
    
  }

  unWatch(variable: string): void {
    console.log('unWatch ', variable);
    let idx: number = this.keyIndex[variable];    
    try{ 
      let dataValue = this.dataArray[idx].value;
      this.dataArray[idx].next(dataValue); 
      this.dataArray[idx].complete(); 
    } catch(err) {
      throw new Error('Variable ' + variable + ' not present. Try setItem("' + variable + '", this.' + variable + ') first.');
    }
  }

}
