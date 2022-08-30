(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-wallet-wallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n <ion-title mode=\"md\">My Wallet</ion-title>\n\t<div class=\"wallet\">\n\t\t<h3>Wallet Balance</h3>\n\t\t<h1><span>{{currency_}}</span>  {{balance | number : '1.2-2'}}</h1>\n\t</div>\n\t<div class=\"add\">\n\t\t<h3>Recharge Wallet</h3>\n\t\t<p>Choose from the available recharge packs.</p>\n\t\t<ion-grid>\n\t\t\t<ion-row>\n\t\t\t\t<ion-col size=\"4\" *ngFor=\"let amount of amounts\" (click)=\"setStateAsActive(amount)\">\n\t\t\t\t\t<ion-item [class.active]=\"amount === activeAmount\">\n\t\t\t\t\t\t<ion-label>\n\t\t\t\t\t\t\t{{currency_}} {{amount}}\n\t\t\t\t\t\t</ion-label>\n\t\t\t\t\t</ion-item>\n\t\t\t\t</ion-col>\n\t\t\t</ion-row>\n\t\t</ion-grid>\n\t</div>\n\t<div class=\"lower_content\">\n\t\t<p>\n           Your recharge packs can be used for multiple orders and subscription.\n        </p>\n\t</div>\n\t\t<ion-button (click)=\"proceed()\" mode=\"md\">Proceed to Pay</ion-button>\n\t</div>\n\t<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/wallet/wallet-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/wallet/wallet-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: WalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageRoutingModule", function() { return WalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/wallet/wallet.page.ts");




const routes = [
    {
        path: '',
        component: _wallet_page__WEBPACK_IMPORTED_MODULE_3__["WalletPage"]
    }
];
let WalletPageRoutingModule = class WalletPageRoutingModule {
};
WalletPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], WalletPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/wallet/wallet.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.module.ts ***!
  \***********************************************/
/*! exports provided: WalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPageModule", function() { return WalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wallet-routing.module */ "./src/app/pages/wallet/wallet-routing.module.ts");
/* harmony import */ var _wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./wallet.page */ "./src/app/pages/wallet/wallet.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let WalletPageModule = class WalletPageModule {
};
WalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["WalletPageRoutingModule"]
        ],
        declarations: [_wallet_page__WEBPACK_IMPORTED_MODULE_6__["WalletPage"]]
    })
], WalletPageModule);



