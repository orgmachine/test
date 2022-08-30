import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductsDetailsPage } from './products-details.page';
const routes = [
    {
        path: '',
        component: ProductsDetailsPage
    }
];
let ProductsDetailsPageRoutingModule = class ProductsDetailsPageRoutingModule {
};
ProductsDetailsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ProductsDetailsPageRoutingModule);
export { ProductsDetailsPageRoutingModule };
//# sourceMappingURL=products-details-routing.module.js.map