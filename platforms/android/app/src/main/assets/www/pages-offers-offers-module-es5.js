function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-offers-offers-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesOffersOffersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content >\n<div class=\"container\">\n <!-- <div *ngIf=\"list.length == 0\" class=\"noData\">\n    <img src=\"assets/no_data_found.png\">\n    <p>Sorry! No coupons available</p>\n  </div>-->\n  <div >\n    <ion-row  class=\"coupons\" >\n      <ion-col size=\"12\" class=\"info\">\n      <p class=\"title\">\n      <span class=\"code\">WAYTOLAB<!--<span class=\"claim\">CLAIM</span>--></span><br>\n      <span class=\"desc\">A flash sale is one that offers some sort of savings but only for a short time. A good flash sale creates urgency, hype, and a spike in sales. </span>\n        <br>\n         <span class=\"expire\">Expires on: 30 April 2022</span>\n       </p>\n\t   <br><br>\n\t   <p class=\"title\">\n      <span class=\"code\">WAYTOLAB2<!--<span class=\"claim\">CLAIM</span>--></span><br>\n      <span class=\"desc\">A flash sale is one that offers some sort of savings but only for a short time. A good flash sale creates urgency, hype, and a spike in sales. </span>\n        <br>\n         <span class=\"expire\">Expires on: 30 April 2022</span>\n       </p>\n\t   <br><br><br><br>\n      </ion-col>\n    </ion-row>\n  </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/offers/offers-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/offers/offers-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: OffersPageRoutingModule */

  /***/
  function srcAppPagesOffersOffersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageRoutingModule", function () {
      return OffersPageRoutingModule;
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


    var _offers_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/pages/offers/offers.page.ts");

    var routes = [{
      path: '',
      component: _offers_page__WEBPACK_IMPORTED_MODULE_3__["OffersPage"]
    }];

    var OffersPageRoutingModule = function OffersPageRoutingModule() {
      _classCallCheck(this, OffersPageRoutingModule);
    };

    OffersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], OffersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/offers/offers.module.ts ***!
    \***********************************************/

  /*! exports provided: OffersPageModule */

  /***/
  function srcAppPagesOffersOffersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPageModule", function () {
      return OffersPageModule;
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


    var _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./offers-routing.module */
    "./src/app/pages/offers/offers-routing.module.ts");
    /* harmony import */


    var _offers_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./offers.page */
    "./src/app/pages/offers/offers.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var OffersPageModule = function OffersPageModule() {
      _classCallCheck(this, OffersPageModule);
    };

    OffersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _offers_routing_module__WEBPACK_IMPORTED_MODULE_5__["OffersPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_offers_page__WEBPACK_IMPORTED_MODULE_6__["OffersPage"]]
    })], OffersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/offers/offers.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesOffersOffersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noData {\n  text-align: center;\n  margin-top: 2%;\n  font-weight: bold;\n}\n\n.background-class {\n  --ion-background-color: #f3f3f3;\n  padding: 16px 0px;\n}\n\n/*.noData{\n    border-radius: 10px;\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: contain;\n    width: 100%;\n    height: 250px;\n}*/\n\n.coupons {\n  /*border-bottom: 1px solid lightgray;*/\n  background: #fff;\n  margin-top: 10px;\n  padding: 10px 8px;\n}\n\n.coupons .info .title {\n  margin: 0px;\n  font-weight: bold;\n}\n\n.coupons .info .title .code {\n  font-weight: bold;\n  line-height: 2rem;\n  border: 1px dotted;\n  padding: 6px;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n}\n\n.coupons .info .title .expire {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .desc {\n  font-size: 0.8rem;\n  color: gray;\n}\n\n.coupons .info .title .claim {\n  float: right;\n  color: #fff;\n  font-size: 12px;\n  padding: 0px 5px;\n  border-radius: 5px;\n  height: 32px;\n  background: var(--ion-color-primary);\n}\n\n.coupons .btns {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.sc-ion-buttons-md-s .button {\n  --background-hover: currentColor;\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb2ZmZXJzL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXG9mZmVyc1xcb2ZmZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvb2ZmZXJzL29mZmVycy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ0NKOztBRENBO0VBQ0ksK0JBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBOzs7Ozs7O0VBQUE7O0FBUUE7RUFDSSxzQ0FBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQ0dKOztBREFRO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FDRVo7O0FERFk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDR2hCOztBRERZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDR2hCOztBRERZO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0FDR2hCOztBRERZO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxvQ0FBQTtBQ0doQjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDQVI7O0FESUE7RUFDSSxnQ0FBQTtFQUNBLGNBQUE7QUNESiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL29mZmVycy9vZmZlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDoyJTtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuLmJhY2tncm91bmQtY2xhc3N7XG4gICAgLS1pb24tYmFja2dyb3VuZC1jb2xvcjogI2YzZjNmMztcbiAgICBwYWRkaW5nOiAxNnB4IDBweDtcbn1cbi8qLm5vRGF0YXtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1MHB4O1xufSovXG4uY291cG9uc3tcbiAgICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7Ki9cbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCA4cHg7XG5cbiAgICAuaW5mb3tcbiAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIC5jb2Rle1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IGRvdHRlZDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZXhwaXJle1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IGdyYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAuZGVzY3tcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC44cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmNsYWltIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCA1cHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuc3tcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgICAtLWJhY2tncm91bmQtaG92ZXI6IGN1cnJlbnRDb2xvcjtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuIiwiLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMiU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uYmFja2dyb3VuZC1jbGFzcyB7XG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICNmM2YzZjM7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xufVxuXG4vKi5ub0RhdGF7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNTBweDtcbn0qL1xuLmNvdXBvbnMge1xuICAvKmJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7Ki9cbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweCA4cHg7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUge1xuICBtYXJnaW46IDBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGJvcmRlcjogMXB4IGRvdHRlZDtcbiAgcGFkZGluZzogNnB4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4uY291cG9ucyAuaW5mbyAudGl0bGUgLmV4cGlyZSB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb3Vwb25zIC5pbmZvIC50aXRsZSAuZGVzYyB7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xuICBjb2xvcjogZ3JheTtcbn1cbi5jb3Vwb25zIC5pbmZvIC50aXRsZSAuY2xhaW0ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6IDEycHg7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uY291cG9ucyAuYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2MtaW9uLWJ1dHRvbnMtbWQtcyAuYnV0dG9uIHtcbiAgLS1iYWNrZ3JvdW5kLWhvdmVyOiBjdXJyZW50Q29sb3I7XG4gIGRpc3BsYXk6IGJsb2NrO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/offers/offers.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/offers/offers.page.ts ***!
    \*********************************************/

  /*! exports provided: OffersPage */

  /***/
  function srcAppPagesOffersOffersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OffersPage", function () {
      return OffersPage;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var OffersPage =
    /*#__PURE__*/
    function () {
      function OffersPage(api, route, util, navCtrl, menu) {
        _classCallCheck(this, OffersPage);

        this.api = api;
        this.route = route;
        this.util = util;
        this.navCtrl = navCtrl;
        this.menu = menu;
        this.list = [];
        this.dummy = Array(10);
        this.usedCoupon = [];
        this.menu.enable(false);
      }

      _createClass(OffersPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "claim",
        value: function claim(data) {}
      }]);

      return OffersPage;
    }();

    OffersPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]
      }];
    };

    OffersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-offers',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./offers.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/offers/offers.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./offers.page.scss */
      "./src/app/pages/offers/offers.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["MenuController"]])], OffersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-offers-offers-module-es5.js.map