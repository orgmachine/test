function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-about-about-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAboutAboutPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n\n<ion-content class=\"\">\n\n<div class=\"container\">\n\n<div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3 style=\"margin: 20px 0 0 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">About Us</h3>\n\t\t</div>\t\n\t</div>\n\n<br>\n<div class=\"abttxt p-4 text-justify\" >\n<p [innerHTML]=\"about?.about\" ></p>\n</div>\n<div class=\"col-md-12 abtmistxt\">\n<div class=\"row\">\n<div class=\"col-md-12 col-lg-5 col-xl-5 align-center\"><img class=\"imgmv\" src=\"assets/mission.jpg\" ></div>\n <div class=\"col-md-12 col-lg-7 col-xl-7\">\n\t\t<h3 style=\"display: inline-block;border-bottom: 2px solid #ea5b24;\">Mission</h3><br><br>\n\t\t\t\n <p [innerHTML]=\"about?.mission\" ></p></div>\n</div></div>\n<div class=\"col-md-12 abtvistxt\">\n<div class=\"row\">\n<div class=\"col-md-12 col-lg-7 col-xl-7\">\n<h3 style=\"display: inline-block;border-bottom: 2px solid #ea5b24;\">Vision</h3><br><br>\n<p [innerHTML]=\"about?.vision\" ></p></div>\n<div class=\"col-md-12 col-lg-5 col-xl-5 align-center\"><img class=\"imgmv\" src=\"assets/vis.jpg\" ></div>\n</div></div>\n<div class=\"col-md-12 abtyteamtxt\" style=\"text-align: center;\">\n<h1 class=\"u-text-1\"  style=\"display: inline-block;border-bottom: 2px solid #ea5b24;\">Our Team</h1>\n<p class=\"u-text-2\">Corporate relationship of hospitals in India</p>\n<div class=\"row\">\n<div class=\"col-md-12 col-lg-4 col-xl-4 align-center\" *ngFor=\"let item of members\" (click)=\"viewInfo(item)\"> \n<div alt=\"\" class=\"teambox\">\n<div alt=\"\" class=\"u-image u-image-circle u-image-1\"><img  class=\"imgtm\" [src]=\"item.image\" ></div>\n<h3 class=\"u-text-3\">{{item.name}}</h3>\n<div class=\"u-text-4\">{{item.designation}}</div>\n<p class=\"u-text-5\" [innerHTML]=\"item.description\"></p>\n <div class=\"socialfoot my-4\">\n            <a [href]=\"item.facebook\" target=\"_blank\"\n              ><ion-icon name=\"logo-facebook\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"item.twitter\" target=\"_blank\"\n              ><ion-icon name=\"logo-twitter\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"item.linkedin\" target=\"_blank\"\n              ><ion-icon name=\"logo-linkedin\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"item.instagram\" target=\"_blank\"\n              ><ion-icon name=\"logo-instagram\" color=\"primary\"></ion-icon\n            ></a>\n          </div>\n</div></div>\n</div>\n</div>\n\n\n\n</div>\n  <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/about/about-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/about/about-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: AboutPageRoutingModule */

  /***/
  function srcAppPagesAboutAboutRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageRoutingModule", function () {
      return AboutPageRoutingModule;
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


    var _about_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");

    var routes = [{
      path: '',
      component: _about_page__WEBPACK_IMPORTED_MODULE_3__["AboutPage"]
    }];

    var AboutPageRoutingModule = function AboutPageRoutingModule() {
      _classCallCheck(this, AboutPageRoutingModule);
    };

    AboutPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AboutPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.module.ts ***!
    \*********************************************/

  /*! exports provided: AboutPageModule */

  /***/
  function srcAppPagesAboutAboutModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPageModule", function () {
      return AboutPageModule;
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


    var _about_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./about-routing.module */
    "./src/app/pages/about/about-routing.module.ts");
    /* harmony import */


    var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.page */
    "./src/app/pages/about/about.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var AboutPageModule = function AboutPageModule() {
      _classCallCheck(this, AboutPageModule);
    };

    AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _about_routing_module__WEBPACK_IMPORTED_MODULE_5__["AboutPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]],
      declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })], AboutPageModule);
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/about/about.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAboutAboutPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.css);\n.social-container {\n  width: 600px;\n  margin: 100px auto;\n  text-align: center;\n}\n.social-icons {\n  padding: 0;\n  list-style: none;\n  margin: 0;\n}\n.social-icons li {\n  display: inline-block;\n  margin: 0.25em;\n  position: relative;\n  font-size: 15px;\n}\n.social-icons i {\n  color: #fff;\n  position: absolute;\n  top: 5px;\n  left: 7px;\n  -webkit-transition: all 265ms ease-out;\n  transition: all 265ms ease-out;\n  padding: 0px;\n}\n.social-icons a {\n  display: inline-block;\n}\n.social-icons a:before {\n  transform: scale(1);\n  -ms-transform: scale(1);\n  -webkit-transform: scale(1);\n  content: \" \";\n  width: 25px;\n  height: 25px;\n  border-radius: 100%;\n  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n  display: block;\n  background: #007c9d;\n  -webkit-transition: all 265ms ease-out;\n  transition: all 265ms ease-out;\n}\nion-content p {\n  font-size: 13px;\n  color: var(--input-color);\n  margin-bottom: 23px;\n}\n.abttxt {\n  background: #f3f3f3;\n}\n.abtmistxt {\n  background: #e6e6e6;\n}\n.abtvistxt {\n  background: #f3f3f3;\n}\n.imgmv {\n  background: #fff;\n  padding: 4%;\n  margin: 5%;\n}\n.imgtm {\n  width: 240px;\n  height: 240px;\n  border-radius: 50%;\n  border: 1px solid #e1e1e1;\n}\n.u-text-4 {\n  color: #007c9d;\n  font-size: 13px;\n}\n.u-text-5 {\n  height: 60px;\n  font-style: italic;\n  overflow: hidden;\n  margin: 4% 0 !important;\n}\n.u-text-1 {\n  color: #000;\n  text-align: center;\n  margin: 2%;\n}\n.u-text-2 {\n  text-align: center;\n}\n.abtyteamtxt {\n  margin-bottom: 50px;\n}\n.teambox {\n  box-shadow: rgba(149, 157, 165, 0.2) 0 8px 24px;\n  padding: 20px;\n  margin: 0 10px;\n}\n.u-text-3 {\n  font-size: 18px;\n  margin-bottom: 5px;\n}\n.socialfoot {\n  font-size: x-large;\n  margin: 0px 8px !important;\n}\n.socialfoot a {\n  font-size: 17px;\n  margin: 0px 4px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcYWJvdXRcXGFib3V0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFRLDJGQUFBO0FBY1I7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQ1pGO0FEZUE7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0FDWkY7QURjRTtFQUNFLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1pKO0FEZUU7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNDQUFBO0VBQUEsOEJBQUE7RUFDQSxZQUFBO0FDYko7QURnQkU7RUFDRSxxQkFBQTtBQ2RKO0FEZ0JJO0VBbkNGLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQW1DSSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLG1EQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFBQSw4QkFBQTtBQ1pOO0FEb0JJO0VBQ0ksZUFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNqQlI7QURxQkE7RUFBUSxtQkFBQTtBQ2pCUjtBRGtCQTtFQUFXLG1CQUFBO0FDZFg7QURlQTtFQUFXLG1CQUFBO0FDWFg7QURhQTtFQUFPLGdCQUFBO0VBQWdCLFdBQUE7RUFDdkIsVUFBQTtBQ1JBO0FEVUE7RUFBTyxZQUFBO0VBQ1AsYUFBQTtFQUFjLGtCQUFBO0VBQW9CLHlCQUFBO0FDSmxDO0FES0E7RUFBVSxjQUFBO0VBQWUsZUFBQTtBQ0F6QjtBRENBO0VBQ0UsWUFBQTtFQUFhLGtCQUFBO0VBQ2IsZ0JBQUE7RUFBaUIsdUJBQUE7QUNJbkI7QURGQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUFtQixVQUFBO0FDTXJCO0FESkE7RUFBVSxrQkFBQTtBQ1FWO0FEUEE7RUFDRSxtQkFBQTtBQ1VGO0FEUkE7RUFBUywrQ0FBQTtFQUE2QyxhQUFBO0VBQ3RELGNBQUE7QUNhQTtBRFhBO0VBQ0UsZUFBQTtFQUFnQixrQkFBQTtBQ2VsQjtBRGJBO0VBQ0Usa0JBQUE7RUFDQSwwQkFBQTtBQ2dCRjtBRGRBO0VBQ0UsZUFBQTtFQUNBLDBCQUFBO0FDaUJGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNi4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzKTtcblxuJHRpbWluZzogMjY1bXM7XG4kaWNvbkNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4kYWNjZW50OiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS10aW50KTtcbiRibHVlZmFkZTogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4kZ3JhZGllbnQ6ICMwMGI1ZjU7XG5cbkBtaXhpbiB0cmFuc2Zvcm1TY2FsZSgkc2l6ZTogMSkge1xuICB0cmFuc2Zvcm06IHNjYWxlKCRzaXplKTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoJHNpemUpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoJHNpemUpO1xufVxuXG4uc29jaWFsLWNvbnRhaW5lciB7XG4gIHdpZHRoOiA2MDBweDtcbiAgbWFyZ2luOiAxMDBweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zb2NpYWwtaWNvbnMge1xuICBwYWRkaW5nOiAwO1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBtYXJnaW46IDA7XG5cbiAgbGkge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtYXJnaW46IDAuMjVlbTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZm9udC1zaXplOjE1cHg7XG4gIH1cblxuICBpIHtcbiAgICBjb2xvcjogI2ZmZjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOjVweDtcbiAgICBsZWZ0OjdweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWluZyBlYXNlLW91dDtcbiAgICBwYWRkaW5nOjBweDtcbiAgfVxuXG4gIGEge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIEBpbmNsdWRlIHRyYW5zZm9ybVNjYWxlKCk7XG4gICAgICBjb250ZW50OiBcIiBcIjtcbiAgICAgIHdpZHRoOjI1cHg7XG4gICAgICBoZWlnaHQ6MjVweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGJhY2tncm91bmQ6ICMwMDdjOWQ7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWluZyBlYXNlLW91dDtcbiAgICB9XG5cbiAgIFxuICB9XG59XG5cbmlvbi1jb250ZW50IHtcbiAgICBwIHtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyM3B4O1xuICAgIH1cbn1cblxuLmFidHR4dHtiYWNrZ3JvdW5kOiNmM2YzZjM7fVxuLmFidG1pc3R4dHtiYWNrZ3JvdW5kOiNlNmU2ZTY7fVxuLmFidHZpc3R4dHtiYWNrZ3JvdW5kOiNmM2YzZjM7fVxuXG4uaW1nbXZ7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6IDQlO1xubWFyZ2luOiA1JTtcbn1cbi5pbWd0bXt3aWR0aDogMjQwcHg7XG5oZWlnaHQ6IDI0MHB4O2JvcmRlci1yYWRpdXM6IDUwJSA7Ym9yZGVyOjFweCBzb2xpZCAjZTFlMWUxO31cbi51LXRleHQtNHtjb2xvcjogIzAwN2M5ZDtmb250LXNpemU6IDEzcHg7fVxuLnUtdGV4dC01IHtcbiAgaGVpZ2h0OiA2MHB4O2ZvbnQtc3R5bGU6IGl0YWxpYztcbiAgb3ZlcmZsb3c6IGhpZGRlbjttYXJnaW46IDQlIDAgIWltcG9ydGFudDtcbn1cbi51LXRleHQtMSB7XG4gIGNvbG9yOiAjMDAwO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiAyJTtcbn1cbi51LXRleHQtMnt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmFidHl0ZWFtdHh0IHtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi50ZWFtYm94e2JveC1zaGFkb3c6cmdiYSgxNDksMTU3LDE2NSwuMikgMCA4cHggMjRweDsgIHBhZGRpbmc6IDIwcHg7XG5tYXJnaW46IDAgMTBweDtcbn1cbi51LXRleHQtMyB7XG4gIGZvbnQtc2l6ZTogMThweDttYXJnaW4tYm90dG9tOiA1cHg7XG59XG4uc29jaWFsZm9vdCB7XG4gIGZvbnQtc2l6ZTogeC1sYXJnZTtcbiAgbWFyZ2luOiAwcHggOHB4ICFpbXBvcnRhbnQ7XG59XG4uc29jaWFsZm9vdCBhe1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbjogMHB4IDRweCAhaW1wb3J0YW50O1xufVxuIiwiQGltcG9ydCB1cmwoaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNi4zL2Nzcy9mb250LWF3ZXNvbWUuY3NzKTtcbi5zb2NpYWwtY29udGFpbmVyIHtcbiAgd2lkdGg6IDYwMHB4O1xuICBtYXJnaW46IDEwMHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnNvY2lhbC1pY29ucyB7XG4gIHBhZGRpbmc6IDA7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIG1hcmdpbjogMDtcbn1cbi5zb2NpYWwtaWNvbnMgbGkge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1hcmdpbjogMC4yNWVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zb2NpYWwtaWNvbnMgaSB7XG4gIGNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNXB4O1xuICBsZWZ0OiA3cHg7XG4gIHRyYW5zaXRpb246IGFsbCAyNjVtcyBlYXNlLW91dDtcbiAgcGFkZGluZzogMHB4O1xufVxuLnNvY2lhbC1pY29ucyBhIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnNvY2lhbC1pY29ucyBhOmJlZm9yZSB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTUpIDEuOTVweCAxLjk1cHggMi42cHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMDA3YzlkO1xuICB0cmFuc2l0aW9uOiBhbGwgMjY1bXMgZWFzZS1vdXQ7XG59XG5cbmlvbi1jb250ZW50IHAge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIG1hcmdpbi1ib3R0b206IDIzcHg7XG59XG5cbi5hYnR0eHQge1xuICBiYWNrZ3JvdW5kOiAjZjNmM2YzO1xufVxuXG4uYWJ0bWlzdHh0IHtcbiAgYmFja2dyb3VuZDogI2U2ZTZlNjtcbn1cblxuLmFidHZpc3R4dCB7XG4gIGJhY2tncm91bmQ6ICNmM2YzZjM7XG59XG5cbi5pbWdtdiB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHBhZGRpbmc6IDQlO1xuICBtYXJnaW46IDUlO1xufVxuXG4uaW1ndG0ge1xuICB3aWR0aDogMjQwcHg7XG4gIGhlaWdodDogMjQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2UxZTFlMTtcbn1cblxuLnUtdGV4dC00IHtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cblxuLnUtdGV4dC01IHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1hcmdpbjogNCUgMCAhaW1wb3J0YW50O1xufVxuXG4udS10ZXh0LTEge1xuICBjb2xvcjogIzAwMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDIlO1xufVxuXG4udS10ZXh0LTIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5hYnR5dGVhbXR4dCB7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG59XG5cbi50ZWFtYm94IHtcbiAgYm94LXNoYWRvdzogcmdiYSgxNDksIDE1NywgMTY1LCAwLjIpIDAgOHB4IDI0cHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIG1hcmdpbjogMCAxMHB4O1xufVxuXG4udS10ZXh0LTMge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLnNvY2lhbGZvb3Qge1xuICBmb250LXNpemU6IHgtbGFyZ2U7XG4gIG1hcmdpbjogMHB4IDhweCAhaW1wb3J0YW50O1xufVxuXG4uc29jaWFsZm9vdCBhIHtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBtYXJnaW46IDBweCA0cHggIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/about/about.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/about/about.page.ts ***!
    \*******************************************/

  /*! exports provided: AboutPage */

  /***/
  function srcAppPagesAboutAboutPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutPage", function () {
      return AboutPage;
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

    var AboutPage =
    /*#__PURE__*/
    function () {
      function AboutPage(route, router, alertCtrl, menu, api) {
        var _this = this;

        _classCallCheck(this, AboutPage);

        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.members = [];
        this.api.getAboutUs().then(function (data) {
          _this.about = data[0];
          console.log(_this.about);
        }).catch(function (error) {
          console.log(error);
        });
        this.api.getTeamMember().then(function (data) {
          _this.members = data;
          console.log(_this.members);
        }).catch(function (error) {
          console.log(error);
        });
        this.api.getSettings().then(function (data) {
          _this.settings = data[0];
        }).catch(function (error) {
          console.log(error);
        });
      }

      _createClass(AboutPage, [{
        key: "viewInfo",
        value: function viewInfo(data) {
          localStorage.setItem('memberid', data.id);
          this.router.navigate(['team', data.name]);
        }
      }]);

      return AboutPage;
    }();

    AboutPage.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]
      }];
    };

    AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-about',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about.page.scss */
      "./src/app/pages/about/about.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])], AboutPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-about-about-module-es5.js.map