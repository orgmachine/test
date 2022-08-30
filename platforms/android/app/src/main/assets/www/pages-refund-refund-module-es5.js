function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-refund-refund-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refund/refund.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refund/refund.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRefundRefundPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n    <h2>Refund & Cancellation Policy</h2>\n   <p [innerHTML]=\"refund\" class=\"ion-text-justify\"></p>\n</div>\n   <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/refund/refund-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/refund/refund-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: RefundPageRoutingModule */

  /***/
  function srcAppPagesRefundRefundRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPageRoutingModule", function () {
      return RefundPageRoutingModule;
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


    var _refund_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./refund.page */
    "./src/app/pages/refund/refund.page.ts");

    var routes = [{
      path: '',
      component: _refund_page__WEBPACK_IMPORTED_MODULE_3__["RefundPage"]
    }];

    var RefundPageRoutingModule = function RefundPageRoutingModule() {
      _classCallCheck(this, RefundPageRoutingModule);
    };

    RefundPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RefundPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/refund/refund.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/refund/refund.module.ts ***!
    \***********************************************/

  /*! exports provided: RefundPageModule */

  /***/
  function srcAppPagesRefundRefundModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPageModule", function () {
      return RefundPageModule;
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


    var _refund_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./refund-routing.module */
    "./src/app/pages/refund/refund-routing.module.ts");
    /* harmony import */


    var _refund_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./refund.page */
    "./src/app/pages/refund/refund.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var RefundPageModule = function RefundPageModule() {
      _classCallCheck(this, RefundPageModule);
    };

    RefundPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _refund_routing_module__WEBPACK_IMPORTED_MODULE_5__["RefundPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_refund_page__WEBPACK_IMPORTED_MODULE_6__["RefundPage"]]
    })], RefundPageModule);
    /***/
  },

  /***/
  "./src/app/pages/refund/refund.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/refund/refund.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRefundRefundPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-size: 13px;\n  color: var(--input-color);\n  margin-bottom: 23px;\n}\n\n.profile-header {\n  -webkit-transform: translateY(5rem);\n          transform: translateY(5rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVmdW5kL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXHJlZnVuZFxccmVmdW5kLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVmdW5kL3JlZnVuZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQ0FSOztBREtHO0VBQ0MsbUNBQUE7VUFBQSwyQkFBQTtBQ0ZKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVmdW5kL3JlZnVuZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudCB7XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuICAgLnByb2ZpbGUtaGVhZGVyIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcclxufVxyXG5cclxuXHJcbiIsImlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi5wcm9maWxlLWhlYWRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1cmVtKTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/refund/refund.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/refund/refund.page.ts ***!
    \*********************************************/

  /*! exports provided: RefundPage */

  /***/
  function srcAppPagesRefundRefundPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RefundPage", function () {
      return RefundPage;
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

    var RefundPage = function RefundPage(route, router, alertCtrl, menu, api) {
      var _this = this;

      _classCallCheck(this, RefundPage);

      this.route = route;
      this.router = router;
      this.alertCtrl = alertCtrl;
      this.menu = menu;
      this.api = api;
      this.menu.enable(false);
      this.api.getSettings().then(function (data) {
        _this.settings = data[0];
        _this.refund = _this.settings.return_and_exchange;
        console.log(_this.refund);
      }).catch(function (error) {
        console.log(error);
      });
    };

    RefundPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }];
    };

    RefundPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-refund',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./refund.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/refund/refund.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./refund.page.scss */
      "./src/app/pages/refund/refund.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], RefundPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-refund-refund-module-es5.js.map