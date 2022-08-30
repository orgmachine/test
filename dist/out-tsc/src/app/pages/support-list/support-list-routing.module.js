import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SupportListPage } from './support-list.page';
const routes = [
    {
        path: '',
        component: SupportListPage
    }
];
let SupportListPageRoutingModule = class SupportListPageRoutingModule {
};
SupportListPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], SupportListPageRoutingModule);
export { SupportListPageRoutingModule };
//# sourceMappingURL=support-list-routing.module.js.map