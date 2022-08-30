import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CreateSubscriptionPage } from './create-subscription.page';
const routes = [
    {
        path: '',
        component: CreateSubscriptionPage
    }
];
let CreateSubscriptionPageRoutingModule = class CreateSubscriptionPageRoutingModule {
};
CreateSubscriptionPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CreateSubscriptionPageRoutingModule);
export { CreateSubscriptionPageRoutingModule };
//# sourceMappingURL=create-subscription-routing.module.js.map