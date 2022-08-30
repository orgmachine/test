import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReportsPage } from './reports.page';
const routes = [
    {
        path: '',
        component: ReportsPage
    }
];
let ReportsPageRoutingModule = class ReportsPageRoutingModule {
};
ReportsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ReportsPageRoutingModule);
export { ReportsPageRoutingModule };
//# sourceMappingURL=reports-routing.module.js.map