import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';
let ForgotPage = class ForgotPage {
    constructor(navCtrl, util, api) {
        this.navCtrl = navCtrl;
        this.util = util;
        this.api = api;
        this.login = { email: '' };
        this.submitted = false;
    }
    ngOnInit() {
    }
    onLogin(form) {
        console.log('form', form);
        this.submitted = true;
        if (form.valid) {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!emailfilter.test(this.login.email)) {
                this.util.showToast(this.util.translate('Please enter valid email'), 'danger', 'bottom');
                return false;
            }
            this.util.show();
            this.api.resetPassword(this.login.email).then((data) => {
                this.util.hide();
                this.util.showToast('Reset Password link is sent to your email', 'dark', 'bottom');
                console.log('sent', data);
                this.navCtrl.back();
            }, error => {
                console.log(error);
                this.util.hide();
                this.util.showErrorAlert('Something went wrong');
            }).catch(error => {
                console.log(error);
                this.util.hide();
                this.util.showErrorAlert('Something went wrong');
            });
        }
    }
};
ForgotPage = __decorate([
    Component({
        selector: 'app-forgot',
        templateUrl: './forgot.page.html',
        styleUrls: ['./forgot.page.scss'],
    }),
    __metadata("design:paramtypes", [NavController,
        UtilService,
        ApisService])
], ForgotPage);
export { ForgotPage };
//# sourceMappingURL=forgot.page.js.map