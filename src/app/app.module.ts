import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SwJokeProvider } from '../providers/sw-joke/sw-joke';
import { ShyriiwookServiceProvider } from '../providers/shyriiwook-service/shyriiwook-service';
import { LodashSampleComponent } from '../components/lodash-sample/lodash-sample';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LodashSampleComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwJokeProvider,
    ShyriiwookServiceProvider
  ]
})
export class AppModule {}
