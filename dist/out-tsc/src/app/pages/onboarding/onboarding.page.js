import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { NavController, MenuController } from '@ionic/angular';
let OnboardingPage = class OnboardingPage {
    constructor(api, router, util, navCtrl, menu) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.menu = menu;
        /***************************************************************************************************/
        /************************************ CHECK USER ALREADY LOGIN *************************************/
        /***************************************************************************************************/
        if (localStorage.getItem('loginStatus') == "true") {
            this.menu.enable(true);
            this.router.navigate(['/tabs/tab1']);
            this.api.isSignedIn = true;
        }
        else if (localStorage.getItem('loginStatus') == "false") {
            this.api.isSignedIn = false;
        }
    }
    ionViewDidEnter() {
        this.menu.enable(false);
    }
    signIn() {
        this.router.navigate(['/login']);
    }
    signUp() {
        this.router.navigate(['/login']);
    }
    explore() {
        this.menu.enable(true);
        this.router.navigate(['/tabs/tab1']);
    }
};
OnboardingPage = __decorate([
    Component({
        selector: 'app-onboarding',
        templateUrl: './onboarding.page.html',
        styleUrls: ['./onboarding.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        MenuController])
], OnboardingPage);
export { OnboardingPage };
//# sourceMappingURL=onboarding.page.js.map