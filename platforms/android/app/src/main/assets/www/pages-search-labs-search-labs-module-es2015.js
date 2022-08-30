(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-search-labs-search-labs-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n   <div class=\"container\"> \n<div class=\"row\">\n    <div class=\"col-md-12 col-lg-12 col-xl-12\">\n      <h3 style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Search Lab Test</h3>\n      </div>   \n   </div>\n   <div class=\"parent-section\">\n   <div *ngIf=\"labs.length == 0\" class=\"no_result\">\n      <span>Type Location PIN code and search, if the lab test which you have searched was not found. Kindly modify your lab test or PIN code below.</span>\n   </div>\n   <div class=\"row lab-drop location-container\" *ngIf=\"labs.length == 0\">\n      <div class=\"col-sm-3 col-lg-3 location-span\">\n         <span class=\"\">Location Pin</span>\n      </div>\n      <div class=\"col-sm-12 col-lg-12\">\n         <input type=\"text\" [(ngModel)]=\"address\" ngx-google-places-autocomplete #placesRef=\"ngx-places\" (onAddressChange)=\"handleAddressChange($event)\" class=\"form-control locinpl\"\n         [placeholder]=\"('Please type your location pincode'| translate) || '&nbsp;'\">\n      </div>\n      <div class=\"col-sm-12 col-lg-12\">\n         <div class=\"tags\" *ngIf=\"newBucketArray.length !==0\">\n            <div *ngFor=\"let item of newBucketArray;let i = index;\">\n               <span>{{item}} <ion-icon name=\"close-outline\" (click)=\"remove(i)\"></ion-icon></span>\n            </div>\n         </div>\n         <ion-searchbar class=\"searchinpl\" placeholder=\"Find your Tests\" [(ngModel)]=\"terms\" animated=\"true\" (ionInput)=\"onInput($event)\" (ionClear)=\"onCancel($event)\"></ion-searchbar>\n         <div class=\"test-search-item\">\n           <ion-list *ngIf=\"testLoad\">\n            <ion-item *ngFor=\"let item of all_test | search: terms | slice: 0:7\" class=\"keywords\" (click)=\"add(item)\">\n             <ion-thumbnail slot=\"end\">\n                 <ion-icon name=\"add-outline\"></ion-icon>\n               </ion-thumbnail>\n               <p>{{item.test_name}}</p>\n             </ion-item>\n           </ion-list>\n         </div>\n      </div>\n      <div class=\"area-pin-mobile\">\n         <div class=\"col-sm-3 col-lg-3\">\n            <ion-button (click)=\"searchLabs2()\">Find Labs</ion-button>\n         </div>\n      </div>\n   </div>\n   <div *ngIf=\"labs.length == 0\">\n      <div></div>\n   </div>\n\n<div class=\"col-md-12\">\n<div class=\"desktopview\">\n<div class=\"row\">\n <div class=\"col-md-12 col-lg-6 col-xl-6\" *ngFor=\"let item of labs; let i =index\">\n   <div class=\"new-lab-list\">\n      <h3>\n         <a (click)=\"lab(item)\">{{item.name}}</a>\n        <div class=\"rating-section\">\n               <span class=\"star-icon full\">★</span> \n               &nbsp;&nbsp;{{item.average_rating}} Based on {{item.total_reviews}}\n               <!--a href=\"#\" class=\"read-review\">(Read reviews)</a-->\n            </div> \n      </h3>\n      <div class=\"lab-detail\">\n         <div class=\"left-section\">\n           <div class=\"lab-logo\">\n              <img [src]=\"item.primarylogo\" width=\"150\" height=\"150\">\n           </div>\n         <br>\n          <p class=\"customer-saving\">{{item.address}}</p>\n         </div>\n         <div class=\"right-section\">\n           \n            <div class=\"service-price\">\n            <div class=\"service\">\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li>\n                     <div class=\"service-icon-div\">\n                        <img src=\"assets/distance.png\">\n                     </div> \n                        <div class=\"new-lab-service\">{{item.distance | number : '1.2-2'}} Km</div>\n                  </li>\n               </ul>\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li *ngFor=\"let data of item.facilities | slice:0:3 ;\">\n                     <div class=\"service-icon-div\">\n                        <img src=\"{{data.image}}\">\n                     </div> \n                        <div class=\"new-lab-service\">{{data.name}}</div>\n                  </li>\n               </ul>\n            </div>\n            <div class=\"price\">\n               <p class=\"new-lab-price-section-cost\">\n                  <span class=\"cost-strike\"><i>₹</i>&nbsp;{{item.price}}</span>\n               </p>\n               <p class=\"new-lab-price-section-payable\"> \n                  <span class=\"\" content=\"1050\"><i>₹</i>&nbsp;{{item.selling_price}}</span>\n               </p> \n               <div class=\"new-lab-price-section-cashback\" title=\"Get additional Rs. 50 cashback for online booking &amp; payment\">\n               </div>\n            </div>\n                       \n            <div class=\"service-bottom desktop-services\" *ngIf=\"item.available_test.length !==0;\">\n               <div class=\"included\">\n                  <p>Included Test:<span *ngFor=\"let t of item.available_test\"> {{t}},</span></p>\n               </div>\n               <div class=\"excluded\" *ngIf=\"item.not_available_test.length !==0;\">\n                  <p>Not Included Test: <span *ngFor=\"let n of item.not_available_test\"> {{n}},</span></p>\n               </div>\n               <div class=\"get-deal-parent\">\n                 \n                 <!-- <p class=\"customer-saving\">Get additional <b><i>₹</i> 100</b> discount for online booking &amp; payment</p> -->\n               </div>\n            </div>\n            <div class=\"price-bottom\">\n               <div class=\"btn-section\">\n                  <ion-button (click)=\"book(item)\">Book Now</ion-button><br><br>\n                  <ion-button (click)=\"modify()\">Modify Test</ion-button>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n  <div class=\"lab-bot\">Special Notes: <span [innerHtml]=\"item.test_data[0].itid.preparation\"></span></div>\n\n  </div></div>\n</div>\n </div>\n<div class=\"mobileview\">\n<div class=\"col-md-12 col-lg-6 col-xl-6\" *ngFor=\"let item of labs; let i =index\">\n   <div class=\"new-lab-list\">\n      <h3>\n         <a (click)=\"lab(item)\">{{item.name}}</a>\n        <div class=\"rating-section\">\n               <span class=\"star-icon full\">★</span> \n               &nbsp;&nbsp;{{item.average_rating}} Based on {{item.total_reviews}}\n               <!--a href=\"#\" class=\"read-review\">(Read reviews)</a-->\n            </div> \n      </h3>\n      <div class=\"lab-detail\">\n         <div class=\"left-section\">\n           <div class=\"lab-logo\">\n              <img [src]=\"item.primarylogo\" width=\"150\" height=\"150\">\n           </div>\n         <br>\n          <p class=\"customer-saving\">{{item.address}}</p>\n         </div>\n         <div class=\"right-sectionm\">\n           \n            <div class=\"service-price\">\n            <div class=\"service\">\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li>\n                     <div class=\"service-icon-div\">\n                        <img src=\"assets/distance.png\" width=\"38\" height=\"33\">\n                     </div> \n                        <div class=\"new-lab-service\">{{item.distance | number : '1.2-2'}} Km</div>\n                  </li>\n               </ul>\n               <ul class=\"iconList new-lab-services-ul\">\n                 <li *ngFor=\"let data of item.facilities ;\">\n                     <div class=\"service-icon-div\">\n                        <img src=\"{{data.image}}\" width=\"32\" height=\"30\">\n                     </div> \n                        <div class=\"new-lab-service\">{{data.name}}</div>\n                  </li>\n               </ul>\n            </div>\n            <div class=\"price\">\n               <p class=\"new-lab-price-section-cost\">\n                  <span class=\"cost-strike\"><i>₹</i>{{item.price}}</span>\n               </p>\n               <p class=\"new-lab-price-section-payable\"> \n                  <span class=\"\" content=\"1050\"><i>₹</i>{{item.selling_price}}</span>\n               </p> \n               <div class=\"new-lab-price-section-cashback\" title=\"Get additional Rs. 50 cashback for online booking &amp; payment\">\n               </div>\n            </div>\n                       \n            <div class=\"service-bottom desktop-services\" *ngIf=\"item.available_test.length !==0;\">\n               <div class=\"included\">\n                  <p>Included Test:<span *ngFor=\"let t of item.available_test\"> {{t}},</span></p>\n               </div>\n               <div class=\"excluded\" *ngIf=\"item.not_available_test.length !==0;\">\n                  <p>Not Included Test: <span *ngFor=\"let n of item.not_available_test\"> {{n}},</span></p>\n               </div>\n               <div class=\"get-deal-parent\">\n                 \n                 <!-- <p class=\"customer-saving\">Get additional <b><i>₹</i> 100</b> discount for online booking &amp; payment</p> -->\n               </div>\n            </div>\n            <div class=\"price-bottom\">\n               <div class=\"btn-section\">\n                  <ion-button (click)=\"book(item)\" style=\"margin-right: 10px;\">Book Now</ion-button>\n                  <ion-button (click)=\"modify()\">Modify Test</ion-button><br><br>\n               </div>\n            </div>\n         </div>\n      </div>\n   </div>\n  <div class=\"lab-bot\">Special Notes: <span [innerHtml]=\"item.test_data[0].itid.preparation\"></span></div>\n\n  </div></div>\n\n</div>\n  </div>         \n</div>                     \n</div>\n   <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/search-labs/search-labs-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/search-labs/search-labs-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: SearchLabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLabsPageRoutingModule", function() { return SearchLabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _search_labs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search-labs.page */ "./src/app/pages/search-labs/search-labs.page.ts");




const routes = [
    {
        path: '',
        component: _search_labs_page__WEBPACK_IMPORTED_MODULE_3__["SearchLabsPage"]
    }
];
let SearchLabsPageRoutingModule = class SearchLabsPageRoutingModule {
};
SearchLabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], SearchLabsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/search-labs/search-labs.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-labs/search-labs.module.ts ***!
  \*********************************************************/
