(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-otp-otp-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content><div class=\"maincontent\">\n\t<div class=\"topCnt ion-padding-bottom\">\n\t\t<div class=\"backBtn\">\n\t\t    <ion-icon (click)=\"back()\" name=\"arrow-back-outline\"></ion-icon>\n\t\t</div>\n\t\t<div class=\"ion-padding-start ion-padding-end welcome\">\n\t        <h1> Sign In</h1>\n\t        <p>Sign in to access your orders, subscription, special offers and much more!</p>\n\n\t        <small>PHONE NUMBER</small>\n\t        <div class=\"number\"> +91 | {{phone}}</div>\n\t        <p>We have send 4 digits OTP to</p>\n\n\t        <code-input [isCodeHidden]=\"false\"\n\t          [codeLength]=\"4\"\n\t          [initialFocusField]=\"0\"\n\t          (codeChanged)=\"onCodeChanged($event)\"\n\t          (codeCompleted)=\"onCodeCompleted($event)\">\n\t  \t\t</code-input>\n\n\t  \t\t<div class=\"send\"> \n\t\t      <p>Waiting for OTP...{{timer}} sec <span><p  type=\"submit\" class=\"btn_class\">Resend OTP</p></span>\n\t\t      </p>\n\t\t    </div>\n\t    </div>\n\t</div>\n\t<div class=\"footer\" style=\"margin-top: 10px;\">\n\t\t<ion-button  (click)=\"verifyOtp()\" type=\"submit\" expand=\"block\">\n\t      VERIFY OTP\n\t    </ion-button>\n\t    <p>-OR-</p>\n\t    <p style=\"color: var(--ion-color-primary)\"  (click)=\"skip()\">Skip Login</p>\n\t</div>\n</div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/otp/otp-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/otp/otp-routing.module.ts ***!
  \*************************************************/
/*! exports provided: OtpPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageRoutingModule", function() { return OtpPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");




const routes = [
    {
        path: '',
        component: _otp_page__WEBPACK_IMPORTED_MODULE_3__["OtpPage"]
    }
];
let OtpPageRoutingModule = class OtpPageRoutingModule {
};
OtpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], OtpPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.module.ts ***!
  \*****************************************/
/*! exports provided: OtpPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPageModule", function() { return OtpPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./otp-routing.module */ "./src/app/pages/otp/otp-routing.module.ts");
/* harmony import */ var _otp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./otp.page */ "./src/app/pages/otp/otp.page.ts");
/* harmony import */ var angular_code_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-code-input */ "./node_modules/angular-code-input/fesm2015/angular-code-input.js");









let OtpPageModule = class OtpPageModule {
};
OtpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            angular_code_input__WEBPACK_IMPORTED_MODULE_7__["CodeInputModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _otp_routing_module__WEBPACK_IMPORTED_MODULE_5__["OtpPageRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        declarations: [_otp_page__WEBPACK_IMPORTED_MODULE_6__["OtpPage"]]
    })
], OtpPageModule);



/***/ }),

