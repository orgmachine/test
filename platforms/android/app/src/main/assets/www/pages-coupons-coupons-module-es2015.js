(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-coupons-coupons-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content class=\"background-class\">\n<div class=\"container\">\n  <div *ngIf=\"list.length == 0\" class=\"noData\">\n    <img src=\"assets/no_data_found.png\">\n    <p>Sorry! No coupons available</p>\n  </div>\n  <div *ngIf=\"list.length !==0\">\n    <ion-row *ngFor=\"let item of list\" class=\"coupons\" (click)=\"claim(item)\">\n      <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">\n      <span class=\"code\">{{'CODE' | translate }} : {{item.code}} <span class=\"claim\">CLAIM</span></span><br>\n      <span class=\"desc\">{{item.desc}}</span>\n        <br>\n        <span class=\"expire\">Expires on: {{expire(item.expire)}}</span>\n       </p>\n      </ion-col>\n    </ion-row>\n  </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/coupons/coupons-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/coupons/coupons-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CouponsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageRoutingModule", function() { return CouponsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./coupons.page */ "./src/app/pages/coupons/coupons.page.ts");




const routes = [
    {
        path: '',
        component: _coupons_page__WEBPACK_IMPORTED_MODULE_3__["CouponsPage"]
    }
];
let CouponsPageRoutingModule = class CouponsPageRoutingModule {
};
CouponsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CouponsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/coupons/coupons.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.module.ts ***!
  \*************************************************/
/*! exports provided: CouponsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPageModule", function() { return CouponsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./coupons-routing.module */ "./src/app/pages/coupons/coupons-routing.module.ts");
/* harmony import */ var _coupons_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./coupons.page */ "./src/app/pages/coupons/coupons.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let CouponsPageModule = class CouponsPageModule {
};
CouponsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _coupons_routing_module__WEBPACK_IMPORTED_MODULE_5__["CouponsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_coupons_page__WEBPACK_IMPORTED_MODULE_6__["CouponsPage"]]
    })
], CouponsPageModule);



/***/ }),

