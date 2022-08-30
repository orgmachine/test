function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-payment-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesPaymentPaymentPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content [scrollEvents]=\"true\">\n<div class=\"container\">\n  \t<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3>Payment Details</h3>\n\t\t</div>\t\n\t</div>\n\t <div class=\"col-md-12 col-lg-6 col-xl-6\" style=\"margin: 0 auto;\">\n\t\t<p class=\"header\">Payment Receipt <span><ion-icon *ngIf= \"status == 'success'\" name=\"checkmark-circle\" color=\"primary\" class=\"icon\"></ion-icon><ion-icon *ngIf= \"status == 'failed'\" name=\"close-circle\" color=\"danger\" class=\"icon\"></ion-icon></span></p>\n\t  <div class=\"seperate\"></div>\n\t  <ion-card-header>\n\t    <ion-card-subtitle style=\"text-align: center;\">Your Payment Details</ion-card-subtitle>\n\t  </ion-card-header>\n\n\t  <ion-card-content class=\"content\">\n\t    Transaction confirmation mail was sent to\n\t    {{email}}\n\t  </ion-card-content>\n\t  <p class=\"subHeader\"> Transaction Id. | {{payment_id}}</p>\n\n\t  <div class=\"seperate\"></div>\n\t  <ion-card-header>\n\t    <ion-card-subtitle style=\"text-align: center;\">Transactional Details</ion-card-subtitle>\n\t  </ion-card-header>\n\t  <ion-card-content class=\"content\">\n\t    Customer Name | {{user_name}} <br>\n\t    Date | {{createdAt}}<br>\n\t    Amount Paid | {{amount}}<br>\n\t    Transaction Status | {{status}}\n\t  </ion-card-content>\n\t</div></div>\n\t<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/payment/payment-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: PaymentPageRoutingModule */

  /***/
  function srcAppPagesPaymentPaymentRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageRoutingModule", function () {
      return PaymentPageRoutingModule;
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


    var _payment_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");

    var routes = [{
      path: '',
      component: _payment_page__WEBPACK_IMPORTED_MODULE_3__["PaymentPage"]
    }];

    var PaymentPageRoutingModule = function PaymentPageRoutingModule() {
      _classCallCheck(this, PaymentPageRoutingModule);
    };

    PaymentPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PaymentPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.module.ts ***!
    \*************************************************/

  /*! exports provided: PaymentPageModule */

  /***/
  function srcAppPagesPaymentPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function () {
      return PaymentPageModule;
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


    var _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./payment-routing.module */
    "./src/app/pages/payment/payment-routing.module.ts");
    /* harmony import */


    var _payment_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./payment.page */
    "./src/app/pages/payment/payment.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var PaymentPageModule = function PaymentPageModule() {
      _classCallCheck(this, PaymentPageModule);
    };

    PaymentPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _payment_routing_module__WEBPACK_IMPORTED_MODULE_5__["PaymentPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_payment_page__WEBPACK_IMPORTED_MODULE_6__["PaymentPage"]]
    })], PaymentPageModule);
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/payment/payment.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesPaymentPaymentPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #fff;\n}\n\nion-card {\n  --background: #fff;\n}\n\n.content {\n  text-align: center;\n  font-size: 12px;\n  padding-bottom: 0px;\n  line-height: 2.5rem;\n  color: #212121;\n}\n\n.header {\n  padding: 5px 16px;\n  font-weight: bold;\n  color: #212121;\n  margin: 0;\n}\n\n.seperate {\n  border: 0.1px solid #8c8d8a;\n  border-style: dotted;\n}\n\n.subHeader {\n  font-size: 12px;\n  text-align: center;\n  color: #212121;\n}\n\n.icon {\n  float: right;\n  font-size: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGF5bWVudC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxwYXltZW50XFxwYXltZW50LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGF5bWVudC9wYXltZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0FDQ0o7O0FEQ0E7RUFDQyxrQkFBQTtBQ0VEOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUNHSjs7QUREQTtFQUNDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQWUsU0FBQTtBQ0toQjs7QURIQTtFQUNDLDJCQUFBO0VBQ0csb0JBQUE7QUNNSjs7QURKQTtFQUNDLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUNPRDs7QURMQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0FDUUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYXltZW50L3BheW1lbnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xyXG59XHJcbmlvbi1jYXJke1xyXG5cdC0tYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG4uY29udGVudHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmctYm90dG9tOjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBjb2xvcjogIzIxMjEyMTtcclxufVxyXG4uaGVhZGVyIHtcclxuXHRwYWRkaW5nOjVweCAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cdGNvbG9yOiAjMjEyMTIxO21hcmdpbjogMDtcclxufVxyXG4uc2VwZXJhdGUge1xyXG5cdGJvcmRlcjogMC4xcHggc29saWQgIzhjOGQ4YTtcclxuICAgIGJvcmRlci1zdHlsZTogZG90dGVkO1xyXG59XHJcbi5zdWJIZWFkZXIge1xyXG5cdGZvbnQtc2l6ZToxMnB4O1xyXG5cdHRleHQtYWxpZ246Y2VudGVyO1xyXG5cdGNvbG9yOiAjMjEyMTIxO1xyXG59XHJcbi5pY29uIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufSIsImlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuXG5pb24tY2FyZCB7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLmNvbnRlbnQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgcGFkZGluZy1ib3R0b206IDBweDtcbiAgbGluZS1oZWlnaHQ6IDIuNXJlbTtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbi5oZWFkZXIge1xuICBwYWRkaW5nOiA1cHggMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMjEyMTIxO1xuICBtYXJnaW46IDA7XG59XG5cbi5zZXBlcmF0ZSB7XG4gIGJvcmRlcjogMC4xcHggc29saWQgIzhjOGQ4YTtcbiAgYm9yZGVyLXN0eWxlOiBkb3R0ZWQ7XG59XG5cbi5zdWJIZWFkZXIge1xuICBmb250LXNpemU6IDEycHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICMyMTIxMjE7XG59XG5cbi5pY29uIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBmb250LXNpemU6IDI0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/payment/payment.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/payment/payment.page.ts ***!
    \***********************************************/

  /*! exports provided: PaymentPage */

  /***/
  function srcAppPagesPaymentPaymentPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentPage", function () {
      return PaymentPage;
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

    var PaymentPage =
    /*#__PURE__*/
    function () {
      function PaymentPage(route, router, alertCtrl, api, util, menu) {
        var _this = this;

        _classCallCheck(this, PaymentPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.menu.enable(false); // this.email = localStorage.getItem('email');

        this.route.queryParams.subscribe(function (params) {
          console.log(params);
          _this.details = params;
          _this.payment_id = _this.details.transactionid;
          _this.createdAt = _this.details.createdAt;
          _this.amount = _this.details.amount;
          _this.status = _this.details.status;
        });
      }

      _createClass(PaymentPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (info) {
            _this2.user_name = info.name;
            _this2.email = info.email;
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this2.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }]);

      return PaymentPage;
    }();

    PaymentPage.ctorParameters = function () {
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
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    PaymentPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./payment.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/payment/payment.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./payment.page.scss */
      "./src/app/pages/payment/payment.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], PaymentPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-payment-payment-module-es5.js.map