/***/ "./src/app/pages/otp/otp.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/otp/otp.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #f5f5f5;\n}\n\n.topCnt {\n  background: #fff;\n}\n\n.backBtn ion-icon {\n  color: #949393;\n  font-size: x-large;\n  padding: 16px;\n}\n\n.welcome {\n  font-family: proxi-black;\n}\n\n.welcome h1 {\n  font-weight: bold;\n  margin-top: 0px;\n  font-size: 20px;\n}\n\n.welcome p {\n  font-size: 14px;\n  margin-top: 0px;\n  color: #949393;\n}\n\n.welcome small {\n  font-weight: bold;\n  color: var(--ion-color-primary);\n}\n\n.welcome .number {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 5px 0px 24px;\n}\n\n.welcome code-input {\n  --item-spacing: 10px;\n  --item-height: 3em;\n}\n\n.welcome .btn_class {\n  color: var(--ion-color-primary);\n  --background: #fff;\n}\n\n.welcome .send {\n  margin: 16px 0px;\n}\n\n.welcome .send p {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.welcome .send span {\n  float: right;\n}\n\n.welcome .send span p {\n  margin-top: 0px;\n  padding: 6px;\n  font-size: 10px;\n  position: relative;\n  top: -6px;\n}\n\n.footer p {\n  text-align: center;\n  font-weight: bold;\n}\n\n/* Desktops and laptops ----------- */\n\n@media only screen and (min-width: 1224px) {\n  .maincontent {\n    width: 32.33%;\n    margin: auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3RwL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXG90cFxcb3RwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3RwL290cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURDRTtFQUNFLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUNFSjs7QURDQTtFQUNNLHdCQUFBO0FDRU47O0FEREk7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDR047O0FEREk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNHTjs7QURESTtFQUNFLGlCQUFBO0VBQ0EsK0JBQUE7QUNHTjs7QURESTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDR047O0FEREk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDR047O0FEREk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDR047O0FEREU7RUFDTSxnQkFBQTtBQ0dSOztBREZJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDSVI7O0FERkk7RUFDSSxZQUFBO0FDSVI7O0FESFE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNLWjs7QURDSTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUNFTjs7QURHSSxxQ0FBQTs7QUFDSjtFQUNBO0lBQWEsYUFBQTtJQUFjLFlBQUE7RUNFekI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL290cC9vdHAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cbi50b3BDbnQge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG59XG4uYmFja0J0biB7XG4gIGlvbi1pY29uIHtcbiAgICBjb2xvcjogIzk0OTM5MztcbiAgICBmb250LXNpemU6IHgtbGFyZ2U7XG4gICAgcGFkZGluZzogMTZweDtcbiAgfVxufVxuLndlbGNvbWUge1xuICAgICAgZm9udC1mYW1pbHk6IHByb3hpLWJsYWNrO1xuICAgIGgxe1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgY29sb3I6ICM5NDkzOTM7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICB9XG4gICAgLm51bWJlciB7XG4gICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIG1hcmdpbjogNXB4IDBweCAyNHB4O1xuICAgIH1cbiAgICBjb2RlLWlucHV0IHtcbiAgICAgIC0taXRlbS1zcGFjaW5nOiAxMHB4O1xuICAgICAgLS1pdGVtLWhlaWdodDogM2VtO1xuICAgIH1cbiAgICAuYnRuX2NsYXNzIHtcbiAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAtLWJhY2tncm91bmQ6ICNmZmY7XG4gIH1cbiAgLnNlbmQge1xuICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZmxvYXQ6cmlnaHQ7IFxuICAgICAgICBwIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxufVxuLmZvb3RlciB7XG4gICAgcCB7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gIH1cbiAgXG4gIFxuICBcdFx0LyogRGVza3RvcHMgYW5kIGxhcHRvcHMgLS0tLS0tLS0tLS0gKi9cbkBtZWRpYSBvbmx5IHNjcmVlbiAgYW5kIChtaW4td2lkdGggOiAxMjI0cHgpIHtcbi5tYWluY29udGVudHt3aWR0aDozMi4zMyUgO21hcmdpbjogYXV0bzt9XG5cbn0gICAiLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxuLnRvcENudCB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5cbi5iYWNrQnRuIGlvbi1pY29uIHtcbiAgY29sb3I6ICM5NDkzOTM7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLndlbGNvbWUge1xuICBmb250LWZhbWlseTogcHJveGktYmxhY2s7XG59XG4ud2VsY29tZSBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cbi53ZWxjb21lIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICM5NDkzOTM7XG59XG4ud2VsY29tZSBzbWFsbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuLndlbGNvbWUgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDBweCAyNHB4O1xufVxuLndlbGNvbWUgY29kZS1pbnB1dCB7XG4gIC0taXRlbS1zcGFjaW5nOiAxMHB4O1xuICAtLWl0ZW0taGVpZ2h0OiAzZW07XG59XG4ud2VsY29tZSAuYnRuX2NsYXNzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLndlbGNvbWUgLnNlbmQge1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuLndlbGNvbWUgLnNlbmQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ud2VsY29tZSAuc2VuZCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuLndlbGNvbWUgLnNlbmQgc3BhbiBwIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBwYWRkaW5nOiA2cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC02cHg7XG59XG5cbi5mb290ZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi8qIERlc2t0b3BzIGFuZCBsYXB0b3BzIC0tLS0tLS0tLS0tICovXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMjRweCkge1xuICAubWFpbmNvbnRlbnQge1xuICAgIHdpZHRoOiAzMi4zMyU7XG4gICAgbWFyZ2luOiBhdXRvO1xuICB9XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/otp/otp.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/otp/otp.page.ts ***!
  \***************************************/
