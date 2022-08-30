import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { ApisService } from 'src/app/services/apis.service';
import { UtilService } from 'src/app/services/util.service';
let FaqPage = class FaqPage {
    constructor(api, util) {
        this.api = api;
        this.util = util;
        this.api.getSettings().then(data => {
            this.settings = data[0];
            this.faqs = this.settings.faqs;
        }).catch(error => {
            console.log(error);
        });
    }
    ngOnInit() {
    }
};
FaqPage = __decorate([
    Component({
        selector: 'app-faq',
        templateUrl: './faq.page.html',
        styleUrls: ['./faq.page.scss'],
    }),
    __metadata("design:paramtypes", [ApisService,
        UtilService])
], FaqPage);
export { FaqPage };
//# sourceMappingURL=faq.page.js.map