import { Component, OnInit } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit{
  email: any;
  mobile:any;
  isLogin: any;
  settings: any;
  constructor(
    private route: ActivatedRoute,
    public router: Router,
    private alertCtrl: AlertController,
    private emailComposer: EmailComposer,
    private callNumber: CallNumber,
    private util: UtilService,
    private api: ApisService,
	public menu: MenuController
    ) { 
	this.menu.enable(false);
  }

   ngOnInit(){
      this.api.getSettings().then(data => {
      this.settings = data[0];
      this.mobile = this.settings.contact_phone;
      this.email = this.settings.contact_email;
    }).catch(error => {
      console.log(error);
    });  
  }

  ionViewWillEnter(){
      this.isLogin = sessionStorage.getItem('loginStatus');
  }

  mail(){
    let email = {
    to: this.email,
    subject: 'Support',
    // body: 'How are you? Nice greetings from Leipzig',
    isHtml: true
  }
  // Send a text message using default options
  this.emailComposer.open(email);
 }
  async call(){
    let mobile = localStorage.getItem('mobile');
      let alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: '<strong>Are you sure you want to call Aryavrat Agro</strong>',
      mode:'ios',
      buttons: [
      {
        text: 'No',
        cssClass: 'exit-button',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
       },
        {
          text: 'Yes',
          cssClass: 'login-button',
          handler: () => {
            let number = mobile;
            try{
              this.callNumber.callNumber(number, true)
              console.log('Opened dialer');
            }
            catch(e){
              console.error(e || 'Error in launching dialer')
            }
          }
        }
        ]
      });
    alert.present();
  }
  
  report(){
    if(this.isLogin=='true'){
      this.router.navigate(['/support']);
      } else {
        console.log('else')
        this.util.showLoginAlert();
    } 
 }

  faqs(){
   this.router.navigate(['/faqs']);
  }
}