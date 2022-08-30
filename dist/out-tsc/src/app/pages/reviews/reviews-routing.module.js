import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReviewsPage } from './reviews.page';
const routes = [
    {
        path: '',
        component: ReviewsPage
    }
];
let ReviewsPageRoutingModule = class ReviewsPageRoutingModule {
};
ReviewsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ReviewsPageRoutingModule);
export { ReviewsPageRoutingModule };
//# sourceMappingURL=reviews-routing.module.js.map