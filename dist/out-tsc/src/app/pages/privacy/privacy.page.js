import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let PrivacyPage = class PrivacyPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.menu.enable(false);
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.privacy = this.settings.privacy;
        }).catch(error => {
            console.log(error);
        });
    }
};
PrivacyPage = __decorate([
    Component({
        selector: 'app-privacy',
        templateUrl: './privacy.page.html',
        styleUrls: ['./privacy.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], PrivacyPage);
export { PrivacyPage };
//# sourceMappingURL=privacy.page.js.map