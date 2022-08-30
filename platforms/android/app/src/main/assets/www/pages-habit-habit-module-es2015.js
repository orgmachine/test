(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-habit-habit-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/habit/habit.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/habit/habit.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n    <div class=\"row step-div cart-sec\">\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\n        <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">{{habit_detail?.name}}</h3>                                  \n        <p class=\"metaFooterToggleLink text-justify\" [innerHtml]=\"habit_detail?.description\"></p>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>     \n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n    <div class=\"row step-div cart-sec\">\n        <div class=\"col-md-5 col-sm-5 col-xs-5\">\n          <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 4% 0px;display: inline-block;border-bottom: 2px solid #ea5b24;\">Test Associated with {{habit_detail?.name}}</h3>\n        </div>\n        <div class=\"col-sm-3\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n      </div>\n      <div class=\"col-sm-2\">\n         <label>Suitable For : </label>\n         <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n            <option value=\"\">Please select gender</option>\n            <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n        </select>\n       </div>\n       <div class=\"col-sm-1\">\n           <label></label>\n           <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n        </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n        </div>\n    </div>     \n  </div>\n</div>\n \n<div class=\"container\">\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of habit_test; let i = index;\">\n      <div class=\"grid-item-inner\">\n        <div [ngClass]=\"(i % 2 == 0) ? 'mid' : 'mid second'\">\n          <div class=\"uptopmp\">\n            <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n            <p class=\"category_namemp\">{{item.test_name}}</p> \n            <div class=\"desmp\">\n            <ul><li>Total no.of Tests - {{item.parameter.length}}</li>\n            <li>Quick Turn Around Time</li>\n            <li>Reporting as per NABL ISO guidelines</li></ul>\n            </div>\n          </div>\n          <div class=\"butkmore\">\n            <button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/habit/habit-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/habit/habit-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: HabitPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitPageRoutingModule", function() { return HabitPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _habit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./habit.page */ "./src/app/pages/habit/habit.page.ts");




const routes = [
    {
        path: '',
        component: _habit_page__WEBPACK_IMPORTED_MODULE_3__["HabitPage"]
    }
];
let HabitPageRoutingModule = class HabitPageRoutingModule {
};
HabitPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HabitPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/habit/habit.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/habit/habit.module.ts ***!
  \*********************************************/
/*! exports provided: HabitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitPageModule", function() { return HabitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _habit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./habit-routing.module */ "./src/app/pages/habit/habit-routing.module.ts");
/* harmony import */ var _habit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./habit.page */ "./src/app/pages/habit/habit.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let HabitPageModule = class HabitPageModule {
};
HabitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _habit_routing_module__WEBPACK_IMPORTED_MODULE_5__["HabitPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_habit_page__WEBPACK_IMPORTED_MODULE_6__["HabitPage"]]
    })
], HabitPageModule);



/***/ }),

