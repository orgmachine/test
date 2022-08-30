(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-team-team-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<ion-content>\n  <!--  -->\n  <!--  -->\n  <!--  -->\n  <!-- profile__image profile-header profile-->\n  <div class=\"container\">\n    <div class=\"row\">\n      <!-- Profile widget -->\n      <div class=\"team-member bg-white shadow rounded overflow-hidden\">\n        <div class=\"row-card\">\n          <div class=\"row-card__image-container\">\n            <img\n              class=\"row-card__image\"\n              [src]=\"team_member?.image\"\n              alt=\"team_member?.name\"\n            />\n          </div>\n          <h3 class=\"h3 my-2\">{{team_member?.name}}</h3>\n\n          <span class=\"team-member__designation\"\n            >{{team_member?.designation}}</span\n          >\n\n          <div class=\"socialfoot my-4\">\n            <a [href]=\"team_member?.facebook\" target=\"_blank\"\n              ><ion-icon name=\"logo-facebook\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"team_member?.twitter\" target=\"_blank\"\n              ><ion-icon name=\"logo-twitter\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"team_member?.linkedin\" target=\"_blank\"\n              ><ion-icon name=\"logo-linkedin\" color=\"primary\"></ion-icon\n            ></a>\n            <a [href]=\"team_member?.instagram\" target=\"_blank\"\n              ><ion-icon name=\"logo-instagram\" color=\"primary\"></ion-icon\n            ></a>\n          </div>\n        </div>\n\n        <div class=\"py-2\">\n          \n\t\t  <div class=\"row\">\n\t <div class=\"col-md-12 col-lg-12 col-xl-12\">\n\t\t<h3 style=\"margin:10px 0px 20px 0;display: inline-block;border-bottom: 2px solid #ea5b24;\">About Us</h3>\n\t\t</div>\t\n\t</div>\n\t\t  \n\t\t  \n          <div class=\"content-container p-4 bg-light rounded shadow-sm text-justify\">\n            <p class=\"mb-0\" [innerHtml]=\"team_member?.description\"></p>\n          </div>\n        </div>\n\n        <!-- <div class=\"px-4 pt-0 pb-4\">\n          <div class=\"\">\n            <div class=\"\">\n              <img alt=\"...\"  class=\"\" />\n            </div>\n            <div class=\"media-body mb-5\">\n              <h4 style=\"font-size: 1.8rem\" class=\"mt-0 mb-0\"></h4>\n              \n            </div>\n          </div>\n        </div> -->\n\n        <!-- <div class=\"bg-light p-4 my-4 d-flex align-items-center text-center\"> -->\n\n        <!-- <ul class=\"list-inline mb-0\">\n              <li class=\"list-inline-item\">\n                <h5 class=\"font-weight-bold mb-0 d-block\">241</h5>\n                <small class=\"text-muted\">\n                  <i class=\"fa fa-picture-o mr-1\"></i>Photos</small\n                >\n              </li>\n              <li class=\"list-inline-item\">\n                <h5 class=\"font-weight-bold mb-0 d-block\">84K</h5>\n                <small class=\"text-muted\">\n                  <i class=\"fa fa-user-circle-o mr-1\"></i>Followers</small\n                >\n              </li>\n            </ul> -->\n        <!-- </div> -->\n\n        <!-- End profile widget -->\n      </div>\n    </div>\n  </div>\n  <app-footer></app-footer>\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/team/team-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/team/team-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TeamPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageRoutingModule", function() { return TeamPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/team.page.ts");




const routes = [
    {
        path: '',
        component: _team_page__WEBPACK_IMPORTED_MODULE_3__["TeamPage"]
    }
];
let TeamPageRoutingModule = class TeamPageRoutingModule {
};
TeamPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TeamPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/team/team.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/team/team.module.ts ***!
  \*******************************************/
/*! exports provided: TeamPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPageModule", function() { return TeamPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _team_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./team-routing.module */ "./src/app/pages/team/team-routing.module.ts");
/* harmony import */ var _team_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./team.page */ "./src/app/pages/team/team.page.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");









