import { Component } from '@angular/core';
import * as _ from 'lodash';

/**
 * Generated class for the LodashSampleComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  // selector: 'lodash-sample',
  // templateUrl: 'lodash-sample.html'
})
export class LodashSampleComponent {

  // text: string;

  // constructor() {
  //   console.log('Hello LodashSampleComponent Component');
  //   this.text = 'Hello World';
  // }

  ngOnInit() {
    console.log('lodash version:', _.VERSION);
  }

}
