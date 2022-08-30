function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-faq-faq-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html":
  /*!*******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesFaqFaqPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\r\n\r\n<ion-content>\r\n<div class=\"container\">\r\n\r\n<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">FAQ</h3>\r\n<div class=\"block\">\r\n\r\n  <div *ngFor=\"let item of faqs;let i =index;\" class=\"darken\">\r\n          <ion-item  [ngClass]=\"{'active': (showContent(i)==true), 'not-active': (showContent(i)==false)}\"  (click)=\"showMilestone(i)\">\r\n            <img *ngIf = \"(showContent(i)==false)\" src=\"assets/iconarrow.png\" slot=\"end\" class=\"arrow-icon2\">\r\n            <img *ngIf = \"(showContent(i)==true)\" src=\"assets/downarrow.png\" slot=\"end\" class=\"arrow-icon\">\r\n            <label class=\"item-{{i+1}}\">{{item.question}}</label>\r\n          </ion-item>\r\n          <ion-list *ngIf = \"showContent(i)\" style=\"padding: 0px;\">\r\n            <div >\r\n              <ion-item  class=\"milestone-item\">\r\n                <p class=\"milestone\" [innerHtml]=\"item.answer\"></p>\r\n                </ion-item>\r\n              </div>\r\n            </ion-list>\r\n          </div>\r\n</div>\r\n\r\n <br><br>\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n   <app-footer></app-footer>\r\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/faq/faq-routing.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/faq/faq-routing.module.ts ***!
    \*************************************************/

  /*! exports provided: FaqPageRoutingModule */

  /***/
  function srcAppPagesFaqFaqRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageRoutingModule", function () {
      return FaqPageRoutingModule;
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


    var _faq_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/pages/faq/faq.page.ts");

    var routes = [{
      path: '',
      component: _faq_page__WEBPACK_IMPORTED_MODULE_3__["FaqPage"]
    }];

    var FaqPageRoutingModule = function FaqPageRoutingModule() {
      _classCallCheck(this, FaqPageRoutingModule);
    };

    FaqPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], FaqPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/faq/faq.module.ts ***!
    \*****************************************/

  /*! exports provided: FaqPageModule */

  /***/
  function srcAppPagesFaqFaqModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPageModule", function () {
      return FaqPageModule;
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


    var _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./faq-routing.module */
    "./src/app/pages/faq/faq-routing.module.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var _faq_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./faq.page */
    "./src/app/pages/faq/faq.page.ts");

    var FaqPageModule = function FaqPageModule() {
      _classCallCheck(this, FaqPageModule);
    };

    FaqPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _faq_routing_module__WEBPACK_IMPORTED_MODULE_5__["FaqPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_faq_page__WEBPACK_IMPORTED_MODULE_8__["FaqPage"]]
    })], FaqPageModule);
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.page.scss":
  /*!*****************************************!*\
    !*** ./src/app/pages/faq/faq.page.scss ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesFaqFaqPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* Variables */\n/* Styles */\n* {\n  box-sizing: border-box;\n}\n.details a.follow strong, .block > div, body {\n  margin: 0;\n  padding: 0;\n}\nhtml,\nbody {\n  min-height: 100%;\n}\nbody {\n  font-family: Sans-Serif;\n  font-size: 14px;\n  letter-spacing: 0.5px;\n  line-height: 1.4;\n  color: gray;\n}\nh1 {\n  font-weight: 700;\n  font-size: 24px;\n  color: black;\n  padding: 15px 15px 0;\n  margin: 0;\n}\n.block {\n  max-width: 100%;\n  width: 100%;\n  height: 100%;\n  padding: 15px;\n  z-index: 10;\n  background-color: white;\n  overflow: hidden;\n}\n@media screen and (max-width: 599px) {\n  .block {\n    max-width: 100%;\n  }\n}\n.block > div {\n  display: block;\n  position: relative;\n  padding: 0 0 0 35px;\n  color: black;\n}\n.block > div:not(:last-of-type) {\n  margin: 0 0 10px;\n}\n.block > div:nth-child(1):before {\n  content: \"1\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(2):before {\n  content: \"2\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(3):before {\n  content: \"3\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(4):before {\n  content: \"4\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(5):before {\n  content: \"5\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(6):before {\n  content: \"6\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(7):before {\n  content: \"7\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(8):before {\n  content: \"8\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(9):before {\n  content: \"9\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(10):before {\n  content: \"10\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(11):before {\n  content: \"11\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(12):before {\n  content: \"12\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(13):before {\n  content: \"13\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(14):before {\n  content: \"14\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(15):before {\n  content: \"15\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(16):before {\n  content: \"16\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(17):before {\n  content: \"17\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(18):before {\n  content: \"18\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(19):before {\n  content: \"19\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div:nth-child(20):before {\n  content: \"20\";\n  width: 20px;\n  font-weight: bold;\n  display: none;\n  text-align: center;\n  position: absolute;\n  left: 0;\n  top: 0;\n  padding: 15px 7.5px;\n  border-right: 1px solid rgba(128, 128, 128, 0.25);\n  margin: 0;\n  color: black;\n}\n.block > div input + label {\n  cursor: pointer;\n  display: block;\n  padding: 15px 15px;\n  -webkit-transition: all 0.25s ease-in-out 0.5s, color 0.25s ease-in-out 0.5s;\n  transition: all 0.25s ease-in-out 0.5s, color 0.25s ease-in-out 0.5s;\n  color: black;\n}\n.block > div input ~ div {\n  visibility: hidden;\n  max-height: 0;\n  opacity: 0;\n  -webkit-transition: all 0.5s ease-in-out 0.2s, opacity 0.25s ease-in-out 0.25s, padding 0s ease-in-out 0s;\n  transition: all 0.5s ease-in-out 0.2s, opacity 0.25s ease-in-out 0.25s, padding 0s ease-in-out 0s;\n  width: calc(100% + 35px);\n  margin-left: -35px;\n}\n.block > div input ~ div p {\n  padding: 15px;\n  border-top: 1px solid rgba(128, 128, 128, 0.25);\n}\n.block > div input:checked + label {\n  -webkit-transition: background-color 0s ease-in-out 0s;\n  transition: background-color 0s ease-in-out 0s;\n  color: black;\n}\n.block > div input:checked ~ div {\n  display: block;\n  opacity: 1;\n  visibility: visible;\n  max-height: 200px;\n  -webkit-transition: all 0.5s ease-in-out 0.2s, opacity 0.25s ease-in-out 0.5s, padding 0s ease-in-out 0s;\n  transition: all 0.5s ease-in-out 0.2s, opacity 0.25s ease-in-out 0.5s, padding 0s ease-in-out 0s;\n}\n.details {\n  width: calc(100% - 30px);\n  float: right;\n  margin: 15px;\n  padding: 15px;\n  background-color: #3399ff;\n}\n@media screen and (max-width: 599px) {\n  .details {\n    float: left;\n    width: calc(100% - 30px);\n    margin: 15px;\n  }\n}\n.details * {\n  display: inline-block;\n  margin: 7.5px 0;\n  line-height: 20px;\n  color: white;\n}\n.details h1 {\n  font-size: 36px;\n  font-weight: bold;\n  line-height: 40px;\n  padding: 0;\n  margin: 0;\n  clear: both;\n}\n.details a {\n  clear: both;\n  font-family: \"FontAwesome\", Sans-Serif;\n  font-size: 14px;\n  text-decoration: none;\n}\n.details a.follow {\n  float: left;\n  font-weight: bold;\n  background-color: #333333;\n  margin: 15px 0 0;\n  padding: 7.5px 15px;\n  cursor: pointer;\n}\n.details a.follow:before {\n  margin: 0 7.5px 0 0;\n}\n.details a.follow strong {\n  color: #99ccff;\n}\n.details a.follow:hover {\n  background-color: #66b3ff;\n}\n.details a.follow:hover strong {\n  color: #4d4d4d;\n}\n.active {\n  --background: #007c9d;\n  --padding-start: 10px;\n  margin-top: 1px;\n  color: #fff;\n  min-width: 100%;\n}\n.not-active {\n  --background: #007c9d;\n  --padding-start: 10px;\n  color: #fff;\n  margin-top: 1px;\n  min-width: 100%;\n}\n.heading {\n  font-size: 12px;\n  margin-left: 20px;\n  font-weight: bold;\n}\n.arrow-icon {\n  width: 15px;\n}\n.arrow-icon2 {\n  height: 15px;\n}\n.milestone {\n  padding: 0px;\n  margin: 0px 0px;\n  font-size: 13px;\n}\n.block label {\n  margin-bottom: 0px;\n}\n.card {\n  padding: 6px;\n  border-radius: 3px;\n  border: 0.3px solid #d2d2d2;\n  background-color: white;\n}\n.que {\n  font-size: 15px;\n}\n.ans {\n  font-size: 12px;\n}\nion-title {\n  -webkit-padding-start: 16px;\n          padding-inline-start: 16px;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGZhcVxcZmFxLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsY0FBQTtBQW1CQSxXQUFBO0FBRUE7RUFDRSxzQkFBQTtBQ2xCRjtBRHFCQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDbEJGO0FEcUJBOztFQUVFLGdCQUFBO0FDbEJGO0FEcUJBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUNsQkY7QURzQkE7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxTQUFBO0FDbkJGO0FEc0JBO0VBQ0UsZUFuRFU7RUFvRFYsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQXhDTztFQXlDUCxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQ25CRjtBRHFCRTtFQVRGO0lBVUksZUFBQTtFQ2xCRjtBQUNGO0FEb0JFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFjRSxZQXJFUTtBQ3NDZDtBRHdCSTtFQUNFLGdCQUFBO0FDdEJOO0FEaUNRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFHQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsU0FBQTtFQUtFLFlBNUZFO0FDdURkO0FEbUJRO0VBQ0UsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFHQSxtQkFBQTtFQUNBLGlEQUFBO0VBQ0EsU0FBQTtFQUtFLFlBNUZFO0FDcUVkO0FES1E7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNB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O0FDcU5KO0FEbk5BO0VBQ0ksZUFBQTtBQ3NOSjtBRHBOQTtFQUNJLDJCQUFBO1VBQUEsMEJBQUE7RUFDQSxlQUFBO0FDdU5KIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBWYXJpYWJsZXMgKi9cclxuXHJcbiRhY2NvcmRpb246IDEwMCU7IC8vIEFjY29yZGlvbiB3aWR0aFxyXG4kcGFuZWxoZWlnaHQ6IDIwMHB4OyAvLyBBcHBsaWVkIHRvIFwibWF4LWhlaWdodFwiIC0gTXVzdCBiZSBsYXJnZXIgdGhhbiB0aGUgcGFuZWwgY29udGVudFxyXG4kaXRlbXM6MjA7IC8vIFNwZWNpZnkgdGhlIG51bWJlciBvZiBwYW5lbHMgcHJlc2VudCBpbiBIVE1MXHJcblxyXG4kcGFuZWxfYmc6IGRhcmtlbih3aGl0ZSwgNSUpOyAvLyBiZyBjb2xvciBvZiB0aGUgYWNjb3JkaW9uIHBhbmVsXHJcbiRsYWJlbF9iZzogbGlnaHRlbigjY2NjLCAxMCUpOyAvLyBiZyBjb2xvciBvZiB0aGUgYWNjb3JkaW9uIGxhYmVsc1xyXG5cclxuLy8gRG9uJ3QgZWRpdCBiZWxvd1xyXG4kbGFiZWxfYmdfYWN0aXZlOiBkYXJrZW4oJGxhYmVsX2JnLCA3LjUlKTtcclxuJG51bV9iZzogZGFya2VuKCRsYWJlbF9iZ19hY3RpdmUsIDE1JSk7XHJcbiRib3JkZXJfY29sOiBkYXJrZW4oJGxhYmVsX2JnLCA0MCUpO1xyXG4kbGFiZWxfY29sb3I6IGJsYWNrO1xyXG4vLyBEb24ndCBlZGl0IGFib3ZlXHJcblxyXG4kZ3V0dGVyOiAxNXB4OyAvLyBHZW5lcmFsIHBhZGRpbmcgYXJvdW5kIGl0ZW1zXHJcbiR0czogYWxsIDAuMnMgZWFzZTsgLy8gR2VuZXJhbCB0cmFuc2l0aW9uIGVmZmVjdFxyXG5cclxuLyogU3R5bGVzICovXHJcblxyXG4qIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4lcmVzZXQge1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcblxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogU2Fucy1TZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgY29sb3I6IGRhcmtlbih3aGl0ZSwgNTAlKTtcclxuICBAZXh0ZW5kICVyZXNldDtcclxufVxyXG5cclxuaDEge1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgZm9udC1zaXplOiAyNHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5ibG9jayB7XHJcbiAgbWF4LXdpZHRoOiAkYWNjb3JkaW9uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAkZ3V0dGVyO1xyXG4gIHotaW5kZXg6IDEwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU5OXB4KSB7XHJcbiAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA+IGRpdiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDAgMCAwIDIwcHggKyAkZ3V0dGVyO1xyXG4gICAgLy9ib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyX2NvbDtcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICAgIC8vYm9yZGVyLXRvcDogMXB4IHNvbGlkICRib3JkZXJfY29sO1xyXG4gICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkcGFuZWxfYmc7XHJcbiAgICBAZXh0ZW5kICVyZXNldDtcclxuXHJcbiAgICAmOm5vdCg6bGFzdC1vZi10eXBlKSB7XHJcbiAgICAgIG1hcmdpbjogMCAwIDEwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgQGlmIGxpZ2h0bmVzcygkcGFuZWxfYmcpIDwgNTAlIHtcclxuICAgICAgY29sb3I6IGludmVydCgkbGFiZWxfY29sb3IpO1xyXG4gICAgfSBAZWxzZSB7XHJcbiAgICAgIGNvbG9yOiAkbGFiZWxfY29sb3I7XHJcbiAgICB9XHJcblxyXG4gICAgQGZvciAkaSBmcm9tIDEgdGhyb3VnaCAkaXRlbXMge1xyXG4gICAgICAmOm50aC1jaGlsZCgjeyRpfSkge1xyXG4gICAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICAgIGNvbnRlbnQ6IFwiI3skaX1cIjtcclxuICAgICAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgICAgLy9iYWNrZ3JvdW5kLWNvbG9yOiAkbnVtX2JnO1xyXG4gICAgICAgICAgLy9jb2xvcjogZGFya2VuKHdoaXRlLCAxNSUpO1xyXG4gICAgICAgICAgcGFkZGluZzogJGd1dHRlciAkZ3V0dGVyLzI7XHJcbiAgICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKCRib3JkZXJfY29sLCAwLjI1KTtcclxuICAgICAgICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAgICAgICBAaWYgbGlnaHRuZXNzKCRudW1fYmcpIDwgNTAlIHtcclxuICAgICAgICAgICAgY29sb3I6IGludmVydCgkbGFiZWxfY29sb3IpO1xyXG4gICAgICAgICAgfSBAZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbGFiZWxfY29sb3I7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHBhZGRpbmc6ICRndXR0ZXIgJGd1dHRlcjtcclxuICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICRsYWJlbF9iZztcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4yNXMgZWFzZS1pbi1vdXQgMC41cywgY29sb3IgMC4yNXMgZWFzZS1pbi1vdXQgMC41cztcclxuXHJcbiAgICAgICAgQGlmIGxpZ2h0bmVzcygkbGFiZWxfYmcpIDwgNTAlIHtcclxuICAgICAgICAgIGNvbG9yOiBpbnZlcnQoJGxhYmVsX2NvbG9yKTtcclxuICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgIGNvbG9yOiAkbGFiZWxfY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgICYgfiBkaXYge1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgICAgICBtYXgtaGVpZ2h0OiAwO1xyXG4gICAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMC4ycywgb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCAwLjI1cyxcclxuICAgICAgICAgIHBhZGRpbmcgMHMgZWFzZS1pbi1vdXQgMHM7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSArIDM1cHgpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzVweDtcclxuXHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICBwYWRkaW5nOiAkZ3V0dGVyO1xyXG4gICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoJGJvcmRlcl9jb2wsIDAuMjUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAmOmNoZWNrZWQge1xyXG4gICAgICAgICYgKyBsYWJlbCB7XHJcbiAgICAgICAgICAvL2JhY2tncm91bmQtY29sb3I6ICRsYWJlbF9iZ19hY3RpdmU7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIGVhc2UtaW4tb3V0IDBzO1xyXG5cclxuICAgICAgICAgIEBpZiBsaWdodG5lc3MoJGxhYmVsX2JnX2FjdGl2ZSkgPCA1MCUge1xyXG4gICAgICAgICAgICBjb2xvcjogaW52ZXJ0KCRsYWJlbF9jb2xvcik7XHJcbiAgICAgICAgICB9IEBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3I6ICRsYWJlbF9jb2xvcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJiB+IGRpdiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgbWF4LWhlaWdodDogJHBhbmVsaGVpZ2h0O1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMC4ycywgb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCAwLjVzLFxyXG4gICAgICAgICAgICBwYWRkaW5nIDBzIGVhc2UtaW4tb3V0IDBzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmRldGFpbHMge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAjeyRndXR0ZXIgKiAyfSk7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogJGd1dHRlcjtcclxuICBwYWRkaW5nOiAkZ3V0dGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oIzAwNjZjYywgMjAlKTtcclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtICN7JGd1dHRlciAqIDJ9KTtcclxuICAgIG1hcmdpbjogJGd1dHRlcjtcclxuICB9XHJcblxyXG4gICoge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luOiAkZ3V0dGVyLzIgMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBoMSB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIiwgU2Fucy1TZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuXHJcbiAgICAmLmZvbGxvdyB7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbihibGFjaywgMjAlKTtcclxuICAgICAgbWFyZ2luOiAkZ3V0dGVyIDAgMDtcclxuICAgICAgcGFkZGluZzogJGd1dHRlci8yICRndXR0ZXI7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICY6YmVmb3JlIHtcclxuICAgICAgICBtYXJnaW46IDAgJGd1dHRlci8yIDAgMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgc3Ryb25nIHtcclxuICAgICAgICBjb2xvcjogbGlnaHRlbigjMDA2NmNjLCA0MCUpO1xyXG4gICAgICAgIEBleHRlbmQgJXJlc2V0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCMwMDY2Y2MsIDMwJSk7XHJcblxyXG4gICAgICAgIHN0cm9uZyB7XHJcbiAgICAgICAgICBjb2xvcjogbGlnaHRlbihibGFjaywgMzAlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiAgLmFjdGl2ZSB7LS1iYWNrZ3JvdW5kOiAjMDA3YzlkO1xyXG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMTBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxcHg7Y29sb3I6I2ZmZjtcclxuICAgICAgICBtaW4td2lkdGg6IDEwMCV9IFxyXG5cclxuICAgIC5ub3QtYWN0aXZlIHstLWJhY2tncm91bmQ6ICMwMDdjOWQ7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O2NvbG9yOiNmZmY7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwJTt9XHJcbiAuaGVhZGluZyB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4OyAgICAgIFxyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gICAgLmFycm93LWljb24ge3dpZHRoOiAxNXB4O31cclxuXHQuYXJyb3ctaWNvbjIge2hlaWdodDogMTVweDt9XHJcbiAgICAubWlsZXN0b25lIHtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuXHJcbi5ibG9jayBsYWJlbHttYXJnaW4tYm90dG9tOiAwcHg7fVxyXG5cclxuLmNhcmQge1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgYm9yZGVyOiAuM3B4IHNvbGlkIHJnYigyMTAsIDIxMCwgMjEwKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbi5xdWUge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG59XHJcbi5hbnMge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcbmlvbi10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWlubGluZS1zdGFydDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxufSIsIi8qIFZhcmlhYmxlcyAqL1xuLyogU3R5bGVzICovXG4qIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLmRldGFpbHMgYS5mb2xsb3cgc3Ryb25nLCAuYmxvY2sgPiBkaXYsIGJvZHkge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBTYW5zLVNlcmlmO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjVweDtcbiAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgY29sb3I6IGdyYXk7XG59XG5cbmgxIHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDE1cHggMTVweCAwO1xuICBtYXJnaW46IDA7XG59XG5cbi5ibG9jayB7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogMTVweDtcbiAgei1pbmRleDogMTA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTk5cHgpIHtcbiAgLmJsb2NrIHtcbiAgICBtYXgtd2lkdGg6IDEwMCU7XG4gIH1cbn1cbi5ibG9jayA+IGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDAgMCAwIDM1cHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ibG9jayA+IGRpdjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICBtYXJnaW46IDAgMCAxMHB4O1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxKTpiZWZvcmUge1xuICBjb250ZW50OiBcIjFcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4IDcuNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ibG9jayA+IGRpdjpudGgtY2hpbGQoMik6YmVmb3JlIHtcbiAgY29udGVudDogXCIyXCI7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweCA3LjVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmxvY2sgPiBkaXY6bnRoLWNoaWxkKDMpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiM1wiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCg0KTpiZWZvcmUge1xuICBjb250ZW50OiBcIjRcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4IDcuNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ibG9jayA+IGRpdjpudGgtY2hpbGQoNSk6YmVmb3JlIHtcbiAgY29udGVudDogXCI1XCI7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweCA3LjVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmxvY2sgPiBkaXY6bnRoLWNoaWxkKDYpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiNlwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCg3KTpiZWZvcmUge1xuICBjb250ZW50OiBcIjdcIjtcbiAgd2lkdGg6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBkaXNwbGF5OiBub25lO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBwYWRkaW5nOiAxNXB4IDcuNXB4O1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xuICBtYXJnaW46IDA7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5ibG9jayA+IGRpdjpudGgtY2hpbGQoOCk6YmVmb3JlIHtcbiAgY29udGVudDogXCI4XCI7XG4gIHdpZHRoOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogbm9uZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgcGFkZGluZzogMTVweCA3LjVweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmxvY2sgPiBkaXY6bnRoLWNoaWxkKDkpOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiOVwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxMCk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxMFwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxMSk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxMVwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxMik6YmVmb3JlIHtcbiAgY29udGVudDogXCIxMlwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxMyk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxM1wiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxNCk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxNFwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxNSk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxNVwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxNik6YmVmb3JlIHtcbiAgY29udGVudDogXCIxNlwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxNyk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxN1wiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxOCk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxOFwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgxOSk6YmVmb3JlIHtcbiAgY29udGVudDogXCIxOVwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2Om50aC1jaGlsZCgyMCk6YmVmb3JlIHtcbiAgY29udGVudDogXCIyMFwiO1xuICB3aWR0aDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBhZGRpbmc6IDE1cHggNy41cHg7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XG4gIG1hcmdpbjogMDtcbiAgY29sb3I6IGJsYWNrO1xufVxuLmJsb2NrID4gZGl2IGlucHV0ICsgbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNXB4IDE1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjI1cyBlYXNlLWluLW91dCAwLjVzLCBjb2xvciAwLjI1cyBlYXNlLWluLW91dCAwLjVzO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmxvY2sgPiBkaXYgaW5wdXQgfiBkaXYge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIG1heC1oZWlnaHQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzIGVhc2UtaW4tb3V0IDAuMnMsIG9wYWNpdHkgMC4yNXMgZWFzZS1pbi1vdXQgMC4yNXMsIHBhZGRpbmcgMHMgZWFzZS1pbi1vdXQgMHM7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzNXB4KTtcbiAgbWFyZ2luLWxlZnQ6IC0zNXB4O1xufVxuLmJsb2NrID4gZGl2IGlucHV0IH4gZGl2IHAge1xuICBwYWRkaW5nOiAxNXB4O1xuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjI1KTtcbn1cbi5ibG9jayA+IGRpdiBpbnB1dDpjaGVja2VkICsgbGFiZWwge1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDBzIGVhc2UtaW4tb3V0IDBzO1xuICBjb2xvcjogYmxhY2s7XG59XG4uYmxvY2sgPiBkaXYgaW5wdXQ6Y2hlY2tlZCB+IGRpdiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvcGFjaXR5OiAxO1xuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgZWFzZS1pbi1vdXQgMC4ycywgb3BhY2l0eSAwLjI1cyBlYXNlLWluLW91dCAwLjVzLCBwYWRkaW5nIDBzIGVhc2UtaW4tb3V0IDBzO1xufVxuXG4uZGV0YWlscyB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMHB4KTtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW46IDE1cHg7XG4gIHBhZGRpbmc6IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzk5ZmY7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1OTlweCkge1xuICAuZGV0YWlscyB7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMwcHgpO1xuICAgIG1hcmdpbjogMTVweDtcbiAgfVxufVxuLmRldGFpbHMgKiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA3LjVweCAwO1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLmRldGFpbHMgaDEge1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBsaW5lLWhlaWdodDogNDBweDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luOiAwO1xuICBjbGVhcjogYm90aDtcbn1cbi5kZXRhaWxzIGEge1xuICBjbGVhcjogYm90aDtcbiAgZm9udC1mYW1pbHk6IFwiRm9udEF3ZXNvbWVcIiwgU2Fucy1TZXJpZjtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uZGV0YWlscyBhLmZvbGxvdyB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzMzMztcbiAgbWFyZ2luOiAxNXB4IDAgMDtcbiAgcGFkZGluZzogNy41cHggMTVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRldGFpbHMgYS5mb2xsb3c6YmVmb3JlIHtcbiAgbWFyZ2luOiAwIDcuNXB4IDAgMDtcbn1cbi5kZXRhaWxzIGEuZm9sbG93IHN0cm9uZyB7XG4gIGNvbG9yOiAjOTljY2ZmO1xufVxuLmRldGFpbHMgYS5mb2xsb3c6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNjZiM2ZmO1xufVxuLmRldGFpbHMgYS5mb2xsb3c6aG92ZXIgc3Ryb25nIHtcbiAgY29sb3I6ICM0ZDRkNGQ7XG59XG5cbi5hY3RpdmUge1xuICAtLWJhY2tncm91bmQ6ICMwMDdjOWQ7XG4gIC0tcGFkZGluZy1zdGFydDogMTBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWluLXdpZHRoOiAxMDAlO1xufVxuXG4ubm90LWFjdGl2ZSB7XG4gIC0tYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAxMHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICBtaW4td2lkdGg6IDEwMCU7XG59XG5cbi5oZWFkaW5nIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5hcnJvdy1pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG59XG5cbi5hcnJvdy1pY29uMiB7XG4gIGhlaWdodDogMTVweDtcbn1cblxuLm1pbGVzdG9uZSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHggMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5ibG9jayBsYWJlbCB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmNhcmQge1xuICBwYWRkaW5nOiA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgYm9yZGVyOiAwLjNweCBzb2xpZCAjZDJkMmQyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn1cblxuLnF1ZSB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmFucyB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuaW9uLXRpdGxlIHtcbiAgcGFkZGluZy1pbmxpbmUtc3RhcnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/faq/faq.page.ts":
  /*!***************************************!*\
    !*** ./src/app/pages/faq/faq.page.ts ***!
    \***************************************/

  /*! exports provided: FaqPage */

  /***/
  function srcAppPagesFaqFaqPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqPage", function () {
      return FaqPage;
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

    var FaqPage =
    /*#__PURE__*/
    function () {
      function FaqPage(api, util) {
        var _this = this;

        _classCallCheck(this, FaqPage);

        this.api = api;
        this.util = util;
        this.faqs = [];
        this.tab = 0;
        this.api.getSettings().then(function (data) {
          _this.settings = data[0];
          _this.faqs = _this.settings.faqs;
          console.log(_this.faqs);
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(FaqPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showContent",
        value: function showContent(item) {
          return this.tab === item;
        }
      }, {
        key: "showMilestone",
        value: function showMilestone(item) {
          this.tab = item;
        }
      }]);

      return FaqPage;
    }();

    FaqPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }];
    };

    FaqPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.page.scss */
      "./src/app/pages/faq/faq.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]])], FaqPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-faq-faq-module-es5.js.map