(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-summary-summary-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xl-12\">\n          <div class=\"topCnt\">\n            <h3>Booking Received</h3>\n            <div class=\"info\">\n              <img src=\"assets/confirmation.png\">\n              <span>We have received your request for the below mentioned test(s). We are checking time slot availability with our collection partner and will confirm your booking shortly.</span>\n            </div>\n            <div class=\"midCnt\">\n              <div class=\"header\">\n                Your Booking Details\n              </div>\n              <div class=\"btmCnt\">\n               <ion-row >\n                  <ion-col>\n                    <p>Booking Id</p>\n                    <span>{{detail?.booking_id}}</span>\n                  </ion-col>              \n                  <ion-col>\n                    <p>Amount Paid</p>\n                    <span>{{detail?.grand_total}}</span>\n                  </ion-col>                 \n                   <ion-col>\n                    <p>Payment Mode</p>\n                    <span>{{detail?.payment_type}}</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"padding-bottom: 0px !important;\">\n                  <ion-col>\n                    <p>Booking Date</p>\n                    <span>{{detail?.booking_date}}</span>\n                  </ion-col>              \n                  <ion-col>\n                    <p>Booking Time</p>\n                    <span>{{detail?.booking_time}}</span>\n                  </ion-col>                 \n                   <ion-col>\n                    <p>Services Delivery</p>\n                    <span>{{detail?.collection_mode}}</span>\n                  </ion-col>\n                </ion-row>\n                <div class=\"detail\">\n                  <p>Lab Name</p>\n                  <span>{{lab_detail?.name}}</span>\n                </div>\n                <div class=\"detail\">\n                  <p>Test Name</p>\n                  <span *ngFor=\"let i of detail?.test_data\">{{i.itid.test_name}}</span>\n                </div>            \n                <div class=\"detail\">\n                  <p>Booking Address</p>\n                  <span>{{address}}</span>\n                </div>\n                <ion-button (click)=\"bookings()\">\n                  Go To My Bookings\n                </ion-button>\n              </div>\n            </div>\n          </div>\n        </div>  \n      </div>\n  </div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/summary/summary-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/summary/summary-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: SummaryPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageRoutingModule", function() { return SummaryPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");




const routes = [
    {
        path: '',
        component: _summary_page__WEBPACK_IMPORTED_MODULE_3__["SummaryPage"]
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SummaryPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.module.ts ***!
  \*************************************************/
/*! exports provided: SummaryPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPageModule", function() { return SummaryPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./summary-routing.module */ "./src/app/pages/summary/summary-routing.module.ts");
/* harmony import */ var _summary_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./summary.page */ "./src/app/pages/summary/summary.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let SummaryPageModule = class SummaryPageModule {
};
SummaryPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _summary_routing_module__WEBPACK_IMPORTED_MODULE_5__["SummaryPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_summary_page__WEBPACK_IMPORTED_MODULE_6__["SummaryPage"]]
    })
], SummaryPageModule);



/***/ }),

