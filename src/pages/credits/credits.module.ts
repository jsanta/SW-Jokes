import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditsPage } from './credits';

import { ComponentsModule } from '../../components/components.modules';
import { InAppBrowser } from "@ionic-native/in-app-browser";

@NgModule({
  declarations: [
    CreditsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditsPage),
    ComponentsModule,
  ],
  exports: [
    CreditsPage
  ],
  providers: [
    InAppBrowser
  ]
})
export class CreditsPageModule {}
