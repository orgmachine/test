(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-privacy-privacy-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n    <h2>Privacy Policy</h2>\n   <p [innerHTML]=\"privacy\" class=\"ion-text-justify\"></p>\n</div>\n   <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/privacy/privacy-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/privacy/privacy-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: PrivacyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageRoutingModule", function() { return PrivacyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./privacy.page */ "./src/app/pages/privacy/privacy.page.ts");




const routes = [
    {
        path: '',
        component: _privacy_page__WEBPACK_IMPORTED_MODULE_3__["PrivacyPage"]
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PrivacyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.module.ts ***!
  \*************************************************/
/*! exports provided: PrivacyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPageModule", function() { return PrivacyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./privacy-routing.module */ "./src/app/pages/privacy/privacy-routing.module.ts");
/* harmony import */ var _privacy_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./privacy.page */ "./src/app/pages/privacy/privacy.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let PrivacyPageModule = class PrivacyPageModule {
};
PrivacyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _privacy_routing_module__WEBPACK_IMPORTED_MODULE_5__["PrivacyPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_privacy_page__WEBPACK_IMPORTED_MODULE_6__["PrivacyPage"]]
    })
], PrivacyPageModule);



/***/ }),

/***/ "./src/app/pages/privacy/privacy.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 13px;\n  color: var(--input-color);\n  margin-bottom: 23px;\n}\n\n.profile-header {\n  -webkit-transform: translateY(5rem);\n          transform: translateY(5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJpdmFjeS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxwcml2YWN5XFxwcml2YWN5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJpdmFjeS9wcml2YWN5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQVI7O0FES0c7RUFDQyxtQ0FBQTtVQUFBLDJCQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcml2YWN5L3ByaXZhY3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjNweDtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbiAgIC5wcm9maWxlLWhlYWRlciB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XHJcbn1cclxuXHJcblxyXG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufVxuXG4ucHJvZmlsZS1oZWFkZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNXJlbSk7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/privacy/privacy.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/privacy/privacy.page.ts ***!
  \***********************************************/
/*! exports provided: PrivacyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivacyPage", function() { return PrivacyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let PrivacyPage = class PrivacyPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.menu.enable(false);
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.privacy = this.settings.privacy;
        }).catch(error => {
            console.log(error);
        });
    }
};
PrivacyPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
PrivacyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-privacy',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./privacy.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/privacy/privacy.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./privacy.page.scss */ "./src/app/pages/privacy/privacy.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], PrivacyPage);



/***/ })

}]);
//# sourceMappingURL=pages-privacy-privacy-module-es2015.js.map