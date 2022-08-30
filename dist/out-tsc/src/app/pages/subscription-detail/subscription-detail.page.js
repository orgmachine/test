import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { FavouritePage } from '../favourite/favourite.page';
import * as moment from 'moment';
let SubscriptionDetailPage = class SubscriptionDetailPage {
    constructor(route, api, router, util, alertCtrl, navCtrl, callNumber, modalController) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.myVaccations = [];
        this.dateArray = [];
        this.vaccationDates = [];
        this.isView = false;
        this.newVacDate = [];
        this.price_attriutes = [];
        this.deliveries = [];
        this.showPay = false;
        this.payable_amount = 0;
        var date = new Date();
        this.current_date = moment(date).format("DD-MM-YYYY");
        this.subscription_id = localStorage.getItem('subscrption-id');
        this.getSubscription(this.subscription_id);
    }
    getSubscription(id) {
        this.api.getSubscriptionById(id).then(data => {
            this.sub_detail = data[0];
            console.log(this.sub_detail);
            this.recurring = this.sub_detail.recurring;
            this.product_name = this.sub_detail.name;
            this.product_weight = this.sub_detail.product_weight;
            this.product_quantity = this.sub_detail.quantity;
            this.total_price = this.sub_detail.total_price;
            this.status = this.sub_detail.status;
            this.product_id = this.sub_detail.product_id;
            this.due_date = this.sub_detail.due_date;
            this.unsubscribe = this.sub_detail.unsubscribe;
            this.getMyVaccations();
            this.getProductById(this.product_id);
            this.getMyDeliveries();
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    toggle() {
        if (!this.isView) {
            this.isView = true;
        }
        else {
            this.isView = false;
        }
    }
    getProductById(id) {
        console.log(id);
        this.api.getProductDetails(id).then((data) => {
            this.product_name = data[0].name;
            this.price_attriutes = data[0].priceattributes;
            for (let x of this.price_attriutes) {
                let weight = this.product_weight.split(" ");
                if (x.weight == weight[0]) {
                    this.product_price = x.price;
                }
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getMyVaccations() {
        console.log(this.subscription_id);
        this.api.getMyVaccations(this.subscription_id).then((data) => {
            if (data && data.length) {
                this.myVaccations = data;
                for (let x of this.myVaccations) {
                    console.log(x.subscriptionId);
                    let start_date = [];
                    let end_date = [];
                    let all_date = [];
                    start_date = x.start_date;
                    end_date = x.end_date;
                    all_date.push({ start_date: start_date, end_date: end_date });
                    console.log(all_date);
                    this.dateArray.push(all_date[0]);
                    console.log(this.dateArray);
                    let date = [];
                    for (let y of this.dateArray) {
                        console.log(y.start_date, y.end_date);
                        date.push(this.getDates(y.start_date, y.end_date));
                        console.log(date);
                        this.vaccationDates = date;
                        console.log(this.vaccationDates);
                        for (let z of this.vaccationDates) {
                            console.log(z);
                            this.newVacDate = z;
                        }
                    }
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getDates(startDate, stopDate) {
        var dateArray = [];
        var currentDate = moment(startDate);
        var endDate = moment(stopDate);
        while (currentDate <= endDate) {
            dateArray.push(moment(currentDate).format('YYYY-MM-DD'));
            currentDate = moment(currentDate).add(1, 'days');
            console.log(dateArray);
        }
        return dateArray;
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
                            this.util.show('Please wait....');
                            const date = new Date();
                            const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss");
                            let param = {
                                unsubscribe: 1,
                                updatedAt: updatedAt
                            };
                            this.api.updateSubscription(id, param).then((data) => {
                                console.log(data);
                                this.unsubscribe = 1;
                                this.util.publishOrderStatus('true');
                                this.util.hide();
                                this.util.showToast('Your have successfully pause your subscription', 'primary', 'bottom');
                            }).catch(err => {
                                if (err) {
                                    this.util.hide();
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
    cancel(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            const alert = yield this.alertCtrl.create({
                // cssClass: 'scheduleCss',
                header: 'Cancel Order',
                backdropDismiss: true,
                message: '<strong>Are you sure you want to cancel your order?</strong>!!!',
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
                                status: 'cancel',
                                updatedAt: updatedAt
                            };
                            this.api.updateOrderStatus(id, param).then((data) => {
                                this.status = 'cancel';
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
    skip(id) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.unsubscribe == 0) {
                const modal = yield this.modalController.create({
                    component: FavouritePage,
                    cssClass: 'skip-modal-css',
                    componentProps: {
                        "subscriptionId": id,
                        "modalTitle": "Skip"
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned !== null) {
                        var result = dataReturned.data;
                    }
                });
                return yield modal.present();
            }
            else {
                this.unsubscribed();
            }
        });
    }
    addQuantity(id, quantity) {
        return __awaiter(this, void 0, void 0, function* () {
            if (this.unsubscribe == 0) {
                const modal = yield this.modalController.create({
                    component: FavouritePage,
                    cssClass: 'qty-modal-css',
                    componentProps: {
                        "subscriptionId": id,
                        "quantity": quantity,
                        "product_price": this.product_price,
                        "modalTitle": "Quantity"
                    }
                });
                modal.onDidDismiss().then((dataReturned) => {
                    if (dataReturned !== null) {
                        console.log(dataReturned);
                        var result = dataReturned.data;
                        this.product_quantity = result.quantity;
                        this.total_price = result.total_price;
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
                header: 'Oops!',
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
    getMyDeliveries() {
        this.api.getDeliveriesById(this.subscription_id).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.deliveries = data;
                console.log('my deliveries==>', this.deliveries);
                // this.count = this.deliveries.length;
                // // console.log(this.count)
                // if(this.count=5){
                //   this.showPay = true;
                // }
                if (this.due_date == this.current_date) {
                    for (let x of this.deliveries) {
                        if (x.status == 'completed') {
                            let total = x.total_amount;
                            this.payable_amount = this.payable_amount + total;
                            console.log(this.payable_amount);
                        }
                    }
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
};
SubscriptionDetailPage = __decorate([
    Component({
        selector: 'app-subscription-detail',
        templateUrl: './subscription-detail.page.html',
        styleUrls: ['./subscription-detail.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        Router,
        UtilService,
        AlertController,
        NavController,
        CallNumber,
        ModalController])
], SubscriptionDetailPage);
export { SubscriptionDetailPage };
//# sourceMappingURL=subscription-detail.page.js.map