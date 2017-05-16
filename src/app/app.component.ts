import { Component, ViewChild, EventEmitter, Output } from '@angular/core';
import { Platform, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { GlobalScopeService } from "../providers/global-scope-service/global-scope-service";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: string = 'SplashPage';  
  @ViewChild('content') nav: NavController;

  public isJedi: boolean;
  private isJedi$: any;
  public affiliation: string;
  public affiliationImg: string;  

  constructor(private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen, private rootScope: GlobalScopeService) {
    this.initializeApp();    
  }
  private affiliationCount: number = 0;

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      //this.statusBar.styleBlackTranslucent();
      this.statusBar.backgroundColorByHexString('#222');

      // If using Crosswalk add <meta name="theme-color" content="#222222"> to index (or change color)
      // Ref.: https://forum.ionicframework.com/t/ionic2-rc0-and-ionic2-rc1-plugin-statusbar-not-working-in-android-with-crosswalk/66449/24

      // http://stackoverflow.com/questions/41544016/white-screen-after-splashscreen-ionic2-android-device
      // Ref.: http://www.codingandclimbing.co.uk/blog/ionic-2-fix-splash-screen-white-screen-issue/
      setTimeout(() => { 
        this.splashScreen.hide(); 
      }, 10);      

      this.nav.swipeBackEnabled = false;
          
      this.isJedi  = this.rootScope.getItem('isJedi');
      try {
        // jedi, sith, none
        this.affiliation = this.rootScope.getItem('affiliation');
        switch(this.affiliation) {
          case 'jedi':
            this.isJedi = true;
            this.affiliation = 'jedi';
            this.affiliationImg = 'kenobi';
            break;
          case 'sith':
            this.isJedi = false;
            this.affiliation = 'sith';
            this.affiliationImg = 'vader';
            break;
          case 'none':
            this.isJedi = undefined;
            this.affiliation = 'none';
            this.affiliationImg = 'boba';
            break;
          default:
            console.log('No affiliation. Defaulting value');
            this.isJedi = undefined;
            this.affiliation = 'none';
            this.affiliationImg = 'boba';
        }
        
      } catch(err) {
          console.error('ERROR, Could not retrieve affiliation', err);
          this.isJedi = undefined;
          this.affiliation = 'none';
          this.affiliationImg = 'boba';
      }

      if(this.isJedi !== undefined){
         this.rootScope.setItem('isJedi', this.isJedi);
      } else {
        this.rootScope.clearItem('isJedi');
      }
      this.rootScope.setItem('affiliation', this.affiliation);
      this.rootScope.setItem('affiliationImg', this.affiliationImg); 

      this.isJedi$ = this.rootScope.watch('isJedi').subscribe(variable => {         
        this.isJedi = (variable != undefined) ? variable.value : undefined;             
      });           

    });
  }

  openPage(page) {
    this.nav.setRoot(page);
  }

  changeAffiliation() {
    
    this.affiliationCount++;
    switch (this.affiliationCount){
      case 1:
        this.affiliationImg = 'kenobi';
        this.affiliation = 'jedi';
        this.isJedi = true;
        break;
      case 2:
        this.affiliationImg = 'vader';
        this.affiliation = 'sith';
        this.isJedi = false;
        break;
      default:
        this.affiliationImg = 'boba';
        this.affiliation = 'none';  
        this.isJedi = undefined;   
        this.affiliationCount = 0;
    }

    this.rootScope.setItem('isJedi', this.isJedi);
    this.rootScope.setItem('affiliation', this.affiliation);
    this.rootScope.setItem('affiliationImg', this.affiliationImg);

    
  }

  exitApp() {
    console.log("exitApp");
    this.platform.exitApp();
  }

}


