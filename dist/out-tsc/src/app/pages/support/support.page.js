import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, ActionSheetController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase';
import * as moment from 'moment';
let SupportPage = class SupportPage {
    constructor(route, router, alertCtrl, api, util, camera, formBuilder, actionSheetController, menu) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.api = api;
        this.util = util;
        this.camera = camera;
        this.formBuilder = formBuilder;
        this.actionSheetController = actionSheetController;
        this.menu = menu;
        this.customAlertOptions = {
            header: 'Select an Issue',
            translucent: true
        };
        this.isAttach = false;
        this.showInput = true;
        this.issues = [
            { id: 1, title: "Related to Lab Test Booking" },
            { id: 2, title: "Related to Sample Collection" },
            { id: 3, title: "Related to Payments" },
            { id: 4, title: "Related to Website" },
            { id: 5, title: "Others" }
        ];
        this.menu.enable(false);
        this.supportForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern('[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})')]],
            select: ['', [Validators.required]],
            reference: ['', [Validators.required]],
            remark: ['', [Validators.required]],
        });
    }
    checkId(reason) {
        console.log(reason);
        this.reason = reason;
        if (reason == 'Others') {
            this.showInput = false;
        }
    }
    ngOnInit() {
        const uid = localStorage.getItem('uid');
        this.api.getMyProfile(uid).then((info) => {
            console.log(info);
            if (info != undefined) {
                this.user_email = info.email;
                this.token = info.fcm_token;
                console.log(this.token);
            }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    openCamera() {
        return __awaiter(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetController.create({
                header: 'Choose from',
                buttons: [{
                        text: 'Gallery',
                        icon: 'images',
                        handler: () => {
                            this.opemCamera('gallery');
                        }
                    }, {
                        text: 'Camera',
                        icon: 'camera',
                        handler: () => {
                            this.opemCamera('camera');
                        }
                    }, {
                        text: 'Cancel',
                        icon: 'close',
                        role: 'cancel',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    opemCamera(type) {
        const options = {
            quality: 100,
            targetHeight: 700,
            targetWidth: 700,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: type === 'camera' ? 1 : 0,
            saveToPhotoAlbum: false,
            correctOrientation: false
        };
        this.camera.getPicture(options).then((imageData) => {
            const base64Image = 'data:image/jpeg;base64,' + imageData;
            // this.image = base64Image;
            this.util.show();
            const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
            firebase.storage().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
                .putString(base64Image, 'data_url').then((snapshot) => {
                this.util.hide();
                snapshot.ref.getDownloadURL().then((url) => {
                    console.log('url uploaded', url);
                    this.isAttach = true;
                    this.Attachments = url;
                });
            }, error => {
                this.util.hide();
                console.log(error);
            }).catch((error) => {
                console.log(error);
                this.util.hide();
            });
        }, (err) => {
            this.util.hide();
        });
    }
    report() {
        if (this.Attachments == undefined) {
            this.Attachments = '';
        }
        if (this.reference_id == undefined) {
            this.reference_id = "";
        }
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            userid: uid,
            createdAt: created,
            id: id.toString(),
            image: this.Attachments,
            reason: this.reason,
            query: this.remark,
            status: 0,
            reference_id: this.reference_id
        };
        this.api.addSupport(id.toString(), param).then((userData) => {
            let navigationExtras = { state: { incident_id: id.toString() } };
            this.sendNotification(id);
            this.router.navigate(['/tabs/tab1'], navigationExtras);
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    sendNotification(id) {
        let title = 'Support ticket confirmation';
        let msg = 'This is to inform you that your customer support ticket ' + id + ' has been received. We will be in touch shortly. Thank you.';
        this.api.sendSupportNotification(title, msg, this.token).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
    viewList() {
        this.router.navigate(['support-list']);
    }
};
SupportPage = __decorate([
    Component({
        selector: 'app-support',
        templateUrl: './support.page.html',
        styleUrls: ['./support.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        ApisService,
        UtilService,
        Camera,
        FormBuilder,
        ActionSheetController,
        MenuController])
], SupportPage);
export { SupportPage };
//# sourceMappingURL=support.page.js.map