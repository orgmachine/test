function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-contactus-contactus-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesContactusContactusPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content class=\"login\">\n<div class=\"container\">\n\n\t  <div class=\"row\">\n  \t<div class=\"col-md-12 col-lg-12 col-xl-12\">\n  \t\t<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Contact Information</h3>\n  \t</div>\t\n  </div>\n\n\n <!-- The content half --> \n \n <div class=\"col-md-12 col-lg-12 col-xl-12  pb-2\">\n\n <div class=\"main-signup-header\"> \n <h2>GET IN TOUCH</h2> \n <h5 class=\"font-weight-semibold mb-4\">Fill up the form and our Team will get back to you within 24 hours.</h5> \n </div>\n<div class=\"col-md-12 col-lg-10 col-xl-10\" style=\"margin:0 auto;\">\n<form [formGroup]=\"contactForm\">\n    <ion-list class=\"list\">\n      <div class=\"emailTag\">Name</div>\n      <ion-item>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"name\" placeholder=\"Please Enter Your Full Name\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('name').hasError('minlength') || contactForm.get('name').hasError('maxlength') ||contactForm.get('name').hasError('pattern') ||contactForm.get('name').hasError('required') ) && contactForm.get('name').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('name').hasError('required') && contactForm.get('name').touched\">\n         Email-Id Is Required\n        </div>\n      </div>\n\n      <div class=\"emailTag\">Mobile Number</div>\n      <ion-item>\n        <ion-input id=\"phoneNumber\" [(ngModel)]=\"phone\" type=\"tel\" formControlName=\"phone\" placeholder=\"Please Enter Mobile Number\" [disabled]=\"isVerified\">\n        </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('phone').hasError('minlength') || contactForm.get('phone').hasError('maxlength') ||contactForm.get('phone').hasError('pattern') ||contactForm.get('phone').hasError('required') ) && contactForm.get('phone').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('required') && contactForm.get('phone').touched\">\n         Mobile Number Is Required\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('minlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('phone').hasError('maxlength')\">\n          Please Enter Valid Mobile Number\n        </div>\n      </div>\n      <div *ngIf=\"isVerified\" class=\"verified\">\n        Number is verified successfully\n      </div>\n      <ion-button (click)=\"sendOtp()\" *ngIf=\"!isVerified && contactForm.get('phone').valid\" [disabled]=\"contactForm.get('phone').invalid\">\n        Send OTP\n      </ion-button>\n\n      <div class=\"emailTag\">Email</div>\n      <ion-item>\n       <ion-input [(ngModel)]=\"email\" type=\"email\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"email\" placeholder=\"Please Enter Your Email-Id\">\n       </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( contactForm.get('email').hasError('minlength') || contactForm.get('email').hasError('maxlength') ||contactForm.get('email').hasError('pattern') ||contactForm.get('email').hasError('required') ) && contactForm.get('email').touched\">\n        <div class=\"error\" *ngIf=\"contactForm.get('email').hasError('required') && contactForm.get('email').touched\">\n         Email-Id Is Required\n        </div>\n        <div class=\"error\" *ngIf=\"contactForm.get('email').hasError('pattern')\">\n          Please Enter Valid Email-Id\n        </div>\n      </div>\n\n      <div class=\"emailTag\">Message</div>\n      <ion-textarea class=\"textarea\" rows=\"6\" cols=\"20\" placeholder=\"Write your message here\" auto-grow=\"true\" [(ngModel)]=\"message\" formControlName=\"message\">\n      </ion-textarea>\n      <div no-lines *ngIf=\"( contactForm.get('message').hasError('minlength') || contactForm.get('message').hasError('maxlength') ||contactForm.get('message').hasError('pattern') ||contactForm.get('message').hasError('required') ) && contactForm.get('message').touched\">\n      <div class=\"error\" *ngIf=\"contactForm.get('message').hasError('required') && contactForm.get('message').touched\">\n        Message Is Required\n      </div>\n      </div><br>\n      <ion-button (click)=\"submit()\" [disabled]=\"contactForm.get('email').invalid || contactForm.get('name').invalid || contactForm.get('phone').invalid || !isVerified\">\n        Submit report\n    </ion-button>\n  </ion-list>\n</form>\n </div>\n </div><!-- End --> \n </div> <!-- End --> \n\n <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus-routing.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/contactus/contactus-routing.module.ts ***!
    \*************************************************************/

  /*! exports provided: ContactUsPageRoutingModule */

  /***/
  function srcAppPagesContactusContactusRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageRoutingModule", function () {
      return ContactUsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _contactus_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/pages/contactus/contactus.page.ts");

    var routes = [{
      path: '',
      component: _contactus_page__WEBPACK_IMPORTED_MODULE_3__["ContactUsPage"]
    }];

    var ContactUsPageRoutingModule = function ContactUsPageRoutingModule() {
      _classCallCheck(this, ContactUsPageRoutingModule);
    };

    ContactUsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ContactUsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contactus/contactus.module.ts ***!
    \*****************************************************/

  /*! exports provided: ContactUsPageModule */

  /***/
  function srcAppPagesContactusContactusModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPageModule", function () {
      return ContactUsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./contactus-routing.module */
    "./src/app/pages/contactus/contactus-routing.module.ts");
    /* harmony import */


    var _contactus_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./contactus.page */
    "./src/app/pages/contactus/contactus.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ContactUsPageModule = function ContactUsPageModule() {
      _classCallCheck(this, ContactUsPageModule);
    };

    ContactUsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _contactus_routing_module__WEBPACK_IMPORTED_MODULE_5__["ContactUsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_contactus_page__WEBPACK_IMPORTED_MODULE_6__["ContactUsPage"]]
    })], ContactUsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.page.scss":
  /*!*****************************************************!*\
    !*** ./src/app/pages/contactus/contactus.page.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesContactusContactusPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background-class {\n  /*--background: linear-gradient(to right, #ef6e69, #febb2b);*/\n  /*--background: #FAFAD2  W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n\nion-slides {\n  height: 64%;\n  /*background: #09dc73; */\n}\n\nion-header {\n  --box-shadow:none;\n}\n\nion-footer {\n  --box-shadow:none;\n}\n\nion-toolbar {\n  border-color: none !important;\n}\n\nion-toolbar ion-title {\n  --color: white;\n}\n\n.login-logo {\n  text-align: center;\n  margin: auto;\n  right: 0px;\n  left: 0px;\n  margin: 5% 0%;\n}\n\n.login-logo .logo_icon {\n  width: 50% !important;\n}\n\n.mblTag {\n  /*margin-bottom: 0px;*/\n  color: var(--ion-color-primary);\n  font-size: 16px;\n}\n\n.frgTag {\n  text-align: right;\n  color: #000;\n  font-size: 14px;\n}\n\n.btn_class {\n  color: white;\n  text-transform: none;\n  --border-radius: 35px;\n  margin-top: 15px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n\nion-list {\n  --ion-background-color:transparent;\n  margin: 0px;\n  padding: 0px 26px;\n}\n\nion-item {\n  --ion-background-color: #fff;\n  border: 1px solid #e3e3e3;\n  height: 37px;\n  --padding-start: 5px !important;\n  margin-bottom: 14px;\n}\n\n.textarea {\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  font-size: 14px;\n  margin-top: 0px;\n  color: #000;\n}\n\n.signUP {\n  text-align: center;\n  color: #8c8d8a;\n  padding: 20px 0px 20px 0px;\n  font-size: 10px;\n}\n\n.lstrow {\n  padding: 0px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 4px;\n  --padding-left: 6px !important;\n  --padding-bottom: 20px;\n}\n\n.createAcc {\n  text-align: center;\n  font-size: 14px;\n}\n\n.createAcc .registerTag {\n  color: #000;\n  font-weight: bold;\n}\n\n.input-icon {\n  margin: 0px 10px 0px 0px;\n  border-right: 1px solid #e3e3e3;\n  padding: 10px 5px 17px 0px;\n}\n\nion-icon {\n  color: #7d7d7d;\n}\n\n.verified {\n  font-size: 12px;\n  margin: 0px;\n  color: var(--ion-color-primary);\n}\n\n.signUP {\n  text-align: center;\n  color: #000;\n  padding: 20px 0px 20px 0px;\n  font-size: 10px;\n}\n\n.error {\n  margin: 0px;\n  color: red;\n  font-size: 10px;\n}\n\n.emailTag {\n  font-weight: bold;\n}\n\n.main-signup-header {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdHVzL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3R1c1xcY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdHVzL2NvbnRhY3R1cy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRyw2REFBQTtFQUNDLDJGQUFBO0FDQ0o7O0FEQ0E7RUFDTSxXQUFBO0VBQ0Qsd0JBQUE7QUNFTDs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtBQ0lKOztBREZBO0VBQ0ksNkJBQUE7QUNLSjs7QURKSTtFQUNJLGNBQUE7QUNNUjs7QURISTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtBQ01SOztBRExRO0VBQ0kscUJBQUE7QUNPWjs7QURKSTtFQUNJLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDT1I7O0FETEk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FDUVI7O0FETkk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0FDU1I7O0FEUEk7RUFDSSxnQkFBQTtBQ1VSOztBRFJJO0VBQ0Usa0NBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNXTjs7QURUSTtFQUNFLDRCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFBZ0MsbUJBQUE7QUNhdEM7O0FEWEk7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDY047O0FEWkk7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNlUjs7QURiSTtFQUNJLFlBQUE7QUNnQlI7O0FEZEk7RUFDSSxrQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUNpQlI7O0FEZkk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUNrQlI7O0FEakJPO0VBQ0ssV0FBQTtFQUNBLGlCQUFBO0FDbUJaOztBRGZJO0VBQ0ksd0JBQUE7RUFDQSwrQkFBQTtFQUNBLDBCQUFBO0FDa0JSOztBRGZJO0VBQ0ksY0FBQTtBQ2tCUjs7QURoQkk7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FDbUJSOztBRGpCSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ29CUjs7QURqQkk7RUFDRSxXQUFBO0VBQ0QsVUFBQTtFQUNELGVBQUE7QUNvQko7O0FEbEJHO0VBQVUsaUJBQUE7QUNzQmI7O0FEcEJBO0VBQ0Usa0JBQUE7QUN1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jb250YWN0dXMvY29udGFjdHVzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kLWNsYXNze1xuICAgLyotLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2VmNmU2OSwgI2ZlYmIyYik7Ki9cbiAgICAvKi0tYmFja2dyb3VuZDogI0ZBRkFEMiAgVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuaW9uLXNsaWRlcyB7XG4gICAgICBoZWlnaHQ6IDY0JTtcbiAgICAgLypiYWNrZ3JvdW5kOiAjMDlkYzczOyAqL1xuICAgIH1cbmlvbi1oZWFkZXJ7XG4gICAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5pb24tZm9vdGVye1xuICAgIC0tYm94LXNoYWRvdzpub25lO1xufVxuaW9uLXRvb2xiYXJ7XG4gICAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG4gICAgaW9uLXRpdGxlIHtcbiAgICAgICAgLS1jb2xvcjogd2hpdGU7XG4gICAgfVxufVxuICAgIC5sb2dpbi1sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGxlZnQ6IDBweDtcbiAgICAgICAgbWFyZ2luOiA1JSAwJTtcbiAgICAgICAgLmxvZ29faWNvbntcbiAgICAgICAgICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWJsVGFne1xuICAgICAgICAvKm1hcmdpbi1ib3R0b206IDBweDsqL1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuICAgIC5mcmdUYWd7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICBjb2xvcjojMDAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIGNvbG9yOiB3aGl0ZSA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDM1cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDE1cHg7XG4gICAgfVxuICAgIC5saXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG4gICAgaW9uLWxpc3Qge1xuICAgICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgcGFkZGluZzogMHB4IDI2cHg7XG4gICAgfVxuICAgIGlvbi1pdGVtIHtcbiAgICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNlM2UzO1xuICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDttYXJnaW4tYm90dG9tOiAxNHB4O1xuICAgIH1cbiAgICAudGV4dGFyZWEge1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgY29sb3I6IzAwMDtcbiAgICB9XG4gICAgLnNpZ25VUCB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICM4YzhkOGE7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIC5sc3Ryb3cge1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgfVxuICAgIC5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgICAgIC0tcGFkZGluZy10b3A6IDRweDtcbiAgICAgICAgLS1wYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xuICAgICAgICAtLXBhZGRpbmctYm90dG9tOiAyMHB4OyAgICBcbiAgICB9XG4gICAgLmNyZWF0ZUFjY3tcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7IFxuICAgICAgIC5yZWdpc3RlclRhZ3tcbiAgICAgICAgICAgIGNvbG9yOiAjMDAwOyAgICAgXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICB9XG4gICAgfSBcblxuICAgIC5pbnB1dC1pY29ue1xuICAgICAgICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIHBhZGRpbmc6MTBweCA1cHggMTdweCAwcHg7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBjb2xvcjogIzdkN2Q3ZDs7XG4gICAgfVxuICAgIC52ZXJpZmllZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuICAgIC5zaWduVVAge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGNvbG9yOiAjMDAwO1xuICAgICAgICBwYWRkaW5nOiAyMHB4IDBweCAyMHB4IDBweDtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgIH1cblxuICAgIC5lcnJvciB7XG4gICAgICBtYXJnaW46IDBweDtcbiAgICAgY29sb3I6IHJnYigyNTUsIDAsIDApO1xuICAgIGZvbnQtc2l6ZTogMTBweDt9XG4gIFxuICAgLmVtYWlsVGFne2ZvbnQtd2VpZ2h0OiBib2xkO31cbiAgXG4ubWFpbi1zaWdudXAtaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIiwiLmJhY2tncm91bmQtY2xhc3Mge1xuICAvKi0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZWY2ZTY5LCAjZmViYjJiKTsqL1xuICAvKi0tYmFja2dyb3VuZDogI0ZBRkFEMiAgVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG5pb24tc2xpZGVzIHtcbiAgaGVpZ2h0OiA2NCU7XG4gIC8qYmFja2dyb3VuZDogIzA5ZGM3MzsgKi9cbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYm94LXNoYWRvdzpub25lO1xufVxuXG5pb24tZm9vdGVyIHtcbiAgLS1ib3gtc2hhZG93Om5vbmU7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgYm9yZGVyLWNvbG9yOiBub25lICFpbXBvcnRhbnQ7XG59XG5pb24tdG9vbGJhciBpb24tdGl0bGUge1xuICAtLWNvbG9yOiB3aGl0ZTtcbn1cblxuLmxvZ2luLWxvZ28ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogYXV0bztcbiAgcmlnaHQ6IDBweDtcbiAgbGVmdDogMHB4O1xuICBtYXJnaW46IDUlIDAlO1xufVxuLmxvZ2luLWxvZ28gLmxvZ29faWNvbiB7XG4gIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcbn1cblxuLm1ibFRhZyB7XG4gIC8qbWFyZ2luLWJvdHRvbTogMHB4OyovXG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmZyZ1RhZyB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uYnRuX2NsYXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbmlvbi1saXN0IHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweCAyNnB4O1xufVxuXG5pb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIGhlaWdodDogMzdweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLWJvdHRvbTogMTRweDtcbn1cblxuLnRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzAwMDtcbn1cblxuLnNpZ25VUCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM4YzhkOGE7XG4gIHBhZGRpbmc6IDIwcHggMHB4IDIwcHggMHB4O1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbi5sc3Ryb3cge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy10b3A6IDRweDtcbiAgLS1wYWRkaW5nLWxlZnQ6IDZweCAhaW1wb3J0YW50O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uY3JlYXRlQWNjIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY3JlYXRlQWNjIC5yZWdpc3RlclRhZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmlucHV0LWljb24ge1xuICBtYXJnaW46IDBweCAxMHB4IDBweCAwcHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2UzZTM7XG4gIHBhZGRpbmc6IDEwcHggNXB4IDE3cHggMHB4O1xufVxuXG5pb24taWNvbiB7XG4gIGNvbG9yOiAjN2Q3ZDdkO1xufVxuXG4udmVyaWZpZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG4uc2lnblVQIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogMjBweCAwcHggMjBweCAwcHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVycm9yIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVtYWlsVGFnIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5tYWluLXNpZ251cC1oZWFkZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/contactus/contactus.page.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/contactus/contactus.page.ts ***!
    \***************************************************/

  /*! exports provided: ContactUsPage */

  /***/
  function srcAppPagesContactusContactusPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactUsPage", function () {
      return ContactUsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/camera/ngx */
    "./node_modules/@ionic-native/camera/ngx/index.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var ContactUsPage =
    /*#__PURE__*/
    function () {
      function ContactUsPage(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        _classCallCheck(this, ContactUsPage);

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
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].maxLength(10)]],
          message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
      }

      _createClass(ContactUsPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.getSettings().then(function (data) {
            _this.settings = data[0];
            _this.contact_mobile = _this.settings.contact_phone;
            _this.contact_email = _this.settings.contact_email;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "sendOtp",
        value: function sendOtp() {
          var _this2 = this;

          this.util.show('Please wait....');
          var concatphone = document.getElementById("phoneNumber").value;
          this.phone = concatphone;
          this.api.sendOtp(this.phone).subscribe(function (data) {
            _this2.util.hide();

            _this2.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

            _this2.verifyOtpAlert();
          }, function (error) {
            _this2.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "verifyOtpAlert",
        value: function verifyOtpAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertCtrl.create({
                      header: 'Verify Otp',
                      cssClass: 'profileCss',
                      backdropDismiss: false,
                      inputs: [{
                        name: 'otp',
                        type: 'tel',
                        placeholder: 'Enter OTP here'
                      }],
                      buttons: [{
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'cancel-button',
                        handler: function handler() {
                          console.log('Confirm Cancel');
                        }
                      }, {
                        text: 'Verify',
                        cssClass: 'submit-button',
                        handler: function handler(data) {
                          console.log(data);

                          _this3.util.show('Please wait....');

                          var param = {
                            otp: data.otp,
                            mobile: _this3.phone
                          };

                          _this3.api.verifyOtp(param).subscribe(function (data) {
                            _this3.success = data;

                            if (_this3.success.status == "STATUS_OK") {
                              _this3.util.hide();

                              _this3.isVerified = true;
                            } else {
                              _this3.util.hide();

                              _this3.util.showToast(_this3.success.Message, 'danger', 'bottom');
                            }
                          }, function (error) {
                            _this3.util.hide();

                            console.log('err', error);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    alert.present();

                  case 4:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this4 = this;

          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            userid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
          };
          this.api.addQuery(id.toString(), param).then(function (userData) {
            _this4.util.showToast('We have received your message we will get back to you shortly.', 'primary', 'bottom');

            _this4.router.navigate(['/home']);
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this4.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }]);

      return ContactUsPage;
    }();

    ContactUsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    ContactUsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contactus/contactus.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.page.scss */
      "./src/app/pages/contactus/contactus.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], ContactUsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-contactus-contactus-module-es5.js.map