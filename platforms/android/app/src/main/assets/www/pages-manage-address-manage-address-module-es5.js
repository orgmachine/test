function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-address-manage-address-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.page.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.page.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesManageAddressManageAddressPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content><div class=\"container\"><div class=\"row\" style=\"margin: 50px 0;\">\n    <div *ngIf=\"address.length == 0\" class=\"noData\">\n       <img src=\"assets/no_data_found.png\">\n    </div>\n        <div class=\"col-md-12 col-lg-6 col-xl-6 address-div\" *ngFor=\"let item of address\">\n            <div class=\"list\">\n                <div class=\"title\">{{item.label}}  <br>\n                    <span> {{item.phone}}</span><br>\n                    <span class=\"name\">{{item.street}} {{item.locality}} {{item.landmark}} {{item.pincode}}\n                    {{item.city}} {{item.state}}</span>\n                </div>\n            </div>\n            <div class=\"bottom\">\n                <ion-item class=\"ion-no-padding\" lines=\"none\">\n                    <ion-button (click)=\"editAddress(item)\" mode=\"ios\" class=\"green\" fill=\"clear\">\n                        Edit This Address\n                    </ion-button>\n                    <ion-button [disabled]=\"isDelete == false\" (click)=\"deleteAddress(item.id)\" mode=\"ios\" class=\"red\" fill=\"clear\" slot=\"end\">\n                        Remove Address\n                    </ion-button>\n                </ion-item>\n            </div>\n        </div></div>\n\t\t<div class=\"row\" style=\"margin: 50px 0;\">\n    \t\t<ion-button (click)=\"addNew()\" class=\"btn_class\" style=\"margin:0 auto;\">\n              Add New Address\n            </ion-button>\n\t\t</div>\n    </div>\n\t<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/manage-address/manage-address-routing.module.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/pages/manage-address/manage-address-routing.module.ts ***!
    \***********************************************************************/

  /*! exports provided: ManageAddressPageRoutingModule */

  /***/
  function srcAppPagesManageAddressManageAddressRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAddressPageRoutingModule", function () {
      return ManageAddressPageRoutingModule;
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


    var _manage_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-address.page */
    "./src/app/pages/manage-address/manage-address.page.ts");

    var routes = [{
      path: '',
      component: _manage_address_page__WEBPACK_IMPORTED_MODULE_3__["ManageAddressPage"]
    }];

    var ManageAddressPageRoutingModule = function ManageAddressPageRoutingModule() {
      _classCallCheck(this, ManageAddressPageRoutingModule);
    };

    ManageAddressPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ManageAddressPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-address/manage-address.module.ts":
  /*!***************************************************************!*\
    !*** ./src/app/pages/manage-address/manage-address.module.ts ***!
    \***************************************************************/

  /*! exports provided: ManageAddressPageModule */

  /***/
  function srcAppPagesManageAddressManageAddressModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAddressPageModule", function () {
      return ManageAddressPageModule;
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


    var _manage_address_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./manage-address-routing.module */
    "./src/app/pages/manage-address/manage-address-routing.module.ts");
    /* harmony import */


    var _manage_address_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./manage-address.page */
    "./src/app/pages/manage-address/manage-address.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var ManageAddressPageModule = function ManageAddressPageModule() {
      _classCallCheck(this, ManageAddressPageModule);
    };

    ManageAddressPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _manage_address_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageAddressPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_manage_address_page__WEBPACK_IMPORTED_MODULE_6__["ManageAddressPage"]]
    })], ManageAddressPageModule);
    /***/
  },

  /***/
  "./src/app/pages/manage-address/manage-address.page.scss":
  /*!***************************************************************!*\
    !*** ./src/app/pages/manage-address/manage-address.page.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesManageAddressManageAddressPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noData {\n  text-align: center;\n  font-weight: bold;\n  width: 100%;\n}\n\n.list {\n  position: relative;\n  overflow-x: auto;\n  --border-color: transparent;\n  background: #F9F9F9;\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n}\n\n.list ion-label {\n  font-weight: bold;\n  color: black;\n  font-size: 1rem;\n  white-space: pre-wrap;\n  text-transform: capitalize;\n}\n\n.list span {\n  color: #767676;\n  font-size: 0.8rem;\n}\n\n.title {\n  padding: 10px;\n}\n\nion-content .address {\n  position: absolute;\n  left: 0;\n  right: 0;\n  text-align: center;\n  top: 24%;\n}\n\nion-content .address-div {\n  padding-top: 1px;\n  margin-bottom: 10px;\n}\n\nion-content .address-div h1 {\n  font-size: 17px;\n  font-family: proxi-bold;\n}\n\nion-content .address-div ion-icon {\n  font-size: 17px;\n  margin-right: 8px;\n}\n\nion-content .address-div p {\n  font-size: 12px;\n  font-family: proxi-regular;\n}\n\nion-content .address-div .bottom {\n  height: 44px;\n  background-color: #F1F1F1;\n}\n\nion-content .address-div ion-item {\n  --background: transparent;\n}\n\nion-content .address-div .green {\n  font-size: 13px;\n  color: #28C95E;\n  --background: transparent;\n}\n\nion-content .address-div .red {\n  font-size: 13px;\n  color: red;\n  --background: transparent;\n}\n\nion-content ion-item {\n  --inner-padding-end: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFuYWdlLWFkZHJlc3MvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcbWFuYWdlLWFkZHJlc3NcXG1hbmFnZS1hZGRyZXNzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWFuYWdlLWFkZHJlc3MvbWFuYWdlLWFkZHJlc3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUFpQixXQUFBO0FDRXJCOztBREFBO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0VBQTRCLG1CQUFBO0VBQzVCLG1CQUFBO0VBQ0Esd0JBQUE7QUNJSjs7QURISTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0FDS1I7O0FESEk7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7QUNLUjs7QURGQTtFQUNJLGFBQUE7QUNLSjs7QURESTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7QUNJUjs7QURGSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7QUNJUjs7QURIUTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQ0taOztBREhRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDS1o7O0FESFE7RUFDSSxlQUFBO0VBQ0EsMEJBQUE7QUNLWjs7QURIUTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0taOztBREhRO0VBQ0kseUJBQUE7QUNLWjs7QURIUTtFQUNJLGVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUNLWjs7QURIUTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUNLWjs7QURGSTtFQUNJLG1DQUFBO0FDSVIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYW5hZ2UtYWRkcmVzcy9tYW5hZ2UtYWRkcmVzcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm9EYXRhe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZDt3aWR0aDogMTAwJTtcclxufVxyXG4ubGlzdHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7YmFja2dyb3VuZDogI0Y5RjlGOTtcclxuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICBpb24tbGFiZWwge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICBmb250LXNpemU6IDEuMHJlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLXdyYXA7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICB9XHJcbiAgICBzcGFue1xyXG4gICAgICAgIGNvbG9yOiAjNzY3Njc2O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgfVxyXG59XHJcbi50aXRsZSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5pb24tY29udGVudCB7XHJcbiAgICAuYWRkcmVzcyB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHRvcDogMjQlO1xyXG4gICAgfVxyXG4gICAgLmFkZHJlc3MtZGl2IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBwcm94aS1ib2xkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiBwcm94aS1yZWd1bGFyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYm90dG9tIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjFGMUYxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taXRlbSB7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ncmVlbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICAgICAgY29sb3I6ICMyOEM5NUU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59IiwiLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubGlzdCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3cteDogYXV0bztcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBiYWNrZ3JvdW5kOiAjRjlGOUY5O1xuICAtLXBhZGRpbmctbGVmdDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHg7XG59XG4ubGlzdCBpb24tbGFiZWwge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6IGJsYWNrO1xuICBmb250LXNpemU6IDFyZW07XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59XG4ubGlzdCBzcGFuIHtcbiAgY29sb3I6ICM3Njc2NzY7XG4gIGZvbnQtc2l6ZTogMC44cmVtO1xufVxuXG4udGl0bGUge1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24tY29udGVudCAuYWRkcmVzcyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdG9wOiAyNCU7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1kaXYge1xuICBwYWRkaW5nLXRvcDogMXB4O1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLmFkZHJlc3MtZGl2IGgxIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBmb250LWZhbWlseTogcHJveGktYm9sZDtcbn1cbmlvbi1jb250ZW50IC5hZGRyZXNzLWRpdiBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1kaXYgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1mYW1pbHk6IHByb3hpLXJlZ3VsYXI7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1kaXYgLmJvdHRvbSB7XG4gIGhlaWdodDogNDRweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0YxRjFGMTtcbn1cbmlvbi1jb250ZW50IC5hZGRyZXNzLWRpdiBpb24taXRlbSB7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG59XG5pb24tY29udGVudCAuYWRkcmVzcy1kaXYgLmdyZWVuIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzI4Qzk1RTtcbiAgLS1iYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbn1cbmlvbi1jb250ZW50IC5hZGRyZXNzLWRpdiAucmVkIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogcmVkO1xuICAtLWJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWl0ZW0ge1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiAwcHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/manage-address/manage-address.page.ts":
  /*!*************************************************************!*\
    !*** ./src/app/pages/manage-address/manage-address.page.ts ***!
    \*************************************************************/

  /*! exports provided: ManageAddressPage */

  /***/
  function srcAppPagesManageAddressManageAddressPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageAddressPage", function () {
      return ManageAddressPage;
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


    var src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/pages/add-address/add-address.page */
    "./src/app/pages/add-address/add-address.page.ts");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    var ManageAddressPage =
    /*#__PURE__*/
    function () {
      function ManageAddressPage(modal, api, util, menu) {
        _classCallCheck(this, ManageAddressPage);

        this.modal = modal;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.address = [];
        this.isDelete = true; //this.menu.enable(false);
      }

      _createClass(ManageAddressPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMyAddress(uid).then(function (data) {
            if (data && data.length) {
              _this.address = data;
              console.log(_this.address);
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        } // async address() {
        //   const modal = await this.modal.create({
        //     component: AddAddressPage,
        //     cssClass: "manage-address",
        //   });
        //   modal.onDidDismiss().then((res) => {
        //     this.ionViewWillEnter();    });
        //   return await modal.present();
        // }

      }, {
        key: "close",
        value: function close() {
          this.modal.dismiss();
        }
      }, {
        key: "selectAddress",
        value: function selectAddress(item) {
          localStorage.setItem("SelectAddress", item.addr1);
          this.modal.dismiss(item);
        }
      }, {
        key: "deleteAddress",
        value: function deleteAddress(id) {
          var _this2 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getBookingsByAddressId(uid, id).then(function (data) {
            console.log(data);

            if (data && data.length) {
              _this2.util.showToast("Address is in Use", 'danger', 'bottom');
            } else {
              _this2.api.deleteAddress(uid, id).then(function (data) {
                console.log(data);
                _this2.address = [];

                _this2.ionViewWillEnter();

                _this2.util.showToast("Address Deleted Successfully", 'primary', 'bottom');
              }).catch(function (err) {
                if (err) {
                  console.log(err);

                  _this2.util.showToast("".concat(err), 'danger', 'bottom');
                }
              });
            }
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this2.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "addNew",
        value: function addNew() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    localStorage.setItem('routeFrom', 'add');
                    _context.next = 3;
                    return this.modal.create({
                      component: src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"],
                      componentProps: {
                        "modalTitle": "Product"
                      }
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this3.address = [];

                      _this3.ionViewWillEnter();
                    });
                    _context.next = 7;
                    return modal.present();

                  case 7:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "editAddress",
        value: function editAddress(data) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this4 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    localStorage.setItem('routeFrom', 'Manage');
                    _context2.next = 3;
                    return this.modal.create({
                      component: src_app_pages_add_address_add_address_page__WEBPACK_IMPORTED_MODULE_3__["AddAddressPage"],
                      componentProps: {
                        "modalTitle": "Manage",
                        data: data
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this4.address = [];

                      _this4.ionViewWillEnter();
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
      }]);

      return ManageAddressPage;
    }();

    ManageAddressPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    ManageAddressPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-manage-address",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./manage-address.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-address/manage-address.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./manage-address.page.scss */
      "./src/app/pages/manage-address/manage-address.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], ManageAddressPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-manage-address-manage-address-module-es5.js.map