import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { UtilService } from 'src/app/services/util.service';
import { ApisService } from 'src/app/services/apis.service';
let ContactPage = class ContactPage {
    constructor(route, router, alertCtrl, emailComposer, callNumber, util, api, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.menu = menu;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.mobile = this.settings.contact_phone;
            this.email = this.settings.contact_email;
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.isLogin = localStorage.getItem('loginStatus');
    }
    mail() {
        let email = {
            to: this.email,
            subject: 'Support',
            // body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('mobile');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Are you sure you want to call Aryavrat Agro</strong>',
                mode: 'ios',
                buttons: [
                    {
                        text: 'No',
                        cssClass: 'exit-button',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        cssClass: 'login-button',
                        handler: () => {
                            let number = mobile;
                            try {
                                this.callNumber.callNumber(number, true);
                                console.log('Opened dialer');
                            }
                            catch (e) {
                                console.error(e || 'Error in launching dialer');
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
    }
    report() {
        if (this.isLogin == 'true') {
            this.router.navigate(['/support']);
        }
        else {
            console.log('else');
            this.util.showLoginAlert();
        }
    }
    faqs() {
        this.router.navigate(['/faqs']);
    }
};
ContactPage = __decorate([
    Component({
        selector: 'app-contact',
        templateUrl: './contact.page.html',
        styleUrls: ['./contact.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        EmailComposer,
        CallNumber,
        UtilService,
        ApisService,
        MenuController])
], ContactPage);
export { ContactPage };
//# sourceMappingURL=contact.page.js.map