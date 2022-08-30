import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { MenuController } from '@ionic/angular';
let PaymentSecurityPage = class PaymentSecurityPage {
    constructor(api, util, menu) {
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.menu.enable(false);
        this.api.getSettings().then(data => {
            this.settings = data[0];
            console.log(this.settings);
            this.return_policy = this.settings.payment_and_security;
        }).catch(error => {
            console.log(error);
        });
    }
};
PaymentSecurityPage = __decorate([
    Component({
        selector: 'app-payment-security',
        templateUrl: './payment-security.page.html',
        styleUrls: ['./payment-security.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        MenuController])
], PaymentSecurityPage);
export { PaymentSecurityPage };
//# sourceMappingURL=payment-security.page.js.map