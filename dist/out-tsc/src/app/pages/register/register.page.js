import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';
import { NavController, Platform } from "@ionic/angular";
import { Device } from '@ionic-native/device/ngx';
import { FormBuilder, Validators, FormControl } from "@angular/forms";
let RegisterPage = class RegisterPage {
    constructor(router, api, util, navCtrl, device, platform, formBuilder) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.device = device;
        this.platform = platform;
        this.formBuilder = formBuilder;
        // register = { email: '',mobile:'', password: '',confirmPassword: ''};
        this.register = { email: '', mobile: '', name: '' };
        this.submitted = false;
        this.isLogin = false;
        this.registerForm = this.formBuilder.group({
            name: new FormControl('', [Validators.required]),
            phone: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
            email: new FormControl('', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]),
            // password: new FormControl('',[Validators.required]),
            // confirmPassword: ['',Validators.required],
            // },{
            //   validator: ValidationService.MatchPassword
            // }
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
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('rateApp', this.settings.rateApp_url);
            localStorage.setItem('shareApp', this.settings.rateApp_url);
            localStorage.setItem('terms', this.settings.terms);
            localStorage.setItem('privacy', this.settings.privacy);
            localStorage.setItem('about', this.settings.about);
            localStorage.setItem('mobile', this.settings.contact_phone);
            localStorage.setItem('email', this.settings.contact_email);
        }).catch(error => {
            console.log(error);
        });
    }
    // onLogin() {
    //   console.log(this.register.mobile,this.register.email, this.register.password, this.uuid)
    //   this.submitted = true;
    //     this.isLogin = true;
    //     this.api.register(this.register.mobile,this.register.email,this.register.password,this.uuid).then((userData) => {
    //       console.log(userData);
    //       localStorage.setItem('uid', userData.uid);
    //       localStorage.setItem('help', userData.uid);
    //       this.isLogin = false;
    //       this.router.navigate(['/login']);
    //     }).catch(err => {
    //       if (err) {
    //         console.log(err);
    //         this.util.showToast(`${err}`, 'danger', 'bottom');
    //       }
    //     }).then(el => this.isLogin = false);
    // }
    onRegister() {
        this.util.show('Please wait....');
        this.submitted = true;
        this.isLogin = true;
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            name: this.register.name,
            uid: id.toString(),
            email: this.register.email,
            createdOn: new Date(),
            phone: this.register.mobile,
            deviceId: this.uuid,
            imagePath: '',
            type: 'user',
            status: 'active',
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
        };
        this.api.getUser(this.register.mobile).then((data) => {
            console.log(data);
            if (data.length == 0) {
                this.api.selfRegistration(id.toString(), param).then((userData) => {
                    this.user_phone = this.register.mobile;
                    this.api.sendOtp(this.user_phone).subscribe((data) => {
                        console.log(data);
                        this.isLogin = false;
                        this.util.hide();
                        this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
                        this.router.navigate(['otp'], {
                            queryParams: {
                                phone: this.user_phone
                            }
                        });
                    }, error => {
                        this.util.hide();
                        console.log('err', error);
                    });
                    // this.router.navigate(['/login']);
                }).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                }).then(el => this.isLogin = false);
            }
            else {
                this.util.hide();
                this.isLogin = false;
                this.util.showToast('User already exist', 'danger', 'bottom');
            }
        }, error => {
            this.util.hide();
            console.log(error);
        });
    }
    back() {
        this.navCtrl.back();
    }
    terms() {
        this.router.navigate(['terms']);
    }
    privacy() {
        this.router.navigate(['privacy']);
    }
};
RegisterPage = __decorate([
    Component({
        selector: 'app-register',
        templateUrl: './register.page.html',
        styleUrls: ['./register.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        ApisService,
        UtilService,
        NavController,
        Device,
        Platform,
        FormBuilder])
], RegisterPage);
export { RegisterPage };
//# sourceMappingURL=register.page.js.map