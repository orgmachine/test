function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-risk-risk-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risk/risk.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risk/risk.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRiskRiskPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n\n   <div class=\"cart-div deal_detail\">\n      <div class=\"row step-div cart-sec\">\n         <div class=\"col-md-12 col-sm-12 col-xs-12\">\n     <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">{{risk_detail?.name}}</h3>\n                                                   \n         <p class=\"metaFooterToggleLink\" [innerHtml]=\"risk_detail?.description\">\n        </p>\n         </div>\n         <div class=\"clearfix\"></div>\n      </div>     \n</div>\n</div>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n      <div class=\"row step-div cart-sec\">\n         <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 4% 0px;display: inline-block;border-bottom: 2px solid #ea5b24;\">Test Associated with {{risk_detail?.name}}</h3>\n         </div>\n         <div class=\"col-sm-3\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n         </div>\n          <div class=\"col-sm-2\">\n             <label>Suitable For : </label>\n             <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n                <option value=\"\">Please select gender</option>\n                <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n            </select>\n           </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n        </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n        </div>\n      </div>     \n  </div>\n</div>\n \n<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of risk_test; let i = index;\">\n      <div class=\"grid-item-inner\">\n        <div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n          <div class=\"uptopmp\">\n            <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n            <p class=\"category_namemp\">{{item.test_name}}</p> \n            <div class=\"desmp\">\n            <ul>\n              <li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n              <li>Quick Turn Around Time</li>\n              <li>Reporting as per NABL ISO guidelines</li>\n            </ul>\n            </div>\n          </div>\n          <div class=\"butkmore\">\n            <button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/risk/risk-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/risk/risk-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: RiskPageRoutingModule */

  /***/
  function srcAppPagesRiskRiskRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiskPageRoutingModule", function () {
      return RiskPageRoutingModule;
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


    var _risk_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./risk.page */
    "./src/app/pages/risk/risk.page.ts");

    var routes = [{
      path: '',
      component: _risk_page__WEBPACK_IMPORTED_MODULE_3__["RiskPage"]
    }];

    var RiskPageRoutingModule = function RiskPageRoutingModule() {
      _classCallCheck(this, RiskPageRoutingModule);
    };

    RiskPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RiskPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/risk/risk.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/risk/risk.module.ts ***!
    \*******************************************/

  /*! exports provided: RiskPageModule */

  /***/
  function srcAppPagesRiskRiskModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiskPageModule", function () {
      return RiskPageModule;
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


    var _risk_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./risk-routing.module */
    "./src/app/pages/risk/risk-routing.module.ts");
    /* harmony import */


    var _risk_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./risk.page */
    "./src/app/pages/risk/risk.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var RiskPageModule = function RiskPageModule() {
      _classCallCheck(this, RiskPageModule);
    };

    RiskPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _risk_routing_module__WEBPACK_IMPORTED_MODULE_5__["RiskPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_risk_page__WEBPACK_IMPORTED_MODULE_6__["RiskPage"]]
    })], RiskPageModule);
    /***/
  },

  /***/
  "./src/app/pages/risk/risk.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/risk/risk.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRiskRiskPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content p {\n  font-family: \"Poppins-Light\";\n  text-align: justify;\n}\nion-content span {\n  font-family: \"Poppins-Light\";\n}\nion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 50px;\n  height: 95px;\n  text-align: center;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .butkmore {\n  text-align: center;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\nion-content .mid {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\nion-content .mid.second {\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmlzay9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxyaXNrXFxyaXNrLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmlzay9yaXNrLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLDRCQUFBO0VBQTZCLG1CQUFBO0FDQ2pDO0FEQ0k7RUFDQSw0QkFBQTtBQ0NKO0FEQ0k7RUFBaUIsZUFBQTtFQUFnQixjQUFBO0VBQ3JDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0dBO0FERkE7RUFBZ0IsdUJBQUE7RUFBd0IsbUJBQUE7QUNNeEM7QURMQTtFQUFTLGdDQUFBO0FDUVQ7QURQSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQ1NSO0FEUEk7RUFDSSxjQUFBO0FDU1I7QURQSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDU1I7QUROQTtFQUFTLGVBQUE7QUNTVDtBRFJBO0VBQWEsZUFBQTtBQ1diO0FEVkE7RUFBUyxtQkFBQTtFQUNULHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ2FBO0FEWkE7RUFBaUIsZUFBQTtFQUNqQixpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFBaUIsWUFBQTtFQUFhLGtCQUFBO0FDaUI5QjtBRGZBO0VBQ0ksa0JBQUE7QUNpQko7QURmQTtFQUNJLG9DQUFBO0VBQ0Esd0JBQUE7RUFDQSw0QkFBQTtFQUE2QixnQkFBQTtFQUFpQixlQUFBO0VBQzlDLGdCQUFBO0VBQ0Esa0JBQUE7QUNtQko7QURqQkE7RUFDSSxrQkFBQTtBQ21CSjtBRGxCSTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNvQko7QURsQkk7RUFDSSxnQkFBQTtFQUNBLDJDQUFBO0VBQ0Esb0JBQUE7RUFDQSw0QkFBQTtFQUNBLGdDQUFBO0FDb0JSO0FEbEJJO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNvQlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yaXNrL3Jpc2sucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTGlnaHQnO3RleHQtYWxpZ246IGp1c3RpZnk7XG59XG4gICAgc3BhbntcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTGlnaHQnO1xufVxuICAgIC5jYXRlZ29yeV9uYW1laGF7Zm9udC1zaXplOiAyMHB4O2NvbG9yOiAjMDA3YzlkO1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG5wYWRkaW5nLXRvcDogMzBweDtcbmxpbmUtaGVpZ2h0OjIwcHg7fVxuLlNob3BCeVByb2R1Y3Rze3BhZGRpbmc6IDMwcHggNTBweCA1MHB4O2JhY2tncm91bmQ6ICNlZGVkZWQ7fVxuLnBvcGltZyB7Ym9yZGVyLXJhZGl1czoxMHB4IDEwcHggMHB4IDBweDt9XG4gICAgLmdyaWQtaXRlbS1pbm5lcmhhIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyAgICBcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICB9XG4gICAgLmRlc2hhIHtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDA7XG4gICAgfVxuICAgIC5hZGR0b2NhcnR7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBtYXJnaW46IDRweCBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgIH1cblxuLnVwdG9wbXB7cGFkZGluZzogMCAxMHB4O31cbi51cHRvcG1wIGltZ3ttYXJnaW46NXB4IDBweDt9XG4ubXBvcGltZ3tib3JkZXItcmFkaXVzOiA1MHB4O1xuYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogLTI1cHg7XG5sZWZ0OiA0MCU7XG5wYWRkaW5nOiAxMHB4O1xuYmFja2dyb3VuZDogI2ZmZjt9XG4uY2F0ZWdvcnlfbmFtZW1we2ZvbnQtc2l6ZTogMTRweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbnBhZGRpbmctdG9wOjUwcHg7aGVpZ2h0OiA5NXB4O3RleHQtYWxpZ246IGNlbnRlcjt9XG5cbi5kZXNtcCB1bHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uZGVzbXAgbGl7XG4gICAgYmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZycpO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2xpc3Qtc3R5bGU6IG5vbmU7Zm9udC1zaXplOiAxNHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuLmJ1dGttb3JlIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgLmtub3dfbW9yZSB7XG4gICAgbWFyZ2luOiAxNXB4O1xuICAgIGNvbG9yOiAjMDA3YzlkO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgZm9udC1zaXplOiAxNXB4O31cbn1cbiAgICAubWlke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDBweCA4cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDhweCAyMCU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjIwcHg7XG4gICAgfVxuICAgIC5taWQuc2Vjb25ke1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcbiAgICB9XG59XG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuaW9uLWNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeV9uYW1laGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDA3YzlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZzogMzBweCA1MHB4IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5pb24tY29udGVudCAucG9waW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAuZGVzaGEge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbmlvbi1jb250ZW50IC5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiAjZWE1YjI0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA0cHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC51cHRvcG1wIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnVwdG9wbXAgaW1nIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDQwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeV9uYW1lbXAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNTBweDtcbiAgaGVpZ2h0OiA5NXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGVzbXAgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGVzbXAgbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUgLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5taWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xuICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5pb24tY29udGVudCAubWlkLnNlY29uZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/risk/risk.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/risk/risk.page.ts ***!
    \*****************************************/

  /*! exports provided: RiskPage */

  /***/
  function srcAppPagesRiskRiskPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RiskPage", function () {
      return RiskPage;
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

    var RiskPage =
    /*#__PURE__*/
    function () {
      function RiskPage(api, util, router) {
        _classCallCheck(this, RiskPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.all_test = [];
        this.risk_test = [];
        this.filter_tests = [];
        this.recommended_age = "";
        this.age_groups = [];
        this.recommended_fors = [];
        this.test_recommended_for = '';
        this.filter = false;
        this.getRecommendedFor();
        this.getAgeGroup();
      }

      _createClass(RiskPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.risk_id = localStorage.getItem('riskid');
          console.log(this.risk_id);
          this.api.getHealthRiskById(this.risk_id).then(function (info) {
            console.log(info);
            _this.risk_detail = info[0];
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.filter_tests = [];
          this.api.getIndividualTest().then(function (data) {
            _this2.all_test = data;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this2.all_test[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var x = _step.value;
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = x.health_risk[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var y = _step2.value;

                    if (y.item_id == _this2.risk_id) {
                      console.log('matched');

                      _this2.risk_test.push(x);

                      _this2.filter_tests.push(x);

                      console.log(_this2.risk_test);
                    }
                  }
                } catch (err) {
                  _didIteratorError2 = true;
                  _iteratorError2 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                      _iterator2.return();
                    }
                  } finally {
                    if (_didIteratorError2) {
                      throw _iteratorError2;
                    }
                  }
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

            _this2.risk_test.sort(function (a, b) {
              return a.test_name.localeCompare(b.test_name);
            });
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "goToDetail",
        value: function goToDetail(data) {
          localStorage.setItem('testid', data.id);
          localStorage.setItem('testname', data.test_name);
          this.router.navigate(['test', data.page_slug]);
        }
      }, {
        key: "clear",
        value: function clear() {
          this.recommended_age = '';
          this.test_recommended_for = '';
          this.filter = false;
          this.ngOnInit();
        }
      }, {
        key: "search",
        value: function search() {
          if (this.recommended_age == '' && this.test_recommended_for == '') {
            this.util.showToast('Please select at least one filter', 'danger', 'bottom');
            return false;
          }

          this.risk_test = [];
          var arr1 = [];
          var arr2 = [];
          this.filter = true;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.filter_tests[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var x = _step3.value;

              if (this.recommended_age != '' && this.test_recommended_for == '') {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = x.recommended_age[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var y = _step4.value;

                    if (y.item_id == this.recommended_age) {
                      this.risk_test.push(x);
                    }
                  }
                } catch (err) {
                  _didIteratorError4 = true;
                  _iteratorError4 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                      _iterator4.return();
                    }
                  } finally {
                    if (_didIteratorError4) {
                      throw _iteratorError4;
                    }
                  }
                }
              } else if (this.recommended_age == '' && this.test_recommended_for != '') {
                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = x.test_recommended_for[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _y = _step5.value;

                    if (_y == this.test_recommended_for) {
                      this.risk_test.push(x);
                    }
                  }
                } catch (err) {
                  _didIteratorError5 = true;
                  _iteratorError5 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                      _iterator5.return();
                    }
                  } finally {
                    if (_didIteratorError5) {
                      throw _iteratorError5;
                    }
                  }
                }
              } else {
                var _iteratorNormalCompletion6 = true;
                var _didIteratorError6 = false;
                var _iteratorError6 = undefined;

                try {
                  for (var _iterator6 = x.recommended_age[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
                    var _y2 = _step6.value;

                    if (_y2.item_id == this.recommended_age) {
                      arr1.push(x);
                    }
                  }
                } catch (err) {
                  _didIteratorError6 = true;
                  _iteratorError6 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                      _iterator6.return();
                    }
                  } finally {
                    if (_didIteratorError6) {
                      throw _iteratorError6;
                    }
                  }
                }

                var _iteratorNormalCompletion7 = true;
                var _didIteratorError7 = false;
                var _iteratorError7 = undefined;

                try {
                  for (var _iterator7 = x.test_recommended_for[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                    var _y3 = _step7.value;

                    if (_y3 == this.test_recommended_for) {
                      arr2.push(x);
                    }
                  }
                } catch (err) {
                  _didIteratorError7 = true;
                  _iteratorError7 = err;
                } finally {
                  try {
                    if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                      _iterator7.return();
                    }
                  } finally {
                    if (_didIteratorError7) {
                      throw _iteratorError7;
                    }
                  }
                }

                this.risk_test = arr1.filter(function (value) {
                  return arr2.includes(value);
                });
              }
            }
          } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                _iterator3.return();
              }
            } finally {
              if (_didIteratorError3) {
                throw _iteratorError3;
              }
            }
          }

          console.log('item', this.risk_test);

          if (this.risk_test.length > 0) {
            this.risk_test.sort(function (a, b) {
              return a.test_name.localeCompare(b.test_name);
            });
          } else {
            this.util.showToast('No Data Found', 'danger', 'bottom');
          }
        }
      }, {
        key: "getAgeGroup",
        value: function getAgeGroup() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.getAgeGroup().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(data);

                                if (data) {
                                  this.age_groups = data;
                                }

                              case 2:
                              case "end":
                                return _context.stop();
                            }
                          }
                        }, _callee, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "getRecommendedFor",
        value: function getRecommendedFor() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.api.getRecommendedFor().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log(data);
                                this.recommended_fors = data;

                              case 2:
                              case "end":
                                return _context3.stop();
                            }
                          }
                        }, _callee3, this);
                      }));
                    }).catch(function (error) {
                      console.log(error);
                    });

                  case 2:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }]);

      return RiskPage;
    }();

    RiskPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    RiskPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-app-risk',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./risk.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/risk/risk.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./risk.page.scss */
      "./src/app/pages/risk/risk.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])], RiskPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-risk-risk-module-es5.js.map