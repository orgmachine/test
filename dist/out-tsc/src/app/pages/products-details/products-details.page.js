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
import Swal from 'sweetalert2';
let ProductsDetailsPage = class ProductsDetailsPage {
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
        this.maxDate = new Date().toJSON().split('T')[0];
        this.quantity = 1;
        this.delivery_type = "Daily";
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
        this.timeList = [
            'Morning',
            'Evening',
            'Both',
        ];
        this.typeList = [
            'Once',
            'Daily',
            'Alternate',
        ];
    }
    ionViewWillEnter() {
        this.util.show('Please wait....');
        var date = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
        this.start_date = moment(date).format("DD-MM-YYYY");
        // let dueDate = moment(date).format("DD-MM-YYYY hh:mm:ss")
        let add30Days = new Date(new Date().setDate(new Date().getDate() + 31)).valueOf();
        this.due_date = moment(add30Days).format("DD-MM-YYYY hh:mm:ss");
        var end_date = new Date(new Date().setDate(new Date().getDate() + 1)).valueOf();
        this.end_date = moment(end_date).format("DD-MM-YYYY");
        this.util.hide();
        this.route.queryParams.subscribe(data => {
            this.id = data.id;
            this.product_id = this.id;
            this.getProductDetailsById(this.product_id);
        });
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
            this.perOrderSold = this.product_detail.perOrderSold;
            this.perQuantitySold = this.product_detail.perQuantitySold;
            console.log(this.avg_rating);
            this.rating = this.star_rating / this.rating_count;
            console.log(this.rating);
            this.getRecent(this.product_id);
            this.getProductByCatId(this.category_id);
            this.getReviews(this.product_id);
            console.log(this.other_image);
            for (var i = 0; i < this.price_attributes.length; i++) {
                this.product_price = this.price_attributes[0].price;
                this.selling_price = this.price_attributes[0].selling_price;
                console.log(this.selling_price);
                this.save_price = this.price_attributes[0].price - this.price_attributes[0].selling_price;
                console.log(this.save_price);
                this.checkValue(this.product_price);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    product(details) {
        this.content.scrollToTop(400);
        if (details.recurring == 0) {
            this.router.navigate(['products-details'], {
                queryParams: {
                    id: details.id
                }
            });
        }
        else {
            this.router.navigate(['create-subscription'], {
                queryParams: {
                    id: details.id
                }
            });
        }
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
            }
        }
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
        console.log(time);
        this.delivery_shift = time;
    }
    setTypeAsActive(type) {
        console.log(type);
        this.delivery_type = type;
    }
    radioShift(value) {
        console.log(value);
        this.delivery_shift = value;
        // this.isShift = true;
    }
    radioChecked(value) {
        console.log(value);
        // this.everyday = true;
        this.delivery_type = value;
        console.log(this.delivery_type);
    }
    datePicker1() {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            minDate: new Date(new Date().setDate(new Date().getDate() + 1)).valueOf(),
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then((date) => {
            var date_select = date;
            this.start_date = moment(date).format("DD-MM-YYYY");
            let dueDate = moment(date).format("DD-MM-YYYY hh:mm:ss");
            let add30Days = new Date(date.setDate(date.getDate() + 30)).valueOf();
            this.due_date = moment(add30Days).format("DD-MM-YYYY hh:mm:ss");
            // alert(this.due_date)
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
            var date_select = date;
            this.end_date = moment(date).format("DD-MM-YYYY");
        }).catch(error => {
            console.log(error);
        });
    }
    minusQuantity() {
        if (this.quantity != 1) {
            this.quantity = this.quantity - 1;
        }
    }
    addQuantity() {
        this.quantity = this.quantity + 1;
    }
    submit() {
        if (this.selling_price == undefined) {
            this.selling_price = this.product_price;
        }
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const createdOn = moment(date).format("YYYY-MM-DD hh:mm:ss");
        if (this.delivery_type == 'Once' || this.delivery_type == 'Customise') {
            this.end_date = '';
        }
        if (this.delivery_type !== 'Once') {
            this.delivery_date = '';
        }
        if (this.delivery_type !== 'Customise') {
            this.custom_date = '';
        }
        this.perQuantitySold = this.perQuantitySold + this.quantity;
        this.param = {
            category_id: this.category_id,
            product_id: this.product_id,
            start_date: this.start_date,
            // end_date: this.end_date,
            quantity: this.quantity,
            delivery_shift: this.delivery_shift,
            product_price: this.selling_price,
            product_weight: this.product_weight,
            product_recurring: 1,
            from: 'subscription',
            delivery_type: this.delivery_type,
            due_date: this.due_date,
            delivery_date: this.delivery_date,
            custom_date: this.custom_date,
            star_rating: this.star_rating,
            rating_count: this.rating_count,
            avg_rating: this.avg_rating,
            perQuantitySold: this.perQuantitySold,
            perOrderSold: this.perOrderSold,
        };
        console.log(this.param);
        let navigationExtras = {
            queryParams: this.param
        };
        this.router.navigate(['choose-address'], navigationExtras);
    }
    ngOnInit() {
        this.cart = this.util.getCart();
        this.cartItemCount = this.util.getCartItemCount();
        this.api.getAllProducts().then(data => {
            console.log(data);
            this.allProducts = data;
        }).catch(error => {
            console.log(error);
        });
    }
    addToCart() {
        if (this.selling_price == undefined) {
            this.selling_price = this.product_price;
        }
        console.log(this.product_price);
        this.perQuantitySold = this.perQuantitySold + this.quantity;
        // this.perOderSold = this.perOderSold + 1;
        this.product_detail = {
            category_id: this.category_id,
            product_id: this.product_id,
            quantity: this.quantity,
            price: this.selling_price,
            weight: this.product_weight,
            recurring: 0,
            name: this.product_name,
            foodimage: this.product_image,
            from: 'cart',
            isRate: 0,
            perQuantitySold: this.perQuantitySold,
            perOrderSold: this.perOrderSold,
        };
        this.util.addProduct(this.product_detail);
        // this.util.showToast(this.product_name + ' added to cart successfully', 'primary', 'top');
        this.showToast();
        this.util.publishBadge(true);
        this.animateCSS('tada');
    }
    showToast() {
        const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 1000,
            timerProgressBar: false,
            onOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
            }
        });
        Toast.fire({
            icon: 'success',
            title: this.product_name + ' added to cart successfully'
        });
    }
    openCart() {
        localStorage.setItem('from', 'product');
        this.router.navigate(['cart']);
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            console.log('hi');
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
    getReviews(id) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(id);
            yield this.api.getReviewsByProductId(id).then((data) => __awaiter(this, void 0, void 0, function* () {
                this.reviews = data;
                console.log(this.reviews);
                for (let x of this.reviews) {
                    console.log(x.userid);
                    let rating;
                    let suggestions = '';
                    let title = '';
                    let comment = '';
                    let name = '';
                    let createdAt = '';
                    let arr = [];
                    let imagePath = '';
                    yield this.api.getMyProfile(x.userid).then((data) => __awaiter(this, void 0, void 0, function* () {
                        name = data.name;
                        imagePath = data.imagePath;
                        console.log(data);
                    }), error => {
                        console.log(error);
                    }).catch(error => {
                        console.log(error);
                    });
                    arr.push({
                        rating: x.rating,
                        suggestions: x.suggestion,
                        title: x.title,
                        comment: x.comment,
                        name: name,
                        createdAt: x.createdAt,
                        imagePath: imagePath
                    });
                    console.log(arr);
                    this.allReviews.push(arr[0]);
                    console.log(this.allReviews);
                }
            })).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
    review() {
        this.router.navigate(['reviews'], {
            queryParams: {
                value: JSON.stringify(this.allReviews),
                productid: this.product_id
            }
        });
    }
};
__decorate([
    ViewChild(IonContent, { static: true }),
    __metadata("design:type", IonContent)
], ProductsDetailsPage.prototype, "content", void 0);
__decorate([
    ViewChild('cart', { static: false, read: ElementRef }),
    __metadata("design:type", ElementRef)
], ProductsDetailsPage.prototype, "fab", void 0);
ProductsDetailsPage = __decorate([
    Component({
        selector: 'app-products-details',
        templateUrl: './products-details.page.html',
        styleUrls: ['./products-details.page.scss'],
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
], ProductsDetailsPage);
export { ProductsDetailsPage };
//# sourceMappingURL=products-details.page.js.map