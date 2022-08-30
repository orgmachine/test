function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cart-cart-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html":
  /*!*********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCartCartPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content *ngIf=\"cart_length != 0\">\n  <div class=\"container\"> \n    <div class=\"row\">\n      <div class=\"cartmain\" style=\"\" >\n      <div class=\"col-md-12 col-lg-6 col-xl-6\">\n        <div *ngIf=\"stepOne\" class=\"stepOne\">\n          <ion-item class=\"active\">\n            <ion-icon name=\"add-outline\" slot=\"end\" ></ion-icon>\n            <h3 class=\"heading\">Patient Details</h3>\n          </ion-item>\n          <ion-item class=\"news\">\n            <img src=\"assets/safe.png\" slot=\"start\">\n            <p>100% of our phlebotomists are vaccinated for COVID-19</p>\n          </ion-item>\n          <div><b>Step 1: Select Patient</b></div>\n          <div class=\"second-news\">\n            <p>\n              1. Please select all the patients for whom you have to book the test.<br>\n              2. All selected patients should have the same address.\n            </p>\n          </div>\n          <ion-item class=\"news\" *ngIf=\"members.length == 0\">\n            <img src=\"assets/list.png\" slot=\"start\">\n            <p>No Saved Patients</p>\n          </ion-item>\n          <div *ngIf=\"members.length !== 0\">\n            <!-- <ion-item class=\"memberList\" *ngFor=\"let item of members;let i=index;\">\n              <ion-label>{{item.name}}\n              <br>\n              {{item.age}}, {{item.gender}}</ion-label>\n              <ion-checkbox slot=\"start\" (ionChange)=\"selectMember($event,item,i)\"></ion-checkbox>\n            </ion-item> -->\n\n            <ion-radio-group [(ngModel)]=\"member_details\" >\n            \n              <ion-item *ngFor=\"let item of members;let i=index;\" (click)=\"selectMember(item)\">\n                  <ion-label>{{item.name}}\n                   <br>\n                   {{item.age}}, {{item.gender}}</ion-label>\n                  <ion-radio  class=\"radioclass\" slot=\"start\" [value]=\"item\" mode=\"ios\"></ion-radio>\n              </ion-item>\n              \n          </ion-radio-group>\n          </div>\n          <div><span (click)=\"addMember()\"> + ADD NEW PATIENT</span></div>\n          <div>\n            <ion-button class=\"btn_class\" (click)=\"goToStepTwo()\" type=\"submit\" expand=\"block\"  [disabled]=\"selectedMember.length == 0\">\n              Proceed\n            </ion-button>\n          </div>\n      </div>\n      <div *ngIf=\"stepTwo\" class=\"stepOne\">\n        <ion-item class=\"active\">\n          <ion-icon name=\"add-outline\" slot=\"end\" ></ion-icon>\n          <h3 class=\"heading\">Sample Collection Mode, Address and Details</h3>\n        </ion-item>\n        <ion-item class=\"news\">\n          <img src=\"assets/safe.png\" slot=\"start\">\n          <p>100% of our phlebotomists are vaccinated for COVID-19</p>\n        </ion-item>\n        <div *ngIf=\"isMode\">\n         <div><b>Step 2: Select sample collection mode and address:</b></div>\n         <ion-list>\n          <ion-radio-group [(ngModel)]=\"collection_mode\" (ionChange)=\"radioMode(collection_mode)\">\n            <ion-row>\n              <ion-col size=\"6\" *ngFor=\"let i of cart?.service_delivery\">\n                <ion-item>\n                  <ion-label>{{i}}</ion-label>\n                  <ion-radio  class=\"radioclass\" slot=\"start\" [value]=\"i\" mode=\"ios\"></ion-radio>\n                </ion-item>\n              </ion-col>\n      <!--         <ion-col size=\"6\">\n                <ion-item>\n                  <ion-label>Home Collection</ion-label>\n                  <ion-radio slot=\"start\" value=\"Home Collection\"></ion-radio>\n                </ion-item>\n              </ion-col> -->\n            </ion-row>\n          </ion-radio-group>\n        </ion-list>\n          <div class=\"second-news\" *ngIf=\"collection_mode == 'Home Visit'\">\n            <p>\n              A phlebotomist will visit you to collect samples\n            </p>\n          </div>\n\t\t  <div class=\"second-news\" *ngIf=\"collection_mode == 'Lab Service'\">\n            <p>\n              Please visit lab at selected date and time to conduct test\n            </p>\n          </div>\n          <ion-item class=\"news\" *ngIf=\"address.length == 0\">\n            <img src=\"assets/list.png\" slot=\"start\">\n            <p>No Saved Address</p>\n          </ion-item>\n          <div *ngIf=\"address.length !== 0\">\n            <ion-radio-group [(ngModel)]=\"selectedAddress\" (ionChange)=\"selectAddress(selectedAddress)\">\n              <ion-item class=\"memberList\" *ngFor=\"let item of address;let i=index;\">\n                <ion-label class=\"atitle\">{{item.label}}\n                <br>\n                <small class=\"asubtitle\">{{item.street}} {{item.locality}} {{item.landmark}} {{item.pincode}} {{item.city}} {{item.state}} <br> {{item.phone}}</small>\n                </ion-label>\n                <ion-radio  class=\"radioclass\" [value]=\"item.id\" slot=\"start\" mode=\"ios\"></ion-radio>\n              </ion-item>\n            </ion-radio-group>\n          </div>\n          <div><span (click)=\"addAddress()\"> + ADD NEW ADDRESS</span></div>\n          <div>\n            <ion-row>\n<!--               <ion-col>\n                <ion-button class=\"pre_class\" (click)=\"previousMode()\" type=\"submit\" expand=\"block\">\n                  Previous\n                </ion-button>\n              </ion-col> -->\n              <ion-col>\n                <ion-button class=\"btn_class\" (click)=\"nextMode()\" type=\"submit\" expand=\"block\"\n                 [disabled]=\"selectedAddress == '' || collection_mode == ''\">\n                  Proceed\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n        <div *ngIf=\"!isMode\">\n          <div><b>Step 2: Select sample collection date and time:</b></div>\n          <div class=\"booking_date\">\n            <p>Booking Date</p>\n            <div class=\"input-div\">\n              <ion-input [(ngModel)]=\"booking_date\" max=\"{{maxDate}}\" min=\"{{minDate}}\" type=\"date\" placeholder=\"Please Enter Booking Date\" (ionChange)=\"test_timing(booking_date)\"></ion-input>\n             <!--  </input> -->\n            </div>\n            <p style=\"color:red;margin-top: 20px\" *ngIf=\"timing.length==0\">Test is not available on this date. Please choose another date.</p>\n          </div>\n          <div>\n            <p *ngIf=\"timing.length!=0\">Booking Time Slot</p>\n            <ion-radio-group [(ngModel)]=\"booking_time\">\n              <ion-item class=\"memberList\" *ngFor=\"let item of timing\">\n                <ion-label>{{item}}</ion-label>\n                <ion-radio  class=\"radioclass\" value=\"{{item}}\" slot=\"start\" mode=\"ios\"></ion-radio>\n              </ion-item>\n             <!--  <ion-item class=\"memberList\">\n                <ion-label>12:00 PM - 03:00 PM</ion-label>\n                <ion-radio value=\"12:00 PM - 03:00 PM\" slot=\"start\" mode=\"md\"></ion-radio>\n              </ion-item>\n              <ion-item class=\"memberList\">\n                <ion-label>03:00 AM - 06:00 PM</ion-label>\n                <ion-radio value=\"03:00 AM - 06:00 PM\" slot=\"start\" mode=\"md\"></ion-radio>\n              </ion-item> -->\n            </ion-radio-group>\n          </div>\n          <div>\n            <ion-row>\n<!--               <ion-col>\n                <ion-button class=\"pre_class\" (click)=\"goBackTwo()\" type=\"submit\" expand=\"block\">\n                  Previous\n                </ion-button>\n              </ion-col> -->\n              <ion-col>\n                <ion-button class=\"btn_class\" (click)=\"goToStepThree()\" type=\"submit\" expand=\"block\"\n                 [disabled]=\"booking_time == '' || booking_date == '' || timing.length==0\">\n                  Checkout\n                </ion-button>\n              </ion-col>\n            </ion-row>\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"stepThree\" class=\"stepOne\">\n        <ion-item class=\"active\">\n          <ion-icon name=\"add-outline\" slot=\"end\" ></ion-icon>\n          <h3 class=\"heading\">Payment Details</h3>\n        </ion-item>\n        <div class=\"summary\">\n          <ion-row>\n            <ion-col>\n              <div>\n                <ion-icon name=\"calendar-outline\"></ion-icon>\n                <p>{{booking_date}}</p>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                <ion-icon name=\"time-outline\"></ion-icon>\n                <p>{{booking_time}}</p>\n              </div>\n            </ion-col>\n            <ion-col>\n              <div>\n                <ion-icon name=\"medkit-outline\"></ion-icon>\n                <p>{{collection_mode}}</p>\n              </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col class=\"last-col\">\n                <ion-icon name=\"location-outline\"></ion-icon>\n                <p>{{address_text}}</p>\n            </ion-col>\n          </ion-row>\n <!--          <ion-button class=\"pre_class\" (click)=\"edit()\" type=\"submit\" expand=\"block\">\n            Edit Details\n          </ion-button> -->\n        </div>\n        <ion-card class=\"payment-class\">\n          <ion-item (click)=\"proceed()\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"assets/razorpay.png\" />\n            </ion-thumbnail>\n            <ion-label>Pay by Online</ion-label>\n            <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-card>\n        <ion-card class=\"payment-class\">\n          <ion-item (click)=\"payWithCash()\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"assets/cod.png\" />\n            </ion-thumbnail>\n            <ion-label>{{'Pay by Cash' | translate}}</ion-label>\n            <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-card>\n        <ion-card class=\"payment-class\">\n          <ion-item (click)=\"walletPay()\">\n            <ion-thumbnail slot=\"start\">\n              <img src=\"assets/logo.png\" />\n            </ion-thumbnail>\n            <ion-label>{{'Pay with wallet' | translate}} ({{currency_}} {{balance | number : '1.2-2'}})</ion-label>\n            <ion-icon mode=\"ios\" name=\"arrow-forward-outline\" slot=\"end\"></ion-icon>\n          </ion-item>\n        </ion-card>\n      </div>\n    </div>\n    <div class=\"col-md-12 col-lg-6 col-xl-6\">\n      <div class=\"stepTwo\">\n        <ion-item class=\"active\">\n          <ion-icon name=\"add-outline\" slot=\"end\" ></ion-icon>\n          <h3 class=\"heading\">Package Details</h3>\n        </ion-item>\n        <div class=\"right-part\">\n          <div class=\"labnamecolo\"  (click)=\"lab()\">{{cart?.name}}<!-- <span style=\"float: right; color: orange;\"><ion-icon name=\"close\"></ion-icon></span> --></div> \n          <!-- <h3>{{cart?.name}}</h3> -->\n          <div class=\"tags\" *ngIf=\"cart?.test_data.length !==0\">\n            <p><small *ngFor=\"let i of cart?.test_data; let p = index\">{{i.itid.test_name}}<ion-icon name=\"close-outline\" (click)=\"remove(p)\"></ion-icon></small> <span style=\"float: right;\"><!-- ₹ {{cart?.selling_price}} --></span></p>\n          </div>\n          <div class=\"patient-count\" *ngIf=\"selectedMember.length !==0\"><img src=\"assets/patient.PNG\"><span> {{selectedMember.length}} patients</span></div>\n        </div>\n        <div class=\"coupones\" (click)='openCoupon()' *ngIf=\"stepThree\">\n          <img src=\"assets/discount.png\"/>\n          <ion-label class=\"title\">{{'Apply coupon code' | translate}}\n            <span *ngIf=\"couponCode !==''\"  style=\"color:green;\"> ({{couponCode}})</span>\n           \n          </ion-label>\n           \n        </div>\n        <div class=\"coupones\"  *ngIf=\"couponCode !=='' && coupon_type =='cashback'\">\n         \n          <ion-label  style=\"color:green;font-size:13px;\"> {{cashback_amount}}₹ cashback will be added once your booking is completed.\n           </ion-label>\n        </div>\n\n        <div class=\"right-part\" style=\"padding: 12px;\">\n          <div class=\"split-para\">M.R.P. Total <span>₹{{mrp_price}}</span></div>\n          <div class=\"split-para\">Price Discount <span>- ₹{{discount_on_mrp}}</span></div>\n          <div class=\"split-para\">Total Price <span> ₹{{total}}</span></div>\n          <div class=\"split-para\" >Home Collection Charges <span>+ ₹{{deliveryAmount}}</span></div>\n          <div class=\"split-para\" >Coupon Discount <span>- ₹{{promotion}}</span></div>\n          <div class=\"final-para\">TO BE PAID <span>₹{{total - promotion + deliveryAmount}}</span></div>\n        </div>\n        <div class=\"right-part\" style=\"padding: 12px;\">\n          <p>COVID-19 Declaration</p>\n          <ion-item class=\"news\">\n            <img src=\"assets/coronavirus.png\" slot=\"start\">\n            <p>Is someone at the sample collection address COVID-19 Positive?</p>\n          </ion-item>\n          <ion-grid class=\"timeGrid\">\n            <ion-row>\n              <ion-col size=\"4\" (click)=\"selectDec('Yes')\">\n                <div [class.active]=\"declaration === 'Yes'\">\n                  <ion-label>\n                    Yes\n                  </ion-label>\n                </div>\n              </ion-col>\n              <ion-col size=\"4\" (click)=\"selectDec('No')\">\n                <div [class.active]=\"declaration === 'No'\">\n                  <ion-label>\n                    No\n                  </ion-label>\n                </div>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n          <div *ngIf=\"declaration == 'Yes'\" style=\"font-size:12px\">Thank you for informing. We will take proper safety measure during collection of the sample.</div>\n          <div *ngIf=\"declaration == 'No'\" style=\"font-size:12px\">Thank you for informing.</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n</ion-content>\n<ion-content *ngIf=\"cart_length == 0\" style=\" --background:#fff;\">\n  <div class=\"noData\">\n    <img src=\"assets/no_cart.jpg\">\n    <p>Lab Cart Is Empty</p>\n    <small>Looks like you have no lab tests in your cart yet.</small>\n    <ion-button (click)=\"add()\" type=\"submit\" expand=\"block\">\n      Add Test\n    </ion-button>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart-routing.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/pages/cart/cart-routing.module.ts ***!
    \***************************************************/

  /*! exports provided: CartPageRoutingModule */

  /***/
  function srcAppPagesCartCartRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageRoutingModule", function () {
      return CartPageRoutingModule;
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


    var _cart_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");

    var routes = [{
      path: '',
      component: _cart_page__WEBPACK_IMPORTED_MODULE_3__["CartPage"]
    }];

    var CartPageRoutingModule = function CartPageRoutingModule() {
      _classCallCheck(this, CartPageRoutingModule);
    };

    CartPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CartPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.module.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.module.ts ***!
    \*******************************************/

  /*! exports provided: CartPageModule */

  /***/
  function srcAppPagesCartCartModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPageModule", function () {
      return CartPageModule;
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


    var _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cart-routing.module */
    "./src/app/pages/cart/cart-routing.module.ts");
    /* harmony import */


    var _cart_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cart.page */
    "./src/app/pages/cart/cart.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");

    var CartPageModule = function CartPageModule() {
      _classCallCheck(this, CartPageModule);
    };

    CartPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"], _cart_routing_module__WEBPACK_IMPORTED_MODULE_5__["CartPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"]],
      declarations: [_cart_page__WEBPACK_IMPORTED_MODULE_6__["CartPage"]]
    })], CartPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.scss":
  /*!*******************************************!*\
    !*** ./src/app/pages/cart/cart.page.scss ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCartCartPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #f5f5f5;\n  /*ion-button{\n      width: 25%;\n      float: right;\n      margin: 16px 16px 32px;\n  }*/\n}\nion-content .noData {\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n}\nion-content .noData ion-button {\n  margin: 16px auto;\n  width: 15%;\n}\nion-content ion-row ion-item {\n  --border-color: transparent;\n}\nion-content .tags {\n  padding: 12px;\n  margin-top: 5px;\n  margin-bottom: 5px;\n  display: -webkit-box;\n  display: flex;\n}\nion-content .tags small {\n  font-size: 12px;\n  background: var(--ion-color-primary);\n  margin: 0px 2px;\n  padding: 4px 12px;\n  border-radius: 20px;\n  color: white;\n  display: inline-block;\n  margin: 3px;\n}\nion-content .tags small ion-icon {\n  position: relative;\n  top: 2px;\n}\nion-content .stepOne .summary {\n  background: white;\n  margin-top: 10px;\n}\nion-content .stepOne .summary ion-icon {\n  color: grey;\n  font-size: x-large;\n}\nion-content .stepOne .summary ion-col div {\n  padding-top: 10px;\n  text-align: center;\n}\nion-content .stepOne .summary ion-col div p {\n  font-size: 13px;\n  color: black;\n}\nion-content .stepOne .summary .last-col {\n  display: -webkit-box;\n  display: flex;\n  padding: 16px;\n}\nion-content .stepOne .summary .last-col p {\n  font-size: 13px;\n  color: black;\n}\nion-content .stepOne ion-list {\n  margin: 10px 0px;\n}\nion-content .stepOne h3 {\n  margin: 0px;\n  font-size: 18px;\n}\nion-content .stepOne .atitle {\n  font-weight: bold;\n  color: black;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\nion-content .stepOne .asubtitle {\n  color: #767676;\n  font-size: 0.8rem;\n}\nion-content .stepOne .news {\n  --border-color: transparent;\n  margin: 10px 0px;\n}\nion-content .stepOne .news img {\n  width: 30px;\n  height: 35px;\n  margin-right: 0px;\n}\nion-content .stepOne .second-news {\n  padding: 8px;\n  background: #3c4252;\n}\nion-content .stepOne .second-news p {\n  color: #fff;\n}\nion-content .stepOne span {\n  float: right;\n  color: red;\n  font-weight: bold;\n  display: block;\n  cursor: pointer;\n  padding: 5px;\n}\nion-content .stepOne .memberList {\n  margin: 10px 0px;\n  --border-color: transparent;\n}\nion-content .active {\n  --padding-start: 24px;\n  --background: var(--ion-color-primary);\n  color: white;\n  --border-color: transparent;\n  box-shadow: 0 0 3px 0 var(--ion-color-medium);\n}\nion-content .active ion-icon {\n  color: white;\n  margin: 0;\n}\nion-content .not-active {\n  --padding-start: 0px;\n  --padding-start: 24px;\n  margin: 0px auto 20px;\n  --border-color: transparent;\n  color: var(--ion-color-primary);\n  box-shadow: 0 0 3px 0 var(--ion-color-medium);\n}\nion-content .error {\n  color: red;\n  font-size: 10px;\n  padding-left: 16px;\n}\nion-content p {\n  color: var(--ion-color-primary);\n  padding-left: 16px;\n  margin-bottom: 0px;\n}\nion-content p span {\n  float: right;\n  padding-right: 16px;\n  color: red;\n  font-weight: bold;\n}\nion-content .info {\n  border-bottom: 1px solid #f5f5f5;\n}\nion-content .info ion-item {\n  --border-color: transparent;\n}\nion-content .booking_date {\n  padding: 16px 0px;\n  background: white;\n  margin: 10px 0px;\n}\nion-content .btn_class {\n  text-transform: capitalize;\n  font-weight: bold;\n  float: left;\n  --border-radius: 25px;\n  margin: 0px 0px 20px;\n}\nion-content .pre_class {\n  text-transform: capitalize;\n  font-weight: bold;\n  float: left;\n  --background: black;\n  color: white;\n  --border-radius: 25px;\n  margin: 0px 0px 20px;\n}\nion-content .input-div {\n  border: 1px solid #e6e6e6;\n  margin: 8px 16px;\n  height: 40px;\n  border-radius: 5px;\n}\nion-content .input-div .sc-ion-input-md-h {\n  --padding-top: 0px;\n}\nion-content ion-list .timeGrid ion-icon {\n  color: var(--ion-color-primary);\n  font-size: x-large;\n}\nion-content ion-list .timeGrid div {\n  padding: 10px 0px;\n  font-size: 12px;\n  border-radius: 5px;\n  background: #eeeeee;\n  text-align: center;\n  width: 84%;\n  margin: auto;\n}\nion-content ion-list .timeGrid ion-label {\n  font-weight: bold;\n  color: black;\n}\nion-content ion-list .timeGrid .active {\n  background: var(--ion-color-primary);\n}\nion-content ion-list .timeGrid .active ion-label {\n  color: white;\n}\nion-content .stepTwo h3 {\n  margin: 0px;\n  font-size: 18px;\n}\nion-content .stepTwo .right-part {\n  border: 1px solid #d4d6d7;\n  background: white;\n  margin: 16px 0px;\n}\nion-content .stepTwo .right-part .patient-count {\n  padding: 14px 0px 0px;\n  display: -webkit-box;\n  display: flex;\n}\nion-content .stepTwo .right-part .patient-count img {\n  width: 30px;\n}\nion-content .stepTwo .right-part .patient-count span {\n  color: red;\n  font-size: 14px;\n  margin: 4px 0px 0px 16px;\n}\nion-content .stepTwo .right-part ion-item {\n  --border-color: transparent;\n}\nion-content .stepTwo .right-part .split-para {\n  margin: 10px;\n  font-weight: normal;\n}\nion-content .stepTwo .right-part .split-para span {\n  float: right;\n  margin-left: 10px;\n  font-weight: normal;\n}\nion-content .stepTwo .right-part .final-para {\n  margin: 10px;\n  font-weight: bold;\n}\nion-content .stepTwo .right-part .final-para span {\n  float: right;\n  margin-left: 10px;\n  font-weight: bold;\n}\nion-content .stepTwo .coupones {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px 10px;\n  border: 1px solid #d4d6d7;\n  background: white;\n  margin: 16px 0px;\n}\nion-content .stepTwo .coupones .title {\n  padding: 0px 10px;\n  color: var(--ion-color-primary);\n  margin-top: 5px;\n}\nion-content .stepTwo .coupones .title span {\n  float: right;\n}\nion-content .stepTwo img {\n  width: 35px;\n}\nion-content .stepTwo p {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding-left: 0px;\n}\nion-content .stepTwo .timeGrid div {\n  padding: 10px 0px;\n  font-size: 12px;\n  border-radius: 5px;\n  background: #eeeeee;\n  text-align: center;\n  width: 84%;\n  margin: auto;\n}\nion-content .stepTwo .timeGrid ion-label {\n  font-weight: bold;\n  color: black;\n}\nion-content .stepTwo .timeGrid .active {\n  /*border: 1px solid var(--ion-color-primary);*/\n  background: var(--ion-color-primary);\n}\nion-content .stepTwo .timeGrid .active ion-label {\n  color: white;\n}\nion-content .payment-class {\n  margin: 10px 0px 0px;\n}\nion-content .payment-class ion-item {\n  border-bottom: 1px solid #8c8d8a;\n  --border-color: transparent;\n  --padding-left: 0px;\n  --inner-padding-end: 16px;\n  --background: #fff;\n}\nion-content .payment-class ion-card {\n  --background: #fff;\n}\nion-content .payment-class .item .sc-ion-label-md-h {\n  font-size: 12px;\n}\n.labnamecolo {\n  padding: 4px 12px;\n  color: #fff;\n  cursor: pointer;\n  background: #3c4252;\n}\n.labnamecolo:hover {\n  background: #ea5b24;\n}\n.code {\n  font-weight: bold;\n  margin-left: 5px;\n  border: 1px dotted;\n  padding: 2px 7px;\n  color: var(--ion-color-primary);\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.stepOne {\n  display: inline-block;\n  width: 100%;\n}\n.stepTwo {\n  display: inline-block;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FydC9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxjYXJ0XFxjYXJ0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FydC9jYXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQXVHSSxxQkFBQTtFQUNBOzs7O0lBQUE7QUNqR0o7QUROSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFBaUIsV0FBQTtBQ1N6QjtBRFJRO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FDVVo7QUROUTtFQUNJLDJCQUFBO0FDUVo7QURKSTtFQUFPLGFBQUE7RUFDUixlQUFBO0VBQ0Qsa0JBQUE7RUFBbUIsb0JBQUE7RUFBQSxhQUFBO0FDUXJCO0FETkE7RUFDSSxlQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFBYSxxQkFBQTtFQUNqQixXQUFBO0FDU0E7QURSSTtFQUNJLGtCQUFBO0VBQ0osUUFBQTtBQ1VKO0FETFE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0FDT1o7QUROWTtFQUFTLFdBQUE7RUFBWSxrQkFBQTtBQ1VqQztBRFJnQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNVcEI7QURUb0I7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ1d4QjtBRFBZO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsYUFBQTtBQ1NoQjtBRFJnQjtFQUNJLGVBQUE7RUFDQSxZQUFBO0FDVXBCO0FETlE7RUFDSSxnQkFBQTtBQ1FaO0FETkU7RUFDVSxXQUFBO0VBQ04sZUFBQTtBQ1FOO0FETlE7RUFDSSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7RUFDQSwwQkFBQTtBQ1FaO0FETlE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNRWjtBRE5RO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtBQ1FaO0FEUFk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDU2hCO0FETlE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNRWjtBRFBZO0VBQ0ksV0FBQTtBQ1NoQjtBRE5RO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUFrQixjQUFBO0VBQzlCLGVBQUE7RUFDQSxZQUFBO0FDU0E7QURQUTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7QUNTWjtBREFJO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0FDRVI7QUREUTtFQUNJLFlBQUE7RUFBYSxTQUFBO0FDSXpCO0FEQUk7RUFDSSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0VBQ0EsNkNBQUE7QUNFUjtBREFJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtBQ0VSO0FEQUk7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksWUFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLGlCQUFBO0FDR1o7QURBSTtFQUNJLGdDQUFBO0FDRVI7QUREUTtFQUNJLDJCQUFBO0FDR1o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0VSO0FEQUk7RUFDSSwwQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUNFUjtBREFJO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUNFUjtBRERRO0VBQ0ksa0JBQUE7QUNHWjtBREVZO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtBQ0FoQjtBREVZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNBaEI7QURFWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0FoQjtBREVZO0VBQ0ksb0NBQUE7QUNBaEI7QURDZ0I7RUFDSSxZQUFBO0FDQ3BCO0FES0c7RUFBRyxXQUFBO0VBQ0QsZUFBQTtBQ0ZMO0FESUU7RUFpQlUseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDbEJaO0FEQVk7RUFDUSxxQkFBQTtFQUNKLG9CQUFBO0VBQUEsYUFBQTtBQ0VoQjtBRERnQjtFQUNJLFdBQUE7QUNHcEI7QUREZ0I7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO0FDR3BCO0FEQVk7RUFDSSwyQkFBQTtBQ0VoQjtBRElZO0VBQWMsWUFBQTtFQUFZLG1CQUFBO0FDQXRDO0FEQ1k7RUFBbUIsWUFBQTtFQUFZLGlCQUFBO0VBQWtCLG1CQUFBO0FDSTdEO0FESFk7RUFBYyxZQUFBO0VBQVksaUJBQUE7QUNPdEM7QUROWTtFQUFtQixZQUFBO0VBQVksaUJBQUE7RUFBa0IsaUJBQUE7QUNXN0Q7QURUUTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDV1o7QURWWTtFQUNJLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FDWWhCO0FEWGdCO0VBQ0ksWUFBQTtBQ2FwQjtBRFRRO0VBQ0ksV0FBQTtBQ1daO0FEVFE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNXWjtBRFJZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNVaEI7QURSWTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ1VoQjtBRFJZO0VBQ0ksOENBQUE7RUFDQSxvQ0FBQTtBQ1VoQjtBRFRnQjtFQUNJLFlBQUE7QUNXcEI7QUROSTtFQUNJLG9CQUFBO0FDUVI7QURQUTtFQUNJLGdDQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUNTWjtBRFBRO0VBQ0ksa0JBQUE7QUNTWjtBRFBRO0VBQ0ksZUFBQTtBQ1NaO0FETEE7RUFBYyxpQkFBQTtFQUFrQixXQUFBO0VBQzlCLGVBQUE7RUFBZ0IsbUJBQUE7QUNXbEI7QURUQTtFQUFvQixtQkFBQTtBQ2FwQjtBRFZBO0VBQU8saUJBQUE7RUFDUCxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ2NBO0FEWkE7RUFDRSxxQkFBQTtFQUFzQixXQUFBO0FDZ0J4QjtBRGRBO0VBQ0UscUJBQUE7RUFBc0IsV0FBQTtBQ2tCeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jYXJ0L2NhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgLm5vRGF0YXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXdlaWdodDpib2xkO3dpZHRoOiAxMDAlO1xuICAgICAgICBpb24tYnV0dG9ue1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IGF1dG87XG4gICAgICAgICAgICB3aWR0aDogMTUlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlvbi1yb3cge1xuICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGFncyB7cGFkZGluZzogMTJweDtcbiAgIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O2Rpc3BsYXk6IGZsZXg7XG59XG4udGFncyBzbWFsbCB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBtYXJnaW46IDBweCAycHg7XG4gICAgcGFkZGluZzo0cHggMTJweDtcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5tYXJnaW46IDNweDtcbiAgICBpb24taWNvbntcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMnB4O1xuICAgIH1cbn1cblxuICAgIC5zdGVwT25le1xuICAgICAgICAuc3VtbWFyeXtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGlvbi1pY29ue2NvbG9yOiBncmV5O2ZvbnQtc2l6ZTogeC1sYXJnZTt9XG4gICAgICAgICAgICAgICAgaW9uLWNvbCB7XG4gICAgICAgICAgICAgICAgZGl2e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLmxhc3QtY29se1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICB9XG5cdFx0aDN7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcblx0XHQgICAgZm9udC1zaXplOiAxOHB4O1xuXHRcdH1cbiAgICAgICAgLmF0aXRsZXtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjByZW07XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgICAgICAuYXN1YnRpdGxle1xuICAgICAgICAgICAgY29sb3I6ICM3Njc2NzY7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcbiAgICAgICAgfVxuICAgICAgICAubmV3c3tcbiAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5zZWNvbmQtbmV3c3tcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICMzYzQyNTI7XG4gICAgICAgICAgICBwe1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7ZGlzcGxheTogYmxvY2s7XG5jdXJzb3I6IHBvaW50ZXI7XG5wYWRkaW5nOiA1cHg7XG4gICAgICAgIH1cbiAgICAgICAgLm1lbWJlckxpc3R7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuICAgIC0tYmFja2dyb3VuZDogICNmNWY1ZjU7XG4gICAgLyppb24tYnV0dG9ue1xuICAgICAgICB3aWR0aDogMjUlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbjogMTZweCAxNnB4IDMycHg7XG4gICAgfSovXG4gICAgLmFjdGl2ZSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgY29sb3I6IHdoaXRlO21hcmdpbjogMDtcbiAgICAgICAgfVxuICAgIH0gXG5cbiAgICAubm90LWFjdGl2ZSB7XG4gICAgICAgIC0tcGFkZGluZy1zdGFydDogMHB4O1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IGF1dG8gMjBweDtcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG4gICAgfVxuICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYm9va2luZ19kYXRle1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgfVxuICAgIC5idG5fY2xhc3N7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG4gICAgfVxuICAgIC5wcmVfY2xhc3N7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIC0tYmFja2dyb3VuZDogIGJsYWNrO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgICAgICAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG4gICAgfVxuICAgIC5pbnB1dC1kaXZ7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNmU2ZTY7XG4gICAgICAgIG1hcmdpbjogOHB4IDE2cHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAuc2MtaW9uLWlucHV0LW1kLWgge1xuICAgICAgICAgICAgLS1wYWRkaW5nLXRvcDogMHB4OyAgXG4gICAgICAgIH1cbiAgICB9XG4gICAgaW9uLWxpc3R7XG4gICAgICAgIC50aW1lR3JpZHtcbiAgICAgICAgICAgIGlvbi1pY29ue1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiB4LWxhcmdlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgaW9uLWxhYmVsIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuc3RlcFR3b3tcblx0XHRcdGgze21hcmdpbjogMHB4O1xuXHRcdCAgIGZvbnQtc2l6ZTogMThweDtcblx0XHR9XG5cdFx0LnJpZ2h0LXBhcnR7XG4gICAgICAgICAgICAucGF0aWVudC1jb3VudHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMTRweCAwcHggMHB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgaW1ne1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDRweCAwcHggMHB4IDE2cHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgIC0tYm9yZGVyLWNvbG9yOiAgdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ2ZDc7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICAgICAgICAuc3BsaXQtcGFyYSB7IG1hcmdpbjoxMHB4O2ZvbnQtd2VpZ2h0OiBub3JtYWw7fVxuICAgICAgICAgICAgLnNwbGl0LXBhcmEgc3BhbiB7IGZsb2F0OnJpZ2h0O21hcmdpbi1sZWZ0OjEwcHg7IGZvbnQtd2VpZ2h0OiBub3JtYWw7fVxuICAgICAgICAgICAgLmZpbmFsLXBhcmEgeyBtYXJnaW46MTBweDtmb250LXdlaWdodDogYm9sZDt9XG4gICAgICAgICAgICAuZmluYWwtcGFyYSBzcGFuIHsgZmxvYXQ6cmlnaHQ7bWFyZ2luLWxlZnQ6MTBweDsgZm9udC13ZWlnaHQ6IGJvbGQ7fVxuICAgICAgICB9XG4gICAgICAgIC5jb3Vwb25lc3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmQ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDBweCAxMHB4O1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW1ne1xuICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgIH1cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRpbWVHcmlke1xuICAgICAgICAgICAgZGl2IHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4NCU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW9uLWxhYmVsIHsgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5hY3RpdmUge1xuICAgICAgICAgICAgICAgIC8qYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyovXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICBpb24tbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5wYXltZW50LWNsYXNze1xuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM4YzhkOGE7XG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICAtLXBhZGRpbmctbGVmdDogMHB4O1xuICAgICAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMTZweDtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICBpb24tY2FyZHtcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgfVxuICAgICAgICAuaXRlbSAuc2MtaW9uLWxhYmVsLW1kLWgge1xuICAgICAgICAgICAgZm9udC1zaXplOjEycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubGFibmFtZWNvbG8ge3BhZGRpbmc6IDRweCAxMnB4O2NvbG9yOiAjZmZmO1xuICBjdXJzb3I6IHBvaW50ZXI7YmFja2dyb3VuZDogIzNjNDI1Mjtcbn1cbi5sYWJuYW1lY29sbzpob3ZlciB7YmFja2dyb3VuZDojZWE1YjI0O1xufVxuXG4uY29kZSB7Zm9udC13ZWlnaHQ6IGJvbGQ7XG5tYXJnaW4tbGVmdDogNXB4O1xuYm9yZGVyOiAxcHggZG90dGVkO1xucGFkZGluZzogMnB4IDdweDtcbmNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG5mb250LXNpemU6IDE0cHg7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnN0ZXBPbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7d2lkdGg6IDEwMCU7XG59XG4uc3RlcFR3byB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jazt3aWR0aDogMTAwJTtcbn0iLCJpb24tY29udGVudCB7XG4gIC0tYmFja2dyb3VuZDogI2Y1ZjVmNTtcbiAgLyppb24tYnV0dG9ue1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgIG1hcmdpbjogMTZweCAxNnB4IDMycHg7XG4gIH0qL1xufVxuaW9uLWNvbnRlbnQgLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuaW9uLWNvbnRlbnQgLm5vRGF0YSBpb24tYnV0dG9uIHtcbiAgbWFyZ2luOiAxNnB4IGF1dG87XG4gIHdpZHRoOiAxNSU7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLnRhZ3Mge1xuICBwYWRkaW5nOiAxMnB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IC50YWdzIHNtYWxsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgcGFkZGluZzogNHB4IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW46IDNweDtcbn1cbmlvbi1jb250ZW50IC50YWdzIHNtYWxsIGlvbi1pY29uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IDJweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIC5zdW1tYXJ5IHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAuc3VtbWFyeSBpb24taWNvbiB7XG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAuc3VtbWFyeSBpb24tY29sIGRpdiB7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAuc3VtbWFyeSBpb24tY29sIGRpdiBwIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAuc3VtbWFyeSAubGFzdC1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBPbmUgLnN1bW1hcnkgLmxhc3QtY29sIHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiBibGFjaztcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIGlvbi1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIGgzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIC5hdGl0bGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAuYXN1YnRpdGxlIHtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBPbmUgLm5ld3Mge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAubmV3cyBpbWcge1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzNXB4O1xuICBtYXJnaW4tcmlnaHQ6IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIC5zZWNvbmQtbmV3cyB7XG4gIHBhZGRpbmc6IDhweDtcbiAgYmFja2dyb3VuZDogIzNjNDI1Mjtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIC5zZWNvbmQtbmV3cyBwIHtcbiAgY29sb3I6ICNmZmY7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBPbmUgLm1lbWJlckxpc3Qge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuYWN0aXZlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAyNHB4O1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHdoaXRlO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IC5hY3RpdmUgaW9uLWljb24ge1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5ub3QtYWN0aXZlIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgbWFyZ2luOiAwcHggYXV0byAyMHB4O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGJveC1zaGFkb3c6IDAgMCAzcHggMCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbn1cbmlvbi1jb250ZW50IC5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgcCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xufVxuaW9uLWNvbnRlbnQgcCBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICBjb2xvcjogcmVkO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5pbmZvIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG5pb24tY29udGVudCAuaW5mbyBpb24taXRlbSB7XG4gIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IC5ib29raW5nX2RhdGUge1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTBweCAwcHg7XG59XG5pb24tY29udGVudCAuYnRuX2NsYXNzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDBweCAwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5wcmVfY2xhc3Mge1xuICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OiBsZWZ0O1xuICAtLWJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG4gIC0tYm9yZGVyLXJhZGl1czogMjVweDtcbiAgbWFyZ2luOiAwcHggMHB4IDIwcHg7XG59XG5pb24tY29udGVudCAuaW5wdXQtZGl2IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgbWFyZ2luOiA4cHggMTZweDtcbiAgaGVpZ2h0OiA0MHB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5pb24tY29udGVudCAuaW5wdXQtZGl2IC5zYy1pb24taW5wdXQtbWQtaCB7XG4gIC0tcGFkZGluZy10b3A6IDBweDtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC50aW1lR3JpZCBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC50aW1lR3JpZCBkaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDg0JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgaW9uLWxpc3QgLnRpbWVHcmlkIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24tbGlzdCAudGltZUdyaWQgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IGlvbi1saXN0IC50aW1lR3JpZCAuYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIGgzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2Q0ZDZkNztcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAucmlnaHQtcGFydCAucGF0aWVudC1jb3VudCB7XG4gIHBhZGRpbmc6IDE0cHggMHB4IDBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IC5wYXRpZW50LWNvdW50IGltZyB7XG4gIHdpZHRoOiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgLnBhdGllbnQtY291bnQgc3BhbiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiA0cHggMHB4IDBweCAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAucmlnaHQtcGFydCAuc3BsaXQtcGFyYSB7XG4gIG1hcmdpbjogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IC5zcGxpdC1wYXJhIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgLmZpbmFsLXBhcmEge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgLmZpbmFsLXBhcmEgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLmNvdXBvbmVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcGFkZGluZzogMTBweCAxMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmQ3O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luOiAxNnB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5jb3Vwb25lcyAudGl0bGUge1xuICBwYWRkaW5nOiAwcHggMTBweDtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgbWFyZ2luLXRvcDogNXB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLmNvdXBvbmVzIC50aXRsZSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gaW1nIHtcbiAgd2lkdGg6IDM1cHg7XG59XG5pb24tY29udGVudCAuc3RlcFR3byBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC50aW1lR3JpZCBkaXYge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIGJhY2tncm91bmQ6ICNlZWVlZWU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDg0JTtcbiAgbWFyZ2luOiBhdXRvO1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnRpbWVHcmlkIGlvbi1sYWJlbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAudGltZUdyaWQgLmFjdGl2ZSB7XG4gIC8qYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpOyovXG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC50aW1lR3JpZCAuYWN0aXZlIGlvbi1sYWJlbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbmlvbi1jb250ZW50IC5wYXltZW50LWNsYXNzIHtcbiAgbWFyZ2luOiAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAucGF5bWVudC1jbGFzcyBpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjOGM4ZDhhO1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDE2cHg7XG4gIC0tYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5wYXltZW50LWNsYXNzIGlvbi1jYXJkIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgLnBheW1lbnQtY2xhc3MgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4ubGFibmFtZWNvbG8ge1xuICBwYWRkaW5nOiA0cHggMTJweDtcbiAgY29sb3I6ICNmZmY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYmFja2dyb3VuZDogIzNjNDI1Mjtcbn1cblxuLmxhYm5hbWVjb2xvOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2VhNWIyNDtcbn1cblxuLmNvZGUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgYm9yZGVyOiAxcHggZG90dGVkO1xuICBwYWRkaW5nOiAycHggN3B4O1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5zdGVwT25lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnN0ZXBUd28ge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/cart/cart.page.ts":
  /*!*****************************************!*\
    !*** ./src/app/pages/cart/cart.page.ts ***!
    \*****************************************/

  /*! exports provided: CartPage */

  /***/
  function srcAppPagesCartCartPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartPage", function () {
      return CartPage;
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


    var src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/components/update/update.component */
    "./src/app/components/update/update.component.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _add_address_add_address_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../add-address/add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /* harmony import */


    var _insufficient_insufficient_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../insufficient/insufficient.page */
    "./src/app/pages/insufficient/insufficient.page.ts");
    /* harmony import */


    var src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! src/app/pages/profile-modal/profile-modal.page */
    "./src/app/pages/profile-modal/profile-modal.page.ts");
    /* harmony import */


    var src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/services/razorpay */
    "./src/app/services/razorpay.ts");
    /* harmony import */


    var flatted__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! flatted */
    "./node_modules/flatted/esm/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_13___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_13__);

    var CartPage =
    /*#__PURE__*/
    function () {
      function CartPage(api, util, router, modalController, razorpayService, cd, menu) {
        var _this = this;

        _classCallCheck(this, CartPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.modalController = modalController;
        this.razorpayService = razorpayService;
        this.cd = cd;
        this.menu = menu; // memberForm: FormGroup;
        // addressForm: FormGroup;

        this.name = '';
        this.phone = '';
        this.dob = '';
        this.members = [];
        this.member = '';
        this.stepOne = true;
        this.stepTwo = false;
        this.stepThree = false;
        this.test_mode = false;
        this.user_type = "My Self";
        this.heading = ['For Whom?', 'Sample Collection Address, Date and Time'];
        this.selectedMember = [];
        this.address = [];
        this.timing = [];
        this.collection_mode = '';
        this.isMode = true;
        this.selectedAddress = '';
        this.booking_date = moment__WEBPACK_IMPORTED_MODULE_13__().format('YYYY-MM-DD');
        this.booking_time = '';
        this.payment_type = '';
        this.address_text = '';
        this.total = 0;
        this.grand_total = 0;
        this.mrp_price = 0;
        this.discount_on_mrp = 0;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_13__(new Date()).format('YYYY-MM-DD');
        this.declaration = '';
        this.cart_length = 0;
        this.showModal = false;
        this.coupon_name = "";
        this.coupon_amount = 0;
        this.couponCode = '';
        this.couponId = '';
        this.promotion = 0;
        this.cashback_amount = 0;
        this.coupon_type = '';
        this.usedCoupon = [];
        this.balance = 0;
        this.currency_ = "₹";
        this.deliveryAmount = 0;
        this.used_coupon_count = 0;
        this.used_couponId = '';
        this.url = "https://firebasestorage.googleapis.com/v0/b/way2lab-c6a78.appspot.com/o/logo.png?alt=media&token=355c1220-81ce-4b99-93f3-3a1cca0074cd";
        this.typeList = ['My Self', 'Someone Else'];
        this.getMembers();
        this.razorpayService.lazyLoadLibrary('https://checkout.razorpay.com/v1/checkout.js').subscribe();
        var add7Days = new Date(new Date().setDate(new Date().getDate() + 7)).valueOf();
        this.maxDate = moment__WEBPACK_IMPORTED_MODULE_13__(add7Days).format("YYYY-MM-DD");
        var uid = sessionStorage.getItem('uid');

        if (uid !== undefined) {
          this.api.getMyProfile(uid).then(function (data) {
            _this.profile = data;
            console.log(_this.profile);

            if (_this.profile.name == '') {
              console.log(_this.profile.name);

              _this.openModal();
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }

        this.util.getCouponObservable().subscribe(function (data) {
          console.log(data);

          if (data) {
            _this.coupon_type = data.coupon_type;

            if (_this.coupon_type == 'cashback') {
              if (data.type == "₹") {
                _this.cashback_amount = data.discount;
                _this.couponCode = data.code;
                _this.couponId = data.id;

                _this.cd.detectChanges();

                _this.getCoupon(_this.couponId);

                localStorage.setItem('coupon', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(data));
              } else if (data.type == "%") {
                var percentage_discount = data.discount;
                console.log(percentage_discount);
                var percent = percentage_discount / 100 * _this.total;
                console.log(percentage_discount);

                if (percent >= data.upto && data.upto != 0) {
                  _this.cashback_amount = data.upto;
                } else {
                  _this.cashback_amount = percent;
                }

                _this.couponCode = data.code;
                _this.couponId = data.id;

                _this.cd.detectChanges();

                _this.getCoupon(_this.couponId);

                localStorage.setItem('coupon', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(data));
              }
            } else {
              if (data.free_home_visit == 1) {
                _this.promotion = _this.deliveryAmount;
                _this.couponCode = data.code;
                _this.couponId = data.id;

                _this.cd.detectChanges();

                _this.getCoupon(_this.couponId);

                localStorage.setItem('coupon', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(data));
              } else {
                if (data.type == "₹") {
                  console.log(data.type);
                  _this.promotion = data.discount;
                  _this.couponCode = data.code;
                  _this.couponId = data.id;
                  console.log(_this.promotion); // this.grand_total = this.total - this.promotion;

                  console.log(_this.grand_total);

                  _this.cd.detectChanges();

                  _this.getCoupon(_this.couponId);

                  localStorage.setItem('coupon', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(data));
                } else if (data.type == "%") {
                  console.log(data.type);
                  var _percentage_discount = data.discount;
                  console.log(_percentage_discount);
                  var percent = _percentage_discount / 100 * _this.total;
                  console.log(_percentage_discount);

                  if (percent >= data.upto && data.upto != 0) {
                    _this.promotion = data.upto;
                  } else {
                    _this.promotion = percent;
                  }

                  _this.couponCode = data.code;
                  _this.couponId = data.id; // this.grand_total = this.total - this.promotion;

                  _this.cd.detectChanges();

                  _this.getCoupon(_this.couponId);

                  localStorage.setItem('coupon', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(data));
                }
              }
            }
          }
        });
      }

      _createClass(CartPage, [{
        key: "openModal",
        value: function openModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.modalController.create({
                      component: src_app_pages_profile_modal_profile_modal_page__WEBPACK_IMPORTED_MODULE_10__["ProfileModalPage"],
                      cssClass: 'profileCss',
                      backdropDismiss: false
                    });

                  case 2:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {});
                    _context.next = 6;
                    return modal.present();

                  case 6:
                    return _context.abrupt("return", _context.sent);

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "remove",
        value: function remove(index) {
          this.cart = Object(flatted__WEBPACK_IMPORTED_MODULE_12__["parse"])(localStorage.getItem('cartdata'));
          console.log(this.cart);
          console.log(index);

          if (this.cart.test_data.length > 1) {
            this.cart.available_test.splice(index, 1);
            this.cart.test_data.splice(index, 1);
            localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])(this.cart));

            if (this.selectedMember.length == 0) {
              this.calculatePrice(1);
            } else {
              this.calculatePrice(this.selectedMember.length);
            }
          } else {
            this.util.showToast('You can not remove this test', 'danger', 'bottom');
          }

          console.log(this.cart);
        }
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this2 = this;

          //this.getAddress();
          this.pincode = localStorage.getItem('pincode');
          this.cart = Object(flatted__WEBPACK_IMPORTED_MODULE_12__["parse"])(localStorage.getItem('cartdata'));
          this.cart_length = Object.keys(this.cart).length;
          console.log(this.cart);
          console.log(Object.keys(this.cart).length);

          if (Object.keys(this.cart).length !== 0) {
            // this.discount_on_mrp = this.cart.price - this.cart.selling_price;
            if (this.couponCode == '') {
              this.calculatePrice(1);
            }

            this.currency_ = localStorage.getItem("currency_symbol");
            var uid = sessionStorage.getItem('uid');
            this.api.getWallet(uid).then(function (data) {
              _this2.util.hide();

              if (data && data.length != 0) {
                _this2.wallet_money = data[0];
                _this2.balance = _this2.wallet_money.amount;
              }
            }).catch(function (err) {
              if (err) {
                console.log(err);

                _this2.util.hide();

                _this2.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          }
        }
      }, {
        key: "lab",
        value: function lab() {
          localStorage.setItem('labid', this.cart.id);
          this.router.navigate(['diagnostic-lab', this.cart.page_slug]);
        }
      }, {
        key: "add",
        value: function add() {
          this.router.navigate(['home']);
        }
      }, {
        key: "coupon",
        value: function coupon() {
          var _this3 = this;

          console.log(this.couponId);

          if (this.couponId !== undefined && this.couponId != '') {
            var uid = sessionStorage.getItem('uid');
            console.log(uid);
            var date = new Date();
            var createdAt = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
            this.used_coupon_count = this.used_coupon_count + 1;
            var params = {};

            if (this.used_couponId != '') {
              params = {
                couponCode: this.couponCode,
                id: this.used_couponId,
                uid: uid,
                couponid: this.couponId,
                used_coupon: this.used_coupon_count,
                createdOn: createdAt
              };
            } else {
              this.used_couponId = Math.floor(100000000 + Math.random() * 900000000);
              params = {
                couponCode: this.couponCode,
                id: this.used_couponId,
                uid: uid,
                couponid: this.couponId,
                used_coupon: this.used_coupon_count,
                createdOn: createdAt
              };
            }

            this.api.addUsedCoupon(this.used_couponId.toString(), params).then(function (data) {
              console.log(data);
            }).catch(function (err) {
              if (err) {
                console.log(err);

                _this3.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          } else {
            console.log('No coupon applied');
          }
        }
      }, {
        key: "getCoupon",
        value: function getCoupon(couponid) {
          var _this4 = this;

          var uid = sessionStorage.getItem('uid');
          console.log(uid, couponid);
          this.api.getUsedCouponById(uid, couponid).then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this4.usedCoupon = data;
              _this4.used_coupon_count = data[0].used_coupon;
              _this4.used_couponId = data[0].id;
              console.log('used_coupon_count' + _this4.used_coupon_count);
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this4.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "openCoupon",
        value: function openCoupon() {
          localStorage.setItem('labid', this.cart.id);
          this.router.navigate(['coupons']);
        }
      }, {
        key: "calculatePrice",
        value: function calculatePrice(qty) {
          console.log(qty);
          console.log(this.cart.test_data);
          var price = 0;
          var selling_price = 0;
          var mrp_price = 0;
          var discount_on_mrp = 0;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.cart.test_data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var x = _step.value;
              price += Number(x.price);
              selling_price += Number(x.selling_price);
              discount_on_mrp += Number(x.discount_on_mrp);
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

          this.mrp_price = qty * Number(price);
          this.discount_on_mrp = qty * (Number(price) - Number(selling_price));
          this.total = qty * Number(selling_price); // this.coupon_amount = this.coupons.discount;

          this.grand_total = this.total;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (data) {
            console.log('my profile', data);

            if (data) {
              console.log(data);
              _this5.profile = data;
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getMembers",
        value: function getMembers() {
          var _this6 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMemberByUId(uid).then(function (info) {
            console.log(info);
            _this6.members = info;
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this6.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "getAddress",
        value: function getAddress() {
          var _this7 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyAddress(uid).then(function (data) {
            console.log(data);

            if (data && data.length) {
              // this.address = data;
              var _iteratorNormalCompletion2 = true;
              var _didIteratorError2 = false;
              var _iteratorError2 = undefined;

              try {
                for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                  var x = _step2.value;

                  if (_this7.pincode == x.pincode) {
                    _this7.address.push(x);
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

              console.log(_this7.address);
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
        /*  selectMember(data,member,index){
            console.log('checked',data.detail.checked);
            console.log('index',index);
            if (data.detail.checked == true) {
                member.report_status = 'Pending';
              this.selectedMember.push(member);
              // this.patientCount = this.patientCount + 1;
              this.calculatePrice(this.selectedMember.length);
            } else {
             // this.selectedMember.splice(index,1);
              console.log('length',this.selectedMember.length);
              console.log('MEMBER',this.selectedMember);
              var i = 0;
              for(let x of this.selectedMember){
                if(x.id == member.id){
                  this.selectedMember.splice(i,1);
                  // this.patientCount = this.patientCount - 1;
                  if(this.selectedMember.length > 0){
                    console.log('if',this.selectedMember);
                    this.calculatePrice(this.selectedMember.length);
                  } else {
                    console.log('else')
                  }
                }
                i++;
              }
            }
          }*/

      }, {
        key: "selectMember",
        value: function selectMember(member) {
          console.log('member', member);
          this.selectedMember = [];
          member.report_status = 'Pending';
          this.selectedMember.push(member);
          console.log('selectedMember', this.selectedMember);
        }
      }, {
        key: "selectAddress",
        value: function selectAddress(data) {
          var _this8 = this;

          console.log(data);
          var uid = sessionStorage.getItem('uid');
          this.api.getAddressById(uid, data).then(function (info) {
            console.log(info);
            _this8.newaddress = info[0];
            _this8.address_text = _this8.newaddress.street + ' ' + _this8.newaddress.locality + ' ' + _this8.newaddress.landmark + ' ' + _this8.newaddress.pincode + ' ' + _this8.newaddress.city + ' ' + _this8.newaddress.state;
            console.log(_this8.address_text);
            localStorage.setItem('boookingaddress', _this8.address_text);
            console.log();
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this8.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "addMember",
        value: function addMember() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this9 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    localStorage.setItem('routeFrom', 'add');
                    _context2.next = 3;
                    return this.modalController.create({
                      component: src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_4__["UpdateComponent"],
                      cssClass: 'update-modal-css'
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this9.selectedMember = [];

                      _this9.getMembers();
                    });
                    _context2.next = 7;
                    return modal.present();

                  case 7:
                    return _context2.abrupt("return", _context2.sent);

                  case 8:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "addAddress",
        value: function addAddress() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee3() {
            var _this10 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    localStorage.setItem('routeFrom', 'add');
                    _context3.next = 3;
                    return this.modalController.create({
                      component: _add_address_add_address_page__WEBPACK_IMPORTED_MODULE_8__["AddAddressPage"],
                      cssClass: 'address-modal-css'
                    });

                  case 3:
                    modal = _context3.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this10.address = [];

                      _this10.getAddress();
                    });
                    _context3.next = 7;
                    return modal.present();

                  case 7:
                    return _context3.abrupt("return", _context3.sent);

                  case 8:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "radioMode",
        value: function radioMode(data) {
          var _this11 = this;

          this.collection_mode = data;
          console.log(this.collection_mode);

          if (this.collection_mode == 'Home Visit') {
            var _data = [];
            _data = this.cart.range_price;

            _data.forEach(function (element) {
              if (parseFloat(element.from) <= parseFloat(_this11.cart.distance) && parseFloat(element.to) >= parseFloat(_this11.cart.distance)) {
                console.log('element', element);
                _this11.deliveryAmount = Number(element.price);
                console.log('charges', _this11.deliveryAmount);
              }
            });
          } else {
            this.deliveryAmount = 0;
          }
        }
      }, {
        key: "selectDec",
        value: function selectDec(value) {
          console.log(value);

          if (value == 'Yes') {
            this.declaration = 'Yes';
          } else {
            this.declaration = 'No';
          }
        }
      }, {
        key: "radioChecked",
        value: function radioChecked(value) {
          this.user_type = value;
        }
      }, {
        key: "datePickerStart",
        value: function datePickerStart(ev) {
          this.age = this.calculateAge(ev.detail.value);
        }
      }, {
        key: "calculateAge",
        value: function calculateAge(birthdate) {
          return moment__WEBPACK_IMPORTED_MODULE_13__().diff(birthdate, 'years');
        }
      }, {
        key: "nextMode",
        value: function nextMode() {
          this.test_mode = false;
          var _iteratorNormalCompletion3 = true;
          var _didIteratorError3 = false;
          var _iteratorError3 = undefined;

          try {
            for (var _iterator3 = this.cart.test_data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
              var x = _step3.value;

              if (x.service_delivery.includes(this.collection_mode)) {//this.test_mode = false;
              } else {
                alert(x.itid.test_name + ' not possible at home, please make a separate booking for centre visit for this test ' + x.itid.test_name);
                this.test_mode = true;
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

          if (this.test_mode == false) {
            this.test_timing(this.booking_date);
            this.isMode = false;
          }
        }
      }, {
        key: "test_timing",
        value: function test_timing(booking_date) {
          console.log('booking_date', booking_date);
          var today = new Date();
          var current = today.getHours() + 2;
          console.log('current1', this.cart);
          this.timing = [];
          var radiology = this.cart.test_data[0].itid.isRadiology;
          var cardiology = this.cart.test_data[0].itid.isCardiology;

          if (radiology == 1 || cardiology == 1) {
            var lab_timing = this.cart.test_data[0].lab_timings;
            console.log('lab_timing', lab_timing);
            var _iteratorNormalCompletion4 = true;
            var _didIteratorError4 = false;
            var _iteratorError4 = undefined;

            try {
              for (var _iterator4 = lab_timing[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                var lab_time = _step4.value;

                if (lab_time.opening_day == moment__WEBPACK_IMPORTED_MODULE_13__(booking_date).format('e')) {
                  var opening_time = lab_time.opening_time.split(":");
                  var closing_time = lab_time.closing_time.split(":");
                  var open = Number(opening_time[0]);
                  var close = Number(closing_time[0]);
                  console.log('open', open);
                  console.log('close', close);

                  for (var i = open; i < close; i = i + 2) {
                    var p = i + 2;

                    if (booking_date == moment__WEBPACK_IMPORTED_MODULE_13__().format('YYYY-MM-DD')) {
                      console.log('current', Number(current));
                      console.log('i', i);

                      if (i >= Number(current)) {
                        var labTiming = i + ':' + opening_time[1] + ' - ' + p + ':' + opening_time[1];
                        this.timing.push(labTiming);
                      }
                    } else {
                      var labTiming = i + ':' + opening_time[1] + ' - ' + p + ':' + opening_time[1];
                      this.timing.push(labTiming);
                    }
                  }
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
          } else {
            var _iteratorNormalCompletion5 = true;
            var _didIteratorError5 = false;
            var _iteratorError5 = undefined;

            try {
              for (var _iterator5 = this.cart.lab_timings[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                var _lab_time = _step5.value;

                if (_lab_time.opening_day == moment__WEBPACK_IMPORTED_MODULE_13__(booking_date).format('e')) {
                  var opening_time = _lab_time.opening_time.split(":");

                  var closing_time = _lab_time.closing_time.split(":");

                  var open = Number(opening_time[0]);
                  var close = Number(closing_time[0]);
                  console.log('open', open);
                  console.log('close', close);

                  for (var _i = open; _i < close; _i = _i + 2) {
                    var _p = _i + 2;

                    if (booking_date == moment__WEBPACK_IMPORTED_MODULE_13__().format('YYYY-MM-DD')) {
                      console.log('current', Number(current));
                      console.log('i', _i);

                      if (_i >= Number(current)) {
                        var labTiming = _i + ':' + opening_time[1] + ' - ' + _p + ':' + opening_time[1];
                        this.timing.push(labTiming);
                      }
                    } else {
                      var labTiming = _i + ':' + opening_time[1] + ' - ' + _p + ':' + opening_time[1];
                      this.timing.push(labTiming);
                    }
                  }
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
          }

          console.log('timing', this.timing);
        }
      }, {
        key: "previousMode",
        value: function previousMode() {
          this.stepOne = true;
          this.stepTwo = false;
        }
      }, {
        key: "nextElse",
        value: function nextElse() {
          this.stepOne = true;
        }
      }, {
        key: "goToStepTwo",
        value: function goToStepTwo() {
          this.getAddress();
          this.stepOne = false;
          this.stepTwo = true;
        }
      }, {
        key: "goToStepThree",
        value: function goToStepThree() {
          this.stepTwo = false;
          this.stepThree = true;
        }
      }, {
        key: "goBackTwo",
        value: function goBackTwo() {
          this.stepTwo = true;
          this.isMode = true;
        }
      }, {
        key: "walletPay",
        value: function walletPay() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee4() {
            var _this12 = this;

            var required_amount, modal;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    this.grand_total = this.total - this.promotion + this.deliveryAmount;
                    required_amount = this.grand_total - this.balance;
                    console.log('required_amount', required_amount);
                    console.log('grand_total', this.grand_total);

                    if (!(this.balance >= this.grand_total)) {
                      _context4.next = 8;
                      break;
                    }

                    this.payWithWallet();
                    _context4.next = 16;
                    break;

                  case 8:
                    if (!(this.balance < this.grand_total)) {
                      _context4.next = 16;
                      break;
                    }

                    _context4.next = 11;
                    return this.modalController.create({
                      component: _insufficient_insufficient_page__WEBPACK_IMPORTED_MODULE_9__["InsufficientPage"],
                      cssClass: 'ins-modal-css',
                      componentProps: {
                        "wallet_balance": this.balance,
                        "required_amount": required_amount
                      }
                    });

                  case 11:
                    modal = _context4.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      if (dataReturned.data == 'success') {
                        _this12.getWallet();
                      }
                    });
                    _context4.next = 15;
                    return modal.present();

                  case 15:
                    return _context4.abrupt("return", _context4.sent);

                  case 16:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "getWallet",
        value: function getWallet() {
          var _this13 = this;

          this.util.show('Please wait....');
          this.currency_ = localStorage.getItem("currency_symbol");
          var uid = sessionStorage.getItem('uid');
          this.api.getWallet(uid).then(function (data) {
            _this13.util.hide();

            if (data && data.length != 0) {
              _this13.wallet_money = data[0];
              _this13.balance = _this13.wallet_money.amount;

              _this13.payWithWallet();
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this13.util.hide();

              _this13.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "addWalletTransaction",
        value: function addWalletTransaction(booking_id) {
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            booking_id: booking_id,
            id: id.toString(),
            status: 'success',
            createdAt: createdAt,
            amount: this.grand_total,
            uid: uid,
            type: 'Debit'
          };
          this.api.addWalletTransaction(id.toString(), param).then(function (userData) {// console.log(data)
          }).catch(function (err) {
            /*this.util.hide();
            if (err) {
              this.util.hide()
              this.util.showToast(`${err}`, 'danger', 'bottom');
            }*/
          });
        }
      }, {
        key: "addCashbackTransaction",
        value: function addCashbackTransaction(booking_id) {
          if (this.couponId !== undefined && this.couponId != '' && this.coupon_type == 'cashback') {
            var uid = sessionStorage.getItem('uid');
            var date = new Date();
            var createdAt = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
            var id = Math.floor(100000000 + Math.random() * 900000000);
            var param = {
              booking_id: booking_id,
              id: id.toString(),
              status: 'pending',
              createdAt: createdAt,
              amount: this.cashback_amount,
              uid: uid,
              type: 'Cashback'
            };
            this.api.addWalletTransaction(id.toString(), param).then(function (userData) {// console.log(data)
            }).catch(function (err) {
              /*this.util.hide();
              if (err) {
                this.util.hide()
                this.util.showToast(`${err}`, 'danger', 'bottom');
              }*/
            });
          }
        }
      }, {
        key: "payWithWallet",
        value: function payWithWallet() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee7() {
            var _this14 = this;

            var uid, date, updatedAt, total_amount, post;
            return regeneratorRuntime.wrap(function _callee7$(_context7) {
              while (1) {
                switch (_context7.prev = _context7.next) {
                  case 0:
                    this.util.show('Please wait....');
                    uid = sessionStorage.getItem('uid');
                    date = new Date();
                    updatedAt = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
                    total_amount = this.balance - this.grand_total;
                    console.log(total_amount);
                    post = {
                      uid: uid,
                      updatedAt: updatedAt,
                      amount: total_amount
                    };
                    _context7.next = 9;
                    return this.api.addMoneyToWallet(uid, post).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this14, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee6() {
                        var _this15 = this;

                        var uid, date, created, id, id2, dateunix, unixtimestamp, param;
                        return regeneratorRuntime.wrap(function _callee6$(_context6) {
                          while (1) {
                            switch (_context6.prev = _context6.next) {
                              case 0:
                                uid = sessionStorage.getItem('uid');
                                date = new Date();
                                created = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
                                id = Math.floor(100000000 + Math.random() * 900000000);
                                id2 = Math.floor(100000000 + Math.random() * 900000000);
                                this.booking_id = id;
                                dateunix = new Date();
                                unixtimestamp = new Date(dateunix).getTime();
                                param = {
                                  uid: uid,
                                  userId: uid,
                                  address: this.selectedAddress,
                                  createdAt: created,
                                  booking_id: id.toString(),
                                  member_id: this.selectedMember,
                                  booking_date: this.booking_date,
                                  booking_time: this.booking_time,
                                  address_text: this.address_text,
                                  lab_id: this.cart.id,
                                  Lvid: this.cart.id,
                                  coupon_code: this.couponCode,
                                  discount_amount: this.promotion,
                                  gst: 0,
                                  mrp_price: this.mrp_price,
                                  discount_on_mrp: this.discount_on_mrp,
                                  total: this.total,
                                  grand_total: this.grand_total,
                                  status: 0,
                                  test_data: this.cart.test_data,
                                  collection_mode: this.collection_mode,
                                  payment_type: 'Wallet',
                                  covid_declaration: this.declaration,
                                  isRate: 0,
                                  transactionid: '',
                                  unixtimestamp: unixtimestamp,
                                  deliveryAmount: this.deliveryAmount
                                };
                                console.log(param);
                                _context6.next = 12;
                                return this.api.addBookings(id.toString(), param).then(function (userData) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this15, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee5() {
                                    return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                      while (1) {
                                        switch (_context5.prev = _context5.next) {
                                          case 0:
                                            localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])({}));
                                            this.addWalletTransaction(id.toString());
                                            this.sendSMS();
                                            this.util.hide(); // coupon start 

                                            this.coupon();
                                            this.addCashbackTransaction(id.toString()); // coupon end

                                            localStorage.setItem('bookingid', this.booking_id);
                                            this.router.navigate(['/summary']);

                                          case 8:
                                          case "end":
                                            return _context5.stop();
                                        }
                                      }
                                    }, _callee5, this);
                                  }));
                                }).catch(function (err) {
                                  if (err) {
                                    _this15.util.hide();

                                    console.log(err);

                                    _this15.util.showToast("".concat(err), 'danger', 'bottom');
                                  }
                                });

                              case 12:
                              case "end":
                                return _context6.stop();
                            }
                          }
                        }, _callee6, this);
                      }));
                    }).catch(function (err) {
                      if (err) {
                        _this14.util.hide();

                        console.log(err);

                        _this14.util.showToast("".concat(err), 'danger', 'bottom');
                      }
                    });

                  case 9:
                  case "end":
                    return _context7.stop();
                }
              }
            }, _callee7, this);
          }));
        }
      }, {
        key: "payWithCash",
        value: function payWithCash() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee9() {
            var _this16 = this;

            var uid, date, created, id, id2, dateunix, unixtimestamp, param;
            return regeneratorRuntime.wrap(function _callee9$(_context9) {
              while (1) {
                switch (_context9.prev = _context9.next) {
                  case 0:
                    this.util.show('Please wait....');
                    this.grand_total = this.total - this.promotion + this.deliveryAmount;
                    uid = sessionStorage.getItem('uid');
                    date = new Date();
                    created = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
                    id = Math.floor(100000000 + Math.random() * 900000000);
                    id2 = Math.floor(100000000 + Math.random() * 900000000);
                    this.booking_id = id; // let userId = '/users/'+uid;

                    dateunix = new Date();
                    unixtimestamp = new Date(dateunix).getTime();
                    param = {
                      uid: uid,
                      userId: uid,
                      address: this.selectedAddress,
                      createdAt: created,
                      booking_id: id.toString(),
                      member_id: this.selectedMember,
                      booking_date: this.booking_date,
                      booking_time: this.booking_time,
                      address_text: this.address_text,
                      lab_id: this.cart.id,
                      Lvid: this.cart.id,
                      coupon_code: this.couponCode,
                      discount_amount: this.promotion,
                      gst: 0,
                      mrp_price: this.mrp_price,
                      discount_on_mrp: this.discount_on_mrp,
                      total: this.total,
                      grand_total: this.grand_total,
                      status: 0,
                      test_data: this.cart.test_data,
                      collection_mode: this.collection_mode,
                      payment_type: 'Cash',
                      covid_declaration: this.declaration,
                      deliveryAmount: this.deliveryAmount,
                      isRate: 0,
                      unixtimestamp: unixtimestamp,
                      transactionid: ''
                    };
                    console.log(param);
                    _context9.next = 14;
                    return this.api.addBookings(id.toString(), param).then(function (userData) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this16, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee8() {
                        return regeneratorRuntime.wrap(function _callee8$(_context8) {
                          while (1) {
                            switch (_context8.prev = _context8.next) {
                              case 0:
                                localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])({}));
                                this.sendSMS();
                                this.util.hide(); // coupon start 

                                this.coupon();
                                this.addCashbackTransaction(id.toString()); // coupon end

                                localStorage.setItem('bookingid', this.booking_id);
                                this.router.navigate(['/summary']);

                              case 7:
                              case "end":
                                return _context8.stop();
                            }
                          }
                        }, _callee8, this);
                      }));
                    }).catch(function (err) {
                      if (err) {
                        _this16.util.hide();

                        console.log(err);

                        _this16.util.showToast("".concat(err), 'danger', 'bottom');
                      }
                    });

                  case 14:
                  case "end":
                    return _context9.stop();
                }
              }
            }, _callee9, this);
          }));
        }
      }, {
        key: "sendSMS",
        value: function sendSMS() {
          var url = 'https://demo.orgmachine.com/way2lab_sms/order_placed.php?mobile=' + this.profile.phone + '&name=' + this.profile.name + '&orderid=' + this.booking_id + '&labname=' + this.cart.name;
          console.log(url);
          this.api.sendSms(url).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            // this.util.hide();
            console.log('err', error);
          });
        }
      }, {
        key: "payWithRazorpay",
        value: function payWithRazorpay(payment_id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee12() {
            var _this17 = this;

            var id, id2, uid, date, createdOn, dateunix, unixtimestamp, param;
            return regeneratorRuntime.wrap(function _callee12$(_context12) {
              while (1) {
                switch (_context12.prev = _context12.next) {
                  case 0:
                    this.util.show('Please wait....');
                    id = Math.floor(100000000 + Math.random() * 900000000);
                    id2 = Math.floor(100000000 + Math.random() * 900000000);
                    this.booking_id = id.toString();
                    uid = sessionStorage.getItem('uid');
                    date = new Date();
                    createdOn = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A"); // let userId = '/users/'+uid;

                    dateunix = new Date();
                    unixtimestamp = new Date(dateunix).getTime();
                    param = {
                      uid: uid,
                      userId: uid,
                      address: this.selectedAddress,
                      createdAt: createdOn,
                      booking_id: id.toString(),
                      member_id: this.selectedMember,
                      booking_date: this.booking_date,
                      booking_time: this.booking_time,
                      address_text: this.address_text,
                      lab_id: this.cart.id,
                      Lvid: this.cart.id,
                      coupon_code: this.couponCode,
                      discount_amount: this.promotion,
                      gst: 0,
                      mrp_price: this.mrp_price,
                      discount_on_mrp: this.discount_on_mrp,
                      total: this.total,
                      grand_total: this.grand_total,
                      status: 0,
                      test_data: this.cart.test_data,
                      collection_mode: this.collection_mode,
                      payment_type: 'Online',
                      payment_id: payment_id,
                      covid_declaration: this.declaration,
                      isRate: 0,
                      transactionid: payment_id,
                      unixtimestamp: unixtimestamp,
                      deliveryAmount: this.deliveryAmount
                    };
                    console.log(param);
                    console.log('payment_id: ' + payment_id);
                    this.api.addBookings(id.toString(), param).then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this17, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee11() {
                        var _this18 = this;

                        var uid, date, createdAt, id, params;
                        return regeneratorRuntime.wrap(function _callee11$(_context11) {
                          while (1) {
                            switch (_context11.prev = _context11.next) {
                              case 0:
                                console.log(data);
                                localStorage.setItem('cartdata', Object(flatted__WEBPACK_IMPORTED_MODULE_12__["stringify"])({}));
                                this.sendSMS();
                                this.coupon();
                                this.addCashbackTransaction(this.booking_id);
                                uid = sessionStorage.getItem('uid');
                                date = new Date();
                                createdAt = moment__WEBPACK_IMPORTED_MODULE_13__(date).format("YYYY-MM-DD hh:mm:ss A");
                                id = Math.floor(100000000 + Math.random() * 900000000);
                                params = {
                                  transactionid: payment_id,
                                  id: id.toString(),
                                  createdAt: createdAt,
                                  amount: this.grand_total,
                                  status: 'success',
                                  uid: uid,
                                  booking_id: this.booking_id,
                                  type: 'Booking'
                                };
                                this.api.addTransaction(id.toString(), params).then(function (data) {
                                  return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this18, void 0, void 0,
                                  /*#__PURE__*/
                                  regeneratorRuntime.mark(function _callee10() {
                                    return regeneratorRuntime.wrap(function _callee10$(_context10) {
                                      while (1) {
                                        switch (_context10.prev = _context10.next) {
                                          case 0:
                                            console.log(data);
                                            this.util.hide();
                                            localStorage.setItem('bookingid', this.booking_id);
                                            this.router.navigate(['/summary']);

                                          case 4:
                                          case "end":
                                            return _context10.stop();
                                        }
                                      }
                                    }, _callee10, this);
                                  }));
                                }).catch(function (err) {
                                  if (err) {
                                    _this18.util.hide();

                                    console.log(err);

                                    _this18.util.showToast("".concat(err), 'danger', 'bottom');
                                  }
                                });

                              case 11:
                              case "end":
                                return _context11.stop();
                            }
                          }
                        }, _callee11, this);
                      }));
                    }).catch(function (err) {
                      if (err) {
                        _this17.util.hide();

                        console.log(err);

                        _this17.util.showToast("".concat(err), 'danger', 'bottom');
                      }
                    });

                  case 13:
                  case "end":
                    return _context12.stop();
                }
              }
            }, _callee12, this);
          }));
        }
      }, {
        key: "proceed",
        value: function proceed() {
          this.grand_total = this.total - this.promotion + this.deliveryAmount;
          this.RAZORPAY_OPTIONS = {
            description: 'Lab Test Booking',
            image: this.url,
            currency: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].general.code,
            key: src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].razorpay.api_key,
            amount: this.grand_total * 100,
            name: 'Way2Lab',
            prefill: {
              name: this.profile.name,
              email: this.profile.email,
              contact: this.profile.phone
            },
            theme: {
              color: '#2ea2cc'
            },
            modal: {
              ondismiss: function ondismiss() {
                console.log('dismissed');
              }
            }
          };
          console.log(this.RAZORPAY_OPTIONS); //this.RAZORPAY_OPTIONS.amount = 100 + '00';
          // binding this object to both success and dismiss handler

          this.RAZORPAY_OPTIONS['handler'] = this.razorPaySuccessHandler.bind(this); // this.showPopup();

          var razorpay = new Razorpay(this.RAZORPAY_OPTIONS);
          razorpay.open();
        }
      }, {
        key: "razorPaySuccessHandler",
        value: function razorPaySuccessHandler(response) {
          console.log(response);

          if (response.razorpay_payment_id) {
            this.payWithRazorpay(response.razorpay_payment_id);
          } else {
            this.util.showToast("Some error occured !!", 'danger', 'bottom');
          }

          this.razorpayResponse = 'Razorpay Response';
          this.showModal = true;
          this.cd.detectChanges();
          document.getElementById('razorpay-response').style.display = 'block';
        }
      }]);

      return CartPage;
    }();

    CartPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_11__["ExternalLibraryService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    CartPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cart/cart.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.page.scss */
      "./src/app/pages/cart/cart.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_razorpay__WEBPACK_IMPORTED_MODULE_11__["ExternalLibraryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], CartPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cart-cart-module-es5.js.map