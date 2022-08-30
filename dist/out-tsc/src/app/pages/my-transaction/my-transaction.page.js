import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let MyTransactionPage = class MyTransactionPage {
    constructor(route, router, api, util, alertCtrl, menu) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.menu = menu;
        this.transactions = [];
        this.haveItems = false;
        this.start_date = '';
        this.end_date = '';
        this.maxDate = new Date();
        this.menu.enable(false);
    }
    ionViewWillEnter() {
        this.getTransaction();
        // const uid = localStorage.getItem('uid');
        // this.api.getMyProfile(uid).then((info) => {
        //   this.user_name=info.name; 
        //   this.email = info.email;
        //   this.mobile= info.mobile;
        // }).catch(err => {
        //   if (err) {
        //     console.log(err);
        //     this.util.showToast(`${err}`, 'danger', 'bottom');
        //   }
        //  }); 
    }
    getTransaction() {
        const uid = localStorage.getItem('uid');
        this.api.getMyTransaction(uid).then(data => {
            if (data && data.length != 0) {
                this.transactions = data;
                console.log(this.transactions);
                this.haveItems = true;
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    transaction(item) {
        let navigationExtras = {
            queryParams: item
        };
        this.router.navigate(['/payment'], navigationExtras);
    }
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
            this.transactions = [];
            this.api.getTransaction(uid, this.start_date, this.end_date).then(data => {
                console.log(data);
                if (data && data.length != 0) {
                    this.transactions = data;
                    this.util.hide();
                    this.haveItems = true;
                }
                else {
                    console.log(data);
                    this.util.hide();
                }
            }).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.hide();
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        });
    }
};
MyTransactionPage = __decorate([
    Component({
        selector: 'app-my-transaction',
        templateUrl: './my-transaction.page.html',
        styleUrls: ['./my-transaction.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ApisService,
        UtilService,
        AlertController,
        MenuController])
], MyTransactionPage);
export { MyTransactionPage };
//# sourceMappingURL=my-transaction.page.js.map