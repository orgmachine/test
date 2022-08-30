import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController, ActionSheetController, MenuController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { Camera } from '@ionic-native/camera/ngx';
import { FormBuilder, Validators } from "@angular/forms";
import * as firebase from 'firebase';
import * as moment from 'moment';
let AddPrescriptionPage = class AddPrescriptionPage {
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
        this.attachments = [];
        this.isAttach = false;
        this.showInput = true;
        this.menu.enable(false);
        this.prescriptionForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            phone: ['', [Validators.required]],
        });
    }
    ngOnInit() {
        const uid = localStorage.getItem('uid');
        console.log(uid);
        this.api.getMyProfile(uid).then((info) => {
            console.log(info);
            // if(info!=undefined) {
            this.user_name = info.name;
            this.user_mobile = info.phone;
            this.token = info.fcm_token;
            console.log(this.token);
            // }
        }).catch(err => {
            if (err) {
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    handleFileSelect(evt) {
        //this.util.show();
        var files = evt.target.files;
        var file = files[0];
        let fileName = file.name;
        const lastDot = fileName.lastIndexOf('.');
        // const file_name = fileName.substring(0, lastDot);
        const ext = fileName.substring(lastDot + 1);
        this.file_extension = ext;
        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }
    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;
        this.base64textString = btoa(binaryString);
        const base64Image = 'data:image/jpeg;base64,' + this.base64textString;
        this.image = base64Image;
        const id = localStorage.getItem('uid') + '/' + this.util.makeid(10);
        firebase.storage().ref().child(localStorage.getItem('uid')).child(btoa(id) + '.jpg')
            .putString(base64Image, 'data_url').then((snapshot) => {
            snapshot.ref.getDownloadURL().then((url) => {
                //this.util.hide();
                console.log('url uploaded', url);
                const uid = localStorage.getItem('uid');
                const date = new Date();
                const modifiedOn = moment(date).format("YYYY-MM-DD hh:mm:ss A");
                const id = Math.floor(100000000 + Math.random() * 900000000);
                this.isAttach = true;
                this.attachments.push(url);
            });
        }, error => {
            this.util.hide();
            console.log(error);
        }).catch((error) => {
            console.log(error);
            this.util.hide();
            this.util.errorToast(this.util.translate('Something went wrong'));
        });
    }
    addPrescription() {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        let userId = '/users/' + uid;
        const param = {
            userid: userId,
            uid: uid,
            createdAt: created,
            id: id.toString(),
            upload_prescription: this.attachments,
            status: 0,
        };
        this.api.addPrescription(id.toString(), param).then((userData) => {
            this.util.hide();
            this.router.navigate(['/home']);
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    removeImageAtIndex(index) {
        this.attachments.splice(index, 1);
        if (this.attachments.length == 0) {
            this.isAttach = false;
        }
    }
};
AddPrescriptionPage = __decorate([
    Component({
        selector: 'app-add-prescription',
        templateUrl: './add-prescription.page.html',
        styleUrls: ['./add-prescription.page.scss'],
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
], AddPrescriptionPage);
export { AddPrescriptionPage };
//# sourceMappingURL=add-prescription.page.js.map