(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-booking-detail-booking-detail-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-detail/booking-detail.page.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-detail/booking-detail.page.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n  <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Booking Detail</h3>\n          <div class=\"topCnt\">\n            <div class=\"midCnt\">\n              <div class=\"header\">\n                <div>Your Booking Details</div>\n\t\t\t\t<div style=\"text-align: right;\">\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==0\">To Be Confirmed</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==1\">Confirmed</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==2\">Sample Collected/Test Done</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==3\">Partial Report Released</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==4\">Refund Initiated</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==5\">Refund Cancelled</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==6\">Completed</span>\n                  <span [className]=\"getClass(detail?.status)\" *ngIf=\"detail?.status==7\">Cancelled</span>\n              </div></div>\n              <div class=\"btmCnt\">\n\t\t\t  \n\t\t\t   <div class=\"detail\">\n                  <p>Patient Detail</p>\n                  <div *ngFor=\"let data of detail?.member_id;let i = index;\" class=\"\"   [ngClass]=\"{'active': (showContent(i)==true), 'not-active': (showContent(i)==false)}\" >\n                    <ion-item  [ngClass]=\"{'active': (showContent(i)==true), 'not-active': (showContent(i)==false)}\"  (click)=\"showMilestone(i)\">\n\t\t\t\t\t<div   slot=\"end\" class=\"dolod\">\n\t\t\t\t\t<div>Download Reports</div>\n                      <ion-icon style=\"padding-top: 3px;\" name=\"add-outline\" *ngIf = \"(showContent(i)==false)\" slot=\"end\"></ion-icon>\n                      <ion-icon style=\"padding-top: 3px;\" name=\"remove-outline\" *ngIf = \"(showContent(i)==true)\" slot=\"end\"></ion-icon>\n\t\t\t\t\t  </div>\n                      <h3 class=\"heading\">{{data.name}} <br>\n                      {{data.age}}, {{data.gender}}</h3>\n                    </ion-item>\n                    <ion-list *ngIf = \"showContent(i)\" style=\"padding: 0px;\">\n                      <div class=\"report-item\" *ngFor=\"let r of data.reports;\">\n                        <!-- <ion-thumbnail slot=\"end\" *ngIf=\"r.file_type == 'image/jpeg'\">\n                          <img src = \"assets/report_img.webp\">\n                        </ion-thumbnail> -->\n                        \n                        <!-- <ion-label *ngIf=\"r.file_type == 'image/jpeg'\">{{r.report_title}} <span (click)=\"downloadImage(r)\">Download</span></ion-label>\n                        <ion-label *ngIf=\"r.file_type !== 'image/jpeg' && r.file_type !== 'image/png'\">{{r.report_title}} <span (click)=\"downloadPdf(r)\">Download</span></ion-label>\n                        <ion-label *ngIf=\"r.file_type == 'image/png'\">{{r.report_title}} <span (click)=\"downloadImage(r)\">Download</span></ion-label> -->\n                        <div class=\"dwdtri\" *ngIf=\"r.file_type == 'image/jpeg'\"><div>{{r.test_name}} </div>\n                          <div><ion-thumbnail slot=\"end\" (click)=\"download(r.report_file)\" style=\"cursor:pointer;\">\n                           <img src = \"assets/report_img.webp\">\n                        </ion-thumbnail></div>\n                        </div>\n                        <div class=\"dwdtri\" *ngIf=\"r.file_type !== 'image/jpeg' && r.file_type !== 'image/png'\"><div>{{r.test_name}} </div> \n\n                        <div><ion-thumbnail slot=\"end\" (click)=\"download(r.report_file)\" style=\"cursor:pointer;\">\n                          <img src = \"assets/pdf.jpg\">\n                        </ion-thumbnail></div>\n\n                         <!--  <span (click)=\"download(r.report_file)\">Download</span> -->\n                        </div>\n                        <div class=\"dwdtri\" *ngIf=\"r.file_type == 'image/png'\"><div>{{r.test_name}} </div>\n                         <div> <ion-thumbnail slot=\"end\" (click)=\"download(r.report_file)\" style=\"cursor:pointer;\">\n                          <img src = \"assets/report_img.webp\">\n                        </ion-thumbnail></div>\n                        </div>\n                      </div>\n                    </ion-list>\n                  </div>\n                </div> \n\t\t\t  \n               <ion-row >\n                  <ion-col>\n                    <p>Booking Id</p>\n                    <span>{{detail?.booking_id}}</span>\n                  </ion-col>              \n                  <ion-col>\n                    <p>Amount Paid</p>\n                    <span>{{detail?.grand_total}}</span>\n                  </ion-col>                 \n                   <ion-col>\n                    <p>Payment Mode</p>\n                    <span>{{detail?.payment_type}}</span>\n                  </ion-col>\n                </ion-row>\n              <ion-row *ngIf=\"detail?.coupon_code !==''\">\n                  <ion-col>\n                    <p>Coupon Code Applied</p>\n                    <span>Yes</span>\n                  </ion-col>              \n                  <ion-col>\n                    <p>Coupon Code</p>\n                    <span>{{detail?.coupon_code}}</span>\n                  </ion-col>                 \n                   <ion-col>\n                    <p>Discount Amount</p>\n                    <span>{{detail?.discount_amount}}</span>\n                  </ion-col>\n                </ion-row>\n                <ion-row style=\"padding-bottom: 0px !important;\">\n                  <ion-col>\n                    <p>Booking Date</p>\n                    <span>{{detail?.booking_date | date}}</span>\n                  </ion-col>              \n                  <ion-col>\n                    <p>Booking Time</p>\n                    <span>{{detail?.booking_time}}</span>\n                  </ion-col>                 \n                   <ion-col>\n                    <p>Services Delivery</p>\n                    <span>{{detail?.collection_mode}}</span>\n                  </ion-col>\n                </ion-row>\n                <div class=\"detail\">\n                  <p>Lab Name</p>\n                  <span>{{lab_detail?.name}}</span>\n                </div>\n                <div class=\"detail\">\n                  <p>Test Name</p>\n                  <span *ngFor=\"let i of detail?.test_data\">{{i.itid.test_name}}</span>\n                </div>            \n                <div class=\"detail\">\n                  <p>Booking Address</p>\n                  <span>{{address_text}}</span>\n                </div>\n               \n                <div *ngIf=\"detail?.status == 3 || detail?.status == 2\">\n                  <div class=\"detail\">\n                    <p>Cancellation Reason</p>\n                    <span>{{cancellation_reason}}</span>\n                  </div>\n                  <div class=\"detail\">\n                    <p>Comment</p>\n                    <span>{{cancellation_remark}}</span>\n                  </div>\n                </div>              \n                <div class=\"detail\">\n                  <ion-button (click)=\"cancel(detail?.booking_id)\" *ngIf=\"detail?.status==0\">\n                    Cancel Boking\n                  </ion-button>\n                  <ion-button (click)=\"feedback(detail?.booking_id)\" *ngIf=\"detail?.status==6 && detail?.isRate == 0 \">\n                    Share your feedbaack\n                  </ion-button>\n                </div>\n             <!--    <div class=\"detail\" *ngIf=\"detail?.status==6\">\n                  <ion-button (click)=\"downloadInvoice(detail?.booking_id)\">\n                    Download Invoice\n                  </ion-button>\n                </div> -->\n              </div>\n            </div>\n          </div>\n        </div>  \n      </div>\n  </div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/booking-detail/booking-detail-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/booking-detail/booking-detail-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: BookingDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailPageRoutingModule", function() { return BookingDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./booking-detail.page */ "./src/app/pages/booking-detail/booking-detail.page.ts");




const routes = [
    {
        path: '',
        component: _booking_detail_page__WEBPACK_IMPORTED_MODULE_3__["BookingDetailPage"]
    }
];
let BookingDetailPageRoutingModule = class BookingDetailPageRoutingModule {
};
BookingDetailPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], BookingDetailPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/booking-detail/booking-detail.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/booking-detail/booking-detail.module.ts ***!
  \***************************************************************/
