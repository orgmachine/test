import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderCheckoutPage } from './order-checkout.page';
const routes = [
    {
        path: '',
        component: OrderCheckoutPage
    }
];
let OrderCheckoutPageRoutingModule = class OrderCheckoutPageRoutingModule {
};
OrderCheckoutPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OrderCheckoutPageRoutingModule);
export { OrderCheckoutPageRoutingModule };
//# sourceMappingURL=order-checkout-routing.module.js.map