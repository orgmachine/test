import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HealthPackagesPage } from './health-packages.page';
const routes = [
    {
        path: '',
        component: HealthPackagesPage
    }
];
let HealthPackagesPageRoutingModule = class HealthPackagesPageRoutingModule {
};
HealthPackagesPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HealthPackagesPageRoutingModule);
export { HealthPackagesPageRoutingModule };
//# sourceMappingURL=health-packages-routing.module.js.map