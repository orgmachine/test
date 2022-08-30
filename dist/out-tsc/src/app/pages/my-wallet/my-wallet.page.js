import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { AlertController } from '@ionic/angular';
let MyWalletPage = class MyWalletPage {
    constructor(api, util, router, callNumber, alertCtrl) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.balance = 0;
        this.currency_ = "₹";
        this.transactions = [];
        localStorage.setItem("currency_symbol", this.currency_);
        this.isLogin = localStorage.getItem('loginStatus');
        if (this.isLogin == 'true') {
            console.log('true');
        }
        else {
            this.router.navigate(['login']);
        }
        this.util.subscribeWalletStatus().subscribe(data => {
            // if (data) {
            console.log(data);
            this.ionViewWillEnter();
            console;
            // }
        });
    }
    ngOnInit() {
        this.util.show('Please wait....');
        this.currency_ = localStorage.getItem("currency_symbol");
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        // this.util.show('Please wait....')
        this.currency_ = localStorage.getItem("currency_symbol");
        const uid = localStorage.getItem('uid');
        this.api.getWallet(uid).then((data) => {
            // this.util.hide();
            if (data && data.length != 0) {
                this.wallet_money = data[0];
                this.balance = this.wallet_money.amount;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                // this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
        this.api.getWalletTransactions(uid).then((data) => {
            this.util.hide();
            if (data && data.length != 0) {
                this.transactions = data;
                console.log(this.transactions);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    view(id) {
        console.log(id);
        // localStorage.setItem('order-id', id);
        // this.navCtrl.navigateForward("billing-detail");
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('contact_phone');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Are you sure you want to call Aryavrat Organic Customer Care</strong>',
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
    orderInfo(id) {
        console.log(id);
        localStorage.setItem('order-id', id);
        this.router.navigate(['order-detail']);
    }
    subInfo(id) {
        localStorage.setItem('subscrption-id', id);
        this.router.navigate(['subscription-detail']);
    }
};
MyWalletPage = __decorate([
    Component({
        selector: "app-my-wallet",
        templateUrl: "./my-wallet.page.html",
        styleUrls: ["./my-wallet.page.scss"],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        CallNumber,
        AlertController])
], MyWalletPage);
export { MyWalletPage };
//# sourceMappingURL=my-wallet.page.js.map