/*! exports provided: SearchLabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLabsPageModule", function() { return SearchLabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _search_labs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-labs-routing.module */ "./src/app/pages/search-labs/search-labs-routing.module.ts");
/* harmony import */ var _search_labs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-labs.page */ "./src/app/pages/search-labs/search-labs.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");












let SearchLabsPageModule = class SearchLabsPageModule {
};
SearchLabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_9__["GooglePlaceModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_10__["PipesModule"],
            _search_labs_routing_module__WEBPACK_IMPORTED_MODULE_5__["SearchLabsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_search_labs_page__WEBPACK_IMPORTED_MODULE_6__["SearchLabsPage"]]
    })
], SearchLabsPageModule);



/***/ }),

/***/ "./src/app/pages/search-labs/search-labs.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/search-labs/search-labs.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".parent-section {\n  margin: 0 auto 15%;\n  /*width:80%;*/\n}\n.parent-section .no_result {\n  background-image: url('pop_contbg.png');\n  margin: 0px 0px 20px;\n  padding: 18px;\n  text-align: center;\n}\n.new-lab-list {\n  position: relative;\n  background-color: #fff;\n  width: 100%;\n  margin-top: 15px;\n  color: Gray;\n  min-height: 175px;\n  display: inline-block;\n  box-shadow: 0 1px 4px rgba(41, 51, 57, 0.5);\n  border-radius: 2px;\n  padding: 0;\n}\n.lab-bot {\n  text-align: center;\n  margin: 0;\n  padding: 3px;\n  color: #fff;\n  background-color: #007c9d;\n  font-size: 13px;\n}\n.new-lab-list h3 {\n  margin: 0;\n  padding: 2px;\n  background-color: #007c9d;\n}\n.new-lab-list h3 a {\n  padding-left: 5px;\n  color: #fff;\n  font-weight: 300;\n  font-size: 11pt;\n  cursor: pointer;\n  text-decoration: none;\n}\n.new-lab-list .lab-detail {\n  padding: 0;\n  width: auto;\n  display: inline-block;\n  width: 100%;\n}\n.new-lab-list .lab-detail .left-section {\n  width: 22%;\n  padding-top: 12px;\n  float: left;\n  text-align: center;\n  padding-left: 10px;\n}\n.lab-logo {\n  border: 1px #eee solid;\n  background-color: #fff;\n}\n.new-lab-list .lab-detail .right-section {\n  width: 78%;\n  float: left;\n}\n.rating-section {\n  padding: 4px;\n  color: #fff;\n  font-size: 10pt;\n  float: right;\n}\n.star-icon {\n  color: #fff;\n  font-size: 15px;\n  position: relative;\n}\n.service-price {\n  display: inline-block;\n  width: 100%;\n}\n.service {\n  width: 67%;\n  float: left;\n  padding-top: 15px;\n}\n.service ul {\n  width: 100%;\n  margin: 0;\n  padding: 0;\n}\n.service ul li {\n  color: #1d7f88;\n  width: 25%;\n  height: 65px;\n  list-style: none;\n  float: left;\n  text-align: center;\n}\n.service-icon-div {\n  display: inline-block;\n}\n.new-lab-service {\n  margin: 0 auto;\n  margin-top: 0px;\n  width: 70px;\n  margin-top: 2px;\n  font-size: 7.5pt;\n  line-height: 14px;\n  color: #484c4c;\n}\n.price {\n  width: 32%;\n  float: left;\n  text-align: center;\n  border-left: 1px #eee solid;\n  min-height: 60px;\n  padding-top: 11px;\n}\n.new-lab-price-section-cost {\n  width: 100%;\n  font-size: 14pt;\n  margin: 0;\n  padding-top: 10px;\n}\n.cost-strike {\n  text-decoration: line-through;\n}\n.new-lab-price-section-payable {\n  width: 100%;\n  font-size: 16pt;\n  color: #da272f;\n  margin: 0;\n  padding-top: 5px;\n  font-weight: 700;\n}\n.new-lab-price-section-cashback {\n  margin-bottom: 0;\n  width: 100%;\n  margin-top: 10px;\n  font-size: 7pt;\n  font-weight: 300;\n  color: #000;\n  display: block;\n}\n.desktop-services {\n  display: block;\n}\n.service-bottom {\n  width: 67%;\n  float: left;\n  padding-top: 0;\n  margin-top: 10px;\n}\n.service-bottom p {\n  margin-bottom: 10px;\n  font-size: 14px;\n  color: #000;\n}\n.service-bottom .included span {\n  color: #909090;\n}\n.service-bottom .excluded span {\n  color: red;\n}\n.get-deal-parent {\n  display: inline-block;\n  width: 99%;\n  text-align: center;\n  color: #da272f;\n  padding-top: 10px;\n}\n.customer-saving {\n  color: #000;\n  font-weight: 400;\n  text-decoration: none;\n  font-size: 9pt;\n  margin: 0;\n  padding: 0;\n  text-align: left;\n}\n.price-bottom {\n  width: 32%;\n  float: left;\n  text-align: center;\n  border-left: 1px #eee solid;\n  padding-top: 0;\n}\n.btn-section {\n  padding-left: 5px;\n  padding-top: 2px;\n}\n.lab-drop {\n  margin: 0;\n  padding: 10px;\n  background: #eaeaea;\n  border-radius: 2px;\n  box-shadow: 0px 2px 6px rgba(128, 128, 128, 0.61);\n}\n.location-span {\n  color: #555;\n  font-size: 14px;\n  font-weight: bold;\n  word-wrap: normal;\n}\n.sc-ion-input-md-h {\n  border: 1px solid #ddd !important;\n  --padding-top: 0;\n  --padding-bottom: 0;\n  height: 40px;\n  background: #fff;\n}\n.tags {\n  padding-left: 0px;\n  margin-bottom: 5px;\n  padding-top: 20px;\n}\n.tags span {\n  font-size: 12px;\n  background: var(--ion-color-secondary);\n  padding: 4px 6px;\n  border-radius: 20px;\n  color: white;\n  font-weight: bold;\n  display: block;\n}\n.tags span ion-icon {\n  position: relative;\n  top: 2px;\n}\n.tags div {\n  display: inline-block;\n  margin: 5px;\n}\n.test-search-item {\n  width: 100%;\n  border: 1px solid #dedede;\n  margin: auto;\n  z-index: 11;\n}\n.test-search-item ion-thumbnail {\n  width: 30px;\n  height: 20px;\n}\n.test-search-item ion-item {\n  --padding-start: 0px;\n}\n.test-search-item ion-list {\n  border-radius: 0;\n  padding: 0px;\n  margin-top: 1px;\n}\n.test-search-item p {\n  margin: 0px;\n  padding-left: 16px;\n  font-size: 13px;\n  font-weight: bold;\n}\n.test-search-item span {\n  float: right;\n}\n.sc-ion-searchbar-md-h {\n  background: transparent;\n  padding: 0;\n  margin-top: 6px;\n}\n.searchbar-input {\n  background: #FFF !important;\n  border-radius: 0px !important;\n  font-size: 13px !important;\n  -webkit-padding-end: 0px !important;\n  padding-inline-end: 0px !important;\n  border: 0px solid #008f47 !important;\n  color: #008f47 !important;\n}\n.locinpl {\n  height: 46px !important;\n  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\n}\n.area-pin-mobile {\n  margin-top: 14px;\n}\n.cost-strike i {\n  font-family: arial;\n  padding-right: 4px;\n}\n.new-lab-price-section-cost i, .new-lab-price-section-payable i {\n  font-family: arial;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VhcmNoLWxhYnMvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcc2VhcmNoLWxhYnNcXHNlYXJjaC1sYWJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc2VhcmNoLWxhYnMvc2VhcmNoLWxhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0FDQ0Y7QURBRTtFQUNFLHVDQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUNFSjtBRENBO0VBQ0Usa0JBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQUFBO0VBR0EsMkNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNFRjtBREFBO0VBQVMsa0JBQUE7RUFDUCxTQUFBO0VBQVUsWUFBQTtFQUFZLFdBQUE7RUFDdEIseUJBQUE7RUFBMEIsZUFBQTtBQ081QjtBRExBO0VBQ0UsU0FBQTtFQUFVLFlBQUE7RUFDVix5QkFBQTtBQ1NGO0FEUEM7RUFDRyxpQkFBQTtFQUNGLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFBZ0IsZUFBQTtFQUNoQixxQkFBQTtBQ1dGO0FEVEE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtBQ1lGO0FEVkE7RUFDRSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFBbUIsa0JBQUE7QUNjckI7QURaQTtFQUNFLHNCQUFBO0VBQ0Esc0JBQUE7QUNlRjtBRGJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7QUNnQkY7QURkQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUFlLFlBQUE7QUNrQmpCO0FEaEJBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ21CRjtBRGpCQTtFQUNFLHFCQUFBO0VBQ0EsV0FBQTtBQ29CRjtBRGxCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7QUNxQkY7QURuQkE7RUFDRSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNzQkY7QURwQkE7RUFDRSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQ3VCRjtBRHJCQTtFQUNFLHFCQUFBO0FDd0JGO0FEdEJBO0VBQ0UsY0FBQTtFQUNFLGVBQUE7RUFDRixXQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0FDeUJGO0FEdkJBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQzBCRjtBRHhCQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLGlCQUFBO0FDMkJGO0FEekJBO0VBQ0UsNkJBQUE7QUM0QkY7QUQxQkE7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQzZCRjtBRDNCQTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7QUM4QkY7QUQ1QkE7RUFDRSxjQUFBO0FDK0JGO0FEN0JBO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUNnQ0Y7QUQvQkU7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFBZ0IsV0FBQTtBQ2tDcEI7QUQvQkk7RUFDRSxjQUFBO0FDaUNOO0FEN0JNO0VBQ0UsVUFBQTtBQytCUjtBRDNCQTtFQUNFLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDOEJGO0FENUJBO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFBVyxnQkFBQTtBQ2dDYjtBRDlCQTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtFQUNBLGNBQUE7QUNpQ0Y7QUQvQkE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FDa0NGO0FEaENBO0VBQVcsU0FBQTtFQUFVLGFBQUE7RUFDbkIsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlEQUFBO0FDcUNGO0FEbkNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUFrQixpQkFBQTtBQ3VDcEI7QURyQ0E7RUFDRSxpQ0FBQTtFQUNBLGdCQUFBO0VBQ0YsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUN3Q0E7QUR0Q0E7RUFBTyxpQkFBQTtFQUNQLGtCQUFBO0VBQ0EsaUJBQUE7QUMwQ0E7QUR4Q0E7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQWtCLGNBQUE7QUM0Q3RCO0FEM0NJO0VBQ0ksa0JBQUE7RUFDSixRQUFBO0FDNkNKO0FEMUNBO0VBQ0UscUJBQUE7RUFDQSxXQUFBO0FDNkNGO0FEM0NBO0VBQ0ksV0FBQTtFQUFZLHlCQUFBO0VBQ1osWUFBQTtFQUFhLFdBQUE7QUNnRGpCO0FEOUNJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNnRFI7QUQ5Q0k7RUFDSSxvQkFBQTtBQ2dEUjtBRDlDSTtFQUFTLGdCQUFBO0VBQ1YsWUFBQTtFQUNBLGVBQUE7QUNpREg7QUQvQ0k7RUFDSSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNpRFI7QUQvQ0k7RUFDSSxZQUFBO0FDaURSO0FEOUNBO0VBQ0UsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQ2lERjtBRGhEQTtFQUNFLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7RUFDQSxvQ0FBQTtFQUNBLHlCQUFBO0FDbURGO0FEbERFO0VBQ0EsdUJBQUE7RUFDQSwwSEFBQTtBQ3FERjtBRG5EQTtFQUNFLGdCQUFBO0FDc0RGO0FEcERBO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtBQ3VERjtBRHJEQTtFQUFnRSxrQkFBQTtFQUM5RCxpQkFBQTtBQ3lERiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlYXJjaC1sYWJzL3NlYXJjaC1sYWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYXJlbnQtc2VjdGlvbiB7XG4gIG1hcmdpbjogMCBhdXRvIDE1JTtcbiAgLyp3aWR0aDo4MCU7Ki9cbiAgLm5vX3Jlc3VsdHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZycpO1xuICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICAgIHBhZGRpbmc6IDE4cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG59XG4ubmV3LWxhYi1saXN0IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgY29sb3I6IEdyYXk7XG4gIG1pbi1oZWlnaHQ6IDE3NXB4O1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsNTEsNTcsLjUpO1xuICAtbW96LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDQxLDUxLDU3LC41KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsNTEsNTcsLjUpO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHBhZGRpbmc6IDA7XG59XG4ubGFiLWJvdHt0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMDtwYWRkaW5nOjNweDtjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M5ZDtmb250LXNpemU6IDEzcHg7XG59XG4ubmV3LWxhYi1saXN0IGgze1xuICBtYXJnaW46IDA7cGFkZGluZzogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzlkO1xufVxuIC5uZXctbGFiLWxpc3QgaDMgYSB7XG4gICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDExcHQ7Y3Vyc29yOnBvaW50ZXI7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwge1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO3BhZGRpbmctbGVmdDogMTBweDtcbn1cbi5sYWItbG9nbyB7XG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4ubmV3LWxhYi1saXN0IC5sYWItZGV0YWlsIC5yaWdodC1zZWN0aW9uIHtcbiAgd2lkdGg6IDc4JTtcbiAgZmxvYXQ6IGxlZnQ7XG59XG4ucmF0aW5nLXNlY3Rpb24ge1xuICBwYWRkaW5nOiA0cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXNpemU6MTBwdDtmbG9hdDogcmlnaHQ7XG59XG4uc3Rhci1pY29uIHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZToxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2VydmljZS1wcmljZSB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG4uc2VydmljZSB7XG4gIHdpZHRoOiA2NyU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nLXRvcDogMTVweDtcbn1cbi5zZXJ2aWNlIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cbi5zZXJ2aWNlIHVsIGxpIHtcbiAgY29sb3I6ICMxZDdmODg7XG4gIHdpZHRoOiAyNSU7XG4gIGhlaWdodDogNjVweDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi5zZXJ2aWNlLWljb24tZGl2IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLm5ldy1sYWItc2VydmljZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDBweDtcbiAgd2lkdGg6NzBweDtcbiAgbWFyZ2luLXRvcDogMnB4O1xuICBmb250LXNpemU6IDcuNXB0O1xuICBsaW5lLWhlaWdodDogMTRweDtcbiAgY29sb3I6ICM0ODRjNGM7XG59XG4ucHJpY2Uge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIHBhZGRpbmctdG9wOiAxMXB4O1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5jb3N0LXN0cmlrZSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1wYXlhYmxlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTZwdDtcbiAgY29sb3I6ICNkYTI3MmY7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZy10b3A6IDVweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY2FzaGJhY2sge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5kZXNrdG9wLXNlcnZpY2VzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4uc2VydmljZS1ib3R0b20ge1xuICB3aWR0aDogNjclO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDA7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBmb250LXNpemU6IDE0cHg7Y29sb3I6IzAwMDtcbiAgfVxuICAuaW5jbHVkZWR7XG4gICAgc3BhbntcbiAgICAgIGNvbG9yOiAjOTA5MDkwO1xuICAgIH1cbiAgfVxuICAgIC5leGNsdWRlZHtcbiAgICAgIHNwYW57XG4gICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICB9XG4gIH1cbn1cbi5nZXQtZGVhbC1wYXJlbnQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA5OSU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICNkYTI3MmY7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuLmN1c3RvbWVyLXNhdmluZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7dGV4dC1hbGlnbjogbGVmdDtcbn1cbi5wcmljZS1ib3R0b20ge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuLmJ0bi1zZWN0aW9uIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctdG9wOiAycHg7XG59XG4ubGFiLWRyb3Age21hcmdpbjogMDtwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiNlYWVhZWE7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgYm94LXNoYWRvdzogMHB4IDJweCA2cHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjYxKTtcbn1cbi5sb2NhdGlvbi1zcGFuIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7d29yZC13cmFwOiBub3JtYWw7XG59XG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4tLXBhZGRpbmctYm90dG9tOiAwO1xuaGVpZ2h0OiA0MHB4O1xuYmFja2dyb3VuZDogI2ZmZjtcbn1cbi50YWdzIHtwYWRkaW5nLWxlZnQ6IDBweDtcbm1hcmdpbi1ib3R0b206IDVweDtcbnBhZGRpbmctdG9wOiAyMHB4O1xufVxuLnRhZ3Mgc3BhbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgIHBhZGRpbmc6IDRweCA2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7ZGlzcGxheTogYmxvY2s7XG4gICAgaW9uLWljb257XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDJweDtcbiAgICB9XG59XG4udGFncyBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogNXB4O1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW17XG4gICAgd2lkdGg6IDEwMCU7Ym9yZGVyOiAxcHggc29saWQgI2RlZGVkZTtcbiAgICBtYXJnaW46IGF1dG87ei1pbmRleDogMTE7XG5cdFxuICAgIGlvbi10aHVtYm5haWx7XG4gICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgfVxuICAgIGlvbi1pdGVte1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDBweDtcbiAgICB9XG4gICAgaW9uLWxpc3R7Ym9yZGVyLXJhZGl1czogMDtcblx0XHRcdHBhZGRpbmc6IDBweDtcblx0XHRcdG1hcmdpbi10b3A6IDFweDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgbWFyZ2luOiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG4gICAgc3BhbntcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgIH1cbn1cbi5zYy1pb24tc2VhcmNoYmFyLW1kLWgge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgcGFkZGluZzogMDtcbiAgbWFyZ2luLXRvcDo2cHg7fVxuLnNlYXJjaGJhci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwOGY0NyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOGY0NyAhaW1wb3J0YW50O31cbiAgLmxvY2lucGwge1xuICBoZWlnaHQ6IDQ2cHggIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwwLjE0KSwwIDNweCAxcHggLTJweCByZ2JhKDAsMCwwLDAuMiksMCAxcHggNXB4IDAgcmdiYSgwLDAsMCwwLjEyKSAhaW1wb3J0YW50O1xufVxuLmFyZWEtcGluLW1vYmlsZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG4uY29zdC1zdHJpa2UgaSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgcGFkZGluZy1yaWdodDogNHB4O1xufVxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IGksLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1wYXlhYmxlIGl7IGZvbnQtZmFtaWx5OiBhcmlhbCA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO30iLCIucGFyZW50LXNlY3Rpb24ge1xuICBtYXJnaW46IDAgYXV0byAxNSU7XG4gIC8qd2lkdGg6ODAlOyovXG59XG4ucGFyZW50LXNlY3Rpb24gLm5vX3Jlc3VsdCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9wb3BfY29udGJnLnBuZ1wiKTtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG4gIHBhZGRpbmc6IDE4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLm5ldy1sYWItbGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG4gIGNvbG9yOiBHcmF5O1xuICBtaW4taGVpZ2h0OiAxNzVweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMXB4IDRweCByZ2JhKDQxLCA1MSwgNTcsIDAuNSk7XG4gIC1tb3otYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsIDUxLCA1NywgMC41KTtcbiAgYm94LXNoYWRvdzogMCAxcHggNHB4IHJnYmEoNDEsIDUxLCA1NywgMC41KTtcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xuICBwYWRkaW5nOiAwO1xufVxuXG4ubGFiLWJvdCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAzcHg7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YzlkO1xuICBmb250LXNpemU6IDEzcHg7XG59XG5cbi5uZXctbGFiLWxpc3QgaDMge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDJweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2M5ZDtcbn1cblxuLm5ldy1sYWItbGlzdCBoMyBhIHtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogMzAwO1xuICBmb250LXNpemU6IDExcHQ7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4ubmV3LWxhYi1saXN0IC5sYWItZGV0YWlsIHtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IGF1dG87XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLmxlZnQtc2VjdGlvbiB7XG4gIHdpZHRoOiAyMiU7XG4gIHBhZGRpbmctdG9wOiAxMnB4O1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbi5sYWItbG9nbyB7XG4gIGJvcmRlcjogMXB4ICNlZWUgc29saWQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5cbi5uZXctbGFiLWxpc3QgLmxhYi1kZXRhaWwgLnJpZ2h0LXNlY3Rpb24ge1xuICB3aWR0aDogNzglO1xuICBmbG9hdDogbGVmdDtcbn1cblxuLnJhdGluZy1zZWN0aW9uIHtcbiAgcGFkZGluZzogNHB4O1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxMHB0O1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5zdGFyLWljb24ge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zZXJ2aWNlLXByaWNlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnNlcnZpY2Uge1xuICB3aWR0aDogNjclO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZy10b3A6IDE1cHg7XG59XG5cbi5zZXJ2aWNlIHVsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbn1cblxuLnNlcnZpY2UgdWwgbGkge1xuICBjb2xvcjogIzFkN2Y4ODtcbiAgd2lkdGg6IDI1JTtcbiAgaGVpZ2h0OiA2NXB4O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VydmljZS1pY29uLWRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLm5ldy1sYWItc2VydmljZSB7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIHdpZHRoOiA3MHB4O1xuICBtYXJnaW4tdG9wOiAycHg7XG4gIGZvbnQtc2l6ZTogNy41cHQ7XG4gIGxpbmUtaGVpZ2h0OiAxNHB4O1xuICBjb2xvcjogIzQ4NGM0Yztcbn1cblxuLnByaWNlIHtcbiAgd2lkdGg6IDMyJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLWxlZnQ6IDFweCAjZWVlIHNvbGlkO1xuICBtaW4taGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLXRvcDogMTFweDtcbn1cblxuLm5ldy1sYWItcHJpY2Utc2VjdGlvbi1jb3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZvbnQtc2l6ZTogMTRwdDtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmNvc3Qtc3RyaWtlIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tcGF5YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDE2cHQ7XG4gIGNvbG9yOiAjZGEyNzJmO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmctdG9wOiA1cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY2FzaGJhY2sge1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiA3cHQ7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiAjMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmRlc2t0b3Atc2VydmljZXMge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNlcnZpY2UtYm90dG9tIHtcbiAgd2lkdGg6IDY3JTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmctdG9wOiAwO1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLnNlcnZpY2UtYm90dG9tIHAge1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xufVxuLnNlcnZpY2UtYm90dG9tIC5pbmNsdWRlZCBzcGFuIHtcbiAgY29sb3I6ICM5MDkwOTA7XG59XG4uc2VydmljZS1ib3R0b20gLmV4Y2x1ZGVkIHNwYW4ge1xuICBjb2xvcjogcmVkO1xufVxuXG4uZ2V0LWRlYWwtcGFyZW50IHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogOTklO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjZGEyNzJmO1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cblxuLmN1c3RvbWVyLXNhdmluZyB7XG4gIGNvbG9yOiAjMDAwO1xuICBmb250LXdlaWdodDogNDAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGZvbnQtc2l6ZTogOXB0O1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5wcmljZS1ib3R0b20ge1xuICB3aWR0aDogMzIlO1xuICBmbG9hdDogbGVmdDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItbGVmdDogMXB4ICNlZWUgc29saWQ7XG4gIHBhZGRpbmctdG9wOiAwO1xufVxuXG4uYnRuLXNlY3Rpb24ge1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy10b3A6IDJweDtcbn1cblxuLmxhYi1kcm9wIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZWFlYWVhO1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIGJveC1zaGFkb3c6IDBweCAycHggNnB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC42MSk7XG59XG5cbi5sb2NhdGlvbi1zcGFuIHtcbiAgY29sb3I6ICM1NTU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdvcmQtd3JhcDogbm9ybWFsO1xufVxuXG4uc2MtaW9uLWlucHV0LW1kLWgge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkICFpbXBvcnRhbnQ7XG4gIC0tcGFkZGluZy10b3A6IDA7XG4gIC0tcGFkZGluZy1ib3R0b206IDA7XG4gIGhlaWdodDogNDBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cblxuLnRhZ3Mge1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMjBweDtcbn1cblxuLnRhZ3Mgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIHBhZGRpbmc6IDRweCA2cHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnRhZ3Mgc3BhbiBpb24taWNvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAycHg7XG59XG5cbi50YWdzIGRpdiB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiA1cHg7XG59XG5cbi50ZXN0LXNlYXJjaC1pdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWRlZGU7XG4gIG1hcmdpbjogYXV0bztcbiAgei1pbmRleDogMTE7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tdGh1bWJuYWlsIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cbi50ZXN0LXNlYXJjaC1pdGVtIGlvbi1pdGVtIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBpb24tbGlzdCB7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luLXRvcDogMXB4O1xufVxuLnRlc3Qtc2VhcmNoLWl0ZW0gcCB7XG4gIG1hcmdpbjogMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4udGVzdC1zZWFyY2gtaXRlbSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuXG4uc2MtaW9uLXNlYXJjaGJhci1tZC1oIHtcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbi10b3A6IDZweDtcbn1cblxuLnNlYXJjaGJhci1pbnB1dCB7XG4gIGJhY2tncm91bmQ6ICNGRkYgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTNweCAhaW1wb3J0YW50O1xuICAtd2Via2l0LXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbiAgcGFkZGluZy1pbmxpbmUtZW5kOiAwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwcHggc29saWQgIzAwOGY0NyAhaW1wb3J0YW50O1xuICBjb2xvcjogIzAwOGY0NyAhaW1wb3J0YW50O1xufVxuXG4ubG9jaW5wbCB7XG4gIGhlaWdodDogNDZweCAhaW1wb3J0YW50O1xuICBib3gtc2hhZG93OiAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMikgIWltcG9ydGFudDtcbn1cblxuLmFyZWEtcGluLW1vYmlsZSB7XG4gIG1hcmdpbi10b3A6IDE0cHg7XG59XG5cbi5jb3N0LXN0cmlrZSBpIHtcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xuICBwYWRkaW5nLXJpZ2h0OiA0cHg7XG59XG5cbi5uZXctbGFiLXByaWNlLXNlY3Rpb24tY29zdCBpLCAubmV3LWxhYi1wcmljZS1zZWN0aW9uLXBheWFibGUgaSB7XG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/search-labs/search-labs.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/search-labs/search-labs.page.ts ***!
  \*******************************************************/
/*! exports provided: SearchLabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchLabsPage", function() { return SearchLabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/components/signin/signin.component */ "./src/app/components/signin/signin.component.ts");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-google-places-autocomplete */ "./node_modules/ngx-google-places-autocomplete/bundles/ngx-google-places-autocomplete.umd.js");
/* harmony import */ var ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/pages/profile-modal/profile-modal.page */ "./src/app/pages/profile-modal/profile-modal.page.ts");
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flatted */ "./node_modules/flatted/esm/index.js");










