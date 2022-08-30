import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';
let OrdersPage = class OrdersPage {
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
        const date = new Date();
        this.today = moment(date).format("DD-MM-YYYY");
        this.mobile = localStorage.getItem('mobile');
    }
    ngOnInit() {
        this.util.subscribeOrderStatus().subscribe(data => {
            if (data) {
                this.allOrders = [];
                this.allSubscription = [];
                this.getMyOrders();
            }
        });
        this.getMyOrders();
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
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
            }
            this.dummy = [];
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
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
    goToOrderDetail(data) {
        localStorage.setItem('order', JSON.stringify(data.order));
        localStorage.setItem('order-id', data.id);
        this.isOrder = false;
        this.isSubscription = false;
        this.router.navigate(['order-detail']);
    }
    notifications() {
        this.router.navigate(['notifications']);
    }
};
OrdersPage = __decorate([
    Component({
        selector: 'app-orders',
        templateUrl: './orders.page.html',
        styleUrls: ['./orders.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        AngularFirestore,
        AlertController,
        CallNumber,
        ModalController,
        ActivatedRoute])
], OrdersPage);
export { OrdersPage };
//# sourceMappingURL=orders.page.js.map