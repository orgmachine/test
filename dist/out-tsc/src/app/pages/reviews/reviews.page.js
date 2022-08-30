import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController, AlertController, ModalController } from '@ionic/angular';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Router } from '@angular/router';
import { DatePicker } from '@ionic-native/date-picker/ngx';
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
ReviewsPage = __decorate([
    Component({
        selector: 'app-reviews',
        templateUrl: './reviews.page.html',
        styleUrls: ['./reviews.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        ApisService,
        UtilService,
        NavController,
        AlertController,
        Router,
        DatePicker,
        ModalController])
], ReviewsPage);
export { ReviewsPage };
//# sourceMappingURL=reviews.page.js.map