import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OrderDetailPage } from './order-detail.page';
const routes = [
    {
        path: '',
        component: OrderDetailPage
    }
];
let OrderDetailPageRoutingModule = class OrderDetailPageRoutingModule {
};
OrderDetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], OrderDetailPageRoutingModule);
export { OrderDetailPageRoutingModule };
//# sourceMappingURL=order-detail-routing.module.js.map