import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import * as moment from 'moment';
import { CallNumber } from '@ionic-native/call-number/ngx';
let DeliveriesPage = class DeliveriesPage {
    constructor(api, router, util, navCtrl, chMod, sanitizer, callNumber, alertCtrl) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.sanitizer = sanitizer;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.haveItems = false;
        this.deliveries = [];
        this.newArr = [];
        this.myaddress = [];
        this.allDeliveries = [];
        this.skipDeliveries = [];
        this.completedDeliveries = [];
        this.ongoingDeliveries = [];
        this.allCount = 0;
        this.skipCount = 0;
        this.completedCount = 0;
        this.ongoingCount = 0;
        this.isLoaded = false;
        this.slideOptsOne = {
            initialSlide: 0,
            slidesPerView: 1,
            autoplay: true,
            pager: true,
            pagination: { el: '.swiper-pagination', type: 'bullets', clickable: true },
        };
        console.log(localStorage.getItem('loginStatus'));
        this.isLogin = localStorage.getItem('loginStatus');
        console.log(this.isLogin);
        const date = new Date();
        this.today = moment(date).format("M/D/YYYY");
        console.log(this.today);
        if (this.isLogin == 'true') {
            this.getAddress();
            this.getMyDeliveries();
        }
        this.mobile = localStorage.getItem('mobile');
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    getAddress() {
        let uid = localStorage.getItem('uid');
        this.api.getMyAddress(uid).then((data) => {
            if (data && data.length) {
                this.myaddress = data;
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
            // this.dummy = [];
        });
    }
    getMyDeliveries() {
        let uid = localStorage.getItem('uid');
        this.api.getMyDeliveries(uid).then((data) => {
            if (data && data.length) {
                this.deliveries = data;
                console.log('my deliveries==>', this.deliveries);
                for (let x of this.deliveries) {
                    let address = '';
                    let subid = '';
                    let orderid = '';
                    let delyarr = [];
                    for (let y of this.myaddress) {
                        if (x.addressid == y.id) {
                            address = y.society + ' ' + y.appartment + ' ' + y.flat + ' ' + y.pincode;
                        }
                    }
                    if (x.orderid) {
                        delyarr.push({
                            address: address,
                            orderid: x.orderid,
                            // subscriptionid:x.subscriptionid,
                            status: x.status,
                            deliverydate: x.deliverydate,
                            total_amount: x.total_amount,
                        });
                    }
                    else {
                        delyarr.push({
                            address: address,
                            // orderid:x.orderid,
                            subscriptionid: x.subscriptionid,
                            status: x.status,
                            deliverydate: x.deliverydate,
                            total_amount: x.total_amount,
                        });
                    }
                    console.log(delyarr);
                    this.allDeliveries.push(delyarr[0]);
                    this.allCount = this.allDeliveries.length;
                    console.log('my all==>', this.allCount);
                    console.log(x.status);
                    if (x.status == "completed") {
                        this.completedDeliveries.push(delyarr[0]);
                        this.completedCount = this.completedDeliveries.length;
                        console.log('my completedDeliveries==>', this.completedCount);
                    }
                    else if (x.status == "ongoing") {
                        if (this.today == x.deliverydate) {
                            this.ongoingDeliveries.push(delyarr[0]);
                            console.log(this.ongoingDeliveries);
                            this.ongoingCount = this.ongoingDeliveries.length;
                            console.log('my skipDeliveries==>', this.ongoingCount);
                        }
                    }
                    else if (x.status == "skip") {
                        this.skipDeliveries.push(delyarr[0]);
                        this.skipCount = this.skipDeliveries.length;
                        console.log('my skipDeliveries==>', this.skipCount);
                    }
                }
                this.isLoaded = true;
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    skip(details) {
        this.router.navigate(['deliveries-list'], {
            queryParams: {
                list: JSON.stringify(details),
                status: "skip"
            }
        });
        console.log(details);
    }
    completed(details) {
        console.log(details);
        this.router.navigate(['deliveries-list'], {
            queryParams: {
                list: JSON.stringify(details),
                status: "completed"
            }
        });
    }
    viewAll(details) {
        console.log(details);
        this.router.navigate(['deliveries-list'], {
            queryParams: {
                list: JSON.stringify(details),
                status: "all"
            }
        });
    }
    notifications() {
        this.router.navigate(['notifications']);
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('contact_phone');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Are you sure you want to call Aryavrat Organic Customer Care</strong>',
                mode: 'ios',
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
                            try {
                                this.callNumber.callNumber(number, true);
                                console.log('Opened dialer');
                            }
                            catch (e) {
                                console.error(e || 'Error in launching dialer');
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    orderInfo(id) {
        localStorage.setItem('order-id', id);
        this.router.navigate(['order-detail']);
    }
    subInfo(id) {
        localStorage.setItem('subscrption-id', id);
        this.router.navigate(['subscription-detail']);
    }
};
DeliveriesPage = __decorate([
    Component({
        selector: 'app-deliveries',
        templateUrl: './deliveries.page.html',
        styleUrls: ['./deliveries.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        ChangeDetectorRef,
        DomSanitizer,
        CallNumber,
        AlertController])
], DeliveriesPage);
export { DeliveriesPage };
//# sourceMappingURL=deliveries.page.js.map