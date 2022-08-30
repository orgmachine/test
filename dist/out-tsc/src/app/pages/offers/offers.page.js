import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { NavController, MenuController } from '@ionic/angular';
let OffersPage = class OffersPage {
    constructor(api, route, util, navCtrl, menu) {
        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.list = [];
        this.dummy = Array(10);
        this.usedCoupon = [];
        this.menu.enable(false);
    }
    ngOnInit() {
    }
    claim(data) {
    }
};
OffersPage = __decorate([
    Component({
        selector: 'app-offers',
        templateUrl: './offers.page.html',
        styleUrls: ['./offers.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        ActivatedRoute,
        UtilService,
        NavController,
        MenuController])
], OffersPage);
export { OffersPage };
//# sourceMappingURL=offers.page.js.map