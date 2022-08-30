(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-radiology-radiology-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radiology/radiology.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radiology/radiology.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n    <div class=\"row step-div cart-sec\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Radiology</h3>                                              \n        <p class=\"metaFooterToggleLink\">Radiology, also called diagnostic imaging, is a series of different tests that take pictures or images of various parts of the body.  Many of these tests are unique in that they allow doctors to see inside the body.  A number of different imaging exams can be used to provide this view, including X-ray, MRI, ultrasound, CT scan and PET scan.<br><i>“Radiology is essential to the diagnosis of many diseases, particularly cancer.  Early diagnosis saves live.  Without diagnosis there can be no treatment, there can be no cure.” </i></p>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>     \n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n    <div class=\"row step-div cart-sec\">\n       <div class=\"col-md-5 col-sm-5 col-xs-5\">\n          <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 4% 0px;display: inline-block;border-bottom: 2px solid #ea5b24;\">Radiology Test</h3>\n       </div>\n       <div class=\"col-sm-3\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n         </div>\n          <div class=\"col-sm-2\">\n             <label>Suitable For : </label>\n             <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n                <option value=\"\">Please select gender</option>\n                <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n            </select>\n           </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n        </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n        </div>\n    </div>     \n  </div>\n</div>\n \n<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of radiology_test\">\n      <div class=\"grid-item-inner\">\n        <div class=\"mid\">\n          <div class=\"uptopmp\">\n            <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n            <p class=\"category_namemp\">{{item.test_name}}</p> \n            <div class=\"desmp\">\n            <ul>\n              <li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n              <li *ngIf=\"item.habbit.length !== 0\">Associated Habbits - {{item.habbit.length}}</li>\n              <li *ngIf=\"item.health_risk.length !== 0\">Associated Risk - {{item.health_risk.length}}</li>\n              <li>Quick Turn Around Time</li>\n              <li>Reporting as per NABL ISO guidelines</li></ul>\n            </div>\n          </div>\n          <div class=\"butkmore\">\n            <button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/radiology/radiology-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/radiology/radiology-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: RadiologyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiologyPageRoutingModule", function() { return RadiologyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _radiology_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./radiology.page */ "./src/app/pages/radiology/radiology.page.ts");




const routes = [
    {
        path: '',
        component: _radiology_page__WEBPACK_IMPORTED_MODULE_3__["RadiologyPage"]
    }
];
let RadiologyPageRoutingModule = class RadiologyPageRoutingModule {
};
RadiologyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], RadiologyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/radiology/radiology.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/radiology/radiology.module.ts ***!
  \*****************************************************/
/*! exports provided: RadiologyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiologyPageModule", function() { return RadiologyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _radiology_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./radiology-routing.module */ "./src/app/pages/radiology/radiology-routing.module.ts");
/* harmony import */ var _radiology_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./radiology.page */ "./src/app/pages/radiology/radiology.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let RadiologyPageModule = class RadiologyPageModule {
};
RadiologyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _radiology_routing_module__WEBPACK_IMPORTED_MODULE_5__["RadiologyPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_radiology_page__WEBPACK_IMPORTED_MODULE_6__["RadiologyPage"]]
    })
], RadiologyPageModule);



/***/ }),

