import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { environment } from 'src/environments/environment';
import { TranslateService } from '@ngx-translate/core';
import { UtilService } from 'src/app/services/util.service';
import { Location } from '@angular/common';
let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar, router, api, oneSignal, translate, _location, util, alertController, menu) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.router = router;
        this.api = api;
        this.oneSignal = oneSignal;
        this.translate = translate;
        this._location = _location;
        this.util = util;
        this.alertController = alertController;
        this.menu = menu;
        this.currentPageTitle = 'Dashboard';
        this.logedIn = false;
        this.menu.enable(false);
        if (localStorage.getItem('loginStatus') == "true") {
            this.api.isSignedIn = true;
            this.logedIn = this.api.isSignedIn;
        }
        else {
            this.router.navigate(['/home']);
            this.api.isSignedIn = false;
            this.logedIn = this.api.isSignedIn;
        }
        this.util.subscribeLoggedInStatus().subscribe(data => {
            if (data) {
                console.log(data);
                this.logedIn = true;
            }
        });
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            // window.console.warn = function(){};
            // window.console.error = function(){};
            // window.console.log = function(){};
            // window.console.exception = function(){};
            setTimeout(() => __awaiter(this, void 0, void 0, function* () {
                yield this.oneSignal.startInit(environment.onesignal.appId, environment.onesignal.googleProjectNumber);
                this.oneSignal.inFocusDisplaying(2);
                this.oneSignal.getIds().then((data) => {
                    console.log('iddddd', data);
                    localStorage.setItem('fcm', data.userId);
                });
                yield this.oneSignal.endInit();
            }), 1000);
            this.splashScreen.hide();
        });
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.scss']
    }),
    __metadata("design:paramtypes", [Platform,
        SplashScreen,
        StatusBar,
        Router,
        ApisService,
        OneSignal,
        TranslateService,
        Location,
        UtilService,
        AlertController,
        MenuController])
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map