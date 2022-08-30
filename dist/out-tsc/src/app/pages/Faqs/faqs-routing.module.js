import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqsPage } from './faqs.page';
const routes = [
    {
        path: '',
        component: FaqsPage
    }
];
let FaqsPageRoutingModule = class FaqsPageRoutingModule {
};
FaqsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FaqsPageRoutingModule);
export { FaqsPageRoutingModule };
//# sourceMappingURL=faqs-routing.module.js.map