/***/ "./src/app/pages/radiology/radiology.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/radiology/radiology.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-family: \"Poppins-Light\";\n}\nion-content span {\n  font-family: \"Poppins-Light\";\n}\nion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 60px;\n  line-height: 30px;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .butkmore {\n  text-align: center;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\nion-content .mid {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  /*height: 300px;*/\n  border-top-left-radius: 50px !important;\n  border-bottom-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmFkaW9sb2d5L0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXHJhZGlvbG9neVxccmFkaW9sb2d5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmFkaW9sb2d5L3JhZGlvbG9neS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDQSw0QkFBQTtBQ0FKO0FERUk7RUFDQSw0QkFBQTtBQ0FKO0FERUk7RUFBaUIsZUFBQTtFQUFnQixjQUFBO0VBQ3JDLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0VBO0FEREE7RUFBZ0IsdUJBQUE7RUFBd0IsbUJBQUE7QUNLeEM7QURKQTtFQUFTLGdDQUFBO0FDT1Q7QUROSTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0EsZ0RBQUE7RUFDQSxtQkFBQTtBQ1FSO0FETkk7RUFDSSxjQUFBO0FDUVI7QUROSTtFQUNJLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0FDUVI7QURMSTtFQUFTLGVBQUE7QUNRYjtBRFBBO0VBQWEsZUFBQTtBQ1ViO0FEVEE7RUFBUyxtQkFBQTtFQUNULHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBQ1lBO0FEWEE7RUFBaUIsZUFBQTtFQUNqQixpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ2NBO0FEWkE7RUFBVSxrQkFBQTtBQ2VWO0FEZEE7RUFBVSxvQ0FBQTtFQUNWLHdCQUFBO0VBQ0EsNEJBQUE7RUFBNkIsZ0JBQUE7RUFBaUIsZUFBQTtFQUM5QyxnQkFBQTtFQUNBLGtCQUFBO0FDbUJBO0FEbEJBO0VBQ0ksa0JBQUE7QUNvQko7QURuQkk7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDcUJKO0FEbkJBO0VBQ00sMkNBQUE7RUFDQSxvQkFBQTtFQUNFLGlCQUFBO0VBQ0YsdUNBQUE7RUFDQSxnQ0FBQTtBQ3FCTiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JhZGlvbG9neS9yYWRpb2xvZ3kucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnR7XG4gICAgcHtcbiAgICBmb250LWZhbWlseTogJ1BvcHBpbnMtTGlnaHQnO1xufVxuICAgIHNwYW57XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLUxpZ2h0Jztcbn1cbiAgICAuY2F0ZWdvcnlfbmFtZWhhe2ZvbnQtc2l6ZTogMjBweDtjb2xvcjogIzAwN2M5ZDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucGFkZGluZy10b3A6IDMwcHg7XG5saW5lLWhlaWdodDoyMHB4O31cbi5TaG9wQnlQcm9kdWN0c3twYWRkaW5nOiAzMHB4IDUwcHggNTBweDtiYWNrZ3JvdW5kOiAjZWRlZGVkO31cbi5wb3BpbWcge2JvcmRlci1yYWRpdXM6MTBweCAxMHB4IDBweCAwcHg7fVxuICAgIC5ncmlkLWl0ZW0taW5uZXJoYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5kZXNoYSB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbiAgICAuYWRkdG9jYXJ0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWE1YjI0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luOiA0cHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG5cbiAgICAudXB0b3BtcHtwYWRkaW5nOiAwIDEwcHg7fVxuLnVwdG9wbXAgaW1ne21hcmdpbjo1cHggMHB4O31cbi5tcG9waW1ne2JvcmRlci1yYWRpdXM6IDUwcHg7XG5ib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xucG9zaXRpb246IGFic29sdXRlO1xudG9wOiAtMjVweDtcbmxlZnQ6IDQwJTtcbnBhZGRpbmc6IDEwcHg7XG5iYWNrZ3JvdW5kOiAjZmZmO31cbi5jYXRlZ29yeV9uYW1lbXB7Zm9udC1zaXplOiAxNnB4O1xuZm9udC13ZWlnaHQ6IGJvbGQ7XG50ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xucGFkZGluZy10b3A6IDYwcHg7XG5saW5lLWhlaWdodDogMzBweDt9XG5cbi5kZXNtcCB1bHt0ZXh0LWFsaWduOiBjZW50ZXI7fVxuLmRlc21wIGxpe2JhY2tncm91bmQtaW1hZ2U6dXJsKCcuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmcnKTtcbmJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbmJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7bGlzdC1zdHlsZTogbm9uZTtmb250LXNpemU6IDE0cHg7XG50ZXh0LWFsaWduOiBsZWZ0O1xucGFkZGluZy1sZWZ0OiAyNXB4O31cbi5idXRrbW9yZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIC5rbm93X21vcmUge1xuICAgIG1hcmdpbjogMTVweDtcbiAgICBjb2xvcjogIzAwN2M5ZDtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGZvbnQtc2l6ZTogMTVweDt9XG59XG4ubWlke1xuICAgICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gNDAlKSAwcHggOHB4IDEwcHg7XG4gICAgICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgICAgICAgLypoZWlnaHQ6IDMwMHB4OyovXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbn1cbn1cbiIsImlvbi1jb250ZW50IHAge1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLUxpZ2h0XCI7XG59XG5pb24tY29udGVudCBzcGFuIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVoYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5pb24tY29udGVudCAuU2hvcEJ5UHJvZHVjdHMge1xuICBwYWRkaW5nOiAzMHB4IDUwcHggNTBweDtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cbmlvbi1jb250ZW50IC5wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWl0ZW0taW5uZXJoYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXNoYSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgLmFkZHRvY2FydCB7XG4gIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDRweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnVwdG9wbXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5pb24tY29udGVudCAudXB0b3BtcCBpbWcge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5pb24tY29udGVudCAubXBvcGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogNDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVtcCB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA2MHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXNtcCB1bCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5kZXNtcCBsaSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9idWxfY2hrLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBmb250LXNpemU6IDE0cHg7XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIHBhZGRpbmctbGVmdDogMjVweDtcbn1cbmlvbi1jb250ZW50IC5idXRrbW9yZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbmlvbi1jb250ZW50IC5idXRrbW9yZSAua25vd19tb3JlIHtcbiAgbWFyZ2luOiAxNXB4O1xuICBjb2xvcjogIzAwN2M5ZDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgIzAwN2M5ZDtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuaW9uLWNvbnRlbnQgLm1pZCB7XG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggOHB4IDEwcHg7XG4gIG1hcmdpbjogMTZweCA4cHggMjAlO1xuICAvKmhlaWdodDogMzAwcHg7Ki9cbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/radiology/radiology.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/radiology/radiology.page.ts ***!
  \***************************************************/
