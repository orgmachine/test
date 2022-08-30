import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let PaymentPage = class PaymentPage {
    constructor(route, router, alertCtrl, api, util, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.menu.enable(false);
        // this.email = localStorage.getItem('email');
        this.route.queryParams.subscribe(params => {
            this.details = params;
            this.payment_id = this.details.paymentid;
            this.createdAt = this.details.createdAt;
            this.amount = this.details.amount;
            this.status = this.details.status;
        });
    }
    ionViewWillEnter() {
        const uid = localStorage.getItem('uid');
        this.api.getMyProfile(uid).then((info) => {
            this.user_name = info.name;
            this.email = info.email;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
PaymentPage = __decorate([
    Component({
        selector: 'app-payment',
        templateUrl: './payment.page.html',
        styleUrls: ['./payment.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ApisService,
        UtilService,
        MenuController])
], PaymentPage);
export { PaymentPage };
//# sourceMappingURL=payment.page.js.map