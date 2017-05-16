import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { SwJokeProvider } from '../providers/sw-joke/sw-joke';
import { SwApiServiceProvider } from '../providers/sw-api-service/sw-api-service';
import { GlobalScopeService } from '../providers/global-scope-service/global-scope-service';
import { SpyDirective } from '../directives/spy/spy';
import { ShyriiwookPipe } from '../pipes/shyriiwook/shyriiwook';

@NgModule({
  declarations: [
    MyApp,
    SpyDirective,    
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SwJokeProvider,
    SwApiServiceProvider,
    GlobalScopeService
    
  ]
})
export class AppModule {}
