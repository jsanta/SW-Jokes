import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JokePage } from './joke';
import { ComponentsModule } from "../../components/components.modules";
import { ShyriiwookPipe } from "../../pipes/shyriiwook/shyriiwook";

@NgModule({
  declarations: [
    JokePage,
    ShyriiwookPipe
  ],
  imports: [
    IonicPageModule.forChild(JokePage),
    ComponentsModule,
  ],
  providers: [],
  exports: [
    JokePage
  ]
})
export class JokePageModule {}
