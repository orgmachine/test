import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyPlanPage } from './my-plan.page';
const routes = [
    {
        path: '',
        component: MyPlanPage
    }
];
let MyPlanPageRoutingModule = class MyPlanPageRoutingModule {
};
MyPlanPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MyPlanPageRoutingModule);
export { MyPlanPageRoutingModule };
//# sourceMappingURL=my-plan-routing.module.js.map