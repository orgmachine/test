import { Component, OnInit,ViewChild, ElementRef } from '@angular/core';
//import { ScreensizeService } from 'src/app/services/screensize.service';
import { Router, NavigationExtras } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { BehaviorSubject } from 'rxjs';
import { IonSelect } from '@ionic/angular';
import * as $ from "jquery";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cities: any = [];
  cates: any;
  isDesktop: boolean;
  logedIn: boolean = false;
  settings:any;
  city: any = '';
  habbits: any = [];
  risks: any = [];
  showCity: boolean = false;
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private callNumber: CallNumber,
	  private util: UtilService,
	  private api: ApisService
  ) {
          this.getCities();
    this.util.subscribeCityLocation().subscribe(data => {
       console.log('after trigger',data)
        this.showCity = true;
        this.city = data;
        localStorage.setItem('city',this.city)
		
      // setTimeout(() => {
      //      console.log('after trigger',data)
      //   this.showCity = true;
      //   this.city = data;
      //   localStorage.setItem('city',this.city)
      // }, 500);
    });
	  this.util.subscribeLoggedInStatus().subscribe(data => {
      console.log(data)
      this.api.isSignedIn = true;
      this.logedIn = this.api.isSignedIn;
      console.log(this.logedIn)
    });
       if(sessionStorage.getItem('loginStatus') == "true"){ 
        this.api.isSignedIn = true;
        this.logedIn = this.api.isSignedIn;
      } else {
        //this.router.navigate(['/tabs/tab1']);  
        this.api.isSignedIn = false;
        this.logedIn = this.api.isSignedIn;
      }

  }
  //ngAfterViewInit(){}
/*   ngAfterViewInit(){

$(document).ready(function(){

 //alert('JQuery is working!!');

 });

 } */

  getCities(){ 
    this.api.getCities().then((data) => {
    this.cities = data;
	  this.cities.sort((a, b) => a.city.localeCompare(b.city))
    this.city = localStorage.getItem('city');
    console.log(this.cities)
    }).catch(error => {
      console.log(error);
    });
  }

  selectCity(data){
    console.log(data)
    this.city = data;
    this.util.publishCityLocation(this.city);
  }
  
 
  ngOnInit() {
    this.api.getSettings().then(data => {
    this.settings = data[0];
    }).catch(error => {
      console.log(error);
    });
    this.api.getHealthHabbits().then(data => {
      this.habbits = data;
    }).catch(error => {
      console.log(error);
    }); 
    this.api.getHealthRisk().then(data => {
      this.risks = data;
    }).catch(error => {
      console.log(error);
    }); 
  } 

  packages(){
    this.router.navigate(['health-packages'])
  }

  cart(){
    this.router.navigate(['cart'])
  }

  offers(){
    this.router.navigate(['offers'])
  } 
  corporate(){
    this.router.navigate(['corporate'])
  }
  
  viewRisk(data){
    localStorage.setItem('riskid',data.id)
    this.router.navigate(['risk',data.name])
  }
  viewHabit(data){
    localStorage.setItem('habitid',data.id)
    this.router.navigate(['habit',data.name])
  }
  
  faq(){
    this.router.navigate(['/faq'])
  }

  home(){
    this.router.navigate(['/home'])
  }

  
  profile(){
    if(this.api.isSignedIn == true){
    this.router.navigate(['/profile']); 
    } else {
     this.util.showLoginAlert()
    }
  }
  
  onClick(data){
    console.log(data)
    this.router.navigate([data]); 
  }


  openQuery(){
    this.util.publishQuery('true');
  }

  search(){
    this.router.navigate(['search'])
  }

  login(){
    this.router.navigate(['login']); 
  }
  
  logout(){
    this.api.logout().then((data) => {
      sessionStorage.setItem('loginStatus', "false");
      this.api.isSignedIn = false;
      sessionStorage.setItem('uid', '')
      this.router.navigate(['home']);
    }).catch(error => {
      console.log(error);
    });
  }
  uploadPrescription(){
    this.router.navigate(['add-prescription']); 
  }
}
