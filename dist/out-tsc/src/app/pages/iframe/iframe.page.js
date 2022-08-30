import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
let IframePage = class IframePage {
    constructor(route, router, alertCtrl, domSanitizer) {
        this.route = route;
        this.router = router;
        this.alertCtrl = alertCtrl;
        this.domSanitizer = domSanitizer;
        this.route.queryParams.subscribe(data => {
            this.report_data = JSON.parse(data.value);
            this.report_url = this.report_data.doc;
            this.report_name = this.report_data.productname;
            console.log(this.report_url);
        });
    }
    getUrl(url) {
        var report_url = url;
        return this.domSanitizer.bypassSecurityTrustResourceUrl(report_url);
    }
};
IframePage = __decorate([
    Component({
        selector: 'app-iframe',
        templateUrl: './iframe.page.html',
        styleUrls: ['./iframe.page.scss'],
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        Router,
        AlertController,
        DomSanitizer])
], IframePage);
export { IframePage };
//# sourceMappingURL=iframe.page.js.map