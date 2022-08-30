(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-edit-profile-edit-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n    <!-- <div class=\"ion-text-center ion-margin-top\" (click)=\"albumSheet()\">\n        <img class=\"profile\" src=\"{{profile?.imagePath}}\" height=\"123px\" width=\"123px\" *ngIf=\"profile?.imagePath !== ''\">\n        <img class=\"profile\" src=\"assets/noProfile.jpg\" *ngIf=\"profile?.imagePath ==''\">\n        <img class=\"picker\" src=\"../../../assets/Profile/Group 8018.svg\">\n    </div> -->\n    <div class=\"padding\">\n        <div class=\"ion-margin-top\">\n            <div class=\"input-div\">\n                <ion-label>Full Name</ion-label>\n                <ion-input [(ngModel)]=\"name\" value=\"{{profile?.name}}\" placeholder=\"Enter your full name\"></ion-input>\n            </div>\n            <div class=\"input-div\">\n                <ion-label>Email Address</ion-label>\n                <ion-input [(ngModel)]=\"email\" value=\"{{profile?.email}}\" placeholder=\"Enter your email ID\"></ion-input>\n            </div>\n            <div class=\"input-div\">\n                <ion-label>Mobile Number</ion-label>\n                <ion-input [(ngModel)]=\"phone\" value=\"{{profile?.phone}}\" type=\"tel\" placeholder=\"00000000\"></ion-input>\n            </div>\n        </div>\n\n        <div class=\"fil\">\n        <label for=\"test\">\n          <div>Upload</div>\n          <input type=\"file\" (change)=\"handleFileSelect($event)\" >\n        </label>\n      </div>\n       <ion-grid>\n        <ion-row>\n          <img class=\"profile\" src=\"{{profile?.imagePath}}\" height=\"123px\" width=\"123px\" *ngIf=\"profile?.imagePath !== ''\">\n        <img class=\"profile\" src=\"assets/noProfile.jpg\" *ngIf=\"profile?.imagePath ==''\">\n        </ion-row>\n      </ion-grid>\n\n\t\t<ion-button (click)=\"changeProfile()\" mode=\"md\">Change This Information</ion-button>\n    </div>\n</div>\n\t<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: EditProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageRoutingModule", function() { return EditProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_3__["EditProfilePage"]
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.module.ts ***!
  \***********************************************************/
/*! exports provided: EditProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-profile-routing.module */ "./src/app/pages/edit-profile/edit-profile-routing.module.ts");
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./edit-profile.page */ "./src/app/pages/edit-profile/edit-profile.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");








let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditProfilePageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_6__["EditProfilePage"]]
    })
], EditProfilePageModule);



