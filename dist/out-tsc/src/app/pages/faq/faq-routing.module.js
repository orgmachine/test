import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FaqPage } from './faq.page';
const routes = [
    {
        path: '',
        component: FaqPage
    }
];
let FaqPageRoutingModule = class FaqPageRoutingModule {
};
FaqPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], FaqPageRoutingModule);
export { FaqPageRoutingModule };
//# sourceMappingURL=faq-routing.module.js.map