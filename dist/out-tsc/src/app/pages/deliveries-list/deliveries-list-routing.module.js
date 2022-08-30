import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DeliveriesListPage } from './deliveries-list.page';
const routes = [
    {
        path: '',
        component: DeliveriesListPage
    }
];
let DeliveriesListPageRoutingModule = class DeliveriesListPageRoutingModule {
};
DeliveriesListPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], DeliveriesListPageRoutingModule);
export { DeliveriesListPageRoutingModule };
//# sourceMappingURL=deliveries-list-routing.module.js.map