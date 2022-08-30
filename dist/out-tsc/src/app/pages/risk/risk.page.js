import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { FormBuilder } from "@angular/forms";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let RiskPage = class RiskPage {
    constructor(modalController, navCtrl, formBuilder, api, util) {
        this.modalController = modalController;
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.risks = [];
    }
    ionViewWillEnter() {
        this.api.getHealthRisk().then(data => {
            // console.log(data);
            this.risks = data;
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
RiskPage = __decorate([
    Component({
        selector: 'app-app-risk',
        templateUrl: './risk.page.html',
        styleUrls: ['./risk.page.scss'],
    }),
    __metadata("design:paramtypes", [ModalController,
        NavController,
        FormBuilder,
        ApisService,
        UtilService])
], RiskPage);
export { RiskPage };
//# sourceMappingURL=risk.page.js.map