/***/ "./src/app/pages/summary/summary.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/summary/summary.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\nion-content .topCnt {\n  padding: 0% 15% 10%;\n}\nion-content .topCnt .info {\n  padding: 16px;\n}\nion-content .topCnt .info img {\n  width: 35px;\n}\nion-content .topCnt h3 {\n  font-weight: bold;\n  margin: 16px 0px;\n}\nion-content .topCnt .header {\n  padding: 16px;\n  font-weight: bold;\n  background: #e7e7e7;\n}\nion-content .topCnt p {\n  margin-bottom: 0px;\n  /*font-weight: bold;*/\n}\nion-content .topCnt span {\n  color: adadad;\n}\nion-content .topCnt .midCnt {\n  border: 1px solid #d8d0bc;\n}\nion-content .topCnt .btmCnt {\n  padding: 26px;\n}\nion-content .topCnt ion-col {\n  padding: 0px;\n}\nion-content .topCnt .detail {\n  padding: 20px 0px 0px;\n}\nion-content .topCnt ion-row {\n  padding: 0px 0px 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VtbWFyeS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxzdW1tYXJ5XFxzdW1tYXJ5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VtbWFyeS9zdW1tYXJ5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7QURBSTtFQUNJLG1CQUFBO0FDRVI7QUREUTtFQUNJLGFBQUE7QUNHWjtBREZZO0VBQ0ksV0FBQTtBQ0loQjtBRERRO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQ0daO0FERFE7RUFDSSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0daO0FERFE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0FDR1o7QUREUTtFQUNJLGFBQUE7QUNHWjtBRERRO0VBQ0kseUJBQUE7QUNHWjtBRERRO0VBQ0ksYUFBQTtBQ0daO0FERFE7RUFDSSxZQUFBO0FDR1o7QUREUTtFQUNJLHFCQUFBO0FDR1o7QUREUTtFQUNJLHFCQUFBO0FDR1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdW1tYXJ5L3N1bW1hcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLnRvcENudHtcclxuICAgICAgICBwYWRkaW5nOiAwJSAxNSUgMTAlO1xyXG4gICAgICAgIC5pbmZve1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAgICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoM3tcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwe1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgICAgIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgY29sb3I6IGFkYWRhZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm1pZENudHtcclxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDBiYztcclxuICAgICAgICB9XHJcbiAgICAgICAgLmJ0bUNudHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjZweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWNvbHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZGV0YWlsIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweCAwcHggMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tcm93e1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tY29udGVudCAudG9wQ250IHtcbiAgcGFkZGluZzogMCUgMTUlIDEwJTtcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgLmluZm8ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnRvcENudCAuaW5mbyBpbWcge1xuICB3aWR0aDogMzVweDtcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgLmhlYWRlciB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBiYWNrZ3JvdW5kOiAjZTdlN2U3O1xufVxuaW9uLWNvbnRlbnQgLnRvcENudCBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAvKmZvbnQtd2VpZ2h0OiBib2xkOyovXG59XG5pb24tY29udGVudCAudG9wQ250IHNwYW4ge1xuICBjb2xvcjogYWRhZGFkO1xufVxuaW9uLWNvbnRlbnQgLnRvcENudCAubWlkQ250IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDBiYztcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgLmJ0bUNudCB7XG4gIHBhZGRpbmc6IDI2cHg7XG59XG5pb24tY29udGVudCAudG9wQ250IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCAudG9wQ250IC5kZXRhaWwge1xuICBwYWRkaW5nOiAyMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAudG9wQ250IGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/summary/summary.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/summary/summary.page.ts ***!
  \***********************************************/
/*! exports provided: SummaryPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SummaryPage", function() { return SummaryPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let SummaryPage = class SummaryPage {
    constructor(router, route, navCtrl, api, util) {
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.address = localStorage.getItem('boookingaddress');
        this.getBooking(this.booking_id);
    }
    ngOnInit() {
        // this.route.queryParams.subscribe(data => {
        // 	console.log(data)
        //    if (data && data.from) {
        //      this.data = data;
        //      this.from = data.from;
        //    }
        //  });
    }
    getBooking(id) {
        this.api.getBookingById(id).then(data => {
            this.detail = data[0];
            this.getSecondaryLab(this.detail.lab_id);
        }).catch(error => {
            console.log(error);
        });
    }
    getSecondaryLab(id) {
        this.api.getSecondaryLabById(id).then(data => {
            this.lab_detail = data[0];
        }).catch(error => {
            console.log(error);
        });
    }
    bookings() {
        this.router.navigate(['/bookings']);
    }
};
SummaryPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] }
];
SummaryPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-summary',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./summary.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/summary/summary.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./summary.page.scss */ "./src/app/pages/summary/summary.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]])
], SummaryPage);



/***/ })

}]);
//# sourceMappingURL=pages-summary-summary-module-es2015.js.map