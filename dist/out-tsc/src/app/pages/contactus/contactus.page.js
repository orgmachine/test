import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, ActionSheetController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
let ContactUsPage = class ContactUsPage {
    constructor(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.menu = menu;
        this.isVerified = false;
        this.menu.enable(false);
        this.contactForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
            name: ['', [Validators.required]],
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            message: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.contact_mobile = this.settings.contact_phone;
            this.contact_email = this.settings.contact_email;
        }).catch(error => {
            console.log(error);
        });
    }
    sendOtp() {
        this.util.show('Please wait....');
        let concatphone = document.getElementById("phoneNumber").value;
        this.phone = concatphone;
        this.api.sendOtp(this.phone).subscribe((data) => {
            this.util.hide();
            this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
            this.verifyOtpAlert();
        }, error => {
            this.util.hide();
            console.log('err', error);
        });
    }
    verifyOtpAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Verify Otp',
                cssClass: 'profileCss',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'otp',
                        type: 'tel',
                        placeholder: 'Enter OTP here'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel-button',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Verify',
                        cssClass: 'submit-button',
                        handler: (data) => {
                            console.log(data);
                            this.util.show('Please wait....');
                            let param = {
                                otp: data.otp,
                                mobile: this.phone
                            };
                            this.api.verifyOtp(param).subscribe((data) => {
                                this.success = data;
                                if (this.success.status == "STATUS_OK") {
                                    this.util.hide();
                                    this.isVerified = true;
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
                    }
                ]
            });
            alert.present();
        });
    }
    submit() {
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            userid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
        };
        this.api.addQuery(id.toString(), param).then((userData) => {
            this.util.showToast('We have received your message we will get back to you shortly.', 'primary', 'bottom');
            this.router.navigate(['/tabs/tab1']);
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
ContactUsPage = __decorate([
    Component({
        selector: 'app-contactus',
        templateUrl: './contactus.page.html',
        styleUrls: ['./contactus.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ApisService,
        UtilService,
        Camera,
        FormBuilder,
        ActionSheetController,
        MenuController])
], ContactUsPage);
export { ContactUsPage };
//# sourceMappingURL=contactus.page.js.map