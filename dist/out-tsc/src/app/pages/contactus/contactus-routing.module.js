import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactUsPage } from './contactus.page';
const routes = [
    {
        path: '',
        component: ContactUsPage
    }
];
let ContactUsPageRoutingModule = class ContactUsPageRoutingModule {
};
ContactUsPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ContactUsPageRoutingModule);
export { ContactUsPageRoutingModule };
//# sourceMappingURL=contactus-routing.module.js.map