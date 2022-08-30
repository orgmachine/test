(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-test-test-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n  <div class=\"container\">\n    <div class=\"cart-div deal_detail\">\n     \n        <div class=\"test__heading\">\n          <div>\n            <h3 _ngcontent-ovj-c5=\"\">{{test?.test_name}}</h3>\n          </div>\n          <div>\n            <ion-button (click)=\"book()\" style=\"margin-right: 20px\"\n              >Book Here</ion-button\n            >\n            <ion-button (click)=\"openQuery()\">Get a call back</ion-button>\n          </div>\n        </div>\n\t\t <div class=\"test\">\n        <div class=\"test__navigation\">\n          <button (click)=\"openTab('Description')\" class=\"test__tab \" [ngClass]=\"status==='Description'?'active':''\">\n            Description\n          </button>\n          <button (click)=\"openTab('Parameter')\" class=\"test__tab\" [ngClass]=\"status==='Parameter'?'active':''\">\n            Parameter Included\n          </button>\n          <button (click)=\"openTab('Preparations')\" class=\"test__tab\" [ngClass]=\"status==='Preparations'?'active':''\">\n            Preparations\n          </button>\n          <button (click)=\"openTab('FAQ')\" class=\"test__tab\" [ngClass]=\"status==='FAQ'?'active':''\">\n            FAQ's\n          </button>\n        </div>\n      \n\n      <div>\n        <p class=\"Description section\" [innerHtml]=\"test?.description\"></p>\n      </div>\n\n      <div class=\"gray-band\">\n        <div class=\"Parameter invisible section\">\n            <h3 class=\"heading\">\n               Test Details (Parameters included : {{test?.parameter.length}})\n            </h3>\n          <ion-list style=\"padding: 0px\" *ngFor=\"let data of test?.parameter\">\n             <div\n               class=\"panel-body parameterlist\"\n               style=\"padding-bottom: 0px\"\n             >\n               <p style=\"margin-bottom: 0px\">{{data.item_text}}</p>\n             </div>\n          </ion-list>\n        </div>\n        <!-- level one usp -->\n        <!-- level two usp -->\n        <div class=\"usplevel_two Preparations invisible section\">\n         <p [innerHtml]=\"test?.preparation\"></p>\n          <ul>\n            <li>\n              <p>\n                Test Recommended for:<strong\n                  ><span *ngFor=\"let g of gender_recomendation;let last = last;\">{{g}}<span *ngIf=\"!last\">, &nbsp;</span></span></strong\n                >\n              </p>\n            </li>\n            <li>\n              <p>\n                Recommended for age:<strong\n                  ><span *ngFor=\"let a of age_recomendation;let last = last;\">{{a}}<span *ngIf=\"!last\">, &nbsp;</span></span></strong\n                >\n              </p>\n            </li>\n            <li>\n              <p>\n                Home Collection<strong\n                  ><span *ngIf=\"test?.home_visit_possible == 0\">No</span\n                  ><span *ngIf=\"test?.home_visit_possible == 1\"\n                    >Yes</span\n                  ></strong\n                >\n              </p>\n            </li>\n          </ul>\n        </div>\n        <!-- level two usp -->\n\n         <div\n          class=\"panel-group accordionpanel FAQ invisible section\"\n         >\n         <div *ngFor=\"let item of test?.faqs;let i =index;\">\n            <h3 class=\"heading\">Q{{i+1}}) {{item.question}}</h3>\n            <p>A{{i+1}}) {{item.answer}}</p>\n         </div>\n      </div>\n      <div class=\"clear\"></div>\n      </div></div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/test/test-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TestPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageRoutingModule", function() { return TestPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_3__["TestPage"]
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/test/test.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/*! exports provided: TestPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPageModule", function() { return TestPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./test-routing.module */ "./src/app/pages/test/test-routing.module.ts");
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./test.page */ "./src/app/pages/test/test.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let TestPageModule = class TestPageModule {
};
TestPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _test_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_6__["TestPage"]]
    })
], TestPageModule);



/***/ }),

