import { IonicModule } from 'ionic-angular';
import { NgModule } from '@angular/core';

import { CustomHeader } from './custom-header/custom-header';

@NgModule({
  declarations: [
    CustomHeader
  ],
  imports: [
    IonicModule
  ],
  exports: [
    CustomHeader
  ]
})
export class ComponentsModule {}
