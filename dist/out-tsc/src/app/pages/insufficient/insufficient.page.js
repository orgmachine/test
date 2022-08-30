import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';
let InsufficientPage = class InsufficientPage {
    constructor(modalController, api, util, navParams, datePicker, router, alertCtrl) {
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.currency_ = "₹";
        this.url = "https://firebasestorage.googleapis.com/v0/b/avagro-8a44d.appspot.com/o/icon.png?alt=media&token=e1201b05-d449-42a1-8133-387af474393b";
        this.getWalletBalance();
        const date = new Date();
        this.createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        this.getProfile();
    }
    getWalletBalance() {
        const uid = localStorage.getItem('uid');
        this.api.getWallet(uid).then((data) => {
            if (data && data.length != 0) {
                this.wallet_money = data[0];
                this.createdAt = this.wallet_money.createdAt;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getProfile() {
        const uid = localStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            console.log('my profile', data);
            if (data) {
                console.log(data);
                this.phone = data.phone;
                this.name = data.name;
                this.email = data.email;
                this.token = data.fcm_token;
                if (this.name == undefined) {
                    this.email = '';
                }
                else {
                    console.log('trigger else');
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        console.table(this.navParams);
        this.wallet_balance = this.navParams.data.wallet_balance;
        this.required_amount = this.navParams.data.required_amount;
    }
    makePay() {
        var options = {
            description: "Wallet Recharge",
            image: this.url,
            currency: environment.general.code,
            key: environment.razorpay.api_key,
            amount: 1 * 100,
            name: this.name,
            theme: {
                color: "#2C69A5",
            },
            modal: {
                ondismiss: function () {
                    alert("dismissed");
                },
            },
        };
        var successCallback = (payment_id) => {
            // alert("payment_id: " + payment_id);
            localStorage.setItem("paymentRazor", payment_id);
            this.razo('success');
        };
        var cancelCallback = (error) => {
            this.razo('failed');
            this.util.showToast("Sorry ! Payment not Posible With RazorPay", 'danger', 'bottom');
        };
        RazorpayCheckout.open(options, successCallback, cancelCallback);
    }
    razo(status) {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            transactionid: localStorage.getItem("paymentRazor"),
            id: id.toString(),
            status: status,
            createdAt: createdAt,
            amount: this.required_amount,
            uid: uid,
            type: 'Credit'
        };
        this.api.addTransaction(id.toString(), param).then((data) => {
            console.log(data);
            this.api.addWalletTransaction(id.toString(), param).then((userData) => {
                if (status == 'success') {
                    const uid = localStorage.getItem('uid');
                    const date = new Date();
                    const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                    const id = Math.floor(100000000 + Math.random() * 900000000);
                    // this.util.startLoad();
                    let data = {
                        uid: uid,
                        createdAt: created,
                        id: id,
                        payment_method: "razorpay",
                        payment_details: {
                            payment_status: 'Success',
                            id: localStorage.getItem("paymentRazor"),
                            method: "card",
                            amount: this.required_amount,
                            currency: this.currency_
                        }
                    };
                    this.api.referenceTransactionToWallet(id.toString(), data).then((data) => {
                        const uid = localStorage.getItem('uid');
                        const date = new Date();
                        const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                        const id = Math.floor(100000000 + Math.random() * 900000000);
                        let total_amount = this.required_amount + this.wallet_balance;
                        console.log(total_amount);
                        let post = {
                            uid: uid,
                            createdAt: this.createdAt,
                            updatedAt: updatedAt,
                            amount: total_amount,
                        };
                        this.api.addMoneyToWallet(uid, post).then((data) => {
                            this.util.hide();
                            this.util.showToast('Money added to wallet successfully', 'primary', 'bottom');
                            this.closeModal('success');
                            // this.router.navigate(['/tabs/tab1']);
                        }).catch(err => {
                            if (err) {
                                this.util.hide();
                                console.log(err);
                                this.util.showToast(`${err}`, 'danger', 'bottom');
                            }
                        });
                    }).catch(err => {
                        if (err) {
                            this.util.hide();
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                }
                else {
                    this.util.hide();
                    this.closeModal('failed');
                }
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.hide();
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    closeModal(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss(data);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
InsufficientPage = __decorate([
    Component({
        selector: 'app-insufficient',
        templateUrl: './insufficient.page.html',
        styleUrls: ['./insufficient.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController,
        ApisService,
        UtilService,
        NavParams,
        DatePicker,
        Router,
        AlertController])
], InsufficientPage);
export { InsufficientPage };
//# sourceMappingURL=insufficient.page.js.map