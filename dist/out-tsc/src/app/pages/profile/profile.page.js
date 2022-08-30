import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { ActionSheetController, ModalController, MenuController } from "@ionic/angular";
import { ViewerModalComponent } from "ngx-ionic-image-viewer";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from "src/app/services/util.service";
import { Router } from '@angular/router';
let ProfilePage = class ProfilePage {
    constructor(camera, sheetCtrl, api, util, router, modalController, menu) {
        this.camera = camera;
        this.sheetCtrl = sheetCtrl;
        this.api = api;
        this.util = util;
        this.router = router;
        this.modalController = modalController;
        this.menu = menu;
        this.image = "../../../assets/image/Ellipse 14.png";
        this.util.publishCityList('cities');
        this.menu.enable(false);
    }
    ngOnInit() { }
    ionViewWillEnter() {
        const uid = localStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then((data) => {
            this.profile = data;
            console.log(this.profile);
            this.imageUrl = this.profile.imagePath;
        }, error => {
            console.log(error);
        }).catch(error => {
            console.log(error);
        });
    }
    openViewer() {
        return __awaiter(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: ViewerModalComponent,
                componentProps: {
                    src: this.profile.imagePath + this.profile.image,
                },
                cssClass: "ion-img-viewer",
                keyboardClose: true,
                showBackdrop: true,
            });
            return yield modal.present();
        });
    }
    profilego() {
        this.router.navigate(['edit-profile']);
    }
};
ProfilePage = __decorate([
    Component({
        selector: "app-profile",
        templateUrl: "./profile.page.html",
        styleUrls: ["./profile.page.scss"],
    }),
    __metadata("design:paramtypes", [Camera,
        ActionSheetController,
        ApisService,
        UtilService,
        Router,
        ModalController,
        MenuController])
], ProfilePage);
export { ProfilePage };
//# sourceMappingURL=profile.page.js.map