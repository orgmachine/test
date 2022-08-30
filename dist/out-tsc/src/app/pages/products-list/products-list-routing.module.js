import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsListPage } from './products-list.page';
const routes = [
    {
        path: '',
        component: ProductsListPage
    }
];
let ProductsListPageRoutingModule = class ProductsListPageRoutingModule {
};
ProductsListPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductsListPageRoutingModule);
export { ProductsListPageRoutingModule };
//# sourceMappingURL=products-list-routing.module.js.map