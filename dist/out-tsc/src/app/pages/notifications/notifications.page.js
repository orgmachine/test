import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
let NotificationsPage = class NotificationsPage {
    constructor(api, router, util, navCtrl, chMod) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.haveItems = false;
        this.all_notifications = [];
    }
    ngOnInit() {
        const uid = localStorage.getItem('uid');
        this.api.getNotifications(uid).then((data) => {
            if (data && data.length != 0) {
                this.all_notifications = data;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
NotificationsPage = __decorate([
    Component({
        selector: 'app-notifications',
        templateUrl: './notifications.page.html',
        styleUrls: ['./notifications.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        ChangeDetectorRef])
], NotificationsPage);
export { NotificationsPage };
//# sourceMappingURL=notifications.page.js.map