import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PackagesPage } from './packages.page';
const routes = [
    {
        path: '',
        component: PackagesPage
    }
];
let PackagesPageRoutingModule = class PackagesPageRoutingModule {
};
PackagesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], PackagesPageRoutingModule);
export { PackagesPageRoutingModule };
//# sourceMappingURL=packages-routing.module.js.map