import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { JokePage } from './joke';
import { ComponentsModule } from "../../components/components.modules";
import { SwJokeProvider } from "../../providers/sw-joke/sw-joke";

@NgModule({
  declarations: [
    JokePage,
  ],
  imports: [
    IonicPageModule.forChild(JokePage),
    ComponentsModule,
  ],
  providers: [
    SwJokeProvider
  ],
  exports: [
    JokePage
  ]
})
export class JokePageModule {}
