import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ShyriiwookServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShyriiwookServiceProvider {

  constructor(public http: Http) {
    console.log('Hello ShyriiwookServiceProvider Provider');
  }

}
