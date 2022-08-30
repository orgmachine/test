import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
//import { ScreensizeService } from 'src/app/services/screensize.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController, ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let FooterComponent = class FooterComponent {
    constructor(router, navCtrl, callNumber, util, api, modalController) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.modalController = modalController;
        this.logedIn = false;
        /* 	this.screensizeService.isDesktopView().subscribe(isDesktop => {
        if (this.isDesktop && !isDesktop) {
          // Reload because our routing is out of place
          console.log(this.isDesktop);
          window.location.reload();
        }
   
        this.isDesktop = isDesktop;
      }); */
        // this.cates = this.navParam.get('data');
        if (localStorage.getItem('loginStatus') == "true") {
            this.api.isSignedIn = true;
            this.logedIn = this.api.isSignedIn;
        }
        else {
            //this.router.navigate(['/tabs/tab1']);  
            this.api.isSignedIn = false;
            this.logedIn = this.api.isSignedIn;
        }
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.address = this.settings.address;
        }).catch(error => {
            console.log(error);
        });
    }
    openQuery() {
        this.util.publishQuery('true');
    }
    packages() {
        this.router.navigate(['health-packages']);
    }
    offers() {
        this.router.navigate(['offers']);
    }
    health() {
        this.router.navigate(['/health-condition']);
    }
    risk() {
        this.router.navigate(['/risk']);
    }
    faq() {
        this.router.navigate(['/faq']);
    }
    profile() {
        if (this.api.isSignedIn == true) {
            this.router.navigate(['/profile']);
        }
        else {
            this.util.showLoginAlert();
        }
    }
};
FooterComponent = __decorate([
    Component({
        selector: 'app-footer',
        templateUrl: './footer.component.html',
        styleUrls: ['./footer.component.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        NavController,
        CallNumber,
        UtilService,
        ApisService,
        ModalController])
], FooterComponent);
export { FooterComponent };
//# sourceMappingURL=footer.component.js.map