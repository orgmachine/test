import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CancelPage } from './cancel.page';
const routes = [
    {
        path: '',
        component: CancelPage
    }
];
let CancelPageRoutingModule = class CancelPageRoutingModule {
};
CancelPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], CancelPageRoutingModule);
export { CancelPageRoutingModule };
//# sourceMappingURL=cancel-routing.module.js.map