import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let SummaryPage = class SummaryPage {
    constructor(router, route, navCtrl, api, util) {
        this.router = router;
        this.route = route;
        this.navCtrl = navCtrl;
        this.api = api;
        this.util = util;
        this.booking_id = localStorage.getItem('bookingid');
        console.log(this.booking_id);
        this.address = localStorage.getItem('boookingaddress');
        this.getBooking(this.booking_id);
    }
    ngOnInit() {
        // this.route.queryParams.subscribe(data => {
        // 	console.log(data)
        //    if (data && data.from) {
        //      this.data = data;
        //      this.from = data.from;
        //    }
        //  });
    }
    getBooking(id) {
        this.api.getBookingById(id).then(data => {
            this.detail = data[0];
            this.getSecondaryLab(this.detail.lab_id);
        }).catch(error => {
            console.log(error);
        });
    }
    getSecondaryLab(id) {
        this.api.getSecondaryLabById(id).then(data => {
            this.lab_detail = data[0];
        }).catch(error => {
            console.log(error);
        });
    }
    bookings() {
        this.router.navigate(['/bookings']);
    }
};
SummaryPage = __decorate([
    Component({
        selector: 'app-summary',
        templateUrl: './summary.page.html',
        styleUrls: ['./summary.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        ActivatedRoute,
        NavController,
        ApisService,
        UtilService])
], SummaryPage);
export { SummaryPage };
//# sourceMappingURL=summary.page.js.map