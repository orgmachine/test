import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionDetailPage } from './subscription-detail.page';
const routes = [
    {
        path: '',
        component: SubscriptionDetailPage
    }
];
let SubscriptionDetailPageRoutingModule = class SubscriptionDetailPageRoutingModule {
};
SubscriptionDetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SubscriptionDetailPageRoutingModule);
export { SubscriptionDetailPageRoutingModule };
//# sourceMappingURL=subscription-detail-routing.module.js.map