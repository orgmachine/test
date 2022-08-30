import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TermsPage } from './terms.page';
const routes = [
    {
        path: '',
        component: TermsPage
    }
];
let TermsPageRoutingModule = class TermsPageRoutingModule {
};
TermsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], TermsPageRoutingModule);
export { TermsPageRoutingModule };
//# sourceMappingURL=terms-routing.module.js.map