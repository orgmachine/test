import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CouponsPage } from './coupons.page';
const routes = [
    {
        path: '',
        component: CouponsPage
    }
];
let CouponsPageRoutingModule = class CouponsPageRoutingModule {
};
CouponsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CouponsPageRoutingModule);
export { CouponsPageRoutingModule };
//# sourceMappingURL=coupons-routing.module.js.map