/***/ "./src/app/pages/test/test.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .darken {\n  margin-bottom: 10px;\n}\nion-content .active {\n  --background: #fff;\n  --border-color: transparent;\n  border: 1px solid #dbd9d9;\n  cursor: pointer;\n}\nion-content .not-active {\n  --background: #f5f5f5;\n  --border-color: transparent;\n  border: 1px solid #dbd9d9;\n  border-radius: 4px;\n}\nion-content .heading {\n  margin: 0px;\n  font-weight: bold;\n  font-size: 18px;\n}\nion-content .arrow-icon {\n  height: 25px;\n  width: 25px;\n}\nion-content .detail-div {\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 6px 10px rgba(148, 148, 148, 0.5);\n  overflow: hidden;\n  margin-top: 30px;\n  padding: 0px 20px 12px 15px !important;\n}\nion-content .title {\n  color: #fff;\n  padding: 10px 30px;\n  background: #007c9d;\n  margin-left: -20px;\n  margin-right: -20px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\nion-content .green-band {\n  background: #aca9a8;\n  padding: 10px;\n  padding: 10px 30px;\n  height: 44px;\n  color: #fff;\n  font-weight: 600;\n}\nion-content .accordion-option {\n  width: 100%;\n  float: left;\n  clear: both;\n  margin: 15px 0;\n}\nion-content .accordionpanel {\n  margin: 18px 0;\n}\nion-content .panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);\n}\nion-content .panel-default {\n  border-color: #ddd;\n}\nion-content .panel-default > .panel-heading {\n  color: #333;\n  background-color: #fff;\n  border-color: #e4e5e7;\n  padding: 0;\n}\nion-content .panel-title {\n  background: #ebebeb;\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n  padding: 15px 10px;\n}\nion-content .panel-default > .panel-heading {\n  display: block;\n}\nion-content .collapse.in {\n  display: block;\n}\nion-content .panel-group .panel-heading + .panel-collapse > .panel-body {\n  border-top: 1px solid #ddd;\n  border-top-color: #dddddd;\n}\nion-content .panel-body {\n  padding: 15px;\n}\nion-content .parameterlist {\n  font-size: 15px;\n}\nion-content .cart-div .step-div {\n  padding: 20px 15px;\n}\nion-content .step-div {\n  position: relative;\n  padding: 30px 35px;\n}\nion-content .step-div h1 {\n  font-size: 25px;\n  text-transform: capitalize;\n  font-weight: 500;\n  margin: 0;\n  padding: 0;\n}\nion-content .step-div p {\n  font-weight: 400;\n  font-size: 15px;\n  padding: 13px 0 0 0;\n  padding-top: 13px;\n  margin: 0;\n}\nion-content .parameterinc {\n  color: #fff;\n  font-size: 17px !important;\n  padding-top: 10px !important;\n}\nion-content .price {\n  color: #dcf9fb;\n  font-size: 19px;\n}\nion-content .rupeesign {\n  font-family: Hind, sans-serif;\n}\nion-content .step-div h2 {\n  font-size: 25px;\n  text-transform: capitalize;\n  font-weight: 500;\n  color: #fff;\n  margin: 0;\n  padding: 0;\n}\nion-content .package_rating {\n  margin-top: 10px;\n  background: #fff;\n  border-radius: 40px;\n  font-weight: bold;\n  display: inline-block;\n  padding: 6px 15px 2px 14px;\n  color: #484b4b;\n}\nion-content .pro-content-area {\n  padding: 25px 25px 0px 25px;\n  margin-bottom: 5px;\n  float: left;\n}\nion-content .pro-content-area .metaFooterToggleLink {\n  font-size: 15px;\n  margin-bottom: 5px;\n  padding-right: 0px;\n  text-align: justify;\n}\nion-content .covidsafetyassured {\n  display: block;\n  padding: 0px 9px;\n  float: none;\n  width: 180px;\n  margin: 0px auto 20px auto;\n}\nion-content .covidsafetyassured img {\n  border-right: 1px solid #c2e2f4;\n  display: inline-block;\n  margin-top: 0px;\n  padding-right: 6px;\n  padding-top: 5px;\n}\nion-content .covidsafetyassured p {\n  font-size: 14px;\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #00a0a8;\n  line-height: 16px;\n  padding: 7px 20px 5px 10px;\n  vertical-align: top;\n}\nion-content .covidsafetyassured span {\n  clear: both;\n  display: block;\n  color: #000;\n}\nion-content .samplesmartreport {\n  border-radius: 3px;\n  display: block;\n  padding: 0px 9px;\n  float: none;\n  width: 180px;\n  margin: 0px auto 20px auto;\n}\nion-content .samplesmartreport p {\n  font-size: 14px;\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #00a0a8;\n  line-height: 16px;\n  padding: 7px 20px 5px 10px;\n  vertical-align: top;\n}\nion-content .usplevel_one {\n  display: block;\n  padding: 10px 20px 10px 20px;\n}\nion-content .usplevel_one ul li {\n  display: inline-block;\n  width: 24%;\n  vertical-align: top;\n}\nion-content .usplevel_two ul li p strong {\n  clear: both;\n  display: block;\n}\nion-content .usplevel_two {\n  /*padding: 0px 25px 0px 25px;\n  background: #d7e6ea;\n  clear: both;\n  box-shadow: 0px 2px 6px #d9d9d9;\n  margin: 20px 20px 10px 20px;\n  border-radius: 3px;*/\n}\nion-content .usplevel_two ul {\n  margin: 0px;\n  padding: 15px 0px;\n  list-style: none;\n}\nion-content .usplevel_two ul li {\n  display: inline-block;\n  vertical-align: top;\n  background: url(/img/arrow_dtl.png);\n  background-position-x: 0%;\n  background-position-y: 0%;\n  background-repeat: repeat;\n  background-position: left 0px;\n  background-repeat: no-repeat;\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-left: 10px;\n}\nion-content .usplevel_two ul li p {\n  display: inline-block;\n  margin-bottom: 0px;\n  color: #000;\n  font-size: 14px;\n  line-height: 18px;\n  padding-right: 35px;\n}\nion-content .detailbtm_book ul {\n  display: block;\n  text-align: center;\n  margin-top: 60px;\n  margin-bottom: 30px;\n}\nion-content .detailbtm_book ul li {\n  display: inline-block;\n}\nion-content .cart-div.deal_detail {\n  margin-bottom: 40px;\n}\n.test__heading {\n  display: -webkit-box;\n  display: flex;\n  padding: 16px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-align: center;\n          align-items: center;\n  border-radius: 20px;\n}\n.test__navigation {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: left;\n          justify-content: left;\n}\n.test__tab {\n  margin-right: 1px;\n  border-radius: 0px 0px 10px 10px;\n  padding: 12px 15px;\n  font-size: 15px;\n}\n.test__tab:hover {\n  color: #fff;\n  background: #56ccf2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#2f80ed), to(#56ccf2));\n  background: linear-gradient(to right, #2f80ed, #56ccf2);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n.section {\n  padding: 10px 30px;\n  min-height: 400px;\n  font-size: 14px;\n  line-height: 2rem;\n}\n.invisible {\n  display: none;\n}\n.test {\n  border: 1px solid #ccc;\n}\n.active {\n  color: #fff;\n  background: #56ccf2;\n  /* fallback for old browsers */\n  /* Chrome 10-25, Safari 5.1-6 */\n  background: -webkit-gradient(linear, left top, right top, from(#2f80ed), to(#56ccf2));\n  background: linear-gradient(to right, #2f80ed, #56ccf2);\n  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\n}\n.gray-band {\n  padding-top: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFx0ZXN0XFx0ZXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdC90ZXN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLG1CQUFBO0FDQUo7QURFRTtFQUNFLGtCQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7QUNBSjtBREdFO0VBQ0UscUJBQUE7RUFDQSwyQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNESjtBRElFO0VBQ0UsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQ0ZKO0FESUU7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ0ZKO0FES0U7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0NBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0NBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDSEo7QURLRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0hKO0FES0U7RUFDRSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0FDSEo7QURLRTtFQUNFLGNBQUE7QUNISjtBREtFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBRUEseUNBQUE7QUNISjtBREtFO0VBQ0Usa0JBQUE7QUNISjtBREtFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxVQUFBO0FDSEo7QURNRTtFQUNFLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQ0pKO0FETUU7RUFDRSxjQUFBO0FDSko7QURNRTtFQUNFLGNBQUE7QUNKSjtBRE1FO0VBQ0UsMEJBQUE7RUFDQSx5QkFBQTtBQ0pKO0FETUU7RUFDRSxhQUFBO0FDSko7QURNRTtFQUNFLGVBQUE7QUNKSjtBRFFFO0VBQ0Usa0JBQUE7QUNOSjtBRFVFO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUko7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxTQUFBO0FDUko7QURVRTtFQUNFLFdBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQUFBO0FDUko7QURVRTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDUko7QURVRTtFQUNFLDZCQUFBO0FDUko7QURVRTtFQUNFLGVBQUE7RUFDQSwwQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FDUko7QURVRTtFQUNFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtFQUNBLGNBQUE7QUNSSjtBRFVFO0VBQ0UsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNSSjtBRFVFO0VBQ0UsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ1JKO0FEVUU7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0FDUko7QURVRTtFQUNFLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFVFO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FDUko7QURVRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtBQ1JKO0FEVUU7RUFDRSxlQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlFO0VBQ0UsY0FBQTtFQUNBLDRCQUFBO0FDVko7QURZRTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FDVko7QURZRTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FDVko7QURZRTtFQUNFOzs7OztzQkFBQTtBQ0xKO0FEWUU7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ1ZKO0FEY0U7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FDWko7QURjRTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNaSjtBRGVFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQ2JKO0FEZUU7RUFDRSxxQkFBQTtBQ2JKO0FEZUU7RUFDRSxtQkFBQTtBQ2JKO0FEa0JFO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsbUJBQUE7QUNmSjtBRGtCRTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHNCQUFBO1VBQUEscUJBQUE7QUNoQko7QURvQkU7RUFDRSxpQkFBQTtFQUFpQixnQ0FBQTtFQUNyQixrQkFBQTtFQUNBLGVBQUE7QUNqQkE7QURvQkM7RUFDSyxXQUFBO0VBQ0EsbUJBQUE7RUFBcUIsOEJBQUE7RUFLbEIsK0JBQUE7RUFDSCxxRkFBQTtFQUFBLHVEQUFBO0VBSUcscUVBQUE7QUN2QlQ7QUQ0QkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDekJGO0FENEJBO0VBQ0UsYUFBQTtBQ3pCRjtBRDJCQTtFQUNFLHNCQUFBO0FDeEJGO0FEMEJDO0VBQ0ssV0FBQTtFQUNBLG1CQUFBO0VBQXFCLDhCQUFBO0VBS2xCLCtCQUFBO0VBQ0gscUZBQUE7RUFBQSx1REFBQTtFQUlHLHFFQUFBO0FDNUJUO0FEK0JBO0VBQ0UsaUJBQUE7QUM1QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZXN0L3Rlc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIC5kYXJrZW4ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICAtLWJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjZGJkOWQ5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLm5vdC1hY3RpdmUge1xyXG4gICAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xyXG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RiZDlkOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5nIHtcclxuICAgIG1hcmdpbjogMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG4gIC5hcnJvdy1pY29uIHtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmRldGFpbC1kaXYge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgNnB4IDEwcHggcmdiYSgxNDgsIDE0OCwgMTQ4LCAwLjUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICBwYWRkaW5nOiAwcHggMjBweCAxMnB4IDE1cHggIWltcG9ydGFudDtcclxuICB9XHJcbiAgLnRpdGxlIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gICAgYmFja2dyb3VuZDogIzAwN2M5ZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjBweDtcclxuICAgIG1hcmdpbi1yaWdodDogLTIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLmdyZWVuLWJhbmQge1xyXG4gICAgYmFja2dyb3VuZDogI2FjYTlhODtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDQ0cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgfVxyXG4gIC5hY2NvcmRpb24tb3B0aW9uIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gIH1cclxuICAuYWNjb3JkaW9ucGFuZWwge1xyXG4gICAgbWFyZ2luOiAxOHB4IDA7XHJcbiAgfVxyXG4gIC5wYW5lbCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDFweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICB9XHJcbiAgLnBhbmVsLWRlZmF1bHQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG4gIH1cclxuICAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxuICAucGFuZWwtdGl0bGUge1xyXG4gICAgYmFja2dyb3VuZDogI2ViZWJlYjtcclxuICAgIG1hcmdpbi10b3A6IDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgfVxyXG4gIC5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIC5jb2xsYXBzZS5pbiB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItdG9wLWNvbG9yOiByZ2IoMjIxLCAyMjEsIDIyMSk7XHJcbiAgfVxyXG4gIC5wYW5lbC1ib2R5IHtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgfVxyXG4gIC5wYXJhbWV0ZXJsaXN0IHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbiAgLmNhcnQtZGl2IHtcclxuICB9XHJcbiAgLmNhcnQtZGl2IC5zdGVwLWRpdiB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHg7XHJcbiAgfVxyXG4gIC5jYXJ0LXNlYyB7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDM1cHg7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiBoMSB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICAuc3RlcC1kaXYgcCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMTNweCAwIDAgMDtcclxuICAgIHBhZGRpbmctdG9wOiAxM3B4O1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICAucGFyYW1ldGVyaW5jIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC1zaXplOiAxN3B4ICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAucHJpY2Uge1xyXG4gICAgY29sb3I6ICNkY2Y5ZmI7XHJcbiAgICBmb250LXNpemU6IDE5cHg7XHJcbiAgfVxyXG4gIC5ydXBlZXNpZ24ge1xyXG4gICAgZm9udC1mYW1pbHk6IEhpbmQsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIC5zdGVwLWRpdiBoMiB7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIC5wYWNrYWdlX3JhdGluZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDZweCAxNXB4IDJweCAxNHB4O1xyXG4gICAgY29sb3I6ICM0ODRiNGI7XHJcbiAgfVxyXG4gIC5wcm8tY29udGVudC1hcmVhIHtcclxuICAgIHBhZGRpbmc6IDI1cHggMjVweCAwcHggMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAucHJvLWNvbnRlbnQtYXJlYSAubWV0YUZvb3RlclRvZ2dsZUxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICB9XHJcbiAgLmNvdmlkc2FmZXR5YXNzdXJlZCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIH1cclxuICAuY292aWRzYWZldHlhc3N1cmVkIGltZyB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzJlMmY0O1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gICAgcGFkZGluZy10b3A6IDVweDtcclxuICB9XHJcbiAgLmNvdmlkc2FmZXR5YXNzdXJlZCBwIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIGNvbG9yOiAjMDBhMGE4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC5jb3ZpZHNhZmV0eWFzc3VyZWQgc3BhbiB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgfVxyXG4gIC5zYW1wbGVzbWFydHJlcG9ydCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDBweCA5cHg7XHJcbiAgICBmbG9hdDogbm9uZTtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xyXG4gIH1cclxuICAuc2FtcGxlc21hcnRyZXBvcnQgcCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwYTBhODtcclxuICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgcGFkZGluZzogN3B4IDIwcHggNXB4IDEwcHg7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIH1cclxuICAuZ3JheS1iYW5kIHtcclxuICB9XHJcbiAgLnVzcGxldmVsX29uZSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF9vbmUgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgd2lkdGg6IDI0JTtcclxuICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGkgcCBzdHJvbmcge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLnVzcGxldmVsX3R3byB7XHJcbiAgICAvKnBhZGRpbmc6IDBweCAyNXB4IDBweCAyNXB4O1xyXG4gIGJhY2tncm91bmQ6ICNkN2U2ZWE7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggI2Q5ZDlkOTtcclxuICBtYXJnaW46IDIwcHggMjBweCAxMHB4IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogM3B4OyovXHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwge1xyXG4gICAgbWFyZ2luOiAwcHg7XHJcbiAgICBwYWRkaW5nOiAxNXB4IDBweDtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGk6bnRoLWNoaWxkKDEpIHtcclxuICB9XHJcbiAgLnVzcGxldmVsX3R3byB1bCBsaSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKC9pbWcvYXJyb3dfZHRsLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbi15OiAwJTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDBweDtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgfVxyXG4gIC51c3BsZXZlbF90d28gdWwgbGkgcCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMzVweDtcclxuICB9XHJcblxyXG4gIC5kZXRhaWxidG1fYm9vayB1bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAuZGV0YWlsYnRtX2Jvb2sgdWwgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIH1cclxuICAuY2FydC1kaXYuZGVhbF9kZXRhaWwge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi50ZXN0IHtcclxuICAmX19oZWFkaW5nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG5cclxuICAmX19uYXZpZ2F0aW9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGxlZnQ7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICZfX3RhYiB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6MXB4O2JvcmRlci1yYWRpdXM6IDBweCAwcHggMTBweCAxMHB4O1xyXG5wYWRkaW5nOiAxMnB4IDE1cHg7XHJcbmZvbnQtc2l6ZTogMTVweDtcclxuXHJcbiAgIFxyXG5cdCY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgYmFja2dyb3VuZDogIzU2Y2NmMjsgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChcclxuICAgICAgICB0byByaWdodCxcclxuICAgICAgICAjMmY4MGVkLFxyXG4gICAgICAgICM1NmNjZjJcclxuICAgICAgKTsgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICMyZjgwZWQsXHJcbiAgICAgICAgIzU2Y2NmMlxyXG4gICAgICApOyAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2VjdGlvbiB7XHJcbiAgcGFkZGluZzogMTBweCAzMHB4O1xyXG4gIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMnJlbTtcclxufVxyXG5cclxuLmludmlzaWJsZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG4udGVzdCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxufVxyXG4gLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjNTZjY2YyOyAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXHJcbiAgICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KFxyXG4gICAgICAgIHRvIHJpZ2h0LFxyXG4gICAgICAgICMyZjgwZWQsXHJcbiAgICAgICAgIzU2Y2NmMlxyXG4gICAgICApOyAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXHJcbiAgICAgICAgdG8gcmlnaHQsXHJcbiAgICAgICAgIzJmODBlZCxcclxuICAgICAgICAjNTZjY2YyXHJcbiAgICAgICk7IC8qIFczQywgSUUgMTArLyBFZGdlLCBGaXJlZm94IDE2KywgQ2hyb21lIDI2KywgT3BlcmEgMTIrLCBTYWZhcmkgNysgKi9cclxuICAgIH0gXHJcblx0XHJcbi5ncmF5LWJhbmQge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59IiwiaW9uLWNvbnRlbnQgLmRhcmtlbiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5pb24tY29udGVudCAuYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmQ5ZDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbmlvbi1jb250ZW50IC5ub3QtYWN0aXZlIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZjVmNWY1O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmQ5ZDk7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cbmlvbi1jb250ZW50IC5oZWFkaW5nIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuYXJyb3ctaWNvbiB7XG4gIGhlaWdodDogMjVweDtcbiAgd2lkdGg6IDI1cHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsLWRpdiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCA2cHggMTBweCByZ2JhKDE0OCwgMTQ4LCAxNDgsIDAuNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHBhZGRpbmc6IDBweCAyMHB4IDEycHggMTVweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnRpdGxlIHtcbiAgY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgYmFja2dyb3VuZDogIzAwN2M5ZDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBtYXJnaW4tdG9wOiAwO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuaW9uLWNvbnRlbnQgLmdyZWVuLWJhbmQge1xuICBiYWNrZ3JvdW5kOiAjYWNhOWE4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gIGhlaWdodDogNDRweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5pb24tY29udGVudCAuYWNjb3JkaW9uLW9wdGlvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG4gIG1hcmdpbjogMTVweCAwO1xufVxuaW9uLWNvbnRlbnQgLmFjY29yZGlvbnBhbmVsIHtcbiAgbWFyZ2luOiAxOHB4IDA7XG59XG5pb24tY29udGVudCAucGFuZWwge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xufVxuaW9uLWNvbnRlbnQgLnBhbmVsLWRlZmF1bHQge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG5pb24tY29udGVudCAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcbiAgY29sb3I6ICMzMzM7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1jb2xvcjogI2U0ZTVlNztcbiAgcGFkZGluZzogMDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC10aXRsZSB7XG4gIGJhY2tncm91bmQ6ICNlYmViZWI7XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHBhZGRpbmc6IDE1cHggMTBweDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC1kZWZhdWx0ID4gLnBhbmVsLWhlYWRpbmcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbmlvbi1jb250ZW50IC5jb2xsYXBzZS5pbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnBhbmVsLWdyb3VwIC5wYW5lbC1oZWFkaW5nICsgLnBhbmVsLWNvbGxhcHNlID4gLnBhbmVsLWJvZHkge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2RkZGRkZDtcbn1cbmlvbi1jb250ZW50IC5wYW5lbC1ib2R5IHtcbiAgcGFkZGluZzogMTVweDtcbn1cbmlvbi1jb250ZW50IC5wYXJhbWV0ZXJsaXN0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNhcnQtZGl2IC5zdGVwLWRpdiB7XG4gIHBhZGRpbmc6IDIwcHggMTVweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwLWRpdiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzBweCAzNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXAtZGl2IGgxIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXAtZGl2IHAge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDE1cHg7XG4gIHBhZGRpbmc6IDEzcHggMCAwIDA7XG4gIHBhZGRpbmctdG9wOiAxM3B4O1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAucGFyYW1ldGVyaW5jIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTdweCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLXRvcDogMTBweCAhaW1wb3J0YW50O1xufVxuaW9uLWNvbnRlbnQgLnByaWNlIHtcbiAgY29sb3I6ICNkY2Y5ZmI7XG4gIGZvbnQtc2l6ZTogMTlweDtcbn1cbmlvbi1jb250ZW50IC5ydXBlZXNpZ24ge1xuICBmb250LWZhbWlseTogSGluZCwgc2Fucy1zZXJpZjtcbn1cbmlvbi1jb250ZW50IC5zdGVwLWRpdiBoMiB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5pb24tY29udGVudCAucGFja2FnZV9yYXRpbmcge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiA0MHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwYWRkaW5nOiA2cHggMTVweCAycHggMTRweDtcbiAgY29sb3I6ICM0ODRiNGI7XG59XG5pb24tY29udGVudCAucHJvLWNvbnRlbnQtYXJlYSB7XG4gIHBhZGRpbmc6IDI1cHggMjVweCAwcHggMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmbG9hdDogbGVmdDtcbn1cbmlvbi1jb250ZW50IC5wcm8tY29udGVudC1hcmVhIC5tZXRhRm9vdGVyVG9nZ2xlTGluayB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG5pb24tY29udGVudCAuY292aWRzYWZldHlhc3N1cmVkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDBweCA5cHg7XG4gIGZsb2F0OiBub25lO1xuICB3aWR0aDogMTgwcHg7XG4gIG1hcmdpbjogMHB4IGF1dG8gMjBweCBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLmNvdmlkc2FmZXR5YXNzdXJlZCBpbWcge1xuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjYzJlMmY0O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi10b3A6IDBweDtcbiAgcGFkZGluZy1yaWdodDogNnB4O1xuICBwYWRkaW5nLXRvcDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLmNvdmlkc2FmZXR5YXNzdXJlZCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICMwMGEwYTg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlvbi1jb250ZW50IC5jb3ZpZHNhZmV0eWFzc3VyZWQgc3BhbiB7XG4gIGNsZWFyOiBib3RoO1xuICBkaXNwbGF5OiBibG9jaztcbiAgY29sb3I6ICMwMDA7XG59XG5pb24tY29udGVudCAuc2FtcGxlc21hcnRyZXBvcnQge1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAwcHggOXB4O1xuICBmbG9hdDogbm9uZTtcbiAgd2lkdGg6IDE4MHB4O1xuICBtYXJnaW46IDBweCBhdXRvIDIwcHggYXV0bztcbn1cbmlvbi1jb250ZW50IC5zYW1wbGVzbWFydHJlcG9ydCBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbiAgY29sb3I6ICMwMGEwYTg7XG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICBwYWRkaW5nOiA3cHggMjBweCA1cHggMTBweDtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF9vbmUge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweCAyMHB4IDEwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF9vbmUgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAyNCU7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5pb24tY29udGVudCAudXNwbGV2ZWxfdHdvIHVsIGxpIHAgc3Ryb25nIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuaW9uLWNvbnRlbnQgLnVzcGxldmVsX3R3byB7XG4gIC8qcGFkZGluZzogMHB4IDI1cHggMHB4IDI1cHg7XG4gIGJhY2tncm91bmQ6ICNkN2U2ZWE7XG4gIGNsZWFyOiBib3RoO1xuICBib3gtc2hhZG93OiAwcHggMnB4IDZweCAjZDlkOWQ5O1xuICBtYXJnaW46IDIwcHggMjBweCAxMHB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDNweDsqL1xufVxuaW9uLWNvbnRlbnQgLnVzcGxldmVsX3R3byB1bCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nOiAxNXB4IDBweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF90d28gdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG4gIGJhY2tncm91bmQ6IHVybCgvaW1nL2Fycm93X2R0bC5wbmcpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXg6IDAlO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uLXk6IDAlO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IDBweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcGFkZGluZy1yaWdodDogMTVweDtcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbmlvbi1jb250ZW50IC51c3BsZXZlbF90d28gdWwgbGkgcCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMThweDtcbiAgcGFkZGluZy1yaWdodDogMzVweDtcbn1cbmlvbi1jb250ZW50IC5kZXRhaWxidG1fYm9vayB1bCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDYwcHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAuZGV0YWlsYnRtX2Jvb2sgdWwgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5pb24tY29udGVudCAuY2FydC1kaXYuZGVhbF9kZXRhaWwge1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuXG4udGVzdF9faGVhZGluZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbn1cbi50ZXN0X19uYXZpZ2F0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xufVxuLnRlc3RfX3RhYiB7XG4gIG1hcmdpbi1yaWdodDogMXB4O1xuICBib3JkZXItcmFkaXVzOiAwcHggMHB4IDEwcHggMTBweDtcbiAgcGFkZGluZzogMTJweCAxNXB4O1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGVzdF9fdGFiOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJhY2tncm91bmQ6ICM1NmNjZjI7XG4gIC8qIGZhbGxiYWNrIGZvciBvbGQgYnJvd3NlcnMgKi9cbiAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjgwZWQsICM1NmNjZjIpO1xuICAvKiBDaHJvbWUgMTAtMjUsIFNhZmFyaSA1LjEtNiAqL1xuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyZjgwZWQsICM1NmNjZjIpO1xuICAvKiBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICovXG59XG5cbi5zZWN0aW9uIHtcbiAgcGFkZGluZzogMTBweCAzMHB4O1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cblxuLmludmlzaWJsZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi50ZXN0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbn1cblxuLmFjdGl2ZSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kOiAjNTZjY2YyO1xuICAvKiBmYWxsYmFjayBmb3Igb2xkIGJyb3dzZXJzICovXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmY4MGVkLCAjNTZjY2YyKTtcbiAgLyogQ2hyb21lIDEwLTI1LCBTYWZhcmkgNS4xLTYgKi9cbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMmY4MGVkLCAjNTZjY2YyKTtcbiAgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xufVxuXG4uZ3JheS1iYW5kIHtcbiAgcGFkZGluZy10b3A6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/test/test.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/*! exports provided: TestPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestPage", function() { return TestPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");








let TestPage = class TestPage {
    constructor(route, router, util, alertCtrl, modalController, api) {
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
        this.tab = -1;
        // this.getIndividualTest();
        this.getFacilities();
        // this.getAssociatedTests();
        this.getReviews();
    }
    showContent(item) {
        return this.tab === item;
    }
    showMilestone(item) {
        this.tab = item;
    }
    showMilestone1() {
        this.showContent1 = !this.showContent1;
    }
    getIndividualTest() {
        this.api.getAllIndividualTest().then(data => {
            this.all_tests = data;
        }).catch(error => {
            console.log(error);
        });
    }
    book() {
        this.util.show('Please wait....');
        var prdexist = false;
        if (this.addToBucket.length > 0) {
            for (var x of this.addToBucket) {
                if (x == this.testid) {
                    prdexist = true;
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
        console.log(this.newBucketArray);
        // this.searchLabs2();
        this.searchLabs3();
    }
    searchLabs2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (this.addToBucket.length === 0) {
                this.util.showToast('Select your test', 'danger', 'bottom');
                return false;
            }
            else if (this.pincode === '' || this.pincode == null) {
                this.util.showToast('Pincode is required', 'danger', 'bottom');
                return false;
            }
            console.log(this.pincode);
            yield this.api.getSecondaryLabsByPin(this.pincode).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.secondary_labs = data;
                if (this.secondary_labs.length === 0) {
                    this.util.showToast('There are no labs found for this pincode', 'danger', 'bottom');
                    return false;
                }
                console.log(this.secondary_labs);
                console.log(this.addToBucket);
                this.associated_test = [];
                if (data) {
                    var i = 1;
                    yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        console.log(element.primarylab);
                        yield this.api.getVenueDetails(element.primarylab).then((data6) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            console.log(data6);
                            if (data6) {
                                element.primarylabdata = data6;
                                element.primarylogo = data6.logo;
                            }
                        })).catch(error => {
                            this.util.hide();
                            console.log(error);
                        });
                        console.log(element);
                        var j = 1;
                        for (var y of this.addToBucket) {
                            console.log(y);
                            yield this.api.getAssociatedTestByProductAndBranch(element.uid, y).then((data1) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                console.log(data1);
                                if (data1.length > 0) {
                                    yield this.api.getLabTestById(data1[0].individual_test).then((data2) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                                        if (data2.length > 0) {
                                            data1[0].itid = data2[0];
                                        }
                                    })).catch(error => {
                                        this.util.hide();
                                        console.log(error);
                                    });
                                    this.associated_test.push(data1[0]);
                                    console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);
                                }
                                if (i == this.secondary_labs.length && j == this.addToBucket.length) {
                                    yield this.searchLabs3();
                                }
                            })).catch(error => {
                                this.util.hide();
                                console.log(error);
                            });
                            j++;
                        }
                        if (i == this.secondary_labs.length && this.associated_test.length == 0) {
                            yield this.searchLabs3();
                        }
                        i++;
                    }));
                }
                else {
                    yield this.searchLabs3();
                }
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    searchLabs3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
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
            console.log(this.secondary_labs);
            // console.log(this.associated_test);
            yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                var price = 0;
                var selling_price = 0;
                var all_test_data = [];
                var all_test1_data = [];
                var available_test = [];
                var not_available_test = [];
                console.log(this.associated_test);
                for (let x of this.associated_test) {
                    if (x.branch_id == element.uid) {
                        console.log('available data');
                        all_test_data.push(x);
                        available_test.push(x.itid.test_name);
                        price += x.price;
                        selling_price += x.selling_price;
                    }
                }
                for (let x of this.addToBucket) {
                    var is_available = false;
                    console.log(x);
                    for (var y of all_test_data) {
                        console.log(x + "==" + y.individual_test);
                        if (x == y.individual_test) {
                            is_available = true;
                        }
                    }
                    console.log(is_available);
                    if (is_available == false) {
                        all_test1_data.push(x);
                    }
                }
                console.log(all_test1_data);
                var test2data = [];
                //newBucketArray
                let difference = this.newBucketArray.filter(x => !available_test.includes(x));
                not_available_test.push(difference);
                test2data.push(difference);
                // for(var x of this.newBucketArray){
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
                var average_rating = 0;
                element.test_data = all_test_data;
                element.test1_data = all_test1_data;
                element.available_test = available_test;
                element.not_available_test = not_available_test;
                element.price = price;
                element.selling_price = selling_price;
                //var distance = await this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                var distance = 0;
                element.distance = distance;
                var rating_array = [];
                var facilities = [];
                for (let x of this.facilities) {
                    for (let y of element.facility) {
                        if (x.id == y) {
                            facilities.push(x);
                        }
                    }
                }
                console.log(facilities);
                element.facilities = facilities;
                for (let x of this.reviews) {
                    if (x.lab_id == element.id) {
                        rating_array.push(x);
                    }
                }
                element.total_reviews = 0;
                if (rating_array.length > 0) {
                    var avgrate = 0;
                    var rating_length = rating_array.length;
                    for (var x of rating_array) {
                        avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                    }
                    average_rating = avgrate / rating_length;
                    element.total_reviews = rating_array.length;
                }
                element.average_rating = average_rating;
            }));
            console.log(this.secondary_labs);
            // return false;
            this.secondary_labs.sort(this.compare);
            var newSortedArray = [];
            for (var x of this.secondary_labs) {
                if (x.test_data.length > 0) {
                    newSortedArray.push(x);
                }
            }
            this.secondary_labs = newSortedArray;
            console.log(this.secondary_labs);
            console.log(this.newBucketArray);
            console.log(this.addToBucket);
            const circularReplacer = () => {
                // Creating new WeakSet to keep 
                // track of previously seen objects
                const seen = new WeakSet();
                return (key, value) => {
                    // If type of value is an 
                    // object or value is null
                    if (typeof (value) === "object"
                        && value !== null) {
                        // If it has been seen before
                        if (seen.has(value)) {
                            return;
                        }
                        // Add current value to the set
                        seen.add(value);
                    }
                    // return the value
                    return value;
                };
            };
            let arr = [];
            for (let x of this.secondary_labs) {
                arr.push({
                    address: x.address,
                    available_test: x.available_test,
                    cod: x.cod,
                    cover: x.cover,
                    distance: x.distance,
                    price: x.price,
                    selling_price: x.selling_price,
                    total_reviews: x.total_reviews,
                    facilities: x.facilities,
                    id: x.id,
                    //lat:x.lat,
                    // lng:x.lng,
                    name: x.name,
                    lab_timings: x.lab_timings,
                    not_available_test: x.not_available_test,
                    logo: x.logo,
                    range_price: x.range_price,
                    service_delivery: x.service_delivery,
                    test1_data: x.test1_data,
                    test_data: x.test_data,
                    free_charge: x.free_charge,
                    page_slug: x.page_slug,
                    primarylogo: x.primarylogo,
                    primarylabdata: x.primarylabdata
                });
            }
            var jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(arr);
            localStorage.setItem('labsdata', jsonString);
            localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(this.newBucketArray));
            localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_7__["stringify"])(this.addToBucket));
            this.util.hide();
            this.router.navigate(['search-labs']);
        });
    }
    ngOnInit() {
        console.log("I am here");
        let id = localStorage.getItem('testid');
        this.testid = localStorage.getItem('testid');
        this.testname = localStorage.getItem('testname');
        console.log(this.testname);
        // this.addToBucket.push(id);
        // localStorage.setItem('addToBucket',this.addToBucket);
        this.pincode = localStorage.getItem('pincode');
        this.api.getIndividualTestById(id).then(data => {
            this.test = data[0];
            console.log(this.test);
            if (this.test.parameter.length > 0) {
                let outer_parameter_count = '';
                let inner_parameter_count = '';
                let outer_param = [];
                let inner_param = [];
                let arr = [];
                let outer_parameter_id = '';
                let inner_parameter_id = '';
                let inner_page_slug = '';
                for (let x of this.test.parameter) {
                    // console.log(x)
                    let count = 0;
                    for (let y of this.all_tests) {
                        if (x.item_id == y.id) {
                            console.log(y.parameter.length);
                            this.total_parameter_count = this.total_parameter_count + y.parameter.length;
                            console.log(this.total_parameter_count);
                            // outer_parameter_count = this.test.parameter.length;
                            // inner_param = y.parameter;
                            // inner_parameter_count = y.parameter.length;
                            // outer_param = this.test.parameter;
                            // outer_parameter_id = x.item_id;
                            // inner_parameter_id = y.id;
                            // inner_page_slug: x.page_slug;
                        }
                    }
                    // arr.push({
                    //   outer_parameter_count:outer_parameter_count,
                    //   inner_param:inner_param,
                    //   inner_parameter_count:inner_parameter_count,
                    //   outer_param:outer_param,
                    //   outer_parameter_id:outer_parameter_id,
                    //   inner_parameter_id:inner_parameter_id,
                    //   inner_page_slug:inner_page_slug
                    // })
                    console.log(arr);
                }
                console.log(this.total_parameter_count);
                // this.paramarr = arr;
                // console.log(this.paramarr)
            }
            else {
                this.test.parameter.push({ item_id: 1, item_text: this.test.test_name });
            }
            // this.newBucketArray.push(this.test.test_name)
            //localStorage.setItem('newBucketArray',this.newBucketArray)
            let test_recommended_for = [];
            let recommended_age = [];
            test_recommended_for = this.test.test_recommended_for;
            recommended_age = this.test.recommended_age;
            console.log(test_recommended_for);
            console.log(recommended_age);
            this.getAgeRecomendation(recommended_age);
            this.getGenderRecomendation(test_recommended_for);
        }).catch(error => {
            console.log(error);
        });
    }
    //open Tab
    openTab(tabName) {
        this.status = tabName;
        let v = document.getElementsByClassName(tabName);
        var i;
        var x = document.getElementsByClassName("section");
        console.log(x);
        for (i = 0; i < x.length; i++) {
            x[i].classList.add("invisible");
        }
        v[0].classList.remove("invisible");
    }
    getAgeRecomendation(arr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let x of arr) {
                this.age_recomendation.push(x.item_text);
                console.log(this.age_recomendation);
                // await this.api.getAgeRecomendationById(x).then(async(data) => {
                //   this.age_recomendation.push(data[0].name);
                //   console.log(this.age_recomendation);
                // }).catch(error => {
                //   console.log(error);
                // });
            }
        });
    }
    getGenderRecomendation(arr) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            for (let x of arr) {
                yield this.api.getGenderRecomendationById(x).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    this.gender_recomendation.push(data[0].name);
                    console.log(this.gender_recomendation);
                })).catch(error => {
                    console.log(error);
                });
            }
        });
    }
    openQuery() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_4__["MenuComponent"],
                cssClass: 'supportCss',
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
    getAssociatedTests() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getAssociatedTests().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log(data);
                this.associated_tests = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getFacilities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getFacilities().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log(data);
                this.facilities = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getReviews() {
        this.api.getReviews().then(data => {
            // console.log(data);
            this.reviews = data;
        }).catch(error => {
            console.log(error);
        });
    }
    searchLabs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            this.secondary_labs = [];
            // localStorage.removeItem('addToBucket');
            // localStorage.removeItem('newBucketArray');
            // localStorage.removeItem('labsdata');
            let lat = localStorage.getItem('lat');
            let lng = localStorage.getItem('lng');
            yield this.getAssociatedTest();
            yield this.api.getSecondaryLabs().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.all_labs = data;
                let pincode = [];
                this.util.hide();
                for (let x of this.all_labs) {
                    let delivery_pincode = [];
                    for (let y of x.delivery_pincode) {
                        if (y.item_text == this.pincode) {
                            // console.log('matched')
                            this.secondary_labs.push(x);
                        }
                    }
                }
                yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    var price = 0;
                    var selling_price = 0;
                    var all_test_data = [];
                    var all_test1_data = [];
                    var available_test = [];
                    var not_available_test = [];
                    for (let x of this.associated_test) {
                        // console.log(x);
                        if (x.branch_id == element.uid) {
                            // console.log('available data')
                            all_test_data.push(x);
                            available_test.push(x.itid.test_name);
                            price += x.price;
                            selling_price += x.selling_price;
                        }
                    }
                    for (let x of this.addToBucket) {
                        var is_available = false;
                        for (var y of all_test_data) {
                            if (x == y.individual_test) {
                                is_available = true;
                            }
                        }
                        if (is_available == false) {
                            all_test1_data.push(x);
                        }
                    }
                    var test2data = [];
                    for (let x of this.associated_tests) {
                        for (var y of all_test1_data) {
                            if (x.individual_test == y) {
                                test2data.push(x);
                                not_available_test.push(x.itid.test_name);
                            }
                        }
                    }
                    all_test1_data = test2data;
                    var average_rating = 0;
                    element.test_data = all_test_data;
                    element.test1_data = all_test1_data;
                    element.available_test = available_test;
                    element.not_available_test = not_available_test;
                    element.price = price;
                    element.selling_price = selling_price;
                    // console.log((lat +","+ lng+","+ element.lat+","+ element.lng));
                    var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                    // console.log(distance);
                    element.distance = distance;
                    var rating_array = [];
                    // var average_rating =[];
                    var facilities = [];
                    for (let x of this.facilities) {
                        for (let y of element.facility) {
                            if (x.id == y) {
                                console.log(x);
                                facilities.push(x);
                            }
                        }
                    }
                    console.log(facilities);
                    element.facilities = facilities;
                    for (let x of this.reviews) {
                        if (x.lab_id == element.id) {
                            rating_array.push(x);
                        }
                    }
                    element.total_reviews = 0;
                    if (rating_array.length > 0) {
                        var avgrate = 0;
                        var rating_length = rating_array.length;
                        for (var x of rating_array) {
                            avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                        }
                        average_rating = avgrate / rating_length;
                        element.total_reviews = rating_array.length;
                    }
                    element.average_rating = average_rating;
                }));
                this.secondary_labs.sort(this.compare);
                var newSortedArray = [];
                for (let x of this.secondary_labs) {
                    newSortedArray.push({
                        // accreditation: x.accreditation,
                        address: x.address,
                        available_test: x.available_test,
                        cod: x.cod,
                        cover: x.cover,
                        distance: x.distance,
                        price: x.price,
                        selling_price: x.selling_price,
                        total_reviews: x.total_reviews,
                        // delivery_pincode:x.delivery_pincode,
                        facilities: x.facilities,
                        id: x.id,
                        lat: x.lat,
                        lng: x.lng,
                        name: x.name,
                        not_available_test: x.not_available_test,
                        // phone:x.phone,
                        primary: x.primarylab,
                        logo: x.logo,
                        range_price: x.range_price,
                        service_delivery: x.service_delivery,
                        test1_data: x.test1_data,
                        test_data: x.test_data,
                        free_charge: x.free_charge,
                        page_slug: x.page_slug
                    });
                }
                this.secondary_labs = newSortedArray;
                console.log(this.secondary_labs);
                localStorage.setItem('addToBucket', JSON.stringify(this.addToBucket));
                localStorage.setItem('newBucketArray', JSON.stringify(this.newBucketArray));
                // console.log()
                localStorage.setItem('labsdata', JSON.stringify(this.secondary_labs));
                this.router.navigate(['search-labs']);
            }))
                .catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }
    distanceInKmBetweenEarthCoordinates(lat1, lon1, lat2, lon2) {
        // console.log(lat1, lon1, lat2, lon2);
        const earthRadiusKm = 6371;
        const dLat = this.degreesToRadians(lat2 - lat1);
        const dLon = this.degreesToRadians(lon2 - lon1);
        lat1 = this.degreesToRadians(lat1);
        lat2 = this.degreesToRadians(lat2);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }
    compare(a, b) {
        if (a.distance < b.distance) {
            return -1;
        }
        if (a.distance > b.distance) {
            return 1;
        }
        return 0;
    }
    getAssociatedTest() {
        this.associated_test = [];
        for (var i of this.addToBucket) {
            // console.log(i)
            for (var x of this.associated_tests) {
                if (x.individual_test == i)
                    this.associated_test.push(x);
                // console.log(this.associated_test)
            }
        }
    }
};
TestPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"] }
];
TestPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-test',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./test.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/test/test.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./test.page.scss */ "./src/app/pages/test/test.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_6__["ApisService"]])
], TestPage);



/***/ })

}]);
//# sourceMappingURL=pages-test-test-module-es2015.js.map