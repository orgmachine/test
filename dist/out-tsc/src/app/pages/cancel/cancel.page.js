import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import * as moment from 'moment';
let CancelPage = class CancelPage {
    constructor(api, router, util, navCtrl, alertCtrl, route) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.reasons = [];
        this.comment = '';
        this.isEnabled = false;
        this.phone = '';
        this.name = '';
        this.email = '';
        this.token = '';
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
    }
    // getOrder(id){
    //   console.log(id)
    //   this.api.getBookingById(id).then(data => {
    //     console.log(data)
    //     this.order_detail = data[0];
    //   }).catch(error => {
    //     console.log(error);
    //   });
    // }
    ngOnInit() {
        this.api.remarks().then(data => {
            this.reasons = data;
            console.log(this.reasons);
        }).catch(error => {
            console.log(error);
        });
        // const uid = localStorage.getItem('uid');
        // this.api.getMyProfile(uid).then((data) => {
        //   console.log('my profile', data);
        //   if (data) {
        //     console.log(data)
        //     this.phone = data.phone;
        //     this.name = data.name;
        //     this.email = data.email;
        //     this.token = data.fcm_token;
        //     if (this.name == undefined){
        //       this.email = '';
        //     } else {
        //       console.log('trigger else')
        //     }
        //   }
        // }, error => {
        //   console.log(error);
        // }).catch(error => {
        //   console.log(error);
        // });
    }
    select(id, text) {
        this.reason = id;
        this.reason_text = text;
        this.isEnabled = true;
    }
    submit() {
        this.util.show('Please wait....');
        const date = new Date();
        const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        let param = {
            status: 3,
            updatedAt: updatedAt,
            reason: this.reason,
            remark: this.comment
        };
        this.api.updateBooking(this.booking_id, param).then((data) => {
            this.util.publishOrderStatus('true');
            this.util.hide();
            this.util.showToast('Your booking cancelled successfully', 'primary', 'bottom');
            this.navCtrl.back();
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
CancelPage = __decorate([
    Component({
        selector: 'app-cancel',
        templateUrl: './cancel.page.html',
        styleUrls: ['./cancel.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        AlertController,
        ActivatedRoute])
], CancelPage);
export { CancelPage };
//# sourceMappingURL=cancel.page.js.map