/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .wallet h3 {\n  font-family: \"proxi-extrabold\";\n}\nion-content .wallet h1 {\n  color: var(--input-color);\n  font-family: \"proxi-extrabold\";\n  margin-bottom: 15px;\n  margin: 0px 0px 30px 0px;\n}\nion-content .wallet span {\n  font-weight: bold;\n}\nion-content .add h3 {\n  font-family: \"proxi-extrabold\";\n  margin-bottom: 0px;\n}\nion-content .add p {\n  font-size: 16px;\n  color: var(--input-color);\n  font-family: \"proxi-extrabold\";\n  margin-top: 0px;\n}\nion-content .add ion-grid {\n  padding: 0px;\n}\nion-content .add ion-item {\n  --border-color: transparent;\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n  --padding-start:0px;\n  --padding:10px;\n  --border-style: unset;\n  border: 1px solid #d8d0bc;\n  text-align: center;\n  color: var(--input-color);\n}\nion-content .add ion-label {\n  font-weight: bold;\n}\nion-content .add .active {\n  --background: var(--ion-color-primary);\n  color: #fff;\n  border: 0px solid;\n}\nion-content .lower_content p {\n  font-size: 16px;\n  color: var(--input-color);\n  font-family: \"proxi-extrabold\";\n  margin: 0px;\n}\nion-content ion-button {\n  margin: 16px 0px;\n}\nion-toolbar p {\n  font-size: 14px;\n  padding: 0px 16px;\n  color: var(--input-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvd2FsbGV0L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXHdhbGxldFxcd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDSSw4QkFBQTtBQ0RaO0FER1E7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0RaO0FER1E7RUFDRyxpQkFBQTtBQ0RYO0FES1E7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0FDSFo7QURLUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtBQ0haO0FES1E7RUFDSSxZQUFBO0FDSFo7QURLUTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0FDSFo7QURLUTtFQUVJLGlCQUFBO0FDSlo7QURNUTtFQUNJLHNDQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDSlo7QURRUTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsV0FBQTtBQ05aO0FEVUk7RUFDSSxnQkFBQTtBQ1JSO0FEWUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtBQ1RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvd2FsbGV0L3dhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAud2FsbGV0IHtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncHJveGktZXh0cmFib2xkJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpLWV4dHJhYm9sZCc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmFkZCB7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpLWV4dHJhYm9sZCc7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwcm94aS1leHRyYWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1ncmlkIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLWxlZnQ6IDBweDtcclxuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xyXG4gICAgICAgICAgICAtLXBhZGRpbmc6MTBweDtcclxuICAgICAgICAgICAgLS1ib3JkZXItc3R5bGU6IHVuc2V0O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMGJjO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAgICAgICAgIGNvbG9yOiNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlcjogMHB4IHNvbGlkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5sb3dlcl9jb250ZW50IHtcclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpLWV4dHJhYm9sZCc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBpb24tYnV0dG9ue1xyXG4gICAgICAgIG1hcmdpbjogIDE2cHggMHB4O1xyXG4gICAgfVxyXG59XHJcbmlvbi10b29sYmFyIHtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcclxuICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgLndhbGxldCBoMyB7XG4gIGZvbnQtZmFtaWx5OiBcInByb3hpLWV4dHJhYm9sZFwiO1xufVxuaW9uLWNvbnRlbnQgLndhbGxldCBoMSB7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIGZvbnQtZmFtaWx5OiBcInByb3hpLWV4dHJhYm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICBtYXJnaW46IDBweCAwcHggMzBweCAwcHg7XG59XG5pb24tY29udGVudCAud2FsbGV0IHNwYW4ge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5hZGQgaDMge1xuICBmb250LWZhbWlseTogXCJwcm94aS1leHRyYWJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFkZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJwcm94aS1leHRyYWJvbGRcIjtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFkZCBpb24tZ3JpZCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IC5hZGQgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OjBweDtcbiAgLS1wYWRkaW5nOjEwcHg7XG4gIC0tYm9yZGVyLXN0eWxlOiB1bnNldDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDBiYztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLmFkZCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5hZGQgLmFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAwcHggc29saWQ7XG59XG5pb24tY29udGVudCAubG93ZXJfY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJwcm94aS1leHRyYWJvbGRcIjtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tY29udGVudCBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cblxuaW9uLXRvb2xiYXIgcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMHB4IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/wallet/wallet.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/wallet/wallet.page.ts ***!
  \*********************************************/
/*! exports provided: WalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletPage", function() { return WalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/razorpay */ "./src/app/services/razorpay.ts");








