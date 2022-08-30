import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { Router } from "@angular/router";
import { UtilService } from 'src/app/services/util.service';
import { AlertController } from '@ionic/angular';
import * as moment from 'moment';
let ProfilePage = class ProfilePage {
    constructor(api, router, util, alertCtrl) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.alertCtrl = alertCtrl;
        this.getProfile();
        //   this.util.observProfile().subscribe(data => {
        //   this.getProfile();
        // });
    }
    ngOnInit() {
    }
    getProfile() {
        const uid = localStorage.getItem('uid');
        this.api.getMyProfile(uid).then((data) => {
            console.log('my profile', data);
            // this.dummy = [];
            // if (data && data.length) {
            console.log(data);
            this.phone = data.phone;
            this.name = data.name;
            this.email = data.email;
            console.log(this.name);
            // }
        }, error => {
            console.log(error);
            // this.dummy = [];
        }).catch(error => {
            console.log(error);
            // this.dummy = [];
        });
    }
    save() {
        console.log(this.name);
        if (this.email == undefined) {
            this.email = " ";
        }
        if (this.name == undefined) {
            this.name = " ";
            console.log(this.name);
        }
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let param = {
            modifiedOn: modifiedOn,
            uid: uid,
            name: this.name,
            phone: this.phone,
            email: this.email
        };
        console.log(param);
        this.api.updateProfile(uid, param).then((data) => {
            console.log(data);
            this.getProfile();
            this.showAlert();
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    showAlert() {
        return __awaiter(this, void 0, void 0, function* () {
            const alert = yield this.alertCtrl.create({
                cssClass: 'my-custom-class',
                header: 'Done!',
                message: '<strong>Your profile details has been updated successfully</strong>!',
                mode: 'ios',
                buttons: [
                    {
                        text: 'Okay',
                        handler: () => {
                            console.log('Confirm Okay');
                            // this.getProfile();
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
ProfilePage = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.page.html',
        styleUrls: ['./profile.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        Router,
        UtilService,
        AlertController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map