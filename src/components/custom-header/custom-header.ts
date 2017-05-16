import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AlertController, Toggle, NavController, Events } from "ionic-angular";
import { GlobalScopeService } from "../../providers/global-scope-service/global-scope-service";
import { Subscription } from "rxjs/Subscription";
import { Subject } from "rxjs/Subject";
import 'rxjs/add/operator/takeUntil';

/**
 * Generated class for the CustomHeader component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'custom-header',
  templateUrl: 'custom-header.html'
})
export class CustomHeader implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();  

	@Input('appName') appName: string;
  @Input('pageTitle') pageTitle: string;
  
  chewie : boolean = false;  
  isJedi : boolean;
  isJedi$: Subscription;
  chewie$: Subscription;
  
  constructor(private nav: NavController, private alertCtrl: AlertController, private rootScope: GlobalScopeService,
    private events: Events) {    
      console.log('customHeader constructor');
  }

  ngOnInit(): void {
    console.log('customHeader ngInit');
    //this.initializeEventHandlers();

    this.isJedi = this.rootScope.getItem('isJedi');
    if (this.isJedi !== undefined) {
      this.rootScope.setItem('isJedi', this.isJedi);
    } else {
      this.rootScope.clearItem('isJedi');
    }    

    this.chewie = this.rootScope.getItem('chewieMode');
    if(this.rootScope.getItem('chewieMode') === undefined) {      
      this.chewie = false;
      this.rootScope.setItem('chewieMode', this.chewie);
    }       

    // ref.: http://stackoverflow.com/questions/38008334/angular2-rxjs-when-should-i-unsubscribe-from-subscription      
      
    this.isJedi$ = this.rootScope.watch('isJedi')     
    .takeUntil(this.ngUnsubscribe)     
    .subscribe(variable => {        
      this.isJedi = (variable != undefined) ? variable.value : undefined; 
      console.log('isJedi watcher ', variable);          
    });
  
  
    this.chewie$ = this.rootScope.watch('chewieMode')    
    .takeUntil(this.ngUnsubscribe)     
    .subscribe(chewie => {              
      this.chewie = (chewie != undefined) ? chewie.value : false;  
      console.log('chewie watcher ', chewie);             
    });
      
  }
  ngOnDestroy(): void {  
    console.log('customHeader ngOnDestroy');  
    // this.rootScope.unWatch('isJedi');
    // this.rootScope.unWatch('chewieMode');

    this.isJedi$.unsubscribe();
    this.chewie$.unsubscribe();
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  chewieMode(chewie: Toggle) {    
    this.chewie = chewie.value;
    this.rootScope.setItem('chewieMode', this.chewie);
    if(this.chewie) {
      this.presentAlert();
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Chewie mode ON',
      message: 'Rrrrugh arah-ah-woof?',
      buttons: [{
          text: 'OK',
          handler: () => {          
            alert.dismiss();
            return false;
          }
        }]
    });
    alert.present();
  }
  
  private alreadyLeft: boolean = false;
  private initializeEventHandlers() {  

    console.log('Channels: ', this.events['_channels']);
    console.log('Event functions', this.events['_channels']['page:didleave']);

    //if(!!this.events['_channels'] && this.events['_channels']['page:didleave'] === undefined){
        if(!this.alreadyLeft){
          this.events.subscribe('page:didleave', () => {
            if(!this.alreadyLeft) {
              console.log('Captured page:didleave', this); 
              this.events.unsubscribe('page:didLeave', () => {
                console.log('Event unsubscribed');
                this.alreadyLeft = true;
              });                   
              this.isJedi$.unsubscribe();
              this.chewie$.unsubscribe();             
            } else {
              console.log('Already left, this shouldn\'t happen');
              this.alreadyLeft = true;
            }
          });
        }
        
    //}   

  }

}
