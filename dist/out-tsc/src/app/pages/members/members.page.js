import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { UpdateComponent } from 'src/app/components/update/update.component';
let MembersPage = class MembersPage {
    constructor(route, router, api, util, alertCtrl, modalController, menu) {
        this.route = route;
        this.router = router;
        this.api = api;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.menu = menu;
        this.members = [];
        this.haveItems = false;
        this.dues = [];
        this.segmentModel = "due";
        // this.menu.enable(false);
    }
    ionViewWillEnter() {
        const uid = localStorage.getItem('uid');
        this.api.getMemberByUId(uid).then((info) => {
            console.log(info);
            this.members = info;
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    openModal() {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.setItem('routeFrom', 'add');
            const modal = yield this.modalController.create({
                component: UpdateComponent,
                cssClass: 'update-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.ionViewWillEnter();
            });
            return yield modal.present();
        });
    }
    edit(id) {
        return __awaiter(this, void 0, void 0, function* () {
            localStorage.setItem('memberid', id);
            localStorage.setItem('routeFrom', 'edit');
            const modal = yield this.modalController.create({
                component: UpdateComponent,
                cssClass: 'update-modal-css',
            });
            modal.onDidDismiss().then((dataReturned) => {
                this.ionViewWillEnter();
            });
            return yield modal.present();
        });
    }
    delete(id) {
        const uid = localStorage.getItem('uid');
        this.api.deleteMember(uid, id).then((data) => {
            console.log(data);
            this.members = [];
            this.ionViewWillEnter();
            this.util.showToast("Patient Deleted Successfully", 'primary', 'bottom');
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
};
MembersPage = __decorate([
    Component({
        selector: 'app-members',
        templateUrl: './members.page.html',
        styleUrls: ['./members.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        ApisService,
        UtilService,
        AlertController,
        ModalController,
        MenuController])
], MembersPage);
export { MembersPage };
//# sourceMappingURL=members.page.js.map