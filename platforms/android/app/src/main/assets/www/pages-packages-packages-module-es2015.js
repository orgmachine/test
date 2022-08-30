(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-packages-packages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <div class=\"ShopByProducts\">\n   <div class=\"container\" >\n      <div class=\"row\">\n         <div style=\"margin:30px auto\">\n            <div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">All Health Packages</div>\n               <img src=\"assets/org_line.png\">\n            </div>\n         </div>\n      </div>\n   </div>\n\n      <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of all_packages\">\n         <div class=\"grid-item-inner\">\n            <div class=\"uptopmp\">\n               <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n               <p class=\"category_namemp\">{{item.test_name}}</p> \n              <div class=\"desmp\">\n              <ul><li>Total no.of Tests - {{item.parameter.length}}</li>\n              <li>Quick Turn Around Time</li>\n              <li>Reporting as per NABL ISO guidelines</li></ul>\n              </div>\n              <div class=\"mrpricemp\">MRP : ₹2997</div>\n              <img src=\"assets/ruppas.jpg\">\n              <div class=\"pricemp\">Price : ₹1999</div>\n            </div>\n            <div class=\"butkmore\">\n               <button ion-button  class=\"know_more\" >Know More</button>\n            </div>\n         </div>\n      </div>\n   </div>\n<!--    </div>\n</div> -->\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/packages/packages-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/packages/packages-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: PackagesPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPageRoutingModule", function() { return PackagesPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/packages/packages.page.ts");




const routes = [
    {
        path: '',
        component: _packages_page__WEBPACK_IMPORTED_MODULE_3__["PackagesPage"]
    }
];
let PackagesPageRoutingModule = class PackagesPageRoutingModule {
};
PackagesPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], PackagesPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/packages/packages.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.module.ts ***!
  \***************************************************/
/*! exports provided: PackagesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPageModule", function() { return PackagesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./packages-routing.module */ "./src/app/pages/packages/packages-routing.module.ts");
/* harmony import */ var _packages_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./packages.page */ "./src/app/pages/packages/packages.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let PackagesPageModule = class PackagesPageModule {
};
PackagesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _packages_routing_module__WEBPACK_IMPORTED_MODULE_5__["PackagesPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_packages_page__WEBPACK_IMPORTED_MODULE_6__["PackagesPage"]]
    })
], PackagesPageModule);



/***/ }),

/***/ "./src/app/pages/packages/packages.page.scss":
/*!***************************************************!*\
  !*** ./src/app/pages/packages/packages.page.scss ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .grid-item-inner {\n  text-align: center;\n  border: 1px solid #ddd;\n  border-radius: 10px 10px 0 0;\n  background: #fff;\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 20px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 60px;\n  line-height: 30px;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .mrpricemp {\n  font-size: 15px;\n  text-decoration: line-through;\n  color: #fa8152;\n  font-weight: bold;\n}\nion-content .pricemp {\n  font-size: 15px;\n  color: #fa8152;\n  font-weight: bold;\n}\nion-content .butkmore {\n  border-top: 1px solid #ddd;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xccGFja2FnZXNcXHBhY2thZ2VzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcGFja2FnZXMvcGFja2FnZXMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0Msa0JBQUE7RUFDSCxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJDQUFBO0FDQUY7QURFSTtFQUFnQix1QkFBQTtFQUF3QixtQkFBQTtBQ0U1QztBRERBO0VBQVMsZUFBQTtBQ0lUO0FESEE7RUFDSSxlQUFBO0FDS0o7QURKQTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDTUo7QURKQTtFQUNJLGVBQUE7RUFDSixpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ01BO0FETEE7RUFBVSxrQkFBQTtBQ1FWO0FEUEE7RUFBVSxvQ0FBQTtFQUNWLHdCQUFBO0VBQ0EsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsZUFBQTtFQUM5QyxnQkFBQTtFQUNBLGtCQUFBO0FDWUE7QURYQTtFQUNJLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtBQ2FKO0FEWEE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FDYUo7QURYQTtFQUNJLDBCQUFBO0FDYUo7QURYQTtFQUNJLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNhSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3BhY2thZ2VzL3BhY2thZ2VzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcclxuICAgIC5ncmlkLWl0ZW0taW5uZXJ7XHJcbiAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCA4cHggMTBweDtcclxufVxyXG4gICAgLlNob3BCeVByb2R1Y3Rze3BhZGRpbmc6IDMwcHggNTBweCA1MHB4O2JhY2tncm91bmQ6ICNlZGVkZWQ7fVxyXG4udXB0b3BtcHtwYWRkaW5nOiAwIDEwcHg7fVxyXG4udXB0b3BtcCBpbWd7XHJcbiAgICBtYXJnaW46NXB4IDBweDt9XHJcbi5tcG9waW1ne1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTBweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbn1cclxuLmNhdGVnb3J5X25hbWVtcHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbnRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbnBhZGRpbmctdG9wOiA2MHB4O1xyXG5saW5lLWhlaWdodDogMzBweDt9XHJcbi5kZXNtcCB1bHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxyXG4uZGVzbXAgbGl7YmFja2dyb3VuZC1pbWFnZTp1cmwoJy4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZycpO1xyXG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XHJcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7bGlzdC1zdHlsZTogbm9uZTtmb250LXNpemU6IDE0cHg7XHJcbnRleHQtYWxpZ246IGxlZnQ7XHJcbnBhZGRpbmctbGVmdDogMjVweDt9XHJcbi5tcnByaWNlbXAge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbiAgICBjb2xvcjogI2ZhODE1MjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5wcmljZW1wIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgIGNvbG9yOiAjZmE4MTUyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmJ1dGttb3JlIHtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG59XHJcbi5idXRrbW9yZSAua25vd19tb3JlIHtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIGNvbG9yOiAjMDA3YzlkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG59IiwiaW9uLWNvbnRlbnQgLmdyaWQtaXRlbS1pbm5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjQpIDBweCA4cHggMTBweDtcbn1cbmlvbi1jb250ZW50IC5TaG9wQnlQcm9kdWN0cyB7XG4gIHBhZGRpbmc6IDMwcHggNTBweCA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjZWRlZGVkO1xufVxuaW9uLWNvbnRlbnQgLnVwdG9wbXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5pb24tY29udGVudCAudXB0b3BtcCBpbWcge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5pb24tY29udGVudCAubXBvcGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogNDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVtcCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXNtcCB1bCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kZXNtcCBsaSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbmlvbi1jb250ZW50IC5tcnByaWNlbXAge1xuICBmb250LXNpemU6IDE1cHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICBjb2xvcjogI2ZhODE1MjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5pb24tY29udGVudCAucHJpY2VtcCB7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNmYTgxNTI7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuaW9uLWNvbnRlbnQgLmJ1dGttb3JlIHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUgLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/packages/packages.page.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/packages/packages.page.ts ***!
  \*************************************************/
/*! exports provided: PackagesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackagesPage", function() { return PackagesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let PackagesPage = class PackagesPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        this.all_packages = [];
    }
    ionViewWillEnter() {
        this.api.getAllHealthPackages().then(data => {
            this.all_packages = data;
            console.log(this.all_packages);
        }).catch(error => {
            console.log(error);
        });
    }
};
PackagesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
PackagesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-packages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./packages.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/packages/packages.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./packages.page.scss */ "./src/app/pages/packages/packages.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], PackagesPage);



/***/ })

}]);
//# sourceMappingURL=pages-packages-packages-module-es2015.js.map