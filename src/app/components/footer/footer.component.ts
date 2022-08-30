import { Component, OnInit } from '@angular/core';
//import { ScreensizeService } from 'src/app/services/screensize.service';
import { Router, NavigationExtras } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController, ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  cates: any;
  isDesktop: boolean;
  logedIn: boolean = false;
  email: any;
  mobile:any;
  settings: any;address: any;
  
    slideOptsmob2 = {
    slidesPerView:1,
    pagination: true,
	autoplay: true,
    pager:true,
	spaceBetween:10
  };
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private callNumber: CallNumber,
	  private util: UtilService,
	  private api: ApisService,
    private modalController: ModalController
  ) {
	  /* 	this.screensizeService.isDesktopView().subscribe(isDesktop => {
      if (this.isDesktop && !isDesktop) {
        // Reload because our routing is out of place
		console.log(this.isDesktop);
        window.location.reload();
      }
 
      this.isDesktop = isDesktop;
    }); */
   // this.cates = this.navParam.get('data');
   if(sessionStorage.getItem('loginStatus') == "true"){ 
        this.api.isSignedIn = true;
        this.logedIn = this.api.isSignedIn;
      } else {
        //this.router.navigate(['/tabs/tab1']);  
        this.api.isSignedIn = false;
        this.logedIn = this.api.isSignedIn;
      }
  }
  
 
  ngOnInit(){
    this.api.getSettings().then(data => {
    this.settings = data[0];
	  this.address = this.settings.address;
    }).catch(error => {
      console.log(error);
    });  
  }

  packages(){
    this.router.navigate(['health-packages'])
  }

  offers(){
    this.router.navigate(['offers'])
  }
  
  health(){
    this.router.navigate(['/health-habits'])
  }
  
  risk(){
    this.router.navigate(['/risks'])
  }
  faq(){
    this.router.navigate(['/faq'])
  }
  refund(){
    this.router.navigate(['/refund'])
  }
  profile(){
    if(this.api.isSignedIn == true){
    this.router.navigate(['/profile']); 
   } else {
     this.util.showLoginAlert()
   }
  }
}
