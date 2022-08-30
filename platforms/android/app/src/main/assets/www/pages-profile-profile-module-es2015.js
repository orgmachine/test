(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<ion-content>\n<div class=\"container\">\n<div class=\"row\">\n    <div class=\"col-md-12 col-lg-7 col-xl-7\">\n        <ion-item button [routerLink]=\"['/bookings']\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"list-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>My Lab Test <br> <small>View all your recent lab test</small></ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n        <ion-item button [routerLink]=\"['/members']\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"person-add-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>My Patients <br> <small>View all your patients you have added</small></ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n        <ion-item button [routerLink]=\"['/manage-address']\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"location-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>Manage Address <br> <small>You can add, edit and delete your address</small></ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n        <ion-item button [routerLink]=\"['/my-wallet']\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"wallet-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>My Wallet<br> <small>You can check you wallet amount and transactions</small></ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n        <ion-item button [routerLink]=\"['/my-transaction']\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"card-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>My Transactions <br> <small>View all your recent transactions</small></ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n        <ion-item button  (click)=\"logout()\">\n            <ion-thumbnail slot=\"start\">\n                <ion-icon name=\"log-out-outline\" color=\"secondary\"></ion-icon>\n            </ion-thumbnail>\n            <ion-label>Logout </ion-label>\n            <ion-thumbnail slot=\"end\" class=\"last\">\n                <ion-icon name=\"chevron-forward-outline\"></ion-icon>\n            </ion-thumbnail>\n        </ion-item>\n    </div>\n    <div class=\"col-md-12 col-lg-5 col-xl-5\">\n        <div class=\"profileItem\">\n            <div style=\"display: block;width: 100%;margin: 0 auto;text-align: center;\">\n               <img class=\"profile\" src=\"{{profile?.imagePath}}\" *ngIf = \"profile?.imagePath != ''\">\n               <img class=\"profile\" src=\"assets/noProfile.jpg\" *ngIf = \"profile?.imagePath == ''\">\n            </div>\n            <div>\n                <p class=\"name\">{{profile?.name}}</p>\n                <p class=\"email\">{{profile?.email}}</p> \n                <p class=\"email\">{{profile?.code}} {{profile?.phone}}</p>\n                <ion-icon name=\"create-outline\" (click)=\"profilego()\" slot=\"end\" style=\"font-size: xx-large;\"></ion-icon>\n            </div>\n        </div>\n    </div>\n</div>\n</div>\n\t<app-footer></app-footer>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/profile/profile-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/profile/profile-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ProfilePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageRoutingModule", function() { return ProfilePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");




const routes = [
    {
        path: '',
        component: _profile_page__WEBPACK_IMPORTED_MODULE_3__["ProfilePage"]
    }
];
let ProfilePageRoutingModule = class ProfilePageRoutingModule {
};
ProfilePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfilePageRoutingModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.module.ts ***!
  \*************************************************/
/*! exports provided: ProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePageModule", function() { return ProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/pages/profile/profile-routing.module.ts");
/* harmony import */ var _profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let ProfilePageModule = class ProfilePageModule {
};
ProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfilePageRoutingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_7__["NgxIonicImageViewerModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_profile_page__WEBPACK_IMPORTED_MODULE_6__["ProfilePage"]]
    })
], ProfilePageModule);



/***/ }),

