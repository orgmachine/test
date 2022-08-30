import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactPage } from './contact.page';
const routes = [
    {
        path: '',
        component: ContactPage
    }
];
let ContactPageRoutingModule = class ContactPageRoutingModule {
};
ContactPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ContactPageRoutingModule);
export { ContactPageRoutingModule };
//# sourceMappingURL=contact-routing.module.js.map