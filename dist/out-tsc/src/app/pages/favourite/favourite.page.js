import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavParams, AlertController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
let FavouritePage = class FavouritePage {
    constructor(modalController, api, util, navParams, datePicker, router, alertCtrl) {
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.navParams = navParams;
        this.datePicker = datePicker;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.minDate = new Date().toJSON().split('T')[0];
        var startdate = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
        this.start_date = moment(startdate).format("YYYY-DD-MM");
        console.log(this.start_date);
        var enddate = new Date(new Date().setDate(new Date().getDate() + 2)).valueOf();
        this.end_date = moment(enddate).format("YYYY-DD-MM");
        console.log(this.start_date);
    }
    ngOnInit() {
        console.table(this.navParams);
        this.subscriptionId = this.navParams.data.subscriptionId;
        this.product_price = this.navParams.data.product_price;
        this.modalTitle = this.navParams.data.modalTitle;
        this.quantity = parseInt(this.navParams.data.quantity);
    }
    datePicker1() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)).valueOf(),
            // maxDate: new Date(new Date().setDate(new Date().getDate() + 10)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            var date_select = date;
            this.start_date = moment(date).format("YYYY-DD-MM");
        }).catch(error => {
            console.log(error);
        });
    }
    datePicker2() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            var date_select = date;
            this.end_date = moment(date).format("YYYY-DD-MM");
        }).catch(error => {
            console.log(error);
        });
    }
    minusQuantity() {
        if (this.quantity != 1) {
            console.log(this.quantity);
            this.quantity = this.quantity - 1;
        }
    }
    addQuantity() {
        console.log(this.quantity);
        this.quantity = this.quantity + 1;
    }
    set() {
        this.util.show('Please wait....');
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss");
        let param = {
            uid: uid,
            id: id.toString(),
            createdOn: createdOn,
            start_date: this.start_date,
            end_date: this.end_date,
            subscriptionId: this.subscriptionId
        };
        this.api.addVaccations(id.toString(), param).then((data) => {
            console.log(data);
            this.closeModal(this.subscriptionId);
            this.util.publishOrderStatus('true');
            this.util.hide();
            this.showVaccationAlert();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    update() {
        this.util.show('Please wait....');
        let total_order_price = this.product_price * this.quantity;
        console.log(this.subscriptionId);
        const date = new Date();
        const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss");
        let param = {
            total_price: total_order_price,
            quantity: this.quantity,
            updatedAt: updatedAt
        };
        this.api.updateSubscription(this.subscriptionId, param).then((data) => {
            console.log(data);
            let shared = {
                quantity: this.quantity,
                total_price: total_order_price
            };
            this.closeModal(shared);
            this.util.publishOrderStatus('true');
            this.util.hide();
            this.showQtyAlert();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    showQtyAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Done!',
                message: '<strong>Your quantity has been updated successfully</strong>!',
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
    showVaccationAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Done!',
                message: '<strong>You have successfully set vaccations for your subscrptions</strong>!',
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
FavouritePage = __decorate([
    Component({
        selector: 'app-favourite',
        templateUrl: './favourite.page.html',
        styleUrls: ['./favourite.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController,
        ApisService,
        UtilService,
        NavParams,
        DatePicker,
        Router,
        AlertController])
], FavouritePage);
export { FavouritePage };
//# sourceMappingURL=favourite.page.js.map