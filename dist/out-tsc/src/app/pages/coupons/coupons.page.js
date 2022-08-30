import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController } from '@ionic/angular';
let CouponsPage = class CouponsPage {
    constructor(api, route, util, navCtrl) {
        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.list = [];
        this.dummy = Array(10);
        this.usedCoupon = [];
        this.getCoupon();
        this.getOffers();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.societyId) {
                this.societyId = data.societyId;
                this.society_name = data.society_name;
                this.total = parseFloat(data.totalPrice);
                console.log(this.total);
            }
            else {
                this.dummy = [];
            }
        });
    }
    getCoupon() {
        const uid = localStorage.getItem('uid');
        this.api.getUsedCoupon(uid).then(data => {
            console.log('list=====>', data);
            if (data && data.length) {
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
                const currnetDate = moment().format('YYYY-MM-DD');
                data.forEach(element => {
                    console.log(moment(element.expire).isAfter(currnetDate));
                    if (element && element.status === 'active' && moment(element.expire).isAfter(currnetDate)) {
                        console.log('yes=>', element);
                        this.list.push(element);
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
        if (item && item.status == 'active') {
            // const data = item.filter(x => x.society === this.societyId);
            console.log('data');
            if (item.society == this.societyId) {
                if (this.total >= item.min) {
                    if (this.usedCoupon.length != 0) {
                        //    for (let x of this.usedCoupon) {
                        //      console.log(x)
                        //       console.log('if')
                        //      if(x.used_coupon < item.limit && x.id == item.id) {
                        //        console.log(x.used_coupon +'<='+ item.limit)
                        //        this.util.showToast('Coupon Applied', 'success', 'bottom');
                        //        this.util.publishCoupon(item);
                        //        console.log(x.used_coupon +'<='+ item.limit)
                        //        this.navCtrl.back();
                        //      } else {
                        //        console.log('hi')
                        //        this.util.errorToast('Coupon limits exceeded ' + item.limit);
                        //    }
                        // } 
                        const uid = localStorage.getItem('uid');
                        console.log(uid, item.id);
                        this.api.getUsedCouponById(uid, item.id).then((data) => {
                            console.log(data);
                            if (data && data.length) {
                                if (data[0].used_coupon < item.limit) {
                                    this.util.showToast('Coupon Applied', 'success', 'bottom');
                                    this.util.publishCoupon(item);
                                    this.navCtrl.back();
                                }
                                else {
                                    console.log('hi');
                                    this.util.errorToast('Coupon limits exceeded ' + item.limit);
                                }
                            }
                            else {
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
                    }
                    else {
                        console.log('coupon not empty');
                        this.util.showToast('Coupon Applied', 'success', 'bottom');
                        this.util.publishCoupon(item);
                        this.navCtrl.back();
                    }
                }
                else {
                    this.util.errorToast('For claiming this coupon your order required minimum order  of ₹' + item.min);
                }
            }
            else {
                this.util.errorToast('This coupon is not valid for ' + this.society_name);
            }
        }
        else {
            this.util.errorToast('This coupon is not valid for ' + this.society_name);
        }
    }
    expire(date) {
        return moment(date).format('llll');
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
CouponsPage = __decorate([
    Component({
        selector: 'app-coupons',
        templateUrl: './coupons.page.html',
        styleUrls: ['./coupons.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        ActivatedRoute,
        UtilService,
        NavController])
], CouponsPage);
export { CouponsPage };
//# sourceMappingURL=coupons.page.js.map