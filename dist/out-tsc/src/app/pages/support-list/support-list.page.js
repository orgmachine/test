import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { DomSanitizer } from '@angular/platform-browser';
// import { myEnterAnimation } from 'src/app/animations/enter';
// import { myLeaveAnimation } from 'src/app/animations/leave';
let SupportListPage = class SupportListPage {
    constructor(route, router, api, util, sanitizer, alertCtrl, menu) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.support = [];
        this.haveItems = false;
        this.spinner = false;
        this.menu.enable(false);
    }
    ngOnInit() {
        const uid = localStorage.getItem('uid');
        this.api.getSupport(uid).then((info) => {
            console.log(info);
            if (info != undefined) {
                this.haveItems = true;
                this.support = info;
            }
            this.spinner = true;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.spinner = true;
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
SupportListPage = __decorate([
    Component({
        selector: 'app-support-list',
        templateUrl: './support-list.page.html',
        styleUrls: ['./support-list.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ApisService,
        UtilService,
        DomSanitizer,
        AlertController,
        MenuController])
], SupportListPage);
export { SupportListPage };
//# sourceMappingURL=support-list.page.js.map