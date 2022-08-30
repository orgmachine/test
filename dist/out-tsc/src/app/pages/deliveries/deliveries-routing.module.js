import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeliveriesPage } from './deliveries.page';
const routes = [
    {
        path: '',
        component: DeliveriesPage
    }
];
let DeliveriesPageRoutingModule = class DeliveriesPageRoutingModule {
};
DeliveriesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DeliveriesPageRoutingModule);
export { DeliveriesPageRoutingModule };
//# sourceMappingURL=deliveries-routing.module.js.map