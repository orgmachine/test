import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController,AlertController } from '@ionic/angular';
import * as moment from 'moment';
@Component({
  selector: 'app-cancel',
  templateUrl: './cancel.page.html',
  styleUrls: ['./cancel.page.scss'],

})
export class CancelPage implements OnInit {
  reasons: any = [];
  booking_id: any;
  comment: any = '';
  isEnabled: boolean = false;
  order_detail: any;
  reason: any;
  phone: any = '';
  name: any = '';
  email: any = '';
  token: any = '';
  reason_text: any;
  coupon_code: any ='';
  coupon_details:any;
  used_coupon:any = 0;
  used_couponId:any;
  discount_amount:any=0;
  wallet_details:any;
  wallet_transId:any='';
  payment_type:any;
  grand_total:any;
  wallet_money:any;
  balance:any

  constructor(
    private api: ApisService,
    private router: Router,
    private util: UtilService,
    private navCtrl: NavController,
    private alertCtrl: AlertController,
    private route: ActivatedRoute,
    ) {
      this.booking_id = localStorage.getItem('bookingid')
      console.log(this.booking_id)
      this.getOrder(this.booking_id);
   }

  getOrder(id){
    console.log(id)
    this.api.getBookingById(id).then(data => {
      console.log(data)
      this.order_detail = data[0];
      this.payment_type = this.order_detail.payment_type;
      this.grand_total = this.order_detail.grand_total;
      if(this.payment_type == 'Wallet'){
        this.getWalletBalance();
      // console.log(this.payment_type);
      }
      if(this.order_detail.coupon_code !=''){
        this.coupon_code = this.order_detail.coupon_code;
        this.discount_amount = this.order_detail.discount_amount;
        this.payment_type = this.order_detail.payment_type;
        console.log('discount_amount',this.discount_amount)
        this.getUsedCoupon(this.coupon_code);
        if(this.discount_amount ==0 ){
          this.getWalletTransactions(this.booking_id);
        }
      }

    }).catch(error => {
      console.log(error);
    });
  }

  getUsedCoupon(couponCode){
    
    const uid = sessionStorage.getItem('uid');
    this.api.getUsedCouponByCouponCode(uid,couponCode).then(data => {
     
      if(data){
         console.log('coupon_code',data)
         this.coupon_details = data[0];
         this.used_couponId = this.coupon_details.id;
         this.used_coupon = this.coupon_details.used_coupon-1;
      }
     

    }).catch(error => {
      console.log(error);
    });
  }

  coupon(){
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
    let params =  {
        id: this.used_couponId,
        used_coupon: this.used_coupon,
        createdOn:createdAt
      }
    this.api.addUsedCoupon(this.used_couponId.toString(),params).then((data) => {
      console.log(data)
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  getWalletTransactions(booking_id){
    const uid = sessionStorage.getItem('uid');
    this.api.getWalletTransactionsByBooking(uid,booking_id).then(data => {
     
      if(data){
         console.log('booking_id',data)
         this.wallet_details = data[0];
         this.wallet_transId = this.wallet_details.id;
        
      }
     

    }).catch(error => {
      console.log(error);
    });
  }

  

  updateWalletTransactions(){
    const date = new Date();
    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
    const uid = sessionStorage.getItem('uid');
    let params =  {};
    if(this.payment_type == 'Wallet'){

    const id = Math.floor(100000000 + Math.random() * 900000000);
    this.wallet_transId = id;
     params =  {
      booking_id: this.booking_id,
      id: id.toString(),
      status: 'success',
      createdAt: createdAt,
      amount: this.grand_total,
      uid: uid,
      type: 'Credit'
     }
    }else{
       params =  {
        id: this.wallet_transId,
        status: 'cancel',
        createdAt:createdAt
      }
    }
    
    console.log('wallet',params);
     this.api.addWalletTransaction(this.wallet_transId.toString(),params).then((data) => {
      console.log(data)
     }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  getWalletBalance() {
    const uid = sessionStorage.getItem('uid');
    this.api.getWallet(uid).then((data) => {
      if(data && data.length != 0) {
      this.wallet_money = data[0]; 
      this.balance =  this.wallet_money.amount;
    
    }
    }).catch(err => {
      if (err) {
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  ngOnInit(){
    this.api.remarks().then(data => {
      this.reasons = data;
      console.log(this.reasons)
    }).catch(error => {
      console.log(error);
    });
    const uid = sessionStorage.getItem('uid');
    this.api.getMyProfile(uid).then((data) => {
      console.log('my profile', data);
      if (data) {
        console.log(data)
        this.phone = data.phone;
        this.name = data.name;
        this.email = data.email;
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

  select(id,text){
    this.reason = id;
    this.reason_text = text;
    this.isEnabled = true;
  }

  submit(){
    this.util.show('Please wait....')
    const date = new Date();
    const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
     let param = {};
    if(this.payment_type == 'Online'){
       param = {
        status: 4,
        updatedAt: updatedAt,
        reason: this.reason,
        remark: this.comment
      }
    }else{
        param = {
        status: 7,
        updatedAt: updatedAt,
        reason: this.reason,
        remark: this.comment
      }
    }
   
    this.api.updateBooking(this.booking_id,param).then((data) => {
      this.util.publishOrderStatus('true');
      this.util.hide();
      this.sendCancelOrderSMS();
      if(this.coupon_code !=''){
        this.coupon();
      }

      if(this.wallet_transId !='' || this.payment_type == 'Wallet'){
        this.updateWalletTransactions();
      }

      if(this.payment_type == 'Wallet'){
        this.updateMonyToWallet();
      }
      
      this.util.showToast('Your booking cancelled successfully', 'primary', 'bottom');
      //this.navCtrl.back();
	  this.router.navigate(['/bookings']);
     }).catch(err => {
      if (err) {
        this.util.hide();
        console.log(err);
        this.util.showToast(`${err}`, 'danger', 'bottom');
      }
    });
  }

  updateMonyToWallet(){
     const uid = sessionStorage.getItem('uid');
     let total_amount = this.grand_total + this.balance;
       let post = {
        uid:uid,
        amount: total_amount,
      };
    this.api.addMoneyToWallet(uid,post).then((data) => {
            
        }).catch(err => {
          if (err) {
            this.util.hide();
            console.log(err);
            this.util.showToast(`${err}`, 'danger', 'bottom');
          }
        })
  }

  

  sendCancelOrderSMS(){
    let url = 'https://demo.orgmachine.com/way2lab_sms/cancel_order.php?orderid='+ this.booking_id +'&mobile=' + this.phone +'&name=' + this.name
    console.log(url)
    this.api.sendSms(url).subscribe((data) => {
      console.log(data)
    }, error => {
        // this.util.hide();
        console.log('err', error);
    });
  }

  // sendNotification() {
  //   let title = 'Hi '+this.name+' your order #'+this.order_id+' has been cancelled'
  //   let msg = 'We have received your order cancellation request. Please check your email and message for order related details.'
  //   this.api.sendNotification(title,msg,this.token).subscribe((data) => {
  //     console.log(data)
  //   }, error => {
  //       // this.util.hide();
  //       console.log('err', error);
  //   });
  // }
}