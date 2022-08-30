import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HistoryDetailPage } from './history-detail.page';
const routes = [
    {
        path: '',
        component: HistoryDetailPage
    }
];
let HistoryDetailPageRoutingModule = class HistoryDetailPageRoutingModule {
};
HistoryDetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HistoryDetailPageRoutingModule);
export { HistoryDetailPageRoutingModule };
//# sourceMappingURL=history-detail-routing.module.js.map