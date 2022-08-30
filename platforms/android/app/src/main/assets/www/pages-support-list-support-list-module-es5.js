function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-support-list-support-list-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-list/support-list.page.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-list/support-list.page.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportListSupportListPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n\n<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3  class=\"greeheading\">Tickets Raised</h3>\n\t\t</div>\t\n\t</div>\n<ion-progress-bar type=\"indeterminate\" *ngIf=\"!spinner\" mode=\"ios\"></ion-progress-bar>\n\n  <div *ngIf=\"support.length == 0\" class=\"noData\">\n    <img src=\"assets/no_data_found.png\" style=\"width: 50%;\">\n    <p>No Support Tickets Raised</p>\n  </div>\n  <ion-item *ngFor=\"let item of support;let i=index;\" [attr.style]=\"sanitizer.bypassSecurityTrustStyle('--animation-order: ' + i)\" class=\"item\">\n    <p class=\"date\">{{item.createdAt |  date}}</p>\n    <ion-label text-wrap class=\"sidetxt\">\n      <h2 class=\"name\"> {{item.reason}}</h2>\n      <p><span><b>Ticket Id:</b></span> {{item.id}}</p>  \n      <p *ngIf=\"item.status==0\"><span><b>Status:</b></span> Pending</p>\n      <p *ngIf=\"item.status==1\"> <span><b>Status:</b></span> Resolved</p>\n      <p *ngIf=\"item.status==1\"> <span><b>Response:</b></span> {{item.response}}</p>\n    </ion-label>\n  </ion-item>\n  </div>\n  <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/support-list/support-list-routing.module.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/support-list/support-list-routing.module.ts ***!
    \*******************************************************************/

  /*! exports provided: SupportListPageRoutingModule */

  /***/
  function srcAppPagesSupportListSupportListRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportListPageRoutingModule", function () {
      return SupportListPageRoutingModule;
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


    var _support_list_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support-list.page */
    "./src/app/pages/support-list/support-list.page.ts");

    var routes = [{
      path: '',
      component: _support_list_page__WEBPACK_IMPORTED_MODULE_3__["SupportListPage"]
    }];

    var SupportListPageRoutingModule = function SupportListPageRoutingModule() {
      _classCallCheck(this, SupportListPageRoutingModule);
    };

    SupportListPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportListPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/support-list/support-list.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/pages/support-list/support-list.module.ts ***!
    \***********************************************************/

  /*! exports provided: SupportListPageModule */

  /***/
  function srcAppPagesSupportListSupportListModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportListPageModule", function () {
      return SupportListPageModule;
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


    var _support_list_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support-list-routing.module */
    "./src/app/pages/support-list/support-list-routing.module.ts");
    /* harmony import */


    var _support_list_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support-list.page */
    "./src/app/pages/support-list/support-list.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var SupportListPageModule = function SupportListPageModule() {
      _classCallCheck(this, SupportListPageModule);
    };

    SupportListPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _support_list_routing_module__WEBPACK_IMPORTED_MODULE_5__["SupportListPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_support_list_page__WEBPACK_IMPORTED_MODULE_6__["SupportListPage"]]
    })], SupportListPageModule);
    /***/
  },

  /***/
  "./src/app/pages/support-list/support-list.page.scss":
  /*!***********************************************************!*\
    !*** ./src/app/pages/support-list/support-list.page.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSupportListSupportListPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background-class {\n  padding: 16px;\n}\n\n.noData {\n  text-align: center;\n  margin-top: 30%;\n  font-weight: bold;\n}\n\nion-item {\n  border: 1px solid #e6e6e6;\n  --border-color: transparent;\n  -webkit-animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n          animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n  --padding-left: 0px;\n  --inner-padding-end: 0px;\n  /*border-radius : 10px;*/\n  --padding-start:0px;\n  --padding:10px;\n  margin: 10px;\n  --background: #e2d67a;\n  --border-style: unset;\n}\n\n@-webkit-keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n.vl {\n  border-left: 2px solid #e6e6e6;\n  height: 85px;\n  border-left-style: dotted;\n}\n\n.name {\n  font-weight: bold;\n  font-size: 12px !important;\n  margin-bottom: 4px !important;\n}\n\n.question {\n  font-size: 12px;\n}\n\n.date {\n  width: 70px;\n  margin: 0px;\n  line-height: 1.9rem;\n  padding: 10px 0px 10px 10px;\n  margin-right: 6px;\n  color: #fff;\n}\n\n.ticketId {\n  float: right;\n  margin-right: 5px;\n  color: #000;\n  font-weight: bold;\n}\n\n.pending {\n  float: right;\n  margin-right: 5px;\n  color: #1FA690;\n  font-weight: normal;\n}\n\n.resolved {\n  float: right;\n  margin-right: 5px;\n  color: #FAB210;\n  font-weight: normal;\n}\n\n.sc-ion-label-md-h {\n  background: #fff;\n  padding: 10px 0px 10px 10px;\n  margin: 0px;\n}\n\n.noData {\n  text-align: center;\n  margin-top: 30%;\n}\n\n.name {\n  font-size: 14px;\n}\n\n.sidetxt p {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3VwcG9ydC1saXN0L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXHN1cHBvcnQtbGlzdFxcc3VwcG9ydC1saXN0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC1saXN0L3N1cHBvcnQtbGlzdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0o7O0FEQ0E7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VKOztBREFBO0VBQ0kseUJBQUE7RUFDQSwyQkFBQTtFQUNBLDhFQUFBO1VBQUEsc0VBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtBQ0dKOztBREFBO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsOENBQUE7WUFBQSxzQ0FBQTtFQ0dGO0VEQUE7SUFDRSxVQUFBO0lBQ0EsdUJBQUE7WUFBQSxlQUFBO0VDRUY7QUFDRjs7QURYQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhDQUFBO1lBQUEsc0NBQUE7RUNHRjtFREFBO0lBQ0UsVUFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFDRSw4QkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtBQ0VGOztBREFBO0VBQ0ksaUJBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0FDR0o7O0FEREE7RUFDSSxlQUFBO0FDSUo7O0FERkE7RUFDSSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QUNLSjs7QURIQTtFQUNJLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ01KOztBREpBO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDT0o7O0FETEE7RUFDSSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7QUNRSjs7QUROQTtFQUNJLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxXQUFBO0FDU0o7O0FEUEE7RUFDUSxrQkFBQTtFQUNBLGVBQUE7QUNVUjs7QURSQTtFQUNJLGVBQUE7QUNXSjs7QURSSTtFQUNBLGVBQUE7QUNXSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N1cHBvcnQtbGlzdC9zdXBwb3J0LWxpc3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtY2xhc3N7XG4gICAgcGFkZGluZzogMTZweDtcbn1cbi5ub0RhdGF7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuaW9uLWl0ZW0ge1xuICAgIGJvcmRlciA6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgIC0tYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBhbmltYXRpb246IHBvcEluIDAuMnMgY2FsYyh2YXIoLS1hbmltYXRpb24tb3JkZXIpICogNzBtcykgYm90aCBlYXNlLWluO1xuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogMHB4O1xuICAgIC8qYm9yZGVyLXJhZGl1cyA6IDEwcHg7Ki9cbiAgICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xuICAgIC0tcGFkZGluZzoxMHB4O1xuICAgIG1hcmdpbjoxMHB4O1xuICAgIC0tYmFja2dyb3VuZDogI2UyZDY3YTtcbiAgICAtLWJvcmRlci1zdHlsZTogdW5zZXQ7XG59XG5cbkBrZXlmcmFtZXMgcG9wSW4ge1xuICAwJSB7XG4gICAgb3BhY2l0eTogMDtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNikgdHJhbnNsYXRlWSgtOHB4KTtcbiAgfVxuXG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG4udmwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNmU2ZTY7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGRvdHRlZDtcbn1cbi5uYW1lIHtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEycHggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA0cHggIWltcG9ydGFudDtcbn1cbi5xdWVzdGlvbiB7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLmRhdGUge1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjlyZW07XG4gICAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICAgIG1hcmdpbi1yaWdodDogNnB4O1xuICAgIGNvbG9yOiAjZmZmO1xufVxuLnRpY2tldElkIHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ucGVuZGluZ3tcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICMxRkE2OTA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5yZXNvbHZlZHtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgY29sb3I6ICNGQUIyMTA7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cbi5zYy1pb24tbGFiZWwtbWQtaCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG59XG4ubm9EYXRhe1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwJTtcbn1cbi5uYW1le1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cbi5zaWRldHh0IHtcbiAgICBwIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxufSIsIi5iYWNrZ3JvdW5kLWNsYXNzIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzAlO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuaW9uLWl0ZW0ge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGFuaW1hdGlvbjogcG9wSW4gMC4ycyBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiA3MG1zKSBib3RoIGVhc2UtaW47XG4gIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDBweDtcbiAgLypib3JkZXItcmFkaXVzIDogMTBweDsqL1xuICAtLXBhZGRpbmctc3RhcnQ6MHB4O1xuICAtLXBhZGRpbmc6MTBweDtcbiAgbWFyZ2luOiAxMHB4O1xuICAtLWJhY2tncm91bmQ6ICNlMmQ2N2E7XG4gIC0tYm9yZGVyLXN0eWxlOiB1bnNldDtcbn1cblxuQGtleWZyYW1lcyBwb3BJbiB7XG4gIDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC42KSB0cmFuc2xhdGVZKC04cHgpO1xuICB9XG4gIDEwMCUge1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNmb3JtOiBub25lO1xuICB9XG59XG4udmwge1xuICBib3JkZXItbGVmdDogMnB4IHNvbGlkICNlNmU2ZTY7XG4gIGhlaWdodDogODVweDtcbiAgYm9yZGVyLWxlZnQtc3R5bGU6IGRvdHRlZDtcbn1cblxuLm5hbWUge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG4gIG1hcmdpbi1ib3R0b206IDRweCAhaW1wb3J0YW50O1xufVxuXG4ucXVlc3Rpb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5kYXRlIHtcbiAgd2lkdGg6IDcwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBsaW5lLWhlaWdodDogMS45cmVtO1xuICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogNnB4O1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLnRpY2tldElkIHtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgY29sb3I6ICMwMDA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGVuZGluZyB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gIGNvbG9yOiAjMUZBNjkwO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4ucmVzb2x2ZWQge1xuICBmbG9hdDogcmlnaHQ7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBjb2xvcjogI0ZBQjIxMDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbn1cblxuLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLm5vRGF0YSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzAlO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNpZGV0eHQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/support-list/support-list.page.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/support-list/support-list.page.ts ***!
    \*********************************************************/

  /*! exports provided: SupportListPage */

  /***/
  function srcAppPagesSupportListSupportListPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportListPage", function () {
      return SupportListPage;
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
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js"); // import { myEnterAnimation } from 'src/app/animations/enter';
    // import { myLeaveAnimation } from 'src/app/animations/leave';


    var SupportListPage =
    /*#__PURE__*/
    function () {
      function SupportListPage(route, router, api, util, sanitizer, alertCtrl, menu) {
        _classCallCheck(this, SupportListPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.support = [];
        this.haveItems = false;
        this.spinner = false;
        this.menu.enable(false);
      }

      _createClass(SupportListPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getSupport(uid).then(function (info) {
            console.log(info);

            if (info != undefined) {
              _this.haveItems = true;
              _this.support = info;
            }

            _this.spinner = true;
          }).catch(function (err) {
            if (err) {
              console.log(err);
              _this.spinner = true;

              _this.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }]);

      return SupportListPage;
    }();

    SupportListPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    SupportListPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-support-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support-list.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support-list/support-list.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support-list.page.scss */
      "./src/app/pages/support-list/support-list.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], SupportListPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-support-list-support-list-module-es5.js.map