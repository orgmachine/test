import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { FormBuilder, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, NavController } from '@ionic/angular';
let RatingPage = class RatingPage {
    constructor(api, util, router, alertCtrl, adb, route, navCtrl, formBuilder) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.adb = adb;
        this.route = route;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.price = 0;
        this.lab = 0;
        this.sample = 0;
        this.report = 0;
        this.booking = 0;
        this.remark = '';
        this.rateForm = this.formBuilder.group({
            price: ['', Validators.required],
            lab: ['', Validators.required],
            sample: ['', Validators.required],
            report: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(6)]],
            booking: ['', Validators.required],
            comment: ['', Validators.required]
        });
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.getBooking(this.booking_id);
    }
    getBooking(id) {
        this.api.getBookingById(id).then(data => {
            this.detail = data[0];
            this.getSecondaryLab(this.detail.lab_id);
        }).catch(error => {
            console.log(error);
        });
    }
    getSecondaryLab(id) {
        this.api.getSecondaryLabById(id).then(data => {
            this.lab_detail = data[0];
        }).catch(error => {
            console.log(error);
        });
    }
    logPriceRating(rating) {
        this.price = rating;
    }
    logLabRating(rating) {
        this.lab = rating;
    }
    logSampleRating(rating) {
        this.sample = rating;
    }
    logReportRating(rating) {
        this.report = rating;
    }
    logBookingRating(rating) {
        this.booking = rating;
    }
    ngOnInit() {
    }
    submit() {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const createdAt = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            createdAt: createdAt,
            id: id,
            booking_id: this.booking_id,
            booking_exp: this.booking,
            collection_process: this.sample,
            price: this.price,
            result_quality: this.report,
            slot_timing: this.lab,
            comment: this.remark,
            lab_id: this.lab_detail.uid,
            product_id: '',
            user: uid,
            status: 0
        };
        console.log(param);
        this.api.addReview(id.toString(), param).then((response) => {
            const param = {
                updatedAt: createdAt,
                isRate: 1
            };
            this.api.updateBooking(this.booking_id, param).then((response) => {
                console.log(response);
                this.util.hide();
                this.alert();
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
    alert() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('mobile');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Thanks for your valuable feedback</strong>',
                mode: 'ios',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Ok',
                        cssClass: 'login-button',
                        handler: () => {
                            this.navCtrl.back();
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
RatingPage = __decorate([
    Component({
        selector: 'app-rating',
        templateUrl: './rating.page.html',
        styleUrls: ['./rating.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        AlertController,
        AngularFirestore,
        ActivatedRoute,
        NavController,
        FormBuilder])
], RatingPage);
export { RatingPage };
//# sourceMappingURL=rating.page.js.map