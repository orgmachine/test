import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ModalController,NavParams, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
import { ExternalLibraryService } from 'src/app/services/razorpay';
declare var Razorpay: any;

@Component({
  selector: 'app-insufficient',
  templateUrl: './insufficient.page.html',
  styleUrls: ['./insufficient.page.scss'],
})
export class InsufficientPage implements OnInit {
  wallet_balance: any;
  required_amount: any;
  currency_: any = "₹";
  phone: any;
  name: any;
  email: any;
  token: any;
  wallet_money: any;
  RAZORPAY_OPTIONS : any;
  response;
  razorpayResponse;
  showModal = false;
  createdAt: any;
  profile: any;
  url:any = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd"
  constructor(
  	public modalController: ModalController,
  	private api: ApisService,
    private util: UtilService,
    private navParams: NavParams,
    private razorpayService: ExternalLibraryService,
    private cd:  ChangeDetectorRef,
    private datePicker: DatePicker,
    private router: Router,
    public alertCtrl: AlertController
   ) {
    this.getWalletBalance();
    const date = new Date();
    this.createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    this.getProfile()
   }
   getWalletBalance() {
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
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

  ngOnInit() {
    console.table(this.navParams);
    this.wallet_balance = this.navParams.data.wallet_balance;
    this.required_amount = this.navParams.data.required_amount;
  }

  public makePay() {
    this.RAZORPAY_OPTIONS = {
      description: "Wallet Recharge",
      image: this.url,
      currency: environment.general.code, 
      key: environment.razorpay.api_key, 
      amount: this.required_amount * 100, 
      name: 'Way2Lab',
      prefill: {
        name: this.profile.name,
        email: this.profile.email,
        contact: this.profile.phone,
      },
      theme: {
        color: "#2ea2cc",
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
      amount: this.required_amount,
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
        let total_amount = this.required_amount + this.wallet_balance;
        console.log(total_amount)
         let post = {
          uid:uid,
          createdAt: this.createdAt,
          updatedAt: updatedAt,
          amount: total_amount,
        };
        this.api.addMoneyToWallet(uid,post).then((data) => {
          this.util.hide()

          this.util.showToast('Money added to wallet successfully', 'primary', 'bottom');
          this.closeModal('success');
        }).catch(err => {
        if (err) {
          this.util.hide()
          console.log(err);
          this.util.showToast(`${err}`, 'danger', 'bottom');
        }
      })
      }).catch(err => {
        if (err) {
          this.util.hide()
          console.log(err);
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

  async closeModal(data) {
    await this.modalController.dismiss(data);
  }

  async close() {
    await this.modalController.dismiss();
  }

  sendWalletNotification() {
    let title = 'Payment Complete'
    let msg = 'Thank you for your recent payment. You have successfully added ' + this.required_amount + ' rupees in your Aryavrat Wallet'
    this.api.sendNotification(title,msg,this.token).subscribe((data) => {
      console.log(data)
    }, error => {
        // this.util.hide();
        console.log('err', error);
    });
  }
}