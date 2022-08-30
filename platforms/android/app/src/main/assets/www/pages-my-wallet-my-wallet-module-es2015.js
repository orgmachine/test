(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-my-wallet-my-wallet-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-wallet/my-wallet.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-wallet/my-wallet.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n\t<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3>Wallet Balance</h3>\n\t\t<h1><span>{{currency_}}</span>  {{balance | number : '1.2-2'}}</h1>\n\t\t<ion-button [routerLink]=\"['/wallet']\" class=\"btn_class\" >\n\t      Recharge Wallet\n\t    </ion-button>\n\t</div>\n\t<div class=\"col-md-6 col-lg-4 col-xl-4\">\t\n\t</div>\t\n\t</div>\t\n\t\t<p style=\"font-weight: bold;margin-top: 10px;padding-top: 10px;\">Recent Transactions</p>\n\t<div *ngIf=\"transactions.length !=0\">\n\t\t<table class=\"table-responsive \">\n\t\t  <thead>\n\t\t    <tr>\n\t\t      <th scope=\"col\">Type</th>\n\t\t\t   <th scope=\"col\">Amount</th>\n\t\t      <th scope=\"col\">Payment Detail</th>\n\t\t\t   <th scope=\"col\">Date</th>\n\t\t    </tr>\n\t\t  </thead>\n\t\t  <tbody>\n\t\t    <tr *ngFor=\"let item of transactions\">\n\t\t      <td>\n\t\t      \t<p *ngIf=\"item.type == 'Debit'\" class=\"heading\">Debited</p>\n\t\t\t  \t<p *ngIf=\"item.type == 'Wallet'\" class=\"heading\">Credited </p>\n\t\t\t  \t<p *ngIf=\"item.type == 'Cashback'\" class=\"heading\">Cashback </p>\n\t\t\t  </td>\n\t\t\t  <td><p>₹ {{item.amount | number : '1.2-2'}}</p></td>\n\t\t      <td>\n\t\t      \t<p *ngIf=\"item.type == 'Debit'\">Against Booking: <span style=\"color: var(--ion-color-secondary)\" (click)=\"bookingInfo(item.booking_id)\">#{{item.booking_id}}</span></p>\n\t\t      \t<p *ngIf=\"item.type == 'Cashback'\">Against Booking: <span style=\"color: var(--ion-color-secondary)\" (click)=\"bookingInfo(item.booking_id)\">#{{item.booking_id}}</span></p>\n\t\t\t  \t<p *ngIf=\"item.type == 'Wallet'\" >Payment Id: {{item.transactionid}}</p></td>\n\t\t\t  <td><p>{{item.createdAt}}</p></td>\n\t\t    </tr>\n\t\t  </tbody>\n\t\t</table>\n\t</div>\n\t<div *ngIf=\"transactions.length ==0\" class=\"recent\">\n\t\tNo Recent Transactions\n\t</div>\n\t</div>\n\t<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: MyWalletPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageRoutingModule", function() { return MyWalletPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _my_wallet_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./my-wallet.page */ "./src/app/pages/my-wallet/my-wallet.page.ts");




const routes = [
    {
        path: '',
        component: _my_wallet_page__WEBPACK_IMPORTED_MODULE_3__["MyWalletPage"]
    }
];
let MyWalletPageRoutingModule = class MyWalletPageRoutingModule {
};
MyWalletPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], MyWalletPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.module.ts ***!
  \*****************************************************/
/*! exports provided: MyWalletPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPageModule", function() { return MyWalletPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _my_wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./my-wallet-routing.module */ "./src/app/pages/my-wallet/my-wallet-routing.module.ts");
/* harmony import */ var _my_wallet_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./my-wallet.page */ "./src/app/pages/my-wallet/my-wallet.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let MyWalletPageModule = class MyWalletPageModule {
};
MyWalletPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
            _my_wallet_routing_module__WEBPACK_IMPORTED_MODULE_5__["MyWalletPageRoutingModule"]
        ],
        declarations: [_my_wallet_page__WEBPACK_IMPORTED_MODULE_6__["MyWalletPage"]]
    })
], MyWalletPageModule);



