import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { CallNumber } from '@ionic-native/call-number/ngx';
import * as moment from 'moment';
let BookingsPage = class BookingsPage {
    constructor(api, util, router, adb, alertCtrl, callNumber, modalController, route, menu) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.adb = adb;
        this.alertCtrl = alertCtrl;
        this.callNumber = callNumber;
        this.modalController = modalController;
        this.route = route;
        this.menu = menu;
        this.haveItems = false;
        this.myBookings = [];
        this.dummy = Array(50);
        this.start_date = '';
        this.end_date = '';
        this.maxDate = new Date();
        this.menu.enable(false);
        this.tab = -1;
        const date = new Date();
        this.today = moment(date).format("DD-MM-YYYY");
        const uid = localStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then((data) => {
            this.profile = data;
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    getClass(item) {
        if (item == 1) {
            return 'accepted';
        }
        else if (item == 0) {
            return 'pending';
        }
        else if (item == 2) {
            return 'rejected';
        }
        else if (item == 3) {
            return 'cancelled';
        }
        else if (item == 4) {
            return 'refund_initiated';
        }
        else if (item == 5) {
            return 'refund_cancelled';
        }
        else {
            return 'completed';
        }
    }
    ngOnInit() {
        // this.getMyBookings(); 
    }
    ionViewWillEnter() {
        return __awaiter(this, void 0, void 0, function* () {
            let uid = localStorage.getItem('uid');
            console.log(uid);
            yield this.api.getBookings(uid).then((data) => __awaiter(this, void 0, void 0, function* () {
                console.log(data);
                if (data && data.length) {
                    this.haveItems = true;
                    let arr = [];
                    let id = '';
                    let booking_date = '';
                    let booking_time = '';
                    let type = '';
                    let lab_name = '';
                    let lab_icon = '';
                    let lab_review = '';
                    let user_name = '';
                    let amount = '';
                    let payment_type = '';
                    let reports = [];
                    let status = '';
                    let members = [];
                    let isRate = '';
                    for (let x of data) {
                        console.log(x);
                        id = x.booking_id;
                        booking_date = x.booking_date;
                        booking_time = x.booking_time;
                        amount = x.grand_total;
                        reports = x.reports;
                        payment_type = x.payment_type;
                        status = x.status;
                        isRate = x.isRate;
                        members = x.member_id;
                        yield this.api.getSecondaryLabById(x.lab_id).then((data) => __awaiter(this, void 0, void 0, function* () {
                            console.log(data);
                            this.lab = data[0];
                            lab_name = this.lab.name;
                            lab_icon = this.lab.cover;
                            lab_review = this.lab.avg_rating;
                        })).catch(err => {
                            if (err) {
                                console.log(err);
                                this.util.showToast(`${err}`, 'danger', 'bottom');
                            }
                        });
                        arr.push({
                            id: id,
                            booking_date: booking_date,
                            booking_time: booking_time,
                            lab_name: lab_name,
                            lab_icon: lab_icon,
                            lab_review: lab_review,
                            amount: amount,
                            payment_type: payment_type,
                            reports: reports,
                            status: x.status,
                            members: members,
                            isRate: isRate
                        });
                    }
                    this.myBookings = arr;
                    console.log(this.myBookings);
                }
                this.dummy = [];
            }), error => {
                console.log(error);
            }).catch(error => {
                console.log(error);
            });
        });
    }
    showContent(item) {
        return this.tab === item;
    }
    showMilestone(item) {
        this.tab = item;
    }
    // showHide (item) {
    //   if(item != this.tab){
    //   this.tab = item;
    //   } else {
    //    this.tab = 0;
    //   }
    // };
    submit() {
        return __awaiter(this, void 0, void 0, function* () {
            let uid = localStorage.getItem('uid');
            if (this.start_date == '') {
                this.util.showToast('Please select start date', 'danger', 'bottom');
            }
            if (this.end_date == '') {
                this.util.showToast('Please select end date', 'danger', 'bottom');
            }
            if (this.start_date > this.end_date) {
                this.util.showToast('Start date can not be greater than end date', 'danger', 'bottom');
            }
            this.util.show('Please wait....');
            this.myBookings = [];
            this.api.getMyBookings(uid, this.start_date, this.end_date).then((data) => {
                console.log(data);
                if (data && data.length) {
                    this.haveItems = true;
                    this.util.hide();
                    this.myBookings = data;
                }
                else {
                    this.util.hide();
                }
                this.dummy = [];
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch(error => {
                this.util.hide();
                console.log(error);
            });
        });
    }
    goToOrderDetail(data) {
        localStorage.setItem('order', JSON.stringify(data.order));
        localStorage.setItem('order-id', data.id);
        this.router.navigate(['order-detail']);
    }
    downloadPdf(downloadLink) {
        let downloadUrl = downloadLink;
        this.toDataURL(downloadUrl, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = 'report.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    toDataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    downloadImage(downloadLink) {
        let str = downloadLink;
        const download_name = 'report.jpg';
        // console.log(download_name);
        this.DataURL(downloadLink, function (dataUrl) {
            var link = document.createElement('a');
            link.href = dataUrl;
            link.download = download_name;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        });
    }
    DataURL(url, callback) {
        var xhr = new XMLHttpRequest();
        xhr.onload = function () {
            var reader = new FileReader();
            reader.onloadend = function () {
                callback(reader.result);
            };
            reader.readAsDataURL(xhr.response);
        };
        xhr.open('GET', url);
        xhr.responseType = 'blob';
        xhr.send();
    }
    feedback(id) {
        console.log(id);
        localStorage.setItem('bookingid', id);
        this.router.navigate(['rating']);
    }
    cancel(id) {
        localStorage.setItem('bookingid', id);
        this.router.navigate(['/cancel']);
    }
};
BookingsPage = __decorate([
    Component({
        selector: 'app-bookings',
        templateUrl: './bookings.page.html',
        styleUrls: ['./bookings.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService,
        Router,
        AngularFirestore,
        AlertController,
        CallNumber,
        ModalController,
        ActivatedRoute,
        MenuController])
], BookingsPage);
export { BookingsPage };
//# sourceMappingURL=bookings.page.js.map