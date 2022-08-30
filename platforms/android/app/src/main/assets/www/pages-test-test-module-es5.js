function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesTestTestPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"cart-div deal_detail\">\n     \n        <div class=\"test__heading\">\n          <div>\n            <h3 _ngcontent-ovj-c5=\"\">{{test?.test_name}}</h3>\n          </div>\n          <div>\n            <ion-button (click)=\"book()\" style=\"margin-right: 20px\"\n              >Book Here</ion-button\n            >\n            <ion-button (click)=\"openQuery()\">Get a call back</ion-button>\n          </div>\n        </div>\n\t\t <div class=\"test\">\n        <div class=\"test__navigation\">\n          <button (click)=\"openTab('Description')\" class=\"test__tab \" [ngClass]=\"status==='Description'?'active':''\">\n            Description\n          </button>\n          <button (click)=\"openTab('Parameter')\" class=\"test__tab\" [ngClass]=\"status==='Parameter'?'active':''\">\n            Parameter Included\n          </button>\n          <button (click)=\"openTab('Preparations')\" class=\"test__tab\" [ngClass]=\"status==='Preparations'?'active':''\">\n            Preparations\n          </button>\n          <button (click)=\"openTab('FAQ')\" class=\"test__tab\" [ngClass]=\"status==='FAQ'?'active':''\">\n            FAQ's\n          </button>\n        </div>\n      \n\n      <div>\n        <p class=\"Description section\" [innerHtml]=\"test?.description\"></p>\n      </div>\n\n      <div class=\"gray-band\">\n        <div class=\"Parameter invisible section\">\n            <h3 class=\"heading\">\n               Test Details (Parameters included : {{test?.parameter.length}})\n            </h3>\n          <ion-list style=\"padding: 0px\" *ngFor=\"let data of test?.parameter\">\n             <div\n               class=\"panel-body parameterlist\"\n               style=\"padding-bottom: 0px\"\n             >\n               <p style=\"margin-bottom: 0px\">{{data.item_text}}</p>\n             </div>\n          </ion-list>\n        </div>\n        <!-- level one usp -->\n        <!-- level two usp -->\n        <div class=\"usplevel_two Preparations invisible section\">\n         <p [innerHtml]=\"test?.preparation\"></p>\n          <ul>\n            <li>\n              <p>\n                Test Recommended for:<strong\n                  ><span *ngFor=\"let g of gender_recomendation;let last = last;\">{{g}}<span *ngIf=\"!last\">, &nbsp;</span></span></strong\n                >\n              </p>\n            </li>\n            <li>\n              <p>\n                Recommended for age:<strong\n                  ><span *ngFor=\"let a of age_recomendation;let last = last;\">{{a}}<span *ngIf=\"!last\">, &nbsp;</span></span></strong\n                >\n              </p>\n            </li>\n            <li>\n              <p>\n                Home Collection<strong\n                  ><span *ngIf=\"test?.home_visit_possible == 0\">No</span\n                  ><span *ngIf=\"test?.home_visit_possible == 1\"\n                    >Yes</span\n                  ></strong\n                >\n              </p>\n            </li>\n          </ul>\n        </div>\n        <!-- level two usp -->\n\n         <div\n          class=\"panel-group accordionpanel FAQ invisible section\"\n         >\n         <div *ngFor=\"let item of test?.faqs;let i =index;\">\n            <h3 class=\"heading\">Q{{i+1}}) {{item.question}}</h3>\n            <p>A{{i+1}}) {{item.answer}}</p>\n         </div>\n      </div>\n      <div class=\"clear\"></div>\n      </div></div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/pages/test/test-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/test/test-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: TestPageRoutingModule */

  /***/
  function srcAppPagesTestTestRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function () {
      return TestPageRoutingModule;
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


    var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./test.page */
    "./src/app/pages/test/test.page.ts");

    var routes = [{
      path: '',
      component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }];

    var TestPageRoutingModule = function TestPageRoutingModule() {
      _classCallCheck(this, TestPageRoutingModule);
    };

    TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TestPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/test/test.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.module.ts ***!
    \*******************************************/

  /*! exports provided: TestPageModule */

  /***/
  function srcAppPagesTestTestModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPageModule", function () {
      return TestPageModule;
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


    var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./test-routing.module */
    "./src/app/pages/test/test-routing.module.ts");
    /* harmony import */


    var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./test.page */
    "./src/app/pages/test/test.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var TestPageModule = function TestPageModule() {
      _classCallCheck(this, TestPageModule);
    };

    TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })], TestPageModule);
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/test/test.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesTestTestPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .darken {\n  margin-bottom: 10px;\n}\nion-content .active {\n  --background: #fff;\n  --border-color: transparent;\n  border: 1px solid #dbd9d9;\n  cursor: pointer;\n}\nion-content .not-active {\n  --background: #f5f5f5;\n  --border-color: transparent;\n  border: 1px solid #dbd9d9;\n  border-radius: 4px;\n}\nion-content .heading {\n  margin: 0px;\n  font-weight: bold;\n  font-size: 18px;\n}\nion-content .arrow-icon {\n  height: 25px;\n  width: 25px;\n}\nion-content .detail-div {\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 6px 10px rgba(148, 148, 148, 0.5);\n  overflow: hidden;\n  margin-top: 30px;\n  padding: 0px 20px 12px 15px !important;\n}\nion-content .title {\n  color: #fff;\n  padding: 10px 30px;\n  background: #007c9d;\n  margin-left: -20px;\n  margin-right: -20px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .green-band {\n  background: #aca9a8;\n  padding: 10px;\n  padding: 10px 30px;\n  height: 44px;\n  color: #fff;\n  font-weight: 600;\n}\nion-content .accordion-option {\n  width: 100%;\n  float: left;\n  clear: both;\n  margin: 15px 0;\n}\nion-content .accordionpanel {\n  margin: 18px 0;\n}\nion-content .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\nion-content .panel-default {\n  border-color: #ddd;\n}\nion-content .panel-default > .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n}\nion-content .panel-title {\n  background: #ebebeb;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n  padding: 15px 10px;\n}\nion-content .panel-default > .panel-heading {\n  display: block;\n}\nion-content .collapse.in {\n  display: block;\n}\nion-content .panel-group .panel-heading + .panel-collapse > .panel-body {\n  border-top: 1px solid #ddd;\n  border-top-color: #dddddd;\n}\nion-content .panel-body {\n  padding: 15px;\n}\nion-content .parameterlist {\n  font-size: 15px;\n}\nion-content .cart-div .step-div {\n  padding: 20px 15px;\n}\nion-content .step-div {\n  position: relative;\n  padding: 30px 35px;\n}\nion-content .step-div h1 {\n  font-size: 25px;\n  text-transform: capitalize;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\nion-content .step-div p {\n  font-weight: 400;\n  font-size: 15px;\n  padding: 13px 0 0 0;\n  padding-top: 13px;\n  margin: 0;\n}\nion-content .parameterinc {\n  color: #fff;\n  font-size: 17px !important;\n  padding-top: 10px !important;\n}\nion-content .price {\n  color: #dcf9fb;\n  font-size: 19px;\n}\nion-content .rupeesign {\n  font-family: Hind, sans-serif;\n}\nion-content .step-div h2 {\n  font-size: 25px;\n  text-transform: capitalize;\n  font-weight: 500;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n}\nion-content .package_rating {\n  margin-top: 10px;\n  background: #fff;\n  border-radius: 40px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 6px 15px 2px 14px;\n  color: #484b4b;\n}\nion-content .pro-content-area {\n  padding: 25px 25px 0px 25px;\n  margin-bottom: 5px;\n  float: left;\n}\nion-content .pro-content-area .metaFooterToggleLink {\n  font-size: 15px;\n  margin-bottom: 5px;\n  padding-right: 0px;\n  text-align: justify;\n}\nion-content .covidsafetyassured {\n  display: block;\n  padding: 0px 9px;\n  float: none;\n  width: 180px;\n  margin: 0px auto 20px auto;\n}\nion-content .covidsafetyassured img {\n  border-right: 1px solid #c2e2f4;\n  display: inline-block;\n  margin-top: 0px;\n  padding-right: 6px;\n  padding-top: 5px;\n}\nion-content .covidsafetyassured p {\n  font-size: 14px;\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #00a0a8;\n  line-height: 16px;\n  padding: 7px 20px 5px 10px;\n  vertical-align: top;\n}\nion-content .covidsafetyassured span {\n  clear: both;\n  display: block;\n  color: #000;\n}\nion-content .samplesmartreport {\n  border-radius: 3px;\n  display: block;\n  padding: 0px 9px;\n  float: none;\n  width: 180px;\n  margin: 0px auto 20px auto;\n}\nion-content .samplesmartreport p {\n  font-size: 14px;\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #00a0a8;\n  line-height: 16px;\n  padding: 7px 20px 5px 10px;\n  vertical-align: top;\n}\nion-content .usplevel_one {\n  display: block;\n  padding: 10px 20px 10px 20px;\n}\nion-content .usplevel_one ul li {\n  display: inline-block;\n  width: 24%;\n  vertical-align: top;\n}\nion-content .usplevel_two ul li p strong {\n  clear: both;\n  display: block;\n}\nion-content .usplevel_two {\n  /*padding: 0px 25px 0px 25px;\n  background: #d7e6ea;\n  clear: both;\n  box-shadow: 0px 2px 6px #d9d9d9;\n  margin: 20px 20px 10px 20px;\n  border-radius: 3px;*/\n}\nion-content .usplevel_two ul {\n  margin: 0px;\n  padding: 15px 0px;\n  list-style: none;\n}\nion-content .usplevel_two ul li {\n  display: inline-block;\n  vertical-align: top;\n  background: url(/img/arrow_dtl.png);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-position: left 0px;\n  background-repeat: no-repeat;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: 10px;\n}\nion-content .usplevel_two ul li p {\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #000;\n  font-size: 14px;\n  line-height: 18px;\n  padding-right: 35px;\n}\nion-content .detailbtm_book ul {\n  display: block;\n  text-align: center;\n  margin-top: 60px;\n  margin-bottom: 30px;\n}\nion-content .detailbtm_book ul li {\n  display: inline-block;\n}\nion-content .cart-div.deal_detail {\n  margin-bottom: 40px;\n}\n.test__heading {\n  display: -webkit-box;\n  display: flex;\n  padding: 16px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n.test__navigation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.test__tab {\n  margin-right: 1px;\n  border-radius: 0px 0px 10px 10px;\n  padding: 12px 15px;\n  font-size: 15px;\n}\n.test__tab:hover {\n  color: #fff;\n  background: #56ccf2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#2f80ed), to(#56ccf2));\n  background: linear-gradient(to right, #2f80ed, #56ccf2);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n.section {\n  padding: 10px 30px;\n  min-height: 400px;\n  font-size: 14px;\n  line-height: 2rem;\n}\n.invisible {\n  display: none;\n}\n.test {\n  border: 1px solid #ccc;\n}\n.active {\n  color: #fff;\n  background: #56ccf2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#2f80ed), to(#56ccf2));\n  background: linear-gradient(to right, #2f80ed, #56ccf2);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n.gray-band {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFx0ZXN0XFx0ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC90ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSEo7QURLRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEo7QURLRTtFQUNFLGNBQUE7QUNISjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUNISjtBREtFO0VBQ0Usa0JBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUU7RUFDRSxjQUFBO0FDSko7QURNRTtFQUNFLGNBQUE7QUNKSjtBRE1FO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQ0pKO0FETUU7RUFDRSxhQUFBO0FDSko7QURNRTtFQUNFLGVBQUE7QUNKSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUko7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDUko7QURVRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDUko7QURVRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDUko7QURVRTtFQUNFLDZCQUFBO0FDUko7QURVRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUko7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNSSjtBRFVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDUko7QURVRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDUko7QURVRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlFO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0FDVko7QURZRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDVko7QURZRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDVko7QURZRTtFQUNFOzs7OztzQkFBQTtBQ0xKO0FEWUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEY0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWko7QURjRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JKO0FEZUU7RUFDRSxxQkFBQTtBQ2JKO0FEZUU7RUFDRSxtQkFBQTtBQ2JKO0FEa0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRGtCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNoQko7QURvQkU7RUFDRSxpQkFBQTtFQUFpQixnQ0FBQTtFQUNyQixrQkFBQTtFQUNBLGVBQUE7QUNqQkE7QURvQkM7RUFDSyxXQUFBO0VBQ0EsbUJBQUE7RUFBcUIsOEJBQUE7RUFLbEIsK0JBQUE7RUFDSCxxRkFBQTtFQUFBLHVEQUFBO0VBSUcscUVBQUE7QUN2QlQ7QUQ0QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtBQ3pCRjtBRDJCQTtFQUNFLHNCQUFBO0FDeEJGO0FEMEJDO0VBQ0ssV0FBQTtFQUNBLG1CQUFBO0VBQXFCLDhCQUFBO0VBS2xCLCtCQUFBO0VBQ0gscUZBQUE7RUFBQSx1REFBQTtFQUlHLHFFQUFBO0FDNUJUO0FEK0JBO0VBQ0UsaUJBQUE7QUM1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5kYXJrZW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkOWQ5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1hY3RpdmUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RiZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5hcnJvdy1pY29uIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgxNDgsIDE0OCwgMTQ4LCAwLjUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAxMnB4IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2M5ZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmdyZWVuLWJhbmQge1xyXG4gICAgYmFja2dyb3VuZDogI2FjYTlhODtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5hY2NvcmRpb24tb3B0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAuYWNjb3JkaW9ucGFuZWwge1xyXG4gICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgfVxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jb2xsYXBzZS5pbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgfVxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5wYXJhbWV0ZXJsaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmNhcnQtZGl2IHtcclxuICB9XHJcbiAgLmNhcnQtZGl2IC5zdGVwLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5jYXJ0LXNlYyB7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDM1cHg7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiBoMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuc3RlcC1kaXYgcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTNweCAwIDAgMDtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAucGFyYW1ldGVyaW5jIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6ICNkY2Y5ZmI7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG4gIC5ydXBlZXNpZ24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5wYWNrYWdlX3JhdGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4IDJweCAxNHB4O1xyXG4gICAgY29sb3I6ICM0ODRiNGI7XHJcbiAgfVxyXG4gIC5wcm8tY29udGVudC1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweCAwcHggMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAucHJvLWNvbnRlbnQtYXJlYSAubWV0YUZvb3RlclRvZ2dsZUxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgLmNvdmlkc2FmZXR5YXNzdXJlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIH1cclxuICAuY292aWRzYWZldHlhc3N1cmVkIGltZyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzJlMmY0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgLmNvdmlkc2FmZXR5YXNzdXJlZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGNvbG9yOiAjMDBhMGE4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC5jb3ZpZHNhZmV0eWFzc3VyZWQgc3BhbiB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5zYW1wbGVzbWFydHJlcG9ydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIH1cclxuICAuc2FtcGxlc21hcnRyZXBvcnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwYTBhODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHggNXB4IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICAuZ3JheS1iYW5kIHtcclxuICB9XHJcbiAgLnVzcGxldmVsX29uZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF9vbmUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGkgcCBzdHJvbmcge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnVzcGxldmVsX3R3byB7XHJcbiAgICAvKnBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkN2U2ZWE7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggI2Q5ZDlkOTtcclxuICBtYXJnaW46IDIwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4OyovXHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGk6bnRoLWNoaWxkKDEpIHtcclxuICB9XHJcbiAgLnVzcGxldmVsX3R3byB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9pbWcvYXJyb3dfZHRsLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxidG1fYm9vayB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuZGV0YWlsYnRtX2Jvb2sgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuY2FydC1kaXYuZGVhbF9kZXRhaWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAmX19oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19uYXZpZ2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICZfX3RhYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MXB4O2JvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG5wYWRkaW5nOiAxMnB4IDE1cHg7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgIFxyXG5cdCY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzU2Y2NmMjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjMmY4MGVkLFxyXG4gICAgICAgICM1NmNjZjJcclxuICAgICAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICMyZjgwZWQsXHJcbiAgICAgICAgIzU2Y2NmMlxyXG4gICAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udGVzdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4gLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTZjY2YyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICMyZjgwZWQsXHJcbiAgICAgICAgIzU2Y2NmMlxyXG4gICAgICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgIzJmODBlZCxcclxuICAgICAgICAjNTZjY2YyXHJcbiAgICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIH0gXHJcblx0XHJcbi5ncmF5LWJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQgLmRhcmtlbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmQ5ZDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1jb250ZW50IC5ub3QtYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmlvbi1jb250ZW50IC5oZWFkaW5nIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuYXJyb3ctaWNvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDE0OCwgMTQ4LCAxNDgsIDAuNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDEycHggMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgLmdyZWVuLWJhbmQge1xuICBiYWNrZ3JvdW5kOiAjYWNhOWE4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY29udGVudCAuYWNjb3JkaW9uLW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuaW9uLWNvbnRlbnQgLmFjY29yZGlvbnBhbmVsIHtcbiAgbWFyZ2luOiAxOHB4IDA7XG59XG5pb24tY29udGVudCAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuaW9uLWNvbnRlbnQgLnBhbmVsLWRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG5pb24tY29udGVudCAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RkZGRkZDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1jb250ZW50IC5wYXJhbWV0ZXJsaXN0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcnQtZGl2IC5zdGVwLWRpdiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwLWRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzBweCAzNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXAtZGl2IGgxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXAtZGl2IHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEzcHggMCAwIDA7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAucGFyYW1ldGVyaW5jIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnByaWNlIHtcbiAgY29sb3I6ICNkY2Y5ZmI7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbmlvbi1jb250ZW50IC5ydXBlZXNpZ24ge1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5zdGVwLWRpdiBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY29udGVudCAucGFja2FnZV9yYXRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTVweCAycHggMTRweDtcbiAgY29sb3I6ICM0ODRiNGI7XG59XG5pb24tY29udGVudCAucHJvLWNvbnRlbnQtYXJlYSB7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbmlvbi1jb250ZW50IC5wcm8tY29udGVudC1hcmVhIC5tZXRhRm9vdGVyVG9nZ2xlTGluayB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pb24tY29udGVudCAuY292aWRzYWZldHlhc3N1cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweCA5cHg7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmNvdmlkc2FmZXR5YXNzdXJlZCBpbWcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzJlMmY0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNvdmlkc2FmZXR5YXNzdXJlZCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICMwMGEwYTg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlvbi1jb250ZW50IC5jb3ZpZHNhZmV0eWFzc3VyZWQgc3BhbiB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMDA7XG59XG5pb24tY29udGVudCAuc2FtcGxlc21hcnRyZXBvcnQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHggOXB4O1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDIwcHggYXV0bztcbn1cbmlvbi1jb250ZW50IC5zYW1wbGVzbWFydHJlcG9ydCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICMwMGEwYTg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF9vbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF9vbmUgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5pb24tY29udGVudCAudXNwbGV2ZWxfdHdvIHVsIGxpIHAgc3Ryb25nIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnVzcGxldmVsX3R3byB7XG4gIC8qcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNkN2U2ZWE7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjZDlkOWQ5O1xuICBtYXJnaW46IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsqL1xufVxuaW9uLWNvbnRlbnQgLnVzcGxldmVsX3R3byB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF90d28gdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IHVybCgvaW1nL2Fycm93X2R0bC5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF90d28gdWwgbGkgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cbmlvbi1jb250ZW50IC5kZXRhaWxidG1fYm9vayB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsYnRtX2Jvb2sgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tY29udGVudCAuY2FydC1kaXYuZGVhbF9kZXRhaWwge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udGVzdF9faGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi50ZXN0X19uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLnRlc3RfX3RhYiB7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGVzdF9fdGFiOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM1NmNjZjI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjgwZWQsICM1NmNjZjIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjgwZWQsICM1NmNjZjIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTZjY2YyO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmY4MGVkLCAjNTZjY2YyKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmY4MGVkLCAjNTZjY2YyKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4uZ3JheS1iYW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/test/test.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/test/test.page.ts ***!
    \*****************************************/

  /*! exports provided: TestPage */

  /***/
  function srcAppPagesTestTestPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TestPage", function () {
      return TestPage;
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


    var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/menu/menu.component */
    "./src/app/components/menu/menu.component.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var flatted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! flatted */
    "./node_modules/flatted/esm/index.js");

    var TestPage =
    /*#__PURE__*/
    function () {
      function TestPage(route, router, util, alertCtrl, modalController, api) {
        _classCallCheck(this, TestPage);

        this.route = route;
        this.router = router;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.api = api;
        this.age_recomendation = [];
        this.gender_recomendation = [];
        this.showContent1 = false;
        this.addToBucket = [];
        this.newBucketArray = [];
        this.pushSecondaryLabs = [];
        this.finalLabs = [];
        this.reviews = [];
        this.facilities = [];
        this.associated_tests = [];
        this.primary_lab = [];
        this.all_labs = [];
        this.secondary_labs = [];
        this.associated_test = [];
        this.all_tests = [];
        this.paramarr = [];
        this.testid = "";
        this.testname = "";
        this.total_parameter_count = 0;
        this.status = 'Description';
        this.tab = -1; // this.getIndividualTest();

        this.getFacilities(); // this.getAssociatedTests();

        this.getReviews();
      }

      _createClass(TestPage, [{
        key: "showContent",
        value: function showContent(item) {
          return this.tab === item;
        }
      }, {
        key: "showMilestone",
        value: function showMilestone(item) {
          this.tab = item;
        }
      }, {
        key: "showMilestone1",
        value: function showMilestone1() {
          this.showContent1 = !this.showContent1;
        }
      }, {
        key: "getIndividualTest",
        value: function getIndividualTest() {
          var _this = this;

          this.api.getAllIndividualTest().then(function (data) {
            _this.all_tests = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "book",
        value: function book() {
          this.util.show('Please wait....');
          var prdexist = false;

          if (this.addToBucket.length > 0) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.addToBucket[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var x = _step.value;

                if (x == this.testid) {
                  prdexist = true;
                }
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          if (prdexist == false) {
            this.addToBucket.push(this.testid);
            this.newBucketArray.push(this.testname);
            localStorage.setItem('addToBucket', this.addToBucket);
            localStorage.setItem('newBucketArray', this.newBucketArray);
          }
          /* this.pincode = localStorage.getItem('pincode');
           if(this.pincode == undefined){
             this.pincode = localStorage.getItem('current_pincode');
           }*/


          this.util.hide();
          console.log(this.addToBucket);
          console.log(this.newBucketArray); // this.searchLabs2();

          this.searchLabs3();
        }
      }, {
        key: "searchLabs2",
        value: function searchLabs2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    if (!(this.addToBucket.length === 0)) {
                      _context6.next = 5;
                      break;
                    }

                    this.util.showToast('Select your test', 'danger', 'bottom');
                    return _context6.abrupt("return", false);

                  case 5:
                    if (!(this.pincode === '' || this.pincode == null)) {
                      _context6.next = 8;
                      break;
                    }

                    this.util.showToast('Pincode is required', 'danger', 'bottom');
                    return _context6.abrupt("return", false);

                  case 8:
                    console.log(this.pincode);
                    _context6.next = 11;
                    return this.api.getSecondaryLabsByPin(this.pincode).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee5() {
                        var _this3 = this;

                        var i;
                        return regeneratorRuntime.wrap(function _callee5$(_context5) {
                          while (1) {
                            switch (_context5.prev = _context5.next) {
                              case 0:
                                this.secondary_labs = data;

                                if (!(this.secondary_labs.length === 0)) {
                                  _context5.next = 4;
                                  break;
                                }

                                this.util.showToast('There are no labs found for this pincode', 'danger', 'bottom');
                                return _context5.abrupt("return", false);

                              case 4:
                                console.log(this.secondary_labs);
                                console.log(this.addToBucket);
                                this.associated_test = [];

                                if (!data) {
                                  _context5.next = 13;
                                  break;
                                }

                                i = 1;
                                _context5.next = 11;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee4() {
                                    var _this4 = this;

                                    var j, _iteratorNormalCompletion2, _didIteratorError2, _iteratorError2, _iterator2, _step2, y;

                                    return regeneratorRuntime.wrap(function _callee4$(_context4) {
                                      while (1) {
                                        switch (_context4.prev = _context4.next) {
                                          case 0:
                                            console.log(element.primarylab);
                                            _context4.next = 3;
                                            return this.api.getVenueDetails(element.primarylab).then(function (data6) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee() {
                                                return regeneratorRuntime.wrap(function _callee$(_context) {
                                                  while (1) {
                                                    switch (_context.prev = _context.next) {
                                                      case 0:
                                                        console.log(data6);

                                                        if (data6) {
                                                          element.primarylabdata = data6;
                                                          element.primarylogo = data6.logo;
                                                        }

                                                      case 2:
                                                      case "end":
                                                        return _context.stop();
                                                    }
                                                  }
                                                }, _callee);
                                              }));
                                            }).catch(function (error) {
                                              _this4.util.hide();

                                              console.log(error);
                                            });

                                          case 3:
                                            console.log(element);
                                            j = 1;
                                            _iteratorNormalCompletion2 = true;
                                            _didIteratorError2 = false;
                                            _iteratorError2 = undefined;
                                            _context4.prev = 8;
                                            _iterator2 = this.addToBucket[Symbol.iterator]();

                                          case 10:
                                            if (_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done) {
                                              _context4.next = 19;
                                              break;
                                            }

                                            y = _step2.value;
                                            console.log(y);
                                            _context4.next = 15;
                                            return this.api.getAssociatedTestByProductAndBranch(element.uid, y).then(function (data1) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee3() {
                                                var _this5 = this;

                                                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                                                  while (1) {
                                                    switch (_context3.prev = _context3.next) {
                                                      case 0:
                                                        console.log(data1);

                                                        if (!(data1.length > 0)) {
                                                          _context3.next = 6;
                                                          break;
                                                        }

                                                        _context3.next = 4;
                                                        return this.api.getLabTestById(data1[0].individual_test).then(function (data2) {
                                                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this5, void 0, void 0,
                                                          /*#__PURE__*/
                                                          regeneratorRuntime.mark(function _callee2() {
                                                            return regeneratorRuntime.wrap(function _callee2$(_context2) {
                                                              while (1) {
                                                                switch (_context2.prev = _context2.next) {
                                                                  case 0:
                                                                    if (data2.length > 0) {
                                                                      data1[0].itid = data2[0];
                                                                    }

                                                                  case 1:
                                                                  case "end":
                                                                    return _context2.stop();
                                                                }
                                                              }
                                                            }, _callee2);
                                                          }));
                                                        }).catch(function (error) {
                                                          _this5.util.hide();

                                                          console.log(error);
                                                        });

                                                      case 4:
                                                        this.associated_test.push(data1[0]);
                                                        console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);

                                                      case 6:
                                                        if (!(i == this.secondary_labs.length && j == this.addToBucket.length)) {
                                                          _context3.next = 9;
                                                          break;
                                                        }

                                                        _context3.next = 9;
                                                        return this.searchLabs3();

                                                      case 9:
                                                      case "end":
                                                        return _context3.stop();
                                                    }
                                                  }
                                                }, _callee3, this);
                                              }));
                                            }).catch(function (error) {
                                              _this4.util.hide();

                                              console.log(error);
                                            });

                                          case 15:
                                            j++;

                                          case 16:
                                            _iteratorNormalCompletion2 = true;
                                            _context4.next = 10;
                                            break;

                                          case 19:
                                            _context4.next = 25;
                                            break;

                                          case 21:
                                            _context4.prev = 21;
                                            _context4.t0 = _context4["catch"](8);
                                            _didIteratorError2 = true;
                                            _iteratorError2 = _context4.t0;

                                          case 25:
                                            _context4.prev = 25;
                                            _context4.prev = 26;

                                            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                                              _iterator2.return();
                                            }

                                          case 28:
                                            _context4.prev = 28;

                                            if (!_didIteratorError2) {
                                              _context4.next = 31;
                                              break;
                                            }

                                            throw _iteratorError2;

                                          case 31:
                                            return _context4.finish(28);

                                          case 32:
                                            return _context4.finish(25);

                                          case 33:
                                            if (!(i == this.secondary_labs.length && this.associated_test.length == 0)) {
                                              _context4.next = 36;
                                              break;
                                            }

                                            _context4.next = 36;
                                            return this.searchLabs3();

                                          case 36:
                                            i++;

                                          case 37:
                                          case "end":
                                            return _context4.stop();
                                        }
                                      }
                                    }, _callee4, this, [[8, 21, 25, 33], [26,, 28, 32]]);
                                  }));
                                });

                              case 11:
                                _context5.next = 15;
                                break;

                              case 13:
                                _context5.next = 15;
                                return this.searchLabs3();

                              case 15:
                              case "end":
                                return _context5.stop();
                            }
                          }
                        }, _callee5, this);
                      }));
                    }).catch(function (error) {
                      _this2.util.hide();

                      console.log(error);
                    });

                  case 11:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "searchLabs3",
        value: function searchLabs3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this6 = this;

            var newSortedArray, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, x, circularReplacer, arr, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, _x5, jsonString;

            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    /*if (this.addToBucket.length === 0) {
                      this.util.showToast('Select your test', 'danger', 'bottom');
                      return false;
                    } else if (this.pincode === '') {
                      this.util.showToast('Pincode is required', 'danger', 'bottom');
                      return false;
                    }*/
                    this.util.show('Please wait....');
                    /*  let lat;
                      let lng;
                    if(this.pincode == localStorage.getItem('current_pincode')){
                      lat = localStorage.getItem('lat');
                      lng = localStorage.getItem('lng');
                    } else {
                      var geocoder = new google.maps.Geocoder();
                      var address = this.pincode;
                      await geocoder.geocode({ 'address': address }, function (results, status) {
                        if (status == google.maps.GeocoderStatus.OK) {
                          var latitude = results[0].geometry.location.lat();
                          var longitude = results[0].geometry.location.lng();
                          lat = latitude;
                          lng = longitude;
                          // alert("Latitude: " + latitude + "\nLongitude: " + longitude);
                        } else {
                            alert("Request failed.")
                        }
                      });
                    }*/

                    console.log(this.secondary_labs); // console.log(this.associated_test);

                    _context8.next = 4;
                    return this.secondary_labs.forEach(function (element) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this6, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee7() {
                        var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, _x, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _x2, is_available, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, y, test2data, difference, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _x3, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, _y, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _x4, avgrate, rating_length, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, x;

                        return regeneratorRuntime.wrap(function _callee7$(_context7) {
                          while (1) {
                            switch (_context7.prev = _context7.next) {
                              case 0:
                                price = 0;
                                selling_price = 0;
                                all_test_data = [];
                                all_test1_data = [];
                                available_test = [];
                                not_available_test = [];
                                console.log(this.associated_test);
                                _iteratorNormalCompletion3 = true;
                                _didIteratorError3 = false;
                                _iteratorError3 = undefined;
                                _context7.prev = 10;

                                for (_iterator3 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                  _x = _step3.value;

                                  if (_x.branch_id == element.uid) {
                                    console.log('available data');
                                    all_test_data.push(_x);
                                    available_test.push(_x.itid.test_name);
                                    price += _x.price;
                                    selling_price += _x.selling_price;
                                  }
                                }

                                _context7.next = 18;
                                break;

                              case 14:
                                _context7.prev = 14;
                                _context7.t0 = _context7["catch"](10);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context7.t0;

                              case 18:
                                _context7.prev = 18;
                                _context7.prev = 19;

                                if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                  _iterator3.return();
                                }

                              case 21:
                                _context7.prev = 21;

                                if (!_didIteratorError3) {
                                  _context7.next = 24;
                                  break;
                                }

                                throw _iteratorError3;

                              case 24:
                                return _context7.finish(21);

                              case 25:
                                return _context7.finish(18);

                              case 26:
                                _iteratorNormalCompletion4 = true;
                                _didIteratorError4 = false;
                                _iteratorError4 = undefined;
                                _context7.prev = 29;
                                _iterator4 = this.addToBucket[Symbol.iterator]();

                              case 31:
                                if (_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done) {
                                  _context7.next = 59;
                                  break;
                                }

                                _x2 = _step4.value;
                                is_available = false;
                                console.log(_x2);
                                _iteratorNormalCompletion8 = true;
                                _didIteratorError8 = false;
                                _iteratorError8 = undefined;
                                _context7.prev = 38;

                                for (_iterator8 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                  y = _step8.value;
                                  console.log(_x2 + "==" + y.individual_test);

                                  if (_x2 == y.individual_test) {
                                    is_available = true;
                                  }
                                }

                                _context7.next = 46;
                                break;

                              case 42:
                                _context7.prev = 42;
                                _context7.t1 = _context7["catch"](38);
                                _didIteratorError8 = true;
                                _iteratorError8 = _context7.t1;

                              case 46:
                                _context7.prev = 46;
                                _context7.prev = 47;

                                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                                  _iterator8.return();
                                }

                              case 49:
                                _context7.prev = 49;

                                if (!_didIteratorError8) {
                                  _context7.next = 52;
                                  break;
                                }

                                throw _iteratorError8;

                              case 52:
                                return _context7.finish(49);

                              case 53:
                                return _context7.finish(46);

                              case 54:
                                console.log(is_available);

                                if (is_available == false) {
                                  all_test1_data.push(_x2);
                                }

                              case 56:
                                _iteratorNormalCompletion4 = true;
                                _context7.next = 31;
                                break;

                              case 59:
                                _context7.next = 65;
                                break;

                              case 61:
                                _context7.prev = 61;
                                _context7.t2 = _context7["catch"](29);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context7.t2;

                              case 65:
                                _context7.prev = 65;
                                _context7.prev = 66;

                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                  _iterator4.return();
                                }

                              case 68:
                                _context7.prev = 68;

                                if (!_didIteratorError4) {
                                  _context7.next = 71;
                                  break;
                                }

                                throw _iteratorError4;

                              case 71:
                                return _context7.finish(68);

                              case 72:
                                return _context7.finish(65);

                              case 73:
                                console.log(all_test1_data);
                                test2data = []; //newBucketArray

                                difference = this.newBucketArray.filter(function (x) {
                                  return !available_test.includes(x);
                                });
                                not_available_test.push(difference);
                                test2data.push(difference); // for(var x of this.newBucketArray){
                                //   for(var y of available_test){
                                //     if(x.trim() != y.trim()){
                                //       not_available_test.push(x.trim());
                                //       test2data.push(x);
                                //     }
                                //   }
                                // }
                                // for (let x of this.associated_tests){
                                //   for(var y of all_test1_data){
                                //     if(x.individual_test == y){
                                //       test2data.push(x);
                                //       not_available_test.push(x.itid.test_name);
                                //     }
                                //   }
                                // } 

                                all_test1_data = test2data;
                                average_rating = 0;
                                element.test_data = all_test_data;
                                element.test1_data = all_test1_data;
                                element.available_test = available_test;
                                element.not_available_test = not_available_test;
                                element.price = price;
                                element.selling_price = selling_price; //var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                                distance = 0;
                                element.distance = distance;
                                rating_array = [];
                                facilities = [];
                                _iteratorNormalCompletion5 = true;
                                _didIteratorError5 = false;
                                _iteratorError5 = undefined;
                                _context7.prev = 93;
                                _iterator5 = this.facilities[Symbol.iterator]();

                              case 95:
                                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                  _context7.next = 119;
                                  break;
                                }

                                _x3 = _step5.value;
                                _iteratorNormalCompletion9 = true;
                                _didIteratorError9 = false;
                                _iteratorError9 = undefined;
                                _context7.prev = 100;

                                for (_iterator9 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                  _y = _step9.value;

                                  if (_x3.id == _y) {
                                    facilities.push(_x3);
                                  }
                                }

                                _context7.next = 108;
                                break;

                              case 104:
                                _context7.prev = 104;
                                _context7.t3 = _context7["catch"](100);
                                _didIteratorError9 = true;
                                _iteratorError9 = _context7.t3;

                              case 108:
                                _context7.prev = 108;
                                _context7.prev = 109;

                                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                  _iterator9.return();
                                }

                              case 111:
                                _context7.prev = 111;

                                if (!_didIteratorError9) {
                                  _context7.next = 114;
                                  break;
                                }

                                throw _iteratorError9;

                              case 114:
                                return _context7.finish(111);

                              case 115:
                                return _context7.finish(108);

                              case 116:
                                _iteratorNormalCompletion5 = true;
                                _context7.next = 95;
                                break;

                              case 119:
                                _context7.next = 125;
                                break;

                              case 121:
                                _context7.prev = 121;
                                _context7.t4 = _context7["catch"](93);
                                _didIteratorError5 = true;
                                _iteratorError5 = _context7.t4;

                              case 125:
                                _context7.prev = 125;
                                _context7.prev = 126;

                                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                  _iterator5.return();
                                }

                              case 128:
                                _context7.prev = 128;

                                if (!_didIteratorError5) {
                                  _context7.next = 131;
                                  break;
                                }

                                throw _iteratorError5;

                              case 131:
                                return _context7.finish(128);

                              case 132:
                                return _context7.finish(125);

                              case 133:
                                console.log(facilities);
                                element.facilities = facilities;
                                _iteratorNormalCompletion6 = true;
                                _didIteratorError6 = false;
                                _iteratorError6 = undefined;
                                _context7.prev = 138;

                                for (_iterator6 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                                  _x4 = _step6.value;

                                  if (_x4.lab_id == element.id) {
                                    rating_array.push(_x4);
                                  }
                                }

                                _context7.next = 146;
                                break;

                              case 142:
                                _context7.prev = 142;
                                _context7.t5 = _context7["catch"](138);
                                _didIteratorError6 = true;
                                _iteratorError6 = _context7.t5;

                              case 146:
                                _context7.prev = 146;
                                _context7.prev = 147;

                                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                  _iterator6.return();
                                }

                              case 149:
                                _context7.prev = 149;

                                if (!_didIteratorError6) {
                                  _context7.next = 152;
                                  break;
                                }

                                throw _iteratorError6;

                              case 152:
                                return _context7.finish(149);

                              case 153:
                                return _context7.finish(146);

                              case 154:
                                element.total_reviews = 0;

                                if (!(rating_array.length > 0)) {
                                  _context7.next = 179;
                                  break;
                                }

                                avgrate = 0;
                                rating_length = rating_array.length;
                                _iteratorNormalCompletion7 = true;
                                _didIteratorError7 = false;
                                _iteratorError7 = undefined;
                                _context7.prev = 161;

                                for (_iterator7 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                  x = _step7.value;
                                  avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                }

                                _context7.next = 169;
                                break;

                              case 165:
                                _context7.prev = 165;
                                _context7.t6 = _context7["catch"](161);
                                _didIteratorError7 = true;
                                _iteratorError7 = _context7.t6;

                              case 169:
                                _context7.prev = 169;
                                _context7.prev = 170;

                                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                  _iterator7.return();
                                }

                              case 172:
                                _context7.prev = 172;

                                if (!_didIteratorError7) {
                                  _context7.next = 175;
                                  break;
                                }

                                throw _iteratorError7;

                              case 175:
                                return _context7.finish(172);

                              case 176:
                                return _context7.finish(169);

                              case 177:
                                average_rating = avgrate / rating_length;
                                element.total_reviews = rating_array.length;

                              case 179:
                                element.average_rating = average_rating;

                              case 180:
                              case "end":
                                return _context7.stop();
                            }
                          }
                        }, _callee7, this, [[10, 14, 18, 26], [19,, 21, 25], [29, 61, 65, 73], [38, 42, 46, 54], [47,, 49, 53], [66,, 68, 72], [93, 121, 125, 133], [100, 104, 108, 116], [109,, 111, 115], [126,, 128, 132], [138, 142, 146, 154], [147,, 149, 153], [161, 165, 169, 177], [170,, 172, 176]]);
                      }));
                    });

                  case 4:
                    console.log(this.secondary_labs); // return false;

                    this.secondary_labs.sort(this.compare);
                    newSortedArray = [];
                    _iteratorNormalCompletion10 = true;
                    _didIteratorError10 = false;
                    _iteratorError10 = undefined;
                    _context8.prev = 10;

                    for (_iterator10 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                      x = _step10.value;

                      if (x.test_data.length > 0) {
                        newSortedArray.push(x);
                      }
                    }

                    _context8.next = 18;
                    break;

                  case 14:
                    _context8.prev = 14;
                    _context8.t0 = _context8["catch"](10);
                    _didIteratorError10 = true;
                    _iteratorError10 = _context8.t0;

                  case 18:
                    _context8.prev = 18;
                    _context8.prev = 19;

                    if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                      _iterator10.return();
                    }

                  case 21:
                    _context8.prev = 21;

                    if (!_didIteratorError10) {
                      _context8.next = 24;
                      break;
                    }

                    throw _iteratorError10;

                  case 24:
                    return _context8.finish(21);

                  case 25:
                    return _context8.finish(18);

                  case 26:
                    this.secondary_labs = newSortedArray;
                    console.log(this.secondary_labs);
                    console.log(this.newBucketArray);
                    console.log(this.addToBucket);

                    circularReplacer = function circularReplacer() {
                      // Creating new WeakSet to keep 
                      // track of previously seen objects
                      var seen = new WeakSet();
                      return function (key, value) {
                        // If type of value is an 
                        // object or value is null
                        if (typeof value === "object" && value !== null) {
                          // If it has been seen before
                          if (seen.has(value)) {
                            return;
                          } // Add current value to the set


                          seen.add(value);
                        } // return the value


                        return value;
                      };
                    };

                    arr = [];
                    _iteratorNormalCompletion11 = true;
                    _didIteratorError11 = false;
                    _iteratorError11 = undefined;
                    _context8.prev = 35;

                    for (_iterator11 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      _x5 = _step11.value;
                      arr.push({
                        address: _x5.address,
                        available_test: _x5.available_test,
                        cod: _x5.cod,
                        cover: _x5.cover,
                        distance: _x5.distance,
                        price: _x5.price,
                        selling_price: _x5.selling_price,
                        total_reviews: _x5.total_reviews,
                        facilities: _x5.facilities,
                        id: _x5.id,
                        //lat:x.lat,
                        // lng:x.lng,
                        name: _x5.name,
                        lab_timings: _x5.lab_timings,
                        not_available_test: _x5.not_available_test,
                        logo: _x5.logo,
                        range_price: _x5.range_price,
                        service_delivery: _x5.service_delivery,
                        test1_data: _x5.test1_data,
                        test_data: _x5.test_data,
                        free_charge: _x5.free_charge,
                        page_slug: _x5.page_slug,
                        primarylogo: _x5.primarylogo,
                        primarylabdata: _x5.primarylabdata
                      });
                    }

                    _context8.next = 43;
                    break;

                  case 39:
                    _context8.prev = 39;
                    _context8.t1 = _context8["catch"](35);
                    _didIteratorError11 = true;
                    _iteratorError11 = _context8.t1;

                  case 43:
                    _context8.prev = 43;
                    _context8.prev = 44;

                    if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                      _iterator11.return();
                    }

                  case 46:
                    _context8.prev = 46;

                    if (!_didIteratorError11) {
                      _context8.next = 49;
                      break;
                    }

                    throw _iteratorError11;

                  case 49:
                    return _context8.finish(46);

                  case 50:
                    return _context8.finish(43);

                  case 51:
                    jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(arr);
                    localStorage.setItem('labsdata', jsonString);
                    localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(this.newBucketArray));
                    localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(this.addToBucket));
                    this.util.hide();
                    this.router.navigate(['search-labs']);

                  case 57:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this, [[10, 14, 18, 26], [19,, 21, 25], [35, 39, 43, 51], [44,, 46, 50]]);
          }));
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          console.log("I am here");
          var id = localStorage.getItem('testid');
          this.testid = localStorage.getItem('testid');
          this.testname = localStorage.getItem('testname');
          console.log(this.testname); // this.addToBucket.push(id);
          // localStorage.setItem('addToBucket',this.addToBucket);

          this.pincode = localStorage.getItem('pincode');
          this.api.getIndividualTestById(id).then(function (data) {
            _this7.test = data[0];
            console.log(_this7.test);

            if (_this7.test.parameter.length > 0) {
              var outer_parameter_count = '';
              var inner_parameter_count = '';
              var outer_param = [];
              var inner_param = [];
              var arr = [];
              var outer_parameter_id = '';
              var inner_parameter_id = '';
              var inner_page_slug = '';
              var _iteratorNormalCompletion12 = true;
              var _didIteratorError12 = false;
              var _iteratorError12 = undefined;

              try {
                for (var _iterator12 = _this7.test.parameter[Symbol.iterator](), _step12; !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                  var x = _step12.value;
                  // console.log(x)
                  var count = 0;
                  var _iteratorNormalCompletion13 = true;
                  var _didIteratorError13 = false;
                  var _iteratorError13 = undefined;

                  try {
                    for (var _iterator13 = _this7.all_tests[Symbol.iterator](), _step13; !(_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done); _iteratorNormalCompletion13 = true) {
                      var y = _step13.value;

                      if (x.item_id == y.id) {
                        console.log(y.parameter.length);
                        _this7.total_parameter_count = _this7.total_parameter_count + y.parameter.length;
                        console.log(_this7.total_parameter_count); // outer_parameter_count = this.test.parameter.length;
                        // inner_param = y.parameter;
                        // inner_parameter_count = y.parameter.length;
                        // outer_param = this.test.parameter;
                        // outer_parameter_id = x.item_id;
                        // inner_parameter_id = y.id;
                        // inner_page_slug: x.page_slug;
                      }
                    } // arr.push({
                    //   outer_parameter_count:outer_parameter_count,
                    //   inner_param:inner_param,
                    //   inner_parameter_count:inner_parameter_count,
                    //   outer_param:outer_param,
                    //   outer_parameter_id:outer_parameter_id,
                    //   inner_parameter_id:inner_parameter_id,
                    //   inner_page_slug:inner_page_slug
                    // })

                  } catch (err) {
                    _didIteratorError13 = true;
                    _iteratorError13 = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                        _iterator13.return();
                      }
                    } finally {
                      if (_didIteratorError13) {
                        throw _iteratorError13;
                      }
                    }
                  }

                  console.log(arr);
                }
              } catch (err) {
                _didIteratorError12 = true;
                _iteratorError12 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                    _iterator12.return();
                  }
                } finally {
                  if (_didIteratorError12) {
                    throw _iteratorError12;
                  }
                }
              }

              console.log(_this7.total_parameter_count); // this.paramarr = arr;
              // console.log(this.paramarr)
            } else {
              _this7.test.parameter.push({
                item_id: 1,
                item_text: _this7.test.test_name
              });
            } // this.newBucketArray.push(this.test.test_name)
            //localStorage.setItem('newBucketArray',this.newBucketArray)


            var test_recommended_for = [];
            var recommended_age = [];
            test_recommended_for = _this7.test.test_recommended_for;
            recommended_age = _this7.test.recommended_age;
            console.log(test_recommended_for);
            console.log(recommended_age);

            _this7.getAgeRecomendation(recommended_age);

            _this7.getGenderRecomendation(test_recommended_for);
          }).catch(function (error) {
            console.log(error);
          });
        } //open Tab

      }, {
        key: "openTab",
        value: function openTab(tabName) {
          this.status = tabName;
          var v = document.getElementsByClassName(tabName);
          var i;
          var x = document.getElementsByClassName("section");
          console.log(x);

          for (i = 0; i < x.length; i++) {
            x[i].classList.add("invisible");
          }

          v[0].classList.remove("invisible");
        }
      }, {
        key: "getAgeRecomendation",
        value: function getAgeRecomendation(arr) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, x;

            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    _iteratorNormalCompletion14 = true;
                    _didIteratorError14 = false;
                    _iteratorError14 = undefined;
                    _context9.prev = 3;

                    for (_iterator14 = arr[Symbol.iterator](); !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                      x = _step14.value;
                      this.age_recomendation.push(x.item_text);
                      console.log(this.age_recomendation); // await this.api.getAgeRecomendationById(x).then(async(data) => {
                      //   this.age_recomendation.push(data[0].name);
                      //   console.log(this.age_recomendation);
                      // }).catch(error => {
                      //   console.log(error);
                      // });
                    }

                    _context9.next = 11;
                    break;

                  case 7:
                    _context9.prev = 7;
                    _context9.t0 = _context9["catch"](3);
                    _didIteratorError14 = true;
                    _iteratorError14 = _context9.t0;

                  case 11:
                    _context9.prev = 11;
                    _context9.prev = 12;

                    if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                      _iterator14.return();
                    }

                  case 14:
                    _context9.prev = 14;

                    if (!_didIteratorError14) {
                      _context9.next = 17;
                      break;
                    }

                    throw _iteratorError14;

                  case 17:
                    return _context9.finish(14);

                  case 18:
                    return _context9.finish(11);

                  case 19:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this, [[3, 7, 11, 19], [12,, 14, 18]]);
          }));
        }
      }, {
        key: "getGenderRecomendation",
        value: function getGenderRecomendation(arr) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee11() {
            var _this8 = this;

            var _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, x;

            return regeneratorRuntime.wrap(function _callee11$(_context11) {
              while (1) {
                switch (_context11.prev = _context11.next) {
                  case 0:
                    _iteratorNormalCompletion15 = true;
                    _didIteratorError15 = false;
                    _iteratorError15 = undefined;
                    _context11.prev = 3;
                    _iterator15 = arr[Symbol.iterator]();

                  case 5:
                    if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
                      _context11.next = 12;
                      break;
                    }

                    x = _step15.value;
                    _context11.next = 9;
                    return this.api.getGenderRecomendationById(x).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this8, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee10() {
                        return regeneratorRuntime.wrap(function _callee10$(_context10) {
                          while (1) {
                            switch (_context10.prev = _context10.next) {
                              case 0:
                                this.gender_recomendation.push(data[0].name);
                                console.log(this.gender_recomendation);

                              case 2:
                              case "end":
                                return _context10.stop();
                            }
                          }
                        }, _callee10, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 9:
                    _iteratorNormalCompletion15 = true;
                    _context11.next = 5;
                    break;

                  case 12:
                    _context11.next = 18;
                    break;

                  case 14:
                    _context11.prev = 14;
                    _context11.t0 = _context11["catch"](3);
                    _didIteratorError15 = true;
                    _iteratorError15 = _context11.t0;

                  case 18:
                    _context11.prev = 18;
                    _context11.prev = 19;

                    if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                      _iterator15.return();
                    }

                  case 21:
                    _context11.prev = 21;

                    if (!_didIteratorError15) {
                      _context11.next = 24;
                      break;
                    }

                    throw _iteratorError15;

                  case 24:
                    return _context11.finish(21);

                  case 25:
                    return _context11.finish(18);

                  case 26:
                  case "end":
                    return _context11.stop();
                }
              }
            }, _callee11, this, [[3, 14, 18, 26], [19,, 21, 25]]);
          }));
        }
      }, {
        key: "openQuery",
        value: function openQuery() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var modal;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    _context12.next = 2;
                    return this.modalController.create({
                      component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                      cssClass: 'supportCss'
                    });

                  case 2:
                    modal = _context12.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context12.next = 6;
                    return modal.present();

                  case 6:
                    return _context12.abrupt("return", _context12.sent);

                  case 7:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "getAssociatedTests",
        value: function getAssociatedTests() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this9 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    _context14.next = 2;
                    return this.api.getAssociatedTests().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this9, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee13() {
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                // console.log(data);
                                this.associated_tests = data;

                              case 1:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "getFacilities",
        value: function getFacilities() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this10 = this;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    _context16.next = 2;
                    return this.api.getFacilities().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this10, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee15() {
                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                // console.log(data);
                                this.facilities = data;

                              case 1:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this11 = this;

          this.api.getReviews().then(function (data) {
            // console.log(data);
            _this11.reviews = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "searchLabs",
        value: function searchLabs() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this12 = this;

            var lat, lng;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.util.show('Please wait....');
                    this.secondary_labs = []; // localStorage.removeItem('addToBucket');
                    // localStorage.removeItem('newBucketArray');
                    // localStorage.removeItem('labsdata');

                    lat = localStorage.getItem('lat');
                    lng = localStorage.getItem('lng');
                    _context19.next = 6;
                    return this.getAssociatedTest();

                  case 6:
                    _context19.next = 8;
                    return this.api.getSecondaryLabs().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee18() {
                        var _this13 = this;

                        var pincode, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, x, delivery_pincode, _iteratorNormalCompletion27, _didIteratorError27, _iteratorError27, _iterator27, _step27, y, newSortedArray, _iteratorNormalCompletion26, _didIteratorError26, _iteratorError26, _iterator26, _step26, _x11;

                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                this.all_labs = data;
                                pincode = [];
                                this.util.hide();
                                _iteratorNormalCompletion16 = true;
                                _didIteratorError16 = false;
                                _iteratorError16 = undefined;
                                _context18.prev = 6;
                                _iterator16 = this.all_labs[Symbol.iterator]();

                              case 8:
                                if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
                                  _context18.next = 33;
                                  break;
                                }

                                x = _step16.value;
                                delivery_pincode = [];
                                _iteratorNormalCompletion27 = true;
                                _didIteratorError27 = false;
                                _iteratorError27 = undefined;
                                _context18.prev = 14;

                                for (_iterator27 = x.delivery_pincode[Symbol.iterator](); !(_iteratorNormalCompletion27 = (_step27 = _iterator27.next()).done); _iteratorNormalCompletion27 = true) {
                                  y = _step27.value;

                                  if (y.item_text == this.pincode) {
                                    // console.log('matched')
                                    this.secondary_labs.push(x);
                                  }
                                }

                                _context18.next = 22;
                                break;

                              case 18:
                                _context18.prev = 18;
                                _context18.t0 = _context18["catch"](14);
                                _didIteratorError27 = true;
                                _iteratorError27 = _context18.t0;

                              case 22:
                                _context18.prev = 22;
                                _context18.prev = 23;

                                if (!_iteratorNormalCompletion27 && _iterator27.return != null) {
                                  _iterator27.return();
                                }

                              case 25:
                                _context18.prev = 25;

                                if (!_didIteratorError27) {
                                  _context18.next = 28;
                                  break;
                                }

                                throw _iteratorError27;

                              case 28:
                                return _context18.finish(25);

                              case 29:
                                return _context18.finish(22);

                              case 30:
                                _iteratorNormalCompletion16 = true;
                                _context18.next = 8;
                                break;

                              case 33:
                                _context18.next = 39;
                                break;

                              case 35:
                                _context18.prev = 35;
                                _context18.t1 = _context18["catch"](6);
                                _didIteratorError16 = true;
                                _iteratorError16 = _context18.t1;

                              case 39:
                                _context18.prev = 39;
                                _context18.prev = 40;

                                if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                                  _iterator16.return();
                                }

                              case 42:
                                _context18.prev = 42;

                                if (!_didIteratorError16) {
                                  _context18.next = 45;
                                  break;
                                }

                                throw _iteratorError16;

                              case 45:
                                return _context18.finish(42);

                              case 46:
                                return _context18.finish(39);

                              case 47:
                                _context18.next = 49;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee17() {
                                    var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _x6, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, _x7, is_available, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, y, test2data, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, _x8, _iteratorNormalCompletion24, _didIteratorError24, _iteratorError24, _iterator24, _step24, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _x9, _iteratorNormalCompletion25, _didIteratorError25, _iteratorError25, _iterator25, _step25, _y2, _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, _x10, avgrate, rating_length, _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, x;

                                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                      while (1) {
                                        switch (_context17.prev = _context17.next) {
                                          case 0:
                                            price = 0;
                                            selling_price = 0;
                                            all_test_data = [];
                                            all_test1_data = [];
                                            available_test = [];
                                            not_available_test = [];
                                            _iteratorNormalCompletion17 = true;
                                            _didIteratorError17 = false;
                                            _iteratorError17 = undefined;
                                            _context17.prev = 9;

                                            for (_iterator17 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                              _x6 = _step17.value;

                                              // console.log(x);
                                              if (_x6.branch_id == element.uid) {
                                                // console.log('available data')
                                                all_test_data.push(_x6);
                                                available_test.push(_x6.itid.test_name);
                                                price += _x6.price;
                                                selling_price += _x6.selling_price;
                                              }
                                            }

                                            _context17.next = 17;
                                            break;

                                          case 13:
                                            _context17.prev = 13;
                                            _context17.t0 = _context17["catch"](9);
                                            _didIteratorError17 = true;
                                            _iteratorError17 = _context17.t0;

                                          case 17:
                                            _context17.prev = 17;
                                            _context17.prev = 18;

                                            if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                                              _iterator17.return();
                                            }

                                          case 20:
                                            _context17.prev = 20;

                                            if (!_didIteratorError17) {
                                              _context17.next = 23;
                                              break;
                                            }

                                            throw _iteratorError17;

                                          case 23:
                                            return _context17.finish(20);

                                          case 24:
                                            return _context17.finish(17);

                                          case 25:
                                            _iteratorNormalCompletion18 = true;
                                            _didIteratorError18 = false;
                                            _iteratorError18 = undefined;
                                            _context17.prev = 28;
                                            _iterator18 = this.addToBucket[Symbol.iterator]();

                                          case 30:
                                            if (_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done) {
                                              _context17.next = 56;
                                              break;
                                            }

                                            _x7 = _step18.value;
                                            is_available = false;
                                            _iteratorNormalCompletion23 = true;
                                            _didIteratorError23 = false;
                                            _iteratorError23 = undefined;
                                            _context17.prev = 36;

                                            for (_iterator23 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                              y = _step23.value;

                                              if (_x7 == y.individual_test) {
                                                is_available = true;
                                              }
                                            }

                                            _context17.next = 44;
                                            break;

                                          case 40:
                                            _context17.prev = 40;
                                            _context17.t1 = _context17["catch"](36);
                                            _didIteratorError23 = true;
                                            _iteratorError23 = _context17.t1;

                                          case 44:
                                            _context17.prev = 44;
                                            _context17.prev = 45;

                                            if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                                              _iterator23.return();
                                            }

                                          case 47:
                                            _context17.prev = 47;

                                            if (!_didIteratorError23) {
                                              _context17.next = 50;
                                              break;
                                            }

                                            throw _iteratorError23;

                                          case 50:
                                            return _context17.finish(47);

                                          case 51:
                                            return _context17.finish(44);

                                          case 52:
                                            if (is_available == false) {
                                              all_test1_data.push(_x7);
                                            }

                                          case 53:
                                            _iteratorNormalCompletion18 = true;
                                            _context17.next = 30;
                                            break;

                                          case 56:
                                            _context17.next = 62;
                                            break;

                                          case 58:
                                            _context17.prev = 58;
                                            _context17.t2 = _context17["catch"](28);
                                            _didIteratorError18 = true;
                                            _iteratorError18 = _context17.t2;

                                          case 62:
                                            _context17.prev = 62;
                                            _context17.prev = 63;

                                            if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                                              _iterator18.return();
                                            }

                                          case 65:
                                            _context17.prev = 65;

                                            if (!_didIteratorError18) {
                                              _context17.next = 68;
                                              break;
                                            }

                                            throw _iteratorError18;

                                          case 68:
                                            return _context17.finish(65);

                                          case 69:
                                            return _context17.finish(62);

                                          case 70:
                                            test2data = [];
                                            _iteratorNormalCompletion19 = true;
                                            _didIteratorError19 = false;
                                            _iteratorError19 = undefined;
                                            _context17.prev = 74;
                                            _iterator19 = this.associated_tests[Symbol.iterator]();

                                          case 76:
                                            if (_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done) {
                                              _context17.next = 100;
                                              break;
                                            }

                                            _x8 = _step19.value;
                                            _iteratorNormalCompletion24 = true;
                                            _didIteratorError24 = false;
                                            _iteratorError24 = undefined;
                                            _context17.prev = 81;

                                            for (_iterator24 = all_test1_data[Symbol.iterator](); !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
                                              y = _step24.value;

                                              if (_x8.individual_test == y) {
                                                test2data.push(_x8);
                                                not_available_test.push(_x8.itid.test_name);
                                              }
                                            }

                                            _context17.next = 89;
                                            break;

                                          case 85:
                                            _context17.prev = 85;
                                            _context17.t3 = _context17["catch"](81);
                                            _didIteratorError24 = true;
                                            _iteratorError24 = _context17.t3;

                                          case 89:
                                            _context17.prev = 89;
                                            _context17.prev = 90;

                                            if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                                              _iterator24.return();
                                            }

                                          case 92:
                                            _context17.prev = 92;

                                            if (!_didIteratorError24) {
                                              _context17.next = 95;
                                              break;
                                            }

                                            throw _iteratorError24;

                                          case 95:
                                            return _context17.finish(92);

                                          case 96:
                                            return _context17.finish(89);

                                          case 97:
                                            _iteratorNormalCompletion19 = true;
                                            _context17.next = 76;
                                            break;

                                          case 100:
                                            _context17.next = 106;
                                            break;

                                          case 102:
                                            _context17.prev = 102;
                                            _context17.t4 = _context17["catch"](74);
                                            _didIteratorError19 = true;
                                            _iteratorError19 = _context17.t4;

                                          case 106:
                                            _context17.prev = 106;
                                            _context17.prev = 107;

                                            if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                                              _iterator19.return();
                                            }

                                          case 109:
                                            _context17.prev = 109;

                                            if (!_didIteratorError19) {
                                              _context17.next = 112;
                                              break;
                                            }

                                            throw _iteratorError19;

                                          case 112:
                                            return _context17.finish(109);

                                          case 113:
                                            return _context17.finish(106);

                                          case 114:
                                            all_test1_data = test2data;
                                            average_rating = 0;
                                            element.test_data = all_test_data;
                                            element.test1_data = all_test1_data;
                                            element.available_test = available_test;
                                            element.not_available_test = not_available_test;
                                            element.price = price;
                                            element.selling_price = selling_price; // console.log((lat +","+ lng+","+ element.lat+","+ element.lng));

                                            _context17.next = 124;
                                            return this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                                          case 124:
                                            distance = _context17.sent;
                                            // console.log(distance);
                                            element.distance = distance;
                                            rating_array = []; // var average_rating =[];

                                            facilities = [];
                                            _iteratorNormalCompletion20 = true;
                                            _didIteratorError20 = false;
                                            _iteratorError20 = undefined;
                                            _context17.prev = 131;
                                            _iterator20 = this.facilities[Symbol.iterator]();

                                          case 133:
                                            if (_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done) {
                                              _context17.next = 157;
                                              break;
                                            }

                                            _x9 = _step20.value;
                                            _iteratorNormalCompletion25 = true;
                                            _didIteratorError25 = false;
                                            _iteratorError25 = undefined;
                                            _context17.prev = 138;

                                            for (_iterator25 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                                              _y2 = _step25.value;

                                              if (_x9.id == _y2) {
                                                console.log(_x9);
                                                facilities.push(_x9);
                                              }
                                            }

                                            _context17.next = 146;
                                            break;

                                          case 142:
                                            _context17.prev = 142;
                                            _context17.t5 = _context17["catch"](138);
                                            _didIteratorError25 = true;
                                            _iteratorError25 = _context17.t5;

                                          case 146:
                                            _context17.prev = 146;
                                            _context17.prev = 147;

                                            if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                                              _iterator25.return();
                                            }

                                          case 149:
                                            _context17.prev = 149;

                                            if (!_didIteratorError25) {
                                              _context17.next = 152;
                                              break;
                                            }

                                            throw _iteratorError25;

                                          case 152:
                                            return _context17.finish(149);

                                          case 153:
                                            return _context17.finish(146);

                                          case 154:
                                            _iteratorNormalCompletion20 = true;
                                            _context17.next = 133;
                                            break;

                                          case 157:
                                            _context17.next = 163;
                                            break;

                                          case 159:
                                            _context17.prev = 159;
                                            _context17.t6 = _context17["catch"](131);
                                            _didIteratorError20 = true;
                                            _iteratorError20 = _context17.t6;

                                          case 163:
                                            _context17.prev = 163;
                                            _context17.prev = 164;

                                            if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                                              _iterator20.return();
                                            }

                                          case 166:
                                            _context17.prev = 166;

                                            if (!_didIteratorError20) {
                                              _context17.next = 169;
                                              break;
                                            }

                                            throw _iteratorError20;

                                          case 169:
                                            return _context17.finish(166);

                                          case 170:
                                            return _context17.finish(163);

                                          case 171:
                                            console.log(facilities);
                                            element.facilities = facilities;
                                            _iteratorNormalCompletion21 = true;
                                            _didIteratorError21 = false;
                                            _iteratorError21 = undefined;
                                            _context17.prev = 176;

                                            for (_iterator21 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                              _x10 = _step21.value;

                                              if (_x10.lab_id == element.id) {
                                                rating_array.push(_x10);
                                              }
                                            }

                                            _context17.next = 184;
                                            break;

                                          case 180:
                                            _context17.prev = 180;
                                            _context17.t7 = _context17["catch"](176);
                                            _didIteratorError21 = true;
                                            _iteratorError21 = _context17.t7;

                                          case 184:
                                            _context17.prev = 184;
                                            _context17.prev = 185;

                                            if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                                              _iterator21.return();
                                            }

                                          case 187:
                                            _context17.prev = 187;

                                            if (!_didIteratorError21) {
                                              _context17.next = 190;
                                              break;
                                            }

                                            throw _iteratorError21;

                                          case 190:
                                            return _context17.finish(187);

                                          case 191:
                                            return _context17.finish(184);

                                          case 192:
                                            element.total_reviews = 0;

                                            if (!(rating_array.length > 0)) {
                                              _context17.next = 217;
                                              break;
                                            }

                                            avgrate = 0;
                                            rating_length = rating_array.length;
                                            _iteratorNormalCompletion22 = true;
                                            _didIteratorError22 = false;
                                            _iteratorError22 = undefined;
                                            _context17.prev = 199;

                                            for (_iterator22 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                              x = _step22.value;
                                              avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                            }

                                            _context17.next = 207;
                                            break;

                                          case 203:
                                            _context17.prev = 203;
                                            _context17.t8 = _context17["catch"](199);
                                            _didIteratorError22 = true;
                                            _iteratorError22 = _context17.t8;

                                          case 207:
                                            _context17.prev = 207;
                                            _context17.prev = 208;

                                            if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                                              _iterator22.return();
                                            }

                                          case 210:
                                            _context17.prev = 210;

                                            if (!_didIteratorError22) {
                                              _context17.next = 213;
                                              break;
                                            }

                                            throw _iteratorError22;

                                          case 213:
                                            return _context17.finish(210);

                                          case 214:
                                            return _context17.finish(207);

                                          case 215:
                                            average_rating = avgrate / rating_length;
                                            element.total_reviews = rating_array.length;

                                          case 217:
                                            element.average_rating = average_rating;

                                          case 218:
                                          case "end":
                                            return _context17.stop();
                                        }
                                      }
                                    }, _callee17, this, [[9, 13, 17, 25], [18,, 20, 24], [28, 58, 62, 70], [36, 40, 44, 52], [45,, 47, 51], [63,, 65, 69], [74, 102, 106, 114], [81, 85, 89, 97], [90,, 92, 96], [107,, 109, 113], [131, 159, 163, 171], [138, 142, 146, 154], [147,, 149, 153], [164,, 166, 170], [176, 180, 184, 192], [185,, 187, 191], [199, 203, 207, 215], [208,, 210, 214]]);
                                  }));
                                });

                              case 49:
                                this.secondary_labs.sort(this.compare);
                                newSortedArray = [];
                                _iteratorNormalCompletion26 = true;
                                _didIteratorError26 = false;
                                _iteratorError26 = undefined;
                                _context18.prev = 54;

                                for (_iterator26 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion26 = (_step26 = _iterator26.next()).done); _iteratorNormalCompletion26 = true) {
                                  _x11 = _step26.value;
                                  newSortedArray.push({
                                    // accreditation: x.accreditation,
                                    address: _x11.address,
                                    available_test: _x11.available_test,
                                    cod: _x11.cod,
                                    cover: _x11.cover,
                                    distance: _x11.distance,
                                    price: _x11.price,
                                    selling_price: _x11.selling_price,
                                    total_reviews: _x11.total_reviews,
                                    // delivery_pincode:x.delivery_pincode,
                                    facilities: _x11.facilities,
                                    id: _x11.id,
                                    lat: _x11.lat,
                                    lng: _x11.lng,
                                    name: _x11.name,
                                    not_available_test: _x11.not_available_test,
                                    // phone:x.phone,
                                    primary: _x11.primarylab,
                                    logo: _x11.logo,
                                    range_price: _x11.range_price,
                                    service_delivery: _x11.service_delivery,
                                    test1_data: _x11.test1_data,
                                    test_data: _x11.test_data,
                                    free_charge: _x11.free_charge,
                                    page_slug: _x11.page_slug
                                  });
                                }

                                _context18.next = 62;
                                break;

                              case 58:
                                _context18.prev = 58;
                                _context18.t2 = _context18["catch"](54);
                                _didIteratorError26 = true;
                                _iteratorError26 = _context18.t2;

                              case 62:
                                _context18.prev = 62;
                                _context18.prev = 63;

                                if (!_iteratorNormalCompletion26 && _iterator26.return != null) {
                                  _iterator26.return();
                                }

                              case 65:
                                _context18.prev = 65;

                                if (!_didIteratorError26) {
                                  _context18.next = 68;
                                  break;
                                }

                                throw _iteratorError26;

                              case 68:
                                return _context18.finish(65);

                              case 69:
                                return _context18.finish(62);

                              case 70:
                                this.secondary_labs = newSortedArray;
                                console.log(this.secondary_labs);
                                localStorage.setItem('addToBucket', JSON.stringify(this.addToBucket));
                                localStorage.setItem('newBucketArray', JSON.stringify(this.newBucketArray)); // console.log()

                                localStorage.setItem('labsdata', JSON.stringify(this.secondary_labs));
                                this.router.navigate(['search-labs']);

                              case 76:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this, [[6, 35, 39, 47], [14, 18, 22, 30], [23,, 25, 29], [40,, 42, 46], [54, 58, 62, 70], [63,, 65, 69]]);
                      }));
                    }).catch(function (error) {
                      _this12.util.hide();

                      console.log(error);
                    });

                  case 8:
                  case "end":
                    return _context19.stop();
                }
              }
            }, _callee19, this);
          }));
        }
      }, {
        key: "degreesToRadians",
        value: function degreesToRadians(degrees) {
          return degrees * Math.PI / 180;
        }
      }, {
        key: "distanceInKmBetweenEarthCoordinates",
        value: function distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
          // console.log(lat1, lon1, lat2, lon2);
          var earthRadiusKm = 6371;
          var dLat = this.degreesToRadians(lat2 - lat1);
          var dLon = this.degreesToRadians(lon2 - lon1);
          lat1 = this.degreesToRadians(lat1);
          lat2 = this.degreesToRadians(lat2);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          return earthRadiusKm * c;
        }
      }, {
        key: "compare",
        value: function compare(a, b) {
          if (a.distance < b.distance) {
            return -1;
          }

          if (a.distance > b.distance) {
            return 1;
          }

          return 0;
        }
      }, {
        key: "getAssociatedTest",
        value: function getAssociatedTest() {
          this.associated_test = [];
          var _iteratorNormalCompletion28 = true;
          var _didIteratorError28 = false;
          var _iteratorError28 = undefined;

          try {
            for (var _iterator28 = this.addToBucket[Symbol.iterator](), _step28; !(_iteratorNormalCompletion28 = (_step28 = _iterator28.next()).done); _iteratorNormalCompletion28 = true) {
              var i = _step28.value;
              // console.log(i)
              var _iteratorNormalCompletion29 = true;
              var _didIteratorError29 = false;
              var _iteratorError29 = undefined;

              try {
                for (var _iterator29 = this.associated_tests[Symbol.iterator](), _step29; !(_iteratorNormalCompletion29 = (_step29 = _iterator29.next()).done); _iteratorNormalCompletion29 = true) {
                  var x = _step29.value;
                  if (x.individual_test == i) this.associated_test.push(x); // console.log(this.associated_test)
                }
              } catch (err) {
                _didIteratorError29 = true;
                _iteratorError29 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion29 && _iterator29.return != null) {
                    _iterator29.return();
                  }
                } finally {
                  if (_didIteratorError29) {
                    throw _iteratorError29;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError28 = true;
            _iteratorError28 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion28 && _iterator28.return != null) {
                _iterator28.return();
              }
            } finally {
              if (_didIteratorError28) {
                throw _iteratorError28;
              }
            }
          }
        }
      }]);

      return TestPage;
    }();

    TestPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]
      }];
    };

    TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-test',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./test.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./test.page.scss */
      "./src/app/pages/test/test.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]])], TestPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-test-test-module-es5.js.map