/*! exports provided: OtpPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpPage", function() { return OtpPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/device/ngx */ "./node_modules/@ionic-native/device/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let OtpPage = class OtpPage {
    constructor(route, router, alertCtrl, api, util, platform, menu, device) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.platform = platform;
        this.menu = menu;
        this.device = device;
        this.timer = 60;
        this.isLogin = false;
        this.startTimer();
        this.route.queryParams.subscribe(data => {
            this.phone = data.phone;
            console.log(this.phone);
        });
        platform.ready().then(() => {
            if (this.platform.is('android')) {
                this.isDevice = 'android';
                this.uuid = this.device.uuid;
            }
            else if (this.platform.is('ios')) {
                this.isDevice = 'ios';
                this.uuid = this.device.uuid;
            }
            else {
                this.isDevice = 'browser';
            }
        });
    }
    back() {
        this.router.navigate(['login']);
    }
    startTimer() {
        this.intervalVar = setInterval(function () {
            if (this.timer > 0) {
                this.timer--;
            }
        }.bind(this), 1000);
    }
    // this called every time when user changed the code
    onCodeChanged(code) {
        console.log(code);
    }
    // this called only if user entered full code
    onCodeCompleted(code) {
        console.log(code);
        this.otp = code;
    }
    verifyOtp() {
        this.util.show('Please wait....');
        this.isLogin = true;
        let data = {
            otp: this.otp,
            mobile: this.phone
        };
        console.log(data);
        this.api.verifyOtp(data).subscribe((data) => {
            console.log(data);
            this.success = data;
            if (this.success.status == "STATUS_OK") {
                this.api.getUser(this.phone).then((data) => {
                    console.log(data);
                    if (data && data.length) {
                        this.userData = data[0];
                        console.log(this.userData.uid);
                        sessionStorage.setItem('uid', this.userData.uid);
                        sessionStorage.setItem('cartdata', JSON.stringify({}));
                        this.updateUserDevice();
                        localStorage.setItem('mobile', this.userData.phone);
                        sessionStorage.setItem('loginStatus', "true");
                        this.isLogin = false;
                        this.api.isSignedIn = true;
                        localStorage.setItem('selectedLanguage', 'en');
                        this.util.publishLoggedIn('LoggedIn');
                        this.util.publishLoggedInStatus('true');
                        this.menu.enable(false);
                        this.util.hide();
                        this.util.showToast(this.success.Message, 'primary', 'bottom');
                        this.router.navigate(['/home']);
                    }
                    else {
                        this.util.hide();
                        this.util.showToast('Something went wrong. Please try again later!', 'danger', 'bottom');
                    }
                }, error => {
                    this.util.hide();
                    console.log(error);
                });
            }
            else {
                this.util.hide();
                this.util.showToast(this.success.Message, 'danger', 'bottom');
            }
        }, error => {
            this.util.hide();
            console.log('err', error);
        });
    }
    updateUserDevice() {
        const uid = sessionStorage.getItem('uid');
        const date = new Date();
        const modifiedOn = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            modifiedOn: modifiedOn,
            isDevice: this.isDevice,
            deviceId: this.uuid,
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
        };
        console.log(param);
        this.api.updateProfile(uid, param).then((data) => {
            console.log(data);
        }).catch(err => {
            if (err) {
                console.log(err);
                // this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    skip() {
        this.menu.enable(false);
        this.router.navigate(['/tabs/tab1']);
    }
};
OtpPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"] }
];
OtpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-otp',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./otp.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/otp/otp.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./otp.page.scss */ "./src/app/pages/otp/otp.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_6__["Device"]])
], OtpPage);



/***/ })

}]);
//# sourceMappingURL=pages-otp-otp-module-es2015.js.map