let WalletPage = class WalletPage {
    constructor(api, util, router, razorpayService, cd) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.razorpayService = razorpayService;
        this.cd = cd;
        this.balance = 0;
        this.currency_ = "₹";
        this.activeAmount = 1000;
        this.showModal = false;
        this.url = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd";
        this.amounts = [
            100,
            200,
            500,
            1000,
            2000,
            5000,
            10000,
            20000
        ];
        this.razorpayService
            .lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js')
            .subscribe();
        this.getWalletBalance();
        this.getProfile();
        const date = new Date();
        this.createdAt = moment__WEBPACK_IMPORTED_MODULE_5__(date).format("YYYY-MM-DD hh:mm:ss A");
    }
    setStateAsActive(amount) {
        this.activeAmount = amount;
    }
    ngOnInit() {
    }
    getWalletBalance() {
        const uid = sessionStorage.getItem('uid');
        this.api.getWallet(uid).then((data) => {
            if (data && data.length != 0) {
                this.wallet_money = data[0];
                this.balance = this.wallet_money.amount;
                this.createdAt = this.wallet_money.createdAt;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    getProfile() {
        const uid = sessionStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            console.log('my profile', data);
            if (data) {
                console.log(data);
                this.profile = data;
                // this.phone = data.phone;
                // this.name = data.name;
                // this.email = data.email;
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
    proceed() {
        this.RAZORPAY_OPTIONS = {
            description: "Wallet Recharge",
            image: this.url,
            currency: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].general.code,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].razorpay.api_key,
            amount: this.activeAmount * 100,
            name: 'Way2Lab',
            prefill: {
                name: this.profile.name,
                email: this.profile.email,
                contact: this.profile.phone,
            },
            theme: {
                color: "#2C69A5",
            },
            modal: {
                ondismiss: function () {
                    alert("dismissed");
                },
            },
        };
        console.log(this.RAZORPAY_OPTIONS);
        //this.RAZORPAY_OPTIONS.amount = 100 + '00';
        // binding this object to both success and dismiss handler
        this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this);
        // this.showPopup();
        let razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
        razorpay.open();
    }
    razorPaySuccessHandler(response) {
        console.log(response);
        if (response.razorpay_payment_id) {
            this.razo(response.razorpay_payment_id);
        }
        else {
            this.util.showToast("Some error occured !!", 'danger', 'bottom');
        }
        this.razorpayResponse = 'Razorpay Response';
        this.showModal = true;
        this.cd.detectChanges();
        document.getElementById('razorpay-response').style.display = 'block';
    }
    // makePay() {
    //   var options = {
    //     description: "Wallet Recharge",
    //     image: this.url,
    //     currency: environment.general.code, 
    //     key: environment.razorpay.api_key, 
    //     amount: this.activeAmount * 100, 
    //     name: this.name,
    //     theme: {
    //       color: "#2C69A5",
    //     },
    //     modal: {
    //       ondismiss: function () {
    //         alert("dismissed");
    //       },
    //     },
    //   };
    //   var successCallback = (payment_id) => {
    //     localStorage.setItem("paymentRazor", payment_id);
    //     this.razo('success');
    //   };
    //   var cancelCallback = (error) => {
    //     // this.razo('failed');
    //     this.util.showToast("Sorry ! Payment not Posible With RazorPay", 'danger', 'bottom');
    //   };
    //   RazorpayCheckout.open(options, successCallback, cancelCallback);
    // }
    razo(payment_id) {
        this.util.show('Please wait....');
        const uid = sessionStorage.getItem('uid');
        const date = new Date();
        const createdAt = moment__WEBPACK_IMPORTED_MODULE_5__(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            transactionid: payment_id,
            id: id.toString(),
            status: 'success',
            createdAt: createdAt,
            amount: this.activeAmount,
            uid: uid,
            type: 'Wallet'
        };
        this.api.addTransaction(id.toString(), param).then((data) => {
            console.log(data);
            this.api.addWalletTransaction(id.toString(), param).then((userData) => {
                const uid = sessionStorage.getItem('uid');
                const date = new Date();
                const updatedAt = moment__WEBPACK_IMPORTED_MODULE_5__(date).format("YYYY-MM-DD hh:mm:ss A");
                const id = Math.floor(100000000 + Math.random() * 900000000);
                let total_amount = this.activeAmount + this.balance;
                let post = {
                    uid: uid,
                    createdAt: this.createdAt,
                    updatedAt: updatedAt,
                    amount: total_amount,
                };
                this.api.addMoneyToWallet(uid, post).then((data) => {
                    this.util.hide();
                    this.util.showToast('Money added to wallet successfully', 'primary', 'bottom');
                    this.getWalletBalance();
                    this.util.publishWalletStatus(true);
                    this.sendWalletNotification();
                    // this.router.navigate(['/tabs/tab1']);
                }).catch(err => {
                    if (err) {
                        this.util.hide();
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            }).catch(err => {
                this.util.hide();
                if (err) {
                    this.util.hide();
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    update() {
        this.router.navigate(['/tabs/tab1']);
    }
    sendWalletNotification() {
        let title = 'Payment Complete';
        let msg = 'Thank you for your recent payment. You have successfully added ' + this.activeAmount + ' rupees in your Way2Lab Wallet';
        this.api.sendNotification(title, msg, this.token).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
};
WalletPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_7__["ExternalLibraryService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] }
];
WalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-wallet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./wallet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/wallet/wallet.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./wallet.page.scss */ "./src/app/pages/wallet/wallet.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_7__["ExternalLibraryService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
], WalletPage);



/***/ })

}]);
//# sourceMappingURL=pages-wallet-wallet-module-es2015.js.map