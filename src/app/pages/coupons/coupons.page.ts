import { Component, OnInit } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController, MenuController } from '@ionic/angular';
import {parse, stringify, toJSON, fromJSON} from 'flatted';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.page.html',
  styleUrls: ['./coupons.page.scss'],
})
export class CouponsPage implements OnInit {
  list: any[] = [];
  societyId: any;
  society_name: any;
  total: any;
  dummy = Array(10);
  usedCoupon: any = [];
  labdata: any = [];
  cartdata: any = [];
  labid = "";
  constructor(
    private api: ApisService,
    private route: ActivatedRoute,
    private util: UtilService,
    private navCtrl: NavController,
	public menu: MenuController
  ) {
	  //this.menu.enable(false);
    this.getCoupon();
    this.getOffers();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(data => {
     
     this.labdata = localStorage.getItem('labid'); 
      this.cartdata = parse(localStorage.getItem('cartdata')); 
      this.labid = this.labdata;
     
    });
  }

  getCoupon() {
    const uid = sessionStorage.getItem('uid');
    this.api.getUsedCoupon(uid).then(data => {
      console.log('list=====>', data);
      if (data) {
       this.usedCoupon = data;
      }
    }).catch(error => {
      this.dummy = [];
      console.log(error);
    });
  }
  
  getOffers() {
    this.api.getOffers().then(data => {
      this.dummy = [];
      console.log('list=====>', data);
      this.list = [];
      if (data && data.length) {
        const currnetDate = moment().subtract(1, 'days').format('YYYY-MM-DD');
         console.log(currnetDate);
        data.forEach(element => {
          console.log(moment(element.expire).isAfter(currnetDate));
        /*  if (element && element.status == 1 && moment(element.expire).isAfter(currnetDate) && element.coupon_type == 'discount_on_bill') {*/
        if (element && element.status == 1 && moment(element.expire).isAfter(currnetDate) ) {
            console.log(element.branch);
             var lab_exist = 0;
             for(var x of element.branch){
              if(x.item_id == this.labid){
                lab_exist = 1;
              }
             }
             if(lab_exist == 1){
                this.list.push(element);  
             }
            console.log('yes=>', element);
            
          }
        });
        // this.list = data;
      }
    }).catch(error => {
      this.dummy = [];
      console.log(error);
    });
  }
  
  claim(item) {
    console.log(item);
    if (item && item.status == 1) {
    
      console.log(this.cartdata.selling_price+'>='+item.min);
     
        if (this.cartdata.selling_price >= item.min) {
          if(this.usedCoupon.length != 0) {
           const uid = sessionStorage.getItem('uid');
            console.log(uid,item.id)
            this.api.getUsedCouponById(uid,item.id).then((data) => {
              console.log(data)
              if(data && data.length) {
               if(data[0].used_coupon < item.limit) {
                  this.util.showToast('Coupon Applied', 'success', 'bottom');
                  this.util.publishCoupon(item);
                  this.navCtrl.back();
                } else {
                  console.log('hi')
                  this.util.errorToast('Coupon limits exceeded ' + item.limit);
              }
             } else {
                this.util.showToast('Coupon Applied', 'success', 'bottom');
                this.util.publishCoupon(item);
                this.navCtrl.back();
             }
            }).catch(err => {
              if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
              }
            });
       
      } else {
          console.log('coupon not empty')
          this.util.showToast('Coupon Applied', 'success', 'bottom');
          this.util.publishCoupon(item);
          this.navCtrl.back();
       }
      } else {
          this.util.errorToast('For claiming this coupon your order required minimum order  of ₹' + item.min);
        }
      // } else {
      //   this.util.errorToast('This coupon is not valid for ' + this.society_name);
      // }
    } else {
      this.util.errorToast('This coupon is not valid for ' + this.society_name);
    }
  }
  expire(date) {
    return moment(date).format('llll');
  }

  getCurrency() {
    return this.util.getCurrecySymbol();
  }
}
