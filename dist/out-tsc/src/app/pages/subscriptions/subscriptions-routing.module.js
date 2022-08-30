import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SubscriptionsPage } from './subscriptions.page';
const routes = [
    {
        path: '',
        component: SubscriptionsPage
    }
];
let SubscriptionsPageRoutingModule = class SubscriptionsPageRoutingModule {
};
SubscriptionsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SubscriptionsPageRoutingModule);
export { SubscriptionsPageRoutingModule };
//# sourceMappingURL=subscriptions-routing.module.js.map