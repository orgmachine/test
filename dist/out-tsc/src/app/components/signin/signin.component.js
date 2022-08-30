import { __awaiter, __decorate, __metadata } from "tslib";
import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { TranslateService } from '@ngx-translate/core';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import { Device } from '@ionic-native/device/ngx';
import * as moment from 'moment';
import { FormBuilder, Validators } from "@angular/forms";
import { NavController, Platform, IonSlides, ModalController, MenuController } from '@ionic/angular';
let SigninComponent = class SigninComponent {
    constructor(router, platform, device, api, util, navCtrl, translate, oneSignal, firebaseAuthentication, modalController, formBuilder, menu) {
        this.router = router;
        this.platform = platform;
        this.device = device;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.firebaseAuthentication = firebaseAuthentication;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.login = { mobile: '' };
        this.submitted = false;
        this.isLogin = false;
        this.splash = [];
        this.otpSent = false;
        this.phoneNumber = "";
        this.stepOne = false;
        this.timer = 60;
        this.getSreens();
        this.loginForm = this.formBuilder.group({
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]]
        });
        if (localStorage.getItem('loginStatus') == "true") {
            this.menu.enable(false);
            this.router.navigate(['/tabs/tab1']);
            this.api.isSignedIn = true;
        }
        else if (localStorage.getItem('loginStatus') == "false") {
            this.api.isSignedIn = false;
        }
        this.oneSignal.getIds().then((data) => {
            console.log('iddddd==========', data);
            localStorage.setItem('fcm', data.userId);
        });
        platform.ready().then(() => {
            this.deviceplt = this.device.platform;
            if (this.platform.is('android') || this.platform.is('ios')) {
                this.uuid = this.device.uuid;
            }
            else {
                console.log('Your device id is null', this.uuid = 'browser007bond');
            }
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
    ionViewDidEnter() {
        this.menu.enable(false);
    }
    getSreens() {
        this.api.getOnboarding().then(data => {
            this.splash = data;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    ngOnInit() {
    }
    sendOTP() {
        this.util.show('Please wait....');
        this.submitted = true;
        this.isLogin = true;
        let concatphone = document.getElementById("phoneNumber").value;
        this.user_phone = concatphone;
        console.log(concatphone);
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            uid: id.toString(),
            createdOn: new Date(),
            phone: concatphone,
            deviceId: this.uuid,
            name: '',
            imagePath: '',
            type: 'user',
            status: 'active',
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
        };
        this.api.getUser(concatphone).then((data) => {
            console.log(data);
            if (data.length == 0) {
                console.log('user not exist');
                this.api.selfRegistration(id.toString(), param).then((userData) => {
                    console.log(this.user_phone);
                    this.api.sendOtp(this.user_phone).subscribe((data) => {
                        console.log(data);
                        this.isLogin = false;
                        this.util.hide();
                        this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
                        this.stepOne = true;
                        this.startTimer();
                    }, error => {
                        this.util.hide();
                        console.log('err', error);
                    });
                }).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                }).then(el => this.isLogin = false);
            }
            else {
                console.log('user exist');
                this.isLogin = false;
                this.api.sendOtp(concatphone).subscribe((data) => {
                    console.log(data);
                    this.otpSent = true;
                    this.phoneNumber = concatphone;
                    this.util.hide();
                    this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
                    this.stepOne = true;
                    this.startTimer();
                }, error => {
                    this.util.hide();
                    console.log('err', error);
                });
            }
        }, error => {
            this.util.hide();
            console.log(error);
        });
    }
    back() {
        this.stepOne = false;
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
            mobile: this.user_phone
        };
        console.log(data);
        this.api.verifyOtp(data).subscribe((data) => {
            console.log(data);
            this.success = data;
            if (this.success.status == "STATUS_OK") {
                this.api.getUser(this.user_phone).then((data) => {
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
                        this.close('true');
                        // localStorage.setItem("previous-request", "true");
                        // localStorage.setItem("previous-request-page", "/checkout");
                        // this.router.navigate(['/home']);
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
    close(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    closeModal() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
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
        this.api.updateProfile(uid, param).then((data) => {
            console.log(data);
        }).catch(err => {
            if (err) {
                console.log(err);
                // this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    resend() {
        this.util.show('Please wait....');
        this.timer = 60;
        this.startTimer();
        this.api.sendOtp(this.user_phone).subscribe((data) => {
            this.util.hide();
            this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
        }, error => {
            this.util.hide();
            console.log('err', error);
        });
    }
    skip() {
        this.router.navigate(['/home']);
    }
};
__decorate([
    ViewChild(IonSlides, { static: true }),
    __metadata("design:type", IonSlides)
], SigninComponent.prototype, "slides", void 0);
SigninComponent = __decorate([
    Component({
        selector: 'app-signin',
        templateUrl: './signin.component.html',
        styleUrls: ['./signin.component.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        Platform,
        Device,
        ApisService,
        UtilService,
        NavController,
        TranslateService,
        OneSignal,
        FirebaseAuthentication,
        ModalController,
        FormBuilder,
        MenuController])
], SigninComponent);
export { SigninComponent };
//# sourceMappingURL=signin.component.js.map