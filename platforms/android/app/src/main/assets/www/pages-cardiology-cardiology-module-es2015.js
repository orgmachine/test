(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cardiology-cardiology-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cardiology/cardiology.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cardiology/cardiology.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n<div class=\"container\">\n\n   <div class=\"cart-div deal_detail\">\n      <div class=\"row step-div cart-sec\">\n         <div class=\"col-md-12 col-sm-12 col-xs-12\">\n     <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">Cardiology</h3>\n                                                   \n         <p class=\"metaFooterToggleLink\">Cardiology is the study and treatment of disorders of the heart and the blood vessels. A person with heart disease or cardiovascular disease may be referred to a cardiologist. Heart disease relates specifically to the heart, while cardiovascular disease affects the heart, the blood vessels, or both. <br><i> There are different heart health tests, but it’s important to remember that these tests have little to no risk involved and are highly beneficial for allowing your doctor to understand how your heart is working.</i>\n        </p>\n         </div>\n         <div class=\"clearfix\"></div>\n      </div>     \n</div>\n</div>\n<div class=\"container\">\n  <div class=\"cart-div deal_detail\">\n      <div class=\"row step-div cart-sec\">\n         <div class=\"col-md-5 col-sm-5 col-xs-5\">\n            <h3 _ngcontent-ovj-c5=\"\" style=\"margin: 20px 0 4% 0px;display: inline-block;border-bottom: 2px solid #ea5b24;\">Cardiology Test</h3>\n         </div>\n         <div class=\"col-sm-3\">\n         <label>Age Group :</label>\n         <select [(ngModel)]=\"recommended_age\" class=\"form-control\">\n            <option value=\"\">Please select Age Group</option>\n            <option *ngFor=\"let i of age_groups\" value=\"{{i.id}}\">{{i.name}}</option>\n         </select>\n         </div>\n          <div class=\"col-sm-2\">\n             <label>Suitable For : </label>\n             <select [(ngModel)]=\"test_recommended_for\" class=\"form-control\">\n                <option value=\"\">Please select gender</option>\n                <option *ngFor=\"let i of recommended_fors\" value=\"{{i.id}}\">{{i.name}}</option>\n            </select>\n           </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button type=\"button\" (click)=\"search()\" class=\"btn btn-success\">Search</button>\n        </div>\n        <div class=\"col-sm-1\">\n           <label></label>\n           <button *ngIf=\"filter\" type=\"button\" (click)=\"clear()\" class=\"btn btn-danger\" >Clear</button>\n        </div>\n      </div>     \n  </div>\n</div>\n \n<div class=\"container\">\n\n  <div class=\"row\" style=\"margin-top: 30px;\">\n    <div class=\"col-md-12 col-lg-3 col-xl-3\" *ngFor=\"let item of cardiology_test\">\n      <div class=\"grid-item-inner\">\n        <div class=\"mid\">\n          <div class=\"uptopmp\">\n            <img class=\"mpopimg\" src=\"assets/mp1_11.png\">\n            <p class=\"category_namemp\">{{item.test_name}}</p> \n            <div class=\"desmp\">\n            <ul>\n              <li *ngIf=\"item.parameter.length !== 0\">Total no.of Tests - {{item.parameter.length}}</li>\n              <li *ngIf=\"item.habbit.length !== 0\">Associated Habbits - {{item.habbit.length}}</li>\n              <li *ngIf=\"item.health_risk.length !== 0\">Associated Risk - {{item.health_risk.length}}</li>\n              <li>Quick Turn Around Time</li>\n              <li>Reporting as per NABL ISO guidelines</li>\n            </ul>\n            </div>\n          </div>\n          <div class=\"butkmore\">\n            <button ion-button  class=\"know_more\" (click)=\"goToDetail(item)\">Know More</button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/cardiology/cardiology-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/cardiology/cardiology-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CardiologyPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardiologyPageRoutingModule", function() { return CardiologyPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _cardiology_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cardiology.page */ "./src/app/pages/cardiology/cardiology.page.ts");




const routes = [
    {
        path: '',
        component: _cardiology_page__WEBPACK_IMPORTED_MODULE_3__["CardiologyPage"]
    }
];
let CardiologyPageRoutingModule = class CardiologyPageRoutingModule {
};
CardiologyPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CardiologyPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/cardiology/cardiology.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/cardiology/cardiology.module.ts ***!
  \*******************************************************/
/*! exports provided: CardiologyPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardiologyPageModule", function() { return CardiologyPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _cardiology_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cardiology-routing.module */ "./src/app/pages/cardiology/cardiology-routing.module.ts");
/* harmony import */ var _cardiology_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cardiology.page */ "./src/app/pages/cardiology/cardiology.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let CardiologyPageModule = class CardiologyPageModule {
};
CardiologyPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _cardiology_routing_module__WEBPACK_IMPORTED_MODULE_5__["CardiologyPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_cardiology_page__WEBPACK_IMPORTED_MODULE_6__["CardiologyPage"]]
    })
], CardiologyPageModule);



