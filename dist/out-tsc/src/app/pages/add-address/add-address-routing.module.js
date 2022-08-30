import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AddAddressPage } from './add-address.page';
const routes = [
    {
        path: '',
        component: AddAddressPage
    }
];
let AddAddressPageRoutingModule = class AddAddressPageRoutingModule {
};
AddAddressPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], AddAddressPageRoutingModule);
export { AddAddressPageRoutingModule };
//# sourceMappingURL=add-address-routing.module.js.map