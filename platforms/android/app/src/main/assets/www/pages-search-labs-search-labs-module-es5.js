function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-labs-search-labs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSearchLabsSearchLabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n   <div class=\"container\"> \n<div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xl-12\">\n      <h3 style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Search Lab Test</h3>\n      </div>   \n   </div>\n   <div class=\"parent-section\">\n   <div *ngIf=\"labs.length == 0\" class=\"no_result\">\n      <span>Type Location PIN code and search, if the lab test which you have searched was not found. Kindly modify your lab test or PIN code below.</span>\n   </div>\n   <div class=\"row lab-drop location-container\" *ngIf=\"labs.length == 0\">\n      <div class=\"col-sm-3 col-lg-3 location-span\">\n         <span class=\"\">Location Pin</span>\n      </div>\n      <div class=\"col-sm-12 col-lg-12\">\n         <input type=\"text\" [(ngModel)]=\"address\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" class=\"form-control locinpl\"\n         [placeholder]=\"('Please type your location pincode'| translate) || '&nbsp;'\">\n      </div>\n      <div class=\"col-sm-12 col-lg-12\">\n         <div class=\"tags\" *ngIf=\"newBucketArray.length !==0\">\n            <div *ngFor=\"let item of newBucketArray;let i = index;\">\n               <span>{{item}} <ion-icon name=\"close-outline\" (click)=\"remove(i)\"></ion-icon></span>\n            </div>\n         </div>\n         <ion-searchbar class=\"searchinpl\" placeholder=\"Find your Tests\" [(ngModel)]=\"terms\" animated=\"true\" (ionInput)=\"onInput($event)\" (ionClear)=\"onCancel($event)\"></ion-searchbar>\n         <div class=\"test-search-item\">\n           <ion-list *ngIf=\"testLoad\">\n            <ion-item *ngFor=\"let item of all_test | search: terms | slice: 0:7\" class=\"keywords\" (click)=\"add(item)\">\n             <ion-thumbnail slot=\"end\">\n                 <ion-icon name=\"add-outline\"></ion-icon>\n               </ion-thumbnail>\n               <p>{{item.test_name}}</p>\n             </ion-item>\n           </ion-list>\n         </div>\n      </div>\n      <div class=\"area-pin-mobile\">\n         <div class=\"col-sm-3 col-lg-3\">\n            <ion-button (click)=\"searchLabs2()\">Find Labs</ion-button>\n         </div>\n      </div>\n   </div>\n   <div *ngIf=\"labs.length == 0\">\n      <div></div>\n   </div>\n\n<div class=\"col-md-12\">\n<div class=\"desktopview\">\n<div class=\"row\">\n <div class=\"col-md-12 col-lg-6 col-xl-6\" *ngFor=\"let item of labs; let i =index\">\n   <div class=\"new-lab-list\">\n      <h3>\n         <a (click)=\"lab(item)\">{{item.name}}</a>\n        <div class=\"rating-section\">\n               <span class=\"star-icon full\">★</span> \n               &nbsp;&nbsp;{{item.average_rating}} Based on {{item.total_reviews}}\n               <!--a href=\"#\" class=\"read-review\">(Read reviews)</a-->\n            </div> \n      </h3>\n      <div class=\"lab-detail\">\n         <div class=\"left-section\">\n           <div class=\"lab-logo\">\n              <img [src]=\"item.primarylogo\" width=\"150\" height=\"150\">\n           </div>\n         <br>\n          <p class=\"customer-saving\">{{item.address}}</p>\n         </div>\n         <div class=\"right-section\">\n           \n            <div class=\"service-price\">\n            <div class=\"service\">\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li>\n                     <div class=\"service-icon-div\">\n                        <img src=\"assets/distance.png\">\n                     </div> \n                        <div class=\"new-lab-service\">{{item.distance | number : '1.2-2'}} Km</div>\n                  </li>\n               </ul>\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li *ngFor=\"let data of item.facilities | slice:0:3 ;\">\n                     <div class=\"service-icon-div\">\n                        <img src=\"{{data.image}}\">\n                     </div> \n                        <div class=\"new-lab-service\">{{data.name}}</div>\n                  </li>\n               </ul>\n            </div>\n            <div class=\"price\">\n               <p class=\"new-lab-price-section-cost\">\n                  <span class=\"cost-strike\"><i>₹</i>&nbsp;{{item.price}}</span>\n               </p>\n               <p class=\"new-lab-price-section-payable\"> \n                  <span class=\"\" content=\"1050\"><i>₹</i>&nbsp;{{item.selling_price}}</span>\n               </p> \n               <div class=\"new-lab-price-section-cashback\" title=\"Get additional Rs. 50 cashback for online booking &amp; payment\">\n               </div>\n            </div>\n                       \n            <div class=\"service-bottom desktop-services\" *ngIf=\"item.available_test.length !==0;\">\n               <div class=\"included\">\n                  <p>Included Test:<span *ngFor=\"let t of item.available_test\"> {{t}},</span></p>\n               </div>\n               <div class=\"excluded\" *ngIf=\"item.not_available_test.length !==0;\">\n                  <p>Not Included Test: <span *ngFor=\"let n of item.not_available_test\"> {{n}},</span></p>\n               </div>\n               <div class=\"get-deal-parent\">\n                 \n                 <!-- <p class=\"customer-saving\">Get additional <b><i>₹</i> 100</b> discount for online booking &amp; payment</p> -->\n               </div>\n            </div>\n            <div class=\"price-bottom\">\n               <div class=\"btn-section\">\n                  <ion-button (click)=\"book(item)\">Book Now</ion-button><br><br>\n                  <ion-button (click)=\"modify()\">Modify Test</ion-button>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n  <div class=\"lab-bot\">Special Notes: <span [innerHtml]=\"item.test_data[0].itid.preparation\"></span></div>\n\n  </div></div>\n</div>\n </div>\n<div class=\"mobileview\">\n<div class=\"col-md-12 col-lg-6 col-xl-6\" *ngFor=\"let item of labs; let i =index\">\n   <div class=\"new-lab-list\">\n      <h3>\n         <a (click)=\"lab(item)\">{{item.name}}</a>\n        <div class=\"rating-section\">\n               <span class=\"star-icon full\">★</span> \n               &nbsp;&nbsp;{{item.average_rating}} Based on {{item.total_reviews}}\n               <!--a href=\"#\" class=\"read-review\">(Read reviews)</a-->\n            </div> \n      </h3>\n      <div class=\"lab-detail\">\n         <div class=\"left-section\">\n           <div class=\"lab-logo\">\n              <img [src]=\"item.primarylogo\" width=\"150\" height=\"150\">\n           </div>\n         <br>\n          <p class=\"customer-saving\">{{item.address}}</p>\n         </div>\n         <div class=\"right-sectionm\">\n           \n            <div class=\"service-price\">\n            <div class=\"service\">\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li>\n                     <div class=\"service-icon-div\">\n                        <img src=\"assets/distance.png\" width=\"38\" height=\"33\">\n                     </div> \n                        <div class=\"new-lab-service\">{{item.distance | number : '1.2-2'}} Km</div>\n                  </li>\n               </ul>\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li *ngFor=\"let data of item.facilities ;\">\n                     <div class=\"service-icon-div\">\n                        <img src=\"{{data.image}}\" width=\"32\" height=\"30\">\n                     </div> \n                        <div class=\"new-lab-service\">{{data.name}}</div>\n                  </li>\n               </ul>\n            </div>\n            <div class=\"price\">\n               <p class=\"new-lab-price-section-cost\">\n                  <span class=\"cost-strike\"><i>₹</i>{{item.price}}</span>\n               </p>\n               <p class=\"new-lab-price-section-payable\"> \n                  <span class=\"\" content=\"1050\"><i>₹</i>{{item.selling_price}}</span>\n               </p> \n               <div class=\"new-lab-price-section-cashback\" title=\"Get additional Rs. 50 cashback for online booking &amp; payment\">\n               </div>\n            </div>\n                       \n            <div class=\"service-bottom desktop-services\" *ngIf=\"item.available_test.length !==0;\">\n               <div class=\"included\">\n                  <p>Included Test:<span *ngFor=\"let t of item.available_test\"> {{t}},</span></p>\n               </div>\n               <div class=\"excluded\" *ngIf=\"item.not_available_test.length !==0;\">\n                  <p>Not Included Test: <span *ngFor=\"let n of item.not_available_test\"> {{n}},</span></p>\n               </div>\n               <div class=\"get-deal-parent\">\n                 \n                 <!-- <p class=\"customer-saving\">Get additional <b><i>₹</i> 100</b> discount for online booking &amp; payment</p> -->\n               </div>\n            </div>\n            <div class=\"price-bottom\">\n               <div class=\"btn-section\">\n                  <ion-button (click)=\"book(item)\" style=\"margin-right: 10px;\">Book Now</ion-button>\n                  <ion-button (click)=\"modify()\">Modify Test</ion-button><br><br>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n  <div class=\"lab-bot\">Special Notes: <span [innerHtml]=\"item.test_data[0].itid.preparation\"></span></div>\n\n  </div></div>\n\n</div>\n  </div>         \n</div>                     \n</div>\n   <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/search-labs/search-labs-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/search-labs/search-labs-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: SearchLabsPageRoutingModule */

  /***/
  function srcAppPagesSearchLabsSearchLabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLabsPageRoutingModule", function () {
      return SearchLabsPageRoutingModule;
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


    var _search_labs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./search-labs.page */
    "./src/app/pages/search-labs/search-labs.page.ts");

    var routes = [{
      path: '',
      component: _search_labs_page__WEBPACK_IMPORTED_MODULE_3__["SearchLabsPage"]
    }];

    var SearchLabsPageRoutingModule = function SearchLabsPageRoutingModule() {
      _classCallCheck(this, SearchLabsPageRoutingModule);
    };

    SearchLabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SearchLabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/search-labs/search-labs.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/search-labs/search-labs.module.ts ***!
    \*********************************************************/

  /*! exports provided: SearchLabsPageModule */

  /***/
  function srcAppPagesSearchLabsSearchLabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLabsPageModule", function () {
      return SearchLabsPageModule;
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


    var _search_labs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./search-labs-routing.module */
    "./src/app/pages/search-labs/search-labs-routing.module.ts");
    /* harmony import */


    var _search_labs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./search-labs.page */
    "./src/app/pages/search-labs/search-labs.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../pipes/pipes.module */
    "./src/app/pipes/pipes.module.ts");

    var SearchLabsPageModule = function SearchLabsPageModule() {
      _classCallCheck(this, SearchLabsPageModule);
    };

    SearchLabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"], _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"], _search_labs_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchLabsPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_search_labs_page__WEBPACK_IMPORTED_MODULE_6__["SearchLabsPage"]]
    })], SearchLabsPageModule);
    /***/
  },

  /***/
  "./src/app/pages/search-labs/search-labs.page.scss":
  /*!*********************************************************!*\
    !*** ./src/app/pages/search-labs/search-labs.page.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSearchLabsSearchLabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".parent-section {\n  margin: 0 auto 15%;\n  /*width:80%;*/\n}\n.parent-section .no_result {\n  background-image: url('pop_contbg.png');\n  margin: 0px 0px 20px;\n  padding: 18px;\n  text-align: center;\n}\n.new-lab-list {\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  margin-top: 15px;\n  color: Gray;\n  min-height: 175px;\n  display: inline-block;\n  box-shadow: 0 1px 4px rgba(41, 51, 57, 0.5);\n  border-radius: 2px;\n  padding: 0;\n}\n.lab-bot {\n  text-align: center;\n  margin: 0;\n  padding: 3px;\n  color: #fff;\n  background-color: #007c9d;\n  font-size: 13px;\n}\n.new-lab-list h3 {\n  margin: 0;\n  padding: 2px;\n  background-color: #007c9d;\n}\n.new-lab-list h3 a {\n  padding-left: 5px;\n  color: #fff;\n  font-weight: 300;\n  font-size: 11pt;\n  cursor: pointer;\n  text-decoration: none;\n}\n.new-lab-list .lab-detail {\n  padding: 0;\n  width: auto;\n  display: inline-block;\n  width: 100%;\n}\n.new-lab-list .lab-detail .left-section {\n  width: 22%;\n  padding-top: 12px;\n  float: left;\n  text-align: center;\n  padding-left: 10px;\n}\n.lab-logo {\n  border: 1px #eee solid;\n  background-color: #fff;\n}\n.new-lab-list .lab-detail .right-section {\n  width: 78%;\n  float: left;\n}\n.rating-section {\n  padding: 4px;\n  color: #fff;\n  font-size: 10pt;\n  float: right;\n}\n.star-icon {\n  color: #fff;\n  font-size: 15px;\n  position: relative;\n}\n.service-price {\n  display: inline-block;\n  width: 100%;\n}\n.service {\n  width: 67%;\n  float: left;\n  padding-top: 15px;\n}\n.service ul {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.service ul li {\n  color: #1d7f88;\n  width: 25%;\n  height: 65px;\n  list-style: none;\n  float: left;\n  text-align: center;\n}\n.service-icon-div {\n  display: inline-block;\n}\n.new-lab-service {\n  margin: 0 auto;\n  margin-top: 0px;\n  width: 70px;\n  margin-top: 2px;\n  font-size: 7.5pt;\n  line-height: 14px;\n  color: #484c4c;\n}\n.price {\n  width: 32%;\n  float: left;\n  text-align: center;\n  border-left: 1px #eee solid;\n  min-height: 60px;\n  padding-top: 11px;\n}\n.new-lab-price-section-cost {\n  width: 100%;\n  font-size: 14pt;\n  margin: 0;\n  padding-top: 10px;\n}\n.cost-strike {\n  text-decoration: line-through;\n}\n.new-lab-price-section-payable {\n  width: 100%;\n  font-size: 16pt;\n  color: #da272f;\n  margin: 0;\n  padding-top: 5px;\n  font-weight: 700;\n}\n.new-lab-price-section-cashback {\n  margin-bottom: 0;\n  width: 100%;\n  margin-top: 10px;\n  font-size: 7pt;\n  font-weight: 300;\n  color: #000;\n  display: block;\n}\n.desktop-services {\n  display: block;\n}\n.service-bottom {\n  width: 67%;\n  float: left;\n  padding-top: 0;\n  margin-top: 10px;\n}\n.service-bottom p {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #000;\n}\n.service-bottom .included span {\n  color: #909090;\n}\n.service-bottom .excluded span {\n  color: red;\n}\n.get-deal-parent {\n  display: inline-block;\n  width: 99%;\n  text-align: center;\n  color: #da272f;\n  padding-top: 10px;\n}\n.customer-saving {\n  color: #000;\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 9pt;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n.price-bottom {\n  width: 32%;\n  float: left;\n  text-align: center;\n  border-left: 1px #eee solid;\n  padding-top: 0;\n}\n.btn-section {\n  padding-left: 5px;\n  padding-top: 2px;\n}\n.lab-drop {\n  margin: 0;\n  padding: 10px;\n  background: #eaeaea;\n  border-radius: 2px;\n  box-shadow: 0px 2px 6px rgba(128, 128, 128, 0.61);\n}\n.location-span {\n  color: #555;\n  font-size: 14px;\n  font-weight: bold;\n  word-wrap: normal;\n}\n.sc-ion-input-md-h {\n  border: 1px solid #ddd !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 40px;\n  background: #fff;\n}\n.tags {\n  padding-left: 0px;\n  margin-bottom: 5px;\n  padding-top: 20px;\n}\n.tags span {\n  font-size: 12px;\n  background: var(--ion-color-secondary);\n  padding: 4px 6px;\n  border-radius: 20px;\n  color: white;\n  font-weight: bold;\n  display: block;\n}\n.tags span ion-icon {\n  position: relative;\n  top: 2px;\n}\n.tags div {\n  display: inline-block;\n  margin: 5px;\n}\n.test-search-item {\n  width: 100%;\n  border: 1px solid #dedede;\n  margin: auto;\n  z-index: 11;\n}\n.test-search-item ion-thumbnail {\n  width: 30px;\n  height: 20px;\n}\n.test-search-item ion-item {\n  --padding-start: 0px;\n}\n.test-search-item ion-list {\n  border-radius: 0;\n  padding: 0px;\n  margin-top: 1px;\n}\n.test-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n.test-search-item span {\n  float: right;\n}\n.sc-ion-searchbar-md-h {\n  background: transparent;\n  padding: 0;\n  margin-top: 6px;\n}\n.searchbar-input {\n  background: #FFF !important;\n  border-radius: 0px !important;\n  font-size: 13px !important;\n  -webkit-padding-end: 0px !important;\n  padding-inline-end: 0px !important;\n  border: 0px solid #008f47 !important;\n  color: #008f47 !important;\n}\n.locinpl {\n  height: 46px !important;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\n}\n.area-pin-mobile {\n  margin-top: 14px;\n}\n.cost-strike i {\n  font-family: arial;\n  padding-right: 4px;\n}\n.new-lab-price-section-cost i, .new-lab-price-section-payable i {\n  font-family: arial;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWxhYnMvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcc2VhcmNoLWxhYnNcXHNlYXJjaC1sYWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLWxhYnMvc2VhcmNoLWxhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBR0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjtBREFBO0VBQVMsa0JBQUE7RUFDUCxTQUFBO0VBQVUsWUFBQTtFQUFZLFdBQUE7RUFDdEIseUJBQUE7RUFBMEIsZUFBQTtBQ081QjtBRExBO0VBQ0UsU0FBQTtFQUFVLFlBQUE7RUFDVix5QkFBQTtBQ1NGO0FEUEM7RUFDRyxpQkFBQTtFQUNGLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFBZ0IsZUFBQTtFQUNoQixxQkFBQTtBQ1dGO0FEVEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1lGO0FEVkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFBbUIsa0JBQUE7QUNjckI7QURaQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7QUNlRjtBRGJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNnQkY7QURkQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUFlLFlBQUE7QUNrQmpCO0FEaEJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ21CRjtBRGpCQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ29CRjtBRGxCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNxQkY7QURuQkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNzQkY7QURwQkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3VCRjtBRHJCQTtFQUNFLHFCQUFBO0FDd0JGO0FEdEJBO0VBQ0UsY0FBQTtFQUNFLGVBQUE7RUFDRixXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDeUJGO0FEdkJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQzBCRjtBRHhCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDMkJGO0FEekJBO0VBQ0UsNkJBQUE7QUM0QkY7QUQxQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzZCRjtBRDNCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUM4QkY7QUQ1QkE7RUFDRSxjQUFBO0FDK0JGO0FEN0JBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQ0Y7QUQvQkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFBZ0IsV0FBQTtBQ2tDcEI7QUQvQkk7RUFDRSxjQUFBO0FDaUNOO0FEN0JNO0VBQ0UsVUFBQTtBQytCUjtBRDNCQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDOEJGO0FENUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFBVyxnQkFBQTtBQ2dDYjtBRDlCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNpQ0Y7QUQvQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDa0NGO0FEaENBO0VBQVcsU0FBQTtFQUFVLGFBQUE7RUFDbkIsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDcUNGO0FEbkNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUFrQixpQkFBQTtBQ3VDcEI7QURyQ0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN3Q0E7QUR0Q0E7RUFBTyxpQkFBQTtFQUNQLGtCQUFBO0VBQ0EsaUJBQUE7QUMwQ0E7QUR4Q0E7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQWtCLGNBQUE7QUM0Q3RCO0FEM0NJO0VBQ0ksa0JBQUE7RUFDSixRQUFBO0FDNkNKO0FEMUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDNkNGO0FEM0NBO0VBQ0ksV0FBQTtFQUFZLHlCQUFBO0VBQ1osWUFBQTtFQUFhLFdBQUE7QUNnRGpCO0FEOUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNnRFI7QUQ5Q0k7RUFDSSxvQkFBQTtBQ2dEUjtBRDlDSTtFQUFTLGdCQUFBO0VBQ1YsWUFBQTtFQUNBLGVBQUE7QUNpREg7QUQvQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNpRFI7QUQvQ0k7RUFDSSxZQUFBO0FDaURSO0FEOUNBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2lERjtBRGhEQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDbURGO0FEbERFO0VBQ0EsdUJBQUE7RUFDQSwwSEFBQTtBQ3FERjtBRG5EQTtFQUNFLGdCQUFBO0FDc0RGO0FEcERBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ3VERjtBRHJEQTtFQUFnRSxrQkFBQTtFQUM5RCxpQkFBQTtBQ3lERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1sYWJzL3NlYXJjaC1sYWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtc2VjdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvIDE1JTtcbiAgLyp3aWR0aDo4MCU7Ki9cbiAgLm5vX3Jlc3VsdHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZycpO1xuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmV3LWxhYi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IEdyYXk7XG4gIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsNTEsNTcsLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDQxLDUxLDU3LC41KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsNTEsNTcsLjUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGFiLWJvdHt0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtwYWRkaW5nOjNweDtjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M5ZDtmb250LXNpemU6IDEzcHg7XG59XG4ubmV3LWxhYi1saXN0IGgze1xuICBtYXJnaW46IDA7cGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzlkO1xufVxuIC5uZXctbGFiLWxpc3QgaDMgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDExcHQ7Y3Vyc29yOnBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sYWItbG9nbyB7XG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubmV3LWxhYi1saXN0IC5sYWItZGV0YWlsIC5yaWdodC1zZWN0aW9uIHtcbiAgd2lkdGg6IDc4JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucmF0aW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6MTBwdDtmbG9hdDogcmlnaHQ7XG59XG4uc3Rhci1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VydmljZS1wcmljZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZSB7XG4gIHdpZHRoOiA2NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5zZXJ2aWNlIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZXJ2aWNlIHVsIGxpIHtcbiAgY29sb3I6ICMxZDdmODg7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogNjVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXJ2aWNlLWljb24tZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5ldy1sYWItc2VydmljZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6NzBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDcuNXB0O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICM0ODRjNGM7XG59XG4ucHJpY2Uge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb3N0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1wYXlhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgY29sb3I6ICNkYTI3MmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY2FzaGJhY2sge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kZXNrdG9wLXNlcnZpY2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VydmljZS1ib3R0b20ge1xuICB3aWR0aDogNjclO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7Y29sb3I6IzAwMDtcbiAgfVxuICAuaW5jbHVkZWR7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIH1cbiAgfVxuICAgIC5leGNsdWRlZHtcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gIH1cbn1cbi5nZXQtZGVhbC1wYXJlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA5OSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkYTI3MmY7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmN1c3RvbWVyLXNhdmluZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcmljZS1ib3R0b20ge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmJ0bi1zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4ubGFiLWRyb3Age21hcmdpbjogMDtwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiNlYWVhZWE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYxKTtcbn1cbi5sb2NhdGlvbi1zcGFuIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7d29yZC13cmFwOiBub3JtYWw7XG59XG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4tLXBhZGRpbmctYm90dG9tOiAwO1xuaGVpZ2h0OiA0MHB4O1xuYmFja2dyb3VuZDogI2ZmZjtcbn1cbi50YWdzIHtwYWRkaW5nLWxlZnQ6IDBweDtcbm1hcmdpbi1ib3R0b206IDVweDtcbnBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRhZ3Mgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ZGlzcGxheTogYmxvY2s7XG4gICAgaW9uLWljb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgICB9XG59XG4udGFncyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDEwMCU7Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICBtYXJnaW46IGF1dG87ei1pbmRleDogMTE7XG5cdFxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICB9XG4gICAgaW9uLWxpc3R7Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbi10b3A6IDFweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDo2cHg7fVxuLnNlYXJjaGJhci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwOGY0NyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOGY0NyAhaW1wb3J0YW50O31cbiAgLmxvY2lucGwge1xuICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKSAhaW1wb3J0YW50O1xufVxuLmFyZWEtcGluLW1vYmlsZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4uY29zdC1zdHJpa2UgaSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IGksLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1wYXlhYmxlIGl7IGZvbnQtZmFtaWx5OiBhcmlhbCA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO30iLCIucGFyZW50LXNlY3Rpb24ge1xuICBtYXJnaW46IDAgYXV0byAxNSU7XG4gIC8qd2lkdGg6ODAlOyovXG59XG4ucGFyZW50LXNlY3Rpb24gLm5vX3Jlc3VsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZ1wiKTtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ldy1sYWItbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiBHcmF5O1xuICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDQxLCA1MSwgNTcsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsIDUxLCA1NywgMC41KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsIDUxLCA1NywgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGFiLWJvdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzlkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5uZXctbGFiLWxpc3QgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M5ZDtcbn1cblxuLm5ldy1sYWItbGlzdCBoMyBhIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDExcHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmV3LWxhYi1saXN0IC5sYWItZGV0YWlsIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5sYWItbG9nbyB7XG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLnJpZ2h0LXNlY3Rpb24ge1xuICB3aWR0aDogNzglO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJhdGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdGFyLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZXJ2aWNlLXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlcnZpY2Uge1xuICB3aWR0aDogNjclO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5zZXJ2aWNlIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlcnZpY2UgdWwgbGkge1xuICBjb2xvcjogIzFkN2Y4ODtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA2NXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljZS1pY29uLWRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ldy1sYWItc2VydmljZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogNy41cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzQ4NGM0Yztcbn1cblxuLnByaWNlIHtcbiAgd2lkdGg6IDMyJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCAjZWVlIHNvbGlkO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cblxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNvc3Qtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tcGF5YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGNvbG9yOiAjZGEyNzJmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY2FzaGJhY2sge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRlc2t0b3Atc2VydmljZXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlcnZpY2UtYm90dG9tIHtcbiAgd2lkdGg6IDY3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlcnZpY2UtYm90dG9tIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlcnZpY2UtYm90dG9tIC5pbmNsdWRlZCBzcGFuIHtcbiAgY29sb3I6ICM5MDkwOTA7XG59XG4uc2VydmljZS1ib3R0b20gLmV4Y2x1ZGVkIHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ2V0LWRlYWwtcGFyZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTklO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGEyNzJmO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmN1c3RvbWVyLXNhdmluZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wcmljZS1ib3R0b20ge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYnRuLXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmxhYi1kcm9wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42MSk7XG59XG5cbi5sb2NhdGlvbi1zcGFuIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRhZ3Mge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRhZ3Mgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhZ3Mgc3BhbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbi50YWdzIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50ZXN0LXNlYXJjaC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMTE7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnNlYXJjaGJhci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwOGY0NyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOGY0NyAhaW1wb3J0YW50O1xufVxuXG4ubG9jaW5wbCB7XG4gIGhlaWdodDogNDZweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmFyZWEtcGluLW1vYmlsZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5jb3N0LXN0cmlrZSBpIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY29zdCBpLCAubmV3LWxhYi1wcmljZS1zZWN0aW9uLXBheWFibGUgaSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/search-labs/search-labs.page.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/search-labs/search-labs.page.ts ***!
    \*******************************************************/

  /*! exports provided: SearchLabsPage */

  /***/
  function srcAppPagesSearchLabsSearchLabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SearchLabsPage", function () {
      return SearchLabsPage;
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


    var src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/components/signin/signin.component */
    "./src/app/components/signin/signin.component.ts");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-google-places-autocomplete */
    "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
    /* harmony import */


    var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/pages/profile-modal/profile-modal.page */
    "./src/app/pages/profile-modal/profile-modal.page.ts");
    /* harmony import */


    var flatted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! flatted */
    "./node_modules/flatted/esm/index.js");

    var SearchLabsPage =
    /*#__PURE__*/
    function () {
      function SearchLabsPage(route, router, alertCtrl, modalController, api, util, menu) {
        var _this = this;

        _classCallCheck(this, SearchLabsPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.terms = '';
        this.labs = [];
        this.all_test = [];
        this.testLoad = false;
        this.addToBucket = [];
        this.newBucketArray = [];
        this.secondary_labs = [];
        this.associated_test = [];
        this.pushSecondaryLabs = [];
        this.finalLabs = [];
        this.reviews = [];
        this.facilities = [];
        this.associated_tests = [];
        this.primary_lab = [];
        this.all_labs = [];
        this.getProfile();
        this.util.observeProfile().subscribe(function (data) {
          console.log(data);

          _this.getProfile();
        });
        this.labs = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('labsdata'));
        console.log(this.labs);
        console.log(this.labs);
        this.getFacilities();

        if (this.labs.length == 0) {
          this.newBucketArray = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('newBucketArray'));
          this.addToBucket = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('addToBucket')); // this.getAssociatedTests();

          this.getReviews();
          this.api.getIndividualTest().then(function (data) {
            _this.all_test = data;
          }).catch(function (error) {
            console.log(error);
          });
        } else {
          console.log(this.labs);
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.labs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {// this.api.getPrimaryLabById(x.primary).then( data => {
              //    console.log(data);
              //     x.primary_logo = data[0].logo;
              //     console.log(x)
              //   }).catch(error => {
              //     console.log(error);
              // });

              var x = _step.value;
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

        console.log(localStorage.getItem('newBucketArray'));
        this.util.hide();
      }

      _createClass(SearchLabsPage, [{
        key: "getAlltest",
        value: function getAlltest() {
          var _this2 = this;

          this.api.getIndividualTest().then(function (data) {
            _this2.all_test = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "modify",
        value: function modify() {
          this.getAlltest();
          this.labs = [];
          this.newBucketArray = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('newBucketArray'));
          this.addToBucket = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('addToBucket'));
          console.log(this.newBucketArray);
          console.log(this.addToBucket);
          localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])({}));
        }
      }, {
        key: "getAssociatedTests",
        value: function getAssociatedTests() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.getAssociatedTests().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(data);
                                this.associated_tests = data;

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
        key: "getFacilities",
        value: function getFacilities() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this4 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    console.log('I am in');
                    _context4.next = 3;
                    return this.api.getFacilities().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this4, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee3() {
                        return regeneratorRuntime.wrap(function _callee3$(_context3) {
                          while (1) {
                            switch (_context3.prev = _context3.next) {
                              case 0:
                                console.log(data);
                                this.facilities = data;

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

                  case 3:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          var _this5 = this;

          this.api.getReviews().then(function (data) {
            console.log(data);
            _this5.reviews = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "add",
        value: function add(data) {
          this.terms = '';
          this.testLoad = false;

          if (this.addToBucket.length == 0) {
            this.newBucketArray.push(data.test_name);
            this.addToBucket.push(data.id);
          } else {
            var a = this.addToBucket.indexOf(data.id);

            if (a == 0) {
              this.util.showToast('Already added in the Bucket', 'primary', 'top');
            } else if (a == -1) {
              this.newBucketArray.push(data.test_name);
              this.addToBucket.push(data.id);
              console.log(this.newBucketArray, this.addToBucket);
            } else {
              this.util.showToast('Already in the bucket', 'primary', 'top');
            }
          }
        }
      }, {
        key: "remove",
        value: function remove(index) {
          this.newBucketArray.splice(index, 1);
          this.addToBucket.splice(index, 1);

          if (this.addToBucket.length == 0) {
            this.testLoad = false;
          }
        }
      }, {
        key: "onInput",
        value: function onInput(ev) {
          console.log(ev);
          this.testLoad = true;
        }
      }, {
        key: "book",
        value: function book(data) {
          console.log(data);
          this.isLogin = sessionStorage.getItem('loginStatus');
          localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(data));
          var price = [];
          price = data.range_price;
          var maxd = [];
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = price[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var y = _step2.value;
              maxd.push(y.to);
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

          var max = maxd.reduce(function (a, b) {
            return Math.max(a, b);
          });

          if (data.distance > max) {
            console.log(max);
            this.showAlert(data);
          } else {
            if (this.isLogin == 'true') {
              if (this.profile.name == '') {
                this.openModal();
              } else {
                this.router.navigate(['cart']);
              }
            } else {
              this.showLoginModal();
              return false;
            }
          } // this.isLogin = localStorage.getItem('loginStatus');
          //   if(this.isLogin=='true'){
          //   this.router.navigate(['cart'])
          // } else {
          //   this.showLoginModal();
          //   return false;
          // }

        }
      }, {
        key: "showAlert",
        value: function showAlert(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee5() {
            var _this6 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertCtrl.create({
                      header: 'Sorry',
                      backdropDismiss: true,
                      message: data.name + ' is to far from your location. Please try to change your location and book again. Thank You',
                      cssClass: 'loginAlert',
                      buttons: [{
                        text: 'No, Thanks',
                        cssClass: 'signup',
                        handler: function handler(data) {
                          _this6.router.navigate(['/register']);
                        }
                      }, {
                        text: 'Change Location',
                        cssClass: 'signin',
                        handler: function handler(data) {
                          _this6.modify();
                        }
                      }]
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }, {
        key: "getProfile",
        value: function getProfile() {
          var _this7 = this;

          var uid = sessionStorage.getItem('uid');
          console.log(uid);
          this.api.getMyProfile(uid).then(function (data) {
            _this7.profile = data;
            console.log(_this7.profile);
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "showLoginModal",
        value: function showLoginModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee6() {
            var _this8 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee6$(_context6) {
              while (1) {
                switch (_context6.prev = _context6.next) {
                  case 0:
                    _context6.next = 2;
                    return this.modalController.create({
                      component: src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                      cssClass: 'login-modal-css'
                    });

                  case 2:
                    modal = _context6.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      console.log(dataReturned);

                      if (dataReturned.data !== undefined) {
                        console.log(_this8.profile.name);

                        if (_this8.profile.name == '') {
                          console.log(_this8.profile.name);

                          _this8.openModal();
                        } else {
                          _this8.router.navigate(['cart']);
                        }
                      } else {
                        console.log();
                      }
                    });
                    _context6.next = 6;
                    return modal.present();

                  case 6:
                    return _context6.abrupt("return", _context6.sent);

                  case 7:
                  case "end":
                    return _context6.stop();
                }
              }
            }, _callee6, this);
          }));
        }
      }, {
        key: "openModal",
        value: function openModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this9 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    _context7.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProfileModalPage"],
                      cssClass: 'profileCss',
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context7.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      console.log(dataReturned); // if(dataReturned.data !== undefined){

                      if (_this9.profile.name == '') {
                        console.log('ify');
                        console.log(_this9.profile.name);

                        _this9.getProfile();
                      } else {
                        console.log('ele');

                        _this9.router.navigate(['cart']);
                      } // } else {
                      //   console.log()
                      // }

                    });
                    _context7.next = 6;
                    return modal.present();

                  case 6:
                    return _context7.abrupt("return", _context7.sent);

                  case 7:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "onCancel",
        value: function onCancel(ev) {
          this.testLoad = false;
        }
      }, {
        key: "lab",
        value: function lab(item) {
          console.log('lab', item);
          localStorage.setItem('labid', item.id);
          this.router.navigate(['diagnostic-lab', item.page_slug]);
        }
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(ev) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee8() {
            var _this10 = this;

            var pincode, i, b, current_pincode, geocoder;
            return regeneratorRuntime.wrap(function _callee8$(_context8) {
              while (1) {
                switch (_context8.prev = _context8.next) {
                  case 0:
                    console.log(ev);
                    i = 0;

                  case 2:
                    if (!(i < ev.address_components.length)) {
                      _context8.next = 15;
                      break;
                    }

                    b = 0;

                  case 4:
                    if (!(b < ev.address_components[i].types.length)) {
                      _context8.next = 12;
                      break;
                    }

                    if (!(ev.address_components[i].types[b] == "postal_code")) {
                      _context8.next = 9;
                      break;
                    }

                    //this is the object you are looking for
                    pincode = ev.address_components[i];
                    console.log(pincode);
                    return _context8.abrupt("break", 12);

                  case 9:
                    b++;
                    _context8.next = 4;
                    break;

                  case 12:
                    i++;
                    _context8.next = 2;
                    break;

                  case 15:
                    current_pincode = pincode.short_name;
                    this.pincode = current_pincode;
                    console.log(this.pincode);
                    localStorage.setItem('pincode', this.pincode);
                    geocoder = new google.maps.Geocoder();
                    geocoder.geocode({
                      address: ev.formatted_address
                    }, function (results, status) {
                      console.log(results, status);

                      if (status === 'OK' && results && results.length) {
                        _this10.latitude = results[0].geometry.location.lat();
                        _this10.longitude = results[0].geometry.location.lng();
                        console.log('----->', _this10.latitude, _this10.longitude, _this10.pincode);
                      } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                        return false;
                      }
                    });

                  case 21:
                  case "end":
                    return _context8.stop();
                }
              }
            }, _callee8, this);
          }));
        }
      }, {
        key: "searchLabs2",
        value: function searchLabs2() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee14() {
            var _this11 = this;

            return regeneratorRuntime.wrap(function _callee14$(_context14) {
              while (1) {
                switch (_context14.prev = _context14.next) {
                  case 0:
                    console.log(this.pincode);
                    _context14.next = 3;
                    return this.api.getSecondaryLabsByPin(this.pincode).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this11, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee13() {
                        var _this12 = this;

                        var i;
                        return regeneratorRuntime.wrap(function _callee13$(_context13) {
                          while (1) {
                            switch (_context13.prev = _context13.next) {
                              case 0:
                                this.secondary_labs = data;
                                console.log(this.secondary_labs);
                                console.log(this.addToBucket);
                                this.associated_test = [];

                                if (!data) {
                                  _context13.next = 8;
                                  break;
                                }

                                i = 1;
                                _context13.next = 8;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this12, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee12() {
                                    var _this13 = this;

                                    var j, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, y;

                                    return regeneratorRuntime.wrap(function _callee12$(_context12) {
                                      while (1) {
                                        switch (_context12.prev = _context12.next) {
                                          case 0:
                                            _context12.next = 2;
                                            return this.api.getVenueDetails(element.primarylab).then(function (data6) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee9() {
                                                return regeneratorRuntime.wrap(function _callee9$(_context9) {
                                                  while (1) {
                                                    switch (_context9.prev = _context9.next) {
                                                      case 0:
                                                        if (data6) {
                                                          element.primarylabdata = data6;
                                                          element.primarylogo = data6.logo;
                                                        }

                                                      case 1:
                                                      case "end":
                                                        return _context9.stop();
                                                    }
                                                  }
                                                }, _callee9);
                                              }));
                                            }).catch(function (error) {
                                              _this13.util.hide();

                                              console.log(error);
                                            });

                                          case 2:
                                            j = 1;
                                            _iteratorNormalCompletion3 = true;
                                            _didIteratorError3 = false;
                                            _iteratorError3 = undefined;
                                            _context12.prev = 6;
                                            _iterator3 = this.addToBucket[Symbol.iterator]();

                                          case 8:
                                            if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                              _context12.next = 17;
                                              break;
                                            }

                                            y = _step3.value;
                                            console.log(y);
                                            _context12.next = 13;
                                            return this.api.getAssociatedTestByProductAndBranch(element.uid, y).then(function (data1) {
                                              return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this13, void 0, void 0,
                                              /*#__PURE__*/
                                              regeneratorRuntime.mark(function _callee11() {
                                                var _this14 = this;

                                                return regeneratorRuntime.wrap(function _callee11$(_context11) {
                                                  while (1) {
                                                    switch (_context11.prev = _context11.next) {
                                                      case 0:
                                                        console.log(data1);

                                                        if (!(data1.length > 0)) {
                                                          _context11.next = 6;
                                                          break;
                                                        }

                                                        _context11.next = 4;
                                                        return this.api.getLabTestById(data1[0].individual_test).then(function (data2) {
                                                          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0,
                                                          /*#__PURE__*/
                                                          regeneratorRuntime.mark(function _callee10() {
                                                            return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                                              while (1) {
                                                                switch (_context10.prev = _context10.next) {
                                                                  case 0:
                                                                    if (data2.length > 0) {
                                                                      data1[0].itid = data2[0];
                                                                    }

                                                                  case 1:
                                                                  case "end":
                                                                    return _context10.stop();
                                                                }
                                                              }
                                                            }, _callee10);
                                                          }));
                                                        }).catch(function (error) {
                                                          _this14.util.hide();

                                                          console.log(error);
                                                        });

                                                      case 4:
                                                        this.associated_test.push(data1[0]);
                                                        console.log(i + "==" + this.secondary_labs.length + "&&" + j + "==" + this.addToBucket.length);

                                                      case 6:
                                                        if (!(i == this.secondary_labs.length && j == this.addToBucket.length)) {
                                                          _context11.next = 9;
                                                          break;
                                                        }

                                                        _context11.next = 9;
                                                        return this.searchLabs3();

                                                      case 9:
                                                      case "end":
                                                        return _context11.stop();
                                                    }
                                                  }
                                                }, _callee11, this);
                                              }));
                                            }).catch(function (error) {
                                              _this13.util.hide();

                                              console.log(error);
                                            });

                                          case 13:
                                            j++;

                                          case 14:
                                            _iteratorNormalCompletion3 = true;
                                            _context12.next = 8;
                                            break;

                                          case 17:
                                            _context12.next = 23;
                                            break;

                                          case 19:
                                            _context12.prev = 19;
                                            _context12.t0 = _context12["catch"](6);
                                            _didIteratorError3 = true;
                                            _iteratorError3 = _context12.t0;

                                          case 23:
                                            _context12.prev = 23;
                                            _context12.prev = 24;

                                            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
                                              _iterator3.return();
                                            }

                                          case 26:
                                            _context12.prev = 26;

                                            if (!_didIteratorError3) {
                                              _context12.next = 29;
                                              break;
                                            }

                                            throw _iteratorError3;

                                          case 29:
                                            return _context12.finish(26);

                                          case 30:
                                            return _context12.finish(23);

                                          case 31:
                                            if (!(i == this.secondary_labs.length && this.associated_test.length == 0)) {
                                              _context12.next = 34;
                                              break;
                                            }

                                            _context12.next = 34;
                                            return this.searchLabs3();

                                          case 34:
                                            i++;

                                          case 35:
                                          case "end":
                                            return _context12.stop();
                                        }
                                      }
                                    }, _callee12, this, [[6, 19, 23, 31], [24,, 26, 30]]);
                                  }));
                                });

                              case 8:
                              case "end":
                                return _context13.stop();
                            }
                          }
                        }, _callee13, this);
                      }));
                    }).catch(function (error) {
                      _this11.util.hide();

                      console.log(error);
                    });

                  case 3:
                  case "end":
                    return _context14.stop();
                }
              }
            }, _callee14, this);
          }));
        }
      }, {
        key: "searchLabs3",
        value: function searchLabs3() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee16() {
            var _this15 = this;

            var lat, lng, newSortedArray, _iteratorNormalCompletion11, _didIteratorError11, _iteratorError11, _iterator11, _step11, x, arr, _iteratorNormalCompletion12, _didIteratorError12, _iteratorError12, _iterator12, _step12, _x5, jsonString;

            return regeneratorRuntime.wrap(function _callee16$(_context16) {
              while (1) {
                switch (_context16.prev = _context16.next) {
                  case 0:
                    this.util.show('Please wait....');
                    lat = this.latitude;
                    lng = this.longitude;
                    console.log(this.associated_test);
                    this.associated_test.push({});
                    _context16.next = 7;
                    return this.secondary_labs.forEach(function (element) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee15() {
                        var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, _x, _iteratorNormalCompletion5, _didIteratorError5, _iteratorError5, _iterator5, _step5, _x2, is_available, _iteratorNormalCompletion9, _didIteratorError9, _iteratorError9, _iterator9, _step9, y, test2data, difference, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion6, _didIteratorError6, _iteratorError6, _iterator6, _step6, _x3, _iteratorNormalCompletion10, _didIteratorError10, _iteratorError10, _iterator10, _step10, _y, _iteratorNormalCompletion7, _didIteratorError7, _iteratorError7, _iterator7, _step7, _x4, avgrate, rating_length, _iteratorNormalCompletion8, _didIteratorError8, _iteratorError8, _iterator8, _step8, x;

                        return regeneratorRuntime.wrap(function _callee15$(_context15) {
                          while (1) {
                            switch (_context15.prev = _context15.next) {
                              case 0:
                                // console.log(element);
                                price = 0;
                                selling_price = 0;
                                all_test_data = [];
                                all_test1_data = [];
                                available_test = [];
                                not_available_test = [];
                                _iteratorNormalCompletion4 = true;
                                _didIteratorError4 = false;
                                _iteratorError4 = undefined;
                                _context15.prev = 9;

                                for (_iterator4 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                  _x = _step4.value;

                                  if (_x.branch_id == element.uid) {
                                    all_test_data.push(_x);
                                    available_test.push(_x.itid.test_name);
                                    price += _x.price;
                                    selling_price += _x.selling_price;
                                  }
                                }

                                _context15.next = 17;
                                break;

                              case 13:
                                _context15.prev = 13;
                                _context15.t0 = _context15["catch"](9);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context15.t0;

                              case 17:
                                _context15.prev = 17;
                                _context15.prev = 18;

                                if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
                                  _iterator4.return();
                                }

                              case 20:
                                _context15.prev = 20;

                                if (!_didIteratorError4) {
                                  _context15.next = 23;
                                  break;
                                }

                                throw _iteratorError4;

                              case 23:
                                return _context15.finish(20);

                              case 24:
                                return _context15.finish(17);

                              case 25:
                                _iteratorNormalCompletion5 = true;
                                _didIteratorError5 = false;
                                _iteratorError5 = undefined;
                                _context15.prev = 28;
                                _iterator5 = this.addToBucket[Symbol.iterator]();

                              case 30:
                                if (_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done) {
                                  _context15.next = 56;
                                  break;
                                }

                                _x2 = _step5.value;
                                is_available = false;
                                _iteratorNormalCompletion9 = true;
                                _didIteratorError9 = false;
                                _iteratorError9 = undefined;
                                _context15.prev = 36;

                                for (_iterator9 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
                                  y = _step9.value;

                                  if (_x2 == y.individual_test) {
                                    is_available = true;
                                  }
                                }

                                _context15.next = 44;
                                break;

                              case 40:
                                _context15.prev = 40;
                                _context15.t1 = _context15["catch"](36);
                                _didIteratorError9 = true;
                                _iteratorError9 = _context15.t1;

                              case 44:
                                _context15.prev = 44;
                                _context15.prev = 45;

                                if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
                                  _iterator9.return();
                                }

                              case 47:
                                _context15.prev = 47;

                                if (!_didIteratorError9) {
                                  _context15.next = 50;
                                  break;
                                }

                                throw _iteratorError9;

                              case 50:
                                return _context15.finish(47);

                              case 51:
                                return _context15.finish(44);

                              case 52:
                                if (is_available == false) {
                                  all_test1_data.push(_x2);
                                }

                              case 53:
                                _iteratorNormalCompletion5 = true;
                                _context15.next = 30;
                                break;

                              case 56:
                                _context15.next = 62;
                                break;

                              case 58:
                                _context15.prev = 58;
                                _context15.t2 = _context15["catch"](28);
                                _didIteratorError5 = true;
                                _iteratorError5 = _context15.t2;

                              case 62:
                                _context15.prev = 62;
                                _context15.prev = 63;

                                if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
                                  _iterator5.return();
                                }

                              case 65:
                                _context15.prev = 65;

                                if (!_didIteratorError5) {
                                  _context15.next = 68;
                                  break;
                                }

                                throw _iteratorError5;

                              case 68:
                                return _context15.finish(65);

                              case 69:
                                return _context15.finish(62);

                              case 70:
                                test2data = [];
                                difference = this.newBucketArray.filter(function (x) {
                                  return !available_test.includes(x);
                                });
                                not_available_test.push(difference);
                                test2data.push(difference); // for (let x of this.associated_tests){
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
                                element.selling_price = selling_price;
                                _context15.next = 84;
                                return this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                              case 84:
                                distance = _context15.sent;
                                // console.log(distance);
                                element.distance = distance;
                                rating_array = [];
                                facilities = [];
                                console.log(this.facilities);
                                _iteratorNormalCompletion6 = true;
                                _didIteratorError6 = false;
                                _iteratorError6 = undefined;
                                _context15.prev = 92;
                                _iterator6 = this.facilities[Symbol.iterator]();

                              case 94:
                                if (_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done) {
                                  _context15.next = 118;
                                  break;
                                }

                                _x3 = _step6.value;
                                _iteratorNormalCompletion10 = true;
                                _didIteratorError10 = false;
                                _iteratorError10 = undefined;
                                _context15.prev = 99;

                                for (_iterator10 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion10 = (_step10 = _iterator10.next()).done); _iteratorNormalCompletion10 = true) {
                                  _y = _step10.value;

                                  if (_x3.id == _y) {
                                    facilities.push(_x3);
                                  }
                                }

                                _context15.next = 107;
                                break;

                              case 103:
                                _context15.prev = 103;
                                _context15.t3 = _context15["catch"](99);
                                _didIteratorError10 = true;
                                _iteratorError10 = _context15.t3;

                              case 107:
                                _context15.prev = 107;
                                _context15.prev = 108;

                                if (!_iteratorNormalCompletion10 && _iterator10.return != null) {
                                  _iterator10.return();
                                }

                              case 110:
                                _context15.prev = 110;

                                if (!_didIteratorError10) {
                                  _context15.next = 113;
                                  break;
                                }

                                throw _iteratorError10;

                              case 113:
                                return _context15.finish(110);

                              case 114:
                                return _context15.finish(107);

                              case 115:
                                _iteratorNormalCompletion6 = true;
                                _context15.next = 94;
                                break;

                              case 118:
                                _context15.next = 124;
                                break;

                              case 120:
                                _context15.prev = 120;
                                _context15.t4 = _context15["catch"](92);
                                _didIteratorError6 = true;
                                _iteratorError6 = _context15.t4;

                              case 124:
                                _context15.prev = 124;
                                _context15.prev = 125;

                                if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
                                  _iterator6.return();
                                }

                              case 127:
                                _context15.prev = 127;

                                if (!_didIteratorError6) {
                                  _context15.next = 130;
                                  break;
                                }

                                throw _iteratorError6;

                              case 130:
                                return _context15.finish(127);

                              case 131:
                                return _context15.finish(124);

                              case 132:
                                element.facilities = facilities;
                                console.log(facilities);
                                _iteratorNormalCompletion7 = true;
                                _didIteratorError7 = false;
                                _iteratorError7 = undefined;
                                _context15.prev = 137;

                                for (_iterator7 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
                                  _x4 = _step7.value;

                                  if (_x4.lab_id == element.id) {
                                    rating_array.push(_x4);
                                  }
                                }

                                _context15.next = 145;
                                break;

                              case 141:
                                _context15.prev = 141;
                                _context15.t5 = _context15["catch"](137);
                                _didIteratorError7 = true;
                                _iteratorError7 = _context15.t5;

                              case 145:
                                _context15.prev = 145;
                                _context15.prev = 146;

                                if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
                                  _iterator7.return();
                                }

                              case 148:
                                _context15.prev = 148;

                                if (!_didIteratorError7) {
                                  _context15.next = 151;
                                  break;
                                }

                                throw _iteratorError7;

                              case 151:
                                return _context15.finish(148);

                              case 152:
                                return _context15.finish(145);

                              case 153:
                                element.total_reviews = 0;

                                if (!(rating_array.length > 0)) {
                                  _context15.next = 178;
                                  break;
                                }

                                avgrate = 0;
                                rating_length = rating_array.length;
                                _iteratorNormalCompletion8 = true;
                                _didIteratorError8 = false;
                                _iteratorError8 = undefined;
                                _context15.prev = 160;

                                for (_iterator8 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
                                  x = _step8.value;
                                  avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                }

                                _context15.next = 168;
                                break;

                              case 164:
                                _context15.prev = 164;
                                _context15.t6 = _context15["catch"](160);
                                _didIteratorError8 = true;
                                _iteratorError8 = _context15.t6;

                              case 168:
                                _context15.prev = 168;
                                _context15.prev = 169;

                                if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
                                  _iterator8.return();
                                }

                              case 171:
                                _context15.prev = 171;

                                if (!_didIteratorError8) {
                                  _context15.next = 174;
                                  break;
                                }

                                throw _iteratorError8;

                              case 174:
                                return _context15.finish(171);

                              case 175:
                                return _context15.finish(168);

                              case 176:
                                average_rating = avgrate / rating_length;
                                element.total_reviews = rating_array.length;

                              case 178:
                                element.average_rating = average_rating;

                              case 179:
                              case "end":
                                return _context15.stop();
                            }
                          }
                        }, _callee15, this, [[9, 13, 17, 25], [18,, 20, 24], [28, 58, 62, 70], [36, 40, 44, 52], [45,, 47, 51], [63,, 65, 69], [92, 120, 124, 132], [99, 103, 107, 115], [108,, 110, 114], [125,, 127, 131], [137, 141, 145, 153], [146,, 148, 152], [160, 164, 168, 176], [169,, 171, 175]]);
                      }));
                    });

                  case 7:
                    console.log(this.secondary_labs); // return false;

                    this.secondary_labs.sort(this.compare);
                    newSortedArray = [];
                    _iteratorNormalCompletion11 = true;
                    _didIteratorError11 = false;
                    _iteratorError11 = undefined;
                    _context16.prev = 13;

                    for (_iterator11 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion11 = (_step11 = _iterator11.next()).done); _iteratorNormalCompletion11 = true) {
                      x = _step11.value;

                      if (x.test_data.length > 0) {
                        newSortedArray.push(x);
                      }
                    }

                    _context16.next = 21;
                    break;

                  case 17:
                    _context16.prev = 17;
                    _context16.t0 = _context16["catch"](13);
                    _didIteratorError11 = true;
                    _iteratorError11 = _context16.t0;

                  case 21:
                    _context16.prev = 21;
                    _context16.prev = 22;

                    if (!_iteratorNormalCompletion11 && _iterator11.return != null) {
                      _iterator11.return();
                    }

                  case 24:
                    _context16.prev = 24;

                    if (!_didIteratorError11) {
                      _context16.next = 27;
                      break;
                    }

                    throw _iteratorError11;

                  case 27:
                    return _context16.finish(24);

                  case 28:
                    return _context16.finish(21);

                  case 29:
                    this.labs = newSortedArray;
                    arr = [];
                    console.log('this.labs', this.labs);
                    _iteratorNormalCompletion12 = true;
                    _didIteratorError12 = false;
                    _iteratorError12 = undefined;
                    _context16.prev = 35;

                    for (_iterator12 = this.labs[Symbol.iterator](); !(_iteratorNormalCompletion12 = (_step12 = _iterator12.next()).done); _iteratorNormalCompletion12 = true) {
                      _x5 = _step12.value;
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
                        lat: _x5.lat,
                        lng: _x5.lng,
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

                    _context16.next = 43;
                    break;

                  case 39:
                    _context16.prev = 39;
                    _context16.t1 = _context16["catch"](35);
                    _didIteratorError12 = true;
                    _iteratorError12 = _context16.t1;

                  case 43:
                    _context16.prev = 43;
                    _context16.prev = 44;

                    if (!_iteratorNormalCompletion12 && _iterator12.return != null) {
                      _iterator12.return();
                    }

                  case 46:
                    _context16.prev = 46;

                    if (!_didIteratorError12) {
                      _context16.next = 49;
                      break;
                    }

                    throw _iteratorError12;

                  case 49:
                    return _context16.finish(46);

                  case 50:
                    return _context16.finish(43);

                  case 51:
                    console.log("arr", arr);
                    jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(arr); // console.log(this.labs);
                    // var jsonString = JSON.stringify(this.labs);
                    // console.log(jsonString);

                    localStorage.setItem('labsdata', jsonString);
                    console.log(this.addToBucket);
                    console.log(this.newBucketArray);
                    localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.newBucketArray));
                    localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.addToBucket));
                    this.util.hide(); // this.router.navigate(['search-labs']);

                  case 59:
                  case "end":
                    return _context16.stop();
                }
              }
            }, _callee16, this, [[13, 17, 21, 29], [22,, 24, 28], [35, 39, 43, 51], [44,, 46, 50]]);
          }));
        }
      }, {
        key: "searchLabs",
        value: function searchLabs() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee19() {
            var _this16 = this;

            var lat, lng;
            return regeneratorRuntime.wrap(function _callee19$(_context19) {
              while (1) {
                switch (_context19.prev = _context19.next) {
                  case 0:
                    this.util.show('Please wait....');
                    lat = this.latitude;
                    lng = this.longitude;
                    _context19.next = 5;
                    return this.getAssociatedTest();

                  case 5:
                    _context19.next = 7;
                    return this.api.getSecondaryLabs().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee18() {
                        var _this17 = this;

                        var pincode, _iteratorNormalCompletion13, _didIteratorError13, _iteratorError13, _iterator13, _step13, _x10, delivery_pincode, _iteratorNormalCompletion23, _didIteratorError23, _iteratorError23, _iterator23, _step23, y, newSortedArray, _iteratorNormalCompletion21, _didIteratorError21, _iteratorError21, _iterator21, _step21, x, arr, _iteratorNormalCompletion22, _didIteratorError22, _iteratorError22, _iterator22, _step22, _x11, jsonString;

                        return regeneratorRuntime.wrap(function _callee18$(_context18) {
                          while (1) {
                            switch (_context18.prev = _context18.next) {
                              case 0:
                                console.log(data);
                                this.all_labs = data;
                                pincode = [];
                                this.util.hide();
                                _iteratorNormalCompletion13 = true;
                                _didIteratorError13 = false;
                                _iteratorError13 = undefined;
                                _context18.prev = 7;
                                _iterator13 = this.all_labs[Symbol.iterator]();

                              case 9:
                                if (_iteratorNormalCompletion13 = (_step13 = _iterator13.next()).done) {
                                  _context18.next = 35;
                                  break;
                                }

                                _x10 = _step13.value;
                                console.log(_x10);
                                delivery_pincode = [];
                                _iteratorNormalCompletion23 = true;
                                _didIteratorError23 = false;
                                _iteratorError23 = undefined;
                                _context18.prev = 16;

                                for (_iterator23 = _x10.delivery_pincode[Symbol.iterator](); !(_iteratorNormalCompletion23 = (_step23 = _iterator23.next()).done); _iteratorNormalCompletion23 = true) {
                                  y = _step23.value;

                                  if (y.item_text == this.pincode) {
                                    console.log('matched');
                                    this.secondary_labs.push(_x10);
                                  }
                                }

                                _context18.next = 24;
                                break;

                              case 20:
                                _context18.prev = 20;
                                _context18.t0 = _context18["catch"](16);
                                _didIteratorError23 = true;
                                _iteratorError23 = _context18.t0;

                              case 24:
                                _context18.prev = 24;
                                _context18.prev = 25;

                                if (!_iteratorNormalCompletion23 && _iterator23.return != null) {
                                  _iterator23.return();
                                }

                              case 27:
                                _context18.prev = 27;

                                if (!_didIteratorError23) {
                                  _context18.next = 30;
                                  break;
                                }

                                throw _iteratorError23;

                              case 30:
                                return _context18.finish(27);

                              case 31:
                                return _context18.finish(24);

                              case 32:
                                _iteratorNormalCompletion13 = true;
                                _context18.next = 9;
                                break;

                              case 35:
                                _context18.next = 41;
                                break;

                              case 37:
                                _context18.prev = 37;
                                _context18.t1 = _context18["catch"](7);
                                _didIteratorError13 = true;
                                _iteratorError13 = _context18.t1;

                              case 41:
                                _context18.prev = 41;
                                _context18.prev = 42;

                                if (!_iteratorNormalCompletion13 && _iterator13.return != null) {
                                  _iterator13.return();
                                }

                              case 44:
                                _context18.prev = 44;

                                if (!_didIteratorError13) {
                                  _context18.next = 47;
                                  break;
                                }

                                throw _iteratorError13;

                              case 47:
                                return _context18.finish(44);

                              case 48:
                                return _context18.finish(41);

                              case 49:
                                _context18.next = 51;
                                return this.secondary_labs.forEach(function (element) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee17() {
                                    var price, selling_price, all_test_data, all_test1_data, available_test, not_available_test, _iteratorNormalCompletion14, _didIteratorError14, _iteratorError14, _iterator14, _step14, _x6, _iteratorNormalCompletion15, _didIteratorError15, _iteratorError15, _iterator15, _step15, _x7, is_available, _iteratorNormalCompletion19, _didIteratorError19, _iteratorError19, _iterator19, _step19, y, test2data, difference, average_rating, distance, rating_array, facilities, _iteratorNormalCompletion16, _didIteratorError16, _iteratorError16, _iterator16, _step16, _x8, _iteratorNormalCompletion20, _didIteratorError20, _iteratorError20, _iterator20, _step20, _y2, _iteratorNormalCompletion17, _didIteratorError17, _iteratorError17, _iterator17, _step17, _x9, avgrate, rating_length, _iteratorNormalCompletion18, _didIteratorError18, _iteratorError18, _iterator18, _step18, x;

                                    return regeneratorRuntime.wrap(function _callee17$(_context17) {
                                      while (1) {
                                        switch (_context17.prev = _context17.next) {
                                          case 0:
                                            // console.log(element);
                                            price = 0;
                                            selling_price = 0;
                                            all_test_data = [];
                                            all_test1_data = [];
                                            available_test = [];
                                            not_available_test = [];
                                            _iteratorNormalCompletion14 = true;
                                            _didIteratorError14 = false;
                                            _iteratorError14 = undefined;
                                            _context17.prev = 9;

                                            for (_iterator14 = this.associated_test[Symbol.iterator](); !(_iteratorNormalCompletion14 = (_step14 = _iterator14.next()).done); _iteratorNormalCompletion14 = true) {
                                              _x6 = _step14.value;
                                              console.log(_x6);

                                              if (_x6.branch_id == element.uid) {
                                                console.log('available data');
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
                                            _didIteratorError14 = true;
                                            _iteratorError14 = _context17.t0;

                                          case 17:
                                            _context17.prev = 17;
                                            _context17.prev = 18;

                                            if (!_iteratorNormalCompletion14 && _iterator14.return != null) {
                                              _iterator14.return();
                                            }

                                          case 20:
                                            _context17.prev = 20;

                                            if (!_didIteratorError14) {
                                              _context17.next = 23;
                                              break;
                                            }

                                            throw _iteratorError14;

                                          case 23:
                                            return _context17.finish(20);

                                          case 24:
                                            return _context17.finish(17);

                                          case 25:
                                            _iteratorNormalCompletion15 = true;
                                            _didIteratorError15 = false;
                                            _iteratorError15 = undefined;
                                            _context17.prev = 28;
                                            _iterator15 = this.addToBucket[Symbol.iterator]();

                                          case 30:
                                            if (_iteratorNormalCompletion15 = (_step15 = _iterator15.next()).done) {
                                              _context17.next = 56;
                                              break;
                                            }

                                            _x7 = _step15.value;
                                            is_available = false;
                                            _iteratorNormalCompletion19 = true;
                                            _didIteratorError19 = false;
                                            _iteratorError19 = undefined;
                                            _context17.prev = 36;

                                            for (_iterator19 = all_test_data[Symbol.iterator](); !(_iteratorNormalCompletion19 = (_step19 = _iterator19.next()).done); _iteratorNormalCompletion19 = true) {
                                              y = _step19.value;

                                              if (_x7 == y.individual_test) {
                                                is_available = true;
                                              }
                                            }

                                            _context17.next = 44;
                                            break;

                                          case 40:
                                            _context17.prev = 40;
                                            _context17.t1 = _context17["catch"](36);
                                            _didIteratorError19 = true;
                                            _iteratorError19 = _context17.t1;

                                          case 44:
                                            _context17.prev = 44;
                                            _context17.prev = 45;

                                            if (!_iteratorNormalCompletion19 && _iterator19.return != null) {
                                              _iterator19.return();
                                            }

                                          case 47:
                                            _context17.prev = 47;

                                            if (!_didIteratorError19) {
                                              _context17.next = 50;
                                              break;
                                            }

                                            throw _iteratorError19;

                                          case 50:
                                            return _context17.finish(47);

                                          case 51:
                                            return _context17.finish(44);

                                          case 52:
                                            if (is_available == false) {
                                              all_test1_data.push(_x7);
                                            }

                                          case 53:
                                            _iteratorNormalCompletion15 = true;
                                            _context17.next = 30;
                                            break;

                                          case 56:
                                            _context17.next = 62;
                                            break;

                                          case 58:
                                            _context17.prev = 58;
                                            _context17.t2 = _context17["catch"](28);
                                            _didIteratorError15 = true;
                                            _iteratorError15 = _context17.t2;

                                          case 62:
                                            _context17.prev = 62;
                                            _context17.prev = 63;

                                            if (!_iteratorNormalCompletion15 && _iterator15.return != null) {
                                              _iterator15.return();
                                            }

                                          case 65:
                                            _context17.prev = 65;

                                            if (!_didIteratorError15) {
                                              _context17.next = 68;
                                              break;
                                            }

                                            throw _iteratorError15;

                                          case 68:
                                            return _context17.finish(65);

                                          case 69:
                                            return _context17.finish(62);

                                          case 70:
                                            test2data = [];
                                            difference = this.newBucketArray.filter(function (x) {
                                              return !available_test.includes(x);
                                            });
                                            not_available_test.push(difference);
                                            test2data.push(difference); // for (let x of this.associated_tests){
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
                                            element.selling_price = selling_price;
                                            _context17.next = 84;
                                            return this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);

                                          case 84:
                                            distance = _context17.sent;
                                            // console.log(distance);
                                            element.distance = distance;
                                            rating_array = [];
                                            facilities = [];
                                            _iteratorNormalCompletion16 = true;
                                            _didIteratorError16 = false;
                                            _iteratorError16 = undefined;
                                            _context17.prev = 91;
                                            _iterator16 = this.facilities[Symbol.iterator]();

                                          case 93:
                                            if (_iteratorNormalCompletion16 = (_step16 = _iterator16.next()).done) {
                                              _context17.next = 117;
                                              break;
                                            }

                                            _x8 = _step16.value;
                                            _iteratorNormalCompletion20 = true;
                                            _didIteratorError20 = false;
                                            _iteratorError20 = undefined;
                                            _context17.prev = 98;

                                            for (_iterator20 = element.facility[Symbol.iterator](); !(_iteratorNormalCompletion20 = (_step20 = _iterator20.next()).done); _iteratorNormalCompletion20 = true) {
                                              _y2 = _step20.value;

                                              if (_x8.id != _y2) {
                                                facilities.push(_x8);
                                              }
                                            }

                                            _context17.next = 106;
                                            break;

                                          case 102:
                                            _context17.prev = 102;
                                            _context17.t3 = _context17["catch"](98);
                                            _didIteratorError20 = true;
                                            _iteratorError20 = _context17.t3;

                                          case 106:
                                            _context17.prev = 106;
                                            _context17.prev = 107;

                                            if (!_iteratorNormalCompletion20 && _iterator20.return != null) {
                                              _iterator20.return();
                                            }

                                          case 109:
                                            _context17.prev = 109;

                                            if (!_didIteratorError20) {
                                              _context17.next = 112;
                                              break;
                                            }

                                            throw _iteratorError20;

                                          case 112:
                                            return _context17.finish(109);

                                          case 113:
                                            return _context17.finish(106);

                                          case 114:
                                            _iteratorNormalCompletion16 = true;
                                            _context17.next = 93;
                                            break;

                                          case 117:
                                            _context17.next = 123;
                                            break;

                                          case 119:
                                            _context17.prev = 119;
                                            _context17.t4 = _context17["catch"](91);
                                            _didIteratorError16 = true;
                                            _iteratorError16 = _context17.t4;

                                          case 123:
                                            _context17.prev = 123;
                                            _context17.prev = 124;

                                            if (!_iteratorNormalCompletion16 && _iterator16.return != null) {
                                              _iterator16.return();
                                            }

                                          case 126:
                                            _context17.prev = 126;

                                            if (!_didIteratorError16) {
                                              _context17.next = 129;
                                              break;
                                            }

                                            throw _iteratorError16;

                                          case 129:
                                            return _context17.finish(126);

                                          case 130:
                                            return _context17.finish(123);

                                          case 131:
                                            element.facilities = facilities;
                                            _iteratorNormalCompletion17 = true;
                                            _didIteratorError17 = false;
                                            _iteratorError17 = undefined;
                                            _context17.prev = 135;

                                            for (_iterator17 = this.reviews[Symbol.iterator](); !(_iteratorNormalCompletion17 = (_step17 = _iterator17.next()).done); _iteratorNormalCompletion17 = true) {
                                              _x9 = _step17.value;

                                              if (_x9.lab_id == element.id) {
                                                rating_array.push(_x9);
                                              }
                                            }

                                            _context17.next = 143;
                                            break;

                                          case 139:
                                            _context17.prev = 139;
                                            _context17.t5 = _context17["catch"](135);
                                            _didIteratorError17 = true;
                                            _iteratorError17 = _context17.t5;

                                          case 143:
                                            _context17.prev = 143;
                                            _context17.prev = 144;

                                            if (!_iteratorNormalCompletion17 && _iterator17.return != null) {
                                              _iterator17.return();
                                            }

                                          case 146:
                                            _context17.prev = 146;

                                            if (!_didIteratorError17) {
                                              _context17.next = 149;
                                              break;
                                            }

                                            throw _iteratorError17;

                                          case 149:
                                            return _context17.finish(146);

                                          case 150:
                                            return _context17.finish(143);

                                          case 151:
                                            element.total_reviews = 0;

                                            if (!(rating_array.length > 0)) {
                                              _context17.next = 176;
                                              break;
                                            }

                                            avgrate = 0;
                                            rating_length = rating_array.length;
                                            _iteratorNormalCompletion18 = true;
                                            _didIteratorError18 = false;
                                            _iteratorError18 = undefined;
                                            _context17.prev = 158;

                                            for (_iterator18 = rating_array[Symbol.iterator](); !(_iteratorNormalCompletion18 = (_step18 = _iterator18.next()).done); _iteratorNormalCompletion18 = true) {
                                              x = _step18.value;
                                              avgrate += (x.booking_exp + x.collection_process + x.price + x.result_quality + x.slot_timing) / 5;
                                            }

                                            _context17.next = 166;
                                            break;

                                          case 162:
                                            _context17.prev = 162;
                                            _context17.t6 = _context17["catch"](158);
                                            _didIteratorError18 = true;
                                            _iteratorError18 = _context17.t6;

                                          case 166:
                                            _context17.prev = 166;
                                            _context17.prev = 167;

                                            if (!_iteratorNormalCompletion18 && _iterator18.return != null) {
                                              _iterator18.return();
                                            }

                                          case 169:
                                            _context17.prev = 169;

                                            if (!_didIteratorError18) {
                                              _context17.next = 172;
                                              break;
                                            }

                                            throw _iteratorError18;

                                          case 172:
                                            return _context17.finish(169);

                                          case 173:
                                            return _context17.finish(166);

                                          case 174:
                                            average_rating = avgrate / rating_length;
                                            element.total_reviews = rating_array.length;

                                          case 176:
                                            element.average_rating = average_rating;

                                          case 177:
                                          case "end":
                                            return _context17.stop();
                                        }
                                      }
                                    }, _callee17, this, [[9, 13, 17, 25], [18,, 20, 24], [28, 58, 62, 70], [36, 40, 44, 52], [45,, 47, 51], [63,, 65, 69], [91, 119, 123, 131], [98, 102, 106, 114], [107,, 109, 113], [124,, 126, 130], [135, 139, 143, 151], [144,, 146, 150], [158, 162, 166, 174], [167,, 169, 173]]);
                                  }));
                                });

                              case 51:
                                this.secondary_labs.sort(this.compare);
                                newSortedArray = [];
                                _iteratorNormalCompletion21 = true;
                                _didIteratorError21 = false;
                                _iteratorError21 = undefined;
                                _context18.prev = 56;

                                for (_iterator21 = this.secondary_labs[Symbol.iterator](); !(_iteratorNormalCompletion21 = (_step21 = _iterator21.next()).done); _iteratorNormalCompletion21 = true) {
                                  x = _step21.value;

                                  if (x.test_data.length > 0) {
                                    newSortedArray.push(x);
                                  }
                                }

                                _context18.next = 64;
                                break;

                              case 60:
                                _context18.prev = 60;
                                _context18.t2 = _context18["catch"](56);
                                _didIteratorError21 = true;
                                _iteratorError21 = _context18.t2;

                              case 64:
                                _context18.prev = 64;
                                _context18.prev = 65;

                                if (!_iteratorNormalCompletion21 && _iterator21.return != null) {
                                  _iterator21.return();
                                }

                              case 67:
                                _context18.prev = 67;

                                if (!_didIteratorError21) {
                                  _context18.next = 70;
                                  break;
                                }

                                throw _iteratorError21;

                              case 70:
                                return _context18.finish(67);

                              case 71:
                                return _context18.finish(64);

                              case 72:
                                this.labs = newSortedArray;
                                arr = [];
                                _iteratorNormalCompletion22 = true;
                                _didIteratorError22 = false;
                                _iteratorError22 = undefined;
                                _context18.prev = 77;

                                for (_iterator22 = this.labs[Symbol.iterator](); !(_iteratorNormalCompletion22 = (_step22 = _iterator22.next()).done); _iteratorNormalCompletion22 = true) {
                                  _x11 = _step22.value;
                                  arr.push({
                                    address: _x11.address,
                                    available_test: _x11.available_test,
                                    cod: _x11.cod,
                                    cover: _x11.cover,
                                    distance: _x11.distance,
                                    price: _x11.price,
                                    selling_price: _x11.selling_price,
                                    total_reviews: _x11.total_reviews,
                                    facilities: _x11.facilities,
                                    id: _x11.id,
                                    lat: _x11.lat,
                                    lng: _x11.lng,
                                    name: _x11.name,
                                    lab_timings: _x11.lab_timings,
                                    not_available_test: _x11.not_available_test,
                                    logo: _x11.logo,
                                    range_price: _x11.range_price,
                                    service_delivery: _x11.service_delivery,
                                    test1_data: _x11.test1_data,
                                    test_data: _x11.test_data,
                                    free_charge: _x11.free_charge,
                                    page_slug: _x11.page_slug
                                  });
                                }

                                _context18.next = 85;
                                break;

                              case 81:
                                _context18.prev = 81;
                                _context18.t3 = _context18["catch"](77);
                                _didIteratorError22 = true;
                                _iteratorError22 = _context18.t3;

                              case 85:
                                _context18.prev = 85;
                                _context18.prev = 86;

                                if (!_iteratorNormalCompletion22 && _iterator22.return != null) {
                                  _iterator22.return();
                                }

                              case 88:
                                _context18.prev = 88;

                                if (!_didIteratorError22) {
                                  _context18.next = 91;
                                  break;
                                }

                                throw _iteratorError22;

                              case 91:
                                return _context18.finish(88);

                              case 92:
                                return _context18.finish(85);

                              case 93:
                                jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(arr); // console.log(this.labs);
                                // var jsonString = JSON.stringify(this.labs);

                                console.log(jsonString);
                                localStorage.setItem('labsdata', jsonString);
                                console.log(this.addToBucket);
                                console.log(this.newBucketArray);
                                localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.newBucketArray));
                                localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.addToBucket)); //localStorage.setItem('labsdata', stringify(this.labs))
                                // this.router.navigate(['search-labs']);    

                              case 100:
                              case "end":
                                return _context18.stop();
                            }
                          }
                        }, _callee18, this, [[7, 37, 41, 49], [16, 20, 24, 32], [25,, 27, 31], [42,, 44, 48], [56, 60, 64, 72], [65,, 67, 71], [77, 81, 85, 93], [86,, 88, 92]]);
                      }));
                    }).catch(function (error) {
                      _this16.util.hide();

                      console.log(error);
                    });

                  case 7:
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
          console.log(lat1, lon1, lat2, lon2);
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
          var _iteratorNormalCompletion24 = true;
          var _didIteratorError24 = false;
          var _iteratorError24 = undefined;

          try {
            for (var _iterator24 = this.addToBucket[Symbol.iterator](), _step24; !(_iteratorNormalCompletion24 = (_step24 = _iterator24.next()).done); _iteratorNormalCompletion24 = true) {
              var i = _step24.value;
              console.log(i);
              var _iteratorNormalCompletion25 = true;
              var _didIteratorError25 = false;
              var _iteratorError25 = undefined;

              try {
                for (var _iterator25 = this.associated_tests[Symbol.iterator](), _step25; !(_iteratorNormalCompletion25 = (_step25 = _iterator25.next()).done); _iteratorNormalCompletion25 = true) {
                  var x = _step25.value;
                  if (x.individual_test == i) this.associated_test.push(x);
                  console.log(this.associated_test);
                }
              } catch (err) {
                _didIteratorError25 = true;
                _iteratorError25 = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion25 && _iterator25.return != null) {
                    _iterator25.return();
                  }
                } finally {
                  if (_didIteratorError25) {
                    throw _iteratorError25;
                  }
                }
              }
            }
          } catch (err) {
            _didIteratorError24 = true;
            _iteratorError24 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion24 && _iterator24.return != null) {
                _iterator24.return();
              }
            } finally {
              if (_didIteratorError24) {
                throw _iteratorError24;
              }
            }
          }
        }
      }]);

      return SearchLabsPage;
    }();

    SearchLabsPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placesRef', {
      static: false
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceDirective"])], SearchLabsPage.prototype, "placesRef", void 0);
    SearchLabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-search-labs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./search-labs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./search-labs.page.scss */
      "./src/app/pages/search-labs/search-labs.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], SearchLabsPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-search-labs-search-labs-module-es5.js.map