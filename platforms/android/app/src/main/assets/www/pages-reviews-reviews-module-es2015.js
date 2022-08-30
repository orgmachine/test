(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reviews-reviews-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button mode=\"md\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Customer Reviews</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"ratings\">\n    <ion-item>\n      <ion-label>\n        <h2><b>Customer reviews</b></h2>\n        <div class=\"ratingDiv\">\n          <ionic5-star-rating #rating\n            activeIcon = \"star\"\n            defaultIcon = \"star-outline\"\n            activeColor = \"#439213\"\n            halfIcon = \"star-half\"\n            halfStar = \"true\" \n            defaultColor = \"black\"\n            readonly = \"true\"\n            [rating] = avg_rating\n            fontSize = \"14px\">\n          </ionic5-star-rating>\n          <p>  {{avg_rating}} out of 5</p>\n        </div>\n        <p>{{rating_count}} overall ratings</p>\n      </ion-label>\n    </ion-item>    \n  </div>\n  <div class=\"reviews\">\n    <h5><b>Top customers reviews</b></h5>\n    <div *ngFor=\"let item of allReviews | slice:0:3\" style=\"margin: 16px 0px\">\n      <div class=\"profile\">\n          <img [src] = \"item.imagePath\" *ngIf=\"item.imagePath != ''\">\n          <img src=\"assets/noProfile.jpg\" *ngIf=\"item.imagePath == ''\">\n          <p>{{item.name}}</p>\n      </div>\n      <ion-item>\n        <ion-label>\n          <ionic5-star-rating #rating\n            activeIcon = \"star\"\n            defaultIcon = \"star-outline\"\n            activeColor = \"#439213\"\n            halfIcon = \"star-half\"\n            halfStar = \"true\" \n            defaultColor = \"black\"\n            readonly = \"true\"\n            [rating] = item.rating\n            fontSize = \"12px\">\n          </ionic5-star-rating>\n          <p>Reviewed on {{item.createdAt | date}}</p>\n          <h3>{{item.title}}</h3>\n          <small>{{item.comment}}</small>\n        </ion-label>\n      </ion-item>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reviews/reviews-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/reviews/reviews-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ReviewsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageRoutingModule", function() { return ReviewsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reviews.page */ "./src/app/pages/reviews/reviews.page.ts");




const routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_3__["ReviewsPage"]
    }
];
let ReviewsPageRoutingModule = class ReviewsPageRoutingModule {
};
ReviewsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ReviewsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/reviews/reviews.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.module.ts ***!
  \*************************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./reviews-routing.module */ "./src/app/pages/reviews/reviews-routing.module.ts");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "./src/app/pages/reviews/reviews.page.ts");
/* harmony import */ var src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/directives/shared.module */ "./src/app/directives/shared.module.ts");
/* harmony import */ var ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-ionic-image-viewer */ "./node_modules/ngx-ionic-image-viewer/fesm2015/ngx-ionic-image-viewer.js");
/* harmony import */ var ionic5_star_rating__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ionic5-star-rating */ "./node_modules/ionic5-star-rating/fesm2015/ionic5-star-rating.js");












let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        entryComponents: [
            src_app_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _reviews_routing_module__WEBPACK_IMPORTED_MODULE_5__["ReviewsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"],
            src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"],
            ionic5_star_rating__WEBPACK_IMPORTED_MODULE_11__["StarRatingModule"],
            ngx_ionic_image_viewer__WEBPACK_IMPORTED_MODULE_10__["NgxIonicImageViewerModule"]
        ],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
    })
], ReviewsPageModule);



