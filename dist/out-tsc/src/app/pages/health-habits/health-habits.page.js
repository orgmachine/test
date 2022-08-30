import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let HealthHabitsPage = class HealthHabitsPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.habits = [];
    }
    ionViewWillEnter() {
        this.api.getHealthHabbits().then(data => {
            console.log(data);
            this.habits = data;
        }).catch(error => {
            console.log(error);
        });
    }
};
HealthHabitsPage = __decorate([
    Component({
        selector: 'app-health-habits',
        templateUrl: './health-habits.page.html',
        styleUrls: ['./health-habits.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], HealthHabitsPage);
export { HealthHabitsPage };
//# sourceMappingURL=health-habits.page.js.map