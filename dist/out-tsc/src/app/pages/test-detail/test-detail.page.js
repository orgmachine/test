import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuComponent } from 'src/app/components/menu/menu.component';
import { ApisService } from 'src/app/services/apis.service';
let TestDetailPage = class TestDetailPage {
    constructor(route, router, alertCtrl, modalController, api) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.modalController = modalController;
        this.api = api;
        this.showContent1 = false;
        this.tab = -1;
    }
    showContent(item) {
        return this.tab === item;
    }
    showMilestone(item) {
        this.tab = item;
    }
    showMilestone1() {
        this.showContent1 = !this.showContent1;
    }
    ionViewWillEnter() {
        let id = localStorage.getItem('testid');
        this.api.getIndividualTestById(id).then(data => {
            this.test = data[0];
            console.log(this.test);
            let test_recommended_for = this.test.test_recommended_for;
            let recommended_age = this.test.recommended_age;
            console.log(test_recommended_for);
            this.getAgeRecomendation(recommended_age);
            this.getGenderRecomendation(test_recommended_for);
        }).catch(error => {
            console.log(error);
        });
    }
    getAgeRecomendation(id) {
        this.api.getAgeRecomendationById(id).then(data => {
            this.age_recomendation = data[0];
            console.log(this.age_recomendation);
        }).catch(error => {
            console.log(error);
        });
    }
    getGenderRecomendation(id) {
        this.api.getGenderRecomendationById(id).then(data => {
            this.gender_recomendation = data[0];
            console.log(this.gender_recomendation);
        }).catch(error => {
            console.log(error);
        });
    }
    openQuery() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: MenuComponent,
                cssClass: 'supportCss',
            });
            modal.onDidDismiss().then((dataReturned) => {
            });
            return yield modal.present();
        });
    }
};
TestDetailPage = __decorate([
    Component({
        selector: 'app-test-detail',
        templateUrl: './test-detail.page.html',
        styleUrls: ['./test-detail.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ModalController,
        ApisService])
], TestDetailPage);
export { TestDetailPage };
//# sourceMappingURL=test-detail.page.js.map