import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PaymentSecurityPage } from './payment-security.page';
const routes = [
    {
        path: '',
        component: PaymentSecurityPage
    }
];
let PaymentSecurityPageRoutingModule = class PaymentSecurityPageRoutingModule {
};
PaymentSecurityPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PaymentSecurityPageRoutingModule);
export { PaymentSecurityPageRoutingModule };
//# sourceMappingURL=payment-security-routing.module.js.map