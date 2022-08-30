import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { UpdateComponent } from 'src/app/components/update/update.component';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { environment } from 'src/environments/environment';
import { AddAddressPage } from '../add-address/add-address.page';
import * as moment from 'moment';
declare var RazorpayCheckout: any;

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage  implements OnInit{
  checkout:any;
  payment_type: any;
  url: any = "https://firebasestorage.googleapis.com/v0/b/avagro-8a44d.appspot.com/o/icon.png?alt=media&token=e1201b05-d449-42a1-8133-387af474393b"
  constructor(
    private api: ApisService,
    private util: UtilService,
    // public formBuilder: FormBuilder, 
    public modalController: ModalController
  ) {
    this.checkout = JSON.parse(localStorage.getItem('checkoutdata'))
    console.log(this.checkout)
  }

  ngOnInit() {
    // const uid = localStorage.getItem('uid');
    // this.api.getMyAddress(uid).then((data) => {
    //   if (data && data.length) {
    //     this.address = data;
    //     console.log(this.address)
    //   }
    // }, error => {
    //   console.log(error);
    // }).catch(error => {
    //   console.log(error);
    // });
  }

  // ionViewWillEnter() {
  //   const uid = localStorage.getItem('uid');
  //   this.api.getMemberByUId(uid).then((info) => {
  //      console.log(info)
  //      this.members = info;
  //   }).catch(err => {
  //     if (err) {
  //       console.log(err);
  //       this.util.showToast(`${err}`, 'danger', 'bottom');
  //     }
  //   });
  // }

  submit(){
    const uid = sessionStorage.getItem('uid');
    const date = new Date();
    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    const id = Math.floor(100000000 + Math.random() * 900000000);
    // let param = {
    //   uid:uid,
    //   address: this.selectedAddress,
    //   createdAt: created,
    //   booking_id: id.toString(),
    //   member_id: this.selectedMember,
    //   booking_date: this.booking_date,
    //   booking_time: this.booking_time,
    //   lab_id: this.cart.uid,
    //   coupon_code: '',
    //   discount_amount: '',
    //   gst: this.cart,
    //   mrp_price:this.mrp_price,
    //   discount_on_mrp: this.discount_on_mrp,
    //   total: this.total,
    //   grand_total: this.grand_total,
    //   status: 0,
    //   payment_type: this.payment_type,
    // }
  }

  // sendNotification() {
  //   let title = 'Thanks for shopping with us!'
  //   let msg = 'We received your subscription and will begin processing it soon. Please check your email and message for subscription related details.'
  //   this.api.sendNotification(title,msg,this.token).subscribe((data) => {
  //     console.log(data)
  //   }, error => {
  //       // this.util.hide();
  //       console.log('err', error);
  //   });
  // }
  // sendmail() {
  //   this.api.sendEmail().subscribe((data) => {
  //   console.log(data)
  //   }, error => {
  //       // this.util.hide();
  //       console.log('err', error);
  //   });
  // }
}