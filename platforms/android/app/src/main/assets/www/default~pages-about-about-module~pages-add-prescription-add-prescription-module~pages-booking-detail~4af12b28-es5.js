function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footercontainer\">\n<div class=\"footertop\">\n<div class=\"container\">\n<div class=\"row1\">\n<div class=\"col-md-4 colu\">\n<div class=\"footcont\">\n<div class=\"footheading\">Way2lab.com</div>\n<div [innerHtml]=\"address\">\n</div>\n<div><ion-icon name=\"mail\" style=\"padding-top: 4px;float: left;\"></ion-icon>&nbsp;<a href=\"mailto:{{settings?.contact_email}}\">{{settings?.contact_email}}</a></div>\n<div><ion-icon name=\"call\"></ion-icon>&nbsp; <a href=\"tel:+919311213388\">{{settings?.contact_phone}}</a></div>\n\n</div>\n\n<div class=\"socialfoot\" style=\"margin-top:7px;\"> \n <a [href]=\"settings?.facebook\"  target=\"_blank\"><img src=\"assets/social_01.png\"></a>\n <a [href]=\"settings?.twitter\"  target=\"_blank\"><img src=\"assets/social_02.png\"></a>\n <a [href]=\"settings?.linkedin\"  target=\"_blank\"><img src=\"assets/social_03.png\"></a>\n <a [href]=\"settings?.youtube\"  target=\"_blank\"><img src=\"assets/social_04.png\"></a>\n <a [href]=\"settings?.instragram\"  target=\"_blank\"><img src=\"assets/social_05.png\"></a>\n</div>\n\n\n</div>\n\n<div class=\"col-md-2 colu\">\n<div class=\"footheading\">Browse</div>\n<div class=\"footcont\">\n<ul>\n<li><a href=\"/health-packages\">Health Packages</a></li>\n<li><a href=\"/offers\" >Exclusive Offers</a></li>\n<li><a href=\"/contact\">Report an Issue</a></li>\n<li><a href=\"/contactus\" >Help</a></li>\n<li><a href=\"/faq\" >FAQ</a></li>\n</ul>\n</div>\n</div>\n<div class=\"col-md-3 colu\">\n<div class=\"footheading\">Quick Links</div>\n<div class=\"footcont\">\n<ul>\n<li><a href=\"/about\">About Us</a></li>\n<li><a href=\"/terms\">Terms of Service</a></li>\n<li><a href=\"/privacy\">Privacy Policy</a></li>\n\n <li><a href=\"/refund\" >Refund & Cancellation Policy</a></li> \n</ul>\n</div>\n</div>\n\n<div class=\"col-md-3 colu\">\n<div class=\"footheading\">Recognitions</div>\n<div class=\"footcont\">\n<ion-slides  [options]=\"slideOptsmob2\">\n      <ion-slide><img src=\"assets/award1.jpg\"></ion-slide>\n\t  <ion-slide><img src=\"assets/award2.jpg\"></ion-slide>\n\t  <ion-slide><img src=\"assets/award3.jpg\"></ion-slide>\n    </ion-slides></div>\n</div>\n</div>\n</div>\n</div>\n<div class=\"footerbot\">\n<div class=\"container\">\n<div class=\"row\">\n <div class=\"col-md-12\" >© 2022 All rights reserved.</div> \n</div>\n</div></div>\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"ct-header-top\" class=\"ct-header-top1\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"ct-topbar-wellcome\">\n\t\t\t    <img src=\"assets/cal.jpg\" style=\"width: 23px;padding-right: 5px;\">  \n\t\t\t    <a href=\"tel:+919311213388\" style=\"color: white;\">{{settings?.contact_phone}}</a> \n\t\t\t</div>\n\t\t\t <div class=\" mobileview\">\n <ion-buttons slot=\"start\" class=\"menumob\">\n  <ion-menu-button></ion-menu-button>\n</ion-buttons></div>\n\t\t    <div class=\"ct-topbar-city\" >\n\t\t        <ion-select  interface=\"popover\" *ngIf=\"cities && cities.length\" [(ngModel)]=\"city\"  class=\"sel\" (ngModelChange)=\"selectCity(city)\" mode=\"ios\">\n\t\t            <ion-select-option *ngFor=\"let item of cities\" [value]=\"item.city\">{{item.city}}</ion-select-option>\n\t\t        </ion-select>\n\t\t    </div>\n\t\t\t<div class=\"ct-topbar-cart\">\n\t\t\t\t<div class=\"header-right-item h-btn-cart\"> \n\t\t\t\t\t<!-- <a class=\"\"  (click)=\"cart()\" *ngIf=\"logedIn\">My Cart &nbsp; | &nbsp;</a>  -->\n\t\t\t\t\t<a class=\"\"  (click)=\"profile()\" *ngIf=\"logedIn\">My Account</a> \n\t\t\t\t\t<a class=\"\"  (click)=\"login()\" *ngIf=\"!logedIn\" >Login/SignUp</a> \n\t\t\t\t\t<!-- <a class=\"\"  (click)=\"logout()\" *ngIf=\"logedIn\" >Logout</a>   -->\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div id=\"ct-header\" class=\"ct-header-main\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\t\n\n\t\t\t<div class=\"col-lg-2 col-xl-2 p-0 logo\">\n\t\t\t\t<div class=\" ct-header-navigation-left\" (click)=\"home()\">\n\t\t\t\t\t<img src=\"assets/way2lab.svg\" class=\"logo_img\">\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-sm-2 col-md-6 col-lg-7 col-xl-7 desktopview\"  >\n\t\t\t\t<div class=\"ct-header-navigation-right\">\n\t\t\t\t\t<div class=\"ct-main-navigation\">\n\t\t\t\t\t\t<div class=\"ct-main-navigation-inner\">\n\t\t\t\t\t\t<div class=\"navbar\">\n  <a href=\"#\">Home</a>\n  \n  <div class=\"dropdown\">\n    <button class=\"dropbtn\">Health Risks \n      <i class=\"fa fa-caret-down\"></i>\n    </button>\n    <div class=\"col-sm-2 col-md-5 col-lg-5 col-xl-5 dropdown-content\">\n      <div class=\"rowww\">\n        <div class=\"column\">\n          <a *ngFor=\"let item of risks\" (click)=\"viewRisk(item)\">{{item.name}}</a>\n        </div>\n      </div>\n    </div>\n  </div>\n <div class=\"dropdown\">\n    <button class=\"dropbtn\">Health Habits\n      <i class=\"fa fa-caret-down\"></i>\n    </button>\n    <div class=\"col-sm-2 col-md-4 col-lg-4 col-xl-4 dropdown-content\">\n      <div class=\"rowww\">\n        <div class=\"column2\">\n          <a *ngFor=\"let item of habbits\" (click)=\"viewHabit(item)\">{{item.name}}</a>\n        </div>\n      </div>\n    </div>\n  </div>  \n<a (click)=\"corporate()\">Corporate</a>\n<a (click)=\"faq()\">FAQ</a> \n<!-- <a (click)=\"offers()\">Offers</a> -->  \n</div>\n\t\t\t\t\t\t\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-3 col-xl-3 p-0 uploadpres\" style=\"text-align: right;\"> \n\t\t\t\t<div class=\"uplopre\" slot=\"end\">\n\t\t\t\t\n\t\t\t\t\n\n\t\t\t \t\t<a href=\"/cart\" class=\"cart\">\n\t\t\t\t        <ion-icon name=\"cart-outline\"></ion-icon>\n\t\t\t\t    </a>\n\t\t\t\t    <a href=\"/add-prescription\" class=\"prescription\">\n\t\t\t\t        <img src=\"assets/upload_preButt.png\" style=\"width: 20px;padding-right: 5px;\">Upload Prescription\n\t\t\t\t    </a>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n    <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\" (click)=\"openQuery()\" style=\"cursor: pointer;\">\n        <img src=\"assets/call_but.png\">\n    </ion-fab>\n    <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\" style=\"cursor: pointer;\">\n        <a href=\"https://api.whatsapp.com/send?phone=919311213388\"  target=\"_blank\"><img src=\"assets/watsapp.png\" width=\"\"></a>\n    </ion-fab>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsPopoverPopoverComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-list lines=\"none\">\n  <ion-item (click)=\"select('edit')\">\n    <ion-label color=\"secondary\">{{'EDIT' | translate}}</ion-label>\n  </ion-item>\n  <ion-item (click)=\"select('delete')\">\n    <ion-label color=\"danger\">{{'DELETE' | translate}}</ion-label>\n  </ion-item>\n</ion-list>";
    /***/
  },

  /***/
  "./src/app/components/components.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/components/components.module.ts ***!
    \*************************************************/

  /*! exports provided: ComponentsModule */

  /***/
  function srcAppComponentsComponentsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ComponentsModule", function () {
      return ComponentsModule;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../components/popover/popover.component */
    "./src/app/components/popover/popover.component.ts");
    /* harmony import */


    var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../components/header/header.component */
    "./src/app/components/header/header.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _directives_shared_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var angular_code_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-code-input */
    "./node_modules/angular-code-input/fesm2015/angular-code-input.js"); // This File Is Required For Custom Components
    // import { SigninComponent } from './signin/signin.component';


    var components = [_components_popover_popover_component__WEBPACK_IMPORTED_MODULE_5__["PopoverComponent"], // SigninComponent,
    _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]];

    var ComponentsModule = function ComponentsModule() {
      _classCallCheck(this, ComponentsModule);
    };

    ComponentsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [].concat(components),
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], angular_code_input__WEBPACK_IMPORTED_MODULE_9__["CodeInputModule"], _directives_shared_module__WEBPACK_IMPORTED_MODULE_8__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]],
      exports: [].concat(components)
    })], ComponentsModule);
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/footer/footer.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".socialfoot a {\n  margin: 0 5px;\n}\n\n.socialfoot img {\n  width: 20px;\n}\n\n.footcont a:hover {\n  color: #fff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb290ZXJcXGZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtBQ0NKOztBRENBO0VBQ0ksV0FBQTtBQ0VKOztBRENBO0VBQ0ksc0JBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWxmb290IGEge1xyXG4gICAgbWFyZ2luOjAgNXB4O1xyXG59XHJcbi5zb2NpYWxmb290IGltZyB7XHJcbiAgICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLmZvb3Rjb250IGE6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmYgIWltcG9ydGFudDt9IiwiLnNvY2lhbGZvb3QgYSB7XG4gIG1hcmdpbjogMCA1cHg7XG59XG5cbi5zb2NpYWxmb290IGltZyB7XG4gIHdpZHRoOiAyMHB4O1xufVxuXG4uZm9vdGNvbnQgYTpob3ZlciB7XG4gIGNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts"); //import { ScreensizeService } from 'src/app/services/screensize.service';


    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent(router, navCtrl, callNumber, util, api, modalController) {
        _classCallCheck(this, FooterComponent);

        this.router = router;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.modalController = modalController;
        this.logedIn = false;
        this.slideOptsmob2 = {
          slidesPerView: 1,
          pagination: true,
          autoplay: true,
          pager: true,
          spaceBetween: 10
        };
        /* 	this.screensizeService.isDesktopView().subscribe(isDesktop => {
        if (this.isDesktop && !isDesktop) {
          // Reload because our routing is out of place
          console.log(this.isDesktop);
          window.location.reload();
        }
             this.isDesktop = isDesktop;
        }); */
        // this.cates = this.navParam.get('data');

        if (sessionStorage.getItem('loginStatus') == "true") {
          this.api.isSignedIn = true;
          this.logedIn = this.api.isSignedIn;
        } else {
          //this.router.navigate(['/tabs/tab1']);  
          this.api.isSignedIn = false;
          this.logedIn = this.api.isSignedIn;
        }
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.api.getSettings().then(function (data) {
            _this.settings = data[0];
            _this.address = _this.settings.address;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "packages",
        value: function packages() {
          this.router.navigate(['health-packages']);
        }
      }, {
        key: "offers",
        value: function offers() {
          this.router.navigate(['offers']);
        }
      }, {
        key: "health",
        value: function health() {
          this.router.navigate(['/health-habits']);
        }
      }, {
        key: "risk",
        value: function risk() {
          this.router.navigate(['/risks']);
        }
      }, {
        key: "faq",
        value: function faq() {
          this.router.navigate(['/faq']);
        }
      }, {
        key: "refund",
        value: function refund() {
          this.router.navigate(['/refund']);
        }
      }, {
        key: "profile",
        value: function profile() {
          if (this.api.isSignedIn == true) {
            this.router.navigate(['/profile']);
          } else {
            this.util.showLoginAlert();
          }
        }
      }]);

      return FooterComponent;
    }();

    FooterComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
      }];
    };

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/footer/footer.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]])], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/header/header.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/header/header.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHeaderHeaderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\n  background: var(--ion-color-primary);\n}\n.header ion-icon {\n  color: white;\n  font-size: 27px;\n}\n.header .lefthead {\n  display: -webkit-box;\n  display: flex;\n  position: absolute;\n  margin-top: 10px;\n}\n.header .lefthead ion-menu-button {\n  color: white;\n  font-size: xx-large;\n}\n.header .lefthead ion-label {\n  font-size: 18px;\n  color: white;\n  font-weight: 600;\n  margin: 0px 5px;\n  position: relative;\n  left: 10px;\n}\n.header .lefthead span {\n  color: #dbbf5e;\n  margin-left: 30px;\n}\n.header .righthead {\n  padding: 16px 10px;\n  display: -webkit-box;\n  display: flex;\n  float: right;\n}\n.header .sc-ion-searchbar-md {\n  -webkit-padding-end: 30px !important;\n          padding-inline-end: 30px !important;\n  font-size: 12px !important;\n}\n.menu {\n  margin-top: 7px;\n}\n.menu ion-icon {\n  font-size: x-large;\n  color: var(--ion-color-secondary);\n}\n.social img {\n  padding: 0 4px;\n}\n.ct-header-main {\n  margin: 12px 0;\n  padding-bottom: 10px;\n  box-shadow: 0 3px 6px -1px #e2e2e2;\n}\n.ct-main-menu > li span {\n  cursor: pointer;\n  padding: 5px;\n}\n.ct-topbar-city {\n  margin-right: 20% !important;\n}\n.ct-topbar-city ion-select {\n  padding: 0px;\n  font-size: 13px;\n}\n.ct-topbar-city ion-select::part(icon) {\n  margin-top: 1px;\n  width: 17px;\n  opacity: 1 !important;\n}\napp-home.ion-page .ct-header-main {\n  margin: 10px 0;\n  padding-bottom: 10px;\n  box-shadow: none !important;\n}\n.uplopre .cart {\n  background: #fff;\n}\n.uplopre .cart ion-icon {\n  color: black;\n  font-size: xx-large;\n  margin-right: 5px;\n}\n.uplopre .prescription {\n  position: relative;\n  top: -10px;\n}\n.navbar {\n  overflow: hidden;\n}\n.navbar a {\n  float: left;\n  font-size: 14px;\n  color: #000;\n  text-align: center;\n  padding: 14px 16px;\n  text-decoration: none;\n  cursor: pointer;\n}\n.dropdown {\n  float: left;\n  overflow: hidden;\n}\n.dropdown .dropbtn {\n  font-size: 14px !important;\n  border: none;\n  outline: none;\n  color: #000;\n  padding: 5px 20px;\n  background-color: inherit;\n  font: inherit;\n  margin: 0;\n}\n.navbar a:hover, .dropdown:hover .dropbtn {\n  background-color: #dddddd;\n}\n.dropdown-content {\n  display: none;\n  position: fixed;\n  background-color: #f0f0f0;\n  width: 100%;\n  z-index: 9999;\n}\n.dropdown:hover .dropdown-content {\n  display: block;\n}\n/* Create three equal columns that floats next to each other */\n.column {\n  min-height: 200px;\n}\n.column a {\n  float: none;\n  color: black;\n  padding: 6px;\n  text-decoration: none;\n  display: inline-block;\n  text-align: left;\n  width: 33%;\n}\n.column2 a {\n  float: none;\n  color: black;\n  padding: 6px;\n  text-decoration: none;\n  display: inline-block;\n  text-align: left;\n  width: 50%;\n}\n.column a:hover {\n  background: #dddddd !important;\n}\n/* Clear floats after the columns */\n.rowww:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */\n@media screen and (max-width: 600px) {\n  .column {\n    width: 100%;\n    height: 200px;\n    overflow: scroll;\n  }\n\n  .navbar {\n    overflow: hidden;\n    padding: 0;\n  }\n\n  .navbar a {\n    float: none;\n    font-size: 14px;\n    color: #000;\n    text-align: center;\n    padding: 14px 16px;\n    text-decoration: none;\n    cursor: pointer;\n  }\n\n  .dropdown {\n    float: none;\n    overflow: hidden;\n  }\n}\n.menumob {\n  height: 25px;\n}\nion-select::part(icon) {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxjb21wb25lbnRzXFxoZWFkZXJcXGhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBS0ksb0NBQUE7QUNISjtBRERJO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUNHUjtBREFJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0VSO0FERFE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUNHWjtBRERRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNHWjtBRERRO0VBQ0ksY0FBQTtFQUNBLGlCQUFBO0FDR1o7QURBSTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsWUFBQTtBQ0VSO0FEQUk7RUFDSSxvQ0FBQTtVQUFBLG1DQUFBO0VBQ0EsMEJBQUE7QUNFUjtBREVBO0VBQ0ksZUFBQTtBQ0NKO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0FDRVI7QURHQTtFQUFZLGNBQUE7QUNDWjtBREFBO0VBQWdCLGNBQUE7RUFBZSxvQkFBQTtFQUMvQixrQ0FBQTtBQ0tBO0FESkE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQ09KO0FETEE7RUFDSSw0QkFBQTtBQ1FKO0FEUEk7RUFDSSxZQUFBO0VBQ0EsZUFBQTtBQ1NSO0FEUEk7RUFDRyxlQUFBO0VBQ0EsV0FBQTtFQUFZLHFCQUFBO0FDVW5CO0FETEE7RUFDRSxjQUFBO0VBQ0Esb0JBQUE7RUFDQSwyQkFBQTtBQ1FGO0FESkk7RUFDSSxnQkFBQTtBQ09SO0FETlE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ1FaO0FETEk7RUFDSSxrQkFBQTtFQUNBLFVBQUE7QUNPUjtBREhBO0VBQ0UsZ0JBQUE7QUNNRjtBREhBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQXNCLGVBQUE7QUNPeEI7QURKQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtBQ09GO0FESkE7RUFDRSwwQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxhQUFBO0VBQ0EsU0FBQTtBQ09GO0FESkE7RUFDRSx5QkFBQTtBQ09GO0FESkE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EsV0FBQTtFQUVBLGFBQUE7QUNNRjtBREhBO0VBQ0UsY0FBQTtBQ01GO0FESEEsOERBQUE7QUFDQTtFQUNFLGlCQUFBO0FDTUY7QURIQTtFQUFXLFdBQUE7RUFDWCxZQUFBO0VBQ0EsWUFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNPQTtBREpBO0VBQVksV0FBQTtFQUNaLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQ1FBO0FETkE7RUFDRSw4QkFBQTtBQ1NGO0FETkEsbUNBQUE7QUFDQTtFQUNFLFdBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQ1NGO0FETkEseUdBQUE7QUFDQTtFQUNFO0lBQ0UsV0FBQTtJQUFZLGFBQUE7SUFDaEIsZ0JBQUE7RUNVRTs7RURSQTtJQUNBLGdCQUFBO0lBQ0EsVUFBQTtFQ1dBOztFRFRGO0lBQ0UsV0FBQTtJQUNBLGVBQUE7SUFDQSxXQUFBO0lBQ0Esa0JBQUE7SUFDQSxrQkFBQTtJQUNBLHFCQUFBO0lBQXNCLGVBQUE7RUNhdEI7O0VEVkY7SUFDRSxXQUFBO0lBQ0EsZ0JBQUE7RUNhQTtBQUNGO0FEVkE7RUFBVSxZQUFBO0FDYVY7QURYQTtFQUNDLFVBQUE7QUNjRCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gICAgaW9uLWljb24ge1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDI3cHg7XHJcbiAgICB9XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICAubGVmdGhlYWQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgaW9uLW1lbnUtYnV0dG9uIHtcclxuICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpb24tbGFiZWwge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwcHggNXB4OyAgXHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgbGVmdDogMTBweDsgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZGJiZjVlO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHRoZWFkIHtcclxuICAgICAgICBwYWRkaW5nOiAxNnB4IDEwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbG9hdDogIHJpZ2h0O1xyXG4gICAgfVxyXG4gICAgLnNjLWlvbi1zZWFyY2hiYXItbWQge1xyXG4gICAgICAgIHBhZGRpbmctaW5saW5lLWVuZDogMzBweCAhaW1wb3J0YW50O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWVudXtcclxuICAgIG1hcmdpbi10b3A6IDdweDtcclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IHgtbGFyZ2U7XHJcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xyXG4gICAgfVxyXG59XHJcbi5sb2dvX2ltZyB7IH1cclxuXHJcbi5zb2NpYWwgaW1ne3BhZGRpbmc6MCA0cHg7fVxyXG4uY3QtaGVhZGVyLW1haW57bWFyZ2luOiAxMnB4IDA7cGFkZGluZy1ib3R0b206IDEwcHg7XHJcbmJveC1zaGFkb3c6IDAgM3B4IDZweCAtMXB4ICNlMmUyZTI7fVxyXG4uY3QtbWFpbi1tZW51ID4gbGkgc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmN0LXRvcGJhci1jaXR5e1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCUgIWltcG9ydGFudDtcclxuICAgIGlvbi1zZWxlY3R7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIH1cclxuICAgIGlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xyXG4gICAgICAgbWFyZ2luLXRvcDogMXB4O1xyXG4gICAgICAgd2lkdGg6IDE3cHg7b3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuYXBwLWhvbWUuaW9uLXBhZ2UgLmN0LWhlYWRlci1tYWluIHtcclxuICBtYXJnaW46IDEwcHggMDtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi51cGxvcHJle1xyXG4gICAgLmNhcnR7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBibGFjaztcclxuICAgICAgICAgICAgZm9udC1zaXplOiB4eC1sYXJnZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnByZXNjcmlwdGlvbntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgIH1cclxufVxyXG5cclxuLm5hdmJhciB7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdmJhciBhIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMwMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDE0cHggMTZweDtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7Y3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDsgIFxyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHBhZGRpbmc6NXB4IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuICBmb250OiBpbmhlcml0O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2RkZGRkZDtcclxufVxyXG5cclxuLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgei1pbmRleDo5OTk5O1xyXG59XHJcblxyXG4uZHJvcGRvd246aG92ZXIgLmRyb3Bkb3duLWNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcblxyXG4vKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuLmNvbHVtbiB7XHJcbiAgbWluLWhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5jb2x1bW4gYSB7ZmxvYXQ6IG5vbmU7XHJcbmNvbG9yOiBibGFjaztcclxucGFkZGluZzogNnB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxudGV4dC1hbGlnbjogbGVmdDtcclxud2lkdGg6IDMzJTtcclxufVxyXG5cclxuLmNvbHVtbjIgYSB7ZmxvYXQ6IG5vbmU7XHJcbmNvbG9yOiBibGFjaztcclxucGFkZGluZzogNnB4O1xyXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbmRpc3BsYXk6IGlubGluZS1ibG9jaztcclxudGV4dC1hbGlnbjogbGVmdDtcclxud2lkdGg6IDUwJTtcclxufVxyXG4uY29sdW1uIGE6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNkZGRkZGQgISBpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93d3c6YWZ0ZXIge1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgZGlzcGxheTogdGFibGU7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAuY29sdW1uIHtcclxuICAgIHdpZHRoOiAxMDAlO2hlaWdodDogMjAwcHg7XHJcbm92ZXJmbG93OiBzY3JvbGw7XHJcbiAgfVxyXG4gIC5uYXZiYXJ7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbi5uYXZiYXIgYSB7XHJcbiAgZmxvYXQ6IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiAjMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO2N1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uZHJvcGRvd24ge1xyXG4gIGZsb2F0OiBub25lO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxufVxyXG5cclxuLm1lbnVtb2Ige2hlaWdodDogMjVweDt9XHJcblxyXG5pb24tc2VsZWN0OjpwYXJ0KGljb24pIHsgXHJcblx0b3BhY2l0eTogMTtcclxufSIsIi5oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG4uaGVhZGVyIGlvbi1pY29uIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXNpemU6IDI3cHg7XG59XG4uaGVhZGVyIC5sZWZ0aGVhZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cbi5oZWFkZXIgLmxlZnRoZWFkIGlvbi1tZW51LWJ1dHRvbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiB4eC1sYXJnZTtcbn1cbi5oZWFkZXIgLmxlZnRoZWFkIGlvbi1sYWJlbCB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW46IDBweCA1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMTBweDtcbn1cbi5oZWFkZXIgLmxlZnRoZWFkIHNwYW4ge1xuICBjb2xvcjogI2RiYmY1ZTtcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XG59XG4uaGVhZGVyIC5yaWdodGhlYWQge1xuICBwYWRkaW5nOiAxNnB4IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsb2F0OiByaWdodDtcbn1cbi5oZWFkZXIgLnNjLWlvbi1zZWFyY2hiYXItbWQge1xuICBwYWRkaW5nLWlubGluZS1lbmQ6IDMwcHggIWltcG9ydGFudDtcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XG59XG5cbi5tZW51IHtcbiAgbWFyZ2luLXRvcDogN3B4O1xufVxuLm1lbnUgaW9uLWljb24ge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbn1cblxuLnNvY2lhbCBpbWcge1xuICBwYWRkaW5nOiAwIDRweDtcbn1cblxuLmN0LWhlYWRlci1tYWluIHtcbiAgbWFyZ2luOiAxMnB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggLTFweCAjZTJlMmUyO1xufVxuXG4uY3QtbWFpbi1tZW51ID4gbGkgc3BhbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4uY3QtdG9wYmFyLWNpdHkge1xuICBtYXJnaW4tcmlnaHQ6IDIwJSAhaW1wb3J0YW50O1xufVxuLmN0LXRvcGJhci1jaXR5IGlvbi1zZWxlY3Qge1xuICBwYWRkaW5nOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbi5jdC10b3BiYXItY2l0eSBpb24tc2VsZWN0OjpwYXJ0KGljb24pIHtcbiAgbWFyZ2luLXRvcDogMXB4O1xuICB3aWR0aDogMTdweDtcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xufVxuXG5hcHAtaG9tZS5pb24tcGFnZSAuY3QtaGVhZGVyLW1haW4ge1xuICBtYXJnaW46IDEwcHggMDtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLnVwbG9wcmUgLmNhcnQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuLnVwbG9wcmUgLmNhcnQgaW9uLWljb24ge1xuICBjb2xvcjogYmxhY2s7XG4gIGZvbnQtc2l6ZTogeHgtbGFyZ2U7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuLnVwbG9wcmUgLnByZXNjcmlwdGlvbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtMTBweDtcbn1cblxuLm5hdmJhciB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5uYXZiYXIgYSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE0cHggMTZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kcm9wZG93biB7XG4gIGZsb2F0OiBsZWZ0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4uZHJvcGRvd24gLmRyb3BidG4ge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgYm9yZGVyOiBub25lO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogIzAwMDtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XG4gIGZvbnQ6IGluaGVyaXQ7XG4gIG1hcmdpbjogMDtcbn1cblxuLm5hdmJhciBhOmhvdmVyLCAuZHJvcGRvd246aG92ZXIgLmRyb3BidG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkZGRkO1xufVxuXG4uZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5kcm9wZG93bjpob3ZlciAuZHJvcGRvd24tY29udGVudCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKiBDcmVhdGUgdGhyZWUgZXF1YWwgY29sdW1ucyB0aGF0IGZsb2F0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbi5jb2x1bW4ge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLmNvbHVtbiBhIHtcbiAgZmxvYXQ6IG5vbmU7XG4gIGNvbG9yOiBibGFjaztcbiAgcGFkZGluZzogNnB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgd2lkdGg6IDMzJTtcbn1cblxuLmNvbHVtbjIgYSB7XG4gIGZsb2F0OiBub25lO1xuICBjb2xvcjogYmxhY2s7XG4gIHBhZGRpbmc6IDZweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHdpZHRoOiA1MCU7XG59XG5cbi5jb2x1bW4gYTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNkZGRkZGQgIWltcG9ydGFudDtcbn1cblxuLyogQ2xlYXIgZmxvYXRzIGFmdGVyIHRoZSBjb2x1bW5zICovXG4ucm93d3c6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgY2xlYXI6IGJvdGg7XG59XG5cbi8qIFJlc3BvbnNpdmUgbGF5b3V0IC0gbWFrZXMgdGhlIHRocmVlIGNvbHVtbnMgc3RhY2sgb24gdG9wIG9mIGVhY2ggb3RoZXIgaW5zdGVhZCBvZiBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jb2x1bW4ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgfVxuXG4gIC5uYXZiYXIge1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgcGFkZGluZzogMDtcbiAgfVxuXG4gIC5uYXZiYXIgYSB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGNvbG9yOiAjMDAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC5kcm9wZG93biB7XG4gICAgZmxvYXQ6IG5vbmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxufVxuLm1lbnVtb2Ige1xuICBoZWlnaHQ6IDI1cHg7XG59XG5cbmlvbi1zZWxlY3Q6OnBhcnQoaWNvbikge1xuICBvcGFjaXR5OiAxO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/header/header.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/header/header.component.ts ***!
    \*******************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppComponentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ionic-native/call-number/ngx */
    "./node_modules/@ionic-native/call-number/ngx/index.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts"); //import { ScreensizeService } from 'src/app/services/screensize.service';


    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(router, navCtrl, callNumber, util, api) {
        var _this2 = this;

        _classCallCheck(this, HeaderComponent);

        this.router = router;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.util = util;
        this.api = api;
        this.cities = [];
        this.logedIn = false;
        this.city = '';
        this.habbits = [];
        this.risks = [];
        this.showCity = false;
        this.getCities();
        this.util.subscribeCityLocation().subscribe(function (data) {
          console.log('after trigger', data);
          _this2.showCity = true;
          _this2.city = data;
          localStorage.setItem('city', _this2.city); // setTimeout(() => {
          //      console.log('after trigger',data)
          //   this.showCity = true;
          //   this.city = data;
          //   localStorage.setItem('city',this.city)
          // }, 500);
        });
        this.util.subscribeLoggedInStatus().subscribe(function (data) {
          console.log(data);
          _this2.api.isSignedIn = true;
          _this2.logedIn = _this2.api.isSignedIn;
          console.log(_this2.logedIn);
        });

        if (sessionStorage.getItem('loginStatus') == "true") {
          this.api.isSignedIn = true;
          this.logedIn = this.api.isSignedIn;
        } else {
          //this.router.navigate(['/tabs/tab1']);  
          this.api.isSignedIn = false;
          this.logedIn = this.api.isSignedIn;
        }
      } //ngAfterViewInit(){}

      /*   ngAfterViewInit(){
      
      $(document).ready(function(){
      
       //alert('JQuery is working!!');
      
       });
      
       } */


      _createClass(HeaderComponent, [{
        key: "getCities",
        value: function getCities() {
          var _this3 = this;

          this.api.getCities().then(function (data) {
            _this3.cities = data;

            _this3.cities.sort(function (a, b) {
              return a.city.localeCompare(b.city);
            });

            _this3.city = localStorage.getItem('city');
            console.log(_this3.cities);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "selectCity",
        value: function selectCity(data) {
          console.log(data);
          this.city = data;
          this.util.publishCityLocation(this.city);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.api.getSettings().then(function (data) {
            _this4.settings = data[0];
          }).catch(function (error) {
            console.log(error);
          });
          this.api.getHealthHabbits().then(function (data) {
            _this4.habbits = data;
          }).catch(function (error) {
            console.log(error);
          });
          this.api.getHealthRisk().then(function (data) {
            _this4.risks = data;
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "packages",
        value: function packages() {
          this.router.navigate(['health-packages']);
        }
      }, {
        key: "cart",
        value: function cart() {
          this.router.navigate(['cart']);
        }
      }, {
        key: "offers",
        value: function offers() {
          this.router.navigate(['offers']);
        }
      }, {
        key: "corporate",
        value: function corporate() {
          this.router.navigate(['corporate']);
        }
      }, {
        key: "viewRisk",
        value: function viewRisk(data) {
          localStorage.setItem('riskid', data.id);
          this.router.navigate(['risk', data.name]);
        }
      }, {
        key: "viewHabit",
        value: function viewHabit(data) {
          localStorage.setItem('habitid', data.id);
          this.router.navigate(['habit', data.name]);
        }
      }, {
        key: "faq",
        value: function faq() {
          this.router.navigate(['/faq']);
        }
      }, {
        key: "home",
        value: function home() {
          this.router.navigate(['/home']);
        }
      }, {
        key: "profile",
        value: function profile() {
          if (this.api.isSignedIn == true) {
            this.router.navigate(['/profile']);
          } else {
            this.util.showLoginAlert();
          }
        }
      }, {
        key: "onClick",
        value: function onClick(data) {
          console.log(data);
          this.router.navigate([data]);
        }
      }, {
        key: "openQuery",
        value: function openQuery() {
          this.util.publishQuery('true');
        }
      }, {
        key: "search",
        value: function search() {
          this.router.navigate(['search']);
        }
      }, {
        key: "login",
        value: function login() {
          this.router.navigate(['login']);
        }
      }, {
        key: "logout",
        value: function logout() {
          var _this5 = this;

          this.api.logout().then(function (data) {
            sessionStorage.setItem('loginStatus', "false");
            _this5.api.isSignedIn = false;
            sessionStorage.setItem('uid', '');

            _this5.router.navigate(['home']);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "uploadPrescription",
        value: function uploadPrescription() {
          this.router.navigate(['add-prescription']);
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }, {
        type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.scss */
      "./src/app/components/header/header.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"]])], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/popover/popover.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsPopoverPopoverComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9wb3Zlci9wb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/components/popover/popover.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/popover/popover.component.ts ***!
    \*********************************************************/

  /*! exports provided: PopoverComponent */

  /***/
  function srcAppComponentsPopoverPopoverComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PopoverComponent", function () {
      return PopoverComponent;
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

    var PopoverComponent =
    /*#__PURE__*/
    function () {
      function PopoverComponent(popoverController) {
        _classCallCheck(this, PopoverComponent);

        this.popoverController = popoverController;
      }

      _createClass(PopoverComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "select",
        value: function select(type) {
          this.popoverController.dismiss(type);
        }
      }]);

      return PopoverComponent;
    }();

    PopoverComponent.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]
      }];
    };

    PopoverComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-popover',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./popover.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/popover/popover.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./popover.component.scss */
      "./src/app/components/popover/popover.component.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["PopoverController"]])], PopoverComponent);
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
          var _this6 = this;

          this.header = this.header.el;
          this.domCtrl.write(function () {
            _this6.renderer.setStyle(_this6.header, 'transition', 'margin-top 700ms');
          });
        }
      }, {
        key: "onContentScroll",
        value: function onContentScroll($event) {
          var _this7 = this;

          if ($event.detail.scrollTop > this.lastY) {
            this.domCtrl.write(function () {
              _this7.renderer.setStyle(_this7.header, 'margin-top', "-".concat(_this7.header.clientHeight, "px"));
            });
          } else {
            this.domCtrl.write(function () {
              _this7.renderer.setStyle(_this7.header, 'margin-top', '0');
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
  }
}]);
//# sourceMappingURL=default~pages-about-about-module~pages-add-prescription-add-prescription-module~pages-booking-detail~4af12b28-es5.js.map