let TeamPageModule = class TeamPageModule {
};
TeamPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _team_routing_module__WEBPACK_IMPORTED_MODULE_5__["TeamPageRoutingModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"]
        ],
        declarations: [_team_page__WEBPACK_IMPORTED_MODULE_6__["TeamPage"]]
    })
], TeamPageModule);



/***/ }),

/***/ "./src/app/pages/team/team.page.scss":
/*!*******************************************!*\
  !*** ./src/app/pages/team/team.page.scss ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content p {\n  font-size: 13px;\n  color: var(--input-color);\n  margin-bottom: 23px;\n}\nion-content .main-heading {\n  color: #fff;\n  font-size: 32px;\n  background-color: var(--ion-color-secondary);\n  padding: 20px;\n  margin: 10px 0 0 0;\n  display: inline-block;\n  display: block;\n}\n.row-card {\n  max-height: 600px;\n  height: 500px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;\n  max-width: 420px;\n  float: right;\n  margin: 20px 50px;\n  padding: 20px 28px;\n  background-color: var(--ion-color-secondary-contrast);\n  border-radius: 20px;\n}\n.row-card--low-margin {\n  margin: 10px 40px;\n}\n.row-card__image {\n  margin: 1.2rem;\n  -webkit-filter: drop-shadow(0 6px 10px #000);\n          filter: drop-shadow(0 6px 10px #000);\n  max-width: 290px;\n  width: 210px;\n  -webkit-clip-path: circle(50% at 50% 50%);\n          clip-path: circle(50% at 50% 50%);\n}\n.row-card--clickable {\n  cursor: pointer;\n  -webkit-transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n}\n.row-card--clickable:hover {\n  -webkit-transform: translateY(-8px);\n          transform: translateY(-8px);\n}\n@media only screen and (max-device-width: 480px) {\n  .row-card {\n    /* styles for mobile browsers smaller than 480px; (iPhone) */\n    margin: 20px 10px;\n  }\n}\n@media only screen and (device-width: 768px) {\n  .row-card {\n    /* default iPad screens */\n    margin: 20px 10px;\n  }\n}\n.team-member {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n}\n@media only screen and (max-device-width: 480px) {\n  .team-member {\n    /* styles for mobile browsers smaller than 480px; (iPhone) */\n    margin: 20px 10px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n@media only screen and (device-width: 768px) {\n  .team-member {\n    /* default iPad screens */\n    margin: 20px 10px;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n  }\n}\n.team-member__designation {\n  border-bottom: 2px solid var(--ion-color-primary);\n  padding-bottom: 12px;\n  font-size: 17px;\n  color: #8b8888;\n}\n.socialfoot ion-icon {\n  font-size: 18px;\n  margin: 0px 5px;\n}\n.content-container {\n  border-radius: 18px;\n}\n.content-container p {\n  line-height: 2rem;\n  font-size: 1.2rem;\n}\n.h3 {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvdGVhbS9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFx0ZWFtXFx0ZWFtLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvdGVhbS90ZWFtLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDRTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FDQUo7QURFRTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7QUNBRjtBREtBO0VBQ0UsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxpREFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxREFBQTtFQUNBLG1CQUFBO0FDRkY7QURPRTtFQUNFLGlCQUFBO0FDTEo7QURRRTtFQUNFLGNBQUE7RUFDQSw0Q0FBQTtVQUFBLG9DQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUNBQUE7VUFBQSxpQ0FBQTtBQ05KO0FEU0U7RUFDRSxlQUFBO0VBQ0Esb0VBQUE7RUFBQSw0REFBQTtBQ1BKO0FEUUk7RUFDRSxtQ0FBQTtVQUFBLDJCQUFBO0FDTk47QURVRTtFQXRDRjtJQXVDSSw0REFBQTtJQUNBLGlCQUFBO0VDUEY7QUFDRjtBRFFFO0VBMUNGO0lBMkNJLHlCQUFBO0lBQ0EsaUJBQUE7RUNMRjtBQUNGO0FEUUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0FDTEY7QURPRTtFQUxGO0lBTUksNERBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0pGO0FBQ0Y7QURLRTtFQVZGO0lBV0kseUJBQUE7SUFDQSxpQkFBQTtJQUNBLDRCQUFBO0lBQUEsNkJBQUE7WUFBQSxzQkFBQTtFQ0ZGO0FBQ0Y7QURJRTtFQUNFLGlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQ0ZKO0FET0U7RUFBVSxlQUFBO0VBQ1osZUFBQTtBQ0hBO0FET0E7RUFDRSxtQkFBQTtBQ0pGO0FETUU7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0FDSko7QURPQTtFQUNFLGtCQUFBO0FDSkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy90ZWFtL3RlYW0ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIzcHg7XHJcbiAgfVxyXG4gIC5tYWluLWhlYWRpbmcge1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMzJweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIG1hcmdpbjogMTBweCAwIDAgMDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxufVxyXG5cclxuXHJcbi5yb3ctY2FyZCB7XHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgaGVpZ2h0OiA1MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3gtc2hhZG93OiByZ2JhKDE0OSwgMTU3LCAxNjUsIDAuMikgMHB4IDhweCAyNHB4O1xyXG4gIG1heC13aWR0aDogNDIwcHg7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIG1hcmdpbjogMjBweCA1MHB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjhweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5LWNvbnRyYXN0KTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG5cclxuICAmX19pbWFnZS1jb250YWluZXIge1xyXG4gIH1cclxuXHJcbiAgJi0tbG93LW1hcmdpbiB7XHJcbiAgICBtYXJnaW46IDEwcHggNDBweDtcclxuICB9XHJcblxyXG4gICZfX2ltYWdlIHtcclxuICAgIG1hcmdpbjogMS4ycmVtO1xyXG4gICAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDZweCAxMHB4ICMwMDApO1xyXG4gICAgbWF4LXdpZHRoOiAyOTBweDtcclxuICAgIHdpZHRoOiAyMTBweDtcclxuICAgIGNsaXAtcGF0aDogY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtcclxuICB9XHJcblxyXG4gICYtLWNsaWNrYWJsZSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC04cHgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIHN0eWxlcyBmb3IgbW9iaWxlIGJyb3dzZXJzIHNtYWxsZXIgdGhhbiA0ODBweDsgKGlQaG9uZSkgKi9cclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDc2OHB4KSB7XHJcbiAgICAvKiBkZWZhdWx0IGlQYWQgc2NyZWVucyAqL1xyXG4gICAgbWFyZ2luOiAyMHB4IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4udGVhbS1tZW1iZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LWRldmljZS13aWR0aDogNDgwcHgpIHtcclxuICAgIC8qIHN0eWxlcyBmb3IgbW9iaWxlIGJyb3dzZXJzIHNtYWxsZXIgdGhhbiA0ODBweDsgKGlQaG9uZSkgKi9cclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoZGV2aWNlLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLyogZGVmYXVsdCBpUGFkIHNjcmVlbnMgKi9cclxuICAgIG1hcmdpbjogMjBweCAxMHB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcblxyXG4gICZfX2Rlc2lnbmF0aW9uIHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTJweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGNvbG9yOiByZ2IoMTM5LCAxMzYsIDEzNik7XHJcbiAgfVxyXG59XHJcblxyXG4uc29jaWFsZm9vdCB7XHJcbiAgaW9uLWljb24ge2ZvbnQtc2l6ZTogMThweDtcclxubWFyZ2luOiAwcHggNXB4O1xyXG4gIH1cclxufVxyXG5cclxuLmNvbnRlbnQtY29udGFpbmVyIHtcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG5cclxuICBwIHtcclxuICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgfVxyXG59XHJcbi5oMyB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59IiwiaW9uLWNvbnRlbnQgcCB7XG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgY29sb3I6IHZhcigtLWlucHV0LWNvbG9yKTtcbiAgbWFyZ2luLWJvdHRvbTogMjNweDtcbn1cbmlvbi1jb250ZW50IC5tYWluLWhlYWRpbmcge1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC1zaXplOiAzMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3Itc2Vjb25kYXJ5KTtcbiAgcGFkZGluZzogMjBweDtcbiAgbWFyZ2luOiAxMHB4IDAgMCAwO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ucm93LWNhcmQge1xuICBtYXgtaGVpZ2h0OiA2MDBweDtcbiAgaGVpZ2h0OiA1MDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJveC1zaGFkb3c6IHJnYmEoMTQ5LCAxNTcsIDE2NSwgMC4yKSAwcHggOHB4IDI0cHg7XG4gIG1heC13aWR0aDogNDIwcHg7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luOiAyMHB4IDUwcHg7XG4gIHBhZGRpbmc6IDIwcHggMjhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeS1jb250cmFzdCk7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59XG4ucm93LWNhcmQtLWxvdy1tYXJnaW4ge1xuICBtYXJnaW46IDEwcHggNDBweDtcbn1cbi5yb3ctY2FyZF9faW1hZ2Uge1xuICBtYXJnaW46IDEuMnJlbTtcbiAgZmlsdGVyOiBkcm9wLXNoYWRvdygwIDZweCAxMHB4ICMwMDApO1xuICBtYXgtd2lkdGg6IDI5MHB4O1xuICB3aWR0aDogMjEwcHg7XG4gIGNsaXAtcGF0aDogY2lyY2xlKDUwJSBhdCA1MCUgNTAlKTtcbn1cbi5yb3ctY2FyZC0tY2xpY2thYmxlIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC41cyBjdWJpYy1iZXppZXIoMC4xNzUsIDAuODg1LCAwLjMyLCAxLjI3NSk7XG59XG4ucm93LWNhcmQtLWNsaWNrYWJsZTpob3ZlciB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtOHB4KTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC5yb3ctY2FyZCB7XG4gICAgLyogc3R5bGVzIGZvciBtb2JpbGUgYnJvd3NlcnMgc21hbGxlciB0aGFuIDQ4MHB4OyAoaVBob25lKSAqL1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChkZXZpY2Utd2lkdGg6IDc2OHB4KSB7XG4gIC5yb3ctY2FyZCB7XG4gICAgLyogZGVmYXVsdCBpUGFkIHNjcmVlbnMgKi9cbiAgICBtYXJnaW46IDIwcHggMTBweDtcbiAgfVxufVxuXG4udGVhbS1tZW1iZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1kZXZpY2Utd2lkdGg6IDQ4MHB4KSB7XG4gIC50ZWFtLW1lbWJlciB7XG4gICAgLyogc3R5bGVzIGZvciBtb2JpbGUgYnJvd3NlcnMgc21hbGxlciB0aGFuIDQ4MHB4OyAoaVBob25lKSAqL1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKGRldmljZS13aWR0aDogNzY4cHgpIHtcbiAgLnRlYW0tbWVtYmVyIHtcbiAgICAvKiBkZWZhdWx0IGlQYWQgc2NyZWVucyAqL1xuICAgIG1hcmdpbjogMjBweCAxMHB4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi50ZWFtLW1lbWJlcl9fZGVzaWduYXRpb24ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBjb2xvcjogIzhiODg4ODtcbn1cblxuLnNvY2lhbGZvb3QgaW9uLWljb24ge1xuICBmb250LXNpemU6IDE4cHg7XG4gIG1hcmdpbjogMHB4IDVweDtcbn1cblxuLmNvbnRlbnQtY29udGFpbmVyIHtcbiAgYm9yZGVyLXJhZGl1czogMThweDtcbn1cbi5jb250ZW50LWNvbnRhaW5lciBwIHtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG4uaDMge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/team/team.page.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/team/team.page.ts ***!
  \*****************************************/
/*! exports provided: TeamPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamPage", function() { return TeamPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");





let TeamPage = class TeamPage {
    constructor(route, router, alertCtrl, menu, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.api = api;
        let id = sessionStorage.getItem('memberid');
        this.api.getTeamMemberById(id).then(data => {
            this.team_member = data[0];
            console.log(this.team_member);
        }).catch(error => {
            console.log(error);
        });
    }
};
TeamPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] }
];
TeamPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./team.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/team/team.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./team.page.scss */ "./src/app/pages/team/team.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"]])
], TeamPage);



/***/ })

}]);
//# sourceMappingURL=pages-team-team-module-es2015.js.map