function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-content class=\"login\">\n<div class=\"page\">\n <div class=\"container-fluid\"> \n <div class=\"row no-gutter\">\n <!-- The image half --> \n <div class=\"col-md-6 col-lg-6 col-xl-7 d-none d-md-flex bg-primary-transparent\">\n  <div class=\"row wd-100p mx-auto text-center\"> \n    <div class=\"col-md-12 col-lg-12 col-xl-12 my-auto mx-auto wd-100p\"> \n     <!--  <img src=\"assets/horseloginbg.png\" class=\"my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto\">  -->\n       <img src=\"assets/sd.jpg\" alt=\"\" class=\"my-auto ht-xl-80p wd-md-100p wd-xl-80p mx-auto\">\n    </div> \n  </div> \n</div>\n\n\n\n\n <!-- The content half --> \n \n  <div class=\"col-md-6 col-lg-6 col-xl-5\" >\n <div class=\" \" > \n <div class=\"login d-flex align-items-center py-2\"> \n <div class=\"container p-0\"> \n <div class=\"row\"> \n <div class=\"col-md-10 col-lg-10 col-xl-9 mx-auto\"> \n <div class=\"card-sigin\"> \n <div class=\"mb-5 d-flex\"> \n    <img src=\"assets/logo.png\" class=\"\" alt=\"logo\">\n  </div>\n <div class=\"card-sigin\"> \n <div class=\"main-signup-header\"> \n \n  <form [formGroup]=\"loginForm\">\n    <div *ngIf=\"!stepOne\">\n    <div class=\"left-head\">\n      <h3>Input phone number</h3><br>\n      <p>Use phone number to sign in or sign up</p>\n    </div>\n     <ion-item lines=\"none\">\n      <span item-right class=\"input-icon\"><ion-icon name=\"phone-portrait-outline\"></ion-icon></span>\n      <ion-input class=\"login-item\" id=\"phoneNumber\" type=\"tel\" [placeholder]=\"('Enter Your Mobile Number' | translate) || '&nbsp;'\" formControlName=\"phone\"></ion-input>\n     </ion-item>\n      <div no-lines *ngIf=\"( loginForm.get('phone').hasError('minlength') || loginForm.get('phone').hasError('maxlength') ||loginForm.get('phone').hasError('pattern') ||loginForm.get('phone').hasError('required') ) && loginForm.get('phone').touched\">\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('required') && loginForm.get('phone').touched\">\n       Mobile Number Is Required\n      </div>\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('minlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n      <div class=\"error\" *ngIf=\"loginForm.get('phone').hasError('maxlength')\">\n        Please Enter Valid Mobile Number\n      </div>\n     </div>\n     <ion-button class=\"btn_class\" (click)=\"sendOTP()\" type=\"submit\" expand=\"block\" [disabled]=\"loginForm.get('phone').invalid\">\n      SEND OTP\n     </ion-button>\n    <!-- <p class=\"createAcc\" (click)=\"register()\">{{\"Don't have an account?\" | translate}}\n      <span class=\"registerTag\">{{'Sign up' | translate}}</span>\n    </p> -->\n  </div>\n  <div *ngIf=\"stepOne\" class=\"welcome\">\n    <div class=\"number\"> +91 | {{user_phone}}</div>\n      <p>We have send 4 digits OTP to</p>\n      <div class=\"otp-enter\">\n        <code-input [isCodeHidden]=\"false\"\n          [codeLength]=\"4\"\n          [initialFocusField]=\"0\"\n          (codeChanged)=\"onCodeChanged($event)\"\n          (codeCompleted)=\"onCodeCompleted($event)\">\n        </code-input>\n        <div class=\"footer ion-padding\">\n          <ion-button  (click)=\"verifyOtp()\" type=\"submit\" expand=\"block\">\n            VERIFY OTP\n          </ion-button>\n          <p>-OR-</p>\n          <p style=\"color: var(--ion-color-primary)\"  (click)=\"skip()\">Skip Login</p>\n        </div>\n      </div>\n      <div class=\"send\"> \n        <p>Waiting for OTP...{{timer}} sec <span><p (click)=\"resend()\" type=\"submit\" class=\"btn_class\" *ngIf=\"timer == 0\">Resend OTP</p></span>\n        </p>\n      </div>\n    </div>\n  </form>\n </div>\n </div> \n </div>\n </div> </div>\n </div><!-- End --> \n </div> </div><!-- End --> \n \n </div>\n \n \n  \n </div> </div> </div>\n</ion-content>\n";
    /***/
  },

  /***/
  "./src/app/directives/hide-header.directive.ts":
  /*!*****************************************************!*\
    !*** ./src/app/directives/hide-header.directive.ts ***!
    \*****************************************************/

  /*! exports provided: HideHeaderDirective */

  /***/
  function srcAppDirectivesHideHeaderDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HideHeaderDirective", function () {
      return HideHeaderDirective;
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

    var HideHeaderDirective =
    /*#__PURE__*/
    function () {
      function HideHeaderDirective(renderer, domCtrl) {
        _classCallCheck(this, HideHeaderDirective);

        this.renderer = renderer;
        this.domCtrl = domCtrl;
        this.lastY = 0;
      }

      _createClass(HideHeaderDirective, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.header = this.header.el;
          this.domCtrl.write(function () {
            _this.renderer.setStyle(_this.header, 'transition', 'margin-top 700ms');
          });
        }
      }, {
        key: "onContentScroll",
        value: function onContentScroll($event) {
          var _this2 = this;

          if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(function () {
              _this2.renderer.setStyle(_this2.header, 'margin-top', "-".concat(_this2.header.clientHeight, "px"));
            });
          } else {
            this.domCtrl.write(function () {
              _this2.renderer.setStyle(_this2.header, 'margin-top', '0');
            });
          }

          this.lastY = $event.detail.scrollTop;
        }
      }]);

      return HideHeaderDirective;
    }();

    HideHeaderDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('header'), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)], HideHeaderDirective.prototype, "header", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('ionScroll', ['$event']), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)], HideHeaderDirective.prototype, "onContentScroll", null);
    HideHeaderDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: '[appHideHeader]'
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["DomController"]])], HideHeaderDirective);
    /***/
  },

  /***/
  "./src/app/directives/hidenav.module.ts":
  /*!**********************************************!*\
    !*** ./src/app/directives/hidenav.module.ts ***!
    \**********************************************/

  /*! exports provided: HidenavModule */

  /***/
  function srcAppDirectivesHidenavModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HidenavModule", function () {
      return HidenavModule;
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


    var _hide_header_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hide-header.directive */
    "./src/app/directives/hide-header.directive.ts");

    var HidenavModule = function HidenavModule() {
      _classCallCheck(this, HidenavModule);
    };

    HidenavModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]],
      exports: [_hide_header_directive__WEBPACK_IMPORTED_MODULE_2__["HideHeaderDirective"]]
    })], HidenavModule);
    /***/
  },

  /***/
  "./src/app/directives/shared.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/directives/shared.module.ts ***!
    \*********************************************/

  /*! exports provided: SharedModule */

  /***/
  function srcAppDirectivesSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _hidenav_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./hidenav.module */
    "./src/app/directives/hidenav.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"]],
      exports: [_hidenav_module__WEBPACK_IMPORTED_MODULE_2__["HidenavModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");

    var routes = [{
      path: '',
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var angular_code_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular-code-input */
    "./node_modules/angular-code-input/fesm2015/angular-code-input.js");

    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], angular_code_input__WEBPACK_IMPORTED_MODULE_8__["CodeInputModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-slides {\n  height: 64%;\n}\n\nimg {\n  margin: auto;\n}\n\n.left-head {\n  text-align: center;\n}\n\n.left-head h3 {\n  font-weight: bold;\n  font-size: 24px;\n  margin-bottom: 0px;\n}\n\n.left-head p {\n  font-size: 12px;\n  color: grey;\n  font-weight: bold;\n  width: 70%;\n  margin: auto;\n}\n\n.mblTag {\n  font-weight: bold;\n  font-size: 22px;\n}\n\n.btn_class {\n  color: white;\n  text-transform: none;\n  --border-radius: 35px;\n  margin-top: 15px;\n}\n\nion-item {\n  border: 1px solid #e3e3e3;\n  /*--padding-start: 5px !important;*/\n  margin: 16% 0px 0px;\n  border-radius: 10px;\n}\n\n.input-icon {\n  margin: 0px 10px 0px 0px;\n  /*border-right: 1px solid #e3e3e3;*/\n  padding: 14px 5px 8px 0px;\n}\n\n.error {\n  color: red;\n  font-size: 10px;\n}\n\n.welcome {\n  text-align: center;\n}\n\n.welcome p {\n  font-size: 14px;\n  margin-top: 0px;\n  color: #949393;\n}\n\n.welcome .number {\n  font-size: 16px;\n  font-weight: bold;\n  margin: 5px 0px 24px;\n}\n\n.welcome code-input {\n  --item-spacing: 10px;\n  --item-height: 3em;\n}\n\n.welcome .btn_class {\n  color: var(--ion-color-primary);\n  --background: #fff;\n}\n\n.welcome .otp-enter {\n  width: 75%;\n  margin: auto;\n}\n\n.welcome .footer p {\n  text-align: center;\n  font-weight: bold;\n  margin: 16px 0px;\n}\n\n.welcome .send {\n  margin: 16px 0px;\n}\n\n.welcome .send p {\n  font-size: 12px;\n  font-weight: bold;\n}\n\n.login, .image {\n  min-height: 100vh;\n}\n\n.page {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  min-height: 100vh;\n}\n\n.bg-primary-transparent {\n  background: #3199a1 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcbG9naW5cXGxvZ2luLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0UsV0FBQTtBQ0NOOztBRENJO0VBQ0ksWUFBQTtBQ0VSOztBREFJO0VBQ0ksa0JBQUE7QUNHUjs7QURGUTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FDSVo7O0FERlE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7QUNJWjs7QURESTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtBQ0lSOztBREZJO0VBQ0ksWUFBQTtFQUNBLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQ0tSOztBREhJO0VBQ0kseUJBQUE7RUFDQSxtQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUNNUjs7QURKSTtFQUNJLHdCQUFBO0VBQ0EsbUNBQUE7RUFDQSx5QkFBQTtBQ09SOztBRExJO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNRUjs7QUROQTtFQUVNLGtCQUFBO0FDUU47O0FEUEk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUNTTjs7QURQSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0FDU047O0FEUEk7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0FDU047O0FEUEk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0FDU047O0FEUEk7RUFDSSxVQUFBO0VBQ0EsWUFBQTtBQ1NSOztBRE5RO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0FDUVY7O0FETEk7RUFDUSxnQkFBQTtBQ09aOztBRE5RO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FDUVo7O0FESEE7RUFDRSxpQkFBQTtBQ01GOztBREpBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsaUJBQUE7QUNPRjs7QURKQTtFQUF5Qiw4QkFBQTtBQ1F6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tc2xpZGVzIHtcbiAgICAgIGhlaWdodDogNjQlO1xuICAgIH1cbiAgICBpbWcge1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgfVxuICAgIC5sZWZ0LWhlYWR7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgaDN7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBwe1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgY29sb3I6IGdyZXk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cbiAgICB9XG4gICAgLm1ibFRhZ3tcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICB9XG4gICAgLmJ0bl9jbGFzc3tcbiAgICAgICAgY29sb3I6IHdoaXRlIDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogMzVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICB9XG4gICAgaW9uLWl0ZW17XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gICAgICAgIC8qLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDsqL1xuICAgICAgICBtYXJnaW46IDE2JSAwcHggMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAuaW5wdXQtaWNvbntcbiAgICAgICAgbWFyZ2luOiAwcHggMTBweCAwcHggMHB4O1xuICAgICAgICAvKmJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlM2UzZTM7Ki9cbiAgICAgICAgcGFkZGluZzoxNHB4IDVweCA4cHggMHB4O1xuICAgIH1cbiAgICAuZXJyb3Ige1xuICAgICAgICBjb2xvcjogcmdiKDI1NSwgMCwgMCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICB9XG4ud2VsY29tZSB7XG4gICAgICBcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIGNvbG9yOiAjOTQ5MzkzO1xuICAgIH1cbiAgICAubnVtYmVyIHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbWFyZ2luOiA1cHggMHB4IDI0cHg7XG4gICAgfVxuICAgIGNvZGUtaW5wdXQge1xuICAgICAgLS1pdGVtLXNwYWNpbmc6IDEwcHg7XG4gICAgICAtLWl0ZW0taGVpZ2h0OiAzZW07XG4gICAgfVxuICAgIC5idG5fY2xhc3Mge1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgIC0tYmFja2dyb3VuZDogI2ZmZjtcbiAgICB9XG4gICAgLm90cC1lbnRlcntcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgIH1cbiAgICAuZm9vdGVyIHtcbiAgICAgICAgcCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICAgIG1hcmdpbjogMTZweCAwcHg7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlbmQge1xuICAgICAgICAgICAgbWFyZ2luOiAxNnB4IDBweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgIH1cbn1cblx0XG4ubG9naW4sIC5pbWFnZSB7XG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJnLXByaW1hcnktdHJhbnNwYXJlbnR7IGJhY2tncm91bmQ6IzMxOTlhMSAhaW1wb3J0YW50O31cbiIsImlvbi1zbGlkZXMge1xuICBoZWlnaHQ6IDY0JTtcbn1cblxuaW1nIHtcbiAgbWFyZ2luOiBhdXRvO1xufVxuXG4ubGVmdC1oZWFkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmxlZnQtaGVhZCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cbi5sZWZ0LWhlYWQgcCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6IGdyZXk7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5tYmxUYWcge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMnB4O1xufVxuXG4uYnRuX2NsYXNzIHtcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgLS1ib3JkZXItcmFkaXVzOiAzNXB4O1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2UzZTM7XG4gIC8qLS1wYWRkaW5nLXN0YXJ0OiA1cHggIWltcG9ydGFudDsqL1xuICBtYXJnaW46IDE2JSAwcHggMHB4O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uaW5wdXQtaWNvbiB7XG4gIG1hcmdpbjogMHB4IDEwcHggMHB4IDBweDtcbiAgLypib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjZTNlM2UzOyovXG4gIHBhZGRpbmc6IDE0cHggNXB4IDhweCAwcHg7XG59XG5cbi5lcnJvciB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLndlbGNvbWUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ud2VsY29tZSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGNvbG9yOiAjOTQ5MzkzO1xufVxuLndlbGNvbWUgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogNXB4IDBweCAyNHB4O1xufVxuLndlbGNvbWUgY29kZS1pbnB1dCB7XG4gIC0taXRlbS1zcGFjaW5nOiAxMHB4O1xuICAtLWl0ZW0taGVpZ2h0OiAzZW07XG59XG4ud2VsY29tZSAuYnRuX2NsYXNzIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgLS1iYWNrZ3JvdW5kOiAjZmZmO1xufVxuLndlbGNvbWUgLm90cC1lbnRlciB7XG4gIHdpZHRoOiA3NSU7XG4gIG1hcmdpbjogYXV0bztcbn1cbi53ZWxjb21lIC5mb290ZXIgcCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG4ud2VsY29tZSAuc2VuZCB7XG4gIG1hcmdpbjogMTZweCAwcHg7XG59XG4ud2VsY29tZSAuc2VuZCBwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxvZ2luLCAuaW1hZ2Uge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLnBhZ2Uge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmJnLXByaW1hcnktdHJhbnNwYXJlbnQge1xuICBiYWNrZ3JvdW5kOiAjMzE5OWExICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ionic-native/onesignal/ngx */
    "./node_modules/@ionic-native/onesignal/ngx/index.js");
    /* harmony import */


    var _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ionic-native/firebase-authentication/ngx */
    "./node_modules/@ionic-native/firebase-authentication/ngx/index.js");
    /* harmony import */


    var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ionic-native/device/ngx */
    "./node_modules/@ionic-native/device/ngx/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_9___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var LoginPage =
    /*#__PURE__*/
    function () {
      function LoginPage(router, platform, device, api, util, navCtrl, translate, oneSignal, firebaseAuthentication, modalController, formBuilder, menu) {
        var _this3 = this;

        _classCallCheck(this, LoginPage);

        this.router = router;
        this.platform = platform;
        this.device = device;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.oneSignal = oneSignal;
        this.firebaseAuthentication = firebaseAuthentication;
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.menu = menu;
        this.login = {
          mobile: ''
        };
        this.submitted = false;
        this.isLogin = false;
        this.splash = [];
        this.otpSent = false;
        this.phoneNumber = "";
        this.stepOne = false;
        this.timer = 60;
        this.getSreens();
        this.loginForm = this.formBuilder.group({
          phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["Validators"].maxLength(10)]]
        });

        if (sessionStorage.getItem('loginStatus') == "true") {
          this.menu.enable(false);
          this.router.navigate(['/tabs/tab1']);
          this.api.isSignedIn = true;
        } else if (sessionStorage.getItem('loginStatus') == "false") {
          this.api.isSignedIn = false;
        }

        this.oneSignal.getIds().then(function (data) {
          console.log('iddddd==========', data);
          localStorage.setItem('fcm', data.userId);
        });
        platform.ready().then(function () {
          _this3.deviceplt = _this3.device.platform;

          if (_this3.platform.is('android') || _this3.platform.is('ios')) {
            _this3.uuid = _this3.device.uuid;
          } else {
            console.log('Your device id is null', _this3.uuid = 'browser007bond');
          }
        });
        platform.ready().then(function () {
          if (_this3.platform.is('android')) {
            _this3.isDevice = 'android';
            _this3.uuid = _this3.device.uuid;
          } else if (_this3.platform.is('ios')) {
            _this3.isDevice = 'ios';
            _this3.uuid = _this3.device.uuid;
          } else {
            _this3.isDevice = 'browser';
          }
        });
      }

      _createClass(LoginPage, [{
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          this.menu.enable(false);
        }
      }, {
        key: "getSreens",
        value: function getSreens() {
          var _this4 = this;

          this.api.getOnboarding().then(function (data) {
            _this4.splash = data;
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this4.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "sendOTP",
        value: function sendOTP() {
          var _this5 = this;

          this.util.show('Please wait....');
          this.submitted = true;
          this.isLogin = true;
          var concatphone = document.getElementById("phoneNumber").value;
          this.user_phone = concatphone;
          console.log(concatphone);
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            uid: id.toString(),
            createdOn: new Date(),
            phone: concatphone,
            deviceId: this.uuid,
            name: '',
            imagePath: '',
            email: '',
            type: 'user',
            status: 'active',
            fcm_token: localStorage.getItem('fcm') ? localStorage.getItem('fcm') : ''
          };
          this.api.getUser(concatphone).then(function (data) {
            console.log(data);

            if (data.length == 0) {
              console.log('user not exist');

              _this5.api.selfRegistration(id.toString(), param).then(function (userData) {
                console.log(_this5.user_phone);

                _this5.api.sendOtp(_this5.user_phone).subscribe(function (data) {
                  console.log(data);
                  _this5.isLogin = false;

                  _this5.util.hide();

                  _this5.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

                  _this5.stepOne = true;

                  _this5.startTimer();
                }, function (error) {
                  _this5.util.hide();

                  console.log('err', error);
                });
              }).catch(function (err) {
                if (err) {
                  _this5.util.hide();

                  console.log(err);

                  _this5.util.showToast("".concat(err), 'danger', 'bottom');
                }
              }).then(function (el) {
                return _this5.isLogin = false;
              });
            } else {
              console.log('user exist');
              _this5.isLogin = false;

              _this5.api.sendOtp(concatphone).subscribe(function (data) {
                console.log(data);
                _this5.otpSent = true;
                _this5.phoneNumber = concatphone;

                _this5.util.hide();

                _this5.util.showToast('OTP has been sent successfully', 'primary', 'bottom');

                _this5.stepOne = true;

                _this5.startTimer();
              }, function (error) {
                _this5.util.hide();

                console.log('err', error);
              });
            }
          }, function (error) {
            _this5.util.hide();

            console.log(error);
          });
        }
      }, {
        key: "back",
        value: function back() {
          this.stepOne = false;
        }
      }, {
        key: "startTimer",
        value: function startTimer() {
          this.intervalVar = setInterval(function () {
            if (this.timer > 0) {
              this.timer--;
            }
          }.bind(this), 1000);
        } // this called every time when user changed the code

      }, {
        key: "onCodeChanged",
        value: function onCodeChanged(code) {
          console.log(code);
        } // this called only if user entered full code

      }, {
        key: "onCodeCompleted",
        value: function onCodeCompleted(code) {
          console.log(code);
          this.otp = code;
        }
      }, {
        key: "verifyOtp",
        value: function verifyOtp() {
          var _this6 = this;

          this.util.show('Please wait....');
          this.isLogin = true;
          var data = {
            otp: this.otp,
            mobile: this.user_phone
          };
          console.log(data);
          this.api.verifyOtp(data).subscribe(function (data) {
            console.log(data);
            _this6.success = data;

            if (_this6.success.status == "STATUS_OK") {
              _this6.api.getUser(_this6.user_phone).then(function (data) {
                console.log(data);

                if (data && data.length) {
                  _this6.userData = data[0];
                  console.log(_this6.userData.uid);
                  sessionStorage.setItem('uid', _this6.userData.uid);
                  localStorage.setItem('help', _this6.userData.uid);

                  _this6.updateUserDevice();

                  localStorage.setItem('mobile', _this6.userData.phone);
                  sessionStorage.setItem('loginStatus', "true");
                  _this6.isLogin = false;
                  _this6.api.isSignedIn = true;
                  localStorage.setItem('cartdata', JSON.stringify({}));
                  localStorage.setItem('selectedLanguage', 'en');

                  _this6.util.publishLoggedIn('LoggedIn');

                  _this6.util.publishLoggedInStatus('true');

                  _this6.menu.enable(false);

                  _this6.util.hide();

                  _this6.util.showToast(_this6.success.Message, 'primary', 'bottom');

                  _this6.router.navigate(['/home']);
                } else {
                  _this6.util.hide();

                  _this6.util.showToast('Something went wrong. Please try again later!', 'danger', 'bottom');
                }
              }, function (error) {
                _this6.util.hide();

                console.log(error);
              });
            } else {
              _this6.util.hide();

              _this6.util.showToast(_this6.success.Message, 'danger', 'bottom');
            }
          }, function (error) {
            _this6.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "updateUserDevice",
        value: function updateUserDevice() {
          var uid = sessionStorage.getItem('uid');
          var date = new Date();
          var modifiedOn = moment__WEBPACK_IMPORTED_MODULE_9__(date).format("YYYY-MM-DD hh:mm:ss A");
          var id = Math.floor(100000000 + Math.random() * 900000000);
          var param = {
            modifiedOn: modifiedOn,
            isDevice: this.isDevice,
            deviceId: this.uuid
          };
          this.api.updateProfile(uid, param).then(function (data) {
            console.log(data);
          }).catch(function (err) {
            if (err) {
              console.log(err); // this.util.showToast(`${err}`, 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "resend",
        value: function resend() {
          var _this7 = this;

          this.util.show('Please wait....');
          this.timer = 60;
          this.startTimer();
          this.api.sendOtp(this.user_phone).subscribe(function (data) {
            _this7.util.hide();

            _this7.util.showToast('OTP has been sent successfully', 'primary', 'bottom');
          }, function (error) {
            _this7.util.hide();

            console.log('err', error);
          });
        }
      }, {
        key: "skip",
        value: function skip() {
          this.router.navigate(['/home']);
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"]
      }, {
        type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"]
      }, {
        type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"]
      }, {
        type: _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"]
      }, {
        type: _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlides"], {
      static: true
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["IonSlides"])], LoginPage.prototype, "slides", void 0);
    LoginPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["Platform"], _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_8__["Device"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["NavController"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateService"], _ionic_native_onesignal_ngx__WEBPACK_IMPORTED_MODULE_6__["OneSignal"], _ionic_native_firebase_authentication_ngx__WEBPACK_IMPORTED_MODULE_7__["FirebaseAuthentication"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["ModalController"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormBuilder"], _ionic_angular__WEBPACK_IMPORTED_MODULE_11__["MenuController"]])], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map