/*! exports provided: BookingDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailPageModule", function() { return BookingDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./booking-detail-routing.module */ "./src/app/pages/booking-detail/booking-detail-routing.module.ts");
/* harmony import */ var _booking_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./booking-detail.page */ "./src/app/pages/booking-detail/booking-detail.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let BookingDetailPageModule = class BookingDetailPageModule {
};
BookingDetailPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _booking_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["BookingDetailPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_booking_detail_page__WEBPACK_IMPORTED_MODULE_6__["BookingDetailPage"]]
    })
], BookingDetailPageModule);



/***/ }),

/***/ "./src/app/pages/booking-detail/booking-detail.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/pages/booking-detail/booking-detail.page.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #fff;\n}\nion-content .topCnt .info {\n  padding: 16px;\n}\nion-content .topCnt .info img {\n  width: 35px;\n}\nion-content .topCnt h3 {\n  font-weight: normal;\n  margin: 16px 0px;\n  font-size: 12px;\n}\nion-content .topCnt .header {\n  font-weight: bold;\n  background: #e7e7e7;\n}\nion-content .topCnt p {\n  font-weight: bold;\n  margin-bottom: 0px;\n  /*font-weight: bold;*/\n}\nion-content .topCnt .midCnt {\n  border: 1px solid #d8d0bc;\n}\nion-content .topCnt ion-col {\n  padding: 0px;\n}\nion-content .topCnt .detail {\n  padding: 0px 0px 20px;\n}\nion-content .topCnt ion-row {\n  padding: 0px 0px 20px;\n}\nion-content .active {\n  --border-color: transparent;\n}\nion-content .not-active {\n  margin-top: 5px;\n  min-width: 100%;\n  --border-color: transparent;\n  --background: #e3e3e3;\n}\nion-content .reports .heading {\n  font-size: 13px;\n  margin: 5px 0;\n  font-weight: normal;\n}\nion-content .reports .arrow-icon {\n  height: 25px;\n  width: 25px;\n}\nion-content .reports span {\n  float: right;\n  color: red;\n  font-weight: bold;\n}\nion-content .confirmed {\n  color: var(--ion-color-primary) !important;\n}\nion-content .to_be_confirmed {\n  color: var(--ion-color-secondary) !important;\n}\nion-content .sample_collected {\n  color: var(--ion-color-success) !important;\n}\nion-content .partial_report_release {\n  color: var(--ion-color-success) !important;\n}\nion-content .refund_initiated {\n  color: var(--ion-color-success) !important;\n}\nion-content .refund_cancelled {\n  color: var(--ion-color-danger) !important;\n}\nion-content .completed {\n  color: var(--ion-color-success) !important;\n}\nion-content .cancelled {\n  color: black !important;\n}\n.dolod {\n  display: -webkit-box;\n  display: flex;\n  font-size: 13px;\n  background: #007c9d;\n  color: #fff;\n  padding: 5px;\n  cursor: pointer;\n}\n.header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n.dwdtri {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9va2luZy1kZXRhaWwvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcYm9va2luZy1kZXRhaWxcXGJvb2tpbmctZGV0YWlsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9va2luZy1kZXRhaWwvYm9va2luZy1kZXRhaWwucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7QUNDSjtBREVRO0VBQ0ksYUFBQTtBQ0FaO0FEQ1k7RUFDSSxXQUFBO0FDQ2hCO0FERVE7RUFDSSxtQkFBQTtFQUNaLGdCQUFBO0VBQ0EsZUFBQTtBQ0FBO0FERVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0FDQVo7QURFUTtFQUFJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQ0NaO0FESVE7RUFDSSx5QkFBQTtBQ0ZaO0FEVVE7RUFDSSxZQUFBO0FDUlo7QURVUTtFQUNJLHFCQUFBO0FDUlo7QURVUTtFQUNJLHFCQUFBO0FDUlo7QURZUTtFQUVJLDJCQUFBO0FDWFo7QURhUTtFQUNJLGVBQUE7RUFDWixlQUFBO0VBQ0EsMkJBQUE7RUFDQSxxQkFBQTtBQ1hBO0FEYVE7RUFDSSxlQUFBO0VBQ1osYUFBQTtFQUNBLG1CQUFBO0FDWEE7QURhUTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FDWFo7QURhUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNYWjtBRGVJO0VBQ0ksMENBQUE7QUNiUjtBRGVJO0VBQ0ksNENBQUE7QUNiUjtBRGVJO0VBQ0ksMENBQUE7QUNiUjtBRGVJO0VBQ0ksMENBQUE7QUNiUjtBRGVJO0VBQ0ksMENBQUE7QUNiUjtBRGVJO0VBQ0kseUNBQUE7QUNiUjtBRGVJO0VBQ0ksMENBQUE7QUNiUjtBRGVJO0VBQ0ksdUJBQUE7QUNiUjtBRGlCQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0QsZUFBQTtBQ2REO0FEZ0JDO0VBQ0Msb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSw4QkFBQTtBQ2JGO0FEY0M7RUFDQyxvQkFBQTtFQUFBLGFBQUE7RUFDQSx5QkFBQTtVQUFBLDhCQUFBO0FDWEYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib29raW5nLWRldGFpbC9ib29raW5nLWRldGFpbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAgIC50b3BDbnR7XG4gICAgICAgXG4gICAgICAgIC5pbmZve1xuICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBoM3tcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG5tYXJnaW46IDE2cHggMHB4O1xuZm9udC1zaXplOiAxMnB4O1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlN2U3ZTc7XG4gICAgICAgIH1cbiAgICAgICAgcHsgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgICAgLypmb250LXdlaWdodDogYm9sZDsqL1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAubWlkQ250e1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDBiYztcbiAgICAgICAgICAgIC5oZWFkZXJ7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpb24tY29se1xuICAgICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5kZXRhaWwge1xuICAgICAgICAgICAgcGFkZGluZzowcHggMHB4IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaW9uLXJvd3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweCAwcHggMjBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAgICAgLmFjdGl2ZSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQ7fSBcblxuICAgICAgICAubm90LWFjdGl2ZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG5taW4td2lkdGg6IDEwMCU7XG4tLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4tLWJhY2tncm91bmQ6ICNlM2UzZTM7fVxuLnJlcG9ydHN7XG4gICAgICAgIC5oZWFkaW5nIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDsgXG5tYXJnaW46IDVweCAwO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcdFx0XHRcbiAgICAgICAgfVxuICAgICAgICAuYXJyb3ctaWNvbiB7XG4gICAgICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICAgICAgICB3aWR0aDogMjVweDtcbiAgICAgICAgfVxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbmZpcm1lZHtcbiAgICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnRvX2JlX2NvbmZpcm1lZHtcbiAgICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KSAhaW1wb3J0YW50O1xuICAgIH1cbiAgICAuc2FtcGxlX2NvbGxlY3RlZHtcbiAgICAgICAgY29sb3I6ICB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5wYXJ0aWFsX3JlcG9ydF9yZWxlYXNle1xuICAgICAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLnJlZnVuZF9pbml0aWF0ZWR7XG4gICAgICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5yZWZ1bmRfY2FuY2VsbGVke1xuICAgICAgICBjb2xvcjogIHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jb21wbGV0ZWR7XG4gICAgICAgIGNvbG9yOiAgdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG4gICAgfVxuICAgIC5jYW5jZWxsZWR7XG4gICAgICAgIGNvbG9yOiAgYmxhY2sgIWltcG9ydGFudDtcbiAgICB9XG59XG5cbi5kb2xvZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDVweDtcbiBjdXJzb3I6IHBvaW50ZXI7fVxuIFxuIC5oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47fSBcbiAuZHdkdHJpIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO30iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgLmluZm8ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnRvcENudCAuaW5mbyBpbWcge1xuICB3aWR0aDogMzVweDtcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgaDMge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBtYXJnaW46IDE2cHggMHB4O1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAudG9wQ250IC5oZWFkZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZDogI2U3ZTdlNztcbn1cbmlvbi1jb250ZW50IC50b3BDbnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gIC8qZm9udC13ZWlnaHQ6IGJvbGQ7Ki9cbn1cbmlvbi1jb250ZW50IC50b3BDbnQgLm1pZENudCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQwYmM7XG59XG5pb24tY29udGVudCAudG9wQ250IGlvbi1jb2wge1xuICBwYWRkaW5nOiAwcHg7XG59XG5pb24tY29udGVudCAudG9wQ250IC5kZXRhaWwge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5pb24tY29udGVudCAudG9wQ250IGlvbi1yb3cge1xuICBwYWRkaW5nOiAwcHggMHB4IDIwcHg7XG59XG5pb24tY29udGVudCAuYWN0aXZlIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLm5vdC1hY3RpdmUge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1pbi13aWR0aDogMTAwJTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLWJhY2tncm91bmQ6ICNlM2UzZTM7XG59XG5pb24tY29udGVudCAucmVwb3J0cyAuaGVhZGluZyB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA1cHggMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5yZXBvcnRzIC5hcnJvdy1pY29uIHtcbiAgaGVpZ2h0OiAyNXB4O1xuICB3aWR0aDogMjVweDtcbn1cbmlvbi1jb250ZW50IC5yZXBvcnRzIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmNvbmZpcm1lZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC50b19iZV9jb25maXJtZWQge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5zYW1wbGVfY29sbGVjdGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnBhcnRpYWxfcmVwb3J0X3JlbGVhc2Uge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3MpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAucmVmdW5kX2luaXRpYXRlZCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2VzcykgIWltcG9ydGFudDtcbn1cbmlvbi1jb250ZW50IC5yZWZ1bmRfY2FuY2VsbGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1kYW5nZXIpICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAuY29tcGxldGVkIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zdWNjZXNzKSAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLmNhbmNlbGxlZCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG4uZG9sb2Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJhY2tncm91bmQ6ICMwMDdjOWQ7XG4gIGNvbG9yOiAjZmZmO1xuICBwYWRkaW5nOiA1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmR3ZHRyaSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/booking-detail/booking-detail.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/booking-detail/booking-detail.page.ts ***!
  \*************************************************************/
