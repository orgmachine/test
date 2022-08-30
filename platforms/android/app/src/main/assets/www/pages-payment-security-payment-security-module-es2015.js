(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-security-payment-security-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-security/payment-security.page.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-security/payment-security.page.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n\t<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3 class=\"greeheading\">Payment Security</h3>\n\t\t\n\t\t</div>\n\t\t<div class=\"col-md-6 col-lg-4 col-xl-4\">\n\t\t\n\t</div>\t\n\t</div>\n   <p class=\"ion-text-justify\" [innerHTML]=\"return_policy\"></p>\n\t</div>\n\t<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/payment-security/payment-security-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/payment-security/payment-security-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: PaymentSecurityPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSecurityPageRoutingModule", function() { return PaymentSecurityPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _payment_security_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./payment-security.page */ "./src/app/pages/payment-security/payment-security.page.ts");




const routes = [
    {
        path: '',
        component: _payment_security_page__WEBPACK_IMPORTED_MODULE_3__["PaymentSecurityPage"]
    }
];
let PaymentSecurityPageRoutingModule = class PaymentSecurityPageRoutingModule {
};
PaymentSecurityPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PaymentSecurityPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/payment-security/payment-security.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-security/payment-security.module.ts ***!
  \*******************************************************************/
/*! exports provided: PaymentSecurityPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSecurityPageModule", function() { return PaymentSecurityPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _payment_security_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./payment-security-routing.module */ "./src/app/pages/payment-security/payment-security-routing.module.ts");
/* harmony import */ var _payment_security_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./payment-security.page */ "./src/app/pages/payment-security/payment-security.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let PaymentSecurityPageModule = class PaymentSecurityPageModule {
};
PaymentSecurityPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _payment_security_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentSecurityPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_payment_security_page__WEBPACK_IMPORTED_MODULE_6__["PaymentSecurityPage"]]
    })
], PaymentSecurityPageModule);



/***/ }),

/***/ "./src/app/pages/payment-security/payment-security.page.scss":
/*!*******************************************************************!*\
  !*** ./src/app/pages/payment-security/payment-security.page.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BheW1lbnQtc2VjdXJpdHkvcGF5bWVudC1zZWN1cml0eS5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/payment-security/payment-security.page.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/payment-security/payment-security.page.ts ***!
  \*****************************************************************/
/*! exports provided: PaymentSecurityPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentSecurityPage", function() { return PaymentSecurityPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");





let PaymentSecurityPage = class PaymentSecurityPage {
    constructor(api, util, menu) {
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.menu.enable(false);
        this.api.getSettings().then(data => {
            this.settings = data[0];
            console.log(this.settings);
            this.return_policy = this.settings.payment_and_security;
        }).catch(error => {
            console.log(error);
        });
    }
};
PaymentSecurityPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] }
];
PaymentSecurityPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-payment-security',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./payment-security.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment-security/payment-security.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./payment-security.page.scss */ "./src/app/pages/payment-security/payment-security.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"]])
], PaymentSecurityPage);



/***/ })

}]);
//# sourceMappingURL=pages-payment-security-payment-security-module-es2015.js.map