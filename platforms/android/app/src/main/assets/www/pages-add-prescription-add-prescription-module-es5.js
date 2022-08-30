function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-add-prescription-add-prescription-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-prescription/add-prescription.page.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-prescription/add-prescription.page.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAddPrescriptionAddPrescriptionPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n  <form [formGroup]=\"prescriptionForm\">\n  <div class=\"container\">\t\n\t<div class=\"row\">\n    <div class=\"col-md-12 col-lg-6 col-xl-6\">\n\t<div class=\"sttxt\">Step 1.</div>\n\t <div style=\"box-shadow: 0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border: 1px solid #f2f2f2;padding:10px;height: 228px;\">\n  \t <p class=\"emailTag\">Name</p>\n      <ion-item>\n       <ion-input [(ngModel)]=\"user_name\" type=\"text\" spellcheck=\"false\" autocapitalize=\"off\" formControlName=\"name\" placeholder=\"Please Enter Your Name\">\n       </ion-input>\n      </ion-item>\n      <div no-lines *ngIf=\"( prescriptionForm.get('name').hasError('minlength') || prescriptionForm.get('name').hasError('maxlength') ||prescriptionForm.get('name').hasError('pattern') ||prescriptionForm.get('name').hasError('required') ) && prescriptionForm.get('name').touched\">\n      <div class=\"error\" *ngIf=\"prescriptionForm.get('name').hasError('required') && prescriptionForm.get('name').touched\">\n       Name Is Required\n      </div>\n      </div>\n\n      <p class=\"mblTag\">Mobile Number</p>\n      <ion-item lines=\"none\">\n        <ion-input [(ngModel)]=\"user_mobile\" type=\"number\" id=\"phoneNumber\" type=\"tel\" formControlName=\"phone\" placeholder=\"Please Enter Your Mobile Number\" [disabled]=\"isVerified\"></ion-input>\n     </ion-item>\n      <div no-lines *ngIf=\"( prescriptionForm.get('phone').hasError('minlength') || prescriptionForm.get('phone').hasError('maxlength') ||prescriptionForm.get('phone').hasError('pattern') ||prescriptionForm.get('phone').hasError('required') ) && prescriptionForm.get('phone').touched\">\n      <div class=\"error\" *ngIf=\"prescriptionForm.get('phone').hasError('required') && prescriptionForm.get('phone').touched\">\n       Mobile Number Is Required\n      </div>\n      <div class=\"error\" *ngIf=\"prescriptionForm.get('phone').hasError('minlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n      <div class=\"error\" *ngIf=\"prescriptionForm.get('phone').hasError('maxlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n\t  </div>\n\t  <div *ngIf=\"isVerified\" class=\"verified\">\n        Number is verified successfully\n      </div>\n     \n     \n\t  <ion-button (click)=\"sendOtp()\" *ngIf=\"!isVerified && prescriptionForm.get('phone').valid\" [disabled]=\"prescriptionForm.get('phone').invalid\">\n        Send OTP\n      </ion-button>\n\t </div></div>\n<div class=\"col-md-12 col-lg-6 col-xl-6\"><div class=\"sttxt\">Step 2.</div>\n\t <div class=\"step2box\" style=\"\">\n\t  <div class=\"btn-div\">\n      <div class=\"fil\">\n        <label for=\"test\">\n          <div>Upload</div>\n          <input type=\"file\" id=\"header\" (change)=\"handleFileSelect($event)\" >\n        </label>\n      </div>             \n    </div>\n    <div class=\"thumnamilCont\">\n      <div class=\"equalHMRWrap eqWrap\">\n         <div class=\"posRel equalHMR eq\" *ngFor=\" let image of attachments;  let i = index\">\n            <img src=\"{{image}}\" alt=\"\" class=\"thumnamilContimg\">\n            <span><img src=\"assets/crossbtn.svg\" alt=\"\" class=\"crossBtn\" (click)=\"removeImageAtIndex(i)\"></span>\n         </div>\n      </div>\n    </div>\n   <div class=\"uptxt\"><p>Image size should not exceed 2MB.</p><p>Maximum 3 Prescrition can be uploaded.</p></div>\n  </div>\n</div>\n\n</div>\n</div>\n</form>\n<div class=\"container\">\t\n\t<div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xl-12 mt-2 mb-2\">\n    <ion-button (click)=\"addPrescription()\" [disabled]=\"prescriptionForm.get('name').invalid || prescriptionForm.get('phone').invalid || !isAttach || !isVerified\">\n      Upload Prescrition\n    </ion-button>\n</div>\n</div>\t</div>\t\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/add-prescription/add-prescription-routing.module.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/pages/add-prescription/add-prescription-routing.module.ts ***!
    \***************************************************************************/

  /*! exports provided: AddPrescriptionPageRoutingModule */

  /***/
  function srcAppPagesAddPrescriptionAddPrescriptionRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrescriptionPageRoutingModule", function () {
      return AddPrescriptionPageRoutingModule;
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


    var _add_prescription_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./add-prescription.page */
    "./src/app/pages/add-prescription/add-prescription.page.ts");

    var routes = [{
      path: '',
      component: _add_prescription_page__WEBPACK_IMPORTED_MODULE_3__["AddPrescriptionPage"]
    }];

    var AddPrescriptionPageRoutingModule = function AddPrescriptionPageRoutingModule() {
      _classCallCheck(this, AddPrescriptionPageRoutingModule);
    };

    AddPrescriptionPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AddPrescriptionPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/add-prescription/add-prescription.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/add-prescription/add-prescription.module.ts ***!
    \*******************************************************************/

  /*! exports provided: AddPrescriptionPageModule */

  /***/
  function srcAppPagesAddPrescriptionAddPrescriptionModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrescriptionPageModule", function () {
      return AddPrescriptionPageModule;
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


    var _add_prescription_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-prescription-routing.module */
    "./src/app/pages/add-prescription/add-prescription-routing.module.ts");
    /* harmony import */


    var _add_prescription_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-prescription.page */
    "./src/app/pages/add-prescription/add-prescription.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var AddPrescriptionPageModule = function AddPrescriptionPageModule() {
      _classCallCheck(this, AddPrescriptionPageModule);
    };

    AddPrescriptionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _add_prescription_routing_module__WEBPACK_IMPORTED_MODULE_5__["AddPrescriptionPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_add_prescription_page__WEBPACK_IMPORTED_MODULE_6__["AddPrescriptionPage"]]
    })], AddPrescriptionPageModule);
    /***/
  },

  /***/
  "./src/app/pages/add-prescription/add-prescription.page.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/add-prescription/add-prescription.page.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAddPrescriptionAddPrescriptionPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-item {\n  --ion-background-color:#fff;\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  height: 40px;\n  --min-height: 10%;\n  --padding-start: 5px !important;\n}\n\n.mblTag {\n  margin-top: 1rem;\n  margin-bottom: 5px;\n}\n\n.emailTag {\n  margin-top: 1rem;\n  margin-bottom: 5px;\n}\n\n.uptxt {\n  font-size: 13px;\n  color: #888585;\n  line-height: 6px;\n  margin: 24px 0;\n}\n\n.sttxt {\n  background: #007c9d;\n  color: #fff;\n  padding: 11px;\n  margin-top: 30px;\n}\n\n.thumnamilCont {\n  border: 1px solid #ccc;\n  background: #f4f3f3;\n  min-height: 130px;\n}\n\n.crossBtn {\n  vertical-align: top;\n}\n\n.sc-ion-input-md-h {\n  --padding-top: 6px;\n  --padding-bottom: 20px;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n  padding-left: 2px;\n}\n\n.list {\n  padding: 16px;\n}\n\n.helpTip {\n  font-size: 10px;\n}\n\n.equalHMRWrap {\n  flex-wrap: wrap;\n}\n\n.eqWrap {\n  display: -webkit-box;\n  display: flex;\n}\n\n.equalHMR {\n  width: 33%;\n  margin-bottom: 2%;\n  display: inline-block;\n}\n\n.eq {\n  padding: 0px;\n}\n\n.btn {\n  border: 1px #808080 solid;\n  border-radius: 35px;\n  padding: 2px 10px 2px 10px;\n  font-size: 12px;\n}\n\n.thumnamilContimg {\n  margin: 12px 8px;\n  width: 100px;\n  height: 100px;\n}\n\n.crossBtn {\n  margin: 2px 0px 0px 0px;\n  width: 15px;\n  height: 15px;\n}\n\ninput[type=file] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\n.fil div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('attach.png') no-repeat left;\n  background-size: 15%;\n  margin-left: 16px;\n}\n\nlabel {\n  display: inline-block;\n  position: relative;\n  height: 34px;\n  width: 110px;\n  background-color: #fff;\n  border: 1px solid #bab6b6;\n}\n\ndiv.dragover {\n  background-color: #fff;\n}\n\n.btn-div {\n  margin-top: 5%;\n}\n\n.verified {\n  font-size: 12px;\n  margin: 0px;\n  color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkLXByZXNjcmlwdGlvbi9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxhZGQtcHJlc2NyaXB0aW9uXFxhZGQtcHJlc2NyaXB0aW9uLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWRkLXByZXNjcmlwdGlvbi9hZGQtcHJlc2NyaXB0aW9uLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FDQ0Y7O0FEQ0E7RUFBUSxnQkFBQTtFQUFpQixrQkFBQTtBQ0l6Qjs7QURGQTtFQUFVLGdCQUFBO0VBQWlCLGtCQUFBO0FDTzNCOztBRExBO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNRRjs7QUROQTtFQUNFLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1NGOztBRFBBO0VBQ0Usc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVUY7O0FEUkE7RUFBVSxtQkFBQTtBQ1lWOztBRFhBO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQ2NKOztBRFpBO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2VKOztBRGJBO0VBQ0UsYUFBQTtBQ2dCRjs7QURkRTtFQUNJLGVBQUE7QUNpQk47O0FEZkU7RUFDSSxlQUFBO0FDa0JOOztBRGhCRTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ21CTjs7QURqQkU7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ29CTjs7QURsQkU7RUFDSSxZQUFBO0FDcUJOOztBRG5CRTtFQUNJLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLGVBQUE7QUNzQk47O0FEcEJFO0VBQ0ksZ0JBQUE7RUFDSCxZQUFBO0VBQ0EsYUFBQTtBQ3VCSDs7QURyQkM7RUFDSyx1QkFBQTtFQUNILFdBQUE7RUFDQSxZQUFBO0FDd0JIOztBRHRCSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUN5QlI7O0FEdkJRO0VBQ0Esa0JBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQzBCUjs7QUR4QlE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FDMkJSOztBRHpCUTtFQUNBLHNCQUFBO0FDNEJSOztBRDFCUTtFQUNFLGNBQUE7QUM2QlY7O0FEekJFO0VBQ00sZUFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtBQzRCUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC1wcmVzY3JpcHRpb24vYWRkLXByZXNjcmlwdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbXtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLW1pbi1oZWlnaHQ6IDEwJTsgIFxuICAtLXBhZGRpbmctc3RhcnQ6IDVweCAhaW1wb3J0YW50O1xufVxuLm1ibFRhZ3ttYXJnaW4tdG9wOiAxcmVtO21hcmdpbi1ib3R0b206IDVweDtcbn0gIFxuLmVtYWlsVGFne21hcmdpbi10b3A6IDFyZW07bWFyZ2luLWJvdHRvbTogNXB4O1xufSAgICAgIFxuLnVwdHh0IHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzg4ODU4NTtcbiAgbGluZS1oZWlnaHQ6IDZweDtcbiAgbWFyZ2luOiAyNHB4IDA7XG59XG4uc3R0eHQge1xuICBiYWNrZ3JvdW5kOiAjMDA3YzlkO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTFweDtcbiAgbWFyZ2luLXRvcDogMzBweDtcbn1cbi50aHVtbmFtaWxDb250IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2Y0ZjNmMztcbiAgbWluLWhlaWdodDogMTMwcHg7XG59XG4uY3Jvc3NCdG57dmVydGljYWwtYWxpZ246dG9wO31cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gICAgLS1wYWRkaW5nLXRvcDogNnB4O1xuICAgIC0tcGFkZGluZy1ib3R0b206IDIwcHg7XG59XG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcGFkZGluZy1sZWZ0OiAycHg7XG59XG4ubGlzdCB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4gIC5oZWxwVGlwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTBweDsgXG4gIH1cbiAgLmVxdWFsSE1SV3JhcCB7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7IFxuICB9XG4gIC5lcVdyYXAge1xuICAgICAgZGlzcGxheTogZmxleDsgXG4gIH1cbiAgLmVxdWFsSE1SIHtcbiAgICAgIHdpZHRoOiAzMyU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgXG4gIH1cbiAgLmVxIHtcbiAgICAgIHBhZGRpbmc6IDBweDsgXG4gIH0gIFxuICAuYnRuIHtcbiAgICAgIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XG4gICAgICBib3JkZXItcmFkaXVzOiAzNXB4O1xuICAgICAgcGFkZGluZzogMnB4IDEwcHggMnB4IDEwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7IFxuICB9XG4gIC50aHVtbmFtaWxDb250aW1nIHtcbiAgICAgIG1hcmdpbjogMTJweCA4cHg7IFxuXHQgIHdpZHRoOjEwMHB4O1xuXHQgIGhlaWdodDoxMDBweDtcbiAgfVxuXHQuY3Jvc3NCdG57XG4gICAgICBtYXJnaW46MnB4IDBweCAwcHggMHB4O1xuXHQgIHdpZHRoOjE1cHg7XG5cdCAgaGVpZ2h0OjE1cHg7XG4gIH1cbiAgICBpbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO31cblxuICAgICAgICAuZmlsIGRpdiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2F0dGFjaC5wbmcpIG5vLXJlcGVhdCBsZWZ0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1JTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7fVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgd2lkdGg6IDExMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNiYWI2YjY7fVxuXG4gICAgICAgIGRpdi5kcmFnb3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIH1cbiAgICAgICAgLmJ0bi1kaXZ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNSU7XG4gICAgICAgIH1cblxuXG4gIC52ZXJpZmllZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfSIsImlvbi1pdGVtIHtcbiAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjojZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4O1xuICAtLW1pbi1oZWlnaHQ6IDEwJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDtcbn1cblxuLm1ibFRhZyB7XG4gIG1hcmdpbi10b3A6IDFyZW07XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmVtYWlsVGFnIHtcbiAgbWFyZ2luLXRvcDogMXJlbTtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udXB0eHQge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjODg4NTg1O1xuICBsaW5lLWhlaWdodDogNnB4O1xuICBtYXJnaW46IDI0cHggMDtcbn1cblxuLnN0dHh0IHtcbiAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDExcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi50aHVtbmFtaWxDb250IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYmFja2dyb3VuZDogI2Y0ZjNmMztcbiAgbWluLWhlaWdodDogMTMwcHg7XG59XG5cbi5jcm9zc0J0biB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbi5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy10b3A6IDZweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDJweDtcbn1cblxuLmxpc3Qge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG4uaGVscFRpcCB7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmVxdWFsSE1SV3JhcCB7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmVxV3JhcCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5lcXVhbEhNUiB7XG4gIHdpZHRoOiAzMyU7XG4gIG1hcmdpbi1ib3R0b206IDIlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5lcSB7XG4gIHBhZGRpbmc6IDBweDtcbn1cblxuLmJ0biB7XG4gIGJvcmRlcjogMXB4ICM4MDgwODAgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDM1cHg7XG4gIHBhZGRpbmc6IDJweCAxMHB4IDJweCAxMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi50aHVtbmFtaWxDb250aW1nIHtcbiAgbWFyZ2luOiAxMnB4IDhweDtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uY3Jvc3NCdG4ge1xuICBtYXJnaW46IDJweCAwcHggMHB4IDBweDtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn1cblxuaW5wdXRbdHlwZT1maWxlXSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgb3BhY2l0eTogMDtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZmlsIGRpdiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiA4MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2F0dGFjaC5wbmcpIG5vLXJlcGVhdCBsZWZ0O1xuICBiYWNrZ3JvdW5kLXNpemU6IDE1JTtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDExMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmFiNmI2O1xufVxuXG5kaXYuZHJhZ292ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuXG4uYnRuLWRpdiB7XG4gIG1hcmdpbi10b3A6IDUlO1xufVxuXG4udmVyaWZpZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/add-prescription/add-prescription.page.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/add-prescription/add-prescription.page.ts ***!
    \*****************************************************************/

  /*! exports provided: AddPrescriptionPage */

  /***/
  function srcAppPagesAddPrescriptionAddPrescriptionPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddPrescriptionPage", function () {
      return AddPrescriptionPage;
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

    var AddPrescriptionPage =
    /*#__PURE__*/
    function () {
      function AddPrescriptionPage(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        _classCallCheck(this, AddPrescriptionPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.menu = menu;
        this.user_name = '';
        this.attachments = [];
        this.user_mobile = '';
        this.isAttach = false;
        this.showInput = true;
        this.isVerified = false; //this.menu.enable(false);		

        this.prescriptionForm = this.formBuilder.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]],
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required]]
        });
      }

      _createClass(AddPrescriptionPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var loginStatus = sessionStorage.getItem('loginStatus');

          if (loginStatus == 'true') {
            var uid = sessionStorage.getItem('uid');
            this.api.getMyProfile(uid).then(function (info) {
              _this.user_name = info.name;
              _this.user_mobile = info.phone;
              _this.token = info.fcm_token;
            }).catch(function (err) {
              if (err) {
                console.log(err);

                _this.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          }
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
          var _this2 = this;

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
              _this2.isAttach = true;

              _this2.attachments.push(url);
            });
          }, function (error) {
            _this2.util.hide();

            console.log(error);
          }).catch(function (error) {
            console.log(error);

            _this2.util.hide();

            _this2.util.errorToast(_this2.util.translate('Something went wrong'));
          });
        }
      }, {
        key: "sendOtp",
        value: function sendOtp() {
          var _this3 = this;

          this.util.show('Please wait....');
          var concatphone = document.getElementById("phoneNumber").value;
          this.user_mobile = concatphone;
          this.api.sendOtp(this.user_mobile).subscribe(function (data) {
            _this3.util.hide();

            _this3.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

            _this3.verifyOtpAlert();
          }, function (error) {
            _this3.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "verifyOtpAlert",
        value: function verifyOtpAlert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

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

                          _this4.util.show('Please wait....');

                          var param = {
                            otp: data.otp,
                            mobile: _this4.user_mobile
                          };

                          _this4.api.verifyOtp(param).subscribe(function (data) {
                            _this4.success = data;

                            if (_this4.success.status == "STATUS_OK") {
                              _this4.util.hide();

                              _this4.isVerified = true;
                            } else {
                              _this4.util.hide();

                              _this4.util.showToast(_this4.success.Message, 'danger', 'bottom');
                            }
                          }, function (error) {
                            _this4.util.hide();

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
        key: "addPrescription",
        value: function addPrescription() {
          var _this5 = this;

          this.util.show('Please wait....');
          var date = new Date();
          var created = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            name: this.user_name,
            phone: this.user_mobile,
            remarks: '',
            createdAt: created,
            id: id.toString(),
            upload_prescription: this.attachments,
            status: 0
          };
          console.log(param);
          this.api.addPrescription(id.toString(), param).then(function (userData) {
            _this5.util.showToast('We have received your prescription request we will get back to you shortly.', 'primary', 'bottom');

            _this5.util.hide();

            _this5.router.navigate(['/home']);
          }).catch(function (err) {
            if (err) {
              _this5.util.hide();

              console.log(err);

              _this5.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "removeImageAtIndex",
        value: function removeImageAtIndex(index) {
          this.attachments.splice(index, 1);

          if (this.attachments.length == 0) {
            this.isAttach = false;
          }
        }
      }]);

      return AddPrescriptionPage;
    }();

    AddPrescriptionPage.ctorParameters = function () {
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

    AddPrescriptionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-prescription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-prescription.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add-prescription/add-prescription.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-prescription.page.scss */
      "./src/app/pages/add-prescription/add-prescription.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_6__["Camera"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], AddPrescriptionPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-add-prescription-add-prescription-module-es5.js.map