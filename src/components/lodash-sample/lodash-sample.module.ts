import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LodashSampleComponent } from './lodash-sample';

@NgModule({
  declarations: [
    LodashSampleComponent,
  ],
  imports: [
    IonicPageModule.forChild(LodashSampleComponent),
  ],
  exports: [
    LodashSampleComponent
  ]
})
export class LodashSampleComponentModule {}
