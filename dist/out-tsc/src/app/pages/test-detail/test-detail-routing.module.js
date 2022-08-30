import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestDetailPage } from './test-detail.page';
const routes = [
    {
        path: '',
        component: TestDetailPage
    }
];
let TestDetailPageRoutingModule = class TestDetailPageRoutingModule {
};
TestDetailPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TestDetailPageRoutingModule);
export { TestDetailPageRoutingModule };
//# sourceMappingURL=test-detail-routing.module.js.map