/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-header ion-toolbar ion-button {\n  color: var(--blue-color) !important;\n  text-transform: capitalize;\n  --background: transparent;\n  --color: var(--blue-color);\n}\n\nion-content .picker {\n  position: absolute;\n  margin-top: 74px;\n  margin-left: -34px;\n}\n\nion-content .profile {\n  border-radius: 50%;\n}\n\nion-content .input-div ion-label {\n  font-size: 13px;\n}\n\nion-content .input-div ion-input {\n  margin-top: 12px;\n  margin-bottom: 13px;\n  height: 44px;\n  background-color: #F5F5F5;\n  border-radius: 7px;\n  font-size: 15px;\n  --padding-start: 20px;\n  color: var(--input-color);\n  --placeholder-opacity: 1;\n}\n\nion-content .padding {\n  padding-left: 20px;\n  padding-right: 20px;\n  margin-bottom: 20px;\n  /*position: absolute;*/\n  top: 32%;\n}\n\nion-content .number-input {\n  background: var(--ion-color-sky);\n  border-radius: 22px;\n  height: 44px;\n  padding: 4px 4px;\n  display: -webkit-box;\n  display: flex;\n  position: relative;\n}\n\nion-content .number-input .code-div {\n  border-right: 1px solid var(--ion-border-color);\n}\n\nion-content .number-input .number-div {\n  padding-left: 8px;\n}\n\nion-content .number-input .number-div .input-div {\n  padding-left: 3px;\n}\n\nion-content .number-input .number-div .input-div ion-input {\n  font-size: 15px;\n  font-family: \"Poppins-Medium\";\n  --padding-top: 9px;\n  position: relative;\n  top: -7px;\n}\n\nion-content .number-input .button-div {\n  width: 25px;\n}\n\nion-content .number-input .button-div .btn-clear {\n  --padding-start: 0px;\n  --padding-end: 0px;\n  margin-top: 0px;\n}\n\nion-content .number {\n  font-size: 13px;\n}\n\nion-content input[type=file] {\n  position: absolute;\n  left: 0;\n  opacity: 0;\n  top: 0;\n  bottom: 0;\n  width: 100%;\n}\n\nion-content .fil div {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 80%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n  background: url('attach.png') no-repeat left;\n  background-size: 15%;\n  margin-left: 16px;\n}\n\nion-content label {\n  display: inline-block;\n  position: relative;\n  height: 34px;\n  width: 110px;\n  background-color: #fff;\n  border: 1px solid #bab6b6;\n}\n\nion-content div.dragover {\n  background-color: #fff;\n}\n\nion-content #uploadDoc .thumnamilCont {\n  position: relative;\n}\n\nion-content #uploadDoc .thumnamilCont img {\n  margin: 10px 10px 0 0;\n  padding: 5px 5px 0 0;\n}\n\nion-content #uploadDoc .thumnamilCont .crossBtn {\n  position: absolute;\n  top: -4px;\n  width: 17px;\n}\n\nion-content #uploadDoc .helpTip {\n  font-size: 12px;\n}\n\nion-content #uploadDoc .equalHMRWrap {\n  flex-wrap: wrap;\n}\n\nion-content #uploadDoc .eqWrap {\n  display: -webkit-box;\n  display: flex;\n}\n\nion-content #uploadDoc .equalHMR {\n  width: 33%;\n  margin-bottom: 2%;\n  display: inline-block;\n}\n\nion-content #uploadDoc .eq {\n  padding: 0px;\n}\n\nion-footer ion-toolbar ion-button {\n  margin: 0;\n  background-color: var(--blue-color);\n  height: 52px;\n  padding: 0px;\n  font-size: 17px;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGVkaXQtcHJvZmlsZVxcZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvZWRpdC1wcm9maWxlL2VkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSVE7RUFDSSxtQ0FBQTtFQUNBLDBCQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtBQ0haOztBRFNJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDTlI7O0FEUUk7RUFDSSxrQkFBQTtBQ05SOztBRFVRO0VBQ0ksZUFBQTtBQ1JaOztBRFVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtBQ1JaOztBRFdJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxRQUFBO0FDVFI7O0FEV0k7RUFDSSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esa0JBQUE7QUNUUjs7QURVUTtFQUNJLCtDQUFBO0FDUlo7O0FEVVE7RUFDSSxpQkFBQTtBQ1JaOztBRFNZO0VBQ0ksaUJBQUE7QUNQaEI7O0FEUWdCO0VBQ0ksZUFBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7QUNOcEI7O0FEVVE7RUFDSSxXQUFBO0FDUlo7O0FEU1k7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1BoQjs7QURXSTtFQUNJLGVBQUE7QUNUUjs7QURhSTtFQUNJLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFVBQUE7RUFDQSxNQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUNYUjs7QURhUTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7QUNYUjs7QURhUTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUNYUjs7QURhUTtFQUNBLHNCQUFBO0FDWFI7O0FEY1E7RUFDSSxrQkFBQTtBQ1paOztBRGNRO0VBQ0kscUJBQUE7RUFDQSxvQkFBQTtBQ1paOztBRGNRO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ1paOztBRGNRO0VBQ0ksZUFBQTtBQ1paOztBRGNRO0VBQ0ksZUFBQTtBQ1paOztBRGNRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0FDWlo7O0FEY1E7RUFDSSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQ1paOztBRGNRO0VBQ0ksWUFBQTtBQ1paOztBRGlCUTtFQUNJLFNBQUE7RUFDQSxtQ0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBCQUFBO0FDZFoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9lZGl0LXByb2ZpbGUvZWRpdC1wcm9maWxlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1oZWFkZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi10aXRsZSB7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcikgIWltcG9ydGFudDtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgICAgIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgICAgIC0tY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuaW9uLWNvbnRlbnQge1xyXG4gICAgLnBpY2tlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDc0cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IC0zNHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2ZpbGUge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIC5pbnB1dC1kaXYge1xyXG4gICAgICAgIGlvbi1sYWJlbCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaW9uLWlucHV0IHtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTJweDtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTNweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA3cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAyMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW5wdXQtY29sb3IpO1xyXG4gICAgICAgICAgICAtLXBsYWNlaG9sZGVyLW9wYWNpdHk6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBhZGRpbmcge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxuICAgICAgICB0b3A6IDMyJTtcclxuICAgIH1cclxuICAgIC5udW1iZXItaW5wdXQge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1za3kpO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICAgICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA0cHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgLmNvZGUtZGl2IHtcclxuICAgICAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0taW9uLWJvcmRlci1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW1iZXItZGl2IHtcclxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgICAgIC5pbnB1dC1kaXYge1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAzcHg7XHJcbiAgICAgICAgICAgICAgICBpb24taW5wdXQge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xyXG4gICAgICAgICAgICAgICAgICAgIC0tcGFkZGluZy10b3A6IDlweDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtN3B4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5idXR0b24tZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIC5idG4tY2xlYXIge1xyXG4gICAgICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAtLXBhZGRpbmctZW5kOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubnVtYmVyIHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJmaWxlXCJdIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7fVxyXG5cclxuICAgICAgICAuZmlsIGRpdiB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9hdHRhY2gucG5nKSBuby1yZXBlYXQgbGVmdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE1JTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTZweDt9XHJcblxyXG4gICAgICAgIGxhYmVsIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGhlaWdodDogMzRweDtcclxuICAgICAgICB3aWR0aDogMTEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXI6MXB4IHNvbGlkICNiYWI2YjY7fVxyXG5cclxuICAgICAgICBkaXYuZHJhZ292ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAjdXBsb2FkRG9jIC50aHVtbmFtaWxDb250e1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7fVxyXG5cclxuICAgICAgICAjdXBsb2FkRG9jIC50aHVtbmFtaWxDb250IGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcclxuICAgICAgICAgICAgcGFkZGluZzogNXB4IDVweCAwIDA7IH1cclxuXHJcbiAgICAgICAgI3VwbG9hZERvYyAudGh1bW5hbWlsQ29udCAuY3Jvc3NCdG4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIHRvcDogLTRweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE3cHg7fVxyXG5cclxuICAgICAgICAjdXBsb2FkRG9jIC5oZWxwVGlwIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O31cclxuXHJcbiAgICAgICAgI3VwbG9hZERvYyAuZXF1YWxITVJXcmFwIHtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwOyB9XHJcblxyXG4gICAgICAgICN1cGxvYWREb2MgLmVxV3JhcCB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7IH1cclxuXHJcbiAgICAgICAgI3VwbG9hZERvYyAuZXF1YWxITVIge1xyXG4gICAgICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XHJcblxyXG4gICAgICAgICN1cGxvYWREb2MgLmVxIHtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4OyB9XHJcbn1cclxuXHJcbmlvbi1mb290ZXIge1xyXG4gICAgaW9uLXRvb2xiYXIge1xyXG4gICAgICAgIGlvbi1idXR0b24ge1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCJpb24taGVhZGVyIGlvbi10b29sYmFyIGlvbi1idXR0b24ge1xuICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcikgIWltcG9ydGFudDtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gIC0tYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gIC0tY29sb3I6IHZhcigtLWJsdWUtY29sb3IpO1xufVxuXG5pb24tY29udGVudCAucGlja2VyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tdG9wOiA3NHB4O1xuICBtYXJnaW4tbGVmdDogLTM0cHg7XG59XG5pb24tY29udGVudCAucHJvZmlsZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbmlvbi1jb250ZW50IC5pbnB1dC1kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuaW9uLWNvbnRlbnQgLmlucHV0LWRpdiBpb24taW5wdXQge1xuICBtYXJnaW4tdG9wOiAxMnB4O1xuICBtYXJnaW4tYm90dG9tOiAxM3B4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XG4gIGJvcmRlci1yYWRpdXM6IDdweDtcbiAgZm9udC1zaXplOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDIwcHg7XG4gIGNvbG9yOiB2YXIoLS1pbnB1dC1jb2xvcik7XG4gIC0tcGxhY2Vob2xkZXItb3BhY2l0eTogMTtcbn1cbmlvbi1jb250ZW50IC5wYWRkaW5nIHtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAvKnBvc2l0aW9uOiBhYnNvbHV0ZTsqL1xuICB0b3A6IDMyJTtcbn1cbmlvbi1jb250ZW50IC5udW1iZXItaW5wdXQge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3Itc2t5KTtcbiAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiA0cHggNHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAubnVtYmVyLWlucHV0IC5jb2RlLWRpdiB7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWlvbi1ib3JkZXItY29sb3IpO1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAubnVtYmVyLWRpdiB7XG4gIHBhZGRpbmctbGVmdDogOHB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAubnVtYmVyLWRpdiAuaW5wdXQtZGl2IHtcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XG59XG5pb24tY29udGVudCAubnVtYmVyLWlucHV0IC5udW1iZXItZGl2IC5pbnB1dC1kaXYgaW9uLWlucHV0IHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBmb250LWZhbWlseTogXCJQb3BwaW5zLU1lZGl1bVwiO1xuICAtLXBhZGRpbmctdG9wOiA5cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtN3B4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAuYnV0dG9uLWRpdiB7XG4gIHdpZHRoOiAyNXB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlci1pbnB1dCAuYnV0dG9uLWRpdiAuYnRuLWNsZWFyIHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDBweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xufVxuaW9uLWNvbnRlbnQgLm51bWJlciB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbn1cbmlvbi1jb250ZW50IGlucHV0W3R5cGU9ZmlsZV0ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIG9wYWNpdHk6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbmlvbi1jb250ZW50IC5maWwgZGl2IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDgwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGJhY2tncm91bmQ6IHVybCguLi8uLi8uLi9hc3NldHMvYXR0YWNoLnBuZykgbm8tcmVwZWF0IGxlZnQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMTUlO1xuICBtYXJnaW4tbGVmdDogMTZweDtcbn1cbmlvbi1jb250ZW50IGxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGhlaWdodDogMzRweDtcbiAgd2lkdGg6IDExMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCAjYmFiNmI2O1xufVxuaW9uLWNvbnRlbnQgZGl2LmRyYWdvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbmlvbi1jb250ZW50ICN1cGxvYWREb2MgLnRodW1uYW1pbENvbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5pb24tY29udGVudCAjdXBsb2FkRG9jIC50aHVtbmFtaWxDb250IGltZyB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDAgMDtcbiAgcGFkZGluZzogNXB4IDVweCAwIDA7XG59XG5pb24tY29udGVudCAjdXBsb2FkRG9jIC50aHVtbmFtaWxDb250IC5jcm9zc0J0biB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNHB4O1xuICB3aWR0aDogMTdweDtcbn1cbmlvbi1jb250ZW50ICN1cGxvYWREb2MgLmhlbHBUaXAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5pb24tY29udGVudCAjdXBsb2FkRG9jIC5lcXVhbEhNUldyYXAge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5pb24tY29udGVudCAjdXBsb2FkRG9jIC5lcVdyYXAge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuaW9uLWNvbnRlbnQgI3VwbG9hZERvYyAuZXF1YWxITVIge1xuICB3aWR0aDogMzMlO1xuICBtYXJnaW4tYm90dG9tOiAyJTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuaW9uLWNvbnRlbnQgI3VwbG9hZERvYyAuZXEge1xuICBwYWRkaW5nOiAwcHg7XG59XG5cbmlvbi1mb290ZXIgaW9uLXRvb2xiYXIgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbjogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XG4gIGhlaWdodDogNTJweDtcbiAgcGFkZGluZzogMHB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/edit-profile/edit-profile.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/edit-profile/edit-profile.page.ts ***!
  \*********************************************************/
/*! exports provided: EditProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePage", function() { return EditProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);








let EditProfilePage = class EditProfilePage {
    constructor(camera, sheetCtrl, api, util, menu) {
        this.camera = camera;
        this.sheetCtrl = sheetCtrl;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.headerImage = '';
        this.menu.enable(false);
    }
    ngOnInit() {
        const uid = sessionStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            console.log('my profile', data);
            this.profile = data;
            console.log(data);
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    // changeProfile(){
    //   this.util.startLoad();
    //   let data = {
    //     code:this.code,
    //     email:this.email,
    //     phone:this.phone,
    //     name:this.name
    //   }
    //   this.api.postDataWithToken('profile_edit',data).subscribe((success:any) => {
    //     if(success.success){');
    //       this.util.navCtrl.navigateForward('tabs/profile');
    //       this.util.setNewLogin(true);
    //       this.util.newLogin.next(true);
    //       this.util.setNewprofile(true);
    //       this.util.dismissLoader();
    //     }
    //   }, err =>{
    //     this.util.dismissLoader();
    //   })
    // }
    // back(){
    //   this.util.navCtrl.back();
    // }
    albumSheet() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            //       this.util.presentToast('profile has successfully changed
            const actionSheet = yield this.sheetCtrl.create({
                header: 'Albums',
                mode: 'ios',
                cssClass: 'image-picker',
                buttons: [{
                        text: 'Gallery',
                        icon: 'images-sharp',
                        handler: () => {
                            this.getGallery();
                        }
                    }, {
                        text: 'Camera',
                        icon: 'camera-sharp',
                        handler: () => {
                            this.getCamera();
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    getCamera() {
        const options = {
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true
        };
        this.camera.getPicture(options).then(file_uri => {
            this.image = "data:image/jpg;base64," + file_uri;
            this.imagePreview = file_uri;
            this.isImgChange = true;
            let data = {
                image: this.imagePreview
            };
            this.util.show();
            const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(this.image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    const uid = sessionStorage.getItem('uid');
                    const date = new Date();
                    const modifiedOn = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
                    const id = Math.floor(100000000 + Math.random() * 900000000);
                    this.profile.imagePath = url;
                    let param = {
                        modifiedOn: modifiedOn,
                        imagePath: url,
                    };
                    console.log(param);
                    this.api.updateProfile(uid, param).then((data) => {
                        console.log(data);
                        // this.ngOnInit();
                        this.util.showToast('Profile updated successfully', 'primary', 'bottom');
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
            });
        }, (err) => {
            this.util.hide();
            // });
        });
    }
    getGallery() {
        const options = {
            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        this.camera.getPicture(options).then(file_uri => {
            this.image = "data:image/jpg;base64," + file_uri;
            this.imagePreview = file_uri;
            this.isImgChange = true;
            let data = {
                image: this.imagePreview
            };
            this.util.show();
            const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(this.image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    const uid = sessionStorage.getItem('uid');
                    const date = new Date();
                    const modifiedOn = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
                    const id = Math.floor(100000000 + Math.random() * 900000000);
                    let param = {
                        modifiedOn: modifiedOn,
                        imagePath: url,
                    };
                    console.log(param);
                    this.api.updateProfile(uid, param).then((data) => {
                        console.log(data);
                        this.ngOnInit();
                        this.util.showToast('Profile updated successfully', 'primary', 'bottom');
                    }).catch(err => {
                        if (err) {
                            console.log(err);
                            this.util.showToast(`${err}`, 'danger', 'bottom');
                        }
                    });
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
            });
        }, (err) => {
            this.util.hide();
        });
    }
    changeProfile() {
        console.log(this.name);
        if (this.email == undefined) {
            this.email = " ";
        }
        if (this.name == undefined) {
            this.name = " ";
            console.log(this.name);
        }
        const uid = sessionStorage.getItem('uid');
        const date = new Date();
        const modifiedOn = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            modifiedOn: modifiedOn,
            uid: uid,
            name: this.name,
            phone: this.phone,
            email: this.email,
        };
        console.log(param);
        this.api.updateProfile(uid, param).then((data) => {
            console.log(data);
            this.util.showToast('Profile has updated successfully', 'primary', 'bottom');
            this.ngOnInit();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    handleFileSelect(evt) {
        this.util.show();
        var files = evt.target.files;
        var file = files[0];
        let fileName = file.name;
        const lastDot = fileName.lastIndexOf('.');
        // const file_name = fileName.substring(0, lastDot);
        const ext = fileName.substring(lastDot + 1);
        this.file_extension = ext;
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        const base64Image = 'data:image/jpeg;base64,' + this.base64textString;
        this.image = base64Image;
        const id = sessionStorage.getItem('uid') + '/' + this.util.makeid(10);
        firebase__WEBPACK_IMPORTED_MODULE_6__["storage"]().ref().child(sessionStorage.getItem('uid')).child(btoa(id) + '.jpg')
            .putString(base64Image, 'data_url').then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
                this.util.hide();
                console.log('url uploaded', url);
                const uid = sessionStorage.getItem('uid');
                const date = new Date();
                const modifiedOn = moment__WEBPACK_IMPORTED_MODULE_7__(date).format("YYYY-MM-DD hh:mm:ss A");
                const id = Math.floor(100000000 + Math.random() * 900000000);
                this.profile.imagePath = url;
                this.headerImage = url;
                let param = {
                    modifiedOn: modifiedOn,
                    imagePath: url,
                };
                console.log(param);
                this.api.updateProfile(uid, param).then((data) => {
                    console.log(data);
                    this.ngOnInit();
                    this.util.showToast('Profile updated successfully', 'primary', 'bottom');
                }).catch(err => {
                    if (err) {
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            });
        }, error => {
            this.util.hide();
            console.log(error);
        }).catch((error) => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] }
];
EditProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/edit-profile/edit-profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-profile.page.scss */ "./src/app/pages/edit-profile/edit-profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_5__["Camera"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ActionSheetController"], src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_3__["ApisService"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]])
], EditProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-edit-profile-edit-profile-module-es2015.js.map