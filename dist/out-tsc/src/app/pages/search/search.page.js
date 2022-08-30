import { __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { FormBuilder } from "@angular/forms";
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { IonSearchbar } from '@ionic/angular';
let SearchPage = class SearchPage {
    constructor(modalController, router, formBuilder, api, util) {
        this.modalController = modalController;
        this.router = router;
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.uid = "NDrRk64e6wdBPS16qoRpa4LKsvO2";
        this.categories = [];
        this.products = [];
        this.terms = '';
        this.listLoad = false;
        this.isLogin = localStorage.getItem('loginStatus');
        this.getAllCategories();
        this.getAllProducts();
    }
    ionViewWillEnter() {
        setTimeout(() => this.searchbar.setFocus(), 300);
    }
    getAllCategories() {
        this.api.getCategories().then(data => {
            this.categories = data;
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }
    getAllProducts() {
        this.api.getAllProducts().then(data => {
            console.log(data);
            this.products = data;
        }).catch(error => {
            console.log(error);
        });
    }
    onInput($event) {
        console.log($event);
        this.listLoad = true;
        if ($event.detail == null) {
            this.listLoad = false;
        }
    }
    onCancel($event) {
        console.log($event);
        this.listLoad = false;
    }
    category(details) {
        const navData = {
            queryParams: {
                id: details.id,
                name: details.name
            }
        };
        this.router.navigate(['/products'], navData);
    }
    add(details) {
        console.log(details);
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
    back() {
        this.router.navigate(['tabs/tab1']);
    }
    list() {
        this.router.navigate(['/categories']);
    }
};
__decorate([
    ViewChild('autofocus', { static: false }),
    __metadata("design:type", IonSearchbar)
], SearchPage.prototype, "searchbar", void 0);
SearchPage = __decorate([
    Component({
        selector: 'app-search',
        templateUrl: './search.page.html',
        styleUrls: ['./search.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController,
        Router,
        FormBuilder,
        ApisService,
        UtilService])
], SearchPage);
export { SearchPage };
//# sourceMappingURL=search.page.js.map