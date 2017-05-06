import { InAppBrowser } from '@ionic-native/in-app-browser';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AboutPage } from './about';
import { ComponentsModule } from "../../components/components.modules";

@NgModule({
  declarations: [
    AboutPage,
  ],
  imports: [
    IonicPageModule.forChild(AboutPage),
    ComponentsModule,
  ],
  exports: [
    AboutPage
  ],
  providers: [
    InAppBrowser
  ]

})
export class AboutPageModule {}
