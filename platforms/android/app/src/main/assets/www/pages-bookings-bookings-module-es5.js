function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-bookings-bookings-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesBookingsBookingsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n\n  <div class=\"row\">\n  \t<div class=\"col-md-12 col-lg-12 col-xl-12\">\n  \t\t<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Recent Lab Test</h3>\n  \t</div>\t\n  </div>\n\t\n\t<div style=\"margin:2% 0 2% 0%;\">\n    <div class=\"starend\" >\n        <ion-label>Show Orders between :</ion-label>\n      <div class=\"strtdat\">\n        <input type=\"date\" [(ngModel)]=\"start_date\"  [placeholder]=\"('Start Date' | translate )\"> \n      </div>\n        <ion-label>To :</ion-label>\n      <div class=\"enddat\" >\n        <input type=\"date\" [(ngModel)]=\"end_date\" [placeholder]=\"('End Date' | translate )\">\n      </div> \n      <ion-button (click)=\"submit()\"  >\n         Submit\n      </ion-button>\n    </div>          \n  </div>\n\n  <div *ngIf=\"myBookings.length == 0\" class=\"noData\">\n    <img src=\"assets/no_data_found.png\" >\n  </div>\n\n  <div *ngIf=\"myBookings.length !== 0\" class=\"table-responsive orderList\">\n  \n    <table class=\"table\">\n  <thead>\n    <tr >\n      <th scope=\"col\">Booking ID</th> \n      <th scope=\"col\">Lab Name</th>\n      <th scope=\"col\">Amount</th>\n      <th scope=\"col\">Status</th>\n\t    <th scope=\"col\">Booking Date and Time</th>\n\t    <th scope=\"col\">Action</th>\n\t  </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of myBookings;let i=index;\" >\n      <td><p>{{item.id}}</p></td>\n\t  <td>\n      <p>{{item.lab?.name}}</p>\n\t  </td>   \n    <td>₹ {{item.grand_total | number : '1.2-2'}} </td>\n    <td> \n  \t\t<span [className]=\"getClass(item.status)\" *ngIf=\"item.status==0\">To Be Confirmed</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==1\">Confirmed</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==2\">Sample Collected/Test Done</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==3\">Partial Report Released</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==4\">Refund Initiated</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==5\">Refund Cancelled</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==6\">Completed</span>\n      <span [className]=\"getClass(item.status)\" *ngIf=\"item.status==7\">Cancelled</span>\n    </td> \n\t  <!-- <td> {{item.payment_type}}</td> -->\n\t  <td><p>{{item.booking_date | date}}&nbsp;{{item.booking_time}} </p></td>\n\t  <td>\n      <ion-button (click)=\"view(item.id)\" expand=\"\" *ngIf=\"item.status == 6\">View Reports</ion-button>&nbsp;&nbsp;\n       <ion-button (click)=\"view(item.id)\" expand=\"\" *ngIf=\"item.status !=6\">View Details</ion-button>&nbsp;&nbsp;\n\t   <!--  <ion-button (click)=\"downloadInvoice(item)\" expand=\"\" *ngIf=\"item.status==6\" >Invoice</ion-button> -->\n      <ion-button (click)=\"download(item.invoice_url)\" expand=\"\" *ngIf=\"item.status==6\" >Invoice</ion-button>\n\t    </td>\n    </tr>\n  </tbody>\n</table>\n  </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/bookings/bookings-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: BookingsPageRoutingModule */

  /***/
  function srcAppPagesBookingsBookingsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPageRoutingModule", function () {
      return BookingsPageRoutingModule;
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


    var _bookings_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/pages/bookings/bookings.page.ts");

    var routes = [{
      path: '',
      component: _bookings_page__WEBPACK_IMPORTED_MODULE_3__["BookingsPage"]
    }];

    var BookingsPageRoutingModule = function BookingsPageRoutingModule() {
      _classCallCheck(this, BookingsPageRoutingModule);
    };

    BookingsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], BookingsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/bookings/bookings.module.ts ***!
    \***************************************************/

  /*! exports provided: BookingsPageModule */

  /***/
  function srcAppPagesBookingsBookingsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPageModule", function () {
      return BookingsPageModule;
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


    var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./bookings-routing.module */
    "./src/app/pages/bookings/bookings-routing.module.ts");
    /* harmony import */


    var _bookings_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./bookings.page */
    "./src/app/pages/bookings/bookings.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var BookingsPageModule = function BookingsPageModule() {
      _classCallCheck(this, BookingsPageModule);
    };

    BookingsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _bookings_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_bookings_page__WEBPACK_IMPORTED_MODULE_6__["BookingsPage"]]
    })], BookingsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.page.scss":
  /*!***************************************************!*\
    !*** ./src/app/pages/bookings/bookings.page.scss ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesBookingsBookingsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noData {\n  text-align: center;\n  font-weight: bold;\n}\n\n.sc-ion-label-md-h {\n  margin: 0px;\n}\n\n.orderList {\n  /*    span {\n          float: right\n      }*/\n}\n\n.orderList .midCrd {\n  padding: 16px;\n}\n\n.orderList .midCrd .top-item ion-thumbnail {\n  width: 70px;\n  height: 70px;\n  border: 1px solid #d5d4d4;\n}\n\n.orderList .midCrd .top-item ion-thumbnail img {\n  margin-top: 20%;\n  padding: 5px;\n}\n\n.orderList .midCrd .top-item .btn_class {\n  --background: white;\n  color: var(--ion-color-secondary);\n  border: 1px solid var(--ion-color-secondary);\n  text-transform: inherit;\n  border-radius: 5px;\n  font-size: 12px;\n  margin: 0px;\n}\n\n.orderList .midCrd ion-item {\n  --border-color: transparent;\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n  --padding-start:0px;\n  --padding:10px;\n  --border-style: unset;\n}\n\n.orderList .midCrd ion-label {\n  font-size: 14px;\n}\n\n.orderList .midCrd .star-icon {\n  color: var(--ion-color-primary);\n  font-size: 12px;\n}\n\n.orderList .report-item {\n  --inner-padding-end: 16px;\n  --padding-start:16px;\n  border-top: 1px solid #e3e3e3;\n}\n\n.orderList .report-item ion-label {\n  font-size: 14px;\n  color: var(--ion-color-step-550, #737373);\n}\n\n.orderList ion-card-header {\n  padding-bottom: 0px;\n}\n\n.orderList ion-card-header ion-card-title {\n  font-size: 15px;\n  font-weight: bold;\n  padding-bottom: 14px;\n}\n\n.orderList .date {\n  font-size: 12px;\n  color: #929292;\n  text-align: center;\n  margin: 10px;\n}\n\n.orderList p {\n  color: black;\n  margin-bottom: 8px;\n}\n\n.orderList h2 {\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.orderList span {\n  font-size: 13px;\n  color: #9b9b9b;\n}\n\n.starend {\n  display: -webkit-box;\n  display: flex;\n}\n\n.strtdat input {\n  border: 1px solid #d8d0bc;\n  font-size: 14px;\n  padding: 0 10px;\n  width: 100%;\n  color: black;\n  height: 40px;\n}\n\n.enddat input {\n  border: 1px solid #d8d0bc;\n  font-size: 14px;\n  padding: 0 10px;\n  width: 100%;\n  color: black;\n  height: 40px;\n}\n\n.starend ion-label {\n  background: #fff;\n  padding: 10px;\n  margin: 0px;\n}\n\n.enddat {\n  margin-right: 10px;\n}\n\n.rating-section {\n  padding: 4px;\n  padding-top: 4px;\n  padding-bottom: 4px;\n  font-size: 8pt;\n  font-weight: 700;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  border-bottom: 1px solid #eee;\n  margin-left: 5px;\n}\n\n.reports .active {\n  --padding-start: 0px;\n  margin-top: 1px;\n  min-width: 100%;\n}\n\n.reports .not-active {\n  --padding-start: 0px;\n  margin-top: 1px;\n  min-width: 100%;\n}\n\n.reports .heading {\n  font-size: 12px;\n  margin-left: 20px;\n  font-weight: bold;\n}\n\n.reports .arrow-icon {\n  height: 25px;\n  width: 25px;\n}\n\n.confirmed {\n  color: var(--ion-color-primary) !important;\n}\n\n.to_be_confirmed {\n  color: var(--ion-color-secondary) !important;\n}\n\n.sample_collected {\n  color: var(--ion-color-success) !important;\n}\n\n.partial_report_release {\n  color: var(--ion-color-success) !important;\n}\n\n.refund_initiated {\n  color: var(--ion-color-success) !important;\n}\n\n.refund_cancelled {\n  color: var(--ion-color-danger) !important;\n}\n\n.completed {\n  color: var(--ion-color-success) !important;\n}\n\n.cancelled {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZ3NcXGJvb2tpbmdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBRENBO0VBOERBOztRQUFBO0FDekRBOztBREpJO0VBQ0ksYUFBQTtBQ01SOztBREpZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ01oQjs7QURMZ0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ09wQjs7QURKWTtFQUNJLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ01oQjs7QURIUTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FDS1o7O0FESFE7RUFDSSxlQUFBO0FDS1o7O0FESFE7RUFDSSwrQkFBQTtFQUNBLGVBQUE7QUNLWjs7QURGSTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtBQ0lSOztBREhRO0VBQ0ksZUFBQTtFQUNBLHlDQUFBO0FDS1o7O0FERkk7RUFDSSxtQkFBQTtBQ0lSOztBREhRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUNLWjs7QURGSTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDSVI7O0FEQ0k7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDUjs7QURDSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDQ1I7O0FEQ0k7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQ0NSOztBREdBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDQUo7O0FERUE7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFBYSxZQUFBO0FDRWpCOztBREFBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQWEsWUFBQTtBQ0lqQjs7QURGQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLGtCQUFBO0FDTUo7O0FESkE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0FDT0o7O0FESkk7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT1I7O0FETEk7RUFDSSxvQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FDT1I7O0FETEk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ09SOztBRExJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNPUjs7QURKQTtFQUNJLDBDQUFBO0FDT0o7O0FETEE7RUFDSSw0Q0FBQTtBQ1FKOztBRE5BO0VBQ0ksMENBQUE7QUNTSjs7QURQQTtFQUNJLDBDQUFBO0FDVUo7O0FEUkE7RUFDSSwwQ0FBQTtBQ1dKOztBRFRBO0VBQ0kseUNBQUE7QUNZSjs7QURWQTtFQUNJLDBDQUFBO0FDYUo7O0FEWEE7RUFDSSx1QkFBQTtBQ2NKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9va2luZ3MvYm9va2luZ3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cblxuLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5vcmRlckxpc3Qge1xuICAgIC5taWRDcmR7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIC50b3AtaXRlbXtcbiAgICAgICAgICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA3MHB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ0ZDQ7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuYnRuX2NsYXNze1xuICAgICAgICAgICAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgLS1wYWRkaW5nLWxlZnQ6IDBweDtcbiAgICAgICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgICAgICAgICAgIC0tcGFkZGluZy1zdGFydDowcHg7XG4gICAgICAgICAgICAtLXBhZGRpbmc6MTBweDtcbiAgICAgICAgICAgIC0tYm9yZGVyLXN0eWxlOiB1bnNldDtcbiAgICAgICAgfVxuICAgICAgICBpb24tbGFiZWx7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXItaWNvbiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpIDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVwb3J0LWl0ZW17XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDoxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbiAgICAgICAgaW9uLWxhYmVse1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwjNzM3MzczKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpb24tY2FyZC1oZWFkZXJ7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwcHg7XG4gICAgICAgIGlvbi1jYXJkLXRpdGxle1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTRweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuZGF0ZXtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBjb2xvcjogIzkyOTI5MjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuLyogICAgc3BhbiB7XG4gICAgICAgIGZsb2F0OiByaWdodFxuICAgIH0qL1xuICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxuICAgIHNwYW57XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgY29sb3I6ICM5YjliOWI7XG4gICAgfVxufVxuXG4uc3RhcmVuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5zdHJ0ZGF0IGlucHV0ICB7IFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQwYmM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6ICAwIDEwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6IGJsYWNrO2hlaWdodDogNDBweDtcbn1cbi5lbmRkYXQgaW5wdXQge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOGQwYmM7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBjb2xvcjogYmxhY2s7aGVpZ2h0OiA0MHB4O1xufVxuLnN0YXJlbmQgaW9uLWxhYmVsIHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4uZW5kZGF0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG4ucmF0aW5nLXNlY3Rpb24ge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgICBwYWRkaW5nLXRvcDogNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XG4gICAgZm9udC1zaXplOiA4cHQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBwYWRkaW5nLXRvcDogN3B4O1xuICAgIHBhZGRpbmctYm90dG9tOiA3cHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cbi5yZXBvcnRze1xuICAgIC5hY3RpdmUge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMCV9IFxuXG4gICAgLm5vdC1hY3RpdmUge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7fVxuXG4gICAgLmhlYWRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7ICAgICAgXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgLmFycm93LWljb24ge1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgIH1cbn1cbi5jb25maXJtZWR7XG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbi50b19iZV9jb25maXJtZWR7XG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xufVxuLnNhbXBsZV9jb2xsZWN0ZWR7XG4gICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgICFpbXBvcnRhbnQ7XG59XG4ucGFydGlhbF9yZXBvcnRfcmVsZWFzZXtcbiAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAgIWltcG9ydGFudDtcbn1cbi5yZWZ1bmRfaW5pdGlhdGVke1xuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG4ucmVmdW5kX2NhbmNlbGxlZHtcbiAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG4uY29tcGxldGVke1xuICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG4uY2FuY2VsbGVke1xuICAgIGNvbG9yOiAgYmxhY2sgIWltcG9ydGFudDtcbn0iLCIubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgbWFyZ2luOiAwcHg7XG59XG5cbi5vcmRlckxpc3Qge1xuICAvKiAgICBzcGFuIHtcbiAgICAgICAgICBmbG9hdDogcmlnaHRcbiAgICAgIH0qL1xufVxuLm9yZGVyTGlzdCAubWlkQ3JkIHtcbiAgcGFkZGluZzogMTZweDtcbn1cbi5vcmRlckxpc3QgLm1pZENyZCAudG9wLWl0ZW0gaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiA3MHB4O1xuICBoZWlnaHQ6IDcwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNWQ0ZDQ7XG59XG4ub3JkZXJMaXN0IC5taWRDcmQgLnRvcC1pdGVtIGlvbi10aHVtYm5haWwgaW1nIHtcbiAgbWFyZ2luLXRvcDogMjAlO1xuICBwYWRkaW5nOiA1cHg7XG59XG4ub3JkZXJMaXN0IC5taWRDcmQgLnRvcC1pdGVtIC5idG5fY2xhc3Mge1xuICAtLWJhY2tncm91bmQ6IHdoaXRlO1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICB0ZXh0LXRyYW5zZm9ybTogaW5oZXJpdDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLm9yZGVyTGlzdCAubWlkQ3JkIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctbGVmdDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDowcHg7XG4gIC0tcGFkZGluZzoxMHB4O1xuICAtLWJvcmRlci1zdHlsZTogdW5zZXQ7XG59XG4ub3JkZXJMaXN0IC5taWRDcmQgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuLm9yZGVyTGlzdCAubWlkQ3JkIC5zdGFyLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDEycHg7XG59XG4ub3JkZXJMaXN0IC5yZXBvcnQtaXRlbSB7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tcGFkZGluZy1zdGFydDoxNnB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2UzZTNlMztcbn1cbi5vcmRlckxpc3QgLnJlcG9ydC1pdGVtIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdGVwLTU1MCwgIzczNzM3Myk7XG59XG4ub3JkZXJMaXN0IGlvbi1jYXJkLWhlYWRlciB7XG4gIHBhZGRpbmctYm90dG9tOiAwcHg7XG59XG4ub3JkZXJMaXN0IGlvbi1jYXJkLWhlYWRlciBpb24tY2FyZC10aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmctYm90dG9tOiAxNHB4O1xufVxuLm9yZGVyTGlzdCAuZGF0ZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5MjkyOTI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuLm9yZGVyTGlzdCBwIHtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4ub3JkZXJMaXN0IGgyIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuLm9yZGVyTGlzdCBzcGFuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzliOWI5Yjtcbn1cblxuLnN0YXJlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RydGRhdCBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQwYmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5lbmRkYXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMGJjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3RhcmVuZCBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmVuZGRhdCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLnJhdGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBwYWRkaW5nLXRvcDogNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xuICBmb250LXNpemU6IDhwdDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1ib3R0b206IDdweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWU7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5yZXBvcnRzIC5hY3RpdmUge1xuICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG4ucmVwb3J0cyAubm90LWFjdGl2ZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICBtYXJnaW4tdG9wOiAxcHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbn1cbi5yZXBvcnRzIC5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucmVwb3J0cyAuYXJyb3ctaWNvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5cbi5jb25maXJtZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpICFpbXBvcnRhbnQ7XG59XG5cbi50b19iZV9jb25maXJtZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cblxuLnNhbXBsZV9jb2xsZWN0ZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJ0aWFsX3JlcG9ydF9yZWxlYXNlIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuXG4ucmVmdW5kX2luaXRpYXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn1cblxuLnJlZnVuZF9jYW5jZWxsZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLWRhbmdlcikgIWltcG9ydGFudDtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn1cblxuLmNhbmNlbGxlZCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/bookings/bookings.page.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/bookings/bookings.page.ts ***!
    \*************************************************/

  /*! exports provided: BookingsPage */

  /***/
  function srcAppPagesBookingsBookingsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BookingsPage", function () {
      return BookingsPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);

    var BookingsPage =
    /*#__PURE__*/
    function () {
      function BookingsPage(api, util, router, adb, alertCtrl, callNumber, modalController, route, // private nativeHTTP: HTTP, private file: File,
      menu) {
        var _this = this;

        _classCallCheck(this, BookingsPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.route = route;
        this.menu = menu;
        this.haveItems = false;
        this.myBookings = [];
        this.dummy = Array(50);
        this.start_date = '';
        this.end_date = '';
        this.maxDate = new Date();
        var date = new Date();
        this.today = moment__WEBPACK_IMPORTED_MODULE_8__(date).format("DD-MM-YYYY");
        var uid = sessionStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then(function (data) {
          _this.profile = data;
        }, function (error) {
          console.log(error);
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(BookingsPage, [{
        key: "download",
        value: function download(url) {
          console.log(url);
          window.open(url, "_blank");
        }
      }, {
        key: "getClass",
        value: function getClass(item) {
          if (item == 1) {
            return 'confirmed';
          } else if (item == 0) {
            return 'to_be_confirmed';
          } else if (item == 2) {
            return 'sample_collected';
          } else if (item == 3) {
            return 'partial_report_release';
          } else if (item == 4) {
            return 'refund_initiated';
          } else if (item == 5) {
            return 'refund_cancelled';
          } else if (item == 6) {
            return 'completed';
          } else {
            return 'cancelled';
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {// this.getMyBookings(); 
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this2 = this;

            var uid;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.util.show('Please wait....');
                    uid = sessionStorage.getItem('uid');
                    console.log(uid);
                    _context2.next = 5;
                    return this.api.getBookings(uid).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(data);
                                this.util.hide();

                                if (data && data.length) {
                                  this.myBookings = data;
                                }

                              case 3:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }, function (error) {
                      _this2.util.hide();

                      console.log(error);
                    }).catch(function (error) {
                      _this2.util.hide();

                      console.log(error);
                    });

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "downloadInvoice",
        value: function downloadInvoice(downloadLink) {
          var str = downloadLink.invoice_url;
          var download_name = 'invoice' + downloadLink.booking_id + '.pdf'; // console.log(download_name);

          this.toPdfURL(str, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = download_name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }
      }, {
        key: "toPdfURL",
        value: function toPdfURL(url, callback) {
          var xhr = new XMLHttpRequest();

          xhr.onload = function () {
            var reader = new FileReader();

            reader.onloadend = function () {
              callback(reader.result);
            };

            reader.readAsDataURL(xhr.response);
          };

          xhr.open('GET', url);
          xhr.responseType = 'blob';
          xhr.send();
        }
      }, {
        key: "submit",
        value: function submit() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this3 = this;

            var uid;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    uid = sessionStorage.getItem('uid');

                    if (this.start_date == '') {
                      this.util.showToast('Please select start date', 'danger', 'bottom');
                    }

                    if (this.end_date == '') {
                      this.util.showToast('Please select end date', 'danger', 'bottom');
                    }

                    if (this.start_date > this.end_date) {
                      this.util.showToast('Start date can not be greater than end date', 'danger', 'bottom');
                    }

                    this.util.show('Please wait....');
                    this.myBookings = [];
                    this.api.getMyBookings(uid, this.start_date, this.end_date).then(function (data) {
                      console.log(data);

                      if (data && data.length) {
                        _this3.haveItems = true;

                        _this3.util.hide();

                        _this3.myBookings = data;
                      } else {
                        _this3.util.hide();
                      }

                      _this3.dummy = [];
                    }, function (error) {
                      _this3.util.hide();

                      console.log(error);
                    }).catch(function (error) {
                      _this3.util.hide();

                      console.log(error);
                    });

                  case 7:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "goToOrderDetail",
        value: function goToOrderDetail(data) {
          localStorage.setItem('order', JSON.stringify(data.order));
          localStorage.setItem('order-id', data.id);
          this.router.navigate(['order-detail']);
        }
      }, {
        key: "downloadPdf",
        value: function downloadPdf(downloadLink) {
          var downloadUrl = downloadLink;
          this.toDataURL(downloadUrl, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'report.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }
      }, {
        key: "toDataURL",
        value: function toDataURL(url, callback) {
          var xhr = new XMLHttpRequest();

          xhr.onload = function () {
            var reader = new FileReader();

            reader.onloadend = function () {
              callback(reader.result);
            };

            reader.readAsDataURL(xhr.response);
          };

          xhr.open('GET', url);
          xhr.responseType = 'blob';
          xhr.send();
        }
      }, {
        key: "downloadImage",
        value: function downloadImage(downloadLink) {
          var str = downloadLink;
          var download_name = 'report.jpg'; // console.log(download_name);

          this.DataURL(downloadLink, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = download_name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
          });
        }
      }, {
        key: "DataURL",
        value: function DataURL(url, callback) {
          var xhr = new XMLHttpRequest();

          xhr.onload = function () {
            var reader = new FileReader();

            reader.onloadend = function () {
              callback(reader.result);
            };

            reader.readAsDataURL(xhr.response);
          };

          xhr.open('GET', url);
          xhr.responseType = 'blob';
          xhr.send();
        }
      }, {
        key: "feedback",
        value: function feedback(id) {
          console.log(id);
          localStorage.setItem('bookingid', id);
          this.router.navigate(['rating']);
        }
      }, {
        key: "cancel",
        value: function cancel(id) {
          localStorage.setItem('bookingid', id);
          this.router.navigate(['/cancel']);
        }
      }, {
        key: "view",
        value: function view(id) {
          console.log(id);
          localStorage.setItem('bookingid', id);
          this.router.navigate(['/booking-detail']);
        }
      }]);

      return BookingsPage;
    }();

    BookingsPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]
      }];
    };

    BookingsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bookings',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bookings.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/bookings/bookings.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bookings.page.scss */
      "./src/app/pages/bookings/bookings.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])], BookingsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-bookings-bookings-module-es5.js.map