/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .wallet {\n  padding-left: 16px;\n}\nion-content .wallet h3 {\n  font-family: \"proxi-extrabold\";\n}\nion-content .wallet h1 {\n  color: var(--input-color);\n  font-family: \"proxi-extrabold\";\n  margin-bottom: 15px;\n  margin: 0px 0px 30px 0px;\n}\nion-content .wallet span {\n  font-weight: bold;\n}\nion-content .add {\n  margin-right: 5px;\n  padding-left: 8px;\n}\nion-content .add h3 {\n  font-family: \"proxi-extrabold\";\n  margin-bottom: 0px;\n}\nion-content .add p {\n  font-size: 16px;\n  color: var(--input-color);\n  font-family: \"proxi-extrabold\";\n  margin: 0px;\n}\nion-content .add ion-item {\n  --border-color: transparent;\n  /*--padding-left: 0px;*/\n  --inner-padding-end: 0px;\n  --padding-start:8px;\n  --padding:10px;\n  --border-style: unset;\n  border-bottom: 1px solid #f5f5f5;\n}\nion-content .add ion-item p {\n  font-size: 12px;\n}\nion-content .add ion-item .heading {\n  font-size: 14px;\n  color: #000;\n}\nion-content .add ion-item .heading span {\n  float: right;\n}\nion-content .add ion-avatar {\n  margin-right: 5px;\n}\nion-content .add ion-icon {\n  margin: 4px;\n  font-size: xx-large;\n}\nion-content .add .recent {\n  text-align: center;\n  margin-top: 40%;\n  color: #000;\n  font-weight: bold;\n}\nion-content .order {\n  background: var(--ion-color-primary);\n  padding: 16px;\n  color: #fff;\n  border-radius: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbXktd2FsbGV0L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXG15LXdhbGxldFxcbXktd2FsbGV0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbXktd2FsbGV0L215LXdhbGxldC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtBQ0FSO0FEQ1E7RUFDSSw4QkFBQTtBQ0NaO0FEQ1E7RUFDSSx5QkFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NaO0FEQ1E7RUFDRyxpQkFBQTtBQ0NYO0FERUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDQVI7QURDUTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7QUNDWjtBRENRO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDQ1o7QURDUTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0VBQ0EsZ0NBQUE7QUNDWjtBRENZO0VBQ0ksZUFBQTtBQ0NoQjtBRENZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7QUNDaEI7QURBZ0I7RUFDSSxZQUFBO0FDRXBCO0FERVE7RUFDTyxpQkFBQTtBQ0FmO0FERVE7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7QUNBWjtBREVRO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDQVo7QURHSTtFQUNJLG9DQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ0RSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbXktd2FsbGV0L215LXdhbGxldC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICAud2FsbGV0IHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpLWV4dHJhYm9sZCc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdwcm94aS1leHRyYWJvbGQnO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDBweCAwcHggMzBweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5hZGQgeyAgICBcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDhweDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAncHJveGktZXh0cmFib2xkJztcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ3Byb3hpLWV4dHJhYm9sZCc7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgICAgICAgICAgLyotLXBhZGRpbmctbGVmdDogMHB4OyovXHJcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjhweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nOjEwcHg7XHJcbiAgICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiB1bnNldDtcclxuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XHJcblxyXG4gICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaGVhZGluZyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDtcclxuICAgICAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tYXZhdGFyIHtcclxuICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1pY29uIHtcclxuICAgICAgICAgICAgbWFyZ2luOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWNlbnQge1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQwJTtcclxuICAgICAgICAgICAgY29sb3I6ICMwMDA7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5vcmRlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIH1cclxufSIsImlvbi1jb250ZW50IC53YWxsZXQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG5pb24tY29udGVudCAud2FsbGV0IGgzIHtcbiAgZm9udC1mYW1pbHk6IFwicHJveGktZXh0cmFib2xkXCI7XG59XG5pb24tY29udGVudCAud2FsbGV0IGgxIHtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgZm9udC1mYW1pbHk6IFwicHJveGktZXh0cmFib2xkXCI7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIG1hcmdpbjogMHB4IDBweCAzMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC53YWxsZXQgc3BhbiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmFkZCB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cbmlvbi1jb250ZW50IC5hZGQgaDMge1xuICBmb250LWZhbWlseTogXCJwcm94aS1leHRyYWJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFkZCBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBmb250LWZhbWlseTogXCJwcm94aS1leHRyYWJvbGRcIjtcbiAgbWFyZ2luOiAwcHg7XG59XG5pb24tY29udGVudCAuYWRkIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAvKi0tcGFkZGluZy1sZWZ0OiAwcHg7Ki9cbiAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAtLXBhZGRpbmctc3RhcnQ6OHB4O1xuICAtLXBhZGRpbmc6MTBweDtcbiAgLS1ib3JkZXItc3R5bGU6IHVuc2V0O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2Y1ZjVmNTtcbn1cbmlvbi1jb250ZW50IC5hZGQgaW9uLWl0ZW0gcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5hZGQgaW9uLWl0ZW0gLmhlYWRpbmcge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuaW9uLWNvbnRlbnQgLmFkZCBpb24taXRlbSAuaGVhZGluZyBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLWNvbnRlbnQgLmFkZCBpb24tYXZhdGFyIHtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG59XG5pb24tY29udGVudCAuYWRkIGlvbi1pY29uIHtcbiAgbWFyZ2luOiA0cHg7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5pb24tY29udGVudCAuYWRkIC5yZWNlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDQwJTtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLm9yZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nOiAxNnB4O1xuICBjb2xvcjogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/my-wallet/my-wallet.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/my-wallet/my-wallet.page.ts ***!
  \***************************************************/
/*! exports provided: MyWalletPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyWalletPage", function() { return MyWalletPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");







let MyWalletPage = class MyWalletPage {
    constructor(api, util, router, callNumber, alertCtrl) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.callNumber = callNumber;
        this.alertCtrl = alertCtrl;
        this.balance = 0;
        this.currency_ = "₹";
        this.transactions = [];
        localStorage.setItem("currency_symbol", this.currency_);
        this.util.subscribeWalletStatus().subscribe(data => {
            // if (data) {
            console.log(data);
            this.ionViewWillEnter();
            console;
            // }
        });
    }
    ngOnInit() {
        this.util.show('Please wait....');
        this.currency_ = localStorage.getItem("currency_symbol");
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.currency_ = localStorage.getItem("currency_symbol");
        const uid = sessionStorage.getItem('uid');
        this.api.getWallet(uid).then((data) => {
            if (data && data.length != 0) {
                this.wallet_money = data[0];
                this.balance = this.wallet_money.amount;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                // this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
        this.api.getWalletTransactions(uid).then((data) => {
            this.util.hide();
            if (data && data.length != 0) {
                this.transactions = data;
                console.log(this.transactions);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.hide();
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    call() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('contact_phone');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Are you sure you want to call way2lab Customer Care</strong>',
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
    bookingInfo(id) {
        localStorage.setItem('bookingid', id);
        this.router.navigate(['/booking-detail']);
    }
};
MyWalletPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] }
];
MyWalletPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-my-wallet",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-wallet.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/my-wallet/my-wallet.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-wallet.page.scss */ "./src/app/pages/my-wallet/my-wallet.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]])
], MyWalletPage);



/***/ })

}]);
//# sourceMappingURL=pages-my-wallet-my-wallet-module-es2015.js.map