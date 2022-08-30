function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-diagnostic-lab-diagnostic-lab-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diagnostic-lab/diagnostic-lab.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diagnostic-lab/diagnostic-lab.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesDiagnosticLabDiagnosticLabPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">  \n  <div class=\"row\">\n    <div class=\"col-xl-12 col-md-12 col-sm-10 mx-auto\">\n        <!-- Profile widget -->\n        <div class=\"bg-white shadow rounded overflow-hidden\">\n          <div class=\"\">\n      <img [src]=\"lab_detail?.cover\">\n                <div class=\"media align-items-end profile-header ml-4\">\n                    <div class=\"profile mr-3\"><img [src]=\"lab_detail?.primary.logo\" alt=\"...\" width=\"150\" class=\"mb-2 img-thumbnail\"></div>\n                    <div class=\"media-body mb-2\">\n                        <h4 class=\"mt-0 mb-0\">{{lab_detail?.name}}</h4>\n                        <!-- <p class=\"small mb-4\"> <i class=\"fa fa-map-marker mr-2\"></i>{{lab_detail?.restid.about}}</p> -->\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"px-4\">\n                <!--div class=\"row\">\n                    <div class=\"col-lg-6 mb-2 pr-lg-1\"><img src=\"https://bootstrapious.com/i/snippets/sn-profile/img-3.jpg\" alt=\"\" class=\"img-fluid rounded shadow-sm\"></div>\n                    <div class=\"col-lg-6 mb-2 pl-lg-1\"><img src=\"https://bootstrapious.com/i/snippets/sn-profile/img-4.jpg\" alt=\"\" class=\"img-fluid rounded shadow-sm\"></div>\n                    <div class=\"col-lg-6 pr-lg-1 mb-2\"><img src=\"https://bootstrapious.com/i/snippets/sn-profile/img-5.jpg\" alt=\"\" class=\"img-fluid rounded shadow-sm\"></div>\n                    <div class=\"col-lg-6 pl-lg-1\"><img src=\"https://bootstrapious.com/i/snippets/sn-profile/img-6.jpg\" alt=\"\" class=\"img-fluid rounded shadow-sm\"></div>\n                </div-->\n                <div class=\"\">                  \n                    <div class=\"p-4 bg-light rounded shadow-sm\">\n                        <p class=\"text-justify mb-0\" [innerHtml]=\"lab_detail?.about\"></p>                      \n                    </div>\n                </div>\n            </div>\n        </div><!-- End profile widget -->\n    </div>\n</div>\n<div class=\"foursec\"> \n<div class=\"row\">\n    <div class=\"col-xl-3 col-md-3 col-sm-12\">\n  <div class=\"ct-fancy-box ct-fancy-box-layout1 wow fadeInUp\" data-wow-delay=\"ms\" style=\"visibility: visible; animation-name: fadeInUp;\">\n  <div class=\"item--inner bg-image\">\n  <div class=\"item--icon icon-psb\"> \n  <ion-icon name=\"map\" style=\"font-size: 24px;color: #007c9d;\"></ion-icon>\n  </div>\n  <h4 class=\"item--title\"> Address</h4>\n  <div class=\"item--description\">{{lab_detail?.address}}</div></div></div>\n  </div>\n  <div class=\"col-xl-3 col-md-3 col-sm-12\">\n  <div class=\"ct-fancy-box ct-fancy-box-layout1 wow fadeInUp\" data-wow-delay=\"ms\" style=\"visibility: visible; animation-name: fadeInUp;\">\n  <div class=\"item--inner bg-image\">\n  <div class=\"item--icon icon-psb\"> \n  <ion-icon name=\"trophy\" style=\"font-size: 24px;color: #007c9d;\"></ion-icon>\n  </div>\n  <h4 class=\"item--title\"> Award</h4>\n  <div class=\"item--description\">{{lab_detail?.award_and_recognition}},<br>\nAccreditations:<br><span *ngFor=\"let item of lab_detail?.accreditation; let i = index;\">{{item.item_text}},&nbsp;&nbsp;</span></div></div></div>\n\n  </div>\n  <div class=\"col-xl-3 col-md-3 col-sm-12\">\n  <div class=\"ct-fancy-box ct-fancy-box-layout1 wow fadeInUp\" style=\"visibility: visible; animation-name: fadeInUp;\">\n  <div class=\"item--inner bg-image\">\n  <div class=\"item--icon icon-psb\"> \n  <ion-icon name=\"star\" style=\"font-size: 24px;color: #007c9d;\"></ion-icon>\n  </div>\n  <h4 class=\"item--title\"> Special Features</h4>\n  <div class=\"item--description\">\n  <ul>\n  <li *ngFor=\"let item of facility\">{{item}}</li>\n  </ul>\n  </div></div></div>\n  </div>\n  \n  <div class=\"col-xl-3 col-md-3 col-sm-12\">\n  <div class=\"ct-fancy-box ct-fancy-box-layout1 wow fadeInUp\" style=\"visibility: visible; animation-name: fadeInUp;\">\n  <div class=\"item--inner bg-image\">\n  <div class=\"item--icon icon-psb\"> \n  <ion-icon name=\"time\" style=\"font-size: 24px;color: #007c9d;\"></ion-icon>\n  </div>\n  <h4 class=\"item--title\">Lab timings</h4>\n  <div class=\"item--description\">\n  <ul>\n  <li *ngFor=\"let item of operational_timing\"><span style=\"width: 60px;display: inline-block;\">{{item.day_name}}:</span> {{item.opening_time}} – {{item.closing_time}}</li>\n  </ul>\n  </div></div></div>\n  </div>\n  \n  </div></div>\n  \n  \n    <div class=\"col-sm-12\" *ngIf =\"reviews.length !==0\">\n    <div class=\"row p-4  m-1 bg-light rounded shadow-sm \">\n    <div class=\"col-xl-6 col-md-6 col-sm-12\">\n        <p class=\"font-italic mb-0\"><b style=\"font-size: 17px;\">Over All Rating</b><br>\n        <ionic5-star-rating\n          #rating\n          activeIcon=\"star\"\n          defaultIcon=\"star-outline\"\n          activeColor=\"#439213\"\n          halfIcon=\"star-half\"\n          halfStar=\"true\"\n          defaultColor=\"black\"\n          readonly=\"true\"\n          [rating]=\"avgrate\"\n          fontSize=\"12px\"\n        >\n        </ionic5-star-rating>\n        <br> {{avgrate}} out of 5<br>\n            {{total_review_count}} total ratings\n        </p>\n            </div>\n            <div class=\"col-xl-6 col-md-6 col-sm-12\">\n            <div class=\"starcat\">\n            <div class=\"starcatf\"><span class=\"font-weight-bold\">Price</span>   \n                <span>     \n                    <ionic5-star-rating\n                          #rating\n                          activeIcon=\"star\"\n                          defaultIcon=\"star-outline\"\n                          activeColor=\"#439213\"\n                          halfIcon=\"star-half\"\n                          halfStar=\"true\"\n                          defaultColor=\"black\"\n                          readonly=\"true\"\n                          [rating]=\"price\"\n                          fontSize=\"12px\"\n                        >\n                    </ionic5-star-rating>\n                </span>\n\t\t\t\t <span>     \n                    \n                    ({{price}})\n                </span>\n            </div>\n            <div class=\"starcatf\"><span class=\"font-weight-bold\">Lab Timing Slots</span>  \n                <span>                        \n                    <ionic5-star-rating\n                          #rating\n                          activeIcon=\"star\"\n                          defaultIcon=\"star-outline\"\n                          activeColor=\"#439213\"\n                          halfIcon=\"star-half\"\n                          halfStar=\"true\"\n                          defaultColor=\"black\"\n                          readonly=\"true\"\n                          [rating]=\"slot_timing\"\n                          fontSize=\"12px\"\n                        >\n                    </ionic5-star-rating>\n\t\t\t\t\t</span>\n\t\t\t\t <span> \n                    ({{slot_timing}})\n                </span>\n            </div>\n            <div class=\"starcatf\"><span class=\"font-weight-bold\">Sample Collection Process</span>  \n                <span>\n                    <ionic5-star-rating\n                      #rating\n                      activeIcon=\"star\"\n                      defaultIcon=\"star-outline\"\n                      activeColor=\"#439213\"\n                      halfIcon=\"star-half\"\n                      halfStar=\"true\"\n                      defaultColor=\"black\"\n                      readonly=\"true\"\n                      [rating]=\"collection_process\"\n                      fontSize=\"12px\"\n                    >\n                    </ionic5-star-rating> \n</span>\n\t\t\t\t <span> \t\t\t\t\t\n                    ({{collection_process}}) \n                </span>\n            </div>\n            <div class=\"starcatf\"><span class=\"font-weight-bold\">Report Result Quality</span>  \n                <span>  \n                    <ionic5-star-rating\n                      #rating\n                      activeIcon=\"star\"\n                      defaultIcon=\"star-outline\"\n                      activeColor=\"#439213\"\n                      halfIcon=\"star-half\"\n                      halfStar=\"true\"\n                      defaultColor=\"black\"\n                      readonly=\"true\"\n                      [rating]=\"result_quality\"\n                      fontSize=\"12px\"\n                    >\n                    </ionic5-star-rating> \n\t\t\t\t\t</span>\n\t\t\t\t <span> \n                    ({{result_quality}})  \n                </span>\n            </div>\n            <div class=\"starcatf\"><span class=\"font-weight-bold\">Over all Booking Experience</span>  \n                <span>    \n                    <ionic5-star-rating\n                      #rating\n                      activeIcon=\"star\"\n                      defaultIcon=\"star-outline\"\n                      activeColor=\"#439213\"\n                      halfIcon=\"star-half\"\n                      halfStar=\"true\"\n                      defaultColor=\"black\"\n                      readonly=\"true\"\n                      [rating]=\"booking_exp\"\n                      fontSize=\"12px\"\n                    >\n                    </ionic5-star-rating> \n\t\t\t\t\t</span>\n\t\t\t\t <span> \n                    ({{booking_exp}})\n                </span>\n            </div>\n\n            </div></div>\n           \n        </div>\n        <div class=\"m-3 p-4 bg-light rounded shadow-sm\" *ngFor=\"let item of reviews\">\n            <p class=\"font-italic mb-0\">\n            <img src=\"assets/noProfile.jpg\" style=\"width: 40px;\"> \n            <span *ngIf=\"item.user !=''\">{{item.user.name}}</span> \n            <span *ngIf=\"item.user ==''\">{{item.user_name}}</span>\n            <br>\n            <span style=\"display: flex;float: left;\">   \n                <ionic5-star-rating\n                  #rating\n                  activeIcon=\"star\"\n                  defaultIcon=\"star-outline\"\n                  activeColor=\"#439213\"\n                  halfIcon=\"star-half\"\n                  halfStar=\"true\"\n                  defaultColor=\"black\"\n                  readonly=\"true\"\n                  [rating]=\"item.booking_exp\"\n                  fontSize=\"12px\"\n                >\n                </ionic5-star-rating>\n\t\t\t\t</span>\n\t\t\t\t <span style=\"display: flex;\"> \n                ({{item.booking_exp}})\n            </span>\n            <b>Reviewed on {{item.createdAt | date}}</b><br></p>\n            <div [innerHTML]=\"item.comment\"></div>\n            \n           \n        </div>\n    </div>\n    <div class=\"col-sm-12\" *ngIf =\"reviews.length ==0\">\n        <h3>Lab Reviews</h3>\n        <p>No reviews</p>\n    </div>\n\t\n\t </div>\n   <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/diagnostic-lab/diagnostic-lab-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/diagnostic-lab/diagnostic-lab-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: DiagnosticLabPageRoutingModule */

  /***/
  function srcAppPagesDiagnosticLabDiagnosticLabRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagnosticLabPageRoutingModule", function () {
      return DiagnosticLabPageRoutingModule;
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


    var _diagnostic_lab_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./diagnostic-lab.page */
    "./src/app/pages/diagnostic-lab/diagnostic-lab.page.ts");

    var routes = [{
      path: '',
      component: _diagnostic_lab_page__WEBPACK_IMPORTED_MODULE_3__["DiagnosticLabPage"]
    }];

    var DiagnosticLabPageRoutingModule = function DiagnosticLabPageRoutingModule() {
      _classCallCheck(this, DiagnosticLabPageRoutingModule);
    };

    DiagnosticLabPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DiagnosticLabPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/diagnostic-lab/diagnostic-lab.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/diagnostic-lab/diagnostic-lab.module.ts ***!
    \***************************************************************/

  /*! exports provided: DiagnosticLabPageModule */

  /***/
  function srcAppPagesDiagnosticLabDiagnosticLabModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagnosticLabPageModule", function () {
      return DiagnosticLabPageModule;
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


    var _diagnostic_lab_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./diagnostic-lab-routing.module */
    "./src/app/pages/diagnostic-lab/diagnostic-lab-routing.module.ts");
    /* harmony import */


    var _diagnostic_lab_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./diagnostic-lab.page */
    "./src/app/pages/diagnostic-lab/diagnostic-lab.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /* harmony import */


    var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ionic5-star-rating */
    "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");

    var DiagnosticLabPageModule = function DiagnosticLabPageModule() {
      _classCallCheck(this, DiagnosticLabPageModule);
    };

    DiagnosticLabPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _diagnostic_lab_routing_module__WEBPACK_IMPORTED_MODULE_5__["DiagnosticLabPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], ionic5_star_rating__WEBPACK_IMPORTED_MODULE_9__["StarRatingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_diagnostic_lab_page__WEBPACK_IMPORTED_MODULE_6__["DiagnosticLabPage"]]
    })], DiagnosticLabPageModule);
    /***/
  },

  /***/
  "./src/app/pages/diagnostic-lab/diagnostic-lab.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/diagnostic-lab/diagnostic-lab.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesDiagnosticLabDiagnosticLabPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-header {\n  -webkit-transform: translateY(-2rem);\n          transform: translateY(-2rem);\n}\n\n.img-thumbnail {\n  border-radius: 10px;\n}\n\n.foursec {\n  margin: 20px 15px;\n}\n\n.item--description ul {\n  line-height: 20px;\n  text-align: left;\n  padding-left: 16px;\n}\n\n.starcat {\n  display: block;\n}\n\n.starcat span {\n  padding: 0px 5px;\n}\n\n.starcatf {\n  display: -webkit-box;\n  display: flex;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGlhZ25vc3RpYy1sYWIvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcZGlhZ25vc3RpYy1sYWJcXGRpYWdub3N0aWMtbGFiLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZGlhZ25vc3RpYy1sYWIvZGlhZ25vc3RpYy1sYWIucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0NBQUE7VUFBQSw0QkFBQTtBQ0NKOztBREVBO0VBQ0ksbUJBQUE7QUNDSjs7QURBQTtFQUNJLGlCQUFBO0FDR0o7O0FEREE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUNJSjs7QURISTtFQUFTLGNBQUE7QUNPYjs7QUROQTtFQUFjLGdCQUFBO0FDVWQ7O0FEUkE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RpYWdub3N0aWMtbGFiL2RpYWdub3N0aWMtbGFiLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLWhlYWRlciB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycmVtKTtcbn1cblxuLmltZy10aHVtYm5haWwgeyAgXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDt9XG4uZm91cnNlY3tcbiAgICBtYXJnaW46MjBweCAxNXB4O31cblxuLml0ZW0tLWRlc2NyaXB0aW9uIHVse1xuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O31cbiAgICAuc3RhcmNhdHtkaXNwbGF5OmJsb2NrO31cbi5zdGFyY2F0IHNwYW57cGFkZGluZzowcHggNXB4O31cblxuLnN0YXJjYXRmIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbiIsIi5wcm9maWxlLWhlYWRlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMnJlbSk7XG59XG5cbi5pbWctdGh1bWJuYWlsIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuLmZvdXJzZWMge1xuICBtYXJnaW46IDIwcHggMTVweDtcbn1cblxuLml0ZW0tLWRlc2NyaXB0aW9uIHVsIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMTZweDtcbn1cblxuLnN0YXJjYXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnN0YXJjYXQgc3BhbiB7XG4gIHBhZGRpbmc6IDBweCA1cHg7XG59XG5cbi5zdGFyY2F0ZiB7XG4gIGRpc3BsYXk6IGZsZXg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/diagnostic-lab/diagnostic-lab.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/diagnostic-lab/diagnostic-lab.page.ts ***!
    \*************************************************************/

  /*! exports provided: DiagnosticLabPage */

  /***/
  function srcAppPagesDiagnosticLabDiagnosticLabPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiagnosticLabPage", function () {
      return DiagnosticLabPage;
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

    var DiagnosticLabPage =
    /*#__PURE__*/
    function () {
      function DiagnosticLabPage(route, router, api, util) {
        _classCallCheck(this, DiagnosticLabPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.facilities = [];
        this.facility = [];
        this.operational_timing = [];
        this.reviews = [];
        this.avgrate = 0;
        this.booking_exp = 0;
        this.slot_timing = 0;
        this.result_quality = 0;
        this.price = 0;
        this.collection_process = 0;
        this.total_review_count = 0;
        this.getFacilities();
        var labid = localStorage.getItem('labid');
        this.getSecondaryLab(labid);
        this.getLabReview(labid);
      }

      _createClass(DiagnosticLabPage, [{
        key: "getFacilities",
        value: function getFacilities() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.getFacilities().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0,
                      /*#__PURE__*/
                      regeneratorRuntime.mark(function _callee() {
                        return regeneratorRuntime.wrap(function _callee$(_context) {
                          while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                console.log(data);
                                this.facilities = data;

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
        key: "getSecondaryLab",
        value: function getSecondaryLab(labid) {
          var _this2 = this;

          this.api.getSecondaryLabById(labid).then(function (info) {
            console.log(info);
            _this2.lab_detail = info[0];
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = _this2.lab_detail.facility[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var x = _step.value;
                var name = '';
                var arr = [];
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = _this2.facilities[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var y = _step3.value;

                    if (y.id == x) {
                      _this2.facility.push(y.name);
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

            var timing = [];
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
              for (var _iterator2 = _this2.lab_detail.lab_timings[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _x = _step2.value;

                if (_x.opening_day == '1') {
                  timing.push({
                    id: 0,
                    day_name: 'Mon',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '2') {
                  timing.push({
                    id: 1,
                    day_name: 'Tue',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '3') {
                  timing.push({
                    id: 2,
                    day_name: 'Wed',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '4') {
                  timing.push({
                    id: 3,
                    day_name: 'Thu',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '5') {
                  timing.push({
                    id: 4,
                    day_name: 'Fri',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '6') {
                  timing.push({
                    id: 5,
                    day_name: 'Sat',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
                } else if (_x.opening_day == '0') {
                  timing.push({
                    id: 6,
                    day_name: 'Sun',
                    opening_time: _x.opening_time,
                    closing_time: _x.closing_time
                  });
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

            _this2.operational_timing = timing.sort(function (a, b) {
              return a.id - b.id;
            });
            console.log(_this2.operational_timing);
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this2.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "getLabReview",
        value: function getLabReview(id) {
          var _this3 = this;

          this.api.getReviewsByLabId(id).then(function (data) {
            console.log(data);

            if (data && data.length !== 0) {
              _this3.reviews = data;
              var n = 0;
              var avgrate = 0;
              var booking_exp = 0;
              var slot_timing = 0;
              var result_quality = 0;
              var price = 0;
              var collection_process = 0;

              _this3.reviews.forEach(function (element) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee3() {
                  return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                      switch (_context3.prev = _context3.next) {
                        case 0:
                          console.log(element);
                          n = n + 1;
                          avgrate += (element.booking_exp + element.collection_process + element.price + element.result_quality + element.slot_timing) / 5;
                          console.log(avgrate);
                          booking_exp += element.booking_exp;
                          slot_timing += element.slot_timing;
                          result_quality += element.result_quality;
                          price += element.price;
                          collection_process += element.collection_process;
                          element.avgrate = avgrate;
                          console.log(collection_process);

                        case 11:
                        case "end":
                          return _context3.stop();
                      }
                    }
                  }, _callee3);
                }));
              });

              _this3.avgrate = (avgrate / n).toFixed(1);
              _this3.booking_exp = (booking_exp / n).toFixed(1);
              _this3.slot_timing = (slot_timing / n).toFixed(1);
              _this3.result_quality = (result_quality / n).toFixed(1);
              _this3.price = (price / n).toFixed(1);
              _this3.collection_process = (collection_process / n).toFixed(1);
              _this3.total_review_count = n; // console.log(this.avgrate, this.booking_exp, this.slot_timing , this.result_quality, this.price, this.collection_process)
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this3.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }]);

      return DiagnosticLabPage;
    }();

    DiagnosticLabPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }];
    };

    DiagnosticLabPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-diagnostic-lab',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./diagnostic-lab.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/diagnostic-lab/diagnostic-lab.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./diagnostic-lab.page.scss */
      "./src/app/pages/diagnostic-lab/diagnostic-lab.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]])], DiagnosticLabPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-diagnostic-lab-diagnostic-lab-module-es5.js.map