import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, Validators } from "@angular/forms";
import * as moment from 'moment';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let UpdateComponent = class UpdateComponent {
    constructor(modalController, formBuilder, api, util) {
        this.modalController = modalController;
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.customAlertOptions = {
            header: 'Select Gender',
            translucent: true
        };
        this.redirectRoute = '';
        this.memberForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            dob: ['', [Validators.required]],
            gender: ['', [Validators.required]]
        });
    }
    ngOnInit() {
        this.redirectRoute = localStorage.getItem('routeFrom');
        let id = localStorage.getItem('memberid');
        console.log(this.redirectRoute);
        if (this.redirectRoute == 'edit') {
            this.api.getMemberById(id).then((info) => __awaiter(this, void 0, void 0, function* () {
                this.profile = info[0];
                console.log(this.profile);
                // name: this.profile.name;
                // dob: this.profile.dob;
                // gender: this.profile.gender;
            })).catch(err => {
                if (err) {
                    console.log(err);
                    this.util.showToast(`${err}`, 'danger', 'bottom');
                }
            });
        }
        else {
            console.log('ho');
        }
    }
    datePickerStart(ev) {
        this.age = this.calculateAge(ev.detail.value);
    }
    calculateAge(birthdate) {
        return moment().diff(birthdate, 'years');
    }
    add() {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            uid: uid,
            createdAt: created,
            id: id.toString(),
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            age: this.age
        };
        this.api.addMember(id.toString(), param).then((userData) => {
            this.util.hide();
            this.close();
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    update() {
        this.util.show('Please wait....');
        const uid = localStorage.getItem('uid');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const param = {
            name: this.name,
            dob: this.dob,
            gender: this.gender,
            age: this.age,
            updatedAt: created
        };
        this.api.addMember(this.profile.id, param).then((userData) => {
            this.util.hide();
            this.util.showToast("Patient details updated successfully", 'primary', 'bottom');
            this.close();
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
};
UpdateComponent = __decorate([
    Component({
        selector: 'app-update',
        templateUrl: './update.component.html',
        styleUrls: ['./update.component.scss'],
    }),
    __metadata("design:paramtypes", [ModalController,
        FormBuilder,
        ApisService,
        UtilService])
], UpdateComponent);
export { UpdateComponent };
//# sourceMappingURL=update.component.js.map