/*! exports provided: BookingDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookingDetailPage", function() { return BookingDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2/firestore */ "./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");








let BookingDetailPage = class BookingDetailPage {
    constructor(api, util, router, adb, alertCtrl, callNumber, modalController, route, menu) {
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
        this.tab = -1;
    }
    ionViewWillEnter() {
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.getBooking(this.booking_id);
    }
    getBooking(id) {
        this.api.getBookingById(id).then(data => {
            this.detail = data[0];
            console.log(this.detail);
            for (let x of this.detail.member_id) {
                if (x.report_status != 'Pending') {
                    for (let y of x.reports) {
                        for (let test of this.detail.test_data) {
                            console.log(test.itid.id);
                            console.log(y.report_title);
                            if (y.report_title == test.itid.id) {
                                console.log(test.itid.test_name);
                                y.test_name = test.itid.test_name;
                            }
                        }
                    }
                }
            }
            console.log('test_name', this.detail);
            this.getSecondaryLab(this.detail.lab_id);
            this.getAddress(this.detail.address);
            if (this.detail.status == 3 || this.detail.status == 2) {
                this.getReason(this.detail.reason);
            }
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
    getAddress(id) {
        const uid = sessionStorage.getItem('uid');
        this.api.getAddressById(uid, id).then(data => {
            this.address = data[0];
            console.log(this.address);
            this.address_text = this.address.street + ' ' + this.address.locality + ' ' + this.address.landmark + ' ' + this.address.pincode + ' ' + this.address.city + ' ' + this.address.state;
        }).catch(error => {
            console.log(error);
        });
    }
    getReason(id) {
        this.api.getReasonById(id).then(data => {
            this.reason = data[0];
            console.log(this.reason);
            this.cancellation_reason = this.reason.reason;
            this.cancellation_remark = this.detail.remark;
        }).catch(error => {
            console.log(error);
        });
    }
    getClass(item) {
        if (item == 1) {
            return 'confirmed';
        }
        else if (item == 0) {
            return 'to_be_confirmed';
        }
        else if (item == 2) {
            return 'sample_collected';
        }
        else if (item == 3) {
            return 'partial_report_release';
        }
        else if (item == 4) {
            return 'refund_initiated';
        }
        else if (item == 5) {
            return 'refund_cancelled';
        }
        else if (item == 6) {
            return 'completed';
        }
        else {
            return 'cancelled';
        }
    }
    ngOnInit() {
        // this.getMyBookings(); 
    }
    showContent(item) {
        return this.tab === item;
    }
    showMilestone(item) {
        if (item != this.tab) {
            this.tab = item;
        }
        else {
            this.tab = -1;
        }
    }
    downloadPdf(data) {
        let downloadUrl = data.report_file;
        this.toDataURL(downloadUrl, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = data.report_title + '.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    toDataURL(url, callback) {
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
    download(url) {
        console.log(url);
        window.open(url, "_blank");
    }
    downloadImage(data) {
        let str = data.report_file;
        const download_name = data.report_title + '.jpg';
        this.DataURL(str, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = download_name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    DataURL(url, callback) {
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
    feedback(id) {
        localStorage.setItem('bookingid', id);
        this.router.navigate(['rating']);
    }
    cancel(id) {
        localStorage.setItem('bookingid', id);
        this.router.navigate(['/cancel']);
    }
};
BookingDetailPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
BookingDetailPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-booking-detail',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./booking-detail.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/booking-detail/booking-detail.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./booking-detail.page.scss */ "./src/app/pages/booking-detail/booking-detail.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
        angularfire2_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["AlertController"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_7__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["ModalController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
], BookingDetailPage);



/***/ })

}]);
//# sourceMappingURL=pages-booking-detail-booking-detail-module-es2015.js.map