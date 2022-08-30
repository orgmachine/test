import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { AlertController, NavController, ModalController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';
let OrderDetailPage = class OrderDetailPage {
    constructor(route, api, router, util, alertCtrl, navCtrl, callNumber, modalController) {
        this.route = route;
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.myVaccations = [];
        this.dateArray = [];
        this.vaccationDates = [];
        this.isView = false;
        this.newVacDate = [];
        this.price_attriutes = [];
        this.deliveries = [];
        this.showPay = false;
        this.payable_amount = 0;
        this.items = [];
        this.myaddress = [];
        var date = new Date();
        this.current_date = moment(date).format("DD-MM-YYYY");
        this.order_id = localStorage.getItem('order-id');
        this.getOrder(this.order_id);
        //   this.route.queryParams.subscribe(data => { 
        //     console.log(data)
        //   this.order_id = data;
        //   console.log(this.order_id)
        //   this.getOrder(this.order_id)
        // });
    }
    getOrder(id) {
        console.log(id);
        this.api.getOrderById(id).then(data => {
            console.log(data);
            this.order_detail = data[0];
            this.recurring = this.order_detail.recurring;
            this.order_date = this.order_detail.createdOn;
            this.order_id = this.order_detail.id;
            this.order_payment_type = this.order_detail.payment_type;
            this.order_total_price = this.order_detail.total_price;
            this.status = this.order_detail.status;
            this.addressId = this.order_detail.address;
            this.coupon = this.order_detail.coupon;
            this.discount = this.order_detail.promotion;
            this.items = JSON.parse(localStorage.getItem('order'));
            console.log(this.status);
            this.getAddress();
            this.mobile = localStorage.getItem('mobile');
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
        this.api.getSettings().then(data => {
            this.settings = data[0];
            localStorage.setItem('contact_phone', this.settings.contact_phone);
        }).catch(error => {
            console.log(error);
        });
    }
    write(data) {
        this.router.navigate(['rating'], {
            queryParams: {
                value: JSON.stringify(data),
                order: this.order_id
            }
        });
    }
    getAddress() {
        const uid = localStorage.getItem('uid');
        this.api.getMyAddress(uid).then((data) => {
            if (data && data.length) {
                this.myaddress = data;
                console.log(this.myaddress);
                for (let x of this.myaddress) {
                    if (x.id == this.addressId) {
                        this.address = x;
                        console.log(this.address);
                        this.address_name = x.name;
                        this.address_email = x.email;
                        this.completeAddress = x.society + ' ' + x.appartment + ' ' + x.flat + ' ' + x.pincode;
                    }
                }
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    // async cancel(id){
    //   const alert = await this.alertCtrl.create({
    //     // cssClass: 'scheduleCss',
    //     header: 'Cancel Order',
    //     backdropDismiss: true, 
    //     message: '<strong>Are you sure you want to cancel your order?</strong>!!!',
    //     mode: 'ios',
    //     buttons: [
    //       {
    //         text: 'No',
    //         role: 'cancel',
    //         cssClass: 'secondary',
    //         handler: (blah) => {
    //           console.log('Confirm Cancel: blah');
    //         }
    //       }, {
    //         text: 'Yes',
    //         handler: () => {
    //           this.util.show('Please wait....')
    //           const date = new Date();
    //           const updatedAt = moment(date).format("YYYY-MM-DD hh:mm:ss A")
    //           let param = {
    //             status: 'cancelled',
    //             updatedAt: updatedAt
    //           }
    //           this.api.updateOrderStatus(id,param).then((data) => {
    //             this.util.publishOrderStatus('true');
    //             this.status = 'cancelled';
    //             this.util.hide();
    //             this.util.showToast('Your order cancelled successfully', 'primary', 'bottom');
    //            }).catch(err => {
    //             if (err) {
    //               this.util.hide();
    //               console.log(err);
    //               this.util.showToast(`${err}`, 'danger', 'bottom');
    //             }
    //           });
    //         }
    //       }
    //     ]
    //   });
    //   await alert.present();
    // }
    cancel(id) {
        let navigationExtras = { state: { order_id: id } };
        this.router.navigate(['/cancel'], navigationExtras);
    }
    call() {
        return __awaiter(this, void 0, void 0, function* () {
            let mobile = localStorage.getItem('contact_phone');
            let alert = yield this.alertCtrl.create({
                header: 'Confirm',
                message: '<strong>Are you sure you want to call Aryavrat Agro</strong>',
                mode: 'ios',
                buttons: [
                    {
                        text: 'No',
                        cssClass: 'exit-button',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    },
                    {
                        text: 'Yes',
                        cssClass: 'login-button',
                        handler: () => {
                            let number = mobile;
                            try {
                                this.callNumber.callNumber(number, true);
                                console.log('Opened dialer');
                            }
                            catch (e) {
                                console.error(e || 'Error in launching dialer');
                            }
                        }
                    }
                ]
            });
            alert.present();
        });
    }
};
OrderDetailPage = __decorate([
    Component({
        selector: 'app-order-detail',
        templateUrl: './order-detail.page.html',
        styleUrls: ['./order-detail.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        Router,
        UtilService,
        AlertController,
        NavController,
        CallNumber,
        ModalController])
], OrderDetailPage);
export { OrderDetailPage };
//# sourceMappingURL=order-detail.page.js.map