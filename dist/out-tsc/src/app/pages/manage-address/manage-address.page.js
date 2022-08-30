import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { ModalController, MenuController } from "@ionic/angular";
import { AddAddressPage } from 'src/app/pages/add-address/add-address.page';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let ManageAddressPage = class ManageAddressPage {
    constructor(modal, api, util, menu) {
        this.modal = modal;
        this.api = api;
        this.util = util;
        this.menu = menu;
        this.address = [];
        this.isDelete = true;
        this.menu.enable(false);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        let uid = localStorage.getItem('uid');
        this.api.getMyAddress(uid).then((data) => {
            if (data && data.length) {
                this.address = data;
                console.log(this.address);
            }
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    // async address() {
    //   const modal = await this.modal.create({
    //     component: AddAddressPage,
    //     cssClass: "manage-address",
    //   });
    //   modal.onDidDismiss().then((res) => {
    //     this.ionViewWillEnter();    });
    //   return await modal.present();
    // }
    close() {
        this.modal.dismiss();
    }
    selectAddress(item) {
        localStorage.setItem("SelectAddress", item.addr1);
        this.modal.dismiss(item);
    }
    deleteAddress(id) {
        let uid = localStorage.getItem('uid');
        this.api.getBookingsByAddressId(uid, id).then((data) => {
            console.log(data);
            if (data && data.length) {
                this.util.showToast("Address is in Use", 'danger', 'bottom');
            }
            else {
                this.api.deleteAddress(uid, id).then((data) => {
                    console.log(data);
                    this.address = [];
                    this.ionViewWillEnter();
                    this.util.showToast("Address Deleted Successfully", 'primary', 'bottom');
                }).catch(err => {
                    if (err) {
                        console.log(err);
                        this.util.showToast(`${err}`, 'danger', 'bottom');
                    }
                });
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    addNew() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: AddAddressPage,
                componentProps: {
                    "modalTitle": "Product"
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.address = [];
                this.ionViewWillEnter();
            });
            return yield modal.present();
        });
    }
    editAddress(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modal.create({
                component: AddAddressPage,
                componentProps: {
                    "modalTitle": "Manage",
                    data: data
                }
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.address = [];
                this.ionViewWillEnter();
            });
            return yield modal.present();
        });
    }
};
ManageAddressPage = __decorate([
    Component({
        selector: "app-manage-address",
        templateUrl: "./manage-address.page.html",
        styleUrls: ["./manage-address.page.scss"],
    }),
    __metadata("design:paramtypes", [ModalController,
        ApisService,
        UtilService,
        MenuController])
], ManageAddressPage);
export { ManageAddressPage };
//# sourceMappingURL=manage-address.page.js.map