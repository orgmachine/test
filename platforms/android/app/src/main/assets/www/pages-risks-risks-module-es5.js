function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-risks-risks-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risks/risks.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risks/risks.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRisksRisksPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content >\n  <div class=\"ShopByProducts\">\n  \n    <div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Risk</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div></div>\n\n\n<div class=\"row col-md-12 col-lg-12 col-xl-12 \">\n  <div class=\"col-md-12 col-lg-4 col-xl-4\" *ngFor=\"let item of risks\">\n    <div class=\"grid-item-innerha\">\n      <img class=\"popimg\" [src]=\"item.image\">\n      <p class=\"category_nameha\">{{item.name}}</p> \n      <div class=\"desha\" [innerHtml]=\"item.description | slice:0:80\"></div>\n      <button ion-button  class=\"addtocart\" >View Test</button>\n    </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/risks/risks-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/risks/risks-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: RisksPageRoutingModule */

  /***/
  function srcAppPagesRisksRisksRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RisksPageRoutingModule", function () {
      return RisksPageRoutingModule;
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


    var _risks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./risks.page */
    "./src/app/pages/risks/risks.page.ts");

    var routes = [{
      path: '',
      component: _risks_page__WEBPACK_IMPORTED_MODULE_3__["RisksPage"]
    }];

    var RisksPageRoutingModule = function RisksPageRoutingModule() {
      _classCallCheck(this, RisksPageRoutingModule);
    };

    RisksPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RisksPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/risks/risks.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/risks/risks.module.ts ***!
    \*********************************************/

  /*! exports provided: RisksPageModule */

  /***/
  function srcAppPagesRisksRisksModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RisksPageModule", function () {
      return RisksPageModule;
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


    var _risks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./risks-routing.module */
    "./src/app/pages/risks/risks-routing.module.ts");
    /* harmony import */


    var _risks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./risks.page */
    "./src/app/pages/risks/risks.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var RisksPageModule = function RisksPageModule() {
      _classCallCheck(this, RisksPageModule);
    };

    RisksPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _risks_routing_module__WEBPACK_IMPORTED_MODULE_5__["RisksPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_risks_page__WEBPACK_IMPORTED_MODULE_6__["RisksPage"]]
    })], RisksPageModule);
    /***/
  },

  /***/
  "./src/app/pages/risks/risks.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/risks/risks.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRisksRisksPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmlza3MvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xccmlza3NcXHJpc2tzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmlza3Mvcmlza3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWlCLGVBQUE7RUFBZ0IsY0FBQTtFQUNyQyxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNFQTtBRERBO0VBQWdCLHVCQUFBO0VBQXdCLG1CQUFBO0FDS3hDO0FESkE7RUFBUyxnQ0FBQTtBQ09UO0FETkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGdEQUFBO0VBQ0EsbUJBQUE7QUNRUjtBRE5JO0VBQ0ksY0FBQTtBQ1FSO0FETkk7RUFDSSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsYUFBQTtBQ1FSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmlza3Mvcmlza3MucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLmNhdGVnb3J5X25hbWVoYXtmb250LXNpemU6IDIwcHg7Y29sb3I6ICMwMDdjOWQ7XG5mb250LXdlaWdodDogYm9sZDtcbnBhZGRpbmctdG9wOiAzMHB4O1xubGluZS1oZWlnaHQ6MjBweDt9XG4uU2hvcEJ5UHJvZHVjdHN7cGFkZGluZzogMzBweCA1MHB4IDUwcHg7YmFja2dyb3VuZDogI2VkZWRlZDt9XG4ucG9waW1nIHtib3JkZXItcmFkaXVzOjEwcHggMTBweCAwcHggMHB4O31cbiAgICAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuZGVzaGEge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG4gICAgLmFkZHRvY2FydHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhNWIyNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxufSIsImlvbi1jb250ZW50IC5jYXRlZ29yeV9uYW1laGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDA3YzlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZzogMzBweCA1MHB4IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5pb24tY29udGVudCAucG9waW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAuZGVzaGEge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbmlvbi1jb250ZW50IC5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiAjZWE1YjI0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA0cHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/risks/risks.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/risks/risks.page.ts ***!
    \*******************************************/

  /*! exports provided: RisksPage */

  /***/
  function srcAppPagesRisksRisksPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RisksPage", function () {
      return RisksPage;
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


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var RisksPage =
    /*#__PURE__*/
    function () {
      function RisksPage(api, util, router) {
        _classCallCheck(this, RisksPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.risks = [];
      }

      _createClass(RisksPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.api.getHealthRisk().then(function (data) {
            // console.log(data);
            _this.risks = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "viewRisk",
        value: function viewRisk(data) {
          localStorage.setItem('riskid', data.id);
          this.router.navigate(['risk', data.name]);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RisksPage;
    }();

    RisksPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RisksPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-risks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./risks.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risks/risks.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./risks.page.scss */
      "./src/app/pages/risks/risks.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RisksPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-risks-risks-module-es5.js.map