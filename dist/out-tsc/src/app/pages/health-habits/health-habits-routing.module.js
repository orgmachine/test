import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HealthHabitsPage } from './health-habits.page';
const routes = [
    {
        path: '',
        component: HealthHabitsPage
    }
];
let HealthHabitsPageRoutingModule = class HealthHabitsPageRoutingModule {
};
HealthHabitsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], HealthHabitsPageRoutingModule);
export { HealthHabitsPageRoutingModule };
//# sourceMappingURL=health-habits-routing.module.js.map