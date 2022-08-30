(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-corporate-corporate-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/corporate/corporate.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/corporate/corporate.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content class=\"login\">\n<div class=\"container\">\n\n\n\n <!-- The content half --> \n \n <div class=\"col-md-12 col-lg-12 col-xl-12  pb-2\">\n\n <div class=\"main-signup-header\"> \n <h2>We are working with India's top corporates as their wellness partner.<br>\n If you’re Interested? Let's get talking!\n</h2> \n <h5 class=\"font-weight-semibold mb-4\">Fill in the details below and one of our team members will get in touch with you.</h5> \n</div>\n<div class=\"col-md-12 col-lg-10 col-xl-10\" style=\"margin:0 auto;\">\n<form [formGroup]=\"contactForm\">\n    <ion-list class=\"list\">\n      <div class=\"emailTag\">Name</div>\n      <ion-item>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"name\" placeholder=\"Please Enter Your Full Name\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('name').hasError('minlength') || contactForm.get('name').hasError('maxlength') ||contactForm.get('name').hasError('pattern') ||contactForm.get('name').hasError('required') ) && contactForm.get('name').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('name').hasError('required') && contactForm.get('name').touched\">\n         Name Is Required\n        </div>\n      </div>\n\n      <div class=\"emailTag\">Mobile Number</div>\n      <ion-item>\n        <ion-input id=\"phoneNumber\" [(ngModel)]=\"phone\" type=\"tel\" formControlName=\"phone\" placeholder=\"Please Enter Mobile Number\" [disabled]=\"isVerified\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('phone').hasError('minlength') || contactForm.get('phone').hasError('maxlength') ||contactForm.get('phone').hasError('pattern') ||contactForm.get('phone').hasError('required') ) && contactForm.get('phone').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('required') && contactForm.get('phone').touched\">\n         Mobile Number Is Required\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('minlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('maxlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n      </div>\n      <div *ngIf=\"isVerified\" class=\"verified\">\n        Number is verified successfully\n      </div>\n      <ion-button (click)=\"sendOtp()\" *ngIf=\"!isVerified && contactForm.get('phone').valid\" [disabled]=\"contactForm.get('phone').invalid\">\n        Send OTP\n      </ion-button>\n\n      <div class=\"emailTag\">Email</div>\n      <ion-item>\n       <ion-input [(ngModel)]=\"email\" type=\"email\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"email\" placeholder=\"Please Enter Your Email-Id\">\n       </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('email').hasError('minlength') || contactForm.get('email').hasError('maxlength') ||contactForm.get('email').hasError('pattern') ||contactForm.get('email').hasError('required') ) && contactForm.get('email').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('email').hasError('required') && contactForm.get('email').touched\">\n         Email-Id Is Required\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('email').hasError('pattern')\">\n          Please Enter Valid Email-Id\n        </div>\n      </div>\n\n<div class=\"emailTag\">Company Name</div>\n      <ion-item>\n        <ion-input [(ngModel)]=\"cname\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"cname\" placeholder=\"Please Enter Your Company Name\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('cname').hasError('minlength') || contactForm.get('cname').hasError('maxlength') ||contactForm.get('cname').hasError('pattern') ||contactForm.get('cname').hasError('required') ) && contactForm.get('cname').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('cname').hasError('required') && contactForm.get('cname').touched\">\n         Company Name Is Required\n        </div>\n      </div>\n\n<div class=\"emailTag\">Designation</div>\n      <ion-item>\n        <ion-input [(ngModel)]=\"designation\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"designation\" placeholder=\"Please Enter Your Company Name\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('designation').hasError('minlength') || contactForm.get('designation').hasError('maxlength') ||contactForm.get('designation').hasError('pattern') ||contactForm.get('designation').hasError('required') ) && contactForm.get('designation').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('designation').hasError('required') && contactForm.get('designation').touched\">\n         Designation Is Required\n        </div>\n      </div>\n\n      <div class=\"emailTag\">Enquiry</div>\n      <ion-textarea class=\"textarea\" rows=\"6\" cols=\"20\" placeholder=\"Write your Enquiry here\" auto-grow=\"true\" [(ngModel)]=\"message\" formControlName=\"message\">\n      </ion-textarea>\n      <br>\n      <ion-button (click)=\"submit()\" [disabled]=\"contactForm.get('email').invalid || contactForm.get('name').invalid || contactForm.get('phone').invalid || contactForm.get('cname').invalid || contactForm.get('designation').invalid || !isVerified\">\n        Submit\n    </ion-button>\n  </ion-list>\n</form> \n \n </div><!-- End --> \n </div> <!-- End --> \n </div>\n <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/corporate/corporate-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/corporate/corporate-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CorporatePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePageRoutingModule", function() { return CorporatePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _corporate_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./corporate.page */ "./src/app/pages/corporate/corporate.page.ts");




const routes = [
    {
        path: '',
        component: _corporate_page__WEBPACK_IMPORTED_MODULE_3__["CorporatePage"]
    }
];
let CorporatePageRoutingModule = class CorporatePageRoutingModule {
};
CorporatePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CorporatePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/corporate/corporate.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/corporate/corporate.module.ts ***!
  \*****************************************************/
/*! exports provided: CorporatePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePageModule", function() { return CorporatePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _corporate_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./corporate-routing.module */ "./src/app/pages/corporate/corporate-routing.module.ts");
/* harmony import */ var _corporate_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./corporate.page */ "./src/app/pages/corporate/corporate.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let CorporatePageModule = class CorporatePageModule {
};
CorporatePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _corporate_routing_module__WEBPACK_IMPORTED_MODULE_5__["CorporatePageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_corporate_page__WEBPACK_IMPORTED_MODULE_6__["CorporatePage"]]
    })
], CorporatePageModule);



