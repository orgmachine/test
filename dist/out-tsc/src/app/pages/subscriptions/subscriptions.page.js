import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FavouritePage } from '../favourite/favourite.page';
import * as moment from 'moment';
let SubscriptionsPage = class SubscriptionsPage {
    constructor(api, util, router, adb, alertCtrl, callNumber, modalController, route) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.route = route;
        this.haveItems = false;
        this.myOrders = [];
        this.mySubscriptions = [];
        this.dummy = Array(50);
        this.products = [];
        this.allSubscription = [];
        this.allOrders = [];
        this.isSubscription = false;
        this.isOrder = false;
        this.isDelivery = false;
        this.priceattributes = [];
        this.getProducts();
        const date = new Date();
        this.today = moment(date).format("DD-MM-YYYY");
        this.mobile = localStorage.getItem('mobile');
    }
    ngOnInit() {
        this.util.subscribeOrderStatus().subscribe(data => {
            if (data) {
                this.allOrders = [];
                this.allSubscription = [];
                this.getMySubscriptions();
            }
        });
        this.getMySubscriptions();
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    getProducts() {
        this.api.getAllProducts().then((data) => {
            this.products = data;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getMySubscriptions() {
        console.log(localStorage.getItem('uid'));
        let uid = localStorage.getItem('uid');
        this.api.getMySubscriptions(uid).then((data) => {
            if (data && data.length) {
                this.haveItems = true;
                this.mySubscriptions = data;
                console.log(this.mySubscriptions);
                for (let x of this.mySubscriptions) {
                    let pimg = '';
                    let pname = '';
                    let prarr = [];
                    let pay_date = '';
                    for (let y of this.products) {
                        if (x.product_id == y.id) {
                            pimg = y.foodimage;
                            pname = y.name;
                            this.priceattributes = y.priceattributes;
                        }
                    }
                    prarr.push({
                        image: pimg,
                        name: pname,
                        subscription_id: x.id,
                        product_id: x.product_id,
                        // delivery_shift:x.delivery_shift,
                        delivery_type: x.delivery_type,
                        quantity: x.quantity,
                        total_price: x.total_price,
                        start_date: x.start_date,
                        unsubscribe: x.unsubscribe,
                        weight: x.product_weight,
                        status: x.status,
                        payment_type: x.payment_type,
                        recurring: x.recurring,
                        due_date: x.due_date,
                        createdOn: x.createdOn
                    });
                    this.allSubscription.push(prarr[0]);
                    console.log(this.allSubscription);
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    pause(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const alert = yield this.alertCtrl.create({
                // cssClass: 'scheduleCss',
                header: 'Pause Subscription',
                backdropDismiss: true,
                message: '<strong>Are you sure you want to pause your subscription?</strong>!!!',
                mode: 'ios',
                buttons: [
                    {
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: (blah) => {
                            console.log('Confirm Cancel: blah');
                        }
                    }, {
                        text: 'Yes',
                        handler: () => {
                            const date = new Date();
                            const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss");
                            let param = {
                                unsubscribe: 1,
                                updatedAt: updatedAt
                            };
                            this.api.updateSubscription(id, param).then((data) => {
                                this.myOrders = [];
                                this.allSubscription = [];
                                console.log(this.mySubscriptions);
                                this.ngOnInit();
                            }).catch(err => {
                                if (err) {
                                    console.log(err);
                                    this.util.showToast(`${err}`, 'danger', 'bottom');
                                }
                            });
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('contact_phone');
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
    add() {
        this.router.navigate(['products-list']);
    }
    skip(id, unsubscribed) {
        return __awaiter(this, void 0, void 0, function* () {
            if (unsubscribed == 0) {
                const modal = yield this.modalController.create({
                    component: FavouritePage,
                    cssClass: 'skip-modal-css',
                    componentProps: {
                        "subscriptionId": id,
                        "modalTitle": "Skip"
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data !== undefined) {
                        this.allOrders = [];
                        this.allSubscription = [];
                        this.ngOnInit();
                    }
                });
                return yield modal.present();
            }
            else {
                this.unsubscribed();
            }
        });
    }
    addQuantity(item) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(item);
            if (item.unsubscribe == 0) {
                let weight = item.weight.split(" ");
                console.log(weight[0]);
                for (let x of this.priceattributes) {
                    if (x.weight == weight[0]) {
                        this.product_price = x.price;
                        console.log(this.product_price);
                    }
                }
                const modal = yield this.modalController.create({
                    component: FavouritePage,
                    cssClass: 'qty-modal-css',
                    componentProps: {
                        "subscriptionId": item.subscription_id,
                        "quantity": item.quantity,
                        "product_price": this.product_price,
                        "modalTitle": "Quantity"
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned.data !== undefined) {
                        console.log(dataReturned);
                        this.myOrders = [];
                        this.allSubscription = [];
                        console.log(this.mySubscriptions);
                        this.ngOnInit();
                        // var result = dataReturned.data;
                        // console.log(dataReturned)
                        // this.quantity = result;
                        // console.log(this.quantity)
                    }
                });
                return yield modal.present();
            }
            else {
                this.unsubscribed();
            }
        });
    }
    unsubscribed() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Ooops!',
                message: '<strong>You have already unsubscribed this subscrption</strong>!',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.getProfile();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    goToHistoryDetail(data) {
        this.isOrder = false;
        this.isSubscription = false;
        localStorage.setItem('subscrption-id', data.subscription_id);
        this.router.navigate(['subscription-detail']);
    }
    notifications() {
        this.router.navigate(['notifications']);
    }
};
SubscriptionsPage = __decorate([
    Component({
        selector: 'app-subscriptions',
        templateUrl: './subscriptions.page.html',
        styleUrls: ['./subscriptions.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        AngularFirestore,
        AlertController,
        CallNumber,
        ModalController,
        ActivatedRoute])
], SubscriptionsPage);
export { SubscriptionsPage };
//# sourceMappingURL=subscriptions.page.js.map