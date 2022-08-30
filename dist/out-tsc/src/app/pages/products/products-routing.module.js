import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsPage } from './products.page';
const routes = [
    {
        path: '',
        component: ProductsPage
    }
];
let ProductsPageRoutingModule = class ProductsPageRoutingModule {
};
ProductsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductsPageRoutingModule);
export { ProductsPageRoutingModule };
//# sourceMappingURL=products-routing.module.js.map