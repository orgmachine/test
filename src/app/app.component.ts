import { Component, QueryList, ViewChildren, HostListener  } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { IonRouterOutlet, Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/util.service';
import { Location } from '@angular/common';
import { ScreensizeService } from 'src/app/services/screensize.service';
import { Geolocation, GeolocationOptions, Geoposition, PositionError } from '@ionic-native/geolocation/ngx';
declare var google;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  currentPageTitle = 'Dashboard';
  logedIn: boolean = false;
  shareAppUrl: any;
  rateAppUrl: any;
  selectedIndex:any;
  isHabit: boolean = false;
  isRisk: boolean = false;
  habbits: any = [];
  risks: any = [];
  isDesktop: boolean;
  constructor(
    private platform: Platform,
    public geolocation: Geolocation,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    private api: ApisService,
    private oneSignal: OneSignal,
    private translate: TranslateService,
    private _location: Location,
    private util: UtilService,
    private alertController:AlertController,
	private screensizeService: ScreensizeService,
    public menu: MenuController
  ) {
 this.menu.enable(false);

    if(sessionStorage.getItem('loginStatus') == "true"){ 
        this.api.isSignedIn = true;
        this.logedIn = this.api.isSignedIn;
      } else {
        // this.router.navigate(['/home']);  
        this.api.isSignedIn = false;
        this.logedIn = this.api.isSignedIn;
      }
      this.util.subscribeLoggedInStatus().subscribe(data => {
      if (data) {
        console.log(data);
       this.logedIn = true;
      }
    });
    this.api.getHealthHabbits().then(data => {
      this.habbits = data;
      console.log(this.habbits)
    }).catch(error => {
      console.log(error);
    }); 
    this.api.getHealthRisk().then(data => {
      this.risks = data;
      console.log(this.risks)
    }).catch(error => {
      console.log(error);
    }); 
    this.initializeApp();
		this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
		 console.log(this.isDesktop);
        window.location.reload();
      }
 
      this.isDesktop = isDesktop;
	  this.util.publishBadge(this.isDesktop);


	   console.log(this.isDesktop);
    });
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // window.console.warn = function(){};
      // window.console.error = function(){};
      // window.console.log = function(){};
      // window.console.exception = function(){}; 
      this.splashScreen.hide();
	  this.screensizeService.onResize(this.platform.width());
    });
  }
    @HostListener('window:resize', ['$event'])
  public onResize(event) {
    this.screensizeService.onResize(event.target.innerWidth);
  }
 
  openHabits(){
    this.isHabit = !this.isHabit;
  }

  openRisk(){
    this.isRisk = !this.isRisk;
  }

  viewRisk(data){
    localStorage.setItem('riskid',data.id)
    this.router.navigate(['risk',data.name])
  }
   home(){
    this.router.navigate(['/home'])
  }

  corporate(){
    this.router.navigate(['corporate'])
  }
  
  faq(){
    this.router.navigate(['/faq'])
  }

  viewHabit(data){
    localStorage.setItem('habitid',data.id)
    this.router.navigate(['habit',data.name])
  }
}
