import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let PackagesPage = class PackagesPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.all_packages = [];
    }
    ionViewWillEnter() {
        this.api.getAllHealthPackages().then(data => {
            this.all_packages = data;
            console.log(this.all_packages);
        }).catch(error => {
            console.log(error);
        });
    }
};
PackagesPage = __decorate([
    Component({
        selector: 'app-packages',
        templateUrl: './packages.page.html',
        styleUrls: ['./packages.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], PackagesPage);
export { PackagesPage };
//# sourceMappingURL=packages.page.js.map