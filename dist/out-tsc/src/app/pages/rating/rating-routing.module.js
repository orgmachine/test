import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RatingPage } from './rating.page';
const routes = [
    {
        path: '',
        component: RatingPage
    }
];
let RatingPageRoutingModule = class RatingPageRoutingModule {
};
RatingPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], RatingPageRoutingModule);
export { RatingPageRoutingModule };
//# sourceMappingURL=rating-routing.module.js.map