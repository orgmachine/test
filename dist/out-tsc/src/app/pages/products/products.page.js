import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
let ProductsPage = class ProductsPage {
    constructor(route, api, util, navCtrl, alertController, router) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.products = [];
        this.cart = [];
        this.route.queryParams.subscribe(data => {
            if (data.hasOwnProperty('id')) {
                this.id = data.id;
                this.name = data.name;
                this.getProducts(this.id);
            }
        });
    }
    ionViewWillEnter() {
        this.isLogin = localStorage.getItem('loginStatus');
    }
    ngOnInit() {
        this.cart = this.util.getCart();
        // this.cartItemCount = this.util.getCartItemCount();
    }
    getProducts(id) {
        this.util.show('Please wait....');
        this.util.getProducts(id).then((data) => {
            this.products = data;
            this.util.hide();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
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
ProductsPage = __decorate([
    Component({
        selector: 'app-products',
        templateUrl: './products.page.html',
        styleUrls: ['./products.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        UtilService,
        NavController,
        AlertController,
        Router])
], ProductsPage);
export { ProductsPage };
//# sourceMappingURL=products.page.js.map