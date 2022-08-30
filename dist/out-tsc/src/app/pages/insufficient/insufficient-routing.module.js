import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InsufficientPage } from './insufficient.page';
const routes = [
    {
        path: '',
        component: InsufficientPage
    }
];
let InsufficientPageRoutingModule = class InsufficientPageRoutingModule {
};
InsufficientPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], InsufficientPageRoutingModule);
export { InsufficientPageRoutingModule };
//# sourceMappingURL=insufficient-routing.module.js.map