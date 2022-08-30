import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ViewChild, ElementRef } from '@angular/core';
//import { ScreensizeService } from 'src/app/services/screensize.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { NavController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let HeaderComponent = class HeaderComponent {
    constructor(router, navCtrl, callNumber, util, api) {
        this.router = router;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.cities = [];
        this.logedIn = false;
        this.cart = [];
        this.city = '';
        this.util.subscribeLoggedInStatus().subscribe(data => {
            console.log(data);
            this.api.isSignedIn = true;
            this.logedIn = this.api.isSignedIn;
            console.log(this.logedIn);
        });
        if (localStorage.getItem('loginStatus') == "true") {
            this.api.isSignedIn = true;
            this.logedIn = this.api.isSignedIn;
        }
        else {
            //this.router.navigate(['/tabs/tab1']);  
            this.api.isSignedIn = false;
            this.logedIn = this.api.isSignedIn;
        }
        // this.util.subscribeCityList().subscribe(data => {
        //   console.log(data)
        //   // this.cities = localStorage.setItem('cities',JSON.parse(this.cities))
        //   if(data){
        //   setTimeout(() => {
        //     this.city = localStorage.getItem('city');
        //   }, 1000);
        //   } else {
        //     this.city = 'Gurugram';
        //   }
        // });
        this.getCities();
    }
    getCities() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.api.getCities().then((data) => __awaiter(this, void 0, void 0, function* () {
                this.cities = data;
                this.city = localStorage.getItem('city');
                console.log(this.cities);
            })).catch(error => {
                console.log(error);
            });
        });
    }
    selectCity(data) {
        console.log(data);
        this.city = data;
        this.util.publishCity(this.city);
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
        }).catch(error => {
            console.log(error);
        });
        this.util.subscribeCity().subscribe(data => {
            console.log('after trigger', data);
            if (data) {
                setTimeout(() => {
                    this.city = data;
                    // localStorage.setItem('cities',JSON.stringify(this.cities))
                    localStorage.setItem('city', this.city);
                }, 1000);
            }
            else {
                this.city = 'Gurugram';
            }
        });
    }
    packages() {
        this.router.navigate(['packages']);
    }
    offers() {
        this.router.navigate(['offers']);
    }
    habits() {
        this.router.navigate(['/health-habits']);
    }
    risk() {
        this.router.navigate(['/risk']);
    }
    faq() {
        this.router.navigate(['/faq']);
    }
    home() {
        this.router.navigate(['/home']);
    }
    profile() {
        if (this.api.isSignedIn == true) {
            this.router.navigate(['/profile']);
        }
        else {
            this.util.showLoginAlert();
        }
    }
    onClick(data) {
        console.log(data);
        this.router.navigate([data]);
    }
    search() {
        this.router.navigate(['search']);
    }
    login() {
        this.router.navigate(['login']);
    }
    logout() {
        this.api.logout().then((data) => {
            localStorage.setItem('loginStatus', "false");
            this.api.isSignedIn = false;
            localStorage.setItem('uid', '');
            this.router.navigate(['login']);
        }).catch(error => {
            console.log(error);
        });
    }
    uploadPrescription() {
        this.router.navigate(['add-prescription']);
    }
};
__decorate([
    ViewChild('cart', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], HeaderComponent.prototype, "fab", void 0);
HeaderComponent = __decorate([
    Component({
        selector: 'app-header',
        templateUrl: './header.component.html',
        styleUrls: ['./header.component.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        NavController,
        CallNumber,
        UtilService,
        ApisService])
], HeaderComponent);
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map