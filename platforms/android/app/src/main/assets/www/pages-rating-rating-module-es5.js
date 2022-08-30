function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-rating-rating-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesRatingRatingPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content  class=\"ion-padding\">\n\t<div class=\"container\"> \n    <div class=\"row\"><div class=\"col-md-12 col-lg-12 col-xl-12\" style=\"display: inline-flex;\">\n      <div class=\"col-md-12 col-lg-6 col-xl-6\">\n        <div class=\"stepOne\">\n        \t<form [formGroup]=\"rateForm\">\n\t        \t<ion-item class=\"active\">\n\t\t          <h3 class=\"heading\">Feedback Form</h3>\n\t\t        </ion-item>\n\t\t        <div class=\"rating-form\">\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t        <div class=\"text\"><b>Price</b></div>\n\t\t\t        \t<ionic5-star-rating #price\n\t\t\t\t\t\t      activeIcon = \"star\"\n\t\t\t\t\t\t      defaultIcon = \"star-outline\"\n\t\t\t\t\t\t      activeColor = \"#439213\" \n\t\t\t\t\t\t      defaultColor = \"black\"\n\t\t\t\t\t\t      formControlName = price\n\t\t\t\t\t\t      readonly = \"false\"\n\t\t\t\t\t\t      [rating] = price\n\t\t\t\t\t\t      fontSize = \"16px\"\n\t\t\t\t\t\t      (ratingChanged)=\"logPriceRating($event)\">\n\t\t\t\t\t\t    </ionic5-star-rating>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t        <div><b>Lab Slot Timing</b></div>\n\t\t\t        \t<ionic5-star-rating #lab\n\t\t\t\t\t\t      activeIcon = \"star\"\n\t\t\t\t\t\t      defaultIcon = \"star-outline\"\n\t\t\t\t\t\t      activeColor = \"#439213\" \n\t\t\t\t\t\t      defaultColor = \"black\"\n\t\t\t\t\t\t      formControlName = lab\n\t\t\t\t\t\t      readonly = \"false\"\n\t\t\t\t\t\t      [rating] = lab\n\t\t\t\t\t\t      fontSize = \"16px\"\n\t\t\t\t\t\t      (ratingChanged)=\"logLabRating($event)\">\n\t\t\t\t\t\t    </ionic5-star-rating>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t        <div><b>Sample Collection Process</b></div>\n\t\t\t        \t<ionic5-star-rating #sample\n\t\t\t\t\t\t      activeIcon = \"star\"\n\t\t\t\t\t\t      defaultIcon = \"star-outline\"\n\t\t\t\t\t\t      activeColor = \"#439213\" \n\t\t\t\t\t\t      defaultColor = \"black\"\n\t\t\t\t\t\t      formControlName = sample\n\t\t\t\t\t\t      readonly = \"false\"\n\t\t\t\t\t\t      [rating] = sample\n\t\t\t\t\t\t      fontSize = \"16px\"\n\t\t\t\t\t\t      (ratingChanged)=\"logSampleRating($event)\">\n\t\t\t\t\t\t    </ionic5-star-rating>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t        <div><b>Report Result Quality</b></div>\n\t\t\t        \t<ionic5-star-rating #report\n\t\t\t\t\t\t      activeIcon = \"star\"\n\t\t\t\t\t\t      defaultIcon = \"star-outline\"\n\t\t\t\t\t\t      activeColor = \"#439213\" \n\t\t\t\t\t\t      defaultColor = \"black\"\n\t\t\t\t\t\t      formControlName = report\n\t\t\t\t\t\t      readonly = \"false\"\n\t\t\t\t\t\t      [rating] = report\n\t\t\t\t\t\t      fontSize = \"16px\"\n\t\t\t\t\t\t      (ratingChanged)=\"logReportRating($event)\">\n\t\t\t\t\t\t    </ionic5-star-rating>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t        <div><b>Over all Booking Experience</b></div>\n\t\t\t        \t<ionic5-star-rating #booking\n\t\t\t\t\t\t      activeIcon = \"star\"\n\t\t\t\t\t\t      defaultIcon = \"star-outline\"\n\t\t\t\t\t\t      activeColor = \"#439213\" \n\t\t\t\t\t\t      defaultColor = \"black\"\n\t\t\t\t\t\t      readonly = \"false\"\n\t\t\t\t\t\t      formControlName = booking\n\t\t\t\t\t\t      [rating] = booking\n\t\t\t\t\t\t      fontSize = \"16px\"\n\t\t\t\t\t\t      (ratingChanged)=\"logBookingRating($event)\">\n\t\t\t\t\t\t    </ionic5-star-rating>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <div class=\"star\">\n\t\t\t\t\t\t  \t<div><b>Comment (Optional)</b></div>\n\t\t\t\t\t\t  \t<ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" placeholder=\"Eg: Lab test service is excellent..\" auto-grow=\"true\" [(ngModel)]=\"remark\" formControlName=\"comment\"></ion-textarea>\n\t\t\t\t\t\t  </div>\n\t\t\t\t\t\t  <ion-button (click)=\"submit()\" expand=\"block\" [disabled]=\"rateForm.get('price').invalid || rateForm.get('lab').invalid || rateForm.get('sample').invalid || rateForm.get('report').invalid || rateForm.get('booking').invalid\">\n\t\t\t\t\t\t      Submit\n\t\t\t\t\t\t  </ion-button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n    \t</div>\n    \t<div class=\"col-md-12 col-lg-6 col-xl-6\">\n\t      <div class=\"stepTwo\">\n\t        <ion-item class=\"active\">\n\t          <h3 class=\"heading\">Booking Details</h3>\n\t        </ion-item>\n\t        <div class=\"right-part\">\n\t          <h3><b>Booking Id: {{detail?.booking_id}}</b></h3>\n\t          <h1>{{lab_detail?.name}}</h1>\n\t          <p><small *ngFor=\"let i of detail?.test_data\">{{i.itid.test_name}}</small> <span style=\"float: right;\">₹ {{detail?.mrp_price}}</span></p>\n\t          <div class=\"patient-count\" *ngIf=\"detail?.member_id.length !==0\"><img src=\"assets/patient.PNG\"><span> {{detail?.member_id.length}} patients</span></div>\n\t        </div>\n\t        <div class=\"right-part\">\n\t          <div class=\"split-para\">M.R.P. Total <span>₹{{detail?.mrp_price}}</span></div>\n\t          <div class=\"split-para\">Price Discount <span>- ₹{{detail?.discount_on_mrp}}</span></div>\n\t          <div class=\"split-para\">Total Price <span>- ₹{{detail?.total}}</span></div>\n\t          <div class=\"split-para\" *ngIf=\"detail?.coupon_code != ''\">Coupon Discount <span>- ₹{{detail?.coupon}}</span></div>\n\t          <div class=\"final-para\">AMOUNT PAID <span>₹{{detail?.grand_total}}</span></div>\n\t        </div>\n\t      </div>\n\t    </div>\n  \t</div>\n\t</div>\n</div>\n\t<!-- <div class=\"top\">\n\t\t<ion-item style=\"--padding-start: 0px;\">\n\t      <ion-avatar slot=\"start\" class=\"product_img\">\n\t        <img [src]=\"item_image\">\n\t      </ion-avatar>\n\t      <ion-label text-wrap style=\"padding: 0px 10px 0px 10px;\">\n\t        <h2 style=\"font-size: 12px;\"><b>{{item_name}}</b></h2>   \n\t      </ion-label>\n\t    </ion-item>\n\t</div>\n\t<div class=\"star-rating\">\n\t\t<ionic5-star-rating #rating\n\t        activeIcon = \"star\"\n\t        defaultIcon = \"star-outline\"\n\t        activeColor = \"#439213\" \n\t        defaultColor = \"black\"\n\t        readonly = \"false\"\n\t        [rating] = rating\n\t        fontSize = \"12px\"\n\t        (ratingChanged)=\"logRatingChange($event)\">\n\t    </ionic5-star-rating>\n\t    <h1>{{heading}}</h1>\n\t</div>\n\t<div class=\"recommendation\">\n    <p>Based on the taste & quality of the product, would you recommend it to other</p>\n\t    <ion-grid>\n\t    \t<ion-row>\n\t    \t\t<ion-col class=\"col-chip\">\n\t\t    \t\t<ion-chip  (click)=\"tap(0)\" [ngClass]=\"{'colored': first}\">\n\t\t\t\t\t  <ion-label>Yes</ion-label>\n\t\t\t\t\t</ion-chip>\n\t    \t\t</ion-col>\n\t    \t\t<ion-col>\n\t\t    \t\t<ion-chip  (click)=\"tap(1)\" [ngClass]=\"{'colored': second}\">\n\t\t\t\t\t  <ion-label>No</ion-label>\n\t\t\t\t\t</ion-chip>\n\t    \t\t</ion-col>\n\t    \t</ion-row>\n\t    </ion-grid>\n\t</div>\n\t<div class=\"form\">\n\t\t<p>Title</p>\n\t    <ion-item>\n\t\t  \t<ion-input placeholder=\"Eg: Awesome product..\" [(ngModel)]=\"title\"></ion-input>\n\t    </ion-item>\n\t    <p>Product Review</p>\n\t    <ion-item>\n\t\t  \t<ion-textarea class=\"textarea\" rows=\"3\" cols=\"20\" placeholder=\"Eg: I like this product because..\" auto-grow=\"true\" [(ngModel)]=\"remark\"></ion-textarea>\n\t    </ion-item>\n\t</div> -->\n\t<app-footer></app-footer>\n</ion-content>\n<!-- <ion-footer class=\"ion-no-border\">\n  <ion-button (click)=\"submit()\" expand=\"block\" [disabled]=\"!isEnabled\">\n      Submit\n  </ion-button>\n</ion-footer> -->";
    /***/
  },

  /***/
  "./src/app/pages/rating/rating-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/rating/rating-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: RatingPageRoutingModule */

  /***/
  function srcAppPagesRatingRatingRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingPageRoutingModule", function () {
      return RatingPageRoutingModule;
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


    var _rating_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./rating.page */
    "./src/app/pages/rating/rating.page.ts");

    var routes = [{
      path: '',
      component: _rating_page__WEBPACK_IMPORTED_MODULE_3__["RatingPage"]
    }];

    var RatingPageRoutingModule = function RatingPageRoutingModule() {
      _classCallCheck(this, RatingPageRoutingModule);
    };

    RatingPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], RatingPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/rating/rating.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/rating/rating.module.ts ***!
    \***********************************************/

  /*! exports provided: RatingPageModule */

  /***/
  function srcAppPagesRatingRatingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingPageModule", function () {
      return RatingPageModule;
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


    var _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./rating-routing.module */
    "./src/app/pages/rating/rating-routing.module.ts");
    /* harmony import */


    var _rating_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./rating.page */
    "./src/app/pages/rating/rating.page.ts");
    /* harmony import */


    var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ionic5-star-rating */
    "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var RatingPageModule = function RatingPageModule() {
      _classCallCheck(this, RatingPageModule);
    };

    RatingPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _rating_routing_module__WEBPACK_IMPORTED_MODULE_5__["RatingPageRoutingModule"], ionic5_star_rating__WEBPACK_IMPORTED_MODULE_7__["StarRatingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_rating_page__WEBPACK_IMPORTED_MODULE_6__["RatingPage"]]
    })], RatingPageModule);
    /***/
  },

  /***/
  "./src/app/pages/rating/rating.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/rating/rating.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesRatingRatingPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #f5f5f5;\n}\nion-content ion-row ion-item {\n  --border-color: transparent;\n}\nion-content .stepOne .rating-form {\n  padding: 16px;\n  background: white;\n  margin: 16px 0px;\n  border: 1px solid #d4d6d7;\n}\nion-content .stepOne .rating-form .star {\n  padding: 10px 0px;\n}\nion-content .stepOne .rating-form .text {\n  padding: 0px;\n}\nion-content .stepOne ion-list {\n  margin: 10px 0px;\n}\nion-content .stepOne h3 {\n  margin: 0px;\n  font-size: 18px;\n}\nion-content .stepOne span {\n  float: right;\n  color: red;\n  font-weight: bold;\n}\nion-content .active {\n  --padding-start: 24px;\n  --background: var(--ion-color-primary);\n  color: white;\n  --border-color: transparent;\n  box-shadow: 0 0 3px 0 var(--ion-color-medium);\n}\nion-content .active ion-icon {\n  color: white;\n  margin: 0;\n}\nion-content .error {\n  color: red;\n  font-size: 10px;\n  padding-left: 16px;\n}\nion-content p {\n  color: var(--ion-color-primary);\n  padding-left: 16px;\n  margin-bottom: 0px;\n}\nion-content p span {\n  float: right;\n  padding-right: 16px;\n  color: red;\n  font-weight: bold;\n}\nion-content .info {\n  border-bottom: 1px solid #f5f5f5;\n}\nion-content .info ion-item {\n  --border-color: transparent;\n}\nion-content .btn_class {\n  text-transform: capitalize;\n  font-weight: bold;\n  float: left;\n  --border-radius: 25px;\n  margin: 0px 0px 20px;\n}\nion-content .stepTwo {\n  /*  img{\n        width: 35px;\n    }*/\n}\nion-content .stepTwo h3 {\n  margin: 0px;\n  font-size: 18px;\n}\nion-content .stepTwo .right-part {\n  padding: 16px;\n  border: 1px solid #d4d6d7;\n  background: white;\n  margin: 16px 0px;\n}\nion-content .stepTwo .right-part .patient-count {\n  padding: 14px 0px 0px;\n  display: -webkit-box;\n  display: flex;\n}\nion-content .stepTwo .right-part .patient-count img {\n  width: 30px;\n}\nion-content .stepTwo .right-part .patient-count span {\n  color: red;\n  font-size: 14px;\n  margin: 4px 0px 0px 16px;\n}\nion-content .stepTwo .right-part ion-item {\n  --border-color: transparent;\n}\nion-content .stepTwo .right-part .split-para {\n  margin: 10px;\n  font-weight: normal;\n}\nion-content .stepTwo .right-part .split-para span {\n  float: right;\n  margin-left: 10px;\n  font-weight: normal;\n}\nion-content .stepTwo .right-part .final-para {\n  margin: 10px;\n  font-weight: bold;\n}\nion-content .stepTwo .right-part .final-para span {\n  float: right;\n  margin-left: 10px;\n  font-weight: bold;\n}\nion-content .stepTwo p {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n  padding-left: 0px;\n}\nion-content h1 {\n  margin: 10px 0px;\n  font-size: 14px;\n}\nion-content .textarea {\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  font-size: 14px;\n  margin-top: 0px;\n  color: #000;\n  background: white;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmF0aW5nL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXHJhdGluZ1xccmF0aW5nLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFnQ0kscUJBQUE7QUM5Qko7QURBUTtFQUNJLDJCQUFBO0FDRVo7QURHUTtFQUNJLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUNEWjtBREVZO0VBQ0ksaUJBQUE7QUNBaEI7QURFWTtFQUNJLFlBQUE7QUNBaEI7QURHUTtFQUNJLGdCQUFBO0FDRFo7QURHUTtFQUFHLFdBQUE7RUFDQSxlQUFBO0FDQVg7QURFUTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNBWjtBRElJO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtFQUNBLDZDQUFBO0FDRlI7QURHUTtFQUNJLFlBQUE7RUFBYSxTQUFBO0FDQXpCO0FER0k7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDRFI7QURHSTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ0RSO0FERVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7QUNBWjtBREdJO0VBQ0ksZ0NBQUE7QUNEUjtBREVRO0VBQ0ksMkJBQUE7QUNBWjtBREdJO0VBQ0ksMEJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0FDRFI7QURHSTtFQThCRTs7TUFBQTtBQzVCTjtBRERZO0VBQ0ksV0FBQTtFQUNELGVBQUE7QUNHZjtBRERRO0VBZ0JJLGFBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUNaWjtBRE5ZO0VBQ1EscUJBQUE7RUFDSixvQkFBQTtFQUFBLGFBQUE7QUNRaEI7QURQZ0I7RUFDSSxXQUFBO0FDU3BCO0FEUGdCO0VBQ0ksVUFBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtBQ1NwQjtBRE5ZO0VBQ0ksMkJBQUE7QUNRaEI7QURGWTtFQUFjLFlBQUE7RUFBWSxtQkFBQTtBQ010QztBRExZO0VBQW1CLFlBQUE7RUFBWSxpQkFBQTtFQUFrQixtQkFBQTtBQ1U3RDtBRFRZO0VBQWMsWUFBQTtFQUFZLGlCQUFBO0FDYXRDO0FEWlk7RUFBbUIsWUFBQTtFQUFZLGlCQUFBO0VBQWtCLGlCQUFBO0FDaUI3RDtBRFpRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FDY1o7QURYSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ2FSO0FEWEk7RUFDRyx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ2FQIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmF0aW5nL3JhdGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICBpb24tcm93IHtcbiAgICAgICAgaW9uLWl0ZW0ge1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN0ZXBPbmV7XG4gICAgICAgIC5yYXRpbmctZm9ybXtcbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmQ3O1xuICAgICAgICAgICAgLnN0YXJ7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGV4dHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW9uLWxpc3R7XG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgICAgICB9XG4gICAgICAgIGgze21hcmdpbjogMHB4O1xuICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAtLWJhY2tncm91bmQ6ICAjZjVmNWY1O1xuICAgIC5hY3RpdmUge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDI0cHg7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCAwIHZhcigtLWlvbi1jb2xvci1tZWRpdW0pO1xuICAgICAgICBpb24taWNvbntcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTttYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICB9IFxuICAgIC5lcnJvciB7XG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAwLCAwKTtcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gICAgfVxuICAgIHB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMTZweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBzcGFue1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaW5mb3tcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIGlvbi1pdGVte1xuICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbiAgICAuYnRuX2NsYXNze1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAtLWJvcmRlci1yYWRpdXM6IDI1cHg7XG4gICAgICAgIG1hcmdpbjogMHB4IDBweCAyMHB4O1xuICAgIH1cbiAgICAuc3RlcFR3b3tcbiAgICAgICAgICAgIGgze1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAucmlnaHQtcGFydHtcbiAgICAgICAgICAgIC5wYXRpZW50LWNvdW50e1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDBweCAwcHg7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBpbWd7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNHB4IDBweCAwcHggMTZweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpb24taXRlbSB7XG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6ICB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhZGRpbmc6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDRkNmQ3O1xuICAgICAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgICAgICBtYXJnaW46IDE2cHggMHB4O1xuICAgICAgICAgICAgLnNwbGl0LXBhcmEgeyBtYXJnaW46MTBweDtmb250LXdlaWdodDogbm9ybWFsO31cbiAgICAgICAgICAgIC5zcGxpdC1wYXJhIHNwYW4geyBmbG9hdDpyaWdodDttYXJnaW4tbGVmdDoxMHB4OyBmb250LXdlaWdodDogbm9ybWFsO31cbiAgICAgICAgICAgIC5maW5hbC1wYXJhIHsgbWFyZ2luOjEwcHg7Zm9udC13ZWlnaHQ6IGJvbGQ7fVxuICAgICAgICAgICAgLmZpbmFsLXBhcmEgc3BhbiB7IGZsb2F0OnJpZ2h0O21hcmdpbi1sZWZ0OjEwcHg7IGZvbnQtd2VpZ2h0OiBib2xkO31cbiAgICAgICAgfVxuICAgICAgLyogIGltZ3tcbiAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICB9Ki9cbiAgICAgICAgcHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaDF7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gICAgLnRleHRhcmVhIHtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgY29sb3I6IzAwMDtcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH0gXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5pb24tY29udGVudCBpb24tcm93IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBPbmUgLnJhdGluZy1mb3JtIHtcbiAgcGFkZGluZzogMTZweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbjogMTZweCAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ2ZDc7XG59XG5pb24tY29udGVudCAuc3RlcE9uZSAucmF0aW5nLWZvcm0gLnN0YXIge1xuICBwYWRkaW5nOiAxMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIC5yYXRpbmctZm9ybSAudGV4dCB7XG4gIHBhZGRpbmc6IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIGlvbi1saXN0IHtcbiAgbWFyZ2luOiAxMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIGgzIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwT25lIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmFjdGl2ZSB7XG4gIC0tcGFkZGluZy1zdGFydDogMjRweDtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3gtc2hhZG93OiAwIDAgM3B4IDAgdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG59XG5pb24tY29udGVudCAuYWN0aXZlIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW46IDA7XG59XG5pb24tY29udGVudCAuZXJyb3Ige1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDEwcHg7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cbmlvbi1jb250ZW50IHAge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbmlvbi1jb250ZW50IHAgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogMTZweDtcbiAgY29sb3I6IHJlZDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAuaW5mbyB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xufVxuaW9uLWNvbnRlbnQgLmluZm8gaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuYnRuX2NsYXNzIHtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmbG9hdDogbGVmdDtcbiAgLS1ib3JkZXItcmFkaXVzOiAyNXB4O1xuICBtYXJnaW46IDBweCAwcHggMjBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIHtcbiAgLyogIGltZ3tcbiAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgfSovXG59XG5pb24tY29udGVudCAuc3RlcFR3byBoMyB7XG4gIG1hcmdpbjogMHB4O1xuICBmb250LXNpemU6IDE4cHg7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAucmlnaHQtcGFydCB7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkNGQ2ZDc7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBtYXJnaW46IDE2cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgLnBhdGllbnQtY291bnQge1xuICBwYWRkaW5nOiAxNHB4IDBweCAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAucmlnaHQtcGFydCAucGF0aWVudC1jb3VudCBpbWcge1xuICB3aWR0aDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IC5wYXRpZW50LWNvdW50IHNwYW4ge1xuICBjb2xvcjogcmVkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogNHB4IDBweCAwcHggMTZweDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgLnN0ZXBUd28gLnJpZ2h0LXBhcnQgLnNwbGl0LXBhcmEge1xuICBtYXJnaW46IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG59XG5pb24tY29udGVudCAuc3RlcFR3byAucmlnaHQtcGFydCAuc3BsaXQtcGFyYSBzcGFuIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IC5maW5hbC1wYXJhIHtcbiAgbWFyZ2luOiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIC5yaWdodC1wYXJ0IC5maW5hbC1wYXJhIHNwYW4ge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5zdGVwVHdvIHAge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuaW9uLWNvbnRlbnQgaDEge1xuICBtYXJnaW46IDEwcHggMHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5pb24tY29udGVudCAudGV4dGFyZWEge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICBib3JkZXItcmFkaXVzOiA1cHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/rating/rating.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/rating/rating.page.ts ***!
    \*********************************************/

  /*! exports provided: RatingPage */

  /***/
  function srcAppPagesRatingRatingPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RatingPage", function () {
      return RatingPage;
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angularfire2/firestore */
    "./node_modules/angularfire2/firestore/index.js");
    /* harmony import */


    var angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var RatingPage =
    /*#__PURE__*/
    function () {
      function RatingPage(api, util, router, alertCtrl, adb, route, navCtrl, formBuilder) {
        _classCallCheck(this, RatingPage);

        this.api = api;
        this.util = util;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.adb = adb;
        this.route = route;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.price = 0;
        this.lab = 0;
        this.sample = 0;
        this.report = 0;
        this.booking = 0;
        this.remark = '';
        this.rateForm = this.formBuilder.group({
          price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          lab: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          sample: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          report: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].maxLength(6)]],
          booking: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
          comment: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.getBooking(this.booking_id);
      }

      _createClass(RatingPage, [{
        key: "getBooking",
        value: function getBooking(id) {
          var _this = this;

          this.api.getBookingById(id).then(function (data) {
            _this.detail = data[0];

            _this.getSecondaryLab(_this.detail.lab_id);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getSecondaryLab",
        value: function getSecondaryLab(id) {
          var _this2 = this;

          this.api.getSecondaryLabById(id).then(function (data) {
            _this2.lab_detail = data[0];
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "logPriceRating",
        value: function logPriceRating(rating) {
          this.price = rating;
        }
      }, {
        key: "logLabRating",
        value: function logLabRating(rating) {
          this.lab = rating;
        }
      }, {
        key: "logSampleRating",
        value: function logSampleRating(rating) {
          this.sample = rating;
        }
      }, {
        key: "logReportRating",
        value: function logReportRating(rating) {
          this.report = rating;
        }
      }, {
        key: "logBookingRating",
        value: function logBookingRating(rating) {
          this.booking = rating;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "submit",
        value: function submit() {
          var _this3 = this;

          this.util.show('Please wait....');
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            createdAt: createdAt,
            id: id,
            booking_id: this.booking_id,
            booking: this.booking_id,
            booking_exp: this.booking,
            collection_process: this.sample,
            price: this.price,
            result_quality: this.report,
            slot_timing: this.lab,
            comment: this.remark,
            lab_id: this.lab_detail.uid,
            lab: this.lab_detail.uid,
            product_id: '',
            user: uid,
            uid: uid,
            status: 0
          };
          console.log(param);
          this.api.addReview(id.toString(), param).then(function (response) {
            var param = {
              updatedAt: createdAt,
              isRate: 1
            };

            _this3.api.updateBooking(_this3.booking_id, param).then(function (response) {
              console.log(response);

              _this3.util.hide();

              _this3.alert();
            }).catch(function (err) {
              if (err) {
                _this3.util.hide();

                console.log(err);

                _this3.util.showToast("".concat(err), 'danger', 'bottom');
              }
            });
          }).catch(function (err) {
            if (err) {
              _this3.util.hide();

              console.log(err);

              _this3.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "alert",
        value: function alert() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this4 = this;

            var mobile, alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    mobile = localStorage.getItem('mobile');
                    _context.next = 3;
                    return this.alertCtrl.create({
                      header: 'Confirm',
                      message: '<strong>Thanks for your valuable feedback</strong>',
                      mode: 'ios',
                      backdropDismiss: false,
                      buttons: [{
                        text: 'Ok',
                        cssClass: 'login-button',
                        handler: function handler() {
                          // this.navCtrl.back();
                          _this4.router.navigate(['/bookings']);
                        }
                      }]
                    });

                  case 3:
                    alert = _context.sent;
                    alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return RatingPage;
    }();

    RatingPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"]
      }, {
        type: angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }];
    };

    RatingPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rating',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rating.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/rating/rating.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rating.page.scss */
      "./src/app/pages/rating/rating.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["AlertController"], angularfire2_firestore__WEBPACK_IMPORTED_MODULE_7__["AngularFirestore"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], _ionic_angular__WEBPACK_IMPORTED_MODULE_8__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])], RatingPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-rating-rating-module-es5.js.map