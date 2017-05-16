import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { SpyDirective } from "../../directives/spy/spy";
//import { CustomHeader } from './custom-header';

@NgModule({
  declarations: [
    //CustomHeader,    
  ],
  imports: [
	  IonicModule,
    SpyDirective
  ],
  exports: [
    //CustomHeader
  ]
})
export class CustomHeaderModule {}
