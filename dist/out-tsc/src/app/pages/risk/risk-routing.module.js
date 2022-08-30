import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RiskPage } from './risk.page';
const routes = [
    {
        path: '',
        component: RiskPage
    }
];
let RiskPageRoutingModule = class RiskPageRoutingModule {
};
RiskPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RiskPageRoutingModule);
export { RiskPageRoutingModule };
//# sourceMappingURL=risk-routing.module.js.map