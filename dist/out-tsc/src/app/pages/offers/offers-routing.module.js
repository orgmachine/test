import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OffersPage } from './offers.page';
const routes = [
    {
        path: '',
        component: OffersPage
    }
];
let OffersPageRoutingModule = class OffersPageRoutingModule {
};
OffersPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OffersPageRoutingModule);
export { OffersPageRoutingModule };
//# sourceMappingURL=offers-routing.module.js.map