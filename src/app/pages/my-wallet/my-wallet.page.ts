import { Component, OnInit } from "@angular/core";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: "app-my-wallet",
  templateUrl: "./my-wallet.page.html",
  styleUrls: ["./my-wallet.page.scss"],
})
export class MyWalletPage implements OnInit {
  balance: any = 0;
  wallet_money: any;
  profile: any;
  razor: any;
  currency_: any = "₹";
  payment: any;
  data: any;
  transactions: any = [];
  settings: any;
  constructor(
    private api: ApisService,
    private util: UtilService,
    private router: Router,
    private callNumber: CallNumber,
    private alertCtrl: AlertController) {
    localStorage.setItem("currency_symbol",this.currency_) 
    this.util.subscribeWalletStatus().subscribe(data => {
      // if (data) {
        console.log(data);
        this.ionViewWillEnter()
        console
      // }
    });
  }
  ngOnInit(){
    this.util.show('Please wait....')
    this.currency_ = localStorage.getItem("currency_symbol");
    this.api.getSettings().then(data => {
      this.settings = data[0];
      localStorage.setItem('contact_phone',this.settings.contact_phone)
    }).catch(error => {
      console.log(error);
    });  
  }
  ionViewWillEnter() {
    this.currency_ = localStorage.getItem("currency_symbol");
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
      this.balance =  this.wallet_money.amount;
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        // this.util.hide();
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
    this.api.getWalletTransactions(uid).then((data) => {
      this.util.hide();
      if(data && data.length != 0) {
      this.transactions = data; 
      console.log(this.transactions)
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.hide();
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  async call(){
    let mobile = localStorage.getItem('contact_phone');
      let alert = await this.alertCtrl.create({
      header: 'Confirm',
      message: '<strong>Are you sure you want to call way2lab Customer Care</strong>',
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

  bookingInfo(id){
    localStorage.setItem('bookingid',id);
    this.router.navigate(['/booking-detail']);
  }
}
