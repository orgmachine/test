import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { NavController, ModalController } from '@ionic/angular';
import { AddAddressPage } from '../add-address/add-address.page';
let ChooseAddressPage = class ChooseAddressPage {
    constructor(router, api, util, navCtrl, route, modalController) {
        this.router = router;
        this.api = api;
        this.util = util;
        this.navCtrl = navCtrl;
        this.route = route;
        this.modalController = modalController;
        this.myaddress = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(data => {
            console.log(data);
            if (data && data.from) {
                this.data = data;
                this.from = data.from;
            }
        });
    }
    getAddress() {
        this.api.getMyAddress(this.id).then((data) => {
            if (data && data.length) {
                this.myaddress = data;
                console.log(this.myaddress);
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    ionViewWillEnter() {
        this.id = localStorage.getItem('uid');
        this.getAddress();
        // this.api.checkAuth().then((data: any) => {
        //   console.log(data)
        //   if (data) {
        //     this.id = data.uid;
        //     this.getAddress();
        //   }
        // });
    }
    addNew() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: AddAddressPage,
                componentProps: {
                    "modalTitle": "Product"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.ionViewWillEnter();
            });
            return yield modal.present();
        });
    }
    selectAddress() {
        const selecte = this.myaddress.filter(x => x.id === this.selectedAddress);
        const item = selecte[0];
        console.log(item);
        const address = {
            address: item.society + ' ' + item.appartment + ' ' + item.flat + ' ' + item.pincode,
            id: item.id,
            society_name: item.society,
            societyId: item.societyId,
        };
        console.log(address);
        localStorage.setItem('deliveryAddress', JSON.stringify(address));
        if (this.from === 'subscription') {
            let navigationExtras = {
                queryParams: this.data
            };
            this.router.navigate(['checkout'], navigationExtras);
        }
        else if (this.from === 'order') {
            let param = {
                items_price: this.data.items_price,
                from: 'order'
            };
            console.log(param);
            let navigationExtras = {
                queryParams: param
            };
            console.log(item);
            this.router.navigate(['order-checkout'], navigationExtras);
        }
    }
};
ChooseAddressPage = __decorate([
    Component({
        selector: 'app-choose-address',
        templateUrl: './choose-address.page.html',
        styleUrls: ['./choose-address.page.scss'],
    }),
    __metadata("design:paramtypes", [Router,
        ApisService,
        UtilService,
        NavController,
        ActivatedRoute,
        ModalController])
], ChooseAddressPage);
export { ChooseAddressPage };
//# sourceMappingURL=choose-address.page.js.map