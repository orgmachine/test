import { __decorate, __metadata } from "tslib";
import { Component } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';
let TabsPage = class TabsPage {
    constructor(util) {
        this.util = util;
        this.isBadge = false;
        this.util.subscribeBadge().subscribe(data => {
            // if (data) {
            console.log(data);
            this.isBadge = data;
            console;
            // }
        });
    }
};
TabsPage = __decorate([
    Component({
        selector: 'app-tabs',
        templateUrl: 'tabs.page.html',
        styleUrls: ['tabs.page.scss']
    }),
    __metadata("design:paramtypes", [UtilService])
], TabsPage);
export { TabsPage };
//# sourceMappingURL=tabs.page.js.map