let SearchLabsPage = class SearchLabsPage {
    constructor(route, router, alertCtrl, modalController, api, util, menu) {
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
        this.util.observeProfile().subscribe(data => {
            console.log(data);
            this.getProfile();
        });
        this.labs = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('labsdata'));
        console.log(this.labs);
        console.log(this.labs);
        this.getFacilities();
        if (this.labs.length == 0) {
            this.newBucketArray = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('newBucketArray'));
            this.addToBucket = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('addToBucket'));
            // this.getAssociatedTests();
            this.getReviews();
            this.api.getIndividualTest().then(data => {
                this.all_test = data;
            }).catch(error => {
                console.log(error);
            });
        }
        else {
            console.log(this.labs);
            for (var x of this.labs) {
                // this.api.getPrimaryLabById(x.primary).then( data => {
                //    console.log(data);
                //     x.primary_logo = data[0].logo;
                //     console.log(x)
                //   }).catch(error => {
                //     console.log(error);
                // });
            }
        }
        console.log(localStorage.getItem('newBucketArray'));
        this.util.hide();
    }
    getAlltest() {
        this.api.getIndividualTest().then(data => {
            this.all_test = data;
        }).catch(error => {
            console.log(error);
        });
    }
    modify() {
        this.getAlltest();
        this.labs = [];
        this.newBucketArray = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('newBucketArray'));
        this.addToBucket = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["parse"])(localStorage.getItem('addToBucket'));
        console.log(this.newBucketArray);
        console.log(this.addToBucket);
        localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])({}));
    }
    getAssociatedTests() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getAssociatedTests().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.associated_tests = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getFacilities() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('I am in');
            yield this.api.getFacilities().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.facilities = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getReviews() {
        this.api.getReviews().then(data => {
            console.log(data);
            this.reviews = data;
        }).catch(error => {
            console.log(error);
        });
    }
    add(data) {
        this.terms = '';
        this.testLoad = false;
        if (this.addToBucket.length == 0) {
            this.newBucketArray.push(data.test_name);
            this.addToBucket.push(data.id);
        }
        else {
            var a = this.addToBucket.indexOf(data.id);
            if (a == 0) {
                this.util.showToast('Already added in the Bucket', 'primary', 'top');
            }
            else if (a == -1) {
                this.newBucketArray.push(data.test_name);
                this.addToBucket.push(data.id);
                console.log(this.newBucketArray, this.addToBucket);
            }
            else {
                this.util.showToast('Already in the bucket', 'primary', 'top');
            }
        }
    }
    remove(index) {
        this.newBucketArray.splice(index, 1);
        this.addToBucket.splice(index, 1);
        if (this.addToBucket.length == 0) {
            this.testLoad = false;
        }
    }
    onInput(ev) {
        console.log(ev);
        this.testLoad = true;
    }
    book(data) {
        console.log(data);
        this.isLogin = sessionStorage.getItem('loginStatus');
        localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(data));
        let price = [];
        price = data.range_price;
        let maxd = [];
        for (let y of price) {
            maxd.push(y.to);
        }
        var max = maxd.reduce(function (a, b) {
            return Math.max(a, b);
        });
        if (data.distance > max) {
            console.log(max);
            this.showAlert(data);
        }
        else {
            if (this.isLogin == 'true') {
                if (this.profile.name == '') {
                    this.openModal();
                }
                else {
                    this.router.navigate(['cart']);
                }
            }
            else {
                this.showLoginModal();
                return false;
            }
        }
        // this.isLogin = localStorage.getItem('loginStatus');
        //   if(this.isLogin=='true'){
        //   this.router.navigate(['cart'])
        // } else {
        //   this.showLoginModal();
        //   return false;
        // }
    }
    showAlert(data) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                header: 'Sorry',
                backdropDismiss: true,
                message: data.name + ' is to far from your location. Please try to change your location and book again. Thank You',
                cssClass: 'loginAlert',
                buttons: [
                    {
                        text: 'No, Thanks',
                        cssClass: 'signup',
                        handler: (data) => {
                            this.router.navigate(['/register']);
                        }
                    },
                    {
                        text: 'Change Location',
                        cssClass: 'signin',
                        handler: (data) => {
                            this.modify();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    getProfile() {
        const uid = sessionStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then((data) => {
            this.profile = data;
            console.log(this.profile);
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    showLoginModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_components_signin_signin_component__WEBPACK_IMPORTED_MODULE_5__["SigninComponent"],
                cssClass: 'login-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                if (dataReturned.data !== undefined) {
                    console.log(this.profile.name);
                    if (this.profile.name == '') {
                        console.log(this.profile.name);
                        this.openModal();
                    }
                    else {
                        this.router.navigate(['cart']);
                    }
                }
                else {
                    console.log();
                }
            });
            return yield modal.present();
        });
    }
    openModal() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_8__["ProfileModalPage"],
                cssClass: 'profileCss',
                backdropDismiss: false,
            });
            modal.onDidDismiss().then((dataReturned) => {
                console.log(dataReturned);
                // if(dataReturned.data !== undefined){
                if (this.profile.name == '') {
                    console.log('ify');
                    console.log(this.profile.name);
                    this.getProfile();
                }
                else {
                    console.log('ele');
                    this.router.navigate(['cart']);
                }
                // } else {
                //   console.log()
                // }
            });
            return yield modal.present();
        });
    }
    onCancel(ev) {
        this.testLoad = false;
    }
    lab(item) {
        console.log('lab', item);
        localStorage.setItem('labid', item.id);
        this.router.navigate(['diagnostic-lab', item.page_slug]);
    }
    handleAddressChange(ev) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(ev);
            let pincode;
            for (var i = 0; i < ev.address_components.length; i++) {
                for (var b = 0; b < ev.address_components[i].types.length; b++) {
                    if (ev.address_components[i].types[b] == "postal_code") {
                        //this is the object you are looking for
                        pincode = ev.address_components[i];
                        console.log(pincode);
                        break;
                    }
                }
            }
            let current_pincode = pincode.short_name;
            this.pincode = current_pincode;
            console.log(this.pincode);
            localStorage.setItem('pincode', this.pincode);
            const geocoder = new google.maps.Geocoder;
            geocoder.geocode({ address: ev.formatted_address }, (results, status) => {
                console.log(results, status);
                if (status === 'OK' && results && results.length) {
                    this.latitude = results[0].geometry.location.lat();
                    this.longitude = results[0].geometry.location.lng();
                    console.log('----->', this.latitude, this.longitude, this.pincode);
                }
                else {
                    alert('Geocode was not successful for the following reason: ' + status);
                    return false;
                }
            });
        });
    }
    searchLabs2() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(this.pincode);
            yield this.api.getSecondaryLabsByPin(this.pincode).then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.secondary_labs = data;
                console.log(this.secondary_labs);
                console.log(this.addToBucket);
                this.associated_test = [];
                if (data) {
                    var i = 1;
                    yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        yield this.api.getVenueDetails(element.primarylab).then((data6) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            if (data6) {
                                element.primarylabdata = data6;
                                element.primarylogo = data6.logo;
                            }
                        })).catch(error => {
                            this.util.hide();
                            console.log(error);
                        });
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
            })).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    searchLabs3() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            let lat = this.latitude;
            let lng = this.longitude;
            console.log(this.associated_test);
            this.associated_test.push({});
            yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                // console.log(element);
                var price = 0;
                var selling_price = 0;
                var all_test_data = [];
                var all_test1_data = [];
                var available_test = [];
                var not_available_test = [];
                for (let x of this.associated_test) {
                    if (x.branch_id == element.uid) {
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
                let difference = this.newBucketArray.filter(x => !available_test.includes(x));
                not_available_test.push(difference);
                test2data.push(difference);
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
                var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                // console.log(distance);
                element.distance = distance;
                var rating_array = [];
                var facilities = [];
                console.log(this.facilities);
                for (let x of this.facilities) {
                    for (let y of element.facility) {
                        if (x.id == y) {
                            facilities.push(x);
                        }
                    }
                }
                element.facilities = facilities;
                console.log(facilities);
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
            this.labs = newSortedArray;
            let arr = [];
            console.log('this.labs', this.labs);
            for (let x of this.labs) {
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
                    lat: x.lat,
                    lng: x.lng,
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
            console.log("arr", arr);
            var jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(arr);
            // console.log(this.labs);
            // var jsonString = JSON.stringify(this.labs);
            // console.log(jsonString);
            localStorage.setItem('labsdata', jsonString);
            console.log(this.addToBucket);
            console.log(this.newBucketArray);
            localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.newBucketArray));
            localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.addToBucket));
            this.util.hide();
            // this.router.navigate(['search-labs']);
        });
    }
    searchLabs() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.util.show('Please wait....');
            let lat = this.latitude;
            let lng = this.longitude;
            yield this.getAssociatedTest();
            yield this.api.getSecondaryLabs().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.all_labs = data;
                let pincode = [];
                this.util.hide();
                for (let x of this.all_labs) {
                    console.log(x);
                    let delivery_pincode = [];
                    for (let y of x.delivery_pincode) {
                        if (y.item_text == this.pincode) {
                            console.log('matched');
                            this.secondary_labs.push(x);
                        }
                    }
                }
                yield this.secondary_labs.forEach((element) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    // console.log(element);
                    var price = 0;
                    var selling_price = 0;
                    var all_test_data = [];
                    var all_test1_data = [];
                    var available_test = [];
                    var not_available_test = [];
                    for (let x of this.associated_test) {
                        console.log(x);
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
                    let difference = this.newBucketArray.filter(x => !available_test.includes(x));
                    not_available_test.push(difference);
                    test2data.push(difference);
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
                    var distance = yield this.distanceInKmBetweenEarthCoordinates(lat, lng, element.lat, element.lng);
                    // console.log(distance);
                    element.distance = distance;
                    var rating_array = [];
                    var facilities = [];
                    for (let x of this.facilities) {
                        for (let y of element.facility) {
                            if (x.id != y) {
                                facilities.push(x);
                            }
                        }
                    }
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
                for (var x of this.secondary_labs) {
                    if (x.test_data.length > 0) {
                        newSortedArray.push(x);
                    }
                }
                this.labs = newSortedArray;
                let arr = [];
                for (let x of this.labs) {
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
                        lat: x.lat,
                        lng: x.lng,
                        name: x.name,
                        lab_timings: x.lab_timings,
                        not_available_test: x.not_available_test,
                        logo: x.logo,
                        range_price: x.range_price,
                        service_delivery: x.service_delivery,
                        test1_data: x.test1_data,
                        test_data: x.test_data,
                        free_charge: x.free_charge,
                        page_slug: x.page_slug
                    });
                }
                var jsonString = Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(arr);
                // console.log(this.labs);
                // var jsonString = JSON.stringify(this.labs);
                console.log(jsonString);
                localStorage.setItem('labsdata', jsonString);
                console.log(this.addToBucket);
                console.log(this.newBucketArray);
                localStorage.setItem('newBucketArray', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.newBucketArray));
                localStorage.setItem('addToBucket', Object(flatted__WEBPACK_IMPORTED_MODULE_9__["stringify"])(this.addToBucket));
                //localStorage.setItem('labsdata', stringify(this.labs))
                // this.router.navigate(['search-labs']);    
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
        console.log(lat1, lon1, lat2, lon2);
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
            console.log(i);
            for (var x of this.associated_tests) {
                if (x.individual_test == i)
                    this.associated_test.push(x);
                console.log(this.associated_test);
            }
        }
    }
};
SearchLabsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('placesRef', { static: false }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", ngx_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_6__["GooglePlaceDirective"])
], SearchLabsPage.prototype, "placesRef", void 0);
SearchLabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-labs',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./search-labs.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/search-labs/search-labs.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./search-labs.page.scss */ "./src/app/pages/search-labs/search-labs.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_7__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], SearchLabsPage);



/***/ })

}]);
//# sourceMappingURL=pages-search-labs-search-labs-module-es2015.js.map