import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Platform, AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';
let OtpPage = class OtpPage {
    constructor(route, router, alertCtrl, api, util, platform, menu, device) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.platform = platform;
        this.menu = menu;
        this.device = device;
        this.timer = 60;
        this.isLogin = false;
        this.startTimer();
        this.route.queryParams.subscribe(data => {
            this.phone = data.phone;
            console.log(this.phone);
        });
        platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.isDevice = 'android';
                this.uuid = this.device.uuid;
            }
            else if (this.platform.is('ios')) {
                this.isDevice = 'ios';
                this.uuid = this.device.uuid;
            }
            else {
                this.isDevice = 'browser';
            }
        });
    }
    back() {
        this.router.navigate(['login']);
    }
    startTimer() {
        this.intervalVar = setInterval(function () {
            if (this.timer > 0) {
                this.timer--;
            }
        }.bind(this), 1000);
    }
    // this called every time when user changed the code
    onCodeChanged(code) {
        console.log(code);
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        console.log(code);
        this.otp = code;
    }
    verifyOtp() {
        this.util.show('Please wait....');
        this.isLogin = true;
        let data = {
            otp: this.otp,
            mobile: this.phone
        };
        console.log(data);
        this.api.verifyOtp(data).subscribe((data) => {
            console.log(data);
            this.success = data;
            if (this.success.status == "STATUS_OK") {
                this.api.getUser(this.phone).then((data) => {
                    console.log(data);
                    if (data && data.length) {
                        this.userData = data[0];
                        console.log(this.userData.uid);
                        localStorage.setItem('uid', this.userData.uid);
                        localStorage.setItem('help', this.userData.uid);
                        this.updateUserDevice();
                        localStorage.setItem('mobile', this.userData.phone);
                        localStorage.setItem('loginStatus', "true");
                        this.isLogin = false;
                        this.api.isSignedIn = true;
                        localStorage.setItem('selectedLanguage', 'en');
                        this.util.publishLoggedIn('LoggedIn');
                        this.util.publishLoggedInStatus('true');
                        this.menu.enable(false);
                        this.util.hide();
                        this.util.showToast(this.success.Message, 'primary', 'bottom');
                        this.router.navigate(['/home']);
                    }
                    else {
                        this.util.hide();
                        this.util.showToast('Something went wrong. Please try again later!', 'danger', 'bottom');
                    }
                }, error => {
                    this.util.hide();
                    console.log(error);
                });
            }
            else {
                this.util.hide();
                this.util.showToast(this.success.Message, 'danger', 'bottom');
            }
        }, error => {
            this.util.hide();
            console.log('err', error);
        });
    }
    updateUserDevice() {
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            modifiedOn: modifiedOn,
            isDevice: this.isDevice,
            deviceId: this.uuid,
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
        };
        console.log(param);
        this.api.updateProfile(uid, param).then((data) => {
            console.log(data);
        }).catch(err => {
            if (err) {
                console.log(err);
                // this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    skip() {
        this.menu.enable(false);
        this.router.navigate(['/tabs/tab1']);
    }
};
OtpPage = __decorate([
    Component({
        selector: 'app-otp',
        templateUrl: './otp.page.html',
        styleUrls: ['./otp.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ApisService,
        UtilService,
        Platform,
        MenuController,
        Device])
], OtpPage);
export { OtpPage };
//# sourceMappingURL=otp.page.js.map