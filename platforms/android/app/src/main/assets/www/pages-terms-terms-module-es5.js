function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-terms-terms-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTermsTermsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content class=\"\">\n<div class=\"container\">\n   <p [innerHTML]=\"terms\" class=\"ion-text-justify\"></p>\n</div>\n  <app-footer></app-footer>\n  </ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/terms/terms-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/terms/terms-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TermsPageRoutingModule */

  /***/
  function srcAppPagesTermsTermsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsPageRoutingModule", function () {
      return TermsPageRoutingModule;
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


    var _terms_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./terms.page */
    "./src/app/pages/terms/terms.page.ts");

    var routes = [{
      path: '',
      component: _terms_page__WEBPACK_IMPORTED_MODULE_3__["TermsPage"]
    }];

    var TermsPageRoutingModule = function TermsPageRoutingModule() {
      _classCallCheck(this, TermsPageRoutingModule);
    };

    TermsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TermsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/terms/terms.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/terms/terms.module.ts ***!
    \*********************************************/

  /*! exports provided: TermsPageModule */

  /***/
  function srcAppPagesTermsTermsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsPageModule", function () {
      return TermsPageModule;
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


    var _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./terms-routing.module */
    "./src/app/pages/terms/terms-routing.module.ts");
    /* harmony import */


    var _terms_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./terms.page */
    "./src/app/pages/terms/terms.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TermsPageModule = function TermsPageModule() {
      _classCallCheck(this, TermsPageModule);
    };

    TermsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _terms_routing_module__WEBPACK_IMPORTED_MODULE_5__["TermsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_terms_page__WEBPACK_IMPORTED_MODULE_6__["TermsPage"]]
    })], TermsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/terms/terms.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/terms/terms.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTermsTermsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-size: 13px;\n  color: var(--input-color);\n  margin-bottom: 23px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVybXMvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcdGVybXNcXHRlcm1zLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVybXMvdGVybXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zL3Rlcm1zLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgIH1cbn0iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICBtYXJnaW4tYm90dG9tOiAyM3B4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/terms/terms.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/terms/terms.page.ts ***!
    \*******************************************/

  /*! exports provided: TermsPage */

  /***/
  function srcAppPagesTermsTermsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TermsPage", function () {
      return TermsPage;
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

    var TermsPage = function TermsPage(route, router, alertCtrl, menu, api) {
      var _this = this;

      _classCallCheck(this, TermsPage);

      this.route = route;
      this.router = router;
      this.alertCtrl = alertCtrl;
      this.menu = menu;
      this.api = api;
      this.menu.enable(false);
      this.api.getSettings().then(function (data) {
        _this.settings = data[0];
        _this.terms = _this.settings.terms;
      }).catch(function (error) {
        console.log(error);
      });
    };

    TermsPage.ctorParameters = function () {
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

    TermsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-terms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./terms.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms/terms.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./terms.page.scss */
      "./src/app/pages/terms/terms.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], TermsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-terms-terms-module-es5.js.map