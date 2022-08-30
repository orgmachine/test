import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MyWalletPage } from './my-wallet.page';
const routes = [
    {
        path: '',
        component: MyWalletPage
    }
];
let MyWalletPageRoutingModule = class MyWalletPageRoutingModule {
};
MyWalletPageRoutingModule = __decorate([
    NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule],
    })
], MyWalletPageRoutingModule);
export { MyWalletPageRoutingModule };
//# sourceMappingURL=my-wallet-routing.module.js.map