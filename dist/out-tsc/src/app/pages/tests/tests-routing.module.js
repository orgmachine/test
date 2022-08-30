import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TestsPage } from './tests.page';
const routes = [
    {
        path: '',
        component: TestsPage
    }
];
let TestsPageRoutingModule = class TestsPageRoutingModule {
};
TestsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TestsPageRoutingModule);
export { TestsPageRoutingModule };
//# sourceMappingURL=tests-routing.module.js.map