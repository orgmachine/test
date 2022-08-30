import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SummaryPage } from './summary.page';
const routes = [
    {
        path: '',
        component: SummaryPage
    }
];
let SummaryPageRoutingModule = class SummaryPageRoutingModule {
};
SummaryPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SummaryPageRoutingModule);
export { SummaryPageRoutingModule };
//# sourceMappingURL=summary-routing.module.js.map