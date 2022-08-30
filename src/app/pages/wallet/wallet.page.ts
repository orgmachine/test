import { Component, OnInit, ChangeDetectorRef } from "@angular/core";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { ExternalLibraryService } from 'src/app/services/razorpay';
declare var Razorpay: any;

@Component({
  selector: "app-wallet",
  templateUrl: "./wallet.page.html",
  styleUrls: ["./wallet.page.scss"],
})
export class WalletPage implements OnInit {
  balance: any = 0;
  currency: string;
  amount: any;
  profile: any;
  razor: any;
  card: any;
  payment_token: any;
  currency_: any = "₹";
  payment: any;
  data: any;
  activeAmount: any = 1000;
  phone: any;
  name: any;
  email: any;
  token: any;
  wallet_money: any;
  createdAt: any;
  RAZORPAY_OPTIONS : any;
  razorpayResponse;
  showModal = false;
  url:any = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd"
  constructor(    
    private api: ApisService,
    private util: UtilService,
    public router: Router,
    private razorpayService: ExternalLibraryService,
    private cd:  ChangeDetectorRef) {
    this.razorpayService
      .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
      .subscribe();
    this.getWalletBalance();
    this.getProfile();
    const date = new Date();
    this.createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
  }
  amounts = [
    100,
    200,
    500,
    1000,
    2000,
    5000,
    10000,
    20000
  ]
   setStateAsActive(amount) {
    this.activeAmount = amount;
  }
  ngOnInit(){

  }

  getWalletBalance() {
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
      this.balance =  this.wallet_money.amount;
      this.createdAt = this.wallet_money.createdAt;
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  getProfile() {
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      console.log('my profile', data);
      if (data) {
        console.log(data)
        this.profile = data;
        // this.phone = data.phone;
        // this.name = data.name;
        // this.email = data.email;
        this.token = data.fcm_token;
        if (this.name == undefined){
          this.email = '';
        } else {
          console.log('trigger else')
        }
      }
    }, error => {
      console.log(error);
    }).catch(error => {
      console.log(error);
    });
  }

  public proceed() {
    this.RAZORPAY_OPTIONS = {
      description: "Wallet Recharge",
      image: this.url,
      currency: environment.general.code, 
      key: environment.razorpay.api_key, 
      amount: this.activeAmount * 100, 
      name: 'Way2Lab',
      prefill: {
        name: this.profile.name,
        email: this.profile.email,
        contact: this.profile.phone,
      },
      theme: {
        color: "#2C69A5",
      },
      modal: {
        ondismiss: function () {
          alert("dismissed");
        },
      },
    };
    console.log(this.RAZORPAY_OPTIONS);
    
    //this.RAZORPAY_OPTIONS.amount = 100 + '00';

    // binding this object to both success and dismiss handler
    this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);

    // this.showPopup();

    let razorpay = new Razorpay(this.RAZORPAY_OPTIONS)
    razorpay.open();
  }

  public razorPaySuccessHandler(response) {
    console.log(response);
    if(response.razorpay_payment_id)
      {
        this.razo(response.razorpay_payment_id);
       } else {
        this.util.showToast("Some error occured !!", 'danger', 'bottom');
      }
    this.razorpayResponse = 'Razorpay Response';
    this.showModal = true;
    this.cd.detectChanges()
    document.getElementById('razorpay-response').style.display = 'block';
  }


  // makePay() {
  //   var options = {
  //     description: "Wallet Recharge",
  //     image: this.url,
  //     currency: environment.general.code, 
  //     key: environment.razorpay.api_key, 
  //     amount: this.activeAmount * 100, 
  //     name: this.name,
  //     theme: {
  //       color: "#2C69A5",
  //     },
  //     modal: {
  //       ondismiss: function () {
  //         alert("dismissed");
  //       },
  //     },
  //   };

  //   var successCallback = (payment_id) => {
  //     localStorage.setItem("paymentRazor", payment_id);
  //     this.razo('success');
  //   };

  //   var cancelCallback = (error) => {
  //     // this.razo('failed');
  //     this.util.showToast("Sorry ! Payment not Posible With RazorPay", 'danger', 'bottom');
  //   };

  //   RazorpayCheckout.open(options, successCallback, cancelCallback);
  // }
  
  razo(payment_id) {
    this.util.show('Please wait....')
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    let param =  {
      transactionid: payment_id,
      id: id.toString(),
      status: 'success',
      createdAt: createdAt,
      amount: this.activeAmount,
      uid: uid,
      type: 'Wallet'
    }
    
    this.api.addTransaction(id.toString(),param).then((data) => {
      console.log(data)
      this.api.addWalletTransaction(id.toString(),param).then((userData) => {        
          const uid = sessionStorage.getItem('uid');
          const date = new Date();
          const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
          const id = Math.floor(100000000 + Math.random() * 900000000);
          let total_amount = this.activeAmount + this.balance;
           let post = {
            uid:uid,
            createdAt: this.createdAt,
            updatedAt: updatedAt,
            amount: total_amount,
          };
          this.api.addMoneyToWallet(uid,post).then((data) => {
            this.util.hide();
            this.util.showToast('Money added to wallet successfully', 'primary', 'bottom');
            this.getWalletBalance();
            this.util.publishWalletStatus(true);
            this.sendWalletNotification();
            // this.router.navigate(['/tabs/tab1']);
          }).catch(err => {
          if (err) {
            this.util.hide();
            console.log(err);
            this.util.showToast(`${err}`, 'danger', 'bottom');
          }
        })
    }).catch(err => {
      this.util.hide();
      if (err) {
        this.util.hide()
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.hide()
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }
  
  update() {
    this.router.navigate(['/tabs/tab1']);
  }

  sendWalletNotification() {
    let title = 'Payment Complete'
    let msg = 'Thank you for your recent payment. You have successfully added ' + this.activeAmount + ' rupees in your Way2Lab Wallet'
    this.api.sendNotification(title,msg,this.token).subscribe((data) => {
      console.log(data)
    }, error => {
        // this.util.hide();
        console.log('err', error);
    });
  }
}
