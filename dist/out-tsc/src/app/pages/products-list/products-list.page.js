import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
let ProductsListPage = class ProductsListPage {
    constructor(route, api, util, navCtrl, alertController, router) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.products = [];
    }
    ngOnInit() { }
    ionViewWillEnter() {
        this.isLogin = localStorage.getItem('loginStatus');
        this.api.getAllProducts().then(data => {
            console.log(data);
            this.products = data;
        }).catch(error => {
            console.log(error);
        });
    }
    add(details) {
        if (this.isLogin == 'true') {
            if (details.recurring == 0) {
                this.router.navigate(['products-details'], {
                    queryParams: {
                        id: details.id
                    }
                });
            }
            else {
                this.router.navigate(['create-subscription'], {
                    queryParams: {
                        id: details.id
                    }
                });
            }
        }
        else {
            console.log('else');
            this.util.showLoginAlert();
        }
    }
};
ProductsListPage = __decorate([
    Component({
        selector: 'app-products-list',
        templateUrl: './products-list.page.html',
        styleUrls: ['./products-list.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        UtilService,
        NavController,
        AlertController,
        Router])
], ProductsListPage);
export { ProductsListPage };
//# sourceMappingURL=products-list.page.js.map