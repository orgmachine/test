import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let HealthPackagesPage = class HealthPackagesPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.menu.enable(false);
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.terms = this.settings.terms;
        }).catch(error => {
            console.log(error);
        });
    }
};
HealthPackagesPage = __decorate([
    Component({
        selector: 'app-health-packages',
        templateUrl: './health-packages.page.html',
        styleUrls: ['./health-packages.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], HealthPackagesPage);
export { HealthPackagesPage };
//# sourceMappingURL=health-packages.page.js.map