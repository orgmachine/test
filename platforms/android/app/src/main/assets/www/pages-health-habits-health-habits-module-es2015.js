(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-health-habits-health-habits-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-habits/health-habits.page.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-habits/health-habits.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content class=\"ion-padding\">\n  <div class=\"ShopByProducts\">\n  \n    <div class=\"container\" >\n<div class=\"row\">\n<div style=\"margin:30px auto\"><div class=\"ct-heading h-align-center item-st-default\" style=\"text-align: center;\"><div class=\"item--sub-title style-default\">Health Habits</div>\n<img src=\"assets/org_line.png\">\n</div></div>\n</div></div>\n\n\n<div class=\"row col-md-12 col-lg-12 col-xl-12 \">\n  <div class=\"col-md-12 col-lg-4 col-xl-4\" *ngFor=\"let item of habits\">\n    <div class=\"grid-item-innerha\">\n      <img class=\"popimg\" [src]=\"item.image\">\n      <p class=\"category_nameha\">{{item.name}}</p> \n      <div class=\"desha\" [innerHtml]=\"item.description | slice:0:80\"></div>\n      <button ion-button  class=\"addtocart\" (click)=\"viewHabit(item)\">View Test</button>\n    </div>\n  </div>\n</div>\n</div>\n<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/health-habits/health-habits-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/health-habits/health-habits-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: HealthHabitsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthHabitsPageRoutingModule", function() { return HealthHabitsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _health_habits_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./health-habits.page */ "./src/app/pages/health-habits/health-habits.page.ts");




const routes = [
    {
        path: '',
        component: _health_habits_page__WEBPACK_IMPORTED_MODULE_3__["HealthHabitsPage"]
    }
];
let HealthHabitsPageRoutingModule = class HealthHabitsPageRoutingModule {
};
HealthHabitsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], HealthHabitsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/health-habits/health-habits.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/health-habits/health-habits.module.ts ***!
  \*************************************************************/
/*! exports provided: HealthHabitsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthHabitsPageModule", function() { return HealthHabitsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _health_habits_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./health-habits-routing.module */ "./src/app/pages/health-habits/health-habits-routing.module.ts");
/* harmony import */ var _health_habits_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./health-habits.page */ "./src/app/pages/health-habits/health-habits.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");










let HealthHabitsPageModule = class HealthHabitsPageModule {
};
HealthHabitsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _health_habits_routing_module__WEBPACK_IMPORTED_MODULE_5__["HealthHabitsPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_health_habits_page__WEBPACK_IMPORTED_MODULE_6__["HealthHabitsPage"]]
    })
], HealthHabitsPageModule);



/***/ }),

/***/ "./src/app/pages/health-habits/health-habits.page.scss":
/*!*************************************************************!*\
  !*** ./src/app/pages/health-habits/health-habits.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content .category_nameha {\n  font-size: 20px;\n  color: #007c9d;\n  font-weight: bold;\n  padding-top: 30px;\n  line-height: 20px;\n}\nion-content .ShopByProducts {\n  padding: 30px 50px 50px;\n  background: #ededed;\n}\nion-content .popimg {\n  border-radius: 10px 10px 0px 0px;\n}\nion-content .grid-item-innerha {\n  text-align: center;\n  background: white;\n  padding: 16px;\n  border-top: 3px solid var(--ion-color-secondary);\n  margin-bottom: 30px;\n}\nion-content .desha {\n  margin: 10px 0;\n}\nion-content .addtocart {\n  background: #ea5b24;\n  color: white;\n  font-size: 13px;\n  margin: 4px auto;\n  text-align: center;\n  display: block;\n  width: 50%;\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaGVhbHRoLWhhYml0cy9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxoZWFsdGgtaGFiaXRzXFxoZWFsdGgtaGFiaXRzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvaGVhbHRoLWhhYml0cy9oZWFsdGgtaGFiaXRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUFpQixlQUFBO0VBQWdCLGNBQUE7RUFDckMsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FDRUE7QUREQTtFQUFnQix1QkFBQTtFQUF3QixtQkFBQTtBQ0t4QztBREpBO0VBQVMsZ0NBQUE7QUNPVDtBRE5JO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxnREFBQTtFQUNBLG1CQUFBO0FDUVI7QUROSTtFQUNJLGNBQUE7QUNRUjtBRE5JO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNRUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hlYWx0aC1oYWJpdHMvaGVhbHRoLWhhYml0cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAuY2F0ZWdvcnlfbmFtZWhhe2ZvbnQtc2l6ZTogMjBweDtjb2xvcjogIzAwN2M5ZDtcbmZvbnQtd2VpZ2h0OiBib2xkO1xucGFkZGluZy10b3A6IDMwcHg7XG5saW5lLWhlaWdodDoyMHB4O31cbi5TaG9wQnlQcm9kdWN0c3twYWRkaW5nOiAzMHB4IDUwcHggNTBweDtiYWNrZ3JvdW5kOiAjZWRlZGVkO31cbi5wb3BpbWcge2JvcmRlci1yYWRpdXM6MTBweCAxMHB4IDBweCAwcHg7fVxuICAgIC5ncmlkLWl0ZW0taW5uZXJoYSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgXG4gICAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItdG9wOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuICAgIC5kZXNoYSB7XG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgIH1cbiAgICAuYWRkdG9jYXJ0e1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWE1YjI0O1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgbWFyZ2luOiA0cHggYXV0bztcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICB9XG59IiwiaW9uLWNvbnRlbnQgLmNhdGVnb3J5X25hbWVoYSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDdjOWQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBwYWRkaW5nLXRvcDogMzBweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG5pb24tY29udGVudCAuU2hvcEJ5UHJvZHVjdHMge1xuICBwYWRkaW5nOiAzMHB4IDUwcHggNTBweDtcbiAgYmFja2dyb3VuZDogI2VkZWRlZDtcbn1cbmlvbi1jb250ZW50IC5wb3BpbWcge1xuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcbn1cbmlvbi1jb250ZW50IC5ncmlkLWl0ZW0taW5uZXJoYSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHBhZGRpbmc6IDE2cHg7XG4gIGJvcmRlci10b3A6IDNweCBzb2xpZCB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cbmlvbi1jb250ZW50IC5kZXNoYSB7XG4gIG1hcmdpbjogMTBweCAwO1xufVxuaW9uLWNvbnRlbnQgLmFkZHRvY2FydCB7XG4gIGJhY2tncm91bmQ6ICNlYTViMjQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBtYXJnaW46IDRweCBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogNTAlO1xuICBwYWRkaW5nOiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/health-habits/health-habits.page.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/health-habits/health-habits.page.ts ***!
  \***********************************************************/
/*! exports provided: HealthHabitsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HealthHabitsPage", function() { return HealthHabitsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");




let HealthHabitsPage = class HealthHabitsPage {
    constructor(route, router, api) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.habits = [];
    }
    ionViewWillEnter() {
        this.api.getHealthHabbits().then(data => {
            console.log(data);
            this.habits = data;
        }).catch(error => {
            console.log(error);
        });
    }
    viewHabit(data) {
        localStorage.setItem('habitid', data.id);
        this.router.navigate(['habit', data.name]);
    }
};
HealthHabitsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] }
];
HealthHabitsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-health-habits',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./health-habits.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/health-habits/health-habits.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./health-habits.page.scss */ "./src/app/pages/health-habits/health-habits.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"]])
], HealthHabitsPage);



/***/ })

}]);
//# sourceMappingURL=pages-health-habits-health-habits-module-es2015.js.map