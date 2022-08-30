import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ManageAddressPage } from './manage-address.page';
const routes = [
    {
        path: '',
        component: ManageAddressPage
    }
];
let ManageAddressPageRoutingModule = class ManageAddressPageRoutingModule {
};
ManageAddressPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ManageAddressPageRoutingModule);
export { ManageAddressPageRoutingModule };
//# sourceMappingURL=manage-address-routing.module.js.map