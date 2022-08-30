(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-tests-tests-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tests/tests.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tests/tests.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n   <div class=\"ShopByProducts\">\n<div class=\"container\">\n   <div class=\"row\">\n      <div class=\"col-sm-4\">\n         <div style=\"margin:30px auto\"><div class=\"ct-heading h-align-left item-st-default\" style=\"text-align: left;\"><div class=\"item--sub-title style-default\">All Health Tests</div>\n            <img src=\"assets/org_line.png\">\n            </div>\n         </div>\n      </div>\n      <div class=\"col-sm-3 agesel\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n      </div>\n      <div class=\"col-sm-3 agesel\">\n         <label>Suitable For : </label>\n         <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n            <option value=\"\">Please select gender</option>\n            <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n        </select>\n     </div>\n     <div class=\"col-sm-1\">\n         <label></label>\n         <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n      </div>\n      <div class=\"col-sm-1\">\n         <label></label>\n         <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n         \n      </div>\n   </div>\n   <ul class=\"filter\">\n         <!-- <li (click)=\"activateLetter('')\" [ngClass]=\"{'btn-secondary':activeLetter==''}\"\n            class=\"btn btn-success1 btn-lg\">ALL\n         </li> -->\n         <li *ngFor=\"let letter of alphabets;let i = index;\"\n            (click)=\"activateLetter(letter)\"\n            class=\"btn btn-success1 btn-lg\"\n            [ngClass]=\"{'btn-secondary':letter==activeLetter}\">{{letter}}\n         </li>\n      </ul>\n   <div class=\"row\">\n      <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of all_tests | orderBy : activeLetter\" (click)=\"goToDetail(item)\">\n         <div class=\"grid-item-inner\">\n            <p class=\"category_name\">{{item.test_name}}</p> \n         </div>         \n      </div>\n\t</div></div>\n</div>\n   <app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/tests/tests-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/tests/tests-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TestsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPageRoutingModule", function() { return TestsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tests.page */ "./src/app/pages/tests/tests.page.ts");




const routes = [
    {
        path: '',
        component: _tests_page__WEBPACK_IMPORTED_MODULE_3__["TestsPage"]
    }
];
let TestsPageRoutingModule = class TestsPageRoutingModule {
};
TestsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TestsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/tests/tests.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/tests/tests.module.ts ***!
  \*********************************************/
/*! exports provided: TestsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPageModule", function() { return TestsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _tests_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tests-routing.module */ "./src/app/pages/tests/tests-routing.module.ts");
/* harmony import */ var _tests_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tests.page */ "./src/app/pages/tests/tests.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../pipes/pipes.module */ "./src/app/pipes/pipes.module.ts");











let TestsPageModule = class TestsPageModule {
};
TestsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _tests_routing_module__WEBPACK_IMPORTED_MODULE_5__["TestsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _pipes_pipes_module__WEBPACK_IMPORTED_MODULE_9__["PipesModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_tests_page__WEBPACK_IMPORTED_MODULE_6__["TestsPage"]]
    })
], TestsPageModule);



/***/ }),