/***/ }),

/***/ "./src/app/pages/corporate/corporate.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/corporate/corporate.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".background-class {\n  /*--background: linear-gradient(to right, #ef6e69, #febb2b);*/\n  /*--background: #FAFAD2  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-slides {\n  height: 64%;\n  /*background: #09dc73; */\n}\n\nion-header {\n  --box-shadow:none;\n}\n\nion-footer {\n  --box-shadow:none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin: 5% 0%;\n}\n\n.login-logo .logo_icon {\n  width: 50% !important;\n}\n\n.mblTag {\n  /*margin-bottom: 0px;*/\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n\n.frgTag {\n  text-align: right;\n  color: #000;\n  font-size: 14px;\n}\n\n.btn_class {\n  color: white;\n  text-transform: none;\n  --border-radius: 35px;\n  margin-top: 15px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n  padding: 0px 26px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  border: 1px solid #e3e3e3;\n  height: 37px;\n  --padding-start: 5px !important;\n  margin-bottom: 14px;\n}\n\n.textarea {\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  font-size: 14px;\n  margin-top: 0px;\n  color: #000;\n}\n\n.signUP {\n  text-align: center;\n  color: #8c8d8a;\n  padding: 20px 0px 20px 0px;\n  font-size: 10px;\n}\n\n.lstrow {\n  padding: 0px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 4px;\n  --padding-left: 6px !important;\n  --padding-bottom: 20px;\n}\n\n.createAcc {\n  text-align: center;\n  font-size: 14px;\n}\n\n.createAcc .registerTag {\n  color: #000;\n  font-weight: bold;\n}\n\n.input-icon {\n  margin: 0px 10px 0px 0px;\n  border-right: 1px solid #e3e3e3;\n  padding: 10px 5px 17px 0px;\n}\n\nion-icon {\n  color: #7d7d7d;\n}\n\n.verified {\n  font-size: 12px;\n  margin: 0px;\n  color: var(--ion-color-primary);\n}\n\n.signUP {\n  text-align: center;\n  color: #000;\n  padding: 20px 0px 20px 0px;\n  font-size: 10px;\n}\n\n.error {\n  margin: 0px;\n  color: red;\n  font-size: 10px;\n}\n\n.emailTag {\n  font-weight: bold;\n}\n\n.main-signup-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29ycG9yYXRlL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGNvcnBvcmF0ZVxcY29ycG9yYXRlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29ycG9yYXRlL2NvcnBvcmF0ZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw2REFBQTtFQUNDLDJGQUFBO0FDQ0o7O0FEQ0E7RUFDTSxXQUFBO0VBQ0Qsd0JBQUE7QUNFTDs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksNkJBQUE7QUNLSjs7QURKSTtFQUNJLGNBQUE7QUNNUjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ01SOztBRExRO0VBQ0kscUJBQUE7QUNPWjs7QURKSTtFQUNJLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDT1I7O0FETEk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDU1I7O0FEUEk7RUFDSSxnQkFBQTtBQ1VSOztBRFJJO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNXTjs7QURUSTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFBZ0MsbUJBQUE7QUNhdEM7O0FEWEk7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDY047O0FEWkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNlUjs7QURiSTtFQUNJLFlBQUE7QUNnQlI7O0FEZEk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNpQlI7O0FEZkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNrQlI7O0FEakJPO0VBQ0ssV0FBQTtFQUNBLGlCQUFBO0FDbUJaOztBRGZJO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FDa0JSOztBRGZJO0VBQ0ksY0FBQTtBQ2tCUjs7QURoQkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDbUJSOztBRGpCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ29CUjs7QURqQkk7RUFDRSxXQUFBO0VBQ0QsVUFBQTtFQUNELGVBQUE7QUNvQko7O0FEbkJFO0VBQVUsaUJBQUE7QUN1Qlo7O0FEckJBO0VBQ0Usa0JBQUE7QUN3QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb3Jwb3JhdGUvY29ycG9yYXRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNsYXNze1xuICAgLyotLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmNmU2OSwgI2ZlYmIyYik7Ki9cbiAgICAvKi0tYmFja2dyb3VuZDogI0ZBRkFEMiAgVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuaW9uLXNsaWRlcyB7XG4gICAgICBoZWlnaHQ6IDY0JTtcbiAgICAgLypiYWNrZ3JvdW5kOiAjMDlkYzczOyAqL1xuICAgIH1cbmlvbi1oZWFkZXJ7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5pb24tZm9vdGVye1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuICAgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiA1JSAwJTtcbiAgICAgICAgLmxvZ29faWNvbntcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWJsVGFne1xuICAgICAgICAvKm1hcmdpbi1ib3R0b206IDBweDsqL1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5mcmdUYWd7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDI2cHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDttYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cbiAgICAudGV4dGFyZWEge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG4gICAgLnNpZ25VUCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM4YzhkOGE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5sc3Ryb3cge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgLS1wYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4OyAgICBcbiAgICB9XG4gICAgLmNyZWF0ZUFjY3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgIC5yZWdpc3RlclRhZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICAgXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICAgfSBcblxuICAgIC5pbnB1dC1pY29ue1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIHBhZGRpbmc6MTBweCA1cHggMTdweCAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzdkN2Q3ZDs7XG4gICAgfVxuICAgIC52ZXJpZmllZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5zaWduVVAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC5lcnJvciB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogMTBweDt9XG4gIC5lbWFpbFRhZ3tmb250LXdlaWdodDogYm9sZDt9XG4gIFxuLm1haW4tc2lnbnVwLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iLCIuYmFja2dyb3VuZC1jbGFzcyB7XG4gIC8qLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNlZjZlNjksICNmZWJiMmIpOyovXG4gIC8qLS1iYWNrZ3JvdW5kOiAjRkFGQUQyICBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbmlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDY0JTtcbiAgLypiYWNrZ3JvdW5kOiAjMDlkYzczOyAqL1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbmlvbi1mb290ZXIge1xuICAtLWJveC1zaGFkb3c6bm9uZTtcbn1cblxuaW9uLXRvb2xiYXIge1xuICBib3JkZXItY29sb3I6IG5vbmUgIWltcG9ydGFudDtcbn1cbmlvbi10b29sYmFyIGlvbi10aXRsZSB7XG4gIC0tY29sb3I6IHdoaXRlO1xufVxuXG4ubG9naW4tbG9nbyB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiBhdXRvO1xuICByaWdodDogMHB4O1xuICBsZWZ0OiAwcHg7XG4gIG1hcmdpbjogNSUgMCU7XG59XG4ubG9naW4tbG9nbyAubG9nb19pY29uIHtcbiAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xufVxuXG4ubWJsVGFnIHtcbiAgLyptYXJnaW4tYm90dG9tOiAwcHg7Ki9cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uZnJnVGFnIHtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5idG5fY2xhc3Mge1xuICBjb2xvcjogd2hpdGU7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59XG5cbi5saXN0IHtcbiAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuaW9uLWxpc3Qge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4IDI2cHg7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UzZTNlMztcbiAgaGVpZ2h0OiAzN3B4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xuICBtYXJnaW4tYm90dG9tOiAxNHB4O1xufVxuXG4udGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4uc2lnblVQIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzhjOGQ4YTtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmxzdHJvdyB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAtLXBhZGRpbmctbGVmdDogNnB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG5cbi5jcmVhdGVBY2Mge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5jcmVhdGVBY2MgLnJlZ2lzdGVyVGFnIHtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW5wdXQtaWNvbiB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2UzZTNlMztcbiAgcGFkZGluZzogMTBweCA1cHggMTdweCAwcHg7XG59XG5cbmlvbi1pY29uIHtcbiAgY29sb3I6ICM3ZDdkN2Q7XG59XG5cbi52ZXJpZmllZCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5zaWduVVAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMDAwO1xuICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZXJyb3Ige1xuICBtYXJnaW46IDBweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuXG4uZW1haWxUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLm1haW4tc2lnbnVwLWhlYWRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/corporate/corporate.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/corporate/corporate.page.ts ***!
  \***************************************************/
/*! exports provided: CorporatePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CorporatePage", function() { return CorporatePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);









let CorporatePage = class CorporatePage {
    constructor(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.menu = menu;
        this.isVerified = false;
        this.menu.enable(false);
        this.contactForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]], cname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]], designation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10)]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
        });
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.contact_mobile = this.settings.contact_phone;
            this.contact_email = this.settings.contact_email;
        }).catch(error => {
            console.log(error);
        });
    }
    sendOtp() {
        this.util.show('Please wait....');
        let concatphone = document.getElementById("phoneNumber").value;
        this.phone = concatphone;
        this.api.sendOtp(this.phone).subscribe((data) => {
            this.util.hide();
            this.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
            this.verifyOtpAlert();
        }, error => {
            this.util.hide();
            console.log('err', error);
        });
    }
    verifyOtpAlert() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Verify Otp',
                cssClass: 'profileCss',
                backdropDismiss: false,
                inputs: [
                    {
                        name: 'otp',
                        type: 'tel',
                        placeholder: 'Enter OTP here'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel-button',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    },
                    {
                        text: 'Verify',
                        cssClass: 'submit-button',
                        handler: (data) => {
                            console.log(data);
                            this.util.show('Please wait....');
                            let param = {
                                otp: data.otp,
                                mobile: this.phone
                            };
                            this.api.verifyOtp(param).subscribe((data) => {
                                this.success = data;
                                if (this.success.status == "STATUS_OK") {
                                    this.util.hide();
                                    this.isVerified = true;
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
                    }
                ]
            });
            alert.present();
        });
    }
    submit() {
        const uid = sessionStorage.getItem('uid');
        const date = new Date();
        const created = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            userid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            email: this.email,
            phone: this.phone,
            cname: this.cname,
            designation: this.designation,
            message: this.message
        };
        this.api.addCorporate(id.toString(), param).then((userData) => {
            this.util.showToast('We have received your message we will get back to you shortly.', 'primary', 'bottom');
            this.router.navigate(['/home']);
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
CorporatePage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
CorporatePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-corporate',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./corporate.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/corporate/corporate.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./corporate.page.scss */ "./src/app/pages/corporate/corporate.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], CorporatePage);



/***/ })

}]);
//# sourceMappingURL=pages-corporate-corporate-module-es2015.js.map