/***/ }),

/***/ "./src/app/pages/cardiology/cardiology.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/cardiology/cardiology.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-family: \"Poppins-Light\";\n}\nion-content span {\n  font-family: \"Poppins-Light\";\n}\nion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\nion-content .uptopmp {\n  padding: 0 10px;\n}\nion-content .uptopmp img {\n  margin: 5px 0px;\n}\nion-content .mpopimg {\n  border-radius: 50px;\n  border: 1px solid #ddd;\n  position: absolute;\n  top: -25px;\n  left: 40%;\n  padding: 10px;\n  background: #fff;\n}\nion-content .category_namemp {\n  font-size: 16px;\n  font-weight: bold;\n  text-transform: uppercase;\n  padding-top: 60px;\n  line-height: 30px;\n}\nion-content .desmp ul {\n  text-align: center;\n}\nion-content .desmp li {\n  background-image: url('bul_chk.png');\n  background-position: 2px;\n  background-repeat: no-repeat;\n  list-style: none;\n  font-size: 14px;\n  text-align: left;\n  padding-left: 25px;\n}\nion-content .butkmore {\n  text-align: center;\n}\nion-content .butkmore .know_more {\n  margin: 15px;\n  color: #007c9d;\n  background: #fff;\n  border-radius: 50px;\n  border: 1px solid #007c9d;\n  padding: 10px;\n  font-size: 15px;\n}\nion-content .mid {\n  box-shadow: rgba(0, 0, 0, 0.4) 0px 8px 10px;\n  margin: 16px 8px 20%;\n  /*height: 300px;*/\n  border-top-left-radius: 50px !important;\n  border-bottom-right-radius: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FyZGlvbG9neS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxjYXJkaW9sb2d5XFxjYXJkaW9sb2d5LnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FyZGlvbG9neS9jYXJkaW9sb2d5LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNBLDRCQUFBO0FDQUo7QURFSTtFQUNBLDRCQUFBO0FDQUo7QURFSTtFQUFpQixlQUFBO0VBQWdCLGNBQUE7RUFDckMsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUE7QUREQTtFQUFnQix1QkFBQTtFQUF3QixtQkFBQTtBQ0t4QztBREpBO0VBQVMsZ0NBQUE7QUNPVDtBRE5JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDUVI7QUROSTtFQUNJLGNBQUE7QUNRUjtBRE5JO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNRUjtBRExJO0VBQVMsZUFBQTtBQ1FiO0FEUEE7RUFBYSxlQUFBO0FDVWI7QURUQTtFQUFTLG1CQUFBO0VBQ1Qsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDWUE7QURYQTtFQUFpQixlQUFBO0VBQ2pCLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDY0E7QURaQTtFQUFVLGtCQUFBO0FDZVY7QURkQTtFQUFVLG9DQUFBO0VBQ1Ysd0JBQUE7RUFDQSw0QkFBQTtFQUE2QixnQkFBQTtFQUFpQixlQUFBO0VBQzlDLGdCQUFBO0VBQ0Esa0JBQUE7QUNtQkE7QURsQkE7RUFDSSxrQkFBQTtBQ29CSjtBRG5CSTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNxQko7QURuQkE7RUFDTSwyQ0FBQTtFQUNBLG9CQUFBO0VBQ0UsaUJBQUE7RUFDRix1Q0FBQTtFQUNBLGdDQUFBO0FDcUJOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FyZGlvbG9neS9jYXJkaW9sb2d5LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuICAgIHB7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zLUxpZ2h0Jztcbn1cbiAgICBzcGFue1xuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucy1MaWdodCc7XG59XG4gICAgLmNhdGVnb3J5X25hbWVoYXtmb250LXNpemU6IDIwcHg7Y29sb3I6ICMwMDdjOWQ7XG5mb250LXdlaWdodDogYm9sZDtcbnBhZGRpbmctdG9wOiAzMHB4O1xubGluZS1oZWlnaHQ6MjBweDt9XG4uU2hvcEJ5UHJvZHVjdHN7cGFkZGluZzogMzBweCA1MHB4IDUwcHg7YmFja2dyb3VuZDogI2VkZWRlZDt9XG4ucG9waW1nIHtib3JkZXItcmFkaXVzOjEwcHggMTBweCAwcHggMHB4O31cbiAgICAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgIFxuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgcGFkZGluZzogMTZweDtcbiAgICAgICAgYm9yZGVyLXRvcDogM3B4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICAuZGVzaGEge1xuICAgICAgICBtYXJnaW46IDEwcHggMDtcbiAgICB9XG4gICAgLmFkZHRvY2FydHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VhNWIyNDtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbjogNHB4IGF1dG87XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgfVxuXG4gICAgLnVwdG9wbXB7cGFkZGluZzogMCAxMHB4O31cbi51cHRvcG1wIGltZ3ttYXJnaW46NXB4IDBweDt9XG4ubXBvcGltZ3tib3JkZXItcmFkaXVzOiA1MHB4O1xuYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogLTI1cHg7XG5sZWZ0OiA0MCU7XG5wYWRkaW5nOiAxMHB4O1xuYmFja2dyb3VuZDogI2ZmZjt9XG4uY2F0ZWdvcnlfbmFtZW1we2ZvbnQtc2l6ZTogMTZweDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xudGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbnBhZGRpbmctdG9wOiA2MHB4O1xubGluZS1oZWlnaHQ6IDMwcHg7fVxuXG4uZGVzbXAgdWx7dGV4dC1hbGlnbjogY2VudGVyO31cbi5kZXNtcCBsaXtiYWNrZ3JvdW5kLWltYWdlOnVybCgnLi4vLi4vLi4vYXNzZXRzL2J1bF9jaGsucG5nJyk7XG5iYWNrZ3JvdW5kLXBvc2l0aW9uOiAycHg7XG5iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O2xpc3Qtc3R5bGU6IG5vbmU7Zm9udC1zaXplOiAxNHB4O1xudGV4dC1hbGlnbjogbGVmdDtcbnBhZGRpbmctbGVmdDogMjVweDt9XG4uYnV0a21vcmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAua25vd19tb3JlIHtcbiAgICBtYXJnaW46IDE1cHg7XG4gICAgY29sb3I6ICMwMDdjOWQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDE1cHg7fVxufVxuLm1pZHtcbiAgICAgIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDQwJSkgMHB4IDhweCAxMHB4O1xuICAgICAgbWFyZ2luOiAxNnB4IDhweCAyMCU7XG4gICAgICAgIC8qaGVpZ2h0OiAzMDBweDsqL1xuICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogNTBweCAhaW1wb3J0YW50O1xuICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG59XG59XG4iLCJpb24tY29udGVudCBwIHtcbiAgZm9udC1mYW1pbHk6IFwiUG9wcGlucy1MaWdodFwiO1xufVxuaW9uLWNvbnRlbnQgc3BhbiB7XG4gIGZvbnQtZmFtaWx5OiBcIlBvcHBpbnMtTGlnaHRcIjtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeV9uYW1laGEge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGNvbG9yOiAjMDA3YzlkO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgcGFkZGluZy10b3A6IDMwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xufVxuaW9uLWNvbnRlbnQgLlNob3BCeVByb2R1Y3RzIHtcbiAgcGFkZGluZzogMzBweCA1MHB4IDUwcHg7XG4gIGJhY2tncm91bmQ6ICNlZGVkZWQ7XG59XG5pb24tY29udGVudCAucG9waW1nIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAwcHg7XG59XG5pb24tY29udGVudCAuZ3JpZC1pdGVtLWlubmVyaGEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5pb24tY29udGVudCAuZGVzaGEge1xuICBtYXJnaW46IDEwcHggMDtcbn1cbmlvbi1jb250ZW50IC5hZGR0b2NhcnQge1xuICBiYWNrZ3JvdW5kOiAjZWE1YjI0O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luOiA0cHggYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDUwJTtcbiAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1jb250ZW50IC51cHRvcG1wIHtcbiAgcGFkZGluZzogMCAxMHB4O1xufVxuaW9uLWNvbnRlbnQgLnVwdG9wbXAgaW1nIHtcbiAgbWFyZ2luOiA1cHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLm1wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogLTI1cHg7XG4gIGxlZnQ6IDQwJTtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbmlvbi1jb250ZW50IC5jYXRlZ29yeV9uYW1lbXAge1xuICBmb250LXNpemU6IDE2cHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBwYWRkaW5nLXRvcDogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG5pb24tY29udGVudCAuZGVzbXAgdWwge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuZGVzbXAgbGkge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvYnVsX2Noay5wbmdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IDJweDtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCAuYnV0a21vcmUgLmtub3dfbW9yZSB7XG4gIG1hcmdpbjogMTVweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDdjOWQ7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5taWQge1xuICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuNCkgMHB4IDhweCAxMHB4O1xuICBtYXJnaW46IDE2cHggOHB4IDIwJTtcbiAgLypoZWlnaHQ6IDMwMHB4OyovXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDUwcHggIWltcG9ydGFudDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/cardiology/cardiology.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/cardiology/cardiology.page.ts ***!
  \*****************************************************/
