function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-health-packages-health-packages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-packages/health-packages.page.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-packages/health-packages.page.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesHealthPackagesHealthPackagesPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n  <div class=\"ShopByProducts\">\n   <div class=\"container\" >\n      <div class=\"row\">\n         <div class=\"col-md-4 col-sm-4 col-xs-4\">\n            <div class=\"ct-heading h-align-left item-st-default\"><div class=\"item--sub-title style-default\" >All Health Packages</div>\n               <img src=\"assets/org_line.png\" >\n            </div>\n         </div>\n         <div class=\"col-sm-3\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n         </div>\n          <div class=\"col-sm-3\">\n             <label>Suitable For : </label>\n             <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n                <option value=\"\">Please select gender</option>\n                <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n            </select>\n           </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n        </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n        </div>\n      </div>\n   \n<div class=\"row\" style=\"margin-top: 30px;\">\n      <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of all_packages\">\n         <div class=\"grid-item-inner\">\n            <div class=\"uptopmp\">\n               <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n               <p class=\"category_namemp\">{{item.test_name}}</p> \n              <div class=\"desmp\">\n              <ul><li>Total no.of Tests - {{item.parameter.length}}</li>\n              <li>Quick Turn Around Time</li>\n              <li>Reporting as per NABL ISO guidelines</li></ul>\n              </div>\n            </div>\n            <div class=\"butkmore\">\n               <button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n            </div>\n         </div>\n      </div>\n   </div></div>\n   </div>\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/health-packages/health-packages-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/pages/health-packages/health-packages-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: HealthPackagesPageRoutingModule */

  /***/
  function srcAppPagesHealthPackagesHealthPackagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthPackagesPageRoutingModule", function () {
      return HealthPackagesPageRoutingModule;
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


    var _health_packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./health-packages.page */
    "./src/app/pages/health-packages/health-packages.page.ts");

    var routes = [{
      path: '',
      component: _health_packages_page__WEBPACK_IMPORTED_MODULE_3__["HealthPackagesPage"]
    }];

    var HealthPackagesPageRoutingModule = function HealthPackagesPageRoutingModule() {
      _classCallCheck(this, HealthPackagesPageRoutingModule);
    };

    HealthPackagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], HealthPackagesPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/health-packages/health-packages.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/health-packages/health-packages.module.ts ***!
    \*****************************************************************/

  /*! exports provided: HealthPackagesPageModule */

  /***/
  function srcAppPagesHealthPackagesHealthPackagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthPackagesPageModule", function () {
      return HealthPackagesPageModule;
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


    var _health_packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./health-packages-routing.module */
    "./src/app/pages/health-packages/health-packages-routing.module.ts");
    /* harmony import */


    var _health_packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./health-packages.page */
    "./src/app/pages/health-packages/health-packages.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var HealthPackagesPageModule = function HealthPackagesPageModule() {
      _classCallCheck(this, HealthPackagesPageModule);
    };

    HealthPackagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _health_packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthPackagesPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_health_packages_page__WEBPACK_IMPORTED_MODULE_6__["HealthPackagesPage"]]
    })], HealthPackagesPageModule);
    /***/
  },

  /***/
  "./src/app/pages/health-packages/health-packages.page.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/health-packages/health-packages.page.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesHealthPackagesHealthPackagesPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content .grid-item-inner {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 10px 10px 0 0;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin-bottom: 40px;\n}\nion-content .ShopByProducts {\n  background: #ededed;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 60px;\n  line-height: 30px;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .mrpricemp {\n  font-size: 15px;\n  text-decoration: line-through;\n  color: #fa8152;\n  font-weight: bold;\n}\nion-content .pricemp {\n  font-size: 15px;\n  color: #fa8152;\n  font-weight: bold;\n}\nion-content .butkmore {\n  border-top: 1px solid #ddd;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhbHRoLXBhY2thZ2VzL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGhlYWx0aC1wYWNrYWdlc1xcaGVhbHRoLXBhY2thZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGVhbHRoLXBhY2thZ2VzL2hlYWx0aC1wYWNrYWdlcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQyxrQkFBQTtFQUNILHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkNBQUE7RUFDQSxtQkFBQTtBQ0FGO0FERUk7RUFBZ0IsbUJBQUE7QUNDcEI7QURBQTtFQUFTLGVBQUE7QUNHVDtBREZBO0VBQ0ksZUFBQTtBQ0lKO0FESEE7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ0tKO0FESEE7RUFDSSxlQUFBO0VBQ0osaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNLQTtBREpBO0VBQVUsa0JBQUE7QUNPVjtBRE5BO0VBQVUsb0NBQUE7RUFDVix3QkFBQTtFQUNBLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLGVBQUE7RUFDOUMsZ0JBQUE7RUFDQSxrQkFBQTtBQ1dBO0FEVkE7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNZSjtBRFZBO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ1lKO0FEVkE7RUFDSSwwQkFBQTtBQ1lKO0FEVkE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDWUoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9oZWFsdGgtcGFja2FnZXMvaGVhbHRoLXBhY2thZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAuZ3JpZC1pdGVtLWlubmVye1xuICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggOHB4IDEwcHg7XG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XG59XG4gICAgLlNob3BCeVByb2R1Y3Rze2JhY2tncm91bmQ6ICNlZGVkZWQ7fVxuLnVwdG9wbXB7cGFkZGluZzogMCAxMHB4O31cbi51cHRvcG1wIGltZ3tcbiAgICBtYXJnaW46NXB4IDBweDt9XG4ubXBvcGltZ3tcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogLTI1cHg7XG4gICAgbGVmdDogNDAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbi5jYXRlZ29yeV9uYW1lbXB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xucGFkZGluZy10b3A6IDYwcHg7XG5saW5lLWhlaWdodDogMzBweDt9XG4uZGVzbXAgdWx7dGV4dC1hbGlnbjogY2VudGVyO31cbi5kZXNtcCBsaXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nJyk7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2xpc3Qtc3R5bGU6IG5vbmU7Zm9udC1zaXplOiAxNHB4O1xudGV4dC1hbGlnbjogbGVmdDtcbnBhZGRpbmctbGVmdDogMjVweDt9XG4ubXJwcmljZW1wIHtcbiAgICBmb250LXNpemU6IDE1cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6ICNmYTgxNTI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucHJpY2VtcCB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGNvbG9yOiAjZmE4MTUyO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmJ1dGttb3JlIHtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cbi5idXRrbW9yZSAua25vd19tb3JlIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICMwMDdjOWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7XG59XG59IiwiaW9uLWNvbnRlbnQgLmdyaWQtaXRlbS1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCA4cHggMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcbn1cbmlvbi1jb250ZW50IC5TaG9wQnlQcm9kdWN0cyB7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5pb24tY29udGVudCAudXB0b3BtcCB7XG4gIHBhZGRpbmc6IDAgMTBweDtcbn1cbmlvbi1jb250ZW50IC51cHRvcG1wIGltZyB7XG4gIG1hcmdpbjogNXB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5tcG9waW1nIHtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0yNXB4O1xuICBsZWZ0OiA0MCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcnlfbmFtZW1wIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgcGFkZGluZy10b3A6IDYwcHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuaW9uLWNvbnRlbnQgLmRlc21wIHVsIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuaW9uLWNvbnRlbnQgLmRlc21wIGxpIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZy1sZWZ0OiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1ycHJpY2VtcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gIGNvbG9yOiAjZmE4MTUyO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbmlvbi1jb250ZW50IC5wcmljZW1wIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogI2ZhODE1MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcbn1cbmlvbi1jb250ZW50IC5idXRrbW9yZSAua25vd19tb3JlIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBjb2xvcjogIzAwN2M5ZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/health-packages/health-packages.page.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/health-packages/health-packages.page.ts ***!
    \***************************************************************/

  /*! exports provided: HealthPackagesPage */

  /***/
  function srcAppPagesHealthPackagesHealthPackagesPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HealthPackagesPage", function () {
      return HealthPackagesPage;
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


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var HealthPackagesPage =
    /*#__PURE__*/
    function () {
      function HealthPackagesPage(route, router, alertCtrl, menu, util, api) {
        _classCallCheck(this, HealthPackagesPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.util = util;
        this.api = api;
        this.all_packages = [];
        this.filter_tests = [];
        this.recommended_age = "";
        this.age_groups = [];
        this.recommended_fors = [];
        this.test_recommended_for = '';
        this.filter = false;
        this.getRecommendedFor();
        this.getAgeGroup();
      }

      _createClass(HealthPackagesPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          this.api.getAllHealthPackages().then(function (data) {
            _this.all_packages = data;
            _this.filter_tests = data;
            console.log(_this.all_packages);

            _this.all_packages.sort(function (a, b) {
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
          this.ionViewWillEnter();
        }
      }, {
        key: "search",
        value: function search() {
          if (this.recommended_age == '' && this.test_recommended_for == '') {
            this.util.showToast('Please select at least one filter', 'danger', 'bottom');
            return false;
          }

          this.all_packages = [];
          var arr1 = [];
          var arr2 = [];
          this.filter = true;
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.filter_tests[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var x = _step.value;

              if (this.recommended_age != '' && this.test_recommended_for == '') {
                var _iteratorNormalCompletion2 = true;
                var _didIteratorError2 = false;
                var _iteratorError2 = undefined;

                try {
                  for (var _iterator2 = x.recommended_age[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var y = _step2.value;

                    if (y.item_id == this.recommended_age) {
                      this.all_packages.push(x);
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
              } else if (this.recommended_age == '' && this.test_recommended_for != '') {
                var _iteratorNormalCompletion3 = true;
                var _didIteratorError3 = false;
                var _iteratorError3 = undefined;

                try {
                  for (var _iterator3 = x.test_recommended_for[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                    var _y = _step3.value;

                    if (_y == this.test_recommended_for) {
                      this.all_packages.push(x);
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
              } else {
                var _iteratorNormalCompletion4 = true;
                var _didIteratorError4 = false;
                var _iteratorError4 = undefined;

                try {
                  for (var _iterator4 = x.recommended_age[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                    var _y2 = _step4.value;

                    if (_y2.item_id == this.recommended_age) {
                      arr1.push(x);
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

                var _iteratorNormalCompletion5 = true;
                var _didIteratorError5 = false;
                var _iteratorError5 = undefined;

                try {
                  for (var _iterator5 = x.test_recommended_for[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
                    var _y3 = _step5.value;

                    if (_y3 == this.test_recommended_for) {
                      arr2.push(x);
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

                this.all_packages = arr1.filter(function (value) {
                  return arr2.includes(value);
                });
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

          console.log('item', this.all_packages);

          if (this.all_packages.length > 0) {
            this.all_packages.sort(function (a, b) {
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
            var _this2 = this;

            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.api.getAgeGroup().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this2, void 0, void 0,
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
            var _this3 = this;

            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.api.getRecommendedFor().then(function (data) {
                      return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this3, void 0, void 0,
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

      return HealthPackagesPage;
    }();

    HealthPackagesPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }];
    };

    HealthPackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-health-packages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./health-packages.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-packages/health-packages.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./health-packages.page.scss */
      "./src/app/pages/health-packages/health-packages.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], HealthPackagesPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-health-packages-health-packages-module-es5.js.map