/*! exports provided: RadiologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RadiologyPage", function() { return RadiologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");





let RadiologyPage = class RadiologyPage {
    constructor(api, util, router) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.radiology_test = [];
        this.filter_tests = [];
        this.recommended_age = "";
        this.age_groups = [];
        this.recommended_fors = [];
        this.test_recommended_for = '';
        this.filter = false;
        this.getRecommendedFor();
        this.getAgeGroup();
    }
    ionViewWillEnter() {
        this.api.getRadiologyTest().then(data => {
            this.radiology_test = data;
            this.filter_tests = data;
            console.log(this.radiology_test);
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
    goToDetail(data) {
        localStorage.setItem('testid', data.id);
        localStorage.setItem('testname', data.test_name);
        this.router.navigate(['test', data.page_slug]);
    }
    clear() {
        this.recommended_age = '';
        this.test_recommended_for = '';
        this.filter = false;
        this.ionViewWillEnter();
    }
    search() {
        if (this.recommended_age == '' && this.test_recommended_for == '') {
            this.util.showToast('Please select at least one filter', 'danger', 'bottom');
            return false;
        }
        this.radiology_test = [];
        var arr1 = [];
        var arr2 = [];
        this.filter = true;
        for (let x of this.filter_tests) {
            if (this.recommended_age != '' && this.test_recommended_for == '') {
                for (let y of x.recommended_age) {
                    if (y.item_id == this.recommended_age) {
                        this.radiology_test.push(x);
                    }
                }
            }
            else if (this.recommended_age == '' && this.test_recommended_for != '') {
                for (let y of x.test_recommended_for) {
                    if (y == this.test_recommended_for) {
                        this.radiology_test.push(x);
                    }
                }
            }
            else {
                for (let y of x.recommended_age) {
                    if (y.item_id == this.recommended_age) {
                        arr1.push(x);
                    }
                }
                for (let y of x.test_recommended_for) {
                    if (y == this.test_recommended_for) {
                        arr2.push(x);
                    }
                }
                this.radiology_test = arr1.filter(value => arr2.includes(value));
            }
        }
        console.log('item', this.radiology_test);
        if (this.radiology_test.length > 0) {
            this.radiology_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
        }
        else {
            this.util.showToast('No Data Found', 'danger', 'bottom');
        }
    }
    getAgeGroup() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getAgeGroup().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                if (data) {
                    this.age_groups = data;
                }
            })).catch(error => {
                console.log(error);
            });
        });
    }
    getRecommendedFor() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.api.getRecommendedFor().then((data) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                console.log(data);
                this.recommended_fors = data;
            })).catch(error => {
                console.log(error);
            });
        });
    }
};
RadiologyPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
RadiologyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-radiology',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./radiology.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/radiology/radiology.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./radiology.page.scss */ "./src/app/pages/radiology/radiology.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], RadiologyPage);



/***/ })

}]);
//# sourceMappingURL=pages-radiology-radiology-module-es2015.js.map