/***/ "./src/app/pages/coupons/coupons.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".noData {\n  text-align: center;\n  margin-top: 2%;\n  font-weight: bold;\n}\n\n.background-class {\n  --ion-background-color: #f3f3f3;\n  padding: 16px 0px;\n}\n\n/*.noData{\n    border-radius: 10px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 100%;\n    height: 250px;\n}*/\n\n.coupons {\n  /*border-bottom: 1px solid lightgray;*/\n  background: #fff;\n  margin-top: 10px;\n  padding: 10px 8px;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: bold;\n  line-height: 2rem;\n  border: 1px dotted;\n  padding: 6px;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\n.coupons .info .title .expire {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .claim {\n  float: right;\n  color: #fff;\n  font-size: 12px;\n  padding: 0px 5px;\n  border-radius: 5px;\n  height: 32px;\n  background: var(--ion-color-primary);\n}\n\n.coupons .btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY291cG9ucy9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxjb3Vwb25zXFxjb3Vwb25zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FEQ0E7RUFDSSwrQkFBQTtFQUNBLGlCQUFBO0FDRUo7O0FEQUE7Ozs7Ozs7RUFBQTs7QUFRQTtFQUNJLHNDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FDR0o7O0FEQVE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUNFWjs7QUREWTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7QUNHaEI7O0FERFk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNHaEI7O0FERFk7RUFDSSxpQkFBQTtFQUNBLFdBQUE7QUNHaEI7O0FERFk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0FDR2hCOztBREVJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNBUjs7QURJQTtFQUNJLGdDQUFBO0VBQ0EsY0FBQTtBQ0RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY291cG9ucy9jb3Vwb25zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub0RhdGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6MiU7XG4gICAgZm9udC13ZWlnaHQ6Ym9sZDtcbn1cbi5iYWNrZ3JvdW5kLWNsYXNze1xuICAgIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gICAgcGFkZGluZzogMTZweCAwcHg7XG59XG4vKi5ub0RhdGF7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0qL1xuLmNvdXBvbnN7XG4gICAgLypib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5OyovXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggOHB4O1xuXG4gICAgLmluZm97XG4gICAgICAgIC50aXRsZXtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAuY29kZXtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBkb3R0ZWQ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmV4cGlyZXtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmRlc2N7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5jbGFpbSB7XG4gICAgICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHggNXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmJ0bnN7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLnNjLWlvbi1idXR0b25zLW1kLXMgLmJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gICAgZGlzcGxheTogYmxvY2s7XG59IiwiLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFja2dyb3VuZC1jbGFzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuXG4vKi5ub0RhdGF7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0qL1xuLmNvdXBvbnMge1xuICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7Ki9cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweCA4cHg7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGJvcmRlcjogMXB4IGRvdHRlZDtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmV4cGlyZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb3Vwb25zIC5pbmZvIC50aXRsZSAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb3Vwb25zIC5pbmZvIC50aXRsZSAuY2xhaW0ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uY291cG9ucyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/coupons/coupons.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/coupons/coupons.page.ts ***!
  \***********************************************/
/*! exports provided: CouponsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponsPage", function() { return CouponsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");








let CouponsPage = class CouponsPage {
    constructor(api, route, util, navCtrl, menu) {
        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.list = [];
        this.dummy = Array(10);
        this.usedCoupon = [];
        this.labdata = [];
        this.cartdata = [];
        this.labid = "";
        //this.menu.enable(false);
        this.getCoupon();
        this.getOffers();
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            this.labdata = localStorage.getItem('labid');
            this.cartdata = Object(flatted__WEBPACK_IMPORTED_MODULE_7__["parse"])(localStorage.getItem('cartdata'));
            this.labid = this.labdata;
        });
    }
    getCoupon() {
        const uid = sessionStorage.getItem('uid');
        this.api.getUsedCoupon(uid).then(data => {
            console.log('list=====>', data);
            if (data) {
                this.usedCoupon = data;
            }
        }).catch(error => {
            this.dummy = [];
            console.log(error);
        });
    }
    getOffers() {
        this.api.getOffers().then(data => {
            this.dummy = [];
            console.log('list=====>', data);
            this.list = [];
            if (data && data.length) {
                const currnetDate = moment__WEBPACK_IMPORTED_MODULE_3__().subtract(1, 'days').format('YYYY-MM-DD');
                console.log(currnetDate);
                data.forEach(element => {
                    console.log(moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate));
                    /*  if (element && element.status == 1 && moment(element.expire).isAfter(currnetDate) && element.coupon_type == 'discount_on_bill') {*/
                    if (element && element.status == 1 && moment__WEBPACK_IMPORTED_MODULE_3__(element.expire).isAfter(currnetDate)) {
                        console.log(element.branch);
                        var lab_exist = 0;
                        for (var x of element.branch) {
                            if (x.item_id == this.labid) {
                                lab_exist = 1;
                            }
                        }
                        if (lab_exist == 1) {
                            this.list.push(element);
                        }
                        console.log('yes=>', element);
                    }
                });
                // this.list = data;
            }
        }).catch(error => {
            this.dummy = [];
            console.log(error);
        });
    }
    claim(item) {
        console.log(item);
        if (item && item.status == 1) {
            console.log(this.cartdata.selling_price + '>=' + item.min);
            if (this.cartdata.selling_price >= item.min) {
                if (this.usedCoupon.length != 0) {
                    const uid = sessionStorage.getItem('uid');
                    console.log(uid, item.id);
                    this.api.getUsedCouponById(uid, item.id).then((data) => {
                        console.log(data);
                        if (data && data.length) {
                            if (data[0].used_coupon < item.limit) {
                                this.util.showToast('Coupon Applied', 'success', 'bottom');
                                this.util.publishCoupon(item);
                                this.navCtrl.back();
                            }
                            else {
                                console.log('hi');
                                this.util.errorToast('Coupon limits exceeded ' + item.limit);
                            }
                        }
                        else {
                            this.util.showToast('Coupon Applied', 'success', 'bottom');
                            this.util.publishCoupon(item);
                            this.navCtrl.back();
                        }
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                }
                else {
                    console.log('coupon not empty');
                    this.util.showToast('Coupon Applied', 'success', 'bottom');
                    this.util.publishCoupon(item);
                    this.navCtrl.back();
                }
            }
            else {
                this.util.errorToast('For claiming this coupon your order required minimum order  of ₹' + item.min);
            }
            // } else {
            //   this.util.errorToast('This coupon is not valid for ' + this.society_name);
            // }
        }
        else {
            this.util.errorToast('This coupon is not valid for ' + this.society_name);
        }
    }
    expire(date) {
        return moment__WEBPACK_IMPORTED_MODULE_3__(date).format('llll');
    }
    getCurrency() {
        return this.util.getCurrecySymbol();
    }
};
CouponsPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"] }
];
CouponsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-coupons',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./coupons.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/coupons/coupons.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./coupons.page.scss */ "./src/app/pages/coupons/coupons.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["MenuController"]])
], CouponsPage);



/***/ })

}]);
//# sourceMappingURL=pages-coupons-coupons-module-es2015.js.map