/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.scss":
/*!*************************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.scss ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-item {\n  --border-color: transparent;\n  --padding-left: 0px;\n  --inner-padding-end: 5px;\n}\n\n.ratings ion-item {\n  border-top: 1px solid #f5f5f5;\n  border-bottom: 1px solid #f5f5f5;\n}\n\n.ratings .ratingDiv {\n  display: -webkit-box;\n  display: flex;\n  margin: 10px 0px 5px;\n}\n\n.ratings .ratingDiv p {\n  margin-top: 0px;\n  font-size: 14px;\n  margin-left: 5px;\n}\n\n.reviews h5 {\n  padding-left: 16px;\n}\n\n.reviews p {\n  font-size: 10px;\n}\n\n.reviews small {\n  white-space: normal;\n}\n\n.reviews .profile {\n  display: -webkit-box;\n  display: flex;\n  margin: 0px 16px;\n}\n\n.reviews .profile img {\n  width: 40px;\n  height: 40px;\n  border-radius: 50px;\n}\n\n.reviews .profile p {\n  font-size: 12px;\n  margin: 12px;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmV2aWV3cy9EOlxccHJvamVjdFxcd2F5MmxhYlxcV2ViZmluYWwvc3JjXFxhcHBcXHBhZ2VzXFxyZXZpZXdzXFxyZXZpZXdzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQ0NKOztBREVJO0VBQ0ksNkJBQUE7RUFDQSxnQ0FBQTtBQ0NSOztBRENJO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esb0JBQUE7QUNDUjs7QURBUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUNFWjs7QURHSTtFQUNJLGtCQUFBO0FDQVI7O0FERUk7RUFDSSxlQUFBO0FDQVI7O0FERUk7RUFDSSxtQkFBQTtBQ0FSOztBREVJO0VBQ1Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZ0JBQUE7QUNBWjs7QURDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNDWjs7QURDUTtFQUNJLGVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Jldmlld3MvcmV2aWV3cy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24taXRlbSB7XG4gICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gICAgLS1pbm5lci1wYWRkaW5nLWVuZDogNXB4O1xufVxuLnJhdGluZ3Mge1xuICAgIGlvbi1pdGVtIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmNWY1ZjU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgIH1cbiAgICAucmF0aW5nRGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAxMHB4IDBweCA1cHg7XG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweFxuICAgICAgICB9XG4gICAgfVxufVxuLnJldmlld3Mge1xuICAgIGg1IHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OjE2cHg7XG4gICAgfVxuICAgIHAge1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgfVxuICAgIHNtYWxsIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICB9XG4gICAgLnByb2ZpbGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIG1hcmdpbjogMHB4IDE2cHg7XG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6NTBweDtcbiAgICAgICAgfVxuICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgICAgIG1hcmdpbjogMTJweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cbiAgICB9XG59IiwiaW9uLWl0ZW0ge1xuICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIC0tcGFkZGluZy1sZWZ0OiAwcHg7XG4gIC0taW5uZXItcGFkZGluZy1lbmQ6IDVweDtcbn1cblxuLnJhdGluZ3MgaW9uLWl0ZW0ge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2Y1ZjVmNTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmNWY1ZjU7XG59XG4ucmF0aW5ncyAucmF0aW5nRGl2IHtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAxMHB4IDBweCA1cHg7XG59XG4ucmF0aW5ncyAucmF0aW5nRGl2IHAge1xuICBtYXJnaW4tdG9wOiAwcHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLnJldmlld3MgaDUge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG59XG4ucmV2aWV3cyBwIHtcbiAgZm9udC1zaXplOiAxMHB4O1xufVxuLnJldmlld3Mgc21hbGwge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuLnJldmlld3MgLnByb2ZpbGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDBweCAxNnB4O1xufVxuLnJldmlld3MgLnByb2ZpbGUgaW1nIHtcbiAgd2lkdGg6IDQwcHg7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcbn1cbi5yZXZpZXdzIC5wcm9maWxlIHAge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/reviews/reviews.page.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/reviews/reviews.page.ts ***!
  \***********************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/apis.service */ "./src/app/services/apis.service.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "./node_modules/@ionic-native/date-picker/ngx/index.js");








let ReviewsPage = class ReviewsPage {
    constructor(route, api, util, navCtrl, alertController, router, datePicker, modalController) {
        this.route = route;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertController = alertController;
        this.router = router;
        this.datePicker = datePicker;
        this.modalController = modalController;
        this.rating = 0;
        this.allReviews = [];
        this.route.queryParams.subscribe(data => {
            this.allReviews = JSON.parse(data.value);
            console.log(this.allReviews);
            this.product_id = data.productid;
            console.log(this.product_id);
            this.getProductById(this.product_id);
        });
    }
    getProductById(id) {
        console.log(id);
        // this.api.getProductDetails(id).then((data) => {
        //   this.product_detail = data[0];
        //     this.star_rating = this.product_detail.star_rating;
        //     this.rating_count = this.product_detail.rating_count;
        //     this.avg_rating = parseFloat(this.product_detail.avg_rating).toFixed(1);
        //     console.log(this.avg_rating)
        //     this.rating = this.star_rating / this.rating_count;
        //     console.log(this.rating);
        // }).catch(err => {
        //   if (err) {
        //     console.log(err);
        //     this.util.showToast(`${err}`, 'danger', 'bottom');
        //   }
        // });  
    }
};
ReviewsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] }
];
ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./reviews.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reviews/reviews.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./reviews.page.scss */ "./src/app/pages/reviews/reviews.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_4__["ApisService"],
        src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_6__["DatePicker"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"]])
], ReviewsPage);



/***/ })

}]);
//# sourceMappingURL=pages-reviews-reviews-module-es2015.js.map