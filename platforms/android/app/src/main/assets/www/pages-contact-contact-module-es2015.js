(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contact-contact-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n <!--   <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"headset-outline\"></ion-icon>\n    </ion-avatar>\n   <ion-label text-wrap>\n   \t<h3>Help and Support</h3>\n   \t<p>Do check our <span (click)=\"faqs()\">FAQs</span> section once.</p>\n   </ion-label>   \n  </ion-item> -->\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"mail-outline\"></ion-icon>\n    </ion-avatar>\n   <ion-label text-wrap>\n   \t<h3>Email</h3>\n   \t<a href=\"mailto:{{settings?.contact_email}}\">{{email}}</a>\n   \t<p>You can email us at the above mentioned Email-Id, we will revert within 48 hours.</p>\n   </ion-label>   \n  </ion-item>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-avatar>\n   <ion-label text-wrap>\n   \t<h3>Phone</h3>\n   \t<a href=\"tel:+919311213388\">{{mobile}}</a>\n   \t<p>We are now available 24*7</p>\n   </ion-label>   \n  </ion-item>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <ion-icon name=\"create-outline\"></ion-icon>\n    </ion-avatar>\n   <ion-label text-wrap>\n   \t<h3>Feedback</h3>\n   \t<p>If you have feedback regarding our website and service that you would like to share, we would love to hear from you!</p>\n   </ion-label>   \n  </ion-item><br>\n  <ion-button (click)=\"report()\" expand=\"\">\n      Report a issue\n  </ion-button><br><br></div>\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/contact/contact-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/contact/contact-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ContactPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageRoutingModule", function() { return ContactPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");




const routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_3__["ContactPage"]
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ContactPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.module.ts ***!
  \*************************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact-routing.module */ "./src/app/pages/contact/contact-routing.module.ts");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/pages/contact/contact.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let ContactPageModule = class ContactPageModule {
};
ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _contact_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
    })
], ContactPageModule);



/***/ }),

/***/ "./src/app/pages/contact/contact.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/contact/contact.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  border-bottom: 1px solid #8c8d8a;\n  --border-color: transparent;\n  -webkit-animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n          animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n  border-bottom-style: dotted;\n  padding: 6px;\n}\n\n@-webkit-keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\np {\n  font-size: 12px;\n}\n\n.question {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.price {\n  font-size: 12px;\n}\n\nh3 {\n  font-weight: bold;\n}\n\nion-icon {\n  font-size: xx-large;\n}\n\nsmall {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\nspan {\n  color: var(--ion-color-primary);\n  font-weight: bold;\n}\n\n.header-text {\n  padding: 6px 16px;\n  font-weight: bold;\n  color: #11998e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxjb250YWN0XFxjb250YWN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSw4RUFBQTtVQUFBLHNFQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDJCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsOENBQUE7WUFBQSxzQ0FBQTtFQ0NGO0VERUE7SUFDRSxVQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0VDQUY7QUFDRjs7QURUQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhDQUFBO1lBQUEsc0NBQUE7RUNDRjtFREVBO0lBQ0UsVUFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQ0FGO0FBQ0Y7O0FERUE7RUFDRSxlQUFBO0FDQUY7O0FERUE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7QUNDSjs7QURDQTtFQUNJLGVBQUE7QUNFSjs7QURBQTtFQUNFLGlCQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQ0tGOztBREhBO0VBQ0UsK0JBQUE7RUFDQSxpQkFBQTtBQ01GOztBREpBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7QUNPSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YzhkOGE7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogcG9wSW4gMC4ycyBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiA3MG1zKSBib3RoIGVhc2UtaW47XG4gICAgLS1wYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xuICAgIHBhZGRpbmc6IDZweDtcbn1cblxuQGtleWZyYW1lcyBwb3BJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC04cHgpO1xuICB9XG5cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbnAge1xuICBmb250LXNpemU6MTJweDtcbn1cbi5xdWVzdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLnByaWNlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG59XG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWljb24ge1xuICBmb250LXNpemU6IHh4LWxhcmdlOyBcbn1cbnNtYWxsIHtcbiAgY29sb3I6dmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDpib2xkO1xufVxuc3BhbiB7XG4gIGNvbG9yOnZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5oZWFkZXItdGV4dHtcbiAgICBwYWRkaW5nOiA2cHggMTZweDtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBjb2xvcjogIzExOTk4ZTtcbn0iLCJpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGM4ZDhhO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogcG9wSW4gMC4ycyBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiA3MG1zKSBib3RoIGVhc2UtaW47XG4gIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1zdHlsZTogZG90dGVkO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbkBrZXlmcmFtZXMgcG9wSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxucCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnByaWNlIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG5pb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG59XG5cbnNtYWxsIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbnNwYW4ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmhlYWRlci10ZXh0IHtcbiAgcGFkZGluZzogNnB4IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogIzExOTk4ZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/contact/contact.page.ts ***!
  \***********************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");








let ContactPage = class ContactPage {
    constructor(route, router, alertCtrl, emailComposer, callNumber, util, api, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.emailComposer = emailComposer;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.menu = menu;
        this.menu.enable(false);
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.mobile = this.settings.contact_phone;
            this.email = this.settings.contact_email;
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.isLogin = sessionStorage.getItem('loginStatus');
    }
    mail() {
        let email = {
            to: this.email,
            subject: 'Support',
            // body: 'How are you? Nice greetings from Leipzig',
            isHtml: true
        };
        // Send a text message using default options
        this.emailComposer.open(email);
    }
    call() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('mobile');
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
    report() {
        if (this.isLogin == 'true') {
            this.router.navigate(['/support']);
        }
        else {
            console.log('else');
            this.util.showLoginAlert();
        }
    }
    faqs() {
        this.router.navigate(['/faqs']);
    }
};
ContactPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.page.scss */ "./src/app/pages/contact/contact.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_4__["EmailComposer"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_5__["CallNumber"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_7__["ApisService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], ContactPage);



/***/ })

}]);
//# sourceMappingURL=pages-contact-contact-module-es2015.js.map