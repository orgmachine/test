import { __decorate, __metadata } from "tslib";
import { Component, ChangeDetectorRef } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';
let CategoriesPage = class CategoriesPage {
    constructor(api, router, util, navCtrl, chMod, sanitizer) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.chMod = chMod;
        this.sanitizer = sanitizer;
        this.haveItems = false;
        this.categories = [];
        this.getAllCategories();
    }
    ngOnInit() {
    }
    getAllCategories() {
        this.api.getCategories().then(data => {
            this.categories = data;
        }).catch(error => {
            console.log(error);
        });
    }
    category(details) {
        console.log(details);
        const navData = {
            queryParams: {
                id: details.id,
                name: details.name
            }
        };
        this.router.navigate(['products'], navData);
    }
};
CategoriesPage = __decorate([
    Component({
        selector: 'app-categories',
        templateUrl: './categories.page.html',
        styleUrls: ['./categories.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        ChangeDetectorRef,
        DomSanitizer])
], CategoriesPage);
export { CategoriesPage };
//# sourceMappingURL=categories.page.js.map