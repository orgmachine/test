import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ChooseAddressPage } from './choose-address.page';
const routes = [
    {
        path: '',
        component: ChooseAddressPage
    }
];
let ChooseAddressPageRoutingModule = class ChooseAddressPageRoutingModule {
};
ChooseAddressPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], ChooseAddressPageRoutingModule);
export { ChooseAddressPageRoutingModule };
//# sourceMappingURL=choose-address-routing.module.js.map