/***/ "./src/app/pages/tests/tests.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/tests/tests.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .pop_pk {\n  display: -webkit-inline-box;\n  display: inline-flex;\n}\nion-content .category_name {\n  color: #007e9f;\n  font-size: 15px;\n  font-weight: normal;\n  text-align: center;\n  padding: 8px 0;\n  margin: 0;\n}\nion-content .category_des {\n  font-size: 14px;\n  margin: 0 10px 10px 10px;\n}\nion-content .addtocart {\n  background: transparent;\n  color: #ea5b24;\n  padding: 7px 10px;\n  font-size: 13px;\n  border-radius: 20px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  border: 1px solid;\n  text-transform: uppercase;\n}\n.grid-item-inner {\n  text-align: center;\n  margin-bottom: 30px;\n  background: #fff;\n  border-radius: 0;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 3px 5px;\n  border: 1px solid #007e9f;\n  cursor: pointer;\n}\n.grid-item-inner:hover {\n  background: #007e9f;\n  border: 1px solid #007e9f;\n}\n.grid-item-inner:hover .category_name {\n  color: #fff;\n}\n.category_name {\n  color: #007e9f;\n  font-size: 15px;\n  font-weight: bold;\n  text-align: center;\n  padding: 8px 0;\n  margin: 0;\n}\n.filter li {\n  padding: 2px;\n  margin: 5px;\n  min-width: 35px;\n  cursor: pointer;\n}\nul {\n  list-style-type: none;\n}\n.agesel select {\n  font-size: 13px;\n  padding: 4px 10px;\n  height: 30px;\n  width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVzdHMvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcdGVzdHNcXHRlc3RzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVzdHMvdGVzdHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQWdCLHVCQUFBO0VBQXdCLG1CQUFBO0FDRTVDO0FEQUk7RUFDSSwyQkFBQTtFQUFBLG9CQUFBO0FDRVI7QURBSTtFQUFnQixjQUFBO0VBQ3BCLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFNBQUE7QUNHQTtBRERJO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FDR1I7QURESTtFQUNJLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0FDR1I7QURBQTtFQUFvQixrQkFBQTtFQUNsQixtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwQ0FBQTtFQUNBLHlCQUFBO0VBQTBCLGVBQUE7QUNLNUI7QURIQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUNNRjtBREpBO0VBQXVDLFdBQUE7QUNRdkM7QUROQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxTQUFBO0FDU0Y7QURQQTtFQUFZLFlBQUE7RUFDWixXQUFBO0VBQ0EsZUFBQTtFQUFnQixlQUFBO0FDWWhCO0FEVkE7RUFBSSxxQkFBQTtBQ2NKO0FEYkE7RUFBZSxlQUFBO0VBQWdCLGlCQUFBO0VBQy9CLFlBQUE7RUFDQSxZQUFBO0FDa0JBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvdGVzdHMvdGVzdHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgLlNob3BCeVByb2R1Y3Rze3BhZGRpbmc6IDMwcHggNTBweCA1MHB4O2JhY2tncm91bmQ6ICNlZGVkZWQ7fVxyXG4gICAgXHJcbiAgICAucG9wX3BrIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgIH1cclxuICAgIC5jYXRlZ29yeV9uYW1lIHtjb2xvcjogIzAwN2U5ZjtcclxuZm9udC1zaXplOiAxNXB4O1xyXG5mb250LXdlaWdodDogbm9ybWFsO1xyXG50ZXh0LWFsaWduOiBjZW50ZXI7XHJcbnBhZGRpbmc6IDhweCAwO1xyXG5tYXJnaW46IDA7XHJcbiAgICB9XHJcbiAgICAuY2F0ZWdvcnlfZGVzIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDEwcHggMTBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmFkZHRvY2FydHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgICAgICBjb2xvcjogI2VhNWIyNDtcclxuICAgICAgICBwYWRkaW5nOiA3cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBtYXJnaW46IDRweCBhdXRvO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5ncmlkLWl0ZW0taW5uZXIgeyAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC40KSAwcHggM3B4IDVweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3ZTlmO2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uZ3JpZC1pdGVtLWlubmVyOmhvdmVyIHsgXHJcbiAgYmFja2dyb3VuZDogIzAwN2U5ZjtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjMDA3ZTlmO1xyXG59XHJcbi5ncmlkLWl0ZW0taW5uZXI6aG92ZXIgLmNhdGVnb3J5X25hbWUge2NvbG9yOiAjZmZmOyAgICB9XHJcblxyXG4uY2F0ZWdvcnlfbmFtZSB7XHJcbiAgY29sb3I6ICMwMDdlOWY7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA4cHggMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmZpbHRlciBsaSB7cGFkZGluZzogMnB4O1xyXG5tYXJnaW46IDVweDtcclxubWluLXdpZHRoOiAzNXB4O2N1cnNvcjogcG9pbnRlcjtcclxufVxyXG51bCB7bGlzdC1zdHlsZS10eXBlOiBub25lO31cclxuLmFnZXNlbCBzZWxlY3R7Zm9udC1zaXplOiAxM3B4O3BhZGRpbmc6IDRweCAxMHB4O1xyXG5oZWlnaHQ6IDMwcHg7XHJcbndpZHRoOiAyMDBweDt9IiwiaW9uLWNvbnRlbnQgLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZzogMzBweCA1MHB4IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5pb24tY29udGVudCAucG9wX3BrIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG59XG5pb24tY29udGVudCAuY2F0ZWdvcnlfbmFtZSB7XG4gIGNvbG9yOiAjMDA3ZTlmO1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogOHB4IDA7XG4gIG1hcmdpbjogMDtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeV9kZXMge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbjogMCAxMHB4IDEwcHggMTBweDtcbn1cbmlvbi1jb250ZW50IC5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgY29sb3I6ICNlYTViMjQ7XG4gIHBhZGRpbmc6IDdweCAxMHB4O1xuICBmb250LXNpemU6IDEzcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbjogNHB4IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlcjogMXB4IHNvbGlkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZ3JpZC1pdGVtLWlubmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3JkZXItcmFkaXVzOiAwO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDNweCA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdlOWY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyaWQtaXRlbS1pbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICMwMDdlOWY7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdlOWY7XG59XG5cbi5ncmlkLWl0ZW0taW5uZXI6aG92ZXIgLmNhdGVnb3J5X25hbWUge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmNhdGVnb3J5X25hbWUge1xuICBjb2xvcjogIzAwN2U5ZjtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA4cHggMDtcbiAgbWFyZ2luOiAwO1xufVxuXG4uZmlsdGVyIGxpIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDVweDtcbiAgbWluLXdpZHRoOiAzNXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uYWdlc2VsIHNlbGVjdCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgcGFkZGluZzogNHB4IDEwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgd2lkdGg6IDIwMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/tests/tests.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/tests/tests.page.ts ***!
  \*******************************************/
