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
let HistoryPage = class HistoryPage {
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
        this.priceattributes = [];
        this.getProducts();
        const date = new Date();
        this.today = moment(date).format("DD-MM-YYYY");
        this.mobile = localStorage.getItem('mobile');
        this.route.queryParams.subscribe(data => {
            if (data && data.from) {
                console.log(data);
                this.data = data;
                this.from = data.from;
                if (this.from == 'Order') {
                    this.isOrder = true;
                }
                else {
                    this.isSubscription = true;
                }
            }
            else {
                this.isSubscription = true;
            }
        });
        console.log(this.isOrder);
        // this.api.checkAuth().then(async (data: any) => {
        //   let uid = data.uid;
        //   let userid = '/user/'+uid
        //   }).catch(err => {
        //   if (err) {
        //     console.log(err);
        //     this.util.showToast(`${err}`, 'danger', 'bottom');
        //   }
        // });
    }
    ngOnInit() {
        this.getMySubscriptions();
        this.getMyOrders();
    }
    // ngOnDestroy(){
    //   this.isOrder = false;
    //   this.isSubscription = false;
    //   console.log(this.isOrder, this.isSubscription)
    //   this.allOrders = [];
    //   this.allSubscription = [];
    // }
    ngOnDestroy() {
        this.isOrder = false;
        this.isSubscription = false;
    }
    subscription() {
        console.log(this.isSubscription);
        if (this.isSubscription == false) {
            console.log(this.isSubscription);
            this.isSubscription = true;
            this.isOrder = false;
        }
        else {
            console.log(this.isSubscription);
            this.isSubscription = false;
            this.isOrder = true;
        }
    }
    order() {
        console.log(this.isOrder);
        if (this.isOrder == false) {
            this.isOrder = true;
            this.isSubscription = false;
        }
        else {
            console.log(this.isOrder);
            this.isOrder = false;
            this.isSubscription = true;
        }
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
                        console.log(y);
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
                        delivery_shift: x.delivery_shift,
                        quantity: x.quantity,
                        total_price: x.total_price,
                        start_date: x.start_date,
                        unsubscribe: x.unsubscribe,
                        weight: x.product_weight,
                        status: x.status,
                        payment_type: x.payment_type,
                        recurring: x.recurring,
                        due_date: x.due_date
                    });
                    this.allSubscription.push(prarr[0]);
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getMyOrders() {
        console.log(localStorage.getItem('uid'));
        let uid = localStorage.getItem('uid');
        this.api.getMyOrders(uid).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.haveItems = true;
                this.myOrders = data;
                // for (let x of this.myOrders){
                //   let pimg = '';
                //   let pname = '';
                //   let prarr = [];
                //    for (let y of this.products){
                //      if (x.product_id == y.id) {
                //        pimg = y.foodimage;
                //        pname = y.name;
                //      }
                //    }
                //    prarr.push({
                //     image:pimg,
                //     name:pname,
                //     order_id: x.id,
                //     quantity:x.quantity,
                //     total_price:x.total_price,
                //     weight:x.product_weight,
                //     date: x.createdOn,
                //     status: x.status,
                //     payment_type: x.payment_type,
                //     recurring: x.recurring
                //    })
                //    this.allOrders.push(prarr[0]);
                //    console.log(this.allOrders)
                // }
            }
            this.dummy = [];
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
        this.router.navigate(['history-detail'], {
            queryParams: {
                value: JSON.stringify(data)
            }
        });
    }
    goToOrderDetail(data) {
        localStorage.setItem('order', JSON.stringify(data.order));
        this.isOrder = false;
        this.isSubscription = false;
        this.router.navigate(['order-detail'], {
            queryParams: data
        });
    }
    notifications() {
        this.router.navigate(['notifications']);
    }
};
HistoryPage = __decorate([
    Component({
        selector: 'app-history',
        templateUrl: './history.page.html',
        styleUrls: ['./history.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        AngularFirestore,
        AlertController,
        CallNumber,
        ModalController,
        ActivatedRoute])
], HistoryPage);
export { HistoryPage };
//# sourceMappingURL=history.page.js.map