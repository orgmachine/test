import { __awaiter, __decorate, __metadata } from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { environment } from 'src/environments/environment';
import { AngularFirestore } from '@angular/fire/firestore';
let UtilService = class UtilService {
    constructor(loadingCtrl, adb, alertCtrl, toastCtrl, router, navCtrl, translateService) {
        this.loadingCtrl = loadingCtrl;
        this.adb = adb;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.router = router;
        this.navCtrl = navCtrl;
        this.translateService = translateService;
        this.isLoading = false;
        this.address = new Subject();
        this.coupon = new Subject();
        this.review = new Subject();
        this.changeLocation = new Subject();
        this.changeOrderStatus = new Subject();
        this.loggedIn = new Subject();
        this.loggedInStatus = new Subject();
        this.badge = new Subject();
        this.city = new Subject();
        this.cityList = new Subject();
        this.query = new Subject();
        this.profile = new Subject();
        this.cart = [];
        this.Product = [];
        this.cartItemCount = new BehaviorSubject(0);
    }
    /*
    Start Loader
    Call this method to Start your Loader
    */
    getProducts(category_id) {
        return new Promise((resolve, reject) => {
            this.adb.collection('products', ref => ref.where('status', '==', 'Active').where('categoryid', '==', category_id).orderBy('display_order', 'asc')).get().subscribe((products) => {
                var data = products.docs.map(element => {
                    var item = element.data();
                    item.id = element.id;
                    return item;
                });
                this.Product = data;
                console.log(this.Product);
                resolve(data);
            }, error => {
                reject(error);
            });
        });
    }
    getCart() {
        return this.cart;
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    addProduct(product) {
        let added = false;
        for (let p of this.cart) {
            console.log(p);
            if (p.product_id === product.product_id && p.weight == product.weight) {
                console.log(p.id, ' ==', product.id);
                console.log(p.weight, ' ==', product.weight);
                p.quantity += 1;
                p.perQuantitySold += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            // product.quantity = 1;
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.product_id === product.product_id && p.weight == product.weight) {
                p.quantity -= 1;
                p.perQuantitySold -= 1;
                if (p.quantity == 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.product_id === product.product_id && p.weight == product.weight) {
                console.log(p.product_id, ' ==', product.product_id);
                this.cartItemCount.next(this.cartItemCount.value - p.quantity);
                this.cart.splice(index, 1);
            }
        }
    }
    clearCart() {
        this.cart = [];
        this.cartItemCount = new BehaviorSubject(0);
    }
    publishAddress(data) {
        this.address.next(data);
    }
    publishReview(data) {
        this.review.next(data);
    }
    publishProfile(data) {
        this.profile.next(data);
    }
    observProfile() {
        return this.profile;
    }
    getLanguage() {
        return this.translateService.currentLang;
    }
    publishBadge(data) {
        this.badge.next(data);
    }
    subscribeBadge() {
        return this.badge;
    }
    publishCity(data) {
        this.city.next(data);
    }
    subscribeCity() {
        return this.city;
    }
    publishCityList(data) {
        this.cityList.next(data);
    }
    subscribeCityList() {
        return this.cityList;
    }
    publishQuery(data) {
        this.query.next(data);
    }
    subscribeQuery() {
        return this.query;
    }
    getReviewObservable() {
        return this.review;
    }
    publishLocation(data) {
        this.changeLocation.next(data);
    }
    subscribeLocation() {
        return this.changeLocation;
    }
    publishOrderStatus(data) {
        this.changeOrderStatus.next(data);
    }
    subscribeOrderStatus() {
        return this.changeOrderStatus;
    }
    publishLoggedIn(data) {
        this.loggedIn.next(data);
    }
    subscribeLoggedIn() {
        return this.loggedIn;
    }
    publishLoggedInStatus(data) {
        this.loggedInStatus.next(data);
    }
    subscribeLoggedInStatus() {
        return this.loggedInStatus;
    }
    translate(str) {
        const currentLang = this.translateService.currentLang;
        const returnValue = this.translateService.translations[currentLang][str];
        if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
        }
        else {
            return returnValue;
        }
    }
    translateInEN(str) {
        const currentLang = 'en';
        const returnValue = this.translateService.translations[currentLang][str];
        if (returnValue === undefined) {
            return this.translateService.translations.en_merch[str];
        }
        else {
            return returnValue;
        }
    }
    getCurrencyCode() {
        return environment.general.code;
    }
    getCurrecySymbol() {
        return environment.general.symbol;
    }
    getObservable() {
        return this.address;
    }
    publishCoupon(data) {
        this.coupon.next(data);
    }
    getCouponObservable() {
        return this.coupon;
    }
    setOrders(data) {
        this.orders = null;
        this.orders = data;
    }
    gerOrder() {
        return this.orders;
    }
    show(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = true;
            return yield this.loadingCtrl.create({
                message: msg,
                spinner: 'bubbles',
            }).then(a => {
                a.present().then(() => {
                    //console.log('presented');
                    if (!this.isLoading) {
                        a.dismiss().then(() => console.log('abort presenting'));
                    }
                });
            });
        });
    }
    hide() {
        return __awaiter(this, void 0, void 0, function* () {
            this.isLoading = false;
            return yield this.loadingCtrl.dismiss().then(() => console.log('dismissed'));
        });
    }
    /*
      Show Warning Alert Message
      param : msg = message to display
      Call this method to show Warning Alert,
      */
    showWarningAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Warning',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showSimpleAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: '',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    showLoginAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Hold on!',
                backdropDismiss: true,
                message: 'You must me logged in before placing an order. It will take not more than 30 seconds.',
                cssClass: 'loginAlert',
                buttons: [
                    // {
                    //   text: 'SIGNUP',
                    //   cssClass: 'signup',
                    //   handler: (data) => {
                    //     this.router.navigate(['/register']);
                    //   }
                    // }, 
                    {
                        text: 'SIGNIN',
                        cssClass: 'signin',
                        handler: (data) => {
                            this.router.navigate(['/login']);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    /*
     Show Error Alert Message
     param : msg = message to display
     Call this method to show Error Alert,
     */
    showErrorAlert(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Error',
                message: msg,
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    /*
       param : email = email to verify
       Call this method to get verify email
       */
    getEmailFilter(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;
            if (!(emailfilter.test(email))) {
                const alert = yield this.alertCtrl.create({
                    header: 'Warning',
                    message: 'Please enter valid email',
                    buttons: ['OK']
                });
                yield alert.present();
                return false;
            }
            else {
                return true;
            }
        });
    }
    /*
      Show Toast Message on Screen
       param : msg = message to display, color= background
       color of toast example dark,danger,light. position  = position of message example top,bottom
       Call this method to show toast message
       */
    showToast(msg, colors, positon) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
                color: colors,
                position: positon
            });
            toast.present();
        });
    }
    showNotification(msg, colors, positon) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 4000,
                color: colors,
                position: positon,
                buttons: [
                    {
                        text: 'Ok',
                        role: 'cancel',
                        handler: () => {
                            // console.log('Cancel clicked');
                        }
                    }
                ]
            });
            toast.present();
        });
    }
    errorToast(msg) {
        return __awaiter(this, void 0, void 0, function* () {
            const toast = yield this.toastCtrl.create({
                message: msg,
                duration: 2000,
            });
            toast.present();
        });
    }
    apiErrorHandler(err) {
        // console.log('Error got in service =>', err)
        if (err.status === -1) {
            this.showErrorAlert('Failed To Connect With Server');
        }
        else if (err.status === 401) {
            this.showErrorAlert('Unauthorized Request!');
            this.navCtrl.navigateRoot('/login');
        }
        else if (err.status === 500) {
            this.showErrorAlert('Somethimg Went Wrong..');
        }
    }
    // setDetails(data) {
    //   this.details = null;
    //   this.details = data;
    // }
    // getDetails() {
    //   return this.details;
    // }
    makeid(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
};
UtilService = __decorate([
    Injectable({
        providedIn: 'root'
    }),
    __metadata("design:paramtypes", [LoadingController,
        AngularFirestore,
        AlertController,
        ToastController,
        Router,
        NavController,
        TranslateService])
], UtilService);
export { UtilService };
//# sourceMappingURL=util.service.js.map