/***/ "./src/app/pages/habit/habit.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/habit/habit.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 14px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 50px;\n  height: 95px;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .butkmore {\n  text-align: center;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\nion-content .mid {\n  background: #fff;\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  border-top-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n}\nion-content .mid.second {\n  border-top-left-radius: 0px;\n  border-bottom-right-radius: 0px;\n  border-top-right-radius: 20px;\n  border-bottom-left-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGFiaXQvRDpcXHByb2plY3RcXHdheTJsYWJcXFdlYmZpbmFsL3NyY1xcYXBwXFxwYWdlc1xcaGFiaXRcXGhhYml0LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGFiaXQvaGFiaXQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUFnQixjQUFBO0VBQ2hCLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtBQ0NSO0FEQ0k7RUFDSSx1QkFBQTtFQUF3QixtQkFBQTtBQ0VoQztBREFJO0VBQ0ksZ0NBQUE7QUNFUjtBREFJO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDRVI7QURBSTtFQUNJLGNBQUE7QUNFUjtBREFJO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNFUjtBRENJO0VBQ0ksZUFBQTtBQ0NSO0FEQ0k7RUFDSSxlQUFBO0FDQ1I7QURDSTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFBaUIsWUFBQTtBQ0V6QjtBRENJO0VBQ0ksa0JBQUE7QUNDUjtBRENJO0VBQ0ksb0NBQUE7RUFDQSx3QkFBQTtFQUNBLDRCQUFBO0VBQTZCLGdCQUFBO0VBQWlCLGVBQUE7RUFDOUMsZ0JBQUE7RUFDQSxrQkFBQTtBQ0dSO0FEREk7RUFDSSxrQkFBQTtBQ0dSO0FERlE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDSVI7QURGSTtFQUNJLGdCQUFBO0VBQ0EsMkNBQUE7RUFDQSxvQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0NBQUE7QUNJUjtBREZJO0VBQ0ksMkJBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsK0JBQUE7QUNJUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hhYml0L2hhYml0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIC5jYXRlZ29yeV9uYW1laGF7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtjb2xvcjogIzAwN2M5ZDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDoyMHB4O1xuICAgIH1cbiAgICAuU2hvcEJ5UHJvZHVjdHN7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggNTBweCA1MHB4O2JhY2tncm91bmQ6ICNlZGVkZWQ7XG4gICAgfVxuICAgIC5wb3BpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOjEwcHggMTBweCAwcHggMHB4O1xuICAgIH1cbiAgICAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuZGVzaGEge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG4gICAgLmFkZHRvY2FydHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhNWIyNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLnVwdG9wbXB7XG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcbiAgICB9XG4gICAgLnVwdG9wbXAgaW1ne1xuICAgICAgICBtYXJnaW46NXB4IDBweDtcbiAgICB9XG4gICAgLm1wb3BpbWd7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAtMjVweDtcbiAgICAgICAgbGVmdDogNDAlO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgIH1cbiAgICAuY2F0ZWdvcnlfbmFtZW1we1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwYWRkaW5nLXRvcDo1MHB4O2hlaWdodDogOTVweDtcbiAgICB9XG5cbiAgICAuZGVzbXAgdWx7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgLmRlc21wIGxpe1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nJyk7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtsaXN0LXN0eWxlOiBub25lO2ZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyNXB4O1xuICAgIH1cbiAgICAuYnV0a21vcmUge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIC5rbm93X21vcmUge1xuICAgICAgICBtYXJnaW46IDE1cHg7XG4gICAgICAgIGNvbG9yOiAjMDA3YzlkO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjMDA3YzlkO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE1cHg7fVxuICAgIH1cbiAgICAubWlke1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyA0MCUpIDBweCA4cHggMTBweDtcbiAgICAgICAgbWFyZ2luOiAxNnB4IDhweCAyMCU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6MjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjIwcHg7XG4gICAgfVxuICAgIC5taWQuc2Vjb25ke1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MjBweCA7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MjBweDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVoYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5pb24tY29udGVudCAuU2hvcEJ5UHJvZHVjdHMge1xuICBwYWRkaW5nOiAzMHB4IDUwcHggNTBweDtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cbmlvbi1jb250ZW50IC5wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWl0ZW0taW5uZXJoYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXNoYSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgLmFkZHRvY2FydCB7XG4gIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDRweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnVwdG9wbXAge1xuICBwYWRkaW5nOiAwIDEwcHg7XG59XG5pb24tY29udGVudCAudXB0b3BtcCBpbWcge1xuICBtYXJnaW46IDVweCAwcHg7XG59XG5pb24tY29udGVudCAubXBvcGltZyB7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjVweDtcbiAgbGVmdDogNDAlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxuaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVtcCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHBhZGRpbmctdG9wOiA1MHB4O1xuICBoZWlnaHQ6IDk1cHg7XG59XG5pb24tY29udGVudCAuZGVzbXAgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGVzbXAgbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUgLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5taWQge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xuICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDIwcHg7XG59XG5pb24tY29udGVudCAubWlkLnNlY29uZCB7XG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/habit/habit.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/habit/habit.page.ts ***!
  \*******************************************/
/*! exports provided: HabitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HabitPage", function() { return HabitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");







let HabitPage = class HabitPage {
    constructor(modalController, navCtrl, formBuilder, api, util, router) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.router = router;
        this.all_test = [];
        this.habit_test = [];
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
        this.habit_id = localStorage.getItem('habitid');
        console.log(this.habit_id);
        this.api.getHealthHabbitsById(this.habit_id).then((info) => {
            console.log(info);
            this.habit_detail = info[0];
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    ngOnInit() {
        this.filter_tests = [];
        this.api.getIndividualTest().then(data => {
            this.all_test = data;
            for (let x of this.all_test) {
                for (let y of x.habbit) {
                    if (y.item_id == this.habit_id) {
                        console.log('matched');
                        this.habit_test.push(x);
                        this.filter_tests.push(x);
                        console.log(this.habit_test);
                    }
                }
            }
            this.habit_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
        }).catch(error => {
            console.log(error);
        });
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
        this.ngOnInit();
    }
    search() {
        if (this.recommended_age == '' && this.test_recommended_for == '') {
            this.util.showToast('Please select at least one filter', 'danger', 'bottom');
            return false;
        }
        this.habit_test = [];
        var arr1 = [];
        var arr2 = [];
        this.filter = true;
        for (let x of this.filter_tests) {
            if (this.recommended_age != '' && this.test_recommended_for == '') {
                for (let y of x.recommended_age) {
                    if (y.item_id == this.recommended_age) {
                        this.habit_test.push(x);
                    }
                }
            }
            else if (this.recommended_age == '' && this.test_recommended_for != '') {
                for (let y of x.test_recommended_for) {
                    if (y == this.test_recommended_for) {
                        this.habit_test.push(x);
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
                this.habit_test = arr1.filter(value => arr2.includes(value));
            }
        }
        console.log('item', this.habit_test);
        if (this.habit_test.length > 0) {
            this.habit_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
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
HabitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
HabitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-habit',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./habit.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/habit/habit.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./habit.page.scss */ "./src/app/pages/habit/habit.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], HabitPage);



/***/ })

}]);
//# sourceMappingURL=pages-habit-habit-module-es2015.js.map