/*! exports provided: CardiologyPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardiologyPage", function() { return CardiologyPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");





let CardiologyPage = class CardiologyPage {
    constructor(api, util, router) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.cardiology_test = [];
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
        this.api.getCardiologyTest().then(data => {
            this.cardiology_test = data;
            this.filter_tests = data;
            console.log(this.cardiology_test);
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
        this.cardiology_test = [];
        var arr1 = [];
        var arr2 = [];
        this.filter = true;
        for (let x of this.filter_tests) {
            if (this.recommended_age != '' && this.test_recommended_for == '') {
                for (let y of x.recommended_age) {
                    if (y.item_id == this.recommended_age) {
                        this.cardiology_test.push(x);
                    }
                }
            }
            else if (this.recommended_age == '' && this.test_recommended_for != '') {
                for (let y of x.test_recommended_for) {
                    if (y == this.test_recommended_for) {
                        this.cardiology_test.push(x);
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
                this.cardiology_test = arr1.filter(value => arr2.includes(value));
            }
        }
        console.log('item', this.cardiology_test);
        if (this.cardiology_test.length > 0) {
            this.cardiology_test.sort((a, b) => a.test_name.localeCompare(b.test_name));
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
CardiologyPage.ctorParameters = () => [
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
CardiologyPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-app-cardiology',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cardiology.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cardiology/cardiology.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cardiology.page.scss */ "./src/app/pages/cardiology/cardiology.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], CardiologyPage);



/***/ })

}]);
//# sourceMappingURL=pages-cardiology-cardiology-module-es2015.js.map