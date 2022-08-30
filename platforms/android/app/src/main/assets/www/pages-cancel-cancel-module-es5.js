function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-cancel-cancel-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel/cancel.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel/cancel.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesCancelCancelPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<ion-content>\n  <div class=\"cnt\">\n    <p><b>Why are you cancelling this?</b></p>\n    <ion-card>\n      <div *ngFor=\"let item of reasons;let i=index;\">\n        <ion-card-content style=\"padding: 0px;\">\n          <ion-radio-group [(ngModel)]=\"reason\" [ngModelOptions]=\"{standalone: true}\" (ionChange)=\"select(reason,item.reason)\">\n          <ion-item>\n            <ion-label>{{item.reason}}</ion-label>\n            <ion-radio slot=\"start\" value={{item.id}}></ion-radio>\n          </ion-item>\n          </ion-radio-group>\n        </ion-card-content>\n      </div>\n    </ion-card>\n    <p><b>Comments (optional)</b></p>\n    <ion-textarea class=\"textarea\" rows=\"6\" cols=\"20\" placeholder=\"Describe what's wrong with the order\" auto-grow=\"true\" [(ngModel)]=\"comment\">\n    </ion-textarea>\n      <ion-button (click)=\"submit()\" expand=\"block\" [disabled]=\"!isEnabled\">\n        Submit\n    </ion-button>\n  </div>\n   <app-footer></app-footer>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/cancel/cancel-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/pages/cancel/cancel-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CancelPageRoutingModule */

  /***/
  function srcAppPagesCancelCancelRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelPageRoutingModule", function () {
      return CancelPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _cancel_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cancel.page */
    "./src/app/pages/cancel/cancel.page.ts");

    var routes = [{
      path: '',
      component: _cancel_page__WEBPACK_IMPORTED_MODULE_3__["CancelPage"]
    }];

    var CancelPageRoutingModule = function CancelPageRoutingModule() {
      _classCallCheck(this, CancelPageRoutingModule);
    };

    CancelPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CancelPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/cancel/cancel.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/cancel/cancel.module.ts ***!
    \***********************************************/

  /*! exports provided: CancelPageModule */

  /***/
  function srcAppPagesCancelCancelModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelPageModule", function () {
      return CancelPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./cancel-routing.module */
    "./src/app/pages/cancel/cancel-routing.module.ts");
    /* harmony import */


    var _cancel_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./cancel.page */
    "./src/app/pages/cancel/cancel.page.ts");
    /* harmony import */


    var src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/directives/shared.module */
    "./src/app/directives/shared.module.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");

    var CancelPageModule = function CancelPageModule() {
      _classCallCheck(this, CancelPageModule);
    };

    CancelPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_8__["ComponentsModule"], _cancel_routing_module__WEBPACK_IMPORTED_MODULE_5__["CancelPageRoutingModule"], src_app_directives_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]],
      declarations: [_cancel_page__WEBPACK_IMPORTED_MODULE_6__["CancelPage"]]
    })], CancelPageModule);
    /***/
  },

  /***/
  "./src/app/pages/cancel/cancel.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/pages/cancel/cancel.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesCancelCancelPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-content {\n  --background: #f5f5f5;\n}\nion-content .cnt {\n  padding: 32px 30%;\n}\nion-content ion-card {\n  border-radius: 0px;\n  margin: 12px 1px;\n}\nion-content ion-card ion-item {\n  --border-color: transparent;\n}\nion-content ion-card .item .sc-ion-label-md-h {\n  text-overflow: unset;\n  font-size: 14px;\n}\nion-content ion-card ion-radio {\n  margin: 10px 10px 10px 0px;\n}\nion-content .textarea {\n  border: 1px solid #e6e6e6;\n  border-radius: 5px !important;\n  font-size: 14px;\n  margin-top: 0px;\n  color: #000;\n  background: white;\n  margin-bottom: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2FuY2VsL0Q6XFxwcm9qZWN0XFx3YXkybGFiXFxXZWJmaW5hbC9zcmNcXGFwcFxccGFnZXNcXGNhbmNlbFxcY2FuY2VsLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2FuY2VsL2NhbmNlbC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0FDRVI7QURESTtFQUNJLDJCQUFBO0FDR1I7QURESTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtBQ0dSO0FEREk7RUFDSSwwQkFBQTtBQ0dSO0FEQUk7RUFDRyx5QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ0VQIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY2FuY2VsL2NhbmNlbC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcbiAgICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG4gICAgLmNudHtcbiAgICAgICAgcGFkZGluZzogMzJweCAzMCU7XG4gICAgfVxuICAgIGlvbi1jYXJkIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICBtYXJnaW46IDEycHggMXB4OyAgXG4gICAgaW9uLWl0ZW0ge1xuICAgICAgICAtLWJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuICAgIC5pdGVtIC5zYy1pb24tbGFiZWwtbWQtaCB7XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuICAgIGlvbi1yYWRpbyB7XG4gICAgICAgIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xuICAgIH1cbiAgICB9XG4gICAgLnRleHRhcmVhIHtcbiAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTZlNmU2O1xuICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xuICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICAgY29sb3I6IzAwMDtcbiAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIH0gXG59IiwiaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6ICNmNWY1ZjU7XG59XG5pb24tY29udGVudCAuY250IHtcbiAgcGFkZGluZzogMzJweCAzMCU7XG59XG5pb24tY29udGVudCBpb24tY2FyZCB7XG4gIGJvcmRlci1yYWRpdXM6IDBweDtcbiAgbWFyZ2luOiAxMnB4IDFweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1pdGVtIHtcbiAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xufVxuaW9uLWNvbnRlbnQgaW9uLWNhcmQgLml0ZW0gLnNjLWlvbi1sYWJlbC1tZC1oIHtcbiAgdGV4dC1vdmVyZmxvdzogdW5zZXQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbmlvbi1jb250ZW50IGlvbi1jYXJkIGlvbi1yYWRpbyB7XG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggMHB4O1xufVxuaW9uLWNvbnRlbnQgLnRleHRhcmVhIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2U2ZTZlNjtcbiAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLXRvcDogMHB4O1xuICBjb2xvcjogIzAwMDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/cancel/cancel.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/cancel/cancel.page.ts ***!
    \*********************************************/

  /*! exports provided: CancelPage */

  /***/
  function srcAppPagesCancelCancelPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CancelPage", function () {
      return CancelPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var CancelPage =
    /*#__PURE__*/
    function () {
      function CancelPage(api, router, util, navCtrl, alertCtrl, route) {
        _classCallCheck(this, CancelPage);

        this.api = api;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.route = route;
        this.reasons = [];
        this.comment = '';
        this.isEnabled = false;
        this.phone = '';
        this.name = '';
        this.email = '';
        this.token = '';
        this.coupon_code = '';
        this.used_coupon = 0;
        this.discount_amount = 0;
        this.wallet_transId = '';
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.getOrder(this.booking_id);
      }

      _createClass(CancelPage, [{
        key: "getOrder",
        value: function getOrder(id) {
          var _this = this;

          console.log(id);
          this.api.getBookingById(id).then(function (data) {
            console.log(data);
            _this.order_detail = data[0];

            if (_this.order_detail.coupon_code != '') {
              _this.coupon_code = _this.order_detail.coupon_code;
              _this.discount_amount = _this.order_detail.discount_amount;
              console.log('discount_amount', _this.discount_amount);

              _this.getUsedCoupon(_this.coupon_code);

              if (_this.discount_amount == 0) {
                _this.getWalletTransactions(_this.booking_id);
              }
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "getUsedCoupon",
        value: function getUsedCoupon(couponCode) {
          var _this2 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getUsedCouponByCouponCode(uid, couponCode).then(function (data) {
            if (data) {
              console.log('coupon_code', data);
              _this2.coupon_details = data[0];
              _this2.used_couponId = _this2.coupon_details.id;
              _this2.used_coupon = _this2.coupon_details.used_coupon - 1;
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "coupon",
        value: function coupon() {
          var _this3 = this;

          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD hh:mm:ss A");
          var params = {
            id: this.used_couponId,
            used_coupon: this.used_coupon,
            createdOn: createdAt
          };
          this.api.addUsedCoupon(this.used_couponId.toString(), params).then(function (data) {
            console.log(data);
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this3.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "getWalletTransactions",
        value: function getWalletTransactions(booking_id) {
          var _this4 = this;

          var uid = sessionStorage.getItem('uid');
          this.api.getWalletTransactionsByBooking(uid, booking_id).then(function (data) {
            if (data) {
              console.log('booking_id', data);
              _this4.wallet_details = data[0];
              _this4.wallet_transId = _this4.wallet_details.id;
            }
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "updateWalletTransactions",
        value: function updateWalletTransactions() {
          var _this5 = this;

          var date = new Date();
          var createdAt = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD hh:mm:ss A");
          var params = {
            id: this.wallet_transId,
            status: 'cancel',
            createdAt: createdAt
          };
          this.api.addWalletTransaction(this.wallet_transId.toString(), params).then(function (data) {
            console.log(data);
          }).catch(function (err) {
            if (err) {
              console.log(err);

              _this5.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.api.remarks().then(function (data) {
            _this6.reasons = data;
            console.log(_this6.reasons);
          }).catch(function (error) {
            console.log(error);
          });
          var uid = sessionStorage.getItem('uid');
          this.api.getMyProfile(uid).then(function (data) {
            console.log('my profile', data);

            if (data) {
              console.log(data);
              _this6.phone = data.phone;
              _this6.name = data.name;
              _this6.email = data.email;
              _this6.token = data.fcm_token;

              if (_this6.name == undefined) {
                _this6.email = '';
              } else {
                console.log('trigger else');
              }
            }
          }, function (error) {
            console.log(error);
          }).catch(function (error) {
            console.log(error);
          });
        }
      }, {
        key: "select",
        value: function select(id, text) {
          this.reason = id;
          this.reason_text = text;
          this.isEnabled = true;
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this7 = this;

          this.util.show('Please wait....');
          var date = new Date();
          var updatedAt = moment__WEBPACK_IMPORTED_MODULE_6__(date).format("YYYY-MM-DD hh:mm:ss A");
          var param = {
            status: 7,
            updatedAt: updatedAt,
            reason: this.reason,
            remark: this.comment
          };
          this.api.updateBooking(this.booking_id, param).then(function (data) {
            _this7.util.publishOrderStatus('true');

            _this7.util.hide();

            _this7.sendCancelOrderSMS();

            if (_this7.coupon_code != '') {
              _this7.coupon();
            }

            if (_this7.wallet_transId != '') {
              _this7.updateWalletTransactions();
            }

            _this7.util.showToast('Your booking cancelled successfully', 'primary', 'bottom'); //this.navCtrl.back();


            _this7.router.navigate(['/bookings']);
          }).catch(function (err) {
            if (err) {
              _this7.util.hide();

              console.log(err);

              _this7.util.showToast("".concat(err), 'danger', 'bottom');
            }
          });
        }
      }, {
        key: "sendCancelOrderSMS",
        value: function sendCancelOrderSMS() {
          var url = 'https://demo.orgmachine.com/way2lab_sms/cancel_order.php?orderid=' + this.booking_id + '&mobile=' + this.phone + '&name=' + this.name;
          console.log(url);
          this.api.sendSms(url).subscribe(function (data) {
            console.log(data);
          }, function (error) {
            // this.util.hide();
            console.log('err', error);
          });
        }
      }]);

      return CancelPage;
    }();

    CancelPage.ctorParameters = function () {
      return [{
        type: src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }];
    };

    CancelPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cancel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cancel.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/cancel/cancel.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cancel.page.scss */
      "./src/app/pages/cancel/cancel.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_apis_service__WEBPACK_IMPORTED_MODULE_2__["ApisService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])], CancelPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-cancel-cancel-module-es5.js.map