import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MembersPage } from './members.page';
const routes = [
    {
        path: '',
        component: MembersPage
    }
];
let MembersPageRoutingModule = class MembersPageRoutingModule {
};
MembersPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MembersPageRoutingModule);
export { MembersPageRoutingModule };
//# sourceMappingURL=members-routing.module.js.map