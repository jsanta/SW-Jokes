import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoreInfoPage } from './more-info';
import { SwApiServiceProvider } from "../../providers/sw-api-service/sw-api-service";
import { ComponentsModule } from "../../components/components.modules";

@NgModule({
  declarations: [
    MoreInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MoreInfoPage),
    ComponentsModule
  ],
  exports: [
    MoreInfoPage
  ],
  providers: [
    SwApiServiceProvider
  ]
})
export class MoreInfoPageModule {}
