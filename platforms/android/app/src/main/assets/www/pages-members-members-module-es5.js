function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-members-members-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/members/members.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/members/members.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesMembersMembersPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n  <div class=\"row\">\n\t  <div class=\"col-md-12 col-lg-12 col-xl-12\" style=\"display: flex;justify-content: space-between;\">\n\t\t  <h3>Members Listing \n        </h3>\n\t\t<span><ion-button class=\"btn_class\" (click)=\"openModal()\" type=\"submit\" expand=\"block\">\n      Add Patient</ion-button></span>\n\t\t</div>\t\n\t</div>\n\n  <div *ngIf=\"members.length == 0\" class=\"noData\">\n    <img src=\"assets/no_data_found.png\">\n    <p>No Patients Yet</p>\n  </div>\n  <div class=\"table-responsive\" *ngIf=\"members.length !== 0\">\n  <table class=\"table\">\n  <thead>\n    <tr >\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Member Id</th>\n      <th scope=\"col\">Date of birth</th>\n\t  <th scope=\"col\">Gender</th>\n    <th scope=\"col\">Action</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let item of members;let i=index;\" >\n      <td><p>{{item.name}}</p></td>\n      <td>{{item.id}}</td>\n\t   <td>{{item.dob | date}}</td>\n\t    <td>{{item.gender}}</td>\n      <td>\n        <ion-button (click)=\"edit(item.id)\" expand=\"\" style=\"margin-bottom: 5px;margin-right: 6px;\">Edit</ion-button>\n        <ion-button (click)=\"delete(item.id)\" expand=\"\" style=\"--background: black;\">Delete</ion-button> \n      </td>\n    </tr>\n  </tbody>\n</table>\n  </div></div>\n<!-- </div> -->\n<app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/members/members-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/members/members-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: MembersPageRoutingModule */

  /***/
  function srcAppPagesMembersMembersRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembersPageRoutingModule", function () {
      return MembersPageRoutingModule;
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


    var _members_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./members.page */
    "./src/app/pages/members/members.page.ts");

    var routes = [{
      path: '',
      component: _members_page__WEBPACK_IMPORTED_MODULE_3__["MembersPage"]
    }];

    var MembersPageRoutingModule = function MembersPageRoutingModule() {
      _classCallCheck(this, MembersPageRoutingModule);
    };

    MembersPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MembersPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/members/members.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/members/members.module.ts ***!
    \*************************************************/

  /*! exports provided: MembersPageModule */

  /***/
  function srcAppPagesMembersMembersModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembersPageModule", function () {
      return MembersPageModule;
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


    var _members_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./members-routing.module */
    "./src/app/pages/members/members-routing.module.ts");
    /* harmony import */


    var _members_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./members.page */
    "./src/app/pages/members/members.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var MembersPageModule = function MembersPageModule() {
      _classCallCheck(this, MembersPageModule);
    };

    MembersPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _members_routing_module__WEBPACK_IMPORTED_MODULE_5__["MembersPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_members_page__WEBPACK_IMPORTED_MODULE_6__["MembersPage"]]
    })], MembersPageModule);
    /***/
  },

  /***/
  "./src/app/pages/members/members.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/members/members.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesMembersMembersPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".noData {\n  text-align: center;\n  margin-top: 5%;\n  font-weight: bold;\n}\n\nion-item {\n  --border-color: transparent;\n  -webkit-animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n          animation: popIn 0.2s calc(var(--animation-order) * 70ms) both ease-in;\n}\n\n@-webkit-keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n@keyframes popIn {\n  0% {\n    opacity: 0;\n    -webkit-transform: scale(0.6) translateY(-8px);\n            transform: scale(0.6) translateY(-8px);\n  }\n  100% {\n    opacity: 1;\n    -webkit-transform: none;\n            transform: none;\n  }\n}\n\n.orderList .date {\n  font-size: 12px;\n  color: #929292;\n  text-align: center;\n  margin: 10px;\n}\n\n.orderList ion-icon {\n  font-size: x-large;\n  margin-right: 10px;\n}\n\n.orderList span {\n  float: right;\n}\n\n.orderList p {\n  color: black;\n  margin-bottom: 8px;\n}\n\n.orderList h2 {\n  font-weight: bold;\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.starend {\n  display: -webkit-box;\n  display: flex;\n}\n\n.strtdat input {\n  border: 1px solid #d8d0bc;\n  font-size: 14px;\n  padding: 0 10px;\n  width: 100%;\n  color: black;\n  height: 40px;\n}\n\n.enddat input {\n  border: 1px solid #d8d0bc;\n  font-size: 14px;\n  padding: 0 10px;\n  width: 100%;\n  color: black;\n  height: 40px;\n}\n\n.starend ion-label {\n  background: #fff;\n  padding: 10px;\n  margin: 0px;\n}\n\n.enddat {\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWVtYmVycy9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxtZW1iZXJzXFxtZW1iZXJzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbWVtYmVycy9tZW1iZXJzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDQ0o7O0FERUE7RUFDSSwyQkFBQTtFQUNBLDhFQUFBO1VBQUEsc0VBQUE7QUNDSjs7QURDQTtFQUNFO0lBQ0UsVUFBQTtJQUNBLDhDQUFBO1lBQUEsc0NBQUE7RUNFRjtFRENBO0lBQ0UsVUFBQTtJQUNBLHVCQUFBO1lBQUEsZUFBQTtFQ0NGO0FBQ0Y7O0FEVkE7RUFDRTtJQUNFLFVBQUE7SUFDQSw4Q0FBQTtZQUFBLHNDQUFBO0VDRUY7RURDQTtJQUNFLFVBQUE7SUFDQSx1QkFBQTtZQUFBLGVBQUE7RUNDRjtBQUNGOztBREVJO0VBQ0ksZUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNBUjs7QURFSTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURFSTtFQUNJLFlBQUE7QUNBUjs7QURFSTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0FSOztBREVJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjs7QURJQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtBQ0RKOztBREdBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQWEsWUFBQTtBQ0NmOztBRENBO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQWEsWUFBQTtBQ0dqQjs7QUREQTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNJSjs7QURGQTtFQUNJLGtCQUFBO0FDS0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tZW1iZXJzL21lbWJlcnMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vRGF0YXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDo1JTtcbiAgICBmb250LXdlaWdodDpib2xkO1xufVxuXG5pb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGFuaW1hdGlvbjogcG9wSW4gMC4ycyBjYWxjKHZhcigtLWFuaW1hdGlvbi1vcmRlcikgKiA3MG1zKSBib3RoIGVhc2UtaW47XG59XG5Aa2V5ZnJhbWVzIHBvcEluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cblxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zZm9ybTogbm9uZTtcbiAgfVxufVxuLm9yZGVyTGlzdCB7XG4gICAgLmRhdGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgY29sb3I6ICM5MjkyOTI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luOiAxMHB4O1xuICAgIH1cbiAgICBpb24taWNvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIH1cbiAgICBzcGFuIHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0XG4gICAgfVxuICAgIHAge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgfVxufVxuXG4uc3RhcmVuZCB7XG4gICAgZGlzcGxheTogZmxleDtcbn1cbi5zdHJ0ZGF0IGlucHV0ICB7IFxuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMGJjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6ICAwIDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBjb2xvcjogYmxhY2s7aGVpZ2h0OiA0MHB4O1xufVxuLmVuZGRhdCBpbnB1dCB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q4ZDBiYztcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgcGFkZGluZzogMCAxMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGNvbG9yOiBibGFjaztoZWlnaHQ6IDQwcHg7XG59XG4uc3RhcmVuZCBpb24tbGFiZWwge1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBtYXJnaW46IDBweDtcbn1cbi5lbmRkYXQge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn0iLCIubm9EYXRhIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1JTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICBhbmltYXRpb246IHBvcEluIDAuMnMgY2FsYyh2YXIoLS1hbmltYXRpb24tb3JkZXIpICogNzBtcykgYm90aCBlYXNlLWluO1xufVxuXG5Aa2V5ZnJhbWVzIHBvcEluIHtcbiAgMCUge1xuICAgIG9wYWNpdHk6IDA7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjYpIHRyYW5zbGF0ZVkoLThweCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2Zvcm06IG5vbmU7XG4gIH1cbn1cbi5vcmRlckxpc3QgLmRhdGUge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjOTI5MjkyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTBweDtcbn1cbi5vcmRlckxpc3QgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cbi5vcmRlckxpc3Qgc3BhbiB7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5vcmRlckxpc3QgcCB7XG4gIGNvbG9yOiBibGFjaztcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuLm9yZGVyTGlzdCBoMiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnN0YXJlbmQge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uc3RydGRhdCBpbnB1dCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOGQwYmM7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgcGFkZGluZzogMCAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgY29sb3I6IGJsYWNrO1xuICBoZWlnaHQ6IDQwcHg7XG59XG5cbi5lbmRkYXQgaW5wdXQge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZDhkMGJjO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHBhZGRpbmc6IDAgMTBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGNvbG9yOiBibGFjaztcbiAgaGVpZ2h0OiA0MHB4O1xufVxuXG4uc3RhcmVuZCBpb24tbGFiZWwge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW46IDBweDtcbn1cblxuLmVuZGRhdCB7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/members/members.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/members/members.page.ts ***!
    \***********************************************/

  /*! exports provided: MembersPage */

  /***/
  function srcAppPagesMembersMembersPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MembersPage", function () {
      return MembersPage;
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


    var src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/components/update/update.component */
    "./src/app/components/update/update.component.ts");

    var MembersPage =
    /*#__PURE__*/
    function () {
      function MembersPage(route, router, api, util, alertCtrl, modalController, menu) {
        _classCallCheck(this, MembersPage);

        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.menu = menu;
        this.members = [];
        this.haveItems = false;
        this.dues = [];
        this.segmentModel = "due"; // this.menu.enable(false);
      }

      _createClass(MembersPage, [{
        key: "ionViewWillEnter",
        value: function ionViewWillEnter() {
          var _this = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getMemberByUId(uid).then(function (info) {
            console.log(info);
            _this.members = info;
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "openModal",
        value: function openModal() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    localStorage.setItem('routeFrom', 'add');
                    _context.next = 3;
                    return this.modalController.create({
                      component: src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"],
                      cssClass: 'update-modal-css'
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this2.ionViewWillEnter();
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
        key: "edit",
        value: function edit(id) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee2() {
            var _this3 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    localStorage.setItem('memberid', id);
                    localStorage.setItem('routeFrom', 'edit');
                    _context2.next = 4;
                    return this.modalController.create({
                      component: src_app_components_update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"],
                      cssClass: 'update-modal-css'
                    });

                  case 4:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (dataReturned) {
                      _this3.ionViewWillEnter();
                    });
                    _context2.next = 8;
                    return modal.present();

                  case 8:
                    return _context2.abrupt("return", _context2.sent);

                  case 9:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "delete",
        value: function _delete(id) {
          var _this4 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.deleteMember(uid, id).then(function (data) {
            console.log(data);
            _this4.members = [];

            _this4.ionViewWillEnter();

            _this4.util.showToast("Patient Deleted Successfully", 'primary', 'bottom');
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this4.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }]);

      return MembersPage;
    }();

    MembersPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }];
    };

    MembersPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-members',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./members.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/members/members.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./members.page.scss */
      "./src/app/pages/members/members.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])], MembersPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-members-members-module-es5.js.map