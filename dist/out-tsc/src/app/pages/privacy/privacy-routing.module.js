import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivacyPage } from './privacy.page';
const routes = [
    {
        path: '',
        component: PrivacyPage
    }
];
let PrivacyPageRoutingModule = class PrivacyPageRoutingModule {
};
PrivacyPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PrivacyPageRoutingModule);
export { PrivacyPageRoutingModule };
//# sourceMappingURL=privacy-routing.module.js.map