/***/ "./src/app/pages/profile/profile.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/profile/profile.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-thumbnail {\n  width: 35px;\n  height: 17px;\n  margin-left: 16px;\n}\nion-content .picker {\n  position: absolute;\n  margin-top: 74px;\n  margin-left: -34px;\n}\nion-content .name {\n  font-size: 17px;\n  margin-top: 5px;\n  margin-bottom: 4px;\n}\nion-content .email {\n  margin: 0px;\n  font-size: 12px;\n}\nion-content .email ion-icon {\n  font-size: 6px;\n  padding-left: 17px;\n  padding-right: 17px;\n}\nion-content .email span {\n  color: var(--blue-color);\n}\nion-content ion-item h3 {\n  font-size: 15px;\n  color: black;\n}\nion-content ion-item h2 {\n  color: red;\n  font-size: 15px;\n}\nion-content .profile {\n  border-radius: 100px;\n  width: 200px;\n  height: 200px;\n}\n.profileItem {\n  width: 100%;\n  text-align: center;\n  background: #fafeff;\n  padding: 5%;\n}\nion-item {\n  --border-color: transparent;\n  --padding-left: 0px;\n  --inner-padding-end: 5px;\n  border: 1px solid #f5f5f5;\n  border-radius: 5px;\n  width: 92%;\n  --padding-start:5px;\n  margin: 10px auto;\n}\nion-item small {\n  white-space: normal;\n}\nion-item p {\n  font-size: 14px;\n  margin-top: 16px;\n}\nion-item ion-icon {\n  font-size: larger;\n  margin-right: 10px;\n  margin-top: 0px;\n}\nion-item .last {\n  text-align: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxwcm9maWxlXFxwcm9maWxlLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcHJvZmlsZS9wcm9maWxlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FDQVI7QURFSTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUNBUjtBREVJO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUNBUjtBRENRO0VBQ0ksY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUNDWjtBRENRO0VBQ0ksd0JBQUE7QUNDWjtBREdRO0VBQ0ksZUFBQTtFQUNBLFlBQUE7QUNEWjtBREdRO0VBQ0ksVUFBQTtFQUNBLGVBQUE7QUNEWjtBRElJO0VBQ0ksb0JBQUE7RUFDTixZQUFBO0VBQ0EsYUFBQTtBQ0ZGO0FES0E7RUFDSSxXQUFBO0VBQVcsa0JBQUE7RUFDWCxtQkFBQTtFQUFxQixXQUFBO0FDQXpCO0FER0k7RUFDSSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esd0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNBUjtBRENJO0VBQ0ksbUJBQUE7QUNDUjtBRENJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDQ1I7QURDSTtFQUNJLGlCQUFBO0FDQ1IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wcm9maWxlL3Byb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gICAgaW9uLXRodW1ibmFpbHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBoZWlnaHQ6IDE3cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAucGlja2VyIHtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogNzRweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogLTM0cHg7XHJcbiAgICB9XHJcbiAgICAubmFtZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbiAgICB9XHJcbiAgICAuZW1haWwge1xyXG4gICAgICAgIG1hcmdpbjogMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBpb24taWNvbiB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogNnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE3cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE3cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tYmx1ZS1jb2xvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW9uLWl0ZW0ge1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5wcm9maWxlIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuXHRcdHdpZHRoOiAyMDBweDtcclxuXHRcdGhlaWdodDogMjAwcHg7XHJcbiAgICB9XHJcbn1cclxuLnByb2ZpbGVJdGVtIHtcclxuICAgIHdpZHRoOjEwMCU7dGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmVmZjsgcGFkZGluZzogNSU7XHJcbn1cclxuXHJcbiAgICBpb24taXRlbSB7XHJcbiAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgIC0tcGFkZGluZy1sZWZ0OiAwcHg7XHJcbiAgICAgICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIHdpZHRoOiA5MiU7XHJcbiAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OjVweDtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIHNtYWxse1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcclxuICAgIH1cclxuICAgIGlvbi1pY29uIHtcclxuICAgICAgICBmb250LXNpemU6IGxhcmdlcjtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgfVxyXG4gICAgLmxhc3Qge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgfVxyXG59IiwiaW9uLWNvbnRlbnQgaW9uLXRodW1ibmFpbCB7XG4gIHdpZHRoOiAzNXB4O1xuICBoZWlnaHQ6IDE3cHg7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xufVxuaW9uLWNvbnRlbnQgLnBpY2tlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbWFyZ2luLXRvcDogNzRweDtcbiAgbWFyZ2luLWxlZnQ6IC0zNHB4O1xufVxuaW9uLWNvbnRlbnQgLm5hbWUge1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xufVxuaW9uLWNvbnRlbnQgLmVtYWlsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cbmlvbi1jb250ZW50IC5lbWFpbCBpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogNnB4O1xuICBwYWRkaW5nLWxlZnQ6IDE3cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDE3cHg7XG59XG5pb24tY29udGVudCAuZW1haWwgc3BhbiB7XG4gIGNvbG9yOiB2YXIoLS1ibHVlLWNvbG9yKTtcbn1cbmlvbi1jb250ZW50IGlvbi1pdGVtIGgzIHtcbiAgZm9udC1zaXplOiAxNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5pb24tY29udGVudCBpb24taXRlbSBoMiB7XG4gIGNvbG9yOiByZWQ7XG4gIGZvbnQtc2l6ZTogMTVweDtcbn1cbmlvbi1jb250ZW50IC5wcm9maWxlIHtcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuLnByb2ZpbGVJdGVtIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYmFja2dyb3VuZDogI2ZhZmVmZjtcbiAgcGFkZGluZzogNSU7XG59XG5cbmlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAtLXBhZGRpbmctbGVmdDogMHB4O1xuICAtLWlubmVyLXBhZGRpbmctZW5kOiA1cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmNWY1ZjU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDkyJTtcbiAgLS1wYWRkaW5nLXN0YXJ0OjVweDtcbiAgbWFyZ2luOiAxMHB4IGF1dG87XG59XG5pb24taXRlbSBzbWFsbCB7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG59XG5pb24taXRlbSBwIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tdG9wOiAxNnB4O1xufVxuaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IGxhcmdlcjtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5pb24taXRlbSAubGFzdCB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/profile/profile.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/profile/profile.page.ts ***!
  \***********************************************/
/*! exports provided: ProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfilePage", function() { return ProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let ProfilePage = class ProfilePage {
    constructor(camera, sheetCtrl, api, util, router, modalController, menu) {
        this.camera = camera;
        this.sheetCtrl = sheetCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.modalController = modalController;
        this.menu = menu;
        this.image = "../../../assets/image/Ellipse 14.png";
        this.util.publishCityList('cities');
        // this.menu.enable(false);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        const uid = sessionStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then((data) => {
            this.profile = data;
            console.log(this.profile);
            this.imageUrl = this.profile.imagePath;
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    openViewer() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_4__["ViewerModalComponent"],
                componentProps: {
                    src: this.profile.imagePath + this.profile.image,
                },
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    profilego() {
        this.router.navigate(['edit-profile']);
    }
    logout() {
        this.api.logout().then((data) => {
            sessionStorage.setItem('loginStatus', "false");
            this.api.isSignedIn = false;
            sessionStorage.setItem('uid', '');
            localStorage.setItem('cartdata', JSON.stringify({}));
            this.router.navigate(['home']);
        }).catch(error => {
            console.log(error);
        });
    }
};
ProfilePage.ctorParameters = () => [
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-profile",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/profile/profile.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.page.scss */ "./src/app/pages/profile/profile.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_2__["Camera"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_5__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], ProfilePage);



/***/ })

}]);
//# sourceMappingURL=pages-profile-profile-module-es2015.js.map