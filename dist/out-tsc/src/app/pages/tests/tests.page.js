import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
let TestsPage = class TestsPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.all_tests = [];
    }
    ionViewWillEnter() {
        this.api.getAllIndividualTest().then(data => {
            this.all_tests = data;
            console.log(this.all_tests);
        }).catch(error => {
            console.log(error);
        });
    }
    goToDetail(id) {
        localStorage.setItem('testid', id);
        this.router.navigate(['test-detail']);
    }
};
TestsPage = __decorate([
    Component({
        selector: 'app-tests',
        templateUrl: './tests.page.html',
        styleUrls: ['./tests.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        MenuController,
        ApisService])
], TestsPage);
export { TestsPage };
//# sourceMappingURL=tests.page.js.map