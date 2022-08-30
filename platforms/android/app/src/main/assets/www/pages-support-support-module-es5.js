function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportSupportPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n  <div class=\"row\">\n  \t<div class=\"col-md-12 col-lg-12 col-xl-12\">\n  \t\t<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Tickets Raised</h3>\n  \t</div>\t\n  </div>\t\n\t<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-8 col-xl-8\" style=\"margin: 0 auto;\">\n  <form [formGroup]=\"supportForm\">\n    <ion-list class=\"list\">\n\t\n  \t <p class=\"emailTag inspace\">Email</p>\n      <ion-item>\n       <ion-input [(ngModel)]=\"user_email\" type=\"email\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"email\" placeholder=\"Please Enter Email-Id\">\n       </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( supportForm.get('email').hasError('minlength') || supportForm.get('email').hasError('maxlength') ||supportForm.get('email').hasError('pattern') ||supportForm.get('email').hasError('required') ) && supportForm.get('email').touched\">\n      <div class=\"error\" *ngIf=\"supportForm.get('email').hasError('required') && supportForm.get('email').touched\">\n       Email-Id Is Required\n      </div>\n      <div class=\"error\" *ngIf=\"supportForm.get('email').hasError('pattern')\">\n      Please Enter Valid Email-Id\n      </div>\n      </div>\n\n      <p class=\"mblTag inspace\">Issue</p>\n      <ion-item>\n\t    <ion-select [interfaceOptions]=\"customAlertOptions\" interface=\"action-sheet\" placeholder=\"Please Select An Issue\" class=\"sel\" [(ngModel)]=\"reason\" (ionChange)=\"checkId(reason)\" formControlName=\"select\">\n\t      <ion-select-option *ngFor=\"let item of issues\" [value]=item.title>{{item.title}}</ion-select-option>\n\t    </ion-select>\n\t    </ion-item>\n      <div no-lines *ngIf=\"( supportForm.get('select').hasError('minlength') || supportForm.get('select').hasError('maxlength') ||supportForm.get('select').hasError('pattern') ||supportForm.get('select').hasError('required') ) && supportForm.get('select').touched\">\n      <div class=\"error\" *ngIf=\"supportForm.get('select').hasError('required') && supportForm.get('select').touched\">\n       Please Select Issue\n      </div>\n      </div>\n\n      <div *ngIf=showInput>\n        <p class=\"mblTag inspace\">Bookings/Payment Id</p>\n        <ion-item>\n        <ion-input [(ngModel)]=\"reference_id\" type=\"text\" spellcheck=\"false\" placeholder=\"Please Enter Reference-Id\" [ngModelOptions]=\"{standalone: true}\">\n         </ion-input>\n        </ion-item>\n        <div no-lines *ngIf=\"( supportForm.get('reference').hasError('minlength') || supportForm.get('reference').hasError('maxlength') ||supportForm.get('reference').hasError('pattern') ||supportForm.get('reference').hasError('required') ) && supportForm.get('reference').touched\">\n        <div class=\"error\" *ngIf=\"supportForm.get('reference').hasError('required') && supportForm.get('reference').touched\">\n         Reference-Id Is Required\n        </div>\n        </div>\n      </div>\n\n      <p class=\"mblTag inspace\">Describe in detail</p>\n\t  \t  <ion-textarea class=\"textarea\" rows=\"6\" cols=\"20\" placeholder=\"Describe In Detail\" auto-grow=\"true\" [(ngModel)]=\"remark\" formControlName=\"remark\">\n\t  \t  </ion-textarea>\n      <div no-lines *ngIf=\"( supportForm.get('remark').hasError('minlength') || supportForm.get('remark').hasError('maxlength') ||supportForm.get('remark').hasError('pattern') ||supportForm.get('remark').hasError('required') ) && supportForm.get('remark').touched\">\n        <div class=\"error\" *ngIf=\"supportForm.get('remark').hasError('required') && supportForm.get('remark').touched\">\n        Description Is Required\n        </div>\n      </div>\n\n\t  <!-- <div class=\"thumnamilCont\" *ngIf=\"isAttach\">\n  \t\t<div class=\"row equalHMRWrap eqWrap\">\n  \t\t  <div class=\"posRel equalHMR eq\">\n  \t\t    <img src=\"{{Attachments}}\" alt=\"\" height=\"100\" width=\"95\">\n  \t\t  </div>\n  \t\t</div>\n\t  </div>\n\t  <div class=\"btn-div\">\n\t    <button class=\"btn\" (click)=\"openCamera()\">{{\"Add Attachment\"|translate}}</button>\n\t     <div class=\"helpTip\">{{\"File size cannot be larger then 5 MB\"|translate}}</div>\n\t  </div> -->\n\n    <div class=\"fil\">\n      <label for=\"test\">\n        <div>Upload</div>\n        <input type=\"file\" id=\"header\" (change)=\"handleFileSelect($event)\" >\n      </label>\n    </div>      \n    <div class=\"thumnamilCont\" *ngIf=\"isAttach == true\">\n      <div class=\"equalHMRWrap eqWrap\">\n         <div class=\"posRel equalHMR eq\">\n            <img src=\"{{Attachments}}\" alt=\"\" class=\"thumnamilContimg\">\n         </div>\n      </div>\n    </div>\n  </ion-list>\n</form>\n    <ion-button (click)=\"report()\" [disabled]=\"supportForm.get('email').invalid || supportForm.get('select').invalid || supportForm.get('remark').invalid\">\n        Submit report\n    </ion-button><br><br>\n\t</div></div>\n</div>\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/support/support-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/support/support-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SupportPageRoutingModule */

  /***/
  function srcAppPagesSupportSupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function () {
      return SupportPageRoutingModule;
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


    var _support_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support.page */
    "./src/app/pages/support/support.page.ts");

    var routes = [{
      path: '',
      component: _support_page__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }];

    var SupportPageRoutingModule = function SupportPageRoutingModule() {
      _classCallCheck(this, SupportPageRoutingModule);
    };

    SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/support/support.module.ts ***!
    \*************************************************/

  /*! exports provided: SupportPageModule */

  /***/
  function srcAppPagesSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageModule", function () {
      return SupportPageModule;
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


    var _support_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support-routing.module */
    "./src/app/pages/support/support-routing.module.ts");
    /* harmony import */


    var _support_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support.page */
    "./src/app/pages/support/support.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var SupportPageModule = function SupportPageModule() {
      _classCallCheck(this, SupportPageModule);
    };

    SupportPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_support_page__WEBPACK_IMPORTED_MODULE_6__["SupportPage"]]
    })], SupportPageModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/support/support.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSupportSupportPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --ion-background-color:#fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  height: 38px;\n  --min-height: 10%;\n  --padding-start: 5px !important;\n}\n\n.mblTag {\n  margin-bottom: 0px;\n  font-size: 12px;\n}\n\n.emailTag {\n  margin-top: 0px;\n  margin-bottom: 0px;\n  font-size: 12px;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 4px;\n  --padding-bottom: 20px;\n}\n\n.sel {\n  max-width: 100%;\n  width: 100%;\n  font-size: 14px !important;\n  --padding-top: 5px;\n  --padding-start: 0px;\n}\n\n.textarea {\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  font-size: 14px;\n  margin-top: 0px;\n  color: #000;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n  padding-left: 2px;\n}\n\n.list {\n  padding: 16px;\n}\n\n.btn-div {\n  margin: 20px 0px;\n}\n\n.helpTip {\n  font-size: 10px;\n}\n\n.equalHMRWrap {\n  flex-wrap: wrap;\n}\n\n.eqWrap {\n  display: -webkit-box;\n  display: flex;\n}\n\n.equalHMR {\n  width: 33%;\n  margin-bottom: 2%;\n  display: inline-block;\n}\n\n.eq {\n  padding: 0px;\n}\n\n.btn {\n  border: 1px #808080 solid;\n  border-radius: 35px;\n  padding: 2px 10px 2px 10px;\n  font-size: 12px;\n}\n\n.thumnamilContimg {\n  margin: 12px 8px;\n  width: 100px;\n  height: 100px;\n}\n\n.crossBtn {\n  margin: 2px 0px 0px 0px;\n  width: 15px;\n  height: 15px;\n}\n\ninput[type=file] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.fil {\n  margin-top: 16px;\n}\n\n.fil div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('attach.png') no-repeat left;\n  background-size: 15%;\n  margin-left: 16px;\n}\n\nlabel {\n  display: inline-block;\n  position: relative;\n  height: 34px;\n  width: 110px;\n  background-color: #fff;\n  border: 1px solid #bab6b6;\n}\n\ndiv.dragover {\n  background-color: #fff;\n}\n\n.btn-div {\n  margin-top: 5%;\n}\n\nion-select::part(icon) {\n  color: #000 !important;\n}\n\nion-select::part(text) {\n  color: #000 !important;\n}\n\n.inspace {\n  padding-top: 17px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxzdXBwb3J0XFxzdXBwb3J0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7QUNFRjs7QURBQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDS0Y7O0FESEE7RUFDRSx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FDTUY7O0FESkE7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDT0o7O0FETEE7RUFFRSxhQUFBO0FDT0Y7O0FETEE7RUFDSSxnQkFBQTtBQ1FKOztBRFBFO0VBQ0ksZUFBQTtBQ1VOOztBRFJFO0VBQ0ksZUFBQTtBQ1dOOztBRFRFO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDWU47O0FEVkU7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ2FOOztBRFhFO0VBQ0ksWUFBQTtBQ2NOOztBRFpFO0VBQ0kseUJBQUE7RUFDQSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtBQ2VOOztBRGJFO0VBQ0EsZ0JBQUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ2dCSjs7QURkRTtFQUNJLHVCQUFBO0VBQ0YsV0FBQTtFQUNBLFlBQUE7QUNpQko7O0FEZkU7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FDa0JKOztBRGpCSTtFQUNFLGdCQUFBO0FDb0JOOztBRGxCSTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNxQk47O0FEbEJJO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQ3FCTjs7QURsQkk7RUFDRSxzQkFBQTtBQ3FCTjs7QURuQkk7RUFDRSxjQUFBO0FDc0JOOztBRG5CQTtFQUNJLHNCQUFBO0FDc0JKOztBRHBCQTtFQUNJLHNCQUFBO0FDdUJKOztBRHJCQTtFQUNFLGlCQUFBO0FDd0JGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pdGVte1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiNmZmY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBoZWlnaHQ6IDM4cHg7XG4gIC0tbWluLWhlaWdodDogMTAlOyAgXG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG4ubWJsVGFne1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0gIFxuLmVtYWlsVGFne1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xufSAgICAgIFxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuLnNlbCB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZToxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiMwMDA7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG4ubGlzdCB7XG4gIFxuICBwYWRkaW5nOiAxNnB4O1xufVxuLmJ0bi1kaXZ7ICAgXG4gICAgbWFyZ2luOiAyMHB4IDBweDt9XG4gIC5oZWxwVGlwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDsgXG4gIH1cbiAgLmVxdWFsSE1SV3JhcCB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IFxuICB9XG4gIC5lcVdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDsgXG4gIH1cbiAgLmVxdWFsSE1SIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gIH1cbiAgLmVxIHtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH0gIFxuICAuYnRuIHtcbiAgICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7IFxuICB9XG4gIC50aHVtbmFtaWxDb250aW1nIHtcbiAgbWFyZ2luOiAxMnB4IDhweDsgXG4gICAgd2lkdGg6MTAwcHg7XG4gICAgaGVpZ2h0OjEwMHB4O1xuICB9XG4gIC5jcm9zc0J0bntcbiAgICAgIG1hcmdpbjoycHggMHB4IDBweCAwcHg7XG4gICAgd2lkdGg6MTVweDtcbiAgICBoZWlnaHQ6MTVweDtcbiAgfVxuICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0b3A6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIHdpZHRoOiAxMDAlO31cbiAgICAuZmlsIHtcbiAgICAgIG1hcmdpbi10b3A6IDE2cHg7XG4gICAgfVxuICAgIC5maWwgZGl2IHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJvdHRvbTogMDtcbiAgICAgIHdpZHRoOiA4MCU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hdHRhY2gucG5nKSBuby1yZXBlYXQgbGVmdDtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgfVxuXG4gICAgbGFiZWwge1xuICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIGJvcmRlcjoxcHggc29saWQgI2JhYjZiNjtcbiAgICB9XG5cbiAgICBkaXYuZHJhZ292ZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICB9XG4gICAgLmJ0bi1kaXZ7XG4gICAgICBtYXJnaW4tdG9wOiA1JTtcbiAgICB9XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5pb24tc2VsZWN0OjpwYXJ0KHRleHQpIHtcbiAgICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLmluc3BhY2Uge1xuICBwYWRkaW5nLXRvcDogMTdweDtcbn0iLCJpb24taXRlbSB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6I2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGhlaWdodDogMzhweDtcbiAgLS1taW4taGVpZ2h0OiAxMCU7XG4gIC0tcGFkZGluZy1zdGFydDogNXB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tYmxUYWcge1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLmVtYWlsVGFnIHtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNjLWlvbi1pbnB1dC1tZC1oIHtcbiAgLS1wYWRkaW5nLXRvcDogNHB4O1xuICAtLXBhZGRpbmctYm90dG9tOiAyMHB4O1xufVxuXG4uc2VsIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDVweDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG5cbi50ZXh0YXJlYSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG5cbi5saXN0IHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmJ0bi1kaXYge1xuICBtYXJnaW46IDIwcHggMHB4O1xufVxuXG4uaGVscFRpcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVxdWFsSE1SV3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmVxV3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcXVhbEhNUiB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lcSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50aHVtbmFtaWxDb250aW1nIHtcbiAgbWFyZ2luOiAxMnB4IDhweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY3Jvc3NCdG4ge1xuICBtYXJnaW46IDJweCAwcHggMHB4IDBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsIHtcbiAgbWFyZ2luLXRvcDogMTZweDtcbn1cblxuLmZpbCBkaXYge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogODAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hdHRhY2gucG5nKSBuby1yZXBlYXQgbGVmdDtcbiAgYmFja2dyb3VuZC1zaXplOiAxNSU7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDM0cHg7XG4gIHdpZHRoOiAxMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2JhYjZiNjtcbn1cblxuZGl2LmRyYWdvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cblxuLmJ0bi1kaXYge1xuICBtYXJnaW4tdG9wOiA1JTtcbn1cblxuaW9uLXNlbGVjdDo6cGFydChpY29uKSB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQodGV4dCkge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4uaW5zcGFjZSB7XG4gIHBhZGRpbmctdG9wOiAxN3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/support/support.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/support/support.page.ts ***!
    \***********************************************/

  /*! exports provided: SupportPage */

  /***/
  function srcAppPagesSupportSupportPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
      return SupportPage;
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


    var firebase__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! firebase */
    "./node_modules/firebase/dist/index.cjs.js");
    /* harmony import */


    var firebase__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);

    var SupportPage =
    /*#__PURE__*/
    function () {
      function SupportPage(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        _classCallCheck(this, SupportPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.menu = menu;
        this.Attachments = '';
        this.customAlertOptions = {
          header: 'Select an Issue',
          translucent: true
        };
        this.isAttach = false;
        this.reference_id = '';
        this.showInput = true;
        this.issues = [{
          id: 1,
          title: "Related to Lab Test Booking"
        }, {
          id: 2,
          title: "Related to Sample Collection"
        }, {
          id: 3,
          title: "Related to Payments"
        }, {
          id: 4,
          title: "Related to Website"
        }, {
          id: 5,
          title: "Others"
        }];
        this.menu.enable(false);
        this.supportForm = this.formBuilder.group({
          email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
          select: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          reference: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          remark: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
      }

      _createClass(SupportPage, [{
        key: "checkId",
        value: function checkId(reason) {
          console.log(reason);
          this.reason = reason;

          if (reason == 'Others') {
            this.showInput = false;
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (info) {
            console.log(info);

            if (info != undefined) {
              _this.user_email = info.email;
              _this.token = info.fcm_token;
              console.log(_this.token);
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "openCamera",
        value: function openCamera() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var actionSheet;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.actionSheetController.create({
                      header: 'Choose from',
                      buttons: [{
                        text: 'Gallery',
                        icon: 'images',
                        handler: function handler() {
                          _this2.opemCamera('gallery');
                        }
                      }, {
                        text: 'Camera',
                        icon: 'camera',
                        handler: function handler() {
                          _this2.opemCamera('camera');
                        }
                      }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: function handler() {
                          console.log('Cancel clicked');
                        }
                      }]
                    });

                  case 2:
                    actionSheet = _context.sent;
                    _context.next = 5;
                    return actionSheet.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "opemCamera",
        value: function opemCamera(type) {
          var _this3 = this;

          var options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0,
            saveToPhotoAlbum: false,
            correctOrientation: false
          };
          this.camera.getPicture(options).then(function (imageData) {
            var base64Image = 'data:image/jpeg;base64,' + imageData; // this.image = base64Image;

            _this3.util.show();

            var id = sessionStorage.getItem('uid') + '/' + _this3.util.makeid(10);

            firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg').putString(base64Image, 'data_url').then(function (snapshot) {
              _this3.util.hide();

              snapshot.ref.getDownloadURL().then(function (url) {
                console.log('url uploaded', url);
                _this3.isAttach = true;
                _this3.Attachments = url;
              });
            }, function (error) {
              _this3.util.hide();

              console.log(error);
            }).catch(function (error) {
              console.log(error);

              _this3.util.hide();
            });
          }, function (err) {
            _this3.util.hide();
          });
        }
      }, {
        key: "handleFileSelect",
        value: function handleFileSelect(evt) {
          //this.util.show();
          var files = evt.target.files;
          var file = files[0];
          var fileName = file.name;
          var lastDot = fileName.lastIndexOf('.'); // const file_name = fileName.substring(0, lastDot);

          var ext = fileName.substring(lastDot + 1);
          this.file_extension = ext;

          if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
          }
        }
      }, {
        key: "_handleReaderLoaded",
        value: function _handleReaderLoaded(readerEvt) {
          var _this4 = this;

          var binaryString = readerEvt.target.result;
          this.base64textString = btoa(binaryString);
          var base64Image = 'data:image/jpeg;base64,' + this.base64textString;
          this.image = base64Image;
          var id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
          firebase__WEBPACK_IMPORTED_MODULE_8__["storage"]().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg').putString(base64Image, 'data_url').then(function (snapshot) {
            snapshot.ref.getDownloadURL().then(function (url) {
              //this.util.hide();
              console.log('url uploaded', url);
              var uid = sessionStorage.getItem('uid');
              var date = new Date();
              var modifiedOn = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("YYYY-MM-DD hh:mm:ss A");
              var id = Math.floor(100000000 + Math.random() * 900000000);
              _this4.isAttach = true;
              _this4.Attachments = url;
            });
          }, function (error) {
            _this4.util.hide();

            console.log(error);
          }).catch(function (error) {
            console.log(error);

            _this4.util.hide();

            _this4.util.errorToast(_this4.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "report",
        value: function report() {
          var _this5 = this;

          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            userid: uid,
            createdAt: created,
            id: id.toString(),
            image: this.Attachments,
            reason: this.reason,
            query: this.remark,
            status: 0,
            reference_id: this.reference_id
          };
          this.api.addSupport(id.toString(), param).then(function (userData) {
            var navigationExtras = {
              state: {
                incident_id: id.toString()
              }
            };

            _this5.sendNotification(id);

            _this5.util.showToast('We have received your issue we will get back to you shortly.', 'primary', 'bottom');

            _this5.router.navigate(['/home']);
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this5.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "sendNotification",
        value: function sendNotification(id) {
          var title = 'Support ticket confirmation';
          var msg = 'This is to inform you that your customer support ticket ' + id + ' has been received. We will be in touch shortly. Thank you.';
          this.api.sendSupportNotification(title, msg, this.token).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            // this.util.hide();
            console.log('err', error);
          });
        }
      }, {
        key: "viewList",
        value: function viewList() {
          this.router.navigate(['support-list']);
        }
      }]);

      return SupportPage;
    }();

    SupportPage.ctorParameters = function () {
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

    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.page.scss */
      "./src/app/pages/support/support.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], SupportPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-support-support-module-es5.js.map