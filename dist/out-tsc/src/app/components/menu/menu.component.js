import { __awaiter, __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from "@angular/forms";
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
import { ModalController } from '@ionic/angular';
import * as moment from 'moment';
let MenuComponent = class MenuComponent {
    constructor(formBuilder, api, util, modalController) {
        this.formBuilder = formBuilder;
        this.api = api;
        this.util = util;
        this.modalController = modalController;
        this.cities = [];
        console.log(localStorage.getItem('current_state'));
        this.supportForm = this.formBuilder.group({
            phone: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
            name: ['', [Validators.required]],
            city: ['', [Validators.required]]
        });
    }
    ngOnInit() {
        let stateid = localStorage.getItem('state_id');
        this.api.getCitiesByStateId(stateid).then(data => {
            console.log(data);
            this.cities = data;
        }).catch(error => {
            console.log(error);
        });
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.modalController.dismiss();
        });
    }
    submit() {
        this.util.show('Please wait....');
        const date = new Date();
        const created = moment(date).format("YYYY-MM-DD hh:mm:ss A");
        const id = Math.floor(100000000 + Math.random() * 900000000);
        const param = {
            createdAt: created,
            id: id.toString(),
            phone: this.phone,
            name: this.name,
            city: this.city,
            status: 0,
        };
        this.api.addQuery(id.toString(), param).then((userData) => {
            this.util.hide();
            this.close();
            this.sendSms();
            this.util.showToast('We have recived your call request. We will repsond within 24 hour', 'primary', 'top');
        }).catch(err => {
            if (err) {
                this.util.hide();
                console.log(err);
                this.util.showToast(`${err}`, 'danger', 'bottom');
            }
        });
    }
    sendSms() {
        let url = 'http://demo.orgmachine.com/way2lab_sms/callback.php?mobile=' + this.phone + '&name=' + this.name;
        console.log(url);
        this.api.sendSms(url).subscribe((data) => {
            console.log(data);
        }, error => {
            // this.util.hide();
            console.log('err', error);
        });
    }
};
MenuComponent = __decorate([
    Component({
        selector: 'app-menu',
        templateUrl: './menu.component.html',
        styleUrls: ['./menu.component.scss'],
    }),
    __metadata("design:paramtypes", [FormBuilder,
        ApisService,
        UtilService,
        ModalController])
], MenuComponent);
export { MenuComponent };
//# sourceMappingURL=menu.component.js.map