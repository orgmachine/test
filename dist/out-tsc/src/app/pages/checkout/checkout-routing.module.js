import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CheckoutPage } from './checkout.page';
const routes = [
    {
        path: '',
        component: CheckoutPage
    }
];
let CheckoutPageRoutingModule = class CheckoutPageRoutingModule {
};
CheckoutPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CheckoutPageRoutingModule);
export { CheckoutPageRoutingModule };
//# sourceMappingURL=checkout-routing.module.js.map