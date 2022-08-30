import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgotPage } from './forgot.page';
const routes = [
    {
        path: '',
        component: ForgotPage
    }
];
let ForgotPageRoutingModule = class ForgotPageRoutingModule {
};
ForgotPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ForgotPageRoutingModule);
export { ForgotPageRoutingModule };
//# sourceMappingURL=forgot-routing.module.js.map