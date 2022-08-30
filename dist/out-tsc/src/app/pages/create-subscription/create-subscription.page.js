import { __awaiter, __decorate, __metadata } from "tslib";
import { NavController, AlertController, ModalController, IonContent } from '@ionic/angular';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { DatePicker } from '@ionic-native/date-picker/ngx';
import { Router } from '@angular/router';
import * as moment from 'moment';
let CreateSubscriptionPage = class CreateSubscriptionPage {
    constructor(route, api, util, navCtrl, alertController, router, datePicker, modalController, sanitizer) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.datePicker = datePicker;
        this.modalController = modalController;
        this.sanitizer = sanitizer;
        this.segmentModel = 'about';
        this.desarr = [];
        this.isIngr = false;
        this.isDes = false;
        this.everyday = false;
        this.one = false;
        this.alternate = false;
        this.customise = false;
        this.start_date = '';
        this.end_date = '';
        this.delivery_date = '';
        this.maxDate = new Date().toJSON().split('T')[0];
        this.quantity = 1;
        this.delivery_type = "Everyday";
        this.delivery_shift = "Morning";
        this.isShift = false;
        this.isDelivery = false;
        this.type = 'text';
        this.other_image = [];
        this.cart = [];
        this.allProducts = [];
        this.catProducts = [];
        this.rating = 0;
        this.star_rating = 0;
        this.rating_count = 0;
        this.avg_rating = 0;
        this.perQuantitySold = 0;
        this.perOrderSold = 0;
        this.reviews = [];
        this.allReviews = [];
        this.slideOpts = {
            slidesPerView: 1.0,
            pagination: false,
            pager: false
        };
        this.slideOpts1 = {
            slidesPerView: 1.0,
        };
        this.slideOpts2 = {
            slidesPerView: 3.2,
            pagination: false,
            pager: false
        };
        this.weekday = [];
        this.select = false;
        this.isShowInfo = false;
        this.weekdays = [
            { name: 'M', id: 1, select: false },
            { name: 'T', id: 2, select: false },
            { name: 'W', id: 3, select: false },
            { name: 'T', id: 4, select: false },
            { name: 'F', id: 5, select: false },
            { name: 'S', id: 6, select: false },
            { name: 'S', id: 7, select: false }
        ];
        this.timeList = [
            { name: 'Morning', icon: 'partly-sunny' },
            { name: 'Evening', icon: 'cloudy-night' },
            // 'Both',
        ];
        this.typeList = [
            'Everyday',
            'Once',
            'Alternate',
        ];
    }
    showInfo() {
        this.isShowInfo = true;
    }
    daySelect(day, value, index) {
        let result = this.weekdays.filter(ex => ex.select == true);
        if (value == false) {
            this.weekday.splice(index);
            this.no_of_deliveries = Math.round(this.diff_weeks(this.start, this.end) * this.weekday.length);
            this.calculateTotal();
        }
        else {
            console.log(this.weekday.length);
            this.weekday.push(day);
            if (this.weekday.length == 7) {
                this.radioChecked('Everyday');
                this.weekday = [];
                this.weekdays = [
                    { name: 'M', id: 1, select: false },
                    { name: 'T', id: 2, select: false },
                    { name: 'W', id: 3, select: false },
                    { name: 'T', id: 4, select: false },
                    { name: 'F', id: 5, select: false },
                    { name: 'S', id: 6, select: false },
                    { name: 'S', id: 7, select: false }
                ];
            }
            else {
                this.no_of_deliveries = Math.round(this.diff_weeks(this.start, this.end) * this.weekday.length);
                this.calculateTotal();
            }
        }
    }
    ionViewWillEnter() {
        this.util.show('Please wait....');
        var date = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
        this.start_date = moment(date).format("DD-MM-YYYY");
        this.delivery_date = moment(date).format("DD-MM-YYYY");
        let add30Days = new Date(new Date().setDate(new Date().getDate() + 31)).valueOf();
        this.due_date = moment(add30Days).format("DD-MM-YYYY hh:mm:ss");
        var end_date = new Date(new Date().setDate(new Date().getDate() + 7)).valueOf();
        this.end_date = moment(end_date).format("DD-MM-YYYY");
        this.start = new Date();
        this.end = new Date(new Date().setDate(new Date().getDate() + 7)).valueOf();
        this.no_of_deliveries = this.calculatedays(this.start, this.end);
        this.util.hide();
        this.route.queryParams.subscribe(data => {
            this.id = data.id;
            this.product_id = this.id;
            this.getProductDetailsById(this.product_id);
        });
    }
    calculatedays(start_date, end_date) {
        const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        let diffDays;
        return diffDays = Math.round(Math.abs((start_date - end_date) / oneDay));
    }
    diff_weeks(dt2, dt1) {
        var diff = (dt2 - dt1) / 1000;
        var difference = diff /= (60 * 60 * 24 * 7);
        return Math.abs(Math.round(difference));
    }
    getProductDetailsById(id) {
        this.api.getProductDetails(id).then((data) => {
            this.product_detail = data[0];
            this.category_id = this.product_detail.categoryid;
            this.product_name = this.product_detail.name;
            this.product_image = this.product_detail.foodimage;
            this.product_recurring = this.product_detail.recurring;
            this.price_attributes = this.product_detail.priceattributes;
            this.product_varients = this.product_detail.variants;
            this.product_aboutus = this.product_detail.aboutus;
            this.product_benefits = this.product_detail.healthbenefits;
            this.product_source = this.product_detail.source;
            this.price_attributes = this.product_detail.priceattributes;
            this.other_image = this.product_detail.otherimage;
            this.other_image_length = this.other_image.length;
            this.star_rating = this.product_detail.star_rating;
            this.rating_count = this.product_detail.rating_count;
            this.avg_rating = parseFloat(this.product_detail.avg_rating).toFixed(1);
            this.perOrderSold = Number(this.product_detail.perOrderSold);
            this.perQuantitySold = Number(this.product_detail.perQuantitySold);
            console.log(this.perQuantitySold);
            this.rating = this.star_rating / this.rating_count;
            this.getProductByCatId(this.category_id);
            for (var i = 0; i < this.price_attributes.length; i++) {
                this.product_price = this.price_attributes[0].price;
                this.selling_price = this.price_attributes[0].selling_price;
                this.save_price = this.price_attributes[0].price - this.price_attributes[0].selling_price;
                this.checkValue(this.product_price);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getProductByCatId(id) {
        this.api.getProductByCatId(id).then((data) => {
            this.catProducts = data;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getRecent(id) {
        const uid = localStorage.getItem('uid');
        this.api.getRecentProductById(uid, id).then((data) => {
            if (data.length == 0) {
                this.addRecent();
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    addRecent() {
        setTimeout(() => {
            const id = Math.floor(100000000 + Math.random() * 900000000);
            const uid = localStorage.getItem('uid');
            const date = new Date();
            const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss");
            let param = {
                createdOn: createdOn,
                uid: uid,
                id: id.toString(),
                product_category_id: this.category_id,
                product_id: this.product_id,
            };
            this.api.addRecentViewed(id.toString(), param).then((data) => {
                console.log(data);
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }, 3000);
    }
    weightSelected(detail, value) {
        this.product_price = detail.price;
        this.result = this.price_attributes.filter(ex => ex.select == true);
    }
    checkValue(value) {
        for (var i = 0; i < this.price_attributes.length; i++) {
            let price = this.price_attributes[i].price;
            if (price == value) {
                this.product_weight = this.price_attributes[i].weight + " " + this.price_attributes[i].unit;
                this.selling_price = this.price_attributes[i].selling_price;
                this.save_price = this.selling_price - this.product_price;
                this.quantity = 1;
                this.calculateTotal();
            }
        }
    }
    calculateTotal() {
        this.total_price = this.selling_price * this.quantity * this.no_of_deliveries;
    }
    openViewer(img) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ViewerModalComponent,
                componentProps: {
                    src: img,
                },
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    setStateAsActive(time) {
        this.delivery_shift = time.name;
    }
    setTypeAsActive(type) {
        this.delivery_type = type;
    }
    selectDay(value) {
        this.weekday.push(value);
    }
    radioShift(value) {
        this.delivery_shift = value;
    }
    radioChecked(value) {
        console.log(value);
        this.delivery_type = value;
        console.log(this.delivery_type);
        if (this.delivery_type == 'Everyday') {
            this.no_of_deliveries = this.calculatedays(this.start, this.end);
            this.calculateTotal();
        }
        else if (this.delivery_type == 'Once') {
            this.no_of_deliveries = 1;
            this.calculateTotal();
        }
        else if (this.delivery_type == 'Alternate') {
            this.no_of_deliveries = Math.round(this.diff_weeks(this.start, this.end) * this.weekday.length);
            this.calculateTotal();
        }
    }
    datePicker1() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            this.start_date = moment(date).format("DD-MM-YYYY");
            alert(this.start_date + this.end_date);
            if (this.start_date < this.end_date) {
                let dueDate = moment(date).format("DD-MM-YYYY hh:mm:ss");
                let add30Days = new Date(date.setDate(date.getDate() + 30)).valueOf();
                this.due_date = moment(add30Days).format("DD-MM-YYYY hh:mm:ss");
                if (this.delivery_type == 'Everyday') {
                    this.no_of_deliveries = this.calculatedays(date, this.end);
                    this.calculateTotal();
                }
                else {
                    this.no_of_deliveries = Math.round(this.diff_weeks(this.start, this.end) * this.weekday.length);
                    this.calculateTotal();
                }
            }
            else {
                alert('Invalid Date');
            }
        }).catch(error => {
            console.log(error);
        });
    }
    datePicker2() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 2)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            this.end = date;
            this.end_date = moment(date).format("DD-MM-YYYY");
            if (this.delivery_type == 'Everyday') {
                this.no_of_deliveries = this.calculatedays(this.start, date);
                this.calculateTotal();
            }
            else {
                this.no_of_deliveries = Math.round(this.diff_weeks(this.start, this.end) * this.weekday.length);
                this.calculateTotal();
            }
        }).catch(error => {
            console.log(error);
        });
    }
    datePicker3() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 2)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            this.delivery_date = moment(date).format("DD-MM-YYYY");
            // this.no_of_deliveries = 1;
        }).catch(error => {
            console.log(error);
        });
    }
    minusQuantity() {
        if (this.quantity != 1) {
            this.quantity = this.quantity - 1;
            this.calculateTotal();
        }
    }
    addQuantity() {
        this.quantity = this.quantity + 1;
        this.calculateTotal();
    }
    submit() {
        if (this.selling_price == undefined) {
            this.selling_price = this.product_price;
        }
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss");
        if (this.delivery_type == 'Once') {
            this.start_date = '';
            this.end_date = '';
        }
        this.perQuantitySold = this.perQuantitySold + this.quantity;
        console.log(this.perQuantitySold);
        this.param = {
            category_id: this.category_id,
            product_id: this.product_id,
            start_date: this.start_date,
            end_date: this.end_date,
            due_date: this.due_date,
            delivery_date: this.delivery_date,
            weekday: this.weekday,
            quantity: this.quantity,
            delivery_shift: this.delivery_shift,
            product_price: this.selling_price,
            product_weight: this.product_weight,
            product_recurring: 1,
            from: 'subscription',
            delivery_type: this.delivery_type,
            star_rating: this.star_rating,
            rating_count: this.rating_count,
            avg_rating: this.avg_rating,
            perQuantitySold: Number(this.perQuantitySold),
            perOrderSold: Number(this.perOrderSold),
        };
        console.log(this.param);
        let navigationExtras = {
            queryParams: this.param
        };
        this.router.navigate(['choose-address'], navigationExtras);
    }
    ngOnInit() {
    }
};
__decorate([
    ViewChild(IonContent, { static: true }),
    __metadata("design:type", IonContent)
], CreateSubscriptionPage.prototype, "content", void 0);
__decorate([
    ViewChild('cart', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], CreateSubscriptionPage.prototype, "fab", void 0);
CreateSubscriptionPage = __decorate([
    Component({
        selector: 'app-create-subscription',
        templateUrl: './create-subscription.page.html',
        styleUrls: ['./create-subscription.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        UtilService,
        NavController,
        AlertController,
        Router,
        DatePicker,
        ModalController,
        DomSanitizer])
], CreateSubscriptionPage);
export { CreateSubscriptionPage };
//# sourceMappingURL=create-subscription.page.js.map