/*! exports provided: TestsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestsPage", function() { return TestsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");






let TestsPage = class TestsPage {
    constructor(route, router, alertCtrl, menu, util, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.util = util;
        this.api = api;
        this.all_tests = [];
        this.filter_tests = [];
        this.alphabets = [];
        this.activeLetter = '';
        this.recommended_age = "";
        this.age_groups = [];
        this.recommended_fors = [];
        this.test_recommended_for = '';
        this.filter = false;
        var alphabets = "abcdefghijklmnopqrstuvwxyz";
        this.alphabets = alphabets.toUpperCase().split("");
        console.log(this.alphabets);
        this.getRecommendedFor();
        this.getAgeGroup();
        //this.updateIndividualTest();
    }
    ionViewWillEnter() {
        this.recommended_age = '';
        this.test_recommended_for = '';
        this.api.getAllIndividualTest().then(data => {
            this.all_tests = data;
            this.all_tests.sort((a, b) => a.test_name.localeCompare(b.test_name));
        }).catch(error => {
            console.log(error);
        });
    }
    updateIndividualTest() {
        this.api.getIndividualTest().then(data => {
            this.individualTest = data;
            for (let p of this.individualTest) {
                /*var recommended_age = [];
                for(var x in this.age_groups){
                 if(p.id == x.id){
                   recommended_age.push({item_id: x.id, item_text: x.test_name});
                 }
                }*/
                const param = {
                    display_order: Number(0),
                };
                console.log(param);
                this.api.updateNewIndividual_test(p.id, param).then((data) => {
                }, error => {
                }).catch(error => {
                });
            }
        }).catch(error => {
            console.log(error);
        });
    }
    clear() {
        this.filter = false;
        this.ionViewWillEnter();
    }
    search() {
        if (this.recommended_age == '' && this.test_recommended_for == '') {
            this.util.showToast('Please select at least one filter', 'danger', 'bottom');
            return false;
        }
        this.all_tests = [];
        this.activeLetter = '';
        var arr1 = [];
        var arr2 = [];
        this.api.getAllIndividualTest().then(data => {
            this.filter = true;
            this.filter_tests = data;
            for (let x of this.filter_tests) {
                if (this.recommended_age != '' && this.test_recommended_for == '') {
                    for (let y of x.recommended_age) {
                        if (y.item_id == this.recommended_age) {
                            this.all_tests.push(x);
                        }
                    }
                }
                else if (this.recommended_age == '' && this.test_recommended_for != '') {
                    for (let y of x.test_recommended_for) {
                        if (y == this.test_recommended_for) {
                            this.all_tests.push(x);
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
                    this.all_tests = arr1.filter(value => arr2.includes(value));
                }
            }
            console.log('item', this.all_tests);
            if (this.all_tests.length > 0) {
                this.all_tests.sort((a, b) => a.test_name.localeCompare(b.test_name));
            }
            else {
                this.util.showToast('No Data Found', 'danger', 'bottom');
            }
        }).catch(error => {
            console.log(error);
        });
    }
    goToDetail(data) {
        localStorage.setItem('testid', data.id);
        localStorage.setItem('testname', data.test_name);
        this.router.navigate(['test', data.page_slug]);
    }
    activateLetter(letter) {
        console.log(letter);
        this.activeLetter = letter;
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
TestsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
TestsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-tests',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./tests.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/tests/tests.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./tests.page.scss */ "./src/app/pages/tests/tests.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], TestsPage);



/***/ })

}]);
//# sourceMappingURL=pages-tests-tests-module-es2015.js.map