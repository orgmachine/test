import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import * as moment from 'moment';
let DeliveriesListPage = class DeliveriesListPage {
    constructor(api, router, util, navCtrl, chMod, sanitizer, datePicker, route) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.sanitizer = sanitizer;
        this.datePicker = datePicker;
        this.route = route;
        this.haveItems = false;
        this.allDeliveries = [];
        this.start_date = '';
        this.end_date = '';
        this.myaddress = [];
        this.deliveries = [];
        // var startdate = new Date();
        // this.start_date = moment(startdate).format("MM/DD/YYYY")
        // console.log( this.start_date )
        // var enddate = new Date();
        // this.end_date = moment(enddate).format("MM/DD/YYYY")
        // console.log( this.start_date )
        this.getAddress();
    }
    datePicker1() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            maxDate: new Date(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            var date_select = date;
            this.start_date = moment(date).format("MM/DD/YYYY");
        }).catch(error => {
            console.log(error);
        });
    }
    datePicker2() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            maxDate: new Date(),
            // maxDate: new Date(new Date().setDate(new Date().getDate() + 1)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            var date_select = date;
            this.end_date = moment(date).format("MM/DD/YYYY");
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            this.allDeliveries = JSON.parse(data.list);
            this.status = data.status;
            console.log(this.status);
        });
    }
    getAddress() {
        let uid = localStorage.getItem('uid');
        this.api.getMyAddress(uid).then((data) => {
            console.log('my address', data);
            // this.dummy = [];
            if (data && data.length) {
                this.myaddress = data;
            }
        }, error => {
            console.log(error);
            // this.dummy = [];
        }).catch(error => {
            console.log(error);
            // this.dummy = [];
        });
    }
    submit() {
        let uid = localStorage.getItem('uid');
        if (this.start_date == '') {
            this.util.showToast('Please select start date', 'danger', 'bottom');
        }
        if (this.end_date == '') {
            this.util.showToast('Please select end date', 'danger', 'bottom');
        }
        if (this.start_date > this.end_date) {
            this.util.showToast('Start date can not be greater than end date', 'danger', 'bottom');
        }
        this.api.sortDeliveriesByDate(uid, this.start_date, this.end_date).then((data) => {
            if (data && data.length) {
                this.deliveries = data;
                this.allDeliveries = [];
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
                    delyarr.push({
                        address: address,
                        orderid: x.orderid,
                        subscriptionid: x.subscriptionid,
                        status: x.status,
                        deliverydate: x.deliverydate,
                        total_amount: x.total_amount,
                    });
                    // console.log(delyarr)
                    this.allDeliveries.push(delyarr[0]);
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
};
DeliveriesListPage = __decorate([
    Component({
        selector: 'app-deliveries-list',
        templateUrl: './deliveries-list.page.html',
        styleUrls: ['./deliveries-list.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        ChangeDetectorRef,
        DomSanitizer,
        DatePicker,
        ActivatedRoute])
], DeliveriesListPage);
export { DeliveriesListPage };
//# sourceMappingURL=deliveries-list.page.js.map