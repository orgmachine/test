import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController, ModalController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import * as moment from 'moment';
import { InsufficientPage } from '../insufficient/insufficient.page';
let OrderCheckoutPage = class OrderCheckoutPage {
    constructor(api, router, util, navCtrl, route, modalController) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.order = [];
        this.promotion = 0;
        this.cart = [];
        this.used_coupon_count = 0;
        this.billing_address = true;
        this.enableBilling = false;
        this.billing = {
            first_name: '',
            last_name: '',
            address: '',
            apartment: '',
            city: '',
            state: '',
            pincode: '',
            mobile: ''
        };
        this.balance = 0;
        this.currency_ = "₹";
        this.order_total_value = 0;
        this.url = "https://firebasestorage.googleapis.com/v0/b/avagro-8a44d.appspot.com/o/icon.png?alt=media&token=e1201b05-d449-42a1-8133-387af474393b";
        localStorage.setItem("currency_symbol", this.currency_);
        this.route.queryParams.subscribe(data => {
            this.items_price = data.items_price;
            this.order_total_value = Number(this.items_price);
        });
        let cart = localStorage.getItem('cart');
        this.order = JSON.parse(cart);
        const add = JSON.parse(localStorage.getItem('deliveryAddress'));
        console.log(add);
        this.myAddress = add.address;
        this.myAddressId = add.id;
        this.societyId = add.societyId;
        this.society_name = add.society_name;
        console.log(this.societyId);
        console.log(this.myAddress, this.myAddressId);
        this.getProfile();
        this.util.getCouponObservable().subscribe(data => {
            if (data) {
                console.log(data);
                if (data.type == "₹") {
                    this.promotion = data.discout;
                    this.couponCode = data.code;
                    this.couponId = data.id;
                    this.order_total_value = this.items_price - this.promotion;
                    this.getCoupon(this.couponId);
                    console.log('coupon', this.promotion);
                    console.log(this.total_price);
                    localStorage.setItem('coupon', JSON.stringify(data));
                }
                else if (data.type == "%") {
                    let percentage_discount = data.discout;
                    var percent = (percentage_discount / 100) * this.items_price;
                    if (percent >= data.upto) {
                        this.promotion = data.upto;
                    }
                    else {
                        this.promotion = percent;
                    }
                    this.couponCode = data.code;
                    this.couponId = data.id;
                    this.order_total_value = this.items_price - this.promotion;
                    this.getCoupon(this.couponId);
                    console.log('coupon', this.promotion);
                    console.log(this.total_price);
                    localStorage.setItem('coupon', JSON.stringify(data));
                }
            }
        });
    }
    showBilling(value) {
        if (value == false) {
            this.enableBilling = true;
        }
        else {
            this.enableBilling = false;
        }
        console.log(this.billing);
    }
    ionViewWillEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            this.currency_ = localStorage.getItem("currency_symbol");
            const uid = localStorage.getItem('uid');
            this.api.getWallet(uid).then((data) => {
                this.util.hide();
                if (data && data.length != 0) {
                    this.wallet_money = data[0];
                    this.balance = this.wallet_money.amount;
                }
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.hide();
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    getWallet() {
        this.util.show('Please wait....');
        this.currency_ = localStorage.getItem("currency_symbol");
        const uid = localStorage.getItem('uid');
        this.api.getWallet(uid).then((data) => {
            this.util.hide();
            if (data && data.length != 0) {
                this.wallet_money = data[0];
                this.balance = this.wallet_money.amount;
                this.payWithWallet();
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
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
    placeOrder() {
        return __awaiter(this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            this.total_price = this.items_price - this.promotion;
            console.log(this.total_price);
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.order_id = id;
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            var deldate = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
            let deliverydate = moment(deldate).format("YYYY-MM-DD");
            let userId = '/users/' + uid;
            if (this.couponCode == undefined) {
                this.couponCode = '';
            }
            const param = {
                id: id.toString(),
                uid: userId,
                userId: uid,
                createdOn: createdOn,
                payment_type: 'Pay On Delivery',
                total_price: this.order_total_value,
                recurring: 0,
                status: 'created',
                address: this.myAddressId,
                order: this.order,
                deliverydate: deliverydate,
                promotion: this.promotion,
                coupon: this.couponCode,
                billng_address: this.billing,
                society: this.societyId
            };
            console.log(param);
            this.api.addOrder(id.toString(), param).then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
                this.util.clearCart();
                this.sendNotification();
                this.sendmail();
                this.sendSMS();
                this.coupon();
                for (let x of this.order) {
                    console.log(x);
                    let product_id = x.product_id;
                    let perQuantitySold = x.perQuantitySold;
                    let perOrderSold = x.perOrderSold + 1;
                    console.log(perOrderSold);
                    const param = {
                        updatedAt: createdOn,
                        perQuantitySold: perQuantitySold,
                        perOrderSold: perOrderSold,
                    };
                    yield this.api.updateProduct(product_id, param).then((response) => __awaiter(this, void 0, void 0, function* () {
                        console.log(response);
                    })).catch(err => {
                        if (err) {
                            this.util.hide();
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                }
                let navData = {
                    from: 'Order'
                };
                let navigationExtras = {
                    queryParams: navData,
                    // replaceUrl: true
                };
                this.util.hide();
                this.navCtrl.navigateRoot(['summary'], navigationExtras);
            })).catch(err => {
                if (err) {
                    this.util.hide();
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    payWithRazorpay() {
        return __awaiter(this, void 0, void 0, function* () {
            this.total_price = this.items_price - this.promotion;
            console.log(this.total_price);
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.order_id = id;
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            var deldate = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
            let deliverydate = moment(deldate).format("YYYY-MM-DD");
            if (this.couponCode == undefined) {
                this.couponCode = '';
            }
            let userId = '/users/' + uid;
            const param = {
                id: id.toString(),
                uid: userId,
                userId: uid,
                createdOn: createdOn,
                payment_type: 'Razorpay',
                total_price: this.order_total_value,
                recurring: 0,
                status: 'created',
                address: this.myAddressId,
                order: this.order,
                deliverydate: deliverydate,
                promotion: this.promotion,
                coupon: this.couponCode,
                billng_address: this.billing,
                society: this.societyId
            };
            console.log(param);
            var options = {
                description: 'Order Id' + id,
                image: this.url,
                currency: environment.general.code,
                key: environment.razorpay.api_key,
                amount: this.total_price * 100,
                name: 'Aryavart Agro',
                prefill: {
                    email: this.email,
                    contact: this.phone,
                    name: this.name,
                },
                theme: {
                    color: '#F37254'
                },
                modal: {
                    ondismiss: function () {
                        console.log('dismissed');
                    }
                }
            };
            var successCallback = (payment_id) => {
                this.util.show('Please wait....');
                console.log('payment_id: ' + payment_id);
                this.api.addOrder(id.toString(), param).then((data) => __awaiter(this, void 0, void 0, function* () {
                    console.log(data);
                    this.util.clearCart();
                    const uid = localStorage.getItem('uid');
                    const date = new Date();
                    const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                    const id = Math.floor(100000000 + Math.random() * 900000000);
                    let params = {
                        transactionid: payment_id,
                        id: id.toString(),
                        createdAt: createdAt,
                        amount: this.order_total_value,
                        status: 'SUCCESS',
                        uid: uid,
                        order_id: this.order_id,
                        type: 'Order'
                    };
                    this.api.addTransaction(id.toString(), params).then((data) => __awaiter(this, void 0, void 0, function* () {
                        console.log(data);
                        this.util.clearCart();
                        this.sendNotification();
                        this.coupon();
                        this.sendSMS();
                        for (let x of this.order) {
                            console.log(x);
                            let product_id = x.product_id;
                            let perQuantitySold = x.perQuantitySold;
                            let perOrderSold = x.perOrderSold + 1;
                            console.log(perOrderSold);
                            const param = {
                                updatedAt: createdOn,
                                perQuantitySold: perQuantitySold,
                                perOrderSold: perOrderSold,
                            };
                            yield this.api.updateProduct(product_id, param).then((response) => __awaiter(this, void 0, void 0, function* () {
                                console.log(response);
                            })).catch(err => {
                                if (err) {
                                    this.util.hide();
                                    console.log(err);
                                    this.util.showToast(`${err}`, 'danger', 'bottom');
                                }
                            });
                        }
                        let navData = {
                            from: 'Order'
                        };
                        let navigationExtras = {
                            queryParams: navData
                        };
                        this.util.hide();
                        this.navCtrl.navigateRoot(['summar'], navigationExtras);
                    })).catch(err => {
                        if (err) {
                            this.util.hide();
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                })).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            };
            var cancelCallback = (error) => {
                console.log(error.description + ' (Error ' + error.code + ')');
            };
            RazorpayCheckout.open(options, successCallback, cancelCallback);
        });
    }
    walletPay() {
        return __awaiter(this, void 0, void 0, function* () {
            this.total_price = this.items_price - this.promotion;
            console.log(this.balance + '<' + this.order_total_value);
            let required_amount = this.total_price - this.balance;
            if (this.balance >= this.order_total_value) {
                this.payWithWallet();
            }
            else if (this.balance < this.total_price) {
                const modal = yield this.modalController.create({
                    component: InsufficientPage,
                    cssClass: 'ins-modal-css',
                    componentProps: {
                        "wallet_balance": this.balance,
                        "required_amount": required_amount
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data == 'success') {
                        this.getWallet();
                    }
                });
                return yield modal.present();
                // this.util.showToast('Payment not possible. Your wallet balance is low', 'danger', 'bottom');
            }
        });
    }
    payWithWallet() {
        return __awaiter(this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            // this.total_price = this.items_price - this.promotion;
            console.log(this.total_price);
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            let total_amount = this.balance - this.total_price;
            console.log(total_amount);
            let post = {
                uid: uid,
                updatedAt: updatedAt,
                amount: total_amount,
            };
            yield this.api.addMoneyToWallet(uid, post).then((data) => __awaiter(this, void 0, void 0, function* () {
                const id = Math.floor(100000000 + Math.random() * 900000000);
                this.order_id = id;
                const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                var deldate = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
                let deliverydate = moment(deldate).format("YYYY-MM-DD");
                let userId = '/users/' + uid;
                if (this.couponCode == undefined) {
                    this.couponCode = '';
                }
                const param = {
                    id: id.toString(),
                    uid: userId,
                    userId: uid,
                    createdOn: createdOn,
                    payment_type: 'Pay With Wallet',
                    total_price: this.order_total_value,
                    recurring: 0,
                    status: 'created',
                    address: this.myAddressId,
                    order: this.order,
                    deliverydate: deliverydate,
                    promotion: this.promotion,
                    coupon: this.couponCode,
                    billng_address: this.billing,
                    society: this.societyId
                };
                console.log(param);
                yield this.api.addOrder(id.toString(), param).then((data) => __awaiter(this, void 0, void 0, function* () {
                    console.log(data);
                    this.walletTransaction(id);
                    this.util.clearCart();
                    this.sendNotification();
                    this.sendmail();
                    this.sendSMS();
                    this.coupon();
                    for (let x of this.order) {
                        console.log(x);
                        let product_id = x.product_id;
                        let perQuantitySold = x.perQuantitySold;
                        let perOrderSold = x.perOrderSold + 1;
                        console.log(perOrderSold);
                        const param = {
                            updatedAt: createdOn,
                            perQuantitySold: perQuantitySold,
                            perOrderSold: perOrderSold,
                        };
                        yield this.api.updateProduct(product_id, param).then((response) => __awaiter(this, void 0, void 0, function* () {
                            console.log(response);
                        })).catch(err => {
                            if (err) {
                                this.util.hide();
                                console.log(err);
                                this.util.showToast(`${err}`, 'danger', 'bottom');
                            }
                        });
                    }
                    let navData = {
                        from: 'Order'
                    };
                    let navigationExtras = {
                        queryParams: navData
                    };
                    this.util.hide();
                    this.navCtrl.navigateRoot(['summary'], navigationExtras);
                })).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            })).catch(err => {
                if (err) {
                    this.util.hide();
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    walletTransaction(orderid) {
        return __awaiter(this, void 0, void 0, function* () {
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            const id = Math.floor(100000000 + Math.random() * 900000000);
            let param = {
                transactionid: id.toString(),
                id: id.toString(),
                status: 'success',
                createdAt: createdAt,
                amount: this.order_total_value,
                uid: uid,
                type: 'Debit',
                orderid: orderid
            };
            console.log(param);
            yield this.api.addWalletTransaction(id.toString(), param).then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
            })).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    sendNotification() {
        let msg = 'Your order has been placed successfully.';
        let title = 'Thanks for shopping with us!';
        this.api.sendNotification(title, msg, this.token).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
    sendSMS() {
        let url = 'http://demo.orgmachine.com/avagro_sms/send.php?orderid=' + this.order_id + '&name=' + this.name + '&mobile=' + this.phone;
        console.log(url);
        this.api.sendOrderSms(url).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
    coupon() {
        if (this.couponId !== undefined) {
            const uid = localStorage.getItem('uid');
            console.log(uid);
            const date = new Date();
            const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
            const id = Math.floor(100000000 + Math.random() * 900000000);
            this.used_coupon_count = this.used_coupon_count + 1;
            let params = {
                couponCode: this.couponCode,
                id: this.couponId,
                uid: uid,
                couponid: this.couponId,
                used_coupon: this.used_coupon_count
            };
            this.api.addUsedCoupon(this.couponId, params).then((data) => {
                console.log(data);
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }
        else {
            console.log('No coupon applied');
        }
    }
    getCoupon(couponid) {
        const uid = localStorage.getItem('uid');
        console.log(uid, couponid);
        this.api.getUsedCouponById(uid, couponid).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.used_coupon_count = data[0].used_coupon;
                console.log('used_coupon_count' + this.used_coupon_count);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    openCoupon() {
        // this.total_price = this.items_price - this.promotion;
        // console.log(this.total_price)
        const navData = {
            queryParams: {
                societyId: this.societyId,
                society_name: this.society_name,
                totalPrice: this.order_total_value
            }
        };
        console.log(navData);
        this.router.navigate(['coupons'], navData);
    }
    sendmail() {
        this.api.sendEmail().subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
};
OrderCheckoutPage = __decorate([
    Component({
        selector: 'app-order-checkout',
        templateUrl: './order-checkout.page.html',
        styleUrls: ['./order-checkout.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        NavController,
        ActivatedRoute,
        ModalController])
], OrderCheckoutPage);
export { OrderCheckoutPage };
//# sourceMappingURL=order-checkout.page.js.map