import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let AboutPage = class AboutPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.members = [];
        this.api.getAboutUs().then(data => {
            this.about = data[0];
            console.log(this.about);
        }).catch(error => {
            console.log(error);
        });
        this.api.getTeamMember().then(data => {
            this.members = data;
            console.log(this.members);
        }).catch(error => {
            console.log(error);
        });
    }
};
AboutPage = __decorate([
    Component({
        selector: 'app-about',
        templateUrl: './about.page.html',
        styleUrls: ['./about.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], AboutPage);
export { AboutPage };
//# sourceMappingURL=about.page.js.map