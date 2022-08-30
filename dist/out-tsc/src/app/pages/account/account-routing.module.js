import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AccountPage } from './account.page';
const routes = [
    {
        path: '',
        component: AccountPage
    }
];
let AccountPageRoutingModule = class AccountPageRoutingModule {
};
AccountPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AccountPageRoutingModule);
export { AccountPageRoutingModule };
//# sourceMappingURL=account-routing.module.js.map